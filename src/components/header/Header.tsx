import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail, Search } from 'lucide-react';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { name: 'Home', href: '/' },
    { 
      name: 'Services', 
      href: '/services',
      hasDropdown: true,
      dropdownItems: [
        { name: 'AI Services', href: '/ai-services' },
        { name: 'IT Infrastructure', href: '/it-services' },
        { name: 'Micro SAAS', href: '/micro-saas' },
        { name: 'Quantum Computing', href: '/services/quantum-ai-platform' },
        { name: 'Cybersecurity', href: '/services/cybersecurity' }
      ]
    },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      {/* Top Bar */}
      <div className="bg-zion-slate-dark text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-6">
              <a href="tel:+13024640950" className="flex items-center hover:text-cyan-400 transition-colors">
                <Phone className="w-4 h-4 mr-2" />
                +1 302 464 0950
              </a>
              <a href="mailto:kleber@ziontechgroup.com" className="flex items-center hover:text-cyan-400 transition-colors">
                <Mail className="w-4 h-4 mr-2" />
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <span>Leading Technology Solutions</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`${isScrolled ? 'bg-white' : 'bg-white/90 backdrop-blur-md'} border-b border-gray-200`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-lg">Z</span>
                </div>
                <span className={`text-2xl font-bold ${isScrolled ? 'text-gray-900' : 'text-gray-900'}`}>
                  Zion Tech Group
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.hasDropdown ? (
                    <div 
                      className="relative"
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      <button className={`flex items-center space-x-1 px-3 py-2 text-sm font-medium transition-colors ${
                        isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-gray-700 hover:text-blue-600'
                      }`}>
                        <span>{item.name}</span>
                        <ChevronDown className="w-4 h-4" />
                      </button>
                      
                      {isServicesOpen && (
                        <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                          {item.dropdownItems?.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 transition-colors"
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`px-3 py-2 text-sm font-medium transition-colors ${
                        isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-gray-700 hover:text-blue-600'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-blue-600 transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <Link
                to="/contact"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-gray-600 hover:text-blue-600 transition-colors"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div>
                      <button className="flex items-center justify-between w-full text-left py-2 text-gray-700 hover:text-blue-600 transition-colors">
                        <span className="font-medium">{item.name}</span>
                        <ChevronDown className="w-4 h-4" />
                      </button>
                      <div className="ml-4 mt-2 space-y-2">
                        {item.dropdownItems?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.href}
                            className="block py-1 text-sm text-gray-600 hover:text-blue-600 transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className="block py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              <div className="pt-4 border-t border-gray-200">
                <Link
                  to="/contact"
                  className="block w-full bg-blue-600 text-white text-center px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;