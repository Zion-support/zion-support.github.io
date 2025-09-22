import React from 'react';
import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ErrorBoundary } from '../components/ErrorBoundary';
import { generateStructuredData } from '../components/SEOEnhancer';
import PerformanceMonitor from '../components/PerformanceMonitor';
import Analytics from '../components/Analytics';
// Performance monitoring will be added via script

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://ziontechgroup.com'),
  title: 'Zion Tech Group - AI Solutions & Technology Services',
  description: 'Leading provider of AI solutions, micro SaaS development, and comprehensive IT services.',
  keywords: 'AI solutions, micro SaaS, IT services, technology consulting, automation',
  authors: [{ name: 'Zion Tech Group' }],
  creator: 'Zion Tech Group',
  publisher: 'Zion Tech Group',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ziontechgroup.com',
    siteName: 'Zion Tech Group',
    title: 'Zion Tech Group - AI Solutions & Technology Services',
    description: 'Leading provider of AI solutions, micro SaaS development, and comprehensive IT services.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zion Tech Group - AI Solutions & Technology Services',
    description: 'Leading provider of AI solutions, micro SaaS development, and comprehensive IT services.',
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const structuredData = generateStructuredData('Organization', {
    name: 'Zion Tech Group',
    description: 'Leading provider of AI solutions, micro SaaS development, and comprehensive IT services.',
  });

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Enhanced performance monitoring and error tracking
              if (typeof window !== 'undefined') {
                // Performance monitoring
                window.addEventListener('load', () => {
                  if ('performance' in window) {
                    const perfData = performance.getEntriesByType('navigation')[0];
                    const metrics = {
                      domContentLoaded: perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart,
                      loadComplete: perfData.loadEventEnd - perfData.loadEventStart,
                      totalTime: perfData.loadEventEnd - perfData.fetchStart,
                      firstPaint: performance.getEntriesByName('first-paint')[0]?.startTime || 0,
                      firstContentfulPaint: performance.getEntriesByName('first-contentful-paint')[0]?.startTime || 0,
                    };
                    console.log('Performance metrics:', metrics);
                    
                    // Send metrics to analytics (placeholder)
                    if (window.gtag) {
                      window.gtag('event', 'page_load_time', {
                        event_category: 'Performance',
                        value: Math.round(metrics.totalTime),
                      });
                    }
                  }
                });

                // Enhanced error tracking
                window.addEventListener('error', (event) => {
                  console.error('Global error:', {
                    message: event.message,
                    filename: event.filename,
                    lineno: event.lineno,
                    colno: event.colno,
                    error: event.error?.stack,
                  });
                });

                // Unhandled promise rejection tracking
                window.addEventListener('unhandledrejection', (event) => {
                  console.error('Unhandled promise rejection:', event.reason);
                });

                // Viewport and device info
                const deviceInfo = {
                  userAgent: navigator.userAgent,
                  viewport: {
                    width: window.innerWidth,
                    height: window.innerHeight,
                  },
                  screen: {
                    width: window.screen.width,
                    height: window.screen.height,
                  },
                  devicePixelRatio: window.devicePixelRatio,
                };
                console.log('Device info:', deviceInfo);
              }
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <ErrorBoundary>
          <Analytics />
          <PerformanceMonitor />
          <Navigation />
          <main>{children}</main>
          <Footer />
        </ErrorBoundary>
      </body>
    </html>
  );
}