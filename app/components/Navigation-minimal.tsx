'use client';

import React, { useState, useEffect, memo } from 'react';
import { Link } from 'react-router-dom';
import { Brain, Menu, X } from 'lucide-react';

const Navigation: React.FC = memo(() => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeAllMenus = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-cyan-500/20' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        </div><div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2 group" onClick={closeAllMenus}>
            </div><div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white neon-text">Zion Tech Group</span>
          </Link>

          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Home
            </Link>
            <Link href="/services" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Services
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              About
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Contact
            </Link>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden">
            </div><div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/95 backdrop-blur-md rounded-lg mt-2">
              <Link href="/" className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300" onClick={closeAllMenus}>
                Home
              </Link>
              <Link href="/services" className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300" onClick={closeAllMenus}>
                Services
              </Link>
              <Link href="/about" className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300" onClick={closeAllMenus}>
                About
              </Link>
              <Link href="/contact" className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300" onClick={closeAllMenus}>
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
});

Navigation.displayName = 'Navigation';
export default Navigation;