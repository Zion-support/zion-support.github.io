import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aiServicesOpen, setAiServicesOpen] = useState(false);
  const [itServicesOpen, setItServicesOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">Zion Tech Group</h1>
                <p className="text-xs text-cyan-300">AI & IT Solutions</p>
              </div>
            </Link>
          </div>
          
          <div className="hidden lg:flex items-center space-x-6">
            <Link to="/" className="text-white hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              About
            </Link>
            
            {/* AI Services Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setAiServicesOpen(true)}
                onMouseLeave={() => setAiServicesOpen(false)}
                className="text-white hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors"
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
                  className="absolute left-0 mt-2 w-80 bg-white rounded-lg shadow-xl z-50 border border-gray-200"
                >
                  <div className="py-2">
                    <Link to="/ai-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 font-semibold">All AI Services</Link>
                    <div className="border-t border-gray-100 my-2"></div>
                    <div className="px-4 py-1 text-xs font-semibold text-gray-500 uppercase tracking-wider">AI Tools</div>
                    <Link to="/ai-content-generator" className="block px-4 py-2 text-sm text-gray-700 hover:bg-cyan-50 hover:text-cyan-600">AI Content Generator</Link>
                    <Link to="/ai-customer-support-pro" className="block px-4 py-2 text-sm text-gray-700 hover:bg-cyan-50 hover:text-cyan-600">AI Customer Support Pro</Link>
                    <Link to="/ai-document-analyzer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-cyan-50 hover:text-cyan-600">AI Document Analyzer</Link>
                    <Link to="/ai-sales-predictor" className="block px-4 py-2 text-sm text-gray-700 hover:bg-cyan-50 hover:text-cyan-600">AI Sales Predictor</Link>
                    <Link to="/ai-translator" className="block px-4 py-2 text-sm text-gray-700 hover:bg-cyan-50 hover:text-cyan-600">AI Translator</Link>
                    <Link to="/ai-video-generator" className="block px-4 py-2 text-sm text-gray-700 hover:bg-cyan-50 hover:text-cyan-600">AI Video Generator</Link>
                    <Link to="/ai-code-reviewer" className="block px-4 py-2 text-sm text-gray-700 hover:bg-cyan-50 hover:text-cyan-600">AI Code Reviewer</Link>
                    <div className="border-t border-gray-100 my-2"></div>
                    <div className="px-4 py-1 text-xs font-semibold text-gray-500 uppercase tracking-wider">AI Solutions</div>
                    <Link to="/ai-consulting-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-cyan-50 hover:text-cyan-600">AI Consulting</Link>
                    <Link to="/ai-ml-platform" className="block px-4 py-2 text-sm text-gray-700 hover:bg-cyan-50 hover:text-cyan-600">AI/ML Platform</Link>
                    <Link to="/ai-cybersecurity-monitor" className="block px-4 py-2 text-sm text-gray-700 hover:bg-cyan-50 hover:text-cyan-600">AI Cybersecurity</Link>
                  </div>
                </div>
              )}
            </div>

            {/* IT Services Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setItServicesOpen(true)}
                onMouseLeave={() => setItServicesOpen(false)}
                className="text-white hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium flex items-center transition-colors"
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
                  className="absolute left-0 mt-2 w-80 bg-white rounded-lg shadow-xl z-50 border border-gray-200"
                >
                  <div className="py-2">
                    <Link to="/it-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 font-semibold">All IT Services</Link>
                    <div className="border-t border-gray-100 my-2"></div>
                    <div className="px-4 py-1 text-xs font-semibold text-gray-500 uppercase tracking-wider">Infrastructure</div>
                    <Link to="/cloud-infrastructure" className="block px-4 py-2 text-sm text-gray-700 hover:bg-cyan-50 hover:text-cyan-600">Cloud Infrastructure</Link>
                    <Link to="/microservices-architecture" className="block px-4 py-2 text-sm text-gray-700 hover:bg-cyan-50 hover:text-cyan-600">Microservices Architecture</Link>
                    <Link to="/performance-optimization" className="block px-4 py-2 text-sm text-gray-700 hover:bg-cyan-50 hover:text-cyan-600">Performance Optimization</Link>
                    <Link to="/disaster-recovery" className="block px-4 py-2 text-sm text-gray-700 hover:bg-cyan-50 hover:text-cyan-600">Disaster Recovery</Link>
                    <div className="border-t border-gray-100 my-2"></div>
                    <div className="px-4 py-1 text-xs font-semibold text-gray-500 uppercase tracking-wider">Development</div>
                    <Link to="/web-development" className="block px-4 py-2 text-sm text-gray-700 hover:bg-cyan-50 hover:text-cyan-600">Web Development</Link>
                    <Link to="/mobile-development" className="block px-4 py-2 text-sm text-gray-700 hover:bg-cyan-50 hover:text-cyan-600">Mobile Development</Link>
                    <Link to="/api-development" className="block px-4 py-2 text-sm text-gray-700 hover:bg-cyan-50 hover:text-cyan-600">API Development</Link>
                    <Link to="/blockchain-solutions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-cyan-50 hover:text-cyan-600">Blockchain Solutions</Link>
                    <div className="border-t border-gray-100 my-2"></div>
                    <div className="px-4 py-1 text-xs font-semibold text-gray-500 uppercase tracking-wider">Data & Analytics</div>
                    <Link to="/data-analytics" className="block px-4 py-2 text-sm text-gray-700 hover:bg-cyan-50 hover:text-cyan-600">Data Analytics</Link>
                    <Link to="/data-engineering" className="block px-4 py-2 text-sm text-gray-700 hover:bg-cyan-50 hover:text-cyan-600">Data Engineering</Link>
                    <Link to="/database-management" className="block px-4 py-2 text-sm text-gray-700 hover:bg-cyan-50 hover:text-cyan-600">Database Management</Link>
                    <div className="border-t border-gray-100 my-2"></div>
                    <div className="px-4 py-1 text-xs font-semibold text-gray-500 uppercase tracking-wider">Operations</div>
                    <Link to="/devops-automation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-cyan-50 hover:text-cyan-600">DevOps & Automation</Link>
                    <Link to="/cybersecurity" className="block px-4 py-2 text-sm text-gray-700 hover:bg-cyan-50 hover:text-cyan-600">Cybersecurity</Link>
                    <Link to="/enterprise-integration" className="block px-4 py-2 text-sm text-gray-700 hover:bg-cyan-50 hover:text-cyan-600">Enterprise Integration</Link>
                    <Link to="/iot-solutions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-cyan-50 hover:text-cyan-600">IoT Solutions</Link>
                  </div>
                </div>
              )}
            </div>

            <Link to="/micro-saas-solutions" className="text-white hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Micro SAAS
            </Link>
            <Link to="/pricing" className="text-white hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Pricing
            </Link>
            <Link to="/case-studies" className="text-white hover:text-cyan-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Case Studies
            </Link>
            <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 hover:scale-105">
              Contact Us
            </Link>
          </div>

          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-cyan-400 focus:outline-none focus:text-cyan-400 p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-gray-900 border-t border-gray-700">
          <div className="px-4 pt-2 pb-3 space-y-1">
            <Link to="/" className="text-white hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium">
              About
            </Link>
            
            <div className="px-3 py-2">
              <div className="text-white text-base font-medium mb-2">AI Services</div>
              <div className="ml-4 space-y-1">
                <Link to="/ai-services" className="text-gray-300 hover:text-cyan-400 block px-3 py-1 rounded-md text-sm font-semibold">All AI Services</Link>
                <div className="text-xs text-gray-500 uppercase tracking-wider px-3 py-1">AI Tools</div>
                <Link to="/ai-content-generator" className="text-gray-300 hover:text-cyan-400 block px-3 py-1 rounded-md text-sm">AI Content Generator</Link>
                <Link to="/ai-customer-support-pro" className="text-gray-300 hover:text-cyan-400 block px-3 py-1 rounded-md text-sm">AI Customer Support Pro</Link>
                <Link to="/ai-document-analyzer" className="text-gray-300 hover:text-cyan-400 block px-3 py-1 rounded-md text-sm">AI Document Analyzer</Link>
                <Link to="/ai-sales-predictor" className="text-gray-300 hover:text-cyan-400 block px-3 py-1 rounded-md text-sm">AI Sales Predictor</Link>
                <Link to="/ai-video-generator" className="text-gray-300 hover:text-cyan-400 block px-3 py-1 rounded-md text-sm">AI Video Generator</Link>
                <Link to="/ai-code-reviewer" className="text-gray-300 hover:text-cyan-400 block px-3 py-1 rounded-md text-sm">AI Code Reviewer</Link>
                <div className="text-xs text-gray-500 uppercase tracking-wider px-3 py-1">AI Solutions</div>
                <Link to="/ai-consulting-services" className="text-gray-300 hover:text-cyan-400 block px-3 py-1 rounded-md text-sm">AI Consulting</Link>
                <Link to="/ai-ml-platform" className="text-gray-300 hover:text-cyan-400 block px-3 py-1 rounded-md text-sm">AI/ML Platform</Link>
                <Link to="/ai-cybersecurity-monitor" className="text-gray-300 hover:text-cyan-400 block px-3 py-1 rounded-md text-sm">AI Cybersecurity</Link>
              </div>
            </div>

            <div className="px-3 py-2">
              <div className="text-white text-base font-medium mb-2">IT Solutions</div>
              <div className="ml-4 space-y-1">
                <Link to="/it-services" className="text-gray-300 hover:text-cyan-400 block px-3 py-1 rounded-md text-sm font-semibold">All IT Services</Link>
                <div className="text-xs text-gray-500 uppercase tracking-wider px-3 py-1">Infrastructure</div>
                <Link to="/cloud-infrastructure" className="text-gray-300 hover:text-cyan-400 block px-3 py-1 rounded-md text-sm">Cloud Infrastructure</Link>
                <Link to="/microservices-architecture" className="text-gray-300 hover:text-cyan-400 block px-3 py-1 rounded-md text-sm">Microservices Architecture</Link>
                <Link to="/performance-optimization" className="text-gray-300 hover:text-cyan-400 block px-3 py-1 rounded-md text-sm">Performance Optimization</Link>
                <Link to="/disaster-recovery" className="text-gray-300 hover:text-cyan-400 block px-3 py-1 rounded-md text-sm">Disaster Recovery</Link>
                <div className="text-xs text-gray-500 uppercase tracking-wider px-3 py-1">Development</div>
                <Link to="/web-development" className="text-gray-300 hover:text-cyan-400 block px-3 py-1 rounded-md text-sm">Web Development</Link>
                <Link to="/mobile-development" className="text-gray-300 hover:text-cyan-400 block px-3 py-1 rounded-md text-sm">Mobile Development</Link>
                <Link to="/api-development" className="text-gray-300 hover:text-cyan-400 block px-3 py-1 rounded-md text-sm">API Development</Link>
                <Link to="/blockchain-solutions" className="text-gray-300 hover:text-cyan-400 block px-3 py-1 rounded-md text-sm">Blockchain Solutions</Link>
                <div className="text-xs text-gray-500 uppercase tracking-wider px-3 py-1">Data & Analytics</div>
                <Link to="/data-analytics" className="text-gray-300 hover:text-cyan-400 block px-3 py-1 rounded-md text-sm">Data Analytics</Link>
                <Link to="/data-engineering" className="text-gray-300 hover:text-cyan-400 block px-3 py-1 rounded-md text-sm">Data Engineering</Link>
                <Link to="/database-management" className="text-gray-300 hover:text-cyan-400 block px-3 py-1 rounded-md text-sm">Database Management</Link>
                <div className="text-xs text-gray-500 uppercase tracking-wider px-3 py-1">Operations</div>
                <Link to="/devops-automation" className="text-gray-300 hover:text-cyan-400 block px-3 py-1 rounded-md text-sm">DevOps & Automation</Link>
                <Link to="/cybersecurity" className="text-gray-300 hover:text-cyan-400 block px-3 py-1 rounded-md text-sm">Cybersecurity</Link>
                <Link to="/enterprise-integration" className="text-gray-300 hover:text-cyan-400 block px-3 py-1 rounded-md text-sm">Enterprise Integration</Link>
                <Link to="/iot-solutions" className="text-gray-300 hover:text-cyan-400 block px-3 py-1 rounded-md text-sm">IoT Solutions</Link>
              </div>
            </div>

            <Link to="/micro-saas-solutions" className="text-white hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium">
              Micro SAAS
            </Link>
            <Link to="/pricing" className="text-white hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium">
              Pricing
            </Link>
            <Link to="/case-studies" className="text-white hover:text-cyan-400 block px-3 py-2 rounded-md text-base font-medium">
              Case Studies
            </Link>
            <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white block px-3 py-2 rounded-md text-base font-medium text-center">
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;