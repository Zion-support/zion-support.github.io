import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Components
import ErrorBoundary from '../src/components/ErrorBoundary';
import SEOOptimizer from '../src/components/SEOOptimizer';
import AccessibilityEnhancer from '../src/components/AccessibilityEnhancer';
import PerformanceMonitor from './components/PerformanceMonitor';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./page'));
const AboutPage = lazy(() => import('./about/page'));
const ServicesPage = lazy(() => import('./services/page'));
const ContactPage = lazy(() => import('./contact/page'));
const EnterprisePage = lazy(() => import('./enterprise/page'));
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import PerformanceDashboard from './components/PerformanceDashboard';

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
  </div>
);

// Lazy load pages for better performance
const HomePage = lazy(() => import('./page'));

// Utils
import { performanceOptimizer, prefetchResources } from '../src/utils/performanceOptimizer';

// Styles
import '../src/index.css';

function App() {
  useEffect(() => {
    // Initialize performance monitoring
    if (typeof window !== 'undefined') {
      console.log('App initialized successfully');
    }
  }, []);

  return (
    <HelmetProvider>
      <ErrorBoundary>
        <AccessibilityEnhancer>
          <SEOOptimizer>
            <Router>
              <div className="App">
                <Suspense fallback={<LoadingSpinner />}>
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/team" element={<TeamPage />} />
                    <Route path="/privacy" element={<PrivacyPage />} />
                    <Route path="/terms" element={<TermsPage />} />
                    <Route path="/enterprise" element={<EnterprisePage />} />
                  </Routes>
                </Suspense>
              </div>
            </Router>
          </SEOOptimizer>
        </AccessibilityEnhancer>
        <AccessibilityEnhancer>
          <Router>
            <div className='App'>
              {/* Skip to main content link for accessibility */}
              <a
                href='#main-content'
                className='skip-link sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50'
                onClick={e => {
                  e.preventDefault();
                  const main =
                    document.querySelector('main') ||
                    document.querySelector('#main-content');
                  if (main) {
                    main.focus();
                    main.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Skip to main content
              </a>

              <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                  <Route path='/' element={<HomePage />} />
                  {/* Add more routes as needed */}
                </Routes>
              </Suspense>

              {/* Performance Dashboard */}
              <PerformanceDashboard />
            </div>
          </Router>
        </AccessibilityEnhancer>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;