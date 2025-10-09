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
  Sparkles,
  Cpu,
  Target,
  Globe,
  Database,
  Smartphone,
  Lock,
  TrendingUp,
  Star,
  Settings
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
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      closeAllMenus();
    }
  };

  const serviceCategories = [
    {
      title: 'AI Services',
      icon: Brain,
      color: 'text-purple-600',
      services: [
        { name: 'AI Solutions', url: '/ai-services', description: 'Comprehensive AI solutions' },
        { name: 'AI Marketing', url: '/ai-marketing', description: 'AI-powered marketing automation' },
        { name: 'AI Automation', url: '/ai-automation', description: 'Intelligent process automation' },
        { name: 'AI Healthcare', url: '/ai-healthcare', description: 'Medical AI solutions' },
        { name: 'AI Fintech', url: '/ai-fintech', description: 'Financial AI applications' },
        { name: 'AI Content Generation', url: '/ai-content-generation', description: 'AI content creation' },
        { name: 'AI Data Analytics', url: '/ai-data-analytics', description: 'Advanced data insights' },
        { name: 'AI Cybersecurity', url: '/ai-cybersecurity', description: 'AI security solutions' },
        { name: 'AI Workflow Automation', url: '/ai-workflow-automation', description: 'Workflow optimization' },
        { name: 'AI Cloud Infrastructure', url: '/ai-cloud-infrastructure', description: 'AI-powered cloud services' },
        { name: 'AI E-commerce Solutions', url: '/ai-ecommerce-solutions', description: 'E-commerce AI platforms' },
        { name: 'AI Mobile App Development', url: '/ai-mobile-app-development', description: 'Mobile AI applications' },
        { name: 'AI Customer Support', url: '/ai-customer-support', description: 'AI-powered customer service' },
        { name: 'AI Sales Automation', url: '/ai-sales-automation', description: 'Sales process automation' },
        { name: 'AI Data Visualization', url: '/ai-data-visualization', description: 'AI-powered data insights' }
      ]
    },
    {
      title: 'IT Services',
      icon: Code,
      color: 'text-blue-600',
      services: [
        { name: 'IT Solutions', url: '/it-services', description: 'Comprehensive IT support' },
        { name: 'IT Infrastructure', url: '/it-infrastructure', description: 'Enterprise infrastructure' },
        { name: 'Cybersecurity', url: '/cybersecurity', description: 'Security solutions' },
        { name: 'Cloud Services', url: '/cloud-services', description: 'Cloud migration & setup' },
        { name: 'DevOps', url: '/devops', description: 'Development operations' },
        { name: 'Database Services', url: '/database', description: 'Database management' },
        { name: 'Networking', url: '/networking', description: 'Network infrastructure' },
        { name: 'API Development', url: '/api', description: 'API design & development' }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: Star,
      color: 'text-orange-600',
      services: [
        { name: 'Micro SAAS Solutions', url: '/micro-saas', description: '50+ ready-to-use apps' },
        { name: 'Business Apps', url: '/business-apps', description: 'Business applications' },
        { name: 'Productivity Tools', url: '/productivity', description: 'Productivity solutions' },
        { name: 'Marketing Tools', url: '/marketing-tools', description: 'Marketing automation' },
        { name: 'Developer Tools', url: '/developer-tools', description: 'Development utilities' }
      ]
    },
    {
      title: 'Emerging Tech',
      icon: Zap,
      color: 'text-green-600',
      services: [
        { name: 'Quantum Computing', url: '/quantum-computing', description: 'Next-gen computing' },
        { name: 'Blockchain & Web3', url: '/blockchain-web3', description: 'Decentralized solutions' },
        { name: 'IoT & Edge Computing', url: '/iot-edge-computing', description: 'Connected devices' },
        { name: 'Autonomous Systems', url: '/autonomous-systems', description: 'Self-managing systems' },
        { name: 'Robotics', url: '/robotics', description: 'Robotic solutions' },
        { name: 'Business Intelligence', url: '/business-intelligence', description: 'Data-driven insights' }
      ]
    }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" onClick={closeAllMenus}>
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-cyan-400 transition-colors">
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors">
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Our Services</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {serviceCategories.map((category, index) => (
                      <div key={index} className="space-y-2">
                        <div className={`flex items-center space-x-2 ${category.color}`}>
                          <category.icon className="w-4 h-4" />
                          <span className="font-medium text-sm">{category.title}</span>
                        </div>
                        <div className="space-y-1">
                          {category.services.slice(0, 3).map((service, serviceIndex) => (
                            <Link
                              key={serviceIndex}
                              to={service.url}
                              className="block text-sm text-gray-600 hover:text-gray-900 transition-colors"
                              onClick={closeAllMenus}
                            >
                              {service.name}
                            </Link>
                          ))}
                          {category.services.length > 3 && (
                            <Link
                              to={`/${category.title.toLowerCase().replace(/\s+/g, '-')}`}
                              className="block text-xs text-blue-600 hover:text-blue-800 transition-colors"
                              onClick={closeAllMenus}
                            >
                              View all {category.services.length} services →
                            </Link>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link to="/about" className="text-white hover:text-cyan-400 transition-colors">
              About
            </Link>
            <Link to="/blog" className="text-white hover:text-cyan-400 transition-colors">
              Blog
            </Link>
            <Link to="/contact" className="text-white hover:text-cyan-400 transition-colors">
              Contact
            </Link>
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <a 
              href="tel:+13024640950" 
              className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">(302) 464-0950</span>
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com" 
              className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm">Email</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-white hover:text-cyan-400 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-gray-700">
            <div className="px-4 py-6 space-y-6">
              <Link 
                to="/" 
                className="block text-white hover:text-cyan-400 transition-colors"
                onClick={closeAllMenus}
              >
                Home
              </Link>
              
              {/* Mobile Services */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Services</h3>
                {serviceCategories.map((category, index) => (
                  <div key={index} className="space-y-2">
                    <div className={`flex items-center space-x-2 ${category.color}`}>
                      <category.icon className="w-4 h-4" />
                      <span className="font-medium text-white">{category.title}</span>
                    </div>
                    <div className="ml-6 space-y-1">
                      {category.services.map((service, serviceIndex) => (
                        <Link
                          key={serviceIndex}
                          to={service.url}
                          className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors"
                          onClick={closeAllMenus}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <Link 
                to="/about" 
                className="block text-white hover:text-cyan-400 transition-colors"
                onClick={closeAllMenus}
              >
                About
              </Link>
              <Link 
                to="/blog" 
                className="block text-white hover:text-cyan-400 transition-colors"
                onClick={closeAllMenus}
              >
                Blog
              </Link>
              <Link 
                to="/contact" 
                className="block text-white hover:text-cyan-400 transition-colors"
                onClick={closeAllMenus}
              >
                Contact
              </Link>

              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-gray-700 space-y-3">
                <a 
                  href="tel:+13024640950" 
                  className="flex items-center space-x-2 text-white hover:text-cyan-400 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>(302) 464-0950</span>
                </a>
                <a 
                  href="mailto:kleber@ziontechgroup.com" 
                  className="flex items-center space-x-2 text-white hover:text-cyan-400 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  <span>kleber@ziontechgroup.com</span>
                </a>
                <div className="flex items-center space-x-2 text-gray-300">
                  <MapPin className="w-4 h-4" />
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