const fs = require('fs');
const path = require('path');

// Function to fix final remaining issues
function fixFinalIssues(content) {
  let fixedContent = content;
  
  // Fix unescaped quotes
  fixedContent = fixedContent.replace(/That's/g, 'That&apos;s');
  fixedContent = fixedContent.replace(/don't/g, 'don&apos;t');
  fixedContent = fixedContent.replace(/can't/g, 'can&apos;t');
  fixedContent = fixedContent.replace(/won't/g, 'won&apos;t');
  fixedContent = fixedContent.replace(/isn't/g, 'isn&apos;t');
  fixedContent = fixedContent.replace(/aren't/g, 'aren&apos;t');
  fixedContent = fixedContent.replace(/haven't/g, 'haven&apos;t');
  fixedContent = fixedContent.replace(/hasn't/g, 'hasn&apos;t');
  fixedContent = fixedContent.replace(/wouldn't/g, 'wouldn&apos;t');
  fixedContent = fixedContent.replace(/shouldn't/g, 'shouldn&apos;t');
  fixedContent = fixedContent.replace(/couldn't/g, 'couldn&apos;t');
  fixedContent = fixedContent.replace(/we'll/g, 'we&apos;ll');
  fixedContent = fixedContent.replace(/you'll/g, 'you&apos;ll');
  fixedContent = fixedContent.replace(/they'll/g, 'they&apos;ll');
  fixedContent = fixedContent.replace(/it'll/g, 'it&apos;ll');
  fixedContent = fixedContent.replace(/I'll/g, 'I&apos;ll');
  fixedContent = fixedContent.replace(/he'll/g, 'he&apos;ll');
  fixedContent = fixedContent.replace(/she'll/g, 'she&apos;ll');
  fixedContent = fixedContent.replace(/we're/g, 'we&apos;re');
  fixedContent = fixedContent.replace(/they're/g, 'they&apos;re');
  fixedContent = fixedContent.replace(/it's/g, 'it&apos;s');
  fixedContent = fixedContent.replace(/I'm/g, 'I&apos;m');
  fixedContent = fixedContent.replace(/you're/g, 'you&apos;re');
  fixedContent = fixedContent.replace(/he's/g, 'he&apos;s');
  fixedContent = fixedContent.replace(/she's/g, 'she&apos;s');
  fixedContent = fixedContent.replace(/we've/g, 'we&apos;ve');
  fixedContent = fixedContent.replace(/you've/g, 'you&apos;ve');
  fixedContent = fixedContent.replace(/they've/g, 'they&apos;ve');
  fixedContent = fixedContent.replace(/I've/g, 'I&apos;ve');
  fixedContent = fixedContent.replace(/we'd/g, 'we&apos;d');
  fixedContent = fixedContent.replace(/you'd/g, 'you&apos;d');
  fixedContent = fixedContent.replace(/they'd/g, 'they&apos;d');
  fixedContent = fixedContent.replace(/I'd/g, 'I&apos;d');
  fixedContent = fixedContent.replace(/he'd/g, 'he&apos;d');
  fixedContent = fixedContent.replace(/she'd/g, 'she&apos;d');
  
  // Fix extra closing parentheses
  fixedContent = fixedContent.replace(/\)\)\}/g, ')}');
  
  return fixedContent;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixFinalIssues(content);
    
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

// Function to recursively find and process files
function processDirectory(dirPath) {
  let filesProcessed = 0;
  
  function walkDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    for (const item of items) {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        if (!['node_modules', '.git', '.next', 'dist', 'build'].includes(item)) {
          walkDir(fullPath);
        }
      } else if (item.endsWith('.tsx') || item.endsWith('.jsx')) {
        if (processFile(fullPath)) {
          filesProcessed++;
        }
      }
    }
  }
  
  walkDir(dirPath);
  return filesProcessed;
}

// Main execution
console.log('Starting to fix final issues...');
const filesProcessed = processDirectory('/workspace');
console.log(`Processed ${filesProcessed} files.`);