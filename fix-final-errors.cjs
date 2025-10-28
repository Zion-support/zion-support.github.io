const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all TypeScript/TSX files in the app directory
const files = glob.sync('app/**/*.{ts,tsx}', { cwd: __dirname });

console.log(`Found ${files.length} files to process...`);

let fixedCount = 0;

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Fix remaining GlobalErrorBoundary import paths
  if (content.includes("from '../components/GlobalErrorBoundary'")) {
    content = content.replace(
      /from ['"]\.\.\/components\/GlobalErrorBoundary['"]/g,
      "from '../../components/GlobalErrorBoundary'"
    );
    modified = true;
  }

  // Fix ErrorBoundary import to GlobalErrorBoundary
  if (content.includes("import ErrorBoundary from")) {
    content = content.replace(
      /import ErrorBoundary from ['"]\.\.\.\.\/components\/GlobalErrorBoundary['"]/g,
      "import GlobalErrorBoundary from '../../components/GlobalErrorBoundary'"
    );
    modified = true;
  }

  // Remove unused ErrorBoundary imports
  if (content.includes("import ErrorBoundary from") && !content.includes('<ErrorBoundary')) {
    content = content.replace(/import ErrorBoundary from ['"][^'"]+['"];?\s*/g, '');
    modified = true;
  }

  // Fix ErrorBoundary usage to GlobalErrorBoundary
  if (content.includes('<ErrorBoundary>') || content.includes('</ErrorBoundary>')) {
    content = content.replace(/<ErrorBoundary>/g, '<GlobalErrorBoundary>');
    content = content.replace(/<\/ErrorBoundary>/g, '</GlobalErrorBoundary>');
    modified = true;
  }

  // Add missing Next.js imports
  const needsDynamic = content.includes('dynamic(') && !content.includes('import dynamic');
  const needsHead = content.includes('<Head') && !content.includes('import Head');
  const needsImage = content.includes('<Image') && !content.includes('import Image');

  if (needsDynamic || needsHead || needsImage) {
    const nextImports = [];
    if (needsDynamic) nextImports.push('dynamic');
    if (needsHead) nextImports.push('Head');
    if (needsImage) nextImports.push('Image');
    
    const importStatement = `import { ${nextImports.join(', ')} } from 'next/${needsHead ? 'head' : 'image'}';`;
    
    // Find the last import statement and add after it
    const importRegex = /import\s+.*?from\s+['"][^'"]+['"];?\s*$/gm;
    const imports_found = content.match(importRegex);
    
    if (imports_found && imports_found.length > 0) {
      const lastImport = imports_found[imports_found.length - 1];
      const lastImportIndex = content.lastIndexOf(lastImport);
      const insertIndex = lastImportIndex + lastImport.length;
      content = content.slice(0, insertIndex) + '\n' + importStatement + content.slice(insertIndex);
      modified = true;
    }
  }

  // Fix duplicate imports and declarations
  const lines = content.split('\n');
  const seenImports = new Set();
  const seenFunctions = new Set();
  const newLines = [];
  let inFunction = false;
  let functionName = '';

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Check for duplicate imports
    if (line.trim().startsWith('import ')) {
      const importKey = line.trim();
      if (seenImports.has(importKey)) {
        console.log(`Removing duplicate import: ${line.trim()}`);
        modified = true;
        continue; // Skip this line
      }
      seenImports.add(importKey);
    }
    
    // Check for duplicate function declarations
    const functionMatch = line.match(/export\s+default\s+function\s+(\w+)/);
    if (functionMatch) {
      const funcName = functionMatch[1];
      if (seenFunctions.has(funcName)) {
        console.log(`Removing duplicate function: ${funcName}`);
        modified = true;
        // Skip this function and everything until the next function or end of file
        let j = i + 1;
        while (j < lines.length && !lines[j].match(/export\s+default\s+function/)) {
          j++;
        }
        i = j - 1; // Will be incremented by the loop
        continue;
      }
      seenFunctions.add(funcName);
    }
    
    newLines.push(line);
  }
  
  if (newLines.length !== lines.length) {
    content = newLines.join('\n');
    modified = true;
  }

  // Add missing component imports
  const needsNavigation = content.includes('<Navigation') && !content.includes('import Navigation');
  const needsFooter = content.includes('<Footer') && !content.includes('import Footer');
  const needsLink = content.includes('<Link') && !content.includes('import Link');
  const needsGlobalErrorBoundary = content.includes('<GlobalErrorBoundary') && !content.includes('import GlobalErrorBoundary');

  if (needsNavigation || needsFooter || needsLink || needsGlobalErrorBoundary) {
    const imports = [];
    
    if (needsGlobalErrorBoundary) {
      imports.push("import GlobalErrorBoundary from '../../components/GlobalErrorBoundary'");
    }
    if (needsNavigation) {
      imports.push("import Navigation from '../../components/Navigation'");
    }
    if (needsFooter) {
      imports.push("import Footer from '../../components/Footer'");
    }
    if (needsLink) {
      imports.push("import Link from 'next/link'");
    }

    if (imports.length > 0) {
      // Find the last import statement and add after it
      const importRegex = /import\s+.*?from\s+['"][^'"]+['"];?\s*$/gm;
      const imports_found = content.match(importRegex);
      
      if (imports_found && imports_found.length > 0) {
        const lastImport = imports_found[imports_found.length - 1];
        const lastImportIndex = content.lastIndexOf(lastImport);
        const insertIndex = lastImportIndex + lastImport.length;
        content = content.slice(0, insertIndex) + '\n' + imports.join('\n') + content.slice(insertIndex);
        modified = true;
      } else {
        // No imports found, add at the top after React import
        const reactImportRegex = /import\s+React[^;]*;?\s*/;
        const reactMatch = content.match(reactImportRegex);
        if (reactMatch) {
          const insertIndex = reactMatch.index + reactMatch[0].length;
          content = content.slice(0, insertIndex) + imports.join('\n') + '\n' + content.slice(insertIndex);
          modified = true;
        } else {
          // No React import either, add at the very beginning
          content = imports.join('\n') + '\n\n' + content;
          modified = true;
        }
      }
    }
  }

  // Add missing icon imports
  const needsArrowRight = content.includes('<ArrowRight') && !content.includes('ArrowRight');
  const needsCheckCircle = content.includes('<CheckCircle') && !content.includes('CheckCircle');
  const needsLucideIcons = needsArrowRight || needsCheckCircle;

  if (needsLucideIcons) {
    const lucideImports = [];
    if (needsArrowRight) lucideImports.push('ArrowRight');
    if (needsCheckCircle) lucideImports.push('CheckCircle');
    
    // Add other common icons that might be needed
    const commonIcons = ['Wifi', 'Zap', 'Shield', 'Cpu', 'Globe', 'Smartphone', 'Database', 'Cloud', 'Target', 'BarChart', 'Brain', 'TrendingUp'];
    commonIcons.forEach(icon => {
      if (content.includes(`<${icon}`) && !content.includes(icon)) {
        lucideImports.push(icon);
      }
    });

    if (lucideImports.length > 0) {
      const importStatement = `import { ${lucideImports.join(', ')} } from "lucide-react";`;
      
      // Find the last import statement and add after it
      const importRegex = /import\s+.*?from\s+['"][^'"]+['"];?\s*$/gm;
      const imports_found = content.match(importRegex);
      
      if (imports_found && imports_found.length > 0) {
        const lastImport = imports_found[imports_found.length - 1];
        const lastImportIndex = content.lastIndexOf(lastImport);
        const insertIndex = lastImportIndex + lastImport.length;
        content = content.slice(0, insertIndex) + '\n' + importStatement + content.slice(insertIndex);
        modified = true;
      }
    }
  }

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed: ${file}`);
    fixedCount++;
  }
});

console.log(`\nFixed ${fixedCount} files out of ${files.length} total files.`);