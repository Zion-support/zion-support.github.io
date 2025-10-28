const fs = require('fs');
const path = require('path');

// List of files that need metadata duplication fixes
const filesToFix = [
  'app/accessibility-page/page.tsx',
  'app/offline/page.tsx',
  'app/page.tsx',
  'app/ai-powered-devops/page.tsx',
  'app/ai-powered-email-analyzer/page.tsx',
  'app/it-services/cybersecurity-audit/page.tsx',
  'app/legal-document-manager/page.tsx',
  'app/medical-records-manager/page.tsx',
  'app/online-learning-platform/page.tsx',
  'app/property-management-ai/page.tsx',
  'app/supply-chain-optimizer/page.tsx',
  'app/test/page.tsx',
  'app/zion-ai-api-tester/page.tsx',
  'app/zion-ai-database-optimizer/page.tsx'
];

function fixMetadataDuplicates(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Split by export const metadata to find duplicates
    const parts = content.split('export const metadata = {');
    
    if (parts.length <= 2) {
      console.log(`No duplicates found in ${filePath}`);
      return;
    }
    
    // Keep only the first metadata declaration
    const firstMetadata = parts[1];
    const firstMetadataEnd = firstMetadata.indexOf('};');
    const firstMetadataComplete = firstMetadata.substring(0, firstMetadataEnd + 2);
    
    // Find the end of the first metadata block and everything after it
    const afterFirstMetadata = firstMetadata.substring(firstMetadataEnd + 2);
    
    // Remove any additional metadata declarations
    let cleanedAfter = afterFirstMetadata.replace(/export const metadata = \{[^}]*\};/g, '');
    
    // Clean up any extra semicolons and whitespace
    cleanedAfter = cleanedAfter.replace(/;\s*;/g, ';');
    cleanedAfter = cleanedAfter.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    // Reconstruct the file
    const newContent = parts[0] + 'export const metadata = {' + firstMetadataComplete + cleanedAfter;
    
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Fixed metadata duplicates in ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(filePath => {
  const fullPath = path.join(__dirname, filePath);
  if (fs.existsSync(fullPath)) {
    fixMetadataDuplicates(fullPath);
  } else {
    console.log(`File not found: ${filePath}`);
  }
});

console.log('Metadata duplication fixes completed!');