import React, { memo, useMemo, useCallback, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import HomePage from './app/page';
import { performanceEnhancer } from './app/utils/performanceEnhancer';
import { errorHandler } from './app/utils/enhancedErrorHandler';
import ErrorBoundary from './app/components/ErrorBoundary';
import PerformanceMonitor from './app/components/PerformanceMonitor';
import EnhancedErrorBoundary from './app/components/EnhancedErrorBoundary';
import AdvancedSEOOptimizer, { defaultSEOConfig } from './app/components/AdvancedSEOOptimizer';
import AccessibilityEnhancer from './app/components/AccessibilityEnhancer';
import { performanceOptimizer } from './app/utils/performanceOptimizer';

// Memoized components for better performance
// const UnifiedContentPromotion = memo(() => (
//   <div className='bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16'>
//     <div className='container mx-auto px-4 text-center'>
//       <h2 className='text-3xl font-bold mb-4'>Latest AI Innovations</h2>
//       <p className='text-xl'>
//         Discover cutting-edge AI solutions for your business
//       </p>
//     </div>
//   </div>
// ));

// const InteractiveAIROICalculator = memo(() => (
//   <div className='bg-gray-50 py-16'>
//     <div className='container mx-auto px-4 text-center'>
//       <h2 className='text-3xl font-bold mb-4'>AI ROI Calculator</h2>
//       <p className='text-xl text-gray-600'>
//         Calculate your potential AI investment returns
//       </p>
//     </div>
//   </div>
// ));

// const ContentShowcase = memo(() => (
//   <div className='py-16'>
//     <div className='container mx-auto px-4 text-center'>
//       <h2 className='text-3xl font-bold mb-4'>Featured Content</h2>
//       <p className='text-xl text-gray-600'>
//         Explore our latest insights and case studies
//       </p>
//     </div>
//   </div>
// ));

// Loading component
// const LoadingSpinner = memo(() => (
//   <div className="animate-pulse bg-gray-200 h-32 rounded flex items-center justify-center">
//     <div className="text-gray-500">Loading...</div>
//   </div>
// ));

const App = () => {
  // const structuredData = useMemo(
  //   () => ({
  //     '@context': 'https://schema.org',
  //     '@type': 'Organization',
  //     name: 'Zion Tech Group',
  //     description:
  //       'Leading provider of AI-powered enterprise solutions and digital transformation services',
  //     url: 'https://ziontechgroup.com',
  //     logo: 'https://ziontechgroup.com/logo.png',
  //     contactPoint: {
  //       '@type': 'ContactPoint',
  //       telephone: '+1-302-464-0950',
  //       contactType: 'customer service',
  //       email: 'kleber@ziontechgroup.com',
  //     },
  //     address: {
  //       '@type': 'PostalAddress',
  //       streetAddress: '364 E Main St STE 1008',
  //       addressLocality: 'Middletown',
  //       addressRegion: 'DE',
  //       postalCode: '19709',
  //       addressCountry: 'US',
  //     },
  //     sameAs: [
  //       'https://linkedin.com/company/zion-tech-group',
  //       'https://twitter.com/ziontechgroup',
  //     ],
  //     offers: {
  //       '@type': 'Offer',
  //       name: 'AI Enterprise Transformation Services',
  //       description:
  //         'Transform your enterprise with AI-powered solutions achieving 300% ROI, 70% cost reduction, and 90% efficiency gains',
  //       price: '50000',
  //       priceCurrency: 'USD',
  //       availability: 'https://schema.org/InStock',
  //     },
  //   }),
  //   []
  // );
  // Performance optimization: Preload critical resources
  React.useEffect(() => {
    if (typeof document !== 'undefined') {
      // Initialize enhanced performance monitoring
      performanceEnhancer.startMonitoring();
      performanceOptimizer.init();
      
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
      performanceOptimizer.cleanup();
    };
  }, []);

  // const handlePhoneClick = useCallback(() => {
  //   // Track phone clicks for analytics
  //   if (typeof window !== 'undefined' && (window as unknown as { gtag?: Function }).gtag) {
  //     ((window as unknown as { gtag: Function }).gtag)('event', 'phone_click', {
  //       event_category: 'engagement',
  //       event_label: 'main_phone_number'
  //     });
  //   }
  // }, []);
  return (
    <EnhancedErrorBoundary
      enableErrorReporting={true}
      enableRetry={true}
      maxRetries={3}
      enableAnalytics={true}
    >
      <AccessibilityEnhancer
        config={{
          enableKeyboardNavigation: true,
          enableScreenReaderSupport: true,
          enableHighContrast: true,
          enableReducedMotion: true,
          enableFocusManagement: true,
          enableSkipLinks: true,
          enableARIALabels: true,
          enableColorContrast: true,
        }}
      >
        <AdvancedSEOOptimizer
          seoData={defaultSEOConfig}
          enableStructuredData={true}
          enableOpenGraph={true}
          enableTwitterCards={true}
          enableSchemaMarkup={true}
        />
        <HelmetProvider>
          <BrowserRouter>
            <Suspense fallback={
              <div className="flex items-center justify-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
              </div>
            }>
              <HomePage />
            </Suspense>
            <PerformanceMonitor />
          </BrowserRouter>
        </HelmetProvider>
      </AccessibilityEnhancer>
    </EnhancedErrorBoundary>
  );
}

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}

export default App;
