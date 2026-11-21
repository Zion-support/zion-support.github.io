#!/usr/bin/env node
'use strict';
const fs = require('node:fs');
const path = require('node:path');
const contact = require('../public/.well-known/zion-contact.json');
const digits = contact.phoneE164.slice(1);
if (!/^\+[1-9]\d{7,14}$/.test(contact.phoneE164) || contact.whatsappUrl !== `https://wa.me/${digits}` || contact.telUrl !== `tel:${contact.phoneE164}`) throw new Error('Invalid canonical Zion contact');
const retired = ['+1 (302) 464-0950', '+1 (302) 464 0950', '+1-302-464-0950', '+1 302 464 0950', '+55 (47) 99999-9999', '+13024640950', '+5547999999999'];
function contactUrl(url) {
  if (/^tel:\+(?:13024640950|130\*{4}0950|13024640|5547999999999)$/.test(url)) return contact.telUrl;
  return url.replace(/^https:\/\/wa\.me\/(?:13024640950|5547999999999)(?=[?#]|$)/, contact.whatsappUrl);
}
function display(text) {
  // A commercial WhatsApp does not authorize changing technical access numbers.
  if (/dial[ -]?in|gateway|account[ _-]?id|credential/i.test(text)) return text;
  for (const old of retired) {
    const escaped = old.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    text = text.replace(new RegExp(escaped + '(?![0-9])', 'g'), contact.phoneDisplay);
  }
  return text;
}
function normalize(text, format = 'text') {
  // Only rendered HTML is eligible; arbitrary JSON, scripts and identifiers stay unchanged.
  if (format !== 'html') return text;
  const protectedBlocks = [];
  let result = text.replace(/<(script|style|textarea|pre|code)\b[^>]*>[\s\S]*?<\/\1\s*>/gi, block => {
    // JSON-LD telephone is an explicit contact field; all other data stays byte-identical.
    if (/^<script\b[^>]*type=["']application\/ld\+json["']/i.test(block)) {
      block = block.replace(/("telephone"\s*:\s*")([^"\r\n]*)(")/g, (all, start, value, end) => retired.includes(value) ? start + contact.phoneE164 + end : all);
    }
    const index = protectedBlocks.push(block) - 1;
    return `<!--ZION_CONTACT_PROTECTED_${index}-->`;
  });
  result = result.replace(/<a\b[^>]*>/gi, tag => tag.replace(/(\bhref\s*=\s*)(["'])([^"']*)\2/gi, (all, prefix, quote, url) => prefix + quote + contactUrl(url) + quote));
  // Only visible text, never attributes such as a customer's input placeholder.
  result = result.replace(/(^|>)([^<]+)(?=<|$)/g, (all, prefix, body) => prefix + display(body));
  return result.replace(/<!--ZION_CONTACT_PROTECTED_(\d+)-->/g, (_, index) => protectedBlocks[Number(index)]);
}
function run(root) {
  const absolute = path.resolve(root);
  if (!fs.statSync(absolute).isDirectory()) throw new Error('Artifact directory required');
  let scanned = 0, changed = 0;
  function walk(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const file = path.join(dir, entry.name);
      if (entry.isSymbolicLink()) continue;
      if (entry.isDirectory()) { if (!/^(?:backups?|logs?|history|archive)$/i.test(entry.name)) walk(file); continue; }
      if (!entry.isFile() || !/\.html?$/i.test(entry.name)) continue;
      const before = fs.readFileSync(file, 'utf8');
      const format = /\.html?$/i.test(entry.name) ? 'html' : 'text';
      const after = normalize(before, format); scanned++;
      if (after !== before) { fs.writeFileSync(file, after); changed++; }
      if (normalize(after, format) !== after) throw new Error('Contact normalization is not idempotent: ' + file);
    }
  }
  walk(absolute); return { scanned, changed, officialPhone: contact.phoneE164 };
}
module.exports = { normalize, run, contact };
if (require.main === module) {
  if (process.argv.length !== 3) throw new Error('Usage: node scripts/normalize-zion-contact.cjs <artifact-directory>');
  console.log('Zion contact verification: ' + JSON.stringify(run(process.argv[2])));
}
