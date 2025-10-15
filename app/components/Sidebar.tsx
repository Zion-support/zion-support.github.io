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
          <div className="mb-4">
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">AI Services</h3>
            <Link to="/ai-services" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              AI Development
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
          
          <div className="mb-4">
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">IT Services</h3>
            <Link to="/it-services" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              IT Services
            </Link>
            <Link to="/cloud-infrastructure" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              Cloud Infrastructure
            </Link>
            <Link to="/network-infrastructure" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              Network Infrastructure
            </Link>
            <Link to="/database-management" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              Database Management
            </Link>
            <Link to="/5g-solutions" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              5G Solutions
            </Link>
          </div>
          
          <div className="mb-4">
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">Micro SaaS</h3>
            <Link to="/micro-saas-solutions" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              Micro SaaS Solutions
            </Link>
            <Link to="/zion-ai-task-scheduler" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              AI Task Scheduler
            </Link>
            <Link to="/zion-ai-customer-support-pro" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              AI Customer Support
            </Link>
            <Link to="/zion-ai-workflow-automator-pro" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              AI Workflow Automator
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