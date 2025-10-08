import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
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
                <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-lg border py-4 z-50">
                  <div className="grid grid-cols-3 gap-4 p-4">
                    {/* Core Services */}
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2 text-sm">Core Services</h3>
                      <div className="space-y-1">
                        <Link to="/services" className="block px-3 py-1 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                          All Services
                        </Link>
                        <Link to="/micro-saas" className="block px-3 py-1 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                          Micro SAAS
                        </Link>
                        <Link to="/ai-services" className="block px-3 py-1 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                          AI Services
                        </Link>
                        <Link to="/it-services" className="block px-3 py-1 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                          IT Services
                        </Link>
                      </div>
                    </div>
                    
                    {/* Advanced Technologies */}
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2 text-sm">Advanced Tech</h3>
                      <div className="space-y-1">
                        <Link to="/quantum-computing" className="block px-3 py-1 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                          Quantum Computing
                        </Link>
                        <Link to="/autonomous-systems" className="block px-3 py-1 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                          Autonomous Systems
                        </Link>
                        <Link to="/blockchain-web3" className="block px-3 py-1 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                          Blockchain & Web3
                        </Link>
                        <Link to="/iot-edge-computing" className="block px-3 py-1 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                          IoT & Edge Computing
                        </Link>
                      </div>
                    </div>
                    
                    {/* Business Solutions */}
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2 text-sm">Business Solutions</h3>
                      <div className="space-y-1">
                        <Link to="/business-intelligence" className="block px-3 py-1 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                          Business Intelligence
                        </Link>
                        <Link to="/cybersecurity" className="block px-3 py-1 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                          Cybersecurity
                        </Link>
                        <Link to="/services-advertising" className="block px-3 py-1 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                          Advertising Services
                        </Link>
                        <Link to="/enterprise" className="block px-3 py-1 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded">
                          Enterprise Solutions
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <Link to="/case-studies" className="text-gray-700 hover:text-blue-600 transition-colors">
              Case Studies
            </Link>
            <Link to="/enterprise" className="text-gray-700 hover:text-blue-600 transition-colors">
              Enterprise
            </Link>
            <Link to="/team" className="text-gray-700 hover:text-blue-600 transition-colors">
              Team
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-blue-600"
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
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-blue-600 transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors">
                About
              </Link>
              <div className="space-y-2">
                <div className="text-gray-700 font-semibold">Core Services</div>
                <div className="ml-4 space-y-2">
                  <Link to="/services" className="block text-gray-600 hover:text-blue-600 transition-colors">
                    All Services
                  </Link>
                  <Link to="/micro-saas" className="block text-gray-600 hover:text-blue-600 transition-colors">
                    Micro SAAS
                  </Link>
                  <Link to="/ai-services" className="block text-gray-600 hover:text-blue-600 transition-colors">
                    AI Services
                  </Link>
                  <Link to="/it-services" className="block text-gray-600 hover:text-blue-600 transition-colors">
                    IT Services
                  </Link>
                </div>
                
                <div className="text-gray-700 font-semibold mt-4">Advanced Technologies</div>
                <div className="ml-4 space-y-2">
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
                </div>
                
                <div className="text-gray-700 font-semibold mt-4">Business Solutions</div>
                <div className="ml-4 space-y-2">
                  <Link to="/business-intelligence" className="block text-gray-600 hover:text-blue-600 transition-colors">
                    Business Intelligence
                  </Link>
                  <Link to="/cybersecurity" className="block text-gray-600 hover:text-blue-600 transition-colors">
                    Cybersecurity
                  </Link>
                  <Link to="/services-advertising" className="block text-gray-600 hover:text-blue-600 transition-colors">
                    Advertising Services
                  </Link>
                  <Link to="/enterprise" className="block text-gray-600 hover:text-blue-600 transition-colors">
                    Enterprise Solutions
                  </Link>
                </div>
              </div>
              <Link to="/case-studies" className="text-gray-700 hover:text-blue-600 transition-colors">
                Case Studies
              </Link>
              <Link to="/enterprise" className="text-gray-700 hover:text-blue-600 transition-colors">
                Enterprise
              </Link>
              <Link to="/team" className="text-gray-700 hover:text-blue-600 transition-colors">
                Team
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
