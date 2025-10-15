import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-blue-600">Zion Tech Group</h1>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium flex items-center"
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
                  className="absolute left-0 mt-2 w-96 bg-white rounded-md shadow-lg z-50 max-h-96 overflow-y-auto"
                >
                  <div className="py-1">
                    <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b border-gray-100">🤖 AI & Machine Learning</div>
                    <Link to="/ai-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      AI Development Services
                    </Link>
                    <Link to="/ai-solutions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      AI Solutions
                    </Link>
                    <Link to="/ai-content-generator" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      AI Content Generator
                    </Link>
                    <Link to="/data-analytics" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Data Analytics
                    </Link>
                    <Link to="/ai-voice-assistant" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      AI Voice Assistant
                    </Link>
                    <Link to="/ai-image-recognition" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Image Recognition
                    </Link>
                    <Link to="/ai-predictive-analytics" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Predictive Analytics
                    </Link>
                    
                    <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b border-gray-100 mt-2">💻 IT Services</div>
                    <Link to="/it-services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      IT Services
                    </Link>
                    <Link to="/web-development" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Web Development
                    </Link>
                    <Link to="/mobile-development" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Mobile Development
                    </Link>
                    <Link to="/database-management" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Database Management
                    </Link>
                    <Link to="/network-infrastructure" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Network Infrastructure
                    </Link>
                    <Link to="/devops-automation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      DevOps Automation
                    </Link>
                    <Link to="/api-development" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      API Development
                    </Link>
                    
                    <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b border-gray-100 mt-2">☁️ Infrastructure</div>
                    <Link to="/cloud-infrastructure" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Cloud Infrastructure
                    </Link>
                    <Link to="/5g-solutions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      5G Solutions
                    </Link>
                    <Link to="/edge-computing" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Edge Computing
                    </Link>
                    <Link to="/mlops-ai-infrastructure" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      MLOps & AI Infrastructure
                    </Link>
                    
                    <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b border-gray-100 mt-2">💼 Business Solutions</div>
                    <Link to="/digital-transformation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Digital Transformation
                    </Link>
                    <Link to="/micro-saas-solutions" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Micro SaaS Solutions
                    </Link>
                    <Link to="/ai-crm-platform" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      AI CRM Platform
                    </Link>
                    <Link to="/ai-hr-assistant" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      AI HR Assistant
                    </Link>
                    <Link to="/ai-project-manager" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      AI Project Manager
                    </Link>
                    
                    <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider border-b border-gray-100 mt-2">🛠️ AI Tools</div>
                    <Link to="/zion-ai-content-moderator" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Content Moderator
                    </Link>
                    <Link to="/zion-ai-customer-churn-predictor" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Churn Predictor
                    </Link>
                    <Link to="/zion-ai-sales-predictor" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Sales Predictor
                    </Link>
                    <Link to="/zion-ai-workflow-automator" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Workflow Automator
                    </Link>
                    <Link to="/zion-ai-email-marketing-pro" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Email Marketing Pro
                    </Link>
                    <Link to="/zion-ai-social-scheduler-pro" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Social Scheduler Pro
                    </Link>
                    <Link to="/zion-ai-inventory-optimizer-pro" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Inventory Optimizer
                    </Link>
                    <Link to="/zion-ai-fraud-detection" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Fraud Detection
                    </Link>
                  </div>
                </div>
              )}
            </div>
            
            <Link to="/pricing" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              Pricing
            </Link>
            <Link to="/blog" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              Blog
            </Link>
            <Link to="/team" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              Team
            </Link>
            <Link to="/careers" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
              Careers
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
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
        <div className="md:hidden fixed inset-0 z-50 bg-white">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-xl font-bold text-blue-600">Zion Tech Group</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-blue-600"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              
              <div className="space-y-2">
                <div className="text-gray-700 px-3 py-2 text-sm font-semibold uppercase tracking-wider">🤖 AI & Machine Learning</div>
                <Link to="/ai-services" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm" onClick={() => setIsOpen(false)}>
                  AI Development
                </Link>
                <Link to="/ai-voice-assistant" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm" onClick={() => setIsOpen(false)}>
                  Voice Assistant
                </Link>
                <Link to="/ai-image-recognition" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm" onClick={() => setIsOpen(false)}>
                  Image Recognition
                </Link>
                <Link to="/ai-predictive-analytics" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm" onClick={() => setIsOpen(false)}>
                  Predictive Analytics
                </Link>
                <Link to="/data-analytics" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm" onClick={() => setIsOpen(false)}>
                  Data Analytics
                </Link>
              </div>
              
              <div className="space-y-2">
                <div className="text-gray-700 px-3 py-2 text-sm font-semibold uppercase tracking-wider">💻 IT Services</div>
                <Link to="/it-services" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm" onClick={() => setIsOpen(false)}>
                  IT Services
                </Link>
                <Link to="/web-development" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm" onClick={() => setIsOpen(false)}>
                  Web Development
                </Link>
                <Link to="/mobile-development" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm" onClick={() => setIsOpen(false)}>
                  Mobile Development
                </Link>
                <Link to="/api-development" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm" onClick={() => setIsOpen(false)}>
                  API Development
                </Link>
                <Link to="/devops-automation" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm" onClick={() => setIsOpen(false)}>
                  DevOps Automation
                </Link>
              </div>
              
              <div className="space-y-2">
                <div className="text-gray-700 px-3 py-2 text-sm font-semibold uppercase tracking-wider">☁️ Infrastructure</div>
                <Link to="/cloud-infrastructure" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm" onClick={() => setIsOpen(false)}>
                  Cloud Infrastructure
                </Link>
                <Link to="/5g-solutions" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm" onClick={() => setIsOpen(false)}>
                  5G Solutions
                </Link>
                <Link to="/edge-computing" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm" onClick={() => setIsOpen(false)}>
                  Edge Computing
                </Link>
                <Link to="/blockchain-solutions" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm" onClick={() => setIsOpen(false)}>
                  Blockchain Solutions
                </Link>
              </div>
              
              <div className="space-y-2">
                <div className="text-gray-700 px-3 py-2 text-sm font-semibold uppercase tracking-wider">💼 Business Solutions</div>
                <Link to="/digital-transformation" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm" onClick={() => setIsOpen(false)}>
                  Digital Transformation
                </Link>
                <Link to="/micro-saas-solutions" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm" onClick={() => setIsOpen(false)}>
                  Micro SaaS Solutions
                </Link>
                <Link to="/ai-crm-platform" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm" onClick={() => setIsOpen(false)}>
                  AI CRM Platform
                </Link>
                <Link to="/ai-hr-assistant" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm" onClick={() => setIsOpen(false)}>
                  AI HR Assistant
                </Link>
              </div>
              
              <div className="space-y-2">
                <div className="text-gray-700 px-3 py-2 text-sm font-semibold uppercase tracking-wider">🛠️ AI Tools</div>
                <Link to="/zion-ai-content-moderator" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm" onClick={() => setIsOpen(false)}>
                  Content Moderator
                </Link>
                <Link to="/zion-ai-sales-predictor" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm" onClick={() => setIsOpen(false)}>
                  Sales Predictor
                </Link>
                <Link to="/zion-ai-workflow-automator" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm" onClick={() => setIsOpen(false)}>
                  Workflow Automator
                </Link>
                <Link to="/zion-ai-email-marketing-pro" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm" onClick={() => setIsOpen(false)}>
                  Email Marketing Pro
                </Link>
                <Link to="/zion-ai-fraud-detection" className="text-gray-600 hover:text-blue-600 block px-6 py-2 rounded-md text-sm" onClick={() => setIsOpen(false)}>
                  Fraud Detection
                </Link>
              </div>
              
              <div className="border-t pt-4 space-y-2">
                <Link to="/pricing" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>
                  Pricing
                </Link>
                <Link to="/blog" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>
                  Blog
                </Link>
                <Link to="/team" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>
                  Team
                </Link>
                <Link to="/careers" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>
                  Careers
                </Link>
                <Link to="/contact" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsOpen(false)}>
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;