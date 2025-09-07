import React from 'react';
import Link from 'next/link';

const ModernNavigation: React.FC = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-gray-800">
            Zion Tech Group
          </Link>
          <div className="flex items-center space-x-8">
            <Link href="/services" className="text-gray-600 hover:text-blue-600 transition-colors">
              Services
            </Link>
            <Link href="/products" className="text-gray-600 hover:text-blue-600 transition-colors">
              Products
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default ModernNavigation;