import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="nav-futuristic">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-2xl font-bold gradient-text">Zion Tech Group</h1>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="nav-link-futuristic">
              Home
            </Link>
            <Link to="/about" className="nav-link-futuristic">
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
                className="nav-link-futuristic flex items-center"
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
                  className="absolute left-0 mt-2 w-96 glass-effect z-50"
                >
                  <div className="py-2">
                    <div className="px-4 py-2 text-xs font-semibold text-cyan-400 uppercase tracking-wider border-b border-cyan-500/20">AI & Machine Learning</div>
                    <Link to="/ai-services" className="block px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors">AI Services</Link>
                    <Link to="/ai-solutions" className="block px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors">AI Solutions</Link>
                    <Link to="/ai-content-generator" className="block px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors">AI Content Generator</Link>
                    <Link to="/data-analytics" className="block px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors">Data Analytics</Link>
                    
                    <div className="px-4 py-2 text-xs font-semibold text-cyan-400 uppercase tracking-wider border-b border-cyan-500/20 mt-2">IT Services</div>
                    <Link to="/it-services" className="block px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors">IT Services</Link>
                    <Link to="/web-development" className="block px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors">Web Development</Link>
                    <Link to="/mobile-development" className="block px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors">Mobile Development</Link>
                    <Link to="/database-management" className="block px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors">Database Management</Link>
                    <Link to="/network-infrastructure" className="block px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors">Network Infrastructure</Link>
                    
                    <div className="px-4 py-2 text-xs font-semibold text-cyan-400 uppercase tracking-wider border-b border-cyan-500/20 mt-2">Infrastructure</div>
                    <Link to="/cloud-infrastructure" className="block px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors">Cloud Infrastructure</Link>
                    <Link to="/5g-solutions" className="block px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors">5G Solutions</Link>
                    
                    <div className="px-4 py-2 text-xs font-semibold text-cyan-400 uppercase tracking-wider border-b border-cyan-500/20 mt-2">Business Solutions</div>
                    <Link to="/digital-transformation" className="block px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors">Digital Transformation</Link>
                    <Link to="/micro-saas-solutions" className="block px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors">Micro SaaS Solutions</Link>
                    
                    <div className="px-4 py-2 text-xs font-semibold text-cyan-400 uppercase tracking-wider border-b border-cyan-500/20 mt-2">AI Tools</div>
                    <Link to="/zion-ai-content-moderator" className="block px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors">AI Content Moderator</Link>
                    <Link to="/zion-ai-customer-churn-predictor" className="block px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors">Customer Churn Predictor</Link>
                    <Link to="/zion-ai-customer-churn-predictor-pro" className="block px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors">Customer Churn Predictor Pro</Link>
                    <Link to="/zion-ai-customer-sentiment-tracker" className="block px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors">Customer Sentiment Tracker</Link>
                    <Link to="/zion-ai-customer-support-pro" className="block px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors">Customer Support Pro</Link>
                    <Link to="/zion-ai-document-analyzer" className="block px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors">Document Analyzer</Link>
                    <Link to="/zion-ai-email-marketing-pro" className="block px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors">Email Marketing Pro</Link>
                    <Link to="/zion-ai-financial-forecaster" className="block px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors">Financial Forecaster</Link>
                    <Link to="/zion-ai-inventory-optimizer-pro" className="block px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors">Inventory Optimizer Pro</Link>
                    <Link to="/zion-ai-meeting-transcriber" className="block px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors">Meeting Transcriber</Link>
                    <Link to="/zion-ai-sales-predictor" className="block px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors">Sales Predictor</Link>
                    <Link to="/zion-ai-social-scheduler-pro" className="block px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors">Social Scheduler Pro</Link>
                    <Link to="/zion-ai-task-scheduler" className="block px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors">Task Scheduler</Link>
                    <Link to="/zion-ai-workflow-automator" className="block px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors">Workflow Automator</Link>
                    <Link to="/zion-ai-workflow-automator-pro" className="block px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors">Workflow Automator Pro</Link>
                    <Link to="/zion-customer-satisfaction-monitor" className="block px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors">Customer Satisfaction Monitor</Link>
                    <Link to="/zion-smart-expense-tracker" className="block px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors">Smart Expense Tracker</Link>
                  </div>
                </div>
              )}
            </div>
            
            <Link to="/pricing" className="nav-link-futuristic">
              Pricing
            </Link>
            <Link to="/blog" className="nav-link-futuristic">
              Blog
            </Link>
            <Link to="/team" className="nav-link-futuristic">
              Team
            </Link>
            <Link to="/careers" className="nav-link-futuristic">
              Careers
            </Link>
            <Link to="/contact" className="nav-link-futuristic">
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
        <div className="md:hidden glass-effect mx-4 mt-2 rounded-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors">
              About
            </Link>
            <div className="px-3 py-2">
              <div className="text-gray-300 text-base font-medium mb-2">AI & Machine Learning</div>
              <div className="ml-4 space-y-1">
                <Link to="/ai-services" className="text-gray-400 hover:text-cyan-400 block px-3 py-1 rounded-md text-sm transition-colors">AI Services</Link>
                <Link to="/ai-solutions" className="text-gray-400 hover:text-cyan-400 block px-3 py-1 rounded-md text-sm transition-colors">AI Solutions</Link>
                <Link to="/ai-content-generator" className="text-gray-400 hover:text-cyan-400 block px-3 py-1 rounded-md text-sm transition-colors">AI Content Generator</Link>
                <Link to="/data-analytics" className="text-gray-400 hover:text-cyan-400 block px-3 py-1 rounded-md text-sm transition-colors">Data Analytics</Link>
              </div>
              
              <div className="text-gray-300 text-base font-medium mb-2 mt-4">IT Services</div>
              <div className="ml-4 space-y-1">
                <Link to="/it-services" className="text-gray-400 hover:text-cyan-400 block px-3 py-1 rounded-md text-sm transition-colors">IT Services</Link>
                <Link to="/web-development" className="text-gray-400 hover:text-cyan-400 block px-3 py-1 rounded-md text-sm transition-colors">Web Development</Link>
                <Link to="/mobile-development" className="text-gray-400 hover:text-cyan-400 block px-3 py-1 rounded-md text-sm transition-colors">Mobile Development</Link>
                <Link to="/database-management" className="text-gray-400 hover:text-cyan-400 block px-3 py-1 rounded-md text-sm transition-colors">Database Management</Link>
                <Link to="/network-infrastructure" className="text-gray-400 hover:text-cyan-400 block px-3 py-1 rounded-md text-sm transition-colors">Network Infrastructure</Link>
              </div>
              
              <div className="text-gray-300 text-base font-medium mb-2 mt-4">Infrastructure</div>
              <div className="ml-4 space-y-1">
                <Link to="/cloud-infrastructure" className="text-gray-400 hover:text-cyan-400 block px-3 py-1 rounded-md text-sm transition-colors">Cloud Infrastructure</Link>
                <Link to="/5g-solutions" className="text-gray-400 hover:text-cyan-400 block px-3 py-1 rounded-md text-sm transition-colors">5G Solutions</Link>
              </div>
              
              <div className="text-gray-300 text-base font-medium mb-2 mt-4">Business Solutions</div>
              <div className="ml-4 space-y-1">
                <Link to="/digital-transformation" className="text-gray-400 hover:text-cyan-400 block px-3 py-1 rounded-md text-sm transition-colors">Digital Transformation</Link>
                <Link to="/micro-saas-solutions" className="text-gray-400 hover:text-cyan-400 block px-3 py-1 rounded-md text-sm transition-colors">Micro SaaS Solutions</Link>
              </div>
              
              <div className="text-gray-300 text-base font-medium mb-2 mt-4">AI Tools</div>
              <div className="ml-4 space-y-1">
                <Link to="/zion-ai-content-moderator" className="text-gray-400 hover:text-cyan-400 block px-3 py-1 rounded-md text-sm transition-colors">AI Content Moderator</Link>
                <Link to="/zion-ai-customer-churn-predictor" className="text-gray-400 hover:text-cyan-400 block px-3 py-1 rounded-md text-sm transition-colors">Customer Churn Predictor</Link>
                <Link to="/zion-ai-customer-churn-predictor-pro" className="text-gray-400 hover:text-cyan-400 block px-3 py-1 rounded-md text-sm transition-colors">Customer Churn Predictor Pro</Link>
                <Link to="/zion-ai-customer-sentiment-tracker" className="text-gray-400 hover:text-cyan-400 block px-3 py-1 rounded-md text-sm transition-colors">Customer Sentiment Tracker</Link>
                <Link to="/zion-ai-customer-support-pro" className="text-gray-400 hover:text-cyan-400 block px-3 py-1 rounded-md text-sm transition-colors">Customer Support Pro</Link>
                <Link to="/zion-ai-document-analyzer" className="text-gray-400 hover:text-cyan-400 block px-3 py-1 rounded-md text-sm transition-colors">Document Analyzer</Link>
                <Link to="/zion-ai-email-marketing-pro" className="text-gray-400 hover:text-cyan-400 block px-3 py-1 rounded-md text-sm transition-colors">Email Marketing Pro</Link>
                <Link to="/zion-ai-financial-forecaster" className="text-gray-400 hover:text-cyan-400 block px-3 py-1 rounded-md text-sm transition-colors">Financial Forecaster</Link>
                <Link to="/zion-ai-inventory-optimizer-pro" className="text-gray-400 hover:text-cyan-400 block px-3 py-1 rounded-md text-sm transition-colors">Inventory Optimizer Pro</Link>
                <Link to="/zion-ai-meeting-transcriber" className="text-gray-400 hover:text-cyan-400 block px-3 py-1 rounded-md text-sm transition-colors">Meeting Transcriber</Link>
                <Link to="/zion-ai-sales-predictor" className="text-gray-400 hover:text-cyan-400 block px-3 py-1 rounded-md text-sm transition-colors">Sales Predictor</Link>
                <Link to="/zion-ai-social-scheduler-pro" className="text-gray-400 hover:text-cyan-400 block px-3 py-1 rounded-md text-sm transition-colors">Social Scheduler Pro</Link>
                <Link to="/zion-ai-task-scheduler" className="text-gray-400 hover:text-cyan-400 block px-3 py-1 rounded-md text-sm transition-colors">Task Scheduler</Link>
                <Link to="/zion-ai-workflow-automator" className="text-gray-400 hover:text-cyan-400 block px-3 py-1 rounded-md text-sm transition-colors">Workflow Automator</Link>
                <Link to="/zion-ai-workflow-automator-pro" className="text-gray-400 hover:text-cyan-400 block px-3 py-1 rounded-md text-sm transition-colors">Workflow Automator Pro</Link>
                <Link to="/zion-customer-satisfaction-monitor" className="text-gray-400 hover:text-cyan-400 block px-3 py-1 rounded-md text-sm transition-colors">Customer Satisfaction Monitor</Link>
                <Link to="/zion-smart-expense-tracker" className="text-gray-400 hover:text-cyan-400 block px-3 py-1 rounded-md text-sm transition-colors">Smart Expense Tracker</Link>
              </div>
            </div>
            <Link to="/pricing" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors">
              Pricing
            </Link>
            <Link to="/blog" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors">
              Blog
            </Link>
            <Link to="/team" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors">
              Team
            </Link>
            <Link to="/careers" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors">
              Careers
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;