import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-lg border-b border-cyan-400/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-white">
            Zion Tech Group
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-cyan-400 transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-cyan-400 transition-colors">
              About
            </Link>
            <Link to="/services" className="text-white hover:text-cyan-400 transition-colors">
              Services
            </Link>
            <Link to="/contact" className="text-white hover:text-cyan-400 transition-colors">
              Contact
            </Link>
          </div>

          <button
            onClick={toggleMenu}
            className="md:hidden text-white hover:text-cyan-400 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4">
            <Link to="/" className="block py-2 text-white hover:text-cyan-400 transition-colors">
              Home
            </Link>
            <Link to="/about" className="block py-2 text-white hover:text-cyan-400 transition-colors">
              About
            </Link>
            <Link to="/services" className="block py-2 text-white hover:text-cyan-400 transition-colors">
              Services
            </Link>
            <Link to="/contact" className="block py-2 text-white hover:text-cyan-400 transition-colors">
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;