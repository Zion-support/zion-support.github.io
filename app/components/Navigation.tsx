import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronDown, 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  Brain, 
  Cloud, 
  Shield, 
  Code, 
  BarChart, 
  Users, 
  Zap,
  ArrowRight,
  Star,
  TrendingUp,
  Settings,
  Globe,
  Target
} from 'lucide-react';

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
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      closeAllMenus();
    }
  };

  const aiServices = [
    { name: 'AI Solutions', href: '/ai-services', icon: Brain, description: 'Core AI services' },
    { name: 'AI Marketing', href: '/ai-marketing', icon: Target, description: 'AI-powered marketing' },
    { name: 'AI Automation', href: '/ai-automation', icon: Zap, description: 'Process automation' },
    { name: 'AI Data Analytics', href: '/ai-data-analytics', icon: BarChart, description: 'Data intelligence' },
    { name: 'AI Cybersecurity', href: '/ai-cybersecurity', icon: Shield, description: 'AI security' },
    { name: 'AI Cloud Infrastructure', href: '/ai-cloud-infrastructure', icon: Cloud, description: 'Cloud AI' },
    { name: 'AI Content Generation', href: '/ai-content-generation', icon: Code, description: 'Content creation' },
    { name: 'AI Healthcare', href: '/ai-healthcare', icon: Users, description: 'Healthcare AI' },
    { name: 'AI Fintech', href: '/ai-fintech', icon: TrendingUp, description: 'Financial AI' }
  ];

  const itServices = [
    { name: 'IT Solutions', href: '/it-services', icon: Code, description: 'Core IT services' },
    { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield, description: 'Security solutions' },
    { name: 'Cloud Services', href: '/ai-cloud-infrastructure', icon: Cloud, description: 'Cloud infrastructure' },
    { name: 'DevOps', href: '/devops', icon: Settings, description: 'DevOps automation' },
    { name: 'Database Services', href: '/database', icon: BarChart, description: 'Database management' },
    { name: 'Network Services', href: '/networking', icon: Globe, description: 'Network solutions' },
    { name: 'Web Development', href: '/web-development', icon: Code, description: 'Web applications' },
    { name: 'Mobile Development', href: '/mobile-development', icon: Code, description: 'Mobile apps' }
  ];

  const microSaasServices = [
    { name: 'AI Marketing Tools', href: '/micro-saas', icon: TrendingUp, description: 'Marketing automation' },
    { name: 'AI Document Processing', href: '/micro-saas', icon: Code, description: 'Document intelligence' },
    { name: 'AI Customer Support', href: '/micro-saas', icon: Users, description: 'Support automation' },
    { name: 'AI Workflow Automation', href: '/ai-workflow-automation', icon: Zap, description: 'Workflow optimization' },
    { name: 'AI E-commerce Solutions', href: '/ai-ecommerce-solutions', icon: Globe, description: 'E-commerce AI' },
    { name: 'AI Mobile App Development', href: '/ai-mobile-app-development', icon: Code, description: 'Mobile AI apps' }
  ];

  const emergingTech = [
    { name: 'Blockchain', href: '/blockchain', icon: Shield, description: 'Blockchain solutions' },
    { name: 'IoT', href: '/iot', icon: Globe, description: 'Internet of Things' },
    { name: 'Robotics', href: '/robotics', icon: Code, description: 'Intelligent robots' },
    { name: 'Business Intelligence', href: '/business-intelligence', icon: BarChart, description: 'Data insights' }
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

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-medium transition-colors hover:text-purple-600 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
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
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-xl border border-gray-200 py-4 z-50">
                  <div className="grid grid-cols-2 gap-6 px-6">
                    {/* AI Services */}
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
                        <Brain className="w-4 h-4 mr-2 text-purple-600" />
                        AI Services
                      </h3>
                      <div className="space-y-2">
                        {aiServices.slice(0, 4).map((service) => (
                          <Link
                            key={service.name}
                            to={service.href}
                            className="block px-3 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 rounded-md transition-colors"
                            onClick={closeAllMenus}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* IT Services */}
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
                        <Code className="w-4 h-4 mr-2 text-blue-600" />
                        IT Services
                      </h3>
                      <div className="space-y-2">
                        {itServices.slice(0, 4).map((service) => (
                          <Link
                            key={service.name}
                            to={service.href}
                            className="block px-3 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700 rounded-md transition-colors"
                            onClick={closeAllMenus}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 mt-4 pt-4 px-6">
                    <div className="grid grid-cols-2 gap-4">
                      <Link
                        to="/micro-saas"
                        className="flex items-center text-sm text-gray-700 hover:text-purple-700 transition-colors"
                        onClick={closeAllMenus}
                      >
                        <TrendingUp className="w-4 h-4 mr-2" />
                        Micro SaaS
                      </Link>
                      <Link
                        to="/emerging-tech"
                        className="flex items-center text-sm text-gray-700 hover:text-purple-700 transition-colors"
                        onClick={closeAllMenus}
                      >
                        <Globe className="w-4 h-4 mr-2" />
                        Emerging Tech
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link 
              to="/contact" 
              className={`font-medium transition-colors hover:text-purple-600 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
              onClick={closeAllMenus}
            >
              Contact
            </Link>

            <Link 
              to="/blog" 
              className={`font-medium transition-colors hover:text-purple-600 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
              onClick={closeAllMenus}
            >
              Blog
            </Link>
          </div>

          {/* Contact Info - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="tel:+1234567890" 
              className="flex items-center space-x-1 text-sm text-gray-600 hover:text-purple-600 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>+1 (234) 567-890</span>
            </a>
            <a 
              href="mailto:info@ziontechgroup.com" 
              className="flex items-center space-x-1 text-sm text-gray-600 hover:text-purple-600 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>info@ziontechgroup.com</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md text-gray-600 hover:text-purple-600 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              <Link
                to="/"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50 rounded-md transition-colors"
                onClick={closeAllMenus}
              >
                Home
              </Link>
              
              <Link
                to="/about"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50 rounded-md transition-colors"
                onClick={closeAllMenus}
              >
                About
              </Link>

              {/* Mobile Services */}
              <div className="px-3 py-2">
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center justify-between w-full text-base font-medium text-gray-700 hover:text-purple-600 transition-colors"
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {servicesOpen && (
                  <div className="mt-2 space-y-1 pl-4">
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">AI Services</h4>
                      {aiServices.slice(0, 3).map((service) => (
                        <Link
                          key={service.name}
                          to={service.href}
                          className="block px-3 py-2 text-sm text-gray-600 hover:text-purple-600 hover:bg-gray-50 rounded-md transition-colors"
                          onClick={closeAllMenus}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                    
                    <div className="space-y-1">
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">IT Services</h4>
                      {itServices.slice(0, 3).map((service) => (
                        <Link
                          key={service.name}
                          to={service.href}
                          className="block px-3 py-2 text-sm text-gray-600 hover:text-purple-600 hover:bg-gray-50 rounded-md transition-colors"
                          onClick={closeAllMenus}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/contact"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50 rounded-md transition-colors"
                onClick={closeAllMenus}
              >
                Contact
              </Link>

              <Link
                to="/blog"
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50 rounded-md transition-colors"
                onClick={closeAllMenus}
              >
                Blog
              </Link>

              {/* Mobile Contact Info */}
              <div className="border-t border-gray-200 pt-4 mt-4">
                <a 
                  href="tel:+1234567890" 
                  className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-600 hover:text-purple-600 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>+1 (234) 567-890</span>
                </a>
                <a 
                  href="mailto:info@ziontechgroup.com" 
                  className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-600 hover:text-purple-600 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>info@ziontechgroup.com</span>
                </a>
                <div className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>San Francisco, CA</span>
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