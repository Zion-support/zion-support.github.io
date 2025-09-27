#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

function fixSyntaxErrors(content) {
  // Fix malformed className attributes
  content = content.replace(/className="([^"]*?)\s*,\s*([^"]*?)"/g, 'className="$1 $2"');
  content = content.replace(/className="([^"]*?)\s*,\s*([^"]*?)\s*,\s*([^"]*?)"/g, 'className="$1 $2 $3"');
  content = content.replace(/className="([^"]*?)\s*,\s*([^"]*?)\s*,\s*([^"]*?)\s*,\s*([^"]*?)"/g, 'className="$1 $2 $3 $4"');
  content = content.replace(/className="([^"]*?)\s*,\s*([^"]*?)\s*,\s*([^"]*?)\s*,\s*([^"]*?)\s*,\s*([^"]*?)"/g, 'className="$1 $2 $3 $4 $5"');
  
  // Fix specific patterns
  content = content.replace(/gap-([0-9]+)mb-([0-9]+)/g, 'gap-$1 mb-$2');
  content = content.replace(/p-([0-9]+)text-white/g, 'p-$1 text-white');
  content = content.replace(/text-([0-9]+)xlfont-bold/g, 'text-$1xl font-bold');
  content = content.replace(/text-([0-9]+)smopacity-([0-9]+)/g, 'text-$1sm opacity-$2');
  content = content.replace(/items-centerspace-x-([0-9]+)/g, 'items-center space-x-$1');
  content = content.replace(/font-mediumtransition-colors/g, 'font-medium transition-colors');
  content = content.replace(/onClick={() =>setIsRealTime/g, 'onClick={() => setIsRealTime');
  content = content.replace(/shadow-lgp-([0-9]+)/g, 'shadow-lg p-$1');
  content = content.replace(/flexitems-center/g, 'flex items-center');
  content = content.replace(/w-([0-9]+)h-([0-9]+)mr-([0-9]+)text-([a-z]+)-([0-9]+)/g, 'w-$1 h-$2 mr-$3 text-$4-$5');
  content = content.replace(/items-centermb-([0-9]+)/g, 'items-center mb-$1');
  content = content.replace(/h\s*1\s*Count/g, 'h1Count');
  content = content.replace(/h([0-9]+)\s*Coun,\s*t/g, 'h$1Count');
  content = content.replace(/disable,\s*d:opacity-([0-9]+)/g, 'disabled:opacity-$1');
  content = content.replace(/w-([0-9]+)h-([0-9]+)text-([a-z]+)-([0-9]+)/g, 'w-$1 h-$2 text-$3-$4');
  content = content.replace(/text-gray-900dark:text-white/g, 'text-gray-900 dark:text-white');
  content = content.replace(/flexspace-x-([0-9]+)/g, 'flex space-x-$1');
  content = content.replace(/disable,\s*d:bg-gray-([0-9]+)/g, 'disabled:bg-gray-$1');
  content = content.replace(/px-([0-9]+)py-([0-9]+)bg-([a-z]+)-([0-9]+)/g, 'px-$1 py-$2 bg-$3-$4');
  content = content.replace(/hover:bg-([a-z]+)-([0-9]+)/g, 'hover:bg-$1-$2');
  content = content.replace(/text-white\s*rounded-lg/g, 'text-white rounded-lg');
  content = content.replace(/text-sm\s*font-medium/g, 'text-sm font-medium');
  content = content.replace(/transition-colors/g, 'transition-colors');
  content = content.replace(/aria-label=\{([^}]+)\}/g, 'aria-label={$1}');
  content = content.replace(/className=\{`([^`]+)\$\{([^}]+)\}`\s*\}/g, 'className={`$1${$2}`}');
  content = content.replace(/className=\{`([^`]+)\$\{([^}]+)\}\s*\}/g, 'className={`$1${$2}`}');
  
  return content;
}

function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixSyntaxErrors(content);
    
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

function processDirectory(dirPath) {
  let fixedCount = 0;
  
  try {
    const items = fs.readdirSync(dirPath);
    
    for (const item of items) {
      const fullPath = path.join(dirPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        fixedCount += processDirectory(fullPath);
      } else if (stat.isFile() && (item.endsWith('.tsx') || item.endsWith('.jsx'))) {
        if (processFile(fullPath)) {
          fixedCount++;
        }
      }
    }
  } catch (error) {
    console.error(`Error processing directory ${dirPath}:`, error.message);
  }
  
  return fixedCount;
}

console.log('Starting comprehensive syntax fixes...');
const fixedCount = processDirectory('./src/components');
console.log(`Fixed ${fixedCount} files.`);