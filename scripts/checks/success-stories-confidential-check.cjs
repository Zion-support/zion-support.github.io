#!/usr/bin/env node
/**
 * Success-story and case pages must not leak contract prices, POs,
 * account codes, or named asset lists. SKU prices belong on product pages.
 */
const fs = require("fs");
const path = require("path");

const files = [
  "public/success-stories/index.html",
  "success-stories/index.html",
  "public/case-studies/index.html",
  "case-studies/index.html",
];

const forbidden = [
  /OCB\s*4700350631/i,
  /CW2629606/i,
  /CRW2627654/i,
  /\$3,?175/,
  /\$12,?700/,
  /07\/10\/2026/,
  /Buffalo LS441D/i,
  /MSA2060/,
  /Qnap TS-431P/i,
  /buy\.stripe\.com\/8x2eVe6Fm71qfATaupcMM1d/,
];

let failed = false;
for (const rel of files) {
  const full = path.join(__dirname, "..", "..", rel);
  if (!fs.existsSync(full)) continue;
  const html = fs.readFileSync(full, "utf8");
  const hits = forbidden.filter((re) => re.test(html)).map((re) => String(re));
  if (hits.length) {
    console.error(`success-stories-confidential-check: ${rel} leaked: ${hits.join(", ")}`);
    failed = true;
  }
}
if (failed) process.exit(1);
console.log("success-stories-confidential-check: ok");
