const fs = require('fs');
const path = require('path');

// Common imports that are frequently used
const commonImports = {
  'react': 'import React from \'react\';',
  'next/link': 'import Link from \'next/link\';',
  'next/image': 'import Image from \'next/image\';',
  'next/head': 'import Head from \'next/head\';',
  'next/dynamic': 'import dynamic from \'next/dynamic\';',
  'lucide-react': [
    'import { Brain, BarChart, Target, TrendingUp, ArrowRight, CheckCircle, Shield, Database, Lock, Clock, Zap, Cloud, ChevronLeft, ChevronRight, Twitter, Github, Linkedin, Phone, Mail, MapPin, ChevronDown, X, Menu, Download } from \'lucide-react\';'
  ],
  '../components/Navigation': 'import Navigation from \'../components/Navigation\';',
  '../components/Footer': 'import Footer from \'../components/Footer\';',
  './components/Navigation': 'import Navigation from \'./components/Navigation\';',
  './components/Footer': 'import Footer from \'./components/Footer\';',
  'next/metadata': 'import { Metadata } from \'next/metadata\';'
};

// Function to add missing imports to a file
function addMissingImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let lines = content.split('\n');
    let modified = false;
    
    // Check what imports are needed
    const neededImports = new Set();
    
    // Check for React usage
    if (content.includes('React.') || content.includes('<') || content.includes('useState') || content.includes('useEffect') || content.includes('useCallback') || content.includes('useMemo')) {
      neededImports.add('react');
    }
    
    // Check for Next.js components
    if (content.includes('<Link') || content.includes('Link.')) {
      neededImports.add('next/link');
    }
    if (content.includes('<Image') || content.includes('Image.')) {
      neededImports.add('next/image');
    }
    if (content.includes('<Head') || content.includes('Head.')) {
      neededImports.add('next/head');
    }
    if (content.includes('dynamic(')) {
      neededImports.add('next/dynamic');
    }
    
    // Check for Lucide React icons
    const lucideIcons = ['Brain', 'BarChart', 'Target', 'TrendingUp', 'ArrowRight', 'CheckCircle', 'Shield', 'Database', 'Lock', 'Clock', 'Zap', 'Cloud', 'ChevronLeft', 'ChevronRight', 'Twitter', 'Github', 'Linkedin', 'Phone', 'Mail', 'MapPin', 'ChevronDown', 'X', 'Menu', 'Download'];
    const hasLucideIcons = lucideIcons.some(icon => content.includes(icon));
    if (hasLucideIcons) {
      neededImports.add('lucide-react');
    }
    
    // Check for Navigation component
    if (content.includes('<Navigation') || content.includes('Navigation.')) {
      if (filePath.includes('/app/')) {
        neededImports.add('../components/Navigation');
      } else {
        neededImports.add('./components/Navigation');
      }
    }
    
    // Check for Footer component
    if (content.includes('<Footer') || content.includes('Footer.')) {
      if (filePath.includes('/app/')) {
        neededImports.add('../components/Footer');
      } else {
        neededImports.add('./components/Footer');
      }
    }
    
    // Check for Metadata
    if (content.includes('Metadata') || content.includes('export const metadata')) {
      neededImports.add('next/metadata');
    }
    
    // Add imports at the top
    const importLines = [];
    neededImports.forEach(importKey => {
      if (commonImports[importKey]) {
        if (Array.isArray(commonImports[importKey])) {
          importLines.push(...commonImports[importKey]);
        } else {
          importLines.push(commonImports[importKey]);
        }
      }
    });
    
    if (importLines.length > 0) {
      // Find the first non-empty line or the first export
      let insertIndex = 0;
      for (let i = 0; i < lines.length; i++) {
        if (lines[i].trim() && !lines[i].trim().startsWith('//') && !lines[i].trim().startsWith('/*')) {
          insertIndex = i;
          break;
        }
      }
      
      // Insert imports
      lines.splice(insertIndex, 0, ...importLines, '');
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, lines.join('\n'));
      console.log(`Added missing imports to: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find all .tsx files
function findTsxFiles(dir) {
  const files = [];
  
  function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    items.forEach(item => {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        traverse(fullPath);
      } else if (stat.isFile() && item.endsWith('.tsx')) {
        files.push(fullPath);
      }
    });
  }
  
  traverse(dir);
  return files;
}

// Main execution
const appDir = path.join(__dirname, 'app');
const tsxFiles = findTsxFiles(appDir);

console.log(`Found ${tsxFiles.length} .tsx files to process...`);

let fixedCount = 0;
tsxFiles.forEach(file => {
  if (addMissingImports(file)) {
    fixedCount++;
  }
});

console.log(`Added missing imports to ${fixedCount} files.`);