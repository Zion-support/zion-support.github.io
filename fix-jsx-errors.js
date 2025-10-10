import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// List of files with JSX errors
const filesToFix = [
  'app/api-docs/page.tsx',
  'app/ar-vr-platform/page.tsx',
  'app/backup-recovery/page.tsx',
  'app/blockchain-integration-services/page.tsx',
  'app/business-apps/page.tsx',
  'app/business-intelligence/page.tsx',
  'app/careers/page.tsx',
  'app/case-studies/page.tsx',
  'app/cloud-infrastructure/page.tsx',
  'app/cloud-migration-services/page.tsx',
  'app/cloud-migration/page.tsx',
  'app/cloud-security/page.tsx',
  'app/cloud-services/page.tsx',
  'app/community/page.tsx',
  'app/compliance/page.tsx'
];

function fixJSXFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix common JSX issues
    content = content
      // Fix orphaned closing tags
      .replace(/^\s*<\/[^>]+>\s*$/gm, '')
      // Fix malformed JSX expressions
      .replace(/^\s*\)\s*$/gm, '')
      // Fix orphaned semicolons
      .replace(/^\s*;\s*$/gm, '')
      // Fix orphaned expressions
      .replace(/^\s*[a-zA-Z_$][a-zA-Z0-9_$]*\s*$/gm, '')
      // Fix malformed JSX fragments
      .replace(/^\s*<>\s*$/gm, '')
      .replace(/^\s*<\/>\s*$/gm, '')
      // Remove empty lines that might cause issues
      .replace(/^\s*\n/gm, '')
      // Fix malformed component structure
      .replace(/const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*{\s*$/, 'const $1: React.FC = () => {\n  return (')
      // Ensure proper closing of components
      .replace(/(\s+);\s*$/, '$1\n  );\n};')
      // Fix missing return statements
      .replace(/(\s+return\s*\(\s*$)/, '$1\n    <div>')
      // Fix missing closing divs
      .replace(/(\s+)\s*$/, '$1\n    </div>\n  );\n};')
      // Clean up multiple empty lines
      .replace(/\n\s*\n\s*\n/g, '\n\n')
      // Ensure proper export
      .replace(/(\s+);\s*$/, '$1\n};\n\nexport default $1;');
    
    // Write the fixed content back
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(file => {
  const fullPath = path.join(__dirname, file);
  if (fs.existsSync(fullPath)) {
    fixJSXFile(fullPath);
  } else {
    console.log(`File not found: ${fullPath}`);
  }
});

console.log('JSX fixes completed!');