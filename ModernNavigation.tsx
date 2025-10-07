import React from 'react';

interface ModernNavigationProps {
  className?: string;
}

const ModernNavigation: React.FC<ModernNavigationProps> = ({ className = '' }) => {
  return (
    <div className={`bg-white shadow-md ${className}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-blue-600">
            Zion Tech Group
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </a>
            <a href="/services" className="text-gray-700 hover:text-blue-600 transition-colors">
              Services
            </a>
            <a href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
              About
            </a>
            <a href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default ModernNavigation;
