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
            <span className="font-semibold">NEW: Revolutionary AI Services 2025 - Autonomous Agents, Quantum Processing & Neural Interfaces</span>
            <a href="/pages/RevolutionaryAIServices2025" className="bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full transition-colors font-medium">
              Explore AI Services →
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
          <nav className="hidden md:flex space-x-6">
            <a href="/" className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Home
            </a>
            <div className="relative group">
              <button className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center">
                AI Services
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <a href="/pages/RevolutionaryAIServices2025" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600">
                    🤖 Revolutionary AI Services
                  </a>
                  <a href="/pages/AdvancedAITransformation2025" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600">
                    ⚡ AI Transformation
                  </a>
                  <a href="/pages/ConsciousnessComputingRevolution2030" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600">
                    🌟 Conscious AI Systems
                  </a>
                </div>
              </div>
            </div>
            <div className="relative group">
              <button className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center">
                Technology
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <a href="/pages/QuantumComputingRevolution2025" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600">
                    ⚡ Quantum Computing
                  </a>
                  <a href="/pages/NeuralInterfaceRevolution2025" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600">
                    🧠 Neural Interfaces
                  </a>
                  <a href="/pages/InterdimensionalTechRevolution2035" className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-600">
                    🌌 Interdimensional Tech
                  </a>
                </div>
              </div>
            </div>
            <a href="/pages/RevolutionaryCaseStudies2025" className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Case Studies
            </a>
            <a href="/pages/InnovationLanding2025" className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Innovation
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