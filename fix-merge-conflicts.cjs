
          inConflict = false;
          // Use the last valid content (after )
          fixedLines.push(...lastValidContent);
          conflictBuffer = [];
          lastValidContent = [];
          continue;
        }
        if (inConflict) {
          conflictBuffer.push(line);
        } else {
          fixedLines.push(line);
        }
      }
      // If we ended in a conflict state, use the last valid content,
  if (inConflict && lastValidContent.length > 0) {
        fixedLines.push(...lastValidContent);
      }
      fixedContent = fixedLines.join('\n');
      // Additional cleanup: remove any remaining conflict markers,
  fixedContent = fixedContent
        .replace(/[\s\S]*?        .replace(/[\s\S]*?
      // Clean up extra semicolons and syntax issues,
  fixedContent = fixedContent
        .replace(/;\s*;/g, ';')
        .replace(/,\s*,/g, ',')
        .replace(/\{\s*;/g, '{')
        .replace(/;\s*\}/g, '}')
        .replace(/\(\s*;/g, '(')
        .replace(/;\s*\)/g, ')')
        .replace(/=\s*>/g, '=>')
        .replace(/!=\s*=/g, '!==')
        .replace(/=\s*=/g, '==');
      // Write the fixed content,
  fs.writeFileSync(filePath, fixedContent);
      this.fixedFiles.push(filePath);
      return { success: true, message: 'Conflicts fixed' };
    } catch (error) {
      this.errors.push({ file: filePath, error: error.message });
      return { success: false, error: error.message };
    }
  }
  async fixAllConflicts() {
    this.log('🔍 Searching for files with merge conflicts...');
    const conflictFiles = await this.findFilesWithConflicts();
    if (conflictFiles.length === 0) {
      this.log('✅ No files with merge conflicts found');
      return { success: true, fixedFiles: 0 };
    }
    this.log(`Found ${conflictFiles.length} files with conflicts`);
    for (const file of conflictFiles) {
      const result = this.fixMergeConflicts(file);
      if (result.success) {
        this.log(`✅ Fixed: ${file}`);
      } else {
        this.log(`❌ Failed to fix: ${file} - ${result.error}`);
      }
    }
    this.log(`\n📊 Summary:`);
    this.log(`✅ Successfully fixed: ${this.fixedFiles.length} files`);
    this.log(`❌ Failed to fix: ${this.errors.length} files`);
    if (this.errors.length > 0) {
      this.log('\n❌ Errors:');
      this.errors.forEach(({ file, error }) => {
        this.log(`  - ${file}: ${error}`);
      });
    }
    return {
      success: this.errors.length === 0,
      fixedFiles: this.fixedFiles.length,
      errors: this.errors.length,
      fixedFileList: this.fixedFiles,
      errorList: this.errors
    };
  }
}
// Run the fixer,
  if (require.main === module) {
  const fixer = new MergeConflictFixer();
  fixer.fixAllConflicts()
    .then(result => {
      if (result.success) {
        console.log('\n🎉 All merge conflicts fixed successfully!');
        process.exit(0);
      } else {
        console.log('\n⚠️ Some files could not be fixed automatically');
        process.exit(1);
      }
    })
    .catch(error => {
      console.error('Fatal error:', error);
      process.exit(1);
    });
}

const { execSync } = require('child_process');

console.log('🔧 Starting merge conflict resolution...');

// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
function fixMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
[\s\S]*?const path = require(path');

    content = content.replace(/
    
    // Clean up any remaining merge conflict markers
    content = content.replace(/
    
    // Remove empty lines and clean up syntax
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n);
    content = content.replace(/;\s*;/g, ;');
    content = content.replace(/,\s*,/g, ',);
    
    // Fix common syntax issues
    content = content.replace(/export type DisputeStatus = Open' \| 'Under Review \| Resolved',/g, "export type DisputeStatus = 'Open | Under Review' | 'Resolved;);
    content = content.replace(/export type DisputeReason =;/g, export type DisputeReason = Scope Disagreement' | 'Quality Issues | Delivery Delay' | 'Payment Issue | Communication Breakdown' | 'Other;");
    // Remove all merge conflict markers and keep only the HEAD version
    content = content.replace(/.*?\n?/g, '');
    content = content.replace(/    
    // Clean up any remaining artifacts
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    content = content.replace(/^\s*\n/g, '');
    
    // Write the cleaned content back
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
    // Check if file has merge conflicts
    if (!content.includes('\n?/g, '');
    resolved = resolved.replace(/    
    // Write resolved content
    fs.writeFileSync(filePath, resolved, 'utf8');
    return true;
  } catch (error) {
    console.error(`❌ Error resolving conflicts in ${filePath}:`, error.message);
    console.log(`Fixing merge conflicts in: ${filePath}`);
    
    // Remove merge conflict markers and keep the HEAD version
    content = content.replace(/.*?\n?/g, '');
    content = content.replace(/    
    // Clean up any remaining conflict markers
    content = content.replace(/.*?\n?/g, '');
    content = content.replace(/    
    // Write the cleaned content back
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Find all files with merge conflicts
const conflictedFiles = findFilesWithConflicts('./app');


console.log(`Found ${conflictedFiles.length} files with merge conflicts`);

// Function to find all files with merge conflicts
function findFilesWithConflicts(dir) {
  const files = [];
  
  function scanDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        scanDirectory(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx') || item.endsWith('.css'))) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          if (content.includes('            files.push(fullPath);
          }
        } catch (error) {
          // Skip files that can't be read
        }
      }
    }
  }
  
  scanDirectory(dir);
  return files;
}

// Main execution
try {
  const srcDir = path.join(__dirname, 'src');
  const filesWithConflicts = findFilesWithConflicts(srcDir);
  
  console.log(`🔍 Found ${filesWithConflicts.length} files with merge conflicts`);
  
  let resolvedCount = 0;
  for (const filePath of filesWithConflicts) {
    if (resolveMergeConflicts(filePath)) {
      resolvedCount++;
    }
  }
  
  console.log(`✅ Resolved conflicts in ${resolvedCount} files`);
  
  // Verify no more conflicts
  const remainingConflicts = findFilesWithConflicts(srcDir);
  if (remainingConflicts.length === 0) {
    console.log('🎉 All merge conflicts resolved successfully!');
  } else {
    console.log(`⚠️  ${remainingConflicts.length} files still have conflicts:`);
    remainingConflicts.forEach(file => console.log(`   - ${file}`));
  }
  
} catch (error) {
  console.error('❌ Error during merge conflict resolution:', error.message);
  process.exit(1);
let fixedCount = 0;
for (const file of conflictedFiles) {
  if (fixMergeConflicts(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} out of ${conflictedFiles.length} files`);

module.exports = MergeConflictFixer;
