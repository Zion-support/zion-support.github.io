import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { contactInfo } from '../data/contactData';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-dark-surface border-b border-neon-blue border-opacity-30 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 group">
              <h1 className="text-2xl font-bold text-white group-hover:text-neon-blue transition-colors duration-300">
                Zion Tech Group
              </h1>
            </Link>
          </div>
          
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-neon-blue px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-neon-blue px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="text-gray-300 hover:text-neon-blue px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors duration-300">
                Services
                <svg className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-80 bg-dark-surface-light rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border border-neon-blue border-opacity-30">
                <div className="py-4">
                  <div className="px-4 py-2">
                    <h3 className="text-sm font-semibold text-neon-blue uppercase tracking-wider mb-2">Micro SaaS</h3>
                    <div className="space-y-1">
                      <Link to="/micro-saas-solutions" className="block px-4 py-2 text-sm text-gray-300 hover:text-neon-blue hover:bg-dark-surface transition-colors duration-200 rounded-lg">
                        All Micro SaaS Solutions
                      </Link>
                      <Link to="/zion-ai-content-moderator" className="block px-4 py-2 text-sm text-gray-300 hover:text-neon-blue hover:bg-dark-surface transition-colors duration-200 rounded-lg">
                        Content Moderator
                      </Link>
                      <Link to="/zion-ai-sales-predictor" className="block px-4 py-2 text-sm text-gray-300 hover:text-neon-blue hover:bg-dark-surface transition-colors duration-200 rounded-lg">
                        Sales Predictor
                      </Link>
                      <Link to="/zion-ai-workflow-automator" className="block px-4 py-2 text-sm text-gray-300 hover:text-neon-blue hover:bg-dark-surface transition-colors duration-200 rounded-lg">
                        Workflow Automator
                      </Link>
                    </div>
                  </div>
                  <div className="border-t border-gray-600 my-2"></div>
                  <div className="px-4 py-2">
                    <h3 className="text-sm font-semibold text-neon-purple uppercase tracking-wider mb-2">IT Services</h3>
                    <div className="space-y-1">
                      <Link to="/it-services" className="block px-4 py-2 text-sm text-gray-300 hover:text-neon-purple hover:bg-dark-surface transition-colors duration-200 rounded-lg">
                        All IT Services
                      </Link>
                      <Link to="/cloud-infrastructure" className="block px-4 py-2 text-sm text-gray-300 hover:text-neon-purple hover:bg-dark-surface transition-colors duration-200 rounded-lg">
                        Cloud Infrastructure
                      </Link>
                      <Link to="/cybersecurity" className="block px-4 py-2 text-sm text-gray-300 hover:text-neon-purple hover:bg-dark-surface transition-colors duration-200 rounded-lg">
                        Cybersecurity
                      </Link>
                      <Link to="/web-development" className="block px-4 py-2 text-sm text-gray-300 hover:text-neon-purple hover:bg-dark-surface transition-colors duration-200 rounded-lg">
                        Web Development
                      </Link>
                    </div>
                  </div>
                  <div className="border-t border-gray-600 my-2"></div>
                  <div className="px-4 py-2">
                    <h3 className="text-sm font-semibold text-neon-pink uppercase tracking-wider mb-2">AI Services</h3>
                    <div className="space-y-1">
                      <Link to="/ai-services" className="block px-4 py-2 text-sm text-gray-300 hover:text-neon-pink hover:bg-dark-surface transition-colors duration-200 rounded-lg">
                        All AI Services
                      </Link>
                      <Link to="/machine-learning" className="block px-4 py-2 text-sm text-gray-300 hover:text-neon-pink hover:bg-dark-surface transition-colors duration-200 rounded-lg">
                        Machine Learning
                      </Link>
                      <Link to="/natural-language-processing" className="block px-4 py-2 text-sm text-gray-300 hover:text-neon-pink hover:bg-dark-surface transition-colors duration-200 rounded-lg">
                        Natural Language Processing
                      </Link>
                      <Link to="/computer-vision" className="block px-4 py-2 text-sm text-gray-300 hover:text-neon-pink hover:bg-dark-surface transition-colors duration-200 rounded-lg">
                        Computer Vision
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Tools Dropdown */}
            <div className="relative group">
              <button className="text-gray-300 hover:text-neon-green px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors duration-300">
                AI Tools
                <svg className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-72 bg-dark-surface-light rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border border-neon-green border-opacity-30">
                <div className="py-4">
                  <div className="px-4 py-2">
                    <h3 className="text-sm font-semibold text-neon-green uppercase tracking-wider mb-2">Popular Tools</h3>
                    <div className="space-y-1">
                      <Link to="/zion-ai-content-moderator" className="block px-4 py-2 text-sm text-gray-300 hover:text-neon-green hover:bg-dark-surface transition-colors duration-200 rounded-lg">
                        Content Moderator
                      </Link>
                      <Link to="/zion-ai-customer-churn-predictor" className="block px-4 py-2 text-sm text-gray-300 hover:text-neon-green hover:bg-dark-surface transition-colors duration-200 rounded-lg">
                        Customer Churn Predictor
                      </Link>
                      <Link to="/zion-ai-financial-forecaster" className="block px-4 py-2 text-sm text-gray-300 hover:text-neon-green hover:bg-dark-surface transition-colors duration-200 rounded-lg">
                        Financial Forecaster
                      </Link>
                      <Link to="/zion-ai-sales-predictor" className="block px-4 py-2 text-sm text-gray-300 hover:text-neon-green hover:bg-dark-surface transition-colors duration-200 rounded-lg">
                        Sales Predictor
                      </Link>
                    </div>
                  </div>
                  <div className="border-t border-gray-600 my-2"></div>
                  <div className="px-4 py-2">
                    <h3 className="text-sm font-semibold text-neon-green uppercase tracking-wider mb-2">All Tools</h3>
                    <div className="space-y-1">
                      <Link to="/zion-ai-workflow-automator" className="block px-4 py-2 text-sm text-gray-300 hover:text-neon-green hover:bg-dark-surface transition-colors duration-200 rounded-lg">
                        Workflow Automator
                      </Link>
                      <Link to="/zion-ai-document-analyzer" className="block px-4 py-2 text-sm text-gray-300 hover:text-neon-green hover:bg-dark-surface transition-colors duration-200 rounded-lg">
                        Document Analyzer
                      </Link>
                      <Link to="/zion-ai-customer-sentiment-tracker" className="block px-4 py-2 text-sm text-gray-300 hover:text-neon-green hover:bg-dark-surface transition-colors duration-200 rounded-lg">
                        Sentiment Tracker
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Link to="/pricing" className="text-gray-300 hover:text-neon-blue px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">
              Pricing
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-neon-blue px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">
              Contact
            </Link>
            
            {/* CTA Button */}
            <a 
              href={`tel:${contactInfo.mobile}`} 
              className="neon-button text-sm px-4 py-2 rounded-lg font-semibold"
            >
              Call Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-neon-blue focus:outline-none focus:text-neon-blue transition-colors duration-300"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-dark-surface-light border-t border-neon-blue border-opacity-30">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="text-gray-300 hover:text-neon-blue block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="text-gray-300 hover:text-neon-blue block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            
            <div className="px-3 py-2 text-base font-medium text-neon-blue">
              Services
            </div>
            <div className="pl-6 space-y-1">
              <Link 
                to="/micro-saas-solutions" 
                className="text-gray-400 hover:text-neon-blue block px-3 py-2 rounded-md text-sm transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Micro SaaS Solutions
              </Link>
              <Link 
                to="/it-services" 
                className="text-gray-400 hover:text-neon-purple block px-3 py-2 rounded-md text-sm transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                IT Services
              </Link>
              <Link 
                to="/ai-services" 
                className="text-gray-400 hover:text-neon-pink block px-3 py-2 rounded-md text-sm transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                AI Services
              </Link>
            </div>
            
            <div className="px-3 py-2 text-base font-medium text-neon-green">
              AI Tools
            </div>
            <div className="pl-6 space-y-1">
              <Link 
                to="/zion-ai-content-moderator" 
                className="text-gray-400 hover:text-neon-green block px-3 py-2 rounded-md text-sm transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Content Moderator
              </Link>
              <Link 
                to="/zion-ai-sales-predictor" 
                className="text-gray-400 hover:text-neon-green block px-3 py-2 rounded-md text-sm transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Sales Predictor
              </Link>
              <Link 
                to="/zion-ai-workflow-automator" 
                className="text-gray-400 hover:text-neon-green block px-3 py-2 rounded-md text-sm transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                Workflow Automator
              </Link>
            </div>
            
            <Link 
              to="/pricing" 
              className="text-gray-300 hover:text-neon-blue block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-300 hover:text-neon-blue block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            
            <div className="pt-4">
              <a 
                href={`tel:${contactInfo.mobile}`} 
                className="w-full neon-button text-center block py-3 rounded-lg font-semibold"
                onClick={() => setIsOpen(false)}
              >
                Call {contactInfo.mobile}
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;