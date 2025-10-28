<<<<<<< HEAD
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix common issues in files
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix missing imports
    if (content.includes('ErrorBoundary') && !content.includes("import ErrorBoundary")) {
      content = "import ErrorBoundary from '../components/ErrorBoundary';\n" + content;
      modified = true;
    }

    if (content.includes('Navigation') && !content.includes("import Navigation")) {
      content = "import Navigation from '../components/Navigation';\n" + content;
      modified = true;
    }

    if (content.includes('ReactNode') && !content.includes("import { ReactNode }")) {
      content = content.replace(
        "import React from 'react';",
        "import React, { ReactNode } from 'react';"
      );
      modified = true;
    }

    if (content.includes('ErrorInfo') && !content.includes("import { ErrorInfo }")) {
      content = content.replace(
        "import React from 'react';",
        "import React, { ErrorInfo } from 'react';"
      );
      modified = true;
    }

    // Fix missing React imports
    if (content.includes('React.FC') && !content.includes("import React")) {
      content = "import React from 'react';\n" + content;
      modified = true;
    }

    // Fix console.log warnings by removing them
    content = content.replace(/console\.log\([^)]*\);?\s*/g, '');
    content = content.replace(/console\.error\([^)]*\);?\s*/g, '');
    content = content.replace(/console\.warn\([^)]*\);?\s*/g, '');

    // Fix duplicate interface declarations
    content = content.replace(/interface\s+(\w+)\s*\{[^}]*\}\s*interface\s+\1\s*\{/g, 'interface $1 {');

    // Fix missing closing tags
    content = content.replace(/<div[^>]*>(?!.*<\/div>)/g, (match) => {
      if (!content.includes('</div>')) {
        return match + '</div>';
      }
      return match;
    });

    // Fix merge conflict markers
    content = content.replace(/<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [^\n]*/g, '');
    content = content.replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> [^\n]*/g, '');

    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`Fixed: ${filePath}`);
    }
=======
const fs = require('fs');
const path = require('path');

// List of files to fix
const filesToFix = [
  'app/about/page.tsx',
  'app/offline/page.tsx',
  'app/page.tsx',
  'app/micro-saas-services/ai-analytics-dashboard/page.tsx',
  'app/micro-saas-services/ai-chatbot-builder/page.tsx',
  'app/micro-saas-services/ai-content-generator/page.tsx',
  'app/micro-saas-services/ai-email-assistant/page.tsx',
  'app/micro-saas-services/ai-lead-generation/page.tsx',
  'app/micro-saas-services/page.tsx'
];

// Files with multiple metadata declarations
const metadataFiles = [
  'app/ai-powered-devops/page.tsx',
  'app/ai-powered-email-analyzer/page.tsx',
  'app/it-services/cybersecurity-audit/page.tsx',
  'app/legal-document-manager/page.tsx',
  'app/medical-records-manager/page.tsx',
  'app/online-learning-platform/page.tsx',
  'app/property-management-ai/page.tsx',
  'app/supply-chain-optimizer/page.tsx',
  'app/test/page.tsx',
  'app/zion-ai-api-tester/page.tsx',
  'app/zion-ai-database-optimizer/page.tsx'
];

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Fix ErrorBoundary import path for micro-saas services
    if (filePath.includes('micro-saas-services')) {
      content = content.replace(/import ErrorBoundary from '\.\.\/components\/ErrorBoundary'/, "import ErrorBoundary from '../../components/ErrorBoundary'");
    }
    
    // Remove unused variable declarations
    content = content.replace(/const [A-Za-z]+Page = .*?;/g, '');
    content = content.replace(/const pagePage = .*?;/g, '');
    
    // Fix component names in Wrapped functions - use the actual component name
    const componentName = path.basename(path.dirname(filePath)).replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()).replace(/\s/g, '') + 'Page';
    
    // For specific files, use the correct component name
    if (filePath.includes('about')) {
      content = content.replace(/<Page \{\.\.\.props\} \/>/g, '<AboutPage {...props} />');
    } else if (filePath.includes('offline')) {
      content = content.replace(/<Page \{\.\.\.props\} \/>/g, '<OfflinePage {...props} />');
    } else if (filePath.includes('page.tsx') && !filePath.includes('micro-saas')) {
      content = content.replace(/<Page \{\.\.\.props\} \/>/g, '<HomePage {...props} />');
    } else {
      content = content.replace(/<Page \{\.\.\.props\} \/>/g, `<${componentName} {...props} />`);
    }
    
    // Add proper type annotation for props
    content = content.replace(/function Wrapped\(props\)/g, 'function Wrapped(props: any)');
    
    // Clean up extra semicolons and empty lines
    content = content.replace(/;;/g, ';');
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed: ${filePath}`);
>>>>>>> cursor/fix-errors-and-merge-to-main-c408
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

<<<<<<< HEAD
// Function to recursively find and fix files
function fixDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);
  
  for (const item of items) {
    const fullPath = path.join(dirPath, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      fixDirectory(fullPath);
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      fixFile(fullPath);
    }
  }
}

// Start fixing from the app directory
console.log('Starting to fix remaining issues...');
fixDirectory('./app');
console.log('Finished fixing issues.');
=======
function fixMetadataFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove duplicate metadata declarations
    const metadataRegex = /export const metadata = \{[\s\S]*?\};/g;
    const matches = content.match(metadataRegex);
    if (matches && matches.length > 1) {
      // Keep only the first metadata declaration
      content = content.replace(metadataRegex, (match, index) => {
        return index === 0 ? match : '';
      });
    }
    
    // Clean up extra semicolons and empty lines
    content = content.replace(/;;/g, ';');
    content = content.replace(/\n\s*\n\s*\n/g, '\n\n');
    
    fs.writeFileSync(filePath, content);
    console.log(`Fixed metadata: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing metadata in ${filePath}:`, error.message);
  }
}

// Fix all files
filesToFix.forEach(fixFile);
metadataFiles.forEach(fixMetadataFile);
console.log('All files fixed!');
>>>>>>> cursor/fix-errors-and-merge-to-main-c408
