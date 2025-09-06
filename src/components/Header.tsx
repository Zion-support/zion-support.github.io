import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

<<<<<<< HEAD
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact', href: '/contact' }
  ];

=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-12f7
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
<<<<<<< HEAD
    <header className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">Z</span>
=======
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-sm border-b border-gray-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-sm">Z</span>
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-12f7
            </div>
            <span className="text-xl font-bold text-white">Zion Tech Group</span>
          </Link>

<<<<<<< HEAD
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={toggleMenu}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
=======
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
              About
            </Link>
            <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
              Services
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>
          </nav>

          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-300 hover:text-white transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-12f7
          </button>
        </div>

        {isMenuOpen && (
<<<<<<< HEAD
          <div className="md:hidden py-4 border-t border-slate-700">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
=======
          <div className="md:hidden py-4 border-t border-gray-700/50">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/services"
                className="text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/contact"
                className="text-gray-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-12f7
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;