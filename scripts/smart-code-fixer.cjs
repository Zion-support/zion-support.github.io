<<<<<<< HEAD
<<<<<<< HEAD
=======






#!/usr/bin/env node




const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
console.log('🔧 Smart Code Fixer');

// Function to fix unescaped entities only in JSX content;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const { execSync } = require('child_process')
// Function to fix unescaped entities only in JSX content
=======
>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5
=======
=======
>>>>>>> merged-prs-20250907-203621
#!/usr/bin/env node,
  const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to fix unescaped entities only in JSX content;
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-f954
=======

>>>>>>> e19246f6ae7164fec78c9d9e31cb33f1a6ec056a
=======
>>>>>>> origin/chore/fix-lint-and-merge
=======
>>>>>>> merged-prs-20250907-203621
function fixUnescapedEntities(content) {
  // Only replace single quotes that are not in import statements or string literals;
  // This regex looks for single quotes that are not preceded by import, from, or within quotes;

<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
    // Only replace if it's likely JSX content (contains spaces or common JSX patterns)
<<<<<<< HEAD
    if (content.includes('&') || content.includes('<') || content.includes('>')) {
      return `&apos;${content}&apos;`;
    }
    return match;
  });

// Function to fix specific linting issues;
function fixSpecificIssues(content, filePath) {
  let modified = false;

  // Fix unused imports;
  if (content.includes("import Image from 'next/image'") && !content.includes('<Image')) {


  return { content, modified };

// Function to process a single file;
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

=======
>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2
>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5
=======
=======
    // Only replace if it's likely JSX content (contains spaces or common JSX patterns)
>>>>>>> merged-prs-20250907-203621
    if (content.includes('&') || content.includes('<') || content.includes('>')) {}
// Function to fix specific linting issues,
  function fixSpecificIssues(content, filePath) {
  let modified = false
  // Fix unused imports,
  if (content.includes("import Image from 'next/image'") && !content.includes('<Image')) {
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-f954
=======
>>>>>>> origin/chore/fix-lint-and-merge
=======
>>>>>>> merged-prs-20250907-203621
function processFile(filePath) {
  try {
  // TODO: Implement,
  let modifiedContent = content;
    let hasChanges = false;
<<<<<<< HEAD
<<<<<<< HEAD

    // Apply fixes;
    // Apply fixes
    const result = fixSpecificIssues(modifiedContent, filePath);
    modifiedContent = result.content;
    hasChanges = result.modified;

    // Fix unescaped entities;
>>>>>>> origin/chore/fix-lint-and-merge
=======
    const result = fixSpecificIssues(modifiedContent, filePath);
    modifiedContent = result.content;
    hasChanges = result.modified;
>>>>>>> merged-prs-20250907-203621
    const originalContent = modifiedContent;
    modifiedContent = fixUnescapedEntities(modifiedContent);
    if (modifiedContent !== originalContent) {
      hasChanges = true;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    }

    // Write back if modified
    }

    // Write back if modified
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-f954
=======

    // Write back if modified;
>>>>>>> origin/chore/fix-lint-and-merge
=======
>>>>>>> merged-prs-20250907-203621
    if (hasChanges) {
      return false;
  } catch (error) {`;
    console.error(`❌ Error processing ${filePath}:`, error.message);
<<<<<<< HEAD
    return false;
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
return { content, modified }
// Function to process a single file;function processFile(filePath) {
  try {
  // TODO: Implement
=======
>>>>>>> e19246f6ae7164fec78c9d9e31cb33f1a6ec056a

=======
>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2
  const files = [];
  
>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5
=======

// Function to find all relevant files;

    return false;
  }
}

// Function to find all relevant files
function findFiles(dir, extensions = ['.js', '.jsx', '.ts', '.tsx']) {
  const files = [];
  function traverse(currentDir) {
  // TODO: Implement
      const items = fs.readdirSync(currentDir);
      
      for (const item of items) {
        const fullPath = path.join(currentDir, item);
  // TODO: Implement
          const stat = fs.statSync(fullPath);

            traverse(fullPath);
          } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
`;
          
          if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
=======
=======
>>>>>>> merged-prs-20250907-203621
      return false
  } catch (error) {`
    console.error(`❌ Error processing ${filePath}:`, error.message)
// Function to find all relevant files,
  const files = [];
  function traverse(currentDir) {
  // TODO: Implement,
  const items = fs.readdirSync(currentDir)
  for($2) {
        const fullPath = path.join(currentDir, item)
  // TODO: Implement,
  if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
<<<<<<< HEAD
>>>>>>> cursor/integrate-build-improve-and-re-verify-f954
=======
          if (stat.isDirectory() && !item.startsWith('.') && item !== node_modules) {
>>>>>>> e19246f6ae7164fec78c9d9e31cb33f1a6ec056a
=======
>>>>>>> merged-prs-20250907-203621
            traverse(fullPath);
          } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
            files.push(fullPath);
          }
        } catch (error) {
          // Skip broken symlinks or inaccessible files,
  if (error.code !== 'ENOENT' && error.code !== 'EACCES') {
            console.warn(`⚠️  Skipping ${fullPath}: ${error.message}`);
          }
    } catch (error) {
      // Skip inaccessible directories,
  if (error.code !== 'EACCES') {
        console.warn(`⚠️  Skipping directory ${currentDir}: ${error.message}`);
      }
    }
  }
  traverse(dir);
  return files;
}
// Main execution,
  function main() {
  const targetDir = process.cwd();
  console.log(`🔍 Scanning directory: ${targetDir}`);
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
// Run if called directly,
  if (require.main === module) {
  main();
}
<<<<<<< HEAD
module.exports = { processFile, fixSpecificIssues, fixUnescapedEntities };
=======
<<<<<<< HEAD
<<<<<<< HEAD

module.exports = { processFile, fixSpecificIssues, fixUnescapedEntities }

=======
>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2
>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5
=======
module.exports = { processFile, fixSpecificIssues, fixUnescapedEntities };
>>>>>>> cursor/integrate-build-improve-and-re-verify-f954
=======
          const stat = fs.statSync(fullPath);

            traverse(fullPath);
          } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
`;
>>>>>>> origin/chore/fix-lint-and-merge
=======
module.exports = { processFile, fixSpecificIssues, fixUnescapedEntities };
>>>>>>> merged-prs-20250907-203621
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
