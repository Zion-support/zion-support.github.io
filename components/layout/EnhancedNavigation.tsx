import React, { useState } from 'react';
import Link from 'next/link';

const EnhancedNavigation: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center cursor-pointer">
              <div className="text-2xl font-bold text-blue-600">Zion Tech Group</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/">
              <span className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Home</span>
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <span className="text-gray-700 hover:text-blue-600 transition-colors font-medium cursor-pointer">
                Services
              </span>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-2">
                  <Link href="/services#ai-services">
                    <span className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      AI & Machine Learning
                    </span>
                  </Link>
                  <Link href="/services#cloud-services">
                    <span className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      Cloud & Infrastructure
                    </span>
                  </Link>
                  <Link href="/services#web-development">
                    <span className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      Web Development
                    </span>
                  </Link>
                  <Link href="/services#mobile-development">
                    <span className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      Mobile Development
                    </span>
                  </Link>
                  <Link href="/services#data-services">
                    <span className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      Data & Analytics
                    </span>
                  </Link>
                  <Link href="/services#security-services">
                    <span className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      Cybersecurity
                    </span>
                  </Link>
                  <Link href="/services#saas-solutions">
                    <span className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      SaaS Solutions
                    </span>
                  </Link>
                  <Link href="/services#blockchain-services">
                    <span className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      Blockchain & Web3
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/about">
              <span className="text-gray-700 hover:text-blue-600 transition-colors font-medium">About</span>
            </Link>
            
            <Link href="/blog">
              <span className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Blog</span>
            </Link>
            
            <Link href="/contact">
              <span className="text-gray-700 hover:text-blue-600 transition-colors font-medium">Contact</span>
            </Link>

            {/* CTA Button */}
            <Link href="/contact">
              <span className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors cursor-pointer">
                Get Quote
              </span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="space-y-4">
              <Link href="/">
                <span className="block text-gray-700 hover:text-blue-600 transition-colors font-medium">Home</span>
              </Link>
              
              {/* Mobile Services */}
              <div>
                <span className="block text-gray-700 font-medium mb-2">Services</span>
                <div className="ml-4 space-y-2">
                  <Link href="/services#ai-services">
                    <span className="block text-gray-600 hover:text-blue-600 transition-colors">AI & Machine Learning</span>
                  </Link>
                  <Link href="/services#cloud-services">
                    <span className="block text-gray-600 hover:text-blue-600 transition-colors">Cloud & Infrastructure</span>
                  </Link>
                  <Link href="/services#web-development">
                    <span className="block text-gray-600 hover:text-blue-600 transition-colors">Web Development</span>
                  </Link>
                  <Link href="/services#mobile-development">
                    <span className="block text-gray-600 hover:text-blue-600 transition-colors">Mobile Development</span>
                  </Link>
                  <Link href="/services#data-services">
                    <span className="block text-gray-600 hover:text-blue-600 transition-colors">Data & Analytics</span>
                  </Link>
                  <Link href="/services#security-services">
                    <span className="block text-gray-600 hover:text-blue-600 transition-colors">Cybersecurity</span>
                  </Link>
                  <Link href="/services#saas-solutions">
                    <span className="block text-gray-600 hover:text-blue-600 transition-colors">SaaS Solutions</span>
                  </Link>
                  <Link href="/services#blockchain-services">
                    <span className="block text-gray-600 hover:text-blue-600 transition-colors">Blockchain & Web3</span>
                  </Link>
                </div>
              </div>

              <Link href="/about">
                <span className="block text-gray-700 hover:text-blue-600 transition-colors font-medium">About</span>
              </Link>
              
              <Link href="/blog">
                <span className="block text-gray-700 hover:text-blue-600 transition-colors font-medium">Blog</span>
              </Link>
              
              <Link href="/contact">
                <span className="block text-gray-700 hover:text-blue-600 transition-colors font-medium">Contact</span>
              </Link>

              {/* Mobile CTA */}
              <Link href="/contact">
                <span className="block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold text-center transition-colors">
                  Get Quote
                </span>
              </Link>

              {/* Contact Info */}
              <div className="pt-4 border-t border-gray-200">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <span className="text-gray-600">📞</span>
                    <a href="tel:+13024640950" className="ml-2 text-blue-600 hover:text-blue-800">
                      +1 302 464 0950
                    </a>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gray-600">✉️</span>
                    <a href="mailto:kleber@ziontechgroup.com" className="ml-2 text-blue-600 hover:text-blue-800">
                      kleber@ziontechgroup.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default EnhancedNavigation;
