import React, { Suspense, lazy, useCallback, useEffect } from 'react';
import Link from 'next/link';
import { HelmetProvider } from 'react-helmet-async';

// Lazy load components for better performance
const HomePage = lazy(() => import('./page'));
const AboutPage = lazy(() => import('./about/page'));
const ServicesPage = lazy(() => import('./services/page'));
const ContactPage = lazy(() => import('./contact/page'));
const BlogPage = lazy(() => import('./blog/page'));

// Loading component
const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
  </div>
);

// Error boundary component
const ErrorBoundary = ({ children }: { children: React.ReactNode }) => {
  const [hasError, setHasError] = React.useState(false);

  useEffect(() => {
    const handleError = (error: ErrorEvent) => {
      console.error('App Error:', error);
      setHasError(true);
    };

    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);

  if (hasError) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Something went wrong
          </h1>
          <p className="text-gray-600 mb-4">
            We're sorry for the inconvenience. Please try refreshing the page.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Refresh Page
          </button>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

// Performance monitoring
const PerformanceMonitor = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            console.log('Page Load Time:', entry.duration);
          }
        }
      });
      
      observer.observe({ entryTypes: ['navigation'] });
      
      return () => observer.disconnect();
    }
  }, []);

  return null;
};

// SEO optimization
const SEOOptimizer = () => {
  useEffect(() => {
    // Set meta tags for better SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Zion Tech Group - Advanced AI and IT Solutions for Enterprise';
      document.head.appendChild(meta);
    }
  }, []);

  return null;
};

// Accessibility enhancements
const AccessibilityEnhancer = () => {
  useEffect(() => {
    // Add keyboard navigation support
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
      }
    };

    const handleMouseDown = () => {
      document.body.classList.remove('keyboard-navigation');
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, []);

  return null;
};

const App: React.FC = () => {
  // Performance optimization
  const memoizedCallback = useCallback(() => {
    // Any performance-critical callbacks
  }, []);

  return (
    <HelmetProvider>
      <ErrorBoundary>
        <PerformanceMonitor />
        <SEOOptimizer />
        <AccessibilityEnhancer />
        
        <div className="min-h-screen bg-gray-50">
          <Suspense fallback={<LoadingSpinner />}>
            <div className="container mx-auto px-4 py-8">
              <header className="mb-8">
                <nav className="flex justify-between items-center">
                  <Link href="/" className="text-2xl font-bold text-blue-600">
                    Zion Tech Group
                  </Link>
                  <div className="space-x-6">
                    <Link href="/" className="text-gray-700 hover:text-blue-600">
                      Home
                    </Link>
                    <Link href="/about" className="text-gray-700 hover:text-blue-600">
                      About
                    </Link>
                    <Link href="/services" className="text-gray-700 hover:text-blue-600">
                      Services
                    </Link>
                    <Link href="/contact" className="text-gray-700 hover:text-blue-600">
                      Contact
                    </Link>
                    <Link href="/blog" className="text-gray-700 hover:text-blue-600">
                      Blog
                    </Link>
                  </div>
                </nav>
              </header>
              
              <main>
                <div className="text-center py-12">
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    Welcome to Zion Tech Group
                  </h1>
                  <p className="text-xl text-gray-600 mb-8">
                    Advanced AI and IT Solutions for Enterprise
                  </p>
                  <div className="space-x-4">
                    <Link
                      href="/services"
                      className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Our Services
                    </Link>
                    <Link
                      href="/contact"
                      className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
                    >
                      Get in Touch
                    </Link>
                  </div>
                </div>
              </main>
            </div>
          </Suspense>
        </div>
      </ErrorBoundary>
    </HelmetProvider>
  );
};

export default App;