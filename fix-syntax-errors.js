#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  let fixed = content;

  // Fix unterminated string literals in JSX attributes
  fixed = fixed.replace(/description="([^"]*?)(?:\n|$)/g, (match, content) => {
    if (!content.endsWith('"')) {
      return `description="${content}"`;
    }
    return match;
  });

  // Fix malformed JSX attributes
  fixed = fixed.replace(/title="([^"]*?)(?:\n|$)/g, (match, content) => {
    if (!content.endsWith('"')) {
      return `title="${content}"`;
    }
    return match;
  });

  // Fix unterminated string literals in object properties
  fixed = fixed.replace(/description:\s*"([^"]*?)(?:\n|$)/g, (match, content) => {
    if (!content.endsWith('"')) {
      return `description: "${content}"`;
    }
    return match;
  });

  // Fix malformed icon properties
  fixed = fixed.replace(/icon:\s*"([^"]*?)(?:\n|$)/g, (match, content) => {
    if (!content.endsWith('"')) {
      return `icon: "${content}"`;
    }
    return match;
  });

  // Fix unterminated JSX elements
  fixed = fixed.replace(/<([A-Z][a-zA-Z0-9]*)\s+([^>]*?)(?:\n|$)/g, (match, tagName, attributes) => {
    if (!attributes.endsWith('>') && !attributes.endsWith('/>')) {
      return `<${tagName} ${attributes}>`;
    }
    return match;
  });

  // Fix malformed className attributes
  fixed = fixed.replace(/className="([^"]*?)(?:\n|$)/g, (match, content) => {
    if (!content.endsWith('"')) {
      return `className="${content}"`;
    }
    return match;
  });

  // Fix duplicate imports
  const importLines = fixed.split('\n').filter(line => line.trim().startsWith('import'));
  const uniqueImports = [...new Set(importLines)];
  const nonImportLines = fixed.split('\n').filter(line => !line.trim().startsWith('import'));
  fixed = uniqueImports.join('\n') + '\n' + nonImportLines.join('\n');

  // Fix malformed object properties
  fixed = fixed.replace(/(\w+):\s*"([^"]*?)(?:\n|$)/g, (match, key, value) => {
    if (!value.endsWith('"')) {
      return `${key}: "${value}"`;
    }
    return match;
  });

  // Fix unterminated template literals
  fixed = fixed.replace(/`([^`]*?)(?:\n|$)/g, (match, content) => {
    if (!content.endsWith('`')) {
      return `\`${content}\``;
    }
    return match;
  });

  // Fix malformed JSX fragments
  fixed = fixed.replace(/<>\s*$/gm, '<>');
  fixed = fixed.replace(/<\/>\s*$/gm, '</>');

  // Fix missing closing brackets in arrays
  fixed = fixed.replace(/\[\s*([^[\]]*?)(?:\n|$)/g, (match, content) => {
    if (!content.trim().endsWith(']')) {
      return `[${content}]`;
    }
    return match;
  });

  // Fix malformed color values
  fixed = fixed.replace(/from-([a-z]+)-(\d+)o0/g, 'from-$1-$2');
  fixed = fixed.replace(/to-([a-z]+)-(\d+)o0/g, 'to-$1-$2');
  fixed = fixed.replace(/text-([a-z]+)-(\d+)o0/g, 'text-$1-$2');
  fixed = fixed.replace(/bg-([a-z]+)-(\d+)o0/g, 'bg-$1-$2');
  fixed = fixed.replace(/border-([a-z]+)-(\d+)o0/g, 'border-$1-$2');

  // Fix malformed grid classes
  fixed = fixed.replace(/grid-cols-(\d+),/g, 'grid-cols-$1');
  fixed = fixed.replace(/l,g:/g, 'lg:');

  // Fix malformed semicolons in JSX
  fixed = fixed.replace(/;\s*$/gm, '');
  fixed = fixed.replace(/;\s*>/g, '>');

  // Fix malformed quotes in strings
  fixed = fixed.replace(/"([^"]*?)"([^"]*?)"/g, '"$1$2"');

  // Fix malformed object syntax
  fixed = fixed.replace(/(\w+):\s*"([^"]*?)",\s*;:\s*"\$(\d+)"\s*$/gm, '$1: "$2"');

  // Fix malformed color strings
  fixed = fixed.replace(/color:\s*'from-([a-z]+)-(\d+)o0\s+to-([a-z]+)-(\d+)o0;"\s*$/gm, 'color: "from-$1-$2 to-$3-$4"');

  // Fix malformed icon properties
  fixed = fixed.replace(/icon:\s*"ico,n:\s*([^"]*?)"\s*$/gm, 'icon: "$1"');

  // Fix malformed title properties
  fixed = fixed.replace(/title:\s*"([^"]*?)",\s*;\s*:\s*"\$(\d+)"\s*$/gm, 'title: "$1"');

  // Fix malformed description properties
  fixed = fixed.replace(/description:\s*"([^"]*?)",\s*;\s*:\s*"\$(\d+)"\s*$/gm, 'description: "$1"');

  // Fix malformed color properties
  fixed = fixed.replace(/color:\s*'from-([a-z]+)-(\d+)o0\s+to-([a-z]+)-(\d+)o0;"\s*$/gm, 'color: "from-$1-$2 to-$3-$4"');

  // Fix malformed JSX closing tags
  fixed = fixed.replace(/<\/div>\s*\)\s*;?\s*$/gm, '</div>);');

  // Fix malformed function declarations
  fixed = fixed.replace(/const\s+(\w+):\s*React\.FC\s*=\s*\(\s*\)\s*=>\s*\{/g, 'const $1: React.FC = () => {');

  // Fix malformed return statements
  fixed = fixed.replace(/return\s*\(\s*<>\s*$/gm, 'return (\n    <>');

  // Fix malformed closing tags
  fixed = fixed.replace(/<\/>\s*\)\s*;?\s*$/gm, '</>\n  );');

  // Fix malformed export statements
  fixed = fixed.replace(/export\s+default\s+function\s+(\w+)\s*\(\s*\)\s*\{/g, 'export default function $1() {');

  // Fix malformed JSX attributes with semicolons
  fixed = fixed.replace(/;\s*>/g, '>');

  // Fix malformed className with semicolons
  fixed = fixed.replace(/className="([^"]*?)"\s*;\s*$/gm, 'className="$1"');

  // Fix malformed text content with semicolons
  fixed = fixed.replace(/>\s*([^<]*?)\s*;\s*</g, '>$1<');

  // Fix malformed button text
  fixed = fixed.replace(/>\s*([^<]*?)\s*;\s*<\/button>/g, '>$1</button>');

  // Fix malformed h1 text
  fixed = fixed.replace(/>\s*([^<]*?)\s*;\s*<\/h1>/g, '>$1</h1>');

  // Fix malformed h3 text
  fixed = fixed.replace(/>\s*([^<]*?)\s*;\s*<\/h3>/g, '>$1</h3>');

  // Fix malformed p text
  fixed = fixed.replace(/>\s*([^<]*?)\s*;\s*<\/p>/g, '>$1</p>');

  // Fix malformed div closing
  fixed = fixed.replace(/<\/div>\s*\)\s*;?\s*$/gm, '</div>\n  );');

  // Fix malformed JSX fragments
  fixed = fixed.replace(/<>\s*$/gm, '<>');
  fixed = fixed.replace(/<\/>\s*\)\s*;?\s*$/gm, '</>\n  );');

  // Fix malformed function closing
  fixed = fixed.replace(/\}\s*;?\s*$/gm, '}');

  // Fix malformed export
  fixed = fixed.replace(/export\s+default\s+(\w+)\s*;?\s*$/gm, 'export default $1;');

  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixSyntaxErrors(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main function
function main() {
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts',
    'components/**/*.tsx',
    'components/**/*.ts',
    '*.tsx',
    '*.ts'
  ];

  let totalFixed = 0;

  patterns.forEach(pattern => {
    const files = glob.sync(pattern, { cwd: process.cwd() });
    files.forEach(file => {
      if (processFile(file)) {
        totalFixed++;
      }
    });
  });

  console.log(`\nTotal files fixed: ${totalFixed}`);
}

main();

export { fixSyntaxErrors, processFile };