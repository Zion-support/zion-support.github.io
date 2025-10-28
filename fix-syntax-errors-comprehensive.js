#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix corrupted page files
function fixPageFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if file is corrupted (has imports mixed with JSX)
    if (content.includes('import { ErrorBoundary }') && content.includes('<div>')) {
            
      // Extract the proper imports and metadata
      const importMatch = content.match(//);
      /);
      
      // Extract the JSX content (everything after the first <div>)
      const jsxMatch = content.match(/<div[^>]*>[\s\S]*$/);
      
      if (jsxMatch) {
        let jsxContent = jsxMatch[0];
        
        // Clean up the JSX content
        jsxContent = jsxContent.replace(/[\s\S]*?};/g, '');
        jsxContent = jsxContent.replace(/export /g, '');
        
        // Create the fixed content
        let fixedContent = '';
        
        // Add imports
        fixedContent += "import React from 'react';\n";
        if (importMatch) {
          fixedContent += importMatch[0] + "\n";
        }
        fixedContent += "import Link from 'next/link';\n\n";
        
        // Add metadata
        if (metadataMatch) {
          fixedContent += metadataMatch[0] + "\n\n";
        }
        
        // Add the component
        fixedContent += jsxContent;
        
        // Write the fixed content
        fs.writeFileSync(filePath, fixedContent);
              }
    }
  } catch (error) {
    // Empty block
  }
}

// Function to fix Navigation component
function fixNavigationFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Check if Navigation is corrupted
    if (content.includes('<nav>') && content.includes('<ul>') && content.includes('className={`bg-white')) {
            
      // Create a proper Navigation component
      const fixedContent = `import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, X } from 'lucide-react';

interface NavigationProps {
  children?: React.ReactNode;
  className?: string;
}



export default function Navigation({ children, className = '' }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <nav className={\`bg-white shadow-lg \${className}\`} role="navigation">
      {children || (
        <>
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center">
                <Link href="/" className="flex items-center space-x-2">
                  <div className="h-8 w-8 bg-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">Z</span>
                  </div>
                  <span className="text-xl font-bold text-gray-800">Zion Tech Group</span>
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Home
                </Link>
                
                {/* AI Services Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => toggleDropdown('ai')}
                    className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <span>AI Services</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  {activeDropdown === 'ai' && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                      {aiServices.map((service, index) => (
                        <Link
                          key={index}
                          href={service.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* IT Services Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => toggleDropdown('it')}
                    className="flex items-center space-x-1 text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <span>IT Services</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  {activeDropdown === 'it' && (
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                      {itServices.map((service, index) => (
                        <Link
                          key={index}
                          href={service.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">
                  About
                </Link>
                <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Contact
                </Link>
              </div>

              {/* CTA Button */}
              <div className="hidden md:flex items-center">
                <Link
                  href="/contact"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
                >
                  Get Started
                </Link>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
                >
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
              <div className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 rounded-lg mt-2">
                  <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-gray-900">
                    Home
                  </Link>
                  <div className="px-3 py-2">
                    <span className="text-gray-700 font-medium">AI Services</span>
                    <div className="ml-4 mt-2 space-y-1">
                      {aiServices.map((service, index) => (
                        <Link
                          key={index}
                          href={service.href}
                          className="block text-sm text-gray-600 hover:text-gray-900"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="px-3 py-2">
                    <span className="text-gray-700 font-medium">IT Services</span>
                    <div className="ml-4 mt-2 space-y-1">
                      {itServices.map((service, index) => (
                        <Link
                          key={index}
                          href={service.href}
                          className="block text-sm text-gray-600 hover:text-gray-900"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <Link href="/about" className="block px-3 py-2 text-gray-700 hover:text-gray-900">
                    About
                  </Link>
                  <Link href="/contact" className="block px-3 py-2 text-gray-700 hover:text-gray-900">
                    Contact
                  </Link>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </nav>
  );
}`;
      
      fs.writeFileSync(filePath, fixedContent);
          }
  } catch (error) {
    // Empty block
  }
}

// Function to fix specific problematic files
function fixSpecificFiles() {
  
  problematicFiles.forEach(file => {
    const fullPath = path.join(process.cwd(), file);
    if (fs.existsSync(fullPath)) {
      if (file === 'app/components/Navigation.tsx') {
        fixNavigationFile(fullPath);
      } else {
        fixPageFile(fullPath);
      }
    }
  });
}

// Main execution
fixSpecificFiles();
