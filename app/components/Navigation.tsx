'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Mic, Workflow, Eye, Wifi, MessageSquare, CheckCircle, ShoppingCart } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aiServicesOpen, setAiServicesOpen] = useState(false);
  const [itServicesOpen, setItServicesOpen] = useState(false);
  const [microSaasOpen, setMicroSaasOpen] = useState(false);

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
  }, [servicesOpen]);

  const toggleAiServices = useCallback(() => {
    setAiServicesOpen(!aiServicesOpen);
    setServicesOpen(false);
    setItServicesOpen(false);
    setMicroSaasOpen(false);
  }, [aiServicesOpen]);

  const toggleItServices = useCallback(() => {
    setItServicesOpen(!itServicesOpen);
    setServicesOpen(false);
    setAiServicesOpen(false);
    setMicroSaasOpen(false);
  }, [itServicesOpen]);

  const toggleMicroSaas = useCallback(() => {
    setMicroSaasOpen(!microSaasOpen);
    setServicesOpen(false);
    setAiServicesOpen(false);
    setItServicesOpen(false);
  }, [microSaasOpen]);

  const closeAllMenus = useCallback(() => {
    setServicesOpen(false);
    setAiServicesOpen(false);
    setItServicesOpen(false);
    setMicroSaasOpen(false);
    setIsOpen(false);
  }, []);

  // AI Services data
  const aiServices = [
    { name: 'AI Analytics', href: '/ai-analytics', icon: BarChart, description: 'Advanced data insights' },
    { name: 'AI Automation', href: '/ai-automation', icon: Workflow, description: 'Process automation' },
    { name: 'AI Chatbot Builder', href: '/ai-chatbot-builder', icon: MessageCircle, description: 'Custom chatbots' },
    { name: 'AI Cybersecurity', href: '/ai-cybersecurity', icon: Shield, description: 'AI-powered security' },
    { name: 'AI Content Generation', href: '/ai-content-generation', icon: FileText, description: 'Automated content' },
    { name: 'AI Customer Support', href: '/ai-customer-support', icon: MessageSquare, description: '24/7 support' },
    { name: 'AI Data Analytics', href: '/ai-data-analytics', icon: TrendingUp, description: 'Data intelligence' },
    { name: 'AI Financial Services', href: '/ai-financial-services', icon: DollarSign, description: 'Fintech solutions' },
    { name: 'AI Healthcare', href: '/ai-healthcare', icon: Heart, description: 'Medical AI' },
    { name: 'AI HR Solutions', href: '/ai-hr-solutions', icon: Users, description: 'HR automation' },
    { name: 'AI Marketing', href: '/ai-marketing', icon: Target, description: 'Smart marketing' },
    { name: 'AI Sales Automation', href: '/ai-sales-automation', icon: ShoppingCart, description: 'Sales optimization' },
    { name: 'AI Voice Assistant', href: '/ai-voice-assistant', icon: Mic, description: 'Voice AI' },
    { name: 'AI Workflow Automation', href: '/ai-workflow-automation', icon: Settings, description: 'Workflow optimization' },
    { name: 'Machine Learning', href: '/machine-learning', icon: Brain, description: 'Advanced ML algorithms' }
  ];

  // IT Services data
  const itServices = [
    { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: Cloud, description: 'Scalable cloud solutions' },
    { name: 'Cybersecurity Solutions', href: '/cybersecurity-solutions', icon: Shield, description: 'Advanced security' },
    { name: 'Web Development', href: '/web-development', icon: Code, description: 'Modern web apps' },
    { name: 'Mobile Development', href: '/mobile-development', icon: Smartphone, description: 'iOS & Android apps' },
    { name: 'Database Management', href: '/database-management', icon: Database, description: 'Data optimization' },
    { name: 'API Development', href: '/api-development', icon: LinkIcon, description: 'RESTful APIs' },
    { name: 'DevOps Services', href: '/devops-services', icon: Server, description: 'CI/CD pipelines' },
    { name: 'System Integration', href: '/system-integration', icon: Workflow, description: 'Seamless integration' },
    { name: 'IT Consulting', href: '/it-consulting', icon: Users, description: 'Strategic guidance' },
    { name: 'Software Testing', href: '/software-testing', icon: CheckCircle, description: 'Quality assurance' },
    { name: 'AR/VR Solutions', href: '/ar-vr-solutions', icon: Monitor, description: 'Immersive experiences' },
    { name: 'IoT Integration', href: '/iot-integration', icon: Wifi, description: 'Internet of Things' },
    { name: 'Machine Learning', href: '/machine-learning', icon: Brain, description: 'Advanced ML algorithms' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-lg border-b border-cyan-500/20' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg shadow-cyan-500/25">
                <Brain className="w-6 h-6 text-white" />
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
            
            {/* AI Services Dropdown */}
            <div className="relative group">
              <button
                onClick={toggleAiServices}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
                <Brain className="w-4 h-4" />
                <span>AI Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${aiServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {aiServicesOpen && (
                <div className="absolute top-full left-0 mt-3 w-[500px] bg-slate-900/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-cyan-500/30 p-6 cyber-card-enhanced holographic-card-enhanced">
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-cyan-400 neon-text-enhanced">AI Services</h3>
                    <p className="text-sm text-gray-400">Advanced artificial intelligence solutions</p>
                  </div>
                  <div className="grid grid-cols-1 gap-3 max-h-96 overflow-y-auto custom-scrollbar">
                    {aiServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="flex items-center space-x-4 p-4 rounded-xl hover:bg-cyan-500/10 transition-all duration-300 group cyber-card-enhanced"
                        onClick={closeAllMenus}
                      >
                        <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg shadow-cyan-500/25">
                          <service.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="text-white font-semibold group-hover:text-cyan-300 transition-colors">{service.name}</div>
                          <div className="text-xs text-gray-400 group-hover:text-gray-300">{service.description}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 ml-auto group-hover:translate-x-1 transition-all" />
                      </Link>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-cyan-500/20">
                    <Link
                      to="/ai-services"
                      className="flex items-center justify-center w-full py-2 px-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                      onClick={closeAllMenus}
                    >
                      View All AI Services
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* IT Services Dropdown */}
            <div className="relative group">
              <button
                onClick={toggleItServices}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
                <Cloud className="w-4 h-4" />
                <span>IT Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${itServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {itServicesOpen && (
                <div className="absolute top-full left-0 mt-3 w-[450px] bg-slate-900/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-purple-500/30 p-6 cyber-card-enhanced holographic-card-enhanced">
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-purple-400 neon-text-enhanced">IT Services</h3>
                    <p className="text-sm text-gray-400">Comprehensive technology solutions</p>
                  </div>
                  <div className="grid grid-cols-1 gap-3 max-h-96 overflow-y-auto custom-scrollbar">
                    {itServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="flex items-center space-x-4 p-4 rounded-xl hover:bg-purple-500/10 transition-all duration-300 group cyber-card-enhanced"
                        onClick={closeAllMenus}
                      >
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-500 via-blue-600 to-cyan-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg shadow-purple-500/25">
                          <service.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="text-white font-semibold group-hover:text-purple-300 transition-colors">{service.name}</div>
                          <div className="text-xs text-gray-400 group-hover:text-gray-300">{service.description}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-purple-400 ml-auto group-hover:translate-x-1 transition-all" />
                      </Link>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-purple-500/20">
                    <Link
                      to="/it-services"
                      className="flex items-center justify-center w-full py-2 px-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-lg font-medium hover:from-purple-600 hover:to-blue-700 transition-all duration-300"
                      onClick={closeAllMenus}
                    >
                      View All IT Services
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Micro SaaS Dropdown */}
            <div className="relative group">
              <button
                onClick={toggleMicroSaas}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
                <Package className="w-4 h-4" />
                <span>Micro SaaS</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${microSaasOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {microSaasOpen && (
                <div className="absolute top-full left-0 mt-3 w-[400px] bg-slate-900/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-green-500/30 p-6 cyber-card-enhanced holographic-card-enhanced">
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-green-400 neon-text-enhanced">Micro SaaS Solutions</h3>
                    <p className="text-sm text-gray-400">Specialized software solutions</p>
                  </div>
                  <div className="space-y-3">
                    <Link
                      to="/micro-saas"
                      className="flex items-center space-x-4 p-4 rounded-xl hover:bg-green-500/10 transition-all duration-300 group cyber-card-enhanced"
                      onClick={closeAllMenus}
                    >
                      <div className="w-10 h-10 bg-gradient-to-r from-green-500 via-emerald-600 to-teal-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg shadow-green-500/25">
                        <Package className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="text-white font-semibold group-hover:text-green-300 transition-colors">All Micro SaaS</div>
                        <div className="text-xs text-gray-400 group-hover:text-gray-300">Explore our specialized solutions</div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-green-400 ml-auto group-hover:translate-x-1 transition-all" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              About
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Contact
            </Link>
            <Link to="/pricing" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Pricing
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/consultation"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-900/98 backdrop-blur-xl border-t border-cyan-500/20">
            <Link
              to="/"
              className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
              onClick={closeAllMenus}
            >
              Home
            </Link>
            
            {/* Mobile AI Services */}
            <div>
              <button
                onClick={toggleAiServices}
                className="flex items-center justify-between w-full px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
              >
                <div className="flex items-center space-x-2">
                  <Brain className="w-4 h-4" />
                  <span>AI Services</span>
                </div>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${aiServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {aiServicesOpen && (
                <div className="pl-6 space-y-1">
                  {aiServices.slice(0, 5).map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="block px-3 py-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                      onClick={closeAllMenus}
                    >
                      {service.name}
                    </Link>
                  ))}
                  <Link
                    to="/ai-services"
                    className="block px-3 py-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
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
                className="flex items-center justify-between w-full px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
              >
                <div className="flex items-center space-x-2">
                  <Cloud className="w-4 h-4" />
                  <span>IT Services</span>
                </div>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${itServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {itServicesOpen && (
                <div className="pl-6 space-y-1">
                  {itServices.slice(0, 5).map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="block px-3 py-2 text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                      onClick={closeAllMenus}
                    >
                      {service.name}
                    </Link>
                  ))}
                  <Link
                    to="/it-services"
                    className="block px-3 py-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
                    onClick={closeAllMenus}
                  >
                    View All IT Services →
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/about"
              className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
              onClick={closeAllMenus}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
              onClick={closeAllMenus}
            >
              Contact
            </Link>
            <Link
              to="/pricing"
              className="block px-3 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
              onClick={closeAllMenus}
            >
              Pricing
            </Link>
            <Link
              to="/consultation"
              className="block px-3 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-center"
              onClick={closeAllMenus}
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;