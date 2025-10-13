<<<<<<< HEAD
<<<<<<< HEAD
=======
'use client';
import React, { useState } from 'react';
import Link from 'next/link';
=======
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Globe, Users, Award, BookOpen, HelpCircle, Shield, DollarSign } from 'lucide-react';

const navigationItems = [
  {
    name: 'Home',
    path: '/',
    icon: <Globe className="w-4 h-4" />,
  },
  {
    name: 'Blog',
    path: '/blog',
    icon: <BookOpen className="w-4 h-4" />,
  },
  {
    name: 'Tutorials',
    path: '/tutorials',
    icon: <BookOpen className="w-4 h-4" />,
  },
  {
    name: 'Demo',
    path: '/demo',
    icon: <Award className="w-4 h-4" />,
  },
  {
    name: 'Support',
    path: '/support',
    icon: <HelpCircle className="w-4 h-4" />,
  },
  {
    name: 'Privacy',
    path: '/privacy',
    icon: <Shield className="w-4 h-4" />,
  },
  {
    name: 'Terms',
    path: '/terms',
    icon: <Shield className="w-4 h-4" />,
  },
  {
    name: 'Pricing',
    path: '/pricing',
    icon: <DollarSign className="w-4 h-4" />,
  },
];
>>>>>>> cursor/fix-errors-and-merge-to-main-6ffb

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
<<<<<<< HEAD
    <nav className="bg-gray-800 shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-white">
            Zion Tech Group
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
              About
            </Link>
            <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
              Services
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>
          </div>
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden py-4">
            <Link href="/" className="block py-2 text-gray-300 hover:text-white">
              Home
            </Link>
            <Link href="/about" className="block py-2 text-gray-300 hover:text-white">
              About
            </Link>
            <Link href="/services" className="block py-2 text-gray-300 hover:text-white">
              Services
            </Link>
            <Link href="/contact" className="block py-2 text-gray-300 hover:text-white">
              Contact
            </Link>
>>>>>>> cursor/fix-errors-and-merge-to-main-9cbf
          </div>
        )}
      </div>
    </nav>
  );
=======
    <nav className="bg-gray-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-white">Zion AI</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center space-x-1"
              >
                {item.icon}
                <span>{item.name}</span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium flex items-center space-x-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-6ffb
          </div>
        )}
      </div>
    </nav>
  );
<<<<<<< HEAD
}
>>>>>>> cursor/fix-errors-and-merge-to-main-9706
=======
}
>>>>>>> cursor/fix-errors-and-merge-to-main-6ffb
