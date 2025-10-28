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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import PerformanceMonitoring from './components/PerformanceMonitoring';
import SEOOptimization from './components/SEOOptimization';
import SecurityEnhancement from './components/SecurityEnhancement';
=======
// PageLoader removed as it's not used
cursor/fix-errors-and-merge-to-main-b486
cursor/fix-errors-and-merge-to-main-7056
cursor/fix-errors-and-merge-to-main-bbed
import Analytics from './components/Analytics';
import ConsolidatedPerformance from './components/consolidated/ConsolidatedPerformance';
import ConsolidatedAccessibility from './components/consolidated/ConsolidatedAccessibility';
import ConsolidatedSEO from './components/consolidated/ConsolidatedSEO';
import PerformanceMonitoring from './components/PerformanceMonitoring';
import SEOOptimization from './components/SEOOptimization';
import SecurityEnhancement from './components/SecurityEnhancement';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
// Metadata imports removed as they're not used in this layout
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8bc5
cursor/fix-errors-and-merge-to-main-b486
=======
import { metadata, viewport } from './metadata';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-544d
=======
// PageLoader removed as it's not used
import Analytics from './components/Analytics';
// Consolidated components removed as they're not used
// Metadata import removed as it's not used
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6cd9
cursor/fix-errors-and-merge-to-main-7056
cursor/fix-errors-and-merge-to-main-bbed

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
<<<<<<< HEAD
<<<<<<< HEAD
        <ConsolidatedPerformance />
        <ConsolidatedAccessibility />
        <ConsolidatedSEO />
cursor/fix-errors-and-merge-to-main-253c
=======
        <Analytics />
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-6cd9
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