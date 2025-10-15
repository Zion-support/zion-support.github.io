import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-blue-600">Zion Tech Group</h1>
            </Link>
          </div>
          
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
              >
                Services
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isServicesOpen && (
                <div
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                  className="absolute left-0 mt-2 w-96 bg-white rounded-md shadow-lg border z-50"
                >
                  <div className="p-4">
                    <div className="grid grid-cols-1 gap-4">
                      {/* AI Services */}
                      <div>
                        <h3 className="text-sm font-semibold text-gray-900 mb-2">AI Services</h3>
                        <div className="space-y-1">
                          <Link to="/ai-services" className="block text-sm text-gray-600 hover:text-blue-600 py-1">All AI Services</Link>
                          <Link to="/ai-content-generator" className="block text-sm text-gray-600 hover:text-blue-600 py-1">AI Content Generator Pro</Link>
                          <Link to="/zion-ai-customer-support-pro" className="block text-sm text-gray-600 hover:text-blue-600 py-1">AI Customer Support Pro</Link>
                          <Link to="/zion-ai-workflow-automator-pro" className="block text-sm text-gray-600 hover:text-blue-600 py-1">AI Workflow Automator Pro</Link>
                        </div>
                      </div>
                      
                      {/* Micro SaaS */}
                      <div>
                        <h3 className="text-sm font-semibold text-gray-900 mb-2">Micro SaaS Solutions</h3>
                        <div className="space-y-1">
                          <Link to="/micro-saas-solutions" className="block text-sm text-gray-600 hover:text-blue-600 py-1">All Micro SaaS</Link>
                          <Link to="/zion-smart-expense-tracker" className="block text-sm text-gray-600 hover:text-blue-600 py-1">Smart Expense Tracker</Link>
                          <Link to="/zion-ai-inventory-optimizer-pro" className="block text-sm text-gray-600 hover:text-blue-600 py-1">Inventory Optimizer Pro</Link>
                          <Link to="/zion-ai-email-marketing-pro" className="block text-sm text-gray-600 hover:text-blue-600 py-1">Email Marketing Pro</Link>
                          <Link to="/zion-ai-social-scheduler-pro" className="block text-sm text-gray-600 hover:text-blue-600 py-1">Social Scheduler Pro</Link>
                          <Link to="/zion-ai-financial-forecaster" className="block text-sm text-gray-600 hover:text-blue-600 py-1">Financial Forecaster Pro</Link>
                        </div>
                      </div>
                      
                      {/* IT Solutions */}
                      <div>
                        <h3 className="text-sm font-semibold text-gray-900 mb-2">IT Solutions</h3>
                        <div className="space-y-1">
                          <Link to="/it-services" className="block text-sm text-gray-600 hover:text-blue-600 py-1">All IT Services</Link>
                          <Link to="/cloud-infrastructure" className="block text-sm text-gray-600 hover:text-blue-600 py-1">Cloud Infrastructure</Link>
                          <Link to="/web-development" className="block text-sm text-gray-600 hover:text-blue-600 py-1">Web Development</Link>
                          <Link to="/mobile-development" className="block text-sm text-gray-600 hover:text-blue-600 py-1">Mobile Development</Link>
                          <Link to="/data-analytics" className="block text-sm text-gray-600 hover:text-blue-600 py-1">Data Analytics</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <Link to="/pricing" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Pricing
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Contact
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Blog
            </Link>
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
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
              About
            </Link>
            
            {/* Mobile Services Menu */}
            <div className="px-3 py-2">
              <div className="text-sm font-semibold text-gray-900 mb-2">AI Services</div>
              <div className="ml-4 space-y-1">
                <Link to="/ai-services" className="text-gray-600 hover:text-blue-600 block py-1 text-sm">All AI Services</Link>
                <Link to="/ai-content-generator" className="text-gray-600 hover:text-blue-600 block py-1 text-sm">AI Content Generator Pro</Link>
                <Link to="/zion-ai-customer-support-pro" className="text-gray-600 hover:text-blue-600 block py-1 text-sm">AI Customer Support Pro</Link>
                <Link to="/zion-ai-workflow-automator-pro" className="text-gray-600 hover:text-blue-600 block py-1 text-sm">AI Workflow Automator Pro</Link>
              </div>
            </div>
            
            <div className="px-3 py-2">
              <div className="text-sm font-semibold text-gray-900 mb-2">Micro SaaS Solutions</div>
              <div className="ml-4 space-y-1">
                <Link to="/micro-saas-solutions" className="text-gray-600 hover:text-blue-600 block py-1 text-sm">All Micro SaaS</Link>
                <Link to="/zion-smart-expense-tracker" className="text-gray-600 hover:text-blue-600 block py-1 text-sm">Smart Expense Tracker</Link>
                <Link to="/zion-ai-inventory-optimizer-pro" className="text-gray-600 hover:text-blue-600 block py-1 text-sm">Inventory Optimizer Pro</Link>
                <Link to="/zion-ai-email-marketing-pro" className="text-gray-600 hover:text-blue-600 block py-1 text-sm">Email Marketing Pro</Link>
                <Link to="/zion-ai-social-scheduler-pro" className="text-gray-600 hover:text-blue-600 block py-1 text-sm">Social Scheduler Pro</Link>
                <Link to="/zion-ai-financial-forecaster" className="text-gray-600 hover:text-blue-600 block py-1 text-sm">Financial Forecaster Pro</Link>
              </div>
            </div>
            
            <div className="px-3 py-2">
              <div className="text-sm font-semibold text-gray-900 mb-2">IT Solutions</div>
              <div className="ml-4 space-y-1">
                <Link to="/it-services" className="text-gray-600 hover:text-blue-600 block py-1 text-sm">All IT Services</Link>
                <Link to="/cloud-infrastructure" className="text-gray-600 hover:text-blue-600 block py-1 text-sm">Cloud Infrastructure</Link>
                <Link to="/web-development" className="text-gray-600 hover:text-blue-600 block py-1 text-sm">Web Development</Link>
                <Link to="/mobile-development" className="text-gray-600 hover:text-blue-600 block py-1 text-sm">Mobile Development</Link>
                <Link to="/data-analytics" className="text-gray-600 hover:text-blue-600 block py-1 text-sm">Data Analytics</Link>
              </div>
            </div>
            
            <Link to="/pricing" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
              Pricing
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
              Contact
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
              Blog
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;