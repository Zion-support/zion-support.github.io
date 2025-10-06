#!/usr/bin/env node
/**
 * Script to fix remaining syntax errors in blog files
 * Focuses on specific patterns that weren't caught by the first script
 */import { execSync } from 'child_process';
import fs from 'fs';

console.log('🔧 Fixing remaining syntax errors...');

//Get the list of files with errors from the lint output
const errorFiles = [
  './app/blog/ai-2025-2026-mega-trends-breakthrough/page.tsx',
  './app/blog/ai-2025-advanced-autonomous-operations/page.tsx',
  './app/blog/ai-2025-cognitive-automation-breakthrough/page.tsx',
  './app/blog/ai-2025-december-advanced-autonomous-systems/page.tsx',
  './app/blog/ai-2025-december-quantum-computing-breakthrough/page.tsx',
  './app/blog/ai-2025-december-revolutionary-autonomous-enterprise/page.tsx',
  './app/blog/ai-2025-december-ultimate-autonomous-enterprise-revolution/page.tsx',
  './app/blog/ai-2025-february-quantum-ai-breakthrough-enterprise-transformation/page.tsx',
  './app/blog/ai-2025-january-advanced-ai-revolution/page.tsx',
  './app/blog/ai-2025-january-cutting-edge-trends-breakthrough/page.tsx',
  './app/blog/ai-2025-january-enterprise-automation-breakthrough/page.tsx',
  './app/blog/ai-2025-march-autonomous-enterprise-operations-revolution/page.tsx',
  './app/blog/ai-2026-2027-revolutionary-breakthrough-comprehensive-guide/page.tsx',
  './app/blog/ai-2026-adaptive-neural-architectures-breakthrough/page.tsx',
  './app/blog/ai-2026-advanced-neural-architectures/page.tsx',
  './app/blog/ai-2026-advanced-neural-optimization-revolution/page.tsx',
  './app/blog/ai-2026-april-revolutionary-breakthrough/page.tsx',
  './app/blog/ai-2026-april-ultimate-breakthrough-revolution/page.tsx',
  './app/blog/ai-2026-august-breakthrough-innovations/page.tsx',
  './app/blog/ai-2026-autonomous-agent-factories/page.tsx',
  './app/blog/ai-2026-autonomous-business-intelligence-breakthrough/page.tsx',
  './app/blog/ai-2026-autonomous-business-intelligence-mega-breakthrough/page.tsx',
  './app/blog/ai-2026-autonomous-business-intelligence/page.tsx',
  './app/blog/ai-2026-autonomous-enterprise-architecture/page.tsx',
  './app/blog/ai-2026-autonomous-enterprise-automation-mega-breakthrough/page.tsx',
  './app/blog/ai-2026-autonomous-enterprise-operations-mega-guide/page.tsx',
  './app/blog/ai-2026-autonomous-enterprise-operations/page.tsx',
  './app/blog/ai-2026-autonomous-enterprise-revolution/page.tsx',
  './app/blog/ai-2026-autonomous-finance-operations/page.tsx',
  './app/blog/ai-2026-autonomous-operations/page.tsx',
  './app/blog/ai-2026-breakthrough-innovations-january/page.tsx',
  './app/blog/ai-2026-breakthrough-innovations-mega-success/page.tsx',
  './app/blog/ai-2026-breakthrough-innovations/page.tsx',
  './app/blog/ai-2026-consensus-intelligence-breakthrough/page.tsx',
  './app/blog/ai-2026-december-mega-breakthrough-revolution/page.tsx',
  './app/blog/ai-2026-edge-computing-revolution/page.tsx',
  './app/blog/ai-2026-enterprise-automation-breakthrough/page.tsx',
  './app/blog/ai-2026-enterprise-automation-revolution/page.tsx',
  './app/blog/ai-2026-enterprise-automation-revolutionary-breakthrough/page.tsx',
  './app/blog/ai-2026-enterprise-breakthrough/page.tsx',
  './app/blog/ai-2026-february-mega-breakthrough-revolution/page.tsx',
  './app/blog/ai-2026-february-revolutionary-breakthrough-revolution/page.tsx',
  './app/blog/ai-2026-february-transcendent-automation-revolution/page.tsx',
  './app/blog/ai-2026-february-ultimate-consciousness-breakthrough/page.tsx'
];

