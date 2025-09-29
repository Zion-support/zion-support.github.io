import React from 'react';
import Link from 'next/link';
import './globals.css';
import PerformanceMonitor from '../components/PerformanceMonitor';
import AccessibilityEnhancer from '../components/AccessibilityEnhancer';
import ErrorBoundary from '../components/ErrorBoundary';

export const metadata = {
  title: 'Zion Tech Group — AI, Micro SaaS, and IT Services',
  description: 'Enterprise-grade AI, micro SaaS, and IT solutions. Build faster with Zion Tech Group.',
  keywords: 'AI services, micro SaaS, IT services, cloud migration, DevOps, SRE, enterprise software',
  authors: [{ name: 'Zion Tech Group' }],
  openGraph: {
    title: 'Zion Tech Group — AI, Micro SaaS, and IT Services',
    description: 'Enterprise-grade AI, micro SaaS, and IT solutions. Build faster with Zion Tech Group.',
    url: 'https://ziontechgroup.com',
    siteName: 'Zion Tech Group',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zion Tech Group — AI, Micro SaaS, and IT Services',
    description: 'Enterprise-grade AI, micro SaaS, and IT solutions. Build faster with Zion Tech Group.',
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
};

function Header() {
  return (
    <header className="border-b border-gray-200 sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <nav className="flex items-center justify-between px-4 py-3 max-w-6xl mx-auto" role="navigation" aria-label="Main navigation">
        <Link 
          href="/" 
          className="font-bold text-lg text-gray-900 hover:text-blue-600 transition-colors focus-visible:focus"
          aria-label="Zion Tech Group - Home"
        >
          Zion Tech Group
        </Link>
        <div className="hidden md:flex gap-6">
          <Link 
            href="/services" 
            className="text-gray-700 hover:text-blue-600 transition-colors focus-visible:focus"
          >
            Services
          </Link>
          <Link 
            href="/pricing" 
            className="text-gray-700 hover:text-blue-600 transition-colors focus-visible:focus"
          >
            Pricing
          </Link>
          <Link 
            href="/case-studies" 
            className="text-gray-700 hover:text-blue-600 transition-colors focus-visible:focus"
          >
            Case Studies
          </Link>
          <Link 
            href="/testimonials" 
            className="text-gray-700 hover:text-blue-600 transition-colors focus-visible:focus"
          >
            Testimonials
          </Link>
          <Link 
            href="/blog" 
            className="text-gray-700 hover:text-blue-600 transition-colors focus-visible:focus"
          >
            Blog
          </Link>
          <Link 
            href="/contact" 
            className="text-gray-700 hover:text-blue-600 transition-colors focus-visible:focus"
          >
            Contact
          </Link>
        </div>
        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors focus-visible:focus" 
          aria-label="Toggle menu"
          aria-expanded="false"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-10 py-6 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Services</h3>
            <div className="space-y-2">
              <Link 
                href="/services" 
                className="block text-gray-600 hover:text-blue-600 transition-colors focus-visible:focus"
              >
                All Services
              </Link>
              <Link 
                href="/pricing" 
                className="block text-gray-600 hover:text-blue-600 transition-colors focus-visible:focus"
              >
                Pricing Plans
              </Link>
              <Link 
                href="/case-studies" 
                className="block text-gray-600 hover:text-blue-600 transition-colors focus-visible:focus"
              >
                Case Studies
              </Link>
              <Link 
                href="/testimonials" 
                className="block text-gray-600 hover:text-blue-600 transition-colors focus-visible:focus"
              >
                Testimonials
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Resources</h3>
            <div className="space-y-2">
              <Link 
                href="/blog" 
                className="block text-gray-600 hover:text-blue-600 transition-colors focus-visible:focus"
              >
                Blog & Insights
              </Link>
              <Link 
                href="/contact" 
                className="block text-gray-600 hover:text-blue-600 transition-colors focus-visible:focus"
              >
                Contact Us
              </Link>
              <a 
                href="https://ziontechgroup.com" 
                className="block text-gray-600 hover:text-blue-600 transition-colors focus-visible:focus"
                target="_blank"
                rel="noopener noreferrer"
              >
                Main Site
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Contact Info</h3>
            <div className="text-sm text-gray-600 space-y-1">
              <div>Mobile: +1 302 464 0950</div>
              <div>
                Email: <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="hover:text-blue-600 transition-colors focus-visible:focus"
                >
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div>
                Address: 364 E Main St STE 1008<br />
                Middletown DE 19709
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-6 pt-4 text-xs text-gray-500 text-center">
          © {new Date().getFullYear()} Zion Tech Group. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="min-h-screen bg-white text-gray-900 font-sans">
        <ErrorBoundary>
          <Header />
          <main className="max-w-6xl mx-auto px-4 py-6 min-h-screen" role="main">
            {children}
          </main>
          <Footer />
          
          {/* Development Tools */}
          <PerformanceMonitor />
          <AccessibilityEnhancer />
        </ErrorBoundary>
      </body>
    </html>
  );
}