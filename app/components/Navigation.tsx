import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X, Brain, Settings, BarChart, Users, Phone } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const services = [
    { name: 'All Services', href: '/services', icon: Settings },
    { name: 'AI Services', href: '/ai-services', icon: Brain },
    { name: 'IT Services', href: '/it-services', icon: Settings },
    { name: 'Micro SAAS', href: '/micro-saas', icon: BarChart },
    { name: 'AI Marketing', href: '/ai-marketing', icon: BarChart },
    { name: 'AI Automation', href: '/ai-automation', icon: Settings },
    { name: 'AI Healthcare', href: '/ai-healthcare', icon: Brain },
    { name: 'AI Fintech', href: '/ai-fintech', icon: BarChart },
    { name: 'Quantum Computing', href: '/quantum-computing', icon: Brain },
    { name: 'Autonomous Systems', href: '/autonomous-systems', icon: Settings },
    { name: 'Business Intelligence', href: '/business-intelligence', icon: BarChart },
    { name: 'Blockchain & Web3', href: '/blockchain-web3', icon: Settings },
    { name: 'IoT & Edge Computing', href: '/iot-edge-computing', icon: Settings },
    { name: 'Cybersecurity', href: '/cybersecurity', icon: Settings },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-3xl">⚡</div>
            <span className="text-2xl font-bold text-blue-600">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Home
            </Link>
            
            <Link 
              to="/about" 
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border py-4 z-50">
                  <div className="grid grid-cols-2 gap-4 px-4">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Core Services</h3>
                      {services.slice(0, 4).map((service) => (
                        <Link
                          key={service.href}
                          to={service.href}
                          className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors"
                        >
                          <service.icon className="w-4 h-4" />
                          <span>{service.name}</span>
                        </Link>
                      ))}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-3">Specialized</h3>
                      {services.slice(4, 8).map((service) => (
                        <Link
                          key={service.href}
                          to={service.href}
                          className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors"
                        >
                          <service.icon className="w-4 h-4" />
                          <span>{service.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="border-t mt-4 pt-4 px-4">
                    <div className="grid grid-cols-2 gap-2">
                      {services.slice(8).map((service) => (
                        <Link
                          key={service.href}
                          to={service.href}
                          className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors"
                        >
                          <service.icon className="w-4 h-4" />
                          <span className="text-sm">{service.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link 
              to="/case-studies" 
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Case Studies
            </Link>
            
            <Link 
              to="/enterprise" 
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Enterprise
            </Link>
            
            <Link 
              to="/team" 
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Team
            </Link>

            <Link 
              to="/contact" 
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-gray-700 hover:text-blue-600 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              
              <Link 
                to="/about" 
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>

              {/* Mobile Services */}
              <div className="space-y-2">
                <div className="text-gray-700 font-semibold text-lg">Services</div>
                <div className="ml-4 space-y-2">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      to={service.href}
                      className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <service.icon className="w-4 h-4" />
                      <span>{service.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
              
              <Link 
                to="/case-studies" 
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Case Studies
              </Link>
              
              <Link 
                to="/enterprise" 
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Enterprise
              </Link>
              
              <Link 
                to="/team" 
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Team
              </Link>
              
              <Link 
                to="/contact" 
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-center"
                onClick={() => setIsMenuOpen(false)}
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