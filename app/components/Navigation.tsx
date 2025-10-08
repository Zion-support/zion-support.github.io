import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, MapPin, Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const services = [
    { path: '/services', title: 'All Services', description: 'Complete overview' },
    { path: '/ai-services', title: 'AI Services', description: 'Artificial Intelligence' },
    { path: '/ai-marketing', title: 'AI Marketing', description: 'Marketing Automation' },
    { path: '/ai-automation', title: 'AI Automation', description: 'Process Automation' },
    { path: '/ai-healthcare', title: 'AI Healthcare', description: 'Healthcare Solutions' },
    { path: '/ai-fintech', title: 'AI Fintech', description: 'Financial Technology' },
    { path: '/it-services', title: 'IT Services', description: 'IT Support & Solutions' },
    { path: '/micro-saas', title: 'Micro SAAS', description: 'Custom Software' },
    { path: '/quantum-computing', title: 'Quantum Computing', description: 'Next-gen Computing' },
    { path: '/autonomous-systems', title: 'Autonomous Systems', description: 'Self-managing Systems' },
    { path: '/business-intelligence', title: 'Business Intelligence', description: 'Data Analytics' },
    { path: '/blockchain-web3', title: 'Blockchain & Web3', description: 'Decentralized Solutions' },
    { path: '/cybersecurity', title: 'Cybersecurity', description: 'Security Solutions' },
    { path: '/iot-edge-computing', title: 'IoT & Edge Computing', description: 'Connected Devices' }
  ];

  const mainPages = [
    { path: '/', title: 'Home' },
    { path: '/about', title: 'About' },
    { path: '/case-studies', title: 'Case Studies' },
    { path: '/enterprise', title: 'Enterprise' },
    { path: '/team', title: 'Team' },
    { path: '/blog', title: 'Blog' },
    { path: '/guides', title: 'Guides' }
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-blue-600 flex items-center">
            <span className="text-3xl mr-2">⚡</span>
            Zion Tech Group
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {mainPages.map((page) => (
              <Link
                key={page.path}
                to={page.path}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                {page.title}
              </Link>
            ))}
            
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
                  <div className="grid grid-cols-2 gap-4 px-4">
                    {services.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className="block p-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors"
                        onClick={() => setServicesOpen(false)}
                      >
                        <div className="font-semibold text-sm">{service.title}</div>
                        <div className="text-xs text-gray-500">{service.description}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link 
              to="/contact" 
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-700 hover:text-blue-600"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              {mainPages.map((page) => (
                <Link
                  key={page.path}
                  to={page.path}
                  className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {page.title}
                </Link>
              ))}
              
              {/* Services Section */}
              <div className="space-y-2">
                <div className="text-gray-700 font-semibold text-lg">Services</div>
                <div className="ml-4 space-y-2">
                  {services.slice(0, 8).map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="block text-gray-600 hover:text-blue-600 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.title}
                    </Link>
                  ))}
                  <Link
                    to="/services"
                    className="block text-blue-600 hover:text-blue-700 transition-colors font-semibold"
                    onClick={() => setIsOpen(false)}
                  >
                    View All Services →
                  </Link>
                </div>
              </div>
              
              <Link 
                to="/contact" 
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-center"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Contact Bar */}
      <div className="bg-blue-50 border-t border-blue-100">
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-col sm:flex-row items-center justify-between text-sm text-blue-700">
            <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-6">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <a href="tel:+13024640950" className="hover:text-blue-800 transition-colors">
                  +1 302 464 0950
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-blue-800 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Middletown, DE</span>
              </div>
            </div>
            <div className="text-xs text-blue-600 mt-1 sm:mt-0">
              24/7 Support Available
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;