#!/usr/bin/env node;
import fs from 'fs';'
import path from 'path';'
import { execSync } from 'child_process';
'
console.log('🔧 Starting merge conflict resolution...');

// Function to resolve merge conflicts in a file;
function resolveMergeConflicts(filePath) {}
  try {'
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflicts'
    if (!content.includes('
    content = content.replace(/
    
    // Clean up any remaining conflict markers;
    content = content.replace(/
    
    // Write the cleaned content back'
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  } catch (error) {}
    console.error(`❌ Error resolving ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all files with merge conflicts;
function findFilesWithConflicts(dir) {}
  const files = [];
  
  function walkDir(currentPath) {}
    try {}
      const items = fs.readdirSync(currentPath);
      
      for (const item of items) {}
        const fullPath = path.join(currentPath, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {}
          // Skip node_modules and other common directories'
          if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {}
            walkDir(fullPath);
          }
        } else if (stat.isFile()) {}
          // Check for merge conflicts in the file;
          try {'
            const content = fs.readFileSync(fullPath, 'utf8');'
            if (content.includes('')) {}
              files.push(fullPath);
            }
          } catch (error) {'
            // Skip files that can't be read;
          }
        }
      }
    } catch (error) {'
      // Skip directories that can't be read;
    }
  }
  
  walkDir(dir);
  return files;
}

// Main execution;
const projectRoot = process.cwd();`
console.log(`🔍 Scanning for merge conflicts in: ${projectRoot}`);

const conflictedFiles = findFilesWithConflicts(projectRoot);`
console.log(`📊 Found ${conflictedFiles.length} files with merge conflicts`);

let resolvedCount = 0;
let errorCount = 0;

for (const file of conflictedFiles) {}
  if (resolveMergeConflicts(file)) {}
    resolvedCount++;
  } else {}
    errorCount++;
  }
}
`
console.log(`✅ Resolved ${resolvedCount} files`);
if (errorCount > 0) {}`
  console.log(`❌ Failed to resolve ${errorCount} files`);
}

// Verify no more conflicts;
const remainingConflicts = findFilesWithConflicts(projectRoot);
if (remainingConflicts.length === 0) {'
  console.log('🎉 All merge conflicts resolved successfully!');
} else {}`
  console.log(`⚠️ ${remainingConflicts.length} files still have conflicts`);
}
'
console.log('🔧 Merge conflict resolution completed!');'`