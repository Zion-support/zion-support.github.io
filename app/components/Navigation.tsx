'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowRight } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'AI Services', href: '/ai-services' },
    { name: 'IT Solutions', href: '/it-solutions' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="bg-slate-900 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold">
            Zion Tech Group
          </Link>
          
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="hover:text-emerald-400 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Link
              href="/contact"
              className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-6 py-2 rounded-lg hover:from-emerald-600 hover:to-blue-600 transition-all duration-300 flex items-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white block px-3 py-2 rounded-md text-base font-medium hover:from-emerald-600 hover:to-blue-600 transition-all duration-300 mt-4"
              onClick={() => setIsOpen(false)}
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 inline ml-2" />
            </Link>
          </div>
    </div>
    </>
  ) "}

export default Navigation
    </div>
}
export default Navigation
