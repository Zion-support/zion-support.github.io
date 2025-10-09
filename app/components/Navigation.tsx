'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Star, Settings, Calendar, CheckSquare, FileText, MessageSquare, Key, Rocket, Globe as GlobeIcon } from 'lucide-react';

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
        { name: 'AI Automation', path: '/ai-automation', description: 'Intelligent process automation' },
        { name: 'AI Healthcare', path: '/ai-healthcare', description: 'Medical AI solutions' },
        { name: 'AI Fintech', path: '/ai-fintech', description: 'Financial AI applications' },
        { name: 'AI Content Generation', path: '/ai-content-generation', description: 'AI content creation' },
        { name: 'AI Data Analytics', path: '/ai-data-analytics', description: 'Advanced data insights' },
        { name: 'AI Cybersecurity', path: '/ai-cybersecurity', description: 'AI security solutions' },
        { name: 'AI Workflow Automation', path: '/ai-workflow-automation', description: 'Workflow optimization' },
        { name: 'AI Mobile App Development', path: '/ai-mobile-app-development', description: 'Mobile AI applications' },
        { name: 'AI E-commerce Solutions', path: '/ai-ecommerce-solutions', description: 'E-commerce AI platforms' },
        { name: 'AI Customer Support', path: '/ai-customer-support', description: 'AI-powered customer service' },
        { name: 'AI Sales Automation', path: '/ai-sales-automation', description: 'Intelligent sales processes' },
        { name: 'AI Data Visualization', path: '/ai-data-visualization', description: 'Advanced data visualization' },
        { name: 'AI Lead Generation', path: '/ai-lead-generation', description: 'AI-powered lead generation' },
        { name: 'AI Document Processing', path: '/ai-document-processing', description: 'Intelligent document processing' },
        { name: 'AI Voice Cloning', path: '/ai-voice-cloning', description: 'Advanced voice synthesis' },
        { name: 'AI 3D Generation', path: '/ai-3d-generation', description: 'AI-powered 3D modeling' },
        { name: 'AI Fashion Design', path: '/ai-fashion-design', description: 'AI fashion and design' },
        { name: 'AI Music Composition', path: '/ai-music-composition', description: 'AI music creation' },
        { name: 'AI Video Generation', path: '/ai-video-generation', description: 'AI video production' },
        { name: 'AI Writing Assistant', path: '/ai-writing-assistant', description: 'AI writing tools' },
        { name: 'AI Scheduler', path: '/ai-scheduler', description: 'Intelligent scheduling' },
        { name: 'AI Fitness Coach', path: '/ai-fitness-coach', description: 'AI fitness guidance' },
        { name: 'AI Email Assistant', path: '/ai-email-assistant', description: 'AI email management' },
        { name: 'AI Chatbot Builder', path: '/ai-chatbot-builder', description: 'No-code chatbot creation' },
        { name: 'AI Code Generation', path: '/ai-code-generation', description: 'AI-assisted coding' },
        { name: 'AI Predictive Analytics', path: '/ai-predictive-analytics', description: 'Future outcome predictions' }
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
        { name: 'Managed IT Services', path: '/managed-it', description: '24/7 IT management' },
        { name: 'System Integration', path: '/system-integration', description: 'API & system integration' },
        { name: 'Data Backup & Recovery', path: '/data-backup-recovery', description: 'Disaster recovery' },
        { name: 'Enterprise Solutions', path: '/enterprise-solutions', description: 'Large-scale solutions' },
        { name: 'Identity & Access Management', path: '/identity-access-management', description: 'Security & access control' },
        { name: 'Performance Optimization', path: '/performance-optimization', description: 'System tuning' },
        { name: 'Global IT Services', path: '/global-it-services', description: 'Worldwide IT support' },
        { name: 'IT Training & Certification', path: '/it-training-certification', description: 'Professional development' }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: Code,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      hoverColor: 'hover:bg-green-100',
      services: [
        { name: 'Micro SAAS Solutions', path: '/micro-saas', description: '100+ ready-to-use apps' },
        { name: 'AI Password Manager', path: '/ai-password-manager', description: 'AI-powered password security' },
        { name: 'AI Growth Hacker', path: '/ai-growth-hacker', description: 'AI growth marketing platform' },
        { name: 'AI Live Chat', path: '/ai-live-chat', description: 'Intelligent customer support' },
        { name: 'AI Website Builder', path: '/ai-website-builder', description: 'AI website creation' },
        { name: 'AI A/B Testing', path: '/ai-ab-testing', description: 'AI-powered testing platform' },
        { name: 'AI-Powered CRM', path: '/ai-crm', description: 'Intelligent customer management' },
        { name: 'AI Analytics Dashboard', path: '/ai-analytics-dashboard', description: 'Business intelligence' },
        { name: 'AI Content Studio', path: '/ai-content-studio', description: 'Content creation suite' },
        { name: 'AI Chatbot Builder', path: '/ai-chatbot-builder', description: 'No-code chatbot creation' },
        { name: 'AI Email Marketing', path: '/ai-email-marketing', description: 'Automated email campaigns' },
        { name: 'AI Mobile App Builder', path: '/ai-mobile-builder', description: 'Drag-and-drop app builder' },
        { name: 'AI SEO Optimizer', path: '/ai-seo-optimizer', description: 'Automated SEO analysis' },
        { name: 'AI Invoice Generator', path: '/ai-invoice-generator', description: 'Automated invoicing' },
        { name: 'AI Lead Scoring', path: '/ai-lead-scoring', description: 'Intelligent lead qualification' },
        { name: 'AI Social Media Manager', path: '/ai-social-media-manager', description: 'Social media automation' },
        { name: 'AI E-commerce Assistant', path: '/ai-ecommerce-assistant', description: 'E-commerce optimization' },
        { name: 'AI Document Processor', path: '/ai-document-processor', description: 'Intelligent document processing' },
        { name: 'AI Design Studio', path: '/ai-design-studio', description: 'AI-powered design tools' },
        { name: 'AI Security Monitor', path: '/ai-security-monitor', description: 'Real-time security monitoring' },
        { name: 'AI Financial Planner', path: '/ai-financial-planner', description: 'Financial planning & analysis' },
        { name: 'AI Health Tracker', path: '/ai-health-tracker', description: 'Personal health monitoring' },
        { name: 'AI Learning Platform', path: '/ai-learning-platform', description: 'Personalized learning' },
        { name: 'AI Code Generator', path: '/ai-code-generator', description: 'AI-assisted coding' },
        { name: 'AI Video Creator', path: '/ai-video-creator', description: 'Automated video production' },
        { name: 'AI Music Composer', path: '/ai-music-composer', description: 'AI music generation' },
        { name: 'AI App Builder', path: '/ai-app-builder', description: 'Native app development' },
        { name: 'AI Market Research', path: '/ai-market-research', description: 'Automated market analysis' },
        { name: 'AI Store Optimizer', path: '/ai-store-optimizer', description: 'E-commerce optimization' },
        { name: 'AI Data Pipeline', path: '/ai-data-pipeline', description: 'Automated data processing' },
        { name: 'AI A/B Testing', path: '/ai-ab-testing', description: 'Intelligent testing' },
        { name: 'AI Live Chat', path: '/ai-live-chat', description: 'Intelligent customer chat' },
        { name: 'AI Growth Hacker', path: '/ai-growth-hacker', description: 'Automated growth strategies' },
        { name: 'AI Password Manager', path: '/ai-password-manager', description: 'Secure password management' }
      ]
    },
    {
      title: 'Emerging Tech',
      icon: Zap,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      hoverColor: 'hover:bg-orange-100',
      services: [
        { name: 'Quantum Computing', path: '/quantum-computing', description: 'Next-gen computing' },
        { name: 'Robotics & Automation', path: '/robotics', description: 'Intelligent robotics' },
        { name: 'IoT & Edge Computing', path: '/iot-edge-computing', description: 'Connected devices' },
        { name: 'Blockchain & Web3', path: '/blockchain-web3', description: 'Decentralized solutions' },
        { name: 'Business Intelligence', path: '/business-intelligence', description: 'Data-driven insights' },
        { name: 'Autonomous Systems', path: '/autonomous-systems', description: 'Self-managing systems' },
        { name: 'AR/VR Solutions', path: '/ar-vr-solutions', description: 'Immersive experiences' },
        { name: 'Smart Cities', path: '/smart-cities', description: 'Urban technology solutions' },
        { name: 'Digital Transformation', path: '/digital-transformation', description: 'Business modernization' },
        { name: 'Innovation Labs', path: '/innovation-labs', description: 'R&D and prototyping' },
        { name: 'Sustainability Tech', path: '/sustainability-tech', description: 'Green technology solutions' }
      ]
    }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white neon-text">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-cyan-400 transition-colors">
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1 text-white hover:text-cyan-400 transition-colors">
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              <div className="absolute top-full left-0 mt-2 w-screen max-w-6xl bg-slate-900/95 backdrop-blur-md rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {serviceCategories.map((category, index) => (
                      <div key={index} className="space-y-4">
                        <div className="flex items-center space-x-2 mb-4">
                          <category.icon className={`w-5 h-5 ${category.color}`} />
                          <h3 className={`text-lg font-semibold ${category.color}`}>{category.title}</h3>
                        </div>
                        <ul className="space-y-2">
                          {category.services.slice(0, 8).map((service, serviceIndex) => (
                            <li key={serviceIndex}>
                              <Link 
                                href={service.path}
                                className="block p-2 rounded-lg text-gray-300 hover:text-white hover:bg-slate-800 transition-all duration-200 group"
                              >
                                <div className="flex items-center justify-between">
                                  <span className="text-sm font-medium">{service.name}</span>
                                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                                <p className="text-xs text-gray-500 mt-1">{service.description}</p>
                              </Link>
                            </li>
                          ))}
                          {category.services.length > 8 && (
                            <li>
                              <Link 
                                href={`/${category.title.toLowerCase().replace(' ', '-')}`}
                                className="block p-2 rounded-lg text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                              >
                                View All {category.title} →
                              </Link>
                            </li>
                          )}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <Link href="/about" className="text-white hover:text-cyan-400 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-white hover:text-cyan-400 transition-colors">
              Contact
            </Link>
            <Link href="/pricing" className="text-white hover:text-cyan-400 transition-colors">
              Pricing
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
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-md rounded-lg mt-2 p-4">
            <div className="space-y-4">
              <Link href="/" className="block text-white hover:text-cyan-400 transition-colors">
                Home
              </Link>
              
              {/* Mobile Services */}
              <div className="space-y-2">
                <div className="text-white font-semibold">Services</div>
                {serviceCategories.map((category, index) => (
                  <div key={index} className="ml-4 space-y-1">
                    <div className="flex items-center space-x-2 text-cyan-400 font-medium">
                      <category.icon className="w-4 h-4" />
                      <span>{category.title}</span>
                    </div>
                    <ul className="ml-4 space-y-1">
                      {category.services.slice(0, 5).map((service, serviceIndex) => (
                        <li key={serviceIndex}>
                          <Link 
                            href={service.path}
                            className="block text-gray-300 hover:text-white transition-colors text-sm"
                          >
                            {service.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <Link href="/about" className="block text-white hover:text-cyan-400 transition-colors">
                About
              </Link>
              <Link href="/contact" className="block text-white hover:text-cyan-400 transition-colors">
                Contact
              </Link>
              <Link href="/pricing" className="block text-white hover:text-cyan-400 transition-colors">
                Pricing
              </Link>
              
              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-gray-700">
                <a 
                  href="tel:+13024640950" 
                  className="flex items-center space-x-2 text-white hover:text-cyan-400 transition-colors mb-2"
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
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
