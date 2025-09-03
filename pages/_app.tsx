import type { AppProps } from 'next/app';
import Link from 'next/link';
import SearchBar from '../components/SearchBar';
import ErrorBoundary from '../components/ErrorBoundary';
import ThemeToggle from '../components/ThemeToggle';
import Breadcrumb from '../components/Breadcrumb';
import { useState } from 'react';

function Header(): any {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Zion Tech Group
          </Link>
          
          {/* Search Bar - Desktop */}
          <div className="hidden md:block flex-1 max-w-md mx-8">
            <SearchBar />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link href="/" className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-white/10 transition-colors">
              Home
            </Link>
            <Link href="/services" className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-white/10 transition-colors">
              All Services
            </Link>
            <Link href="/micro-saas" className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-white/10 transition-colors">
              Micro SaaS
            </Link>
            <Link href="/ai-services" className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-white/10 transition-colors">
              AI Services
            </Link>
            <Link href="/it-services" className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-white/10 transition-colors">
              IT Services
            </Link>
            <Link href="/services-catalog" className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-white/10 transition-colors">
              Catalog
            </Link>
            <Link href="/pricing" className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-white/10 transition-colors">
              Pricing
            </Link>
            <Link href="/about" className="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-white/10 transition-colors">
              About
            </Link>
            <Link href="/contact" className="ml-4 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all">
              Contact
            </Link>
            <div className="ml-2">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-expanded="false"
            aria-label="Open main menu"
          >
            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-900/50 rounded-lg mt-2">
              {/* Search Bar - Mobile */}
              <div className="px-3 py-2">
                <SearchBar />
              </div>
              <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/10 transition-colors">
                Home
              </Link>
              <Link href="/services" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/10 transition-colors">
                All Services
              </Link>
              <Link href="/micro-saas" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/10 transition-colors">
                Micro SaaS
              </Link>
              <Link href="/ai-services" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/10 transition-colors">
                AI Services
              </Link>
              <Link href="/it-services" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/10 transition-colors">
                IT Services
              </Link>
              <Link href="/services-catalog" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/10 transition-colors">
                Catalog
              </Link>
              <Link href="/pricing" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/10 transition-colors">
                Pricing
              </Link>
              <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-white/10 transition-colors">
                About
              </Link>
              <Link href="/contact" className="block px-3 py-2 rounded-md text-base font-medium bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-all">
                Contact
              </Link>
              <div className="px-3 py-2">
                <ThemeToggle />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

function Footer(): any {
  return (
    <footer className="mt-16 bg-gradient-to-br from-slate-900 to-slate-800 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Zion Tech Group
            </div>
            <p className="text-slate-300 leading-relaxed">
              Leading provider of innovative micro SaaS products, AI services, and IT solutions. 
              Empowering businesses with cutting-edge technology.
            </p>
            <div className="space-y-2 text-sm text-slate-400">
              <div className="flex items-center space-x-2">
                <span>📞</span>
                <a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <span>✉️</span>
                <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <span>📍</span>
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Services</h3>
            <div className="space-y-2">
              <Link href="/services" className="block text-slate-300 hover:text-white transition-colors">
                All Services
              </Link>
              <Link href="/micro-saas" className="block text-slate-300 hover:text-white transition-colors">
                Micro SaaS Products
              </Link>
              <Link href="/ai-services" className="block text-slate-300 hover:text-white transition-colors">
                AI Services
              </Link>
              <Link href="/it-services" className="block text-slate-300 hover:text-white transition-colors">
                IT Services
              </Link>
              <Link href="/services-catalog" className="block text-slate-300 hover:text-white transition-colors">
                Services Catalog
              </Link>
              <Link href="/pricing" className="block text-slate-300 hover:text-white transition-colors">
                Pricing
              </Link>
              <div className="pt-2 text-sm text-slate-400">
                <div>• 120+ Micro SaaS Products</div>
                <div>• 80+ AI Services</div>
                <div>• 80+ IT Solutions</div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-slate-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/about" className="block text-slate-300 hover:text-white transition-colors">
                About Us
              </Link>
              <Link href="/contact" className="block text-slate-300 hover:text-white transition-colors">
                Contact Us
              </Link>
              <Link href="/faq" className="block text-slate-300 hover:text-white transition-colors">
                FAQ
              </Link>
              <Link href="/privacy" className="block text-slate-300 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="block text-slate-300 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <a href="https://ziontechgroup.com" className="block text-slate-300 hover:text-white transition-colors">
                Main Website
              </a>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Get Started</h3>
            <p className="text-slate-300 text-sm">
              Ready to transform your business with our innovative solutions?
            </p>
            <div className="space-y-3">
              <Link href="/contact" className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all">
                Request Quote
              </Link>
              <a href="tel:+13024640950" className="block w-full bg-white/10 text-white text-center py-3 px-4 rounded-lg font-semibold hover:bg-white/20 transition-colors">
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} Zion Tech Group. All rights reserved. | 
            <Link href="/privacy" className="text-blue-400 hover:text-blue-300 ml-2 transition-colors">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <Header />
      <Breadcrumb />
      <Component {...pageProps} />
      <Footer />
    </ErrorBoundary>
  );
}
