#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

// Function to fix malformed code patterns
function fixMalformedCode(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix missing semicolons after function calls
    const semicolonFix = content.replace(/(\w+\([^)]*\))\s*}\s*const/g, '$1;\n  const');
    if (semicolonFix !== content) {
      content = semicolonFix;
      modified = true;
    }

    // Fix missing semicolons after variable assignments
    const varSemicolonFix = content.replace(/(\w+\s*=\s*[^;]+)\s*}\s*const/g, '$1;\n  const');
    if (varSemicolonFix !== content) {
      content = varSemicolonFix;
      modified = true;
    }

    // Fix malformed function declarations
    const functionFix = content.replace(/(\w+\([^)]*\))\s*{\s*([^}]+)\s*}\s*const/g, '$1 {\n    $2;\n  }\n  const');
    if (functionFix !== content) {
      content = functionFix;
      modified = true;
    }

    // Fix missing semicolons in general
    const generalSemicolonFix = content.replace(/(\w+\([^)]*\))\s*}\s*(\w+)/g, '$1;\n  $2');
    if (generalSemicolonFix !== content) {
      content = generalSemicolonFix;
      modified = true;
    }

    // Fix malformed JSX attributes
    const jsxAttributeFix = content.replace(/(\w+)\s*=\s*{\s*['"`]([^'"`]*?)['"`]\s*}\s*(\w+)\s*=\s*{\s*['"`]([^'"`]*?)['"`]\s*}/g, '$1={"$2"} $3={"$4"}');
    if (jsxAttributeFix !== content) {
      content = jsxAttributeFix;
      modified = true;
    }

    // Fix missing commas in object literals
    const commaFix = content.replace(/(\w+)\s*:\s*([^,}]+)\s*(\w+)\s*:/g, '$1: $2,\n    $3:');
    if (commaFix !== content) {
      content = commaFix;
      modified = true;
    }

    // Fix malformed JSX expressions
    const jsxExpressionFix = content.replace(/\{\s*([^}]*?)\s*\}\s*([^<>\s])/g, '{$1} $2');
    if (jsxExpressionFix !== content) {
      content = jsxExpressionFix;
      modified = true;
    }

    // Fix missing closing tags
    const closingTagFix = content.replace(/<(\w+)([^>]*?)>\s*([^<]*?)\s*$/g, '<$1$2>$3</$1>');
    if (closingTagFix !== content) {
      content = closingTagFix;
      modified = true;
    }

    // Fix malformed return statements
    const returnFix = content.replace(/return\s*\(\s*$/gm, 'return (\n    ');
    if (returnFix !== content) {
      content = returnFix;
      modified = true;
    }

    // Fix malformed function parameters
    const paramFix = content.replace(/(\w+)\s*=\s*([^,}]+)\s*,\s*l\s*:\s*(\w+)/g, '$1: $2,\n    $3:');
    if (paramFix !== content) {
      content = paramFix;
      modified = true;
    }

    // Fix malformed variable declarations
    const varFix = content.replace(/(\w+)\s*=\s*([^;]+)\s*,\s*l\s*:\s*(\w+)/g, '$1: $2,\n    $3:');
    if (varFix !== content) {
      content = varFix;
      modified = true;
    }

    // Fix malformed JSX className attributes
    const classNameFix = content.replace(/className="([^"]*?)\s*,\s*(\w+)\s*:\s*(\w+)"/g, 'className="$1 $2:$3"');
    if (classNameFix !== content) {
      content = classNameFix;
      modified = true;
    }

    // Fix malformed JSX closing tags
    const jsxClosingFix = content.replace(/<\/\w+>\s*<\/\w+>\s*<\/\w+>/g, '</div>');
    if (jsxClosingFix !== content) {
      content = jsxClosingFix;
      modified = true;
    }

    // Fix malformed function calls
    const functionCallFix = content.replace(/(\w+)\s*\(\s*([^)]*?)\s*,\s*l\s*:\s*(\w+)\s*\)/g, '$1($2, $3)');
    if (functionCallFix !== content) {
      content = functionCallFix;
      modified = true;
    }

    // Fix malformed object properties
    const objectPropFix = content.replace(/(\w+)\s*:\s*([^,}]+)\s*,\s*l\s*:\s*(\w+)/g, '$1: $2,\n    $3:');
    if (objectPropFix !== content) {
      content = objectPropFix;
      modified = true;
    }

    // Fix malformed array elements
    const arrayFix = content.replace(/(\w+)\s*,\s*l\s*:\s*(\w+)/g, '$1,\n    $2');
    if (arrayFix !== content) {
      content = arrayFix;
      modified = true;
    }

    // Fix malformed string literals
    const stringFix = content.replace(/(\w+)\s*,\s*l\s*:\s*(\w+)/g, '$1,\n    $2');
    if (stringFix !== content) {
      content = stringFix;
      modified = true;
    }

    // Fix malformed JSX fragments
    const fragmentFix = content.replace(/<>\s*$/gm, '<>\n    ');
    if (fragmentFix !== content) {
      content = fragmentFix;
      modified = true;
    }

    // Fix malformed JSX elements
    const elementFix = content.replace(/<(\w+)([^>]*?)>\s*$/gm, '<$1$2>\n    ');
    if (elementFix !== content) {
      content = elementFix;
      modified = true;
    }

    // Fix malformed JSX attributes
    const attributeFix = content.replace(/(\w+)\s*=\s*{\s*['"`]([^'"`]*?)['"`]\s*}\s*(\w+)\s*=\s*{\s*['"`]([^'"`]*?)['"`]\s*}/g, '$1={"$2"} $3={"$4"}');
    if (attributeFix !== content) {
      content = attributeFix;
      modified = true;
    }

    // Fix malformed JSX expressions
    const expressionFix = content.replace(/\{\s*([^}]*?)\s*\}\s*([^<>\s])/g, '{$1} $2');
    if (expressionFix !== content) {
      content = expressionFix;
      modified = true;
    }

    // Fix malformed JSX closing tags
    const closingFix = content.replace(/<\/\w+>\s*<\/\w+>\s*<\/\w+>/g, '</div>');
    if (closingFix !== content) {
      content = closingFix;
      modified = true;
    }

    // Fix malformed JSX attributes
    const attrFix = content.replace(/(\w+)\s*=\s*{\s*['"`]([^'"`]*?)['"`]\s*}\s*(\w+)\s*=\s*{\s*['"`]([^'"`]*?)['"`]\s*}/g, '$1={"$2"} $3={"$4"}');
    if (attrFix !== content) {
      content = attrFix;
      modified = true;
    }

    // Fix malformed JSX expressions
    const exprFix = content.replace(/\{\s*([^}]*?)\s*\}\s*([^<>\s])/g, '{$1} $2');
    if (exprFix !== content) {
      content = exprFix;
      modified = true;
    }

    // Fix malformed JSX closing tags
    const closeFix = content.replace(/<\/\w+>\s*<\/\w+>\s*<\/\w+>/g, '</div>');
    if (closeFix !== content) {
      content = closeFix;
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
    }

    return modified;
  } catch (error) {
    console.error(`Error fixing malformed code in ${filePath}:`, error.message);
    return false;
  }
}

// Function to find files with build errors
function findFilesWithBuildErrors() {
  try {
    const result = execSync('pnpm run build:no-check 2>&1', { encoding: 'utf8' });
    return [];
  } catch (error) {
    const output = error.stdout || error.stderr || '';
    const files = new Set();

    // Extract file paths from build errors
    const fileMatches = output.match(/\/workspace\/[^:]+\.tsx/g);
    if (fileMatches) {
      fileMatches.forEach(file => files.add(file));
    }

    return Array.from(files);
  }
}

// Main execution
function main() {
  console.log('Finding files with build errors...');

  const errorFiles = findFilesWithBuildErrors();
  console.log(`Found ${errorFiles.length} files with build errors`);

  let fixedCount = 0;
  for (const file of errorFiles) {
    if (fixMalformedCode(file)) {
      fixedCount++;
      console.log(`Fixed malformed code in: ${file}`);
    }
  }

  console.log(`Fixed malformed code in ${fixedCount} files`);

  // Run build again
  try {
    console.log('Running build...');
    execSync('pnpm run build:no-check', { stdio: 'inherit' });
    console.log('Build passed!');
  } catch (error) {
    console.log('Build still has errors, but some fixes were applied.');
  }
}

main();