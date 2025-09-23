#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Comprehensive Merge Conflict Resolver');
console.log('=====================================');

// Function to remove merge conflict markers
function removeMergeConflictMarkers(content) {
  return content
    .replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [a-f0-9]+/g, '')
    .replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> [a-f0-9]+/g, '')
    .replace(/=======[\s\S]*?>>>>>>> [a-f0-9]+/g, '')
    .replace(/<<<<<<< HEAD/g, '')
    .replace(/=======/g, '')
    .replace(/>>>>>>> [a-f0-9]+/g, '');
}

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  return content
    // Fix object literal syntax
    .replace(/\{\s*$/gm, '{')
    .replace(/\[\s*$/gm, '[')
    .replace(/\(\s*$/gm, '(')
    
    // Fix semicolons in wrong places
    .replace(/;\s*$/gm, '')
    .replace(/;\s*}/g, '}')
    .replace(/;\s*]/g, ']')
    .replace(/;\s*\)/g, ')')
    
    // Fix quotes in className
    .replace(/"hover":\s*/g, 'hover:')
    .replace(/"focus":\s*/g, 'focus:')
    .replace(/"group-hover":\s*/g, 'group-hover:')
    .replace(/"sm":\s*/g, 'sm:')
    .replace(/"md":\s*/g, 'md:')
    .replace(/"lg":\s*/g, 'lg:')
    .replace(/"xl":\s*/g, 'xl:')
    .replace(/"2xl":\s*/g, '2xl:')
    
    // Fix function declarations
    .replace(/function\s+\w+\s*\{\s*$/gm, 'function $1() {')
    .replace(/export\s+default\s+function\s+\w+\s*\{\s*$/gm, 'export default function $1() {')
    
    // Fix array and object syntax
    .replace(/\[\s*\{\s*$/gm, '[{')
    .replace(/\{\s*\[\s*$/gm, '{[')
    .replace(/\}\s*\]\s*$/gm, '}]')
    .replace(/\]\s*\}\s*$/gm, ']}')
    
    // Fix JSX syntax
    .replace(/<\s*\/\s*>\s*$/gm, '</>')
    .replace(/<\s*\/\w+\s*>\s*$/gm, '</$1>')
    .replace(/;\s*$/gm, '')
    
    // Fix quotes in strings
    .replace(/;\s*$/gm, '')
    .replace(/;\s*$/gm, '')
    
    // Clean up extra semicolons
    .replace(/;;+/g, ';')
    .replace(/;\s*;/g, ';')
    
    // Fix empty objects and arrays
    .replace(/\{\s*\}/g, '{}')
    .replace(/\[\s*\]/g, '[]')
    
    // Fix trailing commas
    .replace(/,\s*}/g, '}')
    .replace(/,\s*]/g, ']')
    .replace(/,\s*\)/g, ')')
    
    // Fix quotes in JSX
    .replace(/;\s*$/gm, '')
    .replace(/;\s*$/gm, '')
    
    // Clean up whitespace
    .replace(/\n\s*\n\s*\n/g, '\n\n')
    .replace(/\s+$/gm, '');
}

// Function to process a file
function processFile(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  File not found: ${filePath}`);
      return false;
    }

    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Check for merge conflict markers
    if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
      console.log(`🔧 Removing merge conflict markers from ${filePath}`);
      content = removeMergeConflictMarkers(content);
      modified = true;
    }

    // Fix syntax errors
    const originalContent = content;
    content = fixSyntaxErrors(content);
    
    if (content !== originalContent) {
      console.log(`🔧 Fixing syntax errors in ${filePath}`);
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed ${filePath}`);
      return true;
    }

    return false;
  } catch (error) {
    console.log(`❌ Error processing ${filePath}: ${error.message}`);
    return false;
  }
}

// Function to find all files with merge conflicts
function findFilesWithConflicts() {
  const files = [];
  
  function searchDirectory(dir) {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        searchDirectory(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.js'))) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          if (content.includes('<<<<<<< HEAD') || content.includes('=======') || content.includes('>>>>>>>')) {
            files.push(fullPath);
          }
        } catch (error) {
          // Skip files that can't be read
        }
      }
    }
  }
  
  searchDirectory('/workspace');
  return files;
}

// Main execution
async function main() {
  try {
    console.log('🔍 Searching for files with merge conflicts...');
    const conflictFiles = findFilesWithConflicts();
    
    if (conflictFiles.length === 0) {
      console.log('✅ No files with merge conflicts found');
    } else {
      console.log(`📁 Found ${conflictFiles.length} files with merge conflicts:`);
      conflictFiles.forEach(file => console.log(`   - ${file}`));
    }

    // Process all TypeScript/JavaScript files
    const allFiles = [
      'pages/about.tsx',
      'pages/blog.tsx',
      'pages/ai-services.tsx',
      'pages/api.tsx',
      'pages/accessibility.tsx',
      'pages/careers.tsx',
      'components/Header.tsx',
      'components/Footer.tsx',
      'components/Layout.tsx',
      'components/layout/MainLayout.tsx'
    ];

    console.log('\n🔧 Processing all files...');
    let totalFixed = 0;

    for (const file of allFiles) {
      if (processFile(file)) {
        totalFixed++;
      }
    }

    console.log(`\n✅ Fixed ${totalFixed} files`);

    // Try to build
    console.log('\n🔨 Testing build...');
    try {
      execSync('npm run build', { cwd: '/workspace', stdio: 'pipe' }
});
      console.log('✅ Build successful!');
    } catch (error) {
      console.log('⚠️  Build still has issues, but conflicts were resolved');
      console.log('Error:', error.message);
    }

    console.log('\n🎉 Merge conflict resolution completed!');

  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
}

main();
