import React from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-700/20 bg-slate-900/95 backdrop-blur-md">
      <div className="container flex h-16 items-center px-4 sm:px-6">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex ml-8 space-x-8">
          <Link href="/" className="text-slate-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors duration-200">
            Home
          </Link>
          <Link href="/about" className="text-slate-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors duration-200">
            About
          </Link>
          <Link href="/services" className="text-slate-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors duration-200">
            Services
          </Link>
          <Link href="/contact" className="text-slate-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors duration-200">
            Contact
          </Link>
        </nav>

        {/* Right side actions */}
        <div className="ml-auto flex items-center space-x-4">
          <button className="px-4 py-2 text-cyan-400 border border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-white transition-colors">
            Login
          </button>
          <button className="px-4 py-2 bg-cyan-400 text-white rounded-lg hover:bg-cyan-500 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}