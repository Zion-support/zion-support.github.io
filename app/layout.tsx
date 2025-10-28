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
import { metadata, viewport } from './metadata';
// PageLoader removed as it's not used
// Analytics removed as it's not used
// Consolidated components removed as they're not used
// Metadata import removed as it's not used
import PerformanceMonitoring from './components/PerformanceMonitoring';
import SEOOptimization from './components/SEOOptimization';
import SecurityEnhancement from './components/SecurityEnhancement';
// import { metadata, viewport } from './layout/metadata';
>>>>>>> 180c76a08813769caa34f6922951c6a2af341d50

const inter = Inter({ subsets: ['latin'] });

// Re-export metadata and viewport for Next.js
export { metadata, viewport };
export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Analytics />
        <ConsolidatedPerformance />
        <ConsolidatedAccessibility />
        <ConsolidatedSEO />
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
              <SEOOptimization />
              <SecurityEnhancement />
>>>>>>> 180c76a08813769caa34f6922951c6a2af341d50
            </div>
          </PerformanceOptimizer>
        </ErrorBoundary>
      </body>
    </html>
  );
}