import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold">Zion Tech Group</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-blue-400 transition duration-300">
              Home
            </Link>
            <Link href="/services" className="hover:text-blue-400 transition duration-300">
              Services
            </Link>
            <Link href="/solutions" className="hover:text-blue-400 transition duration-300">
              Solutions
            </Link>
            <Link href="/research" className="hover:text-blue-400 transition duration-300">
              Research
            </Link>
            <Link href="/contact" className="hover:text-blue-400 transition duration-300">
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}