import React from 'react';
import { Link } from 'react-router-dom';

export function AppHeader() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-lg font-bold">Zion Tech Group</Link>
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-cyan-600">Home</Link>
          <Link to="/services" className="text-gray-700 hover:text-cyan-600">Services</Link>
          <Link to="/about" className="text-gray-700 hover:text-cyan-600">About</Link>
          <Link to="/contact" className="text-gray-700 hover:text-cyan-600">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
