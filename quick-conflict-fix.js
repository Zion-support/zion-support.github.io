#!/usr/bin/env node

import fs from 'fs';

const files = [
  './src/routes/AuthRoutes.tsx',
  './src/routes/ContentRoutes.tsx',
  './src/routes/DashboardRoutes.tsx'
];

for (const file of files) {
  try {
    console.log(`Fixing: ${file}`);
    let content = fs.readFileSync(file, 'utf8');
    
    // Remove all merge conflict markers
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]*/g, '');
    content = content.replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> [^\n]*/g, '');
    content = content.replace(/=======[\s\S]*?>>>>>>> [^\n]*/g, '');
    content = content.replace(/<<<<<<< [^\n]*/g, '');
    content = content.replace(/=======/g, '');
    content = content.replace(/>>>>>>> [^\n]*/g, '');
    
    fs.writeFileSync(file, content, 'utf8');
    console.log(`✓ Fixed: ${file}`);
  } catch (error) {
    console.error(`Error fixing ${file}:`, error.message);
  }
}

console.log('✅ All conflicts resolved!');