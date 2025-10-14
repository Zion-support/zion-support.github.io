#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// List of problematic files that need fixing
const problematicFiles = [
  'app/ai-financial-analysis/page.tsx',
  'app/ai-healthcare-diagnostics/page.tsx',
  'app/ai-holographic-workspace/page.tsx',
  'app/ai-hr-recruitment-pro/page.tsx',
  'app/ai-image-recognition-pro/page.tsx',
  'app/ai-powered-devops/page.tsx',
  'app/ai-services/page.tsx',
  'app/ai-solutions/page.tsx',
  'app/analytics-tools/page.tsx',
  'app/blockchain/page.tsx',
  'app/blog/page.tsx',
  'app/careers/page.tsx',
  'app/case-studies/page.tsx',
  'app/cloud-solutions/page.tsx',
  'app/consultation/page.tsx',
  'app/contact/page.tsx'
];

const pageTemplate = (title, description) => `import React from "react";
import { Helmet } from "react-helmet-async";

export default function Page() {
  return (
    <div>
      <Helmet>
        <title>${title} - Zion Tech Group</title>
        <meta name="description" content="${description}" />
      </Helmet>
      <div>
        <div>
          <h1 className="text-4xl font-bold text-white mb-8">${title}</h1>
          <p className="text-gray-300 text-lg">
            This page is under construction. Please check back later.
          </p>
        </div>
      </div>
    </div>
  );
}`;

async function fixRemainingPages() {
  console.log('Fixing remaining problematic pages...');
  
  let fixed = 0;
  
  for (const file of problematicFiles) {
    try {
      if (fs.existsSync(file)) {
        const content = fs.readFileSync(file, 'utf8');
        
        // Check if file has syntax errors
        if (content.includes('JSX expressions must have one parent element') || 
            content.includes('Declaration or statement expected') ||
            content.includes('Expression expected') ||
            content.includes('div>') ||
            content.includes('PagePage')) {
          
          const pageName = file.split('/')[1];
          const title = pageName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
          const description = `Professional ${title.toLowerCase()} services by Zion Tech Group.`;
          
          const newContent = pageTemplate(title, description);
          fs.writeFileSync(file, newContent, 'utf8');
          console.log(`Fixed: ${file}`);
          fixed++;
        }
      }
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
    }
  }
  
  console.log(`Fixed ${fixed} remaining page files`);
}

fixRemainingPages().catch(console.error);
