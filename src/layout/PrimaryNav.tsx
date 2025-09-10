import React from 'react';

export function PrimaryNav(): React.ReactElement {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/90">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-gray-900 font-semibold">Zion Tech Group</div>
        <nav className="hidden md:flex items-center gap-4" aria-label="Primary">
          <a href="/services" className="text-sm text-gray-700 hover:text-blue-600">Services</a>
          <a href="/solutions" className="text-sm text-gray-700 hover:text-blue-600">Solutions</a>
          <a href="/about" className="text-sm text-gray-700 hover:text-blue-600">About</a>
          <a href="/contact" className="text-sm text-gray-700 hover:text-blue-600">Contact</a>
        </nav>
      </div>
    </header>
  );
}
