import React, { useState } from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
=======
import { Menu, X, ChevronDown } from 'lucide-react';
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d61

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

<<<<<<< HEAD
  return (
<<<<<<< HEAD
    <header className="bg-gray-900 text-white shadow-lg" data-testid="header">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
=======
    <header className="bg-gray-900 shadow-lg" data-testid="header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ca9d
            <Link to="/" className="text-2xl font-bold text-white">
              Zion Tech Group
            </Link>
          </div>
<<<<<<< HEAD
          
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
              About
            </Link>
            <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
              Services
            </Link>
            <Link to="/blog" className="text-gray-300 hover:text-white transition-colors">
              Blog
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>
          </nav>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
=======

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
            >
              About
            </Link>
            <Link
              to="/services"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
            >
              Services
            </Link>
            <Link
              to="/blog"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition duration-300"
            >
=======
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-900 text-white shadow-lg" data-testid="header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-white hover:text-blue-400 transition duration-300">
              Zion Tech Group
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="text-white hover:text-blue-400 transition duration-300">
              Home
            </Link>
            <Link to="/services" className="text-white hover:text-blue-400 transition duration-300">
              Services
            </Link>
            <Link to="/about" className="text-white hover:text-blue-400 transition duration-300">
              About
            </Link>
            <Link to="/contact" className="text-white hover:text-blue-400 transition duration-300">
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d61
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
<<<<<<< HEAD
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ca9d
              </svg>
            </button>
          </div>
        </div>
<<<<<<< HEAD
        
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/about" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors">
                About
              </Link>
              <Link to="/services" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors">
                Services
              </Link>
              <Link to="/blog" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors">
                Blog
              </Link>
              <Link to="/contact" className="block px-3 py-2 text-gray-300 hover:text-white transition-colors">
=======
=======
              onClick={toggleMenu}
              className="text-white hover:text-blue-400 transition duration-300"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d61

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
<<<<<<< HEAD
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800 rounded-lg mt-2">
              <Link
                to="/"
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
=======
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/"
                className="block px-3 py-2 text-white hover:text-blue-400 transition duration-300"
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d61
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
<<<<<<< HEAD
                to="/about"
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/services"
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
=======
                to="/services"
                className="block px-3 py-2 text-white hover:text-blue-400 transition duration-300"
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d61
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
<<<<<<< HEAD
                to="/blog"
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                to="/contact"
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ca9d
=======
                to="/about"
                className="block px-3 py-2 text-white hover:text-blue-400 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-white hover:text-blue-400 transition duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d61
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

<<<<<<< HEAD
<<<<<<< HEAD
export default Header;
=======
export default Header;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-ca9d
=======
export default Header;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-9d61
