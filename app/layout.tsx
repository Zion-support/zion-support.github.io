import React from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import PerformanceMonitor from './components/PerformanceMonitor';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import ErrorBoundary from './components/ErrorBoundary';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import ServiceWorkerRegistration from './components/ServiceWorkerRegistration';
import SkipLink from './components/SkipLink';
import { metadata, viewport } from './layout/metadata';

const inter = Inter({ subsets: ['latin'] });

// Re-export metadata and viewport for Next.js
export { metadata, viewport };
import { metadata, viewport } from './metadata';

const inter = Inter({ subsets: ['latin'] });

// eslint-disable-next-line react-refresh/only-export-components
export { metadata, viewport };

cursor/fix-errors-and-merge-to-main-9c0e
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ErrorBoundary>
          <PerformanceOptimizer>
            <div className="min-h-screen bg-slate-900">
              <SkipLink />
              <Navigation />
              <main className="relative z-10" id="main-content" role="main" tabIndex={-1}>
                {children}
              </main>
              <Footer />
              <PerformanceMonitor />
              <AccessibilityEnhancer />
              <ServiceWorkerRegistration />
            </div>
          </PerformanceOptimizer>
        </ErrorBoundary>
      </body>
    </html>
  );
}
