import React from 'react';
import Link from 'next/link';

const EnhancedNavigation: React.FC = () => {
  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold">
            Zion Tech Group
          </Link>
          <div className="flex items-center space-x-8">
            <Link href="/services" className="hover:text-blue-400 transition-colors">
              Services
            </Link>
            <Link href="/products" className="hover:text-blue-400 transition-colors">
              Products
            </Link>
            <Link href="/about" className="hover:text-blue-400 transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:text-blue-400 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default EnhancedNavigation;