import React from 'react';
import { Link } from 'react-router-dom';

export function MainNavigation() {
  return (
<<<<<<< HEAD
    <nav className="flex items-center space-x-8">
      <Link to="/" className="text-white hover:text-zion-cyan transition-colors">
        Home
      </Link>
      <Link to="/services" className="text-white hover:text-zion-cyan transition-colors">
        Services
      </Link>
      <Link to="/about" className="text-white hover:text-zion-cyan transition-colors">
        About
      </Link>
      <Link to="/contact" className="text-white hover:text-zion-cyan transition-colors">
=======
    <nav className="hidden md:flex space-x-8">
      <Link to="/" className="text-gray-700 hover:text-zion-purple transition-colors px-3 py-2 text-sm font-medium">
        Home
      </Link>
      <Link to="/enhanced-services" className="text-gray-700 hover:text-zion-purple transition-colors px-3 py-2 text-sm font-medium">
        Services
      </Link>
      <Link to="/about" className="text-gray-700 hover:text-zion-purple transition-colors px-3 py-2 text-sm font-medium">
        About
      </Link>
      <Link to="/contact" className="text-gray-700 hover:text-zion-purple transition-colors px-3 py-2 text-sm font-medium">
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-cbbe
        Contact
      </Link>
    </nav>
  );
}