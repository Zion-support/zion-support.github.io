'use client';

import React from 'react';
import Link from 'next/link';

const SimpleNavigation: React.FC = () => {
  return (
    <nav className="bg-gray-900text-whitep-4">
      <div className="max-w-7xl mx-autoflexjustify-between items-center">
        <Link href="/" className="text-xlfont-bold">
          Zion Tech Group
        </Link>
        <div className="space-x-4">
          <Link href="/about" className="hover:text-blue-400">
            About
          </Link>
          <Link href="/services" className="hover:text-blue-400">
            Services
          </Link>
          <Link href="/contact" className="hover:text-blue-400">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )};

export default SimpleNavigation;