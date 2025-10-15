import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="glass-effect shadow-lg border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-2xl font-bold neon-text">Zion Tech Group</h1>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-white hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              About
            </Link>
            <div className="relative group">
              <button className="text-white hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors">
                Services
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-64 glass-card rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-1">
                  <Link to="/ai-services" className="block px-4 py-2 text-sm text-white hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors">AI Services</Link>
                  <Link to="/comprehensive-ai-services" className="block px-4 py-2 text-sm text-white hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors">Comprehensive AI</Link>
                  <Link to="/it-services" className="block px-4 py-2 text-sm text-white hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors">IT Services</Link>
                  <Link to="/comprehensive-it-services" className="block px-4 py-2 text-sm text-white hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors">Comprehensive IT</Link>
                  <Link to="/cloud-infrastructure" className="block px-4 py-2 text-sm text-white hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors">Cloud Infrastructure</Link>
                  <Link to="/digital-transformation" className="block px-4 py-2 text-sm text-white hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors">Digital Transformation</Link>
                  <Link to="/data-analytics" className="block px-4 py-2 text-sm text-white hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors">Data Analytics</Link>
                  <Link to="/web-development" className="block px-4 py-2 text-sm text-white hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors">Web Development</Link>
                  <Link to="/mobile-development" className="block px-4 py-2 text-sm text-white hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors">Mobile Development</Link>
                </div>
              </div>
            </div>
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium flex items-center">
                AI Tools
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-80 glass-card rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-1">
                  <div className="px-4 py-2 text-xs font-semibold text-cyan-400 uppercase tracking-wider">New AI Tools</div>
                  <Link to="/ai-chatbot-builder" className="block px-4 py-2 text-sm text-white hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors">Chatbot Builder</Link>
                  <Link to="/ai-form-builder" className="block px-4 py-2 text-sm text-white hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors">Form Builder</Link>
                  <Link to="/ai-video-generator" className="block px-4 py-2 text-sm text-white hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors">Video Generator</Link>
                  <div className="px-4 py-2 text-xs font-semibold text-cyan-400 uppercase tracking-wider mt-2">Advanced Tools</div>
                  <Link to="/zion-ai-content-moderator" className="block px-4 py-2 text-sm text-white hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors">Content Moderator</Link>
                  <Link to="/zion-ai-customer-churn-predictor" className="block px-4 py-2 text-sm text-white hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors">Churn Predictor</Link>
                  <Link to="/zion-ai-sales-predictor" className="block px-4 py-2 text-sm text-white hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors">Sales Predictor</Link>
                  <Link to="/zion-ai-workflow-automator" className="block px-4 py-2 text-sm text-white hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors">Workflow Automator</Link>
                </div>
              </div>
            </div>
            <Link to="/pricing" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              Pricing
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              Contact
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="text-white hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors">
              About
            </Link>
            <div className="px-3 py-2 text-base font-medium text-cyan-400">
              Services
            </div>
            <div className="pl-6 space-y-1">
              <Link to="/ai-services" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-sm transition-colors">AI Services</Link>
              <Link to="/comprehensive-ai-services" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-sm transition-colors">Comprehensive AI</Link>
              <Link to="/it-services" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-sm transition-colors">IT Services</Link>
              <Link to="/comprehensive-it-services" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-sm transition-colors">Comprehensive IT</Link>
              <Link to="/cloud-infrastructure" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-sm transition-colors">Cloud Infrastructure</Link>
            </div>
            <div className="px-3 py-2 text-base font-medium text-cyan-400">
              AI Tools
            </div>
            <div className="pl-6 space-y-1">
              <Link to="/ai-chatbot-builder" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-sm transition-colors">Chatbot Builder</Link>
              <Link to="/ai-form-builder" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-sm transition-colors">Form Builder</Link>
              <Link to="/ai-video-generator" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-sm transition-colors">Video Generator</Link>
              <Link to="/zion-ai-content-moderator" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-sm transition-colors">Content Moderator</Link>
            </div>
            <Link to="/pricing" className="text-white hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors">
              Pricing
            </Link>
            <Link to="/contact" className="text-white hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;