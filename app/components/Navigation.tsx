import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
import Link from 'next/link';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Star, Settings, Calendar, CheckSquare, FileText, MessageSquare, Eye, Bot, Share2, Mail as EmailIcon, BarChart3, Projector, Headphones } from 'lucide-react';

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
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aiServicesOpen, setAiServicesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

>>>>>>> origin/cursor/analyze-improve-and-deploy-application-fd65
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
        { name: 'AI SEO Optimizer', path: '/ai-marketing', description: 'AI-driven SEO optimization', icon: '🎯', popular: false }
      ]
    },
    {
      title: 'AI Services',
      icon: Brain,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      hoverColor: 'hover:bg-purple-500/20',
      services: [
<<<<<<< HEAD
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
        { name: 'AI Voice Cloning', path: '/ai-voice-cloning', description: 'AI voice synthesis' },
        { name: 'AI Video Generation', path: '/ai-video-generation', description: 'AI video creation' },
        { name: 'AI 3D Generation', path: '/ai-3d-generation', description: 'AI 3D modeling' },
        { name: 'AI Fashion Design', path: '/ai-fashion-design', description: 'AI fashion solutions' },
        { name: 'AI Music Composition', path: '/ai-music-composition', description: 'AI music creation' },
        { name: 'AI Scheduler', path: '/ai-scheduler', description: 'Intelligent scheduling' },
        { name: 'AI Fitness Coach', path: '/ai-fitness-coach', description: 'AI fitness training' },
        { name: 'AI Email Assistant', path: '/ai-email-assistant', description: 'AI email management' }
      ]
    },
    {
      title: 'IT Services',
      icon: Cloud,
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      hoverColor: 'hover:bg-blue-500/20',
      services: [
<<<<<<< HEAD
        { name: 'IT Services', path: '/it-services', description: 'Comprehensive IT support' },
        { name: 'IT Infrastructure', path: '/it-infrastructure', description: 'Enterprise infrastructure' },
<<<<<<< HEAD
        { name: 'Cybersecurity', path: '/cybersecurity', description: 'Security solutions' },
        { name: 'Cloud Migration', path: '/cloud-migration', description: 'Cloud migration & setup' },
        { name: 'DevOps & CI/CD', path: '/devops-cicd', description: 'DevOps automation' },
        { name: 'Database Management', path: '/database-management', description: 'Database management' },
        { name: 'Network Solutions', path: '/network-solutions', description: 'Network infrastructure' },
        { name: 'System Administration', path: '/system-administration', description: 'System management' },
        { name: 'IT Consulting', path: '/it-consulting', description: 'Strategic IT planning' },
        { name: 'IT Support & Maintenance', path: '/it-support', description: '24/7 IT management' },
        { name: 'IT Training & Certification', path: '/it-training', description: 'Staff development' },
        { name: 'IT Infrastructure Design', path: '/it-infrastructure-design', description: 'Custom infrastructure' },
        { name: 'IT Performance Monitoring', path: '/it-performance-monitoring', description: 'Real-time monitoring' },
        { name: 'IT Disaster Recovery', path: '/it-disaster-recovery', description: 'Disaster recovery' },
        { name: 'IT Automation', path: '/it-automation', description: 'IT process automation' },
        { name: 'Global IT Support', path: '/global-it-support', description: 'Worldwide support' }
=======
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
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-dbf5
=======
        { name: 'IT Services', path: '/it-services' },
        { name: 'Cloud Services', path: '/ai-cloud-infrastructure' },
        { name: 'Cybersecurity', path: '/cybersecurity' },
        { name: 'DevOps', path: '/devops' },
        { name: 'Database Services', path: '/database' },
        { name: 'Network Services', path: '/networking' }
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-fd40
      ]
    },
    {
      title: 'Specialized Solutions',
      icon: Sparkles,
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/10',
      hoverColor: 'hover:bg-pink-500/20',
      services: [
<<<<<<< HEAD
        { name: 'AI-Powered CRM', path: '/ai-crm', description: 'Intelligent CRM with AI insights' },
        { name: 'AI Analytics Dashboard', path: '/ai-analytics', description: 'Real-time business intelligence' },
        { name: 'AI Content Studio', path: '/ai-content-studio', description: 'Complete content creation suite' },
        { name: 'AI Chatbot Builder', path: '/ai-chatbot-builder', description: 'No-code chatbot creation' },
        { name: 'AI Email Marketing', path: '/ai-email-marketing', description: 'Automated email campaigns' },
        { name: 'AI Mobile App Builder', path: '/ai-mobile-builder', description: 'AI-assisted app development' },
        { name: 'AI SEO Optimizer', path: '/ai-seo-optimizer', description: 'Automated SEO analysis' },
        { name: 'AI Invoice Generator', path: '/ai-invoice-generator', description: 'Automated invoicing' },
        { name: 'AI Lead Scoring', path: '/ai-lead-scoring', description: 'Intelligent lead qualification' },
        { name: 'AI Sales Forecasting', path: '/ai-sales-forecasting', description: 'Advanced sales predictions' },
        { name: 'AI E-commerce Optimizer', path: '/ai-ecommerce-optimizer', description: 'E-commerce optimization' },
        { name: 'AI Design Assistant', path: '/ai-design-assistant', description: 'AI-powered design tool' },
        { name: 'AI Document Processor', path: '/ai-document-processor', description: 'Intelligent document processing' },
        { name: 'AI Security Monitor', path: '/ai-security-monitor', description: 'Real-time security monitoring' },
        { name: 'AI Performance Tracker', path: '/ai-performance-tracker', description: 'Comprehensive performance tracking' },
        { name: 'AI Voice Assistant', path: '/ai-voice-assistant', description: 'Custom voice assistants' },
        { name: 'AI Social Media Manager', path: '/ai-social-media-manager', description: 'Automated social media' },
        { name: 'AI HR Assistant', path: '/ai-hr-assistant', description: 'Intelligent HR management' },
        { name: 'AI Inventory Manager', path: '/ai-inventory-manager', description: 'Smart inventory management' },
        { name: 'AI Customer Insights', path: '/ai-customer-insights', description: 'Deep customer insights' },
        { name: 'AI Workflow Automation', path: '/ai-workflow-automation', description: 'Process automation' },
        { name: 'AI A/B Testing Platform', path: '/ai-ab-testing', description: 'Advanced A/B testing' },
        { name: 'AI Predictive Analytics', path: '/ai-predictive-analytics', description: 'Future outcome predictions' }
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
        { name: 'Robotics', path: '/robotics', description: 'Intelligent robots' },
        { name: 'AR/VR Solutions', path: '/ar-vr-solutions', description: 'Immersive experiences' },
        { name: 'Smart Cities', path: '/smart-cities', description: 'Urban technology solutions' },
        { name: 'Digital Transformation', path: '/digital-transformation', description: 'Business modernization' },
        { name: 'Innovation Labs', path: '/innovation-labs', description: 'R&D and prototyping' },
        { name: 'Sustainability Tech', path: '/sustainability-tech', description: 'Green technology solutions' },
        { name: 'Future Technologies', path: '/future-technologies', description: 'Emerging tech solutions' }
      ]
    }
      ]
    }
  ];
