import React from 'react';
import { Link } from 'react-router-dom';
export function MainNavigation() {
  return (
    <nav className="hidden md:flex space-x-8">
      <Link to="/" className="text-gray-700 hover:text-zion-purple px-3 py-2 text-sm font-medium transition-colors">
        Home
      </Link>
      <Link to="/services" className="text-gray-700 hover:text-zion-purple px-3 py-2 text-sm font-medium transition-colors">
        Services
      </Link>
      <Link to="/solutions" className="text-gray-700 hover:text-zion-purple px-3 py-2 text-sm font-medium transition-colors">
        Solutions
      </Link>
      <Link to="/about" className="text-gray-700 hover:text-zion-purple px-3 py-2 text-sm font-medium transition-colors">
        About
      </Link>
      <Link to="/contact" className="text-gray-700 hover:text-zion-purple px-3 py-2 text-sm font-medium transition-colors">
        Contact
      </Link>
    </nav>
<<<<<<< HEAD
  );
}
=======
  )}
>>>>>>> 0c99c864a5b3e9103e05fe2d2d18af9657a73b04
