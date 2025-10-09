'use client';
import React, { useState, useEffect, memo } from 'react';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Star, Settings, Calendar, CheckSquare, FileText } from 'lucide-react';

const Navigation: React.FC = memo(() => {
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
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      hoverColor: 'hover:bg-purple-500/20',
      services: [
        { name: 'AI Services', path: '/ai-services', description: 'Comprehensive AI solutions', icon: '🤖', popular: true },
        { name: 'AI Marketing', path: '/ai-marketing', description: 'AI-powered marketing automation', icon: '📢', popular: true },
        { name: 'AI Automation', path: '/ai-automation', description: 'Intelligent process automation', icon: '⚙️', popular: true },
        { name: 'AI Healthcare', path: '/ai-healthcare', description: 'Medical AI solutions', icon: '🏥', popular: true },
        { name: 'AI Fintech', path: '/ai-fintech', description: 'Financial AI applications', icon: '💰', popular: true },
        { name: 'AI Data Analytics', path: '/ai-data-analytics', description: 'Advanced data insights', icon: '📊', popular: true },
        { name: 'AI Cybersecurity', path: '/ai-cybersecurity', description: 'AI security solutions', icon: '🔐', popular: true },
        { name: 'AI Workflow Automation', path: '/ai-workflow-automation', description: 'Workflow optimization', icon: '🔄', popular: false },
        { name: 'AI Customer Support', path: '/ai-customer-support', description: 'AI-powered customer service', icon: '💬', popular: false },
        { name: 'AI Sales Automation', path: '/ai-sales-automation', description: 'Intelligent sales processes', icon: '📈', popular: false },
        { name: 'AI Data Visualization', path: '/ai-data-visualization', description: 'Advanced data visualization', icon: '📊', popular: false },
        { name: 'AI Lead Generation', path: '/ai-lead-generation', description: 'AI-powered lead generation', icon: '🎯', popular: false }
      ]
    },
    {
      title: 'Micro SAAS Solutions',
      icon: Zap,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      hoverColor: 'hover:bg-cyan-500/20',
      services: [
        { name: 'AI Project Manager', path: '/ai-project-manager', description: 'Intelligent project planning', icon: '📊', popular: true },
        { name: 'AI Social Media Manager', path: '/ai-social-media-manager', description: 'Automated social media management', icon: '📱', popular: true },
        { name: 'AI Analytics Dashboard', path: '/ai-analytics-dashboard', description: 'AI-powered business intelligence', icon: '📈', popular: true },
        { name: 'AI Email Marketing', path: '/ai-email-marketing', description: 'Intelligent email campaigns', icon: '📧', popular: true },
        { name: 'AI Customer Support Bot', path: '/ai-customer-support-bot', description: '24/7 AI customer support', icon: '🤖', popular: true },
        { name: 'AI Code Review Assistant', path: '/ai-code-generation', description: 'Automated code analysis', icon: '🔍', popular: false },
        { name: 'AI Content Generator', path: '/ai-content-generation', description: 'AI-powered content creation', icon: '✍️', popular: false },
        { name: 'AI SEO Optimizer', path: '/ai-seo-optimizer', description: 'AI-driven SEO optimization', icon: '🎯', popular: false },
        { name: 'AI Writing Assistant', path: '/ai-writing-assistant', description: 'AI-powered writing tool', icon: '✍️', popular: false },
        { name: 'AI Mobile App Builder', path: '/ai-mobile-app-builder', description: 'AI-assisted app development', icon: '📱', popular: false },
        { name: 'AI Design Studio', path: '/ai-design-studio', description: 'AI-powered design tool', icon: '🎨', popular: false },
        { name: 'AI Voice Cloning', path: '/ai-voice-cloning', description: 'AI voice synthesis', icon: '🎤', popular: false }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      hoverColor: 'hover:bg-blue-500/20',
      services: [
        { name: 'IT Services', path: '/it-services', description: 'Comprehensive IT support', icon: '💻', popular: true },
        { name: 'Cloud Migration', path: '/cloud-migration', description: 'Cloud migration & setup', icon: '☁️', popular: true },
        { name: 'Cybersecurity', path: '/cybersecurity', description: 'Security solutions', icon: '🔒', popular: true },
        { name: 'DevOps & CI/CD', path: '/devops-cicd', description: 'DevOps automation', icon: '⚙️', popular: true },
        { name: 'Database Management', path: '/database-management', description: 'Database management', icon: '🗄️', popular: true },
        { name: 'Network Solutions', path: '/network-solutions', description: 'Network infrastructure', icon: '🌐', popular: false },
        { name: 'System Administration', path: '/system-administration', description: 'System management', icon: '⚙️', popular: false },
        { name: 'IT Consulting', path: '/it-consulting', description: 'Strategic IT planning', icon: '💡', popular: false },
        { name: 'IT Support & Maintenance', path: '/it-support', description: '24/7 IT management', icon: '🛠️', popular: false },
        { name: 'IT Training & Certification', path: '/it-training', description: 'Staff development', icon: '🎓', popular: false }
      ]
    },
    {
      title: 'Specialized Solutions',
      icon: Sparkles,
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/10',
      hoverColor: 'hover:bg-pink-500/20',
      services: [
        { name: 'Quantum Computing', path: '/quantum-computing', description: 'Next-gen computing', icon: '⚛️', popular: true },
        { name: 'Autonomous Systems', path: '/autonomous-systems', description: 'Self-managing systems', icon: '🤖', popular: true },
        { name: 'Blockchain & Web3', path: '/blockchain-web3', description: 'Decentralized solutions', icon: '⛓️', popular: true },
        { name: 'IoT & Edge Computing', path: '/iot-edge-computing', description: 'Connected devices', icon: '🌐', popular: true },
        { name: 'Business Intelligence', path: '/business-intelligence', description: 'Data insights', icon: '📊', popular: false },
        { name: 'Robotics', path: '/robotics', description: 'Intelligent robotics', icon: '🤖', popular: false },
        { name: 'AR/VR Solutions', path: '/ar-vr-solutions', description: 'Immersive experiences', icon: '🥽', popular: false },
        { name: 'Smart Cities', path: '/smart-cities', description: 'Urban technology solutions', icon: '🏙️', popular: false }
      ]
    }
  ];

  const mainNavItems = [
    { name: 'Home', path: '/', icon: '🏠' },
    { name: 'About', path: '/about', icon: '👥' },
    { name: 'Services', path: '/services', icon: '⚙️' },
    { name: 'Case Studies', path: '/case-studies', icon: '📊' },
    { name: 'Blog', path: '/blog', icon: '📝' },
    { name: 'Contact', path: '/contact', icon: '📞' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-md border-b border-cyan-400/20' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-white cyber-text neon-pulse">Zion Tech Group</h1>
              <p className="text-xs text-cyan-400">AI & IT Solutions</p>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8">
            <a href="/" className="text-white hover:text-cyan-400 transition-colors font-medium">
              Home
            </a>
            <a href="/about" className="text-white hover:text-cyan-400 transition-colors font-medium">              
              About
            </a>

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
                <div className="absolute top-full left-0 mt-2 w-96 bg-slate-900/95 backdrop-blur-md border border-cyan-400/20 rounded-lg shadow-2xl transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white mb-4 neon-text">Our Services</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {serviceCategories.map((category, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex items-center space-x-2 mb-2">
                            <category.icon className={`w-4 h-4 ${category.color}`} />
                            <span className="text-sm font-semibold text-white">{category.title}</span>
                          </div>
                          <div className="space-y-2">
                            {category.services.slice(0, 6).map((service, serviceIndex) => (
                              <a
                                key={serviceIndex}
                                href={service.path}
                                className="block px-3 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-cyan-400 rounded-lg transition-colors"
                                onClick={closeAllMenus}
                              >
                                <div className="font-medium">{service.name}</div>
                                <div className="text-xs text-gray-500">
                                  {service.description}
                                </div>
                              </a>
                            ))}
                            {category.services.length > 6 && (
                              <a
                                href={`/${category.title.toLowerCase().replace(' ', '-')}`}
                                className="block px-3 py-2 text-sm text-purple-600 hover:bg-purple-50 rounded-lg transition-colors font-medium"
                                onClick={closeAllMenus}
                              >
                                View All →
                              </a>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="border-t border-gray-700 mt-6 pt-4">
                      <a
                        href="/services"
                        className="block w-full text-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all"
                        onClick={closeAllMenus}
                      >
                        View All Services
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <a 
              href="/case-studies" 
              className="font-medium transition-colors hover:text-cyan-400 text-white"
              onClick={closeAllMenus}
            >
              Case Studies
            </a>

            <a
              href="/blog"
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
              onClick={closeAllMenus}
            >
              Blog
            </a>

            <a
              href="/contact"
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
              onClick={closeAllMenus}
            >
              Contact
            </a>

            {/* CTA Button */}
            <a
              href="/contact"
              className="cyber-button inline-flex items-center"
              onClick={closeAllMenus}
            >
              <Phone className="w-4 h-4 mr-2" />
              (302) 464-0950
            </a>
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
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-cyan-400/20">
            <div className="px-4 py-6 space-y-6">
              {/* Main Navigation */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white mb-3 neon-text">Navigation</h3>
                {mainNavItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.path}
                    onClick={closeAllMenus}
                    className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2"
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="font-medium">{item.name}</span>
                  </a>
                ))}
              </div>

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
                  <div className="mt-2 ml-4 space-y-2">
                    {serviceCategories.map((category, categoryIndex) => (
                      <div key={categoryIndex}>
                        <div className="text-sm font-medium text-cyan-400 mb-2">{category.title}</div>
                        <div className="ml-4 space-y-1">
                          {category.services.slice(0, 3).map((service, serviceIndex) => (
                            <a
                              key={serviceIndex}
                              href={service.path}
                              className="block text-xs text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-1"
                            >
                              {service.icon} {service.name}
                            </a>
                          ))}
                          <a
                            href="/services"
                            className="block text-xs text-cyan-400 hover:text-cyan-300 transition-colors duration-300 py-1 font-medium"
                          >
                            View All →
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

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