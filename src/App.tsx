import React, { Suspense, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';

// Import components
import ErrorBoundary from './components/ErrorBoundary';
import SEOOptimizer from './components/SEOOptimizer';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import PerformanceMonitor from './components/PerformanceMonitor';
import LoadingSpinner from '../app/components/LoadingSpinner';

// Lazy load pages for better performance
const HomePage = React.lazy(() => import('../app/page'));
const AboutPage = React.lazy(() => import('../app/about/page'));
const ContactPage = React.lazy(() => import('../app/contact/page'));
const ServicesPage = React.lazy(() => import('../app/services/page').catch(() => ({ default: () => <div>Services page not found</div> })));
const TeamPage = React.lazy(() => import('../app/team/page'));
const PrivacyPage = React.lazy(() => import('../app/privacy/page'));
const TermsPage = React.lazy(() => import('../app/terms/page'));

function App() {
  const initializeOptimizations = useCallback(() => {
    try {
      console.log('App initialized successfully');
    } catch (error) {
      console.error('Failed to initialize app:', error);
    }
  }, []);

  useEffect(() => {
    initializeOptimizations();
  }, [initializeOptimizations]);

  return (
    <HelmetProvider>
      <ErrorBoundary>
        <SEOOptimizer>
          <AccessibilityEnhancer>
            <Router>
              <div className="App">
                <Suspense fallback={<LoadingSpinner />}>
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/team" element={<TeamPage />} />
                    <Route path="/privacy" element={<PrivacyPage />} />
                    <Route path="/terms" element={<TermsPage />} />
                  </Routes>
                </Suspense>
                <PerformanceMonitor>
                  <div />
                </PerformanceMonitor>
              </div>
            </Router>
          </AccessibilityEnhancer>
        </SEOOptimizer>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;
