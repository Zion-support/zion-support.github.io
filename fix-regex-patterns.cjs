const fs = require('fs');
const path = require('path');

// Find all TypeScript/JavaScript files
function findFiles(dir, extensions = ['.tsx', '.ts', '.js', '.jsx']) {
  let files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.includes('node_modules') && !item.startsWith('.')) {
      files = files.concat(findFiles(fullPath, extensions));
    } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Fix regex patterns in a file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Fix regex patterns that should be strings
    content = content.replace(/title:\s*'\[[^']*\]',/g, "title: 'Service Title',");
    content = content.replace(/description:\s*'\[[^']*\]',/g, "description: 'Service description with detailed information about the offering.',");
    
    // Fix specific patterns for different service types
    if (filePath.includes('5g-implementation')) {
      content = content.replace(/title:\s*'\[[^']*\]',/g, "title: '5G Network Design',");
      content = content.replace(/description:\s*'\[[^']*\]',/g, "description: 'Complete 5G network design and implementation with optimal coverage and performance.',");
    } else if (filePath.includes('ai-')) {
      content = content.replace(/title:\s*'\[[^']*\]',/g, "title: 'AI Service',");
      content = content.replace(/description:\s*'\[[^']*\]',/g, "description: 'Advanced AI-powered solution for modern business needs.',");
    } else if (filePath.includes('blockchain')) {
      content = content.replace(/title:\s*'\[[^']*\]',/g, "title: 'Blockchain Solution',");
      content = content.replace(/description:\s*'\[[^']*\]',/g, "description: 'Secure and scalable blockchain implementation for your business.',");
    } else if (filePath.includes('cloud')) {
      content = content.replace(/title:\s*'\[[^']*\]',/g, "title: 'Cloud Service',");
      content = content.replace(/description:\s*'\[[^']*\]',/g, "description: 'Comprehensive cloud infrastructure and management solutions.',");
    } else {
      content = content.replace(/title:\s*'\[[^']*\]',/g, "title: 'Service Title',");
      content = content.replace(/description:\s*'\[[^']*\]',/g, "description: 'Service description with detailed information about the offering.',");
    }
    
    // Fix any remaining malformed patterns
    content = content.replace(/\[[^']*\]/g, 'Service Feature');
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('Starting regex pattern fixes...');

const files = findFiles('/workspace');
console.log(`Found ${files.length} files to process`);

let processedCount = 0;
let fixedCount = 0;

for (const file of files) {
  processedCount++;
  if (processedCount % 100 === 0) {
    console.log(`Processed ${processedCount}/${files.length} files...`);
  }
  
  if (fixFile(file)) {
    fixedCount++;
  }
}

console.log(`Completed! Processed ${processedCount} files, fixed ${fixedCount} files.`);