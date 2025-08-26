import React from 'react';
import { Link } from 'react-router-dom';

export function MainNavigation() {
  return (
    <nav className="hidden md:flex space-x-8">
<<<<<<< HEAD
      <Link to="/services" className="text-gray-700 hover:text-zion-purple transition-colors">
        Services
      </Link>
      <Link to="/solutions" className="text-gray-700 hover:text-zion-purple transition-colors">
        Solutions
      </Link>
      <Link to="/about" className="text-gray-700 hover:text-zion-purple transition-colors">
        About
      </Link>
      <Link to="/contact" className="text-gray-700 hover:text-zion-purple transition-colors">
=======
      <Link to="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
        Home
      </Link>
      <Link to="/services" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
        Services
      </Link>
      <Link to="/about" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
        About
      </Link>
      <Link to="/contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium">
>>>>>>> main
        Contact
      </Link>
    </nav>
  );
}
