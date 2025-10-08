import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, ArrowRight } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aiServicesOpen, setAiServicesOpen] = useState(false);
  const [itServicesOpen, setItServicesOpen] = useState(false);

  const handlePhoneClick = () => {
    if (typeof window !== 'undefined') {
      window.location.href = 'tel:+13024640950';
    }
  };

  return (
    <nav className="bg-slate-900/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-cyan-500/20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-cyan-400 neon-text flex items-center">
            <span className="text-3xl mr-2">⚡</span>
            Zion Tech Group
          </Link>

          {/* Contact Info - Desktop */}
          <div className="hidden lg:flex items-center space-x-6 text-sm">
            <div className="flex items-center text-gray-300">
              <Phone className="w-4 h-4 mr-2 text-cyan-400" />
              <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                +1 302 464 0950
              </a>
            </div>
            <div className="flex items-center text-gray-300">
              <Mail className="w-4 h-4 mr-2 text-cyan-400" />
              <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8">
            <Link to="/" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center font-medium"
              >
                Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-[800px] bg-white rounded-lg shadow-xl border py-6 z-50">
                  <div className="grid grid-cols-4 gap-6 px-6">
                    {/* Core Services */}
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide">Core Services</h3>
                      <div className="space-y-2">
                        <Link to="/services" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded text-sm">
                          All Services
                        </Link>
                        <Link to="/micro-saas" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded text-sm">
                          Micro SAAS Solutions
                        </Link>
                        <Link to="/ai-services" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded text-sm">
                          AI Services
                        </Link>
                        <Link to="/it-services" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded text-sm">
                          IT Services
                        </Link>
                        <Link to="/cybersecurity" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded text-sm">
                          Cybersecurity
                        </Link>
                      </div>
                    </div>

                    {/* AI Solutions */}
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide">AI Solutions</h3>
                      <div className="space-y-2">
                        <Link to="/ai-marketing" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded text-sm">
                          AI Marketing
                        </Link>
                        <Link to="/ai-automation" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded text-sm">
                          AI Automation
                        </Link>
                        <Link to="/ai-healthcare" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded text-sm">
                          AI Healthcare
                        </Link>
                        <Link to="/ai-fintech" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded text-sm">
                          AI Fintech
                        </Link>
                        <Link to="/ai-data-analytics" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded text-sm">
                          AI Data Analytics
                        </Link>
                        <Link to="/ai-cybersecurity" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded text-sm">
                          AI Cybersecurity
                        </Link>
                      </div>
                    </div>

                    {/* Advanced Technologies */}
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide">Advanced Tech</h3>
                      <div className="space-y-2">
                        <Link to="/quantum-computing" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded text-sm">
                          Quantum Computing
                        </Link>
                        <Link to="/autonomous-systems" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded text-sm">
                          Autonomous Systems
                        </Link>
                        <Link to="/blockchain-web3" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded text-sm">
                          Blockchain & Web3
                        </Link>
                        <Link to="/iot-edge-computing" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded text-sm">
                          IoT & Edge Computing
                        </Link>
                        <Link to="/business-intelligence" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded text-sm">
                          Business Intelligence
                        </Link>
                      </div>
                    </div>

                    {/* Specialized Services */}
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide">Specialized</h3>
                      <div className="space-y-2">
                        <Link to="/ai-workflow-automation" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded text-sm">
                          AI Workflow Automation
                        </Link>
                        <Link to="/ai-cloud-infrastructure" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded text-sm">
                          AI Cloud Infrastructure
                        </Link>
                        <Link to="/ai-ecommerce-solutions" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded text-sm">
                          AI E-commerce Solutions
                        </Link>
                        <Link to="/ai-mobile-app-development" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded text-sm">
                          AI Mobile App Development
                        </Link>
                        <Link to="/services-advertising" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded text-sm">
                          Advertising Services
                        </Link>
                      </div>
                    </div>
                  </div>
                  
                  {/* CTA Section */}
                  <div className="mt-6 pt-6 border-t border-gray-200 px-6">
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-600">
                        Need help choosing the right solution?
                      </div>
                      <Link 
                        to="/contact" 
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium flex items-center"
                      >
                        Get Free Consultation
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link to="/case-studies" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">
              Case Studies
            </Link>
            <Link to="/enterprise" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">
              Enterprise
            </Link>
            <Link to="/team" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">
              Team
            </Link>
            <Link to="/contact" className="bg-cyan-600 text-white px-6 py-2 rounded-lg hover:bg-cyan-700 transition-colors font-medium">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-300 hover:text-cyan-400"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-cyan-500/20">
            <div className="flex flex-col space-y-4">
              {/* Contact Info - Mobile */}
              <div className="space-y-3 pb-4 border-b border-cyan-500/20">
                <div className="flex items-center text-gray-300">
                  <Phone className="w-4 h-4 mr-3 text-cyan-400" />
                  <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                    +1 302 464 0950
                  </a>
                </div>
                <div className="flex items-center text-gray-300">
                  <Mail className="w-4 h-4 mr-3 text-cyan-400" />
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                    kleber@ziontechgroup.com
                  </a>
                </div>
              </div>

              <Link to="/" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">
                Home
              </Link>
              <Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">
                About
              </Link>
              
              {/* Services Section */}
              <div className="space-y-2">
                <div className="text-gray-300 font-semibold text-lg">Services</div>
                <div className="ml-4 space-y-2">
                  <Link to="/services" className="block text-gray-400 hover:text-cyan-400 transition-colors">
                    All Services
                  </Link>
                  <Link to="/micro-saas" className="block text-gray-400 hover:text-cyan-400 transition-colors">
                    Micro SAAS Solutions
                  </Link>
                  <Link to="/ai-services" className="block text-gray-400 hover:text-cyan-400 transition-colors">
                    AI Services
                  </Link>
                  <Link to="/it-services" className="block text-gray-400 hover:text-cyan-400 transition-colors">
                    IT Services
                  </Link>
                  <Link to="/ai-marketing" className="block text-gray-400 hover:text-cyan-400 transition-colors">
                    AI Marketing
                  </Link>
                  <Link to="/ai-automation" className="block text-gray-400 hover:text-cyan-400 transition-colors">
                    AI Automation
                  </Link>
                  <Link to="/ai-healthcare" className="block text-gray-400 hover:text-cyan-400 transition-colors">
                    AI Healthcare
                  </Link>
                  <Link to="/ai-fintech" className="block text-gray-400 hover:text-cyan-400 transition-colors">
                    AI Fintech
                  </Link>
                  <Link to="/quantum-computing" className="block text-gray-400 hover:text-cyan-400 transition-colors">
                    Quantum Computing
                  </Link>
                  <Link to="/autonomous-systems" className="block text-gray-400 hover:text-cyan-400 transition-colors">
                    Autonomous Systems
                  </Link>
                  <Link to="/blockchain-web3" className="block text-gray-400 hover:text-cyan-400 transition-colors">
                    Blockchain & Web3
                  </Link>
                  <Link to="/cybersecurity" className="block text-gray-400 hover:text-cyan-400 transition-colors">
                    Cybersecurity
                  </Link>
                </div>
              </div>
              
              <Link to="/case-studies" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">
                Case Studies
              </Link>
              <Link to="/enterprise" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">
                Enterprise
              </Link>
              <Link to="/team" className="text-gray-300 hover:text-cyan-400 transition-colors font-medium">
                Team
              </Link>
              <Link to="/contact" className="bg-cyan-600 text-white px-6 py-3 rounded-lg hover:bg-cyan-700 transition-colors font-medium text-center">
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
