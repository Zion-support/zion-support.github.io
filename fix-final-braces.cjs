#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Fix all remaining missing closing braces
function fixFinalBraces() {
  console.log('🔧 Fixing all remaining missing closing braces...');
  
  // Get all TypeScript/JSX files
  const files = execSync('find /workspace -name "*.tsx" -o -name "*.ts" | grep -v node_modules', { encoding: 'utf8' })
    .trim().split('\n').filter(line => line.trim());
  
  let fixed = 0;
  
  files.forEach(file => {
    try {
      let content = fs.readFileSync(file, 'utf8');
      const originalContent = content;
      
      // Fix missing closing braces for function components that end with );
      if (content.includes('export default function') && content.trim().endsWith(');')) {
        content = content.trim() + '\n}';
      }
      
      // Fix missing closing braces for arrow functions that end with );
      if (content.includes('const') && content.includes('= () => {') && content.trim().endsWith(');')) {
        content = content.trim() + '\n}';
      }
      
      if (content !== originalContent) {
        fs.writeFileSync(file, content);
        console.log(`✅ Fixed: ${file}`);
        fixed++;
      }
    } catch (error) {
      console.log(`⚠️  Could not process ${file}: ${error.message}`);
    }
  });
  
  console.log(`\n📊 Fixed ${fixed} files`);
  return fixed;
}

// Run the fix
const fixed = fixFinalBraces();

if (fixed > 0) {
  console.log('\n🎉 Running final checks...');
  try {
    execSync('cd /workspace && pnpm run type-check 2>&1 | head -10', { stdio: 'inherit' });
  } catch (error) {
    console.log('Type check completed with some issues');
  }
  
  try {
    execSync('cd /workspace && pnpm run lint 2>&1 | head -10', { stdio: 'inherit' });
  } catch (error) {
    console.log('Lint check completed with some issues');
  }
}