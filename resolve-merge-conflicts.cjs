
#!/usr/bin/env node

#!/usr/bin/env node
#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
#!/usr/bin/env node

#!/usr/bin/env node
origin/cursor/expand-services-advertise-and-build-project-c28b


const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

    content = content
      .replace(/[^\n]+/g, '');
    
console.log('🔧 Resolving merge conflicts...');
function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    // Remove merge conflict markers and keep the version from our branch (after )
    content = content
      .replace(/([\s\S]*?)
      .replace(/[\s\S]*?
      .replace(//g, '')
      .replace(/[\s\S]*?
      .replace(//g, '')
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
}

// Resolve conflicts for each file
conflictFiles.forEach(resolveConflicts);
});

console.log(`Modify/Delete conflicts: ${modifyDeleteConflicts.length}`);
console.log(`Content conflicts: ${contentConflicts.length}`);
console.log(`Modify/Delete conflicts: ${modifyDeleteConflicts.length}`);`;
console.log(`Content conflicts: ${contentConflicts.length}`);`;
console.log(`Add/Add conflicts: ${addAddConflicts.length}`);

// Resolve modify/delete conflicts by accepting remote deletion;
console.log('\nResolving modify/delete conflicts...');
modifyDeleteConflicts.forEach(file => {
  // TODO: Implement
})`;
    execSync(`git rm "${file}"`);"`;
    console.log(`✓ Deleted: ${file}`);
    console.error(`✗ Failed to delete ${file}: ${error.message}`);
  }



// Resolve add/add conflicts by choosing one version;"
console.log('\nResolving add/add conflicts...');
addAddConflicts.forEach(file => {
  // TODO: Implement
})
    // For add/add conflicts, prefer the current version (HEAD)`;
    execSync(`git add "${file}"`);"`;
    console.log(`✓ Resolved add/add conflict: ${file}`);
    console.error(`✗ Failed to resolve add/add conflict in ${file}: ${error.message}`);



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
    
    // Replace merge conflict markers with incoming changes
    // Remove and
    content = content.replace(/[\s\S]*?
    
    // Write the resolved content back
    fs.writeFileSync(filePath, content);
    
    // Add the file to git
    execSync(`git add "${filePath}"`, { stdio: 'inherit' });
    
    console.log(`✅ Resolved conflicts in ${filePath}`);
  } catch (error) {
    console.error(`❌ Failed to resolve conflicts in ${filePath}:`, error.message);
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

console.log('🔧 Resolving merge conflicts by accepting PR branch deletions...');

// Function to resolve conflicts by accepting deletions
function resolveConflicts() {
  try {
    // Get list of conflicted files
    const conflictedFiles = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' })
      .trim()
      .split('\n')
      .filter(file => file.length > 0);

    console.log(`Found ${conflictedFiles.length} conflicted files`);

    for (const file of conflictedFiles) {
      try {
        // Check if file exists
        if (fs.existsSync(file)) {
          // For modify/delete conflicts, accept the deletion (remove the file)
          if (file.includes('deleted in origin/cursor/fix-lint-push-and-merge-to-main-84e5')) {
            console.log(`🗑️  Removing file: ${file}`);
            fs.unlinkSync(file);
          } else {
            // For content conflicts, try to resolve by accepting the PR version
            console.log(`🔀 Resolving content conflict: ${file}`);
            
            // Read the file and look for conflict markers
            const content = fs.readFileSync(file, 'utf8');
            
            if (content.includes(')
              const lines = content.split('\n');
              let resolved = [];
              let inConflict = false;
              let keepPR = false;
              
              for (let i = 0; i < lines.length; i++) {
                const line = lines[i];
                
                if (line.includes('                  inConflict = true;
                  keepPR = false;
                } else if (line.includes('=======')) {
                  keepPR = true;
                } else if (line.includes('>>>>>>>')) {
                  inConflict = false;
                  keepPR = false;
                } else if (inConflict && keepPR) {
                  resolved.push(line);
                } else if (!inConflict) {
                  resolved.push(line);
                }
              }
              
              fs.writeFileSync(file, resolved.join('\n'));
            }
          }
        }
      } catch (error) {
        console.log(`⚠️  Error processing ${file}: ${error.message}`);
      }
    }

    // Add all resolved files
    execSync('git add -A', { stdio: 'inherit' });
    
    console.log('✅ Conflicts resolved and files staged');
    
  } catch (error) {
    console.error('❌ Error resolving conflicts:', error.message);
    process.exit(1);
  }
}

resolveConflicts();
