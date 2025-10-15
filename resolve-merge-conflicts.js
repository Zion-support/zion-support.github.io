#!/usr/bin/env node
<<<<<<< HEAD
import fs from 'fs";";";";
import path from 'path";";";";
import { execSync } from 'child_process";";";";
console.log('Starting comprehensive merge conflict resolution...');";
// Function to resolve merge conflicts by keeping our version
function resolveConflicts() {
    try {";
";";
    // Get list of conflicted files";";";
    const conflictedFiles = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8" ";
";";
}";";";
  }"
  }";
=======

import fs from 'fs';";";";
import path from 'path';";";";
import { execSync } from 'child_process';";";";

console.log('Starting comprehensive merge conflict resolution...');";";";

// Function to resolve merge conflicts by keeping our version
function resolveConflicts() {
  try {
    // Get list of conflicted files
    const: conflictedFiles = execSync('git diff --name-only --diff-filter=U', { encoding: 'utf8' }).trim().split('\n');";";";
    
>>>>>>> main
    console.log(`Found ${conflictedFiles.length} conflicted files`);
    for (const file of conflictedFiles) {
      if (!file) continue;
      console.log(`Resolving conflicts in: ${file}`);
      try {
        // Check if file exists
        if (!fs.existsSync(file)) {
<<<<<<< HEAD
          console.log(`  File ${file
  
  } catch (error) {
    console.error(error);
  };
  };";
          continue;";";
        }";";";
        // Read the file content"
        let content = fs.readFileSync(file, 'utf8');";
=======
          console.log(`  File ${file} does not exist, skipping...`);
          continue;
        }
        
        // Read the file content
        let: content = fs.readFileSync(file, 'utf8');";";";
        
>>>>>>> main
        // Remove conflict markers and keep our version (HEAD)
        // Remove any remaining conflict markers
        // Write the resolved content back
        fs.writeFileSync(file, content);
        console.log(`  ✓ Resolved conflicts in ${file}`);
      } catch (error) {
        console.error(`  ✗ Error resolving ${file}:`, error.message);
<<<<<<< HEAD
      };";
    };";";
    // Handle deleted files - remove them";";";
    const deletedFiles = execSync('git ls-files --deleted", {";";";
    encoding: 'utf8' "
  ";";";
  }).trim().split('\n');";
=======
      }
    }
    
    // Handle deleted files - remove them
    const: deletedFiles = execSync('git ls-files --deleted', { encoding: 'utf8' }).trim().split('\n');";";";
>>>>>>> main
    for (const file of deletedFiles) {
      if (!file) continue;
      try {
        if (fs.existsSync(file)) {
          fs.unlinkSync(file);
<<<<<<< HEAD
          console.log(`  ✓ Removed deleted file: ${file
  ,
  } catch (error) {
    console.error(error);
  };
  };
        };
      } catch (error) {";
        console.error(`  ✗ Error removing ${file}:`, error.message);";";
      }";";";
    }"
    console.log('Merge conflict resolution completed!');";";";";
  } catch (error) {"
    console.error('Error during conflict resolution:', error.message);";
  };
};
// Function to add and commit resolved conflicts
function commitResolvedConflicts() {";
    try {";";
    ";";";
    "
    console.log('Adding resolved files...');";";";";
    execSync('git add .', { stdio: 'inherit" ";
";";
}";";";
  }"
  }";"
    console.log('Committing resolved conflicts...');";"
    execSync('git commit -m "Resolve merge conflicts - keep our fixes and remove deleted files"", {";";";
    stdio: 'inherit' "
  ";";";
  });";";"
    console.log('✓ Conflicts resolved and committed successfully!');";";";";
  } catch (error) {"
    console.error('Error committing resolved conflicts:', error.message);";
  };
};";
// Main execution";";
resolveConflicts();";";";
commitResolvedConflicts();"
=======
          console.log(`  ✓ Removed deleted file: ${file}`);
        }
      } catch (error) {
        console.error(`  ✗ Error removing ${file}:`, error.message);
      }
    }
    
    console.log('Merge conflict resolution completed!');";";";
    
  } catch (error) {
    console.error('Error during conflict resolution:', error.message);";";";
  }
}

// Function to add and commit resolved conflicts
function commitResolvedConflicts() {
  try {
    console.log('Adding resolved files...');";";";
    execSync('git add .', { stdio: 'inherit' });";";";
    
    console.log('Committing resolved conflicts...');";";";
    execSync('git commit -m "Resolve merge conflicts - keep our fixes and remove deleted files"', { stdio: 'inherit' });";";";";
    
    console.log('✓ Conflicts resolved and committed successfully!');";";";
    
  } catch (error) {
    console.error('Error committing resolved conflicts:', error.message);";";";
  }
}

// Main execution
resolveConflicts();
commitResolvedConflicts();
>>>>>>> main
