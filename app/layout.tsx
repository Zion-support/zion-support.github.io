import React from 'react';
import Link from 'next/link';
import './globals.css';
import '../styles/optimizations.css';
import PerformanceMonitor from '../components/PerformanceMonitor';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import NewContentBanner from '../components/NewContentBanner';
import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedSEO from '../components/EnhancedSEO';
import AdvancedPerformanceMonitor2026 from '../components/AdvancedPerformanceMonitor2026';
import UltimateAIAssistant2026 from '../components/UltimateAIAssistant2026';
import PerformanceOptimizations from '../components/PerformanceOptimizations';

export const metadata = {
  title: 'Zion Tech Group - AI & Technology Solutions',
  description: 'Transform your business with cutting-edge AI, cloud infrastructure, and micro SaaS solutions.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
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
      <body className="antialiased bg-white text-gray-900">
        <PerformanceMonitor>
          <AccessibilityEnhancer>
            <AdvancedPerformanceMonitor2026 />
            <UltimateAIAssistant2026 />
            {/* Skip to main content for accessibility */}
            <a 
              href="#main-content" 
              className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-50"
            >
              Skip to main content
            </a>
            
            {/* Enhanced Navigation */}
            <EnhancedNavigation />
            
            {/* New Content Banner */}
            <NewContentBanner />
            
            {/* Main Content */}
            <main id="main-content" className="min-h-screen">
              {children}
            </main>
            
            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Zion Tech Group</h3>
                    <p className="text-gray-400 mb-4">
                      Leading the revolution in AI solutions and digital transformation.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-md font-semibold mb-4">Services</h4>
                    <ul className="space-y-2 text-gray-400">
                      <li><Link href="/services" className="hover:text-white transition-colors">AI Solutions</Link></li>
                      <li><Link href="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
                      <li><Link href="/resources" className="hover:text-white transition-colors">Resources</Link></li>
                      <li><Link href="/tools" className="hover:text-white transition-colors">Tools</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-md font-semibold mb-4">Company</h4>
                    <ul className="space-y-2 text-gray-400">
                      <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
                      <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                      <li><Link href="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                      <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-md font-semibold mb-4">Connect</h4>
                    <ul className="space-y-2 text-gray-400">
                      <li><a href="https://twitter.com/ziontechgroup" className="hover:text-white transition-colors">Twitter</a></li>
                      <li><a href="https://linkedin.com/company/zion-tech-group" className="hover:text-white transition-colors">LinkedIn</a></li>
                      <li><a href="https://github.com/zion-tech-group" className="hover:text-white transition-colors">GitHub</a></li>
                      <li><Link href="/newsletter" className="hover:text-white transition-colors">Newsletter</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                  <p>&copy; 2025 Zion Tech Group. All rights reserved.</p>
                </div>
              </div>
            </footer>
          </AccessibilityEnhancer>
        </PerformanceMonitor>
      </body>
    </html>
  );
}