<<<<<<< HEAD

  const mainNavItems = [
    { name: 'Home', path: '/', icon: '🏠' },
    { name: 'About', path: '/about', icon: '👥' },
    { name: 'Services', path: '/services', icon: '⚙️' },
    { name: 'Pricing', path: '/pricing', icon: '💰' },
    { name: 'Case Studies', path: '/case-studies', icon: '📊' },
    { name: 'Blog', path: '/blog', icon: '📝' },
    { name: 'Contact', path: '/contact', icon: '📞' }
=======
    { name: 'Case Studies', path: '/case-studies', icon: '📊' },
    { name: 'Blog', path: '/blog', icon: '📝' },
    { name: 'Contact', path: '/contact', icon: '📞' }
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-dbf5
  ];
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-fd40

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-md border-b border-cyan-400/20' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
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
            <Link href="/" className="text-white hover:text-cyan-400 transition-colors font-medium">
              Home
            </Link>
            <Link href="/about" className="text-white hover:text-cyan-400 transition-colors font-medium">              
              About
            </Link>

            {/* Services Dropdown */}
            <div className="relative">
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
              
              <div className="absolute top-full left-0 mt-2 w-96 bg-slate-900/95 backdrop-blur-md border border-cyan-400/20 rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
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
                            <Link
                              key={serviceIndex}
                              href={service.path}
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
                  <div className="border-t border-gray-700 mt-6 pt-4 px-6">
                    <Link
                      href="/services"
                      className="block w-full text-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all"
                      onClick={closeAllMenus}
                    >
                      View All Services
                    </Link>
                  </div>
            <Link 
              to="/" 
              className={`font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-cyan-400'}`}
              onClick={closeAllMenus}
            >
              Home
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={toggleServices}
                className={`flex items-center space-x-1 font-medium transition-colors ${
                  isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-cyan-400'
                }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                  <Link
                    to="/ai-services"
                    className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors"
                    onClick={closeAllMenus}
                  >
                    <Brain className="w-5 h-5 text-blue-600" />
                    <div>
                      <div className="font-medium">AI Services</div>
                      <div className="text-sm text-gray-500">Machine Learning & AI Solutions</div>
                    </div>
                  </Link>
                  <Link
                    to="/ai-automation"
                    className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors"
                    onClick={closeAllMenus}
                  >
                    <Zap className="w-5 h-5 text-purple-600" />
                    <div>
                      <div className="font-medium">AI Automation</div>
                      <div className="text-sm text-gray-500">Process Automation & Workflow</div>
                    </div>
                  </Link>
                  <Link
                    to="/ai-marketing"
                    className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors"
                    onClick={closeAllMenus}
                  >
                    <BarChart className="w-5 h-5 text-green-600" />
                    <div>
                      <div className="font-medium">AI Marketing</div>
                      <div className="text-sm text-gray-500">Marketing Automation & Analytics</div>
                    </div>
                  </Link>
                  <Link
                    to="/it-infrastructure"
                    className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors"
                    onClick={closeAllMenus}
                  >
                    <Cloud className="w-5 h-5 text-blue-600" />
                    <div>
                      <div className="font-medium">IT Infrastructure</div>
                      <div className="text-sm text-gray-500">Cloud & Infrastructure Solutions</div>
                    </div>
                  </Link>
                  <Link
                    to="/cybersecurity"
                    className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors"
                    onClick={closeAllMenus}
                  >
                    <Shield className="w-5 h-5 text-red-600" />
                    <div>
                      <div className="font-medium">Cybersecurity</div>
                      <div className="text-sm text-gray-500">Security & Compliance</div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            <Link 
              href="/case-studies" 
              className="font-medium transition-colors hover:text-cyan-400 text-white"
              onClick={closeAllMenus}
            >
              Case Studies
            </Link>

            <Link
              href="/blog"
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
            <Link 
              to="/contact" 
              className={`font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-cyan-400'}`}
              onClick={closeAllMenus}
            >
              Contact
            </Link>
            
            <Link 
              to="/blog" 
              className={`font-medium transition-colors ${isScrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-cyan-400'}`}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-fd65
              onClick={closeAllMenus}
            >
              Blog
            </Link>

            <Link
              href="/contact"
              className="text-white hover:text-cyan-400 transition-colors duration-200 font-medium"
              onClick={closeAllMenus}
            >
              Contact
            </Link>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="cyber-button inline-flex items-center"
              onClick={closeAllMenus}
            >
              <Phone className="w-4 h-4 mr-2" />
              (302) 464-0950
            </Link>
          </div>

          {/* Mobile Menu Button */}
<<<<<<< HEAD
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
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900/95 backdrop-blur-sm rounded-lg mt-2">
              <Link
                href="/"
                className="block px-3 py-2 text-base font-medium text-white hover:text-cyan-400 hover:bg-gray-800 rounded-md"
                onClick={closeAllMenus}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-base font-medium text-white hover:text-cyan-400 hover:bg-gray-800 rounded-md"
                onClick={closeAllMenus}
              >
                About
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
                  <div className="mt-2 ml-4 space-y-2">
                    {serviceCategories.map((category, categoryIndex) => (
                      <div key={categoryIndex}>
                        <div className="text-sm font-medium text-cyan-400 mb-2">{category.title}</div>
                        <div className="ml-4 space-y-1">
                          {category.services.slice(0, 3).map((service, serviceIndex) => (
                            <Link
=======
                          {category.services.slice(0, 3).map((service, serviceIndex) => (
                            <a
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-dbf5
                              key={serviceIndex}
                              href={service.path}
                              className="block text-xs text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-1"
                            >
                              {typeof service.icon === 'string' ? service.icon : <service.icon className="w-3 h-3 inline mr-1" />} {service.name}
                            </Link>
                          ))}
                          <Link
                            href="/services"
                            className="block text-xs text-cyan-400 hover:text-cyan-300 transition-colors duration-300 py-1 font-medium"
                          >
                            View All →
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
<<<<<<< HEAD

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+13024640950"
              className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">+1 302 464 0950</span>
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="flex items-center space-x-2 text-pink-400 hover:text-pink-300 transition-colors duration-300"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm font-medium">Email</span>
            </a>
            <a
              href="/contact"
              className="cyber-button px-4 py-2 text-sm font-medium"
            >
              Get Started
=======

            {/* CTA Button */}
            <a
              href="tel:+13024640950"
              className={`inline-flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                isScrolled 
                  ? 'bg-blue-600 text-white hover:bg-blue-700' 
                  : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
              }`}
            >
              <Phone className="w-4 h-4" />
              <span>(302) 464-0950</span>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-fd65
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-white hover:text-cyan-400 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-cyan-400/20">
            <div className="px-4 py-6 space-y-6">
              {/* Main Navigation */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white mb-3 neon-text">Navigation</h3>
                {mainNavItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.path}
                    onClick={closeAllMenus}
                    className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2"
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="font-medium">{item.name}</span>
                  </Link>
                ))}
              </div>

              <a
                href="tel:+13024640950"
                className="block w-full text-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all mt-4"
                onClick={closeAllMenus}
              >
                <Phone className="w-4 h-4 inline mr-2" />
                (302) 464-0950
              </a>
<<<<<<< HEAD
=======
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-dbf5
=======
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
            <div className="px-4 py-6 space-y-4">
              <Link
                to="/"
                className="block text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors"
                onClick={closeAllMenus}
              >
                Home
              </Link>
              
              {/* Mobile Services */}
              <div>
                <button
                  onClick={toggleServices}
                  className="flex items-center justify-between w-full text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors"
                >
                  <span>Services</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {servicesOpen && (
                  <div className="mt-2 ml-4 space-y-3">
                    <Link
                      to="/ai-services"
                      className="block text-gray-700 hover:text-blue-600 transition-colors"
                      onClick={closeAllMenus}
                    >
                      AI Services
                    </Link>
                    <Link
                      to="/ai-automation"
                      className="block text-gray-700 hover:text-blue-600 transition-colors"
                      onClick={closeAllMenus}
                    >
                      AI Automation
                    </Link>
                    <Link
                      to="/ai-marketing"
                      className="block text-gray-700 hover:text-blue-600 transition-colors"
                      onClick={closeAllMenus}
                    >
                      AI Marketing
                    </Link>
                    <Link
                      to="/it-infrastructure"
                      className="block text-gray-700 hover:text-blue-600 transition-colors"
                      onClick={closeAllMenus}
                    >
                      IT Infrastructure
                    </Link>
                    <Link
                      to="/cybersecurity"
                      className="block text-gray-700 hover:text-blue-600 transition-colors"
                      onClick={closeAllMenus}
                    >
                      Cybersecurity
                    </Link>
                  </div>
                )}
              </div>
              
              <Link
                to="/about"
                className="block text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors"
                onClick={closeAllMenus}
              >
                About
              </Link>
              
              <Link
                to="/contact"
                className="block text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors"
                onClick={closeAllMenus}
              >
                Contact
              </Link>
              
              <Link
                to="/blog"
                className="block text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors"
                onClick={closeAllMenus}
              >
                Blog
              </Link>

              {/* Mobile CTA */}
              <a
                href="tel:+13024640950"
                className="flex items-center space-x-2 w-full justify-center px-4 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>(302) 464-0950</span>
              </a>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-fd65
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
export default Navigation;
=======
});

Navigation.displayName = 'Navigation';
export default Navigation;
>>>>>>> cursor/enhance-and-expand-ziontechgroup-com-services-and-site-dbf5
=======
export default Navigation;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-fd65
=======
export default Navigation;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-fd40
