<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Menu,
  X,
  ChevronDown,
  Brain,
  Zap,
  Lock,
  Rocket,
  Sun,
  Moon,
  Cloud,
  Users,
  Database,
  Shield
} from 'lucide-react';

export function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // In a real app, this would toggle the theme
  };

  const navigationItems = [
    { name: 'Home', path: '/', icon: null },
    {
      name: 'Services',
      path: '/services',
      icon: null,
      dropdown: [
        {
          name: 'AI & Machine Learning',
          path: '/services/ai',
          icon: Brain,
          color: 'from-purple-500 to-pink-500'
        },
        {
          name: 'Cloud & DevOps',
          path: '/services/cloud',
          icon: Cloud,
          color: 'from-blue-500 to-cyan-500'
        },
        {
          name: 'Cybersecurity',
          path: '/services/cybersecurity',
          icon: Lock,
          color: 'from-red-500 to-pink-500'
        },
        {
          name: 'All Services',
          path: '/services',
          icon: Database,
          color: 'from-green-500 to-emerald-500'
        },
        {
          name: 'AI Quantum Trading',
          path: '/services/AIQuantumFinancialTrading',
          icon: Zap,
          color: 'from-yellow-500 to-orange-500'
        }
      ]
    },
    { name: 'About', path: '/about', icon: null },
    {
      name: 'Resources',
      path: '#',
      icon: null,
      dropdown: [
        {
          name: 'Blog & Insights',
          path: '/blog',
          icon: Users,
          color: 'from-blue-500 to-purple-500'
        },
        {
          name: 'FAQ',
          path: '/faq',
          icon: Users,
          color: 'from-green-500 to-blue-500'
        },
        {
          name: 'Documentation',
          path: '/docs',
          icon: Database,
          color: 'from-purple-500 to-indigo-500'
        }
      ]
    },
    { name: 'Contact', path: '/contact', icon: null }
  ];

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-200'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              <Zap className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
            </div>
            <div className="hidden sm:block">
              <span className="text-xl lg:text-2xl font-bold text-gray-900">Zion Tech</span>
              <span className="block text-xs text-gray-600">Innovation Group</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item, index) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div className="relative">
                    <button
                      className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                      onMouseEnter={() => toggleDropdown(index)}
                      onMouseLeave={() => toggleDropdown(index)}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    
                    {activeDropdown === index && (
                      <motion.div
                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-200 py-2"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        onMouseEnter={() => toggleDropdown(index)}
                        onMouseLeave={() => toggleDropdown(index)}
                      >
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.path}
                            className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                          >
                            {dropdownItem.icon && (
                              <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${dropdownItem.color} flex items-center justify-center`}>
                                <dropdownItem.icon className="w-4 h-4 text-white" />
                              </div>
                            )}
                            <span>{dropdownItem.name}</span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Dark mode toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Get Started
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <motion.div
          className="lg:hidden bg-white border-t border-gray-200"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-4 py-6 space-y-4">
            {navigationItems.map((item, index) => (
              <div key={item.name}>
                {item.dropdown ? (
                  <div>
                    <button
                      className="flex items-center justify-between w-full text-left text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium py-2"
                      onClick={() => toggleDropdown(index)}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === index ? 'rotate-180' : ''
                      }`} />
                    </button>
                    
                    {activeDropdown === index && (
                      <motion.div
                        className="ml-4 mt-2 space-y-2"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.path}
                            className="flex items-center space-x-3 py-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
                          >
                            {dropdownItem.icon && (
                              <div className={`w-6 h-6 rounded-lg bg-gradient-to-r ${dropdownItem.color} flex items-center justify-center`}>
                                <dropdownItem.icon className="w-3 h-3 text-white" />
                              </div>
                            )}
                            <span>{dropdownItem.name}</span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className="block text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium py-2"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            
            {/* Mobile CTA */}
            <div className="pt-4 border-t border-gray-200">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
              >
                Get Started
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
=======
>>>>>>> origin/main
