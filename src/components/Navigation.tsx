import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-2xl font-bold text-blue-400">
            Zion Tech Group
          </Link>
          
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
            <Link to="/about" className="hover:text-blue-400 transition-colors">About</Link>
            <Link to="/services" className="hover:text-blue-400 transition-colors">Services</Link>
            <Link to="/products" className="hover:text-blue-400 transition-colors">Products</Link>
            <Link to="/blog" className="hover:text-blue-400 transition-colors">Blog</Link>
            <Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4">
            <Link to="/" className="block py-2 hover:text-blue-400">Home</Link>
            <Link to="/about" className="block py-2 hover:text-blue-400">About</Link>
            <Link to="/services" className="block py-2 hover:text-blue-400">Services</Link>
            <Link to="/products" className="block py-2 hover:text-blue-400">Products</Link>
            <Link to="/blog" className="block py-2 hover:text-blue-400">Blog</Link>
            <Link to="/contact" className="block py-2 hover:text-blue-400">Contact</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;