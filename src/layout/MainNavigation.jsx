import React from 'react';
import { Link } from 'react-router-dom';

export function MainNavigation() {
  return (
    <nav className="hidden lg:flex items-center space-x-8">
      <Link to="/" className="text-white hover:text-zion-cyan transition-colors">
        Home
      </Link>
      <Link to="/services" className="text-white hover:text-zion-cyan transition-colors">
        Services
      </Link>
      <Link to="/talent" className="text-white hover:text-zion-cyan transition-colors">
        Talent
      </Link>
      <Link to="/equipment" className="text-white hover:text-zion-cyan transition-colors">
        Equipment
      </Link>
      <Link to="/community" className="text-white hover:text-zion-cyan transition-colors">
        Community
      </Link>
      <Link to="/innovative-services" className="text-white hover:text-zion-cyan transition-colors">
        Innovative Services
      </Link>
    </nav>
  );
}
