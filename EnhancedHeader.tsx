import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';

const EnhancedHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-900 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors">
            Zion Tech Group
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-colors">
              About
            </Link>
            <Link to="/services" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Services
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:+1-555-0123" className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors">
              <Phone className="w-4 h-4 mr-2" />
              +1-555-0123
            </a>
            <a href="mailto:info@ziontechgroup.com" className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors">
              <Mail className="w-4 h-4 mr-2" />
              info@ziontechgroup.com
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-300 hover:text-cyan-400 transition-colors">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-cyan-500/20">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-300 hover:text-cyan-400 transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-colors">
                About
              </Link>
              <Link to="/services" className="text-gray-300 hover:text-cyan-400 transition-colors">
                Services
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors">
                Contact
              </Link>
              <div className="pt-4 border-t border-cyan-500/20">
                <a href="tel:+1-555-0123" className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors mb-2">
                  <Phone className="w-4 h-4 mr-2" />
                  +1-555-0123
                </a>
                <a href="mailto:info@ziontechgroup.com" className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors">
                  <Mail className="w-4 h-4 mr-2" />
                  info@ziontechgroup.com
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default EnhancedHeader;