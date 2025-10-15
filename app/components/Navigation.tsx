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
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-lg">Z</span>
                </div>
                <h1 className="text-2xl font-bold text-gray-900">Zion Tech Group</h1>
              </div>
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
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                Services
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isServicesOpen && (
                <div 
                  className="absolute left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <div className="grid grid-cols-2 gap-4 p-4">
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-2">AI Services</h3>
                      <ul className="space-y-1">
                        <li><Link to="/ai-services" className="text-sm text-gray-600 hover:text-blue-600 block py-1">AI Development</Link></li>
                        <li><Link to="/ai-content-generator" className="text-sm text-gray-600 hover:text-blue-600 block py-1">Content Generator</Link></li>
                        <li><Link to="/zion-ai-customer-support-pro" className="text-sm text-gray-600 hover:text-blue-600 block py-1">Customer Support Pro</Link></li>
                        <li><Link to="/zion-ai-sales-predictor" className="text-sm text-gray-600 hover:text-blue-600 block py-1">Sales Predictor</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-2">IT Solutions</h3>
                      <ul className="space-y-1">
                        <li><Link to="/web-development" className="text-sm text-gray-600 hover:text-blue-600 block py-1">Web Development</Link></li>
                        <li><Link to="/mobile-development" className="text-sm text-gray-600 hover:text-blue-600 block py-1">Mobile Apps</Link></li>
                        <li><Link to="/cloud-infrastructure" className="text-sm text-gray-600 hover:text-blue-600 block py-1">Cloud Infrastructure</Link></li>
                        <li><Link to="/cybersecurity" className="text-sm text-gray-600 hover:text-blue-600 block py-1">Cybersecurity</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-2">Micro SAAS</h3>
                      <ul className="space-y-1">
                        <li><Link to="/micro-saas-solutions" className="text-sm text-gray-600 hover:text-blue-600 block py-1">All Solutions</Link></li>
                        <li><Link to="/zion-smart-expense-tracker" className="text-sm text-gray-600 hover:text-blue-600 block py-1">Expense Tracker</Link></li>
                        <li><Link to="/zion-ai-workflow-automator-pro" className="text-sm text-gray-600 hover:text-blue-600 block py-1">Workflow Automator</Link></li>
                        <li><Link to="/zion-ai-email-marketing-pro" className="text-sm text-gray-600 hover:text-blue-600 block py-1">Email Marketing Pro</Link></li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-2">Specialized</h3>
                      <ul className="space-y-1">
                        <li><Link to="/5g-solutions" className="text-sm text-gray-600 hover:text-blue-600 block py-1">5G Solutions</Link></li>
                        <li><Link to="/data-analytics" className="text-sm text-gray-600 hover:text-blue-600 block py-1">Data Analytics</Link></li>
                        <li><Link to="/digital-transformation" className="text-sm text-gray-600 hover:text-blue-600 block py-1">Digital Transformation</Link></li>
                        <li><Link to="/pricing" className="text-sm text-gray-600 hover:text-blue-600 block py-1">Pricing</Link></li>
                      </ul>
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
            
            {/* CTA Button */}
            <Link to="/contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
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
            
            {/* Mobile Services Section */}
            <div className="px-3 py-2">
              <div className="text-sm font-semibold text-gray-900 mb-2">AI Services</div>
              <div className="ml-4 space-y-1">
                <Link to="/ai-services" className="text-gray-600 hover:text-blue-600 block py-1 text-sm">AI Development</Link>
                <Link to="/ai-content-generator" className="text-gray-600 hover:text-blue-600 block py-1 text-sm">Content Generator</Link>
                <Link to="/zion-ai-customer-support-pro" className="text-gray-600 hover:text-blue-600 block py-1 text-sm">Customer Support Pro</Link>
                <Link to="/zion-ai-sales-predictor" className="text-gray-600 hover:text-blue-600 block py-1 text-sm">Sales Predictor</Link>
              </div>
            </div>
            
            <div className="px-3 py-2">
              <div className="text-sm font-semibold text-gray-900 mb-2">IT Solutions</div>
              <div className="ml-4 space-y-1">
                <Link to="/web-development" className="text-gray-600 hover:text-blue-600 block py-1 text-sm">Web Development</Link>
                <Link to="/mobile-development" className="text-gray-600 hover:text-blue-600 block py-1 text-sm">Mobile Apps</Link>
                <Link to="/cloud-infrastructure" className="text-gray-600 hover:text-blue-600 block py-1 text-sm">Cloud Infrastructure</Link>
                <Link to="/cybersecurity" className="text-gray-600 hover:text-blue-600 block py-1 text-sm">Cybersecurity</Link>
              </div>
            </div>
            
            <div className="px-3 py-2">
              <div className="text-sm font-semibold text-gray-900 mb-2">Micro SAAS</div>
              <div className="ml-4 space-y-1">
                <Link to="/micro-saas-solutions" className="text-gray-600 hover:text-blue-600 block py-1 text-sm">All Solutions</Link>
                <Link to="/zion-smart-expense-tracker" className="text-gray-600 hover:text-blue-600 block py-1 text-sm">Expense Tracker</Link>
                <Link to="/zion-ai-workflow-automator-pro" className="text-gray-600 hover:text-blue-600 block py-1 text-sm">Workflow Automator</Link>
                <Link to="/zion-ai-email-marketing-pro" className="text-gray-600 hover:text-blue-600 block py-1 text-sm">Email Marketing Pro</Link>
              </div>
            </div>
            
            <Link to="/pricing" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
              Pricing
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
              Contact
            </Link>
            
            <div className="px-3 py-2">
              <Link to="/contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium inline-block">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;