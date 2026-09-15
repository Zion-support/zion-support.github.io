#!/usr/bin/env node
/**
 * filter-outreach-suppression.cjs
 *
 * Removes dead / 550-blocked mailboxes and non-prospect (tooling / newsletter /
 * no-reply) addresses from the outreach set before anything is sent, so the
 * automation stops re-mailing addresses that bounced or were never real leads.
 *
 * Inputs:
 *   lead-crm/outreach_ready_canonical.json   (recipients[] with .to / .domain)
 *   outreach_monitor/suppression_list.json   (addresses[], domains[], patterns[])
 *
 * Modes:
 *   (default)  Writes lead-crm/outreach_ready_filtered.json with suppressed
 *              recipients removed and prints a summary. Exit 0.
 *   --check    Does not write. Exits 1 if any canonical recipient is suppressed
 *              (useful as a CI / pre-send guard). Exit 0 when the set is clean.
 *
 * No network, no email sending. Pure, idempotent, safe to run repeatedly.
 */
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');
const CANONICAL = path.join(ROOT, 'lead-crm', 'outreach_ready_canonical.json');
const SUPPRESSION = path.join(ROOT, 'outreach_monitor', 'suppression_list.json');
const OUT = path.join(ROOT, 'lead-crm', 'outreach_ready_filtered.json');

function readJson(p) {
  return JSON.parse(fs.readFileSync(p, 'utf8'));
}

function normEmail(v) {
  return String(v || '').trim().toLowerCase();
}

function domainOf(rec) {
  if (rec.domain) return String(rec.domain).trim().toLowerCase();
  const at = normEmail(rec.to).split('@')[1];
  return at || '';
}

function buildMatcher(suppression) {
  const addresses = new Set(
    (suppression.addresses || []).map((a) => normEmail(a.email)).filter(Boolean)
  );
  const domains = new Set(
    (suppression.domains || [])
      .map((d) => String(d.domain || d).trim().toLowerCase())
      .filter(Boolean)
  );
  const patterns = (suppression.patterns || []).map((p) => ({
    re: new RegExp(p.regex, 'i'),
    reason: p.reason || p.type || 'pattern',
  }));

  const reasonByAddress = new Map(
    (suppression.addresses || []).map((a) => [
      normEmail(a.email),
      `${a.type || 'suppressed'}: ${a.reason || ''}`.trim(),
    ])
  );

  return function match(rec) {
    const email = normEmail(rec.to);
    if (!email) return null;
    if (addresses.has(email)) return reasonByAddress.get(email) || 'address suppressed';
    const dom = domainOf(rec);
    if (dom && domains.has(dom)) return `domain suppressed: ${dom}`;
    for (const p of patterns) {
      if (p.re.test(email)) return `pattern suppressed: ${p.reason}`;
    }
    return null;
  };
}

function main() {
  const checkMode = process.argv.includes('--check');

  for (const p of [CANONICAL, SUPPRESSION]) {
    if (!fs.existsSync(p)) {
      console.error(`filter-outreach-suppression: missing input ${path.relative(ROOT, p)}`);
      process.exit(2);
    }
  }

  const canonical = readJson(CANONICAL);
  const suppression = readJson(SUPPRESSION);
  const recipients = Array.isArray(canonical.recipients) ? canonical.recipients : [];
  const match = buildMatcher(suppression);

  const kept = [];
  const removed = [];
  for (const rec of recipients) {
    const reason = match(rec);
    if (reason) removed.push({ to: rec.to, company: rec.company || rec.company_name || '', reason });
    else kept.push(rec);
  }

  console.log(`Outreach suppression: ${recipients.length} in → ${kept.length} kept, ${removed.length} suppressed`);
  for (const r of removed) console.log(`  - ${r.to} (${r.company}) → ${r.reason}`);

  if (checkMode) {
    if (removed.length > 0) {
      console.error(`filter-outreach-suppression --check FAILED: ${removed.length} suppressed address(es) still in canonical set.`);
      process.exit(1);
    }
    console.log('filter-outreach-suppression --check OK: canonical set is clean.');
    return;
  }

  const out = {
    generatedAt: new Date().toISOString(),
    source: path.relative(ROOT, CANONICAL),
    suppressionUpdatedAt: suppression.updatedAt || null,
    keptCount: kept.length,
    suppressedCount: removed.length,
    suppressed: removed,
    recipients: kept,
  };
  fs.writeFileSync(OUT, JSON.stringify(out, null, 2) + '\n');
  console.log(`Wrote ${path.relative(ROOT, OUT)} (${kept.length} deliverable recipients).`);
}

main();
