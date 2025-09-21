import React, { useState } from 'react';
import Link from 'next/link';
import { ThemeToggle } from './ThemeToggle';

export const MobileNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={toggleMenu}
        className="md:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
        aria-label="Toggle menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeMenu}
          />
          <div className="fixed top-0 right-0 h-full w-80 bg-gray-900 shadow-xl">
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <Link
                  href="/"
                  className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
                  onClick={closeMenu}
                >
                  Zion Tech Group
                </Link>
                <ThemeToggle />
              </div>

              {/* Navigation links */}
              <nav className="space-y-4">
                <Link
                  href="/"
                  className="block px-4 py-3 text-white font-semibold bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg"
                  onClick={closeMenu}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 transition-colors rounded-lg"
                  onClick={closeMenu}
                >
                  About
                </Link>
                <Link
                  href="/services"
                  className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 transition-colors rounded-lg"
                  onClick={closeMenu}
                >
                  Services
                </Link>
                <Link
                  href="/contact"
                  className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 transition-colors rounded-lg"
                  onClick={closeMenu}
                >
                  Contact
                </Link>
              </nav>

              {/* Call to action */}
              <div className="mt-8 pt-8 border-t border-gray-700">
                <a
                  href="tel:+13024640950"
                  className="block w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-center py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                  onClick={closeMenu}
                >
                  Call (302) 464-0950
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};