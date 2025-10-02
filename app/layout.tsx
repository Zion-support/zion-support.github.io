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
        <Link href="/" className="font-bold text-xl text-gray-900 hover:text-blue-600 transition-colors flex items-center gap-2">
          <span className="text-2xl">🚀</span>
          Zion Tech Group
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-8">
          <div className="relative group">
            <Link href="/services" className="text-gray-700 hover:text-blue-600 transition-colors font-semibold">
              Services
            </Link>
            <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="p-4">
                <div className="grid grid-cols-1 gap-3">
                  <div className="border-b border-gray-100 pb-3 mb-3">
                    <h3 className="font-semibold text-gray-900 mb-2">AI Services</h3>
                    <div className="space-y-1">
                      <Link href="/services/ai-data-analytics" className="block text-sm text-gray-600 hover:text-blue-600">AI Data Analytics Platform</Link>
                      <Link href="/services/ai-workflow-automation" className="block text-sm text-gray-600 hover:text-blue-600">AI Workflow Automation</Link>
                      <Link href="/services/ai-virtual-assistant" className="block text-sm text-gray-600 hover:text-blue-600">AI Virtual Assistant</Link>
                      <Link href="/services/autonomous-operations" className="block text-sm text-gray-600 hover:text-blue-600">Autonomous Operations</Link>
                    </div>
                  </div>
                  <div className="border-b border-gray-100 pb-3 mb-3">
                    <h3 className="font-semibold text-gray-900 mb-2">Micro SaaS</h3>
                    <div className="space-y-1">
                      <Link href="/services/healthcare-scheduling-saas" className="block text-sm text-gray-600 hover:text-blue-600">Healthcare Scheduling</Link>
                      <Link href="/services/ai-content-creation" className="block text-sm text-gray-600 hover:text-blue-600">AI Content Creation</Link>
                      <Link href="/services/remote-collaboration-hub" className="block text-sm text-gray-600 hover:text-blue-600">Remote Collaboration</Link>
                      <Link href="/services/ai-inventory-management" className="block text-sm text-gray-600 hover:text-blue-600">AI Inventory Management</Link>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">IT Services</h3>
                    <div className="space-y-1">
                      <Link href="/services/cloud-migration" className="block text-sm text-gray-600 hover:text-blue-600">Cloud Migration & DevOps</Link>
                      <Link href="/services/ai-consulting" className="block text-sm text-gray-600 hover:text-blue-600">Enterprise AI Integration</Link>
                      <Link href="/services/ai-security" className="block text-sm text-gray-600 hover:text-blue-600">Cybersecurity & AI Security</Link>
                      <Link href="/services/micro-saas" className="block text-sm text-gray-600 hover:text-blue-600">Custom Micro SaaS Development</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <Link href="/case-studies" className="text-gray-700 hover:text-blue-600 transition-colors font-semibold flex items-center gap-1">
            Case Studies
            <span className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
              $50M+ ROI
            </span>
          </Link>
          
          <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition-colors font-semibold flex items-center gap-1">
            Blog
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
              50+ Articles
            </span>
          </Link>
          
          <div className="relative group">
            <Link href="/content-hub" className="text-gray-700 hover:text-blue-600 transition-colors font-semibold flex items-center gap-1">
              Content Hub
              <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                NEW 2027
              </span>
            </Link>
          </div>
          
          <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors font-semibold">About</Link>
          
          <a
            href="tel:+13024640950"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Call +1 302 464 0950
          </a>
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
    <footer className="border-t border-gray-200 mt-10 py-12 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Services */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4 text-lg">🚀 Services</h3>
            <div className="space-y-3">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">AI Services</h4>
                <div className="space-y-1">
                  <Link href="/services/ai-data-analytics" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">AI Data Analytics</Link>
                  <Link href="/services/ai-workflow-automation" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">Workflow Automation</Link>
                  <Link href="/services/ai-virtual-assistant" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">Virtual Assistant</Link>
                  <Link href="/services/autonomous-operations" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">Autonomous Operations</Link>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Micro SaaS</h4>
                <div className="space-y-1">
                  <Link href="/services/healthcare-scheduling-saas" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">Healthcare Scheduling</Link>
                  <Link href="/services/ai-content-creation" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">AI Content Creation</Link>
                  <Link href="/services/remote-collaboration-hub" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">Remote Collaboration</Link>
                  <Link href="/services/ai-inventory-management" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">Inventory Management</Link>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">IT Services</h4>
                <div className="space-y-1">
                  <Link href="/services/cloud-migration" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">Cloud Migration</Link>
                  <Link href="/services/ai-consulting" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">AI Consulting</Link>
                  <Link href="/services/ai-security" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">Cybersecurity</Link>
                  <Link href="/services/micro-saas" className="block text-sm text-gray-600 hover:text-blue-600 transition-colors">Custom Development</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4 text-lg">📚 Resources</h3>
            <div className="space-y-3">
              <Link href="/blog" className="block text-gray-600 hover:text-blue-600 transition-colors font-medium">
                Blog & Insights
                <span className="ml-2 bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs font-semibold">50+ Articles</span>
              </Link>
              <Link href="/case-studies" className="block text-gray-600 hover:text-blue-600 transition-colors font-medium">
                Case Studies
                <span className="ml-2 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">$50M+ ROI</span>
              </Link>
              <Link href="/guides" className="block text-gray-600 hover:text-blue-600 transition-colors">Implementation Guides</Link>
              <Link href="/content-hub" className="block text-gray-600 hover:text-blue-600 transition-colors">
                Content Hub
                <span className="ml-2 bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">NEW 2027</span>
              </Link>
              <Link href="/sitemap.xml" className="block text-gray-600 hover:text-blue-600 transition-colors">Sitemap</Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4 text-lg">🏢 Company</h3>
            <div className="space-y-3">
              <Link href="/about" className="block text-gray-600 hover:text-blue-600 transition-colors">About Us</Link>
              <Link href="/contact" className="block text-gray-600 hover:text-blue-600 transition-colors">Contact</Link>
              <Link href="/privacy" className="block text-gray-600 hover:text-blue-600 transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="block text-gray-600 hover:text-blue-600 transition-colors">Terms of Service</Link>
              <Link href="/careers" className="block text-gray-600 hover:text-blue-600 transition-colors">Careers</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4 text-lg">📞 Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600">📞</span>
                </div>
                <div>
                  <a href="tel:+13024640950" className="text-gray-900 font-semibold hover:text-blue-600 transition-colors">
                    +1 302 464 0950
                  </a>
                  <p className="text-sm text-gray-600">Call us anytime</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600">✉️</span>
                </div>
                <div>
                  <a href="mailto:kleber@ziontechgroup.com" className="text-gray-900 font-semibold hover:text-blue-600 transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                  <p className="text-sm text-gray-600">Email us</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600">📍</span>
                </div>
                <div>
                  <p className="text-gray-900 font-semibold">364 E Main St STE 1008</p>
                  <p className="text-gray-900 font-semibold">Middletown, DE 19709</p>
                  <p className="text-sm text-gray-600">Visit our office</p>
                </div>
              </div>

              <div className="pt-4">
                <a
                  href="https://ziontechgroup.com"
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Visit Website
                  <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-600">
                &copy; 2025 Zion Tech Group. All rights reserved. | 
                <span className="ml-2">Transforming businesses with AI, Micro SaaS, and IT solutions.</span>
              </p>
            </div>
            <div className="flex gap-4">
              <span className="text-sm text-gray-500">🚀 Powered by Innovation</span>
              <span className="text-sm text-gray-500">⚡ Built for Scale</span>
              <span className="text-sm text-gray-500">🎯 Results Driven</span>
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
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}