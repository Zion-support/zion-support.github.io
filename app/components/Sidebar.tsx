import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <div className="hidden lg:block lg:w-72 lg:flex-shrink-0">
      <div className="h-full flex flex-col bg-gradient-to-b from-gray-50 to-blue-50 border-r border-gray-200">
        <div className="p-6 bg-white border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Quick Navigation</h2>
          <p className="text-sm text-gray-600">Explore our services and solutions</p>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-6 overflow-y-auto">
          {/* Main Services */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-3 flex items-center">
              <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
              Main Services
            </h3>
            <div className="space-y-1">
              <Link to="/ai-services" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-blue-100 hover:text-blue-700 rounded-lg transition-colors">
                AI Services
              </Link>
              <Link to="/it-services" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-blue-100 hover:text-blue-700 rounded-lg transition-colors">
                IT Services
              </Link>
              <Link to="/cloud-infrastructure" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-blue-100 hover:text-blue-700 rounded-lg transition-colors">
                Cloud Infrastructure
              </Link>
              <Link to="/digital-transformation" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-blue-100 hover:text-blue-700 rounded-lg transition-colors">
                Digital Transformation
              </Link>
              <Link to="/data-analytics" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-blue-100 hover:text-blue-700 rounded-lg transition-colors">
                Data Analytics
              </Link>
              <Link to="/web-development" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-blue-100 hover:text-blue-700 rounded-lg transition-colors">
                Web Development
              </Link>
              <Link to="/mobile-development" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-blue-100 hover:text-blue-700 rounded-lg transition-colors">
                Mobile Development
              </Link>
            </div>
          </div>
          
          {/* Micro SaaS Solutions */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-3 flex items-center">
              <svg className="w-4 h-4 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Micro SaaS
            </h3>
            <div className="space-y-1">
              <Link to="/micro-saas-solutions" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-green-100 hover:text-green-700 rounded-lg transition-colors">
                All Solutions
              </Link>
              <Link to="/zion-task-pro" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-green-100 hover:text-green-700 rounded-lg transition-colors">
                Task Management
              </Link>
              <Link to="/zion-crm" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-green-100 hover:text-green-700 rounded-lg transition-colors">
                CRM System
              </Link>
              <Link to="/zion-analytics" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-green-100 hover:text-green-700 rounded-lg transition-colors">
                Analytics Platform
              </Link>
              <Link to="/zion-hr" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-green-100 hover:text-green-700 rounded-lg transition-colors">
                HR Management
              </Link>
              <Link to="/zion-finance" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-green-100 hover:text-green-700 rounded-lg transition-colors">
                Financial Management
              </Link>
            </div>
          </div>
          
          {/* AI Tools */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-3 flex items-center">
              <svg className="w-4 h-4 mr-2 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              AI Tools
            </h3>
            <div className="space-y-1">
              <Link to="/zion-ai-content-moderator" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-purple-100 hover:text-purple-700 rounded-lg transition-colors">
                Content Moderator
              </Link>
              <Link to="/zion-ai-customer-churn-predictor" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-purple-100 hover:text-purple-700 rounded-lg transition-colors">
                Churn Predictor
              </Link>
              <Link to="/zion-ai-sales-predictor" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-purple-100 hover:text-purple-700 rounded-lg transition-colors">
                Sales Predictor
              </Link>
              <Link to="/zion-ai-workflow-automator" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-purple-100 hover:text-purple-700 rounded-lg transition-colors">
                Workflow Automator
              </Link>
              <Link to="/zion-ai-financial-forecaster" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-purple-100 hover:text-purple-700 rounded-lg transition-colors">
                Financial Forecaster
              </Link>
              <Link to="/zion-ai-email-marketing-pro" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-purple-100 hover:text-purple-700 rounded-lg transition-colors">
                Email Marketing Pro
              </Link>
            </div>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-3 flex items-center">
              <svg className="w-4 h-4 mr-2 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              Company
            </h3>
            <div className="space-y-1">
              <Link to="/about" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-orange-100 hover:text-orange-700 rounded-lg transition-colors">
                About Us
              </Link>
              <Link to="/team" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-orange-100 hover:text-orange-700 rounded-lg transition-colors">
                Our Team
              </Link>
              <Link to="/careers" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-orange-100 hover:text-orange-700 rounded-lg transition-colors">
                Careers
              </Link>
              <Link to="/partnerships" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-orange-100 hover:text-orange-700 rounded-lg transition-colors">
                Partnerships
              </Link>
              <Link to="/pricing" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-orange-100 hover:text-orange-700 rounded-lg transition-colors">
                Pricing
              </Link>
            </div>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wider mb-3 flex items-center">
              <svg className="w-4 h-4 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Resources
            </h3>
            <div className="space-y-1">
              <Link to="/blog" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-indigo-100 hover:text-indigo-700 rounded-lg transition-colors">
                Blog
              </Link>
              <Link to="/case-studies" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-indigo-100 hover:text-indigo-700 rounded-lg transition-colors">
                Case Studies
              </Link>
              <Link to="/api-docs" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-indigo-100 hover:text-indigo-700 rounded-lg transition-colors">
                API Documentation
              </Link>
              <Link to="/help" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-indigo-100 hover:text-indigo-700 rounded-lg transition-colors">
                Help Center
              </Link>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg p-4 text-white">
            <h4 className="font-semibold mb-2">Need Help?</h4>
            <p className="text-sm opacity-90 mb-3">Get in touch with our experts</p>
            <div className="space-y-2">
              <a 
                href="tel:+13024640950" 
                className="block w-full bg-white text-blue-600 text-center px-3 py-2 rounded text-sm font-semibold hover:bg-gray-100 transition-colors"
              >
                Call Now
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="block w-full bg-transparent text-white text-center px-3 py-2 rounded text-sm font-semibold border border-white hover:bg-white hover:text-blue-600 transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;