import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Search, 
  User, 
  Bell, 
  ChevronDown,
  Globe,
  Settings,
  Sun,
  Moon
} from 'lucide-react';

export function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navigation = [
    { name: 'Home', href: '/', current: location.pathname === '/' },
    { name: 'About', href: '/about', current: location.pathname === '/about' },
    { name: 'Services', href: '/services', current: location.pathname === '/services' },
    { name: 'All Services', href: '/comprehensive-services', current: location.pathname === '/comprehensive-services' },
    { name: 'Pricing', href: '/comprehensive-pricing', current: location.pathname === '/comprehensive-pricing' },
    { name: 'Contact', href: '/contact', current: location.pathname === '/contact' },
  ];

  const servicesDropdown = [
    { name: 'AI Solutions', href: '/comprehensive-services#ai' },
    { name: 'Quantum Technology', href: '/comprehensive-services#quantum' },
    { name: 'Cybersecurity', href: '/comprehensive-services#cybersecurity' },
    { name: 'Cloud Infrastructure', href: '/comprehensive-services#cloud' },
    { name: 'DevOps', href: '/comprehensive-services#devops' },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Implement search functionality
      console.log('Searching for:', searchQuery);
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // Here you would typically update the theme context
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-black/95 backdrop-blur-md border-b border-zion-cyan/20 shadow-lg' 
            : 'bg-black/90 backdrop-blur-md border-b border-zion-cyan/10'
        }`}
        role="banner"
        aria-label="Main navigation"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group" aria-label="Zion Tech Group Home">
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg lg:text-xl">Z</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              </motion.div>
              <div className="hidden sm:block">
                <div className="text-xl lg:text-2xl font-bold text-white">ZION TECH GROUP</div>
                <div className="text-xs text-zion-cyan font-medium">INNOVATION • TECHNOLOGY • FUTURE</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8" role="navigation" aria-label="Main menu">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 text-sm font-medium transition-all duration-200 rounded-md ${
                    item.current
                      ? 'text-zion-cyan bg-zion-cyan/10 border border-zion-cyan/20'
                      : 'text-white hover:text-zion-cyan hover:bg-zion-cyan/10'
                  }`}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Services Dropdown */}
              <div className="relative group">
                <button className="flex items-center px-3 py-2 text-sm font-medium text-white hover:text-zion-cyan hover:bg-zion-cyan/10 transition-all duration-200 rounded-md">
                  Services
                  <ChevronDown className="w-4 h-4 ml-1 group-hover:rotate-180 transition-transform duration-200" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 bg-zion-slate-dark border border-zion-cyan/20 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 backdrop-blur-md">
                  <div className="py-2">
                    {servicesDropdown.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="block px-4 py-2 text-sm text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 transition-colors duration-200"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </nav>

            {/* Search Bar - Hidden on mobile */}
            <div className="hidden md:flex ml-6 flex-1 max-w-md">
              <form onSubmit={handleSearch} className="relative w-full" role="search">
                <input
                  type="text"
                  placeholder="Search services, talent, equipment..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg px-4 py-2 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent transition-all duration-200"
                  aria-label="Search services, talent, and equipment"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-zion-slate-light hover:text-zion-cyan transition-colors p-1 rounded-md hover:bg-zion-cyan/10"
                  aria-label="Search"
                >
                  <Search className="h-4 w-4" />
                </button>
              </form>
            </div>

            {/* Right side actions */}
            <div className="ml-6 flex items-center space-x-4">
              {/* Theme Toggle */}
              <button
                onClick={toggleDarkMode}
                className="p-2 text-white hover:text-zion-cyan transition-colors duration-300 rounded-md hover:bg-zion-cyan/10"
                aria-label="Toggle theme"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>

              {/* Language Selector */}
              <button 
                className="hidden lg:flex p-2 text-zion-slate-light hover:text-zion-cyan transition-colors rounded-md hover:bg-zion-cyan/10"
                aria-label="Language settings"
              >
                <Globe className="h-5 w-5" />
              </button>

              {/* Settings */}
              <button 
                className="hidden lg:flex p-2 text-zion-slate-light hover:text-zion-cyan transition-colors rounded-md hover:bg-zion-cyan/10"
                aria-label="Settings"
              >
                <Settings className="h-5 w-5" />
              </button>

              {/* Notifications */}
              <button 
                className="p-2 text-zion-slate-light hover:text-zion-cyan transition-colors rounded-md hover:bg-zion-cyan/10 relative"
                aria-label="Notifications"
              >
                <Bell className="h-5 w-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-zion-cyan rounded-full animate-pulse"></span>
              </button>

              {/* User menu */}
              <button 
                className="p-2 text-zion-slate-light hover:text-zion-cyan transition-colors rounded-md hover:bg-zion-cyan/10"
                aria-label="User account"
              >
                <User className="h-5 w-5" />
              </button>

              {/* CTA Button */}
              <Link 
                to="/contact" 
                className="hidden lg:block px-6 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium hover:scale-105 transition-transform shadow-lg hover:shadow-zion-cyan/25"
              >
                Get Started
              </Link>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-zion-slate-light hover:text-zion-cyan transition-colors rounded-md hover:bg-zion-cyan/10"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle mobile menu"
              >
                <AnimatePresence mode="wait">
                  {mobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-6 h-6" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-6 h-6" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div 
                className="lg:hidden"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-zion-slate-dark/95 border-t border-zion-cyan/20 backdrop-blur-md">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`block px-3 py-2 text-base font-medium transition-all duration-200 rounded-md ${
                        item.current
                          ? 'text-zion-cyan bg-zion-cyan/10 border border-zion-cyan/20'
                          : 'text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                  
                  {/* Mobile Services Dropdown */}
                  <div className="px-3 py-2">
                    <div className="text-sm font-medium text-zion-cyan mb-2">Services</div>
                    {servicesDropdown.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="block px-4 py-2 text-sm text-zion-slate-light hover:text-zion-cyan transition-colors duration-200"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                  
                  {/* Mobile Search */}
                  <form onSubmit={handleSearch} className="px-3 py-2">
                    <input
                      type="text"
                      placeholder="Search..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg px-3 py-2 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                      aria-label="Search"
                    />
                  </form>
                  
                  {/* Mobile Actions */}
                  <div className="px-3 py-2 space-y-2">
                    <Link
                      to="/login"
                      className="block w-full text-center px-4 py-2 text-zion-cyan border border-zion-cyan rounded-lg font-medium hover:bg-zion-cyan hover:text-white transition-colors duration-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Login
                    </Link>
                    <Link
                      to="/contact"
                      className="block w-full text-center px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg font-medium hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>
      
      {/* Spacer to prevent content from hiding behind fixed header */}
      <div className="h-16 lg:h-20"></div>
    </>
  );
}
