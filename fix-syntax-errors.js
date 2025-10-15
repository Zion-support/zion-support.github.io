#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Function to fix common syntax errors in JSX files
function fixJSXFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix duplicate imports
    const importLines = content.split('\n').filter(line => line.trim().startsWith('import'));
    const uniqueImports = [...new Set(importLines)];
    if (importLines.length !== uniqueImports.length) {
      const nonImportLines = content.split('\n').filter(line => !line.trim().startsWith('import'));
      content = [...uniqueImports, ...nonImportLines].join('\n');
      modified = true;
    }

    // Fix malformed JSX fragments - replace <> with proper opening
    if (content.includes('<>') && !content.includes('</>')) {
      content = content.replace(/<>/g, '<React.Fragment>');
      content = content.replace(/<\/>/g, '</React.Fragment>');
      modified = true;
    }

    // Fix unclosed JSX elements - basic pattern matching
    const openTags = content.match(/<[^/][^>]*>/g) || [];
    const closeTags = content.match(/<\/[^>]*>/g) || [];
    
    // Fix common malformed JSX patterns
    content = content.replace(/<div\s*>\s*<div\s*>\s*<div\s*>\s*<h1[^>]*>\s*([^<]+)\s*<\/h1>\s*<p[^>]*>\s*([^<]+)\s*<\/p>\s*import\s+React/g, 
      (match, h1Content, pContent) => {
        return `<div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">${h1Content}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">${pContent}</p>
        </div>
      </div>
    </div>
import React`);
      });

    // Fix malformed function declarations
    content = content.replace(/function\s+App\(\)\s*{\s*function\s+App\(\)\s*{\s*{/g, 'function App() {');
    content = content.replace(/function\s+App\(\)\s*{\s*{\s*{/g, 'function App() {');

    // Fix malformed JSX attributes
    content = content.replace(/max-w-3\s+xl/g, 'max-w-3xl');
    content = content.replace(/BrowserRouterasRouter/g, 'BrowserRouter as Router');
    content = content.replace(/Helmet\s+Provider/g, 'HelmetProvider');
    content = content.replace(/Home\s+Page/g, 'HomePage');

    // Fix unclosed JSX elements by adding proper closing tags
    const lines = content.split('\n');
    let braceCount = 0;
    let inJSX = false;
    let fixedLines = [];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const trimmedLine = line.trim();

      // Track JSX opening
      if (trimmedLine.includes('<div') || trimmedLine.includes('<section') || trimmedLine.includes('<main')) {
        inJSX = true;
        braceCount++;
      }

      // Track JSX closing
      if (trimmedLine.includes('</div>') || trimmedLine.includes('</section>') || trimmedLine.includes('</main>')) {
        braceCount--;
        if (braceCount === 0) {
          inJSX = false;
        }
      }

      // Fix malformed JSX patterns
      if (trimmedLine.includes('import React') && inJSX) {
        // This is a misplaced import, move it to the top
        continue;
      }

      fixedLines.push(line);
    }

    // Add missing closing tags for common patterns
    if (content.includes('<div className="min-h-screen') && !content.includes('</div>')) {
      content += '\n      </div>\n    </div>\n  );\n};\n\nexport default';
    }

    // Fix export statements
    content = content.replace(/export\s+default\s+App;;/g, 'export default App;');
    content = content.replace(/export\s+default\s+[^;]+;;/g, (match) => match.replace(';;', ';'));

    // Fix malformed return statements
    content = content.replace(/return\s*\(\s*<div>\s*<Helmet\s+Provider>/g, 'return (\n    <HelmetProvider>');
    content = content.replace(/<\/Helmet\s+Provider>\s*\)\s*\)\s*\)/g, '</HelmetProvider>\n  );');

    // Fix React import issues
    if (!content.includes('import React') && content.includes('React.FC')) {
      content = 'import React from \'react\';\n' + content;
      modified = true;
    }

    if (modified || content !== fs.readFileSync(filePath, 'utf8')) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }

    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to fix specific 5G pages
function fix5GPage(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Extract the service name from the file path
    const serviceName = path.basename(filePath, '.tsx').replace('5g-', '').replace(/-/g, ' ');
    const titleCase = serviceName.replace(/\b\w/g, l => l.toUpperCase());

    // Create a proper template for 5G pages
    const template = `import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const FiveG${titleCase.replace(/\s+/g, '')}Page: React.FC = () => {
  const services = [
    {
      title: \`Expert 5G ${titleCase} Solutions\`,
      description: \`Professional 5G ${serviceName} services tailored to your needs.\`
    },
    {
      title: 'Custom Implementation',
      description: \`Tailored 5G ${serviceName} implementations for your specific requirements.\`
    },
    {
      title: '24/7 Support',
      description: \`Round-the-clock support for all your 5G ${serviceName} needs.\`
    }
  ];

  return (
    <>
      <Helmet>
        <title>5G ${titleCase} - Zion Tech Group</title>
        <meta name="description" content={\`Professional 5G ${serviceName} solutions and services\`} />
        <meta name="keywords" content="5g, ${serviceName}" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-8">5G ${titleCase}</h1>
            <p className="text-xl text-gray-300 mb-8">
              Professional 5G ${serviceName} solutions and services
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="h-8 w-8 text-blue-400 mr-3" />
                    <h3 className="text-lg font-semibold text-white">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 mb-6">
                    {service.description}
                  </p>
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Link 
                to="/contact"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FiveG${titleCase.replace(/\s+/g, '')}Page;`;

    fs.writeFileSync(filePath, template, 'utf8');
    console.log(`Fixed 5G page: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error fixing 5G page ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
console.log('Starting syntax error fixes...');

// Find all problematic files
const patterns = [
  'app/5g-*/page.tsx',
  'app/ai-*/page.tsx',
  'app/404/page.tsx',
  'app/App.tsx'
];

let totalFixed = 0;

patterns.forEach(pattern => {
  const files = glob.sync(pattern, { cwd: process.cwd() });
  
  files.forEach(file => {
    if (file.includes('5g-')) {
      if (fix5GPage(file)) {
        totalFixed++;
      }
    } else {
      if (fixJSXFile(file)) {
        totalFixed++;
      }
    }
  });
});

console.log(`\nFixed ${totalFixed} files.`);
console.log('Syntax error fixes completed!');