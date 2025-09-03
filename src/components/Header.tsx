import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import React from 'react';


export default function Header() {
  return (
    <header className="bg-zion-slate-dark/90 backdrop-blur-sm border-b border-zion-slate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-white">
              Zion Tech Group
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-zion-slate-light hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-zion-slate-light hover:text-white transition-colors">
              About
            </Link>
            <Link href="/services" className="text-zion-slate-light hover:text-white transition-colors">
              Services
            </Link>
            <Link href="/contact" className="text-zion-slate-light hover:text-white transition-colors">
              Contact
            </Link>
          </nav>
          <div className="md:hidden">
            <button className="text-zion-slate-light hover:text-white">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}