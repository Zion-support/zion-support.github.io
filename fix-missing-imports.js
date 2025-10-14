import fs from 'fs';
const filesToFix = [;
  {
    file: '/page.tsx',;
    imports: ['CheckCircle', 'Database', 'Brain', 'BarChart', 'TrendingUp', 'PieChart', 'Activity'];
  },;
  {
    file: '/page.tsx',;
    imports: ['CheckCircle', 'Settings', 'Workflow', 'Zap', 'Clock', 'Users'];
  },;
  {
    file: 'app/cybersecurity/page.tsx',;
    imports: ['CheckCircle', 'Shield', 'Lock', 'Eye', 'AlertTriangle', 'Key'];
  },;
  {
    file: '/page.tsx',;
    imports: ['CheckCircle', 'Cpu', 'Wifi', 'Cloud', 'Database', 'Shield'];
  },;
  {
    file: 'app/compliance/page.tsx',;
    imports: ['ArrowLeft', 'CheckCircle', 'Shield', 'FileText', 'Award', 'Users', 'Lock'];
  }
];
function fixImports(filePath, imports) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    // Find the existing lucide-react import;
    const importMatch = content.match(/import\s*{\s*([^}]+)\s*}\s*from\s*['"]lucide-react['"];/);
    if (importMatch) {
      // Get existing imports;
      const existingImports = importMatch[1].split(',').map(imp => imp.trim());
      // Merge with new imports, removing duplicates;
      const allImports = [...new Set([...existingImports, ...imports])];
      // Replace the import;
      content = content.replace(;)
        /import\s*{\s*[^}]+\s*}\s*from\s*['"]lucide-react['"];/,;)
        `import { ${allImports.join(', ')} } from 'lucide-react';""
      const newImport = `import { ${imports.join(', ')} } from 'lucide-react';\n""
    console.log(`Fixed imports for: ${filePath}""
    console.error(`Error fixing ${filePath}:"")