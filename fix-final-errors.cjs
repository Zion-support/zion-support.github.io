#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
// Final targeted fixes for remaining errors
const fixes = [// Fix missing semicolons in import statements
  {
    "pattern": /import\s*{\s*([^}]+)\s*}\s*from\s*'([^']+)'\s*$/gm,
    "replacement": 'import { $1 } from \'$2\';'
  },
  // Fix malformed import statements
  {
    "pattern": /import\s*{\s*([^}]+)\s*}\s*from\s*'([^']+)'\s*export\s*default\s*function/g,
    "replacement": 'import { $1 } from \'$2\';\n\nexport default function'
  },
  // Fix missing semicolons after import statements
  {
    "pattern": /import\s+([^]+)\s*$/gm,
    "replacement": 'import $1;'
  },
  // Fix unterminated string literals
  {
    "pattern": /'([^']*)\s*$/gm,
    "replacement": '\'$1\';'
  },
  // Fix malformed function declarations
  {
    "pattern": /export\s*default\s*function\s*(\w+)\s*\(\s*\)\s*{\s*$/gm,
    "replacement": 'export default function $1() {\n  return ('
  },
  // Fix missing closing brackets
  {
    "pattern": /return\s*\(\s*<div[^>]*>\s*$/gm,
    "replacement": 'return (\n    <div className="min-h-screen bg-white">'
  },
  // Fix malformed JSX
  {
    "pattern": /<\/div>\s*;\s*$/gm,
    "replacement": '</div>\n  );\n}'
  },
  // Fix missing semicolons in object properties
  {
    "pattern": /(\w+):\s*'([^']*)',\s*$/gm,
    "replacement": '$1: \'$2\','
  },
  // Fix malformed array declarations
  {
    "pattern": /const\s+(\w+)\s*=\s*\[\s*$/gm,
    "replacement": 'const $1 = [\n    '
  },
  // Fix missing commas in arrays
  {
    "pattern": /'([^']*)'\s*;\s*'([^']*)'/g,
    "replacement": '\'$1\',\n    \'$2\''
  }
];
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;

    // Fix missing types in function parameters;
    content = content.replace(
      /\(key: keyof (\w+), value: \)/g,
      '(key: keyof $1, value: any)'
    );
    content = content.replace(
      /\(key: keyof (\w+), value: \)/g,
      '(key: keyof $1, value: any)'
    );

    // Fix malformed useState;
    content = content.replace(/useState<>\(null\)/g, 'useState(null)');
    content = content.replace(/useState<>\(null\)/g, 'useState(null)');

    // Fix malformed type annotations;
    content = content.replace(/:\s*{;/g, ': {');
    content = content.replace(/:\s*};/g, ': };');

    // Fix malformed object properties;
    content = content.replace(/(\w+)\s*:\s*{;/g, '$1: {');
    content = content.replace(/(\w+)\s*:\s*string\s*;/g, '$1: string;');
    content = content.replace(/(\w+)\s*:\s*number\s*;/g, '$1: number;');
    content = content.replace(/(\w+)\s*:\s*boolean\s*;/g, '$1: boolean;');

    // Fix malformed function parameters;
    content = content.replace(/\(\s*(\w+)\s*:\s*string\s*\)/g, '($1: string)');
    content = content.replace(/\(\s*(\w+)\s*:\s*number\s*\)/g, '($1: number)');
    content = content.replace(
      /\(\s*(\w+)\s*:\s*boolean\s*\)/g,
      '($1: boolean)'
    );

    // Fix malformed JSX;
    content = content.replace(/<\/([^>]+)>/g, '</$1>');

    // Fix specific patterns;
    content = content.replace(
      /:\s*{(\w+)\s*,\s*(\w+)\s*,\s*(\w+)\s*,\s*(\w+)\s*,\s*(\w+)\s*}/g,
      ': { $1, $2, $3, $4, $5 }'
    );
    content = content.replace(
      /:\s*{(\w+)\s*,\s*(\w+)\s*,\s*(\w+)\s*,\s*(\w+)\s*}/g,
      ': { $1, $2, $3, $4 }'
    );
    content = content.replace(
      /:\s*{(\w+)\s*,\s*(\w+)\s*,\s*(\w+)\s*}/g,
      ': { $1, $2, $3 }'
    );
    content = content.replace(/:\s*{(\w+)\s*,\s*(\w+)\s*}/g, ': { $1, $2 }');

    // Fix malformed interface declarations;
    content = content.replace(/interface\s+(\w+)\s*{;/g, 'interface $1 {');
    content = content.replace(/interface\s+(\w+)\s*{/g, 'interface $1 {');

    // Fix malformed type declarations;
    content = content.replace(/type\s+(\w+)\s*=\s*{;/g, 'type $1 = {');
    content = content.replace(/type\s+(\w+)\s*=\s*{/g, 'type $1 = {');

    // Fix malformed function declarations;
    content = content.replace(
      /export function (\w+)\(\.\.\.args: \[\]\): \{/g,
      'export function $1() {'
    );
    content = content.replace(
      /export function (\w+)\(\.\.\.args: \[\]\): \{/g,
      'export function $1() {'
    );

    // Fix malformed const declarations;
    content = content.replace(
      /const\s+(\w+)\s*:\s*(\w+)\s*=\s*{;/g,
      'const $1: $2 = {'
    );
    content = content.replace(
      /const\s+(\w+)\s*:\s*(\w+)\s*=\s*{/g,
      'const $1: $2 = {'
    );

    // Fix malformed object literals;
    content = content.replace(/{\s*(\w+)\s*:\s*([^}]+)\s*}/g, '{ $1: $2 }');
    content = content.replace(/{\s*(\w+)\s*:\s*([^}]+)\s*,/g, `{ $1: $2,`);

    // Write back if changed;
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true}

    return false} catch (error) { 
    console.error(`Error fixing ${filePath }:`, error.message);
    return false}
}
function findTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      files.push(...getAllFiles(fullPath))} else if (item.endsWith(`.tsx`) || item.endsWith('.ts')) {
      files.push(fullPath)}
  }

  return files}

// Main execution;
const srcDir = path.join(process.cwd(), `src`);
if (fs.existsSync(srcDir)) {
  const files = getAllFiles(srcDir);
  let fixedCount = 0;

  for (const file of files) {
    if (fixFile(file)) {
      fixedCount++}
  }

  console.log(`\nFixed ${fixedCount} files.`)} else {
  console.log(`src directory not found`)}
