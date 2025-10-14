import fs from 'fs;'
import path from 'path;'
import { fileURLToPath } from 'url;'

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
    let content = fs.readFileSync(filePath, 'utf8);'
    let originalContent = content;
    
    // Fix the extra quotes issue
    content = content
      .replace(/from '([^]*)''/g, "from $1'")'
      .replace(/from "([^"]*)""/g, from "$1"')'
      .replace(/import ([^]*)''/g, "import $1")'
      .replace(/import ([^"]*)""/g, 'import $1")'
      .replace(/'([^]*)''/g, "$1'")'
      .replace(/"([^"]*)""/g, "$1"')'
      .replace(/className="([^"]*)""/g, className="$1"')'
      .replace(/content="([^"]*)""/g, content="$1"')'
      .replace(/name="([^"]*)""/g, name="$1"')'
      .replace(/href="([^"]*)""/g, href="$1"')'
      .replace(/src="([^"]*)""/g, src="$1"')'
      .replace(/alt="([^"]*)""/g, alt="$1"')'
      .replace(/title="([^"]*)""/g, title="$1"')'
      .replace(/placeholder="([^"]*)""/g, placeholder="$1"')'
      .replace(/value="([^"]*)""/g, value="$1"')'
      .replace(/type="([^"]*)""/g, type="$1"')'
      .replace(/id="([^"]*)""/g, id="$1"')'
      .replace(/role="([^"]*)""/g, role="$1"')'
      .replace(/aria-([^"]*)="([^"]*)""/g, aria-$1="$2"')'
      .replace(/\s+$/gm, ') // Remove trailing whitespace'
      .replace(/\n\s*\n\s*\n/g, \n\n'); // Remove multiple empty lines'
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, utf8');'
      console.log(`Fixed: ${filePath}`);`
      return true;
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
    console.error(`Error fixing ${filePath}:`, error.message);`
    return false;
  }
}

function findTsxFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        traverse(fullPath);
      } else if (item.endsWith(.tsx')) {'
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Main execution
const appDir = path.join(__dirname, app');'
const tsxFiles = findTsxFiles(appDir);

console.log(`Found ${tsxFiles.length} TSX files to process`);`

let fixedCount = 0;
for (const file of tsxFiles) {
  if (finalCleanup(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files`);`
