import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => {
  return (
    <div className="hidden lg:block lg:w-72 lg:flex-shrink-0">
      <div className="h-full flex flex-col bg-white border-r border-gray-200 shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">Quick Navigation</h2>
          <p className="text-sm text-gray-500 mt-1">Explore our services and tools</p>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-6 overflow-y-auto">
          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3 flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              AI & IT Services
            </h3>
            <div className="space-y-1">
              <Link to="/ai-services" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                🤖 AI Services
              </Link>
              <Link to="/it-services" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                💻 IT Services
              </Link>
              <Link to="/cloud-infrastructure" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                ☁️ Cloud Infrastructure
              </Link>
              <Link to="/digital-transformation" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                🔄 Digital Transformation
              </Link>
              <Link to="/data-analytics" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                📊 Data Analytics
              </Link>
              <Link to="/web-development" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                🌐 Web Development
              </Link>
              <Link to="/mobile-development" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                📱 Mobile Development
              </Link>
              <Link to="/micro-saas-solutions" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                ⚡ Micro SaaS Solutions
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3 flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              AI Tools
            </h3>
            <div className="space-y-1">
              <Link to="/zion-ai-content-moderator" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-lg transition-colors">
                🛡️ Content Moderator
              </Link>
              <Link to="/zion-ai-sales-predictor" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-lg transition-colors">
                📈 Sales Predictor
              </Link>
              <Link to="/zion-ai-workflow-automator" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-lg transition-colors">
                ⚙️ Workflow Automator
              </Link>
              <Link to="/zion-ai-financial-forecaster" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-lg transition-colors">
                💰 Financial Forecaster
              </Link>
              <Link to="/zion-ai-customer-churn-predictor" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-lg transition-colors">
                👥 Churn Predictor
              </Link>
              <Link to="/zion-ai-document-analyzer" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-lg transition-colors">
                📄 Document Analyzer
              </Link>
              <Link to="/zion-ai-task-scheduler" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-lg transition-colors">
                ⏰ Task Scheduler
              </Link>
              <Link to="/zion-ai-social-media-manager" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-lg transition-colors">
                📱 Social Media Manager
              </Link>
              <Link to="/zion-ai-project-manager" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-green-50 hover:text-green-600 rounded-lg transition-colors">
                📋 Project Manager
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3 flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              Company
            </h3>
            <div className="space-y-1">
              <Link to="/about" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-lg transition-colors">
                About Us
              </Link>
              <Link to="/team" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-lg transition-colors">
                Our Team
              </Link>
              <Link to="/careers" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-lg transition-colors">
                Careers
              </Link>
              <Link to="/partnerships" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-lg transition-colors">
                Partnerships
              </Link>
              <Link to="/pricing" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-purple-50 hover:text-purple-600 rounded-lg transition-colors">
                💲 Pricing
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3 flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Resources
            </h3>
            <div className="space-y-1">
              <Link to="/blog" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors">
                📝 Blog
              </Link>
              <Link to="/case-studies" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors">
                📊 Case Studies
              </Link>
              <Link to="/api-docs" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors">
                🔧 API Documentation
              </Link>
              <Link to="/help" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors">
                ❓ Help Center
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3 flex items-center">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Legal & Support
            </h3>
            <div className="space-y-1">
              <Link to="/contact" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors">
                📞 Contact Us
              </Link>
              <Link to="/privacy" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors">
                Cookie Policy
              </Link>
              <Link to="/accessibility" className="block px-3 py-2 text-sm font-medium text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors">
                Accessibility
              </Link>
            </div>
          </div>
        </nav>
        
        {/* Contact Info */}
        <div className="p-4 border-t border-gray-200 bg-gray-50">
          <div className="text-xs text-gray-500 space-y-1">
            <div className="flex items-center">
              <svg className="w-3 h-3 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +1 302 464 0950
            </div>
            <div className="flex items-center">
              <svg className="w-3 h-3 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              kleber@ziontechgroup.com
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;