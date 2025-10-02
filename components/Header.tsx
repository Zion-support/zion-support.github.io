import React, { useState } from 'react';
import Link from 'next/link';
import PromoBanner from './PromoBanner';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { 
      name: 'Services', 
      href: '/services',
      submenu: [
        { name: 'All Services', href: '/services' },
        { name: 'AI Services', href: '/ai-services' },
        { name: 'Micro SaaS', href: '/services/micro-saas' },
        { name: 'IT Services', href: '/services/it-services-comprehensive' },
        { name: 'AI Content Tools', href: '/services/ai-powered-content-tools' },
        { name: 'Telemedicine Platform', href: '/services/telemedicine-platform' },
        { name: 'Remote Collaboration', href: '/services/remote-collaboration-suite' },
        { name: 'API Integration', href: '/services/api-integration-platform' },
        { name: 'Customer Insights', href: '/services/ai-customer-insights-platform' },
        { name: 'Blockchain Solutions', href: '/services/blockchain-solutions' },
        { name: 'Quantum Computing', href: '/services/ai-quantum-computing-2026' },
        { name: 'Additional Services', href: '/additional-services' },
        { name: 'Comprehensive Services', href: '/comprehensive-services' }
      ]
    },
    { 
      name: 'Solutions', 
      href: '/solutions',
      submenu: [
        { name: 'All Solutions', href: '/solutions' },
        { name: 'Enterprise Solutions', href: '/enterprise' },
        { name: 'Innovative IT Solutions', href: '/innovative-it-solutions' },
        { name: 'Advanced AI Solutions', href: '/advanced-ai-solutions' }
      ]
    },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { 
      name: 'Resources', 
      href: '/resources',
      submenu: [
        { name: 'All Resources', href: '/resources' },
        { name: 'Guides', href: '/guides' },
        { name: 'Content Hub', href: '/content-hub' },
        { name: 'Enhanced Services Catalog', href: '/enhanced-services-catalog' }
      ]
    },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <PromoBanner />
      
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-blue-50"
                >
                  {item.name}
                  {item.submenu && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>
                
                {/* Dropdown Menu */}
                {item.submenu && (
                  <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-4">
                      <div className="grid grid-cols-1 gap-1">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors rounded-lg mx-2"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200 bg-white">
            <div className="flex flex-col space-y-1 pt-4 max-h-96 overflow-y-auto">
              {navigation.map((item) => (
                <div key={item.name} className="px-4">
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-blue-600 font-medium py-3 transition-colors block px-3 rounded-lg hover:bg-blue-50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="ml-4 space-y-1 border-l-2 border-gray-100 pl-4">
                      {item.submenu.slice(0, 6).map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="text-gray-600 hover:text-blue-600 text-sm py-2 transition-colors block px-3 rounded-lg hover:bg-blue-50"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                      {item.submenu.length > 6 && (
                        <div className="px-3 py-2 text-xs text-gray-500">
                          +{item.submenu.length - 6} more services
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="pt-4 border-t border-gray-200 px-4">
                <Link
                  href="/contact"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors text-center block"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </Link>
                <div className="mt-3 text-center">
                  <a 
                    href="tel:+13024640950" 
                    className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                  >
                    📞 +1 302 464 0950
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;