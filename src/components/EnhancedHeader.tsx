import React from 'react';

export const EnhancedHeader: React.FC = () => {
  return (<header className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-blue-900">
              Zion Tech Group
            </a>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-700 hover:text-blue-600">Home</a>
            <a href="/about" className="text-gray-700 hover:text-blue-600">About</a>
            <a href="/services" className="text-gray-700 hover:text-blue-600">Services</a>
            <a href="/solutions" className="text-gray-700 hover:text-blue-600">Solutions</a>
            <a href="/marketplace" className="text-gray-700 hover:text-blue-600">Marketplace</a>
            <a href="/micro-saas" className="text-gray-700 hover:text-blue-600">Micro SAAS</a>
            <a href="/blog" className="text-gray-700 hover:text-blue-600">Blog</a>
            <a href="/contact" className="text-gray-700 hover:text-blue-600">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
};
