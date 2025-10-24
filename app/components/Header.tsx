<<<<<<< HEAD
import React from 'react';
import Link from 'next/link';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  return (
    <header className={`bg-white shadow-sm ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-xl font-bold text-gray-900">
            Zion Tech Group
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900">
              About
            </Link>
            <Link href="/services" className="text-gray-600 hover:text-gray-900">
              Services
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
=======
'use client'

import React from 'react'

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <h1>Zion Tech Group</h1>
        <nav>
          <a href="/">Home</a>
          <a href="/services">Services</a>
          <a href="/about">About</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
>>>>>>> cursor/fix-errors-and-merge-to-main-2503
