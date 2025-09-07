<<<<<<< HEAD
'use client'
import React, { useState } from 'react'
import Link from 'next/link'
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-blue-600">Zion</span>
              <span className="text-2xl font-bold text-gray-900 ml-1">Tech</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              Home
            </Link>
            <Link href="/services" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              Services
            </Link>
            <Link href="/about" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              About
            </Link>
            <Link href="/contact" className="text-gray-900 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-900 hover:text-blue-600 focus:outline-none focus:text-blue-600"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link href="/" className="text-gray-900 hover:text-blue-600 block px-3 py-2 text-base font-medium">
                Home
              </Link>
              <Link href="/services" className="text-gray-900 hover:text-blue-600 block px-3 py-2 text-base font-medium">
                Services
              </Link>
              <Link href="/about" className="text-gray-900 hover:text-blue-600 block px-3 py-2 text-base font-medium">
                About
              </Link>
              <Link href="/contact" className="text-gray-900 hover:text-blue-600 block px-3 py-2 text-base font-medium">
                Contact
              </Link>
            </div>
          </div>
        )}
=======
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
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
      </div>
    </header>
  );
}