#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Get all TypeScript/TSX files
const files = await glob('app/**/*.{ts,tsx}', { cwd: '/workspace' });

function fixHtmlEntities(content) {
  // Fix HTML entities
  content = content.replace(/&quot;/g, '"');
  content = content.replace(/&amp;/g, '&');
  content = content.replace(/&lt;/g, '<');
  content = content.replace(/&gt;/g, '>');
  content = content.replace(/&apos;/g, "'");
  content = content.replace(/&#39;/g, "'");
  content = content.replace(/&nbsp;/g, ' ');
  
  return content;
}

function fixCommonSyntaxErrors(content) {
  // Fix missing semicolons after object properties
  content = content.replace(/(\w+):\s*([^,}\n]+)(?=\s*[,}])/g, '$1: $2');
  
  // Fix missing commas in object literals
  content = content.replace(/(\w+):\s*([^,}\n]+)\s*\n\s*(\w+):/g, '$1: $2,\n    $3:');
  
  // Fix missing closing brackets
  content = content.replace(/(\w+):\s*\[([^\]]*)\s*$/gm, '$1: [$2]');
  
  // Fix incomplete function definitions
  content = content.replace(/const\s+(\w+)\s*=\s*\(\)\s*=>\s*\{\s*return;\s*\},/g, 'const $1 = () => {\n  // Implementation needed\n  return null;\n};');
  
  // Fix missing return statements
  content = content.replace(/export default function\s+(\w+)\(\)\s*\{\s*$/gm, 'export default function $1() {\n  return (\n    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">\n      <div className="container mx-auto px-4 py-8">\n        <h1 className="text-4xl font-bold text-white text-center mb-8">\n          $1\n        </h1>\n      </div>\n    </div>\n  );\n}');
  
  return content;
}

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Fix HTML entities
    content = fixHtmlEntities(content);
    
    // Fix common syntax errors
    content = fixCommonSyntaxErrors(content);
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

console.log('Starting HTML entity and syntax fixes...');

let fixedCount = 0;
for (const file of files) {
  const fullPath = path.join('/workspace', file);
  if (fs.existsSync(fullPath)) {
    if (fixFile(fullPath)) {
      fixedCount++;
    }
  }
}

console.log(`Fixed ${fixedCount} files.`);