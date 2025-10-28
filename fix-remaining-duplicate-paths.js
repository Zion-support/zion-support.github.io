import fs from 'fs';

// List of files that still need fixing
const filesToFix = [
  'app/micro-saas-services/page.tsx',
  'app/online-learning-platform/page.tsx',
  'app/property-management-ai/page.tsx',
  'app/supply-chain-optimizer/page.tsx',
  'app/test/page.tsx',
  'app/zion-ai-api-tester/page.tsx',
  'app/zion-ai-database-optimizer/page.tsx'
];

// Function to fix duplicate imports with different paths
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Split content into lines
    const lines = content.split('\n');
    const newLines = [];
    const seenImports = new Set();
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmedLine = line.trim();
      
      // Check if this is an import line
      if (trimmedLine.startsWith('import ')) {
        // Extract the import name for comparison (e.g., "Navigation" from "import Navigation from...")
        const importMatch = trimmedLine.match(/import\s+(\w+)\s+from/);
        if (importMatch) {
          const importName = importMatch[1];
          if (seenImports.has(importName)) {
            // Skip duplicate import
            modified = true;
            continue;
          }
          seenImports.add(importName);
        }
        newLines.push(line);
      }
      else {
        newLines.push(line);
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, newLines.join('\n'));
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Main function to process files
function main() {
  console.log(`Processing ${filesToFix.length} files...`);

  let fixedCount = 0;
  filesToFix.forEach(file => {
    if (fixFile(file)) {
      fixedCount++;
    }
  });

  console.log(`Fixed ${fixedCount} files`);
}

main();