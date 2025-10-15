import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <div className="hidden lg:block lg:w-64 lg:flex-shrink-0">
      <div className="h-full flex flex-col bg-gray-50 border-r border-gray-200">
        <div className="p-4">
          <h2 className="text-lg font-semibold text-gray-900">Quick Navigation</h2>
        </div>
        <nav className="flex-1 px-4 pb-4 space-y-1 overflow-y-auto">
          <div className="mb-4">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Main Services</h3>
            <Link to="/ai-services" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              AI Services
            </Link>
            <Link to="/it-services" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              IT Services
            </Link>
            <Link to="/cloud-infrastructure" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              Cloud Infrastructure
            </Link>
            <Link to="/5g-solutions" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              5G Solutions
            </Link>
            <Link to="/web-development" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              Web Development
            </Link>
            <Link to="/mobile-development" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              Mobile Development
            </Link>
            <Link to="/micro-saas-solutions" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              Micro SaaS Solutions
            </Link>
            <Link to="/api-development" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              API Development
            </Link>
            <Link to="/blockchain-solutions" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              Blockchain Solutions
            </Link>
            <Link to="/iot-solutions" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              IoT Solutions
            </Link>
            <Link to="/data-engineering" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              Data Engineering
            </Link>
            <Link to="/devops-automation" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              DevOps Automation
            </Link>
            <Link to="/security-audit" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              Security Audit
            </Link>
          </div>
          
          <div className="mb-4">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Micro SaaS Solutions</h3>
            <Link to="/ai-chatbot-builder" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              AI Chatbot Builder
            </Link>
            <Link to="/ai-form-builder" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              AI Form Builder
            </Link>
            <Link to="/ai-document-processor" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              AI Document Processor
            </Link>
            <Link to="/ai-scheduling-assistant" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              AI Scheduling Assistant
            </Link>
            <Link to="/ai-social-media-manager" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              AI Social Media Manager
            </Link>
            <Link to="/ai-crm-optimizer" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              AI CRM Optimizer
            </Link>
            <Link to="/ai-email-optimizer" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              AI Email Optimizer
            </Link>
            <Link to="/ai-website-analyzer" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              AI Website Analyzer
            </Link>
            <Link to="/ai-data-visualizer" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              AI Data Visualizer
            </Link>
            <Link to="/task-manager" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              Task Manager Pro
            </Link>
            <Link to="/expense-tracker" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              Smart Expense Tracker
            </Link>
            <Link to="/workflow-automator" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              Workflow Automator
            </Link>
          </div>
          
          <div className="mb-4">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Company</h3>
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
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Resources</h3>
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
            <Link to="/help" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              Help Center
            </Link>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Legal</h3>
            <Link to="/privacy" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              Privacy Policy
            </Link>
            <Link to="/terms" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              Terms of Service
            </Link>
            <Link to="/cookies" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              Cookie Policy
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