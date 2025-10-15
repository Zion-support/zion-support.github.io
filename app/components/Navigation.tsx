import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">Z</span>
              </div>
              <h1 className="text-2xl font-bold text-blue-600">Zion Tech Group</h1>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium flex items-center"
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
                  className="absolute left-0 mt-2 w-96 bg-white rounded-md shadow-lg z-50 max-h-96 overflow-y-auto"
                >
                  <div className="py-1">
                    <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b border-gray-100">AI & Machine Learning</div>
                    <Link to="/ai-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      AI Services
                    </Link>
                    <Link to="/ai-solutions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      AI Solutions
                    </Link>
                    <Link to="/ai-content-generator" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      AI Content Generator
                    </Link>
                    <Link to="/data-analytics" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Data Analytics
                    </Link>
                    
                    <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b border-gray-100 mt-2">AI-Powered Tools</div>
                    <Link to="/zion-ai-code-reviewer-pro" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      AI Code Reviewer Pro
                    </Link>
                    <Link to="/zion-ai-seo-optimizer-pro" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      AI SEO Optimizer Pro
                    </Link>
                    <Link to="/zion-ai-social-media-manager-pro" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      AI Social Media Manager Pro
                    </Link>
                    <Link to="/zion-ai-customer-feedback-analyzer-pro" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      AI Customer Feedback Analyzer Pro
                    </Link>
                    <Link to="/zion-ai-inventory-optimizer-pro" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      AI Inventory Optimizer Pro
                    </Link>
                    <Link to="/zion-ai-hr-recruiter-pro" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      AI HR Recruiter Pro
                    </Link>
                    <Link to="/zion-ai-project-manager-pro" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      AI Project Manager Pro
                    </Link>
                    <Link to="/zion-ai-cybersecurity-monitor-pro" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      AI Cybersecurity Monitor Pro
                    </Link>
                    <Link to="/zion-ai-data-visualization-pro" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      AI Data Visualization Pro
                    </Link>
                    <Link to="/zion-ai-api-integration-pro" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      AI API Integration Pro
                    </Link>
                    
                    <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b border-gray-100 mt-2">IT Services</div>
                    <Link to="/it-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      IT Services
                    </Link>
                    <Link to="/web-development" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Web Development
                    </Link>
                    <Link to="/mobile-development" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Mobile Development
                    </Link>
                    <Link to="/database-management" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Database Management
                    </Link>
                    <Link to="/network-infrastructure" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Network Infrastructure
                    </Link>
                    
                    <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b border-gray-100 mt-2">Infrastructure</div>
                    <Link to="/cloud-infrastructure" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Cloud Infrastructure
                    </Link>
                    <Link to="/5g-solutions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      5G Solutions
                    </Link>
                    
                    <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b border-gray-100 mt-2">Business Solutions</div>
                    <Link to="/digital-transformation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Digital Transformation
                    </Link>
                    <Link to="/micro-saas-solutions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Micro SaaS Solutions
                    </Link>
                    
                    <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b border-gray-100 mt-2">AI Tools</div>
                    <Link to="/zion-ai-content-moderator" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      AI Content Moderator
                    </Link>
                    <Link to="/zion-ai-customer-churn-predictor" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Customer Churn Predictor
                    </Link>
                    <Link to="/zion-ai-customer-sentiment-tracker" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Customer Sentiment Tracker
                    </Link>
                    <Link to="/zion-ai-document-analyzer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Document Analyzer
                    </Link>
                    <Link to="/zion-ai-financial-forecaster" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Financial Forecaster
                    </Link>
                    <Link to="/zion-ai-sales-predictor" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Sales Predictor
                    </Link>
                    <Link to="/zion-ai-workflow-automator" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Workflow Automator
                    </Link>
                  </div>
                </div>
              )}
            </div>
            
            <Link to="/pricing" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              Pricing
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              Blog
            </Link>
            <Link to="/team" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              Team
            </Link>
            <Link to="/careers" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              Careers
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
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 max-h-96 overflow-y-auto">
            <Link to="/" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
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
              
              <div className="text-gray-700 px-3 py-2 text-base font-medium mt-4">AI-Powered Tools</div>
              <Link to="/zion-ai-code-reviewer-pro" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                AI Code Reviewer Pro
              </Link>
              <Link to="/zion-ai-seo-optimizer-pro" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                AI SEO Optimizer Pro
              </Link>
              <Link to="/zion-ai-social-media-manager-pro" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                AI Social Media Manager Pro
              </Link>
              <Link to="/zion-ai-customer-feedback-analyzer-pro" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                AI Customer Feedback Analyzer Pro
              </Link>
              <Link to="/zion-ai-inventory-optimizer-pro" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                AI Inventory Optimizer Pro
              </Link>
              <Link to="/zion-ai-hr-recruiter-pro" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                AI HR Recruiter Pro
              </Link>
              <Link to="/zion-ai-project-manager-pro" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                AI Project Manager Pro
              </Link>
              <Link to="/zion-ai-cybersecurity-monitor-pro" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                AI Cybersecurity Monitor Pro
              </Link>
              <Link to="/zion-ai-data-visualization-pro" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                AI Data Visualization Pro
              </Link>
              <Link to="/zion-ai-api-integration-pro" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                AI API Integration Pro
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
            </div>
            <div className="px-3 py-2 text-base font-medium text-gray-700">
              Services
            </div>
            <div className="pl-6 space-y-1">
              <Link to="/ai-services" className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-sm">AI Services</Link>
              <Link to="/it-services" className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-sm">IT Services</Link>
              <Link to="/cloud-infrastructure" className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-sm">Cloud Infrastructure</Link>
              <Link to="/digital-transformation" className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-sm">Digital Transformation</Link>
            </div>
            <div className="px-3 py-2 text-base font-medium text-gray-700">
              AI Tools
            </div>
            <div className="pl-6 space-y-1">
              <Link to="/zion-ai-content-moderator" className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-sm">Content Moderator</Link>
              <Link to="/zion-ai-customer-churn-predictor" className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-sm">Churn Predictor</Link>
              <Link to="/zion-ai-sales-predictor" className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-sm">Sales Predictor</Link>
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