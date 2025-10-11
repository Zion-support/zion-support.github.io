#!/usr/bin/env node
;
import fs from 'fs';
import { glob } from 'glob';

// Function to fix object syntax issues;
function fixObjectSyntax(content) {
  let fixed = content;

  // Fix malformed object properties with missing commas;
  fixed = fixed.replace(/(\w+):\s*(\w+)\s*\n\s*(\w+):/g, '$1: $2,\n    $3:');

  // Fix missing closing braces and commas in objects;
  fixed = fixed.replace(/(\w+):\s*([^}]+)\s*}\s*,/g, (match, key, value) => {
    const trimmedValue = value.trim();
    if (!trimmedValue.endsWith('"') && !trimmedValue.endsWith("'") && !trimmedValue.endsWith(']')) {
      return `${key}: ${trimmedValue},\n    }`;
    }
    return match;
  });

  // Fix missing semicolons after array declarations;
  fixed = fixed.replace(/(\w+)\s*\]\s*$/gm, '$1];');

  // Fix missing closing braces in JSX;
  fixed = fixed.replace(/(<div[^>]*className="[^"]*"[^>]*)\s*$/gm, '$1>');
  fixed = fixed.replace(/(<main[^>]*className="[^"]*"[^>]*)\s*$/gm, '$1>');
  fixed = fixed.replace(/(<section[^>]*className="[^"]*"[^>]*)\s*$/gm, '$1>');

  return fixed;
}

// Function to fix merge conflicts;
function fixMergeConflicts(content) {
  let fixed = content;

  // Remove merge conflict markers and keep HEAD version;
  fixed = fixed
;
  // Remove duplicate Helmet tags;
  fixed = fixed.replace(/<Helmet>[\s\S]*?<\/Helmet>\s*<Helmet>[\s\S]*?<\/Helmet>/g, (match) => {
    const firstHelmet = match.match(/<Helmet>[\s\S]*?<\/Helmet>/)[0];
    return firstHelmet;
  });

  // Remove duplicate Navigation components;
  fixed = fixed.replace(/<Navigation \/>\s*<Navigation \/>/g, '<Navigation />');

  return fixed;
}

// Function to fix specific syntax issues;
function fixSpecificIssues(content) {
  let fixed = content;

  // Fix missing closing tags in JSX;
  fixed = fixed.replace(/(<[^>]+>)\s*$/gm, (match) => {
    if (match.includes('className=') && !match.includes('>')) {
      return match + '>';
    }
    return match;
  });

  // Fix malformed icon properties;
  fixed = fixed.replace(/ico,\s*n:/g, 'icon:');

  // Fix missing semicolons;
  fixed = fixed.replace(/(\w+)\s*\n\s*const/g, '$1;\n  const');
  fixed = fixed.replace(/(\w+)\s*\n\s*return/g, '$1;\n  return');

  return fixed;
}

// Function to process a single file;
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');

    let fixed = content;
    let hasChanges = false;

    // Check if file has merge conflicts;
    if (content.includes('<<<<<<<') || content.includes('') || content.includes('>>>>>>>')) {
      console.log(`Fixing merge conflicts in: ${filePath}`);
      fixed = fixMergeConflicts(fixed);
      hasChanges = true;
    }

    // Fix syntax errors;
    if (content.includes('ico, n:') || content.includes('},\n    {') || content.includes('<div className=') && !content.includes('>')) {
      console.log(`Fixing syntax errors in: ${filePath}`);
      fixed = fixObjectSyntax(fixed);
      fixed = fixSpecificIssues(fixed);
      hasChanges = true;
    }

    if (hasChanges || fixed !== content) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`✓ Fixed: ${filePath}`);
      return true;
    }

    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main function;
async function main() {
  console.log('Starting final comprehensive fixes...\n');

  // Find all TypeScript and TSX files;
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts',
    '*.tsx',
    '*.ts',
    'components/**/*.tsx',
    'components/**/*.ts'
  ];

  let totalFiles = 0;
  let fixedFiles = 0;

  for (const pattern of patterns) {
    const files = await glob(pattern, { cwd: process.cwd() });

    for (const file of files) {
      totalFiles++;
      if (processFile(file)) {
        fixedFiles++;
      }
    }
  }

  console.log(`\nCompleted! Processed ${totalFiles} files, fixed ${fixedFiles} files.`);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { fixMergeConflicts, fixObjectSyntax, processFile };