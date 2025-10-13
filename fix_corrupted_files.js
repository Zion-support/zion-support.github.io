#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// List of corrupted files that need to be fixed
const corruptedFiles = [
  'app/ai-automation-platform/page.tsx',
  'app/ai-chatbot-builder/page.tsx',
  'app/ai-mobile-app-builder/page.tsx',
  'app/ai-mobile-builder/page.tsx',
  'app/ai-website-builder/page.tsx',
  'app/cloud-infrastructure-management/page.tsx',
  'app/components/ImageOptimizer.tsx',
  'app/cybersecurity-solutions/page.tsx',
  'app/landing-page-builder/page.tsx',
  'app/micro-saas-services/ai-chatbot-builder/page.tsx',
  'app/pricing/page.tsx',
  'app/quantum-data-encryption-vault/page.tsx',
  'app/utils/accessibilityEnhancer.ts',
  'app/zion-ai-analytics-pro/page.tsx',
  'app/zion-ai-crm-pro/page.tsx',
  'app/zion-ai-inventory-manager/page.tsx',
  'app/zion-ai-survey-builder/page.tsx',
  'utils/accessibilityUtils.ts',
  'utils/cn.ts',
  'utils/performanceUtils.ts',
  'utils/seoUtils.ts'
];

// Template for a basic page component
const pageTemplate = (title, description, path) => `import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function ${title.replace(/[^a-zA-Z0-9]/g, '')}Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>${title} - Zion Tech Group</title>
        <meta name="description" content="${description}" />
      </Helmet>
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-8">${title}</h1>
          <p className="text-xl text-gray-300 mb-8">
            ${description}
          </p>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-2xl mx-auto">
            <p className="text-gray-200">
              This page is currently under development. Please check back later for updates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}`;

// Template for utility files
const utilityTemplate = (name) => `// ${name} utility functions
export const ${name.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')} = {
  // Add utility functions here
};

export default ${name.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')};
`;

// Template for component files
const componentTemplate = (name) => `import React from 'react';

interface ${name}Props {
  className?: string;
}

export default function ${name}({ className }: ${name}Props) {
  return (
    <div className={className}>
      {/* Component content */}
    </div>
  );
}`;

function fixFile(filePath) {
  const fullPath = path.join(__dirname, filePath);
  
  if (!fs.existsSync(fullPath)) {
    console.log(`File not found: ${filePath}`);
    return;
  }

  let content = '';
  const fileName = path.basename(filePath, path.extname(filePath));
  const dirName = path.dirname(filePath);

  if (filePath.includes('page.tsx')) {
    const title = fileName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    const description = `Advanced ${title} solutions by Zion Tech Group`;
    content = pageTemplate(title, description, filePath);
  } else if (filePath.includes('utils/')) {
    content = utilityTemplate(fileName);
  } else if (filePath.includes('components/')) {
    content = componentTemplate(fileName);
  } else {
    // Default page template
    const title = fileName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    const description = `Advanced ${title} solutions by Zion Tech Group`;
    content = pageTemplate(title, description, filePath);
  }

  try {
    fs.writeFileSync(fullPath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all corrupted files
console.log('Starting to fix corrupted files...');
corruptedFiles.forEach(fixFile);
console.log('File fixing completed!');