import fs from 'fs';
import { glob } from 'glob';

// Function to remove all Wrapped functions
function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Remove Wrapped function declarations with different patterns
  const patterns = [
    /^function Wrapped\([^)]*\)\s*\{[^}]*\}$/gms,
    /^export default function Wrapped\([^)]*\)\s*\{[^}]*\}$/gms,
    /function Wrapped\([^)]*\)\s*\{[^}]*\}/gms,
    /export default function Wrapped\([^)]*\)\s*\{[^}]*\}/gms
  ];

  patterns.forEach(pattern => {
    if (content.match(pattern)) {
      content = content.replace(pattern, '');
      modified = true;
    }
  });

  // Clean up extra empty lines
  content = content.replace(/\n\s*\n\s*\n/g, '\n\n');

  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  }
}

// Main function to process files
async function main() {
  // Find all TypeScript/TSX files in the app directory
  const files = await glob('app/**/*.{ts,tsx}');

  console.log(`Found ${files.length} TypeScript files to process...`);

  let fixedCount = 0;
  files.forEach(file => {
    try {
      fixFile(file);
      fixedCount++;
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
    }
  });

  console.log(`Fixed ${fixedCount} files`);
}

main().catch(console.error);