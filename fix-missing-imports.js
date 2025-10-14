import fs from 'fs';

const filesToFix = [
  {
    file: 'app/ai-data-analytics/page.tsx',
    imports: ['CheckCircle', 'Database', 'Brain', 'BarChart', 'TrendingUp', 'PieChart', 'Activity']
  },
  {
    file: 'app/ai-workflow-automation/page.tsx',
    imports: ['CheckCircle', 'Settings', 'Workflow', 'Zap', 'Clock', 'Users']
  },
  {
    file: 'app/cybersecurity/page.tsx',
    imports: ['CheckCircle', 'Shield', 'Lock', 'Eye', 'AlertTriangle', 'Key']
  },
  {
    file: 'app/iot-edge-computing/page.tsx',
    imports: ['CheckCircle', 'Cpu', 'Wifi', 'Cloud', 'Database', 'Shield']
  },
  {
    file: 'app/compliance/page.tsx',
    imports: ['ArrowLeft', 'CheckCircle', 'Shield', 'FileText', 'Award', 'Users', 'Lock']
  }
];

function fixImports(filePath, imports) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Find the existing lucide-react import
    const importMatch = content.match(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];/);
    
    if (importMatch) {
      // Get existing imports
      const existingImports = importMatch[1].split(',').map(imp => imp.trim());
      
      // Merge with new imports, removing duplicates
      const allImports = [...new Set([...existingImports, ...imports])];
      
      // Replace the import
      content = content.replace(
        /import\s*{\s*[^}]+\s*}\s*from\s*['"]lucide-react['"];/,
        `import { ${allImports.join(', ')} } from 'lucide-react';`
      );
    } else {
      // Add new import if none exists
      const newImport = `import { ${imports.join(', ')} } from 'lucide-react';\n`;
      content = newImport + content;
    }
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed imports for: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(({ file, imports }) => fixImports(file, imports));
console.log('All missing imports fixed!');