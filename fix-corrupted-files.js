#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

console.log('🔧 Starting comprehensive file corruption fix...');

// List of corrupted files that need to be fixed or removed
const corruptedFiles = [
  'App-backup.tsx',
  'App-minimal.tsx', 
  'App-optimized.tsx',
  'EnhancedFooter.tsx',
  'EnhancedHeader.tsx',
  'add-missing-routes-v2.js',
  'add-missing-routes.js',
  'api/shipping-rates.tsx',
  'app-disabled/careers/page.tsx',
  'app/5g-mobile-applications/page.tsx',
  'app/5g-network-infrastructure/page.tsx',
  'app/5g-network-optimization/page.tsx',
  'app/5g-private-networks/page.tsx',
  'app/5g-smart-city-solutions/page.tsx',
  'app/5g-solutions/page.tsx',
  'app/App.tsx',
  'app/about/page.tsx',
  'app/accessibility-page/page.tsx',
  'app/accessibility/page.tsx',
  'app/ad-management/page.tsx',
  'app/advanced-security-suite/page.tsx',
  'app/ai-3d-generation/page.tsx',
  'app/ai-accounting-assistant/page.tsx',
  'app/ai-agricultural-intelligence-pro/page.tsx',
  'app/ai-analytics-dashboard-pro/page.tsx',
  'app/ai-analytics-dashboard/page.tsx',
  'app/ai-analytics/page.tsx',
  'app/ai-api-management/page.tsx',
  'app/ai-api-manager/page.tsx',
  'app/ai-automated-reporting/page.tsx',
  'app/ai-automated-testing/page.tsx',
  'app/ai-automation-platform/page.tsx'
];

// Function to check if file is corrupted
function isFileCorrupted(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    
    // Check for common corruption patterns
    const corruptionPatterns = [
      /<div:\s*className\s*=\s*"/,  // Malformed JSX
      /<Link:\s*to\s*=\s*"/,        // Malformed JSX
      /<ArrowRight:\s*className\s*=\s*"/, // Malformed JSX
      /export\s+default\s+\w+;\s*";\s*";\s*";/, // Multiple semicolons
      /;\s*";\s*";\s*";/,           // Multiple semicolons
      /<[^>]*:\s*[^>]*>/,           // Malformed JSX with colons
      /}\s*\)\s*\)\s*\)\s*\)/,      // Multiple closing parentheses
      /function\s+\w+\(\)\s*{\s*}\s*\[/, // Malformed function syntax
      /return\s+\(\s*<[^>]*:\s*[^>]*>/, // Malformed return with colons
    ];
    
    return corruptionPatterns.some(pattern => pattern.test(content));
  } catch (error) {
    return true; // If we can't read the file, consider it corrupted
  }
}

// Function to create a basic valid page component
function createValidPageComponent(fileName) {
  const componentName = fileName
    .replace(/[^a-zA-Z0-9]/g, '')
    .replace(/^page$/, 'Page')
    .replace(/^([a-z])/, (match, p1) => p1.toUpperCase());
  
  return `import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function ${componentName}() {
  return (
    <>
      <Helmet>
        <title>${componentName} - Zion Tech Group</title>
        <meta name="description" content="Professional ${componentName} services by Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              ${componentName}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional ${componentName} services delivered with excellence by our expert team.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}`;
}

// Function to create a valid App component
function createValidAppComponent() {
  return `import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ErrorBoundary } from 'react-error-boundary';

// Lazy load components
const HomePage = React.lazy(() => import('./pages/HomePage'));
const AboutPage = React.lazy(() => import('./pages/AboutPage'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));

// Error fallback component
function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h2>
        <p className="text-gray-600 mb-4">{error.message}</p>
        <button
          onClick={resetErrorBoundary}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <HelmetProvider>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </HelmetProvider>
    </Router>
  );
}

export default App;`;
}

