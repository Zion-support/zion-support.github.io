import React from 'react';
import type { Metadata, Viewport } from 'next';
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

const inter = Inter({ subsets: ['latin'] });

// Metadata configuration
export const metadata: Metadata = {
  title: {
    default: 'Zion Tech Group - AI & IT Solutions',
    template: '%s | Zion Tech Group'
  },
  description: 'Leading provider of AI solutions, cloud infrastructure, and innovative software development services.',
  keywords: ['AI', 'artificial intelligence', 'cloud computing', 'software development', 'IT solutions'],
  authors: [{ name: 'Zion Tech Group' }],
  creator: 'Zion Tech Group',
  publisher: 'Zion Tech Group',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://zion.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://zion.app',
    title: 'Zion Tech Group - AI & IT Solutions',
    description: 'Leading provider of AI solutions, cloud infrastructure, and innovative software development services.',
    siteName: 'Zion Tech Group',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zion Tech Group - AI & IT Solutions',
    description: 'Leading provider of AI solutions, cloud infrastructure, and innovative software development services.',
    creator: '@ziontechgroup',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
};
>>>>>>> de5d142fb1be829a72a2e46ae0e7c4f2f465c869
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
              <PerformanceOptimizations />
              <ServiceWorkerRegistration />
            </div>
          </PerformanceOptimizer>
        </ErrorBoundary>
      </body>
    </html>
  );
}
