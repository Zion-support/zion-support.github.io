#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix common syntax errors in TSX files
function fixTSXFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix 1: Remove duplicate imports and malformed import statements
    content = content.replace(/import\s+{[^}]*}\s+from\s+['"][^'"]*['"];\s*import\s+{[^}]*}\s+from\s+['"][^'"]*['"];/g, (match) => {
      // Keep only the first import
      const imports = match.split(';').filter(line => line.trim().startsWith('import'));
      return imports[0] + ';';
    });
    
    // Fix 2: Fix malformed import statements
    content = content.replace(/import\s+{[^}]*,\s*from\s+['"][^'"]*['"];/g, (match) => {
      return match.replace(/,(\s*from)/, '$1');
    });
    
    // Fix 3: Fix object property syntax errors
    content = content.replace(/\{\s*icon:\s*(\w+),\s*\}/g, '{\n      icon: $1,');
    content = content.replace(/\{\s*icon:\s*(\w+),\s*$/gm, '{\n      icon: $1,');
    
    // Fix 4: Fix missing commas in object definitions
    content = content.replace(/(\w+):\s*'([^']*)'\s*\n\s*(\w+):/g, "$1: '$2',\n      $3:");
    content = content.replace(/(\w+):\s*"([^"]*)"\s*\n\s*(\w+):/g, '$1: "$2",\n      $3:');
    content = content.replace(/(\w+):\s*\[([^\]]*)\]\s*\n\s*(\w+):/g, '$1: [$2],\n      $3:');
    
    // Fix 5: Fix JSX closing tag issues
    content = content.replace(/<(\w+)([^>]*)>\s*$/gm, '<$1$2>');
    content = content.replace(/<\/?(\w+)([^>]*)>\s*$/gm, '<$1$2>');
    
    // Fix 6: Fix malformed JSX attributes
    content = content.replace(/className="([^"]*)"\s*$/gm, 'className="$1"');
    content = content.replace(/href="([^"]*)"\s*$/gm, 'href="$1"');
    
    // Fix 7: Fix comment syntax in JSX
    content = content.replace(/\/\/\s*([^<]*)/g, '');
    content = content.replace(/\/\*\s*([^*]*)\s*\*\//g, '');
    
    // Fix 8: Fix missing closing brackets and parentheses
    const openBrackets = (content.match(/\{/g) || []).length;
    const closeBrackets = (content.match(/\}/g) || []).length;
    const openParens = (content.match(/\(/g) || []).length;
    const closeParens = (content.match(/\)/g) || []).length;
    
    // Add missing closing brackets
    if (openBrackets > closeBrackets) {
      const missing = openBrackets - closeBrackets;
      content += '\n' + '}'.repeat(missing);
    }
    
    // Add missing closing parentheses
    if (openParens > closeParens) {
      const missing = openParens - closeParens;
      content += ')'.repeat(missing);
    }
    
    // Fix 9: Fix malformed function definitions
    content = content.replace(/const\s+(\w+):\s*React\.FC\s*=\s*\(\s*\)\s*=>\s*\{[^}]*\}/g, (match) => {
      if (!match.includes('return')) {
        return match.replace(/\{([^}]*)\}/, '{\n  return (\n    $1\n  );\n}');
      }
      return match;
    });
    
    // Fix 10: Fix duplicate content and malformed structures
    // Remove duplicate sections
    const lines = content.split('\n');
    const seen = new Set();
    const cleanedLines = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line && !seen.has(line) && !line.startsWith('//')) {
        seen.add(line);
        cleanedLines.push(lines[i]);
      } else if (!line) {
        cleanedLines.push(lines[i]);
      }
    }
    
    content = cleanedLines.join('\n');
    
    // Fix 11: Ensure proper JSX structure
    if (content.includes('return (') && !content.includes(');')) {
      content = content.replace(/return\s*\(([^)]*)$/s, 'return (\n    $1\n  );');
    }
    
    // Fix 12: Fix metadata object syntax
    if (filePath.includes('metadata.ts')) {
      content = content.replace(/export\s+const\s+metadata\s*=\s*\{([^}]*)\}/s, (match, body) => {
        const fixedBody = body.replace(/(\w+):\s*'([^']*)',?\s*$/gm, '$1: \'$2\',');
        return `export const metadata = {\n  ${fixedBody.trim()}\n};`;
      });
    }
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to fix specific problematic files
function fixSpecificFiles() {
  const problematicFiles = [
    '/workspace/src/about/page.tsx',
    '/workspace/src/ai-ab-testing/page.tsx',
    '/workspace/src/ai-analytics-dashboard/page.tsx',
    '/workspace/src/ai-analytics/page.tsx',
    '/workspace/src/metadata.ts'
  ];
  
  problematicFiles.forEach(filePath => {
    if (fs.existsSync(filePath)) {
      fixTSXFile(filePath);
    }
  });
}

// Main execution
async function main() {
  console.log('Starting syntax error fixes...');

  // Fix specific problematic files first
  fixSpecificFiles();

  // Find all TSX/TS files with errors
  const files = await glob('/workspace/src/**/*.{tsx,ts}', { ignore: ['**/node_modules/**'] });

  let fixedCount = 0;
  files.forEach(file => {
    if (fixTSXFile(file)) {
      fixedCount++;
    }
  });

  console.log(`Fixed ${fixedCount} files`);
  console.log('Syntax error fixes completed!');
}

main().catch(console.error);