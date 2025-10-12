import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold">Zion Tech Group
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
            <Link to="/about" className="hover:text-blue-400 transition-colors">About</Link>
            <Link to="/services" className="hover:text-blue-400 transition-colors">Services</Link>
            <Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link>
          </div>
          
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {isOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
              <Link to="/about" className="hover:text-blue-400 transition-colors">About</Link>
              <Link to="/services" className="hover:text-blue-400 transition-colors">Services</Link>
              <Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
