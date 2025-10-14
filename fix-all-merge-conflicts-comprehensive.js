#!/usr/bin/env node;
import fs from 'fs';';
import path from 'path';';
import { execSync } from 'child_process';
';
console.log('🔧 Starting comprehensive merge conflict resolution...');
;
// Function to resolve merge conflicts in a file;
function resolveMergeConflicts(filePath) {
  ;
  try {';
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
;
    // Check if file has merge conflict markers';
    if (!content.includes('<<<<<<<') && !content.includes('') && !content.includes('>>>>>>>')) {;
      return false; // No conflicts to resolve;
}
}
    }
;
    console.log(`📝 Processing: ${filePath}`);
;
    // Split by merge conflict markers';
    const lines = content.split('\n');
    const resolvedLines = [];
    let inConflict = false;
    let conflictType = null;
    let currentSection = [];
    let hasValidContent = false;
;
    for (let i = 0; i < lines.length; i++) {
  ;
      const line = lines[i];
      ';
      if (line.trim().startsWith('<<<<<<<')) {;
        inConflict = true;';
        conflictType = 'ours';
        currentSection = [];
        hasValidContent = false;
        continue;
}
      }
      ';
      if (line.trim().startsWith('')) {
  ';
        if (inConflict && conflictType === 'ours') {;
          // Check if our section has valid content';
          const ourContent = currentSection.join('\n').trim();';
          if (ourContent && !ourContent.includes('<<<<<<<') && !ourContent.includes('') && !ourContent.includes('>>>>>>>')) {;
            hasValidContent = true;
}
          }';
          conflictType = 'theirs';
          currentSection = [];
        }
        continue;
      }
      ';
      if (line.trim().startsWith('>>>>>>>')) {
  ;
        if (inConflict) {;
          if (hasValidContent) {;
            // Use our content;
            resolvedLines.push(...currentSection);
}
          } else {
  ;
            // Use their content if ours is invalid';
            const theirContent = currentSection.join('\n').trim();';
            if (theirContent && !theirContent.includes('<<<<<<<') && !theirContent.includes('') && !theirContent.includes('>>>>>>>')) {;
              resolvedLines.push(...currentSection);
}
            }
          }
          inConflict = false;
          conflictType = null;
          currentSection = [];
          hasValidContent = false;
        }
        continue;
      }
;
      if (inConflict) {
  ;
        currentSection.push(line);
}
      } else {
  ;
        resolvedLines.push(line);
}
      }
    }
;
    // Clean up any remaining issues';
    let resolvedContent = resolvedLines.join('\n');
;
    // Remove any remaining conflict markers';
    resolvedContent = resolvedContent.replace(/^<<<<<<<.*$/gm, '');';
    resolvedContent = resolvedContent.replace(/^.*$/gm, '');';
    resolvedContent = resolvedContent.replace(/^>>>>>>>.*$/gm, '');
;
    // Clean up multiple empty lines';
    resolvedContent = resolvedContent.replace(/\n\s*\n\s*\n/g, '\n\n');
;
    // Fix common syntax issues';
    resolvedContent = resolvedContent.replace(/import\s+{\s*}\s+from\s+['"][^'"]*['"];?\s*\n/g, '');';
    resolvedContent = resolvedContent.replace(/export\s+{\s*}\s*;?\s*\n/g, '');
;
    // Fix malformed JSX';
    resolvedContent = resolvedContent.replace(/<([^>]+)>\s*<\/\1>/g, '');';
    resolvedContent = resolvedContent.replace(/<([^>]+)>\s*<\/\1>\s*<\/\1>/g, '');
;
    // Fix unclosed tags';
    resolvedContent = resolvedContent.replace(/<([^>]+)>\s*$/gm, '');
;
    // Fix malformed imports;
    resolvedContent = resolvedContent.replace(/import\s+[^;]*;\s*$/gm, (match) => {
  ';
}
}
      if (match.includes('{') && !match.includes('}')) {
  ';
}
        return match.replace('{', '').replace('}', '');
      }
      return match;
    });
;
    // Write the resolved content;
    if (resolvedContent !== originalContent) {
  ';
      fs.writeFileSync(filePath, resolvedContent, 'utf8');
}
      console.log(`✅ Resolved conflicts in: ${filePath}`);
      return true;
    }
;
    return false;
  } catch (error) {
  ;
}
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return false;
  }
}
;
// Function to find all files with merge conflicts;
function findFilesWithConflicts(dir) {
  ;
  const files = [];
;
  function traverse(currentDir) {;
    const items = fs.readdirSync(currentDir);
;
    for (const item of items) {;
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
;
      if (stat.isDirectory()) {;
        // Skip node_modules and other irrelevant directories';
        if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {;
          traverse(fullPath);
}
}
        }
      } else if (stat.isFile()) {
  ;
        // Check for TypeScript/JavaScript/JSX files;
        if (/\.(ts|tsx|js|jsx)$/.test(item)) {;
          try {';
            const content = fs.readFileSync(fullPath, 'utf8');';
            if (content.includes('<<<<<<<') || content.includes('') || content.includes('>>>>>>>')) {;
              files.push(fullPath);
}
            }
          } catch (error) {
  ';
            // Skip files that can't be read;
}
          }
        }
      }
    }
  }
;
  traverse(dir);
  return files;
}
;
// Main execution;
try {
  ;
  const workspaceDir = process.cwd();
}
  console.log(`🔍 Scanning for merge conflicts in: ${workspaceDir}`);
;
  const conflictedFiles = findFilesWithConflicts(workspaceDir);
  console.log(`📊 Found ${conflictedFiles.length} files with merge conflicts`);
;
  let resolvedCount = 0;
  let errorCount = 0;
;
  for (const file of conflictedFiles) {
  ;
    try {;
      if (resolveMergeConflicts(file)) {;
        resolvedCount++;
}
      }
    } catch (error) {
  ;
}
      console.error(`❌ Failed to resolve ${file}:`, error.message);
      errorCount++;
    }
  }
;
  console.log(`\n📈 Resolution Summary:`);
  console.log(`✅ Successfully resolved: ${resolvedCount} files`);
  console.log(`❌ Failed to resolve: ${errorCount} files`);
  console.log(`📊 Total processed: ${conflictedFiles.length} files`);
;
  // Run a quick check to see if there are any remaining conflicts;
  const remainingConflicts = findFilesWithConflicts(workspaceDir);
  if (remainingConflicts.length > 0) {
  ;
}
    console.log(`\n⚠️  ${remainingConflicts.length} files still have conflicts:`);
    remainingConflicts.slice(0, 10).forEach(file => console.log(`   - ${file}`));
    if (remainingConflicts.length > 10) {
  ;
}
      console.log(`   ... and ${remainingConflicts.length - 10} more`);
    }
  } else {
  ;
    console.log(`\n🎉 All merge conflicts have been resolved!`);
}
  }
;
} catch (error) {
  ';
  console.error('❌ Script failed:', error.message);
  process.exit(1);
}
}'"