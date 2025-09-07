import React, { useState } from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Contact Bar */}
      <div className="bg-blue-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm">
            <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-2" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="text-2xl font-bold text-blue-600">
              Zion Tech Group
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              About
            </Link>
            <Link
              to="/services"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Contact
            </Link>
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50">
              <Link
                to="/"
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={closeMenu}
              >
                About
              </Link>
              <Link
                to="/services"
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={closeMenu}
              >
                Services
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={closeMenu}
              >
                Contact
              </Link>
              <Link
                to="/contact"
                className="bg-blue-600 text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700 transition-colors"
                onClick={closeMenu}
              >
                Get Quote
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
=======
import { Link  } from 'react-router-dom';
import { Menu, X, Search  } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import SearchModal from './SearchModal';
const Header: React.FC = () => {const [isMenuOpen, setIsMenuOpen] = useState(false)const [isSearchOpen, setIsSearchOpen]  = useState(false)const toggleMenu = () => {setIsMenuOpen(!isMenuOpen)}const toggleSearch = () => {setIsSearchOpen(!isSearchOpen)}return (<header className="bg-white dark:bg-gray-900 shadow-lg sticky top-0 z-50">;
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">;
        <div className="flex justify-between items-center h-16">;
          <div className="flex items-center">;
            <Link to="/" className="flex-shrink-0">;
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">;
                Zion Tech Group;
              </h1>;
            </Link>;
          </div>;
          <div className="hidden md:block">;
            <div className="ml-10 flex items-baseline space-x-4">;
              <Link;
                to="/";
                className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium";
              >;
                Home;
              </Link>;
              <Link;
                to="/services";
                className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium";
              >;
                Services;
              </Link>;
              <Link;
                to="/about";
                className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium";
              >;
                About;
              </Link>;
              <Link;
                to="/contact";
                className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-sm font-medium";
              >;
                Contact;
              </Link>;
            </div>;
          </div>;
          <div className="flex items-center space-x-4">;
            <button;
              onClick={toggleSearch}
              className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 p-2";
            >;
              <Search className="h-5 w-5" />;
            </button>;
            <ThemeToggle />;
            <button;
              onClick={toggleMenu}
              className="md:hidden text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 p-2";
            >;
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>;
          </div>;
        </div>;
        {isMenuOpen && (<div className="md:hidden">;
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">;
              <Link;
                to="/";
                className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium";
                onClick={() => setIsMenuOpen(false)}
              >;
                Home;
              </Link>;
              <Link;
                to="/services";
                className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium";
                onClick={() => setIsMenuOpen(false)}
              >;
                Services;
              </Link>;
              <Link;
                to="/about";
                className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium";
                onClick={() => setIsMenuOpen(false)}
              >;
                About;
              </Link>;
              <Link;
                to="/contact";
                className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium";
                onClick={() => setIsMenuOpen(false)}
              >;
                Contact;
              </Link>;
            </div>;
          </div>;
        )}
      </div>;
      {isSearchOpen && <SearchModal onClose={() => setIsSearchOpen(false)} />}
    </header>;
  )}export default Header;
>>>>>>> cursor/expand-services-advertise-and-build-project-e77d
