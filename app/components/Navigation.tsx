import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-blue-600 flex items-center">
            <Brain className="w-8 h-8 mr-2" />
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
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border py-2 z-50">
                  <div className="px-4 py-2 border-b border-gray-200">
                    <h3 className="text-sm font-semibold text-gray-900">All Services</h3>
                  </div>
                  <Link to="/services" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    📋 All Services Overview
                  </Link>
                  
                  <div className="px-4 py-2 border-b border-gray-200 mt-2">
                    <h3 className="text-sm font-semibold text-gray-900">AI & Automation</h3>
                  </div>
                  <Link to="/micro-saas" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    💻 Micro SAAS Solutions
                  </Link>
                  <Link to="/ai-services" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    🤖 AI Services
                  </Link>
                  <Link to="/autonomous-systems" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    🔄 Autonomous Systems
                  </Link>
                  <Link to="/quantum-computing" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    ⚛️ Quantum Computing
                  </Link>
                  
                  <div className="px-4 py-2 border-b border-gray-200 mt-2">
                    <h3 className="text-sm font-semibold text-gray-900">IT & Infrastructure</h3>
                  </div>
                  <Link to="/it-services" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    ⚙️ IT Services
                  </Link>
                  <Link to="/cybersecurity" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    🔒 Cybersecurity
                  </Link>
                  <Link to="/blockchain-web3" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    ⛓️ Blockchain & Web3
                  </Link>
                  <Link to="/iot-edge-computing" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    📡 IoT & Edge Computing
                  </Link>
                  
                  <div className="px-4 py-2 border-b border-gray-200 mt-2">
                    <h3 className="text-sm font-semibold text-gray-900">Business Solutions</h3>
                  </div>
                  <Link to="/business-intelligence" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    📊 Business Intelligence
                  </Link>
                  <Link to="/enterprise" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    🏢 Enterprise Solutions
                  </Link>
                  <Link to="/services-advertising" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    📢 Advertising Services
                  </Link>
                </div>
              )}
            </div>
            <Link to="/case-studies" className="text-gray-700 hover:text-blue-600 transition-colors">
              Case Studies
            </Link>
            <Link to="/team" className="text-gray-700 hover:text-blue-600 transition-colors">
              Team
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </Link>
          </div>

          {/* Contact Info - Desktop */}
          <div className="hidden lg:flex items-center space-x-4 text-sm text-gray-600">
            <a href="tel:+13024640950" className="flex items-center hover:text-blue-600 transition-colors">
              <Phone className="w-4 h-4 mr-1" />
              +1 302 464 0950
            </a>
            <a href="mailto:kleber@ziontechgroup.com" className="flex items-center hover:text-blue-600 transition-colors">
              <Mail className="w-4 h-4 mr-1" />
              kleber@ziontechgroup.com
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-blue-600"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
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
                <div className="text-gray-700 font-semibold">Services</div>
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
                  <Link to="/autonomous-systems" className="block text-gray-600 hover:text-blue-600 transition-colors">
                    Autonomous Systems
                  </Link>
                  <Link to="/quantum-computing" className="block text-gray-600 hover:text-blue-600 transition-colors">
                    Quantum Computing
                  </Link>
                  <Link to="/cybersecurity" className="block text-gray-600 hover:text-blue-600 transition-colors">
                    Cybersecurity
                  </Link>
                  <Link to="/blockchain-web3" className="block text-gray-600 hover:text-blue-600 transition-colors">
                    Blockchain & Web3
                  </Link>
                  <Link to="/iot-edge-computing" className="block text-gray-600 hover:text-blue-600 transition-colors">
                    IoT & Edge Computing
                  </Link>
                  <Link to="/business-intelligence" className="block text-gray-600 hover:text-blue-600 transition-colors">
                    Business Intelligence
                  </Link>
                  <Link to="/enterprise" className="block text-gray-600 hover:text-blue-600 transition-colors">
                    Enterprise Solutions
                  </Link>
                  <Link to="/services-advertising" className="block text-gray-600 hover:text-blue-600 transition-colors">
                    Advertising Services
                  </Link>
                </div>
              </div>
              <Link to="/case-studies" className="text-gray-700 hover:text-blue-600 transition-colors">
                Case Studies
              </Link>
              <Link to="/team" className="text-gray-700 hover:text-blue-600 transition-colors">
                Team
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                Contact
              </Link>
              
              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-gray-200">
                <a href="tel:+13024640950" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors mb-2">
                  <Phone className="w-4 h-4 mr-2" />
                  +1 302 464 0950
                </a>
                <a href="mailto:kleber@ziontechgroup.com" className="flex items-center text-gray-600 hover:text-blue-600 transition-colors mb-2">
                  <Mail className="w-4 h-4 mr-2" />
                  kleber@ziontechgroup.com
                </a>
                <div className="flex items-center text-gray-600">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm">364 E Main St STE 1008, Middletown DE 19709</span>
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