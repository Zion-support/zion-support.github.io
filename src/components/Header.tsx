import React from 'react';

interface HeaderProps {
  onMenuClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onMenuClick }) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-gray-900">
                Zion Tech Group
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Home
            </a>
            <a href="/services" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Services
            </a>
            <a href="/ai-solutions" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              AI Solutions
            </a>
            <a href="/case-studies" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Case Studies
            </a>
            <a href="/resources" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Resources
            </a>
            <a href="/about" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              About
            </a>
            <a href="/contact" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Contact
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={onMenuClick}
              className="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900"
              aria-label="Open menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};