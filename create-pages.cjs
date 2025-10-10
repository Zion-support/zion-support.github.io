const fs = require('fs');
const path = require('path');

const pages = [
  'pricing', 'blog', 'case-studies', 'careers', 'partners', 'support', 
  'faq', 'demo', 'consultation', 'micro-saas', 'ai-services', 'it-services'
];

const pageTemplate = (pageName) => `'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ${pageName.charAt(0).toUpperCase() + pageName.slice(1).replace(/-([a-z])/g, (g) => g[1].toUpperCase())}Page: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 text-center">
            ${pageName.charAt(0).toUpperCase() + pageName.slice(1).replace(/-/g, ' ')}
          </h1>
          <p className="text-xl text-gray-300 text-center mb-12">
            Coming soon...
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ${pageName.charAt(0).toUpperCase() + pageName.slice(1).replace(/-([a-z])/g, (g) => g[1].toUpperCase())}Page;
`;

pages.forEach(page => {
  const pagePath = path.join(__dirname, 'app', page, 'page.tsx');
  fs.writeFileSync(pagePath, pageTemplate(page));
  console.log(`Created ${pagePath}`);
});