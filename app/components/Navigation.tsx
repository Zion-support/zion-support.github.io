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
        { name: 'AI Consulting & Strategy', path: '/ai-services', description: 'Comprehensive AI strategy development' },
        { name: 'Machine Learning Solutions', path: '/ai-data-analytics', description: 'Custom ML models and analytics' },
        { name: 'Natural Language Processing', path: '/ai-content-generation', description: 'Advanced NLP solutions' },
        { name: 'Computer Vision', path: '/ai-cybersecurity', description: 'Image and video analysis' },
        { name: 'AI Automation', path: '/ai-marketing', description: 'Intelligent process automation' },
        { name: 'AI Chatbots', path: '/ai-chatbot-builder', description: 'Conversational AI solutions' },
        { name: 'AI Voice Cloning', path: '/ai-voice-cloning', description: 'Advanced voice synthesis' },
        { name: 'AI 3D Generation', path: '/ai-3d-generation', description: '3D model generation' },
        { name: 'AI Music Composition', path: '/ai-music-composition', description: 'AI music creation' },
        { name: 'AI Video Generation', path: '/ai-video-generation', description: 'AI video creation' },
        { name: 'AI Code Generation', path: '/ai-code-generation', description: 'Intelligent code generation' },
        { name: 'AI Fashion Design', path: '/ai-fashion-design', description: 'AI fashion solutions' },
        { name: 'AI Healthcare', path: '/ai-healthcare', description: 'Medical AI solutions' },
        { name: 'AI Fintech', path: '/ai-fintech', description: 'Financial AI applications' },
        { name: 'AI Fitness Coach', path: '/ai-fitness-coach', description: 'Personalized fitness AI' },
        { name: 'AI Lead Generation', path: '/ai-lead-generation', description: 'Intelligent lead generation' },
        { name: 'AI Marketing', path: '/ai-marketing', description: 'AI marketing automation' },
        { name: 'AI Mobile App Development', path: '/ai-mobile-app-development', description: 'AI-powered mobile apps' },
        { name: 'AI Scheduler', path: '/ai-scheduler', description: 'Intelligent scheduling' },
        { name: 'AI Writing Assistant', path: '/ai-writing-assistant', description: 'AI writing platform' }
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
        { name: 'Cloud Services', path: '/cloud-services', description: 'Cloud migration & setup' },
        { name: 'Cybersecurity', path: '/cybersecurity', description: 'Advanced security solutions' },
        { name: 'DevOps & CI/CD', path: '/devops', description: 'DevOps automation' },
        { name: 'Database Services', path: '/database', description: 'Database management' },
        { name: 'Network Services', path: '/networking', description: 'Network infrastructure' },
        { name: 'IT Support & Helpdesk', path: '/support', description: '24/7 technical support' },
        { name: 'Software Development', path: '/developer-tools', description: 'Custom software development' },
        { name: 'Data Center Services', path: '/it-infrastructure', description: 'Data center management' },
        { name: 'IT Consulting', path: '/consultation', description: 'Strategic IT planning' },
        { name: 'Managed IT Services', path: '/it-services', description: 'Comprehensive IT management' },
        { name: 'IT Training & Certification', path: '/careers', description: 'IT training programs' },
        { name: 'IT Compliance & Governance', path: '/compliance', description: 'IT compliance management' },
        { name: 'IT Asset Management', path: '/it-services', description: 'IT asset lifecycle' },
        { name: 'IT Disaster Recovery', path: '/it-infrastructure', description: 'Disaster recovery planning' },
        { name: 'IT Security Auditing', path: '/security', description: 'Security auditing' },
        { name: 'IT Performance Monitoring', path: '/analytics-tools', description: 'Performance monitoring' },
        { name: 'IT Integration Services', path: '/it-services', description: 'System integration' },
        { name: 'IT Project Management', path: '/it-services', description: 'IT project delivery' },
        { name: 'IT Vendor Management', path: '/it-services', description: 'Vendor management' }
      ]
    },
    {
      title: 'Micro SAAS',
      icon: Code,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      hoverColor: 'hover:bg-green-100',
      services: [
        { name: 'AI Code Review Assistant', path: '/micro-saas', description: 'Automated code analysis' },
        { name: 'AI SEO Optimizer', path: '/micro-saas', description: 'AI-powered SEO analysis' },
        { name: 'AI Analytics Dashboard', path: '/ai-analytics-dashboard', description: 'Business intelligence' },
        { name: 'AI Marketing Automation', path: '/marketing-tools', description: 'Marketing automation' },
        { name: 'AI Document Processing', path: '/ai-document-processing', description: 'Document analysis' },
        { name: 'AI Customer Support Bot', path: '/ai-chatbot-builder', description: 'Automated support' },
        { name: 'AI Content Generator', path: '/ai-content-generation', description: 'Content creation' },
        { name: 'AI Data Visualization', path: '/smart-analytics', description: 'Data visualization' },
        { name: 'AI Email Assistant', path: '/ai-email-assistant', description: 'Smart email management' },
        { name: 'AI Lead Generation', path: '/ai-lead-generation', description: 'Lead qualification' },
        { name: 'AI Sales Automation', path: '/ai-services', description: 'Sales process automation' },
        { name: 'AI E-commerce Solutions', path: '/ai-ecommerce-solutions', description: 'E-commerce optimization' },
        { name: 'AI Social Media Manager', path: '/marketing-tools', description: 'Social media automation' },
        { name: 'AI Expense Tracker', path: '/expense-tracker', description: 'Financial management' },
        { name: 'AI Task Manager Pro', path: '/task-manager-pro', description: 'Task management' },
        { name: 'AI Meeting Scheduler', path: '/ai-scheduler', description: 'Meeting scheduling' },
        { name: 'AI Inventory Manager', path: '/micro-saas', description: 'Inventory management' },
        { name: 'AI HR Assistant', path: '/micro-saas', description: 'HR automation' },
        { name: 'AI Legal Assistant', path: '/micro-saas', description: 'Legal document analysis' },
        { name: 'AI Accounting Assistant', path: '/micro-saas', description: 'Accounting automation' }
      ]
    },
    {
      title: 'Specialized Solutions',
      icon: Sparkles,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      hoverColor: 'hover:bg-orange-100',
      services: [
        { name: 'Quantum Computing', path: '/quantum-computing', description: 'Quantum algorithms' },
        { name: 'Autonomous Systems', path: '/autonomous-systems', description: 'Self-managing systems' },
        { name: 'Blockchain & Web3', path: '/blockchain-web3', description: 'Decentralized solutions' },
        { name: 'IoT & Edge Computing', path: '/iot-edge-computing', description: 'Connected devices' },
        { name: 'Business Intelligence', path: '/business-intelligence', description: 'Data insights' },
        { name: 'Robotics Solutions', path: '/robotics', description: 'Intelligent robotics' },
        { name: 'AR/VR Solutions', path: '/micro-saas', description: 'AR/VR applications' },
        { name: 'Digital Twin Technology', path: '/micro-saas', description: 'Digital twin creation' },
        { name: 'Smart City Solutions', path: '/micro-saas', description: 'Smart city infrastructure' },
        { name: 'Autonomous Vehicles', path: '/micro-saas', description: 'Autonomous vehicle systems' }
      ]
    },
    {
      title: 'Emerging Technologies',
      icon: Globe,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      hoverColor: 'hover:bg-indigo-100',
      services: [
        { name: 'Metaverse Solutions', path: '/micro-saas', description: 'Virtual world creation' },
        { name: 'AI-Powered Drones', path: '/micro-saas', description: 'Intelligent drone systems' },
        { name: 'Edge AI Computing', path: '/iot-edge-computing', description: 'Edge AI processing' },
        { name: '5G Network Solutions', path: '/networking', description: '5G implementation' },
        { name: 'AI-Powered Cybersecurity', path: '/cybersecurity', description: 'Next-gen security' },
        { name: 'Quantum-Safe Cryptography', path: '/security', description: 'Post-quantum security' },
        { name: 'AI-Powered Healthcare', path: '/ai-healthcare', description: 'Advanced medical AI' },
        { name: 'Autonomous Robotics', path: '/robotics', description: 'Self-operating robots' },
        { name: 'AI-Powered Agriculture', path: '/micro-saas', description: 'Smart farming' },
        { name: 'Smart Energy Systems', path: '/micro-saas', description: 'Energy management' }
      ]
    }
  ];

  const mainNavItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'About', path: '/about', icon: Users },
    { name: 'Services', path: '/services', icon: Settings },
    { name: 'Pricing', path: '/pricing', icon: DollarSign },
    { name: 'Blog', path: '/blog', icon: FileText },
    { name: 'Contact', path: '/contact', icon: Phone },
    { name: 'Team', path: '/team', icon: Users },
    { name: 'Careers', path: '/careers', icon: Briefcase }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-sm">
          <div className="flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span>Middletown, DE</span>
            </div>
          </div>
          <div className="text-xs opacity-90">
            Leading AI & IT Solutions Provider
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 text-white font-bold text-xl">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span>Zion Tech Group</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {mainNavItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className="text-white hover:text-cyan-400 transition-colors duration-200 flex items-center space-x-1"
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              ))}
              
              {/* Services Dropdown */}
              <div className="relative group">
                <button className="text-white hover:text-cyan-400 transition-colors duration-200 flex items-center space-x-1">
                  <Settings className="w-4 h-4" />
                  <span>Services</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {/* Mega Menu */}
                <div className="absolute top-full left-0 w-screen max-w-6xl bg-white/95 backdrop-blur-md rounded-lg shadow-2xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
                      {serviceCategories.map((category, categoryIndex) => (
                        <div key={categoryIndex} className="space-y-4">
                          <div className="flex items-center space-x-2 mb-4">
                            <div className={`w-8 h-8 ${category.bgColor} rounded-lg flex items-center justify-center`}>
                              <category.icon className={`w-4 h-4 ${category.color}`} />
                            </div>
                            <h3 className="font-semibold text-gray-900">{category.title}</h3>
                          </div>
                          <div className="space-y-2">
                            {category.services.slice(0, 6).map((service, serviceIndex) => (
                              <Link
                                key={serviceIndex}
                                href={service.path}
                                className="block p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 group"
                              >
                                <div className="font-medium text-gray-900 group-hover:text-purple-600">
                                  {service.name}
                                </div>
                                <div className="text-sm text-gray-600">
                                  {service.description}
                                </div>
                              </Link>
                            ))}
                            {category.services.length > 6 && (
                              <Link
                                href="/services"
                                className="block text-sm text-purple-600 hover:text-purple-700 font-medium"
                              >
                                View All {category.title} →
                              </Link>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 flex items-center space-x-2"
              >
                <Phone className="w-4 h-4" />
                <span>Get Started</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden text-white hover:text-cyan-400 transition-colors duration-200"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-white/20">
            <div className="px-4 py-6 space-y-4">
              {mainNavItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  onClick={closeAllMenus}
                  className="flex items-center space-x-3 text-gray-900 hover:text-purple-600 transition-colors duration-200 py-2"
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              ))}
              
              {/* Mobile Services */}
              <div className="pt-4 border-t border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-4">Our Services</h3>
                <div className="space-y-4">
                  {serviceCategories.map((category, categoryIndex) => (
                    <div key={categoryIndex}>
                      <div className="flex items-center space-x-2 mb-2">
                        <div className={`w-6 h-6 ${category.bgColor} rounded-lg flex items-center justify-center`}>
                          <category.icon className={`w-3 h-3 ${category.color}`} />
                        </div>
                        <h4 className="font-medium text-gray-900">{category.title}</h4>
                      </div>
                      <div className="ml-8 space-y-1">
                        {category.services.slice(0, 3).map((service, serviceIndex) => (
                          <Link
                            key={serviceIndex}
                            href={service.path}
                            onClick={closeAllMenus}
                            className="block text-sm text-gray-600 hover:text-purple-600 py-1"
                          >
                            {service.name}
                          </Link>
                        ))}
                        {category.services.length > 3 && (
                          <Link
                            href="/services"
                            onClick={closeAllMenus}
                            className="block text-sm text-purple-600 hover:text-purple-700 font-medium"
                          >
                            View All →
                          </Link>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="pt-4 border-t border-gray-200">
                <Link
                  href="/contact"
                  onClick={closeAllMenus}
                  className="block w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg font-medium text-center hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
                >
                  Get Started Today
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