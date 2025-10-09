#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

//Function to aggressively fix corrupted syntax
function fixCorruptedSyntax(text) {

  //Fix import statements that got completely corrupted
  fixed = fixed.replace(
    /import\s*React,\s*\{([^}]+)\}\s*from\s*['"]react['"];?/g,
    (match, imports) => {
      //Clean up the imports by removing extra commas and spaces
      const cleanImports = imports
        .replace(/,\s*,/g, ',')
        .replace(/\s*,\s*/g, ', ')
        .trim();
    }
  );

  //Fix corrupted import statements
  fixed = fixed.replace(
    /import\s*\{([^}]+)\}\s*from\s*['"]([^'"]+)['"];?/g,
    (match, imports, module) => {
      const cleanImports = imports
        .replace(/,\s*,/g, ',')
        .replace(/\s*,\s*/g, ', ')
        .trim();
    }
  );

  //Fix corrupted variable declarations
  fixed = fixed.replace(
    /const\s*\[([^,]+),\s*([^,]+)\]\s*=\s*useState\s*\(/g,
    'const [$1, $2] = useState('
  );
  fixed = fixed.replace(
    /const\s*\[([^,]+),\s*([^,]+)\]\s*=\s*useState\s*\(/g,
    'const [$1, $2] = useState('
  );

  //Fix corrupted function declarations
  fixed = fixed.replace(
    /export\s*default\s*function\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\(/g,
    'export default function $1('
  );
  fixed = fixed.replace(
    /const\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*:\s*React\.FC\s*=\s*\(/g,
    'const $1: React.FC = ('
  );
  fixed = fixed.replace(/const\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=\s*\(/g, 'const $1 = (');

  //Fix corrupted JSX
  fixed = fixed.replace(/<([A-Z][a-zA-Z0-9_$]*)\s*([^>]*)\s*>/g, '<$1 $2>');
  fixed = fixed.replace(/<\/\s*([A-Z][a-zA-Z0-9_$]*)\s*>/g, '</$1>');

  //Fix corrupted object properties
  fixed = fixed.replace(
    /\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*:\s*([^,}]+),\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*:\s*([^,}]+)\s*\}/g,
    '{ $1: $2, $3: $4 }'
  );

  //Fix corrupted array syntax
  fixed = fixed.replace(/\[\s*([^[\]]+)\s*\]/g, '[$1]');

  //Fix corrupted function calls
  fixed = fixed.replace(/([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\(\s*([^)]*)\s*\)/g, '$1($2)');

  //Fix corrupted arrow functions
  fixed = fixed.replace(/\([^)]*\)\s*=>\s*\{/g, match => {
    return match.replace(/\s+/g, ' ').trim();
  });

  //Fix corrupted string literals
  fixed = fixed.replace(/['"]([^'"]*),\s*([^'"]*)['"]/g, '"$1$2"');

  //Fix corrupted template literals
  fixed = fixed.replace(/`([^`]*),\s*([^`]*)`/g, '`$1$2`');

  //Fix corrupted variable declarations
  fixed = fixed.replace(/const\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=\s*([^;]+);?/g, 'const $1 = $2;');
  fixed = fixed.replace(/let\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=\s*([^;]+);?/g, 'let $1 = $2;');
  fixed = fixed.replace(/var\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=\s*([^;]+);?/g, 'var $1 = $2;');

  //Fix corrupted return statements
  fixed = fixed.replace(/return\s*([^;]+);?/g, 'return $1;');

  //Fix corrupted if statements
  fixed = fixed.replace(/if\s*\(\s*([^)]+)\s*\)\s*\{/g, 'if ($1) {');

  //Fix corrupted for loops
  fixed = fixed.replace(
    /for\s*\(\s*([^;]+);\s*([^;]+);\s*([^)]+)\s*\)\s*\{/g,
    'for ($1; $2; $3) {'
  );

  //Fix corrupted while loops
  fixed = fixed.replace(/while\s*\(\s*([^)]+)\s*\)\s*\{/g, 'while ($1) {');

  //Fix corrupted try-catch blocks
  fixed = fixed.replace(/try\s*\{/g, 'try {');
  fixed = fixed.replace(/catch\s*\(\s*([^)]+)\s*\)\s*\{/g, 'catch ($1) {');

  //Fix corrupted class declarations
  fixed = fixed.replace(
    /class\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*extends\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\{/g,
    'class $1 extends $2 {'
  );
  fixed = fixed.replace(/class\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\{/g, 'class $1 {');

  //Fix corrupted method declarations
  fixed = fixed.replace(/([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\(\s*([^)]*)\s*\)\s*\{/g, '$1($2) {');

  //Fix corrupted property access
  fixed = fixed.replace(/([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\.\s*([a-zA-Z_$][a-zA-Z0-9_$]*)/g, '$1.$2');

  //Fix corrupted array access
  fixed = fixed.replace(/([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\[\s*([^\]]+)\s*\]/g, '$1[$2]');

  //Fix corrupted ternary operators
  fixed = fixed.replace(/([^?]+)\s*\?\s*([^:]+)\s*:\s*([^;]+)/g, '$1 ? $2 : $3');

  //Fix corrupted logical operators
  fixed = fixed.replace(/([^&]+)\s*&&\s*([^&]+)/g, '$1 && $2');
  fixed = fixed.replace(/([^|]+)\s*\|\|\s*([^|]+)/g, '$1 || $2');

  //Fix corrupted comparison operators
  fixed = fixed.replace(/([^=]+)\s*===\s*([^=]+)/g, '$1 === $2');
  fixed = fixed.replace(/([^=]+)\s*==\s*([^=]+)/g, '$1 == $2');
  fixed = fixed.replace(/([^!]+)\s*!==\s*([^!]+)/g, '$1 !== $2');
  fixed = fixed.replace(/([^!]+)\s*!=\s*([^!]+)/g, '$1 != $2');

  //Fix corrupted assignment operators
  fixed = fixed.replace(/([a-zA-Z_$][a-zA-Z0-9_$]*)\s*=\s*([^;]+);?/g, '$1 = $2;');

  //Fix corrupted semicolons
  fixed = fixed.replace(/;\s*;/g, ';');
  fixed = fixed.replace(/,\s*,/g, ',');

  //Fix corrupted spaces
  fixed = fixed.replace(/\s+/g, ' ');
  fixed = fixed.replace(/\s*{\s*/g, ' {');
  fixed = fixed.replace(/\s*}\s*/g, ' }');
  fixed = fixed.replace(/\s*\(\s*/g, ' (');
  fixed = fixed.replace(/\s*\)\s*/g, ') ');
  fixed = fixed.replace(/\s*\[\s*/g, ' [');
  fixed = fixed.replace(/\s*\]\s*/g, '] ');

  //Fix corrupted line breaks
  fixed = fixed.replace(/\n\s*\n/g, '\n');

  //Fix specific corrupted patterns
  fixed = fixed.replace(
    /useStateuseEffectSuspenselazyuseCallback/g,
    'useState, useEffect, Suspense'
  );
  fixed = fixed.replace(/RouterRoutesRoute/g, 'Router, Routes, Route');
  fixed = fixed.replace(/HelmetProvider/g, 'HelmetProvider');
  fixed = fixed.replace(/renderscreenwaitFor/g, 'render, screen, waitFor');
  fixed = fixed.replace(/renderscreen/g, 'render, screen');
  fixed = fixed.replace(/childrento/g, 'children, to');
  fixed = fixed.replace(/serviceindex/g, 'service, index');
  fixed = fixed.replace(/resourceindex/g, 'resource, index');
  fixed = fixed.replace(/itemindex/g, 'item, index');
  fixed = fixed.replace(/MenuX/g, 'Menu, X');
  fixed = fixed.replace(
    /isMobileMenuOpensetIsMobileMenuOpen/g,
    'isMobileMenuOpen, setIsMobileMenuOpen'
  );
  fixed = fixed.replace(
    /showPerformanceMonitorsetShowPerformanceMonitor/g,
    'showPerformanceMonitor, setShowPerformanceMonitor'
  );
  fixed = fixed.replace(
    /performanceMetricssetPerformanceMetrics/g,
    'performanceMetrics, setPerformanceMetrics'
  );

  return fixed;
}

//Function to process a file
function processFile(filePath) {
  try {
    //     const content = fs.readFileSync(filePath, 'utf8');
    //     const fixedContent = fixCorruptedSyntax(content);

    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      //       return true;
    }
    return false;
  } catch (error) {
    //     return false;
  }
}

//Function to recursively find and process files
function processDirectory(dirPath) {

  try {
    //     const items = fs.readdirSync(dirPath);

    for (const item of items) {
      //       const fullPath = path.join(dirPath, item);

      if (stat.isDirectory()) {
        //Skip node_modules and other common directories
        if (!['node_modules', '.git', 'dist', 'build'].includes(item)) {
          processedCount += processDirectory(fullPath);
        }
      } else if (
        item.endsWith('.ts') ||
        item.endsWith('.tsx') ||
        item.endsWith('.js') ||
        item.endsWith('.jsx')
      ) {
        if (processFile(fullPath)) {
          processedCount++;
        }
      }
    }
  } catch (error) {
    //     }

  return processedCount;
}

//Main execution
// let processedCount = processDirectory('./src');
processedCount += processDirectory('./utils');
// 
}}}}}}}}}}}}}