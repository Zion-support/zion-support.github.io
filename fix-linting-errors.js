#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

console.log('🔧 Starting comprehensive linting error fixes...');

// Files to fix
const filesToFix = [
  'src/main.tsx',
  'src/pages/AboutPage.tsx',
  'src/pages/ContactPage.tsx',
  'src/pages/HomePage.tsx',
  'src/pages/NotFoundPage.tsx',
  'src/pages/PricingPage.tsx',
  'src/pages/ServicesPage.tsx',
  'src/pages/SolutionsPage.tsx',
  'src/pages/services/AISolutions.tsx',
  'src/pages/services/Cybersecurity.tsx',
  'src/pages/services/QuantumComputing.tsx',
  'src/routes/CommunityRoutes.tsx',
  'src/routes/EnterpriseRoutes.tsx',
  'src/routes/MainRoutes.tsx',
  'src/routes/TalentRoutes.tsx'
];

function fixFile(filePath) {
  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  File not found: ${filePath}`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Fix unused React imports
  if (content.includes("import React from 'react';") && !content.includes('React.')) {
    content = content.replace(/import React from 'react';\n?/g, '');
    modified = true;
  }

  // Fix unused imports
  const unusedImports = [
    'Link', 'useLocation', 'Route', 'Routes', 'ProtectedRoute', 'Suspense', 'lazy',
    'motion', 'AnimatePresence', 'CommunityPage', 'ForumCategoryPage', 'ForumPostPage',
    'CreatePostPage', 'EditPostPage', 'CommunityProfilePage', 'EnterprisePlans',
    'EnterpriseAdmin', 'CompWorkspace', 'EnterpriseBilling', 'EnterpriseDemo',
    'TalentDirectory', 'TalentsPage', 'TalentProfilePage', 'SavedTalentsPage',
    'CreateTalentProfile', 'ProfilePage'
  ];

  unusedImports.forEach(importName => {
    const regex = new RegExp(`import\\s+{[^}]*\\b${importName}\\b[^}]*}\\s+from\\s+['"][^'"]+['"];?\\n?`, 'g');
    if (content.match(regex)) {
      content = content.replace(regex, '');
      modified = true;
    }
  });

  // Fix console statements
  if (content.includes('console.log') || content.includes('console.warn') || content.includes('console.error')) {
    content = content.replace(/console\.(log|warn|error)\([^)]*\);?\n?/g, '');
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(filePath, content);
    console.log(`✅ Fixed: ${filePath}`);
  } else {
    console.log(`ℹ️  No changes needed: ${filePath}`);
  }
}

// Fix each file
filesToFix.forEach(fixFile);

// Fix specific parsing errors
console.log('🔧 Fixing specific parsing errors...');

// Fix ContactPage.tsx parsing error
const contactPagePath = 'src/pages/ContactPage.tsx';
if (fs.existsSync(contactPagePath)) {
  let content = fs.readFileSync(contactPagePath, 'utf8');
  // Fix the interface syntax error
  content = content.replace(/interface\s+ContactFormProps\s*{([^}]*)}/g, (match, props) => {
    return `interface ContactFormProps {\n  onSubmit: (data: any) => void;\n  loading?: boolean;\n}`;
  });
  fs.writeFileSync(contactPagePath, content);
  console.log('✅ Fixed ContactPage.tsx interface');
}

// Fix main.tsx
const mainPath = 'src/main.tsx';
if (fs.existsSync(mainPath)) {
  let content = fs.readFileSync(mainPath, 'utf8');
  
  // Remove unused App import
  content = content.replace(/import App from '\.\/App';/, '');
  
  // Remove console statements
  content = content.replace(/console\.(log|warn|error)\([^)]*\);?\n?/g, '');
  
  fs.writeFileSync(mainPath, content);
  console.log('✅ Fixed main.tsx');
}

console.log('🎉 Linting error fixes completed!');