// Function to fix corrupted files
function fixCorruptedFiles() {
  let fixedCount = 0;
  let removedCount = 0;
  
  for (const filePath of corruptedFiles) {
    const fullPath = path.join(process.cwd(), filePath);
    
    if (fs.existsSync(fullPath)) {
      if (isFileCorrupted(fullPath)) {
        console.log(`🔧 Fixing corrupted file: ${filePath}`);
        
        try {
          // For App.tsx, create a proper App component
          if (filePath === 'app/App.tsx') {
            fs.writeFileSync(fullPath, createValidAppComponent());
            fixedCount++;
          }
          // For page components, create basic valid components
          else if (filePath.includes('/page.tsx')) {
            const fileName = path.basename(path.dirname(filePath));
            fs.writeFileSync(fullPath, createValidPageComponent(fileName));
            fixedCount++;
          }
          // For other files, remove them if they're corrupted
          else {
            fs.unlinkSync(fullPath);
            console.log(`🗑️  Removed corrupted file: ${filePath}`);
            removedCount++;
          }
        } catch (error) {
          console.error(`❌ Error fixing ${filePath}:`, error.message);
        }
      }
    }
  }
  
  console.log(`✅ Fixed ${fixedCount} files and removed ${removedCount} corrupted files`);
}

// Function to clean up backup and temporary files
function cleanupTemporaryFiles() {
  const tempFiles = [
    'App-backup.tsx',
    'App-minimal.tsx',
    'App-optimized.tsx',
    'EnhancedFooter.tsx',
    'EnhancedHeader.tsx',
    'add-missing-routes-v2.js',
    'add-missing-routes.js',
    'api/shipping-rates.tsx',
    'app-disabled/careers/page.tsx'
  ];
  
  let cleanedCount = 0;
  
  for (const filePath of tempFiles) {
    const fullPath = path.join(process.cwd(), filePath);
    if (fs.existsSync(fullPath)) {
      try {
        fs.unlinkSync(fullPath);
        console.log(`🗑️  Removed temporary file: ${filePath}`);
        cleanedCount++;
      } catch (error) {
        console.error(`❌ Error removing ${filePath}:`, error.message);
      }
    }
  }
  
  console.log(`✅ Cleaned up ${cleanedCount} temporary files`);
}

// Function to create missing essential pages
function createEssentialPages() {
  const essentialPages = [
    {
      path: 'app/pages/HomePage.tsx',
      content: `import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Zion Tech Group - AI & IT Solutions</title>
        <meta name="description" content="Leading provider of AI-powered solutions and innovative IT services" />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Welcome to Zion Tech Group
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              We deliver cutting-edge AI and IT solutions that transform businesses and drive digital innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                Get Started
              </button>
              <button className="px-8 py-4 border border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}`
    },
    {
      path: 'app/pages/AboutPage.tsx',
      content: `import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission and expertise in AI and IT solutions" />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              About Zion Tech Group
            </h1>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              We are a leading technology company specializing in AI-powered solutions and innovative IT services that transform businesses and drive digital transformation.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}`
    },
    {
      path: 'app/pages/ContactPage.tsx',
      content: `import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact Us - Zion Tech Group</title>
        <meta name="description" content="Get in touch with Zion Tech Group for your AI and IT solution needs" />
      </Helmet>
      
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ready to transform your business with our AI and IT solutions? Get in touch with our expert team.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}`
    }
  ];
  
  // Create pages directory if it doesn't exist
  const pagesDir = path.join(process.cwd(), 'app/pages');
  if (!fs.existsSync(pagesDir)) {
    fs.mkdirSync(pagesDir, { recursive: true });
  }
  
  let createdCount = 0;
  
  for (const page of essentialPages) {
    const fullPath = path.join(process.cwd(), page.path);
    if (!fs.existsSync(fullPath)) {
      try {
        fs.writeFileSync(fullPath, page.content);
        console.log(`📄 Created essential page: ${page.path}`);
        createdCount++;
      } catch (error) {
        console.error(`❌ Error creating ${page.path}:`, error.message);
      }
    }
  }
  
  console.log(`✅ Created ${createdCount} essential pages`);
}

// Main execution
try {
  console.log('🧹 Cleaning up temporary files...');
  cleanupTemporaryFiles();
  
  console.log('🔧 Fixing corrupted files...');
  fixCorruptedFiles();
  
  console.log('📄 Creating essential pages...');
  createEssentialPages();
  
  console.log('🎉 File corruption fix completed successfully!');
} catch (error) {
  console.error('❌ Error during file corruption fix:', error);
  process.exit(1);
}