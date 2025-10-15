import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

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
                  className="absolute left-0 mt-2 w-80 bg-white rounded-lg shadow-xl z-50 border border-gray-200"
                >
                  <div className="p-4">
                    <div className="grid grid-cols-2 gap-4">
                      {/* AI Services */}
                      <div>
                        <h3 className="text-sm font-semibold text-gray-900 mb-2 flex items-center">
                          <span className="text-lg mr-2">🤖</span>
                          AI Services
                        </h3>
                        <div className="space-y-1">
                          <Link to="/ai-services" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-md">
                            AI Development
                          </Link>
                          <Link to="/ai-content-generator" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-md">
                            Content Generator
                          </Link>
                          <Link to="/ai-sales-predictor" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-md">
                            Sales Predictor
                          </Link>
                          <Link to="/ai-customer-support" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-md">
                            Customer Support
                          </Link>
                        </div>
                      </div>
                      
                      {/* Micro SAAS */}
                      <div>
                        <h3 className="text-sm font-semibold text-gray-900 mb-2 flex items-center">
                          <span className="text-lg mr-2">⚡</span>
                          Micro SAAS
                        </h3>
                        <div className="space-y-1">
                          <Link to="/micro-saas-solutions" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-md">
                            All SAAS Solutions
                          </Link>
                          <Link to="/task-manager" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-md">
                            Task Manager
                          </Link>
                          <Link to="/expense-tracker" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-md">
                            Expense Tracker
                          </Link>
                          <Link to="/email-marketing" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-md">
                            Email Marketing
                          </Link>
                        </div>
                      </div>
                      
                      {/* IT Solutions */}
                      <div>
                        <h3 className="text-sm font-semibold text-gray-900 mb-2 flex items-center">
                          <span className="text-lg mr-2">💻</span>
                          IT Solutions
                        </h3>
                        <div className="space-y-1">
                          <Link to="/it-services" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-md">
                            IT Services
                          </Link>
                          <Link to="/cloud-infrastructure" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-md">
                            Cloud Infrastructure
                          </Link>
                          <Link to="/web-development" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-md">
                            Web Development
                          </Link>
                          <Link to="/mobile-development" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-md">
                            Mobile Development
                          </Link>
                        </div>
                      </div>
                      
                      {/* Specialized Services */}
                      <div>
                        <h3 className="text-sm font-semibold text-gray-900 mb-2 flex items-center">
                          <span className="text-lg mr-2">🚀</span>
                          Specialized
                        </h3>
                        <div className="space-y-1">
                          <Link to="/5g-solutions" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-md">
                            5G Solutions
                          </Link>
                          <Link to="/digital-transformation" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-md">
                            Digital Transformation
                          </Link>
                          <Link to="/data-analytics" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-md">
                            Data Analytics
                          </Link>
                          <Link to="/blockchain-solutions" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-md">
                            Blockchain
                          </Link>
                        </div>
                      </div>
                    </div>
                    
                    {/* View All Services Link */}
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <Link 
                        to="/services" 
                        className="block w-full text-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm font-medium"
                      >
                        View All Services
                      </Link>
                    </div>
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
            <div className="space-y-1">
              <div className="text-gray-700 px-3 py-2 text-base font-medium">Services</div>
              
              {/* AI Services */}
              <div className="px-6 py-1">
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">AI Services</div>
                <Link to="/ai-services" className="text-gray-600 hover:text-blue-600 block py-1 text-sm">
                  AI Development
                </Link>
                <Link to="/ai-content-generator" className="text-gray-600 hover:text-blue-600 block py-1 text-sm">
                  Content Generator
                </Link>
                <Link to="/ai-sales-predictor" className="text-gray-600 hover:text-blue-600 block py-1 text-sm">
                  Sales Predictor
                </Link>
                <Link to="/ai-customer-support" className="text-gray-600 hover:text-blue-600 block py-1 text-sm">
                  Customer Support
                </Link>
              </div>
              
              {/* Micro SAAS */}
              <div className="px-6 py-1">
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Micro SAAS</div>
                <Link to="/micro-saas-solutions" className="text-gray-600 hover:text-blue-600 block py-1 text-sm">
                  All SAAS Solutions
                </Link>
                <Link to="/task-manager" className="text-gray-600 hover:text-blue-600 block py-1 text-sm">
                  Task Manager
                </Link>
                <Link to="/expense-tracker" className="text-gray-600 hover:text-blue-600 block py-1 text-sm">
                  Expense Tracker
                </Link>
                <Link to="/email-marketing" className="text-gray-600 hover:text-blue-600 block py-1 text-sm">
                  Email Marketing
                </Link>
              </div>
              
              {/* IT Solutions */}
              <div className="px-6 py-1">
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">IT Solutions</div>
                <Link to="/it-services" className="text-gray-600 hover:text-blue-600 block py-1 text-sm">
                  IT Services
                </Link>
                <Link to="/cloud-infrastructure" className="text-gray-600 hover:text-blue-600 block py-1 text-sm">
                  Cloud Infrastructure
                </Link>
                <Link to="/web-development" className="text-gray-600 hover:text-blue-600 block py-1 text-sm">
                  Web Development
                </Link>
                <Link to="/mobile-development" className="text-gray-600 hover:text-blue-600 block py-1 text-sm">
                  Mobile Development
                </Link>
              </div>
              
              {/* Specialized Services */}
              <div className="px-6 py-1">
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Specialized</div>
                <Link to="/5g-solutions" className="text-gray-600 hover:text-blue-600 block py-1 text-sm">
                  5G Solutions
                </Link>
                <Link to="/digital-transformation" className="text-gray-600 hover:text-blue-600 block py-1 text-sm">
                  Digital Transformation
                </Link>
                <Link to="/data-analytics" className="text-gray-600 hover:text-blue-600 block py-1 text-sm">
                  Data Analytics
                </Link>
                <Link to="/blockchain-solutions" className="text-gray-600 hover:text-blue-600 block py-1 text-sm">
                  Blockchain
                </Link>
              </div>
              
              <div className="px-6 py-2">
                <Link to="/services" className="text-blue-600 hover:text-blue-800 block py-2 text-sm font-medium">
                  View All Services →
                </Link>
              </div>
            </div>
            <Link to="/pricing" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
              Pricing
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
              Blog
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