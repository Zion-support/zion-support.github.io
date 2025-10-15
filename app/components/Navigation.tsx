import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

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
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                Services
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {servicesOpen && (
                <div 
                  className="absolute left-0 mt-2 w-80 bg-white rounded-md shadow-lg border border-gray-200 z-50"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <div className="py-2">
                    <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">AI Services</div>
                    <Link to="/ai-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">AI Development</Link>
                    <Link to="/ai-content-generator" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">AI Content Generator</Link>
                    <Link to="/zion-ai-customer-support-pro" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">AI Customer Support</Link>
                    <Link to="/zion-ai-sales-predictor" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">AI Sales Predictor</Link>
                    
                    <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Micro SaaS</div>
                    <Link to="/micro-saas-solutions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">All Micro SaaS</Link>
                    <Link to="/zion-smart-expense-tracker" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Smart Expense Tracker</Link>
                    <Link to="/zion-ai-workflow-automator-pro" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Workflow Automator</Link>
                    <Link to="/zion-ai-inventory-optimizer-pro" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Inventory Optimizer</Link>
                    
                    <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">IT Solutions</div>
                    <Link to="/it-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">IT Services</Link>
                    <Link to="/web-development" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Web Development</Link>
                    <Link to="/mobile-development" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Mobile Development</Link>
                    <Link to="/cloud-infrastructure" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Cloud Infrastructure</Link>
                    <Link to="/data-analytics" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Data Analytics</Link>
                    <Link to="/5g-solutions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">5G Solutions</Link>
                  </div>
                </div>
              )}
            </div>
            
            <Link to="/pricing" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Pricing
            </Link>
            <Link to="/case-studies" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Case Studies
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Contact
            </Link>
            
            {/* CTA Button */}
            <Link 
              to="/contact" 
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
            >
              Get Started
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
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
              About
            </Link>
            
            <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">AI Services</div>
            <Link to="/ai-services" className="text-gray-700 hover:text-blue-600 block px-6 py-2 rounded-md text-sm font-medium">
              AI Development
            </Link>
            <Link to="/ai-content-generator" className="text-gray-700 hover:text-blue-600 block px-6 py-2 rounded-md text-sm font-medium">
              AI Content Generator
            </Link>
            <Link to="/zion-ai-customer-support-pro" className="text-gray-700 hover:text-blue-600 block px-6 py-2 rounded-md text-sm font-medium">
              AI Customer Support
            </Link>
            
            <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Micro SaaS</div>
            <Link to="/micro-saas-solutions" className="text-gray-700 hover:text-blue-600 block px-6 py-2 rounded-md text-sm font-medium">
              All Micro SaaS
            </Link>
            <Link to="/zion-smart-expense-tracker" className="text-gray-700 hover:text-blue-600 block px-6 py-2 rounded-md text-sm font-medium">
              Smart Expense Tracker
            </Link>
            
            <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">IT Solutions</div>
            <Link to="/it-services" className="text-gray-700 hover:text-blue-600 block px-6 py-2 rounded-md text-sm font-medium">
              IT Services
            </Link>
            <Link to="/web-development" className="text-gray-700 hover:text-blue-600 block px-6 py-2 rounded-md text-sm font-medium">
              Web Development
            </Link>
            <Link to="/mobile-development" className="text-gray-700 hover:text-blue-600 block px-6 py-2 rounded-md text-sm font-medium">
              Mobile Development
            </Link>
            
            <Link to="/pricing" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
              Pricing
            </Link>
            <Link to="/case-studies" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
              Case Studies
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