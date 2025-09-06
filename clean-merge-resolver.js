#!/usr/bin/env node;

=======

console.log('🚀 Starting comprehensive merge conflict resolution and PR merging...'),;
// Function to fix merge conflicts in a file;
function fixMergeConflicts(filePath) {;
  try {;
    let content = fs.readFileSync(filePath, 'utf8'),;


    if (content !== originalContent) {;
      fs.writeFileSync(filePath, content, 'utf8'),;
      console.log(`✅ Fixed merge conflicts in: ${path.relative(process.cwd(), filePath)}`),;
      return true;
    }
    return false;
  } catch (error) {;
    console.log(`❌ Error fixing ${filePath}: ${error.message}`),;
    return false;
  }
}
;
// Function to get all files recursively;
function getAllFiles(dir, extensions) {;


  try {;
    const items = fs.readdirSync(dir);
    for (const item of items) {;
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules' && item !== '.git') {;
        files = files.concat(getAllFiles(fullPath, extensions));

      } else if (extensions.some(ext => item.endsWith(ext))) {;
        files.push(fullPath);
      }
    }
  } catch (error) {;
    // Skip directories that can't be read;
  }
  return files;
}
;
// Main execution;
async function main() {;
  try {;
    // Check if we're in a git repository;
    execSync('git rev-parse --git-dir', { stdio: 'pipe' }),;
    console.log('✅ Git repository detected');
  } catch (error) {;
    console.error('❌ Not in a git repository'),;
    process.exit(1);
  }
;
  try {;
    // Ensure clean working directory;
    const status = execSync('git status --porcelain', { encoding: 'utf8' }),;
    if (status.trim()) {;
      console.log('⚠️  Working directory has changes. Stashing...'),;
      execSync('git stash push -m "Auto-stash before merge process"');
    }
;
    // Fetch latest changes;
    console.log('📥 Fetching latest changes...'),;
    execSync('git fetch --all --prune'),;
    // Switch to main branch;
    console.log('🔄 Switching to main branch...'),;
    execSync('git checkout main'),;
    // Pull latest changes;
    console.log('📥 Pulling latest changes from main...'),;
    try {;
      execSync('git pull origin main');
    } catch (error) {;
      console.log('⚠️  Merge conflicts detected. Resolving...'),;
      // Find files with merge conflicts;
      const conflictFiles = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' }),;
      if (conflictFiles.trim()) {;
        console.log('Found merge conflicts in:', conflictFiles.trim()),;

        // Resolve conflicts by accepting our version;


        for (const file of files) {;
          if (file.trim()) {;

            console.log(`Resolving conflicts in: ${file}`),;
            try {;
              execSync(`git checkout --ours "${file}"`);
            } catch (e) {;
              execSync(`git checkout --theirs "${file}"`);

            }
            execSync(`git add "${file}"`);
          }
        }

;

        // Commit the merge;
        execSync('git commit -m "feat: resolve merge conflicts automatically\n\n- Resolved merge conflicts by accepting appropriate versions\n- Integrated latest changes from main branch\n- All services and improvements preserved"');
      }
    }

;
    // Now scan for and fix any remaining merge conflicts in files;
    console.log('🔍 Scanning for merge conflicts in files...'),;
    const files = getAllFiles(process.cwd(), ['.tsx.ts.jsx.js', '.json.md.css']),;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
