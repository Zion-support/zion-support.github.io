const fs = require('fs');
const path = require('path');

// Function to add missing imports to a file
function fixMissingImports(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    let newContent = content;
    let modified = false;

    // Check for missing imports based on usage in the file
    const missingImports = [];

    // Check for Zap usage
    if (content.includes('<Zap') && !content.includes('Zap') && !content.includes('import {') || 
        content.includes('Zap,') && !content.includes('Zap')) {
      missingImports.push('Zap');
    }

    // Check for Brain usage
    if (content.includes('<Brain') && !content.includes('Brain') && !content.includes('import {') || 
        content.includes('Brain,') && !content.includes('Brain')) {
      missingImports.push('Brain');
    }

    // Check for Globe usage
    if (content.includes('<Globe') && !content.includes('Globe') && !content.includes('import {') || 
        content.includes('Globe,') && !content.includes('Globe')) {
      missingImports.push('Globe');
    }

    // Check for Activity usage
    if (content.includes('<Activity') && !content.includes('Activity') && !content.includes('import {') || 
        content.includes('Activity,') && !content.includes('Activity')) {
      missingImports.push('Activity');
    }

    // Check for TrendingUp usage
    if (content.includes('<TrendingUp') && !content.includes('TrendingUp') && !content.includes('import {') || 
        content.includes('TrendingUp,') && !content.includes('TrendingUp')) {
      missingImports.push('TrendingUp');
    }

    // Check for Settings usage
    if (content.includes('<Settings') && !content.includes('Settings') && !content.includes('import {') || 
        content.includes('Settings,') && !content.includes('Settings')) {
      missingImports.push('Settings');
    }

    // Check for Users usage
    if (content.includes('<Users') && !content.includes('Users') && !content.includes('import {') || 
        content.includes('Users,') && !content.includes('Users')) {
      missingImports.push('Users');
    }

    // Check for Clock usage
    if (content.includes('<Clock') && !content.includes('Clock') && !content.includes('import {') || 
        content.includes('Clock,') && !content.includes('Clock')) {
      missingImports.push('Clock');
    }

    // Check for Award usage
    if (content.includes('<Award') && !content.includes('Award') && !content.includes('import {') || 
        content.includes('Award,') && !content.includes('Award')) {
      missingImports.push('Award');
    }

    // Check for Star usage
    if (content.includes('<Star') && !content.includes('Star') && !content.includes('import {') || 
        content.includes('Star,') && !content.includes('Star')) {
      missingImports.push('Star');
    }

    // Check for CheckCircle usage
    if (content.includes('<CheckCircle') && !content.includes('CheckCircle') && !content.includes('import {') || 
        content.includes('CheckCircle,') && !content.includes('CheckCircle')) {
      missingImports.push('CheckCircle');
    }

    // Check for BarChart3 usage
    if (content.includes('<BarChart3') && !content.includes('BarChart3') && !content.includes('import {') || 
        content.includes('BarChart3,') && !content.includes('BarChart3')) {
      missingImports.push('BarChart3');
    }

    // Check for Shield usage
    if (content.includes('<Shield') && !content.includes('Shield') && !content.includes('import {') || 
        content.includes('Shield,') && !content.includes('Shield')) {
      missingImports.push('Shield');
    }

    // Check for Cloud usage
    if (content.includes('<Cloud') && !content.includes('Cloud') && !content.includes('import {') || 
        content.includes('Cloud,') && !content.includes('Cloud')) {
      missingImports.push('Cloud');
    }

    // Check for Lock usage
    if (content.includes('<Lock') && !content.includes('Lock') && !content.includes('import {') || 
        content.includes('Lock,') && !content.includes('Lock')) {
      missingImports.push('Lock');
    }

    // Check for Monitor usage
    if (content.includes('<Monitor') && !content.includes('Monitor') && !content.includes('import {') || 
        content.includes('Monitor,') && !content.includes('Monitor')) {
      missingImports.push('Monitor');
    }

    // Check for Server usage
    if (content.includes('<Server') && !content.includes('Server') && !content.includes('import {') || 
        content.includes('Server,') && !content.includes('Server')) {
      missingImports.push('Server');
    }

    // Check for Database usage
    if (content.includes('<Database') && !content.includes('Database') && !content.includes('import {') || 
        content.includes('Database,') && !content.includes('Database')) {
      missingImports.push('Database');
    }

    // Check for Network usage
    if (content.includes('<Network') && !content.includes('Network') && !content.includes('import {') || 
        content.includes('Network,') && !content.includes('Network')) {
      missingImports.push('Network');
    }

    // Check for Cpu usage
    if (content.includes('<Cpu') && !content.includes('Cpu') && !content.includes('import {') || 
        content.includes('Cpu,') && !content.includes('Cpu')) {
      missingImports.push('Cpu');
    }

    // Check for HardDrive usage
    if (content.includes('<HardDrive') && !content.includes('HardDrive') && !content.includes('import {') || 
        content.includes('HardDrive,') && !content.includes('HardDrive')) {
      missingImports.push('HardDrive');
    }

    // Check for Target usage
    if (content.includes('<Target') && !content.includes('Target') && !content.includes('import {') || 
        content.includes('Target,') && !content.includes('Target')) {
      missingImports.push('Target');
    }

    // Check for Mail usage
    if (content.includes('<Mail') && !content.includes('Mail') && !content.includes('import {') || 
        content.includes('Mail,') && !content.includes('Mail')) {
      missingImports.push('Mail');
    }

    // Check for Phone usage
    if (content.includes('<Phone') && !content.includes('Phone') && !content.includes('import {') || 
        content.includes('Phone,') && !content.includes('Phone')) {
      missingImports.push('Phone');
    }

    // Check for Smartphone usage
    if (content.includes('<Smartphone') && !content.includes('Smartphone') && !content.includes('import {') || 
        content.includes('Smartphone,') && !content.includes('Smartphone')) {
      missingImports.push('Smartphone');
    }

    // Check for MapPin usage
    if (content.includes('<MapPin') && !content.includes('MapPin') && !content.includes('import {') || 
        content.includes('MapPin,') && !content.includes('MapPin')) {
      missingImports.push('MapPin');
    }

    // Check for ArrowRight usage
    if (content.includes('<ArrowRight') && !content.includes('ArrowRight') && !content.includes('import {') || 
        content.includes('ArrowRight,') && !content.includes('ArrowRight')) {
      missingImports.push('ArrowRight');
    }

    // Check for Link usage
    if (content.includes('<Link') && !content.includes('Link') && !content.includes('import {') || 
        content.includes('Link,') && !content.includes('Link')) {
      missingImports.push('Link');
    }

    // Check for Helmet usage
    if (content.includes('<Helmet') && !content.includes('Helmet') && !content.includes('import {') || 
        content.includes('Helmet,') && !content.includes('Helmet')) {
      missingImports.push('Helmet');
    }

    // If we found missing imports, add them
    if (missingImports.length > 0) {
      // Find existing lucide-react import
      const lucideImportRegex = /import\s*{\s*([^}]+)\s*}\s*from\s*["']lucide-react["'];?/;
      const match = content.match(lucideImportRegex);
      
      if (match) {
        // Add missing imports to existing import
        const existingImports = match[1].split(',').map(imp => imp.trim());
        const allImports = [...new Set([...existingImports, ...missingImports])].sort();
        const newImport = `import { ${allImports.join(', ')} } from 'lucide-react';`;
        newContent = newContent.replace(match[0], newImport);
        modified = true;
      } else {
        // Add new import
        const newImport = `import { ${missingImports.join(', ')} } from 'lucide-react';\n`;
        newContent = newImport + newContent;
        modified = true;
      }
    }

    if (modified) {
      fs.writeFileSync(filePath, newContent);
      console.log(`Fixed imports in: ${filePath} - Added: ${missingImports.join(', ')}`);
    }

  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Function to recursively find all TypeScript/JavaScript files
function findFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules' && file !== 'backup-unused-components') {
      findFiles(filePath, fileList);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Main execution
console.log('Fixing missing imports...');

const files = findFiles('./app');
let fixedCount = 0;

files.forEach(file => {
  const originalContent = fs.readFileSync(file, 'utf8');
  fixMissingImports(file);
  const newContent = fs.readFileSync(file, 'utf8');
  if (originalContent !== newContent) {
    fixedCount++;
  }
});

console.log(`Fixed ${fixedCount} files`);