import React from 'react';
import { Link } from 'react-router-dom';

export function MainNavigation() {
  return (
    <nav className="flex items-center space-x-8">
      <Link to="/services" className="text-gray-700 hover:text-zion-purple transition-colors">
        Services
      </Link>
      <Link to="/about" className="text-gray-700 hover:text-zion-purple transition-colors">
        About
      </Link>
      <Link to="/contact" className="text-gray-700 hover:text-zion-purple transition-colors">
        Contact
      </Link>
      <Link to="/login" className="bg-zion-purple text-white px-4 py-2 rounded-md hover:bg-zion-purple-dark transition-colors">
        Login
      </Link>
    </nav>
  );
}
