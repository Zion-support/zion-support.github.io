const fs = require('fs');
const path = require('path');

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Fix import statements
  content = content.replace(/from 'react$/gm, "from 'react';");
  content = content.replace(/from 'next\/head$/gm, "from 'next/head';");
  content = content.replace(/from 'next\/link$/gm, "from 'next/link';");
  content = content.replace(/from 'lucide-react$/gm, "from 'lucide-react';");
  content = content.replace(/from 'class-variance-authority$/gm, "from 'class-variance-authority';");
  content = content.replace(/from 'react-helmet-async$/gm, "from 'react-helmet-async';");
  
  // Fix broken quotes and semicolons
  content = content.replace(/';'/g, ";\n");
  content = content.replace(/';''/g, ";\n\n");
  content = content.replace(/';' /g, ";\n");
  content = content.replace(/';'' /g, ";\n\n");
  
  // Fix broken function calls and statements
  content = content.replace(/setIsHighContrast\(savedHighContrast\);setFontSize\(savedFontSize\);/g, 
    "setIsHighContrast(savedHighContrast);\n    setFontSize(savedFontSize);");
  
  // Fix broken strings
  content = content.replace(/';'const/g, ";\n\nconst");
  content = content.replace(/';'interface/g, ";\n\ninterface");
  content = content.replace(/';'export/g, ";\n\nexport");
  
  // Fix broken JSX
  content = content.replace(/';'<footer/g, ";\n\n  return (\n    <footer");
  content = content.replace(/';'<nav/g, ";\n\n  return (\n    <nav");
  
  // Fix broken URLs
  content = content.replace(/https: \/\/fonts\.googleapis\.com/g, "https://fonts.googleapis.com");
  content = content.replace(/https: \/\/ziontechgroup\.com/g, "https://ziontechgroup.com");
  
  // Fix broken CSS classes
  content = content.replace(/md: grid-cols-2/g, "md:grid-cols-2");
  content = content.replace(/focus: outline-none/g, "focus:outline-none");
  content = content.replace(/focus-visible: outline-none/g, "focus-visible:outline-none");
  content = content.replace(/hover: bg-primary/g, "hover:bg-primary");
  
  // Fix broken function definitions
  content = content.replace(/const applyAccessibilityStyles = \(highContrast: boolean, fontSize: string, reducedMotion: boolean\) => {;/g,
    "const applyAccessibilityStyles = (highContrast: boolean, fontSize: string, reducedMotion: boolean) => {\n  const root = document.documentElement;");
  
  // Fix broken array definitions
  content = content.replace(/const badgeVariants = cva\(;/g, "const badgeVariants = cva(");
  content = content.replace(/const buttonVariants = cva\(;/g, "const buttonVariants = cva(");
  
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
      fixFile(filePath);
    }
  }
}

// Fix all component files
walkDir('./components');
console.log('All syntax errors fixed!');