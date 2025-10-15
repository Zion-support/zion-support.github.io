import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aiToolsOpen, setAiToolsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <h1 className="text-2xl font-bold text-blue-600">Zion Tech Group</h1>
            </Link>
          </div>
          
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors"
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
                  className="absolute left-0 mt-2 w-96 bg-white rounded-lg shadow-xl z-50 border border-gray-200"
                >
                  <div className="py-2">
                    <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b border-gray-100">AI & Machine Learning</div>
                    <Link to="/ai-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      AI Services
                    </Link>
                    <Link to="/ai-solutions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      AI Solutions
                    </Link>
                    <Link to="/ai-content-generator" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      AI Content Generator
                    </Link>
                    <Link to="/data-analytics" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      Data Analytics
                    </Link>
                    
                    <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b border-gray-100 mt-2">IT Services</div>
                    <Link to="/it-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      IT Services
                    </Link>
                    <Link to="/web-development" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      Web Development
                    </Link>
                    <Link to="/mobile-development" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      Mobile Development
                    </Link>
                    <Link to="/database-management" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      Database Management
                    </Link>
                    <Link to="/network-infrastructure" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      Network Infrastructure
                    </Link>
                    
                    <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b border-gray-100 mt-2">Infrastructure</div>
                    <Link to="/cloud-infrastructure" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      Cloud Infrastructure
                    </Link>
                    <Link to="/5g-solutions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      5G Solutions
                    </Link>
                    
                    <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b border-gray-100 mt-2">Business Solutions</div>
                    <Link to="/digital-transformation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      Digital Transformation
                    </Link>
                    <Link to="/micro-saas-solutions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      Micro SaaS Solutions
                    </Link>
                  </div>
                </div>
              )}
            </div>
            
            {/* AI Tools Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setAiToolsOpen(true)}
                onMouseLeave={() => setAiToolsOpen(false)}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors"
              >
                AI Tools
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {aiToolsOpen && (
                <div
                  onMouseEnter={() => setAiToolsOpen(true)}
                  onMouseLeave={() => setAiToolsOpen(false)}
                  className="absolute left-0 mt-2 w-80 bg-white rounded-lg shadow-xl z-50 border border-gray-200"
                >
                  <div className="py-2">
                    <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b border-gray-100">Popular Tools</div>
                    <Link to="/zion-ai-content-moderator" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      AI Content Moderator
                    </Link>
                    <Link to="/zion-ai-sales-predictor" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      Sales Predictor
                    </Link>
                    <Link to="/zion-ai-workflow-automator" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      Workflow Automator
                    </Link>
                    <Link to="/zion-ai-financial-forecaster" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      Financial Forecaster
                    </Link>
                    
                    <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b border-gray-100 mt-2">Business Tools</div>
                    <Link to="/zion-ai-customer-churn-predictor" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      Customer Churn Predictor
                    </Link>
                    <Link to="/zion-ai-customer-sentiment-tracker" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      Customer Sentiment Tracker
                    </Link>
                    <Link to="/zion-ai-document-analyzer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      Document Analyzer
                    </Link>
                    <Link to="/zion-ai-task-scheduler" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      Task Scheduler
                    </Link>
                    <Link to="/zion-ai-social-media-manager" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      Social Media Manager
                    </Link>
                    <Link to="/zion-ai-project-manager" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                      Project Manager
                    </Link>
                    
                    <div className="px-4 py-2 text-center">
                      <Link to="/micro-saas-solutions" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                        View All Tools →
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <Link to="/pricing" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Pricing
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Blog
            </Link>
            <Link to="/contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
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
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            <Link to="/" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors">
              About
            </Link>
            
            <div className="space-y-1">
              <div className="text-gray-700 px-3 py-2 text-base font-medium border-t border-gray-100 pt-4">Services</div>
              <Link to="/ai-services" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm transition-colors">
                AI Services
              </Link>
              <Link to="/it-services" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm transition-colors">
                IT Services
              </Link>
              <Link to="/cloud-infrastructure" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm transition-colors">
                Cloud Infrastructure
              </Link>
              <Link to="/digital-transformation" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm transition-colors">
                Digital Transformation
              </Link>
              <Link to="/micro-saas-solutions" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm transition-colors">
                Micro SaaS Solutions
              </Link>
              
              <div className="text-gray-700 px-3 py-2 text-base font-medium border-t border-gray-100 pt-4">AI Tools</div>
              <Link to="/zion-ai-content-moderator" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm transition-colors">
                Content Moderator
              </Link>
              <Link to="/zion-ai-sales-predictor" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm transition-colors">
                Sales Predictor
              </Link>
              <Link to="/zion-ai-workflow-automator" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm transition-colors">
                Workflow Automator
              </Link>
              <Link to="/zion-ai-financial-forecaster" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm transition-colors">
                Financial Forecaster
              </Link>
              <Link to="/zion-ai-social-media-manager" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm transition-colors">
                Social Media Manager
              </Link>
              <Link to="/zion-ai-project-manager" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm transition-colors">
                Project Manager
              </Link>
              
              <div className="text-gray-700 px-3 py-2 text-base font-medium border-t border-gray-100 pt-4">Company</div>
              <Link to="/team" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm transition-colors">
                Team
              </Link>
              <Link to="/careers" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm transition-colors">
                Careers
              </Link>
              <Link to="/partnerships" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm transition-colors">
                Partnerships
              </Link>
              <Link to="/case-studies" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm transition-colors">
                Case Studies
              </Link>
            </div>
            
            <div className="border-t border-gray-100 pt-4">
              <Link to="/pricing" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors">
                Pricing
              </Link>
              <Link to="/blog" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors">
                Blog
              </Link>
              <Link to="/contact" className="bg-blue-600 text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700 transition-colors text-center mt-2">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;