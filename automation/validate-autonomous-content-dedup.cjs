#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();

function read(filePath) {
  return fs.readFileSync(path.join(ROOT, filePath), 'utf8');
}

function getSingleQuotedValues(content, key) {
  const regex = new RegExp(`${key}:\\s*'([^']+)'`, 'g');
  const values = [];
  let match = regex.exec(content);
  while (match) {
    values.push(match[1]);
    match = regex.exec(content);
  }
  return values;
}

function getDoubleQuotedValues(content, key) {
  const regex = new RegExp(`${key}:\\s*"([^"]+)"`, 'g');
  const values = [];
  let match = regex.exec(content);
  while (match) {
    values.push(match[1]);
    match = regex.exec(content);
  }
  return values;
}

function getJsxHrefValues(content) {
  const regex = /href=\s*"([^"]+)"/g;
  const values = [];
  let match = regex.exec(content);
  while (match) {
    values.push(match[1]);
    match = regex.exec(content);
  }
  return values;
}

function findDuplicates(values) {
  const seen = new Set();
  const dup = new Set();
  for (const value of values) {
    if (seen.has(value)) dup.add(value);
    seen.add(value);
  }
  return Array.from(dup);
}

function assertNoDuplicates(values, label) {
  const duplicates = findDuplicates(values);
  if (duplicates.length) {
    throw new Error(`${label} duplicates found: ${duplicates.join(', ')}`);
  }
}

function assertInternalRoutesExist(values, routes, label) {
  const missing = values.filter((value) => value.startsWith('/ai-lab/') && !routes.includes(value));
  if (missing.length) {
    throw new Error(`${label} routes missing from AI Lab registry: ${missing.join(', ')}`);
  }
}

function main() {
  const aiLabTools = read('app/ai-lab/ai-lab-tools.ts');
  const featuredItems = read('app/features/featuredItems.ts');
  const homepage = read('app/page.tsx');

  const aiLabIds = getSingleQuotedValues(aiLabTools, 'id');
  const aiLabHrefs = getSingleQuotedValues(aiLabTools, 'href');
  const aiLabSlugs = getSingleQuotedValues(aiLabTools, 'slug');
  const featuredIds = getSingleQuotedValues(featuredItems, 'id');
  const featuredHrefs = getSingleQuotedValues(featuredItems, 'href');
  const homepageHrefs = getJsxHrefValues(homepage).filter((href) => href.startsWith('/ai-lab/'));

  assertNoDuplicates(aiLabIds, 'AI Lab tool id');
  assertNoDuplicates(aiLabHrefs, 'AI Lab tool href');
  assertNoDuplicates(aiLabSlugs, 'AI Lab tool slug');
  assertNoDuplicates(featuredIds, 'Featured item id');
  assertNoDuplicates(featuredHrefs, 'Featured item href');
  assertInternalRoutesExist(homepageHrefs, aiLabHrefs, 'Homepage');

  console.log('Dedup guard passed: no duplicate IDs, hrefs, slugs, or AI Lab route collisions detected.');
}

try {
  main();
} catch (error) {
  console.error(`[dedup-guard] ${error.message}`);
  process.exit(1);
}
