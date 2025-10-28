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
import PerformanceMonitoring from './components/PerformanceMonitoring';
import SEOOptimization from './components/SEOOptimization';
import SecurityEnhancement from './components/SecurityEnhancement';
import AdvancedPerformanceEnhancer from './components/AdvancedPerformanceEnhancer';
import { metadata, viewport } from './metadata';

const inter = Inter({ subsets: ['latin'] });

// Define metadata and viewport for Next.js
export const metadata = {
  title: 'Zion Tech Group - Advanced Technology Solutions',
  description: 'Leading provider of cutting-edge technology solutions and services',
  keywords: 'technology, solutions, innovation, software, development',
  authors: [{ name: 'Zion Tech Group' }],
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};
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
          <AdvancedPerformanceEnhancer enableMonitoring={true} enableOptimizations={true}>
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
          </AdvancedPerformanceEnhancer>
        </ErrorBoundary>
      </body>
    </html>
  );
}