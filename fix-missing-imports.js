import fs from 'fs';
import path from 'path';

function fixMissingImports(content, filePath) {
  let modified = false;
  
  // Fix missing ArrowRight import
  if (content.includes('<ArrowRight') && !content.includes("import { ArrowRight }")) {
    if (content.includes("import React from 'react'")) {
      content = content.replace(
        /import React from 'react';/,
        "import React from 'react';\nimport { ArrowRight } from 'lucide-react';"
      );
    } else {
      content = content.replace(
        /'use client'\n/,
        "'use client'\nimport { ArrowRight } from 'lucide-react';\n"
      );
    }
    modified = true;
  }
  
  // Fix missing currentYear variable
  if (content.includes('currentYear') && !content.includes('const currentYear')) {
    content = content.replace(
      /(const benefits = \[[\s\S]*?\])/,
      '$1\n  const currentYear = new Date().getFullYear();'
    );
    modified = true;
  }
  
  // Fix missing CheckCircle import
  if (content.includes('<CheckCircle') && !content.includes("import { CheckCircle }")) {
    if (content.includes("import { ArrowRight }")) {
      content = content.replace(
        /import { ArrowRight } from 'lucide-react';/,
        "import { ArrowRight, CheckCircle } from 'lucide-react';"
      );
    } else if (content.includes("import React from 'react'")) {
      content = content.replace(
        /import React from 'react';/,
        "import React from 'react';\nimport { CheckCircle } from 'lucide-react';"
      );
    } else {
      content = content.replace(
        /'use client'\n/,
        "'use client'\nimport { CheckCircle } from 'lucide-react';\n"
      );
    }
    modified = true;
  }
  
  return { content, modified };
}

function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const { content: fixedContent, modified } = fixMissingImports(content, filePath);
    
    if (modified) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');
      console.log(`Fixed imports: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

function processDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);
  
  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      processDirectory(fullPath);
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      processFile(fullPath);
    }
  }
}

// Process the app directory
processDirectory('./app');
console.log('Missing imports fixed');