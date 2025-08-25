import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/', current: location.pathname === '/' },
    { 
      name: 'Services', 
      href: '/services', 
      current: location.pathname.startsWith('/services') || location.pathname.startsWith('/ai-'),
      hasDropdown: true
    },
    { name: 'AI Solutions', href: '/ai-solutions', current: location.pathname === '/ai-solutions' },
    { name: 'About', href: '/about', current: location.pathname === '/about' },
    { name: 'Contact', href: '/contact', current: location.pathname === '/contact' },
  ];

  const servicesDropdown = [
    { name: 'AI Services', href: '/ai-services' },
    { name: 'Cloud & DevOps', href: '/cloud-devops' },
    { name: 'Cybersecurity', href: '/services/cybersecurity' },
    { name: 'Digital Transformation', href: '/digital-transformation' },
    { name: 'Enterprise Solutions', href: '/enterprise-solutions' },
    { name: 'IT Infrastructure', href: '/services/it-infrastructure' },
    { name: 'Micro-SaaS Solutions', href: '/services/micro-saas-solutions' },
    { name: 'Quantum Technology', href: '/services/quantum-technology' },
  ];

  const companyDropdown = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Mission', href: '/mission' },
    { name: 'Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Partners', href: '/partners' },
    { name: 'Case Studies', href: '/case-studies' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleServices = () => setIsServicesOpen(!isServicesOpen);
  const toggleCompany = () => setIsCompanyOpen(!isCompanyOpen);

  const closeAllMenus = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
    setIsCompanyOpen(false);
  };

  return (
    <header className="bg-background/80 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" onClick={closeAllMenus}>
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div className="relative">
                    <button
                      onClick={toggleServices}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center space-x-1 ${
                        item.current
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {isServicesOpen && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50">
                        {servicesDropdown.map((service) => (
                          <Link
                            key={service.name}
                            to={service.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                            onClick={closeAllMenus}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      item.current
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                    onClick={closeAllMenus}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            
            {/* Company Dropdown */}
            <div className="relative">
              <button
                onClick={toggleCompany}
                className="px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center space-x-1 text-gray-700 hover:text-blue-600 hover:bg-blue-50"
              >
                <span>Company</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${isCompanyOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isCompanyOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50">
                  {companyDropdown.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                      onClick={closeAllMenus}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Right side - Theme Toggle and CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <ThemeToggle />
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-md font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30"
              onClick={closeAllMenus}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-blue-50"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md border-t border-gray-200">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div className="space-y-1">
                      <button
                        onClick={toggleServices}
                        className="w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors flex items-center justify-between"
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {isServicesOpen && (
                        <div className="pl-4 space-y-1">
                          {servicesDropdown.map((service) => (
                            <Link
                              key={service.name}
                              to={service.href}
                              className="block px-3 py-2 rounded-md text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                              onClick={closeAllMenus}
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                        item.current
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                      }`}
                      onClick={closeAllMenus}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Mobile Company Menu */}
              <div className="pt-2 border-t border-gray-200">
                <div className="px-3 py-2 text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Company
                </div>
                {companyDropdown.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-3 py-2 rounded-md text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    onClick={closeAllMenus}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              
              <div className="pt-4 flex items-center justify-between">
                <ThemeToggle />
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-md font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/30"
                  onClick={closeAllMenus}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;