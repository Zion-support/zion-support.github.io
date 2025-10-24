'use client';

import React from 'react';
import Link from 'next/link';
import { Search } from 'lucide-react';

const Navigation = () => {
  return (
    <div>
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
          About
        </Link>
        <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
          Services
        </Link>
        <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
          Contact
        </Link>
        <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">
          Blog
        </Link>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <button className="text-gray-300 hover:text-white transition-colors">
          <Search className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default Navigation;
