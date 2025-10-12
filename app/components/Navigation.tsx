'use client';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Zap, Cloud, Globe, Code, Smartphone, Brain, Wifi } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center">
              <Zap className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-white hover:text-cyan-400 transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-cyan-400 transition-colors font-medium"
            >
              About
            </Link>
            <Link
              to="/ai-services"
              className="text-white hover:text-cyan-400 transition-colors font-medium"
            >
              AI Services
            </Link>
            <Link
              to="/it-services"
              className="text-white hover:text-cyan-400 transition-colors font-medium"
            >
              IT Services
            </Link>
            <Link
              to="/micro-saas-services"
              className="text-white hover:text-cyan-400 transition-colors font-medium"
            >
              Micro SAAS
            </Link>
            <Link
              to="/contact"
              className="futuristic-btn bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 neon-glow-purple"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-cyan-400 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900/95 backdrop-blur-md rounded-lg mt-2">
              <Link
                to="/"
                className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/ai-services"
                className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                AI Services
              </Link>
              <Link
                to="/it-services"
                className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                IT Services
              </Link>
              <Link
                to="/micro-saas-services"
                className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Micro SAAS
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-white hover:text-cyan-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
