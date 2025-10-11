const fs = require('fs');
const path = require('path');

const pages = [
  'contact', 'services', 'pricing', 'blog', 'case-studies', 'careers',
  'ai-services', 'it-services', 'micro-saas', 'tutorials', 'consultation',
  'demo', 'support', 'privacy', 'terms', 'cookies', 'sitemap'
];

const pageTemplate = (name) => `'use client'
import React from 'react'

const ${name.charAt(0).toUpperCase() + name.slice(1).replace(/-([a-z])/g, (g) => g[1].toUpperCase())}Page: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-white mb-6">${name.charAt(0).toUpperCase() + name.slice(1).replace(/-/g, ' ')}</h1>
        <p className="text-xl text-gray-300">Welcome to our ${name} page</p>
      </div>
    </div>
  );
};

export default ${name.charAt(0).toUpperCase() + name.slice(1).replace(/-([a-z])/g, (g) => g[1].toUpperCase())}Page;`;

pages.forEach(page => {
  const dir = `app/${page}`;
  const filePath = `${dir}/page.tsx`;
  
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  fs.writeFileSync(filePath, pageTemplate(page));
  console.log(`Created ${filePath}`);
});