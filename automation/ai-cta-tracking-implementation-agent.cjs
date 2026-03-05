#!/usr/bin/env node

/**
 * AI CTA Tracking Implementation Agent
 *
 * Reads conversion-funnel-audit-latest.json and adds data-cta-event to
 * high-priority CTAs that lack tracking. Prioritizes homepage, header, footer,
 * and contact links. No LLM required.
 *
 * Environment:
 *   DRY_RUN=1 - Log what would be applied, don't modify files
 *   MAX_FILES=10 - Max files to modify per run (default 5)
 *
 * Run: After conversion funnel audit, or as part of app evolution pipeline
 * Output: automation/reports/cta-tracking-implementation-latest.json
 */

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const REPORTS_DIR = path.join(ROOT, 'automation', 'reports');
const AUDIT_FILE = path.join(REPORTS_DIR, 'conversion-funnel-audit-latest.json');
const REPORT_FILE = path.join(REPORTS_DIR, 'cta-tracking-implementation-latest.json');
const MAX_FILES = parseInt(process.env.MAX_FILES || '5', 10);
const DRY_RUN = process.env.DRY_RUN === '1';

function log(msg) {
  const ts = new Date().toISOString();
  console.log(`[CtaTrackingImpl] ${ts} | ${msg}`);
}

function loadAudit() {
  if (!fs.existsSync(AUDIT_FILE)) return null;
  try {
    return JSON.parse(fs.readFileSync(AUDIT_FILE, 'utf8'));
  } catch (e) {
    log(`Failed to load audit: ${e.message}`);
    return null;
  }
}

function addDataCtaToFile(filePath, event) {
  const fullPath = path.join(ROOT, filePath);
  if (!fs.existsSync(fullPath)) return { applied: 0, reason: 'file_not_found' };

  let content = fs.readFileSync(fullPath, 'utf8');
  let applied = 0;

  // Pattern: href="/contact" or href="/contact#..." without data-cta-event
  const contactPattern = /(<(?:Link|a)[^>]*href=["']\/contact[^"']*["'][^>]*)(>)/gi;
  content = content.replace(contactPattern, (match, before, after) => {
    if (/data-cta-event/i.test(before)) return match;
    const eventAttr = event === 'cta_discovery' ? 'cta_discovery' : 'cta_contact';
    applied++;
    return `${before} data-cta-event="${eventAttr}" data-cta-label="${path.basename(filePath, path.extname(filePath))}"${after}`;
  });

  if (applied > 0 && !DRY_RUN) {
    fs.writeFileSync(fullPath, content);
  }
  return { applied };
}

function main() {
  fs.mkdirSync(REPORTS_DIR, { recursive: true });

  const audit = loadAudit();
  if (!audit || !audit.findings || audit.findings.length === 0) {
    log('No conversion funnel audit or no findings. Run conversion:funnel-audit first.');
    fs.writeFileSync(
      REPORT_FILE,
      JSON.stringify({ timestamp: new Date().toISOString(), status: 'no_audit', applied: 0 }, null, 2)
    );
    process.exit(0);
  }

  const priorityFiles = [
    'app/page.tsx',
    'app/components/Navigation.tsx',
    'app/components/Footer.tsx',
    'app/components/StickyMobileCTA.tsx',
    'app/contact/page.tsx',
  ];

  const byFile = new Map();
  for (const f of audit.findings) {
    if (!byFile.has(f.file)) byFile.set(f.file, []);
    byFile.get(f.file).push(f);
  }

  const toProcess = [];
  for (const file of priorityFiles) {
    const findings = byFile.get(file)?.filter((x) => !x.hasTracking) || [];
    if (findings.length > 0) toProcess.push({ file, findings });
  }

  const report = { timestamp: new Date().toISOString(), dryRun: DRY_RUN, filesModified: 0, totalApplied: 0 };
  let filesDone = 0;

  for (const { file, findings } of toProcess) {
    if (filesDone >= MAX_FILES) break;
    const event = findings.some((f) => f.event === 'cta_discovery') ? 'cta_discovery' : 'cta_contact';
    const result = addDataCtaToFile(file, event);
    if (result.applied > 0) {
      report.filesModified = (report.filesModified || 0) + 1;
      report.totalApplied = (report.totalApplied || 0) + result.applied;
      filesDone++;
      log(`${DRY_RUN ? '[DRY] Would modify' : 'Modified'} ${file}: +${result.applied} data-cta-event`);
    }
  }

  fs.writeFileSync(REPORT_FILE, JSON.stringify(report, null, 2));
  log(`Report: ${REPORT_FILE}`);
  process.exit(0);
}

main().catch((e) => {
  log(`Fatal: ${e.message}`);
  process.exit(1);
});
