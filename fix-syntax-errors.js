#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

console.log('🔧 Starting comprehensive syntax error fixes...');

//Files with known issues
const filesToFix = [
  'src/components/October2025CuttingEdgeContentBanner.tsx',
  'src/components/October2025CuttingEdgeAIBanner.tsx',
  'src/components/October2025AdvancedAIInnovationsBanner.tsx',
];

function fixDuplicateKeys(filePath) {
  if (!fs.existsSync(filePath)) return;

  let content = fs.readFileSync(filePath, 'utf8');

  //Fix duplicate icon keys
  content = content.replace(/icon: '🚀',\s*icon: <[^>]+>/g, match => {
    const iconMatch = match.match(/icon: <([^>]+)>/);
    return iconMatch ? `icon: ${iconMatch[1]}` : match;
  });

  fs.writeFileSync(filePath, content);
  console.log(`✅ Fixed duplicate keys in ${filePath}`);
}

function fixJSXStructure(filePath) {
  if (!fs.existsSync(filePath)) return;

  let content = fs.readFileSync(filePath, 'utf8');

  //Fix common JSX structure issues
  content = content.replace(
    /<div className="flex items-center gap-3 mb-4">\s*<div className="[^"]*">\s*<[^>]+>\s*<\/div>\s*<div className="[^"]*">\s*<[^>]+>\s*<\/div>\s*<\/div>\s*<div className="flex-1">/g,
    '<div className="flex items-center gap-3 mb-4">\n              <div className="p-3 bg-emerald-500/20 rounded-xl group-hover:bg-emerald-500/30 transition-colors">\n                <Shield className="w-8 h-8 text-emerald-300" />\n              </div>\n              <div className="flex-1">'
  );

  //Fix missing closing tags
  content = content.replace(
    /<Link[^>]*>\s*<div className="flex items-center gap-3 mb-4">\s*<div className="[^"]*">\s*<[^>]+>\s*<\/div>\s*<div className="flex-1">\s*<span[^>]*>[^<]*<\/span>\s*<\/div>\s*<\/div>\s*<h3[^>]*>[^<]*<\/h3>\s*<p[^>]*>[^<]*<\/p>\s*<div className="flex items-center justify-between">\s*<div[^>]*>[^<]*<\/div>\s*<[^>]+>\s*<\/div>\s*<\/div>\s*<\/Link>/g,
    match => {
      return match.replace(/<\/div>\s*<\/Link>/, '</div>\n            </Link>');
    }
  );

  fs.writeFileSync(filePath, content);
  console.log(`✅ Fixed JSX structure in ${filePath}`);
}

function addMissingImports(filePath) {
  if (!fs.existsSync(filePath)) return;

  let content = fs.readFileSync(filePath, 'utf8');

  //Add common missing imports
  if (content.includes('Shield') && !content.includes('import { Shield')) {
    content = content.replace(
      /import React[^;]+;/,
      `import React from 'react';\nimport { Shield, Zap, Sparkles, TrendingUp, ArrowRight } from 'lucide-react';`
    );
  }

  if (content.includes('Link') && !content.includes('import { Link')) {
    content = content.replace(
      /import React[^;]+;/,
      `import React from 'react';\nimport { Link } from 'react-router-dom';\nimport { Shield, Zap, Sparkles, TrendingUp, ArrowRight } from 'lucide-react';`
    );
  }

  fs.writeFileSync(filePath, content);
  console.log(`✅ Added missing imports to ${filePath}`);
}

// Fix each file
filesToFix.forEach(filePath => {
  const fullPath = path.join(process.cwd(), filePath);

  if (fs.existsSync(fullPath)) {
    console.log(`\n🔧 Fixing ${filePath}...`);

    fixDuplicateKeys(fullPath);
    fixJSXStructure(fullPath);
    addMissingImports(fullPath);
  } else {
    console.log(`⚠️  File not found: ${filePath}`);
  }
});

console.log('\n✅ Syntax error fixes completed!');
console.log('🚀 Running build test...');

try {
  execSync('pnpm run build:no-check', { stdio: 'inherit' });
  console.log('🎉 Build successful!');
} catch (error) {
  console.log('❌ Build still has errors. Manual fixes needed.');
  process.exit(1);
}
