import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, MapPin, ChevronDown, Home, Users, Settings } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeAllMenus = () => {
    setIsOpen(false);
    setServicesOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-lg border-b border-cyan-400/20' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <span className="text-white font-bold text-xl">Zion Tech Group</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/services" 
              className="font-medium transition-colors hover:text-cyan-400 text-white"
            >
              Services
            </Link>
            <Link 
              to="/about" 
              className="font-medium transition-colors hover:text-cyan-400 text-white"
            >
              About
            </Link>
<<<<<<< HEAD
            <Link 
              to="/contact" 
              className="font-medium transition-colors hover:text-cyan-400 text-white"
            >
=======
            <Link to="/services" className="text-white hover:text-cyan-400 transition-colors font-medium">
              Services
            </Link>
            <Link to="/contact" className="text-white hover:text-cyan-400 transition-colors font-medium">
>>>>>>> main
              Contact
            </Link>
            <Link 
              to="/contact" 
              className="bg-cyan-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-cyan-700 transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
<<<<<<< HEAD
          <button
            onClick={toggleMenu}
            className="lg:hidden text-white hover:text-cyan-400 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
=======
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-cyan-400 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
>>>>>>> main
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-cyan-400/20">
<<<<<<< HEAD
            <div className="px-4 py-6 space-y-4">
              <Link 
                to="/services" 
                className="block font-medium transition-colors hover:text-cyan-400 text-white"
                onClick={toggleMenu}
              >
                Services
              </Link>
              <Link 
                to="/about" 
                className="block font-medium transition-colors hover:text-cyan-400 text-white"
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="block font-medium transition-colors hover:text-cyan-400 text-white"
                onClick={toggleMenu}
              >
                Contact
              </Link>
              <Link 
                to="/contact" 
                className="block bg-cyan-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-cyan-700 transition-colors text-center"
                onClick={toggleMenu}
              >
                Get Started
              </Link>
=======
            <div className="px-4 py-6 space-y-6">
              {/* Main Navigation */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white mb-3 neon-text">Navigation</h3>
                <Link
                  to="/"
                  className="block text-white hover:text-cyan-400 transition-colors py-2"
                  onClick={closeAllMenus}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="block text-white hover:text-cyan-400 transition-colors py-2"
                  onClick={closeAllMenus}
                >
                  About
                </Link>
                <Link
                  to="/services"
                  className="block text-white hover:text-cyan-400 transition-colors py-2"
                  onClick={closeAllMenus}
                >
                  Services
                </Link>
                <Link
                  to="/contact"
                  className="block text-white hover:text-cyan-400 transition-colors py-2"
                  onClick={closeAllMenus}
                >
                  Contact
                </Link>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white mb-3 neon-text">Contact</h3>
                <a
                  href="tel:+13024640950"
                  className="flex items-center space-x-3 text-white hover:text-cyan-400 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>(302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="flex items-center space-x-3 text-white hover:text-cyan-400 transition-colors"
                >
                  <span>kleber@ziontechgroup.com</span>
                </a>
                <a
                  href="https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-white hover:text-cyan-400 transition-colors"
                >
                  <MapPin className="w-5 h-5" />
                  <span>364 E Main St STE 1008<br />Middletown, DE 19709</span>
                </a>
              </div>
>>>>>>> main
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;