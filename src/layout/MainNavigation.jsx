import React from 'react';
import { Link } from 'react-router-dom';

export function MainNavigation() {
  return (
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
        Contact
      </Link>
    </nav>
  );
}
