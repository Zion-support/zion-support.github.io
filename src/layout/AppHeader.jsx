import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Globe, 
  Zap, 
  Shield, 
  Cloud, 
  Brain, 
  Database, 
  Users, 
  Code, 
  Lock, 
  Rocket,
  Search,
  Phone,
  Mail
} from 'lucide-react';

export function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
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
    setSearchOpen(false);
  }, [location.pathname]);

  const navigationItems = [
    { name: 'Home', path: '/', icon: null },
    { 
      name: 'Services', 
      path: '/services', 
      icon: null,
      dropdown: [
        { name: 'AI & Machine Learning', path: '/services?category=ai-ml', icon: Brain, color: 'from-purple-500 to-pink-500', description: 'Intelligent automation and insights' },
        { name: 'Quantum Computing', path: '/services?category=quantum', icon: Zap, color: 'from-blue-500 to-cyan-500', description: 'Next-generation problem solving' },
        { name: 'Blockchain & Web3', path: '/services?category=blockchain', icon: Lock, color: 'from-green-500 to-emerald-500', description: 'Decentralized solutions' },
        { name: 'IoT & Edge Computing', path: '/services?category=iot', icon: Cloud, color: 'from-orange-500 to-red-500', description: 'Connected infrastructure' },
        { name: 'AR/VR Development', path: '/services?category=ar-vr', icon: Users, color: 'from-indigo-500 to-purple-500', description: 'Immersive experiences' },
        { name: 'FinTech Solutions', path: '/services?category=fintech', icon: Database, color: 'from-yellow-500 to-orange-500', description: 'Financial technology' },
        { name: 'Green Technology', path: '/services?category=green-tech', icon: Shield, color: 'from-green-400 to-teal-500', description: 'Sustainable solutions' },
        { name: 'Cybersecurity', path: '/services?category=cybersecurity', icon: Lock, color: 'from-red-500 to-pink-500', description: 'Advanced protection' },
      ]
    },
    { 
      name: 'Solutions', 
      path: '/business-solutions', 
      icon: null,
      dropdown: [
        { name: 'Healthcare Solutions', path: '/solutions/healthcare', icon: Shield, color: 'from-green-400 to-teal-500' },
        { name: 'Financial Services', path: '/solutions/financial', icon: Database, color: 'from-yellow-500 to-orange-500' },
        { name: 'Manufacturing', path: '/solutions/manufacturing', icon: Code, color: 'from-blue-500 to-indigo-500' },
        { name: 'Retail & E-commerce', path: '/solutions/retail', icon: Users, color: 'from-purple-500 to-pink-500' },
        { name: 'Government', path: '/solutions/government', icon: Lock, color: 'from-gray-500 to-slate-500' },
        { name: 'Education', path: '/solutions/education', icon: Brain, color: 'from-cyan-500 to-blue-500' },
      ]
    },
    { name: 'About', path: '/about', icon: null },
    { name: 'Contact', path: '/contact', icon: null },
  ];

  const isActive = (path) => location.pathname === path;

  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Rocket className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Zion Tech</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item, index) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => handleDropdownToggle(index)}
                      className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        isActive(item.path) || activeDropdown === index
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${
                        activeDropdown === index ? 'rotate-180' : ''
                      }`} />
                    </button>

                    <AnimatePresence>
                      {activeDropdown === index && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-2"
                        >
                          <div className="grid grid-cols-2 gap-1">
                            {item.dropdown.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                to={dropdownItem.path}
                                className="flex items-start space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors group"
                              >
                                <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${dropdownItem.color} flex items-center justify-center flex-shrink-0`}>
                                  <dropdownItem.icon className="w-4 h-4 text-white" />
                                </div>
                                <div className="min-w-0">
                                  <p className="text-sm font-medium text-gray-900 group-hover:text-blue-600">
                                    {dropdownItem.name}
                                  </p>
                                  {dropdownItem.description && (
                                    <p className="text-xs text-gray-500 mt-1">
                                      {dropdownItem.description}
                                    </p>
                                  )}
                                </div>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive(item.path)
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 py-4 space-y-2">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <div className="text-sm font-medium text-gray-900 px-3 py-2">
                        {item.name}
                      </div>
                      <div className="ml-4 space-y-1">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.path}
                            className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                          >
                            <dropdownItem.icon className="w-4 h-4" />
                            <span>{dropdownItem.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                        isActive(item.path)
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <Link
                  to="/contact"
                  className="block w-full bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium text-center hover:bg-blue-700 transition-colors"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Search overlay */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50"
            onClick={() => setSearchOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="max-w-2xl mx-auto mt-20 bg-white rounded-lg shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search services, solutions..."
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    autoFocus
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}