import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aiToolsOpen, setAiToolsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
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
                  className="absolute left-0 mt-2 w-96 bg-white rounded-lg shadow-xl z-50 border border-gray-200"
                >
                  <div className="py-4">
                    <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b border-gray-100">AI & Machine Learning</div>
                    <div className="grid grid-cols-2 gap-1 px-2 py-2">
                      <Link to="/ai-services" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md">
                        AI Services
                      </Link>
                      <Link to="/ai-solutions" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md">
                        AI Solutions
                      </Link>
                      <Link to="/ai-content-generator" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md">
                        AI Content Generator
                      </Link>
                      <Link to="/data-analytics" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md">
                        Data Analytics
                      </Link>
                    </div>
                    
                    <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b border-gray-100 mt-2">IT Services</div>
                    <div className="grid grid-cols-2 gap-1 px-2 py-2">
                      <Link to="/it-services" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md">
                        IT Services
                      </Link>
                      <Link to="/web-development" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md">
                        Web Development
                      </Link>
                      <Link to="/mobile-development" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md">
                        Mobile Development
                      </Link>
                      <Link to="/database-management" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md">
                        Database Management
                      </Link>
                      <Link to="/network-infrastructure" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md">
                        Network Infrastructure
                      </Link>
                    </div>
                    
                    <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b border-gray-100 mt-2">Infrastructure</div>
                    <div className="grid grid-cols-2 gap-1 px-2 py-2">
                      <Link to="/cloud-infrastructure" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md">
                        Cloud Infrastructure
                      </Link>
                      <Link to="/5g-solutions" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md">
                        5G Solutions
                      </Link>
                    </div>
                    
                    <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b border-gray-100 mt-2">Business Solutions</div>
                    <div className="grid grid-cols-2 gap-1 px-2 py-2">
                      <Link to="/digital-transformation" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md">
                        Digital Transformation
                      </Link>
                      <Link to="/micro-saas-solutions" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md">
                        Micro SaaS Solutions
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* AI Tools Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setAiToolsOpen(true)}
                onMouseLeave={() => setAiToolsOpen(false)}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium flex items-center"
              >
                AI Tools
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {aiToolsOpen && (
                <div
                  onMouseEnter={() => setAiToolsOpen(true)}
                  onMouseLeave={() => setAiToolsOpen(false)}
                  className="absolute left-0 mt-2 w-80 bg-white rounded-lg shadow-xl z-50 border border-gray-200"
                >
                  <div className="py-4">
                    <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b border-gray-100">Business Intelligence</div>
                    <div className="grid grid-cols-1 gap-1 px-2 py-2">
                      <Link to="/zion-ai-customer-churn-predictor" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md">
                        Customer Churn Predictor
                      </Link>
                      <Link to="/zion-ai-sales-predictor" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md">
                        Sales Predictor
                      </Link>
                      <Link to="/zion-ai-financial-forecaster" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md">
                        Financial Forecaster
                      </Link>
                      <Link to="/zion-customer-satisfaction-monitor" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md">
                        Customer Satisfaction Monitor
                      </Link>
                    </div>
                    
                    <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b border-gray-100 mt-2">Content & Marketing</div>
                    <div className="grid grid-cols-1 gap-1 px-2 py-2">
                      <Link to="/zion-ai-content-moderator" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md">
                        Content Moderator
                      </Link>
                      <Link to="/zion-ai-email-marketing-pro" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md">
                        Email Marketing Pro
                      </Link>
                      <Link to="/zion-ai-social-scheduler-pro" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md">
                        Social Scheduler Pro
                      </Link>
                    </div>
                    
                    <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b border-gray-100 mt-2">Operations</div>
                    <div className="grid grid-cols-1 gap-1 px-2 py-2">
                      <Link to="/zion-ai-workflow-automator" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md">
                        Workflow Automator
                      </Link>
                      <Link to="/zion-ai-task-scheduler" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md">
                        Task Scheduler
                      </Link>
                      <Link to="/zion-ai-inventory-optimizer-pro" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md">
                        Inventory Optimizer Pro
                      </Link>
                      <Link to="/zion-smart-expense-tracker" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md">
                        Smart Expense Tracker
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <Link to="/pricing" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              Pricing
            </Link>
            <Link to="/case-studies" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              Case Studies
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
            <Link to="/contact" className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
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
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 max-h-96 overflow-y-auto">
            <Link to="/" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
              About
            </Link>
            
            {/* Services Section */}
            <div className="space-y-1">
              <div className="text-gray-700 px-3 py-2 text-base font-medium border-t border-gray-200 pt-4">Services</div>
              
              <div className="text-gray-600 px-3 py-1 text-sm font-medium">AI & Machine Learning</div>
              <Link to="/ai-services" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                AI Services
              </Link>
              <Link to="/ai-solutions" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                AI Solutions
              </Link>
              <Link to="/ai-content-generator" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                AI Content Generator
              </Link>
              <Link to="/data-analytics" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                Data Analytics
              </Link>
              
              <div className="text-gray-600 px-3 py-1 text-sm font-medium">IT Services</div>
              <Link to="/it-services" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                IT Services
              </Link>
              <Link to="/web-development" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                Web Development
              </Link>
              <Link to="/mobile-development" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                Mobile Development
              </Link>
              <Link to="/database-management" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                Database Management
              </Link>
              <Link to="/network-infrastructure" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                Network Infrastructure
              </Link>
              
              <div className="text-gray-600 px-3 py-1 text-sm font-medium">Infrastructure</div>
              <Link to="/cloud-infrastructure" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                Cloud Infrastructure
              </Link>
              <Link to="/5g-solutions" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                5G Solutions
              </Link>
              
              <div className="text-gray-600 px-3 py-1 text-sm font-medium">Business Solutions</div>
              <Link to="/digital-transformation" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                Digital Transformation
              </Link>
              <Link to="/micro-saas-solutions" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                Micro SaaS Solutions
              </Link>
            </div>
            
            {/* AI Tools Section */}
            <div className="space-y-1">
              <div className="text-gray-700 px-3 py-2 text-base font-medium border-t border-gray-200 pt-4">AI Tools</div>
              <Link to="/zion-ai-content-moderator" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                Content Moderator
              </Link>
              <Link to="/zion-ai-customer-churn-predictor" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                Customer Churn Predictor
              </Link>
              <Link to="/zion-ai-sales-predictor" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                Sales Predictor
              </Link>
              <Link to="/zion-ai-workflow-automator" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                Workflow Automator
              </Link>
              <Link to="/zion-ai-financial-forecaster" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                Financial Forecaster
              </Link>
            </div>
            
            {/* Company & Resources */}
            <div className="space-y-1">
              <div className="text-gray-700 px-3 py-2 text-base font-medium border-t border-gray-200 pt-4">Company & Resources</div>
              <Link to="/pricing" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
                Pricing
              </Link>
              <Link to="/case-studies" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
                Case Studies
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
              <Link to="/contact" className="bg-blue-600 text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;