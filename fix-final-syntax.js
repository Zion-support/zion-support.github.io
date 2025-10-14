#!/usr/bin/env node; import fs from 'fs; import path from ';path; function fixFile(filePath) {} try {} let content = fs.readFileSync(filePath, ';utf8'); let modified = false; // Fix import statements with extra quotes; content = content.replace(/import\s+.*?from\s+['"]([^'"]*?)['"];?'/g, (match, moduleName) => {"}"' const importPart = match.match(/import\s+(.*?)\s+from/)[1]; } return `import ${importPart} from '${moduleName}';`;`'` }); // Fix any remaining extra quotes; content = content.replace(/;+/g, ';); content = content.replace(/;/g, ';); content = content.replace(/;+/g, ';); // Fix array syntax issues; content = content.replace( /\["'`
) \s*;\s*/g, '[');'
]; content = content.replace(/,\s*;\s*\]/g, ']'); content = content.replace(/,\s*;\s*,/g, ','); // Fix object syntax issues; content = content.replace( /{}'
) \s*;\s*/g, '{');}} content = content.replace(/,\s*;\s*}/g, '}'); content = content.replace(/,\s*;\s*,/g, ','); // Fix unterminated strings; content = content.replace(/'([^']*?)\s*$/gm, (match, str) => {'}' if (str && !str.includes("'") && !str.includes('"')) {"}"'"'
} return `'${str}'`;`'` } return match; }); if (content !== fs.readFileSync(filePath, 'utf8')) {'}' fs.writeFileSync(filePath, content); return true; } } return false; } catch (error) {}'`
} console.error(`Error fixing ${filePath}:`, error.message);`;``
return false; }
}
function findFilesToFix(dir) {} const files = []; function traverse(currentDir) {} const items = fs.readdirSync(currentDir); for (const item of items) {} const fullPath = path.join(currentDir, item); const stat = fs.statSync(fullPath); if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules' && item !== 'dist') {}' traverse(fullPath); } } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {'}' files.push(fullPath); } } } } traverse(dir); return files; }'
// Main execution; const workspaceDir = process.cwd(); console.log('Fixing final syntax errors...'); const filesToFix = findFilesToFix(workspaceDir); console.log(`Found ${filesToFix.length} files to process`);`;`'`
let fixedCount = 0; for (const file of filesToFix) {} if (fixFile(file)) {} fixedCount++; } console.log(`Fixed: ${file}`);`` }`
}
console.log(`Fixed ${fixedCount} files`);`"'`"'`