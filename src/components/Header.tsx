<<<<<<< HEAD
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    onMenuClick();
  };

  return (
    <header className="bg-gray-900 text-white shadow-lg fixed w-full top-0 z-40" role="banner">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" aria-label="Zion Tech Group - Go to homepage">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center" aria-hidden="true">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <span className="text-xl font-bold">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
            <Link to="/" className="hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-2 py-1">Home</Link>
            <Link to="/about" className="hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-2 py-1">About</Link>
            <Link to="/services" className="hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-2 py-1">Services</Link>
            <Link to="/pricing" className="hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-2 py-1">Pricing</Link>
            <Link to="/contact" className="hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-2 py-1">Contact</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-700" id="mobile-menu" role="navigation" aria-label="Mobile navigation">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="hover:text-blue-400 transition-colors py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-2">Home</Link>
              <Link to="/about" className="hover:text-blue-400 transition-colors py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-2">About</Link>
              <Link to="/services" className="hover:text-blue-400 transition-colors py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-2">Services</Link>
              <Link to="/pricing" className="hover:text-blue-400 transition-colors py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-2">Pricing</Link>
              <Link to="/contact" className="hover:text-blue-400 transition-colors py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-2">Contact</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

=======
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

interface HeaderProps {
  onMenuClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact', href: '/contact' }
  ]
  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">Z</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Zion Tech Group</h1>
              <p className="text-sm text-gray-600">AI & Technology Solutions</p>
            </div>
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 border-t border-gray-200 pt-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}

export { Header };
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
export default Header;