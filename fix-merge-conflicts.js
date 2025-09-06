#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function resolveMergeConflicts(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has merge conflict markers
    if (!content.includes('      return false; // No conflicts to resolve
    }
    
    console.log(`Resolving merge conflicts in: ${filePath}`);
    
    // Split by conflict markers and keep the main branch version (usually the last one)
    const lines = content.split('\n');
    const resolvedLines = [];
    let inConflict = false;
    let conflictDepth = 0;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.startsWith('        inConflict = true;
        conflictDepth++;
        continue;
      } else if (line.startsWith('        continue;
      } else if (line.startsWith('        inConflict = false;
        conflictDepth--;
        continue;
      } else if (!inConflict) {
        resolvedLines.push(line);
      }
    }
    
    // If we're still in a conflict, it means we need to keep the last section
    if (inConflict) {
      // Find the last       const lastEqualIndex = content.lastIndexOf('      if (lastEqualIndex !== -1) {
        const lastSection = content.substring(lastEqualIndex + 8); // Skip '        const lastSectionLines = lastSection.split('\n');
        for (const line of lastSectionLines) {
          if (!line.startsWith('            resolvedLines.push(line);
          }
        }
      }
    }
    
    const resolvedContent = resolvedLines.join('\n');
    
    // Clean up any remaining conflict markers
    const cleanedContent = resolvedContent
      .replace(/      .replace(/      .replace(/      .replace(/      .replace(/      .replace(/    
    fs.writeFileSync(filePath, cleanedContent);
    return true;
  } catch (error) {
    console.error(`Error resolving conflicts in ${filePath}:`, error.message);
    return false;
  }
}

function findFilesWithConflicts(dir) {
  const files = [];
  
  function scanDirectory(currentDir) {
    try {
      const items = fs.readdirSync(currentDir);
      
      for (const item of items) {
        const fullPath = path.join(currentDir, item);
        
        try {
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory()) {
            // Skip certain directories
            if (!['node_modules', '.git', 'dist', 'build', 'coverage'].includes(item)) {
              scanDirectory(fullPath);
            }
          } else if (stat.isFile()) {
            // Check for common source file extensions
            const ext = path.extname(item);
            if (['.js', '.jsx', '.ts', '.tsx', '.json', '.md'].includes(ext)) {
              try {
                const content = fs.readFileSync(fullPath, 'utf8');
                if (content.includes('                  files.push(fullPath);
                }
              } catch (error) {
                // Skip files that can't be read
              }
            }
          }
        } catch (error) {
          // Skip broken symlinks or inaccessible files
          continue;
        }
      }
    } catch (error) {
      // Skip directories that can't be read
      return;
    }
  }
  
  scanDirectory(dir);
  return files;
}

// Main execution
const workspaceDir = process.cwd();
console.log('Scanning for files with merge conflicts...');

const conflictedFiles = findFilesWithConflicts(workspaceDir);
console.log(`Found ${conflictedFiles.length} files with merge conflicts`);

let resolvedCount = 0;
for (const file of conflictedFiles) {
  if (resolveMergeConflicts(file)) {
    resolvedCount++;
  }
}

console.log(`Resolved conflicts in ${resolvedCount} files`);