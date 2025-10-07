import React, { memo } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import HomePage from './app/page';
import { performanceEnhancer } from './app/utils/performanceEnhancer';
import { errorHandler } from './app/utils/enhancedErrorHandler';
import ErrorBoundary from './app/components/ErrorBoundary';
import PerformanceMonitor from './app/components/PerformanceMonitor';

// Memoized components for better performance
const UnifiedContentPromotion = memo(() => (
  <div className='bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16'>
    <div className='container mx-auto px-4 text-center'>
      <h2 className='text-3xl font-bold mb-4'>Latest AI Innovations</h2>
      <p className='text-xl'>
        Discover cutting-edge AI solutions for your business
      </p>
    </div>
  </div>
));

const InteractiveAIROICalculator = memo(() => (
  <div className='bg-gray-50 py-16'>
    <div className='container mx-auto px-4 text-center'>
      <h2 className='text-3xl font-bold mb-4'>AI ROI Calculator</h2>
      <p className='text-xl text-gray-600'>
        Calculate your potential AI investment returns
      </p>
    </div>
  </div>
));

const ContentShowcase = memo(() => (
  <div className='py-16'>
    <div className='container mx-auto px-4 text-center'>
      <h2 className='text-3xl font-bold mb-4'>Featured Content</h2>
      <p className='text-xl text-gray-600'>
        Explore our latest insights and case studies
      </p>
    </div>
  </div>
));

const InteractiveContentShowcase2026 = memo(() => (
  <div className='bg-blue-50 py-16'>
    <div className='container mx-auto px-4 text-center'>
      <h2 className='text-3xl font-bold mb-4'>2026 Content Showcase</h2>
      <p className='text-xl text-gray-600'>
        Latest trends and innovations for 2026
      </p>
    </div>
  </div>
));
export default function App() {

  // Performance optimization: Preload critical resources
  React.useEffect(() => {
    if (typeof document !== 'undefined') {
      // Initialize performance monitoring
      performanceEnhancer.startMonitoring();
      
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
  }, []);

  return (
    <ErrorBoundary>
      <HelmetProvider>
        <BrowserRouter>
          <HomePage />
          <PerformanceMonitor />
        </BrowserRouter>
      </HelmetProvider>
    </ErrorBoundary>
  );
}

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(<App />);
}
