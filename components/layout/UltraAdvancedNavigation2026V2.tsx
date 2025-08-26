import React from 'react';
import Link from 'next/link';

export default function UltraAdvancedNavigation2026V2() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-white font-semibold">Zion Tech Group</Link>
        <div className="space-x-4 text-sm">
          <Link href="/services" className="text-gray-300 hover:text-white">Services</Link>
          <Link href="/services-advertising" className="text-gray-300 hover:text-white">Advertising</Link>
          <Link href="/pricing" className="text-gray-300 hover:text-white">Pricing</Link>
          <Link href="/contact" className="text-gray-300 hover:text-white">Contact</Link>
        </div>
      </div>
    </nav>
  );
}