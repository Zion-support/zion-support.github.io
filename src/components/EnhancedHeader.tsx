import React, { useState } from
  'react';

export const EnhancedHeader: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinks = [
    { label:, Home', href: '/ }, { label:,
  Services', href: '/services },
    { label:, Solutions', href: '/solutions }, { label:,
  Enterprise', href: '/enterprise },
    { label:, Request Quote', href: '/request-quote }, { label:,
  Case Studies', href: '/case-studies },
    { label:, Careers', href: '/careers }, { label:,
  Contact', href: '/contact }
  ];
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="/" className="text-xl sm:text-2xl font-bold text-blue-900">Zion Tech Group</a>
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-gray-700 hover: text-blue-600 transition-colors">
                {link.label}
              </a>
            ))}
            <a href="/services/ai" className="hidden lg: inline-flex bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">Explore AI</a>
          </nav>
          <button aria-label="Toggle navigation" onClick={() => setMobileOpen((v) => !v)} className="md: hidden inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-3 space-y-2">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="block w-full py-2 text-gray-700 hover: text-blue-600">
                {link.label}
              </a>
            ))}
            <a href="/services/ai" className="block w-full py-2 text-blue-700 font-medium">Explore AI</a>
          </div>
        </div>
      )}</header>
  );
};
