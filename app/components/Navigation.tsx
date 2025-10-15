import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const handleDropdownClose = () => {
    setActiveDropdown(null);
  };

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
            
            <div className="relative">
              <button
                onClick={() => handleDropdownToggle('ai-services')}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
              >
                AI Services
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'ai-services' && (
                <div className="absolute top-full left-0 mt-1 w-80 bg-white rounded-md shadow-lg border z-50">
                  <div className="py-2">
                    <Link to="/ai-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={handleDropdownClose}>
                      All AI Services
                    </Link>
                    <Link to="/zion-ai-content-generator" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={handleDropdownClose}>
                      AI Content Generator
                    </Link>
                    <Link to="/zion-ai-customer-support-pro" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={handleDropdownClose}>
                      AI Customer Support Pro
                    </Link>
                    <Link to="/zion-ai-workflow-automator-pro" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={handleDropdownClose}>
                      AI Workflow Automator Pro
                    </Link>
                    <Link to="/zion-ai-sales-predictor" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={handleDropdownClose}>
                      AI Sales Predictor
                    </Link>
                    <Link to="/zion-ai-financial-forecaster" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={handleDropdownClose}>
                      AI Financial Forecaster
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={() => handleDropdownToggle('micro-saas')}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
              >
                Micro SaaS
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'micro-saas' && (
                <div className="absolute top-full left-0 mt-1 w-80 bg-white rounded-md shadow-lg border z-50">
                  <div className="py-2">
                    <Link to="/micro-saas-solutions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={handleDropdownClose}>
                      All Micro SaaS Solutions
                    </Link>
                    <Link to="/zion-smart-expense-tracker" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={handleDropdownClose}>
                      Smart Expense Tracker
                    </Link>
                    <Link to="/zion-customer-satisfaction-monitor" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={handleDropdownClose}>
                      Customer Satisfaction Monitor
                    </Link>
                    <Link to="/zion-ai-task-scheduler" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={handleDropdownClose}>
                      AI Task Scheduler
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={() => handleDropdownToggle('it-services')}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
              >
                IT Services
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === 'it-services' && (
                <div className="absolute top-full left-0 mt-1 w-80 bg-white rounded-md shadow-lg border z-50">
                  <div className="py-2">
                    <Link to="/it-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={handleDropdownClose}>
                      All IT Services
                    </Link>
                    <Link to="/cloud-infrastructure" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={handleDropdownClose}>
                      Cloud Infrastructure
                    </Link>
                    <Link to="/cybersecurity-solutions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={handleDropdownClose}>
                      Cybersecurity Solutions
                    </Link>
                    <Link to="/data-analytics" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={handleDropdownClose}>
                      Data Analytics Platform
                    </Link>
                    <Link to="/network-infrastructure" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={handleDropdownClose}>
                      Network Infrastructure
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link to="/about" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Contact
            </Link>
            <Link to="/pricing" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
              Pricing
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
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <Link to="/" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            
            <div className="space-y-1">
              <div className="text-gray-500 px-3 py-2 text-sm font-semibold">AI Services</div>
              <Link to="/ai-services" className="text-gray-700 hover:text-blue-600 block px-6 py-2 rounded-md text-sm" onClick={() => setIsOpen(false)}>
                All AI Services
              </Link>
              <Link to="/zion-ai-content-generator" className="text-gray-700 hover:text-blue-600 block px-6 py-2 rounded-md text-sm" onClick={() => setIsOpen(false)}>
                AI Content Generator
              </Link>
              <Link to="/zion-ai-customer-support-pro" className="text-gray-700 hover:text-blue-600 block px-6 py-2 rounded-md text-sm" onClick={() => setIsOpen(false)}>
                AI Customer Support Pro
              </Link>
              <Link to="/zion-ai-workflow-automator-pro" className="text-gray-700 hover:text-blue-600 block px-6 py-2 rounded-md text-sm" onClick={() => setIsOpen(false)}>
                AI Workflow Automator Pro
              </Link>
              <Link to="/zion-ai-sales-predictor" className="text-gray-700 hover:text-blue-600 block px-6 py-2 rounded-md text-sm" onClick={() => setIsOpen(false)}>
                AI Sales Predictor
              </Link>
              <Link to="/zion-ai-financial-forecaster" className="text-gray-700 hover:text-blue-600 block px-6 py-2 rounded-md text-sm" onClick={() => setIsOpen(false)}>
                AI Financial Forecaster
              </Link>
            </div>

            <div className="space-y-1">
              <div className="text-gray-500 px-3 py-2 text-sm font-semibold">Micro SaaS</div>
              <Link to="/micro-saas-solutions" className="text-gray-700 hover:text-blue-600 block px-6 py-2 rounded-md text-sm" onClick={() => setIsOpen(false)}>
                All Micro SaaS Solutions
              </Link>
              <Link to="/zion-smart-expense-tracker" className="text-gray-700 hover:text-blue-600 block px-6 py-2 rounded-md text-sm" onClick={() => setIsOpen(false)}>
                Smart Expense Tracker
              </Link>
              <Link to="/zion-customer-satisfaction-monitor" className="text-gray-700 hover:text-blue-600 block px-6 py-2 rounded-md text-sm" onClick={() => setIsOpen(false)}>
                Customer Satisfaction Monitor
              </Link>
              <Link to="/zion-ai-task-scheduler" className="text-gray-700 hover:text-blue-600 block px-6 py-2 rounded-md text-sm" onClick={() => setIsOpen(false)}>
                AI Task Scheduler
              </Link>
            </div>

            <div className="space-y-1">
              <div className="text-gray-500 px-3 py-2 text-sm font-semibold">IT Services</div>
              <Link to="/it-services" className="text-gray-700 hover:text-blue-600 block px-6 py-2 rounded-md text-sm" onClick={() => setIsOpen(false)}>
                All IT Services
              </Link>
              <Link to="/cloud-infrastructure" className="text-gray-700 hover:text-blue-600 block px-6 py-2 rounded-md text-sm" onClick={() => setIsOpen(false)}>
                Cloud Infrastructure
              </Link>
              <Link to="/cybersecurity-solutions" className="text-gray-700 hover:text-blue-600 block px-6 py-2 rounded-md text-sm" onClick={() => setIsOpen(false)}>
                Cybersecurity Solutions
              </Link>
              <Link to="/data-analytics" className="text-gray-700 hover:text-blue-600 block px-6 py-2 rounded-md text-sm" onClick={() => setIsOpen(false)}>
                Data Analytics Platform
              </Link>
            </div>

            <Link to="/about" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
            <Link to="/pricing" className="bg-blue-600 hover:bg-blue-700 text-white block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>
              Pricing
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;