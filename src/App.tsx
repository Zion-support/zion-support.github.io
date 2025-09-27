import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import Footer from './components/Footer';
import SkipLink from './components/SkipLink';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorBoundary from './components/ErrorBoundary';
import ErrorFallback from './components/ErrorFallback';
import { initializeErrorReporting } from './utils/errorReporting';
import { initOptimizations } from './utils/buildOptimizations';
import { seoManager } from './utils/seoEnhanced';
import { accessibilityManager } from './utils/accessibility';
import './index.css';

// Lazy load components for better performance
const Home = lazy(() => import('./pages/Home'));
const Blog = lazy(() => import('./pages/Blog'));
const Contact = lazy(() => import('./pages/Contact'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const NotFound = lazy(() => import('./pages/NotFound'));

export default function App(): React.JSX.Element {
  useEffect(() => {
    // Initialize error reporting
    initializeErrorReporting();
    
    // Initialize build optimizations
    initOptimizations();
    
    // Initialize accessibility features
    accessibilityManager.initialize({
      announceChanges: true,
      reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
      highContrast: window.matchMedia('(prefers-contrast: high)').matches
    });

    // Set default SEO data
    seoManager.updateSEO({
      title: 'Zion Tech Group - Leading Technology Solutions',
      description: 'Innovative technology solutions and consulting services for modern businesses. Expert development, cloud services, and digital transformation.',
      keywords: ['technology', 'consulting', 'development', 'cloud services', 'digital transformation'],
      ogType: 'website',
      ogImage: '/og-image.png',
      twitterCard: 'summary_large_image',
      structuredData: [
        seoManager.generateOrganizationStructuredData(),
        seoManager.generateWebsiteStructuredData()
      ]
    });

    // Mark app as fully initialized
    if (typeof window !== 'undefined' && window.performance) {
      performance.mark('app-init-complete');
      performance.measure('app-initialization', 'app-init-start', 'app-init-complete');
    }
  }, []);

  return (
    <ErrorBoundary fallback={<ErrorFallback />}>
      <Router>
        <div className="min-h-screen bg-white">
          <SkipLink />
          <ScrollToTop />
          <Header />
          
          <main id="main-content">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}
