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

  const isActiveRoute = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

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
              <div className="w-10 h-10 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center">
                <Rocket className="w-6 h-6 text-white" />
              </div>
            </motion.div>
            <div className="hidden sm:block">
              <h1 className="text-xl lg:text-2xl font-bold text-white group-hover:text-zion-cyan transition-colors">
                Zion Tech Group
              </h1>
              <p className="text-xs lg:text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors">
                Future Technology Solutions
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className="flex items-center gap-2 text-zinc-300 hover:text-white transition-colors duration-300 py-2">
                      {item.name}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    </button>

                    {/* Dropdown Menu */}
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-80 bg-zinc-900/95 backdrop-blur-xl border border-zinc-700/50 rounded-xl shadow-2xl overflow-hidden"
                        >
                          <div className="p-4">
                            <div className="grid grid-cols-1 gap-2">
                              {item.dropdown.map((dropdownItem) => (
                                <Link
                                  key={dropdownItem.name}
                                  to={dropdownItem.path}
                                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-zinc-800/50 transition-all duration-300 group"
                                >
                                  <div className={`p-2 rounded-lg bg-gradient-to-br ${dropdownItem.color} group-hover:scale-110 transition-transform duration-300`}>
                                    <dropdownItem.icon className="w-4 h-4 text-white" />
                                  </div>
                                  <div>
                                    <div className="text-white font-medium group-hover:text-zion-cyan transition-colors">
                                      {dropdownItem.name}
                                    </div>
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
                    className={`text-zinc-300 hover:text-white transition-colors duration-300 py-2 ${
                      isActiveRoute(item.path) ? 'text-zion-cyan' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Theme toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800/50 rounded-lg transition-colors"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Language selector */}
            <button className="p-2 text-zinc-400 hover:text-white hover:bg-zinc-800/50 rounded-lg transition-colors">
              <Globe className="w-5 h-5" />
            </button>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center px-6 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-medium rounded-lg hover:from-zion-purple hover:to-zion-cyan transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-zinc-400 hover:text-white hover:bg-zinc-800/50 rounded-lg transition-colors"
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
            className="lg:hidden bg-zinc-900/95 backdrop-blur-xl border-t border-zinc-700/50"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="space-y-4">
                {navigationItems.map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <div>
                        <button
                          className="flex items-center justify-between w-full text-left text-zinc-300 hover:text-white transition-colors duration-300 p-3 rounded-lg hover:bg-zinc-800/50"
                          onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                        >
                          <span className="font-medium">{item.name}</span>
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
                                className="block p-3 rounded-lg hover:bg-zinc-800/50 text-zinc-300 hover:text-white transition-colors duration-300"
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
                        className={`block p-3 rounded-lg transition-colors duration-300 ${
                          isActiveRoute(item.path)
                            ? 'text-zion-cyan bg-zion-cyan/10'
                            : 'text-zinc-300 hover:text-white hover:bg-zinc-800/50'
                        }`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
