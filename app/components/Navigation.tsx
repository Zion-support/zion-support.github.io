import React, { memo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Navigation: React.FC = memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-slate-900/50 backdrop-blur-lg border-b border-white/10 fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-white">
            Zion Tech Group
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-colors">
              About
            </Link>
            <Link to="/services" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Services
            </Link>
            <Link to="/ai-services" className="text-gray-300 hover:text-cyan-400 transition-colors">
              AI Services
            </Link>
            <Link to="/micro-saas" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Micro SAAS
            </Link>
            <Link to="/pricing" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Pricing
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Contact
            </Link>
            <div className="flex items-center space-x-4 ml-4">
              <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                <Phone className="w-5 h-5" />
              </a>
              <a href="mailto:support@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-cyan-400 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-900/95 backdrop-blur-lg">
              <Link
                to="/about"
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors"
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link
                to="/services"
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors"
                onClick={toggleMenu}
              >
                Services
              </Link>
              <Link
                to="/ai-services"
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors"
                onClick={toggleMenu}
              >
                AI Services
              </Link>
              <Link
                to="/micro-saas"
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors"
                onClick={toggleMenu}
              >
                Micro SAAS
              </Link>
              <Link
                to="/pricing"
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors"
                onClick={toggleMenu}
              >
                Pricing
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors"
                onClick={toggleMenu}
              >
                Contact
              </Link>
              <div className="flex items-center space-x-4 px-3 py-2">
                <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  <Phone className="w-5 h-5" />
                </a>
                <a href="mailto:support@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
});

Navigation.displayName = 'Navigation';

export default Navigation;