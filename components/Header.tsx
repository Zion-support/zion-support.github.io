import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PromoBanner from './PromoBanner';
import Sidebar from './Sidebar';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
        { name: 'Blockchain Solutions', href: '/services/blockchain-solutions' },
        { name: 'Quantum Computing', href: '/services/ai-quantum-computing-2026' },
        { name: 'Additional Services', href: '/additional-services' },
        { name: 'Comprehensive Services', href: '/comprehensive-services' },
        { name: 'Cloud Migration', href: '/services/cloud-migration-service' },
        { name: 'Cybersecurity', href: '/services/cybersecurity-solutions' },
        { name: 'Data Analytics', href: '/services/data-analytics-business-intelligence' }
      ]
    },
    { 
      name: 'Solutions', 
      href: '/solutions',
      submenu: [
        { name: 'All Solutions', href: '/solutions' },
        { name: 'Enterprise Solutions', href: '/enterprise' },
        { name: 'Innovative IT Solutions', href: '/innovative-it-solutions' },
        { name: 'Advanced AI Solutions', href: '/advanced-ai-solutions' },
        { name: 'Healthcare Technology', href: '/services/healthcare-technology-solutions' },
        { name: 'FinTech Solutions', href: '/services/financial-technology-solutions' },
        { name: 'E-commerce Solutions', href: '/services/ecommerce-technology-solutions' },
        { name: 'Manufacturing AI', href: '/services/manufacturing-ai-platform' }
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
        { name: 'Enhanced Services Catalog', href: '/enhanced-services-catalog' },
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms of Service', href: '/terms' },
        { name: 'Security', href: '/security' }
      ]
    },
    { 
      name: 'Company', 
      href: '/about',
      submenu: [
        { name: 'About Us', href: '/about' },
        { name: 'Pricing', href: '/pricing' },
        { name: 'Support', href: '/support' },
        { name: 'Partners', href: '/partners' },
        { name: 'Portfolio', href: '/portfolio' }
      ]
    },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Mobile Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <PromoBanner />
        
        <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.href}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors flex items-center gap-1"
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
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-3">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            
            <Link
              to="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu buttons */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Sidebar toggle */}
            <button
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            
            {/* Mobile menu toggle */}
            <button
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-2 pt-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className="text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="ml-4 space-y-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="text-gray-600 hover:text-blue-600 text-sm py-1 transition-colors block"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors text-center mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
    </>
  );
};

export default Header;