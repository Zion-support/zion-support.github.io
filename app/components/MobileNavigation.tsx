import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Star } from 'lucide-react';

const MobileNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={toggleMenu}
        className="md:hidden p-2 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-white/10 transition-colors duration-300"
        aria-label="Toggle mobile menu"
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeMenu}
          />
          
          {/* Menu panel */}
          <div className="absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-slate-900/95 backdrop-blur-sm border-l border-white/20 shadow-2xl">
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Zion Tech Group
                </span>
                <button
                  onClick={closeMenu}
                  className="p-2 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-white/10 transition-colors duration-300"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation links */}
              <nav className="space-y-4 mb-8">
                <Link
                  to="/about"
                  onClick={closeMenu}
                  className="flex items-center justify-between p-3 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-white/10 transition-all duration-300 group"
                >
                  <span className="font-medium">About Us</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <Link
                  to="/services"
                  onClick={closeMenu}
                  className="flex items-center justify-between p-3 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-white/10 transition-all duration-300 group"
                >
                  <span className="font-medium">Our Services</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <Link
                  to="/contact"
                  onClick={closeMenu}
                  className="flex items-center justify-between p-3 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-white/10 transition-all duration-300 group"
                >
                  <span className="font-medium">Contact</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </nav>

              {/* Quick services */}
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                  Popular Services
                </h3>
                <div className="space-y-2">
                  <Link
                    to="/ai-business-intelligence"
                    onClick={closeMenu}
                    className="block p-2 rounded-lg text-sm text-gray-300 hover:text-cyan-400 hover:bg-white/5 transition-colors duration-300"
                  >
                    AI Business Intelligence
                  </Link>
                  <Link
                    to="/ai-customer-support"
                    onClick={closeMenu}
                    className="block p-2 rounded-lg text-sm text-gray-300 hover:text-cyan-400 hover:bg-white/5 transition-colors duration-300"
                  >
                    AI Customer Support
                  </Link>
                  <Link
                    to="/ai-cybersecurity"
                    onClick={closeMenu}
                    className="block p-2 rounded-lg text-sm text-gray-300 hover:text-cyan-400 hover:bg-white/5 transition-colors duration-300"
                  >
                    AI Cybersecurity
                  </Link>
                </div>
              </div>

              {/* CTA Button */}
              <Link
                to="/contact"
                onClick={closeMenu}
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25"
              >
                Get Started Today
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileNavigation;