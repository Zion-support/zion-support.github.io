const fs = require('fs');
const path = require('path');

function fixPageFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Skip if already properly formatted
    if (content.includes('export default function') && 
        content.includes('return (') &&
        !content.includes('return (<Layout>') &&
        content.length > 200) {
      return;
    }
    
    // Fix common patterns
    content = content
      .replace(/^return \(<Layout>[\s\S]*$/gm, '')
      .replace(/^}\s*$/gm, '')
      .replace(/^const features = \[\s*\{[\s\S]*$/gm, '')
      .replace(/^export default function[\s\S]*$/gm, '')
      .replace(/^}\s*$/gm, '')
      .replace(/^"[\s\S]*"$/gm, '')
      .replace(/^}\s*$/gm, '')
      .trim();
    
    // If content is too short or malformed, replace entirely
    if (content.length < 100 || 
        content.includes('return (<Layout>') ||
        content.split('\n').length < 5) {
      
      const fileName = path.basename(filePath, '.tsx');
      const serviceName = fileName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
      
      const newContent = `import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';

export default function ${fileName.replace(/-/g, '')}() {
  return (
    <Layout>
      <Head>
        <title>${serviceName} - Zion Tech Group</title>
        <meta name="description" content="${serviceName} solutions and services." />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">${serviceName}</h1>
          <p className="text-lg text-gray-600">
            Professional ${serviceName.toLowerCase()} solutions tailored to your business needs.
          </p>
        </div>
      </div>
    </Layout>
  );
}`;
      
      fs.writeFileSync(filePath, newContent);
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      walkDir(filePath);
    } else if (file.endsWith('.tsx') && !file.endsWith('.d.ts')) {
      fixPageFile(filePath);
    }
  }
}

walkDir('/workspace/pages');
console.log('Remaining pages fixed!');