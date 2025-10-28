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
import PerformanceMonitoring from './components/PerformanceMonitoring';
import SEOOptimization from './components/SEOOptimization';
import SecurityEnhancement from './components/SecurityEnhancement';
=======
// PageLoader removed as it's not used
cursor/fix-errors-and-merge-to-main-b486
import Analytics from './components/Analytics';
import ConsolidatedPerformance from './components/consolidated/ConsolidatedPerformance';
import ConsolidatedAccessibility from './components/consolidated/ConsolidatedAccessibility';
import ConsolidatedSEO from './components/consolidated/ConsolidatedSEO';
import PerformanceMonitoring from './components/PerformanceMonitoring';
import SEOOptimization from './components/SEOOptimization';
import SecurityEnhancement from './components/SecurityEnhancement';
<<<<<<< HEAD
// Metadata imports removed as they're not used in this layout
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-8bc5
cursor/fix-errors-and-merge-to-main-b486

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
<<<<<<< HEAD
        <ConsolidatedPerformance />
        <ConsolidatedAccessibility />
        <ConsolidatedSEO />
cursor/fix-errors-and-merge-to-main-253c
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
              <PerformanceMonitoring />
              <SEOOptimization />
              <SecurityEnhancement />
            </div>
          </PerformanceOptimizer>
        </ErrorBoundary>
      </body>
    </html>
  );
}