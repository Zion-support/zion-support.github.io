import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix a single file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix ErrorBoundary import path
    if (content.includes("import { ErrorBoundary } from '@/components/ErrorBoundary'")) {
      content = content.replace(
        "import { ErrorBoundary } from '@/components/ErrorBoundary'",
        "import { ErrorBoundary } from '../components/ErrorBoundary'"
      );
      modified = true;
    }
    
    // Fix duplicate metadata declarations
    const metadataRegex = /export const metadata = \{[^}]+\};\s*;\s*'use client';\s*import[^}]+export const metadata = \{[^}]+\};\s*import[^}]+export const metadata = \{[^}]+\};\s*/g;
    if (metadataRegex.test(content)) {
      // Extract the first metadata block and clean up
      const firstMetadataMatch = content.match(/export const metadata = \{[^}]+\};/);
      if (firstMetadataMatch) {
        content = content.replace(metadataRegex, firstMetadataMatch[0] + '\n');
        modified = true;
      }
    }
    
    // Fix function name issues (pagePage -> Page)
    if (content.includes('function pagePage()')) {
      content = content.replace(/function pagePage\(\)/g, 'function Page()');
      modified = true;
    }
    
    // Fix Page component reference in export
    if (content.includes('<Page {...props} />') && !content.includes('function Page()')) {
      // Find the actual function name
      const functionMatch = content.match(/function (\w+)\(\)/);
      if (functionMatch) {
        const functionName = functionMatch[1];
        content = content.replace('<Page {...props} />', `<${functionName} {...props} />`);
        modified = true;
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Get all page.tsx files
async function fixAllFiles() {
  try {
    const files = await glob('app/**/page.tsx');
    files.forEach(fixFile);
    console.log('All files processed!');
  } catch (error) {
    console.error('Error:', error);
  }
}

fixAllFiles();