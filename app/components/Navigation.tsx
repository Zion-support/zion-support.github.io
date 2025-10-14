import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  onSidebarToggle: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onSidebarToggle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    onSidebarToggle();
  };

  return (
    <nav className="bg-white/10 backdrop-blur-md border-b border-white/20 fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold text-white">Zion Tech</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-white hover:text-blue-300 transition-colors">
              Home
            </a>
            <a href="#services" className="text-white hover:text-blue-300 transition-colors">
              Services
            </a>
            <a href="#about" className="text-white hover:text-blue-300 transition-colors">
              About
            </a>
            <a href="#contact" className="text-white hover:text-blue-300 transition-colors">
              Contact
            </a>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-blue-300 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/10 backdrop-blur-md border-t border-white/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-white hover:text-blue-300 transition-colors">
                Home
              </a>
              <a href="#services" className="block px-3 py-2 text-white hover:text-blue-300 transition-colors">
                Services
              </a>
              <a href="#about" className="block px-3 py-2 text-white hover:text-blue-300 transition-colors">
                About
              </a>
              <a href="#contact" className="block px-3 py-2 text-white hover:text-blue-300 transition-colors">
                Contact
              </a>
              <button className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors mt-4">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;