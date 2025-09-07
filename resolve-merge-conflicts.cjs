#!/usr/bin/env node

#!/usr/bin/env node
#!/usr/bin/env node
#!/usr/bin/env node

#!/usr/bin/env node


const { execSync } = require('child_process');
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Resolving merge conflicts...');

function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
origin/cursor/expand-services-advertise-and-build-project-c28b


    content = content
      .replace(/[^\n]+/g, '');
    // Remove merge conflict markers and keep the version from our branch (after )
    content = content
      .replace(/      .replace(/[\s\S]*?      .replace(/      .replace(//g, '')
      .replace(/    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`✅ Resolved conflicts in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`❌ Error resolving ${filePath}:`, error.message);
    return false;
  }

  log(message, type = 'INFO') {
    const timestamp = new Date().toISOString();
    const prefix = {
      'INFO': 'ℹ️',
      'SUCCESS': '✅',
      'ERROR': '❌',
      'WARNING': '⚠️',
      'PROGRESS': '🔄'
    }[type] || 'ℹ️';
    console.log(`${prefix} [${timestamp}] ${message}`);
  }

  async resolveConflicts() {
    this.log('🚀 Starting merge conflict resolution...', 'PROGRESS');
    
    try {
      const items = fs.readdirSync(currentDir);
      
      for (const item of items) {
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          // Skip certain directories
          if (!['node_modules', '.git', 'dist', 'build', '.next', 'cache'].includes(item)) {
            traverse(fullPath);
          }
        } else if (stat.isFile()) {
          const ext = path.extname(item);
          if (['.js', '.ts', '.tsx', '.jsx'].includes(ext)) {
            try {
              const content = fs.readFileSync(fullPath, 'utf8');
              if (content.includes('')) {
                files.push(fullPath);
              if (content.includes('                files.push(fullPath);
              }
            } catch (e) {
              // Skip files we can't read
            }
          }
        }
      }

      this.log('\n📊 Merge Conflict Resolution Report', 'INFO');
      this.log('='.repeat(60));
      this.log(`Resolved ${this.resolvedFiles.length} files.`, 'SUCCESS');
      if (this.errors.length > 0) {
        this.log(`Encountered ${this.errors.length} errors:`, 'WARNING');
        this.errors.forEach(err => this.log(`  - ${err.filePath}: ${err.error}`, 'ERROR'));
      } else {
        this.log('No errors encountered during resolution.', 'SUCCESS');
      }

      // Add resolved files to git
      if (this.resolvedFiles.length > 0) {
        this.log('Adding resolved files to git...', 'PROGRESS');
        execSync(`git add ${this.resolvedFiles.join(' ')}`, { stdio: 'inherit' });
        this.log('Files added to git successfully', 'SUCCESS');
      }

    } catch (error) {
      this.log(`Error during conflict resolution: ${error.message}`, 'ERROR');
      throw error;
    }
  }

  async resolveFile(filePath) {
    if (!fs.existsSync(filePath)) {
      this.log(`  ⚠️ File ${filePath} does not exist, skipping`, 'WARNING');
      return;
    }
  } catch (error) {
    console.error(`❌ Error processing ${file}:`, error.message);
    errorCount++;
  }
}

console.log(`\n🎉 Merge conflict resolution complete!`);
console.log(`✅ Resolved: ${resolvedCount} files`);
console.log(`❌ Errors: ${errorCount} files`);

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔧 Starting automatic merge conflict resolution...');

// Get list of files with merge conflicts
const gitStatus = execSync('git status --porcelain', { encoding: 'utf8' });
const conflictFiles = gitStatus.split('\n')
  .filter(line => line.includes('UU') || line.includes('AA') || line.includes('DD'))
  .map(line => line.split(' ').pop())
  .filter(file => file && file !== '');

console.log(`Found ${conflictFiles.length} files with merge conflicts`);

// Function to resolve conflicts by choosing incoming changes
function resolveConflicts(filePath) {
  try {
    console.log(`Resolving conflicts in ${filePath}...`);
    
    // Read the file content
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts
    if (!content.includes('') || !content.includes('>>>>>>>')) {
      this.log(`  ℹ️ No conflicts in ${filePath}, skipping`, 'INFO');
      return;
    }

    // Strategy: Choose incoming changes (from remote) for most files
    // This means we'll take the version after  and before >>>>>>>
    let resolvedContent = content;
    
    // Handle different conflict patterns
    const conflictPatterns = [
      // Standard conflict markers
      /[\s\S]*?([\s\S]*?)      // Modified/delete conflicts
      /[\s\S]*?([\s\S]*?)    ];

    for (const pattern of conflictPatterns) {
      resolvedContent = resolvedContent.replace(pattern, (match, incoming) => {
        return incoming ? incoming.trim() : '';
      });
    }

    // Clean up any remaining conflict markers
    resolvedContent = resolvedContent
      .replace(/[\s\S]*?/g, '')
      .replace(/      .replace(/^$/gm, '')
      .replace(/^$/gm, '')
      .replace(/^
    // Write resolved content
    fs.writeFileSync(filePath, resolvedContent, 'utf8');
    this.resolvedFiles.push(filePath);
    this.log(`  ✅ Resolved ${filePath}`);
  }
}

// Resolve conflicts for each file
conflictFiles.forEach(resolveConflicts);

// Run linter to check if issues are resolved
console.log('\n🔍 Running linter to check if issues are resolved...');
try {
  execSync('npm run lint', { stdio: 'inherit' });
} catch (error) {
  console.log('⚠️  Linter still has issues (this may be expected)');
}
main


const { execSync } = require('child_process');


const { execSync } = require('child_process');

console.log('Resolving merge conflicts...');

// Get all conflicted files
const conflictedFiles = execSync('git diff --name-only --diff-filter=U').toString().trim().split('\n').filter(f => f);

console.log(`Found ${conflictedFiles.length} conflicted files`);

// Categorize conflicts
const modifyDeleteConflicts = [];
const contentConflicts = [];
const addAddConflicts = [];

conflictedFiles.forEach(file => {
  const status = execSync(`git status --porcelain "${file}"`).toString().trim();
  
  if (status.startsWith('UD') || status.startsWith('DU')) {
    modifyDeleteConflicts.push(file);
  } else if (status.startsWith('UU')) {
    contentConflicts.push(file);
  } else if (status.startsWith('AA')) {
    addAddConflicts.push(file);
  }
});

console.log(`Modify/Delete conflicts: ${modifyDeleteConflicts.length}`);
console.log(`Content conflicts: ${contentConflicts.length}`);
console.log(`Add/Add conflicts: ${addAddConflicts.length}`);

// Resolve modify/delete conflicts by accepting remote deletion
console.log('\nResolving modify/delete conflicts...');
modifyDeleteConflicts.forEach(file => {
  try {
    execSync(`git rm "${file}"`);
    console.log(`✓ Deleted: ${file}`);
  } catch (error) {
    console.error(`✗ Failed to delete ${file}: ${error.message}`);
  }
});

// Resolve add/add conflicts by choosing one version
console.log('\nResolving add/add conflicts...');
addAddConflicts.forEach(file => {
  try {
    // For add/add conflicts, prefer the current version (HEAD)
    execSync(`git checkout --ours "${file}"`);
    execSync(`git add "${file}"`);
    console.log(`✓ Resolved add/add conflict: ${file}`);
  } catch (error) {
    console.error(`✗ Failed to resolve add/add conflict in ${file}: ${error.message}`);
  }
});

// Resolve content conflicts by preferring our version for most files
console.log('\nResolving content conflicts...');
contentConflicts.forEach(file => {
  try {
    // For content conflicts, prefer our version (HEAD) for most files
    // But for specific files, we might want to prefer remote
    if (file.includes('yarn.lock') || file.includes('package-lock.json')) {
      execSync(`git checkout --theirs "${file}"`);
    } else {
      execSync(`git checkout --ours "${file}"`);
    }
    execSync(`git add "${file}"`);
    console.log(`✓ Resolved content conflict: ${file}`);
  } catch (error) {
    console.error(`✗ Failed to resolve content conflict in ${file}: ${error.message}`);
  }
});

if (resolveMergeConflicts()) {
    console.log('Ready to commit merge resolution');
} else {
}
  console.log(`⚠️  ${remainingConflicts.length} files still have conflicts`);
}
console.log('\n🎉 Merge conflict resolution completed!');
console.log('\nMerge conflict resolution completed!');
console.log('Run "git status" to check remaining conflicts.');








