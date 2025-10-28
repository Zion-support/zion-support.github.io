'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <nav className="bg-slate-900/95 backdrop-blur-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-white">
            Zion Tech Group
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
              About
            </Link>
            <div className="relative">
              <button
                onClick={() => toggleDropdown('services')}
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-slate-800 rounded-lg shadow-lg py-2">
                  <Link href="/ai-services" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-700">
                    AI Services
                  </Link>
                  <Link href="/blockchain" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-700">
                    Blockchain
                  </Link>
                  <Link href="/cloud" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-700">
                    Cloud Services
                  </Link>
                  <Link href="/cybersecurity" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-700">
                    Cybersecurity
                  </Link>
                </div>
              )}
            </div>
            <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden bg-slate-800 py-4">
            <Link href="/about" className="block px-4 py-2 text-gray-300 hover:text-white">
              About
            </Link>
            <Link href="/ai-services" className="block px-4 py-2 text-gray-300 hover:text-white">
              AI Services
            </Link>
            <Link href="/blockchain" className="block px-4 py-2 text-gray-300 hover:text-white">
              Blockchain
            </Link>
            <Link href="/cloud" className="block px-4 py-2 text-gray-300 hover:text-white">
              Cloud Services
            </Link>
            <Link href="/cybersecurity" className="block px-4 py-2 text-gray-300 hover:text-white">
              Cybersecurity
            </Link>
            <Link href="/contact" className="block px-4 py-2 text-gray-300 hover:text-white">
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
