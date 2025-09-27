import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">Z</span>
            </div>
            <span className="text-2xl font-bold text-gray-900">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              Home
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              Blog
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              Contact
            </Link>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
              Get Started
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span className={`block h-0.5 w-6 bg-gray-700 transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-gray-700 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-gray-700 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/blog" 
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                to="/contact" 
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold w-fit">
                Get Started
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}