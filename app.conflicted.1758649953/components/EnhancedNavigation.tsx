'use client';

import React from 'react';
import Link from 'next/link';

const EnhancedNavigation: React.FC = () => {
  return (
    <nav className="w-full border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        <Link href="/" className="text-lg font-bold text-gray-900">Zion Tech Group</Link>
        <div className="flex items-center gap-4 text-sm">
          <Link href="/services" className="hover:text-blue-600">Services</Link>
          <Link href="/blog" className="hover:text-blue-600">Blog</Link>
          <Link href="/contact" className="hover:text-blue-600">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default EnhancedNavigation;
