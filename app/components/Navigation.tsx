import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-blue-600">
            Zion Tech Group
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              About
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Services
            </Link>
            <Link to="/enterprise" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Enterprise
            </Link>
            <Link to="/team" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Team
            </Link>
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 transition-colors font-medium flex items-center">
                Guides
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <Link to="/guides/ai-2026-implementation-roadmap" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    AI 2026 Implementation Roadmap
                  </Link>
                  <Link to="/guides/ai-2027-implementation-roadmap" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    AI 2027 Implementation Roadmap
                  </Link>
                  <Link to="/guides/autonomous-business-processes-implementation-guide-2026" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    Autonomous Business Processes Guide
                  </Link>
                </div>
              </div>
            </div>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-blue-600"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium" onClick={() => setIsOpen(false)}>
                Home
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium" onClick={() => setIsOpen(false)}>
                About
              </Link>
              <Link to="/services" className="text-gray-700 hover:text-blue-600 transition-colors font-medium" onClick={() => setIsOpen(false)}>
                Services
              </Link>
              <Link to="/enterprise" className="text-gray-700 hover:text-blue-600 transition-colors font-medium" onClick={() => setIsOpen(false)}>
                Enterprise
              </Link>
              <Link to="/team" className="text-gray-700 hover:text-blue-600 transition-colors font-medium" onClick={() => setIsOpen(false)}>
                Team
              </Link>
              <div className="pl-4">
                <div className="text-sm font-semibold text-gray-500 mb-2">Guides</div>
                <Link to="/guides/ai-2026-implementation-roadmap" className="block text-gray-700 hover:text-blue-600 transition-colors font-medium mb-2" onClick={() => setIsOpen(false)}>
                  AI 2026 Implementation Roadmap
                </Link>
                <Link to="/guides/ai-2027-implementation-roadmap" className="block text-gray-700 hover:text-blue-600 transition-colors font-medium mb-2" onClick={() => setIsOpen(false)}>
                  AI 2027 Implementation Roadmap
                </Link>
                <Link to="/guides/autonomous-business-processes-implementation-guide-2026" className="block text-gray-700 hover:text-blue-600 transition-colors font-medium mb-2" onClick={() => setIsOpen(false)}>
                  Autonomous Business Processes Guide
                </Link>
              </div>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
