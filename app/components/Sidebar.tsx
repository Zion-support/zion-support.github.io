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
          </div>
          
          <div className="mb-4">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">AI Tools</h3>
            <Link to="/zion-ai-content-moderator" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              Content Moderator
            </Link>
            <Link to="/zion-ai-customer-churn-predictor" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              Churn Predictor
            </Link>
            <Link to="/zion-ai-sales-predictor" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              Sales Predictor
            </Link>
            <Link to="/zion-ai-workflow-automator" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              Workflow Automator
            </Link>
            <Link to="/zion-ai-financial-forecaster" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              Financial Forecaster
            </Link>
            <Link to="/zion-ai-document-analyzer" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              Document Analyzer
            </Link>
            <Link to="/zion-ai-task-scheduler" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              Task Scheduler
            </Link>
            <Link to="/zion-ai-customer-sentiment-tracker" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              Sentiment Tracker
            </Link>
            <Link to="/zion-ai-meeting-transcriber" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              Meeting Transcriber
            </Link>
          </div>
          
          <div className="mb-4">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">AI Services</h3>
            <Link to="/ai-chatbot-builder" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              AI Chatbot Builder
            </Link>
            <Link to="/ai-document-processor" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              AI Document Processor
            </Link>
            <Link to="/ai-form-builder" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              AI Form Builder
            </Link>
            <Link to="/ai-voice-assistant" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              AI Voice Assistant
            </Link>
            <Link to="/ai-fraud-detection" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              AI Fraud Detection
            </Link>
            <Link to="/ai-image-recognition" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              AI Image Recognition
            </Link>
            <Link to="/ai-lead-scoring" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              AI Lead Scoring
            </Link>
            <Link to="/ai-predictive-maintenance" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              AI Predictive Maintenance
            </Link>
            <Link to="/ai-price-optimizer" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              AI Price Optimizer
            </Link>
            <Link to="/ai-scheduling-assistant" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              AI Scheduling Assistant
            </Link>
          </div>
          
          <div className="mb-4">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Advanced Solutions</h3>
            <Link to="/blockchain-solutions" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              Blockchain Solutions
            </Link>
            <Link to="/iot-solutions" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              IoT Solutions
            </Link>
            <Link to="/devops-automation" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              DevOps Automation
            </Link>
            <Link to="/data-engineering" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              Data Engineering
            </Link>
            <Link to="/api-development" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              API Development
            </Link>
            <Link to="/security-audit" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md">
              Security Audit
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