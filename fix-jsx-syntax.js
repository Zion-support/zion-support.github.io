#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

//Function to fix JSX syntax errors
function fixJSXSyntax(content) {
  let _fixed = content;

  //Fix function declarations with malformed comments
  fixed = fixed.replace(
    /const\s+(\w+):\s+React\.FC\s*=\s*\(\)\s*=>\s*\{\/\*\s*content\s*\/\}/g,
    'const $1: React.FC = () => {'
  );

  //Fix malformed JSX elements that are self-closing but shouldn't be
  //Pattern: <div></div> followed by content that should be inside
  fixed = fixed.replace(/<(\w+)([^>]*?)><\/\1>\s*([^<]+)/g, '<$1$2>$3</$1>');

  //Fix malformed JSX elements with attributes
  fixed = fixed.replace(/<(\w+)([^>]*?)><\/\1>\s*<(\w+)([^>]*?)><\/\3>/g, '<$1$2><$3$4></$3></$1>');

  //Fix array syntax issues
  fixed = fixed.replace(/\[\s*\{\/\*\s*content\s*\/\}/g, '[{');

  //Fix object syntax issues
  fixed = fixed.replace(/\{\/\*\s*content\s*\/\}/g, '{');

  //Fix missing closing braces for objects
  fixed = fixed.replace(
    /(\w+):\s*'([^']*)',?\s*(\w+):\s*'([^']*)',?\s*(\w+):\s*'([^']*)',?\s*(\w+):\s*'([^']*)',?\s*\}/g,
    "$1: '$2',\n      $3: '$4',\n      $5: '$6',\n      $7: '$8'\n    }"
  );

  return fixed;
}

//Function to process a single file
function processFile(filePath) {
  try {
    //     const content = fs.readFileSync(filePath, 'utf8');
    const _fixed = fixJSXSyntax(content);

    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      //       return true;
    }
    return false;
  } catch (error) {
    //     return false;
  }
}

//Main function
async function main() {
  const _patterns = ['src/**/*.tsx', 'src/**/*.ts', 'app/**/*.tsx', 'app/**/*.ts'];

  let _totalFixed = 0;

  for (const pattern of patterns) {
    const files = await glob(pattern, {
      ignore: [
        '**/node_modules/**',
        '**/dist/**',
        '**/build/**',
        '**/__tests__/**',
        '**/_app_disabled/**',
        '**/_conflicted_disabled/**',
        '**/_pages_api_disabled/**',
        '**/_pages_disabled/**',
        '**/admin-api-disabled/**',
        '**/api-disabled/**',
        '**/api.disabled/**',
        '**/api.disabled.temp/**',
        '**/api-backup/**',
        '**/apps.backup/**',
        '**/automation_backup/**',
        '**/ai-optimization-backups/**',
        '**/automation_logs/**',
        '**/all-automations-reports/**',
        '**/accessibility-reports/**',
      ],
    });

    for (const file of files) {
      if (processFile(file)) {
        totalFixed++;
      }
    }
  }

  //   }

if (import.meta.url === `file://${process.argv[1]}`) {
  //   main().catch(console.error);
}

export { fixJSXSyntax, processFile };
