import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      {/* Top bar with contact info */}
      <div className="bg-zion-blue text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <span>📍 Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-zion-blue to-zion-purple rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">Z</span>
            </div>
            <div>
              <div className="text-xl font-bold text-zion-blue">Zion Tech Group</div>
              <div className="text-xs text-gray-500">Technology Solutions</div>
            </div>
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
