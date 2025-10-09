import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aiServicesOpen, setAiServicesOpen] = useState(false);
  const [itServicesOpen, setItServicesOpen] = useState(false);
  const [microSaasOpen, setMicroSaasOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeAllMenus = () => {
    setServicesOpen(false);
    setAiServicesOpen(false);
    setItServicesOpen(false);
    setMicroSaasOpen(false);
    setIsOpen(false);
  };

  const serviceCategories = [
    {
      title: 'AI Services',
      icon: Brain,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      services: [
        { name: 'AI Consulting', path: '/ai-services', price: '$1,500/month' },
        { name: 'AI Marketing', path: '/ai-marketing', price: '$199/month' },
        { name: 'AI Automation', path: '/ai-automation', price: '$399/month' },
        { name: 'AI Healthcare', path: '/ai-healthcare', price: '$1,999/month' },
        { name: 'AI Fintech', path: '/ai-fintech', price: '$1,499/month' },
        { name: 'AI Content Generation', path: '/ai-content-generation', price: '$199/month' },
        { name: 'AI Analytics', path: '/ai-data-analytics', price: '$799/month' }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      services: [
        { name: 'IT Infrastructure', path: '/it-infrastructure', price: '$999/month' },
        { name: 'Cloud Services', path: '/cloud-services', price: '$499/month' },
        { name: 'Cybersecurity', path: '/cybersecurity', price: '$1,299/month' },
        { name: 'DevOps', path: '/devops', price: '$799/month' },
        { name: 'Database Services', path: '/database-services', price: '$599/month' },
        { name: 'Network Solutions', path: '/network-solutions', price: '$699/month' }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: Code,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      services: [
        { name: 'Project Management', path: '/micro-saas/project-management', price: '$79/month' },
        { name: 'CRM Solutions', path: '/micro-saas/crm', price: '$99/month' },
        { name: 'Analytics Dashboard', path: '/micro-saas/analytics', price: '$49/month' },
        { name: 'Email Marketing', path: '/micro-saas/email-marketing', price: '$29/month' },
        { name: 'Task Automation', path: '/micro-saas/automation', price: '$59/month' },
        { name: 'Document Management', path: '/micro-saas/documents', price: '$39/month' }
      ]
    },
    {
      title: 'Specialized',
      icon: Zap,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      services: [
        { name: 'Quantum Computing', path: '/quantum-computing', price: 'Custom' },
        { name: 'Autonomous Systems', path: '/autonomous-systems', price: '$2,500/month' },
        { name: 'Blockchain & Web3', path: '/blockchain-web3', price: '$1,799/month' },
        { name: 'IoT & Edge Computing', path: '/iot-edge-computing', price: '$1,199/month' },
        { name: 'Business Intelligence', path: '/business-intelligence', price: '$899/month' }
      ]
    }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 text-2xl font-bold"
            onClick={closeAllMenus}
          >
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className={`transition-colors ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
              onClick={closeAllMenus}
            >
              Home
            </Link>
            
            <Link 
              to="/about" 
              className={`font-medium transition-colors hover:text-purple-600 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
              onClick={closeAllMenus}
            >
              About
            </Link>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className={`flex items-center space-x-1 font-medium transition-colors hover:text-purple-600 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-xl shadow-2xl border border-gray-200 py-6 z-50">
                  <div className="grid grid-cols-2 gap-6 px-6">
                    {serviceCategories.map((category, index) => (
                      <div key={index} className="space-y-3">
                        <div className="flex items-center space-x-2 mb-3">
                          <div className={`w-8 h-8 ${category.bgColor} rounded-lg flex items-center justify-center`}>
                            <category.icon className={`w-4 h-4 ${category.color}`} />
                          </div>
                          <h3 className="font-semibold text-gray-900 text-sm">{category.title}</h3>
                        </div>
                        <div className="space-y-2">
                          {category.services.map((service, serviceIndex) => (
                            <Link
                              key={serviceIndex}
                              to={service.path}
                              className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-purple-600 rounded-lg transition-colors"
                              onClick={closeAllMenus}
                            >
                              <div className="flex justify-between items-center">
                                <span>{service.name}</span>
                                <span className="text-xs text-gray-500">{service.price}</span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-gray-200 mt-6 pt-4 px-6">
                    <Link
                      to="/services"
                      className="block w-full text-center bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all"
                      onClick={closeAllMenus}
                    >
                      View All Services
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link 
              to="/case-studies" 
              className={`font-medium transition-colors hover:text-purple-600 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
              onClick={closeAllMenus}
            >
              Case Studies
            </Link>
            
            <Link
              to="/blog"
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
              onClick={closeAllMenus}
            >
              Blog
            </Link>
            
            <Link
              to="/contact"
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
              onClick={closeAllMenus}
            >
              Contact
            </Link>
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Phone className="w-4 h-4" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Mail className="w-4 h-4" />
              <span>kleber@ziontechgroup.com</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled 
                ? 'text-gray-700 hover:bg-gray-100' 
                : 'text-white hover:bg-white/10'
            }`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-200 py-6 bg-white">
            <div className="space-y-6">
              <Link 
                to="/" 
                className="block text-lg font-medium text-gray-900 hover:text-purple-600 transition-colors"
                onClick={closeAllMenus}
              >
                Home
              </Link>
              
              <Link 
                to="/about" 
                className="block text-lg font-medium text-gray-900 hover:text-purple-600 transition-colors"
                onClick={closeAllMenus}
              >
                About
              </Link>

              {/* Mobile Services */}
              <div>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center justify-between w-full text-lg font-medium text-gray-900 hover:text-purple-600 transition-colors"
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {servicesOpen && (
                  <div className="mt-4 space-y-4">
                    {serviceCategories.map((category, index) => (
                      <div key={index} className="ml-4">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className={`w-6 h-6 ${category.bgColor} rounded-lg flex items-center justify-center`}>
                            <category.icon className={`w-3 h-3 ${category.color}`} />
                          </div>
                          <h4 className="font-semibold text-gray-800 text-sm">{category.title}</h4>
                        </div>
                        <div className="ml-6 space-y-2">
                          {category.services.map((service, serviceIndex) => (
                            <Link
                              key={serviceIndex}
                              to={service.path}
                              className="block text-sm text-gray-600 hover:text-purple-600 transition-colors py-1"
                              onClick={closeAllMenus}
                            >
                              <div className="flex justify-between items-center">
                                <span>{service.name}</span>
                                <span className="text-xs text-gray-500">{service.price}</span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <Link 
                to="/case-studies" 
                className="block text-lg font-medium text-gray-900 hover:text-purple-600 transition-colors"
                onClick={closeAllMenus}
              >
                Case Studies
              </Link>
              
              <Link
                to="/blog"
                className="block text-lg font-medium text-gray-900 hover:text-purple-600 transition-colors"
                onClick={closeAllMenus}
              >
                Blog
              </Link>
              
              <Link
                to="/contact"
                className="block text-lg font-medium text-gray-900 hover:text-purple-600 transition-colors"
                onClick={closeAllMenus}
              >
                Contact
              </Link>
              
              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center space-x-2 text-sm text-gray-600 py-2">
                  <Phone className="w-4 h-4" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600 py-2">
                  <Mail className="w-4 h-4" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600 py-2">
                  <MapPin className="w-4 h-4" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
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