import React from 'react';

interface NavigationProps {
  // Add props here
}

const Navigation: React.FC<NavigationProps> = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-gray-800">Logo</span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="/" className="text-gray-600 hover:text-gray-900">Home</a>
            <a href="/about" className="text-gray-600 hover:text-gray-900">About</a>
            <a href="/contact" className="text-gray-600 hover:text-gray-900">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;