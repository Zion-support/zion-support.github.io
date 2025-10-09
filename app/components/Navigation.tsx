import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, Sidebar as SidebarIcon } from 'lucide-react';
import Sidebar from './Sidebar';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aiServicesOpen, setAiServicesOpen] = useState(false);
  const [itServicesOpen, setItServicesOpen] = useState(false);
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
    setIsOpen(false);
    setSidebarOpen(false);
  };

  const serviceCategories = [
    {
      title: 'AI Services',
      icon: Brain,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      services: [
        { name: 'AI Services', path: '/ai-services' },
        { name: 'AI Marketing', path: '/ai-marketing' },
        { name: 'AI Automation', path: '/ai-automation' },
        { name: 'AI Healthcare', path: '/ai-healthcare' },
        { name: 'AI Fintech', path: '/ai-fintech' },
        { name: 'AI Data Analytics', path: '/ai-data-analytics' },
        { name: 'AI Cybersecurity', path: '/ai-cybersecurity' },
        { name: 'AI Workflow Automation', path: '/ai-workflow-automation' },
        { name: 'AI Cloud Infrastructure', path: '/ai-cloud-infrastructure' },
        { name: 'AI E-commerce Solutions', path: '/ai-ecommerce-solutions' },
        { name: 'AI Mobile App Development', path: '/ai-mobile-app-development' }
      ]
    },
    {
      title: 'IT Services',
      icon: Code,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      services: [
        { name: 'IT Services', path: '/it-services' },
        { name: 'Micro SAAS', path: '/micro-saas' },
        { name: 'Cybersecurity', path: '/cybersecurity' }
      ]
    },
    {
      title: 'Advanced Technologies',
      icon: Zap,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      services: [
        { name: 'Quantum Computing', path: '/quantum-computing' },
        { name: 'Autonomous Systems', path: '/autonomous-systems' },
        { name: 'Blockchain & Web3', path: '/blockchain-web3' },
        { name: 'IoT & Edge Computing', path: '/iot-edge-computing' },
        { name: 'Business Intelligence', path: '/business-intelligence' }
      ]
    }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
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
              className={`transition-colors font-medium ${isScrolled ? 'text-gray-700 hover:text-purple-600' : 'text-white hover:text-purple-200'}`}
              onClick={closeAllMenus}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`transition-colors font-medium ${isScrolled ? 'text-gray-700 hover:text-purple-600' : 'text-white hover:text-purple-200'}`}
              onClick={closeAllMenus}
            >
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className={`flex items-center space-x-1 transition-colors font-medium ${isScrolled ? 'text-gray-700 hover:text-purple-600' : 'text-white hover:text-purple-200'}`}
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {servicesOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-xl border border-gray-200 py-4"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <div className="grid grid-cols-1 gap-4 px-4">
                    {serviceCategories.map((category, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center space-x-2 text-sm font-semibold text-gray-900 mb-2">
                          <category.icon className={`w-4 h-4 ${category.color}`} />
                          <span>{category.title}</span>
                        </div>
                        <div className="space-y-1">
                          {category.services.map((service, serviceIndex) => (
                            <Link
                              key={serviceIndex}
                              to={service.path}
                              className="block px-2 py-1 text-sm text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded transition-colors"
                              onClick={closeAllMenus}
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link 
              to="/team" 
              className={`transition-colors font-medium ${isScrolled ? 'text-gray-700 hover:text-purple-600' : 'text-white hover:text-purple-200'}`}
              onClick={closeAllMenus}
            >
              Team
            </Link>
            <Link 
              to="/case-studies" 
              className={`transition-colors font-medium ${isScrolled ? 'text-gray-700 hover:text-purple-600' : 'text-white hover:text-purple-200'}`}
              onClick={closeAllMenus}
            >
              Case Studies
            </Link>
            <Link 
              to="/contact" 
              className={`transition-colors font-medium ${isScrolled ? 'text-gray-700 hover:text-purple-600' : 'text-white hover:text-purple-200'}`}
              onClick={closeAllMenus}
            >
              Contact
            </Link>
          </div>

          {/* Contact Info - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="tel:+13024640950" 
              className={`flex items-center space-x-1 text-sm ${isScrolled ? 'text-gray-600' : 'text-white'}`}
            >
              <Phone className="w-4 h-4" />
              <span>+1 302 464 0950</span>
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com" 
              className={`flex items-center space-x-1 text-sm ${isScrolled ? 'text-gray-600' : 'text-white'}`}
            >
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>
          </div>

          {/* Sidebar Toggle Button */}
          <button
            className="lg:hidden p-2 mr-2"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label="Toggle sidebar"
          >
            <SidebarIcon className={`w-6 h-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
          </button>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-700' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-6 space-y-4">
              <Link 
                to="/" 
                className="block text-gray-700 hover:text-purple-600 font-medium"
                onClick={closeAllMenus}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="block text-gray-700 hover:text-purple-600 font-medium"
                onClick={closeAllMenus}
              >
                About
              </Link>
              
              {/* Mobile Services */}
              <div className="space-y-2">
                <div className="text-gray-700 font-semibold">Services</div>
                {serviceCategories.map((category, index) => (
                  <div key={index} className="ml-4 space-y-1">
                    <div className="text-sm font-medium text-gray-600">{category.title}</div>
                    {category.services.map((service, serviceIndex) => (
                      <Link
                        key={serviceIndex}
                        to={service.path}
                        className="block text-sm text-gray-500 hover:text-purple-600 ml-4"
                        onClick={closeAllMenus}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>

              <Link 
                to="/team" 
                className="block text-gray-700 hover:text-purple-600 font-medium"
                onClick={closeAllMenus}
              >
                Team
              </Link>
              <Link 
                to="/case-studies" 
                className="block text-gray-700 hover:text-purple-600 font-medium"
                onClick={closeAllMenus}
              >
                Case Studies
              </Link>
              <Link 
                to="/contact" 
                className="block text-gray-700 hover:text-purple-600 font-medium"
                onClick={closeAllMenus}
              >
                Contact
              </Link>

              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-gray-200 space-y-2">
                <a 
                  href="tel:+13024640950" 
                  className="flex items-center space-x-2 text-gray-600"
                >
                  <Phone className="w-4 h-4" />
                  <span>+1 302 464 0950</span>
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="flex items-center space-x-2 text-gray-600"
                >
                  <Mail className="w-4 h-4" />
                  <span>kleber@ziontechgroup.com</span>
                </a>
                <div className="flex items-center space-x-2 text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </nav>
  );
};

export default Navigation;