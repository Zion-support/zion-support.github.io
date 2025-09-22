import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { ReactNode } from 'react';
import './globals.css';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import PerformanceMonitor from '../components/PerformanceMonitor';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import SEOOptimizer from '../components/SEOOptimizer';
import BackToTop from '../components/BackToTop';

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: 'Zion Tech Group - AI Solutions & Technology Services',
  description: 'Leading provider of AI solutions, micro SaaS development, and comprehensive IT services.',
  keywords: 'AI solutions, micro SaaS, IT services, technology consulting, automation',
  authors: [{ name: 'Zion Tech Group' }],
  creator: 'Zion Tech Group',
  publisher: 'Zion Tech Group',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ziontechgroup.com',
    siteName: 'Zion Tech Group',
    title: 'Zion Tech Group - AI Solutions & Technology Services',
    description: 'Leading provider of AI solutions, micro SaaS development, and comprehensive IT services.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zion Tech Group - AI Solutions & Technology Services',
    description: 'Leading provider of AI solutions, micro SaaS development, and comprehensive IT services.',
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SEOOptimizer
          title="Zion Tech Group - AI Solutions & Technology Services"
          description="Leading provider of AI solutions, micro SaaS development, and comprehensive IT services."
          keywords={['AI solutions', 'micro SaaS', 'IT services', 'technology consulting', 'automation']}
          canonical="https://ziontechgroup.com"
        />
        <AccessibilityEnhancer />
        <PerformanceMonitor />
        <Navigation />
        <main id="main-content" tabIndex={-1}>{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}