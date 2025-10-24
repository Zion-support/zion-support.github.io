const fs = require('fs');
const path = require('path');

// Function to recursively find all page.tsx files
function findPageFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      findPageFiles(filePath, fileList);
    } else if (file === 'page.tsx') {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Function to fix import statements
function fixImports(pagePath) {
  try {
    let content = fs.readFileSync(pagePath, 'utf8');
    let modified = false;
    
    // Check if there's a dynamic export inside an import statement
    if (content.includes('export const dynamic') && content.includes('} from \'lucide-react\';')) {
      console.log(`Fixing imports in: ${pagePath}`);
      
      // Remove the misplaced dynamic export
      content = content.replace(/export const dynamic = 'force-dynamic';\s*\n?/g, '');
      
      // Fix the import statement by ensuring proper closing
      content = content.replace(/import\s*{\s*\n\s*export const dynamic = 'force-dynamic';\s*\n([^}]+)\s*}\s*from\s*'([^']+)';/g, 'import { $1 } from \'$2\';');
      
      // Add dynamic export after all imports
      const lines = content.split('\n');
      let insertIndex = 0;
      
      // Find the last import statement
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].startsWith('import ')) {
          insertIndex = i + 1;
        }
      }
      
      // Insert dynamic export after imports
      lines.splice(insertIndex, 0, "export const dynamic = 'force-dynamic';");
      content = lines.join('\n');
      
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(pagePath, content, 'utf8');
      console.log(`✅ Fixed: ${pagePath}`);
    }
    
  } catch (error) {
    console.error(`❌ Error fixing ${pagePath}:`, error.message);
  }
}

// Main execution
console.log('🔧 Fixing import statements...');

const appDir = path.join(__dirname, 'app');
const pageFiles = findPageFiles(appDir);

console.log(`Found ${pageFiles.length} page files`);

pageFiles.forEach(pagePath => {
  fixImports(pagePath);
});

console.log('✅ Import statements fixed!');