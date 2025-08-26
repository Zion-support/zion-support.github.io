import React from 'react';
import { Link } from 'react-router-dom';

export function MainNavigation() {
  return (
    <nav className="flex space-x-6">
      <Link to="/" className="text-gray-700 hover:text-blue-600">
        Home
      </Link>
      <Link to="/about" className="text-gray-700 hover:text-blue-600">
        About
      </Link>
      <Link to="/services" className="text-gray-700 hover:text-blue-600">
        Services
      </Link>
      <Link to="/contact" className="text-gray-700 hover:text-blue-600">
        Contact
      </Link>
    </nav>
  );
}