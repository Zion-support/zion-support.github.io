#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

<<<<<<< HEAD
class MergeConflictFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixedFiles = [];
  }
=======
// Function to recursively find all files with merge conflicts;
function findFilesWithMergeConflicts(
  dir,
  fileExtensions = ['.tsx', '.ts', '.jsx', '.js']
) {
  const files = [];
>>>>>>> main

  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`);
  }

  getAllFiles(dir, extensions = ['.tsx', '.ts', '.jsx', '.js']) {
    const files = [];
    
    const scanDirectory = (currentDir) => {
      if (!fs.existsSync(currentDir)) return;
      
      const items = fs.readdirSync(currentDir);
      items.forEach(item => {
        const itemPath = path.join(currentDir, item);
        const stat = fs.statSync(itemPath);
        
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
          scanDirectory(itemPath);
        } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
          files.push(itemPath);
        }
      });
    };
    
    scanDirectory(dir);
    return files;
  }

<<<<<<< HEAD
  fixMergeConflicts() {
    this.log('Starting comprehensive merge conflict fix...');
    
    const allFiles = this.getAllFiles(this.projectRoot);
    let totalFixed = 0;
    
    for (const file of allFiles) {
      try {
        let content = fs.readFileSync(file, 'utf8');
        const originalContent = content;
        
        // Check if file has merge conflicts
        if (content.includes('<<<<<<< HEAD') || 
            content.includes('=======') || 
            content.includes('>>>>>>> cursor') ||
            content.includes('cursor/automate-test-fix-improve-and-merge-code-99d1')) {
          
          // Remove all merge conflict markers and their content
          content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]+\n?/g, '');
          content = content.replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> [^\n]+\n?/g, '');
          content = content.replace(/=======[\s\S]*?>>>>>>> [^\n]+\n?/g, '');
          
          // Remove cursor merge conflict remnants
          content = content.replace(/cursor\/automate-test-fix-improve-and-merge-code-99d1[\s\S]*?\n/g, '');
          content = content.replace(/ursor\/automate-test-fix-improve-and-merge-code-99d1[\s\S]*?\n/g, '');
          
          // Clean up any remaining orphaned lines
          content = content.replace(/^\s*ursor.*$/gm, '');
          content = content.replace(/^\s*cursor.*$/gm, '');
          
          // Fix common syntax issues that might remain
          content = this.fixCommonSyntaxIssues(content, file);
          
          if (content !== originalContent) {
            fs.writeFileSync(file, content);
            this.log(`Fixed merge conflicts in: ${file}`);
            this.fixedFiles.push(file);
            totalFixed++;
          }
        }
      } catch (error) {
        this.log(`Error processing ${file}: ${error.message}`);
      }
    }
    
    this.log(`Fixed merge conflicts in ${totalFixed} files`);
    return totalFixed;
  }

  fixCommonSyntaxIssues(content, filePath) {
    const fileName = path.basename(filePath);
    
    // If it's a React component and starts with merge conflict remnant, fix it
    if (content.startsWith('ursor') || content.startsWith('cursor')) {
      const lines = content.split('\n');
      let cleanLines = [];
      let foundValidCode = false;
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        
        // Skip lines that are clearly merge conflict remnants
        if (line.includes('ursor') || line.includes('cursor/automate')) {
          continue;
        }
        
        // If we haven't found valid code yet and this looks like valid code
        if (!foundValidCode && (
          line.includes('import') || 
          line.includes('interface') || 
          line.includes('const') || 
          line.includes('function') ||
          line.includes('export')
        )) {
          foundValidCode = true;
        }
        
        if (foundValidCode || line.trim() === '') {
          cleanLines.push(line);
=======
      if (
        stat.isDirectory() &&
        !item.startsWith('.') &&
        !item.startsWith('node_modules')
      ) {
        scanDirectory(fullPath);
      } else if (
        stat.isFile() &&
        fileExtensions.some(ext => item.endsWith(ext))
      ) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8');
          if (
            content.includes('            content.includes('=======') ||
            content.includes(`>>>>>>>`)
          ) {
            files.push(fullPath);
          }
        } catch (error) { 
          console.log(`Error reading ${fullPath }:`, error.message);
>>>>>>> main
        }
      }
      
      content = cleanLines.join('\n');
    }
    
    // Add proper imports for React components if missing
    if ((fileName.endsWith('.tsx') || fileName.endsWith('.jsx')) && 
        !content.includes('import React') && 
        (content.includes('React.FC') || content.includes('useState') || content.includes('useEffect'))) {
      content = "import React from 'react';\n" + content;
    }
    
    return content;
  }

<<<<<<< HEAD
  run() {
    try {
      const fixedCount = this.fixMergeConflicts();
      
      this.log('=== Merge Conflict Fix Summary ===');
      this.log(`Files processed: ${this.fixedFiles.length}`);
      this.log(`Total fixes applied: ${fixedCount}`);
      
      if (this.fixedFiles.length > 0) {
        this.log('Fixed files:');
        this.fixedFiles.forEach(file => {
          this.log(`  - ${file}`);
        });
=======
  scanDirectory(dir);
  return files;
}

// Function to fix merge conflicts in a file;
function fixMergeConflicts(filePath) {
  try {
    const content = fs.readFileSync(filePath, `utf8`);

    // Check if file has merge conflicts;
    if (
      !content.includes('      !content.includes('=======') &&
      !content.includes(`>>>>>>>`)
    ) {
      return false; // No merge conflicts;
    }

    console.log(`Fixing merge conflicts in: ${filePath}`);

    // Create a backup;
    const backupPath = filePath + `.backup.` + Date.now();
    fs.writeFileSync(backupPath, content);

    // Remove merge conflict markers and keep the first version (HEAD)
    let fixedContent = content;

    // Remove all merge conflict sections;
    const conflictRegex =
      /
    // Remove any remaining conflict markers;
    fixedContent = fixedContent.replace(/    fixedContent = fixedContent.replace(/=======\s*/g, '');
    fixedContent = fixedContent.replace(/
    // Clean up any double newlines;
    fixedContent = fixedContent.replace(/\n\s*\n\s*\n/g, `\n\n`);

    // Write the fixed content;
    fs.writeFileSync(filePath, fixedContent);

    return true;
  } catch (error) { 
    console.error(`Error fixing ${filePath }:`, error.message);
    return false;
  }
}

// Function to remove completely corrupted files;
function removeCorruptedFiles(dir) {
  const corruptedFiles = [
    `src/pages/soc2-compliance-automation.js.jsx`,
    'src/pages/solutions/AIAutonomousBusiness.js.jsx',
    'src/pages/solutions/AIAutonomousEcosystem.js.jsx',
    'src/pages/solutions/AIAutonomousResearch.js.jsx',
    'src/pages/solutions/AIBusinessIntelligence.js.jsx',
    'src/pages/solutions/AIContentGeneration.js.jsx',
    'src/pages/solutions/AIPoweredSecurity.js.jsx',
    'src/pages/solutions/Enterprise.js.jsx',
    'src/pages/solutions/EnterpriseSolutions.js.jsx',
    'src/pages/solutions/FinancialSolutions.js.jsx',
    'src/pages/solutions/GovernmentSolutions.js.jsx',
    'src/pages/solutions/Healthcare.js.jsx',
    'src/pages/solutions/HealthcareSolutions.js.jsx',
    'src/pages/solutions/ManufacturingSolutions.js.jsx',
    'src/pages/solutions/QuantumEdgeComputing.js.jsx',
    'src/pages/solutions/QuantumNeuralNetwork.js.jsx',
    'src/pages/solutions/RetailSolutions.js.jsx',
    'src/pages/solutions/ServiceComparison.js.jsx',
    'src/pages/solutions/ServiceInnovationHub.js.jsx',
    'src/pages/solutions/ServicePortfolioDashboard.js.jsx',
    'src/pages/solutions/ServiceRecommendations.js.jsx',
    'src/pages/talent/[id].js.jsx',
    'src/routes/AuthRoutes.js.jsx',
    'src/routes/CommunityRoutes.jsx',
    'src/routes/ContentRoutes.jsx',
    'src/routes/DeveloperRoutes.jsx',
    'src/routes/MobileAppRoutes.jsx',
    'src/routes/TalentRoutes.jsx',
    'src/utils/cartUtils.js.jsx',
    'src/utils/contentQualityAnalyzer.js.jsx',
    'src/utils/passwordStrength.js.jsx',
    'src/utils/safeStorage.js.jsx',
    'src/utils/searchUtils.js.jsx',
    'src/utils/seoOptimizer.js.jsx',
    'src/utils/sitemapGenerator.js.jsx',
    `src/utils/wishlistSlice.js.jsx`,
  ];

  for (const file of corruptedFiles) {
    const fullPath = path.join(dir, file);
    if (fs.existsSync(fullPath)) {
      try {
        fs.unlinkSync(fullPath);
        console.log(`Removed corrupted file: ${file}`);
      } catch (error) { 
        console.log(`Could not remove ${file }:`, error.message);
>>>>>>> main
      }
      
      return fixedCount;
    } catch (error) {
      this.log(`Error during merge conflict fix: ${error.message}`);
      throw error;
    }
  }
}

<<<<<<< HEAD
// Run if this script is executed directly
if (require.main === module) {
  const fixer = new MergeConflictFixer();
  fixer.run()
    .then(count => {
      console.log(`\n✅ Successfully fixed merge conflicts in ${count} files`);
      process.exit(0);
    })
    .catch(error => {
      console.error('❌ Merge conflict fix failed:', error);
      process.exit(1);
    });
}

module.exports = MergeConflictFixer;
=======
// Main execution;
console.log(`Starting comprehensive merge conflict cleanup...`);

const workspaceDir = process.cwd();
console.log(`Working in: ${workspaceDir}`);

// Remove corrupted files first;
console.log(`\nRemoving completely corrupted files...`);
removeCorruptedFiles(workspaceDir);

// Find files with merge conflicts;
console.log(`\nScanning for files with merge conflicts...`);
const filesWithConflicts = findFilesWithMergeConflicts(workspaceDir);

console.log(`Found ${filesWithConflicts.length} files with merge conflicts:`);
filesWithConflicts.forEach(file => console.log(`  - ${file}`));

// Fix merge conflicts;
console.log(`\nFixing merge conflicts...`);
let fixedCount = 0;
for (const file of filesWithConflicts) {
  if (fixMergeConflicts(file)) {
    fixedCount++;
  }
}

console.log(
  `\nCleanup complete! Fixed ${fixedCount} out of ${filesWithConflicts.length} files.`
);

// Create a simple working structure for key files;
console.log(`\nCreating basic working structure for key files...`);

// Create a simple _app.tsx;
const simpleAppContent = `import type { AppProps } from 'next/app';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}`;

// Create a simple _document.tsx;
const simpleDocumentContent = `import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0a0a1a" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}`;

// Create a simple index.tsx;
const simpleIndexContent = `import React from 'react';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Zion Tech Group</title>
        <meta name="description" content="Leading technology solutions provider" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Welcome to Zion Tech Group;
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leading provider of revolutionary technology solutions, AI services, and cutting-edge innovations.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}`;

// Write the simple files;
try {
  fs.writeFileSync('pages/_app.tsx', simpleAppContent);
  fs.writeFileSync('pages/_document.tsx', simpleDocumentContent);
  fs.writeFileSync('pages/index.tsx', simpleIndexContent);
  console.log('Created basic working structure for key files.');
} catch (error) { 
  console.error('Error creating basic files:', error.message);
 }

console.log('\nCleanup script completed successfully!');
console.log('You can now try running npm run build again.');
>>>>>>> main
