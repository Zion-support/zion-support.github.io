import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="bg-gray-900/95 backdrop-blur-md border-b border-cyan-500/30 shadow-2xl shadow-cyan-500/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 group">
              <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:via-purple-300 group-hover:to-pink-300 transition-all duration-300">
                Zion Tech Group
              </h1>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-2">
            <Link to="/" className="text-gray-300 hover:text-cyan-400 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-cyan-500/10 hover:shadow-lg hover:shadow-cyan-500/20">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-cyan-400 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-cyan-500/10 hover:shadow-lg hover:shadow-cyan-500/20">
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
                className="text-gray-300 hover:text-cyan-400 px-4 py-2 rounded-lg text-sm font-medium flex items-center transition-all duration-300 hover:bg-cyan-500/10 hover:shadow-lg hover:shadow-cyan-500/20"
              >
                Services
                <svg className="ml-1 h-4 w-4 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {servicesOpen && (
                <div
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                  className="absolute left-0 mt-2 w-80 bg-gray-800/95 backdrop-blur-md border border-cyan-500/30 rounded-xl shadow-2xl shadow-cyan-500/20 z-50"
                >
                  <div className="py-2">
                    <div className="px-4 py-2 text-xs font-semibold text-cyan-400 uppercase tracking-wider border-b border-cyan-500/30">AI & Machine Learning</div>
                    <Link to="/ai-services" className="block px-4 py-3 text-sm text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-200">
                      AI Services
                    </Link>
                    <Link to="/ai-solutions" className="block px-4 py-3 text-sm text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-200">
                      AI Solutions
                    </Link>
                    <Link to="/ai-content-generator" className="block px-4 py-3 text-sm text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-200">
                      AI Content Generator
                    </Link>
                    <Link to="/data-analytics" className="block px-4 py-3 text-sm text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 transition-all duration-200">
                      Data Analytics
                    </Link>
                    
                    <div className="px-4 py-2 text-xs font-semibold text-purple-400 uppercase tracking-wider border-b border-purple-500/30 mt-2">IT Services</div>
                    <Link to="/it-services" className="block px-4 py-3 text-sm text-gray-300 hover:bg-purple-500/10 hover:text-purple-400 transition-all duration-200">
                      IT Services
                    </Link>
                    <Link to="/web-development" className="block px-4 py-3 text-sm text-gray-300 hover:bg-purple-500/10 hover:text-purple-400 transition-all duration-200">
                      Web Development
                    </Link>
                    <Link to="/mobile-development" className="block px-4 py-3 text-sm text-gray-300 hover:bg-purple-500/10 hover:text-purple-400 transition-all duration-200">
                      Mobile Development
                    </Link>
                    <Link to="/database-management" className="block px-4 py-3 text-sm text-gray-300 hover:bg-purple-500/10 hover:text-purple-400 transition-all duration-200">
                      Database Management
                    </Link>
                    <Link to="/network-infrastructure" className="block px-4 py-3 text-sm text-gray-300 hover:bg-purple-500/10 hover:text-purple-400 transition-all duration-200">
                      Network Infrastructure
                    </Link>
                    <Link to="/api-development" className="block px-4 py-3 text-sm text-gray-300 hover:bg-purple-500/10 hover:text-purple-400 transition-all duration-200">
                      API Development
                    </Link>
                    <Link to="/blockchain-solutions" className="block px-4 py-3 text-sm text-gray-300 hover:bg-purple-500/10 hover:text-purple-400 transition-all duration-200">
                      Blockchain Solutions
                    </Link>
                    <Link to="/iot-solutions" className="block px-4 py-3 text-sm text-gray-300 hover:bg-purple-500/10 hover:text-purple-400 transition-all duration-200">
                      IoT Solutions
                    </Link>
                    
                    <div className="px-4 py-2 text-xs font-semibold text-pink-400 uppercase tracking-wider border-b border-pink-500/30 mt-2">Infrastructure</div>
                    <Link to="/cloud-infrastructure" className="block px-4 py-3 text-sm text-gray-300 hover:bg-pink-500/10 hover:text-pink-400 transition-all duration-200">
                      Cloud Infrastructure
                    </Link>
                    <Link to="/5g-solutions" className="block px-4 py-3 text-sm text-gray-300 hover:bg-pink-500/10 hover:text-pink-400 transition-all duration-200">
                      5G Solutions
                    </Link>
                    
                    <div className="px-4 py-2 text-xs font-semibold text-green-400 uppercase tracking-wider border-b border-green-500/30 mt-2">Business Solutions</div>
                    <Link to="/digital-transformation" className="block px-4 py-3 text-sm text-gray-300 hover:bg-green-500/10 hover:text-green-400 transition-all duration-200">
                      Digital Transformation
                    </Link>
                    <Link to="/micro-saas-solutions" className="block px-4 py-3 text-sm text-gray-300 hover:bg-green-500/10 hover:text-green-400 transition-all duration-200">
                      Micro SaaS Solutions
                    </Link>
                    
                    <div className="px-4 py-2 text-xs font-semibold text-yellow-400 uppercase tracking-wider border-b border-yellow-500/30 mt-2">AI Tools</div>
                    <Link to="/zion-ai-content-moderator" className="block px-4 py-3 text-sm text-gray-300 hover:bg-yellow-500/10 hover:text-yellow-400 transition-all duration-200">
                      AI Content Moderator
                    </Link>
                    <Link to="/zion-ai-customer-churn-predictor" className="block px-4 py-3 text-sm text-gray-300 hover:bg-yellow-500/10 hover:text-yellow-400 transition-all duration-200">
                      Customer Churn Predictor
                    </Link>
                    <Link to="/zion-ai-customer-sentiment-tracker" className="block px-4 py-3 text-sm text-gray-300 hover:bg-yellow-500/10 hover:text-yellow-400 transition-all duration-200">
                      Customer Sentiment Tracker
                    </Link>
                    <Link to="/zion-ai-document-analyzer" className="block px-4 py-3 text-sm text-gray-300 hover:bg-yellow-500/10 hover:text-yellow-400 transition-all duration-200">
                      Document Analyzer
                    </Link>
                    <Link to="/zion-ai-financial-forecaster" className="block px-4 py-3 text-sm text-gray-300 hover:bg-yellow-500/10 hover:text-yellow-400 transition-all duration-200">
                      Financial Forecaster
                    </Link>
                    <Link to="/zion-ai-sales-predictor" className="block px-4 py-3 text-sm text-gray-300 hover:bg-yellow-500/10 hover:text-yellow-400 transition-all duration-200">
                      Sales Predictor
                    </Link>
                    <Link to="/zion-ai-workflow-automator" className="block px-4 py-3 text-sm text-gray-300 hover:bg-yellow-500/10 hover:text-yellow-400 transition-all duration-200">
                      Workflow Automator
                    </Link>
                    <Link to="/ai-code-assistant" className="block px-4 py-3 text-sm text-gray-300 hover:bg-yellow-500/10 hover:text-yellow-400 transition-all duration-200">
                      AI Code Assistant
                    </Link>
                    <Link to="/ai-image-generator" className="block px-4 py-3 text-sm text-gray-300 hover:bg-yellow-500/10 hover:text-yellow-400 transition-all duration-200">
                      AI Image Generator
                    </Link>
                    <Link to="/ai-predictive-analytics" className="block px-4 py-3 text-sm text-gray-300 hover:bg-yellow-500/10 hover:text-yellow-400 transition-all duration-200">
                      AI Predictive Analytics
                    </Link>
                  </div>
                </div>
              )}
            </div>
            
            <Link to="/pricing" className="text-gray-300 hover:text-cyan-400 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-cyan-500/10 hover:shadow-lg hover:shadow-cyan-500/20">
              Pricing
            </Link>
            <Link to="/blog" className="text-gray-300 hover:text-cyan-400 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-cyan-500/10 hover:shadow-lg hover:shadow-cyan-500/20">
              Blog
            </Link>
            <Link to="/team" className="text-gray-300 hover:text-cyan-400 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-cyan-500/10 hover:shadow-lg hover:shadow-cyan-500/20">
              Team
            </Link>
            <Link to="/careers" className="text-gray-300 hover:text-cyan-400 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-cyan-500/10 hover:shadow-lg hover:shadow-cyan-500/20">
              Careers
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-cyan-400 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-cyan-500/10 hover:shadow-lg hover:shadow-cyan-500/20">
              Contact
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-cyan-400 focus:outline-none focus:text-cyan-400 transition-colors duration-300 p-2 rounded-lg hover:bg-cyan-500/10"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-800/95 backdrop-blur-md border-t border-cyan-500/30">
          <div className="px-4 pt-4 pb-6 space-y-2">
            <Link to="/" className="text-gray-300 hover:text-cyan-400 block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 hover:bg-cyan-500/10">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-cyan-400 block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 hover:bg-cyan-500/10">
              About
            </Link>
            <div className="space-y-1">
              <div className="text-gray-700 px-3 py-2 text-base font-medium">AI & Machine Learning</div>
              <Link to="/ai-services" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                AI Services
              </Link>
              <Link to="/ai-solutions" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                AI Solutions
              </Link>
              <Link to="/ai-content-generator" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                AI Content Generator
              </Link>
              <Link to="/data-analytics" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                Data Analytics
              </Link>
              
              <div className="text-gray-700 px-3 py-2 text-base font-medium mt-4">IT Services</div>
              <Link to="/it-services" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                IT Services
              </Link>
              <Link to="/web-development" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                Web Development
              </Link>
              <Link to="/mobile-development" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                Mobile Development
              </Link>
              <Link to="/database-management" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                Database Management
              </Link>
              <Link to="/network-infrastructure" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                Network Infrastructure
              </Link>
              <Link to="/api-development" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                API Development
              </Link>
              <Link to="/blockchain-solutions" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                Blockchain Solutions
              </Link>
              <Link to="/iot-solutions" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                IoT Solutions
              </Link>
              
              <div className="text-gray-700 px-3 py-2 text-base font-medium mt-4">Infrastructure</div>
              <Link to="/cloud-infrastructure" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                Cloud Infrastructure
              </Link>
              <Link to="/5g-solutions" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                5G Solutions
              </Link>
              
              <div className="text-gray-700 px-3 py-2 text-base font-medium mt-4">Business Solutions</div>
              <Link to="/digital-transformation" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                Digital Transformation
              </Link>
              <Link to="/micro-saas-solutions" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                Micro SaaS Solutions
              </Link>
              
              <div className="text-gray-700 px-3 py-2 text-base font-medium mt-4">AI Tools</div>
              <Link to="/zion-ai-content-moderator" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                AI Content Moderator
              </Link>
              <Link to="/zion-ai-customer-churn-predictor" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                Customer Churn Predictor
              </Link>
              <Link to="/zion-ai-customer-sentiment-tracker" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                Customer Sentiment Tracker
              </Link>
              <Link to="/zion-ai-document-analyzer" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                Document Analyzer
              </Link>
              <Link to="/zion-ai-financial-forecaster" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                Financial Forecaster
              </Link>
              <Link to="/zion-ai-sales-predictor" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                Sales Predictor
              </Link>
              <Link to="/zion-ai-workflow-automator" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                Workflow Automator
              </Link>
              <Link to="/ai-code-assistant" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                AI Code Assistant
              </Link>
              <Link to="/ai-image-generator" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                AI Image Generator
              </Link>
              <Link to="/ai-predictive-analytics" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                AI Predictive Analytics
              </Link>
            </div>
            <Link to="/pricing" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
              Pricing
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
              Blog
            </Link>
            <Link to="/team" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
              Team
            </Link>
            <Link to="/careers" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
              Careers
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;