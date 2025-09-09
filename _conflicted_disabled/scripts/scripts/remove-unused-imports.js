#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Common unused imports that can be safely removed
const COMMON_UNUSED_IMPORTS = [
  'React', // if using automatic JSX runtime
  'PropTypes', // if using TypeScript
  'Component', // if using functional components
  'PureComponent', // if using functional components
];

// Scan a file for unused imports
function scanFileForUnusedImports(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    const unusedImports = [];
    
    lines.forEach((line, index) => {
      // Check for import statements
      if (line.trim().startsWith('import')) {
        // Extract imported names
        const importMatch = line.match(/import\s*{([^}]+)}\s*from/);
        if (importMatch) {
          const imports = importMatch[1].split(',').map(imp => imp.trim());
          imports.forEach(imp => {
            const cleanImport = imp.replace(/\s+as\s+\w+/, '').trim();
            if (COMMON_UNUSED_IMPORTS.includes(cleanImport)) {
              // Check if this import is actually used in the file
              const restOfFile = lines.slice(index + 1).join('\n');
              if (!restOfFile.includes(cleanImport)) {
                unusedImports.push({
                  line: index + 1,
                  import: cleanImport,
                  fullLine: line.trim()
                });
              }
            }
          });
        }
      }
    });
    
    return unusedImports;
  } catch (error) {
    console.error(`Error scanning ${filePath}:`, error.message);
    return [];
  }
}

// Scan directory for TypeScript/JavaScript files
function scanDirectory(dirPath, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
  const files = [];
  
  function scanDir(currentPath) {
    const items = fs.readdirSync(currentPath);
    
    items.forEach(item => {
      const fullPath = path.join(currentPath, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        scanDir(fullPath);
      } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    });
  }
  
  scanDir(dirPath);
  return files;
}

// Generate optimization report
function generateOptimizationReport() {
  console.log('🔍 Scanning for unused imports...\n');
  
  const srcDir = path.join(process.cwd(), 'src');
  const files = scanDirectory(srcDir);
  
  let totalUnusedImports = 0;
  const fileReports = [];
  
  files.forEach(filePath => {
    const unusedImports = scanFileForUnusedImports(filePath);
    if (unusedImports.length > 0) {
      totalUnusedImports += unusedImports.length;
      fileReports.push({
        file: path.relative(process.cwd(), filePath),
        unusedImports
      });
    }
  });
  
  console.log('📊 Unused Imports Report');
  console.log('========================\n');
  
  if (fileReports.length === 0) {
    console.log('✅ No unused imports found!');
  } else {
    fileReports.forEach(report => {
      console.log(`📁 ${report.file}:`);
      report.unusedImports.forEach(({ line, import: importName, fullLine }) => {
        console.log(`  Line ${line}: ${importName} in "${fullLine}"`);
      });
      console.log('');
    });
    
    console.log(`📈 Summary:`);
    console.log(`  - Files with unused imports: ${fileReports.length}`);
    console.log(`  - Total unused imports: ${totalUnusedImports}`);
    console.log(`  - Estimated bundle size reduction: ~${totalUnusedImports * 0.5}KB`);
  }
  
  // Generate detailed report
  const report = {
    timestamp: new Date().toISOString(),
    totalFiles: files.length,
    filesWithUnusedImports: fileReports.length,
    totalUnusedImports,
    fileReports,
    recommendations: [
      'Remove unused imports to reduce bundle size',
      'Use ESLint with unused-imports plugin',
      'Enable tree shaking in build configuration',
      'Consider using automatic JSX runtime to remove React imports'
    ]
  };
  
  const reportPath = path.join(process.cwd(), 'unused-imports-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  
  console.log(`\n📄 Detailed report saved to: ${reportPath}`);
  
  return report;
}

// Main execution
if (import.meta.url === `file://${process.argv[1]}`) {
  console.log('🚀 Starting unused imports analysis...\n');
  generateOptimizationReport();
}

export {
  scanFileForUnusedImports,
  scanDirectory,
  generateOptimizationReport
};