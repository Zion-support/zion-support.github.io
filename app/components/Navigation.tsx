  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    onSidebarToggle?.();
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-gray-900">
              Zion Tech
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </a>
            <a href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
              About
            </a>
            <a href="/services" className="text-gray-700 hover:text-blue-600 transition-colors">
              Services
            </a>
            <a href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </a>
            <div className="flex items-center space-x-4">
              <a href="tel:+15551234567" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors">
                <Phone className="w-4 h-4 mr-1" />
                +1 (555) 123-4567
              </a>
              <a href="mailto:info@ziontech.com" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors">
                <Mail className="w-4 h-4 mr-1" />
                info@ziontech.com
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="/" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">
                Home
              </a>
              <a href="/about" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">
                About
              </a>
              <a href="/services" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">
                Services
              </a>
              <a href="/contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors">
                Contact
              </a>
              <div className="px-3 py-2 border-t">
                <a href="tel:+15551234567" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors">
                  <Phone className="w-4 h-4 mr-2" />
                  +1 (555) 123-4567
                </a>
                <a href="mailto:info@ziontech.com" className="flex items-center text-gray-700 hover:text-blue-600 transition-colors mt-2">
                  <Mail className="w-4 h-4 mr-2" />
                  info@ziontech.com
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
=======
import React from 'react';
import { Link } from 'react-router-dom';
const,
  Navigation: React.FC = () => {
  return (
    <nav className="bg-slate-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Zion Tech Group;
        </Link>
        <div className="space-x-4">
          <Link to="/" className="hover:text-blue-400">Home</Link>
          <Link to="/about" className="hover:text-blue-400">About</Link>
          <Link to="/services" className="hover:text-blue-400">Services</Link>
          <Link to="/contact" className="hover:text-blue-400">Contact</Link>
        </div>      </div>
    </nav>
  );
};

export default Navigation;