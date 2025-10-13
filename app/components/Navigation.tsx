import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="bg-slate-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Zion Tech Group
        </Link>
        <div className="space-x-4">
          <Link to="/" className="hover:text-cyan-400 transition-colors">Home</Link>
          <Link to="/about" className="hover:text-cyan-400 transition-colors">About</Link>
          <Link to="/services" className="hover:text-cyan-400 transition-colors">Services</Link>
          <Link to="/contact" className="hover:text-cyan-400 transition-colors">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
