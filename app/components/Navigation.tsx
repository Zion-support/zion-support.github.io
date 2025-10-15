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
                  className="absolute left-0 mt-2 w-96 bg-white rounded-lg shadow-xl border z-50"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <div className="p-4">
                    <div className="grid grid-cols-1 gap-4">
                      {/* AI Services */}
                      <div>
                        <h3 className="text-sm font-semibold text-gray-900 mb-2">AI Services</h3>
                        <div className="space-y-1">
                          <Link to="/ai-services" className="block text-sm text-gray-600 hover:text-blue-600 py-1">AI Development</Link>
                          <Link to="/ai-consulting" className="block text-sm text-gray-600 hover:text-blue-600 py-1">AI Consulting</Link>
                          <Link to="/ai-content-generator" className="block text-sm text-gray-600 hover:text-blue-600 py-1">Content Generator</Link>
                          <Link to="/ai-customer-support-pro" className="block text-sm text-gray-600 hover:text-blue-600 py-1">Customer Support Pro</Link>
                        </div>
                      </div>
                      
                      {/* Micro SaaS */}
                      <div>
                        <h3 className="text-sm font-semibold text-gray-900 mb-2">Micro SaaS</h3>
                        <div className="space-y-1">
                          <Link to="/zion-ai-task-scheduler" className="block text-sm text-gray-600 hover:text-blue-600 py-1">Task Scheduler Pro</Link>
                          <Link to="/zion-smart-expense-tracker" className="block text-sm text-gray-600 hover:text-blue-600 py-1">Expense Tracker</Link>
                          <Link to="/zion-ai-workflow-automator-pro" className="block text-sm text-gray-600 hover:text-blue-600 py-1">Workflow Automator</Link>
                          <Link to="/zion-ai-email-marketing-pro" className="block text-sm text-gray-600 hover:text-blue-600 py-1">Email Marketing Pro</Link>
                        </div>
                      </div>
                      
                      {/* IT Solutions */}
                      <div>
                        <h3 className="text-sm font-semibold text-gray-900 mb-2">IT Solutions</h3>
                        <div className="space-y-1">
                          <Link to="/cloud-infrastructure" className="block text-sm text-gray-600 hover:text-blue-600 py-1">Cloud Infrastructure</Link>
                          <Link to="/web-development" className="block text-sm text-gray-600 hover:text-blue-600 py-1">Web Development</Link>
                          <Link to="/mobile-development" className="block text-sm text-gray-600 hover:text-blue-600 py-1">Mobile Development</Link>
                          <Link to="/data-analytics" className="block text-sm text-gray-600 hover:text-blue-600 py-1">Data Analytics</Link>
                        </div>
                      </div>
                      
                      <div className="border-t pt-2">
                        <Link to="/services" className="block text-sm font-medium text-blue-600 hover:text-blue-800 py-1">View All Services</Link>
                      </div>
                    </div>
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
            <a 
              href="tel:+13024640950" 
              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
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
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
              About
            </Link>
            
            {/* Mobile Services Submenu */}
            <div className="space-y-1">
              <div className="text-gray-700 px-3 py-2 text-base font-medium">Services</div>
              <div className="pl-4 space-y-1">
                <Link to="/ai-services" className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-sm">
                  AI Services
                </Link>
                <Link to="/micro-saas-solutions" className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-sm">
                  Micro SaaS
                </Link>
                <Link to="/it-services" className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-sm">
                  IT Solutions
                </Link>
                <Link to="/services" className="text-gray-600 hover:text-blue-600 block px-3 py-2 rounded-md text-sm">
                  All Services
                </Link>
              </div>
            </div>
            
            <Link to="/pricing" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
              Pricing
            </Link>
            <Link to="/case-studies" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
              Case Studies
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
              Contact
            </Link>
            
            <a 
              href="tel:+13024640950" 
              className="bg-blue-600 text-white block px-3 py-2 rounded-md text-base font-medium text-center mt-4"
            >
              Call: +1 302 464 0950
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;