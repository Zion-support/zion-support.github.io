import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix ErrorBoundary import paths
function fixErrorBoundaryImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix incorrect ErrorBoundary import paths
    if (content.includes("import ErrorBoundary from '../components/ErrorBoundary';")) {
      // Check if we're in a subdirectory that needs a different path
      const relativePath = path.relative(path.dirname(filePath), '/workspace/app/components/ErrorBoundary.tsx');
      const correctImport = `import ErrorBoundary from '${relativePath.replace('.tsx', '')}';`;
      content = content.replace(
        "import ErrorBoundary from '../components/ErrorBoundary';",
        correctImport
      );
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed ErrorBoundary import in: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
  return false;
}

// Function to fix component prop types
function fixComponentProps(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Add missing prop type definitions
    const propTypeFixes = [
      {
        pattern: /interface\s+(\w+)Props\s*\{/g,
        replacement: 'interface $1Props {\n  className?: string;\n  children?: React.ReactNode;'
      }
    ];

    propTypeFixes.forEach(({ pattern, replacement }) => {
      if (pattern.test(content)) {
        content = content.replace(pattern, replacement);
        modified = true;
      }
    });

    // Fix missing Head import issues
    if (content.includes('Cannot find name \'Head\'') || content.includes('<Head>')) {
      if (!content.includes("import Head from 'next/head';")) {
        content = "import Head from 'next/head';\n" + content;
        modified = true;
      }
    }

    // Fix unused error parameter
    if (content.includes('error: Error): ErrorBoundaryState {')) {
      content = content.replace(
        'error: Error): ErrorBoundaryState {',
        '_error: Error): ErrorBoundaryState {'
      );
      modified = true;
    }

    // Fix layout.tsx issues
    if (filePath.includes('layout.tsx')) {
      // Remove unused imports
      content = content.replace(/import\s+{\s*Inter\s*}\s+from\s+['"]next\/font\/google['"];\s*\n/g, '');
      content = content.replace(/import\s+{\s*Metadata\s*}\s+from\s+['"]next['"];\s*\n/g, '');
      
      // Fix inter variable reference
      content = content.replace(/className=\{inter\.className\}/g, 'className="font-sans"');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed component props in: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
  return false;
}

// Main function to fix all remaining issues
async function fixRemainingIssues() {
  const patterns = [
    'app/**/*.tsx',
    'components/**/*.tsx'
  ];
  
  let allFiles = [];
  for (const pattern of patterns) {
    const files = await glob(pattern, { cwd: process.cwd() });
    allFiles = allFiles.concat(files);
  }
  
  console.log(`Found ${allFiles.length} files to check for remaining issues...`);
  
  let fixedCount = 0;
  allFiles.forEach(file => {
    if (fixErrorBoundaryImports(file) || fixComponentProps(file)) {
      fixedCount++;
    }
  });
  
  console.log(`Fixed ${fixedCount} files`);
}

// Run the fix
fixRemainingIssues().catch(console.error);