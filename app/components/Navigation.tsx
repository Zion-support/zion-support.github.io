import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [microSaasOpen, setMicroSaasOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-slate-900 to-slate-800 shadow-2xl border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 group">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                Zion Tech Group
              </h1>
            </Link>
          </div>
          
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
                className="text-gray-300 hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors duration-300"
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
                  className="absolute left-0 mt-2 w-80 bg-slate-800 rounded-xl shadow-2xl z-50 border border-purple-500/20"
                >
                  <div className="py-4">
                    <div className="px-4 py-2">
                      <h3 className="text-sm font-semibold text-purple-300 uppercase tracking-wider mb-3">Core Services</h3>
                      <div className="space-y-2">
                        <Link to="/ai-services" className="block px-4 py-2 text-sm text-gray-300 hover:bg-purple-500/20 hover:text-purple-300 rounded-lg transition-colors duration-300">
                          🤖 AI Services
                        </Link>
                        <Link to="/it-services" className="block px-4 py-2 text-sm text-gray-300 hover:bg-purple-500/20 hover:text-purple-300 rounded-lg transition-colors duration-300">
                          💻 IT Services
                        </Link>
                        <Link to="/cloud-infrastructure" className="block px-4 py-2 text-sm text-gray-300 hover:bg-purple-500/20 hover:text-purple-300 rounded-lg transition-colors duration-300">
                          ☁️ Cloud Infrastructure
                        </Link>
                        <Link to="/5g-solutions" className="block px-4 py-2 text-sm text-gray-300 hover:bg-purple-500/20 hover:text-purple-300 rounded-lg transition-colors duration-300">
                          📡 5G Solutions
                        </Link>
                      </div>
                    </div>
                    
                    <div className="border-t border-slate-700 px-4 py-2">
                      <h3 className="text-sm font-semibold text-purple-300 uppercase tracking-wider mb-3">Micro SaaS</h3>
                      <div className="space-y-2">
                        <Link to="/micro-saas-solutions" className="block px-4 py-2 text-sm text-gray-300 hover:bg-purple-500/20 hover:text-purple-300 rounded-lg transition-colors duration-300">
                          🚀 All Micro SaaS
                        </Link>
                        <Link to="/zion-ai-content-moderator" className="block px-4 py-2 text-sm text-gray-300 hover:bg-purple-500/20 hover:text-purple-300 rounded-lg transition-colors duration-300">
                          🛡️ Content Moderator
                        </Link>
                        <Link to="/zion-ai-customer-churn-predictor" className="block px-4 py-2 text-sm text-gray-300 hover:bg-purple-500/20 hover:text-purple-300 rounded-lg transition-colors duration-300">
                          📊 Churn Predictor
                        </Link>
                        <Link to="/zion-ai-email-marketing-pro" className="block px-4 py-2 text-sm text-gray-300 hover:bg-purple-500/20 hover:text-purple-300 rounded-lg transition-colors duration-300">
                          📧 Email Marketing Pro
                        </Link>
                        <Link to="/zion-ai-workflow-automator-pro" className="block px-4 py-2 text-sm text-gray-300 hover:bg-purple-500/20 hover:text-purple-300 rounded-lg transition-colors duration-300">
                          ⚡ Workflow Automator
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <Link to="/pricing" className="text-gray-300 hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">
              Pricing
            </Link>
            <Link to="/blog" className="text-gray-300 hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">
              Blog
            </Link>
            <Link to="/case-studies" className="text-gray-300 hover:text-purple-300 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">
              Case Studies
            </Link>
            <Link to="/contact" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
              Contact
            </Link>
          </div>

          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-purple-300 focus:outline-none focus:text-purple-300 transition-colors duration-300"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-slate-800 border-t border-purple-500/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="text-gray-300 hover:text-purple-300 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-purple-300 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">
              About
            </Link>
            
            <div className="space-y-1">
              <div className="text-purple-300 px-3 py-2 text-base font-medium">Core Services</div>
              <Link to="/ai-services" className="text-gray-400 hover:text-purple-300 block px-6 py-2 rounded-md text-sm transition-colors duration-300">
                🤖 AI Services
              </Link>
              <Link to="/it-services" className="text-gray-400 hover:text-purple-300 block px-6 py-2 rounded-md text-sm transition-colors duration-300">
                💻 IT Services
              </Link>
              <Link to="/cloud-infrastructure" className="text-gray-400 hover:text-purple-300 block px-6 py-2 rounded-md text-sm transition-colors duration-300">
                ☁️ Cloud Infrastructure
              </Link>
              <Link to="/5g-solutions" className="text-gray-400 hover:text-purple-300 block px-6 py-2 rounded-md text-sm transition-colors duration-300">
                📡 5G Solutions
              </Link>
            </div>
            
            <div className="space-y-1">
              <div className="text-purple-300 px-3 py-2 text-base font-medium">Micro SaaS</div>
              <Link to="/micro-saas-solutions" className="text-gray-400 hover:text-purple-300 block px-6 py-2 rounded-md text-sm transition-colors duration-300">
                🚀 All Micro SaaS
              </Link>
              <Link to="/zion-ai-content-moderator" className="text-gray-400 hover:text-purple-300 block px-6 py-2 rounded-md text-sm transition-colors duration-300">
                🛡️ Content Moderator
              </Link>
              <Link to="/zion-ai-customer-churn-predictor" className="text-gray-400 hover:text-purple-300 block px-6 py-2 rounded-md text-sm transition-colors duration-300">
                📊 Churn Predictor
              </Link>
              <Link to="/zion-ai-email-marketing-pro" className="text-gray-400 hover:text-purple-300 block px-6 py-2 rounded-md text-sm transition-colors duration-300">
                📧 Email Marketing Pro
              </Link>
            </div>
            
            <Link to="/pricing" className="text-gray-300 hover:text-purple-300 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">
              Pricing
            </Link>
            <Link to="/blog" className="text-gray-300 hover:text-purple-300 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">
              Blog
            </Link>
            <Link to="/case-studies" className="text-gray-300 hover:text-purple-300 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">
              Case Studies
            </Link>
            <Link to="/contact" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white block px-3 py-2 rounded-md text-base font-medium transition-all duration-300">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;