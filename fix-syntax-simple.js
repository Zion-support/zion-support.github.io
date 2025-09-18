#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Recursively find all TypeScript/TSX files
function findTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files.push(...findTsxFiles(fullPath));
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Fix specific broken files by replacing them with minimal working components
const brokenFiles = [
  'src/pages/QuantumNeuralInterface2026.tsx',
  'src/pages/RevolutionaryServicesShowcase2026.tsx',
  'src/pages/RevolutionaryTechBreakthrough2033.tsx',
  'src/pages/RevolutionaryTechBlog2026.tsx',
  'src/pages/RevolutionaryTechBreakthrough2038.tsx',
  'src/pages/RevolutionaryTechShowcase2026.tsx',
  'src/pages/RevolutionaryTechShowcase2032.tsx',
  'src/pages/RevolutionaryTechShowcase2042.tsx',
  'src/pages/RevolutionaryTechBreakthrough2034.tsx',
  'src/pages/RevolutionaryTechBreakthrough2030.tsx',
  'src/pages/RevolutionaryTechBreakthrough2032.tsx',
  'src/pages/RevolutionaryTechBreakthrough2036.tsx',
  'src/pages/RevolutionaryTechBreakthrough2037.tsx',
  'src/pages/RevolutionaryTechBreakthrough2039.tsx',
  'src/pages/RevolutionaryTechBreakthrough2043.tsx',
  'src/pages/RevolutionaryTechBreakthrough2035.tsx',
  'src/pages/RevolutionaryTechBreakthrough2031.tsx',
  'src/pages/RevolutionaryTechBreakthrough2038.tsx',
  'src/pages/RevolutionaryTechBreakthrough2042.tsx',
  'src/pages/RevolutionaryTechBreakthrough2044.tsx',
  'src/pages/RevolutionaryTechBreakthrough2045.tsx',
  'src/pages/RevolutionaryTechBreakthrough2046.tsx',
  'src/pages/RevolutionaryTechBreakthrough2047.tsx',
  'src/pages/RevolutionaryTechBreakthrough2048.tsx',
  'src/pages/RevolutionaryTechBreakthrough2049.tsx',
  'src/pages/RevolutionaryTechBreakthrough2050.tsx'
];

function createMinimalComponent(filePath) {
  const componentName = path.basename(filePath, '.tsx');
  return `import React from 'react';

const ${componentName}: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-6">${componentName}</h1>
        <p className="text-xl opacity-90">Coming soon...</p>
      </div>
    </div>
  );
};

export default ${componentName};`;
}

// Fix broken files
let fixedCount = 0;
for (const file of brokenFiles) {
  const fullPath = path.join(process.cwd(), file);
  if (fs.existsSync(fullPath)) {
    try {
      const content = fs.readFileSync(fullPath, 'utf8');
      if (content.trim().length < 200) { // Only replace very short/incomplete files
        fs.writeFileSync(fullPath, createMinimalComponent(file));
        console.log(`Fixed: ${file}`);
        fixedCount++;
      }
    } catch (error) {
      console.error(`Error fixing ${file}:`, error.message);
    }
  }
}

console.log(`Fixed ${fixedCount} files`);