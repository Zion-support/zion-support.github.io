import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-blue-600">
              Zion Tech Group
            </a>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="/"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Home
            </a>
            <a
              href="/about"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              About
            </a>
            <a
              href="/services"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Services
            </a>
            <a
              href="/blog"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Blog
            </a>
            <a
              href="/contact"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Contact
            </a>
            <a
              href="tel:+13024640950"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Call Now
            </a>
          </nav>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <nav className="py-4 space-y-2">
              <a
                href="/"
                className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </a>
              <a
                href="/about"
                className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="/services"
                className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="/blog"
                className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </a>
              <a
                href="/contact"
                className="block px-4 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <a
                href="tel:+13024640950"
                className="block mx-4 mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Call +1 302 464 0950
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
export default Header;
import React from ' react ' ; const Header: React.FC = ( ) = > { retu r n ( < header classNam e = ' bg - white shado w - sm ' > < div classNam e = ' m a x - w - 7xl m x - auto p x - 4 s m: px - 6 l g: px - 8 ' > < div classNam e = ' flex justif y - between item s - center p y - 6 ' > < div classNam e = ' flex item s - cent e r ' > < h1 classNam e = ' te x t - 2xl fon t - bold tex t - gr a y - 9 0 0 ' > Zion Tech Group < / h1 > < / d i v > < nav classNam e = ' hidden m d: flex spac e - x - 8 ' > < a hre f = ' / ' classNa m e = ' te x t - gr a y - 500 hove r: te x t - gr a y - 9 0 0 ' > Home < / a > < a hre f = ' / abo u t ' classNa m e = ' te x t - gr a y - 500 hove r: te x t - gr a y - 9 0 0 ' > About < / a > < a hre f = ' / servic e s ' classNa m e = ' te x t - gr a y - 500 hove r: te x t - gr a y - 9 0 0 ' > Services < / a > < a hre f = ' / conta c t ' classNa m e = ' te x t - gr a y - 500 hove r: te x t - gr a y - 9 0 0 ' > Contact < / a > < / n a v > < / d i v > < / d i v > < / he a d e r > ); }; export default Header; $ $ 
