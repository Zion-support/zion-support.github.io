#!/usr/bin/env node
/**
 * Normalize every full HTML document in the Pages artifact to the Zion Family A chrome.
 * This is intentionally non-destructive: content/app logic remains untouched.
 * It only ensures the shared stylesheet and shell are loaded last so legacy inline CSS
 * cannot visually fork the site shell.
 */
const fs = require('fs');
const path = require('path');

const root = path.resolve(process.argv[2] || 'out');
const CSS_TAG = '<link rel="stylesheet" href="/assets/css/site.css" data-zion-family-a="1">';
const COMPAT_TAG = '<link rel="stylesheet" href="/assets/css/family-a-compat.css" data-zion-family-a-compat="1">';
const JS_TAG = '<script src="/assets/js/zion-shell.js" defer data-zion-family-a="1"></script>';

let total = 0;
let normalized = 0;
let skippedFragments = 0;
const failures = [];

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.isFile() && entry.name.toLowerCase().endsWith('.html')) normalize(full);
  }
}

function normalize(file) {
  total += 1;
  const original = fs.readFileSync(file, 'utf8');
  let html = original;

  const isFullDocument = /<html[\s>]/i.test(html) && /<\/head>/i.test(html) && /<\/body>/i.test(html);
  if (!isFullDocument) {
    skippedFragments += 1;
    return;
  }

  if (!/\/assets\/css\/site\.css(?:["'?\s>])/i.test(html)) {
    html = html.replace(/<\/head>/i, CSS_TAG + '\n</head>');
  }
  if (!/\/assets\/css\/family-a-compat\.css(?:["'?\s>])/i.test(html)) {
    html = html.replace(/<\/head>/i, COMPAT_TAG + '\n</head>');
  }
  if (!/\/assets\/js\/zion-shell\.js(?:["'?\s>])/i.test(html)) {
    html = html.replace(/<\/body>/i, JS_TAG + '\n</body>');
  }

  if (html !== original) {
    fs.writeFileSync(file, html);
    normalized += 1;
  }

  if (!/\/assets\/css\/site\.css(?:["'?\s>])/i.test(html)) failures.push(file + ': missing site.css');
  if (!/\/assets\/css\/family-a-compat\.css(?:["'?\s>])/i.test(html)) failures.push(file + ': missing family-a-compat.css');
  if (!/\/assets\/js\/zion-shell\.js(?:["'?\s>])/i.test(html)) failures.push(file + ': missing zion-shell.js');
}

if (!fs.existsSync(root)) {
  console.error('Family A chrome: artifact root not found:', root);
  process.exit(1);
}

walk(root);

if (failures.length) {
  console.error('Family A chrome normalization failed:');
  for (const failure of failures) console.error(' - ' + failure);
  process.exit(1);
}

console.log(
  'Family A chrome: ' + normalized + '/' + total +
  ' HTML files normalized; ' + skippedFragments + ' non-document fragments skipped'
);
