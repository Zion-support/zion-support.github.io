import React from 'react';
import { Link } from 'react-router-dom';

export function MainNavigation() {
  return (
    <nav className="hidden md:flex space-x-8">
      <Link to="/" className="text-gray-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors duration-200">
        Home
      </Link>
      <Link to="/services" className="text-gray-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors duration-200">
        Services
      </Link>
      <Link to="/about" className="text-gray-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors duration-200">
        About
      </Link>
      <Link to="/contact" className="text-gray-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors duration-200">
        Contact
      </Link>
      <Link to="/pricing" className="text-gray-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors duration-200">
        Pricing
      </Link>
      <Link to="/blog" className="text-gray-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors duration-200">
        Blog
      </Link>
    </nav>
  );
}
