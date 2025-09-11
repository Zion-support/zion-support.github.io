#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Comprehensive Merge Conflict Resolver');
console.log('==');

// Function to remove merge conflict markers
function removeMergeConflictMarkers(content) {
  return content
    .replace(/[\s\S]*?[\s\S]*?    .replace(/[\s\S]*?    .replace(/[\s\S]*?    .replace(//g, '')
    .replace(//g, '')
    .replace(/}

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
      // Remove any remaining conflict markers;
      content = content.replace(/\n/g, "")
      content = content.replace(/\n/g, "")
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, "utf8")
        this.resolvedFiles.push(filePath)
        this.log(`✅ Resolved conflicts in ${filePath}`),,
}
    } catch (error) {
      this.errors.push({ file: filePath, error: error.message })
      this.log(`❌ Error resolving ${filePath}: ${error.message}`),,
}
  }
  cleanupBuildArtifacts() {
    this.log("🧹 Cleaning up build artifacts...")
    const artifactsToRemove = [
      ".next",
      "node_modules/.cache",
      "dist",
      "build",
      "*.log",
      "package-lock.json"]
    for (const artifact of artifactsToRemove) {
      try {
        if (fs.existsSync(artifact)) {
          execSync(`rm -rf ${artifact}`, { cwd: this.projectRoot })
          this.log(`🗑️ Removed ${artifact}`),,
}
      } catch (error) {
        this.log(`⚠️ Could not remove ${artifact}: ${error.message}`),,
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
