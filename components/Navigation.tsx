import React from 'react';
import Link from 'next/link';

const Navigation: React.FC = () => {
  return (
    <nav className="bg-slate-900 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            Zion Tech Group
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-emerald-400 transition-colors">
              Home
            </Link>
            <Link href="/about" className="hover:text-emerald-400 transition-colors">
              About
            </Link>
            <Link href="/services" className="hover:text-emerald-400 transition-colors">
              Services
            </Link>
            <Link href="/contact" className="hover:text-emerald-400 transition-colors">
              Contact
            </Link>
          </div>
          <div className="md:hidden">
            <button className="text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;