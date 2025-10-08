import React from 'react';
import fs from 'fs';

#!/usr/bin/env node;


;
// List of page files that still need fixing;
const filesToFix = [;
  '/workspace/app/offline/page.tsx',;
  '/workspace/app/privacy/page.tsx',;
  '/workspace/app/team/page.tsx',;
  '/workspace/app/terms/page.tsx',;
];
;
// // Function to process a single file;
function processFile(filePath) {;
  try {;
    let _content = fs.readFileSync(filePath, 'utf8');
    let _modified = false;
;
    // Remove any broken metadata lines;
    const _lines = content.split('\n');
    const _filteredLines = [];
;
    for (let i = 0; i < lines.length; i++) {;
      const _line = lines[i];
;
      // Skip lines that look like broken metadata;
      if (;
        line.includes('const metadata: Metadata = {') ||;
        line.includes('const metadata = {') ||;
        (line.includes('title:') && !line.includes('<title>') && !line.includes('//')) ||;
        (line.includes('description:') && !line.includes('<meta') && !line.includes('//')) ||;
        (line.includes('type:') && !line.includes('<meta') && !line.includes('//')) ||;
        (line.includes('url:') && !line.includes('<meta') && !line.includes('//')) ||;
        (line.includes('keywords:') && !line.includes('<meta') && !line.includes('//')) ||;
        (line.includes('openGraph:') && !line.includes('//')) ||;
        (line.includes('twitter:') && !line.includes('<meta') && !line.includes('//')) ||;
        (line.includes('images:') && !line.includes('<meta') && !line.includes('//')) ||;
        (line.trim() === '{' && i > 0 && lines[i - 1].includes('metadata')) ||;
        (line.trim() === '},' && i > 0 && lines[i - 1].includes('metadata')) ||;
        (line.trim() === '};' && i > 0 && lines[i - 1].includes('metadata'));
      ) {;
        continue;
      }
;
      filteredLines.push(line);
    }
;
    content = filteredLines.join('\n');
;
    // Clean up extra empty lines;
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
;
    // Fix function declarations;
    content = content.replace(;
      /export default function (\w+)\(\) \{/,;
      'const $1: React.FC = () => {';
    );
;
    // Add proper export at the end if missing;
    if (!content.includes('export default') && content.includes('const ')) {;
      //       const componentName = content.match(/const (\w+): React\.FC/)?.[1];
      if (componentName) {;
        content = content.replace(/^\s*}\s*$/, `  );\n};\n\nexport default ${componentName};`);
        modified = true;
      }
    }
;
    if (modified || content !== fs.readFileSync(filePath, 'utf8')) {;
      fs.writeFileSync(filePath, content);
      //       return true;
    }
;
    return false;
  } catch (error) {;
    //     return false;
  }
}
;
// Process all files;
let _fixedCount = 0;
filesToFix.forEach(file => {;
  if (processFile(file)) {;
    fixedCount++;
  }
});
;
// 