import React from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const EnhancedHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">Z</span>
            </div>
            <Link href="/" className="text-xl font-bold">
              Zion Tech Group
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
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
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-700">
            <nav className="flex flex-col space-y-4">
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
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default EnhancedHeader;