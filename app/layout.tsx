import React from 'react';
import Link from 'next/link';
import './globals.css';

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
    <header className="border-b border-gray-200 sticky top-0 z-50 bg-white shadow-sm">
      <nav className="flex items-center justify-between px-4 py-3 max-w-7xl mx-auto">
        <Link href="/" className="font-bold text-xl text-gray-900 hover:text-blue-600 transition-colors flex items-center">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Zion Tech Group</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {/* Services Dropdown */}
          <div className="relative group">
            <button className="text-gray-700 hover:text-blue-600 transition-colors flex items-center gap-1 font-medium">
              Services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="py-2">
                <Link href="/services/ai-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  AI Services & Solutions
                </Link>
                <Link href="/services/ai-powered-business-automation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  AI Business Automation
                </Link>
                <Link href="/services/micro-saas" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  Micro SaaS Solutions
                </Link>
                <Link href="/services/cloud-infrastructure-devops" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  Cloud Infrastructure & DevOps
                </Link>
                <Link href="/services/cybersecurity-compliance" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  Cybersecurity & Compliance
                </Link>
                <Link href="/services/data-analytics-business-intelligence" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  Data Analytics & BI
                </Link>
                <Link href="/services/it-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                  IT Services & Solutions
                </Link>
                <div className="border-t border-gray-100 my-1"></div>
                <Link href="/services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium">
                  All Services
                </Link>
              </div>
            </div>
          </div>

          {/* Solutions */}
          <Link href="/solutions" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
            Solutions
          </Link>

          {/* Case Studies */}
          <Link href="/case-studies" className="text-gray-700 hover:text-blue-600 transition-colors font-medium flex items-center gap-1">
            Case Studies
            <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
              $43M+ ROI
            </span>
          </Link>

          {/* Blog */}
          <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition-colors font-medium flex items-center gap-1">
            Blog
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
              50+ Articles
            </span>
          </Link>

          {/* About */}
          <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
            About
          </Link>

          {/* Contact */}
          <Link href="/contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden p-2" aria-label="Toggle menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </header>
  )
}

function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Services */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 text-lg">Services</h3>
            <div className="space-y-3">
              <Link href="/services/ai-services" className="block text-gray-600 hover:text-blue-600 transition-colors">
                AI Services & Solutions
              </Link>
              <Link href="/services/ai-powered-business-automation" className="block text-gray-600 hover:text-blue-600 transition-colors">
                AI Business Automation
              </Link>
              <Link href="/services/micro-saas" className="block text-gray-600 hover:text-blue-600 transition-colors">
                Micro SaaS Solutions
              </Link>
              <Link href="/services/cloud-infrastructure-devops" className="block text-gray-600 hover:text-blue-600 transition-colors">
                Cloud Infrastructure & DevOps
              </Link>
              <Link href="/services/cybersecurity-compliance" className="block text-gray-600 hover:text-blue-600 transition-colors">
                Cybersecurity & Compliance
              </Link>
              <Link href="/services/data-analytics-business-intelligence" className="block text-gray-600 hover:text-blue-600 transition-colors">
                Data Analytics & BI
              </Link>
              <Link href="/services/it-services" className="block text-gray-600 hover:text-blue-600 transition-colors">
                IT Services & Solutions
              </Link>
              <Link href="/services" className="block text-gray-600 hover:text-blue-600 transition-colors font-medium">
                All Services
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 text-lg">Company</h3>
            <div className="space-y-3">
              <Link href="/about" className="block text-gray-600 hover:text-blue-600 transition-colors">
                About Us
              </Link>
              <Link href="/solutions" className="block text-gray-600 hover:text-blue-600 transition-colors">
                Solutions
              </Link>
              <Link href="/case-studies" className="block text-gray-600 hover:text-blue-600 transition-colors">
                Case Studies
              </Link>
              <Link href="/contact" className="block text-gray-600 hover:text-blue-600 transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 text-lg">Resources</h3>
            <div className="space-y-3">
              <Link href="/blog" className="block text-gray-600 hover:text-blue-600 transition-colors">
                Blog & Insights
              </Link>
              <Link href="/guides" className="block text-gray-600 hover:text-blue-600 transition-colors">
                Implementation Guides
              </Link>
              <Link href="/enterprise" className="block text-gray-600 hover:text-blue-600 transition-colors">
                Enterprise Solutions
              </Link>
              <a href="https://ziontechgroup.com" className="block text-gray-600 hover:text-blue-600 transition-colors">
                Main Website
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4 text-lg">Get In Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+13024640950" className="text-gray-600 hover:text-blue-600 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:kleber@ziontechgroup.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 text-gray-400 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="text-gray-600">
                  <div>364 E Main St STE 1008</div>
                  <div>Middletown DE 19709</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-500 mb-4 md:mb-0">
              © {new Date().getFullYear()} Zion Tech Group. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-500">
              <Link href="/privacy" className="hover:text-blue-600 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-blue-600 transition-colors">Terms of Service</Link>
              <Link href="/security" className="hover:text-blue-600 transition-colors">Security</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900">
        <Header />
        <main className="max-w-6xl mx-auto px-4 py-6 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}