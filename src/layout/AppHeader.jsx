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
<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/build-vite-project-with-missing-dependency-fbe9
      ]
    },
    { name: 'About', path: '/about', icon: null },
    { name: 'Contact', path: '/contact', icon: null },
  ];
<<<<<<< HEAD
=======

  const isActive = (path) => location.pathname === path;

  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

>>>>>>> origin/cursor/build-vite-project-with-missing-dependency-fbe9
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">Z</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navigationItems.map((item, index) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() => handleDropdownToggle(index)}
                      className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors duration-200"
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === index ? 'rotate-180' : ''
                      }`} />
                    </button>
                    
                    <AnimatePresence>
                      {activeDropdown === index && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-4 z-50"
                        >
                          <div className="grid grid-cols-2 gap-4 px-4">
                            {item.dropdown.map((subItem) => (
                              <Link
                                key={subItem.name}
                                to={subItem.path}
                                className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                                onClick={() => setActiveDropdown(null)}
                              >
                                <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${subItem.color} flex items-center justify-center flex-shrink-0`}>
                                  <subItem.icon className="w-4 h-4 text-white" />
                                </div>
                                <div>
                                  <div className="font-medium text-gray-900 text-sm">{subItem.name}</div>
                                  {subItem.description && (
                                    <div className="text-xs text-gray-500 mt-1">{subItem.description}</div>
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
                    className={`text-gray-700 hover:text-blue-600 transition-colors duration-200 ${
                      isActive(item.path) ? 'text-blue-600 font-medium' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="text-gray-700 hover:text-blue-600 transition-colors duration-200">
              <Search className="w-5 h-5" />
            </button>
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <div className="font-medium text-gray-900 mb-2">{item.name}</div>
                      <div className="pl-4 space-y-2">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className="block text-gray-600 hover:text-blue-600 transition-colors duration-200"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className={`block font-medium transition-colors duration-200 ${
                        isActive(item.path) ? 'text-blue-600' : 'text-gray-900 hover:text-blue-600'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              <div className="pt-4 border-t border-gray-200">
                <Link
                  to="/contact"
                  className="block w-full bg-blue-600 text-white text-center px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}