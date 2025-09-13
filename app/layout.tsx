import React from 'react';
import { Link } from 'react-router-dom';
import './globals.css';
import PerformanceMonitor from '../components/PerformanceMonitor';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import ErrorBoundary from '../components/ErrorBoundary';
import NewContentBanner from '../components/NewContentBanner';
import EnhancedNavigation from '../components/EnhancedNavigation';

export const metadata = {
  title: {
    default: 'Zion Tech Group - Revolutionary AI 2025 Autonomous Operations & Technology Services',
    template: '%s | Zion Tech Group'
  },
  description: 'Leading provider of revolutionary AI 2025 autonomous operations, quantum computing breakthroughs, and digital transformation services. New content: implementation guides, case studies, and breakthrough insights delivering 2,500-5,000% ROI.',
  metadataBase: new URL('https://zion.tech'),
  applicationName: 'Zion Tech Group',
  generator: 'Next.js',
  authors: [{ name: 'Zion Tech Group', url: 'https://zion.tech' }],
  creator: 'Zion Tech Group',
  publisher: 'Zion Tech Group',
  keywords: [
    'AI 2025',
    'Autonomous Operations',
    'AI Implementation Guide',
    'Business Automation',
    'ROI 2500%',
    '99.9% Accuracy',
    '10,000x Faster Processing',
    'AI solutions',
    'Artificial Intelligence',
    'Quantum Computing',
    'Machine Learning',
    'Neural Networks',
    'Digital Transformation',
    'Edge Computing',
    'Autonomous Systems',
    'AI Consulting',
    'Technology Services',
    'Case Studies',
    'Implementation Guide',
    'ROI Calculator',
    'AI 2026',
    'Revolutionary Technology',
    'Breakthrough Solutions'
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://zion.tech',
    siteName: 'Zion Tech Group',
    title: 'Zion Tech Group - Revolutionary AI Solutions & Technology Services',
    description: 'Leading provider of revolutionary AI solutions, quantum computing breakthroughs, and digital transformation services.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Zion Tech Group - Revolutionary AI Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zion Tech Group - Revolutionary AI Solutions',
    description: 'Leading provider of revolutionary AI solutions and digital transformation services.',
    images: ['/og-image.png'],
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
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  alternates: {
    canonical: 'https://zion.tech',
  },
  category: 'Technology',
  classification: 'AI Solutions Provider',
  referrer: 'origin-when-cross-origin',
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#5bbad5' },
    ],
  },
  manifest: '/site.webmanifest',
  other: {
    'msapplication-TileColor': '#da532c',
    'msapplication-config': '/browserconfig.xml',
  },
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
        <ErrorBoundary>
          <PerformanceMonitor>
            <AccessibilityEnhancer>
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
                        <li><Link to="/services" className="hover:text-white transition-colors">AI Solutions</Link></li>
                        <li><Link to="/case-studies" className="hover:text-white transition-colors">Case Studies</Link></li>
                        <li><Link to="/resources" className="hover:text-white transition-colors">Resources</Link></li>
                        <li><Link to="/tools" className="hover:text-white transition-colors">Tools</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-md font-semibold mb-4">Company</h4>
                      <ul className="space-y-2 text-gray-400">
                        <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
                        <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                        <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
                        <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-md font-semibold mb-4">Connect</h4>
                      <ul className="space-y-2 text-gray-400">
                        <li><a href="https://twitter.com/ziontechgroup" className="hover:text-white transition-colors">Twitter</a></li>
                        <li><a href="https://linkedin.com/company/zion-tech-group" className="hover:text-white transition-colors">LinkedIn</a></li>
                        <li><a href="https://github.com/zion-tech-group" className="hover:text-white transition-colors">GitHub</a></li>
                        <li><Link to="/newsletter" className="hover:text-white transition-colors">Newsletter</Link></li>
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
        </ErrorBoundary>
      </body>
    </html>
  );
}