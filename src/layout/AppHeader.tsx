import React from 'react';
import Link from 'next/link';

export function AppHeader(): React.ReactElement {
  return (
    <header className="w-full border-b border-gray-200 bg-white/90">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-gray-900 font-semibold">Zion Tech Group</Link>
        <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
          <Link href="/services" className="text-sm text-gray-700 hover:text-blue-600">Services</Link>
          <Link href="/solutions" className="text-sm text-gray-700 hover:text-blue-600">Solutions</Link>
          <Link href="/about" className="text-sm text-gray-700 hover:text-blue-600">About</Link>
          <Link href="/contact" className="text-sm text-gray-700 hover:text-blue-600">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
