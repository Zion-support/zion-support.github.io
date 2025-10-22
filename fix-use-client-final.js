import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get all .tsx files in the app directory
function getAllTsxFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat && stat.isDirectory()) {
      results = results.concat(getAllTsxFiles(filePath));
    } else if (file.endsWith('.tsx')) {
      results.push(filePath);
    }
  });
  
  return results;
}

function fixUseClientFinal(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has 'use client' on line 3
    const lines = content.split('\n');
    if (lines.length > 2 && lines[2].trim() === "'use client';") {
      // Move 'use client' to the very top
      const newContent = "'use client';\n" + lines.slice(3).join('\n');
      fs.writeFileSync(filePath, newContent);
      console.log(`Fixed 'use client' position in ${path.relative(__dirname, filePath)}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Get all .tsx files
const tsxFiles = getAllTsxFiles(path.join(__dirname, 'app'));

// Fix each file
tsxFiles.forEach(fixUseClientFinal);

console.log('Fixed all use client positions!');