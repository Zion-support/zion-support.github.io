import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { HelmetProvider } from 'react-helmet-async';
import './App.css';

// Lazy load all components to reduce initial bundle size
const ThemeProvider = lazy(() => import('./components/ThemeProvider').then(m => ({ default: m.ThemeProvider })));
const ErrorBoundary = lazy(() => import('./components/ErrorHandling').then(m => ({ default: m.ErrorBoundary })));
const ScrollToTop = lazy(() => import('./components/ScrollToTop'));
const AccessibilityEnhancer = lazy(() => import('./components/AccessibilityEnhancer'));
const PerformanceWrapper = lazy(() => import('./components/PerformanceWrapper'));
const PerformanceOptimizer = lazy(() => import('./components/PerformanceOptimizer').then(m => ({ default: m.PerformanceOptimizer })));
const LoadingSpinner = lazy(() => import('./components/LoadingSpinner'));
const SEO = lazy(() => import('./components/SEO').then(m => ({ default: m.HomePageSEO })));
const AccessibilityEnhancements = lazy(() => import('./components/AccessibilityEnhancements'));
const PerformanceOptimizations = lazy(() => import('./components/PerformanceOptimizations').then(m => ({ default: m.PerformanceOptimizations })));
const NotificationToast = lazy(() => import('./components/NotificationToast').then(m => ({ default: m.NotificationToast })));
const PerformanceMonitor = lazy(() => import('./components/PerformanceMonitor'));

// Import setupGlobalErrorHandling separately to avoid bundling issues
let setupGlobalErrorHandling: () => void;

// Create QueryClient instance
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      retry: 1,
    },
  },
});

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
    // Dynamically import setupGlobalErrorHandling to avoid bundling issues
    import('./components/ErrorHandling').then((module) => {
      setupGlobalErrorHandling = module.setupGlobalErrorHandling;
      setupGlobalErrorHandling();
    });
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
        <ErrorBoundary>
          <HelmetProvider>
            <ThemeProvider>
              <AccessibilityEnhancer>
                <AccessibilityEnhancements>
                  <Router>
                    <Suspense fallback={null}>
                      <ScrollToTop />
                    </Suspense>
                    <PerformanceWrapper>
                      <Suspense fallback={null}>
                        <PerformanceOptimizer enableMonitoring={process.env.NODE_ENV === 'development'} />
                      </Suspense>
                      
                      {/* SEO Meta Tags */}
                      <Suspense fallback={null}>
                        <SEO />
                      </Suspense>
                      
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
                    </PerformanceWrapper>
                  </Router>
                  <Suspense fallback={null}>
                    <NotificationToast />
                  </Suspense>
                  <Suspense fallback={null}>
                    <PerformanceMonitor />
                  </Suspense>
                </AccessibilityEnhancements>
              </AccessibilityEnhancer>
            </ThemeProvider>
          </HelmetProvider>
        </ErrorBoundary>
      </Suspense>
    </QueryClientProvider>
  );
}

export default App;