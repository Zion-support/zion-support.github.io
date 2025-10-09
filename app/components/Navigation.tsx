'use client';
import React, { useState, useEffect, memo } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Star, Settings, Calendar, CheckSquare, FileText } from 'lucide-react';

const Navigation: React.FC = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
        setServicesOpen(false);
      }
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const closeAllMenus = () => {
    setIsOpen(false);
    setServicesOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setServicesOpen(false);
    }
  };

  const serviceCategories = [
    {
      title: 'AI Services',
      icon: Brain,
      color: 'text-cyan-400',
      services: [
        { name: 'AI Services', path: '/ai-services', description: 'Comprehensive AI solutions' },
        { name: 'AI Marketing', path: '/ai-marketing', description: 'AI-powered marketing automation' },
        { name: 'AI Automation', path: '/ai-automation', description: 'Intelligent process automation' },
        { name: 'AI Healthcare', path: '/ai-healthcare', description: 'Medical AI solutions' },
        { name: 'AI Fintech', path: '/ai-fintech', description: 'Financial AI applications' },
        { name: 'AI Content Generation', path: '/ai-content-generation', description: 'AI content creation' },
        { name: 'AI Analytics', path: '/ai-analytics', description: 'Advanced data insights' },
        { name: 'AI Cybersecurity', path: '/ai-cybersecurity', description: 'AI security solutions' },
        { name: 'AI Workflow Automation', path: '/ai-workflow-automation', description: 'Workflow optimization' },
        { name: 'AI Mobile Apps', path: '/ai-mobile-app-builder', description: 'Mobile AI applications' },
        { name: 'AI E-commerce', path: '/ai-ecommerce', description: 'E-commerce AI platforms' },
        { name: 'AI Customer Support', path: '/ai-customer-support', description: 'AI-powered customer service' },
        { name: 'AI Sales Automation', path: '/ai-sales-automation', description: 'Intelligent sales processes' },
        { name: 'AI Data Visualization', path: '/ai-data-visualization', description: 'Advanced data visualization' },
        { name: 'AI Lead Generation', path: '/ai-lead-generation', description: 'AI-powered lead generation' },
        { name: 'AI Document Processing', path: '/ai-document-processor', description: 'Intelligent document processing' },
        { name: 'AI Machine Learning', path: '/ai-ml-platform', description: 'Complete ML platform' },
        { name: 'AI Computer Vision', path: '/ai-image-recognition', description: 'Advanced computer vision' },
        { name: 'AI NLP', path: '/ai-nlp', description: 'Advanced NLP solutions' },
        { name: 'AI Robotics', path: '/ai-robotics', description: 'Intelligent robotics' },
        { name: 'AI R&D', path: '/ai-research', description: 'Custom AI R&D' },
        { name: 'AI Edge Computing', path: '/ai-edge', description: 'AI at the edge' }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      color: 'text-blue-400',
      services: [
        { name: 'IT Support', path: '/it-support', description: 'Comprehensive IT support' },
        { name: 'IT Infrastructure', path: '/it-infrastructure', description: 'Enterprise infrastructure' },
        { name: 'Cybersecurity', path: '/cybersecurity', description: 'Security solutions' },
        { name: 'Cloud Migration', path: '/cloud-migration', description: 'Cloud migration & setup' },
        { name: 'DevOps', path: '/devops', description: 'DevOps automation' },
        { name: 'Database Management', path: '/database-management', description: 'Database management' },
        { name: 'Network Infrastructure', path: '/network-infrastructure', description: 'Network infrastructure' },
        { name: 'System Management', path: '/system-management', description: 'System management' },
        { name: 'IT Consulting', path: '/it-consulting', description: 'Strategic IT planning' },
        { name: 'Managed IT', path: '/managed-it', description: '24/7 IT management' },
        { name: 'IT Training', path: '/it-training', description: 'Staff development' },
        { name: 'Custom Infrastructure', path: '/custom-infrastructure', description: 'Custom infrastructure' },
        { name: 'IT Monitoring', path: '/it-monitoring', description: 'Real-time monitoring' },
        { name: 'Disaster Recovery', path: '/disaster-recovery', description: 'Disaster recovery' },
        { name: 'IT Automation', path: '/it-automation', description: 'IT process automation' },
        { name: 'Global Support', path: '/global-support', description: 'Worldwide support' }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: Code,
      color: 'text-purple-400',
      services: [
        { name: 'AI CRM', path: '/ai-crm', description: 'Intelligent CRM with AI insights' },
        { name: 'Business Intelligence', path: '/ai-business-intelligence', description: 'Real-time business intelligence' },
        { name: 'Content Studio', path: '/ai-content-studio', description: 'Complete content creation suite' },
        { name: 'Chatbot Builder', path: '/ai-chatbot-builder', description: 'No-code chatbot creation' },
        { name: 'Email Marketing', path: '/ai-email-marketing', description: 'Automated email campaigns' },
        { name: 'App Builder', path: '/ai-mobile-app-builder', description: 'AI-assisted app development' },
        { name: 'SEO Optimizer', path: '/ai-seo-optimizer', description: 'Automated SEO analysis' },
        { name: 'Invoice Generator', path: '/ai-invoice-generator', description: 'Automated invoicing' },
        { name: 'Lead Qualification', path: '/ai-lead-qualification', description: 'Intelligent lead qualification' },
        { name: 'Sales Predictions', path: '/ai-sales-predictions', description: 'Advanced sales predictions' },
        { name: 'E-commerce Optimization', path: '/ai-ecommerce-optimization', description: 'E-commerce optimization' },
        { name: 'Design Studio', path: '/ai-design-studio', description: 'AI-powered design tool' },
        { name: 'Document Processor', path: '/ai-document-processor', description: 'Intelligent document processing' },
        { name: 'Security Monitor', path: '/ai-security-monitor', description: 'Real-time security monitoring' },
        { name: 'Performance Tracker', path: '/ai-performance-tracker', description: 'Comprehensive performance tracking' },
        { name: 'Voice Assistant', path: '/ai-voice-assistant', description: 'Custom voice assistants' },
        { name: 'Social Media Manager', path: '/ai-social-media-manager', description: 'Automated social media' },
        { name: 'HR Assistant', path: '/ai-hr-assistant', description: 'Intelligent HR management' },
        { name: 'Inventory Management', path: '/ai-inventory-management', description: 'Smart inventory management' },
        { name: 'Customer Insights', path: '/ai-customer-insights', description: 'Deep customer insights' },
        { name: 'Process Automation', path: '/ai-process-automation', description: 'Process automation' },
        { name: 'A/B Testing', path: '/ai-ab-testing', description: 'Advanced A/B testing' },
        { name: 'Predictive Analytics', path: '/ai-predictive-analytics', description: 'Future outcome predictions' }
      ]
    },
    {
      title: 'Emerging Tech',
      icon: Zap,
      color: 'text-yellow-400',
      services: [
        { name: 'Quantum Computing', path: '/quantum-computing', description: 'Next-gen computing' },
        { name: 'Autonomous Systems', path: '/autonomous-systems', description: 'Self-managing systems' },
        { name: 'Blockchain Solutions', path: '/blockchain-solutions', description: 'Decentralized solutions' },
        { name: 'IoT Solutions', path: '/iot-solutions', description: 'Connected devices' },
        { name: 'Big Data Analytics', path: '/big-data-analytics', description: 'Data-driven insights' },
        { name: 'Robotics', path: '/robotics', description: 'Intelligent robots' },
        { name: 'AR/VR Solutions', path: '/ar-vr-solutions', description: 'Immersive experiences' },
        { name: 'Smart Cities', path: '/smart-cities', description: 'Urban technology solutions' },
        { name: 'Digital Transformation', path: '/digital-transformation', description: 'Business modernization' },
        { name: 'R&D Services', path: '/rd-services', description: 'R&D and prototyping' },
        { name: 'Green Tech', path: '/green-tech', description: 'Green technology solutions' },
        { name: 'Future Tech', path: '/future-tech', description: 'Emerging tech solutions' }
      ]
    }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-white cyber-text neon-pulse">Zion Tech Group</h1>
              <p className="text-xs text-cyan-400">AI & IT Solutions</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8">
            <Link to="/" className="text-white hover:text-cyan-400 transition-colors font-medium">
              Home
            </Link>
            <Link to="/about" className="text-white hover:text-cyan-400 transition-colors font-medium">
              About
            </Link>
            <Link to="/services" className="text-white hover:text-cyan-400 transition-colors font-medium cyber-glow">
              All Services
            </Link>
            <Link to="/pricing" className="text-white hover:text-cyan-400 transition-colors font-medium cyber-glow">
              Pricing
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center space-x-1 font-medium transition-colors hover:text-cyan-400 text-white"
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                <Brain className="w-4 h-4" />
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-screen max-w-6xl bg-slate-900/95 backdrop-blur-md rounded-lg shadow-xl border border-gray-700/50 p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {serviceCategories.map((category, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center space-x-2 mb-2">
                          <category.icon className={`w-4 h-4 ${category.color}`} />
                          <span className="text-sm font-semibold text-white">{category.title}</span>
                        </div>
                        <div className="space-y-2">
                          {category.services.slice(0, 6).map((service, serviceIndex) => (
                            <Link
                              key={serviceIndex}
                              to={service.path}
                              className="block px-3 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-cyan-400 rounded-lg transition-colors"
                              onClick={closeAllMenus}
                            >
                              <div className="font-medium">{service.name}</div>
                              <div className="text-xs text-gray-500 group-hover:text-purple-500">
                                {service.description}
                              </div>
                            </Link>
                          ))}
                          {category.services.length > 6 && (
                            <Link
                              to={`/${category.title.toLowerCase().replace(' ', '-')}`}
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
                  <div className="border-t border-gray-700 mt-6 pt-4 px-6">
                    <Link
                      to="/services"
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
              to="/case-studies"
              className="font-medium transition-colors hover:text-cyan-400 text-white"
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

            {/* CTA Button */}
            <Link
              to="/contact"
              className="cyber-button inline-flex items-center"
              onClick={closeAllMenus}
            >
              <Phone className="w-4 h-4 mr-2" />
              (302) 464-0950
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-gray-700/50">
            <div className="px-4 py-6 space-y-4">
              <Link
                to="/"
                className="block px-3 py-2 text-base font-medium text-white hover:text-cyan-400 hover:bg-gray-800 rounded-md"
                onClick={closeAllMenus}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-base font-medium text-white hover:text-cyan-400 hover:bg-gray-800 rounded-md"
                onClick={closeAllMenus}
              >
                About
              </Link>
              <Link
                to="/services"
                className="block px-3 py-2 text-base font-medium text-white hover:text-cyan-400 hover:bg-gray-800 rounded-md"
                onClick={closeAllMenus}
              >
                All Services
              </Link>
              <Link
                to="/pricing"
                className="block px-3 py-2 text-base font-medium text-white hover:text-cyan-400 hover:bg-gray-800 rounded-md"
                onClick={closeAllMenus}
              >
                Pricing
              </Link>

              {/* Mobile Services */}
              <div>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-white hover:text-cyan-400 hover:bg-gray-800 rounded-md"
                >
                  <span className="flex items-center space-x-2">
                    <Brain className="w-4 h-4" />
                    <span>Services</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {servicesOpen && (
                  <div className="ml-4 mt-2 space-y-4">
                    {serviceCategories.map((category, categoryIndex) => (
                      <div key={categoryIndex}>
                        <div className="text-sm font-medium text-cyan-400 mb-2">{category.title}</div>
                        <div className="ml-4 space-y-1">
                          {category.services.slice(0, 4).map((service, serviceIndex) => (
                            <Link
                              key={serviceIndex}
                              to={service.path}
                              className="block text-xs text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-1"
                            >
                              {service.name}
                            </Link>
                          ))}
                          <Link
                            to="/services"
                            className="block text-xs text-cyan-400 hover:text-cyan-300 transition-colors duration-300 py-1 font-medium"
                          >
                            View All →
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <Link
                to="/case-studies"
                className="block px-3 py-2 text-base font-medium text-white hover:text-cyan-400 hover:bg-gray-800 rounded-md"
                onClick={closeAllMenus}
              >
                Case Studies
              </Link>

              <Link
                to="/blog"
                className="block px-3 py-2 text-base font-medium text-white hover:text-cyan-400 hover:bg-gray-800 rounded-md"
                onClick={closeAllMenus}
              >
                Blog
              </Link>

              <Link
                to="/contact"
                className="block px-3 py-2 text-base font-medium text-white hover:text-cyan-400 hover:bg-gray-800 rounded-md"
                onClick={closeAllMenus}
              >
                Contact
              </Link>

              <a
                href="tel:+13024640950"
                className="block w-full text-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all mt-4"
                onClick={closeAllMenus}
              >
                <Phone className="w-4 h-4 inline mr-2" />
                (302) 464-0950
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
});

Navigation.displayName = 'Navigation';
export default Navigation;