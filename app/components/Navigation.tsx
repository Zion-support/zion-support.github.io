import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-neon-blue/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 group">
              <h1 className="text-2xl md:text-3xl font-bold holographic group-hover:scale-105 transition-transform duration-300">
                ZION TECH GROUP
              </h1>
            </Link>
          </div>
          
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-neon-blue px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-neon-blue/10">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-neon-purple px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-neon-purple/10">
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="text-gray-300 hover:text-neon-blue px-4 py-2 rounded-md text-sm font-medium flex items-center transition-all duration-300 hover:bg-neon-blue/10">
                Services
                <svg className="ml-2 h-4 w-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-80 bg-black/95 backdrop-blur-md rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border border-neon-blue/30">
                <div className="py-4">
                  <div className="px-4 py-2 text-xs font-bold text-neon-blue uppercase tracking-wider">AI Services</div>
                  <Link to="/ai-services" className="block px-4 py-2 text-sm text-gray-300 hover:text-neon-blue hover:bg-neon-blue/10 transition-all duration-200">AI Development & Consulting</Link>
                  <Link to="/ai-content-generator" className="block px-4 py-2 text-sm text-gray-300 hover:text-neon-blue hover:bg-neon-blue/10 transition-all duration-200">AI Content Generator</Link>
                  
                  <div className="px-4 py-2 text-xs font-bold text-neon-purple uppercase tracking-wider mt-4">IT Solutions</div>
                  <Link to="/it-services" className="block px-4 py-2 text-sm text-gray-300 hover:text-neon-purple hover:bg-neon-purple/10 transition-all duration-200">IT Services</Link>
                  <Link to="/cloud-infrastructure" className="block px-4 py-2 text-sm text-gray-300 hover:text-neon-purple hover:bg-neon-purple/10 transition-all duration-200">Cloud Infrastructure</Link>
                  <Link to="/digital-transformation" className="block px-4 py-2 text-sm text-gray-300 hover:text-neon-purple hover:bg-neon-purple/10 transition-all duration-200">Digital Transformation</Link>
                  
                  <div className="px-4 py-2 text-xs font-bold text-neon-green uppercase tracking-wider mt-4">Development</div>
                  <Link to="/web-development" className="block px-4 py-2 text-sm text-gray-300 hover:text-neon-green hover:bg-neon-green/10 transition-all duration-200">Web Development</Link>
                  <Link to="/mobile-development" className="block px-4 py-2 text-sm text-gray-300 hover:text-neon-green hover:bg-neon-green/10 transition-all duration-200">Mobile Development</Link>
                </div>
              </div>
            </div>

            {/* Micro SAAS Dropdown */}
            <div className="relative group">
              <button className="text-gray-300 hover:text-neon-green px-4 py-2 rounded-md text-sm font-medium flex items-center transition-all duration-300 hover:bg-neon-green/10">
                Micro SAAS
                <svg className="ml-2 h-4 w-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-96 bg-black/95 backdrop-blur-md rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border border-neon-green/30">
                <div className="py-4">
                  <div className="px-4 py-2 text-xs font-bold text-neon-green uppercase tracking-wider">Popular Solutions</div>
                  <Link to="/micro-saas-solutions" className="block px-4 py-2 text-sm text-gray-300 hover:text-neon-green hover:bg-neon-green/10 transition-all duration-200">Zion AI CRM Pro</Link>
                  <Link to="/micro-saas-solutions" className="block px-4 py-2 text-sm text-gray-300 hover:text-neon-green hover:bg-neon-green/10 transition-all duration-200">Zion AI Analytics Suite</Link>
                  <Link to="/micro-saas-solutions" className="block px-4 py-2 text-sm text-gray-300 hover:text-neon-green hover:bg-neon-green/10 transition-all duration-200">Zion AI Marketing Automation</Link>
                  <Link to="/micro-saas-solutions" className="block px-4 py-2 text-sm text-gray-300 hover:text-neon-green hover:bg-neon-green/10 transition-all duration-200">Zion AI HR Management</Link>
                  <Link to="/micro-saas-solutions" className="block px-4 py-2 text-sm text-gray-300 hover:text-neon-green hover:bg-neon-green/10 transition-all duration-200">View All Solutions →</Link>
                </div>
              </div>
            </div>

            {/* AI Tools Dropdown */}
            <div className="relative group">
              <button className="text-gray-300 hover:text-neon-pink px-4 py-2 rounded-md text-sm font-medium flex items-center transition-all duration-300 hover:bg-neon-pink/10">
                AI Tools
                <svg className="ml-2 h-4 w-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-80 bg-black/95 backdrop-blur-md rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border border-neon-pink/30">
                <div className="py-4">
                  <div className="px-4 py-2 text-xs font-bold text-neon-pink uppercase tracking-wider">AI Tools</div>
                  <Link to="/zion-ai-content-moderator" className="block px-4 py-2 text-sm text-gray-300 hover:text-neon-pink hover:bg-neon-pink/10 transition-all duration-200">Content Moderator</Link>
                  <Link to="/zion-ai-customer-churn-predictor" className="block px-4 py-2 text-sm text-gray-300 hover:text-neon-pink hover:bg-neon-pink/10 transition-all duration-200">Customer Churn Predictor</Link>
                  <Link to="/zion-ai-sales-predictor" className="block px-4 py-2 text-sm text-gray-300 hover:text-neon-pink hover:bg-neon-pink/10 transition-all duration-200">Sales Predictor</Link>
                  <Link to="/zion-ai-workflow-automator" className="block px-4 py-2 text-sm text-gray-300 hover:text-neon-pink hover:bg-neon-pink/10 transition-all duration-200">Workflow Automator</Link>
                  <Link to="/zion-ai-financial-forecaster" className="block px-4 py-2 text-sm text-gray-300 hover:text-neon-pink hover:bg-neon-pink/10 transition-all duration-200">Financial Forecaster</Link>
                  <Link to="/ai-content-generator" className="block px-4 py-2 text-sm text-gray-300 hover:text-neon-pink hover:bg-neon-pink/10 transition-all duration-200">AI Content Generator</Link>
                </div>
              </div>
            </div>

            <Link to="/pricing" className="text-gray-300 hover:text-neon-orange px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-neon-orange/10">
              Pricing
            </Link>
            <Link to="/contact" className="neon-button text-sm">
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-neon-blue focus:outline-none focus:text-neon-blue transition-colors duration-300"
            >
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-md border-t border-neon-blue/30">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <Link to="/" className="text-gray-300 hover:text-neon-blue block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-neon-purple block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">
              About
            </Link>
            
            <div className="px-3 py-2 text-base font-medium text-neon-blue">Services</div>
            <div className="pl-6 space-y-1">
              <Link to="/ai-services" className="text-gray-400 hover:text-neon-blue block px-3 py-2 rounded-md text-sm transition-colors duration-300">AI Services</Link>
              <Link to="/it-services" className="text-gray-400 hover:text-neon-purple block px-3 py-2 rounded-md text-sm transition-colors duration-300">IT Services</Link>
              <Link to="/cloud-infrastructure" className="text-gray-400 hover:text-neon-green block px-3 py-2 rounded-md text-sm transition-colors duration-300">Cloud Infrastructure</Link>
              <Link to="/digital-transformation" className="text-gray-400 hover:text-neon-pink block px-3 py-2 rounded-md text-sm transition-colors duration-300">Digital Transformation</Link>
            </div>
            
            <div className="px-3 py-2 text-base font-medium text-neon-green">Micro SAAS</div>
            <div className="pl-6 space-y-1">
              <Link to="/micro-saas-solutions" className="text-gray-400 hover:text-neon-green block px-3 py-2 rounded-md text-sm transition-colors duration-300">All Solutions</Link>
            </div>
            
            <div className="px-3 py-2 text-base font-medium text-neon-pink">AI Tools</div>
            <div className="pl-6 space-y-1">
              <Link to="/zion-ai-content-moderator" className="text-gray-400 hover:text-neon-pink block px-3 py-2 rounded-md text-sm transition-colors duration-300">Content Moderator</Link>
              <Link to="/zion-ai-sales-predictor" className="text-gray-400 hover:text-neon-pink block px-3 py-2 rounded-md text-sm transition-colors duration-300">Sales Predictor</Link>
              <Link to="/zion-ai-workflow-automator" className="text-gray-400 hover:text-neon-pink block px-3 py-2 rounded-md text-sm transition-colors duration-300">Workflow Automator</Link>
            </div>
            
            <Link to="/pricing" className="text-gray-300 hover:text-neon-orange block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">
              Pricing
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-neon-blue block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;