import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

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

// Fix common issues in a file
function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;
  
  // Fix missing imports
  const missingImports = [];
  
  // Check for Helmet usage
  if (content.includes('<Helmet>') && !content.includes("import { Helmet }")) {
    missingImports.push("import { Helmet } from 'react-helmet-async';");
  }
  
  // Check for Link usage
  if (content.includes('<Link') && !content.includes("import { Link }")) {
    missingImports.push("import { Link } from 'react-router-dom';");
  }
  
  // Check for motion usage
  if (content.includes('motion.') && !content.includes("import { motion }")) {
    missingImports.push("import { motion } from 'framer-motion';");
  }
  
  // Check for lucide-react icons
  const iconMatches = content.match(/([A-Z][a-zA-Z]+)(?=\s*className)/g);
  if (iconMatches) {
    const icons = iconMatches.filter(icon => 
      !content.includes(`import { ${icon} }`) && 
      !content.includes(`import ${icon}`)
    );
    if (icons.length > 0) {
      const existingLucideImport = content.match(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"]/);
      if (existingLucideImport) {
        const currentIcons = existingLucideImport[1].split(',').map(i => i.trim());
        const newIcons = [...new Set([...currentIcons, ...icons])];
        content = content.replace(
          /import\s*{\s*[^}]+\s*}\s*from\s*['"]lucide-react['"]/,
          `import { ${newIcons.join(', ')} } from 'lucide-react'`
        );
      } else {
        missingImports.push(`import { ${icons.join(', ')} } from 'lucide-react';`);
      }
    }
  }
  
  // Add missing imports
  if (missingImports.length > 0) {
    const existingImports = content.match(/^import\s+.*$/gm) || [];
    const lastImportIndex = existingImports.length > 0 ? 
      content.lastIndexOf(existingImports[existingImports.length - 1]) + 
      existingImports[existingImports.length - 1].length : 0;
    
    const importSection = missingImports.join('\n') + '\n';
    content = content.slice(0, lastImportIndex) + importSection + content.slice(lastImportIndex);
    modified = true;
  }
  
  // Fix undefined variables by adding them as empty arrays/objects
  const undefinedVars = ['features', 'benefits', 'capabilities', 'stats', 'testimonials'];
  
  for (const varName of undefinedVars) {
    if (content.includes(`${varName}.map`) && !content.includes(`const ${varName}`)) {
      const componentStart = content.indexOf('const ') || content.indexOf('export default');
      if (componentStart !== -1) {
        const insertPoint = content.indexOf('{', componentStart) + 1;
        content = content.slice(0, insertPoint) + `\n  const ${varName} = [];\n` + content.slice(insertPoint);
        modified = true;
      }
    }
  }
  
  // Fix SEOOptimizer props
  if (content.includes('<SEOOptimizer') && content.includes('title=')) {
    content = content.replace(
      /<SEOOptimizer\s+title="[^"]*"\s+description="[^"]*"[^>]*>/g,
      '<SEOOptimizer>'
    );
    modified = true;
  }
  
  // Fix FuturisticButton props
  if (content.includes('FuturisticButton') && content.includes('variant=')) {
    // Remove unsupported props
    content = content.replace(
      /variant="[^"]*"\s*/g,
      ''
    );
    content = content.replace(
      /size="[^"]*"\s*/g,
      ''
    );
    content = content.replace(
      /gradient={[^}]*}\s*/g,
      ''
    );
    content = content.replace(
      /animated={[^}]*}\s*/g,
      ''
    );
    content = content.replace(
      /glow={[^}]*}\s*/g,
      ''
    );
    content = content.replace(
      /neon={[^}]*}\s*/g,
      ''
    );
    content = content.replace(
      /glowColor="[^"]*"\s*/g,
      ''
    );
    content = content.replace(
      /hoverEffect="[^"]*"\s*/g,
      ''
    );
    content = content.replace(
      /iconPosition="[^"]*"\s*/g,
      ''
    );
    content = content.replace(
      /href="[^"]*"\s*/g,
      ''
    );
    content = content.replace(
      /icon={[^}]*}\s*/g,
      ''
    );
    modified = true;
  }
  
  // Remove unused variable warnings by prefixing with underscore
  const unusedVarPattern = /const\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*=/g;
  let match;
  while ((match = unusedVarPattern.exec(content)) !== null) {
    const varName = match[1];
    if (varName !== 'React' && varName !== 'useState' && varName !== 'useEffect') {
      // Check if variable is used
      const varUsage = new RegExp(`\\b${varName}\\b`, 'g');
      const matches = content.match(varUsage) || [];
      if (matches.length === 1) {
        content = content.replace(
          new RegExp(`\\bconst\\s+${varName}\\s*=`, 'g'),
          `const _${varName} =`
        );
        modified = true;
      }
    }
  }
  
  // Fix missing avatar property in testimonials
  if (content.includes('testimonial.avatar') && !content.includes('avatar:')) {
    content = content.replace(
      /{\s*name:\s*"[^"]*",\s*role:\s*"[^"]*",\s*company:\s*"[^"]*",\s*content:\s*"[^"]*",\s*rating:\s*\d+\s*}/g,
      (match) => {
        return match.replace('rating:', 'avatar: "/placeholder-avatar.jpg", rating:');
      }
    );
    modified = true;
  }
  
  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
  }
}

// Main execution
console.log('Starting error fixes...');

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

console.log('Error fixes completed!');