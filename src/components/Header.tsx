<<<<<<< HEAD
import React from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export function Header() {
=======
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact', href: '/contact' }
  ]
>>>>>>> 2fc87795dcf7cb742c24a257dd9040071acce941
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
<<<<<<< HEAD
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
=======
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 border-t border-gray-200 pt-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}
export default Header
>>>>>>> 2fc87795dcf7cb742c24a257dd9040071acce941
