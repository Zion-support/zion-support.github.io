import React from 'react';
import Link from 'next/link';

export function MainNavigation(): React.ReactElement {
  return (
    <nav aria-label="Main navigation" className="flex items-center gap-4">
      <Link href="/" className="text-sm text-gray-700 hover:text-blue-600">Home</Link>
      <Link href="/services" className="text-sm text-gray-700 hover:text-blue-600">Services</Link>
      <Link href="/solutions" className="text-sm text-gray-700 hover:text-blue-600">Solutions</Link>
      <Link href="/about" className="text-sm text-gray-700 hover:text-blue-600">About</Link>
      <Link href="/contact" className="text-sm text-gray-700 hover:text-blue-600">Contact</Link>
    </nav>
  );
}
