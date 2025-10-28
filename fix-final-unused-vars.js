import fs from 'fs';
import { glob } from 'glob';

// Function to remove final unused variables
function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Remove unused Wrapped function declarations
  const wrappedRegex = /^export default function Wrapped\([^)]*\)\s*\{[^}]*\}$/gms;
  if (content.match(wrappedRegex)) {
    content = content.replace(wrappedRegex, '');
    modified = true;
  }

  // Remove unused AboutLayout function declarations
  const aboutLayoutRegex = /^export default function AboutLayout\([^)]*\)\s*\{[^}]*\}$/gms;
  if (content.match(aboutLayoutRegex)) {
    content = content.replace(aboutLayoutRegex, '');
    modified = true;
  }

  // Remove unused RootLayout function declarations
  const rootLayoutRegex = /^export default function RootLayout\([^)]*\)\s*\{[^}]*\}$/gms;
  if (content.match(rootLayoutRegex)) {
    content = content.replace(rootLayoutRegex, '');
    modified = true;
  }

  // Remove unused Error function declarations
  const errorRegex = /^export default function Error\([^)]*\)\s*\{[^}]*\}$/gms;
  if (content.match(errorRegex)) {
    content = content.replace(errorRegex, '');
    modified = true;
  }

  // Remove unused GlobalError function declarations
  const globalErrorRegex = /^export default function GlobalError\([^)]*\)\s*\{[^}]*\}$/gms;
  if (content.match(globalErrorRegex)) {
    content = content.replace(globalErrorRegex, '');
    modified = true;
  }

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