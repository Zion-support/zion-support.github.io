#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to fix JSX structure issues
function fixJSXStructure(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Split into lines for easier processing
    const lines = content.split('\n');
    const fixedLines = [];
    let inComponent = false;
    let componentDepth = 0;
    let lastValidLine = -1;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmedLine = line.trim();

      // Detect component start
      if (trimmedLine.includes('const ') && trimmedLine.includes(': React.FC')) {
        inComponent = true;
        componentDepth = 0;
        lastValidLine = i;
      }

      // Detect component end
      if (inComponent && trimmedLine === '}') {
        if (componentDepth === 0) {
          inComponent = false;
          lastValidLine = i;
        } else {
          componentDepth--;
        }
      }

      // Detect JSX return statement
      if (inComponent && trimmedLine === 'return (') {
        componentDepth++;
      }

      // Detect JSX closing
      if (inComponent && trimmedLine === ')') {
        if (componentDepth > 0) {
          componentDepth--;
        }
      }

      // Skip lines that appear to be duplicates or malformed
      if (inComponent && i > lastValidLine + 1) {
        // Check if this line looks like a duplicate closing tag
        if (trimmedLine.match(/^<\/\w+>$/)) {
          // Skip duplicate closing tags
          continue;
        }

        // Check if this line looks like malformed JSX
        if (trimmedLine.match(/^\s*<\/\w+>\s*$/)) {
          continue;
        }

        // Check if this line has malformed structure
        if (trimmedLine.match(/^\s*<\/\w+>\s*<\/\w+>\s*$/)) {
          continue;
        }
      }

      fixedLines.push(line);

      // Update last valid line if this looks like a proper line
      if (inComponent && !trimmedLine.match(/^\s*<\/\w+>\s*$/) && !trimmedLine.match(/^\s*<\/\w+>\s*<\/\w+>\s*$/)) {
        lastValidLine = i;
      }
    }

    const newContent = fixedLines.join('\n');
    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      modified = true;
    }

    return modified;
  } catch (error) {
    console.error(`Error fixing JSX structure in ${filePath}:`, error.message);
    return false;
  }
}

// Function to fix specific syntax patterns
function fixSpecificPatterns(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix unterminated string literals
    const unterminatedStringFix = content.replace(/([^\\])"([^"]*?)$/gm, '$1"');
    if (unterminatedStringFix !== content) {
      content = unterminatedStringFix;
      modified = true;
    }

    // Fix malformed JSX attributes
    const malformedAttributeFix = content.replace(/(\w+)\s*=\s*{\s*['"`]([^'"`]*?)['"`]\s*}\s*(\w+)\s*=\s*{\s*['"`]([^'"`]*?)['"`]\s*}/g, '$1={"$2"} $3={"$4"}');
    if (malformedAttributeFix !== content) {
      content = malformedAttributeFix;
      modified = true;
    }

    // Fix missing commas in object literals
    const missingCommaFix = content.replace(/(\w+)\s*:\s*([^,}]+)\s*(\w+)\s*:/g, '$1: $2,\n    $3:');
    if (missingCommaFix !== content) {
      content = missingCommaFix;
      modified = true;
    }

    // Fix malformed JSX expressions
    const malformedJSXFix = content.replace(/\{\s*([^}]*?)\s*\}\s*([^<>\s])/g, '{$1} $2');
    if (malformedJSXFix !== content) {
      content = malformedJSXFix;
      modified = true;
    }

    // Remove duplicate closing tags at the end of files
    const duplicateClosingFix = content.replace(/(<\/\w+>\s*){2,}$/gm, '$1');
    if (duplicateClosingFix !== content) {
      content = duplicateClosingFix;
      modified = true;
    }

    // Fix malformed closing tags
    const malformedClosingFix = content.replace(/<\/\w+>\s*<\/\w+>\s*<\/\w+>/g, '</div>');
    if (malformedClosingFix !== content) {
      content = malformedClosingFix;
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
    }

    return modified;
  } catch (error) {
    console.error(`Error fixing patterns in ${filePath}:`, error.message);
    return false;
  }
}

// Function to find files with syntax errors
function findFilesWithErrors() {
  try {
    const result = execSync('pnpm run type-check 2>&1', { encoding: 'utf8' });
    return [];
  } catch (error) {
    const output = error.stdout || error.stderr || '';
    const files = new Set();

    // Extract file paths from TypeScript errors
    const fileMatches = output.match(/app\/[^:]+\.tsx/g);
    if (fileMatches) {
      fileMatches.forEach(file => files.add(`/workspace/${file}`));
    }

    return Array.from(files);
  }
}

// Main execution
function main() {
  console.log('Finding files with syntax errors...');

  const errorFiles = findFilesWithErrors();
  console.log(`Found ${errorFiles.length} files with syntax errors`);

  let fixedCount = 0;
  for (const file of errorFiles) {
    let fileModified = false;

    if (fixJSXStructure(file)) {
      fileModified = true;
    }

    if (fixSpecificPatterns(file)) {
      fileModified = true;
    }

    if (fileModified) {
      fixedCount++;
      console.log(`Fixed JSX structure in: ${file}`);
    }
  }

  console.log(`Fixed JSX structure in ${fixedCount} files`);

  // Run type check again
  try {
    console.log('Running type check...');
    execSync('pnpm run type-check', { stdio: 'inherit' });
    console.log('Type check passed!');
  } catch (error) {
    console.log('Type check still has errors, but some fixes were applied.');
  }
}

main();