// import React from 'react';
import { LazyWrapper } from './components/LazyLoader';
import { SEOOptimizer } from './components/SEOOptimizer';
import { AccessibilityEnhancer } from './components/AccessibilityEnhancer';
import { PerformanceMonitor } from './components/PerformanceMonitor';
import './globals.css';

// Lazy load navigation components
const LazyHeader = React.lazy(() => import('../components/Header'));
const LazyFooter = React.lazy(() => import('../components/Footer'));

export const metadata = {
  title: 'Zion Tech Group — AI, Micro SaaS, and IT Services',
  description: 'Enterprise-grade AI, micro SaaS, and IT solutions. Transform your business with cutting-edge technology and expert consulting.',
  keywords: [
    'AI services',
    'micro SaaS',
    'IT consulting',
    'cloud migration',
    'DevOps',
    'SRE',
    'enterprise software',
    'artificial intelligence',
    'machine learning',
    'business automation'
  ].join(', '),
  authors: [{ name: 'Zion Tech Group' }],
  openGraph: {
    title: 'Zion Tech Group — AI, Micro SaaS, and IT Services',
    description: 'Enterprise-grade AI, micro SaaS, and IT solutions. Transform your business with cutting-edge technology.',
    url: 'https://ziontechgroup.com',
    siteName: 'Zion Tech Group',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Zion Tech Group - AI and IT Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zion Tech Group — AI, Micro SaaS, and IT Services',
    description: 'Enterprise-grade AI, micro SaaS, and IT solutions. Transform your business with cutting-edge technology.',
    images: ['/images/og-image.jpg'],
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
  alternates: {
    canonical: 'https://ziontechgroup.com',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        
        {/* Critical CSS inlined */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* Critical above-the-fold styles */
            body { margin: 0; font-family: system-ui, -apple-system, sans-serif; }
            .loading-spinner { 
              display: inline-block; 
              width: 20px; 
              height: 20px; 
              border: 2px solid #f3f3f3; 
              border-top: 2px solid #3b82f6; 
              border-radius: 50%; 
              animation: spin 1s linear infinite; 
            }
            @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
            .sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0; }
          `
        }} />
      </head>
      
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        {/* Skip to main content link */}
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50">
          Skip to main content
        </a>

        {/* SEO and Accessibility Enhancements */}
        <SEOOptimizer
          title="Zion Tech Group - Leading AI & IT Solutions"
          description="Transform your business with cutting-edge AI solutions, micro SaaS services, and comprehensive IT consulting. Expert technology solutions for modern enterprises."
          canonicalUrl="https://ziontechgroup.com"
          structuredData={{
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Zion Tech Group",
            "url": "https://ziontechgroup.com",
            "logo": "https://ziontechgroup.com/logo.png",
            "description": "Leading provider of AI-powered solutions and IT consulting services",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+1-302-464-0950",
              "contactType": "customer service",
              "email": "kleber@ziontechgroup.com"
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "364 E Main St STE 1008",
              "addressLocality": "Middletown",
              "addressRegion": "DE",
              "postalCode": "19709",
              "addressCountry": "US"
            },
            "sameAs": [
              "https://linkedin.com/company/zion-tech-group",
              "https://twitter.com/ziontechgroup"
            ]
          }}
        />
        
        <AccessibilityEnhancer />
        <PerformanceMonitor />

        {/* Lazy loaded header */}
        <LazyWrapper>
          <LazyHeader />
        </LazyWrapper>

        {/* Main content area */}
        <main id="main-content" className="min-h-screen" role="main">
          {children}
        </main>

        {/* Lazy loaded footer */}
        <LazyWrapper>
          <LazyFooter />
        </LazyWrapper>

        {/* Service Worker Registration */}
        <script dangerouslySetInnerHTML={{
          __html: `
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', function() {
                navigator.serviceWorker.register('/sw.js')
                  .then(function(registration) {
                    console.log('SW registered: ', registration);
                  })
                  .catch(function(registrationError) {
                    console.log('SW registration failed: ', registrationError);
                  });
              });
            }
          `
        }} />

        {/* Analytics and Performance Monitoring */}
        {process.env.NODE_ENV === 'production' && (
          <>
            <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
            <script dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'GA_MEASUREMENT_ID');
              `
            }} />
          </>
        )}
      </body>
    </html>
  );
}