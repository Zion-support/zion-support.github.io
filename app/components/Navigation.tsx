import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aiServicesOpen, setAiServicesOpen] = useState(false);
  const [itServicesOpen, setItServicesOpen] = useState(false);
  const [microSaasOpen, setMicroSaasOpen] = useState(false);

  return (
    <nav className="bg-black/90 backdrop-blur-md border-b border-cyan-400/20 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 group">
              <h1 className="text-3xl font-bold neon-text group-hover:scale-105 transition-transform duration-300">
                Zion Tech Group
              </h1>
            </Link>
          </div>
          
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">
              About
            </Link>
            
            {/* AI Services Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setAiServicesOpen(true)}
                onMouseLeave={() => setAiServicesOpen(false)}
                className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors duration-300"
              >
                AI Services
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {aiServicesOpen && (
                <div
                  onMouseEnter={() => setAiServicesOpen(true)}
                  onMouseLeave={() => setAiServicesOpen(false)}
                  className="absolute left-0 mt-2 w-64 cyber-card z-50"
                >
                  <div className="py-2">
                    <Link to="/ai-services" className="block px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/10 transition-colors duration-300">
                      🤖 AI Development Services
                    </Link>
                    <Link to="/ai-content-generator" className="block px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/10 transition-colors duration-300">
                      ✍️ AI Content Generator Pro
                    </Link>
                    <Link to="/data-analytics" className="block px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/10 transition-colors duration-300">
                      📊 AI Data Analytics Platform
                    </Link>
                    <Link to="/ai-solutions" className="block px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/10 transition-colors duration-300">
                      💡 AI Consulting & Strategy
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* IT Services Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setItServicesOpen(true)}
                onMouseLeave={() => setItServicesOpen(false)}
                className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors duration-300"
              >
                IT Services
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {itServicesOpen && (
                <div
                  onMouseEnter={() => setItServicesOpen(true)}
                  onMouseLeave={() => setItServicesOpen(false)}
                  className="absolute left-0 mt-2 w-64 cyber-card z-50"
                >
                  <div className="py-2">
                    <Link to="/cloud-infrastructure" className="block px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/10 transition-colors duration-300">
                      ☁️ Cloud Infrastructure
                    </Link>
                    <Link to="/cybersecurity" className="block px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/10 transition-colors duration-300">
                      🔒 Cybersecurity Solutions
                    </Link>
                    <Link to="/network-infrastructure" className="block px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/10 transition-colors duration-300">
                      🌐 Network Infrastructure
                    </Link>
                    <Link to="/database-management" className="block px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/10 transition-colors duration-300">
                      🗄️ Database Management
                    </Link>
                    <Link to="/web-development" className="block px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/10 transition-colors duration-300">
                      💻 Web Development
                    </Link>
                    <Link to="/mobile-development" className="block px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/10 transition-colors duration-300">
                      📱 Mobile Development
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Micro SaaS Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setMicroSaasOpen(true)}
                onMouseLeave={() => setMicroSaasOpen(false)}
                className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors duration-300"
              >
                Micro SaaS
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {microSaasOpen && (
                <div
                  onMouseEnter={() => setMicroSaasOpen(true)}
                  onMouseLeave={() => setMicroSaasOpen(false)}
                  className="absolute left-0 mt-2 w-64 cyber-card z-50"
                >
                  <div className="py-2">
                    <Link to="/micro-saas-solutions" className="block px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/10 transition-colors duration-300">
                      ✅ Task Manager Pro
                    </Link>
                    <Link to="/micro-saas-solutions" className="block px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/10 transition-colors duration-300">
                      💰 Smart Expense Tracker
                    </Link>
                    <Link to="/micro-saas-solutions" className="block px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/10 transition-colors duration-300">
                      📧 Email Marketing Pro
                    </Link>
                    <Link to="/micro-saas-solutions" className="block px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/10 transition-colors duration-300">
                      📦 Inventory Optimizer
                    </Link>
                    <Link to="/micro-saas-solutions" className="block px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/10 transition-colors duration-300">
                      📱 Social Scheduler Pro
                    </Link>
                    <Link to="/micro-saas-solutions" className="block px-4 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/10 transition-colors duration-300">
                      ⚡ Workflow Automator
                    </Link>
                  </div>
                </div>
              )}
            </div>
            
            <Link to="/pricing" className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">
              Pricing
            </Link>
            <Link to="/blog" className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">
              Blog
            </Link>
            <Link to="/contact" className="neon-button text-sm">
              Contact Us
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
        <div className="lg:hidden cyber-card mx-4 mt-2">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">
              About
            </Link>
            
            <div className="space-y-1">
              <div className="text-cyan-400 px-3 py-2 text-base font-medium">AI Services</div>
              <Link to="/ai-services" className="text-gray-400 hover:text-cyan-400 block px-6 py-2 rounded-md text-sm transition-colors duration-300">
                🤖 AI Development
              </Link>
              <Link to="/ai-content-generator" className="text-gray-400 hover:text-cyan-400 block px-6 py-2 rounded-md text-sm transition-colors duration-300">
                ✍️ Content Generator
              </Link>
              <Link to="/data-analytics" className="text-gray-400 hover:text-cyan-400 block px-6 py-2 rounded-md text-sm transition-colors duration-300">
                📊 Data Analytics
              </Link>
            </div>

            <div className="space-y-1">
              <div className="text-cyan-400 px-3 py-2 text-base font-medium">IT Services</div>
              <Link to="/cloud-infrastructure" className="text-gray-400 hover:text-cyan-400 block px-6 py-2 rounded-md text-sm transition-colors duration-300">
                ☁️ Cloud Infrastructure
              </Link>
              <Link to="/web-development" className="text-gray-400 hover:text-cyan-400 block px-6 py-2 rounded-md text-sm transition-colors duration-300">
                💻 Web Development
              </Link>
              <Link to="/mobile-development" className="text-gray-400 hover:text-cyan-400 block px-6 py-2 rounded-md text-sm transition-colors duration-300">
                📱 Mobile Development
              </Link>
            </div>

            <div className="space-y-1">
              <div className="text-cyan-400 px-3 py-2 text-base font-medium">Micro SaaS</div>
              <Link to="/micro-saas-solutions" className="text-gray-400 hover:text-cyan-400 block px-6 py-2 rounded-md text-sm transition-colors duration-300">
                ✅ Task Manager
              </Link>
              <Link to="/micro-saas-solutions" className="text-gray-400 hover:text-cyan-400 block px-6 py-2 rounded-md text-sm transition-colors duration-300">
                💰 Expense Tracker
              </Link>
              <Link to="/micro-saas-solutions" className="text-gray-400 hover:text-cyan-400 block px-6 py-2 rounded-md text-sm transition-colors duration-300">
                📧 Email Marketing
              </Link>
            </div>
            
            <Link to="/pricing" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">
              Pricing
            </Link>
            <Link to="/blog" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">
              Blog
            </Link>
            <Link to="/contact" className="neon-button block text-center mt-4">
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;