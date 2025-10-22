import fs from 'fs';
import path from 'path';
import { glob } from 'glob';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to fix malformed features arrays
function fixAllArrays(content) {
  let fixed = content;
  
  // Fix malformed features array - remove duplicate description and fix syntax
  fixed = fixed.replace(/\s*description:\s*'[^']*'\s*}\s*}\s*];/g, '}];');
  
  // Fix malformed features array with different patterns
  fixed = fixed.replace(/\s*description:\s*'[^']*'\s*}\s*}\s*];/g, '}];');
  
  // Fix malformed features array with extra spaces
  fixed = fixed.replace(/\s*description:\s*'[^']*'\s*}\s*}\s*];/g, '}];');
  
  return fixed;
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixAllArrays(content);
    
    if (content !== fixed) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`Fixed: ${filePath}`);
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
  const appDir = path.join(__dirname, 'app');
  const pattern = path.join(appDir, '**/*.tsx');
  
  console.log('Starting comprehensive array fixes...');
  
  const files = await glob(pattern);
  let fixedCount = 0;
  
  for (const file of files) {
    if (processFile(file)) {
      fixedCount++;
    }
  }
  
  console.log(`Fixed ${fixedCount} files`);
}

main();