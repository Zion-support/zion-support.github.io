#!/usr/bin/env node

const fs = require('fs');

console.log('🔧 Fixing [slug].tsx file...');

const filePath = '/workspace/pages/[slug].tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Fix the corrupted syntax
content = content
  // Remove extra semicolons and colons
  .replace(/,\s*;/g, ',')
  .replace(/;\s*;/g, ';')
  .replace(/:\s*;/g, ':')
  .replace(/;\s*:/g, ':')
  // Fix function declarations
  .replace(/const:\s*/g, 'const ')
  .replace(/function:\s*/g, 'function ')
  // Fix array concatenation
  .replace(/\.concat\(\s*;/g, '.concat(')
  .replace(/,\s*\)\s*;/g, ')')
  // Fix return statements
  .replace(/return\s*\(\s*;/g, 'return (')
  .replace(/\)\s*;\s*}/g, ');')
  // Fix variable declarations
  .replace(/const\s+all:\s*any\[\]\s*=\s*\(\[\]\s*as\s*any\[\]\)\s*\.concat\(\s*;/g, 'const all: any[] = ([] as any[]).concat(')
  // Fix the service finding logic
  .replace(/const\s+byLink\s*=\s*all\.find\(s\s*=>\s*\{\s*;\s*try\s*\{\s*;\s*const\s+url\s*=\s*new\s+URL\(s\.link\)\s*,\s*;\s*return\s+url\.pathname\.replace\(\/\/\^\/\+\|\/\+$\/g,\s*''\)\s*===\s*slug\.replace\(\/\/\^\/\+\|\/\+$\/g,\s*''\);\s*\}\s*catch\s*\{\s*;\s*return\s+false;\s*\}\s*\}\s*,\s*;\s*if\s*\(\s*byLink\s*\)\s*return\s+byLink\s*,\s*;/g, 
    'const byLink = all.find(s => {\n      try {\n        const url = new URL(s.link);\n        return url.pathname.replace(/^\\/+|\\/+$/g, \'\') === slug.replace(/^\\/+|\\/+$/g, \'\');\n      } catch {\n        return false;\n      }\n    });\n    if (byLink) return byLink;\n')
  // Fix the useMemo closing
  .replace(/return\s+byLink\s*,\s*function\s+getAllServices/g, 'return byLink;\n  }, [slug]);\n\nfunction getAllServices')
  // Clean up any remaining syntax issues
  .replace(/;\s*$/gm, ';')
  .replace(/,\s*$/gm, ',');

fs.writeFileSync(filePath, content, 'utf8');
console.log('✅ Fixed [slug].tsx file');