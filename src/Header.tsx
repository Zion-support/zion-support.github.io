import React from 'react';
import { Link } from 'react-router-dom';
import NotificationSystem from './components/NotificationSystem';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-200">
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
            <Link to="/" className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Home
            </Link>
            <Link to="/pages/RevolutionaryTechShowcase2026" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Revolutionary Tech
            </Link>
            <Link to="/pages/AIBusinessAutomation2026" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              AI Automation
            </Link>
            <Link to="/pages/QuantumNeuralFusion2026" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Quantum-Neural
            </Link>
            <Link to="/pages/ComprehensiveTechInsights2026" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
              Tech Insights
            </Link>
          </nav>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col space-y-2">
              <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
              <Link to="/about" className="text-gray-600 hover:text-gray-900">About</Link>
              <Link to="/services" className="text-gray-600 hover:text-gray-900">Services</Link>
              <Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact</Link>
            </div>
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
