#!/usr/bin/env node

import fs from 'fs';

const filePath = './src/micro-saas/page-original.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Find the start of the _realEstateSaaS array (line 1666)
const lines = content.split('\n');
let inRealEstateArray = false;
let inCategoriesArray = false;
let realEstateStartLine = -1;
let realEstateEndLine = -1;
let categoriesStartLine = -1;
let categoriesEndLine = -1;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  if (line.includes('// const _realEstateSaaS = [')) {
    inRealEstateArray = true;
    realEstateStartLine = i;
  } else if (inRealEstateArray && line.includes('// ];')) {
    inRealEstateArray = false;
    realEstateEndLine = i;
  } else if (line.includes('// const _categories = [')) {
    inCategoriesArray = true;
    categoriesStartLine = i;
  } else if (inCategoriesArray && line.includes('// ];')) {
    inCategoriesArray = false;
    categoriesEndLine = i;
  }
  
  // Comment out lines within the arrays
  if (inRealEstateArray && i > realEstateStartLine && !line.includes('// const _realEstateSaaS = [')) {
    if (!line.trim().startsWith('//')) {
      lines[i] = '  // ' + line;
    }
  }
  
  if (inCategoriesArray && i > categoriesStartLine && !line.includes('// const _categories = [')) {
    if (!line.trim().startsWith('//')) {
      lines[i] = '  // ' + line;
    }
  }
}

const fixedContent = lines.join('\n');
fs.writeFileSync(filePath, fixedContent, 'utf8');
console.log('Fixed array comments in micro-saas file');