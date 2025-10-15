import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <div className="hidden lg:block lg:w-64 lg:flex-shrink-0">
      <div className="h-full flex flex-col bg-white border-r border-gray-200 shadow-sm">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Quick Navigation</h2>
        </div>
        <nav className="flex-1 px-4 pb-4 space-y-1 overflow-y-auto">
          <div className="mb-4">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Main Services</h3>
            <Link to="/ai-services" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors">
              AI Services
            </Link>
            <Link to="/it-services" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors">
              IT Services
            </Link>
            <Link to="/cloud-infrastructure" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors">
              Cloud Infrastructure
            </Link>
            <Link to="/5g-solutions" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors">
              5G Solutions
            </Link>
            <Link to="/web-development" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors">
              Web Development
            </Link>
            <Link to="/mobile-development" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors">
              Mobile Development
            </Link>
            <Link to="/digital-transformation" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors">
              Digital Transformation
            </Link>
          </div>
          
          <div className="mb-4">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">AI Tools</h3>
            <Link to="/zion-ai-content-moderator" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors">
              Content Moderator
            </Link>
            <Link to="/zion-ai-customer-churn-predictor" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors">
              Churn Predictor
            </Link>
            <Link to="/zion-ai-sales-predictor" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors">
              Sales Predictor
            </Link>
            <Link to="/zion-ai-workflow-automator" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors">
              Workflow Automator
            </Link>
            <Link to="/zion-ai-financial-forecaster" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors">
              Financial Forecaster
            </Link>
            <Link to="/zion-ai-document-analyzer" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors">
              Document Analyzer
            </Link>
            <Link to="/zion-ai-task-scheduler" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors">
              Task Scheduler
            </Link>
            <Link to="/zion-ai-customer-sentiment-tracker" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors">
              Sentiment Tracker
            </Link>
            <Link to="/zion-ai-meeting-transcriber" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors">
              Meeting Transcriber
            </Link>
          </div>
          
          <div className="mb-4">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Company</h3>
            <Link to="/about" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors">
              About Us
            </Link>
            <Link to="/team" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors">
              Our Team
            </Link>
            <Link to="/careers" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors">
              Careers
            </Link>
            <Link to="/partnerships" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors">
              Partnerships
            </Link>
          </div>
          
          <div className="mb-4">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Resources</h3>
            <Link to="/blog" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors">
              Blog
            </Link>
            <Link to="/case-studies" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors">
              Case Studies
            </Link>
            <Link to="/pricing" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors">
              Pricing
            </Link>
            <Link to="/api-docs" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors">
              API Docs
            </Link>
            <Link to="/help" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors">
              Help Center
            </Link>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Legal</h3>
            <Link to="/privacy" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors">
              Terms of Service
            </Link>
            <Link to="/cookies" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors">
              Cookie Policy
            </Link>
            <Link to="/accessibility" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors">
              Accessibility
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;