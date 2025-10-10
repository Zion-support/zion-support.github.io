'use client';

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText, Search } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aiServicesOpen, setAiServicesOpen] = useState(false);
  const [itServicesOpen, setItServicesOpen] = useState(false);
  const [microSaasOpen, setMicroSaasOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleResize = () => {
    if (window.innerWidth >= 1024) {
      setIsOpen(false);
    }
  };

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const aiServices = [
    { name: 'AI Solutions', url: '/ai-services', icon: Brain, description: 'Comprehensive AI solutions' },
    { name: 'AI Marketing', url: '/ai-marketing', icon: Target, description: 'AI-powered marketing automation' },
    { name: 'AI Automation', url: '/ai-automation', icon: Settings, description: 'Intelligent process automation' },
    { name: 'AI Healthcare', url: '/ai-healthcare', icon: Shield, description: 'Medical AI solutions' },
    { name: 'AI Fintech', url: '/ai-fintech', icon: TrendingUp, description: 'Financial AI applications' },
    { name: 'AI Content Generation', url: '/ai-content-generation', icon: FileText, description: 'AI content creation' },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', icon: BarChart, description: 'Advanced data insights' },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity', icon: Lock, description: 'AI security solutions' },
    { name: 'AI Customer Support', url: '/ai-customer-support', icon: Users, description: 'AI-powered customer service' },
    { name: 'AI Sales Automation', url: '/ai-sales-automation', icon: ArrowRight, description: 'Intelligent sales processes' },
    { name: 'AI Data Visualization', url: '/ai-data-visualization', icon: BarChart, description: 'Advanced data visualization' },
    { name: 'AI Workflow Automation', url: '/ai-workflow-automation', icon: CheckSquare, description: 'Workflow optimization' }
  ];

  const itServices = [
    { name: 'IT Infrastructure', url: '/it-infrastructure', icon: Cloud, description: 'Robust IT infrastructure solutions' },
    { name: 'Cloud Services', url: '/cloud-infrastructure', icon: Cloud, description: 'Scalable cloud solutions' },
    { name: 'Cybersecurity', url: '/cybersecurity', icon: Shield, description: 'Advanced security solutions' },
    { name: 'IT Support', url: '/it-support', icon: Users, description: '24/7 IT support services' },
    { name: 'Network Solutions', url: '/network-solutions', icon: Globe, description: 'Enterprise network solutions' },
    { name: 'Data Management', url: '/data-management', icon: Database, description: 'Secure data management' }
  ];

  const emergingTech = [
    { name: 'Blockchain', url: '/blockchain', icon: Code, description: 'Blockchain technology solutions' },
    { name: 'Quantum Computing', url: '/quantum-computing', icon: Cpu, description: 'Quantum computing services' },
    { name: 'IoT & Edge Computing', url: '/iot-edge-computing', icon: Smartphone, description: 'IoT and edge solutions' },
    { name: 'AR/VR Solutions', url: '/ar-vr-solutions', icon: Globe, description: 'Augmented and virtual reality' },
    { name: 'Autonomous Systems', url: '/autonomous-systems', icon: Settings, description: 'Autonomous system development' },
    { name: '5G Implementation', url: '/5g-implementation', icon: Zap, description: '5G network implementation' }
  ];

  const microSaas = [
    { name: 'Micro SaaS Solutions', url: '/micro-saas', icon: Sparkles, description: 'Specialized SaaS applications' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Zap className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Home
            </Link>
            
            <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              About
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-6">
                    {/* AI Services */}
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
                        <Brain className="h-4 w-4 mr-2 text-blue-600" />
                        AI Services
                      </h3>
                      <ul className="space-y-2">
                        {aiServices.slice(0, 6).map((service, index) => (
                          <li key={index}>
                            <Link 
                              to={service.url} 
                              className="text-sm text-gray-600 hover:text-blue-600 transition-colors flex items-center"
                            >
                              <service.icon className="h-3 w-3 mr-2" />
                              {service.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* IT Services */}
                    <div>
                      <h3 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
                        <Cloud className="h-4 w-4 mr-2 text-blue-600" />
                        IT Services
                      </h3>
                      <ul className="space-y-2">
                        {itServices.slice(0, 6).map((service, index) => (
                          <li key={index}>
                            <Link 
                              to={service.url} 
                              className="text-sm text-gray-600 hover:text-blue-600 transition-colors flex items-center"
                            >
                              <service.icon className="h-3 w-3 mr-2" />
                              {service.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Emerging Technologies */}
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Emerging Tech
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="p-6">
                  <ul className="space-y-2">
                    {emergingTech.map((tech, index) => (
                      <li key={index}>
                        <Link 
                          to={tech.url} 
                          className="text-sm text-gray-600 hover:text-blue-600 transition-colors flex items-center"
                        >
                          <tech.icon className="h-4 w-4 mr-3" />
                          <div>
                            <div className="font-medium">{tech.name}</div>
                            <div className="text-xs text-gray-500">{tech.description}</div>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <Link to="/case-studies" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Case Studies
            </Link>
            
            <Link to="/blog" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Blog
            </Link>
            
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg rounded-lg mt-2">
              <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">
                Home
              </Link>
              <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">
                About
              </Link>
              
              {/* Mobile Services */}
              <div className="px-3 py-2">
                <button 
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center text-gray-700 hover:text-blue-600 font-medium w-full"
                >
                  Services
                  <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {servicesOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center">
                        <Brain className="h-4 w-4 mr-2 text-blue-600" />
                        AI Services
                      </h4>
                      <ul className="space-y-1">
                        {aiServices.slice(0, 4).map((service, index) => (
                          <li key={index}>
                            <Link 
                              to={service.url} 
                              className="text-sm text-gray-600 hover:text-blue-600 transition-colors block py-1"
                            >
                              {service.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900 mb-2 flex items-center">
                        <Cloud className="h-4 w-4 mr-2 text-blue-600" />
                        IT Services
                      </h4>
                      <ul className="space-y-1">
                        {itServices.slice(0, 4).map((service, index) => (
                          <li key={index}>
                            <Link 
                              to={service.url} 
                              className="text-sm text-gray-600 hover:text-blue-600 transition-colors block py-1"
                            >
                              {service.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              <Link to="/case-studies" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">
                Case Studies
              </Link>
              <Link to="/blog" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">
                Blog
              </Link>
              <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium">
                Contact
              </Link>
              
              <div className="px-3 py-2">
                <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;