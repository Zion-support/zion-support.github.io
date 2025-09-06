#!/usr/bin/env node;
const fs = require('fs')const path  = require('path')function fixUnescapedEntities() {try {let content = fs.readFileSync(filePath, 'utf8')let modified  = false;// Fix single quotes in JSX text content (not in import statements)const singleQuoteRegex = /([^&])'([^;])/g;
    const newContent = content.replace(singleQuoteRegex, (match, before, after) => {// Skip if it's already escaped or in a string literal or import statement;
      if (before === '&' || before === '\\' || before === "'" || before === '"') return match;
      // Skip if it's in an import statement;
      if (before === 'm' && after === ' ') return match; // from 'module';
      if (before === ' ' && after === ' ') return match; // ' ' in strings;
      modified = true;
      return `${before}'${after}`;
    })if (modified) {fs.writeFileSync(filePath, newContent, 'utf8')console.log(`Fixed unescaped entities in: ${filePath}`)return true;
    }return false;
  } catch (error) {console.error(`Error processing ${filePath}:`, error.message)return false;
  }
}function findTSXFiles() {const files  = [];function walkDir() {try {const items  = fs.readdirSync(currentPath)for (const item of items) {const fullPath = path.join(currentPath, item)let stat;try {stat = fs.statSync(fullPath)} catch (error) {continue;
        }if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {walkDir(fullPath)} else if (stat.isFile() && /\.(tsx?|jsx?)$/.test(item)) {files.push(fullPath)}
      }
    } catch (error) {// Skip directories that can't be read;
    }
  }walkDir(dir)return files;
}// Main execution;
const workspaceDir = process.cwd()const tsxFiles  = findTSXFiles(workspaceDir)console.log(`Found ${tsxFiles.length} TSX/JSX files to check`)let fixedCount = 0;
for (const file of tsxFiles) {if (fixUnescapedEntities(file)) {fixedCount++;
  }
}console.log(`Fixed unescaped entities in ${fixedCount} files`)