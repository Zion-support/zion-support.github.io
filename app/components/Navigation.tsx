import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, MapPin } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aiServicesOpen, setAiServicesOpen] = useState(false);
  const [itServicesOpen, setItServicesOpen] = useState(false);

  return (
<<<<<<< HEAD
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-blue-600">
            Zion Tech Group
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
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
=======
    <>
      {/* Top Contact Bar */}
      <div className="bg-blue-600 text-white py-2 text-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <a href="tel:+13026009898" className="hover:text-blue-200">+1 302 600 9898</a>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-blue-200">kleber@ziontechgroup.com</a>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Middletown, DE 19709</span>
              </div>
            </div>
            <div className="text-xs">
              <span>🚀 Leading AI & IT Solutions Provider</span>
>>>>>>> cursor/website-audit-and-update-with-deployment-28d8
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
                  <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-xl border py-4 z-50">
                    <div className="grid grid-cols-3 gap-4 px-4">
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Core Services</h3>
                        <Link to="/services" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                          All Services
                        </Link>
                        <Link to="/ai-services" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                          AI Services
                        </Link>
                        <Link to="/it-services" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                          IT Services
                        </Link>
                        <Link to="/micro-saas" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                          Micro SAAS Solutions
                        </Link>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Advanced Tech</h3>
                        <Link to="/quantum-computing" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                          Quantum Computing
                        </Link>
                        <Link to="/autonomous-systems" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                          Autonomous Systems
                        </Link>
                        <Link to="/blockchain-web3" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                          Blockchain & Web3
                        </Link>
                        <Link to="/iot-edge-computing" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                          IoT & Edge Computing
                        </Link>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">Security & Intelligence</h3>
                        <Link to="/cybersecurity" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                          Cybersecurity
                        </Link>
                        <Link to="/business-intelligence" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                          Business Intelligence
                        </Link>
                        <Link to="/enterprise" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                          Enterprise Solutions
                        </Link>
                      </div>
                    </div>
                  </div>
                )}origin/main
              </div>

              <Link to="/case-studies" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Case Studies
              </Link>
              
              {/* Resources Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setAiServicesOpen(!aiServicesOpen)}
                  className="text-gray-700 hover:text-blue-600 transition-colors flex items-center font-medium"
                >
                  Resources
                  <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                {aiServicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border py-4 z-50">
                    <div className="px-4">
                      <Link to="/blog" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                        Blog & Insights
                      </Link>
                      <Link to="/guides" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                        Technical Guides
                      </Link>
                      <Link to="/enterprise" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                        Enterprise Solutions
                      </Link>
                      <Link to="/team" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                        Our Team
                      </Link>
                    </div>
                  </div>
                )}
              </div>
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
                    <div className="text-sm font-medium text-gray-500 mb-2">Core Services</div>
                    <Link to="/services" className="block text-gray-600 hover:text-blue-600 transition-colors">
                      All Services
                    </Link>
                    <Link to="/ai-services" className="block text-gray-600 hover:text-blue-600 transition-colors">
                      AI Services
                    </Link>
                    <Link to="/it-services" className="block text-gray-600 hover:text-blue-600 transition-colors">
                      IT Services
                    </Link>
                    <Link to="/micro-saas" className="block text-gray-600 hover:text-blue-600 transition-colors">
                      Micro SAAS Solutions
                    </Link>
                    
                    <div className="text-sm font-medium text-gray-500 mb-2 mt-4">Advanced Tech</div>
                    <Link to="/quantum-computing" className="block text-gray-600 hover:text-blue-600 transition-colors">
                      Quantum Computing
                    </Link>
                    <Link to="/autonomous-systems" className="block text-gray-600 hover:text-blue-600 transition-colors">
                      Autonomous Systems
                    </Link>
                    <Link to="/blockchain-web3" className="block text-gray-600 hover:text-blue-600 transition-colors">
                      Blockchain & Web3
                    </Link>
                    <Link to="/iot-edge-computing" className="block text-gray-600 hover:text-blue-600 transition-colors">
                      IoT & Edge Computing
                    </Link>
                    
                    <div className="text-sm font-medium text-gray-500 mb-2 mt-4">Security & Intelligence</div>
                    <Link to="/cybersecurity" className="block text-gray-600 hover:text-blue-600 transition-colors">
                      Cybersecurity
                    </Link>
                    <Link to="/business-intelligence" className="block text-gray-600 hover:text-blue-600 transition-colors">
                      Business Intelligence
                    </Link>
                    <Link to="/enterprise" className="block text-gray-600 hover:text-blue-600 transition-colors">
                      Enterprise Solutions
                    </Link>
                  </div>
                </div>
                
                {/* Resources Section */}
                <div className="space-y-2">
                  <div className="text-gray-700 font-semibold text-lg">Resources</div>
                  <div className="ml-4 space-y-2">
                    <Link to="/blog" className="block text-gray-600 hover:text-blue-600 transition-colors">
                      Blog & Insights
                    </Link>
                    <Link to="/guides" className="block text-gray-600 hover:text-blue-600 transition-colors">
                      Technical Guides
                    </Link>
                    <Link to="/team" className="block text-gray-600 hover:text-blue-600 transition-colors">
                      Our Team
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
