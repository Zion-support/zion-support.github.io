const fs = require('fs');
const path = require('path');

// List of files with known issues
const problematicFiles = [
  'app/ai-agricultural-intelligence-pro/page.tsx',
  'app/ai-financial-analytics-pro/page.tsx',
  'app/ai-social-media-manager/page.tsx',
  'app/ai-video-editor/page.tsx',
  'app/ai-voice-assistant/page.tsx'
];

// Common fixes
const commonFixes = [
  // Fix JSX structure issues
  { pattern: /<div className="[^"]*"><\/div>\s*<Navigation \/>/g, replacement: '<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">\n      <Navigation />' },
  { pattern: /<div className="[^"]*"><\/div>\s*<Footer \/>/g, replacement: '<Footer />\n    </div>' },
  
  // Fix merge conflict markers
  { pattern: /<<<<<<< HEAD[\s\S]*?=======[\s\S]*?>>>>>>> [a-f0-9]+/g, replacement: '' },
  { pattern: /<<<<<<< HEAD[\s\S]*?>>>>>>> [a-f0-9]+/g, replacement: '' },
  
  // Fix array syntax issues
  { pattern: /const features = \[,/g, replacement: 'const features = [' },
  { pattern: /const benefits = \[,/g, replacement: 'const benefits = [' },
  
  // Fix JSX closing tags
  { pattern: /<\/div>\s*\);\s*};/g, replacement: '</div>\n  )\n}' },
  { pattern: /<\/div>\s*\);\s*}\s*export/g, replacement: '</div>\n  )\n}\n\nexport' },
  
  // Fix missing closing tags
  { pattern: /<h1 className="[^"]*"><\/h1>\s*([^<]+)/g, replacement: '<h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">$1</h1>' },
  
  // Fix malformed JSX
  { pattern: /<div className="[^"]*"><\/div>\s*<div className="[^"]*"><\/div>/g, replacement: '<div className="max-w-7xl mx-auto">\n          <div className="text-center">' },
  
  // Fix function declarations
  { pattern: /const PagePage: React\.FC = \(\) => \{/g, replacement: 'const AIPage: React.FC = () => {' },
  { pattern: /const AiFinancialAnalyticsProPage: React\.FC = \(\) => \{/g, replacement: 'const AIPage: React.FC = () => {' },
  
  // Fix missing imports
  { pattern: /'use client';\s*import React from 'react';\s*import Link from 'next\/link';/g, replacement: "'use client'\nimport React from 'react'\nimport Navigation from '../components/Navigation'\nimport Footer from '../components/Footer'" },
  
  // Fix array syntax
  { pattern: /,\s*\]/g, replacement: ']' },
  { pattern: /\[\s*,/g, replacement: '[' },
  
  // Fix JSX structure
  { pattern: /<section className="[^"]*"><\/section>/g, replacement: '<section className="py-20 px-4">\n        <div className="max-w-7xl mx-auto">\n          <div className="text-center">\n            <h2 className="text-4xl font-bold text-white mb-4">Features</h2>\n            <p className="text-xl text-gray-300 max-w-3xl mx-auto">AI-powered solutions for your business</p>\n          </div>\n        </div>\n      </section>' }
];

function fixFile(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`File not found: ${filePath}`);
      return;
    }
    
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Apply common fixes
    commonFixes.forEach(fix => {
      content = content.replace(fix.pattern, fix.replacement);
    });
    
    // Specific fixes for each file
    if (filePath.includes('ai-agricultural-intelligence-pro')) {
      content = content.replace(
        /<div className="max-w-7xl mx-auto"><\/div>\s*<div className="text-center"><\/div>/g,
        '<div className="max-w-7xl mx-auto">\n          <div className="text-center">'
      );
    }
    
    if (filePath.includes('ai-financial-analytics-pro')) {
      content = content.replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> [a-f0-9]+/g, '');
      content = content.replace(/export default function AiFinancialAnalyticsProPage\(\) \{/g, 'const AIPage: React.FC = () => {');
    }
    
    if (filePath.includes('ai-social-media-manager')) {
      content = content.replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> [a-f0-9]+/g, '');
      content = content.replace(/const features = \[,\s*\{/g, 'const features = [\n    {');
    }
    
    if (filePath.includes('ai-video-editor')) {
      content = content.replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> [a-f0-9]+/g, '');
      content = content.replace(/const features = \[,/g, 'const features = [');
    }
    
    if (filePath.includes('ai-voice-assistant')) {
      content = content.replace(/<<<<<<< HEAD[\s\S]*?>>>>>>> [a-f0-9]+/g, '');
      content = content.replace(/const PagePage: React\.FC = \(\) => \{/g, 'const AIPage: React.FC = () => {');
      content = content.replace(/,\s*\{/g, '\n    {');
    }
    
    // Ensure proper closing
    if (!content.includes('export default')) {
      content += '\n\nexport default AIPage';
    }
    
    // Write the fixed content back
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
    } else {
      console.log(`No changes needed: ${filePath}`);
    }
    
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

// Fix all problematic files
problematicFiles.forEach(fixFile);

console.log('All files have been processed.');