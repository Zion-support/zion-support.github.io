import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <nav className="glass-dark sticky top-0 z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 hover-glow">
              <h1 className="text-3xl font-bold neon-glow-cyan">Zion Tech Group</h1>
            </Link>
          </div>
          
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-white/10">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-white/10">
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-white/10 flex items-center"
              >
                Services
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {isServicesOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-80 glass-dark rounded-lg shadow-xl border border-white/20 p-4 z-50"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <h3 className="text-sm font-semibold text-cyan-400 mb-2">AI Services</h3>
                      <div className="space-y-1">
                        <Link to="/ai-services" className="block text-xs text-gray-300 hover:text-white py-1">All AI Services</Link>
                        <Link to="/zion-ai-content-moderator" className="block text-xs text-gray-300 hover:text-white py-1">Content Moderator</Link>
                        <Link to="/zion-ai-customer-support-pro" className="block text-xs text-gray-300 hover:text-white py-1">Customer Support Pro</Link>
                        <Link to="/zion-ai-document-analyzer" className="block text-xs text-gray-300 hover:text-white py-1">Document Analyzer</Link>
                        <Link to="/zion-ai-financial-forecaster" className="block text-xs text-gray-300 hover:text-white py-1">Financial Forecaster</Link>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-purple-400 mb-2">Micro SaaS</h3>
                      <div className="space-y-1">
                        <Link to="/micro-saas-solutions" className="block text-xs text-gray-300 hover:text-white py-1">All Micro SaaS</Link>
                        <Link to="/zion-smart-expense-tracker" className="block text-xs text-gray-300 hover:text-white py-1">Smart Expense Tracker</Link>
                        <Link to="/zion-customer-satisfaction-monitor" className="block text-xs text-gray-300 hover:text-white py-1">Satisfaction Monitor</Link>
                        <Link to="/zion-ai-task-scheduler" className="block text-xs text-gray-300 hover:text-white py-1">AI Task Scheduler</Link>
                        <Link to="/zion-ai-workflow-automator" className="block text-xs text-gray-300 hover:text-white py-1">Workflow Automator</Link>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-green-400 mb-2">IT Solutions</h3>
                      <div className="space-y-1">
                        <Link to="/it-services" className="block text-xs text-gray-300 hover:text-white py-1">All IT Services</Link>
                        <Link to="/cloud-infrastructure" className="block text-xs text-gray-300 hover:text-white py-1">Cloud Infrastructure</Link>
                        <Link to="/data-analytics" className="block text-xs text-gray-300 hover:text-white py-1">Data Analytics</Link>
                        <Link to="/mobile-development" className="block text-xs text-gray-300 hover:text-white py-1">Mobile Development</Link>
                        <Link to="/network-infrastructure" className="block text-xs text-gray-300 hover:text-white py-1">Network Infrastructure</Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <Link to="/pricing" className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-white/10">
              Pricing
            </Link>
            <Link to="/team" className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-white/10">
              Team
            </Link>
            <Link to="/blog" className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-white/10">
              Blog
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-white/10">
              Contact
            </Link>
            
            <Link to="/contact" className="btn-neon ml-4">
              Get Started
            </Link>
          </div>

          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-cyan-400 focus:outline-none focus:text-cyan-400 transition-colors duration-300"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden glass-dark border-t border-white/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">
              About
            </Link>
            <Link to="/services" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">
              Services
            </Link>
            <Link to="/ai-services" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ml-4">
              AI Services
            </Link>
            <Link to="/micro-saas-solutions" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ml-4">
              Micro SaaS
            </Link>
            <Link to="/it-services" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ml-4">
              IT Solutions
            </Link>
            <Link to="/pricing" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">
              Pricing
            </Link>
            <Link to="/team" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">
              Team
            </Link>
            <Link to="/blog" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">
              Blog
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">
              Contact
            </Link>
            <div className="pt-4">
              <Link to="/contact" className="btn-neon block text-center">
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