import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Components
import ErrorBoundary from '../src/components/ErrorBoundary';
import SEOEnhancer from '../src/components/SEOEnhancer';
import AccessibilityEnhancer from '../src/components/AccessibilityEnhancer';
import PerformanceMonitor from '../src/components/PerformanceMonitor';
import { LoadingSpinner } from '../components/LoadingComponents';
import PerformanceDashboard from './components/PerformanceDashboard';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./page'));

// Loading component is imported from components/LoadingComponents
// Utils
import performanceOptimizer from '../src/utils/performanceOptimizer';

// Styles
import '../index.css';
import '../src/styles/accessibility.css';

const App: React.FC = () => {
  useEffect(() => {
    // Initialize global error handling
    console.log('App initialized');

    // Initialize performance monitoring
    performanceOptimizer.lazyLoadImages();
    console.log('Performance monitoring initialized');
    console.log(
      '🚀 Zion Tech Group App initialized with comprehensive monitoring',
    );
  }, []);

  return (
    <HelmetProvider>
      <ErrorBoundary>
        <SEOEnhancer
          title="Zion Tech Group - Advanced AI and IT Solutions"
          description="Leading provider of AI-powered enterprise solutions, automation, and digital transformation services. Discover cutting-edge technology solutions for modern businesses."
          keywords={['AI', 'artificial intelligence', 'enterprise solutions', 'automation', 'digital transformation', 'IT consulting', 'machine learning', 'data analytics']}
          structuredData={{
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Zion Tech Group',
            description: 'Leading provider of AI-powered enterprise solutions, automation, and digital transformation services.',
            url: window.location.origin,
            logo: `${window.location.origin}/logo.png`,
            sameAs: [
              'https://linkedin.com/company/zion-tech-group',
              'https://twitter.com/ziontechgroup'
            ],
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+1-555-0123',
              contactType: 'customer service',
              availableLanguage: 'English'
            }
          }}
        >
          <AccessibilityEnhancer>
            <Router>
              <div className='App'>
                <main id="main-content" tabIndex={-1}>
                  <Suspense fallback={<LoadingSpinner />}>
                    <Routes>
                      <Route path='/' element={<HomePage />} />
                      {/* Add more routes as needed */}
                    </Routes>
                  </Suspense>
                </main>

                {/* Performance Monitoring */}
                <PerformanceMonitor 
                  enabled={process.env.NODE_ENV === 'development'}
                  budget={{
                    maxBundleSize: 500,
                    maxImageSize: 100,
                    maxFirstLoad: 3000,
                    maxInteractive: 2000
                  }}
                />

                {/* Performance Dashboard */}
                <PerformanceDashboard />
              </div>
            </Router>
          </AccessibilityEnhancer>
        </SEOEnhancer>
      </ErrorBoundary>
    </HelmetProvider>
  );
};

export default App;
