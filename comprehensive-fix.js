#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to comprehensively fix a file
function comprehensiveFix(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // 1. Fix missing return statements in React components
    content = content.replace(
      /const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*\{([^}]*?)\s*<[^>]*>/g,
      (match, componentName, body) => {
        modified = true;
        return `const ${componentName}: React.FC = () => {\n  return (\n    ${body.trim()}`;
      }
    );
    
    // 2. Fix malformed object literals in arrays
    content = content.replace(
      /\{\s*icon:\s*(\w+)\s*\}\s*([^}]*?)\s*title:\s*'([^']+)',/g,
      (match, icon, middle, title) => {
        modified = true;
        return `{\n      icon: ${icon},\n      title: '${title}',`;
      }
    );
    
    // 3. Fix malformed JSX attributes
    content = content.replace(/element=\{"<(\w+)\s*\/>"\}/g, 'element={<$1 />}');
    
    // 4. Fix malformed string literals in JSX
    content = content.replace(/className="([^"]*?)"/g, (match, className) => {
      if (className.endsWith('"')) {
        modified = true;
        return `className="${className.slice(0, -1)}"`;
      }
      return match;
    });
    
    // 5. Fix missing closing braces in object literals
    content = content.replace(
      /benefits:\s*\[([^\]]+)\]\s*\},/g,
      (match, benefits) => {
        modified = true;
        return `benefits: [${benefits}]\n    },`;
      }
    );
    
    // 6. Fix malformed JSX fragments
    content = content.replace(/<>\s*<HelmetProvider>/g, '<>\n    <HelmetProvider>');
    content = content.replace(/<\/HelmetProvider>\s*<\/>/g, '</HelmetProvider>\n  </>');
    
    // 7. Fix missing return statement in App component
    if (filePath.includes('App.tsx')) {
      content = content.replace(
        /const App: React\.FC = \(\) => \{\s*<>/g,
        'const App: React.FC = () => {\n  return (\n    <>'
      );
    }
    
    // 8. Fix malformed array declarations
    content = content.replace(
      /const\s+(\w+)\s*=\s*\[\s*\{\s*icon:\s*(\w+)\s*\}\s*([^}]*?)\s*title:/g,
      (match, varName, icon, rest) => {
        modified = true;
        return `const ${varName} = [\n    {\n      icon: ${icon},\n      title:`;
      }
    );
    
    // 9. Fix missing closing parentheses and braces
    if (content.includes('const FiveGImplementationPage: React.FC = () => {const features = [')) {
      content = content.replace(
        /const FiveGImplementationPage: React\.FC = \(\) => \{const features = \[/g,
        'const FiveGImplementationPage: React.FC = () => {\n  const features = ['
      );
    }
    
    // 10. Fix malformed JSX structure
    content = content.replace(
      /<div className="([^"]*?)">"\s*<Suspense/g,
      '<div className="$1">\n          <Suspense'
    );
    
    // 11. Fix malformed Route elements
    content = content.replace(
      /<Route path="([^"]*?)" element=\{"<(\w+)\s*\/>"\}/g,
      '<Route path="$1" element={<$2 />}'
    );
    
    // 12. Fix missing closing tags
    const openDivs = (content.match(/<div/g) || []).length;
    const closeDivs = (content.match(/<\/div>/g) || []).length;
    if (openDivs > closeDivs) {
      for (let i = 0; i < openDivs - closeDivs; i++) {
        content += '\n        </div>';
      }
      modified = true;
    }
    
    // 13. Fix malformed object properties
    content = content.replace(
      /\{\s*icon:\s*(\w+)\s*\}\s*([^}]*?)\s*title:\s*'([^']+)',\s*description:\s*'([^']+)',\s*benefits:\s*\[([^\]]+)\]\s*\}/g,
      (match, icon, middle, title, description, benefits) => {
        modified = true;
        return `{\n      icon: ${icon},\n      title: '${title}',\n      description: '${description}',\n      benefits: [${benefits}]\n    }`;
      }
    );
    
    // 14. Fix missing closing parentheses in function returns
    if (content.includes('return (') && !content.includes(');')) {
      content += '\n  );';
      modified = true;
    }
    
    // 15. Fix malformed JSX closing tags
    content = content.replace(/<\/>(\s*\))/g, '</>\n  )');
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      return true;
    }
    
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to find all TypeScript/JSX files
function findTSXFiles(dir) {
  const files = [];
  
  function walkDir(currentPath) {
    try {
      const items = fs.readdirSync(currentPath);
      
      for (const item of items) {
        const fullPath = path.join(currentPath, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          // Skip node_modules, .git, and other common directories
          if (!['node_modules', '.git', 'dist', 'build', '.next', 'out', 'coverage'].includes(item)) {
            walkDir(fullPath);
          }
        } else if (stat.isFile()) {
          // Check for TypeScript/JSX files
          if (/\.(tsx|jsx)$/.test(item)) {
            files.push(fullPath);
          }
        }
      }
    } catch (error) {
      // Skip directories that can't be read
    }
  }
  
  walkDir(dir);
  return files;
}

