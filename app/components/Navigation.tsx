'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <Link href="/about" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                About
              </Link>
              <Link href="/5g-implementation" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                5G Implementation
              </Link>
              <Link href="/contact" className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </Link>
            </div>
          </div>

<<<<<<< HEAD
=======
            {/* IT Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('it-services')}
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center">
                IT Services
              </button>
            </div>
            <div className="relative">
              <button
                onClick={toggleMenu}
                className="text-gray-300 hover:text-white p-2 rounded-md">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
              {activeDropdown === 'solutions' && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-slate-800 rounded-lg shadow-lg border border-white/10">
                  <Link to="/ai-solutions" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-700 rounded-t-lg">
                    AI Solutions
                  </Link>
                  <Link to="/cloud-solutions" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-700">
                    Cloud Solutions
                  </Link>
                  <Link to="/enterprise-solutions" className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-slate-700">
                    Enterprise Solutions
                  </Link>
                </div>
              )}
            </div>
            <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>
            <Link to="/demo" className="bg-cyan-500 text-white px-4 py-2 rounded-lg hover:bg-cyan-600 transition-colors">
              Demo
            </Link>
          </div>
          
          {/* Mobile menu button */}
>>>>>>> cursor/fix-errors-and-merge-to-main-52bd
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-900 hover:text-blue-600 focus:outline-none focus:text-blue-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
<<<<<<< HEAD
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <Link href="/" className="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
              About
            </Link>
            <Link href="/5g-implementation" className="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
              5G Implementation
            </Link>
            <Link href="/contact" className="text-gray-900 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
              Contact
            </Link>
          </div>
        </div>
      )}
=======
          
          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800">
                <Link to="/" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Home
                </Link>
                <Link to="/ai-services" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  AI Services
                </Link>
                <Link to="/it-services" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  IT Services
                </Link>
                <Link to="/about" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  About
                </Link>
                <Link to="/contact" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                  Contact
                </Link>
                <Link to="/demo" className="block px-3 py-2 bg-cyan-500 text-white rounded-md hover:bg-cyan-600">
                  Demo
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
>>>>>>> cursor/fix-errors-and-merge-to-main-52bd
    </nav>
  );
};

export default Navigation;