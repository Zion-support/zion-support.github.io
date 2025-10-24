<<<<<<< HEAD
<<<<<<< HEAD
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Analytics from './components/Analytics'
import PerformanceMonitor from './components/PerformanceMonitor'
import AccessibilityEnhancer from './components/AccessibilityEnhancer'
import ErrorBoundary from './components/ErrorBoundary'

const inter = Inter({ subsets: ['latin'] });
=======
import MobileNavigation from "./components/MobileNavigation";
=======
import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import AnalyticsProvider from "./components/AnalyticsProvider";
import EnhancedPerformanceMonitor from "./components/EnhancedPerformanceMonitor";
// import LoadingSpinner from "./components/LoadingSpinner"; // Removed unused import
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/ErrorFallback";
import { Helmet } from "react-helmet-async";
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0326
import ImprovedNavigation from "./components/ImprovedNavigation";
import ImprovedFooter from "./components/ImprovedFooter";
import ImprovedSidebar from "./components/ImprovedSidebar";
import { Helmet } from 'react-helmet-async';
import { Monitor } from 'lucide-react';
import React from 'react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0314

export const metadata: Metadata = {
<<<<<<< HEAD
  metadataBase: new URL('https://zion.app'),
  title: 'Zion Tech Group - Advanced AI & IT Solutions',
  description: 'Leading provider of AI-powered solutions, cybersecurity, and digital transformation services. Transform your business with cutting-edge technology.',
  keywords: 'AI solutions, IT services, cybersecurity, cloud computing, digital transformation, machine learning, artificial intelligence, data analytics, blockchain, IoT',
  authors: [{ name: 'Zion Tech Group' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Zion Tech Group - Advanced AI & IT Solutions',
    description: 'Leading provider of AI-powered solutions, cybersecurity, and digital transformation services. Transform your business with cutting-edge technology.',
    type: 'website',
    locale: 'en_US',
    url: 'https://zion.app',
    siteName: 'Zion Tech Group',
=======
  title: 'ZionTechGroup - AI Solutions & Technology Services',
  description: 'Leading provider of AI solutions, technology services, and digital transformation for businesses worldwide.',
  keywords: ['AI solutions', 'technology services', 'digital transformation', 'machine learning', 'artificial intelligence'],
  authors: [{ name: 'ZionTechGroup' }],
  creator: 'ZionTechGroup',
  publisher: 'ZionTechGroup',
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
    title: 'ZionTechGroup - AI Solutions & Technology Services',
    description: 'Leading provider of AI solutions, technology services, and digital transformation for businesses worldwide.',
    url: 'https://ziontechgroup.com',
    siteName: 'ZionTechGroup',
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0210
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Zion Tech Group - Advanced AI & IT Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zion Tech Group - Advanced AI & IT Solutions',
    description: 'Leading provider of AI-powered solutions, cybersecurity, and digital transformation services.',
    images: ['/og-image.jpg'],
  },
<<<<<<< HEAD
  alternates: {
    canonical: 'https://zion.app',
  },
  category: 'technology',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}
=======
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0210

export default function RootLayout({
  children,
}: {
<<<<<<< HEAD
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Performance monitoring
              if (typeof window !== 'undefined') {
                window.addEventListener('load', function() {
                  // Measure page load time
                  const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart
                  console.log('Page load time:', loadTime + 'ms')
                  
                  // Track Core Web Vitals
                  if ('web-vitals' in window) {
                    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
                      getCLS(console.log)
                      getFID(console.log)
                      getFCP(console.log)
                      getLCP(console.log)
                      getTTFB(console.log)
                    })
                  }
                })
              }
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        <Analytics />
        <PerformanceMonitor />
        <ErrorBoundary>
          <AccessibilityEnhancer />
          <Navigation />
          <main className="pt-16">
            {children}
          </main>
          <Footer />
        </ErrorBoundary>
=======
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0210
      </body>
    </html>
  );
}