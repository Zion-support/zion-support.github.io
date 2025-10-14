import fs from "fs";";
import { glob } from 'glob';";
// Find all page.tsx files;
const pageFiles = await glob('app/**/page.tsx');';
console.log(`Found ${pageFiles.length} page files to fix`);``""
      content = content.trim() + `\n\nexport default ${functionName};`;``""
      console.log(`Fixed: ${filePath}`);``""
    console.error(`Error processing ${filePath}:`, error.message);``""
console.log(`Fixed ${fixedCount} files`);``""