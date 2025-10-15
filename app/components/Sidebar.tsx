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
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Core Services</div>
            <Link to="/services" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              All Services
            </Link>
            <Link to="/ai-services" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              AI Services
            </Link>
            <Link to="/it-services" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              IT Services
            </Link>
            <Link to="/cloud-infrastructure" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              Cloud Infrastructure
            </Link>
            <Link to="/digital-transformation" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              Digital Transformation
            </Link>
            <Link to="/data-analytics" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              Data Analytics
            </Link>
            <Link to="/web-development" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              Web Development
            </Link>
            <Link to="/mobile-development" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              Mobile Development
            </Link>
          </div>
          
          <div className="space-y-1 mt-6">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Micro SaaS Solutions</div>
            <Link to="/micro-saas-solutions" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              All Micro SaaS
            </Link>
            <Link to="/ai-content-generator" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              AI Content Generator
            </Link>
            <Link to="/zion-ai-customer-support-pro" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              AI Customer Support Pro
            </Link>
            <Link to="/zion-ai-workflow-automator-pro" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              AI Workflow Automator Pro
            </Link>
            <Link to="/zion-ai-email-marketing-pro" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              AI Email Marketing Pro
            </Link>
            <Link to="/zion-smart-expense-tracker" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              Smart Expense Tracker
            </Link>
          </div>
          
          <div className="space-y-1 mt-6">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">AI Tools</div>
            <Link to="/zion-ai-content-moderator" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              Content Moderator
            </Link>
            <Link to="/zion-ai-customer-churn-predictor" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              Churn Predictor
            </Link>
            <Link to="/zion-ai-sales-predictor" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              Sales Predictor
            </Link>
            <Link to="/zion-ai-financial-forecaster" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              Financial Forecaster
            </Link>
          </div>
          
          <div className="space-y-1 mt-6">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Company</div>
            <Link to="/about" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              About
            </Link>
            <Link to="/team" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              Team
            </Link>
            <Link to="/careers" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              Careers
            </Link>
            <Link to="/pricing" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              Pricing
            </Link>
          </div>
          
          <div className="space-y-1 mt-6">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Resources</div>
            <Link to="/blog" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              Blog
            </Link>
            <Link to="/case-studies" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              Case Studies
            </Link>
            <Link to="/api-docs" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              API Documentation
            </Link>
          </div>
          
          <div className="space-y-1 mt-6">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Support</div>
            <Link to="/help" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              Help
            </Link>
            <Link to="/contact" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              Contact
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