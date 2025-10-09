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
  Star,
  Globe,
  Settings
} from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
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
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      closeAllMenus();
    }
  };

  const aiServices = [
    { name: 'AI Services', href: '/ai-services', icon: Brain, description: 'Core AI solutions' },
    { name: 'AI Marketing', href: '/ai-marketing', icon: BarChart, description: 'AI-powered marketing' },
    { name: 'AI Automation', href: '/ai-automation', icon: Settings, description: 'Business automation' },
    { name: 'AI Healthcare', href: '/ai-healthcare', icon: Users, description: 'Healthcare AI' },
    { name: 'AI Fintech', href: '/ai-fintech', icon: BarChart, description: 'Financial AI' },
    { name: 'AI Data Analytics', href: '/ai-data-analytics', icon: BarChart, description: 'Data intelligence' },
    { name: 'AI Cybersecurity', href: '/ai-cybersecurity', icon: Shield, description: 'AI security' },
    { name: 'AI Cloud Infrastructure', href: '/ai-cloud-infrastructure', icon: Cloud, description: 'Cloud AI' },
  ];

  const itServices = [
    { name: 'IT Solutions', href: '/it-services', icon: Code, description: 'Core IT services' },
    { name: 'Micro SAAS', href: '/micro-saas', icon: Star, description: 'AI-powered tools' },
    { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield, description: 'Security solutions' },
    { name: 'Cloud Infrastructure', href: '/ai-cloud-infrastructure', icon: Cloud, description: 'Cloud infrastructure' },
    { name: 'E-commerce Solutions', href: '/ai-ecommerce-solutions', icon: Globe, description: 'E-commerce platforms' },
    { name: 'Mobile App Development', href: '/ai-mobile-app-development', icon: Code, description: 'Mobile apps' },
  ];

  const emergingTech = [
    { name: 'Quantum Computing', href: '/quantum-computing', icon: Zap, description: 'Quantum solutions' },
    { name: 'Blockchain & Web3', href: '/blockchain-web3', icon: Shield, description: 'Decentralized solutions' },
    { name: 'IoT & Edge Computing', href: '/iot-edge-computing', icon: Cloud, description: 'Connected devices' },
    { name: 'Autonomous Systems', href: '/autonomous-systems', icon: Settings, description: 'Self-managing systems' },
    { name: 'Robotics', href: '/robotics', icon: Code, description: 'Intelligent robots' },
    { name: 'Business Intelligence', href: '/business-intelligence', icon: BarChart, description: 'Data insights' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2" 
            onClick={closeAllMenus}
          >
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className={`text-xl font-bold transition-colors ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-medium transition-colors hover:text-cyan-400 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
              onClick={closeAllMenus}
            >
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className={`flex items-center space-x-1 font-medium transition-colors hover:text-cyan-400 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-[800px] bg-white rounded-xl shadow-2xl border border-gray-200 py-6 z-50">
                  <div className="grid grid-cols-3 gap-6 px-6">
                    {/* AI Services */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <Brain className="w-5 h-5 text-purple-600 mr-2" />
                        AI Services
                      </h3>
                      <div className="space-y-2">
                        {aiServices.slice(0, 6).map((service, index) => (
                          <Link
                            key={index}
                            to={service.href}
                            className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors group"
                            onClick={closeAllMenus}
                          >
                            <service.icon className="w-4 h-4 text-purple-600" />
                            <div>
                              <div className="text-sm font-medium text-gray-900 group-hover:text-purple-600">
                                {service.name}
                              </div>
                              <div className="text-xs text-gray-500">{service.description}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* IT Services */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <Code className="w-5 h-5 text-blue-600 mr-2" />
                        IT Services
                      </h3>
                      <div className="space-y-2">
                        {itServices.map((service, index) => (
                          <Link
                            key={index}
                            to={service.href}
                            className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors group"
                            onClick={closeAllMenus}
                          >
                            <service.icon className="w-4 h-4 text-blue-600" />
                            <div>
                              <div className="text-sm font-medium text-gray-900 group-hover:text-blue-600">
                                {service.name}
                              </div>
                              <div className="text-xs text-gray-500">{service.description}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Emerging Tech */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <Zap className="w-5 h-5 text-orange-600 mr-2" />
                        Emerging Tech
                      </h3>
                      <div className="space-y-2">
                        {emergingTech.map((tech, index) => (
                          <Link
                            key={index}
                            to={tech.href}
                            className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors group"
                            onClick={closeAllMenus}
                          >
                            <tech.icon className="w-4 h-4 text-orange-600" />
                            <div>
                              <div className="text-sm font-medium text-gray-900 group-hover:text-orange-600">
                                {tech.name}
                              </div>
                              <div className="text-xs text-gray-500">{tech.description}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 mt-6 pt-4 px-6">
                    <div className="grid grid-cols-2 gap-4">
                      <Link
                        to="/services"
                        className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        onClick={closeAllMenus}
                      >
                        <Globe className="w-5 h-5 text-purple-600" />
                        <div>
                          <div className="font-medium text-gray-900">All Services</div>
                          <div className="text-sm text-gray-500">Complete portfolio</div>
                        </div>
                      </Link>
                      <Link
                        to="/micro-saas"
                        className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        onClick={closeAllMenus}
                      >
                        <Star className="w-5 h-5 text-purple-600" />
                        <div>
                          <div className="font-medium text-gray-900">Micro SAAS</div>
                          <div className="text-sm text-gray-500">AI-powered tools</div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/about"
              className={`font-medium transition-colors hover:text-cyan-400 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
              onClick={closeAllMenus}
            >
              About
            </Link>

            <Link
              to="/case-studies"
              className={`font-medium transition-colors hover:text-cyan-400 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
              onClick={closeAllMenus}
            >
              Case Studies
            </Link>

            <Link
              to="/blog"
              className={`font-medium transition-colors hover:text-cyan-400 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
              onClick={closeAllMenus}
            >
              Blog
            </Link>

            <Link
              to="/contact"
              className={`font-medium transition-colors hover:text-cyan-400 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
              onClick={closeAllMenus}
            >
              Contact
            </Link>
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-cyan-300">
              <Phone className="w-4 h-4" />
              <span>+1 302 464 0950</span>
            </div>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              onClick={closeAllMenus}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-md rounded-lg mt-2 p-4">
            <div className="space-y-4">
              <Link
                to="/"
                className="block text-white hover:text-cyan-400 transition-colors font-medium py-2"
                onClick={closeAllMenus}
              >
                Home
              </Link>
              
              {/* Mobile Services */}
              <div className="space-y-2">
                <div className="text-cyan-300 font-semibold text-lg">Services</div>
                <div className="ml-4 space-y-2">
                  <Link to="/services" className="block text-gray-300 hover:text-cyan-400 transition-colors">
                    All Services
                  </Link>
                  <Link to="/micro-saas" className="block text-gray-300 hover:text-cyan-400 transition-colors">
                    Micro SAAS Solutions
                  </Link>
                  <Link to="/ai-services" className="block text-gray-300 hover:text-cyan-400 transition-colors">
                    AI Services
                  </Link>
                  <Link to="/it-services" className="block text-gray-300 hover:text-cyan-400 transition-colors">
                    IT Services
                  </Link>
                  <Link to="/quantum-computing" className="block text-gray-300 hover:text-cyan-400 transition-colors">
                    Quantum Computing
                  </Link>
                  <Link to="/autonomous-systems" className="block text-gray-300 hover:text-cyan-400 transition-colors">
                    Autonomous Systems
                  </Link>
                  <Link to="/blockchain-web3" className="block text-gray-300 hover:text-cyan-400 transition-colors">
                    Blockchain & Web3
                  </Link>
                  <Link to="/cybersecurity" className="block text-gray-300 hover:text-cyan-400 transition-colors">
                    Cybersecurity
                  </Link>
                </div>
              </div>
              
              <Link to="/about" className="block text-white hover:text-cyan-400 transition-colors font-medium py-2">
                About
              </Link>
              <Link to="/case-studies" className="block text-white hover:text-cyan-400 transition-colors font-medium py-2">
                Case Studies
              </Link>
              <Link to="/blog" className="block text-white hover:text-cyan-400 transition-colors font-medium py-2">
                Blog
              </Link>
              <Link to="/contact" className="block text-white hover:text-cyan-400 transition-colors font-medium py-2">
                Contact
              </Link>
              
              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-gray-700">
                <div className="flex items-center space-x-2 text-sm text-cyan-300 py-2">
                  <Phone className="w-4 h-4" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-cyan-300 py-2">
                  <Mail className="w-4 h-4" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-cyan-300 py-2">
                  <MapPin className="w-4 h-4" />
                  <span>Middletown, DE</span>
                </div>
              </div>
              
              {/* Mobile CTA */}
              <Link
                to="/contact"
                className="block w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 mt-4"
                onClick={closeAllMenus}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;