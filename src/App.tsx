import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import AdvancedErrorBoundary from './components/AdvancedErrorBoundary';
import PerformanceMonitor from './components/PerformanceMonitor';
import SEO from './components/SEO';
import Home from './pages/Home';
import { performanceMonitor } from './utils/performanceMonitor';
import { accessibilityManager } from './utils/accessibility';
import { analytics } from './utils/analytics';
import { security } from './utils/security';
import './index.css';
import './styles/improvements.css';

export default function App(): React.JSX.Element {
  useEffect(() => {
    // Initialize enhanced accessibility features
    accessibilityManager.initialize({
      announceChanges: true,
      reducedMotion: true,
      highContrast: true
    });
    accessibilityManager.announceToScreenReader('Zion website loaded successfully');
    
    // Initialize analytics
    analytics.trackPageView();
    
    // Initialize security
    console.log('Security audit score:', security.audit().score);
    
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
    <AdvancedErrorBoundary showDetails={process.env.NODE_ENV === 'development'}>
      <ErrorBoundary>
        <Router>
          <SEO />
          <div className="min-h-screen bg-white">
            <ScrollToTop />
            <Header />
            
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blog" element={
                <main className="container mx-auto px-4 py-16">
                  <SEO 
                    title="Our Blog - Latest Tech Insights"
                    description="Stay updated with the latest insights, trends, and innovations in AI, technology, and digital transformation."
                    keywords={['tech blog', 'AI insights', 'technology trends', 'digital transformation']}
                  />
                  <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Blog</h1>
                    <p className="text-xl text-gray-600">Latest insights and updates</p>
                  </div>
                </main>
              } />
              <Route path="/contact" element={
                <main className="container mx-auto px-4 py-16">
                  <SEO 
                    title="Contact Us - Get in Touch"
                    description="Get in touch with our expert team. We're here to help you transform your business with cutting-edge technology solutions."
                    keywords={['contact', 'get in touch', 'consultation', 'support']}
                  />
                  <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
                    <p className="text-xl text-gray-600">Get in touch with our team</p>
                  </div>
                </main>
              } />
              <Route path="*" element={
                <main className="container mx-auto px-4 py-16 text-center">
                  <SEO 
                    title="Page Not Found - 404"
                    description="The page you're looking for doesn't exist. Let us help you find what you need."
                  />
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
                  <p className="text-xl text-gray-600">The page you&apos;re looking for doesn&apos;t exist.</p>
                </main>
              } />
            </Routes>
            
            <Footer />
            <PerformanceMonitor show={process.env.NODE_ENV === 'development'} />
          </div>
        </Router>
      </ErrorBoundary>
    </AdvancedErrorBoundary>
  );
}
