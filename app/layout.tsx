import React from 'react';
import type { Metadata, Viewport } from 'next';
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

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Zion Tech Group - Advanced AI & IT Solutions',
  description: 'Leading provider of AI-powered solutions, cybersecurity, and digital transformation services.',
  keywords: 'AI solutions, IT services, cybersecurity, cloud computing, digital transformation',
  authors: [{ name: 'Zion Tech Group' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Zion Tech Group - Advanced AI & IT Solutions',
    description: 'Leading provider of AI-powered solutions, cybersecurity, and digital transformation services.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zion Tech Group - Advanced AI & IT Solutions',
    description: 'Leading provider of AI-powered solutions, cybersecurity, and digital transformation services.',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
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