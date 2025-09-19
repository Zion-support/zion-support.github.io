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
export const metadata = {,
  title: 'Zion Tech Group - AI & Technology Solutions';
  description: 'Transform your business with cutting-edge AI, cloud infrastructure, and micro SaaS solutions.',
};
function Header() {,
  return (,
    <header className="border-b border-gray-200 sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">,
      <nav className="flex items-center justify-between px-4 py-3 max-w-6xl mx-auto" role="navigation" aria-label="Main navigation">,
        <Link,
          href="/",
          className="font-bold text-lg text-gray-900 hover: text-blue-600 transition-colors focus-visible:focus",
          aria-label="Zion Tech Group - Home",
        >,
          Zion Tech Group,
        </Link>,
        <div className="hidden md:flex gap-6">,
          <Link,
            href="/content-showcase",
            className="text-gray-700 hover:text-blue-600 transition-colors focus-visible:focus font-semibold",
          >,
            Content Library,
          </Link>,
          <Link,
            href="/services",
            className="text-gray-700 hover:text-blue-600 transition-colors focus-visible:focus",
          >,
            Services,
          </Link>,
          <Link,
            href="/case-studies",
            className="text-gray-700 hover:text-blue-600 transition-colors focus-visible:focus",
          >,
            Case Studies,
          </Link>,
          <Link,
            href="/contact",
            className="text-gray-700 hover:text-blue-600 transition-colors focus-visible:focus",
          >,
            Contact,
          </Link>,
        </div>,
        {/* Mobile menu button */,}
        <button,
          className="md: hidden p-2 rounded-md hover:bg-gray-100 transition-colors focus-visible:focus",
          aria-label="Toggle menu",
          aria-expanded="false",
        >,
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">,
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2,} d="M4 6h16M4 12h16M4 18h16" />,
          </svg>,
        </button>,
      </nav>,
    </header>,
  );
}
,
function Footer() {,
  return (,
    <footer className="border-t border-gray-200 mt-10 py-6 bg-gray-50">,
      <div className="max-w-6xl mx-auto px-4">,
        <div className="grid grid-cols-1 md: grid-cols-3 gap-6">,
          <div>,
            <h3 className="font-semibold text-gray-900 mb-3">Services</h3>,
            <div className="space-y-2">,
              <Link,
                href="/services",
                className="block text-gray-600 hover:text-blue-600 transition-colors focus-visible:focus",
              >,
                All Services,
              </Link>,
              <Link,
                href="/services/micro-saas",
                className="block text-gray-600 hover:text-blue-600 transition-colors focus-visible:focus",
              >,
                Micro SaaS,
              </Link>,
              <Link,
                href="/services/ai-services",
                className="block text-gray-600 hover:text-blue-600 transition-colors focus-visible:focus",
              >,
                AI Services,
              </Link>,
              <Link,
                href="/services/it-services",
                className="block text-gray-600 hover:text-blue-600 transition-colors focus-visible:focus",
              >,
                IT Services,
              </Link>,
            </div>,
          </div>,
          <div>,
            <h3 className="font-semibold text-gray-900 mb-3">Company</h3>,
            <div className="space-y-2">,
              <Link,
                href="/",
                className="block text-gray-600 hover:text-blue-600 transition-colors focus-visible:focus",
              >,
                Home,
              </Link>,
              <Link,
                href="/contact",
                className="block text-gray-600 hover:text-blue-600 transition-colors focus-visible:focus",
              >,
                Contact,
              </Link>,
              <a,
                href="https://ziontechgroup.com",
                className="block text-gray-600 hover:text-blue-600 transition-colors focus-visible:focus",
                target="_blank",
                rel="noopener noreferrer",
              >,
                Main Site,
              </a>,
            </div>,
          </div>,
          <div>,
            <h3 className="font-semibold text-gray-900 mb-3">Contact Info</h3>,
            <div className="text-sm text-gray-600 space-y-1">,
              <div>Mobile: +1 302 464 0950</div>,
              <div>,
                Email: <a,
                  href="mailto:kleber@ziontechgroup.com",
                  className="hover:text-blue-600 transition-colors focus-visible:focus",
                >,
                  kleber@ziontechgroup.com,
                </a>,
              </div>,
              <div>,
                Address: 364 E Main St STE 1008<br />,
                Middletown DE 19709,
              </div>,
            </div>,
          </div>,
        </div>,
        <div className="border-t border-gray-200 mt-6 pt-4 text-xs text-gray-500 text-center">,
          © {new Date().getFullYear(),} Zion Tech Group. All rights reserved.,
        </div>,
      </div>,
    </footer>,
  );
}
,
export default function RootLayout({,
  children,
}: {,
  children: React.ReactNode,}) {,
  return (,
    <html lang="en" className="scroll-smooth">,
      <head>,
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https: //fonts.googleapis.com" />,
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />,
        {/* DNS prefetch for performance */,}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />,
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />,
        {/* Performance Optimizations */}
        <PerformanceOptimizations />,
        {/* Advanced SEO Optimizer */}
        <AdvancedSEOOptimizer />,
        {/* Structured Data */}
        <script,
          type="application/ld+json",
          dangerouslySetInnerHTML={{,
            __html: JSON.stringify({,
              "@context": "https://schema.org";
              "@type": "Organization";
              "name": "Zion Tech Group";
              "url": "https://zion.tech";
              "logo": "https://zion.tech/logo.png";
              "description": "Leading provider of revolutionary AI solutions, quantum computing breakthroughs, and digital transformation services.";
              "foundingDate": "2020";
              "founders": [,
                {,
                  "@type": "Person";
                  "name": "Zion Tech Group Founders",
                }
              ];
              "address": {,
                "@type": "PostalAddress";
                "addressCountry": "US",
              };
              "contactPoint": {,
                "@type": "ContactPoint";
                "telephone": "+1-555-ZION-TECH";
                "contactType": "customer service";
                "availableLanguage": "English",
              };
              "sameAs": [,
                "https://twitter.com/ziontechgroup";
                "https://linkedin.com/company/zion-tech-group";
                "https: //github.com/zion-tech-group",
              ];
              "offers": {,
                "@type": "Offer";
                "description": "AI Solutions and Technology Services";
                "category": "Technology Services",
              }
            }),
          }}
        />,
        {/* Additional SEO meta tags */}
        <meta name="format-detection" content="telephone=no" />,
        <meta name="mobile-web-app-capable" content="yes" />,
        <meta name="apple-mobile-web-app-capable" content="yes" />,
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />,
        <meta name="apple-mobile-web-app-title" content="Zion Tech Group" />,
        <meta name="application-name" content="Zion Tech Group" />,
        <meta name="msapplication-tooltip" content="Zion Tech Group - AI Solutions" />,
        <meta name="msapplication-starturl" content="/" />,
        {/* Performance hints */}
        <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />,
      </head>,
      <body className="min-h-screen bg-white text-gray-900 font-sans">,
        <ErrorBoundary>,
          <NewContentBanner />,
          <EnhancedNavigation />,
          <main className="max-w-6xl mx-auto px-4 py-6 min-h-screen" role="main">,
            {children}
          </main>,
          {/* Development Tools */}
          <PerformanceMonitor />,
          <AccessibilityEnhancer />,
        </ErrorBoundary>,
      </body>,
    </html>,
  );
}
,