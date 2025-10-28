const fs = require('fs');
const path = require('path');

const filesToFix = [
  'app/5g-iot-solutions/page.tsx',
  'app/5g-implementation/page.tsx',
  'app/micro-saas-services/ai-chatbot-builder/page.tsx',
  'app/micro-saas-services/ai-analytics-dashboard/page.tsx',
  'app/micro-saas-services/ai-lead-generation/page.tsx',
  'app/micro-saas-services/ai-content-generator/page.tsx',
  'app/micro-saas-services/page.tsx',
  'app/micro-saas-services/ai-email-assistant/page.tsx',
  'app/accessibility-page/page.tsx',
  'app/5g-edge-computing/page.tsx',
  'app/offline/page.tsx'
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix malformed JSX fragments in export default function
    content = content.replace(
      /export default function Wrapped\s*\(props\)\s*\{\s*return\s*\(\s*<ErrorBoundary>\s*<\s*\{\.\.\.props\}\s*\/>\s*<\/ErrorBoundary>\s*\);\s*\}/g,
      `export default function Wrapped(props) {
  return (
    <ErrorBoundary>
      <Page {...props} />
    </ErrorBoundary>
  );
}`
    );
    
    // Fix duplicate metadata exports
    const metadataRegex = /export const metadata = \{[\s\S]*?\};\s*;\s*export const metadata = \{[\s\S]*?\};\s*;\s*export const metadata = \{[\s\S]*?\};\s*/g;
    content = content.replace(metadataRegex, (match) => {
      // Keep only the first metadata export
      const firstMatch = match.match(/export const metadata = \{[\s\S]*?\};\s*/);
      return firstMatch ? firstMatch[0] : '';
    });
    
    // Remove duplicate imports
    const importLines = content.split('\n').filter(line => line.trim().startsWith('import'));
    const uniqueImports = [...new Set(importLines)];
    const nonImportLines = content.split('\n').filter(line => !line.trim().startsWith('import'));
    
    // Find the first non-import line to insert imports before
    let insertIndex = 0;
    for (let i = 0; i < nonImportLines.length; i++) {
      if (nonImportLines[i].trim() && !nonImportLines[i].trim().startsWith('export const metadata')) {
        insertIndex = i;
        break;
      }
    }
    
    // Reconstruct content with unique imports
    const beforeImports = nonImportLines.slice(0, insertIndex);
    const afterImports = nonImportLines.slice(insertIndex);
    content = [...beforeImports, ...uniqueImports, ...afterImports].join('\n');
    
    // Clean up extra semicolons and empty lines
    content = content.replace(/;\s*;\s*/g, ';\n');
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(fixFile);

console.log('JSX errors fixed!');