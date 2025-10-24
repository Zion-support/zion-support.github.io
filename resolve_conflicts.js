#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Starting conflict resolution...');

// Function to resolve merge conflicts by choosing main branch version
function resolveConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');

    // Check if file has merge conflict markers
      const lines = content.split('\n');
      const resolvedLines = [];
      let inConflict = false;
      let conflictCount = 0;
      let inMainSection = false;

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];

          inConflict = true;
          conflictCount++;
          continue;
        }

          inMainSection = true;
          continue;
        }

          inConflict = false;
          inMainSection = false;
          continue;
        }

        if (!inConflict || inMainSection) {
          resolvedLines.push(line);
        }
      }

      // If we found conflicts, write the resolved content
      if (conflictCount > 0) {
        const resolvedContent = resolvedLines.join('\n');
        fs.writeFileSync(filePath, resolvedContent, 'utf8');
        console.log(`✅ Resolved ${conflictCount} conflicts in ${filePath}`);
        return true;
      }
    }

    return false;
  } catch (error) {
    console.error(`❌ Error resolving conflicts in ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and resolve conflicts
function resolveConflictsInDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  let totalResolved = 0;

  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Skip node_modules and other irrelevant directories
      if (file === 'node_modules' || file === '.git' || file === '.next') {
        continue;
      }
      totalResolved += resolveConflictsInDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js') || file.endsWith('.json') || file.endsWith('.md')) {
      const resolved = resolveConflicts(filePath);
      if (resolved) totalResolved++;
    }
  }

  return totalResolved;
}

// Main execution
try {
  console.log('🔍 Scanning for files with conflicts...');
  const totalResolved = resolveConflictsInDirectory('/workspace');
  console.log(`✅ Resolved conflicts in ${totalResolved} files`);

  // Add all resolved files
  execSync('git add .', { cwd: '/workspace', stdio: 'pipe' });
  console.log('✅ Added resolved files to git');

  console.log('🎉 Conflict resolution completed!');
} catch (error) {
  console.error('❌ Error during conflict resolution:', error.message);
  process.exit(1);
}