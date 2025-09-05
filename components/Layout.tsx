import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

interface LayoutProps {
  title?: string;
  description?: string;
  keywords?: string;
  children: React.ReactNode;
  noIndex?: boolean;
}

const Layout: React.FC<LayoutProps> = ({
  title = 'Zion Tech Group - Technology Solutions',
  description = 'Leading technology solutions provider specializing in AI, cloud services, and digital transformation.',
  keywords = 'technology solutions, AI development, cloud services, cybersecurity, Delaware',
  children,
  noIndex = false
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Head>
      
      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <nav className="bg-white shadow-lg sticky top-0 z-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center py-4">
              {/* Logo */}
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">Z</span>
                </div>
                <div>
                  <div className="text-xl font-bold text-gray-800">Zion Tech Group</div>
                  <div className="text-xs text-gray-500">Technology Solutions</div>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex space-x-8">
                <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                  Home
                </Link>
                <Link href="/services" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                  Services
                </Link>
                <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                  About
                </Link>
                <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                  Contact
                </Link>
              </div>

              {/* CTA Button */}
              <div className="hidden lg:flex items-center space-x-4">
                <Link href="/contact" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  Get Started
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Mobile Menu */}
            {isSidebarOpen && (
              <div className="lg:hidden py-4 border-t border-gray-200">
                <div className="flex flex-col space-y-4">
                  <Link href="/" onClick={() => setIsSidebarOpen(false)}>
                    <span className="block text-gray-600 hover:text-blue-600 transition-colors font-medium py-2">
                      Home
                    </span>
                  </Link>
                  <Link href="/services" onClick={() => setIsSidebarOpen(false)}>
                    <span className="block text-gray-600 hover:text-blue-600 transition-colors font-medium py-2">
                      Services
                    </span>
                  </Link>
                  <Link href="/about" onClick={() => setIsSidebarOpen(false)}>
                    <span className="block text-gray-600 hover:text-blue-600 transition-colors font-medium py-2">
                      About
                    </span>
                  </Link>
                  <Link href="/contact" onClick={() => setIsSidebarOpen(false)}>
                    <span className="block text-gray-600 hover:text-blue-600 transition-colors font-medium py-2">
                      Contact
                    </span>
                  </Link>
                  <Link href="/contact" onClick={() => setIsSidebarOpen(false)}>
                    <span className="block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-center">
                      Get Started
                    </span>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Main Content */}
        <main>
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white">
          <div className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="md:col-span-2">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xl">Z</span>
                  </div>
                  <div>
                    <div className="text-xl font-bold">Zion Tech Group</div>
                    <div className="text-sm text-gray-400">Technology Solutions</div>
                  </div>
                </div>
                <p className="text-gray-300 mb-6 max-w-md">
                  Leading technology solutions provider specializing in AI, cloud services, 
                  and digital transformation. Empowering businesses to thrive in the digital age.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-400">📧</span>
                    <a href="mailto:kleber@ziontechgroup.com" className="text-gray-300 hover:text-white transition-colors">
                      kleber@ziontechgroup.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-400">📱</span>
                    <a href="tel:+13024640950" className="text-gray-300 hover:text-white transition-colors">
                      +1 302 464 0950
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-400">📍</span>
                    <span className="text-gray-300">364 E Main St STE 1008<br />Middletown, DE 19709</span>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-3">
                  <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
                  <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
                  <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
                  <li><Link href="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Resources</h3>
                <ul className="space-y-3">
                  <li><Link href="/faq" className="text-gray-300 hover:text-white transition-colors">FAQ</Link></li>
                  <li><Link href="/pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</Link></li>
                  <li><Link href="/support" className="text-gray-300 hover:text-white transition-colors">Support</Link></li>
                  <li><Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy</Link></li>
                </ul>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800 mt-8 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="text-gray-400 text-sm mb-4 md:mb-0">
                  © {new Date().getFullYear()} Zion Tech Group. All rights reserved.
                </div>
                <div className="flex space-x-6 text-sm">
                  <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                  <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Layout;