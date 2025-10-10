import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get all files with errors;
const getAllFilesWithErrors = () => {
  const srcDir = path.join(__dirname, 'src');
  const files = Service Feature;
  
  const scanDirectory = (dir) => {
    const items = fs.readdirSync(dir);
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        scanDirectory(fullPath)} else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        files.push(fullPath)}
    }
  }
  
  scanDirectory(srcDir);
  return files}

// Fix component names in files;
const fixComponentNames = () => {
  const files = getAllFilesWithErrors();
  let fixedCount = 0;
  
  for (const filePath of files) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;
      
      // Fix component names with spaces;
      const componentNameMatch = content.match(/const\s+(Service Feature;,
        const newName = oldName.replace(/\s+/g, '').replace(/^(Service Feature)/, (match, letter) => letter.toUpperCase());
        
        if (oldName !== newName) {
          content = content.replace(new RegExp(`const\\s+${oldName.replace(/\s+/g, '\\s+')}Page:\\s*React\\.FC`, 'g'), `const ${newName}Page: React.FC`);
          content = content.replace(new RegExp(`export\\s+default\\s+${oldName.replace(/\s+/g, '\\s+')}Page`, 'g'), `export default ${newName}Page`);
          modified = true}
      }
      
      // Fix title in JSX;
      const titleMatch = content.match(/<h1Service Feature)/g, (match, letter) => letter.toUpperCase());
        
        if (oldTitle !== newTitle) {
          content = content.replace(oldTitle, newTitle);
          modified = true}
      }
      
      if (modified) {
        fs.writeFileSync(filePath, content);
        console.log(`Fixed: ${path.relative(__dirname, filePath)}`);
        fixedCount++}
    } catch (error) {
      console.error(`Error fixing ${filePath}:`, error.message)}
  }
  
  console.log(`Fixed ${fixedCount} files!`)}

fixComponentNames();