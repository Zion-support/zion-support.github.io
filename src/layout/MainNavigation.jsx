import React from 'react';
import { Link } from 'react-router-dom';

export function MainNavigation() {
  return (
    <nav className="hidden md:flex space-x-8">
      <Link to="/" className="text-gray-700 hover:text-zion-purple transition-colors px-3 py-2 text-sm font-medium">
        Home
      </Link>
      <Link to="/enhanced-services" className="text-gray-700 hover:text-zion-purple transition-colors px-3 py-2 text-sm font-medium">
        Enhanced Services
      </Link>
      <Link to="/services" className="text-gray-700 hover:text-zion-purple transition-colors px-3 py-2 text-sm font-medium">
        Services
      </Link>
      <Link to="/solutions" className="text-gray-700 hover:text-zion-purple transition-colors px-3 py-2 text-sm font-medium">
        Solutions
      </Link>
      <Link to="/about" className="text-gray-700 hover:text-zion-purple transition-colors px-3 py-2 text-sm font-medium">
        About
      </Link>
      <Link to="/contact" className="text-gray-700 hover:text-zion-purple transition-colors px-3 py-2 text-sm font-medium">
        Contact
      </Link>
    </nav>
  );
}
