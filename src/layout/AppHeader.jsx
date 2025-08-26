import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Globe, Sun, Moon, Zap, Shield, Cloud, Brain, Database, Lock } from 'lucide-react';

export function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setDropdownOpen(null);
  }, [location.pathname]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // In a real app, this would toggle the theme
  };

  const navigationItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { 
      path: '/services', 
      label: 'Services',
      hasDropdown: true,
      dropdownItems: [
        { path: '/services#ai-ml', label: 'AI & Machine Learning', icon: <Brain className="w-4 h-4" /> },
        { path: '/services#blockchain', label: 'Blockchain & Web3', icon: <Database className="w-4 h-4" /> },
        { path: '/services#iot-edge', label: 'IoT & Edge Computing', icon: <Cloud className="w-4 h-4" /> },
        { path: '/services#quantum', label: 'Quantum Computing', icon: <Zap className="w-4 h-4" /> },
        { path: '/services#ar-vr', label: 'AR/VR & Metaverse', icon: <Globe className="w-4 h-4" /> },
        { path: '/services#cybersecurity', label: 'Cybersecurity', icon: <Shield className="w-4 h-4" /> },
        { path: '/services#cloud', label: 'Cloud & Infrastructure', icon: <Cloud className="w-4 h-4" /> },
        { path: '/services#business-intelligence', label: 'Business Intelligence', icon: <Database className="w-4 h-4" /> },
        { path: '/services#communication', label: 'Communication Tools', icon: <Globe className="w-4 h-4" /> },
        { path: '/services#specialized', label: 'Specialized AI Tools', icon: <Brain className="w-4 h-4" /> },
        { path: '/services#emerging', label: 'Emerging Technologies', icon: <Zap className="w-4 h-4" /> }
      ]
    },
    { path: '/solutions', label: 'Solutions' },
    { path: '/case-studies', label: 'Case Studies' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' }
  ];

  const isActiveRoute = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/95 backdrop-blur-md border-b border-zion-cyan/20 shadow-2xl shadow-zion-cyan/10' 
          : 'bg-black/90 backdrop-blur-md'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 left-0 w-32 h-32 bg-zion-cyan/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-0 right-0 w-24 h-24 bg-zion-purple/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-0 left-1/4 w-20 h-20 bg-zion-cyan/5 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-zion-cyan/25">
                <span className="text-white font-bold text-lg lg:text-xl">Z</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              {/* Neon glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300 animate-pulse"></div>
            </motion.div>
            <div className="hidden sm:block">
              <motion.div 
                className="text-xl lg:text-2xl font-bold text-white"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                ZION TECH GROUP
              </motion.div>
              <motion.div 
                className="text-xs text-zion-cyan font-medium"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                INNOVATION • TECHNOLOGY • FUTURE
              </motion.div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item, index) => (
              <div key={item.path} className="relative">
                {item.hasDropdown ? (
                  <div
                    onMouseEnter={() => setDropdownOpen(item.path)}
                    onMouseLeave={() => setDropdownOpen(null)}
                    className="relative"
                  >
                    <button className="flex items-center gap-1 text-white hover:text-zion-cyan transition-colors duration-300 py-2 group">
                      {item.label}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        dropdownOpen === item.path ? 'rotate-180' : ''
                      }`} />
                      {/* Hover underline effect */}
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-zion-cyan group-hover:w-full transition-all duration-300"></div>
                    </button>
                    
                    <AnimatePresence>
                      {dropdownOpen === item.path && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-zion-blue-dark/95 backdrop-blur-md border border-zion-cyan/20 rounded-xl shadow-2xl shadow-zion-cyan/10 overflow-hidden"
                        >
                          {/* Dropdown header */}
                          <div className="px-4 py-3 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 border-b border-zion-cyan/20">
                            <h3 className="text-zion-cyan font-semibold text-sm">Our Services</h3>
                            <p className="text-zion-slate-light text-xs">Cutting-edge technology solutions</p>
                          </div>
                          
                          {/* Dropdown items */}
                          <div className="py-2">
                            {item.dropdownItems.map((dropdownItem, itemIndex) => (
                              <motion.div
                                key={dropdownItem.path}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.2, delay: itemIndex * 0.05 }}
                              >
                                <Link
                                  to={dropdownItem.path}
                                  className="flex items-center gap-3 px-4 py-3 text-white hover:text-zion-cyan hover:bg-zion-cyan/10 transition-all duration-200 group"
                                >
                                  <div className="text-zion-cyan group-hover:scale-110 transition-transform duration-200">
                                    {dropdownItem.icon}
                                  </div>
                                  <span className="text-sm">{dropdownItem.label}</span>
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                          
                          {/* Dropdown footer */}
                          <div className="px-4 py-3 bg-gradient-to-r from-zion-purple/20 to-zion-blue/20 border-t border-zion-purple/20">
                            <Link to="/services" className="text-zion-purple text-sm font-medium hover:text-zion-purple-light transition-colors">
                              View All Services →
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link 
                    to={item.path} 
                    className={`relative py-2 transition-colors duration-300 group ${
                      isActiveRoute(item.path) 
                        ? 'text-zion-cyan' 
                        : 'text-white hover:text-zion-cyan'
                    }`}
                  >
                    {item.label}
                    {/* Hover underline effect */}
                    <div className={`absolute bottom-0 left-0 h-0.5 bg-zion-cyan transition-all duration-300 ${
                      isActiveRoute(item.path) ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></div>
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Theme Toggle */}
            <motion.button
              onClick={toggleDarkMode}
              className="p-2 text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 rounded-lg hover:bg-zion-cyan/10 relative group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                {isDarkMode ? 'Switch to Light' : 'Switch to Dark'}
              </div>
            </motion.button>
            
            {/* Language Selector */}
            <motion.button
              className="flex items-center gap-2 p-2 text-zion-slate-light hover:text-zion-cyan transition-colors duration-300 rounded-lg hover:bg-zion-cyan/10 relative group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm">EN</span>
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                Language
              </div>
            </motion.button>
            
            <Link 
              to="/login" 
              className="text-white hover:text-zion-cyan transition-colors duration-300 font-medium relative group"
            >
              Login
              {/* Hover underline effect */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-zion-cyan group-hover:w-full transition-all duration-300"></div>
            </Link>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/contact" 
                className="px-6 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 relative overflow-hidden group"
              >
                <span className="relative z-10">Get Started</span>
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-zion-purple to-zion-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-zion-cyan transition-colors duration-300 relative group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            {/* Hover effect */}
            <div className="absolute inset-0 bg-zion-cyan/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-6 border-t border-zion-cyan/20 bg-black/95 backdrop-blur-md">
                <nav className="space-y-4">
                  {navigationItems.map((item) => (
                    <div key={item.path}>
                      {item.hasDropdown ? (
                        <div>
                          <button
                            onClick={() => setDropdownOpen(dropdownOpen === item.path ? null : item.path)}
                            className="flex items-center justify-between w-full text-white hover:text-zion-cyan transition-colors duration-300 py-2"
                          >
                            {item.label}
                            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                              dropdownOpen === item.path ? 'rotate-180' : ''
                            }`} />
                          </button>
                          
                          <AnimatePresence>
                            {dropdownOpen === item.path && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.2 }}
                                className="ml-4 mt-2 space-y-2 bg-zion-blue-dark/50 rounded-lg p-3"
                              >
                                {item.dropdownItems.map((dropdownItem) => (
                                  <Link
                                    key={dropdownItem.path}
                                    to={dropdownItem.path}
                                    className="flex items-center gap-2 text-zion-slate-light hover:text-zion-cyan transition-colors duration-200 py-1"
                                  >
                                    {dropdownItem.icon}
                                    <span className="text-sm">{dropdownItem.label}</span>
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          to={item.path}
                          className={`block text-white hover:text-zion-cyan transition-colors duration-300 py-2 ${
                            isActiveRoute(item.path) ? 'text-zion-cyan' : ''
                          }`}
                        >
                          {item.label}
                        </Link>
                      )}
                    </div>
                  ))}
                  
                  <div className="pt-4 border-t border-zion-cyan/20 space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-zion-slate-light">Theme:</span>
                      <button
                        onClick={toggleDarkMode}
                        className="p-2 text-zion-slate-light hover:text-zion-cyan transition-colors duration-300"
                      >
                        {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                      </button>
                    </div>
                    
                    <Link 
                      to="/login" 
                      className="block text-white hover:text-zion-cyan transition-colors duration-300 font-medium py-2"
                    >
                      Login
                    </Link>
                    <Link 
                      to="/contact" 
                      className="block px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium text-center hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
                    >
                      Get Started
                    </Link>
                  </div>
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
