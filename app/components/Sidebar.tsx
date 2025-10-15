import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="hidden lg:block lg:w-72 lg:flex-shrink-0">
      <div className="h-full flex flex-col bg-gray-50 border-r border-gray-200 sticky top-16">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900">Quick Navigation</h2>
        </div>
        
        <nav className="flex-1 px-4 py-4 space-y-2 overflow-y-auto">
          {/* AI Services Section */}
          <div>
            <button
              onClick={() => toggleSection('ai')}
              className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
            >
              <span className="flex items-center">
                <span className="mr-2">🤖</span>
                AI Services
              </span>
              <svg 
                className={`h-4 w-4 transition-transform ${expandedSection === 'ai' ? 'rotate-180' : ''}`}
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {expandedSection === 'ai' && (
              <div className="ml-4 mt-2 space-y-1">
                <Link to="/ai-services" className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md transition-colors">
                  AI Development
                </Link>
                <Link to="/ai-content-generator" className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md transition-colors">
                  Content Generator Pro
                </Link>
                <Link to="/zion-ai-customer-support-pro" className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md transition-colors">
                  Customer Support Pro
                </Link>
                <Link to="/zion-ai-sales-predictor" className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md transition-colors">
                  Sales Predictor
                </Link>
                <Link to="/zion-ai-workflow-automator-pro" className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md transition-colors">
                  Workflow Automator Pro
                </Link>
              </div>
            )}
          </div>

          {/* Micro SaaS Section */}
          <div>
            <button
              onClick={() => toggleSection('saas')}
              className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
            >
              <span className="flex items-center">
                <span className="mr-2">💼</span>
                Micro SaaS
              </span>
              <svg 
                className={`h-4 w-4 transition-transform ${expandedSection === 'saas' ? 'rotate-180' : ''}`}
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {expandedSection === 'saas' && (
              <div className="ml-4 mt-2 space-y-1">
                <Link to="/micro-saas-solutions" className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md transition-colors">
                  All Micro SaaS
                </Link>
                <Link to="/zion-smart-expense-tracker" className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md transition-colors">
                  Smart Expense Tracker
                </Link>
                <Link to="/zion-ai-inventory-optimizer-pro" className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md transition-colors">
                  Inventory Optimizer Pro
                </Link>
                <Link to="/zion-ai-email-marketing-pro" className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md transition-colors">
                  Email Marketing Pro
                </Link>
                <Link to="/zion-ai-social-scheduler-pro" className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md transition-colors">
                  Social Scheduler Pro
                </Link>
              </div>
            )}
          </div>

          {/* IT Solutions Section */}
          <div>
            <button
              onClick={() => toggleSection('it')}
              className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
            >
              <span className="flex items-center">
                <span className="mr-2">💻</span>
                IT Solutions
              </span>
              <svg 
                className={`h-4 w-4 transition-transform ${expandedSection === 'it' ? 'rotate-180' : ''}`}
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {expandedSection === 'it' && (
              <div className="ml-4 mt-2 space-y-1">
                <Link to="/it-services" className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md transition-colors">
                  IT Services
                </Link>
                <Link to="/web-development" className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md transition-colors">
                  Web Development
                </Link>
                <Link to="/mobile-development" className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md transition-colors">
                  Mobile Development
                </Link>
                <Link to="/cloud-infrastructure" className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md transition-colors">
                  Cloud Infrastructure
                </Link>
                <Link to="/data-analytics" className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md transition-colors">
                  Data Analytics
                </Link>
                <Link to="/5g-solutions" className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-md transition-colors">
                  5G Solutions
                </Link>
              </div>
            )}
          </div>

          {/* Company Section */}
          <div className="pt-4 border-t border-gray-200">
            <div className="space-y-1">
              <Link to="/about" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md transition-colors">
                About Us
              </Link>
              <Link to="/team" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md transition-colors">
                Our Team
              </Link>
              <Link to="/pricing" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md transition-colors">
                Pricing
              </Link>
              <Link to="/case-studies" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md transition-colors">
                Case Studies
              </Link>
              <Link to="/contact" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* CTA Section */}
          <div className="pt-4 border-t border-gray-200">
            <div className="bg-blue-600 text-white p-4 rounded-lg">
              <h3 className="font-semibold text-sm mb-2">Ready to Get Started?</h3>
              <p className="text-xs text-blue-100 mb-3">
                Transform your business with our AI and IT solutions.
              </p>
              <Link 
                to="/contact" 
                className="block w-full bg-white text-blue-600 text-center py-2 px-4 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors"
              >
                Get Free Consultation
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;