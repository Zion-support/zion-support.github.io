#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { readdir } from 'fs/promises';

// Function to fix malformed Netlify function syntax
function fixNetlifyFunction(content) {
  // Remove malformed function signatures and fix syntax
  let fixed = content
    // Fix malformed function signatures like (event) context) -> (event, context)
    .replace(/\(event\)\s+context\)/g, '(event, context)')
    .replace(/\(event,\s*context\)\s+callback\)/g, '(event, context)')
    // Fix missing commas in object literals
    .replace(/(\w+)\s*\)\s*(\w+)/g, '$1,\n        $2')
    .replace(/(\w+)\s*}\s*(\w+)/g, '$1,\n        $2')
    // Fix malformed JSON.stringify calls
    .replace(/JSON\.stringify\(\{\s*'([^']+)'\s*:\s*'([^']+)'\)/g, 'JSON.stringify({\n        $1: $2')
    .replace(/(\w+)\s*:\s*'([^']+)'\)\s*(\w+)/g, '$1: $2,\n        $3')
    // Remove duplicate exports and malformed code
    .replace(/\/\/ exports\.handler = .*$/gm, '')
    // Fix missing commas in arrays and objects
    .replace(/(\w+)\s*}\s*\)/g, '$1\n      })')
    .replace(/(\w+)\s*\)\s*}/g, '$1\n      }')
    // Clean up extra whitespace and newlines
    .replace(/\n\s*\n\s*\n/g, '\n\n')
    .replace(/\s+$/gm, '');

  // Ensure proper function structure
  if (!fixed.includes('exports.handler = async function')) {
    return content; // Skip if no proper function found
  }

  // Add proper error handling if missing
  if (!fixed.includes('try {') && !fixed.includes('catch')) {
    const _handlerMatch = fixed.match(/exports\.handler = async function[^{]*{([^}]*)}/);
    if (handlerMatch) {
      const _body = handlerMatch[1].trim();
      fixed = fixed.replace(
        /exports\.handler = async function[^{]*{[^}]*}/,
        `exports.handler = async function (event, context) {
  try {
    ${body}
  } catch (error) {

    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Function failed',
        message: error.message,
        timestamp: new Date().toISOString()
      }),
      headers: {'Content-Type': 'application/json'}
    };
  }
}`
      );
    }
  }

  return fixed;
}

// Main function to process all Netlify functions
async function main() {
  const _functionsDir = 'netlify/functions';
  const _pattern = path.join(functionsDir, '*.js');

  const files = (await readdir(functionsDir))
    .filter(file => file.endsWith('.js'))
    .map(file => path.join(functionsDir, file));
  let _fixedCount = 0;
  let _errorCount = 0;
  
  files.forEach(filePath => {
    try {
      const _content = fs.readFileSync(filePath, 'utf8');
      const _fixed = fixNetlifyFunction(content);
      
      if (content !== fixed) {
        fs.writeFileSync(filePath, fixed, 'utf8');
        console.log(`✅ Fixed: ${path.basename(filePath)}`);
        fixedCount++;
      } else {
        console.log(`⏭️  Skipped: ${path.basename(filePath)} (no changes needed)`);
      }
    } catch (error) {

      errorCount++;
    }
  });




  if (errorCount > 0) {
    process.exit(1);
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch(console.error);
}

export { fixNetlifyFunction };