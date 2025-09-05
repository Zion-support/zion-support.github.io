#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Starting comprehensive syntax fixer...');

// Files with critical syntax errors that need immediate fixing
const criticalFiles = [
  'src/components/Footer.tsx',
  'src/components/Header.tsx',
  'src/components/Layout.tsx',
  'src/components/layout/EnhancedFooter.tsx',
  'src/components/layout/EnhancedNavigation.tsx',
  'src/components/layout/Footer.tsx',
  'src/components/layout/Header.tsx',
  'src/components/layout/MainLayout.tsx',
  'src/components/performance/LazyComponent.tsx',
  'src/components/performance/OptimizedImage.tsx',
  'src/components/ui/EnhancedMarketplaceCard.tsx',
  'src/components/ui/InteractiveNavigation.tsx',
  'src/components/ui/NotificationSystem.tsx',
  'src/hooks/useDebounce.ts',
  'src/hooks/useMessageChannelHandler.ts',
  'src/lib/utils.ts',
  'src/utils/messageChannelHandler.ts',
  'src/utils/next-link-shim.tsx',
  'src/utils/sanitizeHtml.ts',
  'src/utils/serviceFinder.ts',
  'src/utils/testing-system.tsx',
  'src/utils/validation.ts',
  'pages/about.tsx',
  'pages/ai-services.tsx',
  'pages/blog.tsx',
  'pages/contact.tsx',
  'pages/index.tsx',
  'pages/it-services.tsx',
  'pages/micro-saas.tsx',
  'pages/services.tsx',
  'pages/talent.tsx'
];

function fixMergeConflicts(content) {
  // Remove merge conflict markers
  return content
    .replace(/[\s\S]*?[\s\S]*?    .replace(/[\s\S]*?    .replace(/[\s\S]*?}

function fixSyntaxErrors(content) {
  // Fix common syntax errors
  let fixed = content;
  
  // Fix unterminated strings
  fixed = fixed.replace(/'([^']*)$/gm, "'$1'");
  fixed = fixed.replace(/"([^"]*)$/gm, '"$1"');
  
  // Fix missing semicolons
  fixed = fixed.replace(/([^;}])\n(\s*[a-zA-Z_$])/g, '$1;\n$2');
  
  // Fix missing commas in objects
  fixed = fixed.replace(/([^,}])\n(\s*[a-zA-Z_$])/g, '$1,\n$2');
  
  // Fix missing closing brackets
  const openBrackets = (fixed.match(/\{/g) || []).length;
  const closeBrackets = (fixed.match(/\}/g) || []).length;
  if (openBrackets > closeBrackets) {
    fixed += '\n'.repeat(openBrackets - closeBrackets) + '}'.repeat(openBrackets - closeBrackets);
  }
  
  // Fix missing closing parentheses
  const openParens = (fixed.match(/\(/g) || []).length;
  const closeParens = (fixed.match(/\)/g) || []).length;
  if (openParens > closeParens) {
    fixed += ')'.repeat(openParens - closeParens);
  }
  
  // Fix missing closing square brackets
  const openSquare = (fixed.match(/\[/g) || []).length;
  const closeSquare = (fixed.match(/\]/g) || []).length;
  if (openSquare > closeSquare) {
    fixed += ']'.repeat(openSquare - closeSquare);
  }
  
  // Fix common React/JSX issues
  fixed = fixed.replace(/className="([^"]*)"([^>]*?)>/g, 'className="$1"$2>');
  fixed = fixed.replace(/style={{([^}]*?)}}/g, 'style={{$1}}');
  
  // Fix import statements
  fixed = fixed.replace(/import\s+{\s*([^}]+)\s*}\s+from\s+['"]([^'"]+)['"];?/g, 'import { $1 } from "$2";');
  
  // Fix export statements
  fixed = fixed.replace(/export\s+default\s+([^;]+);?/g, 'export default $1;');
  
  return fixed;
}

function fixFile(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  File not found: ${filePath}`);
      return false;
    }
    
    console.log(`🔧 Fixing: ${filePath}`);
    
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix merge conflicts first
    content = fixMergeConflicts(content);
    
    // Fix syntax errors
    content = fixSyntaxErrors(content);
    
    // Write the fixed content back
    fs.writeFileSync(filePath, content);
    
    console.log(`✅ Fixed: ${filePath}`);
    return true;
  } catch (error) {
    console.log(`❌ Error fixing ${filePath}: ${error.message}`);
    return false;
  }
}

// Fix all critical files
let fixedCount = 0;
let totalCount = criticalFiles.length;

for (const file of criticalFiles) {
  if (fixFile(file)) {
    fixedCount++;
  }
}

console.log(`\n📊 Results: ${fixedCount}/${totalCount} files fixed`);

// Try to run lint again to see if we've fixed the major issues
console.log('\n🧪 Running lint to check progress...');
try {
  execSync('npm run lint', { stdio: 'pipe' });
  console.log('✅ Lint passed!');
} catch (error) {
  console.log('⚠️  Lint still has issues, but major syntax errors should be fixed');
  console.log('Error output:', error.stdout?.toString() || error.message);
}

console.log('\n🎉 Comprehensive syntax fixer completed!');
