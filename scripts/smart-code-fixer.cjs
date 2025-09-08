#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Smart Code Fixer');
console.log('=====');

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

=======
>>>>>>> origin/chore/fix-lint-and-merge
=======
>>>>>>> merged-prs-20250907-203621
function fixUnescapedEntities(content) {
  // Only replace single quotes that are not in import statements or string literals;
  // This regex looks for single quotes that are not preceded by import, from, or within quotes;

>>>>>>> cursor/integrate-build-improve-and-re-verify-f954
=======

    // Write back if modified;
=======
>>>>>>> merged-prs-20250907-203621
    if (hasChanges) {
      return false;
  } catch (error) {`;
    console.error(`❌ Error processing ${filePath}:`, error.message);
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
          if (stat.isDirectory() && !item.startsWith('.') && item !== node_modules) {
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

// Main execution
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

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { processFile, fixSpecificIssues, fixUnescapedEntities };
