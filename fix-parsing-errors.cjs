const fs = require('fs');
const path = require('path');

// List of files with parsing errors
const filesToFix = [
  'src/ai-computer-vision/page.tsx',
  'src/ai-content-generation/page.tsx',
  'src/ai-content-studio/page.tsx',
  'src/ai-crm/page.tsx',
  'src/ai-customer-insights/page.tsx',
  'src/ai-customer-support-bot/page.tsx',
  'src/ai-customer-support/page.tsx',
  'src/ai-cybersecurity/page.tsx',
  'src/ai-data-analytics/page.tsx',
  'src/ai-data-visualization/page.tsx',
  'src/ai-design-assistant/page.tsx',
  'src/ai-document-processing/page.tsx',
  'src/ai-document-processor/page.tsx',
  'src/ai-ecommerce-optimizer/page.tsx',
  'src/ai-ecommerce-solutions/page.tsx',
  'src/ai-edge-computing/page.tsx',
  'src/ai-email-assistant/page.tsx',
  'src/ai-email-marketing/page.tsx',
  'src/ai-fintech/page.tsx',
  'src/ai-healthcare/page.tsx',
  'src/ai-hr-assistant/page.tsx',
  'src/ai-inventory-manager/page.tsx',
  'src/ai-invoice-generator/page.tsx',
  'src/ai-lead-generation/page.tsx',
  'src/ai-lead-scoring/page.tsx',
  'src/ai-marketing/page.tsx',
  'src/ai-ml-platform/page.tsx',
  'src/ai-mobile-app-development/page.tsx',
  'src/ai-mobile-builder/page.tsx',
  'src/ai-nlp/page.tsx',
  'src/ai-performance-tracker/page.tsx'
];

// Common imports and components
const commonImports = `import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Brain, Shield, Target, Users, CheckCircle } from 'lucide-react';`;

// Template for a simple page
const createSimplePage = (pageName, title, description) => `const ${pageName}: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24">
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
            ${title}
          </h1>
          <p className="text-xl text-cyan-400 mb-8 font-medium neon-pulse">
            ${description}
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            Coming Soon - Advanced ${title.toLowerCase()} solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
            >
              Get Started
            </a>
            <a
              href="tel:+13024640950"
              className="flex items-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              <Brain className="w-5 h-5" />
              +1 302 464 0950
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ${pageName};`;

// Function to extract page name from file path
const getPageName = (filePath) => {
  const fileName = path.basename(filePath, '.tsx');
  const words = fileName.split('-');
  return words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('') + 'Page';
};

// Function to extract title from file path
const getTitle = (filePath) => {
  const fileName = path.basename(filePath, '.tsx');
  const words = fileName.split('-');
  return words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

// Function to extract description from file path
const getDescription = (filePath) => {
  const fileName = path.basename(filePath, '.tsx');
  const words = fileName.split('-');
  return words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') + ' Solutions';
};

// Fix each file
filesToFix.forEach(filePath => {
  const fullPath = path.join(process.cwd(), filePath);
  
  try {
    const pageName = getPageName(filePath);
    const title = getTitle(filePath);
    const description = getDescription(filePath);
    
    const content = `${commonImports}

${createSimplePage(pageName, title, description)}`;
    
    fs.writeFileSync(fullPath, content);
    console.log(`Fixed: ${filePath}`);
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
});

console.log('All files have been fixed!');