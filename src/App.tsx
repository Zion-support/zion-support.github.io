import React, { Suspense, lazy, useState, useEffect, memo, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import Footer from './components/Footer';
import { Sidebar } from './components/Sidebar';
import EnhancedErrorBoundary from './components/EnhancedErrorBoundary';
import { LoadingSpinner } from './components/ui/loading-spinner';
import { AccessibilityControls } from './components/AccessibilityEnhancer';
// import { preloadCriticalResources, enableLazyLoading } from './utils/performance';
// import './styles/accessibility.css';

// Enhanced lazy loading with preloading hints
const createLazyComponent = (importFn: () => Promise<any>, fallback?: React.ReactNode) => {
  const LazyComponent = lazy(importFn);
  return (props: any) => (
    <Suspense fallback={fallback || <LoadingSpinner />}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage').then(module => ({ default: module.HomePage })));
const ServicesPage = lazy(() => import('./pages/ServicesPage').then(module => ({ default: module.default })));
const SolutionsPage = lazy(() => import('./pages/SolutionsPage').then(module => ({ default: module.SolutionsPage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then(module => ({ default: module.AboutPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(module => ({ default: module.ContactPage })));
const BlogPage = lazy(() => import('./pages/BlogPage').then(module => ({ default: module.BlogPage })));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then(module => ({ default: module.NotFoundPage })));

// Service components
const AIServices = createLazyComponent(() => import('../pages/AIServices'));
const ITServices = createLazyComponent(() => import('../pages/ITServices'));
const MicroSaaS = createLazyComponent(() => import('../pages/MicroSAAS'));

const App: React.FC = memo(() => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Initialize performance optimizations
  useEffect(() => {
    // preloadCriticalResources();
    // enableLazyLoading();
  }, []);

  // Memoize error boundary fallback
  const errorFallback = useCallback(({ error, resetErrorBoundary }: any) => (
    <div className="error-boundary">
      <div className="error-boundary-content">
        <h1>Something went wrong</h1>
        <p>{error?.message}</p>
        <button onClick={resetErrorBoundary}>
          Try again
        </button>
      </div>
    </div>
  ), []);

  return (
    <EnhancedErrorBoundary 
      fallback={errorFallback}
      showDetails={process.env.NODE_ENV === 'development'}
      enableReporting={true}
    >
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <Sidebar />
          
          <main className="flex-1 lg:ml-80">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/solutions" element={<SolutionsPage />} />
                
                {/* Service Routes */}
                <Route path="/ai-services" element={<AIServices />} />
                <Route path="/it-services" element={<ITServices />} />
                <Route path="/micro-saas" element={<MicroSaaS />} />
                
                {/* Catch-all route */}
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Suspense>
          </main>
          
          <Footer />
          <AccessibilityControls />
        </div>
      </Router>
    </EnhancedErrorBoundary>
  );
});

App.displayName = 'App';

export default App;