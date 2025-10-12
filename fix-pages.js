import fs from 'fs';
import path from 'path';

// List of pages that need to be fixed
const pages To Fix = [
  'cookies', 'privacy', 'terms', 'consultation', 'pricing', 'blog', 
  'case-studies', 'careers', 'ai-services', 'it-services', 'micro-saas'
];

const page Template = (page Name, title, component Name) => `'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const ${component Name}: React.F C = () => {
  return (

      <H elmet>
        <t itle>${title} - Zion Tech Group</t itle>
        <m eta name="description" content="${title} services by Zion Tech Group. Professional A I and I T solutions." />
        <m eta name="keywords" content="${page Name}, A I solutions, I T services" />
      </H elmet>
      
      <d iv class Name="m in-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <d iv class Name="c ontainer mx-auto px-4 py-16">
          <d iv class Name="t ext-center mb-16">
            <h1 c lass Name="t ext-4xl md:text-6xl font-bold text-white mb-6">
              <s pan class Name="b g-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                ${title}
              </s pan>
            </h1>
            <p c lass Name="t ext-xl text-gray-300 max-w-3xl mx-auto">
              Professional ${title.to Lower Case()} services by Zion Tech Group.
            </p>
          </d iv>

          <d iv class Name="b g-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 text-center">
            <h2 c lass Name="t ext-2xl font-bold text-white mb-4">Coming Soon</h2>
            <p c lass Name="t ext-gray-300 mb-6">
              We're working on bringing you comprehensive ${title.to Lower Case()} solutions. 
              Contact us to learn more about our services.
            </p>
            <b utton class Name="b g-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
              Contact Us
            </b utton>
          </d iv>
        </d iv>
      </d iv>

  );
};

export default ${component Name};`;

// Fix pages
pages To Fix.for Each(page Name => {
  const title = page Name.split('-').map(word => 
    word.char At(0).to Upper Case() + word.slice(1)
  ).join(' ');
  
  const component Name = page Name.split('-').map(word => 
    word.char At(0).to Upper Case() + word.slice(1)
  ).join('') + 'Page';
  
  const page Dir = path.join('/workspace/app', page Name);
  const page File = path.join(page Dir, 'page.tsx');
  
  // Create directory if it doesn't exist
  if (!fs.exists Sync(page Dir)) {
    fs.mkdir Sync(page Dir, { recursive: true });
  }
  
  // Overwrite page file with correct template
  fs.write File Sync(page File, page Template(page Name, title, component Name));
  console.log(`Fixed: ${page File}`);
});

console.log('Page fixes completed!');