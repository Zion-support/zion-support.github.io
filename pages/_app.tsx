import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect } from 'react';
import ErrorBoundary from '../components/ErrorBoundary';
import PerformanceMonitor from '../components/PerformanceMonitor';
import '../styles/globals.css';

// Global error handler
const globalErrorHandler = (error: Error, errorInfo?: any) => {
  console.error('Global error:', error, errorInfo);
  
  // Send to error reporting service in production
  if (process.env.NODE_ENV === 'production') {
    // Example: Sentry.captureException(error);
    console.error('Production error logged:', {
      message: error.message,
      stack: error.stack,
      timestamp: new Date().toISOString(),
      url: typeof window !== 'undefined' ? window.location.href : 'unknown',
    });
  }
};

export default function App({ Component, pageProps }: AppProps) {
  // Performance monitoring setup
  useEffect(() => {
    // Initialize performance monitoring
    if (typeof window !== 'undefined') {
      // Report Core Web Vitals to analytics
      const reportWebVitals = (metric: any) => {
        console.log('Web Vital:', metric);
        // Send to analytics service
        // gtag('event', metric.name, {
        //   value: Math.round(metric.value),
        //   event_category: 'Web Vitals',
        //   event_label: metric.id,
        //   non_interaction: true,
        // });
      };

      // Observe performance entries
      if ('PerformanceObserver' in window) {
        const observer = new PerformanceObserver((list) => {
          list.getEntries().forEach((entry) => {
            if (entry.entryType === 'largest-contentful-paint') {
              reportWebVitals({
                name: 'LCP',
                value: entry.startTime,
                id: entry.entryType,
              });
            }
          });
        });
        observer.observe({ entryTypes: ['largest-contentful-paint'] });
      }
    }
  }, []);

  return (
    <ErrorBoundary onError={globalErrorHandler}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Zion Tech Group - Leading Technology Solutions" />
        
        {/* Security headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        
        {/* Performance optimizations */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* PWA support */}
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
        
        {/* Structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Zion Tech Group",
              "url": "https://ziontechgroup.com",
              "logo": "https://ziontechgroup.com/logo.png",
              "description": "Leading technology solutions and services",
              "sameAs": [
                "https://twitter.com/ziontechgroup",
                "https://linkedin.com/company/ziontechgroup"
              ]
            })
          }}
        />
      </Head>

      <Component {...pageProps} />
      
      {/* Performance monitoring component */}
      <PerformanceMonitor />
    </ErrorBoundary>
  );
}