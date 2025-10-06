import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

// Components
import ErrorBoundary from '../src/components/ErrorBoundary';
import SEOOptimizer from '../src/components/SEOOptimizer';
import AccessibilityEnhancer from '../src/components/AccessibilityEnhancer';
import LoadingSpinner from '../src/components/LoadingSpinner';

// Lazy load pages for better performance
const HomePage = lazy(() => import('./page'));
const AboutPage = lazy(() => import('./about/page'));
const ServicesPage = lazy(() => import('./services/page'));
const ContactPage = lazy(() => import('./contact/page'));
const AboutPage = lazy(() => import('./about/page'));
const ServicesPage = lazy(() => import('./services/page'));
const TeamPage = lazy(() => import('./team/page'));
const PrivacyPage = lazy(() => import('./privacy/page'));
const TermsPage = lazy(() => import('./terms/page'));

// Styles
import '../src/index.css';

function App() {
  useEffect(() => {
    // Initialize basic optimizations
    console.log('App initialized successfully');
  }, []);

  return (
    <HelmetProvider>
      <ErrorBoundary>
<<<<<<< HEAD
        <Router>
          <div className="App">
            <SEOOptimizer />
            <AccessibilityEnhancer />
            <PerformanceDashboard />
            
            <Navigation />
            
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/enterprise" element={<EnterprisePage />} />
              </Routes>
            </Suspense>
            
            <Footer />
          </div>
        </Router>
=======
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
              </div>
            </Router>
          </AccessibilityEnhancer>
        </SEOOptimizer>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-96bc
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;
