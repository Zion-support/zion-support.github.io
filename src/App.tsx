import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';
import ErrorBoundary from './src/components/ErrorBoundary';
import { performanceMonitor } from './utils/performanceMonitor';
import { accessibilityManager } from './utils/accessibility';
import './index.css';

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'));

export default function App(): React.JSX.Element {
  useEffect(() => {
    // Initialize accessibility features
    accessibilityManager.addSkipLink();
    accessibilityManager.announceToScreenReader('Zion website loaded successfully');
    
    // Start performance monitoring
    performanceMonitor.startMeasure('app-render');
    performanceMonitor.reportCoreWebVitals();
    
    return () => {
      performanceMonitor.endMeasure('app-render');
    };
  }, []);

  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-white" role="application" aria-label="Zion website">
          <ScrollToTop />
          <Header />
          
          <main id="main-content" role="main" aria-label="Main content">
            <Suspense fallback={
              <div className="flex items-center justify-center min-h-screen" role="status" aria-label="Loading page">
                <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
                <span className="sr-only">Loading...</span>
              </div>
            }>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={
                  <main className="container mx-auto px-4 py-16">
                    <div className="text-center">
                      <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Blog</h1>
                      <p className="text-xl text-gray-600">Latest insights and updates</p>
                    </div>
                  </main>
                } />
                <Route path="/contact" element={
                  <main className="container mx-auto px-4 py-16">
                    <div className="text-center">
                      <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
                      <p className="text-xl text-gray-600">Get in touch with our team</p>
                    </div>
                  </main>
                } />
                <Route path="*" element={
                  <main className="container mx-auto px-4 py-16 text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
                    <p className="text-xl text-gray-600">The page you&apos;re looking for doesn&apos;t exist.</p>
                    <a href="/" className="mt-4 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                      Go Home
                    </a>
                  </main>
                } />
              </Routes>
            </Suspense>
          </main>
          
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}
