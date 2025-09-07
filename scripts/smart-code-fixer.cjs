<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> e19246f6ae7164fec78c9d9e31cb33f1a6ec056a

=======


>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
#!/usr/bin/env node
>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5











#!/usr/bin/env node

const fs = require('fs');
const path = require(path');
const { execSync } = require('child_process');

// Function to fix unescaped entities only in JSX content;
<<<<<<< HEAD
<<<<<<< HEAD
const { execSync } = require('child_process')
// Function to fix unescaped entities only in JSX content
=======
>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5
=======
#!/usr/bin/env node,
  const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
// Function to fix unescaped entities only in JSX content;
>>>>>>> cursor/integrate-build-improve-and-re-verify-f954
=======

>>>>>>> e19246f6ae7164fec78c9d9e31cb33f1a6ec056a
function fixUnescapedEntities(content) {
  // Only replace single quotes that are not in import statements or string literals;
  // This regex looks for single quotes that are not preceded by import, from, or within quotes;

<<<<<<< HEAD
    // Only replace if it's likely JSX content (contains spaces or common JSX patterns)
<<<<<<< HEAD
    if (content.includes('&') || content.includes('<') || content.includes('>')) {
<<<<<<< HEAD
}

return `&apos;${content}&apos;`
    return match
  })
=======
      return `&apos;${content}&apos;`;
    }
    return match;
  });
<<<<<<< HEAD
<<<<<<< HEAD

// Function to fix specific linting issues;
function fixSpecificIssues(content, filePath) {
  let modified = false;

  // Fix unused imports;
  if (content.includes("import Image from 'next/image'") && !content.includes('<Image')) {


  return { content, modified };

// Function to process a single file;
=======
=======
>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2
}
=======
    // Only replace if its likely JSX content (contains spaces or common JSX patterns)
    if (content.includes('&') || content.includes(<) || content.includes('>')) {}
>>>>>>> e19246f6ae7164fec78c9d9e31cb33f1a6ec056a

>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5
// Function to fix specific linting issues
function fixSpecificIssues(content, filePath) {
  let modified = false;

  // Fix unused imports
  if (content.includes("import Image from next/image") && !content.includes('<Image')) {
    content = content.replace(/import Image from next\/image/, '// import Image from \'next/image\;);
    modified = true;
  }


=======
>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2
>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5
=======
    if (content.includes('&') || content.includes('<') || content.includes('>')) {}
// Function to fix specific linting issues,
  function fixSpecificIssues(content, filePath) {
  let modified = false
  // Fix unused imports,
  if (content.includes("import Image from 'next/image'") && !content.includes('<Image')) {
>>>>>>> cursor/integrate-build-improve-and-re-verify-f954
function processFile(filePath) {
  try {
  // TODO: Implement,
  let modifiedContent = content;
    let hasChanges = false;
<<<<<<< HEAD

    // Apply fixes
    // Apply fixes
    const result = fixSpecificIssues(modifiedContent, filePath);
    modifiedContent = result.content;
    hasChanges = result.modified;

    // Fix unescaped entities
    // Fix unescaped entities
=======
    const result = fixSpecificIssues(modifiedContent, filePath);
    modifiedContent = result.content;
    hasChanges = result.modified;
>>>>>>> cursor/integrate-build-improve-and-re-verify-f954
    const originalContent = modifiedContent;
    modifiedContent = fixUnescapedEntities(modifiedContent);
    if (modifiedContent !== originalContent) {
      hasChanges = true;
<<<<<<< HEAD
    }

    // Write back if modified
    }

    // Write back if modified
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-f954
    if (hasChanges) {
      return false;
  } catch (error) {`;
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}
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
  function traverse(currentDir) {
  // TODO: Implement
      const items = fs.readdirSync(currentDir);
      
      for (const item of items) {
        const fullPath = path.join(currentDir, item);
  // TODO: Implement

>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5
          
<<<<<<< HEAD
          if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
=======
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
>>>>>>> cursor/integrate-build-improve-and-re-verify-f954
=======
          if (stat.isDirectory() && !item.startsWith('.') && item !== node_modules) {
>>>>>>> e19246f6ae7164fec78c9d9e31cb33f1a6ec056a
            traverse(fullPath);
          } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
            files.push(fullPath);
          }
        } catch (error) {
<<<<<<< HEAD
          // Skip broken symlinks or inaccessible files,
  if (error.code !== 'ENOENT' && error.code !== 'EACCES') {
=======
          // Skip broken symlinks or inaccessible files
          if (error.code !== 'ENOENT' && error.code !== EACCES) {
>>>>>>> e19246f6ae7164fec78c9d9e31cb33f1a6ec056a
            console.warn(`⚠️  Skipping ${fullPath}: ${error.message}`);
          }
        }
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
<<<<<<< HEAD
  console.log('\n📊 Summary:');
=======
  
  console.log(\n📊 Summary:);
>>>>>>> e19246f6ae7164fec78c9d9e31cb33f1a6ec056a
  console.log(`✅ Files fixed: ${fixedCount}`);
  console.log(`📁 Total files processed: ${totalFiles}`);
  if (fixedCount > 0) {
    console.log('\n🔧 Running linter to verify fixes...');
    try {
      execSync(npm run lint:fix, { stdio: 'inherit' });
      console.log(✅ Linting completed successfully);
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

module.exports = { processFile, fixSpecificIssues, fixUnescapedEntities }

=======
>>>>>>> fe40038fc50c97a9241476e2e4238d38f839f5b2
>>>>>>> 76112d4ec2170757d73ae14979f1846daff39ac5
=======
module.exports = { processFile, fixSpecificIssues, fixUnescapedEntities };
>>>>>>> cursor/integrate-build-improve-and-re-verify-f954
