const fs = require('fs');
const path = require('path');
const glob = require('glob');

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
      console.log(`Skipping ${filePath} - no function name found`);
      return false;
    }
    
    const functionName = functionNameMatch[1];
    
    // Find the start of the malformed structure
    const returnIndex = content.indexOf('return;');
    if (returnIndex === -1) {
      console.log(`Skipping ${filePath} - no return statement found`);
      return false;
    }
    
    // Find the end of the malformed structure (look for the closing of the data arrays)
    const lines = content.split('\n');
    let dataEndIndex = -1;
    let braceCount = 0;
    let inDataStructure = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.includes('return;')) {
        inDataStructure = true;
        continue;
      }
      
      if (inDataStructure) {
        // Count braces to find the end of data structures
        for (const char of line) {
          if (char === '{') braceCount++;
          if (char === '}') braceCount--;
        }
        
        // Look for the end of data arrays (closing bracket followed by semicolon)
        if (braceCount === 0 && line.trim().endsWith('];')) {
          dataEndIndex = i;
          break;
        }
      }
    }
    
    if (dataEndIndex === -1) {
      console.log(`Skipping ${filePath} - could not find end of data structure`);
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
      console.log(`Skipping ${filePath} - no JSX content found`);
      return false;
    }
    
    // Extract the JSX content
    const jsxLines = lines.slice(jsxStartIndex);
    const jsxContent = jsxLines.join('\n');
    
    // Find missing imports by analyzing the data content
    const missingImports = [];
    const iconMatches = dataContent.match(/<(\w+)\s+className="w-6 h-6"\s*\/>/g);
    if (iconMatches) {
      const usedIcons = [...new Set(iconMatches.map(match => match.match(/<(\w+)/)[1]))];
      const currentImports = content.match(/import.*from 'lucide-react'/);
      if (currentImports) {
        const importedIcons = currentImports[0].match(/\{([^}]+)\}/)[1].split(',').map(icon => icon.trim());
        const missing = usedIcons.filter(icon => !importedIcons.includes(icon));
        if (missing.length > 0) {
          missingImports.push(...missing);
        }
      }
    }
    
    // Build the fixed content
    let fixedContent = '';
    
    // Add imports
    const importLines = lines.slice(0, returnIndex);
    let importSection = importLines.join('\n');
    
    // Add missing imports
    if (missingImports.length > 0) {
      const importMatch = importSection.match(/(import.*from 'lucide-react';)/);
      if (importMatch) {
        const currentImports = importMatch[1].match(/\{([^}]+)\}/)[1];
        const newImports = [...currentImports.split(',').map(icon => icon.trim()), ...missingImports];
        importSection = importSection.replace(
          importMatch[1],
          `import { ${newImports.join(', ')} } from 'lucide-react';`
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
    console.log(`Fixed: ${filePath}`);
    return true;
    
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
async function main() {
  console.log('Starting to fix page files...');
  
  // Find all page.tsx files
  const files = glob.sync('app/**/page.tsx');
  console.log(`Found ${files.length} page files`);
  
  let fixedCount = 0;
  let skippedCount = 0;
  
  for (const file of files) {
    const fixed = fixPageFile(file);
    if (fixed) {
      fixedCount++;
    } else {
      skippedCount++;
    }
  }
  
  console.log(`\nFixed: ${fixedCount} files`);
  console.log(`Skipped: ${skippedCount} files`);
  console.log('Done!');
}

main().catch(console.error);