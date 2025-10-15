import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className="hidden lg:block lg:w-72 lg:flex-shrink-0">
      <div className="h-full flex flex-col bg-white border-r border-gray-200 shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900">Quick Navigation</h2>
          <p className="text-sm text-gray-500 mt-1">Explore our services and tools</p>
        </div>
        <nav className="flex-1 px-4 py-6 space-y-6 overflow-y-auto">
          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Core Services</h3>
            <div className="space-y-1">
              <Link 
                to="/ai-services" 
                className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive('/ai-services') 
                    ? 'bg-blue-100 text-blue-700 border-l-4 border-blue-500' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                AI Services
              </Link>
              <Link 
                to="/it-services" 
                className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive('/it-services') 
                    ? 'bg-blue-100 text-blue-700 border-l-4 border-blue-500' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                IT Services
              </Link>
              <Link 
                to="/cloud-infrastructure" 
                className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive('/cloud-infrastructure') 
                    ? 'bg-blue-100 text-blue-700 border-l-4 border-blue-500' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Cloud Infrastructure
              </Link>
              <Link 
                to="/digital-transformation" 
                className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive('/digital-transformation') 
                    ? 'bg-blue-100 text-blue-700 border-l-4 border-blue-500' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Digital Transformation
              </Link>
              <Link 
                to="/data-analytics" 
                className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive('/data-analytics') 
                    ? 'bg-blue-100 text-blue-700 border-l-4 border-blue-500' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Data Analytics
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Specialized Services</h3>
            <div className="space-y-1">
              <Link 
                to="/web-development" 
                className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive('/web-development') 
                    ? 'bg-blue-100 text-blue-700 border-l-4 border-blue-500' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Web Development
              </Link>
              <Link 
                to="/mobile-development" 
                className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive('/mobile-development') 
                    ? 'bg-blue-100 text-blue-700 border-l-4 border-blue-500' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Mobile Development
              </Link>
              <Link 
                to="/database-management" 
                className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive('/database-management') 
                    ? 'bg-blue-100 text-blue-700 border-l-4 border-blue-500' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Database Management
              </Link>
              <Link 
                to="/network-infrastructure" 
                className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive('/network-infrastructure') 
                    ? 'bg-blue-100 text-blue-700 border-l-4 border-blue-500' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Network Infrastructure
              </Link>
              <Link 
                to="/micro-saas-solutions" 
                className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive('/micro-saas-solutions') 
                    ? 'bg-blue-100 text-blue-700 border-l-4 border-blue-500' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Micro SaaS Solutions
              </Link>
              <Link 
                to="/5g-solutions" 
                className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive('/5g-solutions') 
                    ? 'bg-blue-100 text-blue-700 border-l-4 border-blue-500' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                5G Solutions
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">AI Tools</h3>
            <div className="space-y-1">
              <Link 
                to="/zion-ai-sales-predictor" 
                className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive('/zion-ai-sales-predictor') 
                    ? 'bg-blue-100 text-blue-700 border-l-4 border-blue-500' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Sales Predictor
              </Link>
              <Link 
                to="/zion-ai-customer-churn-predictor" 
                className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive('/zion-ai-customer-churn-predictor') 
                    ? 'bg-blue-100 text-blue-700 border-l-4 border-blue-500' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Churn Predictor
              </Link>
              <Link 
                to="/zion-ai-content-moderator" 
                className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive('/zion-ai-content-moderator') 
                    ? 'bg-blue-100 text-blue-700 border-l-4 border-blue-500' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Content Moderator
              </Link>
              <Link 
                to="/zion-ai-workflow-automator" 
                className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive('/zion-ai-workflow-automator') 
                    ? 'bg-blue-100 text-blue-700 border-l-4 border-blue-500' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Workflow Automator
              </Link>
              <Link 
                to="/zion-ai-financial-forecaster" 
                className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive('/zion-ai-financial-forecaster') 
                    ? 'bg-blue-100 text-blue-700 border-l-4 border-blue-500' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Financial Forecaster
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Company</h3>
            <div className="space-y-1">
              <Link 
                to="/about" 
                className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive('/about') 
                    ? 'bg-blue-100 text-blue-700 border-l-4 border-blue-500' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                About Us
              </Link>
              <Link 
                to="/team" 
                className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive('/team') 
                    ? 'bg-blue-100 text-blue-700 border-l-4 border-blue-500' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Our Team
              </Link>
              <Link 
                to="/careers" 
                className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive('/careers') 
                    ? 'bg-blue-100 text-blue-700 border-l-4 border-blue-500' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Careers
              </Link>
              <Link 
                to="/partnerships" 
                className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive('/partnerships') 
                    ? 'bg-blue-100 text-blue-700 border-l-4 border-blue-500' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Partnerships
              </Link>
              <Link 
                to="/pricing" 
                className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive('/pricing') 
                    ? 'bg-blue-100 text-blue-700 border-l-4 border-blue-500' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Pricing
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Resources</h3>
            <div className="space-y-1">
              <Link 
                to="/blog" 
                className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive('/blog') 
                    ? 'bg-blue-100 text-blue-700 border-l-4 border-blue-500' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Blog
              </Link>
              <Link 
                to="/case-studies" 
                className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive('/case-studies') 
                    ? 'bg-blue-100 text-blue-700 border-l-4 border-blue-500' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Case Studies
              </Link>
              <Link 
                to="/api-docs" 
                className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive('/api-docs') 
                    ? 'bg-blue-100 text-blue-700 border-l-4 border-blue-500' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                API Documentation
              </Link>
              <Link 
                to="/help" 
                className={`block px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive('/help') 
                    ? 'bg-blue-100 text-blue-700 border-l-4 border-blue-500' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Help Center
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;