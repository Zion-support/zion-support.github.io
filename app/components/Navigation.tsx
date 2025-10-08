import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-blue-600 flex items-center">
            <span className="text-3xl mr-2">🚀</span>
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
                      <h3 className="font-semibold text-gray-900 mb-2 text-sm">Core Services</h3>
                      <Link to="/services" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded text-sm">
                        All Services
                      </Link>
                      <Link to="/ai-services" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded text-sm">
                        AI Services
                      </Link>
                      <Link to="/it-services" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded text-sm">
                        IT Services
                      </Link>
                      <Link to="/services-advertising" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded text-sm">
                        AI Advertising
                      </Link>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2 text-sm">Solutions</h3>
                      <Link to="/micro-saas" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded text-sm">
                        Micro SAAS
                      </Link>
                      <Link to="/quantum-computing" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded text-sm">
                        Quantum Computing
                      </Link>
                      <Link to="/autonomous-systems" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded text-sm">
                        Autonomous Systems
                      </Link>
                      <Link to="/blockchain-web3" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded text-sm">
                        Blockchain & Web3
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div className="relative">
              <button
                onClick={() => setSolutionsOpen(!solutionsOpen)}
                className="text-gray-700 hover:text-blue-600 transition-colors flex items-center font-medium"
              >
                Solutions
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {solutionsOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border py-4 z-50">
                  <div className="grid grid-cols-2 gap-4 px-4">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2 text-sm">Industry Solutions</h3>
                      <Link to="/business-intelligence" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded text-sm">
                        Business Intelligence
                      </Link>
                      <Link to="/cybersecurity" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded text-sm">
                        Cybersecurity
                      </Link>
                      <Link to="/iot-edge-computing" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded text-sm">
                        IoT & Edge Computing
                      </Link>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2 text-sm">Enterprise</h3>
                      <Link to="/enterprise" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded text-sm">
                        Enterprise Solutions
                      </Link>
                      <Link to="/case-studies" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded text-sm">
                        Case Studies
                      </Link>
                      <Link to="/team" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded text-sm">
                        Our Team
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Contact
            </Link>
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Phone className="w-4 h-4" />
              <a href="tel:+13026009898" className="hover:text-blue-600">(302) 600-9898</a>
            </div>
            <Link 
              to="/contact" 
              className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-700 hover:text-blue-600 p-2"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t bg-gray-50">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium px-4 py-2"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium px-4 py-2"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              
              {/* Mobile Services Section */}
              <div className="px-4">
                <div className="text-gray-700 font-semibold mb-2">Services</div>
                <div className="ml-4 space-y-2">
                  <Link 
                    to="/services" 
                    className="block text-gray-600 hover:text-blue-600 transition-colors py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    All Services
                  </Link>
                  <Link 
                    to="/ai-services" 
                    className="block text-gray-600 hover:text-blue-600 transition-colors py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    AI Services
                  </Link>
                  <Link 
                    to="/it-services" 
                    className="block text-gray-600 hover:text-blue-600 transition-colors py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    IT Services
                  </Link>
                  <Link 
                    to="/micro-saas" 
                    className="block text-gray-600 hover:text-blue-600 transition-colors py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    Micro SAAS
                  </Link>
                  <Link 
                    to="/services-advertising" 
                    className="block text-gray-600 hover:text-blue-600 transition-colors py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    AI Advertising
                  </Link>
                </div>
              </div>

              {/* Mobile Solutions Section */}
              <div className="px-4">
                <div className="text-gray-700 font-semibold mb-2">Solutions</div>
                <div className="ml-4 space-y-2">
                  <Link 
                    to="/enterprise" 
                    className="block text-gray-600 hover:text-blue-600 transition-colors py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    Enterprise
                  </Link>
                  <Link 
                    to="/case-studies" 
                    className="block text-gray-600 hover:text-blue-600 transition-colors py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    Case Studies
                  </Link>
                  <Link 
                    to="/team" 
                    className="block text-gray-600 hover:text-blue-600 transition-colors py-1"
                    onClick={() => setIsOpen(false)}
                  >
                    Our Team
                  </Link>
                </div>
              </div>

              <Link 
                to="/contact" 
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium px-4 py-2"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>

              {/* Mobile Contact Info */}
              <div className="px-4 pt-4 border-t">
                <div className="flex items-center space-x-2 text-sm text-gray-600 mb-2">
                  <Phone className="w-4 h-4" />
                  <a href="tel:+13026009898" className="hover:text-blue-600">(302) 600-9898</a>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-blue-600">kleber@ziontechgroup.com</a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
