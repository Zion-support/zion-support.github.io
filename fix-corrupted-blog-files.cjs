#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function fixCorruptedText(text) {
  // Fix the most common corruption patterns
  let fixed = text;
  
  // Fix import statements
  fixed = fixed.replace(/imp,\s*o,\s*r,\s*t\s+/g, 'import ');
  fixed = fixed.replace(/f,\s*r,\s*o,\s*m\s+/g, 'from ');
  fixed = fixed.replace(/exp,\s*o,\s*r,\s*t\s+/g, 'export ');
  fixed = fixed.replace(/co,\s*n,\s*s,\s*t\s+/g, 'const ');
  fixed = fixed.replace(/Arr,\s*o,\s*w\s+R,\s*i,\s*g,\s*h,\s*t/g, 'ArrowRight');
  
  // Fix common words
  fixed = fixed.replace(/m,\s*e,\s*t,\s*a,\s*d,\s*a,\s*t,\s*a/g, 'metadata');
  fixed = fixed.replace(/ti,\s*t,\s*l,\s*e/g, 'title');
  fixed = fixed.replace(/desc,\s*r,\s*i,\s*p,\s*t,\s*i,\s*o,\s*n/g, 'description');
  fixed = fixed.replace(/Rele,\s*a,\s*s,\s*e/g, 'Release');
  fixed = fixed.replace(/Gua,\s*r,\s*d,\s*r,\s*a,\s*i,\s*l,\s*s/g, 'Guardrails');
  fixed = fixed.replace(/Appro,\s*v,\s*a,\s*l,\s*s/g, 'Approvals');
  fixed = fixed.replace(/Inst,\s*a,\s*n,\s*t/g, 'Instant');
  fixed = fixed.replace(/R,\s*o,\s*l,\s*l,\s*b,\s*a,\s*c,\s*k/g, 'Rollback');
  fixed = fixed.replace(/Bat,\s*t,\s*l,\s*e-tes,\s*t,\s*e,\s*d/g, 'Battle-tested');
  fixed = fixed.replace(/che,\s*c,\s*k,\s*l,\s*i,\s*s,\s*t,\s*s/g, 'checklists');
  fixed = fixed.replace(/s,\s*a,\s*f,\s*e/g, 'safe');
  fixed = fixed.replace(/ag,\s*e,\s*n,\s*t/g, 'agent');
  fixed = fixed.replace(/upda,\s*t,\s*e,\s*s/g, 'updates');
  fixed = fixed.replace(/w,\s*i,\s*t,\s*h/g, 'with');
  fixed = fixed.replace(/b,\s*u,\s*d,\s*g,\s*e,\s*t,\s*e,\s*d/g, 'budgeted');
  fixed = fixed.replace(/actions/g, 'actions');
  fixed = fixed.replace(/one-cl,\s*i,\s*c,\s*k/g, 'one-click');
  
  // Fix common punctuation and symbols
  fixed = fixed.replace(/,\s*,\s*/g, ',');
  fixed = fixed.replace(/\s+,\s+/g, ' ');
  fixed = fixed.replace(/,\s*$/g, '');
  
  // Fix quotes and strings
  fixed = fixed.replace(/'([^']*),\s*([^']*)'/g, "'$1$2'");
  fixed = fixed.replace(/"([^"]*),\s*([^"]*)"/g, '"$1$2"');
  
  // Fix function declarations
  fixed = fixed.replace(/f,\s*u,\s*n,\s*c,\s*t,\s*i,\s*o,\s*n/g, 'function');
  fixed = fixed.replace(/ret,\s*u,\s*r,\s*n/g, 'return');
  
  // Fix JSX elements
  fixed = fixed.replace(/<,\s*div/g, '<div');
  fixed = fixed.replace(/<,\s*span/g, '<span');
  fixed = fixed.replace(/<,\s*h,\s*1/g, '<h1');
  fixed = fixed.replace(/<,\s*p/g, '<p');
  
  // Fix className
  fixed = fixed.replace(/class,\s*N,\s*a,\s*m,\s*e/g, 'className');
  
  // Fix common React patterns
  fixed = fixed.replace(/React,\s*from\s+'react'/g, "React from 'react'");
  fixed = fixed.replace(/use,\s*S,\s*t,\s*a,\s*t,\s*e/g, 'useState');
  fixed = fixed.replace(/use,\s*E,\s*f,\s*f,\s*e,\s*c,\s*t/g, 'useEffect');
  
  return fixed;
}

function fixFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const fixed = fixCorruptedText(content);
    
    if (fixed !== content) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Get all blog files
const blogDir = 'app/blog';
const files = [];

function getAllFiles(dir) {
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      getAllFiles(fullPath);
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
}

getAllFiles(blogDir);

console.log(`Found ${files.length} blog files to check...`);

let fixedCount = 0;
files.forEach(file => {
  if (fixFile(file)) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);