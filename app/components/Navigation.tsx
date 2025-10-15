import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [zionAIOpen, setZionAIOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
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
                  className="absolute left-0 mt-2 w-80 bg-white rounded-md shadow-lg z-50"
                >
                  <div className="py-1">
                    <Link to="/services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-semibold">All Services</Link>
                    <div className="border-t border-gray-100 my-1"></div>
                    
                    <div className="px-4 py-2">
                      <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">AI Services</h4>
                      <Link to="/ai-services" className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100">AI Services</Link>
                      <Link to="/ai-solutions" className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100">AI Solutions</Link>
                      <Link to="/ai-content-generator" className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100">AI Content Generator</Link>
                      <Link to="/ai-voice-assistant" className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100">AI Voice Assistant</Link>
                      <Link to="/ai-image-recognition" className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100">AI Image Recognition</Link>
                      <Link to="/ai-predictive-maintenance" className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100">AI Predictive Maintenance</Link>
                      <Link to="/ai-fraud-detection" className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100">AI Fraud Detection</Link>
                      <Link to="/data-analytics" className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100">Data Analytics</Link>
                    </div>
                    
                    <div className="px-4 py-2">
                      <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">IT Services</h4>
                      <Link to="/it-services" className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100">IT Services</Link>
                      <Link to="/web-development" className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100">Web Development</Link>
                      <Link to="/mobile-development" className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100">Mobile Development</Link>
                      <Link to="/database-management" className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100">Database Management</Link>
                      <Link to="/blockchain-solutions" className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100">Blockchain Solutions</Link>
                      <Link to="/iot-solutions" className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100">IoT Solutions</Link>
                      <Link to="/devops-automation" className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100">DevOps & Automation</Link>
                      <Link to="/api-development" className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100">API Development</Link>
                      <Link to="/data-engineering" className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100">Data Engineering</Link>
                      <Link to="/security-audit" className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100">Security Audit</Link>
                    </div>
                    
                    <div className="px-4 py-2">
                      <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Infrastructure</h4>
                      <Link to="/cloud-infrastructure" className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100">Cloud Infrastructure</Link>
                      <Link to="/network-infrastructure" className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100">Network Infrastructure</Link>
                      <Link to="/5g-solutions" className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100">5G Solutions</Link>
                    </div>
                    
                    <div className="px-4 py-2">
                      <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Micro SaaS</h4>
                      <Link to="/micro-saas-solutions" className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100">Micro SaaS Solutions</Link>
                      <Link to="/ai-chatbot-builder" className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100">AI Chatbot Builder</Link>
                      <Link to="/ai-form-builder" className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100">AI Form Builder</Link>
                      <Link to="/ai-scheduling-assistant" className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100">AI Scheduling Assistant</Link>
                      <Link to="/ai-document-processor" className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100">AI Document Processor</Link>
                      <Link to="/ai-lead-scoring" className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100">AI Lead Scoring</Link>
                      <Link to="/ai-price-optimizer" className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100">AI Price Optimizer</Link>
                    </div>
                    
                    <div className="px-4 py-2">
                      <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Specialized</h4>
                      <Link to="/digital-transformation" className="block px-2 py-1 text-sm text-gray-700 hover:bg-gray-100">Digital Transformation</Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Zion AI Products Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setZionAIOpen(true)}
                onMouseLeave={() => setZionAIOpen(false)}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium flex items-center"
              >
                Zion AI Products
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {zionAIOpen && (
                <div
                  onMouseEnter={() => setZionAIOpen(true)}
                  onMouseLeave={() => setZionAIOpen(false)}
                  className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg z-50 max-h-96 overflow-y-auto"
                >
                  <div className="py-1">
                    <Link to="/zion-ai-content-moderator" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Content Moderator</Link>
                    <Link to="/zion-ai-customer-churn-predictor" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Customer Churn Predictor</Link>
                    <Link to="/zion-ai-customer-churn-predictor-pro" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Customer Churn Predictor Pro</Link>
                    <Link to="/zion-ai-customer-sentiment-tracker" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Customer Sentiment Tracker</Link>
                    <Link to="/zion-ai-customer-support-pro" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Customer Support Pro</Link>
                    <Link to="/zion-ai-document-analyzer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Document Analyzer</Link>
                    <Link to="/zion-ai-email-marketing-pro" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Email Marketing Pro</Link>
                    <Link to="/zion-ai-financial-forecaster" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Financial Forecaster</Link>
                    <Link to="/zion-ai-inventory-optimizer-pro" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Inventory Optimizer Pro</Link>
                    <Link to="/zion-ai-meeting-transcriber" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Meeting Transcriber</Link>
                    <Link to="/zion-ai-sales-predictor" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sales Predictor</Link>
                    <Link to="/zion-ai-social-scheduler-pro" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Social Scheduler Pro</Link>
                    <Link to="/zion-ai-task-scheduler" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Task Scheduler</Link>
                    <Link to="/zion-ai-workflow-automator" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Workflow Automator</Link>
                    <Link to="/zion-ai-workflow-automator-pro" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Workflow Automator Pro</Link>
                    <Link to="/zion-customer-satisfaction-monitor" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Customer Satisfaction Monitor</Link>
                    <Link to="/zion-smart-expense-tracker" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Smart Expense Tracker</Link>
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
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
              About
            </Link>
            <div className="px-3 py-2">
              <div className="text-gray-700 text-base font-medium mb-2">Services</div>
              <div className="ml-4 space-y-1">
                <Link to="/services" className="text-gray-600 hover:text-blue-600 block px-3 py-1 rounded-md text-sm font-semibold">All Services</Link>
                
                <div className="ml-2 mt-2">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">AI Services</div>
                  <Link to="/ai-services" className="text-gray-600 hover:text-blue-600 block px-3 py-1 rounded-md text-sm">AI Services</Link>
                  <Link to="/ai-solutions" className="text-gray-600 hover:text-blue-600 block px-3 py-1 rounded-md text-sm">AI Solutions</Link>
                  <Link to="/ai-content-generator" className="text-gray-600 hover:text-blue-600 block px-3 py-1 rounded-md text-sm">AI Content Generator</Link>
                  <Link to="/ai-voice-assistant" className="text-gray-600 hover:text-blue-600 block px-3 py-1 rounded-md text-sm">AI Voice Assistant</Link>
                  <Link to="/ai-image-recognition" className="text-gray-600 hover:text-blue-600 block px-3 py-1 rounded-md text-sm">AI Image Recognition</Link>
                  <Link to="/ai-predictive-maintenance" className="text-gray-600 hover:text-blue-600 block px-3 py-1 rounded-md text-sm">AI Predictive Maintenance</Link>
                  <Link to="/ai-fraud-detection" className="text-gray-600 hover:text-blue-600 block px-3 py-1 rounded-md text-sm">AI Fraud Detection</Link>
                  <Link to="/data-analytics" className="text-gray-600 hover:text-blue-600 block px-3 py-1 rounded-md text-sm">Data Analytics</Link>
                </div>
                
                <div className="ml-2 mt-2">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">IT Services</div>
                  <Link to="/it-services" className="text-gray-600 hover:text-blue-600 block px-3 py-1 rounded-md text-sm">IT Services</Link>
                  <Link to="/web-development" className="text-gray-600 hover:text-blue-600 block px-3 py-1 rounded-md text-sm">Web Development</Link>
                  <Link to="/mobile-development" className="text-gray-600 hover:text-blue-600 block px-3 py-1 rounded-md text-sm">Mobile Development</Link>
                  <Link to="/database-management" className="text-gray-600 hover:text-blue-600 block px-3 py-1 rounded-md text-sm">Database Management</Link>
                  <Link to="/blockchain-solutions" className="text-gray-600 hover:text-blue-600 block px-3 py-1 rounded-md text-sm">Blockchain Solutions</Link>
                  <Link to="/iot-solutions" className="text-gray-600 hover:text-blue-600 block px-3 py-1 rounded-md text-sm">IoT Solutions</Link>
                  <Link to="/devops-automation" className="text-gray-600 hover:text-blue-600 block px-3 py-1 rounded-md text-sm">DevOps & Automation</Link>
                  <Link to="/api-development" className="text-gray-600 hover:text-blue-600 block px-3 py-1 rounded-md text-sm">API Development</Link>
                  <Link to="/data-engineering" className="text-gray-600 hover:text-blue-600 block px-3 py-1 rounded-md text-sm">Data Engineering</Link>
                  <Link to="/security-audit" className="text-gray-600 hover:text-blue-600 block px-3 py-1 rounded-md text-sm">Security Audit</Link>
                </div>
                
                <div className="ml-2 mt-2">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Infrastructure</div>
                  <Link to="/cloud-infrastructure" className="text-gray-600 hover:text-blue-600 block px-3 py-1 rounded-md text-sm">Cloud Infrastructure</Link>
                  <Link to="/network-infrastructure" className="text-gray-600 hover:text-blue-600 block px-3 py-1 rounded-md text-sm">Network Infrastructure</Link>
                  <Link to="/5g-solutions" className="text-gray-600 hover:text-blue-600 block px-3 py-1 rounded-md text-sm">5G Solutions</Link>
                </div>
                
                <div className="ml-2 mt-2">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Micro SaaS</div>
                  <Link to="/micro-saas-solutions" className="text-gray-600 hover:text-blue-600 block px-3 py-1 rounded-md text-sm">Micro SaaS Solutions</Link>
                  <Link to="/ai-chatbot-builder" className="text-gray-600 hover:text-blue-600 block px-3 py-1 rounded-md text-sm">AI Chatbot Builder</Link>
                  <Link to="/ai-form-builder" className="text-gray-600 hover:text-blue-600 block px-3 py-1 rounded-md text-sm">AI Form Builder</Link>
                  <Link to="/ai-scheduling-assistant" className="text-gray-600 hover:text-blue-600 block px-3 py-1 rounded-md text-sm">AI Scheduling Assistant</Link>
                  <Link to="/ai-document-processor" className="text-gray-600 hover:text-blue-600 block px-3 py-1 rounded-md text-sm">AI Document Processor</Link>
                  <Link to="/ai-lead-scoring" className="text-gray-600 hover:text-blue-600 block px-3 py-1 rounded-md text-sm">AI Lead Scoring</Link>
                  <Link to="/ai-price-optimizer" className="text-gray-600 hover:text-blue-600 block px-3 py-1 rounded-md text-sm">AI Price Optimizer</Link>
                </div>
                
                <div className="ml-2 mt-2">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">Specialized</div>
                  <Link to="/digital-transformation" className="text-gray-600 hover:text-blue-600 block px-3 py-1 rounded-md text-sm">Digital Transformation</Link>
                </div>
              </div>
            </div>
            <div className="px-3 py-2">
              <div className="text-gray-700 text-base font-medium mb-2">Zion AI Products</div>
              <div className="ml-4 space-y-1 max-h-48 overflow-y-auto">
                <Link to="/zion-ai-content-moderator" className="text-gray-600 hover:text-blue-600 block px-3 py-1 rounded-md text-sm">Content Moderator</Link>
                <Link to="/zion-ai-customer-churn-predictor" className="text-gray-600 hover:text-blue-600 block px-3 py-1 rounded-md text-sm">Customer Churn Predictor</Link>
                <Link to="/zion-ai-customer-churn-predictor-pro" className="text-gray-600 hover:text-blue-600 block px-3 py-1 rounded-md text-sm">Customer Churn Predictor Pro</Link>
                <Link to="/zion-ai-customer-sentiment-tracker" className="text-gray-600 hover:text-blue-600 block px-3 py-1 rounded-md text-sm">Customer Sentiment Tracker</Link>
                <Link to="/zion-ai-customer-support-pro" className="text-gray-600 hover:text-blue-600 block px-3 py-1 rounded-md text-sm">Customer Support Pro</Link>
                <Link to="/zion-ai-document-analyzer" className="text-gray-600 hover:text-blue-600 block px-3 py-1 rounded-md text-sm">Document Analyzer</Link>
                <Link to="/zion-ai-email-marketing-pro" className="text-gray-600 hover:text-blue-600 block px-3 py-1 rounded-md text-sm">Email Marketing Pro</Link>
                <Link to="/zion-ai-financial-forecaster" className="text-gray-600 hover:text-blue-600 block px-3 py-1 rounded-md text-sm">Financial Forecaster</Link>
                <Link to="/zion-ai-inventory-optimizer-pro" className="text-gray-600 hover:text-blue-600 block px-3 py-1 rounded-md text-sm">Inventory Optimizer Pro</Link>
                <Link to="/zion-ai-meeting-transcriber" className="text-gray-600 hover:text-blue-600 block px-3 py-1 rounded-md text-sm">Meeting Transcriber</Link>
                <Link to="/zion-ai-sales-predictor" className="text-gray-600 hover:text-blue-600 block px-3 py-1 rounded-md text-sm">Sales Predictor</Link>
                <Link to="/zion-ai-social-scheduler-pro" className="text-gray-600 hover:text-blue-600 block px-3 py-1 rounded-md text-sm">Social Scheduler Pro</Link>
                <Link to="/zion-ai-task-scheduler" className="text-gray-600 hover:text-blue-600 block px-3 py-1 rounded-md text-sm">Task Scheduler</Link>
                <Link to="/zion-ai-workflow-automator" className="text-gray-600 hover:text-blue-600 block px-3 py-1 rounded-md text-sm">Workflow Automator</Link>
                <Link to="/zion-ai-workflow-automator-pro" className="text-gray-600 hover:text-blue-600 block px-3 py-1 rounded-md text-sm">Workflow Automator Pro</Link>
                <Link to="/zion-customer-satisfaction-monitor" className="text-gray-600 hover:text-blue-600 block px-3 py-1 rounded-md text-sm">Customer Satisfaction Monitor</Link>
                <Link to="/zion-smart-expense-tracker" className="text-gray-600 hover:text-blue-600 block px-3 py-1 rounded-md text-sm">Smart Expense Tracker</Link>
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