import React from 'react';
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
        <a href="/" className="font-bold text-xl text-gray-900 hover:text-blue-600 transition-colors flex items-center">
          <span className="text-blue-600 mr-2">🚀</span>
          Zion Tech Group
        </a>
        
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
            <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="py-2">
                <a href="/services/ai-services" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                  AI Services
                </a>
                <a href="/services/micro-saas" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                  Micro SaaS
                </a>
                <a href="/services/it-services" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                  IT Services
                </a>
                <a href="/services/ai-workflow-automation" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                  AI Workflow Automation
                </a>
              </div>
            </div>
          </div>

          <a href="/solutions" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
            Solutions
          </a>
          <a href="/guides" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
            Guides
          </a>
          <a href="/case-studies" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
            Case Studies
          </a>
          <a href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
            Contact
          </a>
          <a href="tel:+13024640950" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
            Call +1 302 464 0950
          </a>
        </div>

        {/* Mobile menu button */}
        <button className="lg:hidden text-gray-700 hover:text-blue-600 transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Zion Tech Group</h3>
            <p className="text-gray-400 mb-4">
              Leading AI, Micro SaaS, and IT Solutions for Modern Enterprises
            </p>
            <div className="flex space-x-4">
              <a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300 transition-colors">
                +1 302 464 0950
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="/services/ai-services" className="text-gray-400 hover:text-white transition-colors">AI Services</a></li>
              <li><a href="/services/micro-saas" className="text-gray-400 hover:text-white transition-colors">Micro SaaS</a></li>
              <li><a href="/services/it-services" className="text-gray-400 hover:text-white transition-colors">IT Services</a></li>
              <li><a href="/services/ai-workflow-automation" className="text-gray-400 hover:text-white transition-colors">AI Workflow Automation</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="/solutions" className="text-gray-400 hover:text-white transition-colors">Solutions</a></li>
              <li><a href="/guides" className="text-gray-400 hover:text-white transition-colors">Guides</a></li>
              <li><a href="/case-studies" className="text-gray-400 hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="/security" className="text-gray-400 hover:text-white transition-colors">Security</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Zion Tech Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}