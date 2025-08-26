import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { name: 'AI Solutions', href: '/services/ai', description: 'Machine Learning & AI Services', icon: '🤖' },
    { name: 'Cloud & DevOps', href: '/services/cloud', description: 'Cloud Migration & Automation', icon: '☁️' },
    { name: 'Cybersecurity', href: '/services/cybersecurity', description: 'Security & Threat Protection', icon: '🔒' },
    { name: 'IT Infrastructure', href: '/services/infrastructure', description: 'Network & System Management', icon: '🏗️' },
    { name: 'Digital Transformation', href: '/services/transformation', description: 'Business Process Optimization', icon: '🚀' },
    { name: 'Consulting', href: '/services/consulting', description: 'Technology Strategy & Advisory', icon: '💡' }
  ];

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services', hasDropdown: true },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-slate-900/95 backdrop-blur-xl border-b border-white/20 shadow-2xl' 
        : 'bg-slate-900/80 backdrop-blur-lg border-b border-white/10'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Enhanced Logo */}
          <Link to="/" className="flex items-center group">
            <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
              <span className="text-white font-bold text-xl">Z</span>
            </div>
            <span className="text-2xl font-bold text-white group-hover:text-zion-cyan transition-colors duration-300">
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              item.hasDropdown ? (
                <div key={item.name} className="relative group">
                  <button
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    {item.name}
                    <svg className="ml-1 h-4 w-4 group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  
                  {/* Enhanced Services Dropdown Menu */}
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        onMouseEnter={() => setIsServicesOpen(true)}
                        onMouseLeave={() => setIsServicesOpen(false)}
                        className="absolute top-full left-0 mt-3 w-96 bg-slate-800/95 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl overflow-hidden"
                      >
                        <div className="p-6">
                          <div className="grid grid-cols-1 gap-3">
                            {services.map((service) => (
                              <Link
                                key={service.name}
                                to={service.href}
                                className="flex items-start p-4 rounded-xl hover:bg-white/10 transition-all duration-200 group border border-transparent hover:border-zion-cyan/30"
                              >
                                <div className="text-2xl mr-4 group-hover:scale-110 transition-transform duration-200">
                                  {service.icon}
                                </div>
                                <div className="flex-1">
                                  <div className="text-white font-semibold group-hover:text-zion-cyan transition-colors duration-200">
                                    {service.name}
                                  </div>
                                  <div className="text-sm text-gray-400 mt-1 group-hover:text-zion-cyan/80 transition-colors duration-200">
                                    {service.description}
                                  </div>
                                </div>
                                <svg className="h-5 w-5 text-gray-500 group-hover:text-zion-cyan transition-colors duration-200 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              </Link>
                            ))}
                          </div>
                          <div className="mt-6 pt-6 border-t border-white/10">
                            <Link
                              to="/services"
                              className="block w-full text-center bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-6 py-3 rounded-xl font-semibold hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-zion-cyan/25"
                            >
                              View All Services
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-300 hover:text-white transition-colors duration-300 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-zion-cyan to-zion-purple transition-all duration-300 group-hover:w-full"></span>
                </Link>
              )
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              to="/request-quote"
              className="bg-gradient-to-r from-zion-purple to-zion-cyan text-white px-6 py-3 rounded-xl font-semibold hover:from-zion-purple-dark hover:to-zion-cyan-dark transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-zion-purple/25 border border-zion-purple/30"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-200"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-white/10"
            >
              <div className="py-4 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="px-4 pt-4">
                  <Link
                    to="/request-quote"
                    onClick={() => setIsMenuOpen(false)}
                    className="block w-full text-center bg-gradient-to-r from-zion-purple to-zion-cyan text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
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
  );
};

export default Header;
