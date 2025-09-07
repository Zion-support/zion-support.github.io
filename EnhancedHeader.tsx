import React from 'react';
import Link from 'next/link';

export default function EnhancedHeader(): React.JSX.Element {
  return (
    <header className="bg-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Zion Tech Group</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link></li>
              <li><Link href="/services" className="text-gray-700 hover:text-blue-600">Services</Link></li>
              <li><Link href="/about" className="text-gray-700 hover:text-blue-600">About</Link></li>
              <li><Link href="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}