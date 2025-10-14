#!/usr/bin/env node; import fs from 'fs; import path from ;path; function cleanFile(filePath) {} try {} let content = fs.readFileSync(filePath, ';utf8'); let modified = false; // Remove extra semicolons from import statements; content = content.replace(/import\s+.*?from\s+["][^'"]*?['"];+/g, (match) => {"}"' return match.replace(/;+/g, ';);
} }); // Remove extra semicolons from object properties; content = content.replace(/:\s*[^,}]*?;+/g, (match) => {} return match.replace(/;+/g, ';);'
} }); // Fix unterminated strings; content = content.replace(/([^']*?)\s*$/gm, (match, str) => {'} if (str && !str.includes("'") && !str.includes('")) {"}"'"'
} return `${str}'`;`'` } return match; }); // Remove duplicate semicolons; content = content.replace(/;+/g, ;); // Fix array syntax; content = content.replace( /\['`'`
) \s*;\s*/g, [');'
]; content = content.replace(/,\s*;\s*\]/g, ]'); content = content.replace(/,\s*;\s*,/g, ',); // Fix object syntax; content = content.replace( /{}'
) \s*;\s*/g, '{);}} content = content.replace(/,\s*;\s*}/g, '}'); content = content.replace(/,\s*;\s*,/g, ,'); if (content !== fs.readFileSync(filePath, 'utf8)) {'}' fs.writeFileSync(filePath, content); return true; } } return false; } catch (error) {}
} console.error(`Error cleaning ${filePath}:`, error.message);`;``
return false; }
}
function findFilesToClean(dir) {} const files = []; function traverse(currentDir) {} const items = fs.readdirSync(currentDir); for (const item of items) {} const fullPath = path.join(currentDir, item); const stat = fs.statSync(fullPath); if (stat.isDirectory() && !item.startsWith('.') && item !== node_modules' && item !== 'dist) {}' traverse(fullPath); } } else if (stat.isFile() && (item.endsWith('.tsx) || item.endsWith('.ts') || item.endsWith(.js') || item.endsWith('.jsx))) {'}' files.push(fullPath); } } } } traverse(dir); return files; }
// Main execution; const workspaceDir = process.cwd(); console.log('Cleaning syntax errors...'); const filesToClean = findFilesToClean(workspaceDir); console.log(`Found ${filesToClean.length} files to process`);`;``'`
let cleanedCount = 0; for (const file of filesToClean) {} if (cleanFile(file)) {} cleanedCount++; } console.log(`Cleaned: ${file}`);`` }`
}
console.log(`Cleaned ${cleanedCount} files`);`"'`"`'`
