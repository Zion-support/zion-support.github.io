import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <h1 className="text-2xl font-bold text-gray-900">Zion Tech Group</h1>
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
            <div className="relative">
              <button
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors"
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
                  className="absolute left-0 mt-2 w-80 bg-white rounded-lg shadow-xl z-50 border border-gray-100"
                >
                  <div className="p-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h3 className="text-sm font-semibold text-gray-900 mb-2">AI Services</h3>
                        <div className="space-y-1">
                          <Link to="/ai-services" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-md">
                            AI Services Overview
                          </Link>
                          <Link to="/ai-solutions" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-md">
                            AI Solutions
                          </Link>
                          <Link to="/ai-content-generator" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-md">
                            AI Content Generator
                          </Link>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-gray-900 mb-2">IT Services</h3>
                        <div className="space-y-1">
                          <Link to="/it-services" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-md">
                            IT Services Overview
                          </Link>
                          <Link to="/cloud-infrastructure" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-md">
                            Cloud Infrastructure
                          </Link>
                          <Link to="/web-development" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-md">
                            Web Development
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <Link to="/micro-saas-solutions" className="block px-3 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-md">
                        View All Micro SaaS Solutions →
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setSolutionsOpen(true)}
                onMouseLeave={() => setSolutionsOpen(false)}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors"
              >
                Solutions
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {solutionsOpen && (
                <div
                  onMouseEnter={() => setSolutionsOpen(true)}
                  onMouseLeave={() => setSolutionsOpen(false)}
                  className="absolute left-0 mt-2 w-80 bg-white rounded-lg shadow-xl z-50 border border-gray-100"
                >
                  <div className="p-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h3 className="text-sm font-semibold text-gray-900 mb-2">AI Solutions</h3>
                        <div className="space-y-1">
                          <Link to="/zion-ai-content-moderator" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-md">
                            Content Moderator
                          </Link>
                          <Link to="/zion-ai-customer-churn-predictor" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-md">
                            Churn Predictor
                          </Link>
                          <Link to="/zion-ai-workflow-automator" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-md">
                            Workflow Automator
                          </Link>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-gray-900 mb-2">Business Tools</h3>
                        <div className="space-y-1">
                          <Link to="/zion-smart-expense-tracker" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-md">
                            Expense Tracker
                          </Link>
                          <Link to="/data-analytics" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-md">
                            Data Analytics
                          </Link>
                          <Link to="/digital-transformation" className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 rounded-md">
                            Digital Transformation
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Company Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setCompanyOpen(true)}
                onMouseLeave={() => setCompanyOpen(false)}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors"
              >
                Company
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {companyOpen && (
                <div
                  onMouseEnter={() => setCompanyOpen(true)}
                  onMouseLeave={() => setCompanyOpen(false)}
                  className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-xl z-50 border border-gray-100"
                >
                  <div className="py-2">
                    <Link to="/team" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                      Our Team
                    </Link>
                    <Link to="/careers" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                      Careers
                    </Link>
                    <Link to="/partnerships" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                      Partnerships
                    </Link>
                    <Link to="/case-studies" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50">
                      Case Studies
                    </Link>
                  </div>
                </div>
              )}
            </div>
            
            <Link to="/pricing" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Pricing
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Blog
            </Link>
            <Link to="/contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
              Contact Us
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
            
            <div className="space-y-1">
              <div className="text-gray-700 px-3 py-2 text-base font-medium">Services</div>
              <Link to="/ai-services" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                AI Services
              </Link>
              <Link to="/it-services" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                IT Services
              </Link>
              <Link to="/cloud-infrastructure" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                Cloud Infrastructure
              </Link>
              <Link to="/micro-saas-solutions" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                Micro SaaS Solutions
              </Link>
            </div>

            <div className="space-y-1">
              <div className="text-gray-700 px-3 py-2 text-base font-medium">Solutions</div>
              <Link to="/zion-ai-content-moderator" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                AI Content Moderator
              </Link>
              <Link to="/zion-ai-customer-churn-predictor" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                AI Churn Predictor
              </Link>
              <Link to="/zion-smart-expense-tracker" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                Smart Expense Tracker
              </Link>
            </div>

            <div className="space-y-1">
              <div className="text-gray-700 px-3 py-2 text-base font-medium">Company</div>
              <Link to="/team" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                Our Team
              </Link>
              <Link to="/careers" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                Careers
              </Link>
              <Link to="/partnerships" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                Partnerships
              </Link>
            </div>
            
            <Link to="/pricing" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
              Pricing
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
              Blog
            </Link>
            <Link to="/contact" className="bg-blue-600 text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-700">
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;