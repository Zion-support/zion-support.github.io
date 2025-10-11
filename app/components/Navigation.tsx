'use client';
import React, { useState, useEffect, useCallback } from 'react';
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
  Package, 
  Mic, 
  Workflow, 
  Eye, 
  Wifi, 
  MessageSquare, 
  CheckCircle, 
  ShoppingCart,
  Star,
  Clock,
  Headphones,
  Play,
  Search,
  Filter
} from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aiServicesOpen, setAiServicesOpen] = useState(false);
  const [itServicesOpen, setItServicesOpen] = useState(false);
  const [microSaasOpen, setMicroSaasOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && !(event.target as Element).closest('.mobile-menu')) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const toggleMenu = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const toggleServices = useCallback(() => {
    setServicesOpen(!servicesOpen);
    setAiServicesOpen(false);
    setItServicesOpen(false);
    setMicroSaasOpen(false);
    setSolutionsOpen(false);
  }, [servicesOpen]);

  const toggleAiServices = useCallback(() => {
    setAiServicesOpen(!aiServicesOpen);
    setServicesOpen(false);
    setItServicesOpen(false);
    setMicroSaasOpen(false);
    setSolutionsOpen(false);
  }, [aiServicesOpen]);

  const toggleItServices = useCallback(() => {
    setItServicesOpen(!itServicesOpen);
    setServicesOpen(false);
    setAiServicesOpen(false);
    setMicroSaasOpen(false);
    setSolutionsOpen(false);
  }, [itServicesOpen]);

  const toggleMicroSaas = useCallback(() => {
    setMicroSaasOpen(!microSaasOpen);
    setServicesOpen(false);
    setAiServicesOpen(false);
    setItServicesOpen(false);
    setSolutionsOpen(false);
  }, [microSaasOpen]);

  const toggleSolutions = useCallback(() => {
    setSolutionsOpen(!solutionsOpen);
    setServicesOpen(false);
    setAiServicesOpen(false);
    setItServicesOpen(false);
    setMicroSaasOpen(false);
  }, [solutionsOpen]);

  const closeAllMenus = useCallback(() => {
    setIsOpen(false);
    setServicesOpen(false);
    setAiServicesOpen(false);
    setItServicesOpen(false);
    setMicroSaasOpen(false);
    setSolutionsOpen(false);
  }, []);

  const aiServices = [
    { name: 'AI Chatbots', href: '/ai-services/chatbots', icon: MessageSquare },
    { name: 'AI Analytics', href: '/ai-services/analytics', icon: BarChart },
    { name: 'AI Automation', href: '/ai-services/automation', icon: Workflow },
    { name: 'AI Content Generation', href: '/ai-services/content', icon: FileText },
    { name: 'AI Computer Vision', href: '/ai-services/vision', icon: Eye },
    { name: 'AI Fraud Detection', href: '/ai-services/fraud', icon: Shield }
  ];

  const itServices = [
    { name: 'Cloud Migration', href: '/it-services/cloud', icon: Cloud },
    { name: 'Cybersecurity', href: '/it-services/security', icon: Shield },
    { name: 'Database Management', href: '/it-services/database', icon: Database },
    { name: 'DevOps & CI/CD', href: '/it-services/devops', icon: Settings },
    { name: 'Custom Development', href: '/it-services/development', icon: Code },
    { name: 'Mobile Apps', href: '/it-services/mobile', icon: Smartphone },
    { name: 'Web Development', href: '/it-services/web', icon: Globe },
    { name: 'IT Support', href: '/it-services/support', icon: Headphones }
  ];

  const microSaasServices = [
    { name: 'Zion Chat AI Pro', href: '/micro-saas/chat-ai', icon: MessageSquare, price: '$99/mo' },
    { name: 'Zion Content Studio', href: '/micro-saas/content-studio', icon: FileText, price: '$49/mo' },
    { name: 'Zion Analytics Intelligence', href: '/micro-saas/analytics', icon: BarChart, price: '$79/mo' },
    { name: 'Zion Lead Magnet Pro', href: '/micro-saas/lead-magnet', icon: Target, price: '$89/mo' },
    { name: 'Zion Security Shield', href: '/micro-saas/security', icon: Shield, price: '$149/mo' },
    { name: 'Zion Cloud Vault', href: '/micro-saas/cloud-vault', icon: Cloud, price: '$39/mo' }
  ];

  const solutions = [
    { name: 'Enterprise Solutions', href: '/solutions/enterprise', icon: Building },
    { name: 'Startup Packages', href: '/solutions/startup', icon: Zap },
    { name: 'Industry Solutions', href: '/solutions/industry', icon: Target },
    { name: 'Custom Solutions', href: '/solutions/custom', icon: Settings }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-2xl border-b border-cyan-500/20' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg shadow-cyan-500/25">
                <Brain className="w-7 h-7 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-white neon-text-enhanced group-hover:glow">Zion Tech Group</span>
                <span className="text-xs text-cyan-400 font-medium tracking-wider">AI & IT SOLUTIONS</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button
                onClick={toggleServices}
                className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
              >
                Services
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-900/95 backdrop-blur-lg rounded-2xl border border-cyan-500/20 shadow-2xl p-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-cyan-400 font-semibold mb-3">AI Services</h3>
                      <div className="space-y-2">
                        {aiServices.slice(0, 3).map((service, index) => (
                          <Link
                            key={index}
                            to={service.href}
                            className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                            onClick={closeAllMenus}
                          >
                            <service.icon className="w-4 h-4 mr-2" />
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-cyan-400 font-semibold mb-3">IT Services</h3>
                      <div className="space-y-2">
                        {itServices.slice(0, 3).map((service, index) => (
                          <Link
                            key={index}
                            to={service.href}
                            className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors text-sm"
                            onClick={closeAllMenus}
                          >
                            <service.icon className="w-4 h-4 mr-2" />
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-cyan-500/20">
                    <Link
                      to="/services"
                      className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                      onClick={closeAllMenus}
                    >
                      View All Services
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Micro SaaS Dropdown */}
            <div className="relative group">
              <button
                onClick={toggleMicroSaas}
                className="flex items-center text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
              >
                Micro SaaS
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              {microSaasOpen && (
                <div className="absolute top-full left-0 mt-2 w-96 bg-slate-900/95 backdrop-blur-lg rounded-2xl border border-cyan-500/20 shadow-2xl p-6">
                  <h3 className="text-cyan-400 font-semibold mb-4">Popular Micro SaaS Tools</h3>
                  <div className="space-y-3">
                    {microSaasServices.map((service, index) => (
                      <Link
                        key={index}
                        to={service.href}
                        className="flex items-center justify-between p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                        onClick={closeAllMenus}
                      >
                        <div className="flex items-center">
                          <service.icon className="w-5 h-5 text-cyan-400 mr-3" />
                          <div>
                            <div className="text-white font-medium">{service.name}</div>
                            <div className="text-gray-400 text-sm">AI-powered solution</div>
                          </div>
                        </div>
                        <div className="text-cyan-400 font-semibold text-sm">{service.price}</div>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-cyan-500/20">
                    <Link
                      to="/micro-saas"
                      className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                      onClick={closeAllMenus}
                    >
                      View All Micro SaaS
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link to="/pricing" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Pricing
            </Link>
            <Link to="/case-studies" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Case Studies
            </Link>
            <Link to="/blog" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Blog
            </Link>
            <Link to="/tutorials" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Tutorials
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Contact
            </Link>
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+13024640950"
              className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">(302) 464-0950</span>
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm">Email</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white p-2 rounded-md transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-cyan-500/20">
            <div className="pt-4 space-y-4">
              <Link to="/" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
                Home
              </Link>
              <Link to="/about" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
                About
              </Link>
              
              {/* Mobile Services */}
              <div>
                <div className="text-gray-300 font-medium mb-2">Services</div>
                <div className="ml-4 space-y-2">
                  <Link to="/ai-services" className="block text-gray-400 hover:text-cyan-400 transition-colors text-sm" onClick={closeAllMenus}>
                    AI Services
                  </Link>
                  <Link to="/it-services" className="block text-gray-400 hover:text-cyan-400 transition-colors text-sm" onClick={closeAllMenus}>
                    IT Services
                  </Link>
                  <Link to="/services" className="block text-gray-400 hover:text-cyan-400 transition-colors text-sm" onClick={closeAllMenus}>
                    All Services
                  </Link>
                </div>
              </div>

              {/* Mobile Micro SaaS */}
              <div>
                <div className="text-gray-300 font-medium mb-2">Micro SaaS</div>
                <div className="ml-4 space-y-2">
                  {microSaasServices.slice(0, 4).map((service, index) => (
                    <Link
                      key={index}
                      to={service.href}
                      className="block text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                      onClick={closeAllMenus}
                    >
                      {service.name}
                    </Link>
                  ))}
                  <Link to="/micro-saas" className="block text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium" onClick={closeAllMenus}>
                    View All Micro SaaS
                  </Link>
                </div>
              </div>

              <Link to="/pricing" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
                Pricing
              </Link>
              <Link to="/case-studies" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
                Case Studies
              </Link>
              <Link to="/blog" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
                Blog
              </Link>
              <Link to="/tutorials" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
                Tutorials
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
                Contact
              </Link>

              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-cyan-500/20 space-y-2">
                <a
                  href="tel:+13024640950"
                  className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
                >
                  <Phone className="w-4 h-4" />
                  <span>(302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
                >
                  <Mail className="w-4 h-4" />
                  <span>kleber@ziontechgroup.com</span>
                </a>
                <div className="flex items-center space-x-2 text-gray-400">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">364 E Main St STE 1008, Middletown DE 19709</span>
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