#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

console.log('🔧 Starting final comprehensive fix...');

// Function to fix common JSX and syntax issues
function fixCommonIssues(content) {
  // Fix malformed JSX fragments
  content = content.replace(/<React\.Fragment>([^<]*?)(?![^<]*<\/React\.Fragment>)/g, '<React.Fragment>$1</React.Fragment>');
  content = content.replace(/<>([^<]*?)(?![^<]*<\/>)/g, '<>$1</>');
  
  // Fix unclosed JSX tags
  content = content.replace(/<HelmetProvider>([^<]*?)(?![^<]*<\/HelmetProvider>)/g, '<HelmetProvider>$1</HelmetProvider>');
  content = content.replace(/<Helmet>([^<]*?)(?![^<]*<\/Helmet>)/g, '<Helmet>$1</Helmet>');
  
  // Fix malformed object properties
  content = content.replace(/{\s*icon:\s*([^,]+),\s*title:\s*'([^']+)',\s*description:\s*'([^']+)',\s*}\s*]/g, '{\n      icon: $1,\n      title: \'$2\',\n      description: \'$3\',\n    }\n  ];');
  
  // Fix missing commas in arrays
  content = content.replace(/}\s*{\s*icon:/g, '},\n    {\n      icon:');
  content = content.replace(/}\s*{\s*title:/g, '},\n    {\n      title:');
  
  // Fix malformed JSX expressions
  content = content.replace(/<div([^>]*)>([^<]*?)(?![^<]*<\/div>)/g, '<div$1>$2</div>');
  content = content.replace(/<h1([^>]*)>([^<]*?)(?![^<]*<\/h1>)/g, '<h1$1>$2</h1>');
  content = content.replace(/<h2([^>]*)>([^<]*?)(?![^<]*<\/h2>)/g, '<h2$1>$2</h2>');
  content = content.replace(/<h3([^>]*)>([^<]*?)(?![^<]*<\/h3>)/g, '<h3$1>$3</h3>');
  
  // Fix missing semicolons
  content = content.replace(/([^;}])\n/g, '$1;\n');
  
  // Fix malformed function declarations
  content = content.replace(/const\s+(\w+)\s*=\s*\(\s*\)\s*=>\s*{([^}]*?)(?![^}]*})/g, 'const $1 = () => {\n  $2\n}');
  
  // Fix malformed component declarations
  content = content.replace(/const\s+(\w+):\s*React\.FC\s*=\s*\(\s*\)\s*=>\s*{([^}]*?)(?![^}]*})/g, 'const $1: React.FC = () => {\n  $2\n}');
  
  // Fix missing closing braces for functions
  content = content.replace(/([^}])\n\s*export default/g, '$1\n};\n\nexport default');
  
  // Fix malformed return statements
  content = content.replace(/return\s*\(\s*<([^>]*?)>([^<]*?)(?![^<]*<\/\1>)/g, 'return (\n    <$1>$2</$1>');
  
  // Fix missing closing parentheses
  content = content.replace(/\(\s*<([^>]*?)>([^<]*?)(?![^<]*<\/\1>)/g, '(\n    <$1>$2</$1>');
  
  return content;
}

// Function to fix specific file patterns
function fixSpecificFile(content, filePath) {
  // Fix common patterns in AI pages
  if (filePath.includes('ai-') && filePath.includes('/page.tsx')) {
    // Fix malformed feature arrays
    content = content.replace(/const features = \[\s*,\s*{/g, 'const features = [\n    {');
    content = content.replace(/const applications = \[\s*,\s*{/g, 'const applications = [\n    {');
    content = content.replace(/const benefits = \[\s*,\s*{/g, 'const benefits = [\n    {');
    
    // Fix malformed JSX
    content = content.replace(/<h1([^>]*)>([^<]*?)(?![^<]*<\/h1>)/g, '<h1$1>$2</h1>');
    content = content.replace(/<div([^>]*)>([^<]*?)(?![^<]*<\/div>)/g, '<div$1>$2</div>');
    
    // Fix syntax errors
    content = content.replace(/,\s*$/gm, '');
    content = content.replace(/;\s*$/gm, '');
    content = content.replace(/}\s*$/gm, '}');
    
    // Fix missing return statements
    if (!content.includes('return (') && content.includes('const ') && content.includes('React.FC')) {
      content = content.replace(/(const \w+: React\.FC = \(\) => {)/g, '$1\n  return (');
    }
  }
  
  return content;
}

// Function to process a single file
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Apply fixes
    content = fixCommonIssues(content);
    content = fixSpecificFile(content, filePath);
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JSX files
function findFiles(dir, extensions = ['.tsx', '.ts', '.jsx', '.js']) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip certain directories
        if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(item)) {
          traverse(fullPath);
        }
      } else if (extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
async function main() {
  try {
    console.log('📁 Finding files to process...');
    const files = findFiles('./app');
    
    console.log(`📊 Found ${files.length} files to process`);
    
    let fixedCount = 0;
    const errors = [];
    
    for (const file of files) {
      try {
        if (processFile(file)) {
          fixedCount++;
        }
      } catch (error) {
        errors.push({ file, error: error.message });
      }
    }
    
    console.log(`\n📈 Results:`);
    console.log(`✅ Fixed: ${fixedCount} files`);
    console.log(`❌ Errors: ${errors.length} files`);
    
    if (errors.length > 0) {
      console.log('\n🚨 Files with errors:');
      errors.forEach(({ file, error }) => {
        console.log(`  - ${file}: ${error}`);
      });
    }
    
    console.log('\n🎉 Final comprehensive fix completed!');
    
  } catch (error) {
    console.error('💥 Fatal error:', error.message);
    process.exit(1);
  }
}

main();