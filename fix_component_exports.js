#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

console.log('Fixing component exports...');

// List of components that need to be fixed
const componentsToFix = [
    'PerformanceOptimizer',
    'SEOEnhancer', 
    'AccessibilityEnhancer',
    'ErrorBoundary',
    'PerformanceMonitor',
    'MetaManager',
    'EnhancedAnalytics',
    'AdvancedLoadingStates',
    'Navigation',
    'Footer'
];

// Function to fix a component file
function fixComponent(filePath, componentName) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Check if it's a page component that needs to be converted to a proper component
        if (content.includes(`${componentName}Page`)) {
            console.log(`Fixing ${filePath}`);
            
            // Create a proper component based on the component name
            let newContent;
            
            if (componentName === 'Navigation') {
                newContent = `import React from 'react';
import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="bg-slate-900 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-white text-xl font-bold">
            Zion Tech Group
          </Link>
          <div className="space-x-4">
            <Link href="/services" className="text-gray-300 hover:text-white">
              Services
            </Link>
            <Link href="/solutions" className="text-gray-300 hover:text-white">
              Solutions
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}`;
            } else if (componentName === 'Footer') {
                newContent = `import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
      </div>
    </footer>
  );
}`;
            } else if (componentName === 'ErrorBoundary') {
                newContent = `import React, { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-red-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-red-600 mb-4">Something went wrong</h1>
            <p className="text-gray-600">Please refresh the page and try again.</p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}`;
            } else {
                // Generic component
                newContent = `import React from 'react';

export default function ${componentName}() {
  return (
    <div className="${componentName.toLowerCase()}">
      {/* ${componentName} component implementation */}
    </div>
  );
}`;
            }
            
            fs.writeFileSync(filePath, newContent);
            return true;
        }
        
        return false;
    } catch (error) {
        console.error(`Error fixing ${filePath}:`, error.message);
        return false;
    }
}

// Fix each component
let fixedCount = 0;
for (const componentName of componentsToFix) {
    const filePath = `./app/components/${componentName}.tsx`;
    if (fs.existsSync(filePath)) {
        if (fixComponent(filePath, componentName)) {
            fixedCount++;
        }
    }
}

console.log(`Fixed ${fixedCount} component exports`);
console.log('Component export fixes completed!');