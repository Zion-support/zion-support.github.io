import React from 'react';
import { Link } from 'react-router-dom';

export const MainNavigation: React.FC = () => {
  return (
    <nav className="hidden md:flex items-center space-x-6">
      <Link 
        to="/services" 
        className="text-white hover:text-zion-cyan transition-colors"
      >
        Services
      </Link>
      <Link 
        to="/products" 
        className="text-white hover:text-zion-cyan transition-colors"
      >
        Products
      </Link>
      <Link 
        to="/about" 
        className="text-white hover:text-zion-cyan transition-colors"
      >
        About
      </Link>
      <Link 
        to="/contact" 
        className="text-white hover:text-zion-cyan transition-colors"
      >
        Contact
      </Link>
    </nav>
  );
};