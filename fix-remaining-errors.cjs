const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all TypeScript/React files
const files = glob.sync('app/**/*.{ts,tsx}', { cwd: __dirname });

let fixedCount = 0;

files.forEach(file => {
  const filePath = path.join(__dirname, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let modified = false;

  // Remove unused ArrowRight import
  if (content.includes("import { ArrowRight } from 'lucide-react';") && !content.includes('<ArrowRight')) {
    content = content.replace("import { ArrowRight } from 'lucide-react';\n", '');
    content = content.replace("import { ArrowRight } from 'lucide-react';", '');
    modified = true;
  }

  // Fix files that have only 'use client' and unused imports with expression errors
  if (content.trim().startsWith("'use client';\nimport React from 'react';\nimport { CheckCircle } from 'lucide-react';\n\nexport default PagePage;")) {
    content = `'use client';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const PagePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Professional services and solutions." />
        <meta name="keywords" content="services, solutions, technology" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20 px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Page
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional services to help your business succeed and grow.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PagePage;`;
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(filePath, content);
    fixedCount++;
    console.log(`Fixed: ${file}`);
  }
});

console.log(`\nFixed ${fixedCount} files`);