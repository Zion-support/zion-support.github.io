import React from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import PerformanceMonitor from './components/PerformanceMonitor';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import ErrorBoundary from './components/ErrorBoundary';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import PerformanceOptimizations from './components/PerformanceOptimizations';
import ServiceWorkerRegistration from './components/ServiceWorkerRegistration';
import SkipLink from './components/SkipLink';
import PageLoader from './components/PageLoader';
import Analytics from './components/Analytics';
import { metadata, viewport } from './metadata';

const inter = Inter({ subsets: ['latin'] });
// Re-export metadata and viewport for Next.js
export { metadata, viewport };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
      </head>
      <body className={inter.className}>
        <Analytics />
        <ErrorBoundary>
          <PerformanceOptimizer>
            <PageLoader>
              <div className="min-h-screen bg-slate-900">
                <SkipLink />
                <Navigation />
                <main className="relative z-10" id="main-content" role="main" tabIndex={-1}>
                  {children}
                </main>
                <Footer />
                <PerformanceMonitor />
                <AccessibilityEnhancer />
                <PerformanceOptimizations />
                <ServiceWorkerRegistration />
              </div>
            </PageLoader>
          </PerformanceOptimizer>
        </ErrorBoundary>
      </body>
    </html>
  );
}
