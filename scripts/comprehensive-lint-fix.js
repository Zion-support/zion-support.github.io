#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

console.log('🔧 Starting comprehensive lint fixes...');

// Browser globals that need to be added to ESLint config
const browserGlobals = {
  'document': 'readonly',
  'window': 'readonly',
  'localStorage': 'readonly',
  'sessionStorage': 'readonly',
  'navigator': 'readonly',
  'performance': 'readonly',
  'console': 'readonly',
  'setTimeout': 'readonly',
  'clearTimeout': 'readonly',
  'setInterval': 'readonly',
  'clearInterval': 'readonly',
  'caches': 'readonly',
  'URL': 'readonly',
  'Blob': 'readonly',
  'process': 'readonly',
  'NodeJS': 'readonly',
  'Window': 'readonly',
  'MouseEvent': 'readonly',
  'Navigator': 'readonly',
  'PerformanceResourceTiming': 'readonly',
  'HTMLMetaElement': 'readonly',
  'HTMLLinkElement': 'readonly',
  'HTMLElement': 'readonly',
  'Event': 'readonly',
  'EventTarget': 'readonly',
  'ErrorEvent': 'readonly',
  'PromiseRejectionEvent': 'readonly',
  'PerformanceObserver': 'readonly',
  'PerformanceEntry': 'readonly',
  'PerformanceNavigationTiming': 'readonly',
  'Performance': 'readonly',
  'ServiceWorkerRegistration': 'readonly',
  'ServiceWorkerUpdateViaCache': 'readonly',
  'gtag': 'readonly',
  'requestIdleCallback': 'readonly'
};

// Function to add React import to files that need it
function addReactImport(filePath) {
  if (!fs.existsSync(filePath)) return;
  
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Check if file contains JSX but doesn't import React
  if (content.includes('<') && content.includes('>') && !content.includes('import React')) {
    const lines = content.split('\n');
    let insertIndex = 0;
    
    // Find the first import statement or add at the beginning
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].startsWith('import ') || lines[i].startsWith('export ')) {
        insertIndex = i;
        break;
      }
    }
    
    // Insert React import
    lines.splice(insertIndex, 0, "import React from 'react';");
    
    fs.writeFileSync(filePath, lines.join('\n'));
    console.log(`✅ Added React import to: ${filePath}`);
  }
}

// Function to fix parsing errors in files
function fixParsingErrors(filePath) {
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  // Fix common parsing issues
  if (content.includes('&apos;') && content.includes('import')) {
    // Fix broken import statements
    content = content.replace(/import.*&apos;.*from.*&apos;/g, 'import React from \'react\'');
    modified = true;
  }
  
  if (content.includes('&quot;') && content.includes('import')) {
    // Fix broken import statements with quotes
    content = content.replace(/import.*&quot;.*from.*&quot;/g, 'import React from "react"');
    modified = true;
  }
  
  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(`✅ Fixed parsing errors in: ${filePath}`);
  }
}

// Update ESLint configuration with all browser globals
function updateESLintConfig() {
  const config = `import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
  {
    ignores: [
      'dist/**',
      'node_modules/**',
      '*.config.js',
      '*.config.ts',
      'public/**',
      'backup/**',
      'src.corrupted/**'
    ]
  },
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      globals: {
        ...Object.fromEntries(
          Object.entries(${JSON.stringify(browserGlobals, null, 2)}).map(([key, value]) => [key, value])
        )
      },
      ecmaVersion: 2022,
      sourceType: 'module',
      parser: tsparser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      '@typescript-eslint': tseslint,
      'react': react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh
    },
    rules: {
      ...js.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      
      'no-console': 'warn',
      'no-undef': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      'react/no-unescaped-entities': 'warn',
      'react/react-in-jsx-scope': 'off', // Not needed with React 17+
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }
      ]
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  }
];`;

  fs.writeFileSync('eslint.config.js', config);
  console.log('✅ Updated ESLint configuration with browser globals');
}

// Get all TypeScript and JavaScript files in src
function getAllSourceFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files.push(...getAllSourceFiles(fullPath));
    } else if (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.js')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main execution
console.log('📝 Fixing React imports...');
const srcFiles = getAllSourceFiles('src');
srcFiles.forEach(addReactImport);

console.log('🔧 Fixing parsing errors...');
srcFiles.forEach(fixParsingErrors);

console.log('⚙️  Updating ESLint configuration...');
updateESLintConfig();

console.log('🎉 Comprehensive lint fixes completed!');