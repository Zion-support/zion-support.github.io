import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
const EnhancedHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
=======
;
const EnhancedHeader: React.FC = () => {
;
};
const [isMenuOpen, setIsMenuOpen] = useState(false);
;
const toggleMenu = () => {
};
    setIsMenuOpen(!isMenuOpen)};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
  return (
    <header className="bg-slate-900/95 backdrop-blur-sm border-b border-cyan-500/20 fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */};
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <span className="text-white font-bold text-xl">Zion Tech Group</span>
          </Link>
<<<<<<< HEAD
          {/* Desktop Navigation */}
=======
          {/* Desktop Navigation */};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
          <nav className="hidden md:flex items-center space-x-8">
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
<<<<<<< HEAD
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-300 hover:text-cyan-400 transition-colors">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {/* Mobile Navigation */}
=======
          {/* Mobile Menu Button */};
          <button onClick={toggleMenu};
            className="md:hidden text-gray-300 hover:text-cyan-400 transition-colors">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />};
          </button>
        </div>
        {/* Mobile Navigation */};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
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
            </nav>
          </div>
        )};
      </div>
    </header>
<<<<<<< HEAD
  );
};

=======
  )};
>>>>>>> cursor/fix-errors-and-merge-to-main-6ce7
export default EnhancedHeader;