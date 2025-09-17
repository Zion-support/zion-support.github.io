import React from 'react';
import Link from 'next/link';
import Analytics from './components/Analytics';
import PerformanceMonitor from './components/PerformanceMonitor';
import './globals.css';
import '../styles/optimizations.css';
// import PerformanceMonitor from '../components/PerformanceMonitor';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import NewContentBanner from '../components/NewContentBanner';
import EnhancedNavigation from '../components/EnhancedNavigation';

export const metadata = {
  title: 'Zion Tech Group - AI & Technology Solutions',
  description: 'Transform your business with cutting-edge AI, cloud infrastructure, and micro SaaS solutions.',
};

export default function RootLayout({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        
        {/* Performance Optimizations */}
        <PerformanceOptimizations />
        
        {/* Advanced SEO Optimizer */}
        <AdvancedSEOOptimizer />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Zion Tech Group",
              "url": "https://zion.tech",
              "logo": "https://zion.tech/logo.png",
              "description": "Leading provider of revolutionary AI solutions, quantum computing breakthroughs, and digital transformation services.",
              "foundingDate": "2020",
              "founders": [
                {
                  "@type": "Person",
                  "name": "Zion Tech Group Founders"
                }
              ],
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-555-ZION-TECH",
                "contactType": "customer service",
                "availableLanguage": "English"
              },
              "sameAs": [
                "https://twitter.com/ziontechgroup",
                "https://linkedin.com/company/zion-tech-group",
                "https://github.com/zion-tech-group"
              ],
              "offers": {
                "@type": "Offer",
                "description": "AI Solutions and Technology Services",
                "category": "Technology Services"
              }
            })
          }}
        />
        
        {/* Additional SEO meta tags */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />
        <meta name="application-name" content="Zion Tech Group" />
        <meta name="msapplication-tooltip" content="Zion Tech Group - AI Solutions" />
        <meta name="msapplication-starturl" content="/" />
        
        {/* Performance hints */}
        <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen bg-white text-gray-900 font-sans">
        <ErrorBoundary>
          <NewContentBanner />
          <EnhancedNavigation />
          <main className="max-w-6xl mx-auto px-4 py-6 min-h-screen" role="main">
            {children}
          </main>
          
          {/* Development Tools */}
          <PerformanceMonitor />
          <AccessibilityEnhancer />
        </ErrorBoundary>
      </body>
    </html>
  );
}