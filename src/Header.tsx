import React from 'react';
import NotificationSystem from './components/NotificationSystem';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      {/* Promotional Banner */}
      <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-4 text-sm">
            <span className="animate-pulse">🚀</span>
            <span className="font-semibold">NEW: Revolutionary Tech Content 2025 - Ultimate Breakthrough, Tech Showcase & Innovation Hub</span>
            <a href="/pages/UltimateTechBreakthrough2025" className="bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full transition-colors font-medium">
              Explore Now →
            </a>
            <span className="animate-pulse">🚀</span>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </a>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="/" className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Home
            </a>
            <div className="relative group">
              <button className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center">
                New Content 2025
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <a href="/pages/UltimateTechBreakthrough2025" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600">
                    🚀 Ultimate Tech Breakthrough 2025
                  </a>
                  <a href="/pages/RevolutionaryTechShowcase2025" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600">
                    ⚡ Revolutionary Tech Showcase 2025
                  </a>
                  <a href="/pages/NextGenInnovationHub2025" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600">
                    🌌 Next-Gen Innovation Hub 2025
                  </a>
                </div>
              </div>
            </div>
            <a href="/pages/InnovationLanding2025" className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Innovation
            </a>
            <a href="/pages/ComprehensiveServices2025" className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Services
            </a>
            <a href="/pages/RevolutionaryTechBlog2026" className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Blog
            </a>
            <a href="/contact" className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Contact
            </a>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            <NotificationSystem />
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300 font-medium">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;