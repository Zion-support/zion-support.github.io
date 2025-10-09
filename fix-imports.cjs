const fs = require('fs');
const path = require('path');

// Find all files with issues
const findFiles = (dir, fileList = []) => {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      findFiles(filePath, fileList);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
};

const files = findFiles('./app');

files.forEach(filePath => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Check for common missing imports
    const missingImports = [];
    
    if (content.includes('<Link') && !content.includes("import Link from 'next/link'")) {
      missingImports.push("import Link from 'next/link';");
    }
    
    if (content.includes('ArrowRight') && !content.includes("ArrowRight")) {
      missingImports.push("ArrowRight");
    }
    
    if (content.includes('CheckCircle') && !content.includes("CheckCircle")) {
      missingImports.push("CheckCircle");
    }
    
    if (content.includes('Star') && !content.includes("Star")) {
      missingImports.push("Star");
    }
    
    if (content.includes('Zap') && !content.includes("Zap")) {
      missingImports.push("Zap");
    }
    
    if (content.includes('Shield') && !content.includes("Shield")) {
      missingImports.push("Shield");
    }
    
    if (content.includes('Clock') && !content.includes("Clock")) {
      missingImports.push("Clock");
    }
    
    if (content.includes('Users') && !content.includes("Users")) {
      missingImports.push("Users");
    }
    
    if (content.includes('Globe') && !content.includes("Globe")) {
      missingImports.push("Globe");
    }
    
    if (content.includes('Brain') && !content.includes("Brain")) {
      missingImports.push("Brain");
    }
    
    if (content.includes('Cpu') && !content.includes("Cpu")) {
      missingImports.push("Cpu");
    }
    
    if (content.includes('Target') && !content.includes("Target")) {
      missingImports.push("Target");
    }
    
    if (content.includes('BarChart') && !content.includes("BarChart")) {
      missingImports.push("BarChart");
    }
    
    if (content.includes('MessageSquare') && !content.includes("MessageSquare")) {
      missingImports.push("MessageSquare");
    }
    
    if (content.includes('Eye') && !content.includes("Eye")) {
      missingImports.push("Eye");
    }
    
    if (content.includes('Sparkles') && !content.includes("Sparkles")) {
      missingImports.push("Sparkles");
    }
    
    if (content.includes('Settings') && !content.includes("Settings")) {
      missingImports.push("Settings");
    }
    
    if (content.includes('RefreshCw') && !content.includes("RefreshCw")) {
      missingImports.push("RefreshCw");
    }
    
    if (content.includes('Database') && !content.includes("Database")) {
      missingImports.push("Database");
    }
    
    if (content.includes('PieChart') && !content.includes("PieChart")) {
      missingImports.push("PieChart");
    }
    
    if (content.includes('LineChart') && !content.includes("LineChart")) {
      missingImports.push("LineChart");
    }
    
    if (content.includes('Activity') && !content.includes("Activity")) {
      missingImports.push("Activity");
    }
    
    if (content.includes('AlertTriangle') && !content.includes("AlertTriangle")) {
      missingImports.push("AlertTriangle");
    }
    
    if (content.includes('Lock') && !content.includes("Lock")) {
      missingImports.push("Lock");
    }
    
    // Add missing imports
    if (missingImports.length > 0) {
      console.log(`Fixing imports in ${filePath}`);
      
      // Find the first import line
      const lines = content.split('\n');
      let firstImportIndex = -1;
      
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].startsWith('import ')) {
          firstImportIndex = i;
          break;
        }
      }
      
      if (firstImportIndex !== -1) {
        // Add Link import if needed
        if (missingImports.includes("import Link from 'next/link';")) {
          lines.splice(firstImportIndex, 0, "import Link from 'next/link';");
          firstImportIndex++;
        }
        
        // Add lucide-react imports
        const lucideImports = missingImports.filter(imp => imp !== "import Link from 'next/link';");
        if (lucideImports.length > 0) {
          const existingLucideImport = lines.findIndex(line => line.includes("from 'lucide-react'"));
          
          if (existingLucideImport !== -1) {
            // Add to existing import
            const importLine = lines[existingLucideImport];
            const currentImports = importLine.match(/\{([^}]+)\}/)?.[1] || '';
            const newImports = [...new Set([...currentImports.split(',').map(s => s.trim()), ...lucideImports])].filter(Boolean);
            lines[existingLucideImport] = `import { ${newImports.join(', ')} } from 'lucide-react';`;
          } else {
            // Add new import
            lines.splice(firstImportIndex, 0, `import { ${lucideImports.join(', ')} } from 'lucide-react';`);
          }
        }
        
        content = lines.join('\n');
        modified = true;
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
});

console.log('Done fixing import issues');