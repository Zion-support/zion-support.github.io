import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-slate-900/95 backdrop-blur-sm border-b border-white/10 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
            <span className="text-2xl font-bold text-white">
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/">
              <span className="text-gray-300 hover:text-white transition-colors">
                Home
              </span>
            </Link>
            <Link href="/services">
              <span className="text-gray-300 hover:text-white transition-colors">
                Services
              </span>
            </Link>
            <Link href="/contact">
              <span className="text-gray-300 hover:text-white transition-colors">
                Contact
              </span>
            </Link>
            <Link href="/contact">
              <span className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                Get Started
              </span>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <nav className="flex flex-col space-y-4">
              <Link href="/">
                <span className="text-gray-300 hover:text-white transition-colors">
                  Home
                </span>
              </Link>
              <Link href="/services">
                <span className="text-gray-300 hover:text-white transition-colors">
                  Services
                </span>
              </Link>
              <Link href="/contact">
                <span className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </span>
              </Link>
              <Link href="/contact">
                <span className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors text-center">
                  Get Started
                </span>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}