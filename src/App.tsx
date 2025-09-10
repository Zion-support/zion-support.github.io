import React, { Suspense, lazy, useEffect, useState, useCallback } from 'react';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppHeader } from './layout/AppHeader';
import { Footer } from './components/Footer';
import { ChatAssistant } from './components/ChatAssistant';
import SEO from './components/SEO';
import Analytics from './components/Analytics';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import './styles/accessibility.css';

// Lazy load components for better performance
const HomePage = lazy(() => import('./pages/HomePage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const AboutPage = lazy(() => import('./pages/About'));
const ContactPage = lazy(() => import('./pages/Contact'));

// Enhanced loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-zion-blue-dark">
    <div className="flex flex-col items-center space-y-4">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-zion-gold"></div>
      <p className="text-zion-gold text-lg font-medium">Loading...</p>
    </div>
  </div>
);

// Error boundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center min-h-screen bg-zion-blue-dark">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-red-500 mb-4">Something went wrong</h2>
            <p className="text-zion-gold mb-4">We're working to fix this issue.</p>
            <button 
              onClick={() => window.location.reload()}
              className="bg-zion-gold text-zion-blue-dark px-6 py-2 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [performanceMetrics, setPerformanceMetrics] = useState(null);

  // Performance monitoring
  useEffect(() => {
    const measurePerformance = () => {
      if ('performance' in window) {
        const navigation = performance.getEntriesByType('navigation')[0];
        const paint = performance.getEntriesByType('paint');
        
        const metrics = {
          loadTime: navigation ? navigation.loadEventEnd - navigation.loadEventStart : 0,
          domContentLoaded: navigation ? navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart : 0,
          firstPaint: paint.find(p => p.name === 'first-paint')?.startTime || 0,
          firstContentfulPaint: paint.find(p => p.name === 'first-contentful-paint')?.startTime || 0
        };
        
        setPerformanceMetrics(metrics);
        // console.log('Performance Metrics:', metrics);
      }
    };

    // Measure performance after initial load
    const timer = setTimeout(() => {
      measurePerformance();
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Preload critical resources
  const preloadCriticalResources = useCallback(() => {
    // Preload critical images and fonts
    const criticalImages = [
      '/images/hero-bg.jpg',
      '/images/logo.png'
    ];

    criticalImages.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = src;
      document.head.appendChild(link);
    });
  }, []);

  useEffect(() => {
    preloadCriticalResources();
  }, [preloadCriticalResources]);

  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Alt + 1-4 for quick navigation
      if (e.altKey && e.key >= '1' && e.key <= '4') {
        e.preventDefault();
        const routes = ['/', '/services', '/about', '/contact'];
        const routeIndex = parseInt(e.key) - 1;
        if (routes[routeIndex]) {
          window.location.href = routes[routeIndex];
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <HelmetProvider>
      <ErrorBoundary>
        <div className="min-h-screen bg-zion-blue-dark">
          <SEO />
          <Analytics />
          <AccessibilityEnhancer />
          
          <AppHeader />
          <main id="main-content">
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <ChatAssistant />
          
          {/* Performance metrics display (development only) */}
          {process.env.NODE_ENV === 'development' && performanceMetrics && (
            <div className="fixed bottom-4 right-4 bg-black bg-opacity-75 text-white p-2 rounded text-xs">
              <div>Load: {performanceMetrics.loadTime.toFixed(2)}ms</div>
              <div>FCP: {performanceMetrics.firstContentfulPaint.toFixed(2)}ms</div>
            </div>
          )}
        </div>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;
