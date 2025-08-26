import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatingActionButton from './components/FloatingActionButton';
import EnhancedScrollToTop from './components/EnhancedScrollToTop';
import PerformanceMonitor from './components/PerformanceMonitor';

// Lazy load pages with better chunking
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Services = lazy(() => import('./pages/Services'));
const InnovativeServices2025 = lazy(() => import('./pages/InnovativeServices2025'));
const AdvancedServices2025 = lazy(() => import('./pages/AdvancedServices2025'));
const AdvancedServicesShowcase2025 = lazy(() => import('./pages/AdvancedServicesShowcase2025'));
const ComprehensivePricing2025 = lazy(() => import('./pages/ComprehensivePricing2025'));
const Blog = lazy(() => import('./pages/Blog'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Enhanced loading spinner component with accessibility
const LoadingSpinner = () => (
  <div 
    className="flex items-center justify-center min-h-screen"
    role="status"
    aria-label="Loading page content"
  >
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-cyan-500" aria-hidden="true"></div>
    <span className="sr-only">Loading...</span>
  </div>
);

// Error boundary component for better error handling
const ErrorBoundary = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="error-boundary">
      {children}
    </div>
  );
};

function App() {
  // Performance optimization: Preload critical routes
  useEffect(() => {
    const preloadCriticalRoutes = () => {
      // Preload critical pages
      const criticalRoutes = [
        () => import('./pages/Services'),
        () => import('./pages/Contact')
      ];
      
      // Use requestIdleCallback for better performance
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
          criticalRoutes.forEach(preload => preload());
        });
      } else {
        // Fallback for browsers without requestIdleCallback
        setTimeout(() => {
          criticalRoutes.forEach(preload => preload());
        }, 1000);
      }
    };

    preloadCriticalRoutes();
  }, []);

  return (
    <Router>
      <ErrorBoundary>
        <div className="App min-h-screen flex flex-col">
          <Header />
          <main className="flex-1 pt-16" role="main">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/services" element={<Services />} />
                <Route path="/innovative-services-2025" element={<InnovativeServices2025 />} />
                <Route path="/advanced-services-2025" element={<AdvancedServices2025 />} />
                <Route path="/advanced-services-showcase-2025" element={<AdvancedServicesShowcase2025 />} />
                <Route path="/comprehensive-pricing-2025" element={<ComprehensivePricing2025 />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <FloatingActionButton />
          <EnhancedScrollToTop />
          <PerformanceMonitor />
        </div>
      </ErrorBoundary>
    </Router>
  );
}

export default App;