import React from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import ServiceWorkerRegistration from './components/ServiceWorkerRegistration';
import SkipLink from './components/SkipLink';
import PageLoader from './components/PageLoader';
import Analytics from './components/Analytics';
import ConsolidatedPerformance from './components/consolidated/ConsolidatedPerformance';
import ConsolidatedAccessibility from './components/consolidated/ConsolidatedAccessibility';
import ConsolidatedSEO from './components/consolidated/ConsolidatedSEO';
import { metadata, viewport } from './layout/metadata';

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
        <ConsolidatedPerformance />
        <ConsolidatedAccessibility />
        <ConsolidatedSEO />
        <ErrorBoundary>
          <PageLoader>
            <div className="min-h-screen bg-slate-900">
              <SkipLink />
              <Navigation />
              <main className="relative z-10" id="main-content" role="main" tabIndex={-1}>
                {children}
              </main>
              <Footer />
              <ServiceWorkerRegistration />
            </div>
          </PageLoader>
        </ErrorBoundary>
      </body>
    </html>
  );
}
