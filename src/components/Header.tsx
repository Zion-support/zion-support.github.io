<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
=======
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact', href: '/contact' }
<<<<<<< HEAD
  ]

export default function Header() {
  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">Z</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Zion Tech Group</h1>
              <p className="text-sm text-gray-600">AI & Technology Solutions</p>
            </div>
          </Link>
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
=======
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-700/20 bg-slate-900/95 backdrop-blur-md">
      <div className="container flex h-16 items-center px-4 sm:px-6">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 ml-8">
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden ml-auto p-2 text-slate-300 hover:text-cyan-400 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
=======
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <span className="text-xl font-bold text-white">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
              Services
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
<<<<<<< HEAD
          <div className="lg:hidden absolute top-16 left-0 right-0 bg-slate-900/95 backdrop-blur-md border-b border-slate-700/20">
            <div className="px-4 py-2 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block text-slate-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
<<<<<<< HEAD
      </nav>
    </header>
  )
}
=======
=======
          <div className="md:hidden py-4 border-t border-slate-700">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                Services
              </Link>
              <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                About
              </Link>
              <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                Contact
              </Link>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors w-full">
                Get Started
              </button>
            </nav>
          </div>
        )}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      </div>
    </header>
  );
};
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

export default Header;
=======
import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold text-blue-600">
            Zion Tech Group
          </Link>
          <nav className="flex space-x-4">
            <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
            <Link to="/about" className="text-gray-600 hover:text-blue-600">About</Link>
            <Link to="/services" className="text-gray-600 hover:text-blue-600">Services</Link>
            <Link to="/pricing" className="text-gray-600 hover:text-blue-600">Pricing</Link>
            <Link to="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-17cd
=======

export default Header;
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
