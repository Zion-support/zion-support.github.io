import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">Zion Tech Group</Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="hover:text-blue-300">Home</Link>
          <Link href="/about" className="hover:text-blue-300">About</Link>
          <Link href="/services" className="hover:text-blue-300">Services</Link>
          <Link href="/contact" className="hover:text-blue-300">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;