import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
// import './globals.css'

export const metadata: Metadata = {
  title: 'Zion Tech Group - Leading AI & Technology Solutions',
  description: 'Leading technology solutions provider specializing in AI, automation, and digital transformation.',
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
        <div className="flex items-center space-x-6">
          <Link
            href="/services"
            className="text-gray-700 hover:text-blue-600 transition-colors focus-visible:focus font-semibold"
          >
            Services
          </Link>
          <Link
            href="/about"
            className="text-gray-700 hover:text-blue-600 transition-colors focus-visible:focus font-semibold"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-gray-700 hover:text-blue-600 transition-colors focus-visible:focus font-semibold"
          >
            Contact
          </Link>
          <Link
            href="/blog"
            className="text-gray-700 hover:text-blue-600 transition-colors focus-visible:focus font-semibold"
          >
            Blog
          </Link>
        </div>
      </nav>
    </header>
  )
}

function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-10 py-6 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
                href="/ai-solutions"
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
                href="/analytics"
                className="block text-gray-600 hover:text-blue-600 transition-colors focus-visible:focus"
              >
                Analytics
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Company</h3>
            <div className="space-y-2">
              <Link
                href="/about"
                className="block text-gray-600 hover:text-blue-600 transition-colors focus-visible:focus"
              >
                About Us
              </Link>
              <Link
                href="/careers"
                className="block text-gray-600 hover:text-blue-600 transition-colors focus-visible:focus"
              >
                Careers
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
            <h3 className="font-semibold text-gray-900 mb-3">Resources</h3>
            <div className="space-y-2">
              <Link
                href="/blog"
                className="block text-gray-600 hover:text-blue-600 transition-colors focus-visible:focus"
              >
                Blog
              </Link>
              <Link
                href="/case-studies"
                className="block text-gray-600 hover:text-blue-600 transition-colors focus-visible:focus"
              >
                Case Studies
              </Link>
              <Link
                href="/whitepapers"
                className="block text-gray-600 hover:text-blue-600 transition-colors focus-visible:focus"
              >
                Whitepapers
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Connect</h3>
            <div className="space-y-2">
              <Link
                href="https://linkedin.com/company/ziontechgroup"
                className="block text-gray-600 hover:text-blue-600 transition-colors focus-visible:focus"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </Link>
              <Link
                href="https://twitter.com/ziontechgroup"
                className="block text-gray-600 hover:text-blue-600 transition-colors focus-visible:focus"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-200 text-center text-gray-600">
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
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