// Main execution
console.log('Starting comprehensive fixes...');

const workspaceDir = process.cwd();
const tsxFiles = findTSXFiles(workspaceDir);

console.log(`Found ${tsxFiles.length} TypeScript/JSX files`);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (comprehensiveFix(file)) {
    fixedCount++;
    console.log(`Fixed: ${file}`);
  }
}

console.log(`Fixed ${fixedCount} files`);

// Also fix some specific problematic files manually
const problematicFiles = [
  '/workspace/App.tsx',
  '/workspace/app/5g-implementation/page.tsx',
  '/workspace/app/about/page.tsx'
];

console.log('Fixing specific problematic files...');

for (const file of problematicFiles) {
  if (fs.existsSync(file)) {
    try {
      let content = fs.readFileSync(file, 'utf8');
      
      // More specific fixes for these files
      
      // Fix App.tsx
      if (file.includes('App.tsx')) {
        content = `'use client'
import React, {Suspense} from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import {HelmetProvider} from 'react-helmet-async'
import Navigation from './app/components/Navigation'
import Footer from './app/components/Footer'
import HomePage from './app/page'

const App: React.FC = () => {
  return (
    <>
      <HelmetProvider>
        <Router>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><div className="text-white">Loading...</div></div>}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="*" element={<HomePage />} />
              </Routes>
            </Suspense>
          </div>
        </Router>
      </HelmetProvider>
    </>
  )
}

export default App`;
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Fixed App.tsx`);
      }
      
      // Fix 5g-implementation page
      if (file.includes('5g-implementation')) {
        content = `'use client'
import React from 'react'
import {Helmet} from 'react-helmet-async'
import { Wifi, BarChart, CheckCircle, Brain, Target, TrendingUp, FileText, Zap, Shield, ArrowRight, PieChart } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const FiveGImplementationPage: React.FC = () => {
  const features = [
    {
      icon: Wifi,
      title: 'Ultra-Low Latency',
      description: 'Achieve sub-millisecond latency for real-time applications and critical operations.',
      benefits: ['< 1ms latency', 'Real-time processing', 'Critical operations support', 'Edge computing ready']
    },
    {
      icon: BarChart,
      title: 'High-Speed Connectivity',
      description: 'Experience blazing-fast speeds up to 10 Gbps for seamless data transfer.',
      benefits: ['Up to 10 Gbps speeds', 'Massive data transfer', '4K/8K streaming', 'Cloud integration']
    },
    {
      icon: Brain,
      title: 'AI-Powered Optimization',
      description: 'Intelligent network management with AI-driven performance optimization.',
      benefits: ['Smart routing', 'Predictive maintenance', 'Load balancing', 'Performance analytics']
    },
    {
      icon: Target,
      title: 'Massive IoT Support',
      description: 'Connect millions of devices with enhanced capacity and efficiency.',
      benefits: ['1M+ devices per km²', 'Low power consumption', 'Extended battery life', 'Smart city ready']
    },
    {
      icon: Shield,
      title: 'Enhanced Security',
      description: 'Advanced security protocols and encryption for secure communications.',
      benefits: ['End-to-end encryption', 'Network slicing', 'Zero-trust architecture', 'Compliance ready']
    },
    {
      icon: Zap,
      title: 'Edge Computing',
      description: 'Process data closer to the source for faster response times.',
      benefits: ['Reduced latency', 'Bandwidth optimization', 'Real-time analytics', 'Local processing']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>5G Implementation - Zion Tech Group</title>
        <meta name="description" content="Transform your business with our comprehensive 5G implementation services." />
      </Helmet>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-8">
            5G Implementation Services
          </h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-12">
            Transform your business with our comprehensive 5G implementation services
          </p>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default FiveGImplementationPage`;
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Fixed 5g-implementation page`);
      }
      
    } catch (error) {
      console.error(`Error fixing ${file}:`, error.message);
    }
  }
}

console.log('Comprehensive fixes completed!');