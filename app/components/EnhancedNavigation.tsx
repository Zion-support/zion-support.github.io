'use client';
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
  TrendingUp, 
  Settings, 
  Calendar, 
  CheckSquare, 
  FileText, 
  MessageCircle, 
  Heart, 
  DollarSign, 
  Box, 
  Monitor, 
  Link as LinkIcon, 
  Server,
  Search,
  Filter,
  Star,
  Clock,
  Package,
  Headphones,
  Wifi,
  HardDrive,
  Printer,
  Router,
  Laptop,
  Bot,
  Eye,
  Mic,
  Palette,
  Workflow,
  Layers,
  MessageSquare,
  Heart as HeartIcon,
  DollarSign as DollarSignIcon,
  Box as BoxIcon,
  Monitor as MonitorIcon,
  Link as LinkIconAlt,
  Server as ServerIcon
} from 'lucide-react';

const EnhancedNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aiServicesOpen, setAiServicesOpen] = useState(false);
  const [itServicesOpen, setItServicesOpen] = useState(false);
  const [microSaasOpen, setMicroSaasOpen] = useState(false);
  const [emergingTechOpen, setEmergingTechOpen] = useState(false);
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

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleServices = () => setServicesOpen(!servicesOpen);
  const toggleAiServices = () => setAiServicesOpen(!aiServicesOpen);
  const toggleItServices = () => setItServicesOpen(!itServicesOpen);
  const toggleMicroSaas = () => setMicroSaasOpen(!microSaasOpen);
  const toggleEmergingTech = () => setEmergingTechOpen(!emergingTechOpen);

  const closeAllMenus = () => {
    setServicesOpen(false);
    setAiServicesOpen(false);
    setItServicesOpen(false);
    setMicroSaasOpen(false);
    setEmergingTechOpen(false);
    setIsOpen(false);
  };

  // Enhanced Service Data
  const aiServices = [
    { name: 'AI Chatbots & Virtual Assistants', href: '/ai-chatbot-builder', icon: Bot, description: 'Intelligent 24/7 customer support' },
    { name: 'AI Content Generation', href: '/ai-content-generation', icon: FileText, description: 'Automated content creation' },
    { name: 'AI Data Analytics', href: '/ai-data-analytics', icon: BarChart, description: 'Advanced business intelligence' },
    { name: 'AI Computer Vision', href: '/ai-computer-vision', icon: Eye, description: 'Image and video analysis' },
    { name: 'AI Voice Processing', href: '/ai-voice-processing', icon: Mic, description: 'Speech recognition & synthesis' },
    { name: 'AI Workflow Automation', href: '/ai-workflow-automation', icon: Workflow, description: 'Intelligent process automation' },
    { name: 'AI Cybersecurity', href: '/ai-cybersecurity', icon: Shield, description: 'AI-powered threat detection' },
    { name: 'AI Mobile Apps', href: '/ai-mobile-apps', icon: Smartphone, description: 'AI-powered mobile solutions' }
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', href: '/cloud-services', icon: Cloud, description: 'AWS, Azure, GCP solutions' },
    { name: 'Cybersecurity Solutions', href: '/cybersecurity', icon: Shield, description: 'Comprehensive security services' },
    { name: 'DevOps & CI/CD', href: '/devops', icon: Settings, description: 'Automated deployment pipelines' },
    { name: 'Database Management', href: '/database', icon: Database, description: 'Database optimization & management' },
    { name: 'IT Infrastructure', href: '/it-infrastructure', icon: Server, description: 'Complete infrastructure solutions' },
    { name: 'Managed IT Services', href: '/managed-it', icon: Headphones, description: '24/7 IT support & monitoring' },
    { name: 'Web Development', href: '/web-development', icon: Globe, description: 'Custom web applications' },
    { name: 'Mobile Development', href: '/mobile-development', icon: Smartphone, description: 'iOS & Android apps' }
  ];

  const microSaasServices = [
    { name: 'AI CRM Assistant', href: '/ai-crm-assistant', icon: Users, description: 'Intelligent customer management' },
    { name: 'AI Email Marketing', href: '/ai-email-marketing', icon: Mail, description: 'Automated email campaigns' },
    { name: 'AI Expense Tracker', href: '/ai-expense-tracker', icon: TrendingUp, description: 'Smart financial tracking' },
    { name: 'AI Invoice Generator', href: '/ai-invoice-generator', icon: FileText, description: 'Automated billing system' },
    { name: 'AI Lead Generation', href: '/ai-lead-generation', icon: Target, description: 'Intelligent prospecting' },
    { name: 'AI Project Manager', href: '/ai-project-manager', icon: Calendar, description: 'Smart project coordination' },
    { name: 'AI Inventory Manager', href: '/ai-inventory-manager', icon: Package, description: 'Optimized inventory control' },
    { name: 'AI Social Media Manager', href: '/ai-social-media', icon: MessageSquare, description: 'Automated social media' }
  ];

  const emergingTechServices = [
    { name: 'Quantum Computing', href: '/quantum-computing', icon: Cpu, description: 'Next-gen computing power' },
    { name: '5G Implementation', href: '/5g-implementation', icon: Wifi, description: 'Ultra-fast connectivity' },
    { name: 'Blockchain Solutions', href: '/blockchain-solutions', icon: Lock, description: 'Decentralized applications' },
    { name: 'Autonomous Systems', href: '/autonomous-systems', icon: Settings, description: 'AI-powered automation' },
    { name: 'Edge Computing', href: '/edge-computing', icon: Monitor, description: 'Distributed processing' },
    { name: 'IoT Solutions', href: '/iot-solutions', icon: Wifi, description: 'Connected device networks' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-cyan-500/20' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Enhanced Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                  Zion Tech Group
                </span>
                <span className="text-xs text-cyan-400 font-medium">
                  AI & IT Solutions
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            
            {/* AI Services Dropdown */}
            <div className="relative group">
              <button
                onClick={toggleAiServices}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium relative group">
                <Brain className="w-4 h-4" />
                <span>AI Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${aiServicesOpen ? 'rotate-180' : ''}`} />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </button>
              {aiServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-slate-800/95 backdrop-blur-md rounded-xl shadow-2xl border border-cyan-500/20 p-6 cyber-card-enhanced">
                  <div className="grid grid-cols-1 gap-3">
                    <div className="text-cyan-400 font-semibold text-sm mb-3 flex items-center">
                      <Brain className="w-4 h-4 mr-2" />
                      Artificial Intelligence Solutions
                    </div>
                    {aiServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-all duration-300 group"
                        onClick={closeAllMenus}
                      >
                        <div className="w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          <service.icon className="w-5 h-5 text-cyan-400" />
                        </div>
                        <div className="flex-1">
                          <div className="text-white font-medium text-sm group-hover:text-cyan-300 transition-colors">
                            {service.name}
                          </div>
                          <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                            {service.description}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-300" />
                      </Link>
                    ))}
                    <div className="border-t border-cyan-500/20 pt-3 mt-3">
                      <Link
                        to="/ai-services"
                        className="flex items-center justify-center space-x-2 text-cyan-400 hover:text-cyan-300 font-medium text-sm transition-colors"
                        onClick={closeAllMenus}
                      >
                        <span>View All AI Services</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* IT Services Dropdown */}
            <div className="relative group">
              <button
                onClick={toggleItServices}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium relative group">
                <Cloud className="w-4 h-4" />
                <span>IT Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${itServicesOpen ? 'rotate-180' : ''}`} />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </button>
              {itServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-slate-800/95 backdrop-blur-md rounded-xl shadow-2xl border border-blue-500/20 p-6 cyber-card-enhanced">
                  <div className="grid grid-cols-1 gap-3">
                    <div className="text-blue-400 font-semibold text-sm mb-3 flex items-center">
                      <Cloud className="w-4 h-4 mr-2" />
                      Information Technology Solutions
                    </div>
                    {itServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-500/10 transition-all duration-300 group"
                        onClick={closeAllMenus}
                      >
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          <service.icon className="w-5 h-5 text-blue-400" />
                        </div>
                        <div className="flex-1">
                          <div className="text-white font-medium text-sm group-hover:text-blue-300 transition-colors">
                            {service.name}
                          </div>
                          <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                            {service.description}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300" />
                      </Link>
                    ))}
                    <div className="border-t border-blue-500/20 pt-3 mt-3">
                      <Link
                        to="/it-services"
                        className="flex items-center justify-center space-x-2 text-blue-400 hover:text-blue-300 font-medium text-sm transition-colors"
                        onClick={closeAllMenus}
                      >
                        <span>View All IT Services</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Micro SAAS Dropdown */}
            <div className="relative group">
              <button
                onClick={toggleMicroSaas}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium relative group">
                <Cpu className="w-4 h-4" />
                <span>Micro SAAS</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${microSaasOpen ? 'rotate-180' : ''}`} />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </button>
              {microSaasOpen && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-slate-800/95 backdrop-blur-md rounded-xl shadow-2xl border border-purple-500/20 p-6 cyber-card-enhanced">
                  <div className="grid grid-cols-1 gap-3">
                    <div className="text-purple-400 font-semibold text-sm mb-3 flex items-center">
                      <Cpu className="w-4 h-4 mr-2" />
                      Micro Software as a Service
                    </div>
                    {microSaasServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-purple-500/10 transition-all duration-300 group"
                        onClick={closeAllMenus}
                      >
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          <service.icon className="w-5 h-5 text-purple-400" />
                        </div>
                        <div className="flex-1">
                          <div className="text-white font-medium text-sm group-hover:text-purple-300 transition-colors">
                            {service.name}
                          </div>
                          <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                            {service.description}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-purple-400 group-hover:translate-x-1 transition-all duration-300" />
                      </Link>
                    ))}
                    <div className="border-t border-purple-500/20 pt-3 mt-3">
                      <Link
                        to="/micro-saas"
                        className="flex items-center justify-center space-x-2 text-purple-400 hover:text-purple-300 font-medium text-sm transition-colors"
                        onClick={closeAllMenus}
                      >
                        <span>View All Micro SAAS</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Emerging Technologies Dropdown */}
            <div className="relative group">
              <button
                onClick={toggleEmergingTech}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium relative group">
                <Sparkles className="w-4 h-4" />
                <span>Emerging Tech</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${emergingTechOpen ? 'rotate-180' : ''}`} />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </button>
              {emergingTechOpen && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-slate-800/95 backdrop-blur-md rounded-xl shadow-2xl border border-green-500/20 p-6 cyber-card-enhanced">
                  <div className="grid grid-cols-1 gap-3">
                    <div className="text-green-400 font-semibold text-sm mb-3 flex items-center">
                      <Sparkles className="w-4 h-4 mr-2" />
                      Next-Generation Technologies
                    </div>
                    {emergingTechServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-green-500/10 transition-all duration-300 group"
                        onClick={closeAllMenus}
                      >
                        <div className="w-10 h-10 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          <service.icon className="w-5 h-5 text-green-400" />
                        </div>
                        <div className="flex-1">
                          <div className="text-white font-medium text-sm group-hover:text-green-300 transition-colors">
                            {service.name}
                          </div>
                          <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                            {service.description}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-green-400 group-hover:translate-x-1 transition-all duration-300" />
                      </Link>
                    ))}
                    <div className="border-t border-green-500/20 pt-3 mt-3">
                      <Link
                        to="/emerging-tech"
                        className="flex items-center justify-center space-x-2 text-green-400 hover:text-green-300 font-medium text-sm transition-colors"
                        onClick={closeAllMenus}
                      >
                        <span>View All Emerging Tech</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/pricing" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium relative group">
              Pricing
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/blog" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium relative group">
              Blog
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>

          {/* Enhanced Contact Info */}
          <div className="hidden lg:flex items-center space-x-6">
            <a
              href="tel:+13024640950"
              className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium group"
            >
              <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span className="text-sm">(302) 464-0950</span>
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium group"
            >
              <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span className="text-sm">Email</span>
            </a>
            <Link
              to="/contact"
              className="cyber-button-enhanced text-sm px-6 py-2"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white p-2 rounded-md transition-colors duration-300 relative group"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></span>
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-cyan-500/20">
            <div className="pt-4 space-y-4">
              <Link to="/" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
                Home
              </Link>
              
              {/* Mobile AI Services */}
              <div>
                <button
                  onClick={toggleAiServices}
                  className="flex items-center justify-between w-full text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
                  <span className="flex items-center space-x-2">
                    <Brain className="w-4 h-4" />
                    <span>AI Services</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${aiServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {aiServicesOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    {aiServices.slice(0, 6).map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                        onClick={closeAllMenus}
                      >
                        {service.name}
                      </Link>
                    ))}
                    <Link
                      to="/ai-services"
                      className="block text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
                      onClick={closeAllMenus}
                    >
                      View All AI Services →
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile IT Services */}
              <div>
                <button
                  onClick={toggleItServices}
                  className="flex items-center justify-between w-full text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
                  <span className="flex items-center space-x-2">
                    <Cloud className="w-4 h-4" />
                    <span>IT Services</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${itServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {itServicesOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    {itServices.slice(0, 6).map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                        onClick={closeAllMenus}
                      >
                        {service.name}
                      </Link>
                    ))}
                    <Link
                      to="/it-services"
                      className="block text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
                      onClick={closeAllMenus}
                    >
                      View All IT Services →
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile Micro SAAS */}
              <div>
                <button
                  onClick={toggleMicroSaas}
                  className="flex items-center justify-between w-full text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
                  <span className="flex items-center space-x-2">
                    <Cpu className="w-4 h-4" />
                    <span>Micro SAAS</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${microSaasOpen ? 'rotate-180' : ''}`} />
                </button>
                {microSaasOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    {microSaasServices.slice(0, 6).map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                        onClick={closeAllMenus}
                      >
                        {service.name}
                      </Link>
                    ))}
                    <Link
                      to="/micro-saas"
                      className="block text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
                      onClick={closeAllMenus}
                    >
                      View All Micro SAAS →
                    </Link>
                  </div>
                )}
              </div>

              <Link to="/about" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
                About
              </Link>
              <Link to="/pricing" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
                Pricing
              </Link>
              <Link to="/blog" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
                Blog
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
                Contact
              </Link>

              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-cyan-500/20 space-y-3">
                <a
                  href="tel:+13024640950"
                  className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium">
                  <Phone className="w-4 h-4" />
                  <span>(302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium">
                  <Mail className="w-4 h-4" />
                  <span>kleber@ziontechgroup.com</span>
                </a>
                <div className="flex items-center space-x-2 text-gray-400">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
                <Link
                  to="/contact"
                  className="block w-full cyber-button-enhanced text-center py-3 mt-4"
                  onClick={closeAllMenus}
                >
                  Get Free Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default EnhancedNavigation;