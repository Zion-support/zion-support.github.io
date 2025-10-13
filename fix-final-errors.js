import fs from 'fs';

// Fix ErrorBoundary component
function fixErrorBoundary() {
  const content = `import React, { Component, ReactNode } from 'react';

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

export default class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Something went wrong</h1>
            <p className="text-xl text-gray-300">Please try refreshing the page</p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}`;

  fs.writeFileSync('app/components/ErrorBoundary.tsx', content, 'utf8');
  console.log('Fixed: app/components/ErrorBoundary.tsx');
}

// Fix duplicate React imports
function fixDuplicateImports() {
  const files = [
    'app/components/EnhancedPerformanceMonitor.tsx',
    'app/components/ImprovedImage.tsx',
    'app/layout.tsx'
  ];

  files.forEach(file => {
    try {
      let content = fs.readFileSync(file, 'utf8');
      
      // Remove duplicate React imports
      content = content
        .replace(/import React from 'react';\s*import React from 'react';/g, 'import React from \'react\';')
        .replace(/import React, {[^}]+} from 'react';\s*import React from 'react';/g, 'import React, { useState, useEffect } from \'react\';');
      
      fs.writeFileSync(file, content, 'utf8');
      console.log(`Fixed: ${file}`);
    } catch (error) {
      console.error(`Error fixing ${file}:`, error.message);
    }
  });
}

// Fix missing Shield import
function fixShieldImport() {
  const content = `import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield } from 'lucide-react';

export default function ZionAiEmailMarketingProPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Zion AI Email Marketing Pro - Zion Tech Group</title>
        <meta name="description" content="Advanced AI email marketing solutions by Zion Tech Group" />
      </Helmet>
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8">Zion AI Email Marketing Pro</h1>
          <p className="text-xl text-gray-300 mb-8">
            This page is under development. Please check back later.
          </p>
        </div>
      </div>
    </div>
  );
}`;

  fs.writeFileSync('app/zion-ai-email-marketing-pro/page.tsx', content, 'utf8');
  console.log('Fixed: app/zion-ai-email-marketing-pro/page.tsx');
}

// Main function
async function main() {
  console.log('Fixing final errors...');
  
  fixErrorBoundary();
  fixDuplicateImports();
  fixShieldImport();
  
  console.log('Final errors fixed!');
}

main().catch(console.error);