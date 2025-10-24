const fs = require('fs');
const path = require('path');

// Find all page.tsx files in the app directory
const appDir = path.join(__dirname, 'app');
const files = [];

function findFiles(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      findFiles(fullPath);
    } else if (item === 'page.tsx') {
      files.push(fullPath);
    }
  }
}

findFiles(appDir);

console.log(`Found ${files.length} page files to check`);

let fixedCount = 0;

for (const filePath of files) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Check if Link is used but not imported
    if (content.includes('<Link') && !content.includes('import Link from "next/link"')) {
      // Add Link import after the existing imports
      if (content.includes('import Head from "next/head";')) {
        content = content.replace(
          'import Head from "next/head";',
          'import Head from "next/head";\nimport Link from "next/link";'
        );
      } else if (content.includes('import React from "react";')) {
        content = content.replace(
          'import React from "react";',
          'import React from "react";\nimport Link from "next/link";'
        );
      } else {
        // Add at the beginning after "use client" if present
        if (content.startsWith('"use client"')) {
          content = content.replace(
            '"use client"',
            '"use client"\nimport Link from "next/link";'
          );
        } else {
          content = 'import Link from "next/link";\n' + content;
        }
      }
      modified = true;
    }
    
    // Check if ArrowRight is used but not imported
    if (content.includes('ArrowRight') && !content.includes('import { ArrowRight }')) {
      // Add ArrowRight import
      if (content.includes('import Link from "next/link";')) {
        content = content.replace(
          'import Link from "next/link";',
          'import Link from "next/link";\nimport { ArrowRight } from "lucide-react";'
        );
      } else if (content.includes('import Head from "next/head";')) {
        content = content.replace(
          'import Head from "next/head";',
          'import Head from "next/head";\nimport { ArrowRight } from "lucide-react";'
        );
      } else if (content.includes('import React from "react";')) {
        content = content.replace(
          'import React from "react";',
          'import React from "react";\nimport { ArrowRight } from "lucide-react";'
        );
      } else {
        // Add at the beginning after "use client" if present
        if (content.startsWith('"use client"')) {
          content = content.replace(
            '"use client"',
            '"use client"\nimport { ArrowRight } from "lucide-react";'
          );
        } else {
          content = 'import { ArrowRight } from "lucide-react";\n' + content;
        }
      }
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      fixedCount++;
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

console.log(`Done! Fixed ${fixedCount} files`);