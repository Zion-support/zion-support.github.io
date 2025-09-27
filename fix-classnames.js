import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix className issues
function fixClassNames(content) {
  // Fix className= without quotes
  content = content.replace(/className=([^"'`\s][^"'`\s]*)/g, (match, className) => {
    // If it doesn't start with quote, add quotes
    if (!className.startsWith('"') && !className.startsWith("'") && !className.startsWith('`')) {
      return `className="${className}"`;
    }
    return match;
  });

  // Fix common className spacing issues
  content = content.replace(/className="([^"]*[a-z])([A-Z][^"]*)"/g, (match, before, after) => {
    return `className="${before} ${after}"`;
  });

  // Fix className with missing spaces between classes
  content = content.replace(/className="([^"]*[a-z])([A-Z][a-z][^"]*)"/g, (match, before, after) => {
    return `className="${before} ${after}"`;
  });

  // Fix specific patterns like px-6py-4, w-3h-3, etc.
  content = content.replace(/className="([^"]*[a-z])(\d+)([A-Za-z][^"]*)"/g, (match, before, num, after) => {
    return `className="${before}${num} ${after}"`;
  });

  // Fix patterns like text-blue-600hover:text-blue-900
  content = content.replace(/className="([^"]*[a-z])([A-Z][^"]*)"/g, (match, before, after) => {
    return `className="${before} ${after}"`;
  });

  return content;
}

// Function to process a file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixClassNames(content);
    
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

// Function to recursively find and process .tsx files
function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  let fixedCount = 0;

  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      fixedCount += processDirectory(filePath);
    } else if (file.endsWith('.tsx')) {
      if (processFile(filePath)) {
        fixedCount++;
      }
    }
  }

  return fixedCount;
}

// Main execution
console.log('Starting className fixes...');
const srcDir = path.join(__dirname, 'src', 'components');
const fixedCount = processDirectory(srcDir);
console.log(`Fixed ${fixedCount} files`);