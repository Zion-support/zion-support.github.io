import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import ErrorBoundary from './src/components/ErrorBoundary';
// import { Footer } from './components/Footer';
import Home from './pages/Home';
import { performanceMonitor } from './utils/performanceMonitor';
import { accessibilityManager } from './utils/accessibility';
import './index.css';

export default function App(): React.JSX.Element {
  useEffect(() => {
    // Initialize enhanced accessibility features
    accessibilityManager.initialize({
      announceChanges: true,
      reducedMotion: true,
      highContrast: true
    });
    accessibilityManager.announceToScreenReader('Zion website loaded successfully');
    
    // Start enhanced performance monitoring
    performanceMonitor.startMeasure('app-render');
    performanceMonitor.reportCoreWebVitals();
    
    return () => {
      performanceMonitor.endMeasure('app-render');
      accessibilityManager.cleanup();
      performanceMonitor.cleanup();
    };
  }, []);

  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-white">
          <ScrollToTop />
          <Header />
          
          <main id="main-content">
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
                </main>
              } />
            </Routes>
          </main>
          
          {/* <Footer /> */}
        </div>
      </Router>
    </ErrorBoundary>
  );
}
