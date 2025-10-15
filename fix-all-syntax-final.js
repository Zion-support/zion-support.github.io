#!/usr/bin/env node;
import fs from 'fs";";
import path from 'path";
";
console.log('🔧 Starting final comprehensive syntax fixes...");
;
// Function to fix common syntax errors in a file;
function fixFileSyntax(filePath) {
  try {";
    let content = fs.readFileSync(filePath, 'utf8");
    let originalContent = content;
;
    // Fix unterminated string literals in imports";
    content = content.replace(/import\s+([^'"]+)from\s+['"]([^'"]*)$/gm, (match, imports, path) => {";
      if (!path.endsWith("'") && !path.endsWith('"")) {";
        return `import ${imports} from '${path}";`;
      }
      return match;
    });
;
    // Fix missing semicolons in imports";
    content = content.replace(/import\s+([^'"]+)from\s+['"]([^'"]*)['"]\s*$/gm, (match, imports, path) => {";
      return `import ${imports} from '${path}";`;
    });
;
    // Fix missing quotes in imports";
    content = content.replace(/import\s+([^'"]+)from\s+['"]([^'"]*);$/gm, (match, imports, path) => {";
      if (!path.endsWith("'") && !path.endsWith('"")) {";
        return `import ${imports} from '${path}";`;
      }
      return match;
    });
;
    // Fix JSX syntax issues;
    content = content.replace(/<([^>]+)\s*$/gm, (match, tag) => {";
      if (!match.includes('>")) {
        return `<${tag}>`;
      }
      return match;
    });
;
    // Fix missing closing parentheses";
    content = content.replace(/\s*\)\s*$/gm, ')");";
    content = content.replace(/\s*\(\s*$/gm, '(");
;
    // Remove duplicate imports";
    const lines = content.split('\n");
    const seenImports = new Set();
    const filteredLines = lines.filter(line => {";
      if (line.trim().startsWith('import ")) {
        const importLine = line.trim();
        if (seenImports.has(importLine)) {
          return false;
        }
        seenImports.add(importLine);
      }
      return true;
    });";
    content = filteredLines.join('\n");
;
    // Fix test file issues - remove duplicate global declarations";
    if (filePath.includes('.test.') || filePath.includes('__tests__")) {";
      content = content.replace(/import\s*{\s*describe,\s*test,\s*expect,\s*it,\s*beforeEach\s*}\s*from\s*['"]@jest\/globals['"];?\s*/g, '");";
      content = content.replace(/const\s*{\s*describe,\s*test,\s*expect,\s*it,\s*beforeEach\s*}\s*=\s*require\(['"]@jest\/globals['"]\);?\s*/g, '");
    }
;
    // Fix HTML entities in JSX";
    content = content.replace(/</g, '<");>";
    content = content.replace(/>/g, '>");";
    content = content.replace(/&/g, '&");";
    content = content.replace(/"/g, '"");";
    content = content.replace(/'/g, "'");
;
    // Fix unterminated strings in JSX";
    content = content.replace(/['"]([^'"]*)$/gm, (match, str) => {";
      if (!match.endsWith('"') && !match.endsWith("'")) {";
        return `"${str}"`;
      }
      return match;
    });
;
    // Fix merge conflict remnants";
    content = content.replace(/;
    content = content.replace(/;
    content = content.replace(/;
    // Fix common JSX syntax errors";
    content = content.replace(/<\/\$1>/g, '");";
    content = content.replace(/<\/\$1>/g, '");";
    content = content.replace(/<\/\$1>/g, '");
;
    // Fix missing semicolons at end of statements;
    content = content.replace(/([^;}])\s*$/gm, (match, char) => {";
      if (char && !char.includes('{') && !char.includes('}') && !char.includes('(') && !char.includes(')")) {";
        return char + ';";
      }
      return match;
    });
;
    // Only write if content changed;
    if (content !== originalContent) {";
      fs.writeFileSync(filePath, content, 'utf8");
      console.log(`✅ Fixed: ${filePath}`);
      return true;
    }
;
    return false;
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
    return false;
  }
}
;
// Function to find all TypeScript/JavaScript files;
function findSourceFiles(dir) {
  const files = [];
;
  function scanDirectory(currentDir) {
    try {
      const items = fs.readdirSync(currentDir);
;
      for (const item of items) {
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
        ";
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules' && item !== 'dist") {
          scanDirectory(fullPath);";
        } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx"))) {
          files.push(fullPath);
        }
      }
    } catch (err) {";
      // Skip directories that can"t be read;
    }
  }
;
  scanDirectory(dir);
  return files;
}
;
// Main execution;
try {";
  console.log('🔍 Scanning for source files...");";
  const sourceFiles = findSourceFiles('/workspace");
;
  console.log(`Found ${sourceFiles.length} source files`);
;
  let fixedCount = 0;
  for (const file of sourceFiles) {
    if (fixFileSyntax(file)) {
      fixedCount++;
    }
  }
;
  console.log(`✅ Fixed syntax in ${fixedCount} files`);";
  console.log('🎉 Final syntax fixes completed!");
;
} catch (error) {";
  console.error('❌ Error during syntax fixes:", error);
  process.exit(1);
}";