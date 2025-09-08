import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './components/ThemeProvider';
import { ErrorBoundary, setupGlobalErrorHandling } from './components/ErrorHandling';
import ScrollToTop from './components/ScrollToTop';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import PerformanceMonitor from './components/PerformanceMonitor';
import { PerformanceOptimizer } from './components/PerformanceOptimizer';
import LoadingSpinner from './components/LoadingSpinner';
import { SEO, HomePageSEO } from './components/SEO';
import { AccessibilityWrapper } from './components/AccessibilityEnhancements';
import { PerformanceOptimizations } from './components/PerformanceOptimizations';

// Pages - Lazy loaded for better performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Contact = lazy(() => import('./pages/Contact'));
const Pricing = lazy(() => import('./pages/Pricing'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Service Pages - Lazy loaded for better performance
const AIServices = lazy(() => import('./pages/AIServices'));
const ITServices = lazy(() => import('./pages/ITServices'));
const MicroSaaS = lazy(() => import('./pages/MicroSaaS'));
const Cybersecurity = lazy(() => import('./pages/Cybersecurity'));
const CloudMigration = lazy(() => import('./pages/CloudMigration'));
const MobileDevelopment = lazy(() => import('./pages/MobileDevelopment'));

// Additional Pages - Lazy loaded for better performance
const FAQ = lazy(() => import('./pages/FAQ'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const Support = lazy(() => import('./pages/Support'));

function App() {
  // Setup global error handling
  useEffect(() => {
    setupGlobalErrorHandling();
  }, []);

  return (
    <ErrorBoundary>
      <HelmetProvider>
        <ThemeProvider>
          <AccessibilityEnhancer>
            <AccessibilityWrapper>
              <Router>
                <ScrollToTop />
                <PerformanceMonitor />
                <PerformanceOptimizer enableMonitoring={process.env.NODE_ENV === 'development'} />
                
                {/* SEO Meta Tags */}
                <HomePageSEO />
                
                <div className="min-h-screen bg-background text-foreground" id="main-content">
                  <PerformanceOptimizations>
                    <Suspense fallback={<LoadingSpinner />}>
                      <Routes>
                        {/* Main Routes */}
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/services" element={<Services />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/pricing" element={<Pricing />} />
                        
                        {/* Service Routes */}
                        <Route path="/services/ai-services" element={<AIServices />} />
                        <Route path="/services/it-services" element={<ITServices />} />
                        <Route path="/services/micro-saas" element={<MicroSaaS />} />
                        <Route path="/services/cybersecurity" element={<Cybersecurity />} />
                        <Route path="/services/cloud-solutions" element={<CloudMigration />} />
                        <Route path="/services/mobile-development" element={<MobileDevelopment />} />
                        
                        {/* Additional Routes */}
                        <Route path="/faq" element={<FAQ />} />
                        <Route path="/privacy" element={<Privacy />} />
                        <Route path="/terms" element={<Terms />} />
                        <Route path="/support" element={<Support />} />
                        
                        {/* 404 Route */}
                        <Route path="*" element={<NotFound />} />
                      </Routes>
                    </Suspense>
                  </PerformanceOptimizations>
                </div>
              </Router>
            </AccessibilityWrapper>
          </AccessibilityEnhancer>
        </ThemeProvider>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

export default App;