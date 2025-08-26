import React from 'react';
import { Link } from 'react-router-dom';

export function MainNavigation() {
  return (
    <nav className="hidden md:flex space-x-8">
      <Link to="/services" className="text-gray-700 hover:text-zion-purple transition-colors duration-200">
        Services
      </Link>
      <Link to="/solutions" className="text-gray-700 hover:text-zion-purple transition-colors duration-200">
        Solutions
      </Link>
      <Link to="/about" className="text-gray-700 hover:text-zion-purple transition-colors duration-200">
        About
      </Link>
      <Link to="/contact" className="text-gray-700 hover:text-zion-purple transition-colors duration-200">
        Contact
      </Link>
    </nav>
  );
}
