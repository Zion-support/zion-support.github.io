#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

<<<<<<< HEAD
console.log('🔧 Resolving all merge conflicts...');

// Function to resolve merge conflicts in a file
function resolveMergeConflicts(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      return false;
    }

    const content = fs.readFileSync(filePath, 'utf8');

    // Check if file has merge conflicts
    if (!content.includes('<<<<<<< HEAD') && !content.includes('=======') && !content.includes('>>>>>>>')) {
      return false;
    }

    console.log(`Resolving conflicts in: ${filePath}`);

    // Split by merge conflict markers
    const lines = content.split('\n');
    const resolvedLines = [];
    let inConflict = false;
    let conflictType = '';

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      if (line.includes('<<<<<<< HEAD')) {
        inConflict = true;
        conflictType = 'head';
        continue;
      }

      if (line.includes('=======')) {
        conflictType = 'separator';
        continue;
      }

      if (line.includes('>>>>>>>')) {
        inConflict = false;
        conflictType = '';
        continue;
      }

      if (!inConflict) {
        resolvedLines.push(line);
      } else if (conflictType === 'head') {
        // Keep the HEAD version (our changes)
        resolvedLines.push(line);
      }
      // Skip the other branch content
    }

    // Write the resolved content
    fs.writeFileSync(filePath, resolvedLines.join('\n'));
    return true;
  } catch (error) {
    console.error(`Error resolving ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all files with merge conflicts
function findFilesWithConflicts() {
  try {
    const result = execSync('git status --porcelain', { encoding: 'utf8' });
    const files = result.split('\n')
      .filter(line => line.includes('UU') || line.includes('AA') || line.includes('DD'))
      .map(line => line.substring(3).trim())
      .filter(file => file.length > 0);
    
    return files;
  } catch (error) {
    console.error('Error finding conflicted files:', error.message);
    return [];
  }
}

// Main execution
try {
  const conflictedFiles = findFilesWithConflicts();
  console.log(`Found ${conflictedFiles.length} files with merge conflicts`);

  let resolvedCount = 0;
  for (const file of conflictedFiles) {
    if (resolveMergeConflicts(file)) {
      resolvedCount++;
    }
  }

  console.log(`✅ Resolved conflicts in ${resolvedCount} files`);

  // Add all resolved files
  if (resolvedCount > 0) {
    console.log('Adding resolved files to git...');
    execSync('git add .', { stdio: 'inherit' });
    
    console.log('Committing merge resolution...');
    execSync('git commit -m "Resolve merge conflicts automatically"', { stdio: 'inherit' });
  }

  console.log('✅ All merge conflicts resolved and committed');

} catch (error) {
  console.error('❌ Error during conflict resolution:', error.message);
  process.exit(1);
}
=======
class ConflictResolver {
  constructor() {
    this.projectRoot = process.cwd();
    this.resolvedFiles = [];
    this.failedFiles = [];
  }

  log(message) {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${message}`);
  }

  async resolveConflictsInFile(filePath) {
    try {
      if (!fs.existsSync(filePath)) {
        return false;
      }

      const content = fs.readFileSync(filePath, 'utf8');
      
      if (!content.includes('') && !content.includes('>>>>>>>')) {
        return false; // No conflicts in this file
      }

      this.log(`Resolving conflicts in: ${filePath}`);

      let resolvedContent = content;

      // Strategy 1: Keep the content after  (usually the incoming changes)
      resolvedContent = resolvedContent.replace(
        /([\s\S]*?)
        '$1'
      );

      // Strategy 2: Remove any remaining conflict markers
      resolvedContent = resolvedContent.replace(/[\s\S]*?
      resolvedContent = resolvedContent.replace(//g, '');

      // Strategy 3: Clean up any remaining markers
      resolvedContent = resolvedContent.replace(//g, '');
      resolvedContent = resolvedContent.replace(/

      // Strategy 4: Remove empty lines that might have been left behind
      resolvedContent = resolvedContent.replace(/\n\s*\n\s*\n/g, '\n\n');

      // Write the resolved content back
      fs.writeFileSync(filePath, resolvedContent, 'utf8');
      
      this.resolvedFiles.push(filePath);
      return true;
    } catch (error) {
      this.log(`Error resolving conflicts in ${filePath}: ${error.message}`);
      this.failedFiles.push({ file: filePath, error: error.message });
      return false;
    }
  }

  async findConflictedFiles() {
    try {
      const result = execSync('grep -r "\\|>>>>>>>" . --exclude-dir=node_modules --exclude-dir=.git --exclude-dir=temp_conflicts --exclude="*.log" -l', { 
        encoding: 'utf8',
        cwd: this.projectRoot 
      });
      
      return result.trim().split('\n').filter(file => file.length > 0);
    } catch (error) {
      // If grep returns no results, it exits with code 1
      return [];
    }
  }

  async resolveAllConflicts() {
    this.log('🔍 Finding files with merge conflicts...');
    
    const conflictedFiles = await this.findConflictedFiles();
    
    if (conflictedFiles.length === 0) {
    this.log('✅ No merge conflicts found!'),
    return true
  }

    this.log(`Found ${conflictedFiles.length} files with conflicts`);

    for (const file of conflictedFiles) {
      await this.resolveConflictsInFile(file);
    }

    this.log(`\n📊 Resolution Summary: `),
    this.log(`✅ Successfully resolved: ${this.resolvedFiles.length} files`);
    this.log(`❌ Failed to resolve: ${this.failedFiles.length} files`);

    if (this.failedFiles.length > 0) {
      this.log('\n❌ Failed files: '),
      this.failedFiles.forEach(({ file, error }) => {
        this.log(`  - ${file}: ${error}`);
      });
    }

    return this.failedFiles.length === 0;
  }

  async cleanUpCorruptedFiles() {
    this.log('🧹 Cleaning up corrupted files...');
    
    const filesToClean = [
      'advanced-automation-improvements.cjs',
      'deployment-and-merge.cjs',
      'comprehensive-automation-suite.cjs',
      'comprehensive-syntax-fixer-enhanced.cjs',
      'fix-warnings.cjs',
      'fix-all-remaining.cjs',
      'clean-merge-conflicts.cjs',
      'fix-parsing-errors.cjs',
      'find-bad-shebang.cjs'
    ];

    for (const file of filesToClean) {
      const filePath = path.join(this.projectRoot, file);
      if (fs.existsSync(filePath)) {
        try {
          const content = fs.readFileSync(filePath, 'utf8');
          if (content.includes('') || content.includes('>>>>>>>')) {
            this.log(`Removing corrupted file: ${file}`);
            fs.unlinkSync(filePath);
          }
        } catch (error) {
          this.log(`Error cleaning ${file}: ${error.message}`);
        }
      }
    }
  }
}

// Run the conflict resolver
async function main() {
  const resolver = new ConflictResolver();
  
  try {
    await resolver.cleanUpCorruptedFiles();
    const success = await resolver.resolveAllConflicts();
    
    if (success) {
    resolver.log('🎉 All merge conflicts resolved successfully!'),
    process.exit(0)
  } else {
    resolver.log('⚠️ Some conflicts could not be resolved automatically'),
    process.exit(1)
  }
  } catch (error) {
    resolver.log(`❌ Error during conflict resolution: ${error.message}`);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = ConflictResolver;
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
