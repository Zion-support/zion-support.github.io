'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronDown, Search, User, Settings, Bell, 
  Brain, Cloud, Shield, Code, Zap, Home, Info, Mail, Phone
} from 'lucide-react';

const EnhancedNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const navRef = useRef<HTMLElement>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const navigationItems = [
    {
      label: 'Home',
      href: '/',
      icon: Home
    },
    {
      label: 'AI Services',
      href: '/ai-services',
      icon: Brain,
      dropdown: [
        { label: 'AI Analytics', href: '/ai-analytics' },
        { label: 'AI Automation', href: '/ai-automation' },
        { label: 'AI Chatbot Builder', href: '/ai-chatbot-builder' },
        { label: 'AI Cybersecurity', href: '/ai-cybersecurity' },
        { label: 'AI CRM', href: '/ai-crm' },
        { label: 'View All AI Services', href: '/ai-services' }
      ]
    },
    {
      label: 'IT Services',
      href: '/it-services',
      icon: Cloud,
      dropdown: [
        { label: 'Cloud Infrastructure', href: '/cloud-infrastructure' },
        { label: 'Cybersecurity Solutions', href: '/cybersecurity-solutions' },
        { label: 'Web Development', href: '/web-development' },
        { label: 'Mobile Development', href: '/mobile-development' },
        { label: 'View All IT Services', href: '/it-services' }
      ]
    },
    {
      label: 'Micro SAAS',
      href: '/micro-saas',
      icon: Code,
      dropdown: [
        { label: 'Zion Analytics Pro', href: '/zion-analytics-pro' },
        { label: 'Zion Security Shield', href: '/zion-security-shield' },
        { label: 'Zion Content Studio', href: '/zion-content-studio' },
        { label: 'Zion CRM Intelligence', href: '/zion-crm-intelligence' },
        { label: 'View All Products', href: '/micro-saas' }
      ]
    },
    {
      label: 'About',
      href: '/about',
      icon: Info
    },
    {
      label: 'Contact',
      href: '/contact',
      icon: Mail
    }
  ];

  const handleDropdownToggle = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Implement search functionality
      console.log('Searching for:', searchQuery);
    }
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-900/95 backdrop-blur-lg shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 text-white font-bold text-xl"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span>Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.label} className="relative">
                {item.dropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => handleDropdownToggle(item.label)}
                      className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      <item.icon className="w-4 h-4" />
                      <span>{item.label}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.label ? 'rotate-180' : ''
                      }`} />
                    </button>

                    <AnimatePresence>
                      {activeDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-slate-800 rounded-lg shadow-xl border border-slate-700 overflow-hidden"
                        >
                          {item.dropdown.map((dropdownItem, index) => (
                            <Link
                              key={index}
                              to={dropdownItem.href}
                              className="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:bg-slate-700 hover:text-white transition-colors duration-200"
                            >
                              <div className="w-2 h-2 bg-purple-500 rounded-full" />
                              <span>{dropdownItem.label}</span>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Search and Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 px-4 py-2 pl-10 bg-slate-800 text-white rounded-lg border border-slate-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            </form>

            <button className="p-2 text-gray-300 hover:text-white transition-colors duration-200">
              <Bell className="w-5 h-5" />
            </button>

            <Link
              to="/contact"
              className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-slate-800 rounded-lg mt-2 overflow-hidden"
            >
              <div className="px-4 py-2">
                <form onSubmit={handleSearch} className="relative mb-4">
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-2 pl-10 bg-slate-700 text-white rounded-lg border border-slate-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                </form>

                <div className="space-y-2">
                  {navigationItems.map((item) => (
                    <div key={item.label}>
                      {item.dropdown ? (
                        <div>
                          <button
                            onClick={() => handleDropdownToggle(item.label)}
                            className="flex items-center justify-between w-full px-4 py-3 text-left text-gray-300 hover:bg-slate-700 hover:text-white rounded-lg transition-colors duration-200"
                          >
                            <div className="flex items-center space-x-2">
                              <item.icon className="w-4 h-4" />
                              <span>{item.label}</span>
                            </div>
                            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                              activeDropdown === item.label ? 'rotate-180' : ''
                            }`} />
                          </button>
                          
                          <AnimatePresence>
                            {activeDropdown === item.label && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                                className="ml-4 space-y-1"
                              >
                                {item.dropdown.map((dropdownItem, index) => (
                                  <Link
                                    key={index}
                                    to={dropdownItem.href}
                                    className="flex items-center space-x-2 px-4 py-2 text-gray-400 hover:text-white rounded-lg transition-colors duration-200"
                                  >
                                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                                    <span>{dropdownItem.label}</span>
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          to={item.href}
                          className="flex items-center space-x-2 px-4 py-3 text-gray-300 hover:bg-slate-700 hover:text-white rounded-lg transition-colors duration-200"
                        >
                          <item.icon className="w-4 h-4" />
                          <span>{item.label}</span>
                        </Link>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-slate-700">
                  <Link
                    to="/contact"
                    className="block w-full px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg text-center hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default EnhancedNavigation;