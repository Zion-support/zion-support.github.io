import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="text-xl font-bold text-gray-800">
            Zion Tech Group
          </Link>
          <div className="space-x-6">
            <Link to="/about" className="text-gray-600 hover:text-gray-800">
              About
            </Link>
            <Link to="/services" className="text-gray-600 hover:text-gray-800">
              Services
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-gray-800">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}