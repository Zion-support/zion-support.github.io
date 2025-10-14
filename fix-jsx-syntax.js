#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Find all page.tsx files
const pageFiles = await glob('app/**/page.tsx');

console.log(`Found ${pageFiles.length} page files to check...`);

let fixedCount = 0;

for (const filePath of pageFiles) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check if the file has malformed JSX (all on one line)
    if (content.includes("export default function Page() {'  return ('    <React.Fragment>")) {
      console.log(`Fixing ${filePath}...`);
      
      // Fix the malformed JSX by properly formatting it
      const fixedContent = content
        .replace(/export default function Page\(\) \{'  return \('    <React\.Fragment>/g, 
                'export default function Page() {\n  return (\n    <React.Fragment>')
        .replace(/      <Helmet>/g, '\n      <Helmet>')
        .replace(/        <title>/g, '\n        <title>')
        .replace(/        <meta name="description" content="[^"]*" \/>/g, (match) => 
          '\n        ' + match.replace(/"/g, '"'))
        .replace(/      <\/Helmet>      <div>        <div>/g, '\n      </Helmet>\n      \n      <div>\n        <div>')
        .replace(/          <h1 className="[^"]*">[^<]*<\/h1>          <p className="[^"]*">[^<]*<\/p>/g, (match) => {
          const h1Match = match.match(/<h1 className="([^"]*)"([^>]*)>([^<]*)<\/h1>/);
          const pMatch = match.match(/<p className="([^"]*)"([^>]*)>([^<]*)<\/p>/);
          if (h1Match && pMatch) {
            return `\n          <h1 className="${h1Match[1]}"${h1Match[2]}>${h1Match[3]}</h1>\n          <p className="${pMatch[1]}"${pMatch[2]}>${pMatch[3]}</p>`;
          }
          return match;
        })
        .replace(/        <\/div>      <\/div>    <\/React\.Fragment>/g, '\n        </div>\n      </div>\n    </React.Fragment>')
        .replace(/  \);/g, '\n  );')
        .replace(/\}\s*$/, '\n}');
      
      fs.writeFileSync(filePath, fixedContent);
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

console.log(`Fixed ${fixedCount} files.`);