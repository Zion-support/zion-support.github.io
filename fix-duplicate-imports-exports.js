import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

async function main() {
  const pageFiles = await glob('app/**/page.tsx', { cwd: '/workspace' });
  
  for (const filePath of pageFiles) {
    const fullPath = path.join('/workspace', filePath);
    let content = fs.readFileSync(fullPath, 'utf8');
    let modified = false;
    
    // Fix duplicate React imports
    const reactImportRegex = /import React from ['"]react['"];?\s*\n\s*import React from ['"]react['"];?/g;
    if (reactImportRegex.test(content)) {
      content = content.replace(reactImportRegex, 'import React from "react";');
      modified = true;
    }
    
    // Fix duplicate Navigation imports
    const navImportRegex = /import Navigation from ['"][^'"]*['"];?\s*\n\s*import Navigation from ['"][^'"]*['"];?/g;
    if (navImportRegex.test(content)) {
      content = content.replace(navImportRegex, (match) => {
        const lines = match.split('\n');
        return lines[0];
      });
      modified = true;
    }
    
    // Fix duplicate Footer imports
    const footerImportRegex = /import Footer from ['"][^'"]*['"];?\s*\n\s*import Footer from ['"][^'"]*['"];?/g;
    if (footerImportRegex.test(content)) {
      content = content.replace(footerImportRegex, (match) => {
        const lines = match.split('\n');
        return lines[0];
      });
      modified = true;
    }
    
    // Fix duplicate lucide-react imports
    const lucideImportRegex = /import {[^}]*} from ['"]lucide-react['"];?\s*\n\s*import {[^}]*} from ['"]lucide-react['"];?/g;
    if (lucideImportRegex.test(content)) {
      content = content.replace(lucideImportRegex, (match) => {
        const lines = match.split('\n');
        return lines[0];
      });
      modified = true;
    }
    
    // Fix duplicate export default statements
    const exportDefaultRegex = /export default \w+;\s*\n\s*export default \w+;/g;
    if (exportDefaultRegex.test(content)) {
      content = content.replace(exportDefaultRegex, (match) => {
        const lines = match.split('\n');
        return lines[0];
      });
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(fullPath, content);
      console.log(`Fixed duplicates in: ${filePath}`);
    }
  }
  
  console.log('Fixed all duplicate imports and exports');
}

main().catch(console.error);