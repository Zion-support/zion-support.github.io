#!/usr/bin/env node,
  const fs = require('fs');
const path = require('path');
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
module.exports = MergeConflictFixer;
