#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Function to fix specific issues in files
function finalFix(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix malformed import statements
    content = content.replace(
      /import\s*\{\s*"([^"]+)"\s*\}\s*from\s*'([^']+)'"/g,
      (match, imports, module) => {
        modified = true;
        return `import { ${imports} } from '${module}'`;
      }
    );
    
    // Fix malformed object literals
    content = content.replace(
      /\{\s*"icon:\s*(\w+),"\s*\}/g,
      (match, icon) => {
        modified = true;
        return `{\n      icon: ${icon},`;
      }
    );
    
    // Fix malformed object properties
    content = content.replace(
      /\{\s*"icon:\s*(\w+),"\s*\}\s*([^}]*?)\s*title:\s*'([^']+)',\s*description:\s*'([^']+)'\.\s*"\}/g,
      (match, icon, middle, title, description) => {
        modified = true;
        return `{\n      icon: ${icon},\n      title: '${title}',\n      description: '${description}'\n    }`;
      }
    );
    
    // Fix malformed string literals
    content = content.replace(/\.\s*"\}/g, '\n    }');
    content = content.replace(/\.\s*"\s*,\s*"/g, ',\n      ');
    
    // Fix missing opening braces
    content = content.replace(/const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*\{const\s+(\w+)\s*=\s*\[/g, (match, componentName, varName) => {
      modified = true;
      return `const ${componentName}: React.FC = () => {\n  const ${varName} = [`;
    });
    
    // Fix missing return statements
    content = content.replace(
      /const\s+(\w+):\s*React\.FC\s*=\s*\(\)\s*=>\s*\{([^}]*?)\s*<[^>]*>/g,
      (match, componentName, body) => {
        modified = true;
        return `const ${componentName}: React.FC = () => {\n  return (\n    ${body.trim()}`;
      }
    );
    
    // Fix malformed JSX attributes
    content = content.replace(/className="([^"]*?)"/g, (match, className) => {
      if (className.endsWith('"')) {
        modified = true;
        return `className="${className.slice(0, -1)}"`;
      }
      return match;
    });
    
    // Fix missing closing parentheses
    if (content.includes('return (') && !content.includes(');')) {
      content += '\n  );';
      modified = true;
    }
    
    // Fix malformed JSX fragments
    content = content.replace(/<>\s*<HelmetProvider>/g, '<>\n    <HelmetProvider>');
    content = content.replace(/<\/HelmetProvider>\s*<\/>/g, '</HelmetProvider>\n  </>');
    
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
console.log('Starting final fixes...');

const workspaceDir = process.cwd();
const tsxFiles = findTSXFiles(workspaceDir);

console.log(`Found ${tsxFiles.length} TypeScript/JSX files`);

let fixedCount = 0;
for (const file of tsxFiles) {
  if (finalFix(file)) {
    fixedCount++;
    console.log(`Fixed: ${file}`);
  }
}

console.log(`Fixed ${fixedCount} files`);

// Also fix some specific problematic files manually
const problematicFiles = [
  '/workspace/app/about/page.tsx',
  '/workspace/App_minimal.tsx',
  '/workspace/App_test.tsx',
  '/workspace/EnhancedFooter.tsx',
  '/workspace/EnhancedHeader.tsx',
  '/workspace/SidebarNavigation.tsx'
];

console.log('Fixing specific problematic files...');

for (const file of problematicFiles) {
  if (fs.existsSync(file)) {
    try {
      let content = fs.readFileSync(file, 'utf8');
      
      // More specific fixes for these files
      
      // Fix about page
      if (file.includes('about')) {
        content = `'use client';
import React from 'react';
import {Helmet} from 'react-helmet-async';
import { Target, Users, Award, ArrowRight, CheckCircle, Zap, Shield, Brain, Lightbulb, Globe } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AboutPage: React.FC = () => {
  const features = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'We are committed to delivering AI and IT solutions that transform businesses and drive meaningful impact.'
    },
    {
      icon: Users,
      title: 'Client-Focused',
      description: 'Every solution we create is tailored to meet the unique needs and challenges of our clients.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards of quality and innovation in everything we do.'
    }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We constantly push the boundaries of technology to create solutions that were previously thought impossible.'
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We operate with complete transparency and honesty in all our business dealings and client relationships.'
    },
    {
      icon: Globe,
      title: 'Impact',
      description: 'We focus on creating solutions that make a meaningful difference in the world and drive positive change.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, values, and team of experts in AI and IT solutions." />
      </Helmet>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-8">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto mb-12">
            We are a team of passionate technologists dedicated to transforming businesses through innovative AI and technology solutions.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;`;
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Fixed about page`);
      }
      
      // Fix App_minimal
      if (file.includes('App_minimal')) {
        content = `import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {HelmetProvider} from 'react-helmet-async'
import Navigation from './app/components/Navigation'
import Footer from './app/components/Footer'
import HomePage from './app/page'

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <Navigation />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;`;
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Fixed App_minimal`);
      }
      
      // Fix App_test
      if (file.includes('App_test')) {
        content = `import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {HelmetProvider} from 'react-helmet-async'
import Navigation from './app/components/Navigation'
import Footer from './app/components/Footer'
import HomePage from './app/page'

const App: React.FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <Navigation />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
};

export default App;`;
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Fixed App_test`);
      }
      
    } catch (error) {
      console.error(`Error fixing ${file}:`, error.message);
    }
  }
}

console.log('Final fixes completed!');