#!/usr/bin/env node;
const fs = require('fs')const path  = require('path')function fixQuotEntities() {try {let content = fs.readFileSync(filePath, 'utf8')let modified  = false;// Fix " entities back to double quotes;
    if (content.includes('"')) {content = content.replace(/"/g, '"')modified = true;
    }if (modified) {fs.writeFileSync(filePath, content, 'utf8')console.log(`Fixed " entities in: ${filePath}`)return true;
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
for (const file of tsxFiles) {if (fixQuotEntities(file)) {fixedCount++;
  }
}console.log(`Fixed " entities in ${fixedCount} files`)