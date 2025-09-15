import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <h1 className="text-2xl font-bold text-gray-900">Zion Tech Group</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="/" className="text-gray-600 hover:text-blue-600 transition-colors">Home</a>
            <a href="/pages/InnovationLanding2025" className="text-gray-600 hover:text-blue-600 transition-colors">Innovations</a>
            <a href="/pages/ComprehensiveServices2025" className="text-gray-600 hover:text-blue-600 transition-colors">Services</a>
            <a href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;