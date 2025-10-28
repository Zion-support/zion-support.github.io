import fs from 'fs';
import { glob } from 'glob';

// Function to fix remaining TypeScript errors
function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Remove unused variable declarations
  const unusedVars = [
    'Wrapped', 'ErrorBoundary', 'AboutLayout', 'RootLayout', 'Error', 'GlobalError'
  ];

  unusedVars.forEach(varName => {
    // Remove unused imports
    const importRegex = new RegExp(`^import\\s+.*?\\{[^}]*\\b${varName}\\b[^}]*\\}\\s+from\\s+['"][^'"]+['"];?$`, 'gm');
    if (content.match(importRegex)) {
      content = content.replace(importRegex, '');
      modified = true;
    }

    // Remove unused variable declarations
    const varRegex = new RegExp(`^const\\s+${varName}\\s*=.*?;?$`, 'gm');
    if (content.match(varRegex)) {
      content = content.replace(varRegex, '');
      modified = true;
    }

    // Remove unused function declarations
    const funcRegex = new RegExp(`^function\\s+${varName}\\s*\\([^)]*\\)\\s*\\{[^}]*\\}$`, 'gms');
    if (content.match(funcRegex)) {
      content = content.replace(funcRegex, '');
      modified = true;
    }
  });

  // Fix specific issues
  if (content.includes('export default function Error(')) {
    content = content.replace('export default function Error(', 'export default function ErrorPage(');
    modified = true;
  }

  if (content.includes('export default function GlobalError(')) {
    content = content.replace('export default function GlobalError(', 'export default function GlobalErrorPage(');
    modified = true;
  }

  if (content.includes('export default function RootLayout(')) {
    content = content.replace('export default function RootLayout(', 'export default function RootLayout(');
    modified = true;
  }

  if (content.includes('export default function AboutLayout(')) {
    content = content.replace('export default function AboutLayout(', 'export default function AboutLayout(');
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