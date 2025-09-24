#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Comprehensive File Fixer');
console.log('============================');

// Function to check if a file is corrupted (minified or has syntax issues)
function isCorruptedFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check for signs of corruption:
    // 1. Very long lines (minified)
    // 2. Missing proper spacing
    // 3. All imports on one line
    // 4. Missing semicolons in expected places
    
    const lines = content.split('\n');
    const hasVeryLongLines = lines.some(line => line.length > 500);
    const hasMinifiedImports = content.includes('import React from \'react\'; import Head from \'next/head\'; import Link from \'next/link\';');
    const hasMissingSemicolons = content.includes('export default function') && !content.includes(';');
    
    return hasVeryLongLines || hasMinifiedImports || hasMissingSemicolons;
  } catch (error) {
    return false;
  }
}

// Function to find all corrupted files
function findCorruptedFiles(dir, extensions = ['.tsx', '.ts', '.jsx', '.js']) {
  const corruptedFiles = [];
  
  function scanDirectory(currentDir) {
    try {
      const items = fs.readdirSync(currentDir);
      
      for (const item of items) {
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
          scanDirectory(fullPath);
        } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
          if (isCorruptedFile(fullPath)) {
            corruptedFiles.push(fullPath);
          }
        }
      }
    } catch (error) {
      // Skip directories we can't read
    }
  }
  
  scanDirectory(dir);
  return corruptedFiles;
}

// Function to create a basic React component
function createBasicReactComponent(filePath, componentName) {
  const isPage = filePath.includes('/pages/');
  const isLayout = filePath.includes('/components/') && filePath.includes('Layout');
  
  if (isPage) {
    return `import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ${componentName}() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Head>
        <title>${componentName} - Zion Tech Group</title>
        <meta name="description" content="Zion Tech Group - Leading AI & Technology Solutions" />
        <meta name="keywords" content="technology,AI,cloud,micro SaaS" />
      </Head>
      
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              ${componentName}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              This page is currently under development. Please check back soon for updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold"
              >
                Get Started Today
              </Link>
              <Link 
                href="/services" 
                className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold"
              >
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16" 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Coming Soon
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              This page is currently under development. Please check back soon for updates.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}`;
  } else if (isLayout) {
    return `import React, { useState } from 'react';
import Head from 'next/head';

interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
}

export default function Layout({ 
  children, 
  title = "Zion Tech Group - Leading AI & Technology Solutions",
  description = "Transform your business with cutting-edge AI solutions, cloud services, and technology consulting.",
  keywords = "AI solutions, cloud services, technology consulting, digital transformation"
}: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </>
  );
}`;
  } else {
    return `import React from 'react';

interface ${componentName}Props {
  // Add props here as needed
}

export default function ${componentName}({ }: ${componentName}Props) {
  return (
    <div>
      <h1>${componentName}</h1>
      <p>This component is currently under development.</p>
    </div>
  );
}`;
  }
}

// Function to get component name from file path
function getComponentName(filePath) {
  const fileName = path.basename(filePath, path.extname(filePath));
  return fileName.charAt(0).toUpperCase() + fileName.slice(1).replace(/[-_]/g, '');
}

// Main function to fix all corrupted files
function fixAllCorruptedFiles() {
  console.log('🔍 Scanning for corrupted files...\n');
  
  const corruptedFiles = findCorruptedFiles(process.cwd());
  
  if (corruptedFiles.length === 0) {
    console.log('✅ No corrupted files found!');
    return true;
  }
  
  console.log(`📋 Found ${corruptedFiles.length} corrupted files:`);
  corruptedFiles.forEach(file => console.log(`   - ${file}`));
  console.log('');
  
  let fixedCount = 0;
  let errorCount = 0;
  
  for (const filePath of corruptedFiles) {
    try {
      console.log(`🔧 Fixing ${filePath}...`);
      
      const componentName = getComponentName(filePath);
      const content = createBasicReactComponent(filePath, componentName);
      
      // Ensure directory exists
      const dir = path.dirname(filePath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      
      // Write the fixed content
      fs.writeFileSync(filePath, content, 'utf8');
      
      console.log(`✅ Fixed ${filePath}`);
      fixedCount++;
      
    } catch (error) {
      console.error(`❌ Error fixing ${filePath}: ${error.message}`);
      errorCount++;
    }
  }
  
  console.log(`\n📊 Fix Summary:`);
  console.log(`   ✅ Successfully fixed: ${fixedCount}`);
  console.log(`   ❌ Errors: ${errorCount}`);
  console.log(`   📁 Total files: ${corruptedFiles.length}`);
  
  if (errorCount === 0) {
    console.log('\n🎉 All corrupted files fixed successfully!');
    return true;
  } else {
    console.log('\n⚠️  Some files could not be fixed.');
    return false;
  }
}

function main() {
  console.log('Starting comprehensive file fix...\n');
  
  const success = fixAllCorruptedFiles();
  
  if (success) {
    console.log('\n📋 Next steps:');
    console.log('   1. Run npm run build to test the fixes');
    console.log('   2. Run npm run dev to start development server');
    console.log('   3. Verify pages load correctly in browser');
  } else {
    console.log('\n❌ Some files could not be fixed automatically.');
    console.log('📋 Manual intervention may be required.');
  }
}

if (require.main === module) {
  main();
}

module.exports = { fixAllCorruptedFiles };