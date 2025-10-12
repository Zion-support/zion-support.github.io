#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Read all page files
const appDir = '/workspace/app';
const pages = [];

function findPages(dir) {
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      // Check if this directory has a page.tsx file
      const pageFile = path.join(fullPath, 'page.tsx');
      if (fs.existsSync(pageFile)) {
        const relativePath = path.relative(appDir, fullPath);
        pages.push(relativePath);
      }
      
      // Recursively search subdirectories
      findPages(fullPath);
    }
  }
}

findPages(appDir);

// Sort pages for consistent output
pages.sort();

// Create a clean App.tsx with proper routing
const appTsxContent = `import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Header from './app/components/Header'
import Footer from './app/components/Footer'
import ErrorBoundary from './app/components/ErrorBoundary'

// Lazy load pages for better performance
const HomePage = React.lazy(() => import('./app/page'))

// Dynamic route loader component
const DynamicPage = ({ pagePath }) => {
  const PageComponent = React.lazy(() => import(\`./app/\${pagePath}/page\`))
  return <PageComponent />
}

// Loading component for Suspense
const PageLoader = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
    <span className="ml-3 text-white text-lg">Loading page...</span>
  </div>
)

function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <Router>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
            <Header />
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                ${pages.map(page => {
                  const routePath = '/' + page;
                  return `                <Route path="${routePath}" element={<DynamicPage pagePath="${page}" />} />`;
                }).join('\n')}
                
                {/* 404 Route */}
                <Route path="*" element={
                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
                    <div className="text-center">
                      <h1 className="text-6xl font-bold text-white mb-4">404</h1>
                      <p className="text-xl text-gray-300 mb-8">Page not found</p>
                      <a 
                        href="/" 
                        className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                      >
                        Go Home
                      </a>
                    </div>
                  </div>
                } />
              </Routes>
            </Suspense>
            <Footer />
          </div>
        </Router>
      </ErrorBoundary>
    </HelmetProvider>
  )
}

export default App`;

// Write the clean App.tsx
fs.writeFileSync('/workspace/App.tsx', appTsxContent);

console.log(`Updated App.tsx with dynamic routing for ${pages.length} pages`);
console.log('All pages should now be accessible via routing without TypeScript errors');