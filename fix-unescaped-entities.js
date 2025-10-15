import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix unescaped entities in JSX
function fixUnescapedEntities(content) {
  // Fix apostrophes
  content = content.replace(/(?<!&)(?<!&#)(?<!&apos;)(?<!&lsquo;)(?<!&rsquo;)(?<!&#39;)'(?![a-zA-Z])/g, '&apos;');
  
  // Fix quotes
  content = content.replace(/(?<!&)(?<!&#)(?<!&quot;)(?<!&ldquo;)(?<!&rdquo;)(?<!&#34;)"(?![a-zA-Z])/g, '&quot;');
  
  return content;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixedContent = fixUnescapedEntities(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`Fixed unescaped entities in: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main function
function main() {
  const patterns = [
    'app/**/*.tsx',
    'app/**/*.ts',
    'components/**/*.tsx',
    'components/**/*.ts'
  ];
  
  let totalFixed = 0;
  
  patterns.forEach(async pattern => {
    const files = await glob(pattern, { cwd: process.cwd() });
    files.forEach(file => {
      if (processFile(file)) {
        totalFixed++;
      }
    });
  });
  
  console.log(`\nTotal files fixed: ${totalFixed}`);
}

main();