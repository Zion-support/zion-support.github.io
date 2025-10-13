import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-white">
            Zion Tech Group
          </Link>
          
          <div className="hidden md:flex space-x-8">
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
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4">
            <Link to="/" className="block py-2 text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <Link to="/about" className="block py-2 text-gray-300 hover:text-white transition-colors">
              About
            </Link>
            <Link to="/services" className="block py-2 text-gray-300 hover:text-white transition-colors">
              Services
            </Link>
            <Link to="/contact" className="block py-2 text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}