#!/usr/bin/env node,
import fs from "fs";
import path from "path";
import { glob } from "glob";

// List of files to fix
const filesToFix = [
  'src/App.tsx',
  'src/layout/AppHeader.tsx',
  'src/context/CartContext.tsx',
  'src/config/sitemap.ts',
  'src/hooks/useAICodeGeneration.ts',
  'src/hooks/useAccessibility.ts',
  'src/hooks/useAnalytics.ts',
  'src/hooks/useBlockchainWeb3.ts',
  'src/hooks/useContractTemplates.ts',
  'src/hooks/useLazyLoad.ts',
  'src/hooks/useMachineLearning.ts',
  'src/hooks/useMarketplaceSearch.ts',
  'src/hooks/useOptimizedFetch.ts',
  'src/hooks/usePerformance.ts',
  'src/hooks/useRealTimeCollaboration.ts',
  'src/hooks/useSearch.ts',
  'src/hooks/useSecurityCompliance.ts',
  'src/hooks/useVirtualScroll.ts'
];

function fixSyntaxErrors(content) {
  // Fix import statements with incorrect commas and semicolons
  content = content.replace(/from\s+"([^"]+),\s*";/g, 'from "$1";');
  content = content.replace(/from\s+"([^"]+);\s*";/g, 'from "$1";');
  content = content.replace(/import\s+\{([^}]+);([^}]+)\}\s+from/g, 'import {$1, $2} from');
  content = content.replace(/import\s+\{([^}]+),\s*;\s*([^}]+)\}\s+from/g, 'import {$1, $2} from');

  // Fix JSX elements with semicolons instead of proper closing
  content = content.replace(/(<[^>]+>);/g, '$1');
  content = content.replace(/(<\/[^>]+>);/g, '$1');

  // Fix interface and type definitions
  content = content.replace(/interface\s+(\w+)\s*\{\s*([^}]+);\s*([^}]+)\s*\}/g, 'interface $1 {\n  $2;\n  $3;\n}');
  content = content.replace(/(\w+):\s*(\w+);\s*(\w+):/g, '$1: $2;\n  $3: '),
  // Fix function parameters with semicolons
  content = content.replace(/\(([^)]+);\s*([^)]+)\)/g, '($1, $2)');
  content = content.replace(/function\s+(\w+)\s*\(([^)]+);\s*([^)]+)\)/g, 'function $1($2, $3)');

  // Fix array and object syntax
  content = content.replace(/\[\s*([^]+);\s*([^\]]+)\s*\]/g, '[$1, $2]');
  content = content.replace(/\{\s*([^]+);\s*([^}]+)\s*\}/g, '{$1, $2}');

  // Fix quotes in strings
  content = content.replace(/"([^"]*)"([^"]*)"([^"]*)"/g, '"$1\'$2\'$3"');

  return content;
}

function processFile(filePath) {
  try {
    const fullPath = path.join(__dirname, filePath);
    if (fs.existsSync(fullPath)) {
      console.log(`Processing ${filePath}...`);
      let content = fs.readFileSync(fullPath, 'utf8');
      content = fixSyntaxErrors(content);
      fs.writeFileSync(fullPath, content);
      console.log(`Fixed ${filePath}`);
    } else {
      console.log(`File not found: ${filePath}`);    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
}

// Process all files
filesToFix.forEach(processFile);
console.log('Syntax fix completed!');