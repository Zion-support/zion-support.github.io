import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
  const closeDropdowns = () => {
    setActiveDropdown(null);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Handle search logic here
      console.log('Searching for:', searchQuery);
=======
  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  }, [location.pathname]);

=======
import { Menu, X, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  const services = [
    { name: 'AI Systems', href: '/services#ai' },
    { name: 'Cloud Platforms', href: '/services#cloud' },
    { name: 'Cybersecurity', href: '/services#security' },
    { name: 'Micro SaaS', href: '/services#saas' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const services = [
    { name: 'AI Solutions', path: '/services/ai', description: 'Machine learning and AI solutions' },
    { name: 'Cloud & DevOps', path: '/services/cloud', description: 'Cloud infrastructure and automation' },
    { name: 'Cybersecurity', path: '/services/cybersecurity', description: 'Security and threat protection' },
    { name: 'IT Infrastructure', path: '/services/infrastructure', description: 'Infrastructure management' },
    { name: 'Digital Transformation', path: '/services/transformation', description: 'Business transformation' },
    { name: 'Consulting', path: '/services/consulting', description: 'Technology consulting' }
  ];

  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1
    }
  };

  const menuVariants = {
    hidden: { opacity: 0, x: -300 },
    visible: { 
      opacity: 1, 
      x: 0
    },
    exit: { 
      opacity: 0, 
      x: -300
    }
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -20, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1
    },
    exit: { 
      opacity: 0, 
      y: -20, 
      scale: 0.95
    }
  };

  return (
    <motion.header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-900/95 backdrop-blur-lg border-b border-white/10 shadow-lg' 
          : 'bg-slate-900/80 backdrop-blur-md'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center group" onClick={closeMenu}>
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                Zion Tech Group
              </span>
=======
    <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">Z</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
            </Link>

          {/* Desktop Navigation */}
          <nav 
            className="hidden lg:flex items-center space-x-8"
            role="navigation"
            aria-label="Main navigation"
          >
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
                aria-current={isActive('/') ? 'page' : undefined}
              >
                Home
                {isActive('/') && (
                  <motion.span 
                    className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-blue-400 to-cyan-400"
                    layoutId="activeIndicator"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            ))}
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 flex items-center space-x-1"
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {isServicesOpen && (
                <div
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                  className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50"
                >
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:shadow-lg hover:shadow-blue-500/25"
                aria-label="Get started with our services"
              >
                Get Started
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      )}

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="lg:hidden bg-slate-800/95 backdrop-blur-lg border-t border-white/10"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive('/') ? 'text-blue-400 bg-blue-900/20' : 'text-gray-300 hover:text-white hover:bg-gray-700'
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive('/about') ? 'text-blue-400 bg-blue-900/20' : 'text-gray-300 hover:text-white hover:bg-gray-700'
                }`}
              >
                About
              </Link>
              <Link
                to="/services"
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive('/services') ? 'text-blue-400 bg-blue-900/20' : 'text-gray-300 hover:text-white hover:bg-gray-700'
                }`}
              >
                Services
              </Link>
              <Link
                to="/blog"
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive('/blog') ? 'text-blue-400 bg-blue-900/20' : 'text-gray-300 hover:text-white hover:bg-gray-700'
                }`}
              >
                Blog
              </Link>
              <Link
                to="/careers"
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive('/careers') ? 'text-blue-400 bg-blue-900/20' : 'text-gray-300 hover:text-white hover:bg-gray-700'
                }`}
              >
                Careers
              </Link>
              <Link
                to="/contact"
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive('/contact') ? 'text-blue-400 bg-blue-900/20' : 'text-gray-300 hover:text-white hover:bg-gray-700'
                }`}
              >
                Contact
              </Link>
              
              {/* Mobile CTA */}
              <div className="pt-4 border-t border-white/20">
                <Link
                  to="/contact"
                  className="block w-full text-center bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
=======
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    isActive(item.href)
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Services */}
              <div className="px-3 py-2">
                <div className="text-sm font-medium text-gray-500 mb-2">Services</div>
                {services.map((service) => (
                  <Link
                    key={service.name}
                    to={service.href}
                    className="block px-3 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
              
              <div className="px-3 py-2">
                <Link
                  to="/contact"
                  className="block w-full text-center bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
