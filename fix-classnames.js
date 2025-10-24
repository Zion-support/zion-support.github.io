#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to fix malformed className attributes
function fixClassNames(content) {
  // Fix className attributes that are missing spaces
  content = content.replace(/className="([^"]*?)([a-z])([A-Z])([^"]*?)"/g, (match, before, char1, char2, after) => {
    return `className="${before}${char1} ${char2}${after}"`;
  });
  
  // Fix multiple consecutive className issues
  content = content.replace(/className="([^"]*?)([a-z])([A-Z])([a-z])([A-Z])([^"]*?)"/g, (match, before, char1, char2, char3, char4, after) => {
    return `className="${before}${char1} ${char2}${char3} ${char4}${after}"`;
  });
  
  // Fix specific patterns
  content = content.replace(/className="([^"]*?)bg-gradient-to-brfrom-slate-900via-purple-900 to-slate-900([^"]*?)"/g, 
    'className="$1bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900$2"');
  
  content = content.replace(/className="([^"]*?)relativepy-20px-4sm:px-6 lg:px-8([^"]*?)"/g, 
    'className="$1relative py-20 px-4 sm:px-6 lg:px-8$2"');
  
  content = content.replace(/className="([^"]*?)text-4xlmd:text-6xlfont-boldtext-white mb-6([^"]*?)"/g, 
    'className="$1text-4xl md:text-6xl font-bold text-white mb-6$2"');
  
  content = content.replace(/className="([^"]*?)bg-gradient-to-rfrom-purple-400to-blue-400bg-clip-text text-transparent([^"]*?)"/g, 
    'className="$1bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent$2"');
  
  content = content.replace(/className="([^"]*?)text-xltext-gray-300mb-8max-w-3xl mx-auto([^"]*?)"/g, 
    'className="$1text-xl text-gray-300 mb-8 max-w-3xl mx-auto$2"');
  
  content = content.replace(/className="([^"]*?)flexflex-colsm:flex-rowgap-4 justify-center([^"]*?)"/g, 
    'className="$1flex flex-col sm:flex-row gap-4 justify-center$2"');
  
  content = content.replace(/className="([^"]*?)bg-gradient-to-rfrom-purple-500to-blue-600text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center([^"]*?)"/g, 
    'className="$1bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center$2"');
  
  // Fix grid classes
  content = content.replace(/className="([^"]*?)gridgrid-cols-1md:grid-cols-2lg:grid-cols-4 gap-8([^"]*?)"/g, 
    'className="$1grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8$2"');
  
  content = content.replace(/className="([^"]*?)bg-white\/5backdrop-blur-smrounded-xlp-6 border border-white\/10([^"]*?)"/g, 
    'className="$1bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10$2"');
  
  content = content.replace(/className="([^"]*?)w-12h-12text-purple-400mb-4([^"]*?)"/g, 
    'className="$1w-12 h-12 text-purple-400 mb-4$2"');
  
  content = content.replace(/className="([^"]*?)text-xlfont-semiboldtext-whitemb-2([^"]*?)"/g, 
    'className="$1text-xl font-semibold text-white mb-2$2"');
  
  return content;
}

// Function to fix malformed JSX structure
function fixJSXStructure(content) {
  // Fix malformed closing tags
  content = content.replace(/<\/div><feature\.icon/g, '<feature.icon');
  content = content.replace(/<\/div><title>/g, '</div>\n        <title>');
  content = content.replace(/<\/Helmet><title>/g, '</Helmet>\n      <title>');
  
  // Fix malformed array structures
  content = content.replace(/\];\s*const\s+benefits\s*=\s*\[\s*},/g, '];\n  const benefits = [');
  
  return content;
}

// Function to process a file
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    content = fixClassNames(content);
    content = fixJSXStructure(content);
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
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
function findFiles(dir) {
  const files = [];
  
  function scanDirectory(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        scanDirectory(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js') || item.endsWith('.jsx'))) {
        files.push(fullPath);
      }
    }
  }
  
  scanDirectory(dir);
  return files;
}

// Main execution
console.log('Starting className and JSX fixes...');

const appDir = path.join(process.cwd(), 'app');
const files = findFiles(appDir);

let fixedCount = 0;
for (const file of files) {
  if (processFile(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);
console.log('ClassName and JSX fixes completed!');