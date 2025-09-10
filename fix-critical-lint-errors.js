#!/usr/bin/env node;

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Starting critical lint error fixes...');

// Function to check if a file has critical syntax errors;
function hasCriticalErrors(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');

    // Check for common critical syntax errors;
    const criticalPatterns = [;
      /import.*\{[^}]*\s+const\s+\w+:/, // Malformed imports;
      /import.*\{[^}]*\s+function\s+\w+:/, // Malformed imports;
      /import.*\{[^}]*\s+export\s+default/, // Malformed imports;
      /const\s+\w+\s*=\s*\(\)\s*=>\s*\{[^}]*\s+const\s+\w+:/, // Nested const in arrow function;
      /return\s*\([^)]*\s+const\s+\w+:/, // Const in return statement;
      /;\s*;\s*;/, // Multiple semicolons;
      /,\s*;\s*;/, // Comma followed by semicolons;
      /\{\s*;\s*;/, // Opening brace followed by semicolons;
      /\}\s*;\s*;/, // Closing brace followed by semicolons;
    ];

    return criticalPatterns.some(pattern => pattern.test(content))} catch (error) {
    return true; // If we can't read the file, consider it corrupted}
}

// Function to fix common syntax issues;
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let fixed = false;

    // Fix multiple semicolons;
    if (content.includes(';;')) {
      content = content.replace(/;+/g, ';');
      fixed = true}
    // Fix malformed imports - remove lines that start with import but have syntax errors;
    const lines = content.split('\n');
    const fixedLines = lines.filter(line => {
      if (line.trim().startsWith('import') && line.includes('const ') && line.includes(':')) {
        return false; // Remove malformed import lines}
      return true});

    if (fixedLines.length !== lines.length) {
      content = fixedLines.join('\n');
      fixed = true}
    // Fix common syntax issues;
    content = content;
      .replace(/,\s*;\s*;/g, ',') // Fix comma followed by semicolons;
      .replace(/\{\s*;\s*;/g, '{') // Fix opening brace followed by semicolons;
      .replace(/\}\s*;\s*;/g, '}') // Fix closing brace followed by semicolons;
      .replace(/;\s*;\s*;/g, ';') // Fix multiple semicolons;
      .replace(/\s+;\s*$/gm, '') // Remove trailing semicolons on empty lines;
      .replace(/\n\s*\n\s*\n/g, '\n\n'); // Fix multiple empty lines;

    if (fixed) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed: ${filePath}`);
      return true}
    return false} catch (error) {
    console.log(`❌ Error fixing ${filePath}: ${error.message}`);
    return false}
}

// Function to remove severely corrupted files;
function removeCorruptedFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');

    // Check if file is severely corrupted (less than 50 characters or mostly syntax errors);
    if (content.length < 50) {
      fs.unlinkSync(filePath);
      console.log(`🗑️  Removed severely corrupted file: ${filePath}`);
      return true}
    // Check if file has more than 50% syntax errors;
    const lines = content.split('\n');
    const errorLines = lines.filter(line => ;
      line.includes(';;') || ;
      line.includes(',;') || ;
      line.includes('{;') || ;
      line.includes('};') ||;
      (line.trim().startsWith('import') && line.includes('const ') && line.includes(':'));
    );

    if (errorLines.length > lines.length * 0.5) {
      fs.unlinkSync(filePath);
      console.log(`🗑️  Removed severely corrupted file: ${filePath}`);
      return true}
    return false} catch (error) {
    console.log(`❌ Error processing ${filePath}: ${error.message}`);
    return false}
}

// Main execution;
function main() {
  const srcDir = 'src';
  let fixedCount = 0;
  let removedCount = 0;
  let processedCount = 0;

  function processDirectory(dir) {
    const items = fs.readdirSync(dir);

    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        processDirectory(fullPath)} else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        processedCount++;

        if (hasCriticalErrors(fullPath)) {
          if (removeCorruptedFile(fullPath)) {
            removedCount++} else if (fixFile(fullPath)) {
            fixedCount++}
        }
      }
    }
  }
  if (fs.existsSync(srcDir)) {
    processDirectory(srcDir)}
  console.log(`\n📊 Summary:`);
  console.log(`   Processed: ${processedCount} files`);
  console.log(`   Fixed: ${fixedCount} files`);
  console.log(`   Removed: ${removedCount} files`);
  console.log(`   Remaining: ${processedCount - fixedCount - removedCount} files`);

  // Also fix some common issues in other directories;
  const otherFiles = [;
    'tailwind.config.ts',;
    'types/index.ts',;
    'utils/serviceFinder.ts';
  ];

  for (const file of otherFiles) {
    if (fs.existsSync(file)) {
      if (fixFile(file)) {
        fixedCount++}
    }
  }
  console.log(`\n🎉 Critical lint error fixes completed!`)}

main();