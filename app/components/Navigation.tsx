import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <div className="text-2xl font-bold text-blue-600">Zion Tech Group</div>
            </Link>
          </div>
          
          <div className="hidden lg:flex items-center space-x-1">
            <Link to="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors">
                Services
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-80 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border">
                <div className="py-2">
                  <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">AI Services</div>
                  <Link to="/ai-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">AI Development & Consulting</Link>
                  <Link to="/ai-solutions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">AI Solutions</Link>
                  <div className="border-t my-2"></div>
                  <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">IT Services</div>
                  <Link to="/it-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">IT Services</Link>
                  <Link to="/cloud-infrastructure" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Cloud Infrastructure</Link>
                  <Link to="/network-infrastructure" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Network Infrastructure</Link>
                  <Link to="/database-management" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Database Management</Link>
                  <div className="border-t my-2"></div>
                  <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Development</div>
                  <Link to="/web-development" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Web Development</Link>
                  <Link to="/mobile-development" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Mobile Development</Link>
                  <Link to="/digital-transformation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Digital Transformation</Link>
                  <Link to="/data-analytics" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Data Analytics</Link>
                </div>
              </div>
            </div>

            {/* Micro SaaS Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors">
                Micro SaaS
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-80 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border">
                <div className="py-2">
                  <Link to="/micro-saas-solutions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-semibold">All Micro SaaS Solutions</Link>
                  <div className="border-t my-2"></div>
                  <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Business Management</div>
                  <Link to="/zion-task-pro" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">ZionTask Pro - Task Management</Link>
                  <Link to="/zion-crm" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">ZionCRM - Customer Management</Link>
                  <Link to="/zion-hr" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">ZionHR - HR Management</Link>
                  <div className="border-t my-2"></div>
                  <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Analytics & Finance</div>
                  <Link to="/zion-analytics" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">ZionAnalytics - Business Intelligence</Link>
                  <Link to="/zion-finance" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">ZionFinance - Financial Management</Link>
                  <Link to="/zion-inventory" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">ZionInventory - Inventory Management</Link>
                </div>
              </div>
            </div>

            {/* AI Tools Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors">
                AI Tools
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-80 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border">
                <div className="py-2">
                  <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Content & Marketing</div>
                  <Link to="/zion-ai-content-moderator" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Content Moderator</Link>
                  <Link to="/zion-ai-email-marketing-pro" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Email Marketing Pro</Link>
                  <Link to="/zion-ai-social-scheduler-pro" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Social Scheduler Pro</Link>
                  <div className="border-t my-2"></div>
                  <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Business Intelligence</div>
                  <Link to="/zion-ai-customer-churn-predictor" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Customer Churn Predictor</Link>
                  <Link to="/zion-ai-sales-predictor" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sales Predictor</Link>
                  <Link to="/zion-ai-financial-forecaster" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Financial Forecaster</Link>
                  <div className="border-t my-2"></div>
                  <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Automation</div>
                  <Link to="/zion-ai-workflow-automator" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Workflow Automator</Link>
                  <Link to="/zion-ai-task-scheduler" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Task Scheduler</Link>
                </div>
              </div>
            </div>

            <Link to="/pricing" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Pricing
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Contact
            </Link>
            
            {/* CTA Button */}
            <a 
              href="tel:+13024640950" 
              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors ml-2"
            >
              Call Now
            </a>
          </div>

          <div className="lg:hidden flex items-center">
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
        <div className="lg:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 max-h-96 overflow-y-auto">
            <Link to="/" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
              About
            </Link>
            
            <div className="px-3 py-2 text-base font-medium text-gray-700">Services</div>
            <div className="pl-6 space-y-1">
              <Link to="/ai-services" className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-sm">AI Services</Link>
              <Link to="/it-services" className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-sm">IT Services</Link>
              <Link to="/cloud-infrastructure" className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-sm">Cloud Infrastructure</Link>
              <Link to="/web-development" className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-sm">Web Development</Link>
              <Link to="/mobile-development" className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-sm">Mobile Development</Link>
            </div>
            
            <div className="px-3 py-2 text-base font-medium text-gray-700">Micro SaaS</div>
            <div className="pl-6 space-y-1">
              <Link to="/micro-saas-solutions" className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-sm">All Solutions</Link>
              <Link to="/zion-task-pro" className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-sm">Task Management</Link>
              <Link to="/zion-crm" className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-sm">CRM System</Link>
              <Link to="/zion-analytics" className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-sm">Analytics Platform</Link>
            </div>
            
            <div className="px-3 py-2 text-base font-medium text-gray-700">AI Tools</div>
            <div className="pl-6 space-y-1">
              <Link to="/zion-ai-content-moderator" className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-sm">Content Moderator</Link>
              <Link to="/zion-ai-customer-churn-predictor" className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-sm">Churn Predictor</Link>
              <Link to="/zion-ai-sales-predictor" className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-sm">Sales Predictor</Link>
              <Link to="/zion-ai-workflow-automator" className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-sm">Workflow Automator</Link>
            </div>
            
            <Link to="/pricing" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
              Pricing
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
              Contact
            </Link>
            
            <a 
              href="tel:+13024640950" 
              className="bg-blue-600 text-white block px-3 py-2 rounded-md text-base font-medium text-center hover:bg-blue-700"
            >
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;