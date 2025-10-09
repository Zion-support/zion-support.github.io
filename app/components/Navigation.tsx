'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
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
      bgColor: 'bg-purple-50',
      hoverColor: 'hover:bg-purple-100',
      services: [
        { name: 'AI Services', path: '/ai-services', description: 'Comprehensive AI solutions' },
        { name: 'AI Marketing', path: '/ai-marketing', description: 'AI-powered marketing automation' },
        { name: 'AI Automation', path: '/ai-automation', description: 'Intelligent process automation' },
        { name: 'AI Healthcare', path: '/ai-healthcare', description: 'Medical AI solutions' },
        { name: 'AI Fintech', path: '/ai-fintech', description: 'Financial AI applications' },
        { name: 'AI Content Generation', path: '/ai-content-generation', description: 'AI content creation' },
        { name: 'AI Data Analytics', path: '/ai-data-analytics', description: 'Advanced data insights' },
        { name: 'AI Cybersecurity', path: '/ai-cybersecurity', description: 'AI security solutions' },
        { name: 'AI Workflow Automation', path: '/ai-workflow-automation', description: 'Workflow optimization' },
        { name: 'AI Cloud Infrastructure', path: '/ai-cloud-infrastructure', description: 'Cloud AI solutions' },
        { name: 'AI E-commerce Solutions', path: '/ai-ecommerce-solutions', description: 'E-commerce AI' },
        { name: 'AI Mobile App Development', path: '/ai-mobile-app-development', description: 'Mobile AI apps' }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      hoverColor: 'hover:bg-blue-100',
      services: [
        { name: 'IT Infrastructure', path: '/it-infrastructure', description: 'Enterprise infrastructure' },
        { name: 'IT Services', path: '/it-services', description: 'Comprehensive IT support' },
        { name: 'Cybersecurity', path: '/cybersecurity', description: 'Security solutions' },
        { name: 'Cloud Services', path: '/cloud-services', description: 'Cloud migration & setup' },
        { name: 'DevOps', path: '/devops', description: 'DevOps automation' },
        { name: 'Database Services', path: '/database', description: 'Database management' },
        { name: 'Network Services', path: '/networking', description: 'Network infrastructure' }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: Code,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      hoverColor: 'hover:bg-green-100',
      services: [
        { name: 'Micro SAAS Solutions', path: '/micro-saas', description: '50+ ready-to-use apps' },
        { name: 'Developer Tools', path: '/micro-saas', description: 'AI-powered dev tools' },
        { name: 'Business Apps', path: '/micro-saas', description: 'Productivity applications' },
        { name: 'Marketing Tools', path: '/micro-saas', description: 'Marketing automation' },
        { name: 'Analytics Tools', path: '/micro-saas', description: 'Business intelligence' }
      ]
    },
    {
      title: 'Specialized',
      icon: Zap,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      hoverColor: 'hover:bg-orange-100',
      services: [
        { name: 'Quantum Computing', path: '/quantum-computing', description: 'Next-gen computing' },
        { name: 'Autonomous Systems', path: '/autonomous-systems', description: 'Self-managing systems' },
        { name: 'Blockchain & Web3', path: '/blockchain-web3', description: 'Decentralized solutions' },
        { name: 'IoT & Edge Computing', path: '/iot-edge-computing', description: 'Connected devices' },
        { name: 'Business Intelligence', path: '/business-intelligence', description: 'Data-driven insights' },
        { name: 'Robotics', path: '/robotics', description: 'Robotic solutions' }
      ]
    }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            href="/" 
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
              href="/"
              className={`font-medium transition-colors hover:text-cyan-400 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
              onClick={closeAllMenus}
            >
              Home
            </Link>
            
            <Link 
              href="/about" 
              className={`font-medium transition-colors hover:text-cyan-400 ${
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
                className={`flex items-center space-x-1 font-medium transition-colors hover:text-cyan-400 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-[800px] bg-white rounded-xl shadow-2xl border border-gray-200 py-6 z-50">
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
                              href={service.path}
                              className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-purple-600 rounded-lg transition-colors group"
                              onClick={closeAllMenus}
                            >
                              <div className="font-medium">{service.name}</div>
                              <div className="text-xs text-gray-500 group-hover:text-purple-500">
                                {service.description}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t border-gray-200 mt-6 pt-4 px-6">
                    <Link
                      href="/services"
                      className="block w-full text-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all"
                      onClick={closeAllMenus}
                    >
                      View All Services
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link 
              href="/case-studies" 
              className={`font-medium transition-colors hover:text-cyan-400 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
              onClick={closeAllMenus}
            >
              Case Studies
            </Link>

            <Link
              href="/blog"
              className={`font-medium transition-colors hover:text-cyan-400 ${
                isScrolled ? 'text-gray-700' : 'text-white'
              }`}
              onClick={closeAllMenus}
            >
              Blog
            </Link>

            <Link
              href="/contact"
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
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              onClick={closeAllMenus}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg text-white hover:text-cyan-400 hover:bg-white/10 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-gray-900/95 backdrop-blur-md rounded-lg mt-2 p-4">
            <div className="space-y-4">
              <Link
                href="/"
                className="block text-white hover:text-cyan-400 transition-colors font-medium py-2"
                onClick={closeAllMenus}
              >
                Home
              </Link>
              
              <Link href="/about" className="block text-white hover:text-cyan-400 transition-colors font-medium py-2">
                About
              </Link>
              
              {/* Mobile Services */}
              <div className="space-y-2">
                <div className="text-cyan-300 font-semibold text-lg">Services</div>
                <div className="ml-4 space-y-2">
                  <Link href="/services" className="block text-gray-300 hover:text-cyan-400 transition-colors">
                    All Services
                  </Link>
                  <Link href="/micro-saas" className="block text-gray-300 hover:text-cyan-400 transition-colors">
                    Micro SAAS Solutions
                  </Link>
                  <Link href="/ai-services" className="block text-gray-300 hover:text-cyan-400 transition-colors">
                    AI Services
                  </Link>
                  <Link href="/it-services" className="block text-gray-300 hover:text-cyan-400 transition-colors">
                    IT Services
                  </Link>
                  <Link href="/quantum-computing" className="block text-gray-300 hover:text-cyan-400 transition-colors">
                    Quantum Computing
                  </Link>
                  <Link href="/autonomous-systems" className="block text-gray-300 hover:text-cyan-400 transition-colors">
                    Autonomous Systems
                  </Link>
                  <Link href="/blockchain-web3" className="block text-gray-300 hover:text-cyan-400 transition-colors">
                    Blockchain & Web3
                  </Link>
                  <Link href="/cybersecurity" className="block text-gray-300 hover:text-cyan-400 transition-colors">
                    Cybersecurity
                  </Link>
                </div>
              </div>
              
              <Link href="/blog" className="block text-white hover:text-cyan-400 transition-colors font-medium py-2">
                Blog
              </Link>
              <Link href="/contact" className="block text-white hover:text-cyan-400 transition-colors font-medium py-2">
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
                href="/contact"
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
