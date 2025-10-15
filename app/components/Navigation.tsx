import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aiServicesOpen, setAiServicesOpen] = useState(false);
  const [saasOpen, setSaasOpen] = useState(false);
  const [itServicesOpen, setItServicesOpen] = useState(false);

  return (
    <nav className="futuristic-card border-0 rounded-none shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-3xl font-bold neon-text">Zion Tech Group</h1>
            </Link>
          </div>
          
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-neon-blue px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:neon-text">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-neon-blue px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:neon-text">
              About
            </Link>
            
            {/* AI Services Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setAiServicesOpen(true)}
                onMouseLeave={() => setAiServicesOpen(false)}
                className="text-gray-300 hover:text-neon-purple px-3 py-2 rounded-md text-sm font-medium flex items-center transition-all duration-300"
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
                  className="absolute left-0 mt-2 w-64 futuristic-card z-50"
                >
                  <div className="py-2">
                    <Link to="/ai-services" className="block px-4 py-2 text-sm text-gray-300 hover:text-neon-blue hover:bg-gray-800 transition-all duration-300">
                      🤖 AI Development & Consulting
                    </Link>
                    <Link to="/ai-content-generator" className="block px-4 py-2 text-sm text-gray-300 hover:text-neon-blue hover:bg-gray-800 transition-all duration-300">
                      ✍️ AI Content Generator Pro
                    </Link>
                    <Link to="/ai-solutions" className="block px-4 py-2 text-sm text-gray-300 hover:text-neon-blue hover:bg-gray-800 transition-all duration-300">
                      🎧 AI Customer Support Pro
                    </Link>
                    <Link to="/data-analytics" className="block px-4 py-2 text-sm text-gray-300 hover:text-neon-blue hover:bg-gray-800 transition-all duration-300">
                      📊 Data Analytics & BI
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Micro SAAS Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setSaasOpen(true)}
                onMouseLeave={() => setSaasOpen(false)}
                className="text-gray-300 hover:text-neon-pink px-3 py-2 rounded-md text-sm font-medium flex items-center transition-all duration-300"
              >
                Micro SAAS
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {saasOpen && (
                <div
                  onMouseEnter={() => setSaasOpen(true)}
                  onMouseLeave={() => setSaasOpen(false)}
                  className="absolute left-0 mt-2 w-64 futuristic-card z-50"
                >
                  <div className="py-2">
                    <Link to="/micro-saas-solutions" className="block px-4 py-2 text-sm text-gray-300 hover:text-neon-pink hover:bg-gray-800 transition-all duration-300">
                      ⚡ Task Manager Pro
                    </Link>
                    <Link to="/zion-smart-expense-tracker" className="block px-4 py-2 text-sm text-gray-300 hover:text-neon-pink hover:bg-gray-800 transition-all duration-300">
                      💰 Smart Expense Tracker
                    </Link>
                    <Link to="/zion-ai-email-marketing-pro" className="block px-4 py-2 text-sm text-gray-300 hover:text-neon-pink hover:bg-gray-800 transition-all duration-300">
                      📧 AI Email Marketing Pro
                    </Link>
                    <Link to="/zion-ai-workflow-automator-pro" className="block px-4 py-2 text-sm text-gray-300 hover:text-neon-pink hover:bg-gray-800 transition-all duration-300">
                      ⚡ Workflow Automator Pro
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
                className="text-gray-300 hover:text-neon-green px-3 py-2 rounded-md text-sm font-medium flex items-center transition-all duration-300"
              >
                IT Solutions
                <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {itServicesOpen && (
                <div
                  onMouseEnter={() => setItServicesOpen(true)}
                  onMouseLeave={() => setItServicesOpen(false)}
                  className="absolute left-0 mt-2 w-64 futuristic-card z-50"
                >
                  <div className="py-2">
                    <Link to="/cloud-infrastructure" className="block px-4 py-2 text-sm text-gray-300 hover:text-neon-green hover:bg-gray-800 transition-all duration-300">
                      ☁️ Cloud Infrastructure
                    </Link>
                    <Link to="/web-development" className="block px-4 py-2 text-sm text-gray-300 hover:text-neon-green hover:bg-gray-800 transition-all duration-300">
                      🌐 Web Development
                    </Link>
                    <Link to="/mobile-development" className="block px-4 py-2 text-sm text-gray-300 hover:text-neon-green hover:bg-gray-800 transition-all duration-300">
                      📱 Mobile Development
                    </Link>
                    <Link to="/network-infrastructure" className="block px-4 py-2 text-sm text-gray-300 hover:text-neon-green hover:bg-gray-800 transition-all duration-300">
                      🔒 Network & Security
                    </Link>
                  </div>
                </div>
              )}
            </div>
            
            <Link to="/pricing" className="text-gray-300 hover:text-neon-blue px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:neon-text">
              Pricing
            </Link>
            <Link to="/contact" className="neon-button text-sm">
              Contact Us
            </Link>
          </div>

          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-neon-blue focus:outline-none focus:text-neon-blue transition-all duration-300"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden futuristic-card border-t border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="text-gray-300 hover:text-neon-blue block px-3 py-2 rounded-md text-base font-medium transition-all duration-300">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-neon-blue block px-3 py-2 rounded-md text-base font-medium transition-all duration-300">
              About
            </Link>
            <div className="space-y-1">
              <div className="text-gray-300 px-3 py-2 text-base font-medium neon-text-purple">AI Services</div>
              <Link to="/ai-services" className="text-gray-400 hover:text-neon-blue block px-6 py-2 rounded-md text-sm transition-all duration-300">
                🤖 AI Development & Consulting
              </Link>
              <Link to="/ai-content-generator" className="text-gray-400 hover:text-neon-blue block px-6 py-2 rounded-md text-sm transition-all duration-300">
                ✍️ AI Content Generator Pro
              </Link>
              <Link to="/ai-solutions" className="text-gray-400 hover:text-neon-blue block px-6 py-2 rounded-md text-sm transition-all duration-300">
                🎧 AI Customer Support Pro
              </Link>
              <Link to="/data-analytics" className="text-gray-400 hover:text-neon-blue block px-6 py-2 rounded-md text-sm transition-all duration-300">
                📊 Data Analytics & BI
              </Link>
            </div>
            <div className="space-y-1">
              <div className="text-gray-300 px-3 py-2 text-base font-medium neon-text-pink">Micro SAAS</div>
              <Link to="/micro-saas-solutions" className="text-gray-400 hover:text-neon-pink block px-6 py-2 rounded-md text-sm transition-all duration-300">
                ⚡ Task Manager Pro
              </Link>
              <Link to="/zion-smart-expense-tracker" className="text-gray-400 hover:text-neon-pink block px-6 py-2 rounded-md text-sm transition-all duration-300">
                💰 Smart Expense Tracker
              </Link>
              <Link to="/zion-ai-email-marketing-pro" className="text-gray-400 hover:text-neon-pink block px-6 py-2 rounded-md text-sm transition-all duration-300">
                📧 AI Email Marketing Pro
              </Link>
              <Link to="/zion-ai-workflow-automator-pro" className="text-gray-400 hover:text-neon-pink block px-6 py-2 rounded-md text-sm transition-all duration-300">
                ⚡ Workflow Automator Pro
              </Link>
            </div>
            <div className="space-y-1">
              <div className="text-gray-300 px-3 py-2 text-base font-medium neon-text-green">IT Solutions</div>
              <Link to="/cloud-infrastructure" className="text-gray-400 hover:text-neon-green block px-6 py-2 rounded-md text-sm transition-all duration-300">
                ☁️ Cloud Infrastructure
              </Link>
              <Link to="/web-development" className="text-gray-400 hover:text-neon-green block px-6 py-2 rounded-md text-sm transition-all duration-300">
                🌐 Web Development
              </Link>
              <Link to="/mobile-development" className="text-gray-400 hover:text-neon-green block px-6 py-2 rounded-md text-sm transition-all duration-300">
                📱 Mobile Development
              </Link>
              <Link to="/network-infrastructure" className="text-gray-400 hover:text-neon-green block px-6 py-2 rounded-md text-sm transition-all duration-300">
                🔒 Network & Security
              </Link>
            </div>
            <Link to="/pricing" className="text-gray-300 hover:text-neon-blue block px-3 py-2 rounded-md text-base font-medium transition-all duration-300">
              Pricing
            </Link>
            <Link to="/contact" className="neon-button w-full text-center mt-4">
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;