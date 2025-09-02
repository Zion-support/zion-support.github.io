import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Globe, Brain, Cloud, Shield, Zap, Users } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

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
      dropdown: [
        { name: 'AI Services', href: '/ai-services', icon: Brain, description: 'Cutting-edge AI solutions' },
        { name: 'IT Services', href: '/it-services', icon: Cloud, description: 'Comprehensive IT solutions' },
        { name: 'Micro SaaS', href: '/micro-saas', icon: Zap, description: 'Scalable SaaS applications' },
        { name: 'All Services', href: '/services', icon: Users, description: 'Complete service portfolio' }
      ]
    },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
    setActiveDropdown(null);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-md border-b border-blue-400/20' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
              Zion Tech Group
            </span>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center space-x-1 text-gray-300 hover:text-blue-300 transition-colors duration-200 py-2"
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    </button>
                    {activeDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-md border border-blue-400/20 rounded-xl shadow-2xl shadow-blue-400/10 overflow-hidden">
                        <div className="p-4">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              onClick={() => setActiveDropdown(null)}
                              className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-200 group"
                            >
                              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-lg flex items-center justify-center group-hover:from-blue-400/30 group-hover:to-blue-500/30 transition-all duration-200">
                                <dropdownItem.icon className="w-5 h-5 text-blue-400" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-white group-hover:text-blue-300 transition-colors">
                                  {dropdownItem.name}
                                </p>
                                <p className="text-xs text-gray-400 mt-1">
                                  {dropdownItem.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-blue-300 transition-colors duration-200 py-2"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="px-6 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
            >
              Get Started
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-blue-300 hover:bg-gray-800/50 transition-colors duration-200"
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-gray-900/95 backdrop-blur-md border-t border-blue-400/20">
          <div className="px-4 py-6 space-y-4">
            <div className="space-y-2">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="flex items-center justify-between w-full text-left px-3 py-2 text-gray-300 hover:text-blue-300 hover:bg-gray-800/50 rounded-lg transition-colors duration-200"
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                      </button>
                      {activeDropdown === item.name && (
                        <div className="ml-4 mt-2 space-y-1">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              onClick={closeMobileMenu}
                              className="flex items-center space-x-3 px-3 py-2 text-sm text-gray-400 hover:text-blue-300 hover:bg-gray-800/50 rounded-lg transition-colors duration-200"
                            >
                              <dropdownItem.icon className="w-4 h-4 text-blue-400" />
                              <span>{dropdownItem.name}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={closeMobileMenu}
                      className="block px-3 py-2 rounded-lg transition-colors duration-200 text-gray-300 hover:text-blue-300 hover:bg-gray-800/50"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-gray-700">
              <Link
                href="/contact"
                onClick={closeMobileMenu}
                className="block w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium text-center rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}