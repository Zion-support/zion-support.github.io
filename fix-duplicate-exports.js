import fs from 'fs';
import { glob } from 'glob';

// Function to fix duplicate export default statements
function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Fix duplicate export default statements
  if (content.includes('export default export default')) {
    content = content.replace(/export default export default/g, 'export default');
    modified = true;
  }

  // Fix function declarations that should be default exports
  if (content.includes('function Home()') && !content.includes('export default function Home')) {
    content = content.replace('function Home()', 'export default function Home()');
    modified = true;
  }
  
  if (content.includes('function Page()') && !content.includes('export default function Page')) {
    content = content.replace('function Page()', 'export default function Page()');
    modified = true;
  }
  
  if (content.includes('function PagePage()') && !content.includes('export default function PagePage')) {
    content = content.replace('function PagePage()', 'export default function PagePage()');
    modified = true;
  }

  // Fix any other function declarations that should be default exports
  const functionMatch = content.match(/^function\s+([A-Z][a-zA-Z0-9]*)\s*\(\s*\)\s*\{/gm);
  if (functionMatch) {
    functionMatch.forEach(match => {
      const funcName = match.match(/function\s+([A-Z][a-zA-Z0-9]*)/)[1];
      if (!content.includes(`export default function ${funcName}`) && !content.includes(`export default ${funcName}`)) {
        content = content.replace(match, `export default ${match}`);
        modified = true;
      }
    });
  }

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