import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Globe, Zap, Shield, Cpu, Database, Lock, Users } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { name: 'AI Solutions', href: '/services#ai', description: 'Machine Learning & AI Services' },
    { name: 'Cloud & DevOps', href: '/services#cloud', description: 'Cloud Migration & Automation' },
    { name: 'Cybersecurity', href: '/services#cybersecurity', description: 'Security & Threat Protection' },
    { name: 'IT Infrastructure', href: '/services#infrastructure', description: 'Network & System Management' },
    { name: 'Digital Transformation', href: '/services#transformation', description: 'Business Process Optimization' },
    { name: 'Consulting', href: '/services#consulting', description: 'Technology Strategy & Advisory' },
    { name: 'Innovative Services 2025', href: '/innovative-services-2025', description: 'Next-generation technology solutions' },
    { name: 'Advanced Services 2025', href: '/advanced-services-2025', description: 'Cutting-edge advanced services' }
  ];

  const companyLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Leadership', href: '/leadership' },
    { name: 'Careers', href: '/careers' },
    { name: 'Partners', href: '/partners' },
    { name: 'Case Studies', href: '/case-studies' }
  ];

  const resourcesLinks = [
    { name: 'Blog', href: '/blog' },
    { name: 'News', href: '/news' },
    { name: 'Events', href: '/events' },
    { name: 'Webinars', href: '/webinars' },
    { name: 'White Papers', href: '/white-papers' },
    { name: 'Research & Development', href: '/research-development' },
    { name: 'Tutorials', href: '/tutorials' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (isMenuOpen) {
      setIsServicesOpen(false);
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-xl border-b border-white/20 shadow-2xl' 
        : 'bg-slate-900/80 backdrop-blur-lg border-b border-white/10'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Enhanced Logo */}
          <Link to="/" className="flex items-center group" onClick={closeMenu}>
            <motion.div 
              className="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue rounded-xl flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300 shadow-lg"
              whileHover={{ rotate: 5 }}
            >
              <span className="text-white font-bold text-xl lg:text-2xl">Z</span>
            </motion.div>
            <motion.span 
              className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-zion-cyan via-white to-zion-purple bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              Zion Tech Group
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-300 hover:text-zion-cyan transition-all duration-300 font-medium relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-zion-cyan group-hover:w-full transition-all duration-300"></span>
            </Link>
            
            {/* Enhanced Services Dropdown */}
            <div className="relative group">
              <button
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                className="text-gray-300 hover:text-zion-cyan transition-all duration-300 font-medium flex items-center group"
              >
                Services
                <ChevronDown className="ml-1 h-4 w-4 group-hover:rotate-180 transition-transform duration-300" />
              </button>
              
              {/* Services Dropdown Menu */}
              {isServicesOpen && (
                <div
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                  className="absolute top-full left-0 mt-2 w-96 bg-slate-800/95 backdrop-blur-lg rounded-xl border border-white/20 shadow-2xl"
                >
                  <div className="p-4">
                    <div className="grid grid-cols-1 gap-2">
                      {services.map((service) => (
                        <Link
                          to="/services"
                          className="block w-full text-center bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-6 py-3 rounded-xl font-medium hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-300 transform hover:scale-105 shadow-lg"
                          onClick={closeMenu}
                        >
                          View All Services
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Company Dropdown */}
            <div className="relative group">
              <button className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center">
                Company
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-lg rounded-xl border border-white/20 shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto">
                <div className="p-4">
                  <div className="space-y-2">
                    {companyLinks.map((link) => (
                      <Link
                        key={link.name}
                        to={link.href}
                        className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Resources Dropdown */}
            <div className="relative group">
              <button className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center">
                Resources
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-lg rounded-xl border border-white/20 shadow-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto">
                <div className="p-4">
                  <div className="space-y-2">
                    {resourcesLinks.map((link) => (
                      <Link
                        key={link.name}
                        to={link.href}
                        className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <Link
              to="/pricing"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              About
            </Link>
            <Link
              to="/news"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              News
            </Link>
            <Link
              to="/blog"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              Blog
            </Link>
            <Link
              to="/careers"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              Careers
            </Link>
            
            <Link
              to="/contact"
              className="text-gray-300 hover:text-zion-cyan transition-all duration-300 font-medium relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-zion-cyan group-hover:w-full transition-all duration-300"></span>
            </Link>
          </nav>

          {/* Enhanced CTA Button */}
          <div className="hidden lg:block">
            <Link
              to="/request-quote"
              className="bg-gradient-to-r from-zion-purple to-zion-cyan text-white px-6 py-3 rounded-xl font-medium hover:from-zion-purple-dark hover:to-zion-cyan-dark transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-zion-purple/25"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-6 w-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-6 w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-slate-800/95 backdrop-blur-xl border-t border-white/10"
          >
            <div className="px-4 py-6 space-y-4">
              <Link
                to="/"
                className="block text-white hover:text-zion-cyan transition-colors duration-200 font-medium py-2"
                onClick={closeMenu}
              >
                Home
                {isActive('/') && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
                )}
              </Link>
              
              {/* Mobile Services Accordion */}
              <div className="space-y-2">
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center justify-between w-full text-white hover:text-zion-cyan transition-colors duration-200 font-medium py-2"
                >
                  Services
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="pl-4 space-y-2 border-l border-white/20"
                    >
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          to={service.href}
                          className="block text-gray-300 hover:text-zion-cyan transition-colors duration-200 py-2"
                          onClick={closeMenu}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Company Section */}
              <div className="px-3 py-2">
                <div className="text-sm font-medium text-gray-400 mb-2">Company</div>
                <div className="space-y-1 ml-4">
                  {companyLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Resources Section */}
              <div className="px-3 py-2">
                <div className="text-sm font-medium text-gray-400 mb-2">Resources</div>
                <div className="space-y-1 ml-4">
                  {resourcesLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      className="block px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              <Link
                to="/pricing"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/news"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                News
              </Link>
              <Link
                to="/blog"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                to="/careers"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Careers
              </Link>
              
              <Link
                to="/contact"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              
              <Link
                to="/blog"
                className="block text-white hover:text-zion-cyan transition-colors duration-200 font-medium py-2"
                onClick={closeMenu}
              >
                Blog
                {isActive('/blog') && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
                )}
              </Link>
              
              <Link
                to="/contact"
                className="block text-white hover:text-zion-cyan transition-colors duration-200 font-medium py-2"
                onClick={closeMenu}
              >
                Contact
                {isActive('/contact') && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
                )}
              </Link>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
                aria-label="Get started with our services"
              >
                Get Started
              </Link>
              
              <div className="pt-4 border-t border-white/10">
                <Link
                  to="/request-quote"
                  className="block w-full text-center bg-gradient-to-r from-zion-purple to-zion-cyan text-white px-6 py-3 rounded-xl font-medium hover:from-zion-purple-dark hover:to-zion-cyan-dark transition-all duration-300"
                  onClick={closeMenu}
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

export default Header;
