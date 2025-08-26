import React from 'react';
import { Link } from 'react-router-dom';

export function MainNavigation() {
  return (
    <nav className="flex items-center space-x-8">
      <Link to="/" className="text-gray-900 hover:text-gray-600 transition-colors">
        Home
      </Link>
      <Link to="/services" className="text-gray-900 hover:text-gray-600 transition-colors">
        Services
      </Link>
      <Link to="/about" className="text-gray-900 hover:text-gray-600 transition-colors">
        About
      </Link>
      <Link to="/contact" className="text-gray-900 hover:text-gray-600 transition-colors">
        Contact
      </Link>
    </nav>
  );
}
