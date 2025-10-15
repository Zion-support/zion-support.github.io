import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900/95 backdrop-blur-md border-b border-cyan-500/20 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 group">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:to-purple-300 transition-all duration-300">
                Zion Tech Group
              </h1>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-cyan-500/10">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-cyan-500/10">
              About
            </Link>
            <div className="relative group">
              <button className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium flex items-center transition-all duration-300 hover:bg-cyan-500/10">
                Services
                <svg className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-72 bg-gray-800/95 backdrop-blur-md rounded-xl shadow-2xl border border-cyan-500/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-2">
                  <Link to="/ai-services" className="block px-4 py-3 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300">AI Services</Link>
                  <Link to="/it-services" className="block px-4 py-3 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300">IT Services</Link>
                  <Link to="/cloud-infrastructure" className="block px-4 py-3 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300">Cloud Infrastructure</Link>
                  <Link to="/digital-transformation" className="block px-4 py-3 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300">Digital Transformation</Link>
                  <Link to="/data-analytics" className="block px-4 py-3 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300">Data Analytics</Link>
                  <Link to="/web-development" className="block px-4 py-3 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300">Web Development</Link>
                  <Link to="/mobile-development" className="block px-4 py-3 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300">Mobile Development</Link>
                  <Link to="/micro-saas-solutions" className="block px-4 py-3 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300">Micro SAAS Solutions</Link>
                </div>
              </div>
            </div>
            <div className="relative group">
              <button className="text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium flex items-center transition-all duration-300 hover:bg-purple-500/10">
                AI Tools
                <svg className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-80 bg-gray-800/95 backdrop-blur-md rounded-xl shadow-2xl border border-purple-500/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="py-2">
                  <Link to="/zion-ai-content-moderator" className="block px-4 py-3 text-sm text-gray-300 hover:text-purple-400 hover:bg-purple-500/10 transition-all duration-300">Content Moderator</Link>
                  <Link to="/zion-ai-customer-churn-predictor" className="block px-4 py-3 text-sm text-gray-300 hover:text-purple-400 hover:bg-purple-500/10 transition-all duration-300">Customer Churn Predictor</Link>
                  <Link to="/zion-ai-customer-sentiment-tracker" className="block px-4 py-3 text-sm text-gray-300 hover:text-purple-400 hover:bg-purple-500/10 transition-all duration-300">Sentiment Tracker</Link>
                  <Link to="/zion-ai-document-analyzer" className="block px-4 py-3 text-sm text-gray-300 hover:text-purple-400 hover:bg-purple-500/10 transition-all duration-300">Document Analyzer</Link>
                  <Link to="/zion-ai-financial-forecaster" className="block px-4 py-3 text-sm text-gray-300 hover:text-purple-400 hover:bg-purple-500/10 transition-all duration-300">Financial Forecaster</Link>
                  <Link to="/zion-ai-sales-predictor" className="block px-4 py-3 text-sm text-gray-300 hover:text-purple-400 hover:bg-purple-500/10 transition-all duration-300">Sales Predictor</Link>
                  <Link to="/zion-ai-workflow-automator" className="block px-4 py-3 text-sm text-gray-300 hover:text-purple-400 hover:bg-purple-500/10 transition-all duration-300">Workflow Automator</Link>
                  <Link to="/zion-ai-email-marketing-pro" className="block px-4 py-3 text-sm text-gray-300 hover:text-purple-400 hover:bg-purple-500/10 transition-all duration-300">Email Marketing Pro</Link>
                  <Link to="/zion-ai-task-scheduler" className="block px-4 py-3 text-sm text-gray-300 hover:text-purple-400 hover:bg-purple-500/10 transition-all duration-300">Task Scheduler</Link>
                </div>
              </div>
            </div>
            <Link to="/pricing" className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-cyan-500/10">
              Pricing
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-cyan-500/10">
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
        <div className="md:hidden bg-gray-800/95 backdrop-blur-md border-t border-cyan-500/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:bg-cyan-500/10">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:bg-cyan-500/10">
              About
            </Link>
            <div className="px-3 py-2 text-base font-medium text-cyan-400">
              Services
            </div>
            <div className="pl-6 space-y-1">
              <Link to="/ai-services" className="text-gray-400 hover:text-cyan-400 block px-3 py-2 rounded-md text-sm transition-all duration-300 hover:bg-cyan-500/10">AI Services</Link>
              <Link to="/it-services" className="text-gray-400 hover:text-cyan-400 block px-3 py-2 rounded-md text-sm transition-all duration-300 hover:bg-cyan-500/10">IT Services</Link>
              <Link to="/cloud-infrastructure" className="text-gray-400 hover:text-cyan-400 block px-3 py-2 rounded-md text-sm transition-all duration-300 hover:bg-cyan-500/10">Cloud Infrastructure</Link>
              <Link to="/digital-transformation" className="text-gray-400 hover:text-cyan-400 block px-3 py-2 rounded-md text-sm transition-all duration-300 hover:bg-cyan-500/10">Digital Transformation</Link>
              <Link to="/micro-saas-solutions" className="text-gray-400 hover:text-cyan-400 block px-3 py-2 rounded-md text-sm transition-all duration-300 hover:bg-cyan-500/10">Micro SAAS Solutions</Link>
            </div>
            <div className="px-3 py-2 text-base font-medium text-purple-400">
              AI Tools
            </div>
            <div className="pl-6 space-y-1">
              <Link to="/zion-ai-content-moderator" className="text-gray-400 hover:text-purple-400 block px-3 py-2 rounded-md text-sm transition-all duration-300 hover:bg-purple-500/10">Content Moderator</Link>
              <Link to="/zion-ai-customer-churn-predictor" className="text-gray-400 hover:text-purple-400 block px-3 py-2 rounded-md text-sm transition-all duration-300 hover:bg-purple-500/10">Churn Predictor</Link>
              <Link to="/zion-ai-sales-predictor" className="text-gray-400 hover:text-purple-400 block px-3 py-2 rounded-md text-sm transition-all duration-300 hover:bg-purple-500/10">Sales Predictor</Link>
              <Link to="/zion-ai-workflow-automator" className="text-gray-400 hover:text-purple-400 block px-3 py-2 rounded-md text-sm transition-all duration-300 hover:bg-purple-500/10">Workflow Automator</Link>
            </div>
            <Link to="/pricing" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:bg-cyan-500/10">
              Pricing
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:bg-cyan-500/10">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;