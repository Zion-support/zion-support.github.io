#!/usr/bin/env node

import fs from 'fs';
import { glob } from 'glob';

// Function to create a standard page template
function createStandardPage(title, description, keywords) {
  return `import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Shield } from 'lucide-react';
import { Users } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';

const Page = () => {
  const features = [
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'Advanced Features',
      description: 'Cutting-edge technology for maximum efficiency'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and 99.9% uptime'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Expert Support',
      description: '24/7 support from our team of specialists'
    }
  ];

  return (
    <>
      <EnhancedSEO 
        title="${title} - Zion Tech Group"
        description="${description}"
        keywords="${keywords}"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-6">
              ${title}
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              ${description}
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Get Started
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                Learn More
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <div className="text-blue-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;`;
}

// Function to check if a file is corrupted
function isCorrupted(content) {
  const corruptedPatterns = [
    /import\s+\w+\s+from\s+[^'";\n]+;?/,
    /<(\w+)\s*\/>/,
    /className=([^"'\s>]+)/,
    /title="([^"]*?)(?=\s*[>}])/,
    /description="([^"]*?)(?=\s*[>}])/,
    /keywords="([^"]*?)(?=\s*[>}])/,
    /features\.map\(\(feature", index\)/,
    /icon: "<\w+ className="[^"]*" \/>"/,
    /hover:\s*"bg-\w+/,
    /grid md:\s*"grid-cols/,
    /<EnhancedSEO\s*;\s*>/,
    /<\/\w+>\s*;\s*$/m,
    /;\s*$/m
  ];
  
  return corruptedPatterns.some(pattern => pattern.test(content));
}

// Function to generate title from file path
function generateTitle(filePath) {
  const pathParts = filePath.split('/');
  const fileName = pathParts[pathParts.length - 2]; // Get the directory name
  return fileName
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Function to generate description from title
function generateDescription(title) {
  return `Advanced ${title.toLowerCase()} solutions for modern businesses. Cutting-edge technology and expert implementation.`;
}

// Function to generate keywords from title
function generateKeywords(title) {
  const words = title.toLowerCase().split(' ');
  return words.join(', ') + ', solutions, technology, enterprise';
}

async function main() {
  console.log('Fixing all corrupted files...');
  
  const files = await glob('app/**/*.tsx', { cwd: process.cwd() });
  let fixedCount = 0;
  
  for (const file of files) {
    try {
      const content = fs.readFileSync(file, 'utf8');
      
      if (isCorrupted(content)) {
        const title = generateTitle(file);
        const description = generateDescription(title);
        const keywords = generateKeywords(title);
        
        const newContent = createStandardPage(title, description, keywords);
        fs.writeFileSync(file, newContent, 'utf8');
        console.log(`Fixed: ${file}`);
        fixedCount++;
      }
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
    }
  }
  
  console.log(`Fixed ${fixedCount} corrupted files`);
}

main().catch(console.error);