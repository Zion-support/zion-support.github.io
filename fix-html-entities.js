import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// HTML entity mappings
const entityMap = {
  '&quot;': '"',
  '&apos;': "'",
  '&lt;': '<',
  '&gt;': '>',
  '&amp;': '&',
  '&nbsp;': ' ',
  '&ldquo;': '"',
  '&rdquo;': '"',
  '&lsquo;': "'",
  '&rsquo;': "'",
  '&#39;': "'",
  '&#34;': '"'
};

// Function to fix HTML entities in a file
function fixHtmlEntities(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    let newContent = content;
    
    // Replace HTML entities
    for (const [entity, replacement] of Object.entries(entityMap)) {
      newContent = newContent.replace(new RegExp(entity, 'g'), replacement);
    }
    
    // Only write if content changed
    if (content !== newContent) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Fixed HTML entities in ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main function
async function main() {
  // Find all TypeScript/JavaScript files in the app directory
  const files = await glob('app/**/*.{ts,tsx,js,jsx}');

  console.log(`Found ${files.length} files to process...`);

  let fixedCount = 0;
  for (const file of files) {
    const fullPath = path.join(process.cwd(), file);
    if (fixHtmlEntities(fullPath)) {
      fixedCount++;
    }
  }

  console.log(`Fixed HTML entities in ${fixedCount} files`);
}

main().catch(console.error);