import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <div className="hidden lg:block lg:w-72 lg:flex-shrink-0">
      <div className="h-full flex flex-col bg-white border-r border-gray-200 shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">Quick Navigation</h2>
          <p className="text-sm text-gray-500 mt-1">Explore our services and products</p>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-6 overflow-y-auto">
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3 flex items-center">
              <svg className="h-4 w-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              Services
            </h3>
            <div className="space-y-1">
              <Link to="/services" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-md transition-colors">
                All Services
              </Link>
              <Link to="/ai-services" className="block px-3 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-700 rounded-md transition-colors">
                AI Services
              </Link>
              <Link to="/ai-solutions" className="block px-3 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-700 rounded-md transition-colors">
                AI Solutions
              </Link>
              <Link to="/it-services" className="block px-3 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-700 rounded-md transition-colors">
                IT Services
              </Link>
              <Link to="/cloud-infrastructure" className="block px-3 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-700 rounded-md transition-colors">
                Cloud Infrastructure
              </Link>
              <Link to="/5g-solutions" className="block px-3 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-700 rounded-md transition-colors">
                5G Solutions
              </Link>
              <Link to="/digital-transformation" className="block px-3 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-700 rounded-md transition-colors">
                Digital Transformation
              </Link>
              <Link to="/web-development" className="block px-3 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-700 rounded-md transition-colors">
                Web Development
              </Link>
              <Link to="/mobile-development" className="block px-3 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-700 rounded-md transition-colors">
                Mobile Development
              </Link>
              <Link to="/data-analytics" className="block px-3 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-700 rounded-md transition-colors">
                Data Analytics
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3 flex items-center">
              <svg className="h-4 w-4 mr-2 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              Zion AI Products
            </h3>
            <div className="space-y-1">
              <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2 px-3">AI Solutions</div>
              <Link to="/zion-ai-content-moderator" className="block px-3 py-2 text-sm text-gray-600 hover:bg-purple-50 hover:text-purple-700 rounded-md transition-colors">
                Content Moderator
              </Link>
              <Link to="/zion-ai-document-analyzer" className="block px-3 py-2 text-sm text-gray-600 hover:bg-purple-50 hover:text-purple-700 rounded-md transition-colors">
                Document Analyzer
              </Link>
              <Link to="/zion-ai-workflow-automator" className="block px-3 py-2 text-sm text-gray-600 hover:bg-purple-50 hover:text-purple-700 rounded-md transition-colors">
                Workflow Automator
              </Link>
              <Link to="/zion-ai-workflow-automator-pro" className="block px-3 py-2 text-sm text-gray-600 hover:bg-purple-50 hover:text-purple-700 rounded-md transition-colors">
                Workflow Automator Pro
              </Link>
              
              <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2 px-3 mt-3">Customer Analytics</div>
              <Link to="/zion-ai-customer-churn-predictor" className="block px-3 py-2 text-sm text-gray-600 hover:bg-purple-50 hover:text-purple-700 rounded-md transition-colors">
                Customer Churn Predictor
              </Link>
              <Link to="/zion-ai-customer-support-pro" className="block px-3 py-2 text-sm text-gray-600 hover:bg-purple-50 hover:text-purple-700 rounded-md transition-colors">
                Customer Support Pro
              </Link>
              <Link to="/zion-customer-satisfaction-monitor" className="block px-3 py-2 text-sm text-gray-600 hover:bg-purple-50 hover:text-purple-700 rounded-md transition-colors">
                Customer Satisfaction Monitor
              </Link>
              
              <div className="text-xs font-medium text-gray-500 uppercase tracking-wider mb-2 px-3 mt-3">Business Tools</div>
              <Link to="/zion-ai-financial-forecaster" className="block px-3 py-2 text-sm text-gray-600 hover:bg-purple-50 hover:text-purple-700 rounded-md transition-colors">
                Financial Forecaster
              </Link>
              <Link to="/zion-smart-expense-tracker" className="block px-3 py-2 text-sm text-gray-600 hover:bg-purple-50 hover:text-purple-700 rounded-md transition-colors">
                Smart Expense Tracker
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3 flex items-center">
              <svg className="h-4 w-4 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              Company
            </h3>
            <div className="space-y-1">
              <Link to="/about" className="block px-3 py-2 text-sm text-gray-600 hover:bg-green-50 hover:text-green-700 rounded-md transition-colors">
                About Us
              </Link>
              <Link to="/team" className="block px-3 py-2 text-sm text-gray-600 hover:bg-green-50 hover:text-green-700 rounded-md transition-colors">
                Our Team
              </Link>
              <Link to="/careers" className="block px-3 py-2 text-sm text-gray-600 hover:bg-green-50 hover:text-green-700 rounded-md transition-colors">
                Careers
              </Link>
              <Link to="/partnerships" className="block px-3 py-2 text-sm text-gray-600 hover:bg-green-50 hover:text-green-700 rounded-md transition-colors">
                Partnerships
              </Link>
              <Link to="/case-studies" className="block px-3 py-2 text-sm text-gray-600 hover:bg-green-50 hover:text-green-700 rounded-md transition-colors">
                Case Studies
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3 flex items-center">
              <svg className="h-4 w-4 mr-2 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Resources
            </h3>
            <div className="space-y-1">
              <Link to="/blog" className="block px-3 py-2 text-sm text-gray-600 hover:bg-orange-50 hover:text-orange-700 rounded-md transition-colors">
                Blog
              </Link>
              <Link to="/api-docs" className="block px-3 py-2 text-sm text-gray-600 hover:bg-orange-50 hover:text-orange-700 rounded-md transition-colors">
                API Documentation
              </Link>
              <Link to="/help" className="block px-3 py-2 text-sm text-gray-600 hover:bg-orange-50 hover:text-orange-700 rounded-md transition-colors">
                Help Center
              </Link>
              <Link to="/accessibility" className="block px-3 py-2 text-sm text-gray-600 hover:bg-orange-50 hover:text-orange-700 rounded-md transition-colors">
                Accessibility
              </Link>
              <Link to="/pricing" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-700 rounded-md transition-colors">
                Pricing
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3 flex items-center">
              <svg className="h-4 w-4 mr-2 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
              </svg>
              Support
            </h3>
            <div className="space-y-1">
              <Link to="/contact" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-red-50 hover:text-red-700 rounded-md transition-colors">
                Contact Us
              </Link>
              <Link to="/privacy" className="block px-3 py-2 text-sm text-gray-600 hover:bg-red-50 hover:text-red-700 rounded-md transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="block px-3 py-2 text-sm text-gray-600 hover:bg-red-50 hover:text-red-700 rounded-md transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="block px-3 py-2 text-sm text-gray-600 hover:bg-red-50 hover:text-red-700 rounded-md transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;