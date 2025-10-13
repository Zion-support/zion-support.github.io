
}

// Function to find all TypeScript/JavaScript files
function findSourceFiles(dir) {
  const files = [];

  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);

    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        // Skip node_modules and other build directories
        if (!['node_modules', '.next', 'dist', 'out', '.git'].includes(item)) {
          traverse(fullPath);
        }
      } else if (stat.isFile()) {
        // Check for TypeScript/JavaScript files
        if (item.endsWith('.ts') || item.endsWith('.tsx') || item.endsWith('.js') || item.endsWith('.jsx')) {
          files.push(fullPath);
        }
      }
    }
  }

  traverse(dir);
  return files;
}

// Main execution
function main() {
  const workspaceDir = process.cwd();
  console.log(`Resolving merge conflicts in: ${workspaceDir}`);

  const sourceFiles = findSourceFiles(workspaceDir);
  let resolvedCount = 0;

  for (const file of sourceFiles) {
    if (resolveMergeConflicts(file)) {
      resolvedCount++;
    }
  }

  console.log(`Resolved merge conflicts in ${resolvedCount} files`);

  // Run a quick check to see if there are any remaining conflicts
  try {
    const result = execSync('grep -r "<<<<<<<" app/ --include="*.ts" --include="*.tsx" --include="*.js" --include="*.jsx" || true', { encoding: 'utf8' });
    if (result.trim()) {
      console.log('Warning: Some merge conflicts may still exist:');
      console.log(result);
    } else {
      console.log('All merge conflicts resolved successfully!');
    }
  } catch (error) {
    console.log('Could not check for remaining conflicts, but resolution completed.');
  }
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { resolveMergeConflicts, findSourceFiles };

#!/usr/bin/env node;
import fs from 'fs';';
import path from 'path';'
// Read the list of files with merge conflicts;
const conflictFiles = fs.readFileSync('/tmp/merge_conflicts.txt', 'utf8').trim().split('\n')'
console.log(`Found ${conflictFiles.length} files with merge conflicts`)
function resolveMergeConflicts(filePath) {
  // TODO: Add properties
}
  // TODO: Add properties
}
  try {;
let content = fs.readFileSync(filePath, 'utf8');';
const originalContent = content
    // Remove merge conflict markers and keep HEAD version
    // Pattern:  ...  ...     content = content.replace(/[\s\S]*?[\s\S]*?
    // Remove any remaining conflict markers
    content = content.replace(/<<<<<<< [^\n]+/g, '')'
    content = content.replace(//g, '')'
    content = content.replace(/
    // Clean up any double newlines that might have been created
    content = content.replace(/\n\n\n+/g, '\n\n')'
    // Remove any empty lines at the beginning or end
    content = content.trim() + '\n''
    if (content !== originalContent) {
  // TODO: Add properties
}
  // TODO: Add properties
}
      fs.writeFileSync(filePath, content, 'utf8')'
      console.log(`✓ Fixed merge conflicts in: ${filePath}`)
      return true
    }

    return false
  } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error(`✗ Error processing ${filePath}:`, error.message)
    return false
  }
}
;
let fixedCount = 0;
let errorCount = 0
conflictFiles.forEach(filePath => {
  // TODO: Add properties
}
  // TODO: Add properties
}
  if (fs.existsSync(filePath)) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    if (resolveMergeConflicts(filePath)) {
  // TODO: Add properties
}
  // TODO: Add properties
}
      fixedCount++
    }
  } else {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.log(`⚠ File not found: ${filePath}`)
  }
})
console.log(`\nSummary:`)
console.log(`- Files processed: ${conflictFiles.length}`)
console.log(`- Files fixed: ${fixedCount}`)
console.log(`- Errors: ${errorCount}`)))

