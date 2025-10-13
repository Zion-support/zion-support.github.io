'use client';

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronDown,
  Phone, 
  Mail, 
  MapPin
} from 'lucide-react';

interface NavigationProps {
  onSidebarToggle: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onSidebarToggle }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">Z</span>
            </div>
            <span className="text-xl font-bold text-white">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
              About
            </Link>
            <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
              Services
            </Link>
            <Link to="/ai-services" className="text-gray-300 hover:text-white transition-colors">
              AI Solutions
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>
            <Link to="/blog" className="text-gray-300 hover:text-white transition-colors">
              Blog
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/about"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-800 rounded-md transition-colors"
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link
                to="/services"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-800 rounded-md transition-colors"
                onClick={toggleMenu}
              >
                Services
              </Link>
              <Link
                to="/ai-services"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-800 rounded-md transition-colors"
                onClick={toggleMenu}
              >
                AI Solutions
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-800 rounded-md transition-colors"
                onClick={toggleMenu}
              >
                Contact;
              </Link>
              <Link
                to="/blog"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-800 rounded-md transition-colors"
                onClick={toggleMenu}
              >
                Blog;
              </Link>
              <div className="pt-4">
                <button className="w-full bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
