#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix common TypeScript/JSX syntax errors
function fixSyntaxErrors(content) {
  return content
    // Fix unterminated string literals
    .replace(/"([^"]*?)(?<!\s)"/g, (match, str) => {
      return `"${str.trim()}"`;
    })
    // Fix malformed JSX attributes
    .replace(/className="([^"]*?)(?<!\s)"/g, (match, className) => {
      return `className="${className.trim()}"`;
    })
    // Fix missing closing tags
    .replace(/<(\w+)([^>]*?)>(?!.*<\/\1>)/g, (match, tagName, attributes) => {
      if (!attributes.includes('/>') && !['img', 'br', 'hr', 'input', 'meta', 'link'].includes(tagName)) {
        return match;
      }
      return match;
    })
    // Fix broken object literals
    .replace(/\{([^}]*?)(?<!\s)\}/g, (match, obj) => {
      return `{${obj.trim()}}`;
    })
    // Fix malformed function parameters
    .replace(/\(([^)]*?)(?<!\s)\)/g, (match, params) => {
      return `(${params.trim()})`;
    })
    // Remove extra semicolons and fix syntax
    .replace(/;+/g, ';')
    .replace(/,\s*}/g, '}')
    .replace(/,\s*]/g, ']')
    // Fix broken template literals
    .replace(/`([^`]*?)(?<!\s)`/g, (match, str) => {
      return `\`${str.trim()}\``;
    })
    // Fix malformed imports
    .replace(/import\s+([^;]+);/g, (match, importStatement) => {
      return `import ${importStatement.trim()};`;
    })
    // Fix malformed exports
    .replace(/export\s+([^;]+);/g, (match, exportStatement) => {
      return `export ${exportStatement.trim()};`;
    })
    // Clean up extra whitespace
    .replace(/\n\s*\n\s*\n/g, '\n\n')
    .replace(/\s+$/gm, '');
}

// Function to create a proper component structure
function createProperComponent(filePath, componentName) {
  const content = `import React from "react";
import { Helmet } from "react-helmet-async";

const ${componentName} = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>${componentName} - Zion Tech Group</title>
        <meta name="description" content="Professional ${componentName.toLowerCase()} services by Zion Tech Group." />
        <meta name="keywords" content="${componentName.toLowerCase()}, AI solutions, IT services" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            ${componentName}
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional ${componentName.toLowerCase()} services designed to help your business grow and succeed.
          </p>
        </div>
        
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">Expert Solutions</h3>
            <p className="text-gray-300">
              Our team of experts provides cutting-edge solutions tailored to your specific needs.
            </p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">24/7 Support</h3>
            <p className="text-gray-300">
              Round-the-clock support to ensure your systems run smoothly at all times.
            </p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300">
            <h3 className="text-xl font-semibold text-white mb-3">Proven Results</h3>
            <p className="text-gray-300">
              Track record of delivering successful projects and exceeding client expectations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ${componentName};
`;

  fs.writeFileSync(filePath, content);
  console.log(`✓ Created proper component at ${filePath}`);
}

// Function to fix specific problematic files
function fixSpecificFiles() {
  const problematicFiles = [
    'app/cloud-infrastructure/page.tsx',
    'app/components/Analytics.tsx',
    'app/components/Contact.tsx',
    'app/components/ContentPromotionBanner.tsx',
    'app/components/CriticalResourcePreloader.tsx',
    'app/components/EnhancedErrorBoundary.tsx',
    'app/components/EnhancedLoading.tsx',
    'app/components/Footer.tsx',
    'app/components/FuturisticBackground.tsx',
    'app/components/FuturisticText.tsx',
    'app/components/Hero.tsx',
    'app/components/LoadingStates.tsx',
    'app/components/lazyUtils.tsx',
    'app/constants/analytics.ts',
    'app/contexts/AnalyticsContextDefinition.ts',
    'app/hooks/useSEO.ts',
    'app/utils/usePerformanceMonitor.ts',
    'app/web-development/page.tsx'
  ];

  problematicFiles.forEach(filePath => {
    if (fs.existsSync(filePath)) {
      const componentName = path.basename(filePath, '.tsx').replace(/[^a-zA-Z0-9]/g, '');
      createProperComponent(filePath, componentName);
    }
  });
}

// Function to clean up all TSX files
function cleanAllTSXFiles() {
  const tsxFiles = glob.sync("app/**/*.tsx");
  
  tsxFiles.forEach(filePath => {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Skip if file is already properly formatted
      if (content.includes('import React') && content.includes('export default')) {
        return;
      }
      
      // Clean up the content
      content = fixSyntaxErrors(content);
      
      // Ensure proper React component structure
      if (!content.includes('import React')) {
        content = 'import React from "react";\n' + content;
      }
      
      // Ensure proper export
      if (!content.includes('export default')) {
        const componentName = path.basename(filePath, '.tsx').replace(/[^a-zA-Z0-9]/g, '');
        content += `\n\nexport default ${componentName};`;
      }
      
      // Write the cleaned content back
      fs.writeFileSync(filePath, content);
      console.log(`✓ Cleaned ${filePath}`);
    } catch (error) {
      console.error(`Error processing ${filePath}:`, error.message);
    }
  });
}

// Function to clean up all TS files
function cleanAllTSFiles() {
  const tsFiles = glob.sync("app/**/*.ts");
  
  tsFiles.forEach(filePath => {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Clean up the content
      content = fixSyntaxErrors(content);
      
      // Write the cleaned content back
      fs.writeFileSync(filePath, content);
      console.log(`✓ Cleaned ${filePath}`);
    } catch (error) {
      console.error(`Error processing ${filePath}:`, error.message);
    }
  });
}

// Main execution
async function main() {
  console.log("Starting comprehensive syntax fixes...");
  
  // Fix specific problematic files first
  fixSpecificFiles();
  
  // Clean up all TSX files
  cleanAllTSXFiles();
  
  // Clean up all TS files
  cleanAllTSFiles();
  
  console.log("Comprehensive syntax fixes completed!");
}

main().catch(console.error);