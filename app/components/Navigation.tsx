import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-blue-600">Zion Tech Group</h1>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              About
            </Link>
            <div className="relative group">
              <button 
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium flex items-center"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
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
                  className="absolute left-0 mt-2 w-80 bg-white rounded-md shadow-lg z-50"
                >
                  <div className="py-1">
                    <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Core Services</div>
                    <Link to="/services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      All Services
                    </Link>
                    <Link to="/ai-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      AI Services
                    </Link>
                    <Link to="/it-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      IT Services
                    </Link>
                    <Link to="/cloud-infrastructure" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Cloud Infrastructure
                    </Link>
                    <Link to="/5g-solutions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      5G Solutions
                    </Link>
                    <Link to="/digital-transformation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Digital Transformation
                    </Link>
                    <Link to="/data-analytics" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Data Analytics
                    </Link>
                    <Link to="/web-development" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Web Development
                    </Link>
                    <Link to="/mobile-development" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Mobile Development
                    </Link>
                    <div className="border-t border-gray-100 my-1"></div>
                    <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Micro SaaS Solutions</div>
                    <Link to="/micro-saas-solutions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      All Micro SaaS
                    </Link>
                    <Link to="/ai-content-generator" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      AI Content Generator
                    </Link>
                    <Link to="/zion-ai-customer-support-pro" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      AI Customer Support Pro
                    </Link>
                    <Link to="/zion-ai-workflow-automator-pro" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      AI Workflow Automator Pro
                    </Link>
                    <Link to="/zion-ai-email-marketing-pro" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      AI Email Marketing Pro
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium flex items-center">
                AI Tools
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-80 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-1">
                  <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Content & Marketing</div>
                  <Link to="/ai-content-generator" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">AI Content Generator</Link>
                  <Link to="/zion-ai-content-moderator" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Content Moderator</Link>
                  <Link to="/zion-ai-email-marketing-pro" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Email Marketing Pro</Link>
                  <Link to="/zion-ai-social-scheduler-pro" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Social Scheduler Pro</Link>
                  <div className="border-t border-gray-100 my-1"></div>
                  <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Business Intelligence</div>
                  <Link to="/zion-ai-customer-churn-predictor" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Churn Predictor</Link>
                  <Link to="/zion-ai-customer-sentiment-tracker" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sentiment Tracker</Link>
                  <Link to="/zion-ai-sales-predictor" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sales Predictor</Link>
                  <Link to="/zion-ai-financial-forecaster" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Financial Forecaster</Link>
                  <div className="border-t border-gray-100 my-1"></div>
                  <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Automation & Workflow</div>
                  <Link to="/zion-ai-workflow-automator" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Workflow Automator</Link>
                  <Link to="/zion-ai-workflow-automator-pro" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Workflow Automator Pro</Link>
                  <Link to="/zion-ai-task-scheduler" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Task Scheduler</Link>
                  <Link to="/zion-smart-expense-tracker" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Smart Expense Tracker</Link>
                </div>
              </div>
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
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
              About
            </Link>
            <div className="space-y-1">
              <div className="text-gray-700 px-3 py-2 text-base font-medium">Core Services</div>
              <Link to="/services" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                All Services
              </Link>
              <Link to="/ai-services" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                AI Services
              </Link>
              <Link to="/it-services" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                IT Services
              </Link>
              <Link to="/cloud-infrastructure" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                Cloud Infrastructure
              </Link>
              <Link to="/5g-solutions" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                5G Solutions
              </Link>
              <Link to="/digital-transformation" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                Digital Transformation
              </Link>
              <div className="text-gray-700 px-3 py-2 text-base font-medium mt-4">AI Products</div>
              <Link to="/ai-content-generator" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                AI Content Generator
              </Link>
              <Link to="/zion-ai-customer-support-pro" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                AI Customer Support Pro
              </Link>
              <Link to="/zion-ai-workflow-automator-pro" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                AI Workflow Automator Pro
              </Link>
              <Link to="/zion-ai-email-marketing-pro" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                AI Email Marketing Pro
              </Link>
            </div>
            <div className="px-3 py-2">
              <div className="text-gray-700 text-base font-medium mb-2">AI Tools</div>
              <div className="ml-4 space-y-1">
                <Link to="/zion-ai-content-moderator" className="text-gray-600 hover:text-blue-600 block px-3 py-1 rounded-md text-sm">Content Moderator</Link>
                <Link to="/zion-ai-customer-churn-predictor" className="text-gray-600 hover:text-blue-600 block px-3 py-1 rounded-md text-sm">Churn Predictor</Link>
                <Link to="/zion-ai-sales-predictor" className="text-gray-600 hover:text-blue-600 block px-3 py-1 rounded-md text-sm">Sales Predictor</Link>
                <Link to="/zion-ai-workflow-automator" className="text-gray-600 hover:text-blue-600 block px-3 py-1 rounded-md text-sm">Workflow Automator</Link>
              </div>
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