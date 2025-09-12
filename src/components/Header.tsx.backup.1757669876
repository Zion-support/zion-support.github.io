<<<<<<< HEAD
import React from 'react';

interface HeaderProps {
  onMenuClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-gray-900">
                Zion Tech Group
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Home
            </a>
            <a href="/services" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Services
            </a>
            <a href="/ai-solutions" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              AI Solutions
            </a>
            <a href="/case-studies" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Case Studies
            </a>
            <a href="/resources" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Resources
            </a>
            <a href="/about" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              About
            </a>
            <a href="/contact" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Contact
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={onMenuClick}
              className="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900"
              aria-label="Open menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
=======
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles, ChevronDown } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navigationItems = [
    { name: 'Home', path: '/', icon: null },
    { name: 'About', path: '/about', icon: null },
    { name: 'Services', path: '/services', icon: ChevronDown, hasDropdown: true },
    { name: 'Contact', path: '/contact', icon: null },
  ];

  const serviceCategories = [
    { name: 'AI Services', path: '/services?category=AI Services' },
    { name: 'IT Services', path: '/services?category=IT Services' },
    { name: 'Micro SAAS', path: '/services?category=Micro SAAS' },
    { name: 'Development', path: '/services?category=Development' },
    { name: 'Analytics', path: '/services?category=Analytics' },
    { name: 'Security', path: '/services?category=Security' },
    { name: 'Automation', path: '/services?category=Automation' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-zion-blue-dark/95 backdrop-blur-md border-b border-zion-cyan/20 shadow-lg shadow-zion-cyan/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              Zion Tech Group
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div
                    className="flex items-center gap-1 cursor-pointer text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 py-2"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <span className={isActive(item.path) ? 'text-zion-cyan' : ''}>
                      {item.name}
                    </span>
                    {item.icon && <item.icon className="h-4 w-4" />}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`py-2 transition-colors duration-300 ${
                      isActive(item.path)
                        ? 'text-zion-cyan border-b-2 border-zion-cyan'
                        : 'text-zion-slate-light hover:text-zion-cyan'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
                
                {/* Services Dropdown */}
                {item.hasDropdown && isServicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-zion-blue-dark/95 backdrop-blur-md border border-zion-cyan/20 rounded-lg shadow-xl shadow-zion-cyan/10 py-2">
                    {serviceCategories.map((category) => (
                      <Link
                        key={category.name}
                        to={category.path}
                        className="block px-4 py-2 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 transition-colors duration-300"
                        onClick={() => setIsServicesOpen(false)}
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-zion-slate-light hover:text-zion-cyan transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-zion-cyan/20">
            <nav className="flex flex-col space-y-2 pt-4">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        className="w-full text-left py-2 text-zion-slate-light hover:text-zion-cyan transition-colors duration-300"
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                      >
                        <div className="flex items-center justify-between">
                          <span>{item.name}</span>
                          <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                        </div>
                      </button>
                      {isServicesOpen && (
                        <div className="ml-4 mt-2 space-y-1">
                          {serviceCategories.map((category) => (
                            <Link
                              key={category.name}
                              to={category.path}
                              className="block py-1 text-zion-slate-light hover:text-zion-cyan transition-colors duration-300"
                              onClick={() => {
                                setIsServicesOpen(false);
                                setIsMenuOpen(false);
                              }}
                            >
                              {category.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className={`block py-2 transition-colors duration-300 ${
                        isActive(item.path)
                          ? 'text-zion-cyan'
                          : 'text-zion-slate-light hover:text-zion-cyan'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
>>>>>>> origin/9llxiv-codex/implement-analytics-and-error-tracking
