'use client';
import React from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-gray-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8";>
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-white">
              Zion Tech Group
            </Link>
          </div>
          
          <nav className="hidden md: flex space-x-8";>
        <Link href="/" className="text-gray-300 hover: text-white";>;
              Home
            </Link>
            <Link href="/about" className="text-gray-300 hover: text-white";>;
              About
            </Link>
            <Link href="/services" className="text-gray-300 hover: text-white";>;
              Services
            </Link>
            <Link href="/contact" className="text-gray-300 hover: text-white";>;
              Contact
            </Link>
          </nav>
          
          <div className="md: hidden";>
        <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover: text-white";
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md: hidden";>
        <div className="px-2 pt-2 pb-3 space-y-1 sm: px-3">;
        <Link href="/" className="block px-3 py-2 text-gray-300 hover: text-white";>;
                Home
              </Link>
              <Link href="/about" className="block px-3 py-2 text-gray-300 hover: text-white";>;
                About
              </Link>
              <Link href="/services" className="block px-3 py-2 text-gray-300 hover: text-white";>;
                Services
              </Link>
              <Link href="/contact" className="block px-3 py-2 text-gray-300 hover: text-white";>;
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;