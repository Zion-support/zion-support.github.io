import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({
    ai: true,
    it: false,
    saas: false,
    specialized: false
  });

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="hidden lg:block lg:w-80 lg:flex-shrink-0">
      <div className="h-full flex flex-col bg-gray-50 border-r border-gray-200 sticky top-16">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Services & Solutions</h2>
          <p className="text-sm text-gray-600 mt-1">Explore our comprehensive offerings</p>
        </div>
        
        <nav className="flex-1 px-4 py-4 space-y-2 overflow-y-auto">
          {/* AI Services Section */}
          <div>
            <button
              onClick={() => toggleSection('ai')}
              className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 rounded-md"
            >
              <span className="flex items-center">
                <span className="mr-2">🤖</span>
                AI Services
              </span>
              <svg className={`h-4 w-4 transition-transform ${expandedSections.ai ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {expandedSections.ai && (
              <div className="ml-6 mt-2 space-y-1">
                <Link to="/ai-services" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                  AI Development
                </Link>
                <Link to="/ai-content-generator" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                  Content Generator Pro
                </Link>
                <Link to="/zion-ai-customer-support-pro" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                  Customer Support Pro
                </Link>
                <Link to="/zion-ai-sales-predictor" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                  Sales Predictor
                </Link>
                <Link to="/zion-ai-workflow-automator-pro" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                  Workflow Automator Pro
                </Link>
                <Link to="/zion-ai-email-marketing-pro" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                  Email Marketing Pro
                </Link>
              </div>
            )}
          </div>

          {/* IT Solutions Section */}
          <div>
            <button
              onClick={() => toggleSection('it')}
              className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 rounded-md"
            >
              <span className="flex items-center">
                <span className="mr-2">💻</span>
                IT Solutions
              </span>
              <svg className={`h-4 w-4 transition-transform ${expandedSections.it ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {expandedSections.it && (
              <div className="ml-6 mt-2 space-y-1">
                <Link to="/web-development" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                  Web Development
                </Link>
                <Link to="/mobile-development" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                  Mobile App Development
                </Link>
                <Link to="/cloud-infrastructure" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                  Cloud Infrastructure
                </Link>
                <Link to="/cybersecurity" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                  Cybersecurity
                </Link>
                <Link to="/data-analytics" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                  Data Analytics
                </Link>
                <Link to="/network-infrastructure" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                  Network Infrastructure
                </Link>
              </div>
            )}
          </div>

          {/* Micro SAAS Section */}
          <div>
            <button
              onClick={() => toggleSection('saas')}
              className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 rounded-md"
            >
              <span className="flex items-center">
                <span className="mr-2">⚡</span>
                Micro SAAS
              </span>
              <svg className={`h-4 w-4 transition-transform ${expandedSections.saas ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {expandedSections.saas && (
              <div className="ml-6 mt-2 space-y-1">
                <Link to="/micro-saas-solutions" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                  All Solutions
                </Link>
                <Link to="/zion-smart-expense-tracker" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                  Smart Expense Tracker
                </Link>
                <Link to="/zion-ai-inventory-optimizer-pro" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                  Inventory Optimizer Pro
                </Link>
                <Link to="/zion-ai-social-scheduler-pro" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                  Social Scheduler Pro
                </Link>
                <Link to="/zion-customer-satisfaction-monitor" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                  Customer Satisfaction Monitor
                </Link>
              </div>
            )}
          </div>

          {/* Specialized Solutions Section */}
          <div>
            <button
              onClick={() => toggleSection('specialized')}
              className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 rounded-md"
            >
              <span className="flex items-center">
                <span className="mr-2">🚀</span>
                Specialized
              </span>
              <svg className={`h-4 w-4 transition-transform ${expandedSections.specialized ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {expandedSections.specialized && (
              <div className="ml-6 mt-2 space-y-1">
                <Link to="/5g-solutions" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                  5G Solutions
                </Link>
                <Link to="/digital-transformation" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                  Digital Transformation
                </Link>
                <Link to="/database-management" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                  Database Management
                </Link>
                <Link to="/accessibility" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                  Accessibility Solutions
                </Link>
              </div>
            )}
          </div>

          {/* Quick Links */}
          <div className="pt-4 border-t border-gray-200">
            <h3 className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Quick Links</h3>
            <div className="mt-2 space-y-1">
              <Link to="/pricing" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                Pricing
              </Link>
              <Link to="/contact" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                Contact Us
              </Link>
              <Link to="/about" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                About Us
              </Link>
              <Link to="/blog" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                Blog
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="pt-4 border-t border-gray-200">
            <h3 className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Contact</h3>
            <div className="mt-2 space-y-2 px-3">
              <div className="text-xs text-gray-600">
                <div className="font-medium">Phone:</div>
                <a href="tel:+13024640950" className="text-blue-600 hover:text-blue-800">+1 302 464 0950</a>
              </div>
              <div className="text-xs text-gray-600">
                <div className="font-medium">Email:</div>
                <a href="mailto:kleber@ziontechgroup.com" className="text-blue-600 hover:text-blue-800">kleber@ziontechgroup.com</a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;