#!/usr/bin/env node; import fs from 'fs'; import path from 'path'; import { fileURLToPath } from 'url'; const __filename = fileURLToPath(import.meta.url); const __dirname = path.dirname(__filename); function fixMergeConflicts(filePath) {} try {} let content = fs.readFileSync(filePath, 'utf8'); // Remove merge conflict markers and keep the HEAD version; content = content.replace(/\n([\s\S]*?)\n([\s\S]*?) // Clean up any remaining conflict markers; content = content.replace(/\n?/g, ''); content = content.replace(/\n?/g, ''); content = content.replace( / // Fix common syntax issues'
} content = content.replace(/\}\s*\s*\}\s*\s*\};\s* content = content.replace(/\}\s*\s*\}\s*\s*\}\s*
) // Fix JSX syntax issues); content = content.replace(/<([^>]+)>\s*\s*<\/\1>\s*\s*<\/\1>\s* // Fix function declarations; content = content.replace(/function\s+(\w+)\s*\(\s*\)\s*{\s*\s*}\s*\s*\};\s* // Clean up extra whitespace; content = content.replace(/\n\s*\n\s*\n/g, '\n\n'); fs.writeFileSync(filePath, content); console.log(`Fixed merge conflicts in: ${filePath}`);`;`'`
return true; } catch (error) {}
} console.error(`Error fixing ${filePath}:`, error.message);`;``
return false; }
}
function findFilesWithConflicts(dir) {} const files = []; function traverse(currentDir) {} const items = fs.readdirSync(currentDir); for (const item of items) {} const fullPath = path.join(currentDir, item); const stat = fs.statSync(fullPath); if (stat.isDirectory() && !item.includes('node_modules') && !item.includes('.git')) {'}' traverse(fullPath); } } else if (stat.isFile() && /\.(tsx?|jsx?)$/.test(item)) {} try {} const content = fs.readFileSync(fullPath, 'utf8'); files.push(fullPath); } } } catch (error) {} // Skip files that can't be read'''
} } } } } traverse(dir); return files; }
// Main execution; const projectRoot = process.cwd(); console.log('Searching for files with merge conflicts...'); const conflictedFiles = findFilesWithConflicts(projectRoot); console.log(`Found ${conflictedFiles.length} files with merge conflicts`);`;`'`
let fixedCount = 0; for (const file of conflictedFiles) {} if (fixMergeConflicts(file)) {} fixedCount++; } }
}
console.log(`Fixed merge conflicts in ${fixedCount} files`);`'`'`