const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to extract missing imports from JSX content
function extractMissingImports(content) {
  const iconMatches = content.match(/<(\w+)\s+className="w-6 h-6"\s*\/>/g);
  if (!iconMatches) return [];
  
  const usedIcons = [...new Set(iconMatches.map(match => match.match(/<(\w+)/)[1]))];
  return usedIcons;
}

// Function to fix a single page file
function fixPageFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file has the malformed structure
    if (!content.includes('export default function') || !content.includes('return;')) {
      return false; // Skip files that don't need fixing
    }
    
    // Extract the function name from the export statement
    const functionNameMatch = content.match(/export default function (\w+)/);
    if (!functionNameMatch) {
      return false;
    }
    
    const functionName = functionNameMatch[1];
    
    // Find the start of the malformed structure
    const returnIndex = content.indexOf('return;');
    if (returnIndex === -1) {
      return false;
    }
    
    // Split content into lines for easier processing
    const lines = content.split('\n');
    
    // Find where the malformed structure ends by looking for the last ]; in the file
    let dataEndIndex = -1;
    for (let i = lines.length - 1; i >= 0; i--) {
      if (lines[i].trim().endsWith('];')) {
        dataEndIndex = i;
        break;
      }
    }
    
    if (dataEndIndex === -1) {
      return false;
    }
    
    // Extract the data structures (everything between return; and the end)
    const dataLines = lines.slice(returnIndex + 1, dataEndIndex + 1);
    const dataContent = dataLines.join('\n');
    
    // Find where the JSX content starts
    let jsxStartIndex = -1;
    for (let i = dataEndIndex + 1; i < lines.length; i++) {
      if (lines[i].includes('<div') || lines[i].includes('<Helmet')) {
        jsxStartIndex = i;
        break;
      }
    }
    
    if (jsxStartIndex === -1) {
      return false;
    }
    
    // Extract the JSX content
    const jsxLines = lines.slice(jsxStartIndex);
    const jsxContent = jsxLines.join('\n');
    
    // Extract missing imports
    const missingImports = extractMissingImports(dataContent + '\n' + jsxContent);
    
    // Build the fixed content
    let fixedContent = '';
    
    // Add imports
    const importLines = lines.slice(0, returnIndex);
    let importSection = importLines.join('\n');
    
    // Add missing imports to lucide-react
    if (missingImports.length > 0) {
      const importMatch = importSection.match(/(import.*from 'lucide-react';)/);
      if (importMatch) {
        const currentImports = importMatch[1].match(/\{([^}]+)\}/)[1];
        const existingImports = currentImports.split(',').map(icon => icon.trim());
        const allImports = [...new Set([...existingImports, ...missingImports])];
        importSection = importSection.replace(
          importMatch[1],
          `import { ${allImports.join(', ')} } from 'lucide-react';`
        );
      }
    }
    
    fixedContent += importSection + '\n\n';
    
    // Add data structures
    fixedContent += dataContent + '\n\n';
    
    // Add function declaration and JSX
    fixedContent += `export default function ${functionName}() {\n`;
    fixedContent += `  return (\n`;
    fixedContent += `    <>\n`;
    fixedContent += `      <Helmet>\n`;
    fixedContent += `        <title>${functionName.replace(/([A-Z])/g, ' $1').trim()} - Zion Tech Group</title>\n`;
    fixedContent += `        <meta name="description" content="Advanced ${functionName.replace(/([A-Z])/g, ' $1').trim().toLowerCase()} solutions powered by AI technology." />\n`;
    fixedContent += `      </Helmet>\n`;
    fixedContent += `      \n`;
    fixedContent += jsxContent;
    
    // Write the fixed content
    fs.writeFileSync(filePath, fixedContent);
    return true;
    
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
async function main() {
  console.log('Starting to fix all page files...');
  
  // Find all page.tsx files
  const files = glob.sync('app/**/page.tsx');
  console.log(`Found ${files.length} page files`);
  
  let fixedCount = 0;
  let skippedCount = 0;
  let errorCount = 0;
  
  for (const file of files) {
    try {
      const fixed = fixPageFile(file);
      if (fixed) {
        fixedCount++;
        if (fixedCount % 50 === 0) {
          console.log(`Fixed ${fixedCount} files so far...`);
        }
      } else {
        skippedCount++;
      }
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
      errorCount++;
    }
  }
  
  console.log(`\nFixed: ${fixedCount} files`);
  console.log(`Skipped: ${skippedCount} files`);
  console.log(`Errors: ${errorCount} files`);
  console.log('Done!');
}

main().catch(console.error);