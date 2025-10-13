import fs from 'fs';
import path from 'path';

// Get all TypeScript/TSX files in the app directory
function getAllTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      files.push(...getAllTsxFiles(fullPath));
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Fix remaining type issues in a file
function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  // Fix malformed import statements
  if (content.includes(';import')) {
    content = content.replace(/;import/g, ';\nimport');
    modified = true;
  }
  
  // Fix variable type annotations
  const typeFixes = [
    { pattern: /const benefits = \[\];/g, replacement: 'const benefits: string[] = [];' },
    { pattern: /const features = \[\];/g, replacement: 'const features: { title: string; description: string; icon: React.ReactNode; color: string }[] = [];' },
    { pattern: /const stats = \[\];/g, replacement: 'const stats: { label: string; value: string; number: string; icon: React.ReactNode }[] = [];' },
    { pattern: /const capabilities = \[\];/g, replacement: 'const capabilities: { title: string; description: string; icon: React.ReactNode; color: string }[] = [];' },
    { pattern: /const testimonials = \[\];/g, replacement: 'const testimonials: { name: string; role: string; company: string; content: string; rating: number; avatar: string }[] = [];' },
    { pattern: /const applications = \[\];/g, replacement: 'const applications: string[] = [];' }
  ];
  
  for (const fix of typeFixes) {
    if (fix.pattern.test(content)) {
      content = content.replace(fix.pattern, fix.replacement);
      modified = true;
    }
  }
  
  // Fix ReactNode issues - replace object usage with property access
  content = content.replace(/\{feature\}/g, '{feature.title}');
  content = content.replace(/\{benefit\}/g, '{benefit}');
  content = content.replace(/\{capability\}/g, '{capability.title}');
  content = content.replace(/\{stat\}/g, '{stat.value}');
  
  // Fix duplicate property names in object literals
  content = content.replace(/(\w+):\s*[^,}]+,\s*\1:/g, '$1:');
  
  // Fix missing avatar property in testimonials
  if (content.includes('testimonials') && !content.includes('avatar:')) {
    content = content.replace(
      /{\s*name:\s*"[^"]*",\s*role:\s*"[^"]*",\s*company:\s*"[^"]*",\s*content:\s*"[^"]*",\s*rating:\s*\d+\s*}/g,
      (match) => {
        return match.replace('rating:', 'avatar: "/placeholder-avatar.jpg", rating:');
      }
    );
    modified = true;
  }
  
  // Fix missing React import
  if (content.includes('React.ReactNode') && !content.includes("import React")) {
    content = "import React from 'react';\n" + content;
    modified = true;
  }
  
  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  }
}

// Main execution
console.log('Starting remaining error fixes...');

const appDir = path.join(process.cwd(), 'app');
const files = getAllTsxFiles(appDir);

console.log(`Found ${files.length} files to process`);

for (const file of files) {
  try {
    fixFile(file);
  } catch (error) {
    console.error(`Error processing ${file}:`, error.message);
  }
}

console.log('Remaining error fixes completed!');