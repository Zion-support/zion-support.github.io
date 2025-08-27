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
  Sun,
  Moon
} from 'lucide-react';

export function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();
<<<<<<< HEAD

=======
  
>>>>>>> f586d65b60879d2bb8f7439b01dc83f1e4614bf1
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
<<<<<<< HEAD

=======
  
>>>>>>> f586d65b60879d2bb8f7439b01dc83f1e4614bf1
  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

<<<<<<< HEAD
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // In a real app, this would toggle the theme
  };

=======
>>>>>>> f586d65b60879d2bb8f7439b01dc83f1e4614bf1
  const navigationItems = [
    { name: 'Home', path: '/', icon: null },
    { 
      name: 'Services', 
      path: '/services', 
      icon: null,
      dropdown: [
        { name: 'AI & Machine Learning', path: '/services?category=ai-ml', icon: Brain, color: 'from-purple-500 to-pink-500' },
        { name: 'Quantum Computing', path: '/services?category=quantum', icon: Zap, color: 'from-blue-500 to-cyan-500' },
        { name: 'Blockchain & Web3', path: '/services?category=blockchain', icon: Lock, color: 'from-green-500 to-emerald-500' },
        { name: 'IoT & Edge Computing', path: '/services?category=iot', icon: Cloud, color: 'from-orange-500 to-red-500' },
        { name: 'AR/VR Development', path: '/services?category=ar-vr', icon: Users, color: 'from-indigo-500 to-purple-500' },
        { name: 'FinTech Solutions', path: '/services?category=fintech', icon: Database, color: 'from-yellow-500 to-orange-500' },
        { name: 'Green Technology', path: '/services?category=green-tech', icon: Shield, color: 'from-green-400 to-teal-500' },
        { name: 'Cybersecurity', path: '/services?category=cybersecurity', icon: Lock, color: 'from-red-500 to-pink-500' },
      ]
    },
    { name: 'About', path: '/about', icon: null },
    { name: 'Contact', path: '/contact', icon: null },
  ];

<<<<<<< HEAD
  const isActiveRoute = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

=======
  const isActive = (path) => location.pathname === path;
>>>>>>> f586d65b60879d2bb8f7439b01dc83f1e4614bf1
  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/95 backdrop-blur-xl border-b border-zion-cyan/30 shadow-2xl shadow-zion-cyan/10' 
          : 'bg-black/80 backdrop-blur-md border-b border-zion-cyan/20'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
            </motion.div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-white">Zion Tech Group</h1>
              <p className="text-xs text-zion-cyan">Future-Ready Solutions</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <div className="relative">
                    <button
                      className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-300 ${
                        isActiveRoute(item.path)
                          ? 'text-zion-cyan bg-zion-cyan/10'
                          : 'text-white hover:text-zion-cyan hover:bg-zion-cyan/10'
                      }`}
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                    </button>
                    
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-xl border border-zion-cyan/20 rounded-xl shadow-2xl shadow-zion-cyan/10 overflow-hidden"
                          onMouseEnter={() => setActiveDropdown(item.name)}
                          onMouseLeave={() => setActiveDropdown(null)}
                        >
                          <div className="p-4">
                            <div className="grid grid-cols-1 gap-2">
                              {item.dropdown.map((dropdownItem) => (
                                <Link
                                  key={dropdownItem.name}
                                  to={dropdownItem.path}
                                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-zion-cyan/10 transition-all duration-300 group/item"
                                >
                                  <div className={`w-10 h-10 bg-gradient-to-br ${dropdownItem.color} rounded-lg flex items-center justify-center`}>
                                    <dropdownItem.icon className="w-5 h-5 text-white" />
                                  </div>
                                  <div>
                                    <p className="text-white font-medium group-hover/item:text-zion-cyan transition-colors duration-300">
                                      {dropdownItem.name}
                                    </p>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`px-3 py-2 rounded-lg transition-all duration-300 ${
                      isActiveRoute(item.path)
                        ? 'text-zion-cyan bg-zion-cyan/10'
                        : 'text-white hover:text-zion-cyan hover:bg-zion-cyan/10'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>
<<<<<<< HEAD

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Theme toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg text-white hover:bg-zion-cyan/10 transition-all duration-300"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Language selector */}
            <button className="p-2 rounded-lg text-white hover:bg-zion-cyan/10 transition-all duration-300">
              <Globe className="w-5 h-5" />
            </button>

            {/* CTA Button */}
=======
          {/* Actions */}
          <div className="hidden lg:flex items-center space-x-4">
>>>>>>> f586d65b60879d2bb8f7439b01dc83f1e4614bf1
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>
<<<<<<< HEAD

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-white hover:bg-zion-cyan/10 transition-all duration-300"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
=======
          </div>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-zion-cyan transition-colors duration-300"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
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
              <div className="py-6 border-t border-zion-cyan/20">
                <nav className="space-y-4">
                  {navigationItems.map((item) => (
                    <div key={item.path}>
                      {item.dropdown ? (
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
                                className="ml-4 mt-2 space-y-2"
                              >
                                {item.dropdownItems.map((dropdownItem) => (
                                  <Link
                                    key={dropdownItem.path}
                                    to={dropdownItem.path}
                                    className="block text-zion-slate-light hover:text-zion-cyan transition-colors duration-200 py-1"
                                  >
                                    {dropdownItem.label}
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
>>>>>>> f586d65b60879d2bb8f7439b01dc83f1e4614bf1
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-zion-cyan/20"
          >
            <div className="container mx-auto px-4 py-6">
              <nav className="space-y-4">
                {navigationItems.map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <div>
                        <button
                          onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                          className="flex items-center justify-between w-full px-4 py-3 text-left text-white hover:bg-zion-cyan/10 rounded-lg transition-all duration-300"
                        >
                          <span>{item.name}</span>
                          <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                            activeDropdown === item.name ? 'rotate-180' : ''
                          }`} />
                        </button>
                        
                        {activeDropdown === item.name && (
                          <div className="ml-4 mt-2 space-y-2">
                            {item.dropdown.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                to={dropdownItem.path}
                                className="block px-4 py-2 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-all duration-300"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {dropdownItem.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        to={item.path}
                        className="block px-4 py-3 text-white hover:bg-zion-cyan/10 rounded-lg transition-all duration-300"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                
                {/* Mobile CTA */}
                <div className="pt-4 border-t border-zion-cyan/20">
                  <Link
                    to="/contact"
                    className="block w-full text-center px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Get Started
                  </Link>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
