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
import EnhancedAccessibilityManager from './components/EnhancedAccessibilityManager';

const inter = Inter({ subsets: ['latin'] });

// Define metadata and viewport for Next.js
export const metadata = {
  title: 'Zion Tech Group - Advanced Technology Solutions',
  description: 'Leading provider of cutting-edge technology solutions, software development, and digital transformation services.',
  keywords: 'technology, software development, digital transformation, tech solutions',
  authors: [{ name: 'Zion Tech Group' }],
  creator: 'Zion Tech Group',
  publisher: 'Zion Tech Group',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ziontechgroup.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Zion Tech Group - Advanced Technology Solutions',
    description: 'Leading provider of cutting-edge technology solutions, software development, and digital transformation services.',
    url: 'https://ziontechgroup.com',
    siteName: 'Zion Tech Group',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Zion Tech Group',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zion Tech Group - Advanced Technology Solutions',
    description: 'Leading provider of cutting-edge technology solutions, software development, and digital transformation services.',
    images: ['/og-image.jpg'],
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

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
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
            <EnhancedAccessibilityManager enableAutoDetection={true} enableKeyboardShortcuts={true}>
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
            </EnhancedAccessibilityManager>
          </AdvancedPerformanceEnhancer>
        </ErrorBoundary>
      </body>
    </html>
  );
}