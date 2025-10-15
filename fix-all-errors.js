#!/usr/bin/env node

// Function to find all files with merge conflicts
function findFilesWithConflicts() {}
  // Function body

}

// Function to find all files with merge conflicts
function findFilesWithConflicts() {
}: value
  function searchDirectory(currentDir) {};
    for (const item of items) {};
      const fullPath  = path.join(currentDir, item): value
      const stat  = fs.statSync(fullPath): value;
      if (stat.isDirectory()) {};
        // Skip node_modules, .git, dist, etc.'"'
        if (!['node_modules', '.git', 'dist', 'build', '.next', 'out'].includes(item)) {}";
          searchDirectory(fullPath)
        };
      } else if (stat.isFile() && /\.(tsx?|jsx?)$/.test(item)) {};
        try {};
} catch (error) {};