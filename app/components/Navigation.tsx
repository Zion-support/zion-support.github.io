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
  TrendingUp
} from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aiServicesOpen, setAiServicesOpen] = useState(false);
  const [itServicesOpen, setItServicesOpen] = useState(false);

  const aiServices = [
    { name: 'AI Services', url: '/ai-services', icon: Brain, description: 'Comprehensive AI solutions' },
    { name: 'AI Marketing', url: '/ai-marketing', icon: TrendingUp, description: 'AI-powered marketing automation' },
    { name: 'AI Automation', url: '/ai-automation', icon: Zap, description: 'Intelligent process automation' },
    { name: 'AI Healthcare', url: '/ai-healthcare', icon: Shield, description: 'Medical AI solutions' },
    { name: 'AI Fintech', url: '/ai-fintech', icon: BarChart, description: 'Financial AI applications' },
    { name: 'AI Content Generation', url: '/ai-content-generation', icon: Sparkles, description: 'AI content creation' },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', icon: Database, description: 'Advanced data insights' },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity', icon: Lock, description: 'AI security solutions' },
    { name: 'AI Workflow Automation', url: '/ai-workflow-automation', icon: Cpu, description: 'Workflow optimization' }
  ];

  const itServices = [
    { name: 'IT Services', url: '/it-services', icon: Code, description: 'Comprehensive IT support' },
    { name: 'IT Infrastructure', url: '/it-infrastructure', icon: Cloud, description: 'Enterprise infrastructure' },
    { name: 'Micro SAAS', url: '/micro-saas', icon: Smartphone, description: '50+ ready-to-use apps' },
    { name: 'Cybersecurity', url: '/cybersecurity', icon: Shield, description: 'Security solutions' },
    { name: 'Cloud Infrastructure', url: '/ai-cloud-infrastructure', icon: Cloud, description: 'Cloud migration & setup' },
    { name: 'E-commerce Solutions', url: '/ai-ecommerce-solutions', icon: Globe, description: 'E-commerce platforms' },
    { name: 'Business Intelligence', url: '/business-intelligence', icon: BarChart, description: 'Data analytics & insights' },
    { name: 'DevOps Services', url: '/devops', icon: Code, description: 'Development & operations' },
    { name: 'API Development', url: '/api-development', icon: Database, description: 'Custom API solutions' }
  ];

  const companyLinks = [
    { name: 'About Us', url: '/about' },
    { name: 'Our Team', url: '/team' },
    { name: 'Careers', url: '/careers' },
    { name: 'Contact', url: '/contact' },
    { name: 'Blog', url: '/blog' },
    { name: 'Case Studies', url: '/case-studies' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', url: '/privacy' },
    { name: 'Terms of Service', url: '/terms' },
    { name: 'Cookie Policy', url: '/cookies' },
    { name: 'GDPR Compliance', url: '/gdpr' },
    { name: 'Compliance', url: '/compliance' }
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

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-gray-900">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-cyan-600 transition-colors duration-200 font-medium"
            >
              Home
            </Link>
            
            {/* AI Services Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center text-gray-700 hover:text-cyan-600 transition-colors duration-200 font-medium"
                onMouseEnter={() => setAiServicesOpen(true)}
                onMouseLeave={() => setAiServicesOpen(false)}
              >
                AI Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {aiServicesOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-xl border border-gray-200 py-4 z-50"
                  onMouseEnter={() => setAiServicesOpen(true)}
                  onMouseLeave={() => setAiServicesOpen(false)}
                >
                  <div className="grid grid-cols-1 gap-2">
                    {aiServices.map((service, index) => (
                      <Link
                        key={index}
                        to={service.url}
                        className="flex items-center p-3 hover:bg-gray-50 transition-colors duration-200"
                      >
                        <service.icon className="w-5 h-5 text-cyan-600 mr-3" />
                        <div>
                          <div className="font-medium text-gray-900">{service.name}</div>
                          <div className="text-sm text-gray-500">{service.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* IT Services Dropdown */}
            <div className="relative group">
              <button 
                className="flex items-center text-gray-700 hover:text-cyan-600 transition-colors duration-200 font-medium"
                onMouseEnter={() => setItServicesOpen(true)}
                onMouseLeave={() => setItServicesOpen(false)}
              >
                IT Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {itServicesOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-xl border border-gray-200 py-4 z-50"
                  onMouseEnter={() => setItServicesOpen(true)}
                  onMouseLeave={() => setItServicesOpen(false)}
                >
                  <div className="grid grid-cols-1 gap-2">
                    {itServices.map((service, index) => (
                      <Link
                        key={index}
                        to={service.url}
                        className="flex items-center p-3 hover:bg-gray-50 transition-colors duration-200"
                      >
                        <service.icon className="w-5 h-5 text-cyan-600 mr-3" />
                        <div>
                          <div className="font-medium text-gray-900">{service.name}</div>
                          <div className="text-sm text-gray-500">{service.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link 
              to="/about" 
              className="text-gray-700 hover:text-cyan-600 transition-colors duration-200 font-medium"
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-700 hover:text-cyan-600 transition-colors duration-200 font-medium"
            >
              Contact
            </Link>
            <Link 
              to="/blog" 
              className="text-gray-700 hover:text-cyan-600 transition-colors duration-200 font-medium"
            >
              Blog
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 flex items-center"
            >
              Get Started
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-cyan-600 transition-colors duration-200"
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
                className="block px-3 py-2 text-gray-700 hover:text-cyan-600 transition-colors duration-200 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              
              {/* Mobile AI Services */}
              <div className="space-y-1">
                <div className="px-3 py-2 text-gray-700 font-medium">AI Services</div>
                {aiServices.map((service, index) => (
                  <Link
                    key={index}
                    to={service.url}
                    className="block px-6 py-2 text-gray-600 hover:text-cyan-600 transition-colors duration-200 text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>

              {/* Mobile IT Services */}
              <div className="space-y-1">
                <div className="px-3 py-2 text-gray-700 font-medium">IT Services</div>
                {itServices.map((service, index) => (
                  <Link
                    key={index}
                    to={service.url}
                    className="block px-6 py-2 text-gray-600 hover:text-cyan-600 transition-colors duration-200 text-sm"
                    onClick={() => setIsOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>

              <Link
                to="/about"
                className="block px-3 py-2 text-gray-700 hover:text-cyan-600 transition-colors duration-200 font-medium"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-gray-700 hover:text-cyan-600 transition-colors duration-200 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/blog"
                className="block px-3 py-2 text-gray-700 hover:text-cyan-600 transition-colors duration-200 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              
              <div className="pt-4">
                <Link
                  to="/contact"
                  className="block w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-center hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;