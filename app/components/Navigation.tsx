'use client''',
import React, { useState } from 'react''',
import Link from 'next/link''',
import { Metadata } from 'next''',

export const metadata: Metadata = {title: 'Navigation - Zion Tech Group''',
  description: 'Comprehensive navigation solutions for modern businesses.''',
  keywords: 'navigatio''',n, AI solutions, technology services''',
  openGraph: {
    title: 'Navigation - Zion Tech Group''',
    description: 'Comprehensive navigation solutions for modern businesses.''',
    type: 'website''',
    url: 'https://ziontechgroup.com/components'}'',
};

const NavigationPage = () => {const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)};
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"><div className="text-center"><h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Navigation
          </h1><p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive navigation solutions for modern businesses.
          </p><div className="flex flex-col sm:flex-row gap-4 justify-center"><a href="/contact" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
              Get Started
            </a><a href="/services" className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">
              Learn More
            </a></div></div>
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden"><div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t"><Link
                href="/""",
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors""",
                onClick={toggleMenu}
              >
                Home
              </Link><Link
                href="/services""",
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors""",
                onClick={toggleMenu}
              >
                Services
              </Link><Link
                href="/about""",
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors""",
                onClick={toggleMenu}
              >
                About
              </Link><Link
                href="/contact""",
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors""",
                onClick={toggleMenu}
              >
                Contact
              </Link><Link
                href="/pricing""",
                className="bg-blue-600 text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700 transition-colors""",
                onClick={toggleMenu}
              >
                Pricing
              </Link></div></div>
        )}
      </div></div>
  );
};

export default NavigationPage;
