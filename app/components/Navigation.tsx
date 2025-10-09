import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const aiServices = [
    { name: 'AI Services', url: '/ai-services', icon: Brain, description: 'Comprehensive AI solutions' },
    { name: 'AI Marketing', url: '/ai-marketing', icon: BarChart, description: 'AI-powered marketing automation' },
    { name: 'AI Automation', url: '/ai-automation', icon: Zap, description: 'Intelligent process automation' },
    { name: 'AI Healthcare', url: '/ai-healthcare', icon: Shield, description: 'Medical AI solutions' },
    { name: 'AI Fintech', url: '/ai-fintech', icon: BarChart, description: 'Financial AI applications' },
    { name: 'AI Content Generation', url: '/ai-content-generation', icon: Code, description: 'AI content creation' },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', icon: BarChart, description: 'Advanced data insights' },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity', icon: Shield, description: 'AI security solutions' },
    { name: 'AI Workflow Automation', url: '/ai-workflow-automation', icon: Zap, description: 'Workflow optimization' }
  ];

  const itServices = [
    { name: 'IT Services', url: '/it-services', icon: Code, description: 'Comprehensive IT support' },
    { name: 'Micro SAAS', url: '/micro-saas', icon: Cloud, description: '50+ ready-to-use apps' },
    { name: 'Cybersecurity', url: '/cybersecurity', icon: Shield, description: 'Security solutions' },
    { name: 'Cloud Infrastructure', url: '/ai-cloud-infrastructure', icon: Cloud, description: 'Cloud migration & setup' },
    { name: 'E-commerce Solutions', url: '/ai-ecommerce-solutions', icon: Code, description: 'E-commerce platforms' },
    { name: 'Mobile App Development', url: '/ai-mobile-app-development', icon: Code, description: 'Mobile applications' }
  ];

  const specializedTech = [
    { name: 'Quantum Computing', url: '/quantum-computing', icon: Brain, description: 'Quantum solutions' },
    { name: 'Autonomous Systems', url: '/autonomous-systems', icon: Zap, description: 'Self-driving technology' },
    { name: 'Business Intelligence', url: '/business-intelligence', icon: BarChart, description: 'Data analytics & BI' },
    { name: 'Blockchain & Web3', url: '/blockchain-web3', icon: Shield, description: 'Blockchain solutions' },
    { name: 'IoT & Edge Computing', url: '/iot-edge-computing', icon: Cloud, description: 'IoT implementations' }
  ];

  const companyLinks = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Case Studies', url: '/case-studies' },
    { name: 'Blog', url: '/blog' },
    { name: 'Guides', url: '/guides' },
    { name: 'Contact', url: '/contact' }
  ];

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && !(event.target as Element).closest('.mobile-menu')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Close services dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesOpen && !(event.target as Element).closest('.services-dropdown')) {
        setServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [servicesOpen]);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative services-dropdown">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center space-x-1 text-gray-700 hover:text-purple-600 transition-colors font-medium"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-xl border border-gray-200 py-4 z-50">
                  <div className="px-6 py-2">
                    <h3 className="text-sm font-semibold text-gray-900 mb-3">AI Services</h3>
                    <div className="grid grid-cols-1 gap-2">
                      {aiServices.map((service) => {
                        const IconComponent = service.icon;
                        return (
                          <Link
                            key={service.name}
                            to={service.url}
                            className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                            onClick={() => setServicesOpen(false)}
                          >
                            <IconComponent className="w-4 h-4 text-purple-600" />
                            <div>
                              <div className="text-sm font-medium text-gray-900">{service.name}</div>
                              <div className="text-xs text-gray-500">{service.description}</div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 px-6 py-2">
                    <h3 className="text-sm font-semibold text-gray-900 mb-3">IT Services</h3>
                    <div className="grid grid-cols-1 gap-2">
                      {itServices.map((service) => {
                        const IconComponent = service.icon;
                        return (
                          <Link
                            key={service.name}
                            to={service.url}
                            className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                            onClick={() => setServicesOpen(false)}
                          >
                            <IconComponent className="w-4 h-4 text-blue-600" />
                            <div>
                              <div className="text-sm font-medium text-gray-900">{service.name}</div>
                              <div className="text-xs text-gray-500">{service.description}</div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 px-6 py-2">
                    <h3 className="text-sm font-semibold text-gray-900 mb-3">Specialized Tech</h3>
                    <div className="grid grid-cols-1 gap-2">
                      {specializedTech.map((tech) => {
                        const IconComponent = tech.icon;
                        return (
                          <Link
                            key={tech.name}
                            to={tech.url}
                            className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
                            onClick={() => setServicesOpen(false)}
                          >
                            <IconComponent className="w-4 h-4 text-green-600" />
                            <div>
                              <div className="text-sm font-medium text-gray-900">{tech.name}</div>
                              <div className="text-xs text-gray-500">{tech.description}</div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {companyLinks.map((link) => (
              <Link
                key={link.name}
                to={link.url}
                className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Contact Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+13024640950"
              className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">+1 302 464 0950</span>
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium"
            >
              Get Quote
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <Link
                to="/"
                className="block px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              
              {/* Mobile Services */}
              <div className="px-3 py-2">
                <div className="text-sm font-semibold text-gray-900 mb-2">AI Services</div>
                <div className="space-y-1 ml-4">
                  {aiServices.map((service) => (
                    <Link
                      key={service.name}
                      to={service.url}
                      className="block px-3 py-1 text-sm text-gray-600 hover:text-purple-600 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              <div className="px-3 py-2">
                <div className="text-sm font-semibold text-gray-900 mb-2">IT Services</div>
                <div className="space-y-1 ml-4">
                  {itServices.map((service) => (
                    <Link
                      key={service.name}
                      to={service.url}
                      className="block px-3 py-1 text-sm text-gray-600 hover:text-purple-600 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
              
              <div className="px-3 py-2">
                <div className="text-sm font-semibold text-gray-900 mb-2">Specialized Tech</div>
                <div className="space-y-1 ml-4">
                  {specializedTech.map((tech) => (
                    <Link
                      key={tech.name}
                      to={tech.url}
                      className="block px-3 py-1 text-sm text-gray-600 hover:text-purple-600 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {tech.name}
                    </Link>
                  ))}
                </div>
              </div>

              {companyLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.url}
                  className="block px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              
              {/* Mobile Contact */}
              <div className="px-3 py-2 border-t border-gray-200 mt-4">
                <a
                  href="tel:+13024640950"
                  className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 transition-colors mb-2"
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm font-medium">+1 302 464 0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-sm font-medium">kleber@ziontechgroup.com</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;