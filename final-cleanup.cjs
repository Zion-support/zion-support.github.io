const fs = require('fs');
const path = require('path');

function createCleanPage(filePath) {
  const content = `'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';

const Page: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Zion Tech Group - AI and IT Solutions" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Coming Soon</h1>
          <p className="text-gray-300">This page is under development.</p>
        </div>
      </div>
    </>
  );
};

export default Page;`;

  fs.writeFileSync(filePath, content);
  console.log(`Created clean page: ${filePath}`);
}

function cleanAllPages(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      cleanAllPages(filePath);
    } else if (file.endsWith('.tsx') && file.includes('page.tsx')) {
      createCleanPage(filePath);
    }
  }
}

console.log('Creating clean pages...');
cleanAllPages('/workspace/app');
console.log('Cleanup completed!');
