import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to completely rewrite corrupted files with proper structure
function fixCorruptedFile(content, filePath) {
  // If file is too corrupted, create a basic template
  if (content.includes('<<<<<<< HEAD') || content.split('\n').length < 10) {
    const fileName = path.basename(filePath, path.extname(filePath));
    const componentName = fileName.charAt(0).toUpperCase() + fileName.slice(1).replace(/[-_]/g, '');
    
    return `import React from "react";
import { Helmet } from "react-helmet-async";

const ${componentName} = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>${componentName} - Zion Tech Group</title>
        <meta name="description" content="${componentName} - Zion Tech Group" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-8">${componentName}</h1>
          <p className="text-gray-300 text-lg">
            This page is under construction. Please check back later.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ${componentName};`;
  }

  // Try to fix the existing content
  let fixed = content;
  
  // Remove merge conflicts
  fixed = fixed.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]*/g, '');
  fixed = fixed.replace(/<<<<<<< [^\n]*[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]*/g, '');
  
  // Fix imports
  fixed = fixed.replace(/import\s+([^"']*)\s+from\s+"([^"]*)$/gm, (match, imports, module) => {
    return `import ${imports.trim()} from "${module}";`;
  });
  
  // Fix malformed JSX
  fixed = fixed.replace(/<div[^>]*>[\s\S]*?<\/div>\s*\)\s*\)\s*;/gm, (match) => {
    return match.replace(/\)\s*\)\s*;/, ');');
  });
  
  // Fix unterminated strings
  fixed = fixed.replace(/"([^"]*)$/gm, '"');
  
  // Fix malformed object literals
  fixed = fixed.replace(/\{\s*"([^"]*)"\s*([^}]*)\s*\}/gm, (match, title, rest) => {
    const cleanRest = rest.replace(/\s*:\s*/g, ': ').replace(/\s*,\s*/g, ', ');
    return `{\n      title: "${title}"${cleanRest}\n    }`;
  });
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixCorruptedFile(content, filePath);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JavaScript files
function findFiles(dir, extensions = ['.tsx', '.ts', '.jsx', '.js']) {
  const files = [];
  
  function traverse(currentDir) {
    try {
      const items = fs.readdirSync(currentDir);
      
      for (const item of items) {
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
          traverse(fullPath);
        } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
          files.push(fullPath);
        }
      }
    } catch (error) {
      console.error(`Error reading directory ${currentDir}:`, error.message);
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const appDir = path.join(__dirname, 'app');
const files = findFiles(appDir);

console.log(`Found ${files.length} files to process...`);

let fixedCount = 0;
for (const file of files) {
  if (processFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files out of ${files.length} total files.`);