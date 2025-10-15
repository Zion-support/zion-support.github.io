#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing remaining syntax errors...');

// Function to fix specific syntax patterns
function fixSyntaxPatterns(content) {
  // Fix import statements with extra quotes
  content = content.replace(/import\s+([^'"]+)\s+from\s+'([^']+)';'/g, "import $1 from '$2';");
  
  // Fix import statements with missing quotes
  content = content.replace(/import\s+([^'"]+)\s+from\s+([^'";\n]+);?/g, (match, imports, module) => {
    if (!module.startsWith("'") && !module.startsWith('"')) {
      return `import ${imports} from '${module.trim()}';`;
    }
    return match;
  });
  
  // Fix destructuring imports
  content = content.replace(/import\s*{\s*([^}]+)\s*}\s*from\s*([^'";\n]+);?/g, (match, imports, module) => {
    if (!module.startsWith("'") && !module.startsWith('"')) {
      return `import { ${imports} } from '${module.trim()}';`;
    }
    return match;
  });
  
  // Fix object properties
  content = content.replace(/(\w+):\s*'([^']+)',/g, "$1: '$2',");
  content = content.replace(/(\w+):\s*([^,}]+),/g, (match, key, value) => {
    if (!value.startsWith("'") && !value.startsWith('"') && !value.startsWith('{') && !value.includes('(')) {
      return `${key}: '${value.trim()}',`;
    }
    return match;
  });
  
  // Fix JSX attributes
  content = content.replace(/(\w+)=([^'">\s]+)(?=\s|>)/g, (match, attr, value) => {
    if (!value.startsWith("'") && !value.startsWith('"') && !value.startsWith('{')) {
      return `${attr}='${value}'`;
    }
    return match;
  });
  
  // Fix className attributes
  content = content.replace(/className=([^'">\s]+)/g, (match, className) => {
    if (!className.startsWith("'") && !className.startsWith('"')) {
      return `className='${className}'`;
    }
    return match;
  });
  
  // Remove extra semicolons
  content = content.replace(/;+/g, ';');
  content = content.replace(/;\s*;/g, ';');
  content = content.replace(/;\s*$/gm, ';');
  
  // Fix JSX closing tags
  content = content.replace(/<\/\s*([^>]+)\s*;/g, '</$1>');
  
  // Fix function declarations
  content = content.replace(/function\s+(\w+)\s*\(\s*\)\s*;\s*{/g, 'function $1() {');
  content = content.replace(/export\s+default\s+function\s+(\w+)\s*\(\s*\)\s*;\s*{/g, 'export default function $1() {');
  
  // Fix array syntax
  content = content.replace(/\[\s*;\s*\]/g, '[]');
  content = content.replace(/\[\s*([^,\]]+);\s*\]/g, '[$1]');
  
  // Clean up whitespace
  content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
  content = content.replace(/^\s+$/gm, '');
  
  return content;
}

// Function to fix a specific file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    content = fixSyntaxPatterns(content);
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
async function main() {
  // Fix specific problematic files
  const problematicFiles = [
    '/workspace/app/components/Sidebar.tsx',
    '/workspace/app/components/Navigation.tsx',
    '/workspace/app/components/Footer.tsx',
    '/workspace/app/components/ErrorBoundary.tsx',
    '/workspace/app/components/PerformanceMonitor.tsx',
    '/workspace/app/components/AccessibilityEnhancer.tsx',
    '/workspace/app/components/LoadingSpinner.tsx'
  ];
  
  let fixedCount = 0;
  
  for (const file of problematicFiles) {
    if (fs.existsSync(file)) {
      if (fixFile(file)) {
        fixedCount++;
      }
    }
  }
  
  console.log(`\n📊 Summary:`);
  console.log(`   Files fixed: ${fixedCount}`);
  
  console.log('\n🎉 Remaining syntax fix completed!');
}

main().catch(console.error);