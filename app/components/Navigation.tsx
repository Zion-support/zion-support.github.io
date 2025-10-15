import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="futuristic-card bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 shadow-lg border-b border-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-2xl font-bold neon-text">Zion Tech Group</h1>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
                className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors duration-300"
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
                  className="absolute left-0 mt-2 w-80 futuristic-card bg-gray-800/95 backdrop-blur-lg rounded-md shadow-lg z-50 border border-cyan-500/20"
                >
                  <div className="py-1">
                    <div className="px-4 py-2 text-xs font-semibold text-cyan-400 uppercase tracking-wider">Core Services</div>
                    <Link to="/services" className="block px-4 py-2 text-sm text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 transition-colors duration-300">
                      All Services
                    </Link>
                    <Link to="/ai-services" className="block px-4 py-2 text-sm text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 transition-colors duration-300">
                      AI Services
                    </Link>
                    <Link to="/it-services" className="block px-4 py-2 text-sm text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 transition-colors duration-300">
                      IT Services
                    </Link>
                    <Link to="/cloud-infrastructure" className="block px-4 py-2 text-sm text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 transition-colors duration-300">
                      Cloud Infrastructure
                    </Link>
                    <Link to="/5g-solutions" className="block px-4 py-2 text-sm text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 transition-colors duration-300">
                      5G Solutions
                    </Link>
                    <Link to="/digital-transformation" className="block px-4 py-2 text-sm text-gray-300 hover:bg-cyan-500/10 hover:text-cyan-400 transition-colors duration-300">
                      Digital Transformation
                    </Link>
                    <div className="border-t border-cyan-500/20 my-1"></div>
                    <div className="px-4 py-2 text-xs font-semibold text-purple-400 uppercase tracking-wider">AI Products</div>
                    <Link to="/ai-content-generator" className="block px-4 py-2 text-sm text-gray-300 hover:bg-purple-500/10 hover:text-purple-400 transition-colors duration-300">
                      AI Content Generator
                    </Link>
                    <Link to="/zion-ai-customer-support-pro" className="block px-4 py-2 text-sm text-gray-300 hover:bg-purple-500/10 hover:text-purple-400 transition-colors duration-300">
                      AI Customer Support Pro
                    </Link>
                    <Link to="/zion-ai-workflow-automator-pro" className="block px-4 py-2 text-sm text-gray-300 hover:bg-purple-500/10 hover:text-purple-400 transition-colors duration-300">
                      AI Workflow Automator Pro
                    </Link>
                    <Link to="/zion-ai-email-marketing-pro" className="block px-4 py-2 text-sm text-gray-300 hover:bg-purple-500/10 hover:text-purple-400 transition-colors duration-300">
                      AI Email Marketing Pro
                    </Link>
                    <Link to="/zion-ai-chatbot-pro" className="block px-4 py-2 text-sm text-gray-300 hover:bg-purple-500/10 hover:text-purple-400 transition-colors duration-300">
                      AI Chatbot Pro
                    </Link>
                    <Link to="/zion-ai-document-processor" className="block px-4 py-2 text-sm text-gray-300 hover:bg-purple-500/10 hover:text-purple-400 transition-colors duration-300">
                      AI Document Processor
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
            <Link to="/team" className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">
              Team
            </Link>
            <Link to="/careers" className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">
              Careers
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300">
              Contact
            </Link>
          </div>

          <div className="md:hidden flex items-center">
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
        <div className="md:hidden futuristic-card bg-gray-800/95 backdrop-blur-lg border-t border-cyan-500/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300">
              About
            </Link>
            <div className="space-y-1">
              <div className="text-gray-700 px-3 py-2 text-base font-medium">Core Services</div>
              <Link to="/services" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                All Services
              </Link>
              <Link to="/ai-services" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                AI Services
              </Link>
              <Link to="/it-services" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                IT Services
              </Link>
              <Link to="/cloud-infrastructure" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                Cloud Infrastructure
              </Link>
              <Link to="/5g-solutions" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                5G Solutions
              </Link>
              <Link to="/digital-transformation" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                Digital Transformation
              </Link>
              <div className="text-gray-700 px-3 py-2 text-base font-medium mt-4">AI Products</div>
              <Link to="/ai-content-generator" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                AI Content Generator
              </Link>
              <Link to="/zion-ai-customer-support-pro" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                AI Customer Support Pro
              </Link>
              <Link to="/zion-ai-workflow-automator-pro" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                AI Workflow Automator Pro
              </Link>
              <Link to="/zion-ai-email-marketing-pro" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm">
                AI Email Marketing Pro
              </Link>
            </div>
            <Link to="/pricing" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
              Pricing
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
              Blog
            </Link>
            <Link to="/team" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
              Team
            </Link>
            <Link to="/careers" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
              Careers
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;