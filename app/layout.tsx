import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
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
import PerformanceMonitoring from './components/PerformanceMonitoring';
import SEOOptimization from './components/SEOOptimization';
import SEOEnhancements from './components/SEOEnhancements';
import SecurityEnhancement from './components/SecurityEnhancement';

const inter = Inter({ subsets: ['latin'] });
export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
      </head>
      <body className={inter.className}>
        <ErrorBoundary>
          <PerformanceOptimizer>
            <PerformanceOptimizations>
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
                <PerformanceMonitoring />
                <SEOOptimization />
                <SEOEnhancements />
                <SecurityEnhancement />
              </div>
            </PerformanceOptimizations>
          </PerformanceOptimizer>
        </ErrorBoundary>
      </body>
    </html>
  );
}