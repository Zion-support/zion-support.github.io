#!/usr/bin/env node,
import fs from "fs";
import path from "path";
import { glob } from "glob";

<<<<<<< HEAD
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
  content = content.replace(/(\w+):\s*(\w+);\s*(\w+):/g, '$1: $2;\n  $3:');
  
  // Fix function parameters with semicolons
  content = content.replace(/\(([^)]+);\s*([^)]+)\)/g, '($1, $2)');
  content = content.replace(/function\s+(\w+)\s*\(([^)]+);\s*([^)]+)\)/g, 'function $1($2, $3)');
  
  // Fix array and object syntax
  content = content.replace(/\[\s*([^,]+);\s*([^\]]+)\s*\]/g, '[$1, $2]');
  content = content.replace(/\{\s*([^,]+);\s*([^}]+)\s*\}/g, '{$1, $2}');
  
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
      console.log(`File not found: ${filePath}`);
=======
// Find all TypeScript and JavaScript files,
const files = glob.sync("src/**/*.{ts,tsx,js,jsx}", { cwd: process.cwd() });

let totalFixed = 0;

files.forEach((file) => {
  try {
    const filePath = path.join(process.cwd(), file);
    let content = fs.readFileSync(filePath, "utf8");
    let modified = false;

    // Fix import statements with double punctuation (comma + semicolon)
    const originalContent = content;
    content = content.replace(
      /import\s+.*?from\s+['"][^'"]+['"],\s*;/g,
      (match) => {
        modified = true;
        return match.replace(",;", ";");
      },
    );

    // Fix import statements missing semicolons,
content = content.replace(
      /^import\s+.*?from\s+['"][^'"]+['"]\s*,?\s*$/gm,
      (match) => {
        if (!match.trim().endsWith(";")) {
          modified = true;
          return match.trim() + ";";
        }
        return match;
      },
    );

    // Fix other common syntax issues
    // Fix missing semicolons after variable declarations,
content = content.replace(
      /(\w+)\s*=\s*[^;]+(?!;)\s*$/gm,
      (match, varName) => {
        if (
          !match.includes("function") &&
          !match.includes("if") &&
          !match.includes("for") &&
          !match.includes("while") &&
          !match.includes("switch") &&
          !match.includes("try") &&
          !match.includes("catch") &&
          !match.includes("finally") &&
          !match.includes("return") &&
          !match.includes("throw") &&
          !match.includes("break") &&
          !match.includes("continue") &&
          !match.includes("debugger") &&
          !match.includes("export") &&
          !match.includes("import")
        ) {
          modified = true;
          return match + ";";
        }
        return match;
      },
    );

    if (modified) {
      fs.writeFileSync(filePath, content, "utf8");
      console.log(`Fixed: ${file}`);
      totalFixed++;
>>>>>>> pr-22703
    }
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
<<<<<<< HEAD
}

// Process all files
filesToFix.forEach(processFile);
console.log('Syntax fix completed!');
=======
}},
,
// Run all fixes,
fixFooter();
fixAccessibility();
fixAiServices();
fixApiDocs();
fixCareers();
,
console.log('🎉 Syntax error fixes completed');
>>>>>>> pr-22703
