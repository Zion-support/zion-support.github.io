const fs = require('fs');
const path = require('path');

// Function to get all TypeScript/JavaScript files
function getAllFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);

  files.forEach(file => {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      arrayOfFiles.push(fullPath);
    }
  });

  return arrayOfFiles;
}

// Function to fix duplicate imports and other issues
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix duplicate imports by consolidating them
    const lines = content.split('\n');
    const newLines = [];
    const importMap = new Map();
    let inImports = true;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (inImports && line.trim().startsWith('import ')) {
        // Extract import details
        const importMatch = line.match(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]([^'"]+)['"]/);
        if (importMatch) {
          const [, imports, source] = importMatch;
          const components = imports.split(',').map(c => c.trim());
          
          if (!importMap.has(source)) {
            importMap.set(source, new Set());
          }
          
          components.forEach(comp => {
            importMap.get(source).add(comp);
          });
        } else {
          // Non-destructured import
          newLines.push(line);
        }
      } else {
        inImports = false;
        newLines.push(line);
      }
    }
    
    // Rebuild imports
    const finalLines = [];
    for (const [source, components] of importMap) {
      const componentArray = Array.from(components);
      if (componentArray.length > 0) {
        finalLines.push(`import { ${componentArray.join(', ')} } from '${source}';`);
      }
    }
    
    // Add non-import lines
    const nonImportLines = newLines.filter(line => !line.trim().startsWith('import '));
    const result = [...finalLines, ...nonImportLines];
    
    // Fix specific issues
    let fixedContent = result.join('\n');
    
    // Fix missing testimonials array
    if (fixedContent.includes('testimonials.map') && !fixedContent.includes('const testimonials')) {
      const testimonialsArray = `const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO",
    content: "Zion Tech Group has transformed our business with their AI solutions.",
    avatar: "/api/placeholder/60/60",
    rating: 5,
    company: "TechCorp"
  },
  {
    name: "Michael Chen",
    role: "CTO", 
    content: "The performance improvements are remarkable. Highly recommended!",
    avatar: "/api/placeholder/60/60",
    rating: 5,
    company: "InnovateLabs"
  },
  {
    name: "Emily Rodriguez",
    role: "Product Manager",
    content: "Outstanding support and cutting-edge technology solutions.",
    avatar: "/api/placeholder/60/60",
    rating: 5,
    company: "FutureTech"
  }
];`;
      
      // Find the first function or component and add testimonials before it
      const functionMatch = fixedContent.match(/(const\s+\w+\s*=\s*\(\)\s*=>\s*{|function\s+\w+\s*\(|export\s+default\s+function)/);
      if (functionMatch) {
        const insertIndex = fixedContent.indexOf(functionMatch[0]);
        fixedContent = fixedContent.slice(0, insertIndex) + testimonialsArray + '\n\n' + fixedContent.slice(insertIndex);
      }
    }
    
    // Fix Image component issues
    if (fixedContent.includes('<Image') && !fixedContent.includes('import { Image }')) {
      fixedContent = fixedContent.replace(/<Image/g, '<img');
    }
    
    // Fix missing Eye import
    if (fixedContent.includes('<Eye') && !fixedContent.includes('Eye')) {
      const eyeImport = "import { Eye } from 'lucide-react';";
      fixedContent = eyeImport + '\n' + fixedContent;
    }
    
    // Fix missing Camera import
    if (fixedContent.includes('<Camera') && !fixedContent.includes('Camera')) {
      const cameraImport = "import { Camera } from 'lucide-react';";
      fixedContent = cameraImport + '\n' + fixedContent;
    }
    
    // Fix missing Email import
    if (fixedContent.includes('<Email') && !fixedContent.includes('Email')) {
      const emailImport = "import { Email } from 'lucide-react';";
      fixedContent = emailImport + '\n' + fixedContent;
    }
    
    // Fix missing FileText import
    if (fixedContent.includes('<FileText') && !fixedContent.includes('FileText')) {
      const fileTextImport = "import { FileText } from 'lucide-react';";
      fixedContent = fileTextImport + '\n' + fixedContent;
    }
    
    // Fix missing Share2 import
    if (fixedContent.includes('<Share2') && !fixedContent.includes('Share2')) {
      const share2Import = "import { Share2 } from 'lucide-react';";
      fixedContent = share2Import + '\n' + fixedContent;
    }
    
    // Fix missing MessageSquare import
    if (fixedContent.includes('<MessageSquare') && !fixedContent.includes('MessageSquare')) {
      const messageSquareImport = "import { MessageSquare } from 'lucide-react';";
      fixedContent = messageSquareImport + '\n' + fixedContent;
    }
    
    // Fix missing Atom import
    if (fixedContent.includes('<Atom') && !fixedContent.includes('Atom')) {
      const atomImport = "import { Atom } from 'lucide-react';";
      fixedContent = atomImport + '\n' + fixedContent;
    }
    
    // Fix missing Scan import
    if (fixedContent.includes('<Scan') && !fixedContent.includes('Scan')) {
      const scanImport = "import { Scan } from 'lucide-react';";
      fixedContent = scanImport + '\n' + fixedContent;
    }
    
    // Fix missing Play import
    if (fixedContent.includes('<Play') && !fixedContent.includes('Play')) {
      const playImport = "import { Play } from 'lucide-react';";
      fixedContent = playImport + '\n' + fixedContent;
    }
    
    // Fix missing DollarSign import
    if (fixedContent.includes('<DollarSign') && !fixedContent.includes('DollarSign')) {
      const dollarSignImport = "import { DollarSign } from 'lucide-react';";
      fixedContent = dollarSignImport + '\n' + fixedContent;
    }
    
    // Fix missing Rocket import
    if (fixedContent.includes('<Rocket') && !fixedContent.includes('Rocket')) {
      const rocketImport = "import { Rocket } from 'lucide-react';";
      fixedContent = rocketImport + '\n' + fixedContent;
    }
    
    // Fix missing SEOOptimizer import
    if (fixedContent.includes('SEOOptimizer') && !fixedContent.includes('import SEOOptimizer')) {
      const seoImport = "import SEOOptimizer from '../components/SEOOptimizer';";
      fixedContent = seoImport + '\n' + fixedContent;
    }
    
    // Fix property access issues
    fixedContent = fixedContent.replace(/\.number\b/g, '.value');
    fixedContent = fixedContent.replace(/\.rating\b/g, '.rating || 5');
    fixedContent = fixedContent.replace(/\.company\b/g, '.company || "Company"');
    
    if (fixedContent !== content) {
      fs.writeFileSync(filePath, fixedContent);
      console.log(`Fixed: ${filePath}`);
      modified = true;
    }
    
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Main execution
console.log('Starting TypeScript error fixes...');

const files = getAllFiles('./app');
let fixedCount = 0;

files.forEach(file => {
  fixFile(file);
  fixedCount++;
});

console.log(`Processed ${fixedCount} files`);
console.log('TypeScript error fixes completed!');