import React, { memo, Suspense, useMemo, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { performanceEnhancer } from './app/utils/performanceEnhancer';
import ErrorBoundary from './app/components/ErrorBoundary';
import PerformanceMonitor from './app/components/PerformanceMonitor';

// Lazy load the main page for better performance
const HomePage = React.lazy(() => import('./app/page'));

// Loading fallback component
const LoadingFallback = memo(() => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
      <p className="text-gray-600">Loading Zion Tech Group...</p>
    </div>
  </div>
));

const App = memo(() => {
  // Structured data for SEO
  const structuredData = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Zion Tech Group',
      description:
        'Leading provider of AI-powered enterprise solutions and digital transformation services',
      url: 'https://ziontechgroup.com',
      logo: 'https://ziontechgroup.com/logo.png',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-302-464-0950',
        contactType: 'customer service',
        email: 'kleber@ziontechgroup.com',
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: '364 E Main St STE 1008',
        addressLocality: 'Middletown',
        addressRegion: 'DE',
        postalCode: '19709',
        addressCountry: 'US',
      },
      sameAs: [
        'https://linkedin.com/company/zion-tech-group',
        'https://twitter.com/ziontechgroup',
      ],
      offers: {
        '@type': 'Offer',
        name: 'AI Enterprise Transformation Services',
        description:
          'Transform your enterprise with AI-powered solutions achieving 300% ROI, 70% cost reduction, and 90% efficiency gains',
        price: '50000',
        priceCurrency: 'USD',
        availability: 'https://schema.org/InStock',
      },
    }),
    []
  );

  // Performance optimization: Preload critical resources
  useEffect(() => {
    if (typeof document !== 'undefined') {
      // Initialize performance monitoring
      performanceEnhancer.startMonitoring();
      
      // Add structured data to head
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
      
      // Preload critical fonts
      const fontLink = document.createElement('link');
      fontLink.rel = 'preload';
      fontLink.href =
        'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
      fontLink.as = 'style';
      document.head.appendChild(fontLink);
      
      // Preload critical images
      const preloadImages = [
        'https://ziontechgroup.com/og-image.jpg',
        'https://ziontechgroup.com/logo.png',
      ];
      preloadImages.forEach(src => {
        const img = new Image();
        img.src = src;
      });

      // Enhanced performance monitoring with Web Vitals
      if ('performance' in window) {
        window.addEventListener('load', () => {
          const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
          if (perfData) {
            const performanceMetrics = {
              domContentLoaded: perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart,
              loadComplete: perfData.loadEventEnd - perfData.loadEventStart,
              totalTime: perfData.loadEventEnd - perfData.fetchStart
            };
            
            // Only log in development
            if (process.env.NODE_ENV === 'development') {
              console.log('Page Load Performance:', performanceMetrics);
            }
            
            // Report to analytics in production
            if (process.env.NODE_ENV === 'production' && typeof window !== 'undefined') {
              // Send to analytics service
              if ('gtag' in window) {
                (window as { gtag: (command: string, action: string, parameters: Record<string, unknown>) => void }).gtag('event', 'page_load_performance', {
                  event_category: 'Performance',
                  event_label: 'Page Load',
                  value: Math.round(performanceMetrics.totalTime)
                });
              }
            }
          }
        });
      }
    }

    // Cleanup on unmount
    return () => {
      performanceEnhancer.stopMonitoring();
    };
  }, [structuredData]);


  return (
    <ErrorBoundary>
      <HelmetProvider>
        <BrowserRouter>
          <Suspense fallback={<LoadingFallback />}>
            <HomePage />
          </Suspense>
          <PerformanceMonitor />
        </BrowserRouter>
      </HelmetProvider>
    </ErrorBoundary>
  );
});

App.displayName = 'App';

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}

export default App;