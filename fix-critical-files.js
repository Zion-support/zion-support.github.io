#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function fixAppTsx() {
  const content = `import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ErrorBoundary from './app/components/ErrorBoundary';
import LoadingSpinner from './app/components/LoadingSpinner';
import Navigation from './app/components/Navigation';
import Sidebar from './app/components/Sidebar';

// Import pages
import HomePage from './app/pages/HomePage';
import AboutPage from './app/pages/AboutPage';
import ServicesPage from './app/pages/ServicesPage';
import ContactPage from './app/pages/ContactPage';
import NotFoundPage from './app/404';

function App() {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <Router>
          <div className="min-h-screen bg-slate-900 flex">
            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
            <div className="flex-1 flex flex-col">
              <Navigation onSidebarToggle={() => setSidebarOpen(true)} />
              <main className="relative z-10 flex-1" id="main-content" role="main">
                <ErrorBoundary>
                  <Suspense fallback={<LoadingSpinner fullScreen text="Loading page..." />}>
                    <Routes>
                      <Route path="/" element={<HomePage />} />
                      <Route path="/about" element={<AboutPage />} />
                      <Route path="/services" element={<ServicesPage />} />
                      <Route path="/contact" element={<ContactPage />} />
                      <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                  </Suspense>
                </ErrorBoundary>
              </main>
            </div>
          </div>
        </Router>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;`;
  
  fs.writeFileSync('/workspace/App.tsx', content);
  console.log('Fixed App.tsx');
}

function fix404Page() {
  const content = `import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>404 - Zion Tech Group</title>
        <meta name="description" content="Page not found - Zion Tech Group" />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            404 - Page Not Found
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            The page you are looking for does not exist.
          </p>
          <a 
            href="/" 
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Go Home
          </a>
        </div>
      </div>
    </>
  );
}`;
  
  fs.writeFileSync('/workspace/app/404.tsx', content);
  console.log('Fixed 404.tsx');
}

function fix5gImplementationPage() {
  const content = `import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function FiveGImplementationPage() {
  return (
    <>
      <Helmet>
        <title>5G Implementation - Zion Tech Group</title>
        <meta name="description" content="Professional 5G implementation services by Zion Tech Group." />
      </Helmet>
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            5G Implementation Services
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Transform your business with cutting-edge 5G technology.
          </p>
        </div>
      </div>
    </>
  );
}`;
  
  fs.writeFileSync('/workspace/app/5g-implementation/page.tsx', content);
  console.log('Fixed 5g-implementation/page.tsx');
}

// Main execution
console.log('Fixing critical files...');

fixAppTsx();
fix404Page();
fix5gImplementationPage();

console.log('Critical files fixed!');