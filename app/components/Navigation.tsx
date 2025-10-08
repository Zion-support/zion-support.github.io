import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, MapPin } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aiServicesOpen, setAiServicesOpen] = useState(false);
  const [itServicesOpen, setItServicesOpen] = useState(false);

  return (
    <nav className="bg-slate-900/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-cyan-500/30 relative">
      {/* Animated border effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 opacity-50"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-cyan-400 neon-text hover:text-cyan-300 transition-colors">
            <span className="text-3xl mr-2">⚡</span>
            Zion Tech Group
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-300 hover:text-cyan-400 transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-colors">
              About
            </Link>
            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="text-gray-700 hover:text-blue-600 transition-colors flex items-center"
              >
                Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-lg border py-2 z-50">
                  <div className="grid grid-cols-2 gap-2 p-2">
                    <Link to="/services" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                      All Services
                    </Link>
                    <Link to="/micro-saas" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                      Micro SAAS
                    </Link>
                    <Link to="/ai-services" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                      AI Services
                    </Link>
                    <Link to="/ai-marketing" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                      AI Marketing
                    </Link>
                    <Link to="/ai-automation" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                      AI Automation
                    </Link>
                    <Link to="/ai-healthcare" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                      AI Healthcare
                    </Link>
                    <Link to="/ai-fintech" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                      AI Fintech
                    </Link>
                    <Link to="/it-services" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                      IT Services
                    </Link>
                    <Link to="/quantum-computing" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                      Quantum Computing
                    </Link>
                    <Link to="/autonomous-systems" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                      Autonomous Systems
                    </Link>
                    <Link to="/business-intelligence" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                      Business Intelligence
                    </Link>
                    <Link to="/blockchain-web3" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                      Blockchain & Web3
                    </Link>
                    <Link to="/iot-edge-computing" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                      IoT & Edge Computing
                    </Link>
                    <Link to="/cybersecurity" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                      Cybersecurity
                    </Link>
                    <Link to="/services-advertising" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                      Advertising Services
                    </Link>
                  </div>
                </div>
              )}origin/main
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="text-2xl font-bold text-blue-600 flex items-center">
              <span className="text-3xl mr-2">⚡</span>
              Zion Tech Group
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex space-x-8">
              <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Home
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                About
              </Link>
              
              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="text-gray-700 hover:text-blue-600 transition-colors flex items-center font-medium"
                >
                  Services
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                {servicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border py-4 z-50">
                    <div className="grid grid-cols-3 gap-4 px-4">
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Core Services</h3>
                        <Link to="/services" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                          All Services
                        </Link>
                        <Link to="/micro-saas" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                          Micro SAAS Solutions
                        </Link>
                        <Link to="/ai-services" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                          AI Services
                        </Link>
                        <Link to="/ai-customer-service" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                          AI Customer Service
                        </Link>
                        <Link to="/ai-content-generation" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                          AI Content Generation
                        </Link>
                        <Link to="/ai-sales-automation" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                          AI Sales Automation
                        </Link>
                        <Link to="/ai-data-visualization" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                          AI Data Visualization
                        </Link>
                        <Link to="/ai-email-marketing" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                          AI Email Marketing
                        </Link>
                        <Link to="/it-services" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                          IT Services
                        </Link>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">AI Solutions</h3>
                        <Link to="/ai-data-analytics" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                          AI Data Analytics
                        </Link>
                        <Link to="/ai-cybersecurity" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                          AI Cybersecurity
                        </Link>
                        <Link to="/ai-workflow-automation" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                          AI Workflow Automation
                        </Link>
                        <Link to="/ai-cloud-infrastructure" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                          AI Cloud Infrastructure
                        </Link>
                        <Link to="/ai-ecommerce-solutions" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                          AI E-commerce Solutions
                        </Link>
                        <Link to="/ai-mobile-app-development" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                          AI Mobile App Development
                        </Link>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Specialized</h3>
                        <Link to="/quantum-computing" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                          Quantum Computing
                        </Link>
                        <Link to="/autonomous-systems" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                          Autonomous Systems
                        </Link>
                        <Link to="/blockchain-web3" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                          Blockchain & Web3
                        </Link>
                        <Link to="/cybersecurity" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                          Cybersecurity
                        </Link>
                      </div>
                    </div>
                  </div>
                )}origin/main
              </div>

              <Link to="/case-studies" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Case Studies
              </Link>
              <Link to="/enterprise" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Enterprise
              </Link>
              <Link to="/team" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Team
              </Link>
              <Link to="/contact" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Contact
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-gray-700 hover:text-blue-600"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="lg:hidden py-4 border-t">
              <div className="flex flex-col space-y-4">
                <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                  Home
                </Link>
                <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                  About
                </Link>
                
                {/* Services Section */}
                <div className="space-y-2">
                  <div className="text-gray-700 font-semibold text-lg">Services</div>
                  <div className="ml-4 space-y-2">
                    <Link to="/services" className="block text-gray-600 hover:text-blue-600 transition-colors">
                      All Services
                    </Link>
                    <Link to="/micro-saas" className="block text-gray-600 hover:text-blue-600 transition-colors">
                      Micro SAAS Solutions
                    </Link>
                    <Link to="/ai-services" className="block text-gray-600 hover:text-blue-600 transition-colors">
                      AI Services
                    </Link>
                    <Link to="/it-services" className="block text-gray-600 hover:text-blue-600 transition-colors">
                      IT Services
                    </Link>
                    <Link to="/ai-data-analytics" className="block text-gray-600 hover:text-blue-600 transition-colors">
                      AI Data Analytics
                    </Link>
                    <Link to="/ai-cybersecurity" className="block text-gray-600 hover:text-blue-600 transition-colors">
                      AI Cybersecurity
                    </Link>
                    <Link to="/ai-workflow-automation" className="block text-gray-600 hover:text-blue-600 transition-colors">
                      AI Workflow Automation
                    </Link>
                    <Link to="/ai-cloud-infrastructure" className="block text-gray-600 hover:text-blue-600 transition-colors">
                      AI Cloud Infrastructure
                    </Link>
                    <Link to="/ai-ecommerce-solutions" className="block text-gray-600 hover:text-blue-600 transition-colors">
                      AI E-commerce Solutions
                    </Link>
                    <Link to="/ai-mobile-app-development" className="block text-gray-600 hover:text-blue-600 transition-colors">
                      AI Mobile App Development
                    </Link>
                    <Link to="/quantum-computing" className="block text-gray-600 hover:text-blue-600 transition-colors">
                      Quantum Computing
                    </Link>
                    <Link to="/autonomous-systems" className="block text-gray-600 hover:text-blue-600 transition-colors">
                      Autonomous Systems
                    </Link>
                    <Link to="/blockchain-web3" className="block text-gray-600 hover:text-blue-600 transition-colors">
                      Blockchain & Web3
                    </Link>
                    <Link to="/cybersecurity" className="block text-gray-600 hover:text-blue-600 transition-colors">
                      Cybersecurity
                    </Link>
                  </div>
                </div>
                
                <Link to="/case-studies" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                  Case Studies
                </Link>
                <Link to="/enterprise" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                  Enterprise
                </Link>
                <Link to="/team" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                  Team
                </Link>
                <Link to="/contact" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-center">
                  Contact Us
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navigation;
