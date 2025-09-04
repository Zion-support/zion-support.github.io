import React from 'react';
import Link from 'next/link';

export default function EnhancedHeader() {
  return (
    <header className="w-full bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
              <div className="text-xs text-gray-500">Technology Solutions</div>
            </div>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm text-gray-700">
            <Link href="/services" className="hover:text-blue-600">Services</Link>
            <Link href="/solutions" className="hover:text-blue-600">Solutions</Link>
            <Link href="/pricing" className="hover:text-blue-600">Pricing</Link>
            <Link href="/about" className="hover:text-blue-600">About</Link>
            <Link href="/contact" className="hover:text-blue-600">Contact</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}