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

  // Fix GlobalErrorBoundary import
  if (content.includes("from '../components/GlobalErrorBoundary'") || 
      content.includes('from "../components/GlobalErrorBoundary"')) {
    // Already correct
  } else if (content.includes("from '../components/ErrorBoundary'") || 
             content.includes('from "../components/ErrorBoundary"')) {
    content = content.replace(
      /from ['"]\.\.\/components\/ErrorBoundary['"]/g,
      "from '../components/GlobalErrorBoundary'"
    );
    modified = true;
  }

  // Fix ErrorBoundary usage to GlobalErrorBoundary
  if (content.includes('<ErrorBoundary>') || content.includes('</ErrorBoundary>')) {
    content = content.replace(/<ErrorBoundary>/g, '<GlobalErrorBoundary>');
    content = content.replace(/<\/ErrorBoundary>/g, '</GlobalErrorBoundary>');
    modified = true;
  }

  // Add missing imports for common icons if they're used but not imported
  const needsArrowRight = content.includes('<ArrowRight') && !content.includes('ArrowRight');
  const needsCheckCircle = content.includes('<CheckCircle') && !content.includes('CheckCircle');
  const needsLucideIcons = needsArrowRight || needsCheckCircle;

  if (needsLucideIcons) {
    const lucideImports = [];
    if (needsArrowRight) lucideImports.push('ArrowRight');
    if (needsCheckCircle) lucideImports.push('CheckCircle');
    
    // Add other common icons that might be needed
    const commonIcons = ['Wifi', 'Zap', 'Shield', 'Cpu', 'Globe', 'Smartphone', 'Database', 'Cloud'];
    commonIcons.forEach(icon => {
      if (content.includes(`<${icon}`) && !content.includes(icon)) {
        lucideImports.push(icon);
      }
    });

    if (lucideImports.length > 0) {
      const importStatement = `import { ${lucideImports.join(', ')} } from "lucide-react";`;
      
      // Find the last import statement and add after it
      const importRegex = /import\s+.*?from\s+['"][^'"]+['"];?\s*$/gm;
      const imports = content.match(importRegex);
      
      if (imports && imports.length > 0) {
        const lastImport = imports[imports.length - 1];
        const lastImportIndex = content.lastIndexOf(lastImport);
        const insertIndex = lastImportIndex + lastImport.length;
        content = content.slice(0, insertIndex) + '\n' + importStatement + content.slice(insertIndex);
        modified = true;
      } else {
        // No imports found, add at the top after React import
        const reactImportRegex = /import\s+React[^;]*;?\s*/;
        const reactMatch = content.match(reactImportRegex);
        if (reactMatch) {
          const insertIndex = reactMatch.index + reactMatch[0].length;
          content = content.slice(0, insertIndex) + importStatement + '\n' + content.slice(insertIndex);
          modified = true;
        }
      }
    }
  }

  // Add missing data arrays if they're referenced but not defined
  if (content.includes('features.map') && !content.includes('const features =')) {
    const featuresArray = `const features = [
  {
    icon: Globe,
    title: "Feature 1",
    description: "Description for feature 1",
    benefits: ["Benefit 1", "Benefit 2", "Benefit 3"]
  },
  {
    icon: Smartphone,
    title: "Feature 2", 
    description: "Description for feature 2",
    benefits: ["Benefit 1", "Benefit 2", "Benefit 3"]
  }
];`;

    // Insert before the main component function
    const functionMatch = content.match(/function\s+\w+\(/);
    if (functionMatch) {
      const insertIndex = functionMatch.index;
      content = content.slice(0, insertIndex) + featuresArray + '\n\n' + content.slice(insertIndex);
      modified = true;
    }
  }

  if (content.includes('benefits.map') && !content.includes('const benefits =')) {
    const benefitsArray = `const benefits = [
  "Benefit 1: Description of the first benefit",
  "Benefit 2: Description of the second benefit", 
  "Benefit 3: Description of the third benefit",
  "Benefit 4: Description of the fourth benefit"
];`;

    // Insert before the main component function
    const functionMatch = content.match(/function\s+\w+\(/);
    if (functionMatch) {
      const insertIndex = functionMatch.index;
      content = content.slice(0, insertIndex) + benefitsArray + '\n\n' + content.slice(insertIndex);
      modified = true;
    }
  }

  // Remove unused imports
  const lines = content.split('\n');
  const newLines = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Check if this is an import line
    if (line.trim().startsWith('import ')) {
      // Extract the imported names
      const importMatch = line.match(/import\s+(?:{[^}]+}|\w+)\s+from/);
      if (importMatch) {
        const importPart = line.substring(0, line.indexOf(' from'));
        const importedNames = importPart.replace(/import\s+/, '').replace(/,\s*$/, '');
        
        // Check if any of these imported names are actually used in the file
        const isUsed = importedNames.split(',').some(name => {
          const cleanName = name.trim().replace(/[{}]/g, '');
          return content.includes(cleanName) && !content.includes(`import ${cleanName}`);
        });
        
        if (!isUsed && !line.includes('React') && !line.includes('GlobalErrorBoundary')) {
          console.log(`Removing unused import: ${line.trim()}`);
          modified = true;
          continue; // Skip this line
        }
      }
    }
    
    newLines.push(line);
  }
  
  if (newLines.length !== lines.length) {
    content = newLines.join('\n');
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed: ${file}`);
    fixedCount++;
  }
});

console.log(`\nFixed ${fixedCount} files out of ${files.length} total files.`);