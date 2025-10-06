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
<<<<<<< HEAD
const AboutPage = lazy(() => import('./about/page'));
const ServicesPage = lazy(() => import('./services/page'));
const TeamPage = lazy(() => import('./team/page'));
const PrivacyPage = lazy(() => import('./privacy/page'));
const TermsPage = lazy(() => import('./terms/page'));
=======
const EnterprisePage = lazy(() => import('./enterprise/page'));

// Utils
import performanceOptimizer from '../src/utils/performanceOptimizer';
<<<<<<< HEAD
>>>>>>> cursor/fix-errors-and-merge-to-main-debd
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-dda3

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
<<<<<<< HEAD
        <Router>
          <div className="App">
            <SEOOptimizer>
              <AccessibilityEnhancer>
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
              </AccessibilityEnhancer>
            </SEOOptimizer>
          </div>
        </Router>
=======
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-debd
        <SEOOptimizer>
          <AccessibilityEnhancer>
            <Router>
              <div className="App">
<<<<<<< HEAD
=======
                <PerformanceDashboard />
                
                <Navigation />
                
>>>>>>> cursor/fix-errors-and-merge-to-main-debd
                <Suspense fallback={<LoadingSpinner />}>
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
<<<<<<< HEAD
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/team" element={<TeamPage />} />
                    <Route path="/privacy" element={<PrivacyPage />} />
                    <Route path="/terms" element={<TermsPage />} />
                  </Routes>
                </Suspense>
=======
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/enterprise" element={<EnterprisePage />} />
                  </Routes>
                </Suspense>
                
                <Footer />
>>>>>>> cursor/fix-errors-and-merge-to-main-debd
              </div>
            </Router>
          </AccessibilityEnhancer>
        </SEOOptimizer>
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-96bc
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-debd
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;
