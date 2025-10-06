#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function fixCorruptedText(text) {
  let fixed = text;
  
  // Fix the most aggressive corruption patterns
  // Fix import statements
  fixed = fixed.replace(/imp,\s*o,\s*r,\s*t\s+/g, 'import ');
  fixed = fixed.replace(/f,\s*r,\s*o,\s*m\s+/g, 'from ');
  fixed = fixed.replace(/exp,\s*o,\s*r,\s*t\s+/g, 'export ');
  fixed = fixed.replace(/co,\s*n,\s*s,\s*t\s+/g, 'const ');
  fixed = fixed.replace(/defa,\s*u,\s*l,\s*t\s+/g, 'default ');
  fixed = fixed.replace(/f\s*u\s*n\s*c\s*t,\s*i,\s*o,\s*n\s+/g, 'function ');
  
  // Fix ArrowRight import
  fixed = fixed.replace(/Arr\s*o\s*w\s*R\s*i,\s*g,\s*h,\s*t/g, 'ArrowRight');
  fixed = fixed.replace(/Arr,\s*o,\s*w\s+R,\s*i,\s*g,\s*h,\s*t/g, 'ArrowRight');
  
  // Fix next/link import
  fixed = fixed.replace(/n,\s*e,\s*x,\s*t\/l,\s*i,\s*n,\s*k/g, 'next/link');
  fixed = fixed.replace(/n,\s*e,\s*x,\s*t\/i,\s*m,\s*a,\s*g,\s*e/g, 'next/image');
  
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
  
  // Fix more specific patterns
  fixed = fixed.replace(/n,\s*e,\s*x,\s*t\/l,\s*i,\s*n,\s*k/g, 'next/link');
  fixed = fixed.replace(/n,\s*e,\s*x,\s*t\/i,\s*m,\s*a,\s*g,\s*e/g, 'next/image');
  fixed = fixed.replace(/r,\s*e,\s*a,\s*c,\s*t/g, 'react');
  fixed = fixed.replace(/u,\s*s,\s*e,\s*S,\s*t,\s*a,\s*t,\s*e/g, 'useState');
  fixed = fixed.replace(/u,\s*s,\s*e,\s*E,\s*f,\s*f,\s*e,\s*c,\s*t/g, 'useEffect');
  
  // Fix function declarations
  fixed = fixed.replace(/f,\s*u,\s*n,\s*c,\s*t,\s*i,\s*o,\s*n/g, 'function');
  fixed = fixed.replace(/ret,\s*u,\s*r,\s*n/g, 'return');
  
  // Fix JSX elements
  fixed = fixed.replace(/<,\s*div/g, '<div');
  fixed = fixed.replace(/<,\s*span/g, '<span');
  fixed = fixed.replace(/<,\s*h,\s*1/g, '<h1');
  fixed = fixed.replace(/<,\s*h,\s*2/g, '<h2');
  fixed = fixed.replace(/<,\s*h,\s*3/g, '<h3');
  fixed = fixed.replace(/<,\s*p/g, '<p');
  fixed = fixed.replace(/<,\s*button/g, '<button');
  fixed = fixed.replace(/<,\s*Link/g, '<Link');
  fixed = fixed.replace(/<,\s*img/g, '<img');
  fixed = fixed.replace(/<,\s*m,\s*a,\s*i,\s*n/g, '<main');
  fixed = fixed.replace(/<,\s*s,\s*e,\s*c,\s*t,\s*i,\s*o,\s*n/g, '<section');
  
  // Fix className
  fixed = fixed.replace(/cl\s*a\s*s\s*N,\s*a,\s*m,\s*e/g, 'className');
  fixed = fixed.replace(/class,\s*N,\s*a,\s*m,\s*e/g, 'className');
  
  // Fix common React patterns
  fixed = fixed.replace(/React,\s*from\s+'react'/g, "React from 'react'");
  fixed = fixed.replace(/use,\s*S,\s*t,\s*a,\s*t,\s*e/g, 'useState');
  fixed = fixed.replace(/use,\s*E,\s*f,\s*f,\s*e,\s*c,\s*t/g, 'useEffect');
  
  // Fix specific corrupted patterns
  fixed = fixed.replace(/@ts-noch,\s*e,\s*c,\s*k/g, '@ts-nocheck');
  fixed = fixed.replace(/Arr\s*o\s*w\s*R\s*i,\s*g,\s*h,\s*t/g, 'ArrowRight');
  fixed = fixed.replace(/m\s*e\s*t\s*a\s*d,\s*a,\s*t,\s*a/g, 'metadata');
  fixed = fixed.replace(/desc\s*r\s*i\s*p\s*t,\s*i,\s*o,\s*n/g, 'description');
  
  // Fix more complex patterns
  fixed = fixed.replace(/\s+,\s+/g, ' ');
  fixed = fixed.replace(/,\s*,\s*/g, ',');
  fixed = fixed.replace(/,\s*$/gm, '');
  
  // Fix specific word patterns
  fixed = fixed.replace(/Ag,\s*e,\s*n,\s*t/g, 'Agent');
  fixed = fixed.replace(/Rele,\s*a,\s*s,\s*e/g, 'Release');
  fixed = fixed.replace(/Gua,\s*r,\s*d,\s*r,\s*a,\s*i,\s*l,\s*s/g, 'Guardrails');
  fixed = fixed.replace(/Budgets/g, 'Budgets');
  fixed = fixed.replace(/Appro,\s*v,\s*a,\s*l,\s*s/g, 'Approvals');
  fixed = fixed.replace(/and/g, 'and');
  fixed = fixed.replace(/Instant/g, 'Instant');
  fixed = fixed.replace(/R,\s*o,\s*l,\s*l,\s*b,\s*a,\s*c,\s*k/g, 'Rollback');
  
  // Fix specific corrupted patterns in the text
  fixed = fixed.replace(/Gua\s*r\s*d\s*r\s*a,\s*i,\s*l,\s*s/g, 'Guardrails');
  fixed = fixed.replace(/2,\s*0,\s*2,\s*6/g, '2026');
  fixed = fixed.replace(/BudgetsAppro\s*v\s*a\s*l\s*s/g, 'Budgets, Approvals');
  fixed = fixed.replace(/Instant\s*R\s*o\s*l\s*l\s*b,\s*a,\s*c,\s*k/g, 'Instant Rollback');
  fixed = fixed.replace(/Battle-tested\s*che\s*c\s*k\s*l\s*i,\s*s,\s*t,\s*s/g, 'Battle-tested checklists');
  fixed = fixed.replace(/b\s*u\s*d\s*g\s*e,\s*t,\s*e,\s*d/g, 'budgeted');
  fixed = fixed.replace(/actionsappro\s*v\s*a\s*l\s*s/g, 'actions, approvals');
  fixed = fixed.replace(/one-click\s*r\s*o\s*l\s*l\s*b,\s*a,\s*c,\s*k/g, 'one-click rollback');
  
  // Fix more JSX patterns
  fixed = fixed.replace(/cl\s*a\s*s\s*N,\s*a,\s*m,\s*e=/g, 'className=');
  fixed = fixed.replace(/min-h-scr,\s*e,\s*e,\s*n/g, 'min-h-screen');
  fixed = fixed.replace(/bg-wh,\s*it,\s*e/g, 'bg-white');
  fixed = fixed.replace(/py-16/g, 'py-16');
  fixed = fixed.replace(/bg-g\s*r\s*a\s*d\s*i,\s*e,\s*n,\s*t-to-r/g, 'bg-gradient-to-r');
  fixed = fixed.replace(/f,\s*r,\s*o,\s*m-fuch,\s*s,\s*i,\s*a-600\/10/g, 'from-fuchsia-600/10');
  fixed = fixed.replace(/to-pur,\s*p,\s*l,\s*e-600\/10/g, 'to-purple-600/10');
  fixed = fixed.replace(/bor,\s*d,\s*e,\s*r-b/g, 'border-b');
  fixed = fixed.replace(/bor,\s*d,\s*e,\s*r-g,\s*ray-200/g, 'border-gray-200');
  
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