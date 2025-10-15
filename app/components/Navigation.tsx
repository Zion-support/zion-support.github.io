import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 backdrop-blur-sm border-b border-cyan-500/20">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5 animate-pulse"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 group">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-purple-400 transition-all duration-300">
                Zion Tech Group
              </h1>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-cyan-400 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-cyan-500/10">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-cyan-400 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-cyan-500/10">
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="text-gray-300 hover:text-cyan-400 px-4 py-2 rounded-lg text-sm font-medium flex items-center transition-all duration-300 hover:bg-cyan-500/10">
                Services
                <svg className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-80 bg-gradient-to-br from-gray-800/95 to-gray-900/95 backdrop-blur-sm rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border border-cyan-500/20">
                <div className="p-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-cyan-400 font-semibold text-sm mb-3">AI Services</h3>
                      <div className="space-y-2">
                        <Link to="/ai-services" className="block px-3 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-200">AI Solutions</Link>
                        <Link to="/ai-content-generator" className="block px-3 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-200">Content Generator</Link>
                        <Link to="/data-analytics" className="block px-3 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-200">Data Analytics</Link>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-blue-400 font-semibold text-sm mb-3">IT Services</h3>
                      <div className="space-y-2">
                        <Link to="/it-services" className="block px-3 py-2 text-sm text-gray-300 hover:text-blue-400 hover:bg-blue-500/10 rounded-lg transition-all duration-200">IT Solutions</Link>
                        <Link to="/cloud-infrastructure" className="block px-3 py-2 text-sm text-gray-300 hover:text-blue-400 hover:bg-blue-500/10 rounded-lg transition-all duration-200">Cloud Infrastructure</Link>
                        <Link to="/web-development" className="block px-3 py-2 text-sm text-gray-300 hover:text-blue-400 hover:bg-blue-500/10 rounded-lg transition-all duration-200">Web Development</Link>
                        <Link to="/mobile-development" className="block px-3 py-2 text-sm text-gray-300 hover:text-blue-400 hover:bg-blue-500/10 rounded-lg transition-all duration-200">Mobile Development</Link>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-700">
                    <Link to="/digital-transformation" className="block px-3 py-2 text-sm text-gray-300 hover:text-purple-400 hover:bg-purple-500/10 rounded-lg transition-all duration-200">Digital Transformation</Link>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Tools Dropdown */}
            <div className="relative group">
              <button className="text-gray-300 hover:text-purple-400 px-4 py-2 rounded-lg text-sm font-medium flex items-center transition-all duration-300 hover:bg-purple-500/10">
                AI Tools
                <svg className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-80 bg-gradient-to-br from-gray-800/95 to-gray-900/95 backdrop-blur-sm rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border border-purple-500/20">
                <div className="p-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-cyan-400 font-semibold text-sm mb-3">Content & Marketing</h3>
                      <div className="space-y-2">
                        <Link to="/zion-ai-content-moderator" className="block px-3 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-200">Content Moderator</Link>
                        <Link to="/zion-ai-email-marketing-pro" className="block px-3 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-200">Email Marketing Pro</Link>
                        <Link to="/zion-ai-social-scheduler-pro" className="block px-3 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-200">Social Scheduler Pro</Link>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-blue-400 font-semibold text-sm mb-3">Business Intelligence</h3>
                      <div className="space-y-2">
                        <Link to="/zion-ai-sales-predictor" className="block px-3 py-2 text-sm text-gray-300 hover:text-blue-400 hover:bg-blue-500/10 rounded-lg transition-all duration-200">Sales Predictor</Link>
                        <Link to="/zion-ai-customer-churn-predictor" className="block px-3 py-2 text-sm text-gray-300 hover:text-blue-400 hover:bg-blue-500/10 rounded-lg transition-all duration-200">Churn Predictor</Link>
                        <Link to="/zion-ai-financial-forecaster" className="block px-3 py-2 text-sm text-gray-300 hover:text-blue-400 hover:bg-blue-500/10 rounded-lg transition-all duration-200">Financial Forecaster</Link>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-700">
                    <h3 className="text-purple-400 font-semibold text-sm mb-3">Automation</h3>
                    <div className="grid grid-cols-2 gap-2">
                      <Link to="/zion-ai-workflow-automator" className="block px-3 py-2 text-sm text-gray-300 hover:text-purple-400 hover:bg-purple-500/10 rounded-lg transition-all duration-200">Workflow Automator</Link>
                      <Link to="/zion-ai-task-scheduler" className="block px-3 py-2 text-sm text-gray-300 hover:text-purple-400 hover:bg-purple-500/10 rounded-lg transition-all duration-200">Task Scheduler</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Link to="/pricing" className="text-gray-300 hover:text-green-400 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-green-500/10">
              Pricing
            </Link>
            <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
              Contact
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-cyan-400 focus:outline-none focus:text-cyan-400 p-2 rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gradient-to-br from-gray-800/95 to-gray-900/95 backdrop-blur-sm border-t border-cyan-500/20">
          <div className="px-4 pt-4 pb-6 space-y-2">
            <Link to="/" className="text-gray-300 hover:text-cyan-400 block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 hover:bg-cyan-500/10">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-cyan-400 block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 hover:bg-cyan-500/10">
              About
            </Link>
            
            <div className="px-4 py-2 text-base font-medium text-cyan-400 border-l-2 border-cyan-400">
              Services
            </div>
            <div className="pl-6 space-y-2">
              <Link to="/ai-services" className="text-gray-400 hover:text-cyan-400 block px-4 py-2 rounded-lg text-sm transition-all duration-300 hover:bg-cyan-500/10">AI Services</Link>
              <Link to="/it-services" className="text-gray-400 hover:text-blue-400 block px-4 py-2 rounded-lg text-sm transition-all duration-300 hover:bg-blue-500/10">IT Services</Link>
              <Link to="/cloud-infrastructure" className="text-gray-400 hover:text-green-400 block px-4 py-2 rounded-lg text-sm transition-all duration-300 hover:bg-green-500/10">Cloud Infrastructure</Link>
              <Link to="/digital-transformation" className="text-gray-400 hover:text-purple-400 block px-4 py-2 rounded-lg text-sm transition-all duration-300 hover:bg-purple-500/10">Digital Transformation</Link>
              <Link to="/data-analytics" className="text-gray-400 hover:text-yellow-400 block px-4 py-2 rounded-lg text-sm transition-all duration-300 hover:bg-yellow-500/10">Data Analytics</Link>
            </div>
            
            <div className="px-4 py-2 text-base font-medium text-purple-400 border-l-2 border-purple-400">
              AI Tools
            </div>
            <div className="pl-6 space-y-2">
              <Link to="/zion-ai-content-moderator" className="text-gray-400 hover:text-cyan-400 block px-4 py-2 rounded-lg text-sm transition-all duration-300 hover:bg-cyan-500/10">Content Moderator</Link>
              <Link to="/zion-ai-customer-churn-predictor" className="text-gray-400 hover:text-blue-400 block px-4 py-2 rounded-lg text-sm transition-all duration-300 hover:bg-blue-500/10">Churn Predictor</Link>
              <Link to="/zion-ai-sales-predictor" className="text-gray-400 hover:text-green-400 block px-4 py-2 rounded-lg text-sm transition-all duration-300 hover:bg-green-500/10">Sales Predictor</Link>
              <Link to="/zion-ai-workflow-automator" className="text-gray-400 hover:text-purple-400 block px-4 py-2 rounded-lg text-sm transition-all duration-300 hover:bg-purple-500/10">Workflow Automator</Link>
              <Link to="/zion-ai-financial-forecaster" className="text-gray-400 hover:text-yellow-400 block px-4 py-2 rounded-lg text-sm transition-all duration-300 hover:bg-yellow-500/10">Financial Forecaster</Link>
            </div>
            
            <Link to="/pricing" className="text-gray-300 hover:text-green-400 block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 hover:bg-green-500/10">
              Pricing
            </Link>
            <Link to="/contact" className="block w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center px-4 py-3 rounded-lg text-base font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 mt-4">
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;