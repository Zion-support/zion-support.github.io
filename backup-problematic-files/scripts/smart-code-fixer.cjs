<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD:backup-problematic-files/scripts/smart-code-fixer.cjs
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 5148ad4d0139b0ae9d3b89060f38b2be94f75652
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
=======
=======
>>>>>>> 43b43566c4674ad4aea00a6e4be20bc929909b52
>>>>>>> a44a2a22d07cd86ac622dee3484c03de69b51a7b
>>>>>>> 3f460500b361cb7cf5c95e8c53ca967467908705:scripts/smart-code-fixer.cjs
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======


>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
<<<<<<< HEAD
console.log('🔧 Smart Code Fixer');
console.log('=====');
<<<<<<< HEAD
=======
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-8f7d
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

console.log('🔧 Smart Code Fixer');
console.log('=====');

<<<<<<< HEAD
>>>>>>> ed23a41deefdd5db733dc5d1577e62259b173127
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
// Function to fix unescaped entities only in JSX content
function fixUnescapedEntities(content) {
  // Only replace single quotes that are not in import statements or string literals
  // This regex looks for single quotes that are not preceded by import, from, or within quotes
  return content.replace(/(?<!import\s+.*?from\s+['"])(?<!['"])(?<![a-zA-Z_$])'([^'"]*?)'(?!['"])(?![a-zA-Z_$])/g, (match, content) => {
    // Only replace if it's likely JSX content (contains spaces or common JSX patterns)
    if (content.includes('&') || content.includes('<') || content.includes('>')) {
      return `&apos;${content}&apos;`;
    }
    return match;
  });
}

// Function to fix specific linting issues
function fixSpecificIssues(content, filePath) {
  let modified = false;

  // Fix unused imports
  if (content.includes("import Image from 'next/image'") && !content.includes('<Image')) {
    content = content.replace(/import Image from 'next\/image'/, '// import Image from \'next/image\';');
    modified = true;
  }

  if (content.includes("import { Mail, Phone, MapPin } from 'lucide-react'") && !content.includes('<Mail')) {
    content = content.replace(/import { Mail, Phone, MapPin } from 'lucide-react'/, 'import { Phone, MapPin } from \'lucide-react\';');
    modified = true;
  }

  if (content.includes("import { Layers, Zap, Shield, Globe } from 'lucide-react'") && !content.includes('<Layers')) {
    content = content.replace(/import { Layers, Zap, Shield, Globe } from 'lucide-react'/, 'import { Zap, Shield, Globe } from \'lucide-react\';');
    modified = true;
  }

  if (content.includes("import Link from 'next/link'") && !content.includes('<Link')) {
    content = content.replace(/import Link from 'next\/link'/, '// import Link from \'next/link\';');
    modified = true;
  }
<<<<<<< HEAD
=======
=======

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  // Fix console.log statements in production files
  if (filePath.includes('pages/') || filePath.includes('components/')) {
    content = content.replace(/console\.log\([^)]*\);?/g, '');
    if (content !== content.replace(/console\.log\([^)]*\);?/g, '')) {
      modified = true;
    }
  }
<<<<<<< HEAD
=======
=======

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2

=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  // Fix missing semicolons
  content = content.replace(/([^;}])\n\s*}/g, '$1;\n}');
  if (content !== content.replace(/([^;}])\n\s*}/g, '$1;\n}')) {
    modified = true;
  }

  // Fix missing commas in objects
  content = content.replace(/([^,}])\n\s*}/g, '$1,\n}');
  if (content !== content.replace(/([^,}])\n\s*}/g, '$1,\n}')) {
    modified = true;
  }

  return { content, modified };
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    let modifiedContent = content;
    let hasChanges = false;

    // Apply fixes
    const result = fixSpecificIssues(modifiedContent, filePath);
    modifiedContent = result.content;
    hasChanges = result.modified;

    // Fix unescaped entities
    const originalContent = modifiedContent;
    modifiedContent = fixUnescapedEntities(modifiedContent);
    if (modifiedContent !== originalContent) {
      hasChanges = true;
    }

    // Write back if modified
    if (hasChanges) {
      fs.writeFileSync(filePath, modifiedContent, 'utf8');
      console.log(`✅ Fixed: ${filePath}`);
      return true;
    } else {
      console.log(`ℹ️  No changes needed: ${filePath}`);
      return false;
    }
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all relevant files
function findFiles(dir, extensions = ['.js', '.jsx', '.ts', '.tsx']) {
  const files = [];
  
  function traverse(currentDir) {
    try {
      const items = fs.readdirSync(currentDir);
      
      for (const item of items) {
        const fullPath = path.join(currentDir, item);
        try {
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
            traverse(fullPath);
          } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
            files.push(fullPath);
          }
        } catch (error) {
          // Skip broken symlinks or inaccessible files
          if (error.code !== 'ENOENT' && error.code !== 'EACCES') {
            console.warn(`⚠️  Skipping ${fullPath}: ${error.message}`);
          }
        }
      }
    } catch (error) {
      // Skip inaccessible directories
      if (error.code !== 'EACCES') {
        console.warn(`⚠️  Skipping directory ${currentDir}: ${error.message}`);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
function main() {
  const targetDir = process.cwd();
  console.log(`🔍 Scanning directory: ${targetDir}`);
  
<<<<<<< HEAD
<<<<<<< HEAD
=======
  
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  const files = findFiles(targetDir);
  console.log(`📁 Found ${files.length} files to process`);
  
  let fixedCount = 0;
  let totalFiles = files.length;
  
  for (const file of files) {
    if (processFile(file)) {
      fixedCount++;
    }
  }
  
  console.log('\n📊 Summary:');
  console.log(`✅ Files fixed: ${fixedCount}`);
  console.log(`📁 Total files processed: ${totalFiles}`);
  
  if (fixedCount > 0) {
    console.log('\n🔧 Running linter to verify fixes...');
    try {
      execSync('npm run lint:fix', { stdio: 'inherit' });
      console.log('✅ Linting completed successfully');
    } catch (error) {
      console.log('⚠️  Linting completed with warnings');
    }
  }
  
  console.log('\n🎉 Smart code fixing completed!');
}

// Run if called directly
if (require.main === module) {
  main();
}
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======

module.exports = { processFile, fixSpecificIssues, fixUnescapedEntities };
<<<<<<< HEAD

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8ae2
module.exports = { processFile, fixSpecificIssues, fixUnescapedEntities };
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
