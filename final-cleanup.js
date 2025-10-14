import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Files that still have issues
const filesToFix = [
  'app/error.tsx',
  'app/global-error.tsx',
  'app/loading.tsx',
  'app/micro-saas-services/microSaasServices.tsx',
  'app/micro-saas-services/services.tsx',
  'app/not-found.tsx',
  'app/page-backup.tsx',
  'app/page-optimized.tsx',
  'app/service-template.tsx',
  'app/sitemap-page.tsx',
  'app/utils/errorHandler.tsx',
  'app/utils/image.tsx',
  'app/utils/link.tsx'
];

// Function to fix a single file
function fixFile(filePath) {
  try {
    const fullPath = path.join(__dirname, filePath);
    
    if (!fs.existsSync(fullPath)) {
      console.log(`File not found: ${filePath}`);
      return;
    }

    let content = fs.readFileSync(fullPath, 'utf8');
    
    // Remove corrupted content markers
    content = content.replace(/f7f852c0f7415181a1b362c4aa5a784585ad5828/g, '');
    
    // Remove unused expressions and console.log statements
    content = content.replace(/console\.log\([^)]*\);\s*$/gm, '');
    content = content.replace(/\/\*[\s\S]*?\*\//g, '');
    
    // Fix missing semicolons
    content = content.replace(/return null\s*$/gm, 'return null;');
    content = content.replace(/return\s*$/gm, 'return null;');
    
    // Clean up empty lines
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    // Ensure proper file ending
    if (!content.trim().endsWith('}') && !content.trim().endsWith(';')) {
      content = content.trim() + '\n';
    }
    
    fs.writeFileSync(fullPath, content);
    console.log(`Fixed: ${filePath}`);
    
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
console.log('Starting final cleanup...');
filesToFix.forEach(fixFile);
console.log('Final cleanup completed!');