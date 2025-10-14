#!/usr/bin/env node; import fs from 'fs' import path from 'path' import { execSync } from 'child_process' // Function to fix merge conflicts in a file; function fixMergeConflicts(filePath) {} try {} let content = fs.readFileSync(filePath, 'utf8'); // Check if file has merge conflicts; if (!content.includes(')' content = content.replace(/[\s\S]*?([\s\S]*?) // Remove any remaining conflict markers; content = content.replace( /[\s\S]*?''
) // Clean up any double newlines); content = content.replace(/\n\n\n+/g, '\n\n'); fs.writeFileSync(filePath, content); return true; } } catch (error) {}''
} console.error(`Error fixing ${filePath}:`, error.message);```
return false; }
}
// Function to find all files with merge conflicts; function findFilesWithConflicts(dir) {} const files = []; function walkDir(currentPath) {} const items = fs.readdirSync(currentPath); for (const item of items) {} const fullPath = path.join(currentPath, item); const stat = fs.statSync(fullPath); if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {'}' walkDir(fullPath); } } else if (stat.isFile() && /\.(tsx?|jsx?)$/.test(item)) {} try {} const content = fs.readFileSync(fullPath, 'utf8'); if (content.includes()) {'}' files.push(fullPath); } } } catch (error) {} // Skip files that can't be read''
} } } } } walkDir(dir); return files; }
// Main execution; console.log(' Searching for files with merge conflicts...'); const conflictedFiles = findFilesWithConflicts('/workspace'); console.log(`Found ${conflictedFiles.length} files with merge conflicts`);`'``
let fixedCount = 0; for (const file of conflictedFiles) {} if (fixMergeConflicts(file)) {} fixedCount++; } }
}
console.log(` Fixed merge conflicts in ${fixedCount} files`);```
console.log(' All merge conflicts resolved!');`'`'``)`