#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing all syntax errors...');

// Fix AIServices.tsx - fix all missing commas
const aiservicesPath = 'pages/AIServices.tsx';
if (fs.existsSync(aiservicesPath)) {
  let content = fs.readFileSync(aiservicesPath, 'utf8');
  
  // Fix missing comma before features
  content = content.replace(
    /benefits: \[.*?\]\n\s*features: \[/g,
    (match) => {
      if (!match.includes(',')) {
        return match.replace(']\n    features: [', '],\n    features: [');
      }
      return match;
    }
  );
  
  fs.writeFileSync(aiservicesPath, content);
  console.log('✅ Fixed pages/AIServices.tsx');
}

// Fix ai-powered-cybersecurity.tsx
const cybersecurityPath = 'pages/ai-powered-cybersecurity.tsx';
if (fs.existsSync(cybersecurityPath)) {
  let content = fs.readFileSync(cybersecurityPath, 'utf8');
  content = content.replace("import React from 'react',", "import React from 'react';");
  fs.writeFileSync(cybersecurityPath, content);
  console.log('✅ Fixed pages/ai-powered-cybersecurity.tsx');
}

// Fix ai-powered-devops-platform.tsx
const devopsPath = 'pages/ai-powered-devops-platform.tsx';
if (fs.existsSync(devopsPath)) {
  let content = fs.readFileSync(devopsPath, 'utf8');
  content = content.replace("import React from 'react',", "import React from 'react';");
  fs.writeFileSync(devopsPath, content);
  console.log('✅ Fixed pages/ai-powered-devops-platform.tsx');
}

// Fix api-docs.tsx
const apiDocsPath = 'pages/api-docs.tsx';
if (fs.existsSync(apiDocsPath)) {
  let content = fs.readFileSync(apiDocsPath, 'utf8');
  
  // Fix the misplaced import
  content = content.replace(
    / {4}\]\nimport Head from 'next\/head';\n\n\} from 'lucide-react';\nconst apiEndpoints = \[/,
    '    ]\n  } from \'lucide-react\';\n\nimport Head from \'next/head\';\n\nconst apiEndpoints = ['
  );
  
  fs.writeFileSync(apiDocsPath, content);
  console.log('✅ Fixed pages/api-docs.tsx');
}

// Fix api-documentation.tsx
const apiDocPath = 'pages/api-documentation.tsx';
if (fs.existsSync(apiDocPath)) {
  let content = fs.readFileSync(apiDocPath, 'utf8');
  
  // Fix the malformed JSX
  content = content.replace(
    / {4}<Layout>;\s*<Head>;\s*<title>API Documentation \| Zion Tech Group<\/title>;\s*<link;\s*rel='canonical'\s*'\s*href='https: \/\/ziontechgroup && ziontechgroup.com\/api-documentation'/,
    `    <Layout>
      <Head>
        <title>API Documentation | Zion Tech Group</title>
        <link
          rel='canonical'
          href='https://ziontechgroup.com/api-documentation'
        />`
  );
  
  fs.writeFileSync(apiDocPath, content);
  console.log('✅ Fixed pages/api-documentation.tsx');
}

// Create a comprehensive script to fix all pages with syntax errors
const pagesDir = 'pages';
if (fs.existsSync(pagesDir)) {
  const files = fs.readdirSync(pagesDir);
  
  files.forEach(file => {
    if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      const filePath = path.join(pagesDir, file);
      try {
        let content = fs.readFileSync(filePath, 'utf8');
        let modified = false;
        
        // Fix common syntax errors
        if (content.includes("import React from 'react',")) {
          content = content.replace("import React from 'react',", "import React from 'react';");
          modified = true;
        }
        
        if (content.includes("import React from 'react';\nimport React from 'react';")) {
          content = content.replace("import React from 'react';\nimport React from 'react';", "import React from 'react';");
          modified = true;
        }
        
        // Fix missing semicolons in imports
        content = content.replace(/import\s+.*?from\s+['"][^'"]+['"]\s*(?=\n|$)/g, (match) => {
          if (!match.endsWith(';')) {
            return match + ';';
          }
          return match;
        });
        
        if (modified) {
          fs.writeFileSync(filePath, content);
          console.log(`✅ Fixed pages/${file}`);
        }
      } catch (error) {
        console.log(`⚠️  Could not fix pages/${file}: ${error.message}`);
      }
    }
  });
}

console.log('🎉 All syntax errors fixed!');