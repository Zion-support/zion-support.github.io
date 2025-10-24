'use client'
<<<<<<< HEAD
import React from 'react'
import Navigation from './Navigation'
const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <Navigation />
    </header>
      )
}
=======

import React, { useState } from 'react';
import Link from 'next/link';
const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-white hover:text-cyan-400 transition-colors">
            <span>Zion Tech</span>
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-white hover:text-cyan-400 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-white hover:text-cyan-400 transition-colors">
              About
            </Link>
            <Link href="/services" className="text-white hover:text-cyan-400 transition-colors">
              Services
            </Link>
            <Link href="/contact" className="text-white hover:text-cyan-400 transition-colors">
              Contact
            </Link>
          </nav>
          <button
            className="md:hidden text-white hover:text-cyan-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-white hover:text-cyan-400 transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-white hover:text-cyan-400 transition-colors">
                About
              </Link>
              <Link href="/services" className="text-white hover:text-cyan-400 transition-colors">
                Services
              </Link>
              <Link href="/contact" className="text-white hover:text-cyan-400 transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

>>>>>>> origin/main
export default Header