let fixedCount = 0;

for (const file of errorFiles) {
  try {
    if (!fs.existsSync(file)) {
      console.log(`⚠️ File not found: ${file}`);
      continue;
    }

    let content = fs.readFileSync(file, 'utf8');
    let modified = false;

    //Fix malformed metadata objects - missing comma after Metadata type
    const metadataTypePattern = /export const metadata: Metadata = \{\s*title:/g;
    if (metadataTypePattern.test(content)) {
      content = content.replace(metadataTypePattern, 'export const metadata: Metadata = {\n  title:');
      modified = true;
    }

    //Fix missing commas in metadata objects
    const missingCommaPattern = /(\w+):\s*'[^']*'\s*\n\s*(\w+):/g;
    if (missingCommaPattern.test(content)) {
      content = content.replace(missingCommaPattern, '$1: \'$2\',\n  $2:');
      modified = true;
    }

    //Fix specific patterns like "title: '...' description:" without comma
    const titleDescriptionPattern = /title:\s*'[^']*'\s*description:/g;
    if (titleDescriptionPattern.test(content)) {
      content = content.replace(titleDescriptionPattern, (match) => {
        return match.replace(/'(\s+)description:/, "',\n  description:");
      });
      modified = true;
    }

    //Fix malformed JSX with unexpected tokens
    const unexpectedTokenPattern = /<div>\s*\{\/\* content \*\/\}\s*\}\s*return\s*\(/g;
    if (unexpectedTokenPattern.test(content)) {
      content = content.replace(unexpectedTokenPattern, 'return (');
      modified = true;
    }

    //Fix malformed JSX structures
    const malformedJSXPattern = /<div>\s*\{\/\* content \*\/\}\s*return\s*\(/g;
    if (malformedJSXPattern.test(content)) {
      content = content.replace(malformedJSXPattern, 'return (');
      modified = true;
    }

    //Fix specific error patterns
    const errorPattern1 = /<div>\s*\{\/\* content \*\/\}\s*\}\s*return\s*\(/g;
    if (errorPattern1.test(content)) {
      content = content.replace(errorPattern1, 'return (');
      modified = true;
    }

    //Fix missing commas in object literals
    const objectCommaPattern = /(\w+):\s*'[^']*'\s*\n\s*(\w+):/g;
    if (objectCommaPattern.test(content)) {
      content = content.replace(objectCommaPattern, '$1: \'$2\',\n  $2:');
      modified = true;
    }

    //Fix specific malformed patterns
    const specificPattern = /<div>\s*\{\/\* content \*\/\}\s*\}\s*return\s*\(/g;
    if (specificPattern.test(content)) {
      content = content.replace(specificPattern, 'return (');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(file, content);
      console.log(`✅ Fixed syntax errors in ${file}`);
      fixedCount++;
    }
  } catch (error) {
    console.log(`❌ Error processing ${file}: ${error.message}`);
  }
}

console.log(`\n🎉 Fixed syntax errors in ${fixedCount} files`);

// Run a quick syntax check
console.log('\n🔍 Running syntax check...');
try {
  execSync('npm run type-check', { stdio: 'pipe' });
  console.log('✅ TypeScript syntax check passed');
} catch (error) {
  console.log('⚠️ TypeScript syntax check failed, but continuing...');
}

console.log('\n🔍 Running linting to verify fixes...');
try {
  execSync('npm run lint:comprehensive', { stdio: 'inherit' });
  console.log('✅ All syntax errors have been resolved!');
} catch (error) {
  console.log('⚠️ Some syntax errors may still exist. Check the output above.');
}
