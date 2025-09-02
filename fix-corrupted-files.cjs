const fs = require('fs');
const path = require('path');

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Fix broken import statements
  content = content.replace(/import React, \{ useEffect, useState \} from\s*$/gm, "import React, { useEffect, useState } from 'react';");
  content = content.replace(/import React, \{ useEffect \} from\s*$/gm, "import React, { useEffect } from 'react';");
  content = content.replace(/import React from\s*$/gm, "import React from 'react';");
  content = content.replace(/import Head from\s*$/gm, "import Head from 'next/head';");
  content = content.replace(/import Link from\s*$/gm, "import Link from 'next/link';");
  content = content.replace(/import \{ .* \} from\s*$/gm, (match) => {
    return match.replace(/from\s*$/, "from 'lucide-react';");
  });
  
  // Fix broken strings and quotes
  content = content.replace(/';'interface/g, ";\n\ninterface");
  content = content.replace(/';'const/g, ";\n\nconst");
  content = content.replace(/';'export/g, ";\n\nexport");
  content = content.replace(/';'<footer/g, ";\n\n  return (\n    <footer");
  content = content.replace(/';'<nav/g, ";\n\n  return (\n    <nav");
  content = content.replace(/';'<div/g, ";\n\n  return (\n    <div");
  
  // Fix broken function parameters
  content = content.replace(/useState\(,\s*normal\s*\);/g, "useState('normal');");
  content = content.replace(/useState\(false\);/g, "useState(false);");
  
  // Fix broken quotes in strings
  content = content.replace(/';' /g, ";\n");
  content = content.replace(/';''/g, ";\n\n");
  
  fs.writeFileSync(filePath, content);
  console.log(`Fixed: ${filePath}`);
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      walkDir(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      try {
        fixFile(filePath);
      } catch (error) {
        console.log(`Error fixing ${filePath}: ${error.message}`);
      }
    }
  }
}

// Fix all component files
walkDir('./components');
console.log('All corrupted files fixed!');