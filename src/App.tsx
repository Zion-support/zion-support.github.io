import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeProvider';
import PerformanceMonitor from './components/PerformanceMonitor';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import LoadingSpinner from './components/LoadingSpinner';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import EnhancedAccessibility from './components/EnhancedAccessibility';
import EnhancedErrorBoundary from './components/EnhancedErrorBoundary';
import SEOHead from './components/SEOHead';
import SEO from './components/SEO';
import ErrorBoundary from './components/ErrorBoundary';

// Lazy load components for better performance
const LazyHome = React.lazy(() => import('./components/Home'));
const LazyServices = React.lazy(() => import('./components/Services'));
const LazyAbout = React.lazy(() => import('./components/About'));
const LazyContact = React.lazy(() => import('./components/Contact'));

const App: React.FC = () => {
  return (
    <EnhancedErrorBoundary>
      <SEO 
        title="Zion Tech Group - AI, IT, and Quantum Computing Solutions"
        description="Leading provider of cutting-edge AI services, micro SaaS solutions, IT infrastructure, and quantum computing technologies."
      />
      <ThemeProvider>
        <EnhancedAccessibility>
          <PerformanceMonitor />
          <PerformanceOptimizer />
          <React.Suspense fallback={
            <div className="min-h-screen bg-gray-900 flex items-center justify-center">
              <LoadingSpinner size="lg" text="Loading application..." />
            </div>
          }>
            <Routes>
              <Route path="/" element={<LazyHome />} />
              <Route path="/services" element={<LazyServices />} />
              <Route path="/about" element={<LazyAbout />} />
              <Route path="/contact" element={<LazyContact />} />
            </Routes>
          </React.Suspense>
        </EnhancedAccessibility>
      </ThemeProvider>
      </EnhancedErrorBoundary>
  );
};

export default App;