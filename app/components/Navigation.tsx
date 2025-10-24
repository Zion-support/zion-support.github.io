'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { AlertTriangle, Search, Home, ArrowLeft, RefreshCw } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

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
        <Link
          href="/contact"
          className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md transition-colors"
        >
          Get Started
        </Link>
      </div>

      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-300 hover:text-white focus:outline-none focus:text-white focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-md p-1"
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>
    </div>
  );
};

export default Navigation;