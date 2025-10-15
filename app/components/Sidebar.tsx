import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <div className="hidden lg:block lg:w-64 lg:flex-shrink-0">
      <div className="h-full flex flex-col bg-gray-50 border-r border-gray-200">
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-900">Quick Navigation</h2>
        </div>
        <nav className="flex-1 px-4 pb-4 space-y-1">
          <div className="space-y-1">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">AI & ML Services</div>
            <Link to="/ai-services" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              AI Services
            </Link>
            <Link to="/ai-solutions" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              AI Solutions
            </Link>
            <Link to="/ai-content-generator" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              AI Content Generator
            </Link>
            <Link to="/data-analytics" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              Data Analytics
            </Link>
          </div>
          
          <div className="space-y-1 mt-6">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">IT Services</div>
            <Link to="/it-services" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              IT Services
            </Link>
            <Link to="/web-development" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              Web Development
            </Link>
            <Link to="/mobile-development" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              Mobile Development
            </Link>
            <Link to="/database-management" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              Database Management
            </Link>
            <Link to="/network-infrastructure" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              Network Infrastructure
            </Link>
          </div>
          
          <div className="space-y-1 mt-6">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Infrastructure</div>
            <Link to="/cloud-infrastructure" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              Cloud Infrastructure
            </Link>
            <Link to="/5g-solutions" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              5G Solutions
            </Link>
            <Link to="/digital-transformation" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              Digital Transformation
            </Link>
            <Link to="/micro-saas-solutions" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              Micro SaaS Solutions
            </Link>
          </div>
          
          <div className="space-y-1 mt-6">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">AI Tools</div>
            <Link to="/zion-ai-content-moderator" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              AI Content Moderator
            </Link>
            <Link to="/zion-ai-customer-churn-predictor" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              Customer Churn Predictor
            </Link>
            <Link to="/zion-ai-customer-sentiment-tracker" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              Customer Sentiment Tracker
            </Link>
            <Link to="/zion-ai-document-analyzer" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              Document Analyzer
            </Link>
            <Link to="/zion-ai-financial-forecaster" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              Financial Forecaster
            </Link>
            <Link to="/zion-ai-sales-predictor" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              Sales Predictor
            </Link>
            <Link to="/zion-ai-workflow-automator" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              Workflow Automator
            </Link>
          </div>
          
          <div className="mb-4">
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Company</h3>
            <Link to="/about" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              About Us
            </Link>
            <Link to="/team" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              Our Team
            </Link>
            <Link to="/careers" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              Careers
            </Link>
            <Link to="/partnerships" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              Partnerships
            </Link>
          </div>
          
          <div className="mb-4">
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Resources</h3>
            <Link to="/blog" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              Blog
            </Link>
            <Link to="/case-studies" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              Case Studies
            </Link>
            <Link to="/pricing" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              Pricing
            </Link>
            <Link to="/api-docs" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              API Docs
            </Link>
          </div>
          
          <div>
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Support</h3>
            <Link to="/contact" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              Contact
            </Link>
            <Link to="/help" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              Help Center
            </Link>
            <Link to="/accessibility" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              Accessibility
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;