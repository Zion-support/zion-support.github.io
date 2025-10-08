import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix duplicate imports and other issues
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Remove duplicate React imports
    const lines = content.split('\n');
    const reactImports = [];
    const otherImports = [];
    let inImportBlock = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      
      if (line.startsWith('import ') && line.includes('from')) {
        inImportBlock = true;
        if (line.includes('React') || line.includes('react')) {
          reactImports.push(lines[i]);
        } else {
          otherImports.push(lines[i]);
        }
      } else if (inImportBlock && line === '') {
        // Empty line after imports
        continue;
      } else if (inImportBlock && !line.startsWith('import ')) {
        inImportBlock = false;
        break;
      }
    }
    
    // Deduplicate React imports
    const uniqueReactImports = [...new Set(reactImports)];
    
    // Rebuild the file
    const newLines = [];
    let importSectionEnded = false;
    let addedImports = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      
      if (!importSectionEnded && line.startsWith('import ') && line.includes('from')) {
        if (!addedImports) {
          // Add unique React imports first
          uniqueReactImports.forEach(imp => newLines.push(imp));
          // Add other imports
          otherImports.forEach(imp => newLines.push(imp));
          addedImports = true;
        }
        // Skip duplicate imports
        continue;
      } else if (!importSectionEnded && line === '' && addedImports) {
        // Skip empty lines in import section
        continue;
      } else if (!importSectionEnded && !line.startsWith('import ')) {
        importSectionEnded = true;
        newLines.push(lines[i]);
      } else if (importSectionEnded) {
        newLines.push(lines[i]);
      }
    }
    
    let newContent = newLines.join('\n');
    
    // Fix specific issues
    // Fix Link href to to
    newContent = newContent.replace(/<Link\s+href=/g, '<Link to=');
    
    // Fix Image components
    newContent = newContent.replace(/<Image\s+([^>]*?)src={([^}]+)}([^>]*?)>/g, '<img $1src={$2}$3>');
    newContent = newContent.replace(/<Image\s+([^>]*?)alt={([^}]+)}([^>]*?)>/g, '<img $1alt={$2}$3>');
    newContent = newContent.replace(/<Image\s+([^>]*?)width={([^}]+)}([^>]*?)>/g, '<img $1width={$2}$3>');
    newContent = newContent.replace(/<Image\s+([^>]*?)height={([^}]+)}([^>]*?)>/g, '<img $1height={$2}$3>');
    
    // Remove priority prop from img tags
    newContent = newContent.replace(/\s+priority={[^}]+}/g, '');
    
    // Fix usePathname to useLocation
    newContent = newContent.replace(/usePathname\(\)/g, 'useLocation().pathname');
    
    // Fix dynamic imports
    newContent = newContent.replace(/dynamic\(/g, 'lazy(');
    
    // Remove Metadata type references
    newContent = newContent.replace(/:\s*Metadata/g, '');
    newContent = newContent.replace(/MetadataRoute\./g, '');
    
    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main function
async function main() {
  const appDir = path.join(process.cwd(), 'app');
  
  // Find all TypeScript/JavaScript files in the app directory
  const files = await glob('**/*.{ts,tsx,js,jsx}', { 
    cwd: appDir,
    ignore: ['**/node_modules/**', '**/dist/**', '**/build/**']
  });
  
  console.log(`Found ${files.length} files to process in app directory`);
  
  let fixedCount = 0;
  for (const file of files) {
    const fullPath = path.join(appDir, file);
    if (fixFile(fullPath)) {
      fixedCount++;
    }
  }
  
  console.log(`Fixed ${fixedCount} files`);
}

main();