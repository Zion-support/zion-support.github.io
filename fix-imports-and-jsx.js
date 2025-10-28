import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix imports and JSX in a page file
function fixPageFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if file doesn't need fixing
    if (!content.includes('import { ErrorBoundary }') && !content.match(/<[a-z][a-zA-Z0-9]*Page/)) {
      return false;
    }
    
    let fixedContent = content;
    
    // Fix ErrorBoundary import
    fixedContent = fixedContent.replace(
      /import { ErrorBoundary } from ['"]([^'"]+)['"]/g,
      ''
    );
    
    // Fix Navigation import
    fixedContent = fixedContent.replace(
      /import Navigation from ['"]([^'"]+)['"]/g,
      ''
    );
    
    // Fix Footer import
    fixedContent = fixedContent.replace(
      /import Footer from ['"]([^'"]+)['"]/g,
      ''
    );
    
    // Fix JSX component names - find the function name and replace in JSX
    const functionMatch = fixedContent.match(/function\s+([a-zA-Z][a-zA-Z0-9]*Page)\(\)/);
    if (functionMatch) {
      const functionName = functionMatch[1];
      const jsxMatch = fixedContent.match(/<([a-zA-Z][a-zA-Z0-9]*Page)\s+{\.\.\.props}\s*\/>/);
      if (jsxMatch) {
        const jsxName = jsxMatch[1];
        if (jsxName !== functionName) {
          fixedContent = fixedContent.replace(
            new RegExp(`<${jsxName}\\s+{\\.\\.\\.props}\\s*\\/>`, 'g'),
            `<${functionName} {...props} />`
          );
        }
      }
    }
    
    // Fix props type
    fixedContent = fixedContent.replace(
      /export default function Wrapped\(props\)/g,
      'export default function Wrapped(props: { [key: string]: unknown })'
    );
    
    // Remove unused function declarations
    const functionNameMatch = fixedContent.match(/function\s+([a-zA-Z][a-zA-Z0-9]*Page)\(\)/);
    if (functionNameMatch) {
      const functionName = functionNameMatch[1];
      // Check if the function is used in JSX
      if (!fixedContent.includes(`<${functionName}`)) {
        // Remove the unused function
                        if (functionStart !== -1 && functionEnd !== -1) {
          const beforeFunction = fixedContent.substring(0, functionStart);
          const afterFunction = fixedContent.substring(functionEnd + 1);
          fixedContent = beforeFunction + afterFunction;
        }
      }
    }
    
    fs.writeFileSync(filePath, fixedContent);
        return true;
  } catch (error) {
        return false;
  }
}

// Main function
async function main() {
  // Find all page.tsx files in the app directory
  const pageFiles = await glob('app/**/page.tsx');

  
  let fixedCount = 0;
  let skippedCount = 0;

  pageFiles.forEach(filePath => {
    if (fixPageFile(filePath)) {
      fixedCount++;
    } else {
      skippedCount++;
    }
  });

        }

main().catch(console.error);