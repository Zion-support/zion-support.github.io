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
  Star,
  TrendingUp,
  Settings,
  Globe,
  Target,
  Database,
  Smartphone,
  Lock,
  PanelLeft
} from 'lucide-react';

interface NavigationProps {
  onSidebarToggle?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onSidebarToggle }) => {
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
        { name: 'AI Services', path: '/ai-services', description: 'Comprehensive AI solutions', featured: true },
        { name: 'AI Marketing', path: '/ai-marketing', description: 'AI-powered marketing automation', featured: true },
        { name: 'AI Automation', path: '/ai-automation', description: 'Intelligent process automation', featured: true },
        { name: 'AI Healthcare', path: '/ai-healthcare', description: 'Medical AI solutions' },
        { name: 'AI Fintech', path: '/ai-fintech', description: 'Financial AI applications' },
        { name: 'AI Content Generation', path: '/ai-content-generation', description: 'AI content creation' },
        { name: 'AI Data Analytics', path: '/ai-data-analytics', description: 'Advanced data insights' },
        { name: 'AI Data Visualization', path: '/ai-data-visualization', description: 'Interactive data visualization' },
        { name: 'AI E-commerce Solutions', path: '/ai-ecommerce-solutions', description: 'E-commerce AI platforms' },
        { name: 'AI Mobile App Development', path: '/ai-mobile-app-development', description: 'Mobile AI applications' },
        { name: 'AI Sales Automation', path: '/ai-sales-automation', description: 'Sales process automation' },
        { name: 'AI Workflow Automation', path: '/ai-workflow-automation', description: 'Workflow optimization' },
        { name: 'AI Customer Support', path: '/ai-customer-support', description: 'AI-powered customer service' }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      hoverColor: 'hover:bg-blue-100',
      services: [
        { name: 'IT Services', path: '/it-services', description: 'Comprehensive IT support', featured: true },
        { name: 'IT Infrastructure', path: '/it-infrastructure', description: 'Enterprise infrastructure', featured: true },
        { name: 'Cloud Services', path: '/cloud-services', description: 'Cloud migration & setup', featured: true },
        { name: 'Cybersecurity', path: '/cybersecurity', description: 'Security solutions' },
        { name: 'DevOps', path: '/devops', description: 'DevOps automation' },
        { name: 'Database Services', path: '/database', description: 'Database management' },
        { name: 'Network Services', path: '/networking', description: 'Network infrastructure' },
        { name: 'Compliance', path: '/compliance', description: 'Regulatory compliance' }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: Code,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      hoverColor: 'hover:bg-green-100',
      services: [
        { name: 'Micro SAAS Solutions', path: '/micro-saas', description: '50+ ready-to-use apps', featured: true },
        { name: 'Business Apps', path: '/business-apps', description: 'Productivity applications' },
        { name: 'Developer Tools', path: '/developer-tools', description: 'AI-powered dev tools' },
        { name: 'Marketing Tools', path: '/marketing-tools', description: 'Marketing automation' },
        { name: 'Productivity', path: '/productivity', description: 'Productivity enhancement tools' }
      ]
    },
    {
      title: 'Emerging Tech',
      icon: Zap,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      hoverColor: 'hover:bg-orange-100',
      services: [
        { name: 'Quantum Computing', path: '/quantum-computing', description: 'Next-gen computing', featured: true },
        { name: 'Autonomous Systems', path: '/autonomous-systems', description: 'Self-managing systems' },
        { name: 'Blockchain & Web3', path: '/blockchain-web3', description: 'Decentralized solutions' },
        { name: 'IoT & Edge Computing', path: '/iot-edge-computing', description: 'Connected devices' },
        { name: 'Business Intelligence', path: '/business-intelligence', description: 'Data-driven insights' },
        { name: 'Robotics', path: '/robotics', description: 'Intelligent robots' }
      ]
    }
  ];

  const companyLinks = [
    { name: 'About Us', path: '/about', description: 'Our story and mission' },
    { name: 'Our Team', path: '/team', description: 'Meet our experts' },
    { name: 'Case Studies', path: '/case-studies', description: 'Success stories' },
    { name: 'Careers', path: '/careers', description: 'Join our team' },
    { name: 'News', path: '/news', description: 'Latest updates' }
  ];

  const supportLinks = [
    { name: 'Documentation', path: '/docs', description: 'Technical guides' },
    { name: 'API Reference', path: '/api-docs', description: 'API documentation' },
    { name: 'Support Center', path: '/support', description: 'Get help' },
    { name: 'Status Page', path: '/status', description: 'System status' },
    { name: 'Contact Us', path: '/contact', description: 'Get in touch' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-2 text-2xl font-bold"
            onClick={closeAllMenus}
          >
            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link
              href="/"
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
              onClick={closeAllMenus}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-[900px] bg-white rounded-xl shadow-2xl border border-gray-200 py-6 z-50">
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
                          {category.services.slice(0, 6).map((service, serviceIndex) => (
                            <Link
                              key={serviceIndex}
                              href={service.path}
                              className={`block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-purple-600 rounded-lg transition-colors group ${
                                service.featured ? 'bg-purple-50 border-l-2 border-purple-200' : ''
                              }`}
                              onClick={closeAllMenus}
                            >
                              <div className="font-medium flex items-center">
                                {service.name}
                                {service.featured && <Star className="w-3 h-3 ml-1 text-purple-500" />}
                              </div>
                              <div className="text-xs text-gray-500 group-hover:text-purple-500">
                                {service.description}
                              </div>
                            </Link>
                          ))}
                          {category.services.length > 6 && (
                            <Link
                              href={`/${category.title.toLowerCase().replace(' ', '-')}`}
                              className="block px-3 py-2 text-sm text-purple-600 hover:bg-purple-50 rounded-lg transition-colors font-medium"
                              onClick={closeAllMenus}
                            >
                              View All →
                            </Link>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t border-gray-200 mt-6 pt-4 px-6">
                    <Link
                      href="/services"
                      className="block w-full text-center bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all"
                      onClick={closeAllMenus}
                    >
                      View All Services
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Company Dropdown */}
            <div className="relative">
              <button
                onClick={() => setAiServicesOpen(!aiServicesOpen)}
                className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
                aria-expanded={aiServicesOpen}
                aria-haspopup="true"
              >
                <span>Company</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${aiServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {aiServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-200 py-4 z-50">
                  <div className="px-4 space-y-2">
                    {companyLinks.map((link, index) => (
                      <Link
                        key={index}
                        href={link.path}
                        className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-purple-600 rounded-lg transition-colors group"
                        onClick={closeAllMenus}
                      >
                        <div className="font-medium">{link.name}</div>
                        <div className="text-xs text-gray-500 group-hover:text-purple-500">
                          {link.description}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Support Dropdown */}
            <div className="relative">
              <button
                onClick={() => setItServicesOpen(!itServicesOpen)}
                className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
                aria-expanded={itServicesOpen}
                aria-haspopup="true"
              >
                <span>Support</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${itServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {itServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-200 py-4 z-50">
                  <div className="px-4 space-y-2">
                    {supportLinks.map((link, index) => (
                      <Link
                        key={index}
                        href={link.path}
                        className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-purple-600 rounded-lg transition-colors group"
                        onClick={closeAllMenus}
                      >
                        <div className="font-medium">{link.name}</div>
                        <div className="text-xs text-gray-500 group-hover:text-purple-500">
                          {link.description}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <Link
              href="/blog"
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
              onClick={closeAllMenus}
            >
              Blog
            </Link>
            
            {/* CTA Button */}
            <Link 
              href="/contact" 
              className="cyber-button inline-flex items-center"
              onClick={closeAllMenus}
            >
              Get Started
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          {/* Sidebar Toggle Button (Desktop) */}
          <button
            onClick={onSidebarToggle}
            className="hidden lg:block text-white hover:text-cyan-400 transition-colors duration-200 p-2"
            aria-label="Toggle sidebar"
          >
            <PanelLeft className="w-6 h-6" />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-white hover:text-cyan-400 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-md rounded-lg mt-2 p-4">
            <div className="space-y-4">
              <Link
                href="/"
                className="block text-white hover:text-cyan-400 transition-colors duration-200 font-medium py-2"
                onClick={closeAllMenus}
              >
                Home
              </Link>

              {/* Mobile Services */}
              <div>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center justify-between w-full text-white hover:text-cyan-400 transition-colors duration-200 font-medium py-2"
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {servicesOpen && (
                  <div className="ml-4 space-y-2 mt-2">
                    {serviceCategories.map((category, categoryIndex) => (
                      <div key={categoryIndex} className="space-y-1">
                        <div className="text-cyan-400 font-semibold text-sm">{category.title}</div>
                        <div className="ml-4 space-y-1">
                          {category.services.slice(0, 4).map((service, serviceIndex) => (
                            <Link
                              key={serviceIndex}
                              href={service.path}
                              className="block text-gray-300 hover:text-cyan-400 transition-colors duration-200 py-1 text-sm"
                              onClick={closeAllMenus}
                            >
                              {service.name}
                              {service.featured && <Star className="w-3 h-3 inline ml-1 text-yellow-400" />}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Company */}
              <div>
                <button
                  onClick={() => setAiServicesOpen(!aiServicesOpen)}
                  className="flex items-center justify-between w-full text-white hover:text-cyan-400 transition-colors duration-200 font-medium py-2"
                >
                  <span>Company</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${aiServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {aiServicesOpen && (
                  <div className="ml-4 space-y-1 mt-2">
                    {companyLinks.map((link, index) => (
                      <Link
                        key={index}
                        href={link.path}
                        className="block text-gray-300 hover:text-cyan-400 transition-colors duration-200 py-1 text-sm"
                        onClick={closeAllMenus}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Support */}
              <div>
                <button
                  onClick={() => setItServicesOpen(!itServicesOpen)}
                  className="flex items-center justify-between w-full text-white hover:text-cyan-400 transition-colors duration-200 font-medium py-2"
                >
                  <span>Support</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${itServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {itServicesOpen && (
                  <div className="ml-4 space-y-1 mt-2">
                    {supportLinks.map((link, index) => (
                      <Link
                        key={index}
                        href={link.path}
                        className="block text-gray-300 hover:text-cyan-400 transition-colors duration-200 py-1 text-sm"
                        onClick={closeAllMenus}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              
              <Link
                href="/blog"
                className="block text-white hover:text-cyan-400 transition-colors duration-200 font-medium py-2"
                onClick={closeAllMenus}
              >
                Blog
              </Link>
              
              {/* Mobile CTA */}
              <Link
                href="/contact"
                className="block bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-medium transition-colors text-center mt-4"
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
