import React from 'react';
import { Link } from 'react-router-dom';

export function MainNavigation() {
  return (
    <nav className="hidden md:flex space-x-8">
      <Link to="/" className="text-zion-slate-light hover:text-zion-cyan px-3 py-2 text-sm font-medium transition-colors">
        Home
      </Link>
      <Link to="/services" className="text-zion-slate-light hover:text-zion-cyan px-3 py-2 text-sm font-medium transition-colors">
        Services
      </Link>
      <Link to="/solutions" className="text-zion-slate-light hover:text-zion-cyan px-3 py-2 text-sm font-medium transition-colors">
        Solutions
      </Link>
      <Link to="/about" className="text-zion-slate-light hover:text-zion-cyan px-3 py-2 text-sm font-medium transition-colors">
        About
      </Link>
      <Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan px-3 py-2 text-sm font-medium transition-colors">
        Contact
      </Link>
    </nav>
  );
}
