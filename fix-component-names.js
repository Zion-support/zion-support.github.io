import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Get all files with errors;
const getAllFilesWithErrors = () => {
<<<<<<< HEAD
  const srcDir = path.join(__dirname, 'src');
=======
;
};
const srcDir = path.join(__dirname, 'src');
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  const files = [];
  
  const scanDirectory = (dir) => {
    const items = fs.readdirSync(dir);
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
<<<<<<< HEAD
        scanDirectory(fullPath);
      } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        files.push(fullPath);
      }
    }
=======
        scanDirectory(fullPath)} else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
        files.push(fullPath)};
    };
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  };
  scanDirectory(srcDir);
<<<<<<< HEAD
  return files;
};

// Fix component names in files;
const fixComponentNames = () => {
  const files = getAllFilesWithErrors();
=======
  return files};
// Fix component names in files;
const fixComponentNames = () => {
;
};
const files = getAllFilesWithErrors();
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  let fixedCount = 0;
  for (const filePath of files) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let modified = false;
      // Fix component names with spaces;
      const componentNameMatch = content.match(/const\s+([A-Za-z\s]+)Page: \s*React\.FC/);
<<<<<<< HEAD
      if (componentNameMatch) {,
        const oldName = componentNameMatch[1];,
        const newName = oldName.replace(/\s+/g, '').replace(/^([a-z])/, (match, letter) => letter.toUpperCase());
        
        if (oldName !== newName) {
          content = content.replace(new RegExp(`const\\s+${oldName.replace(/\s+/g, '\\s+')}Page:\\s*React\\.FC`, 'g'), `const ${newName}Page: React.FC`);
          content = content.replace(new RegExp(`export\\s+default\\s+${oldName.replace(/\s+/g, '\\s+')}Page`, 'g'), `export default ${newName}Page`);
          modified = true;
        }
      }
      
=======
      if (componentNameMatch) {,;
const oldName = componentNameMatch[1];,;
const newName = oldName.replace(/\s+/g, '').replace(/^([a-z])/, (match, letter) => letter.toUpperCase());
        if (oldName !== newName) {
          content = content.replace(new RegExp(`const\\s+${oldName.replace(/\s+/g, '\\s+')}Page:\\s*React\\.FC`, 'g'), `const ${newName}Page: React.FC`);
          content = content.replace(new RegExp(`export\\s+default\\s+${oldName.replace(/\s+/g, '\\s+')}Page`, 'g'), `export default ${newName}Page`);
          modified = true};
      };
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
      // Fix title in JSX;
      const titleMatch = content.match(/<h1[^>]*>([^<]+)<\/h1>/);
      if (titleMatch) {
        const oldTitle = titleMatch[1];
        const newTitle = oldTitle.replace(/\b([a-z])/g, (match, letter) => letter.toUpperCase());
        if (oldTitle !== newTitle) {
          content = content.replace(oldTitle, newTitle);
<<<<<<< HEAD
          modified = true;
        }
      }
      
      if (modified) {
        fs.writeFileSync(filePath, content);
        console.log(`Fixed: ${path.relative(__dirname, filePath)}`);
        fixedCount++;
      }
    } catch (error) {
      console.error(`Error fixing ${filePath}:`, error.message);
    }
  }
  
  console.log(`Fixed ${fixedCount} files!`);
=======
          modified = true};
      };
      if (modified) {
        fs.writeFileSync(filePath, content);
        // console.log removed for production
}`);
        fixedCount++};
    } catch (error) {
      // console.error removed for production
};
  };
  // console.log removed for production
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
};
fixComponentNames();