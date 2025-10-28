import fs from 'fs';

// List of files that need fixing based on the error output
const filesToFix = [
  'app/it-services/cybersecurity-audit/page.tsx',
  'app/legal-document-manager/page.tsx',
  'app/medical-records-manager/page.tsx',
  'app/micro-saas-services/page.tsx',
  'app/online-learning-platform/page.tsx',
  'app/property-management-ai/page.tsx',
  'app/supply-chain-optimizer/page.tsx',
  'app/test/page.tsx',
  'app/zion-ai-api-tester/page.tsx',
  'app/zion-ai-database-optimizer/page.tsx'
];

// Function to fix duplicate imports in a file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Split content into lines
    const lines = content.split('\n');
    const newLines = [];
    const seenImports = new Set();
    let inImportBlock = true;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmedLine = line.trim();
      
      // Check if this is an import line
      if (trimmedLine.startsWith('import ')) {
        if (seenImports.has(trimmedLine)) {
          // Skip duplicate import
          modified = true;
          continue;
        }
        seenImports.add(trimmedLine);
        newLines.push(line);
      }
      // Check if we're leaving the import block (empty line or non-import)
      else if (trimmedLine === '' && inImportBlock) {
        newLines.push(line);
      }
      else if (trimmedLine !== '' && !trimmedLine.startsWith('import ')) {
        inImportBlock = false;
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