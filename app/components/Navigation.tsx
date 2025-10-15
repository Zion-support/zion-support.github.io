import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NeonButton from './NeonButton';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="bg-gray-900/90 backdrop-blur-sm border-b border-cyan-500/20 shadow-lg shadow-cyan-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Zion Tech Group
              </h1>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
                className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors"
              >
                Services
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {servicesOpen && (
                <div
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                  className="absolute left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-sm rounded-md shadow-lg shadow-cyan-500/20 border border-cyan-500/20 z-50"
                >
                  <div className="py-1">
                    <div className="px-4 py-2 text-xs font-semibold text-cyan-400 uppercase tracking-wider border-b border-cyan-500/20">AI & Machine Learning</div>
                    <Link to="/ai-services" className="block px-4 py-2 text-sm text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 transition-colors">
                      AI Services
                    </Link>
                    <Link to="/ai-solutions" className="block px-4 py-2 text-sm text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 transition-colors">
                      AI Solutions
                    </Link>
                    <Link to="/ai-content-generator" className="block px-4 py-2 text-sm text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 transition-colors">
                      AI Content Generator
                    </Link>
                    <Link to="/data-analytics" className="block px-4 py-2 text-sm text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 transition-colors">
                      Data Analytics
                    </Link>
                    
                    <div className="px-4 py-2 text-xs font-semibold text-pink-400 uppercase tracking-wider border-b border-pink-500/20 mt-2">IT Services</div>
                    <Link to="/it-services" className="block px-4 py-2 text-sm text-gray-300 hover:bg-pink-500/10 hover:text-pink-400 transition-colors">
                      IT Services
                    </Link>
                    <Link to="/web-development" className="block px-4 py-2 text-sm text-gray-300 hover:bg-pink-500/10 hover:text-pink-400 transition-colors">
                      Web Development
                    </Link>
                    <Link to="/mobile-development" className="block px-4 py-2 text-sm text-gray-300 hover:bg-pink-500/10 hover:text-pink-400 transition-colors">
                      Mobile Development
                    </Link>
                    <Link to="/database-management" className="block px-4 py-2 text-sm text-gray-300 hover:bg-pink-500/10 hover:text-pink-400 transition-colors">
                      Database Management
                    </Link>
                    <Link to="/network-infrastructure" className="block px-4 py-2 text-sm text-gray-300 hover:bg-pink-500/10 hover:text-pink-400 transition-colors">
                      Network Infrastructure
                    </Link>
                    
                    <div className="px-4 py-2 text-xs font-semibold text-purple-400 uppercase tracking-wider border-b border-purple-500/20 mt-2">Infrastructure</div>
                    <Link to="/cloud-infrastructure" className="block px-4 py-2 text-sm text-gray-300 hover:bg-purple-500/10 hover:text-purple-400 transition-colors">
                      Cloud Infrastructure
                    </Link>
                    <Link to="/5g-solutions" className="block px-4 py-2 text-sm text-gray-300 hover:bg-purple-500/10 hover:text-purple-400 transition-colors">
                      5G Solutions
                    </Link>
                    
                    <div className="px-4 py-2 text-xs font-semibold text-green-400 uppercase tracking-wider border-b border-green-500/20 mt-2">Business Solutions</div>
                    <Link to="/digital-transformation" className="block px-4 py-2 text-sm text-gray-300 hover:bg-green-500/10 hover:text-green-400 transition-colors">
                      Digital Transformation
                    </Link>
                    <Link to="/micro-saas-solutions" className="block px-4 py-2 text-sm text-gray-300 hover:bg-green-500/10 hover:text-green-400 transition-colors">
                      Micro SaaS Solutions
                    </Link>
                    
                    <div className="px-4 py-2 text-xs font-semibold text-yellow-400 uppercase tracking-wider border-b border-yellow-500/20 mt-2">AI Tools</div>
                    <Link to="/zion-ai-content-moderator" className="block px-4 py-2 text-sm text-gray-300 hover:bg-yellow-500/10 hover:text-yellow-400 transition-colors">
                      AI Content Moderator
                    </Link>
                    <Link to="/zion-ai-customer-churn-predictor" className="block px-4 py-2 text-sm text-gray-300 hover:bg-yellow-500/10 hover:text-yellow-400 transition-colors">
                      Customer Churn Predictor
                    </Link>
                    <Link to="/zion-ai-customer-sentiment-tracker" className="block px-4 py-2 text-sm text-gray-300 hover:bg-yellow-500/10 hover:text-yellow-400 transition-colors">
                      Customer Sentiment Tracker
                    </Link>
                    <Link to="/zion-ai-document-analyzer" className="block px-4 py-2 text-sm text-gray-300 hover:bg-yellow-500/10 hover:text-yellow-400 transition-colors">
                      Document Analyzer
                    </Link>
                    <Link to="/zion-ai-financial-forecaster" className="block px-4 py-2 text-sm text-gray-300 hover:bg-yellow-500/10 hover:text-yellow-400 transition-colors">
                      Financial Forecaster
                    </Link>
                    <Link to="/zion-ai-sales-predictor" className="block px-4 py-2 text-sm text-gray-300 hover:bg-yellow-500/10 hover:text-yellow-400 transition-colors">
                      Sales Predictor
                    </Link>
                    <Link to="/zion-ai-workflow-automator" className="block px-4 py-2 text-sm text-gray-300 hover:bg-yellow-500/10 hover:text-yellow-400 transition-colors">
                      Workflow Automator
                    </Link>
                  </div>
                </div>
              )}
            </div>
            
            <Link to="/pricing" className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Pricing
            </Link>
            <Link to="/blog" className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Blog
            </Link>
            <Link to="/team" className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Team
            </Link>
            <Link to="/careers" className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Careers
            </Link>
            <NeonButton to="/contact" variant="primary" size="sm">
              Contact
            </NeonButton>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-cyan-400 focus:outline-none focus:text-cyan-400 transition-colors"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-sm border-t border-cyan-500/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors">
              About
            </Link>
            <div className="space-y-1">
              <div className="text-cyan-400 px-3 py-2 text-base font-medium">AI & Machine Learning</div>
              <Link to="/ai-services" className="text-gray-300 hover:text-cyan-400 block px-6 py-2 rounded-md text-sm transition-colors">
                AI Services
              </Link>
              <Link to="/ai-solutions" className="text-gray-300 hover:text-cyan-400 block px-6 py-2 rounded-md text-sm transition-colors">
                AI Solutions
              </Link>
              <Link to="/ai-content-generator" className="text-gray-300 hover:text-cyan-400 block px-6 py-2 rounded-md text-sm transition-colors">
                AI Content Generator
              </Link>
              <Link to="/data-analytics" className="text-gray-300 hover:text-cyan-400 block px-6 py-2 rounded-md text-sm transition-colors">
                Data Analytics
              </Link>
              
              <div className="text-pink-400 px-3 py-2 text-base font-medium mt-4">IT Services</div>
              <Link to="/it-services" className="text-gray-300 hover:text-pink-400 block px-6 py-2 rounded-md text-sm transition-colors">
                IT Services
              </Link>
              <Link to="/web-development" className="text-gray-300 hover:text-pink-400 block px-6 py-2 rounded-md text-sm transition-colors">
                Web Development
              </Link>
              <Link to="/mobile-development" className="text-gray-300 hover:text-pink-400 block px-6 py-2 rounded-md text-sm transition-colors">
                Mobile Development
              </Link>
              <Link to="/database-management" className="text-gray-300 hover:text-pink-400 block px-6 py-2 rounded-md text-sm transition-colors">
                Database Management
              </Link>
              <Link to="/network-infrastructure" className="text-gray-300 hover:text-pink-400 block px-6 py-2 rounded-md text-sm transition-colors">
                Network Infrastructure
              </Link>
              
              <div className="text-purple-400 px-3 py-2 text-base font-medium mt-4">Infrastructure</div>
              <Link to="/cloud-infrastructure" className="text-gray-300 hover:text-purple-400 block px-6 py-2 rounded-md text-sm transition-colors">
                Cloud Infrastructure
              </Link>
              <Link to="/5g-solutions" className="text-gray-300 hover:text-purple-400 block px-6 py-2 rounded-md text-sm transition-colors">
                5G Solutions
              </Link>
              
              <div className="text-green-400 px-3 py-2 text-base font-medium mt-4">Business Solutions</div>
              <Link to="/digital-transformation" className="text-gray-300 hover:text-green-400 block px-6 py-2 rounded-md text-sm transition-colors">
                Digital Transformation
              </Link>
              <Link to="/micro-saas-solutions" className="text-gray-300 hover:text-green-400 block px-6 py-2 rounded-md text-sm transition-colors">
                Micro SaaS Solutions
              </Link>
              
              <div className="text-yellow-400 px-3 py-2 text-base font-medium mt-4">AI Tools</div>
              <Link to="/zion-ai-content-moderator" className="text-gray-300 hover:text-yellow-400 block px-6 py-2 rounded-md text-sm transition-colors">
                AI Content Moderator
              </Link>
              <Link to="/zion-ai-customer-churn-predictor" className="text-gray-300 hover:text-yellow-400 block px-6 py-2 rounded-md text-sm transition-colors">
                Customer Churn Predictor
              </Link>
              <Link to="/zion-ai-customer-sentiment-tracker" className="text-gray-300 hover:text-yellow-400 block px-6 py-2 rounded-md text-sm transition-colors">
                Customer Sentiment Tracker
              </Link>
              <Link to="/zion-ai-document-analyzer" className="text-gray-300 hover:text-yellow-400 block px-6 py-2 rounded-md text-sm transition-colors">
                Document Analyzer
              </Link>
              <Link to="/zion-ai-financial-forecaster" className="text-gray-300 hover:text-yellow-400 block px-6 py-2 rounded-md text-sm transition-colors">
                Financial Forecaster
              </Link>
              <Link to="/zion-ai-sales-predictor" className="text-gray-300 hover:text-yellow-400 block px-6 py-2 rounded-md text-sm transition-colors">
                Sales Predictor
              </Link>
              <Link to="/zion-ai-workflow-automator" className="text-gray-300 hover:text-yellow-400 block px-6 py-2 rounded-md text-sm transition-colors">
                Workflow Automator
              </Link>
            </div>
            <Link to="/pricing" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors">
              Pricing
            </Link>
            <Link to="/blog" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors">
              Blog
            </Link>
            <Link to="/team" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors">
              Team
            </Link>
            <Link to="/careers" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors">
              Careers
            </Link>
            <div className="px-3 py-2">
              <NeonButton to="/contact" variant="primary" size="sm" className="w-full">
                Contact
              </NeonButton>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;