'use client';

import Link from 'next/link';
import { AlertTriangle, Search, Home, ArrowLeft, RefreshCw } from 'lucide-react';

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
        <Link href="/solutions" className="text-gray-300 hover:text-white transition-colors">
          Solutions
        </Link>
        <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
          Contact
        </Link>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <button className="text-gray-300 hover:text-white">
          <Search className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
};

export default Navigation;
