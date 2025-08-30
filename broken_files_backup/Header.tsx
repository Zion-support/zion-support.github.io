import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const navigation = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
        setActiveDropdown(null);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => router.pathname === path;

  const renderDropdown = (items: NavigationItem[], isOpen: boolean, onToggle: () => void) => (
    <div className="relative">
      <button
        onClick={onToggle}
        className={`flex items-center space-x-1 px-4 py-2 rounded-lg transition-colors ${
          isOpen
            ? 'bg-white/10 text-white'
            : 'text-gray-300 hover:text-white hover:bg-white/10'
        }`}
      >
        <span>Services</span>
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-lg border border-white/10 rounded-lg shadow-xl z-50">
          <div className="p-4">
            <div className="grid grid-cols-1 gap-2">
              {items.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className="flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                  onClick={() => {
                    setIsServicesDropdownOpen(false);
                    setIsCompanyDropdownOpen(false);
                    setIsResourcesDropdownOpen(false);
                  }}
                >
                  {item.icon && <item.icon className="h-5 w-5" />}
                  <div>
                    <div className="font-medium">{item.name}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <header className="bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">Z</span>
              </div>
              <span className="text-white font-bold text-xl">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-gray-300 hover:text-white transition-colors duration-200 ${
                  isActive(item.path) ? 'text-blue-400 font-semibold' : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/pricing"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Pricing
            </Link>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gray-900 border-t border-gray-800"
          >
            <nav className="px-4 py-6 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-3 py-2 rounded-md transition-all duration-200 ${
                    isActive(item.path)
                      ? 'text-blue-400 bg-blue-600/20 font-semibold'
                      : 'text-gray-300 hover:text-white hover:bg-gray-700'
                  }`}
                  onClick={closeMenu}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile CTA */}
              <div className="pt-4 border-t border-gray-700 space-y-2">
                <Link
                  to="/pricing"
                  className="block w-full text-center px-6 py-2 text-gray-300 hover:text-white transition-colors duration-300"
                  onClick={closeMenu}
                >
                  Pricing
                </Link>
                <Link
                  to="/contact"
                  className="block w-full text-center bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                  onClick={closeMenu}
                >
                  Get Started
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
