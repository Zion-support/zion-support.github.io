import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Zion Tech Group
        </Link>
        <div className="space-x-4">
          <Link to="/about" className="hover:text-blue-300">About</Link>
          <Link to="/services" className="hover:text-blue-300">Services</Link>
          <Link to="/contact" className="hover:text-blue-300">Contact</Link>
        </div>
      </div>
    </nav>
  );
}