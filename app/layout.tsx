import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
// import './globals.css'

export const metadata: Metadata = {
  title: 'Zion Tech Group - Leading AI & Technology Solutions',
  description: 'Leading technology solutions provider specializing in AI, automation, and digital transformation.',
  keywords: ['AI solutions', 'technology consulting', 'digital transformation', 'automation', 'analytics'],
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
    title: 'Zion Tech Group - Leading AI & Technology Solutions',
    description: 'Leading technology solutions provider specializing in AI, automation, and digital transformation.',
    url: 'https://zion.app',
    siteName: 'Zion Tech Group',
    images: [
      {
        url: 'https://zion.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Zion Tech Group - AI & Technology Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zion Tech Group - Leading AI & Technology Solutions',
    description: 'Leading technology solutions provider specializing in AI, automation, and digital transformation.',
    images: ['https://zion.app/og-image.jpg'],
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
}

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
        <div className="hidden md:flex space-x-6">
          <Link
            href="/content-showcase"
            className="text-gray-700 hover:text-blue-600 transition-colors focus-visible:focus font-semibold"
          >
            Content Library
          </Link>
          <Link
            href="/ai-2025"
            className="text-gray-700 hover:text-blue-600 transition-colors focus-visible:focus"
          >
            AI Solutions
          </Link>
          <Link
            href="/automation"
            className="text-gray-700 hover:text-blue-600 transition-colors focus-visible:focus"
          >
            Automation
          </Link>
          <Link
            href="/success-stories"
            className="text-gray-700 hover:text-blue-600 transition-colors focus-visible:focus"
          >
            Success Stories
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
  )
}
function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-10 py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Services</h3>
            <div className="space-y-2">
              <Link
                href="/ai-2025"
                className="block text-gray-600 hover:text-blue-600 transition-colors focus-visible:focus"
              >
                AI Solutions
              </Link>
              <Link
                href="/automation"
                className="block text-gray-600 hover:text-blue-600 transition-colors focus-visible:focus"
              >
                Automation
              </Link>
              <Link
                href="/autonomous-systems-2026"
                className="block text-gray-600 hover:text-blue-600 transition-colors focus-visible:focus"
              >
                Autonomous Systems
              </Link>
              <Link
                href="/tools"
                className="block text-gray-600 hover:text-blue-600 transition-colors focus-visible:focus"
              >
                AI Tools
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <div className="space-y-2">
              <Link
                href="/"
                className="block text-gray-600 hover:text-blue-600 transition-colors focus-visible:focus"
              >
                Home
              </Link>
              <Link
                href="/content-showcase"
                className="block text-gray-600 hover:text-blue-600 transition-colors focus-visible:focus"
              >
                Content Library
              </Link>
              <Link
                href="/success-stories"
                className="block text-gray-600 hover:text-blue-600 transition-colors focus-visible:focus"
              >
                Success Stories
              </Link>
              <Link
                href="/contact"
                className="block text-gray-600 hover:text-blue-600 transition-colors focus-visible:focus"
              >
                Contact
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
            <div className="space-y-2">
              <Link
                href="/tools/ai-roi-calculator"
                className="block text-gray-600 hover:text-blue-600 transition-colors focus-visible:focus"
              >
                ROI Calculator
              </Link>
              <Link
                href="/tools/ai-readiness-assessment"
                className="block text-gray-600 hover:text-blue-600 transition-colors focus-visible:focus"
              >
                Readiness Assessment
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
            <h3 className="font-semibold text-gray-900 mb-4">Contact Info</h3>
            <div className="space-y-2 text-gray-600">
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
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
          © {new Date().getFullYear()} Zion Tech Group. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Basic security headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1e40af" />
        <meta property="og:url" content="https://ziontechgroup.com" />
        <meta property="og:site_name" content="Zion Tech Group" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Preload critical resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      </head>
      <body className="min-h-screen bg-white">
        <Header />
        <main id="main-content" role="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
