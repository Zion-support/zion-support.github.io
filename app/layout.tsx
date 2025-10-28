import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import './globals.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import PerformanceMonitor from './components/PerformanceMonitor';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';
import ErrorBoundary from './components/ErrorBoundary';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import ServiceWorkerRegistration from './components/ServiceWorkerRegistration';
import SkipLink from './components/SkipLink';
// PageLoader removed as it's not used
import Analytics from './components/Analytics';
// Consolidated components removed as they're not used
// Metadata import removed as it's not used

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Analytics />
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