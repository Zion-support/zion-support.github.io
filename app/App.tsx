import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Components
import EnhancedErrorBoundary from './components/EnhancedErrorBoundary';
import SEOEnhancer from './components/SEOEnhancer';
import LoadingSpinner from './components/LoadingSpinner';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import PerformanceDashboard from './components/PerformanceDashboard';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./page'));
const AboutPage = lazy(() => import('./about/page'));
const ServicesPage = lazy(() => import('./services/page'));
const ContactPage = lazy(() => import('./contact/page'));
const TeamPage = lazy(() => import('./team/page'));
const PrivacyPage = lazy(() => import('./privacy/page'));
const TermsPage = lazy(() => import('./terms/page'));
const EnterprisePage = lazy(() => import('./enterprise/page'));
const ServicesAdvertisingPage = lazy(() => import('./services-advertising/page'));
const CaseStudiesPage = lazy(() => import('./case-studies/page'));

// Utils
import { performanceOptimizer, prefetchResources } from '../utils/performanceOptimizer';

// Styles
import './globals.css';

const App: React.FC = () => {
  useEffect(() => {
    // Initialize global error handling
    console.log('App initialized');

    // Initialize performance monitoring
    performanceOptimizer.lazyLoadImages();
    performanceOptimizer.addCriticalResourceHints();
    prefetchResources(['/api/health']);
    
    // Initialize Web Vitals monitoring
    if (typeof window !== 'undefined' && 'performance' in window) {
      const pageLoadMetrics = performanceOptimizer.measurePageLoad();
      if (pageLoadMetrics) {
        performanceOptimizer.reportWebVitals(pageLoadMetrics);
      }
    }
    
    console.log('Performance monitoring initialized');
    console.log(
      '🚀 Zion Tech Group App initialized with comprehensive monitoring',
    );
  }, []);

  return (
    <HelmetProvider>
      <EnhancedErrorBoundary>
        <PerformanceOptimizer>
          <AccessibilityEnhancer>
            <SEOEnhancer
              title="Zion Tech Group - Advanced AI and IT Solutions"
              description="Leading provider of enterprise AI solutions, quantum computing, and autonomous systems. Transform your business with our cutting-edge technology."
            >
              <Router>
                <div className='App'>
                  <Navigation />
                  <main id='main-content'>
                    <Suspense fallback={<LoadingSpinner />}>
                      <Routes>
                        <Route path='/' element={<HomePage />} />
                        <Route path='/about' element={<AboutPage />} />
                        <Route path='/services' element={<ServicesPage />} />
                        <Route path='/contact' element={<ContactPage />} />
                        <Route path='/team' element={<TeamPage />} />
                        <Route path='/privacy' element={<PrivacyPage />} />
                        <Route path='/terms' element={<TermsPage />} />
                        <Route path='/enterprise' element={<EnterprisePage />} />
                        <Route path='/services-advertising' element={<ServicesAdvertisingPage />} />
                        <Route path='/case-studies' element={<CaseStudiesPage />} />
                      </Routes>
                    </Suspense>
                  </main>
                  <Footer />

                  {/* Performance Dashboard */}
                  <PerformanceDashboard />
                </div>
              </Router>
            </SEOEnhancer>
          </AccessibilityEnhancer>
        </PerformanceOptimizer>
      </EnhancedErrorBoundary>
    </HelmetProvider>
  );
};

export default App;