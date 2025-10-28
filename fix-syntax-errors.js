import fs from 'fs';
import { glob } from 'glob';

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix empty metadata objects
    if (content.includes('export const metadata = {\n};')) {
      content = content.replace(
        /export const metadata = \{\n\};/g,
        `export const metadata = {
  title: 'Page - Zion Tech Group',
  description: 'Professional services by Zion Tech Group.',
  keywords: 'technology, services, solutions',
  openGraph: {
    title: 'Page - Zion Tech Group',
    description: 'Professional services by Zion Tech Group.',
    type: 'website',
  },
};`
      );
      modified = true;
    }

    // Fix missing semicolons after function declarations
    if (content.includes('  )\n}') && !content.includes('  );\n}')) {
      content = content.replace(/  \)\n}/g, '  );\n}');
      modified = true;
    }

    // Fix missing semicolons after return statements
    if (content.includes('  return (\n    <div>') && !content.includes('  return (\n    <div>')) {
      // This is a more complex pattern, let's handle it case by case
      const lines = content.split('\n');
      const newLines = [];
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        newLines.push(line);
        
        // Check if this is a return statement that needs a semicolon
        if (line.includes('  return (') && i + 1 < lines.length) {
          // Look ahead to find the closing parenthesis
          let braceCount = 0;
          let j = i + 1;
          while (j < lines.length) {
            const nextLine = lines[j];
            if (nextLine.includes('{')) braceCount++;
            if (nextLine.includes('}')) braceCount--;
            if (nextLine.includes(')') && braceCount === 0) {
              // Found the closing parenthesis, check if it needs a semicolon
              if (!nextLine.includes(';') && !nextLine.includes('}')) {
                lines[j] = nextLine + ';';
              }
              break;
            }
            j++;
          }
        }
      }
      
      content = newLines.join('\n');
      modified = true;
    }

    // Fix specific syntax errors in micro-saas pages
    if (filePath.includes('micro-saas-services')) {
      // Remove any stray characters or malformed syntax
      content = content.replace(/export default function Wrapped\(props: any\) \{\s*return \(\s*<ErrorBoundary>\s*<Page \{\.\.\.props\} \/>\s*<\/ErrorBoundary>\s*\);\s*\}/g, 
        `export default function Wrapped(props: any) {
  return (
    <ErrorBoundary>
      <Page {...props} />
    </ErrorBoundary>
  );
}`);
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
async function main() {
  // Find all TypeScript/TSX files in the app directory
  const files = await glob('app/**/*.{ts,tsx}');

  let fixedCount = 0;
  files.forEach(file => {
    if (fixFile(file)) {
      fixedCount++;
    }
  });

  console.log(`Fixed ${fixedCount} files`);
}

main().catch(console.error);