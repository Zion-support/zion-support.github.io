#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 Starting Advanced Syntax Fixer');

// Fix specific syntax issues
function fixAdvancedSyntaxIssues(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const fixed = false;

    // Fix HTML entity issues
    content = content.replace(/&amp;apos;/g, "'");
    content = content.replace(/&amp;quot;/g, '"');
    content = content.replace(/&amp;lt;/g, '<');
    content = content.replace(/&amp;gt;/g, '>');
    content = content.replace(/&apos;/g, "'");
    content = content.replace(/&quot;/g, '"');
    content = content.replace(/&lt;/g, '<');
    content = content.replace(/&gt;/g, '>');

    // Fix import statements
    content = content.replace(
      /import React from 'react',/g,
      "import React from 'react';"
    );
    content = content.replace(
      /import React from "react",/g,
      'import React from "react";'
    );
    content = content.replace(
      /import { JSX } from 'react',/g,
      "import { JSX } from 'react';"
    );

    // Fix export statements
    content = content.replace(
      /export default function (\w+)\(\): JSX\.Element \{/g,
      'export default function $1(): JSX.Element {'
    );
    content = content.replace(
      /export interface (\w+) \{;/g,
      'export interface $1 {'
    );
    content = content.replace(
      /export const (\w+): (\w+)\[\] = \[;/g,
      'export const $1: $2[] = [];'
    );

    // Fix JSX syntax
    content = content.replace(/&lt;main&gt;/g, '<main>');
    content = content.replace(/&lt;\/main&gt;/g, '</main>');
    content = content.replace(/&lt;div&gt;/g, '<div>');
    content = content.replace(/&lt;\/div&gt;/g, '</div>');

    // Fix object syntax issues
    content = content.replace(/\{\s*,/g, '{');
    content = content.replace(/,\s*\}/g, '}');
    content = content.replace(/,\s*,/g, ',');

    // Fix array syntax issues
    content = content.replace(/\[\s*,/g, '[');
    content = content.replace(/,\s*\]/g, ']');

    // Fix function parameter issues
    content = content.replace(/\(\s*,/g, '(');
    content = content.replace(/,\s*\)/g, ')');

    // Fix semicolon issues
    content = content.replace(/;\s*,/g, ';');
    content = content.replace(/,\s*;/g, ';');

    // Fix React component syntax
    content = content.replace(
      /const (\w+) = \(\) => \{/g,
      'const $1 = () => {'
    );
    content = content.replace(/export default (\w+),/g, 'export default $1;');

    // Fix TypeScript interface syntax
    content = content.replace(/interface (\w+) \{;/g, 'interface $1 {');
    content = content.replace(/type (\w+) = \{;/g, 'type $1 = {');

    // Fix JSX syntax
    content = content.replace(/<(\w+)\s*,/g, '<$1');
    content = content.replace(/,\s*>/g, '>');

    // Fix performance API issues
    if (content.includes('performance.')) {
      content = content.replace(/performance\./g, 'window.performance.');
    }

    // Fix React hooks issues
    content = content.replace(/useEffect\(\(\) => \{/g, 'useEffect(() => {');

    // Fix console statements
    content = content.replace(/console\.log\(/g, '// console.log(');

    // Fix specific parsing errors
    content = content.replace(
      /import React from 'react',/g,
      "import React from 'react';"
    );
    content = content.replace(
      /import { JSX } from 'react',/g,
      "import { JSX } from 'react';"
    );
    content = content.replace(
      /export default function App\(\): JSX\.Element \{/g,
      'export default function App(): JSX.Element {'
    );

    // Fix vite config issues
    if (filePath.includes('vite.config.ts')) {
      content = content.replace(
        /import { defineConfig,splitVendorChunkPlugin } from 'vite', import react from '@vitejs\/plugin-react', import path from 'node: path', export default defineConfig\(\{/g,
        `import { defineConfig, splitVendorChunkPlugin } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

export default defineConfig({`
      );

      content = content.replace(
        /plugins: \[ react\(\{ include: '\*\*\/\*\.\{jsx,js,ts,tsx\}',fastRefresh: true,jsxRuntime: 'automatic'\}\),splitVendorChunkPlugin\(\) \]/g,
        `plugins: [
    react({
      include: '**/*.{jsx,js,ts,tsx}',
      fastRefresh: true,
      jsxRuntime: 'automatic'
    }),
    splitVendorChunkPlugin()
  ]`
      );
    }

    if (fixed || content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Get all TypeScript/JavaScript files
function getAllFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
  let files = [];
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (
      stat.isDirectory() &&
      !item.startsWith('.') &&
      item !== 'node_modules'
    ) {
      files = files.concat(getAllFiles(fullPath, extensions));
    } else if (extensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath);
    }
  }

  return files;
}

// Main execution
try {
  const files = getAllFiles('/workspace');
  let fixedCount = 0;

  console.log(`Found ${files.length} files to check`);

  for (const file of files) {
    if (fixAdvancedSyntaxIssues(file)) {
      fixedCount++;
      console.log(`✅ Fixed: ${file}`);
    }
  }

  console.log(`\n🎯 Fixed ${fixedCount} files`);
} catch (error) {
  console.error('Error:', error.message);
  process.exit(1);
}
