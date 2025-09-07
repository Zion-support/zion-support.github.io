'use client'
import React, { useState } from 'react'
import Link from 'next/link'

export default function Header() {
=======
<<<<<<< HEAD
'use client';
import React, { useState } from 'react';
import Link from 'next/link';
export default function Header() {

>>>>>>> origin/chore/fix-lint-and-merge
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  
  return (
<<<<<<< HEAD
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              Zion Tech Group
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="/about" className="text-gray-700 hover:text-blue-600">
              About
=======
    <header className=\"bg-white shadow-lg sticky top-0 z-50\"    />"
      <div className=\"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8\"    />"
        <div className=\"flex justify-between items-center h-16\"    />"
          {/* Logo */}
          <div className=\"flex-shrink-0\"    />"
            <Link href=\"/\" className=\"flex items-center\"    />"
              <span className=\"text-2xl font-bold text-blue-600\"    />Zion</span>
              <span className=\"text-2xl font-bold text-gray-900 ml-1\"    />Tech</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="/"
                className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                Home

              </Link>
              <Link;"
href=\"/services\"
                className=\"text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors\"
                  />
                Services;
              </Link>
              <Link;"
href=\"/about\"
                className=\"text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors\"
                  />
                About;
              </Link>
              <Link;"
href=\"/contact\"
                className=\"text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors\"
                  />
                Contact;
              </Link>
            </div>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              Get Started
>>>>>>> origin/chore/fix-lint-and-merge
            </Link>
          </div>
          {/* Mobile menu button */}
<<<<<<< HEAD
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-200"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-controls="mobile-menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
=======
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"    />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"    />

                )}
              </svg>
            </button>
          </div>
>>>>>>> origin/chore/fix-lint-and-merge
        </div>
        {/* Mobile Navigation */}
<<<<<<< HEAD
        {isMenuOpen && (
          <div className="lg:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                  aria-label={`Navigate to ${item.name} page`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Link
                  href="/contact"
                  className="block w-full text-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Get started with Zion Tech Group"
=======
        {isMenuOpen && ("
          <div className=\"md:hidden\"    />"
            <div className=\"px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200\"    />"
              <Link;"
href=\"/\"}
                className=\"text-gray-900 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors\"}
                onClick={() =    /> setIsMenuOpen(false)}
              >
                Home;
              </Link>
              <Link;"
href=\"/services\"
                className=\"text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors\"
                onClick={() =    /> setIsMenuOpen(false)}
              >
                Services;
              </Link>
              <Link;"
href=\"/about\"
                className=\"text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors\"
                onClick={() =    /> setIsMenuOpen(false)}
              >
                About;
              </Link>
              <Link;"
href=\"/contact\"
                className=\"text-gray-700 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors\"
                onClick={() =    /> setIsMenuOpen(false)}
              >
                Contact;"
              </Link>
              <div className=\"px-3 py-2\"    />"
                <Link;"
href=\"/contact\"
                  className=\"bg-blue-600 text-white block px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors text-center\"
                  onClick={() =    /> setIsMenuOpen(false)}
>>>>>>> origin/chore/fix-lint-and-merge
                >
                  Get Started;
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
<<<<<<< HEAD
=======
>>>>>>> 88842f44d25f20f54aaa266432fdcc276bc7a834
>>>>>>> origin/chore/fix-lint-and-merge
