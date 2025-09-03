import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, Bell, User, Phone, Mail } from 'lucide-react';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  const toggleSearch = () => setShowSearch(!showSearch);

  const navigationItems = [
    { name: 'Home', href: '/', current: false },
    { name: 'Services', href: '/services', current: false, submenu: [
      { name: 'AI Services', href: '/ai-services' },
      { name: 'IT Services', href: '/it-services' },
      { name: 'Micro SaaS', href: '/micro-saas' },
      { name: 'Cloud Solutions', href: '/services/cloud' },
      { name: 'Cybersecurity', href: '/services/cybersecurity' }
    ]},
    { name: 'Solutions', href: '/solutions', current: false, submenu: [
      { name: 'Enterprise Solutions', href: '/solutions/enterprise' },
      { name: 'SMB Solutions', href: '/solutions/smb' },
      { name: 'Startup Solutions', href: '/solutions/startup' },
      { name: 'Industry Solutions', href: '/solutions/industry' }
    ]},
    { name: 'About', href: '/about', current: false },
    { name: 'Contact', href: '/contact', current: false },
    { name: 'Pricing', href: '/pricing', current: false }
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-slate-800 border-b border-slate-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-12 items-center justify-between text-sm">
            <div className="flex items-center space-x-6">
              <div className="text-slate-300 flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="text-slate-300 hidden sm:flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                  +1 (302) 464-0950
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/support" className="text-slate-300 hover:text-cyan-400 transition-colors">
                Support
              </Link>
              <Link to="/careers" className="text-slate-300 hover:text-cyan-400 transition-colors">
                Careers
              </Link>
              <Link to="/pricing" className="text-slate-300 hover:text-cyan-400 transition-colors">
                Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-slate-900 border-b border-slate-700 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">Z</span>
                </div>
                <span className="text-white font-bold text-xl">Zion Tech Group</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    to={item.href}
                    className="text-slate-300 hover:text-white transition-colors duration-200 flex items-center space-x-1"
                  >
                    <span>{item.name}</span>
                    {item.submenu && (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </Link>
                  
                  {/* Dropdown Menu */}
                  {item.submenu && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-slate-800 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="py-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="block px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors duration-200"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <button
                onClick={toggleSearch}
                className="p-2 text-slate-300 hover:text-white transition-colors duration-200"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Notifications */}
              <button className="p-2 text-slate-300 hover:text-white transition-colors duration-200 relative">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>

              {/* User Menu */}
              <button className="p-2 text-slate-300 hover:text-white transition-colors duration-200">
                <User className="w-5 h-5" />
              </button>

              {/* CTA Button */}
              <Link
                to="/contact"
                className="hidden sm:inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200"
              >
                Get Started
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className="md:hidden p-2 text-slate-300 hover:text-white transition-colors duration-200"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-800 border-t border-slate-700">
            <div className="px-4 py-2 space-y-1">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    onClick={closeMobileMenu}
                    className="block px-3 py-2 text-slate-300 hover:text-white hover:bg-slate-700 rounded-md transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="ml-4 space-y-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          onClick={closeMobileMenu}
                          className="block px-3 py-2 text-slate-400 hover:text-white hover:bg-slate-700 rounded-md transition-colors duration-200"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-slate-700">
                <Link
                  to="/contact"
                  onClick={closeMobileMenu}
                  className="block w-full text-center px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Search Overlay */}
        {showSearch && (
          <div className="absolute top-full left-0 right-0 bg-slate-800 border-b border-slate-700 p-4">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search services, solutions, or topics..."
                  className="w-full px-4 py-3 pl-10 bg-slate-700 text-white rounded-lg border border-slate-600 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <button
                  onClick={toggleSearch}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}