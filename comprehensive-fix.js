const fs = require('fs');
const path = require('path');

// Function to check if a file is corrupted
function isCorrupted(content) {
  const lines = content.split('\n');
  const validLines = lines.filter(line => {
    const trimmed = line.trim();
    return trimmed.length > 0 && 
           !trimmed.match(/^[^a-zA-Z0-9_<>\s{}();,]*$/) &&
           !trimmed.match(/^[^}]*\{[^}]*$/) &&
           !trimmed.match(/^[^}]*"[^"]*$/) &&
           !trimmed.match(/^[^}]*'[^']*$/) &&
           !trimmed.match(/^[^}]*<[^>]*$/) &&
           !trimmed.match(/^\s*["']\s*$/) &&
           !trimmed.match(/^\s*[^a-zA-Z0-9_<>\s{}();,]*\s*$/);
  });
  
  return validLines.length < 5 || content.length < 100;
}

// Function to create a basic React component
function createBasicComponent(filePath) {
  const fileName = path.basename(filePath, '.tsx');
  const componentName = fileName.charAt(0).toUpperCase() + fileName.slice(1);
  
  return `import React from 'react';

interface ${componentName}Props {
  // Add props here
}

const ${componentName}: React.FC<${componentName}Props> = () => {
  return (
    <div>
      <h1>${componentName}</h1>
      <p>Component content goes here</p>
    </div>
  );
};

export default ${componentName};`;
}

// Function to create a basic TypeScript file
function createBasicTypeScript(filePath) {
  const fileName = path.basename(filePath, '.ts');
  
  return `// ${fileName} utility file
export const ${fileName} = {
  // Add functionality here
};`;
}

// Function to fix specific file types
function fixFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    if (isCorrupted(content)) {
      console.log(`Recreating ${filePath} - file is corrupted`);
      
      if (filePath.endsWith('.tsx')) {
        // Special cases for specific components
        if (filePath.includes('layout.tsx')) {
          const layoutContent = `import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Zion Tech Group - AI & IT Solutions',
  description: 'Advanced AI and IT solutions for modern businesses'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}`;
          fs.writeFileSync(filePath, layoutContent);
          return;
        }
        
        if (filePath.includes('page.tsx') && !filePath.includes('about') && !filePath.includes('contact')) {
          const pageContent = `"use client";

import React from 'react';
import Link from 'next/link';
import { Brain, Shield, Zap, Star } from 'lucide-react';

const HomePage = () => {
  const features = [
    {
      title: "AI-Powered Solutions",
      description: "Cutting-edge artificial intelligence to transform your business operations",
      icon: <Brain className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      stats: "40% efficiency boost",
      link: "/ai-services"
    },
    {
      title: "IT Services",
      description: "Comprehensive technology solutions including cloud infrastructure and cybersecurity",
      icon: <Shield className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      stats: "99.9% uptime",
      link: "/it-services"
    },
    {
      title: "Performance Optimization",
      description: "Advanced performance monitoring and optimization for maximum efficiency",
      icon: <Zap className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      stats: "3x faster",
      link: "/performance"
    },
    {
      title: "Quality Assurance",
      description: "Rigorous testing and quality assurance to ensure reliable solutions",
      icon: <Star className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      stats: "100% tested",
      link: "/quality"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Zion Tech Group</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transforming businesses with cutting-edge AI and IT solutions. 
              We deliver innovative technology that drives growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/about" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Learn More
              </Link>
              <Link 
                href="/contact" 
                className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105">
                  <div className={\`inline-flex p-3 rounded-lg bg-gradient-to-r \${feature.color} mb-4\`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {feature.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-blue-400">
                      {feature.stats}
                    </span>
                    <Link 
                      href={feature.link}
                      className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
                    >
                      Learn more →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;`;
          fs.writeFileSync(filePath, pageContent);
          return;
        }
        
        if (filePath.includes('404.tsx')) {
          const notFoundContent = `import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-300 mb-4">Page Not Found</h2>
        <p className="text-gray-400 mb-8">The page you're looking for doesn't exist.</p>
        <Link 
          href="/"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}`;
          fs.writeFileSync(filePath, notFoundContent);
          return;
        }
        
        // Default component
        const basicContent = createBasicComponent(filePath);
        fs.writeFileSync(filePath, basicContent);
      } else if (filePath.endsWith('.ts')) {
        const basicContent = createBasicTypeScript(filePath);
        fs.writeFileSync(filePath, basicContent);
      }
    } else {
      console.log(`Skipping ${filePath} - file appears to be valid`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Get all TypeScript and TSX files
function getAllFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and other directories
      if (!['node_modules', '.next', 'dist', 'build'].includes(file)) {
        getAllFiles(filePath, fileList);
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Process all files
console.log('Starting comprehensive file fix...');
const allFiles = getAllFiles('./app');
allFiles.forEach(fixFile);

// Also process components directory
const componentFiles = getAllFiles('./components');
componentFiles.forEach(fixFile);

console.log('Comprehensive file fix completed!');