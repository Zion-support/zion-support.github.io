const fs = require('fs');
const path = require('path');

function fixReactImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix pattern: import React from 'react';\n'use client';\nimport React, { ... } from 'react';
    const pattern1 = /import React from 'react';\s*'use client';\s*import React, {[^}]+} from 'react';/g;
    content = content.replace(pattern1, (match) => {
      const secondImport = match.match(/import React, {[^}]+} from 'react';/);
      return secondImport ? `'use client';\n${secondImport[0]}` : match;
    });
    
    // Fix pattern: 'use client';\nimport React from 'react';\n'use client';\nimport React, { ... } from 'react';
    const pattern2 = /'use client';\s*import React from 'react';\s*'use client';\s*import React, {[^}]+} from 'react';/g;
    content = content.replace(pattern2, (match) => {
      const secondImport = match.match(/import React, {[^}]+} from 'react';/);
      return secondImport ? `'use client';\n${secondImport[0]}` : match;
    });
    
    // Fix pattern: 'use client';\n'use client';\nimport React, { ... } from 'react';
    const pattern3 = /'use client';\s*'use client';\s*import React, {[^}]+} from 'react';/g;
    content = content.replace(pattern3, (match) => {
      const secondImport = match.match(/import React, {[^}]+} from 'react';/);
      return secondImport ? `'use client';\n${secondImport[0]}` : match;
    });
    
    // Fix pattern: import React from 'react';\n'use client';\nimport React, { ... } from 'react';
    const pattern4 = /import React from 'react';\s*'use client';\s*import React, {[^}]+} from 'react';/g;
    content = content.replace(pattern4, (match) => {
      const secondImport = match.match(/import React, {[^}]+} from 'react';/);
      return secondImport ? `'use client';\n${secondImport[0]}` : match;
    });
    
    if (content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixedCount += walkDir(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      if (fixReactImports(filePath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

console.log('Fixing React imports...');
const fixedCount = walkDir('./app');
console.log(`Fixed ${fixedCount} files`);