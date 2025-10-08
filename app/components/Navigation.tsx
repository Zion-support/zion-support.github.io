import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, MapPin } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Contact Bar */}
      <div className="bg-blue-600 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <div className="flex flex-col md:flex-row items-center space-y-1 md:space-y-0 md:space-x-6">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <a href="tel:+13024640950" className="hover:text-blue-200 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-blue-200 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Middletown, DE 19709</span>
              </div>
            </div>
            <div className="text-xs mt-1 md:mt-0">
              Leading AI & IT Solutions Provider
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
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
                      <Link to="/services" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors">
                        All Services
                      </Link>
                      <Link to="/micro-saas" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors">
                        Micro SAAS Solutions
                      </Link>
                      <Link to="/ai-services" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors">
                        AI Services
                      </Link>
                      <Link to="/it-services" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors">
                        IT Services
                      </Link>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Specialized</h3>
                      <Link to="/quantum-computing" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors">
                        Quantum Computing
                      </Link>
                      <Link to="/autonomous-systems" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors">
                        Autonomous Systems
                      </Link>
                      <Link to="/blockchain-web3" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors">
                        Blockchain & Web3
                      </Link>
                      <Link to="/cybersecurity" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors">
                        Cybersecurity
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
                      <h3 className="font-semibold text-gray-900 mb-2">Industry Solutions</h3>
                      <Link to="/business-intelligence" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors">
                        Business Intelligence
                      </Link>
                      <Link to="/iot-edge-computing" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors">
                        IoT & Edge Computing
                      </Link>
                      <Link to="/enterprise" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors">
                        Enterprise Solutions
                      </Link>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Resources</h3>
                      <Link to="/case-studies" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors">
                        Case Studies
                      </Link>
                      <Link to="/guides" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors">
                        Guides & Tutorials
                      </Link>
                      <Link to="/blog" className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-colors">
                        Blog
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link to="/team" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
              Team
            </Link>
            <Link to="/contact" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-700 hover:text-blue-600 p-2"
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
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
                <div className="text-gray-900 font-semibold mb-3 text-lg">Services</div>
                <div className="grid grid-cols-1 gap-2 ml-4">
                  <Link 
                    to="/services" 
                    className="block text-gray-600 hover:text-blue-600 transition-colors py-2 px-3 rounded-md hover:bg-blue-50"
                    onClick={() => setIsOpen(false)}
                  >
                    All Services
                  </Link>
                  <Link 
                    to="/micro-saas" 
                    className="block text-gray-600 hover:text-blue-600 transition-colors py-2 px-3 rounded-md hover:bg-blue-50"
                    onClick={() => setIsOpen(false)}
                  >
                    Micro SAAS Solutions
                  </Link>
                  <Link 
                    to="/ai-services" 
                    className="block text-gray-600 hover:text-blue-600 transition-colors py-2 px-3 rounded-md hover:bg-blue-50"
                    onClick={() => setIsOpen(false)}
                  >
                    AI Services
                  </Link>
                  <Link 
                    to="/it-services" 
                    className="block text-gray-600 hover:text-blue-600 transition-colors py-2 px-3 rounded-md hover:bg-blue-50"
                    onClick={() => setIsOpen(false)}
                  >
                    IT Services
                  </Link>
                  <Link 
                    to="/quantum-computing" 
                    className="block text-gray-600 hover:text-blue-600 transition-colors py-2 px-3 rounded-md hover:bg-blue-50"
                    onClick={() => setIsOpen(false)}
                  >
                    Quantum Computing
                  </Link>
                  <Link 
                    to="/autonomous-systems" 
                    className="block text-gray-600 hover:text-blue-600 transition-colors py-2 px-3 rounded-md hover:bg-blue-50"
                    onClick={() => setIsOpen(false)}
                  >
                    Autonomous Systems
                  </Link>
                  <Link 
                    to="/blockchain-web3" 
                    className="block text-gray-600 hover:text-blue-600 transition-colors py-2 px-3 rounded-md hover:bg-blue-50"
                    onClick={() => setIsOpen(false)}
                  >
                    Blockchain & Web3
                  </Link>
                  <Link 
                    to="/cybersecurity" 
                    className="block text-gray-600 hover:text-blue-600 transition-colors py-2 px-3 rounded-md hover:bg-blue-50"
                    onClick={() => setIsOpen(false)}
                  >
                    Cybersecurity
                  </Link>
                </div>
              </div>

              {/* Mobile Solutions Section */}
              <div className="px-4">
                <div className="text-gray-900 font-semibold mb-3 text-lg">Solutions</div>
                <div className="grid grid-cols-1 gap-2 ml-4">
                  <Link 
                    to="/business-intelligence" 
                    className="block text-gray-600 hover:text-blue-600 transition-colors py-2 px-3 rounded-md hover:bg-blue-50"
                    onClick={() => setIsOpen(false)}
                  >
                    Business Intelligence
                  </Link>
                  <Link 
                    to="/iot-edge-computing" 
                    className="block text-gray-600 hover:text-blue-600 transition-colors py-2 px-3 rounded-md hover:bg-blue-50"
                    onClick={() => setIsOpen(false)}
                  >
                    IoT & Edge Computing
                  </Link>
                  <Link 
                    to="/enterprise" 
                    className="block text-gray-600 hover:text-blue-600 transition-colors py-2 px-3 rounded-md hover:bg-blue-50"
                    onClick={() => setIsOpen(false)}
                  >
                    Enterprise Solutions
                  </Link>
                </div>
              </div>

              {/* Mobile Resources Section */}
              <div className="px-4">
                <div className="text-gray-900 font-semibold mb-3 text-lg">Resources</div>
                <div className="grid grid-cols-1 gap-2 ml-4">
                  <Link 
                    to="/case-studies" 
                    className="block text-gray-600 hover:text-blue-600 transition-colors py-2 px-3 rounded-md hover:bg-blue-50"
                    onClick={() => setIsOpen(false)}
                  >
                    Case Studies
                  </Link>
                  <Link 
                    to="/guides" 
                    className="block text-gray-600 hover:text-blue-600 transition-colors py-2 px-3 rounded-md hover:bg-blue-50"
                    onClick={() => setIsOpen(false)}
                  >
                    Guides & Tutorials
                  </Link>
                  <Link 
                    to="/blog" 
                    className="block text-gray-600 hover:text-blue-600 transition-colors py-2 px-3 rounded-md hover:bg-blue-50"
                    onClick={() => setIsOpen(false)}
                  >
                    Blog
                  </Link>
                </div>
              </div>

              <Link 
                to="/team" 
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium px-4 py-2"
                onClick={() => setIsOpen(false)}
              >
                Team
              </Link>
              <Link 
                to="/contact" 
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium mx-4 text-center"
                onClick={() => setIsOpen(false)}
              >
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
