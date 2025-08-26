import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-black/95 backdrop-blur-xl border-b border-zion-cyan/30 shadow-2xl shadow-zion-cyan/10' 
        : 'bg-black/80 backdrop-blur-md border-b border-zion-cyan/20'
    }`}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 left-1/4 w-1 h-1 bg-zion-cyan rounded-full animate-pulse"></div>
          <div className="absolute top-4 right-1/3 w-0.5 h-0.5 bg-zion-purple rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-8 left-1/2 w-0.5 h-0.5 bg-zion-cyan rounded-full animate-pulse delay-2000"></div>
          <div className="absolute top-12 right-1/4 w-1 h-1 bg-zion-purple rounded-full animate-pulse delay-3000"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Enhanced Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-zion-cyan via-zion-blue to-zion-purple rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg shadow-zion-cyan/25">
                <span className="text-white font-bold text-lg lg:text-xl">Z</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan via-zion-blue to-zion-purple rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan via-zion-blue to-zion-purple rounded-xl opacity-20 animate-pulse"></div>
            </motion.div>
            <div className="hidden sm:block">
              <motion.div 
                className="text-xl lg:text-2xl font-bold text-white"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                ZION TECH GROUP
              </motion.div>
              <motion.div 
                className="text-xs text-zion-cyan font-medium bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                INNOVATION • TECHNOLOGY • FUTURE
              </motion.div>
            </div>
          </Link>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link to="/" className="relative text-white hover:text-zion-cyan transition-colors duration-300 group">
                <span className="relative z-10">Home</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-zion-cyan to-zion-purple group-hover:w-full transition-all duration-300"></div>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link to="/about" className="relative text-white hover:text-zion-cyan transition-colors duration-300 group">
                <span className="relative z-10">About</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-zion-cyan to-zion-purple group-hover:w-full transition-all duration-300"></div>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link to="/services" className="relative text-white hover:text-zion-cyan transition-colors duration-300 group">
                <span className="relative z-10">Services</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-zion-cyan to-zion-purple group-hover:w-full transition-all duration-300"></div>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Link to="/contact" className="relative text-white hover:text-zion-cyan transition-colors duration-300 group">
                <span className="relative z-10">Contact</span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-zion-cyan to-zion-purple group-hover:w-full transition-all duration-300"></div>
              </Link>
            </motion.div>
          </nav>

          {/* Enhanced Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link to="/login" className="text-white hover:text-zion-cyan transition-colors duration-300 font-medium hover:scale-105">
                Login
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <Link to="/contact" className="relative px-6 py-2 bg-gradient-to-r from-zion-cyan via-zion-blue to-zion-purple text-white rounded-lg font-medium hover:scale-105 transition-all duration-300 overflow-hidden group">
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-zion-purple via-zion-blue to-zion-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan via-zion-blue to-zion-purple animate-pulse opacity-20"></div>
              </Link>
            </motion.div>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-zion-cyan transition-colors duration-300 relative"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="w-6 h-6 relative">
              <motion.div
                className="absolute top-0 left-0 w-6 h-0.5 bg-current rounded-full"
                animate={mobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute top-2 left-0 w-6 h-0.5 bg-current rounded-full"
                animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute top-4 left-0 w-6 h-0.5 bg-current rounded-full"
                animate={mobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.button>
        </div>

        {/* Enhanced Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              className="lg:hidden py-4 border-t border-zion-cyan/20 bg-black/95 backdrop-blur-xl"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <nav className="flex flex-col space-y-4">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <Link to="/" className="block text-white hover:text-zion-cyan transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-zion-cyan/10">
                    Home
                  </Link>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <Link to="/about" className="block text-white hover:text-zion-cyan transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-zion-cyan/10">
                    About
                  </Link>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  <Link to="/services" className="block text-white hover:text-zion-cyan transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-zion-cyan/10">
                    Services
                  </Link>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                >
                  <Link to="/contact" className="block text-white hover:text-zion-cyan transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-zion-cyan/10">
                    Contact
                  </Link>
                </motion.div>
                
                <div className="pt-4 border-t border-zion-cyan/20">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                  >
                    <Link to="/login" className="block text-white hover:text-zion-cyan transition-colors duration-300 font-medium mb-3 py-2 px-4 rounded-lg hover:bg-zion-cyan/10">
                      Login
                    </Link>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.6 }}
                  >
                    <Link to="/contact" className="block px-6 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium text-center hover:scale-105 transition-transform">
                      Get Started
                    </Link>
                  </motion.div>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
