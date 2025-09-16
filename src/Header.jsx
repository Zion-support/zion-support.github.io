// Header component
import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-900">
            Zion Tech Group
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="/" className="text-gray-600 hover:text-gray-900">Home</a>
            <a href="/pages/InnovationLanding2025" className="text-gray-600 hover:text-gray-900">Innovation</a>
            <a href="/contact" className="text-gray-600 hover:text-gray-900">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;