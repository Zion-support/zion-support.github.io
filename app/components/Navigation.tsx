import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Star, Settings, Calendar, CheckSquare, FileText } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aiServicesOpen, setAiServicesOpen] = useState(false);
  const [itServicesOpen, setItServicesOpen] = useState(false);
  const [microSaasOpen, setMicroSaasOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
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
        { name: 'AI Automation', path: '/ai-workflow-automation', description: 'Intelligent process automation' },
        { name: 'AI Healthcare', path: '/ai-healthcare', description: 'Medical AI solutions' },
        { name: 'AI Fintech', path: '/ai-fintech', description: 'Financial AI applications' },
        { name: 'AI Content Generation', path: '/ai-content-generation', description: 'AI content creation' },
        { name: 'AI Data Analytics', path: '/ai-data-analytics', description: 'Advanced data insights' },
        { name: 'AI Cybersecurity', path: '/ai-cybersecurity', description: 'AI security solutions' },
        { name: 'AI Customer Support', path: '/ai-customer-support', description: 'AI-powered customer service' },
        { name: 'AI Sales Automation', path: '/ai-sales-automation', description: 'Intelligent sales processes' },
        { name: 'AI Data Visualization', path: '/ai-data-visualization', description: 'Advanced data visualization' },
        { name: 'AI Lead Generation', path: '/ai-lead-generation', description: 'AI-powered lead generation' },
        { name: 'AI Document Processing', path: '/ai-document-processing', description: 'AI document processing' },
        { name: 'AI Mobile Apps', path: '/ai-mobile-app-development', description: 'Mobile AI applications' },
        { name: 'AI E-commerce', path: '/ai-ecommerce-solutions', description: 'E-commerce AI solutions' }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      hoverColor: 'hover:bg-blue-100',
      services: [
        { name: 'IT Services', path: '/it-services', description: 'Comprehensive IT support' },
        { name: 'IT Infrastructure', path: '/it-infrastructure', description: 'Enterprise infrastructure' },
        { name: 'Cybersecurity', path: '/cybersecurity', description: 'Security solutions' },
        { name: 'DevOps & CI/CD', path: '/devops', description: 'Development operations' },
        { name: 'Database Services', path: '/database', description: 'Database management' },
        { name: 'Cloud Services', path: '/cloud-services', description: 'Cloud solutions' },
        { name: 'Networking', path: '/networking', description: 'Network infrastructure' },
        { name: 'IT Consulting', path: '/it-consulting', description: 'Strategic IT planning' },
        { name: 'Managed IT Services', path: '/managed-it', description: '24/7 IT management' }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: Zap,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      hoverColor: 'hover:bg-green-100',
      services: [
        { name: 'Micro SAAS Solutions', path: '/micro-saas', description: '50+ AI-powered tools' },
        { name: 'AI Writing Assistant', path: '/ai-writing-assistant', description: 'AI writing tool' },
        { name: 'Smart Analytics', path: '/smart-analytics', description: 'Business analytics' },
        { name: 'AI Scheduler', path: '/ai-scheduler', description: 'Smart scheduling' },
        { name: 'Expense Tracker', path: '/expense-tracker', description: 'Expense management' },
        { name: 'Task Manager Pro', path: '/task-manager-pro', description: 'Task management' },
        { name: 'CRM Lite', path: '/crm-lite', description: 'Customer management' },
        { name: 'Email Optimizer', path: '/email-optimizer', description: 'Email marketing' },
        { name: 'Social Media Manager', path: '/social-media-manager', description: 'Social media tools' },
        { name: 'AI Design Studio', path: '/ai-design-studio', description: 'Design tools' },
        { name: 'Landing Page Builder', path: '/landing-page-builder', description: 'Page builder' },
        { name: 'SEO Optimizer', path: '/seo-optimizer', description: 'SEO tools' },
        { name: 'Ad Campaign Manager', path: '/ad-campaign-manager', description: 'Ad management' },
        { name: 'Code Assistant', path: '/code-assistant', description: 'Development AI' },
        { name: 'API Builder', path: '/api-builder', description: 'API development' },
        { name: 'Bug Tracker Pro', path: '/bug-tracker-pro', description: 'Bug management' }
      ]
    },
    {
      title: 'Emerging Tech',
      icon: Sparkles,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      hoverColor: 'hover:bg-orange-100',
      services: [
        { name: 'Quantum Computing', path: '/quantum-computing', description: 'Quantum solutions' },
        { name: 'Robotics', path: '/robotics', description: 'Intelligent robotics' },
        { name: 'IoT & Edge Computing', path: '/iot-edge-computing', description: 'Connected devices' },
        { name: 'Blockchain & Web3', path: '/blockchain-web3', description: 'Decentralized solutions' },
        { name: 'Business Intelligence', path: '/business-intelligence', description: 'Data insights' },
        { name: 'Autonomous Systems', path: '/autonomous-systems', description: 'Self-managing systems' }
      ]
    }
  ];

  const mainNavItems = [
    { name: 'Home', path: '/', icon: Globe },
    { name: 'About', path: '/about', icon: Users },
    { name: 'Services', path: '/services', icon: Settings },
    { name: 'Contact', path: '/contact', icon: Phone },
    { name: 'Blog', path: '/blog', icon: FileText }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-md border-b border-cyan-500/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white cyber-text group-hover:text-cyan-400 transition-colors duration-300">
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {mainNavItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 group"
              >
                <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-medium">{item.name}</span>
              </Link>
            ))}

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Settings className="w-4 h-4" />
                <span className="font-medium">Services</span>
                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
              </button>

              {/* Mega Menu */}
              {servicesOpen && (
                <div
                  className="absolute top-full left-0 mt-2 w-screen max-w-6xl bg-slate-900/95 backdrop-blur-md border border-cyan-500/20 rounded-lg shadow-2xl cyber-card"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {serviceCategories.map((category, categoryIndex) => (
                        <div key={categoryIndex} className="space-y-4">
                          <div className="flex items-center space-x-2 mb-4">
                            <div className={`w-8 h-8 ${category.bgColor} rounded-lg flex items-center justify-center`}>
                              <category.icon className={`w-4 h-4 ${category.color}`} />
                            </div>
                            <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                          </div>
                          <div className="space-y-2">
                            {category.services.slice(0, 6).map((service, serviceIndex) => (
                              <Link
                                key={serviceIndex}
                                href={service.path}
                                className="block p-2 rounded-lg hover:bg-cyan-500/10 transition-colors duration-300 group"
                              >
                                <div className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors duration-300">
                                  {service.name}
                                </div>
                                <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                                  {service.description}
                                </div>
                              </Link>
                            ))}
                            {category.services.length > 6 && (
                              <Link
                                href={category.services[0].path}
                                className="block text-xs text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
                              >
                                View all {category.services.length} services →
                              </Link>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* CTA Section */}
                    <div className="mt-6 pt-6 border-t border-gray-700">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-2">Ready to get started?</h4>
                          <p className="text-sm text-gray-400">Contact us for a free consultation</p>
                        </div>
                        <div className="flex space-x-4">
                          <a
                            href="tel:+13024640950"
                            className="cyber-button flex items-center space-x-2"
                          >
                            <Phone className="w-4 h-4" />
                            <span>Call Now</span>
                          </a>
                          <a
                            href="mailto:kleber@ziontechgroup.com"
                            className="border-2 border-cyan-500 text-cyan-400 px-4 py-2 rounded-lg font-medium hover:bg-cyan-500 hover:text-slate-900 transition-all duration-300"
                          >
                            Email Us
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Contact Info */}
            <div className="flex items-center space-x-4 text-sm">
              <a
                href="tel:+13024640950"
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden xl:inline">(302) 464-0950</span>
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
              >
                <Mail className="w-4 h-4" />
                <span className="hidden xl:inline">Email</span>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-slate-800 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-900/95 backdrop-blur-md border-t border-cyan-500/20 cyber-card">
              {mainNavItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className="flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-slate-800 transition-colors duration-300"
                  onClick={closeAllMenus}
                >
                  <item.icon className="w-4 h-4" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              ))}

              {/* Mobile Services */}
              <div className="pt-4 border-t border-gray-700">
                <h3 className="px-3 py-2 text-sm font-semibold text-cyan-400 uppercase tracking-wider">
                  Services
                </h3>
                {serviceCategories.map((category, categoryIndex) => (
                  <div key={categoryIndex} className="space-y-1">
                    <div className="flex items-center space-x-2 px-3 py-2 text-white font-medium">
                      <category.icon className="w-4 h-4" />
                      <span>{category.title}</span>
                    </div>
                    <div className="pl-6 space-y-1">
                      {category.services.slice(0, 3).map((service, serviceIndex) => (
                        <Link
                          key={serviceIndex}
                          href={service.path}
                          className="block px-3 py-2 text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                          onClick={closeAllMenus}
                        >
                          {service.name}
                        </Link>
                      ))}
                      {category.services.length > 3 && (
                        <Link
                          href={category.services[0].path}
                          className="block px-3 py-2 text-xs text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                          onClick={closeAllMenus}
                        >
                          View all {category.services.length} services →
                        </Link>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile Contact */}
              <div className="pt-4 border-t border-gray-700">
                <div className="px-3 py-2 space-y-2">
                  <a
                    href="tel:+13024640950"
                    className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                  >
                    <Phone className="w-4 h-4" />
                    <span>(302) 464-0950</span>
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300"
                  >
                    <Mail className="w-4 h-4" />
                    <span>kleber@ziontechgroup.com</span>
                  </a>
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