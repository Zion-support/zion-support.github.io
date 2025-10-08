import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, ChevronRight } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aiServicesOpen, setAiServicesOpen] = useState(false);
  const [itServicesOpen, setItServicesOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-blue-600 text-white py-2 text-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <a href="tel:+13024640950" className="hover:text-blue-200">+1 302 464 0950</a>
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
                    <div className="grid grid-cols-2 gap-4 px-4">
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
                        <Link to="/it-services" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                          IT Services
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
                )}
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
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden text-gray-700 hover:text-blue-600"
                aria-label="Open sidebar"
              >
                <Menu className="w-6 h-6" />
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden text-gray-700 hover:text-blue-600"
                aria-label="Open mobile menu"
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

      {/* Sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setSidebarOpen(false)} />
          <div className="fixed top-0 left-0 h-full w-80 bg-white shadow-xl">
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-xl font-bold text-gray-900">Navigation</h2>
              <button
                onClick={() => setSidebarOpen(false)}
                className="text-gray-500 hover:text-gray-700"
                aria-label="Close sidebar"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-4 space-y-4 overflow-y-auto h-full pb-20">
              {/* Main Navigation */}
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Main</h3>
                <Link to="/" className="flex items-center text-gray-700 hover:text-blue-600 py-2">
                  <span>Home</span>
                </Link>
                <Link to="/about" className="flex items-center text-gray-700 hover:text-blue-600 py-2">
                  <span>About</span>
                </Link>
                <Link to="/contact" className="flex items-center text-gray-700 hover:text-blue-600 py-2">
                  <span>Contact</span>
                </Link>
              </div>

              {/* Services */}
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Services</h3>
                <Link to="/services" className="flex items-center text-gray-700 hover:text-blue-600 py-2">
                  <span>All Services</span>
                </Link>
                <Link to="/ai-services" className="flex items-center text-gray-700 hover:text-blue-600 py-2">
                  <span>AI Services</span>
                </Link>
                <Link to="/it-services" className="flex items-center text-gray-700 hover:text-blue-600 py-2">
                  <span>IT Services</span>
                </Link>
                <Link to="/micro-saas" className="flex items-center text-gray-700 hover:text-blue-600 py-2">
                  <span>Micro SAAS</span>
                </Link>
                <Link to="/quantum-computing" className="flex items-center text-gray-700 hover:text-blue-600 py-2">
                  <span>Quantum Computing</span>
                </Link>
                <Link to="/autonomous-systems" className="flex items-center text-gray-700 hover:text-blue-600 py-2">
                  <span>Autonomous Systems</span>
                </Link>
                <Link to="/blockchain-web3" className="flex items-center text-gray-700 hover:text-blue-600 py-2">
                  <span>Blockchain & Web3</span>
                </Link>
                <Link to="/cybersecurity" className="flex items-center text-gray-700 hover:text-blue-600 py-2">
                  <span>Cybersecurity</span>
                </Link>
                <Link to="/business-intelligence" className="flex items-center text-gray-700 hover:text-blue-600 py-2">
                  <span>Business Intelligence</span>
                </Link>
                <Link to="/iot-edge-computing" className="flex items-center text-gray-700 hover:text-blue-600 py-2">
                  <span>IoT & Edge Computing</span>
                </Link>
              </div>

              {/* Company */}
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Company</h3>
                <Link to="/case-studies" className="flex items-center text-gray-700 hover:text-blue-600 py-2">
                  <span>Case Studies</span>
                </Link>
                <Link to="/enterprise" className="flex items-center text-gray-700 hover:text-blue-600 py-2">
                  <span>Enterprise</span>
                </Link>
                <Link to="/team" className="flex items-center text-gray-700 hover:text-blue-600 py-2">
                  <span>Team</span>
                </Link>
              </div>

              {/* Resources */}
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Resources</h3>
                <Link to="/blog" className="flex items-center text-gray-700 hover:text-blue-600 py-2">
                  <span>Blog</span>
                </Link>
                <Link to="/guides" className="flex items-center text-gray-700 hover:text-blue-600 py-2">
                  <span>Guides</span>
                </Link>
                <Link to="/sitemap" className="flex items-center text-gray-700 hover:text-blue-600 py-2">
                  <span>Sitemap</span>
                </Link>
              </div>

              {/* Legal */}
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Legal</h3>
                <Link to="/privacy" className="flex items-center text-gray-700 hover:text-blue-600 py-2">
                  <span>Privacy Policy</span>
                </Link>
                <Link to="/terms" className="flex items-center text-gray-700 hover:text-blue-600 py-2">
                  <span>Terms of Service</span>
                </Link>
              </div>

              {/* External Links */}
              <div className="space-y-2">
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">External</h3>
                <a href="https://github.com/ziontechgroup" className="flex items-center text-gray-700 hover:text-blue-600 py-2" target="_blank" rel="noopener noreferrer">
                  <span>GitHub</span>
                  <ChevronRight className="w-4 h-4 ml-auto" />
                </a>
                <a href="https://docs.ziontechgroup.com" className="flex items-center text-gray-700 hover:text-blue-600 py-2" target="_blank" rel="noopener noreferrer">
                  <span>Documentation</span>
                  <ChevronRight className="w-4 h-4 ml-auto" />
                </a>
                <a href="https://linkedin.com/company/ziontechgroup" className="flex items-center text-gray-700 hover:text-blue-600 py-2" target="_blank" rel="noopener noreferrer">
                  <span>LinkedIn</span>
                  <ChevronRight className="w-4 h-4 ml-auto" />
                </a>
                <a href="https://twitter.com/ziontechgroup" className="flex items-center text-gray-700 hover:text-blue-600 py-2" target="_blank" rel="noopener noreferrer">
                  <span>Twitter</span>
                  <ChevronRight className="w-4 h-4 ml-auto" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
