<<<<<<< HEAD


=======
>>>>>>> origin/main
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';
import Footer from './components/Footer';
import { ThemeProvider } from './components/ThemeProvider';
import ScrollToTop from './components/ScrollToTop';
import { BackToTopButton } from './components/BackToTopButton';
// Pages are handled by Next.js in the app directory

function App() {
  return (
<<<<<<< HEAD

import React, { Suspense, lazy } from 'react';
import Footer from './components/Footer';
// Enhanced Components
import PerformanceOptimizer from './components/PerformanceOptimizer';
import EnhancedAccessibilityEnhancer from './components/EnhancedAccessibilityEnhancer';
// Lazy load pages for better performance - only import existing pages
const SolutionsPage = lazy(() => import('./pages/Solutions').then(module => ({ default: module.default })));
// Service Pages
  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <Sidebar />
          <main className="flex-1 lg:ml-80">
            <Suspense fallback={<LoadingSpinner />}>

              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/pricing" element={<Pricing />} />
              </Routes>
=======
    <ThemeProvider>
      <ErrorBoundary>
        <Router>
          <ScrollToTop />
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    Zion Tech Group
                  </h1>
                  <p className="text-xl text-gray-600 mb-8">
                    AI, Micro SaaS, and IT Services
                  </p>
                  <p className="text-gray-500">
                    This is a Vite-based React application. The main pages are handled by Next.js in the app directory.
                  </p>
                </div>
              </div>
>>>>>>> origin/main
            </main>
            <Footer />
            <BackToTopButton />
          </div>
        </Router>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

<<<<<<< HEAD
=======
export default App;
>>>>>>> origin/main
