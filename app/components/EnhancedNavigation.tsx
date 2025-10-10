'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Mic, Workflow, Eye, Wifi, MessageSquare, CheckCircle, ShoppingCart } from 'lucide-react';

const EnhancedNavigation: React.FC = () => {
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
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && !(event.target as Element).closest('.mobile-menu')) {
        setIsOpen(false);
      }
    }
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
    setIsOpen(false);
    setServicesOpen(false);
    setAiServicesOpen(false);
    setItServicesOpen(false);
    setMicroSaasOpen(false);
  }, []);

  // Service data with enhanced organization
  const aiServices = [
    { name: 'AI Analytics', href: '/ai-analytics', icon: BarChart, description: 'Advanced data insights', category: 'Analytics' },
    { name: 'AI Automation', href: '/ai-automation', icon: Zap, description: 'Streamline workflows', category: 'Automation' },
    { name: 'AI Chatbot', href: '/ai-chatbot-builder', icon: MessageCircle, description: 'Intelligent conversations', category: 'Communication' },
    { name: 'AI CRM', href: '/ai-crm', icon: Users, description: 'Customer relationship management', category: 'CRM' },
    { name: 'AI Cybersecurity', href: '/ai-cybersecurity', icon: Shield, description: 'Advanced threat protection', category: 'Security' },
    { name: 'AI Data Analytics', href: '/ai-data-analytics', icon: Database, description: 'Data-driven insights', category: 'Analytics' },
    { name: 'AI Healthcare', href: '/ai-healthcare', icon: Heart, description: 'Medical AI solutions', category: 'Healthcare' },
    { name: 'AI Financial Services', href: '/ai-financial-services', icon: DollarSign, description: 'Financial technology', category: 'Finance' },
    { name: 'AI Computer Vision', href: '/ai-computer-vision', icon: Eye, description: 'Image & video analysis', category: 'Vision' },
    { name: 'AI Voice Solutions', href: '/ai-voice-solutions', icon: Mic, description: 'Speech recognition', category: 'Voice' },
    { name: 'AI E-commerce', href: '/ai-ecommerce-solutions', icon: Globe, description: 'E-commerce optimization', category: 'E-commerce' },
    { name: 'AI HR Solutions', href: '/ai-hr-solutions', icon: Users, description: 'Human resources AI', category: 'HR' },
    { name: 'AI Content Generation', href: '/ai-content-generation', icon: FileText, description: 'Automated content', category: 'Content' },
    { name: 'AI Workflow Automation', href: '/ai-workflow-automation', icon: Workflow, description: 'Process optimization', category: 'Automation' },
    { name: 'AI Document Processing', href: '/ai-document-processing', icon: FileText, description: 'Document analysis', category: 'Document' },
    { name: 'AI Predictive Analytics', href: '/ai-predictive-analytics', icon: BarChart, description: 'Business forecasting', category: 'Analytics' },
    { name: 'AI Edge Computing', href: '/ai-edge-computing', icon: Cpu, description: 'Distributed AI processing', category: 'Infrastructure' },
    { name: 'AI Video Analysis', href: '/ai-video-analysis', icon: Eye, description: 'Video content analysis', category: 'Vision' },
    { name: 'AI Speech Synthesis', href: '/ai-speech-synthesis', icon: Mic, description: 'Text-to-speech', category: 'Voice' },
    { name: 'AI Recommendation Engine', href: '/ai-recommendation-engine', icon: Target, description: 'Personalized recommendations', category: 'Recommendation' }
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', href: '/it-services/cloud-infrastructure-advanced', icon: Cloud, description: 'Scalable cloud solutions', category: 'Infrastructure' },
    { name: 'API Development', href: '/api-development', icon: Code, description: 'API development & management', category: 'Development' },
    { name: 'Cybersecurity', href: '/it-services/cybersecurity-advanced', icon: Shield, description: 'Comprehensive security', category: 'Security' },
    { name: 'Database Management', href: '/database-management', icon: Database, description: 'Data processing & storage', category: 'Database' },
    { name: 'Mobile Development', href: '/mobile-development', icon: Smartphone, description: 'iOS & Android apps', category: 'Development' },
    { name: 'Web Development', href: '/web-development', icon: Globe, description: 'Modern web applications', category: 'Development' },
    { name: 'DevOps & CI/CD', href: '/devops-cicd', icon: Settings, description: 'Automated deployment', category: 'DevOps' },
    { name: 'IT Support', href: '/it-support', icon: Monitor, description: '24/7 technical support', category: 'Support' },
    { name: 'Data Analytics & BI', href: '/data-analytics-bi', icon: BarChart, description: 'Business intelligence', category: 'Analytics' },
    { name: 'Custom Software', href: '/custom-software', icon: Code, description: 'Tailored solutions', category: 'Development' },
    { name: 'Network Infrastructure', href: '/network-infrastructure', icon: Wifi, description: 'Network design & setup', category: 'Infrastructure' },
    { name: 'IT Asset Management', href: '/it-asset-management', icon: Package, description: 'Asset lifecycle management', category: 'Management' },
    { name: 'IT Security Services', href: '/it-security-services', icon: Lock, description: 'Security assessment & monitoring', category: 'Security' },
    { name: 'IT Project Management', href: '/it-project-management', icon: Calendar, description: 'Professional project management', category: 'Management' },
    { name: 'Cloud-Native Development', href: '/cloud-native-development', icon: Cloud, description: 'Microservices & containers', category: 'Development' },
    { name: 'AI Integration Services', href: '/ai-integration-services', icon: Brain, description: 'AI model integration', category: 'AI Integration' },
    { name: 'Blockchain Development', href: '/blockchain-development', icon: LinkIcon, description: 'Smart contracts & DeFi', category: 'Development' },
    { name: 'IoT Development', href: '/iot-development', icon: Wifi, description: 'Connected device solutions', category: 'Development' },
    { name: 'E-commerce Development', href: '/e-commerce-development', icon: ShoppingCart, description: 'Online store platforms', category: 'Development' },
    { name: 'Advanced API Development', href: '/api-development-advanced', icon: Code, description: 'Enterprise-grade APIs', category: 'Development' }
  ];

  const microSaasServices = [
    { name: 'Zion AI Scheduler Pro', href: '/zion-ai-scheduler-pro', icon: Calendar, description: 'AI-powered scheduling', category: 'Productivity' },
    { name: 'Zion AI Content Optimizer', href: '/zion-ai-content-optimizer', icon: FileText, description: 'Content optimization AI', category: 'Content' },
    { name: 'Zion AI Email Automation', href: '/zion-ai-email-automation', icon: Mail, description: 'Email marketing AI', category: 'Marketing' },
    { name: 'Zion AI Social Media Manager', href: '/zion-ai-social-media-manager', icon: MessageSquare, description: 'Social media AI', category: 'Social Media' },
    { name: 'Zion Analytics Pro', href: '/zion-analytics-pro', icon: BarChart, description: 'Business intelligence platform', category: 'Analytics' },
    { name: 'Zion Chat AI', href: '/zion-chat-ai', icon: MessageCircle, description: 'AI customer support', category: 'Support' },
    { name: 'Zion Security Shield', href: '/zion-security-shield', icon: Shield, description: 'Cybersecurity monitoring', category: 'Security' },
    { name: 'Zion Cloud Vault', href: '/zion-cloud-vault', icon: Cloud, description: 'Cloud backup & recovery', category: 'Cloud' },
    { name: 'Zion Content Studio', href: '/zion-content-studio', icon: FileText, description: 'AI content creation', category: 'Content' },
    { name: 'Zion CRM Intelligence', href: '/zion-crm-intelligence', icon: Users, description: 'AI-enhanced CRM', category: 'CRM' },
    { name: 'Zion Data Sync', href: '/zion-data-sync', icon: Database, description: 'Data integration platform', category: 'Data' },
    { name: 'Zion Lead Magnet', href: '/zion-lead-magnet', icon: Target, description: 'Lead generation platform', category: 'Marketing' },
    { name: 'Zion Project Master', href: '/zion-project-master', icon: Calendar, description: 'Project management AI', category: 'Project Management' },
    { name: 'Zion Email Automation', href: '/zion-email-automation', icon: Mail, description: 'Email marketing AI', category: 'Marketing' },
    { name: 'Zion Inventory Smart', href: '/zion-inventory-smart', icon: Package, description: 'Inventory management', category: 'Inventory' },
    { name: 'Zion Invoice Genius', href: '/zion-invoice-genius', icon: DollarSign, description: 'Invoice generation', category: 'Finance' },
    { name: 'Zion Workflow Automation', href: '/zion-workflow-automation', icon: Settings, description: 'Process automation', category: 'Automation' },
    { name: 'Zion Performance Monitor', href: '/zion-performance-monitor', icon: Monitor, description: 'Performance monitoring', category: 'Monitoring' },
    { name: 'Zion Compliance Manager', href: '/zion-compliance-manager', icon: CheckSquare, description: 'Compliance management', category: 'Compliance' },
    { name: 'Zion Social Scheduler', href: '/zion-social-scheduler', icon: Globe, description: 'Social media management', category: 'Social Media' }
  ];

  const emergingTech = [
    { name: '5G Implementation', href: '/5g-implementation', icon: Zap, description: 'Next-gen connectivity' },
    { name: 'AI 3D Generation', href: '/ai-3d-generation', icon: Box, description: '3D content creation' },
    { name: 'AI Holographic Workspace', href: '/ai-holographic-workspace', icon: Monitor, description: 'Immersive work environments' },
    { name: 'AI Autonomous Systems', href: '/ai-autonomous-systems', icon: Cpu, description: 'Self-operating systems' },
    { name: 'AI Blockchain Solutions', href: '/ai-blockchain-solutions', icon: LinkIcon, description: 'Decentralized AI' },
    { name: 'AI Edge Computing', href: '/ai-edge-computing', icon: Server, description: 'Distributed processing' },
    { name: 'Quantum Computing', href: '/quantum-computing', icon: Cpu, description: 'Quantum processing power' },
    { name: 'AR/VR Solutions', href: '/ar-vr-solutions', icon: Monitor, description: 'Immersive experiences' },
    { name: 'IoT Integration', href: '/iot-integration', icon: Wifi, description: 'Internet of Things' },
    { name: 'Machine Learning', href: '/machine-learning', icon: Brain, description: 'Advanced ML algorithms' }
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
                <div className="absolute top-full left-0 mt-3 w-[600px] bg-slate-900/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-cyan-500/30 p-6 cyber-card-enhanced holographic-card-enhanced">
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-cyan-400 neon-text-enhanced">AI Services</h3>
                    <p className="text-sm text-gray-400">Advanced artificial intelligence solutions</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3 max-h-96 overflow-y-auto custom-scrollbar">
                    {aiServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="flex items-center space-x-4 p-4 rounded-xl hover:bg-cyan-500/10 transition-all duration-300 group cyber-card-enhanced"
                        onClick={closeAllMenus}
                      >
                        <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          <service.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-white font-semibold group-hover:text-cyan-400 transition-colors">{service.name}</h4>
                          <p className="text-gray-400 text-sm">{service.description}</p>
                          <span className="text-xs text-cyan-400">{service.category}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* IT Services Dropdown */}
            <div className="relative group">
              <button
                onClick={toggleItServices}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
                <Settings className="w-4 h-4" />
                <span>IT Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${itServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {itServicesOpen && (
                <div className="absolute top-full left-0 mt-3 w-[600px] bg-slate-900/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-cyan-500/30 p-6 cyber-card-enhanced holographic-card-enhanced">
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-cyan-400 neon-text-enhanced">IT Services</h3>
                    <p className="text-sm text-gray-400">Comprehensive technology solutions</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3 max-h-96 overflow-y-auto custom-scrollbar">
                    {itServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="flex items-center space-x-4 p-4 rounded-xl hover:bg-cyan-500/10 transition-all duration-300 group cyber-card-enhanced"
                        onClick={closeAllMenus}
                      >
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          <service.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-white font-semibold group-hover:text-cyan-400 transition-colors">{service.name}</h4>
                          <p className="text-gray-400 text-sm">{service.description}</p>
                          <span className="text-xs text-cyan-400">{service.category}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Micro SaaS Dropdown */}
            <div className="relative group">
              <button
                onClick={toggleMicroSaas}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
                <Box className="w-4 h-4" />
                <span>Micro SaaS</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${microSaasOpen ? 'rotate-180' : ''}`} />
              </button>
              {microSaasOpen && (
                <div className="absolute top-full left-0 mt-3 w-[600px] bg-slate-900/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-cyan-500/30 p-6 cyber-card-enhanced holographic-card-enhanced">
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-cyan-400 neon-text-enhanced">Micro SaaS</h3>
                    <p className="text-sm text-gray-400">Specialized software solutions</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3 max-h-96 overflow-y-auto custom-scrollbar">
                    {microSaasServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="flex items-center space-x-4 p-4 rounded-xl hover:bg-cyan-500/10 transition-all duration-300 group cyber-card-enhanced"
                        onClick={closeAllMenus}
                      >
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          <service.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-white font-semibold group-hover:text-cyan-400 transition-colors">{service.name}</h4>
                          <p className="text-gray-400 text-sm">{service.description}</p>
                          <span className="text-xs text-cyan-400">{service.category}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              About
            </Link>
            <Link to="/pricing" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Pricing
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Contact
            </Link>
          </div>

          {/* Contact Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+13024640950"
              className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
            >
              <Phone className="w-4 h-4" />
              <span>(302) 464-0950</span>
            </a>
            <a
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
            >
              Get Quote
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-900/95 backdrop-blur-md rounded-lg mt-2 border border-cyan-500/20">
              <Link to="/" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
                Home
              </Link>
              <Link to="/about" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
                About
              </Link>
              <Link to="/services" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
                Services
              </Link>
              <Link to="/pricing" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
                Pricing
              </Link>
              <Link to="/case-studies" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
                Case Studies
              </Link>
              <Link to="/blog" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
                Blog
              </Link>
              <Link to="/contact" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
                Contact
              </Link>

              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-cyan-500/20 space-y-2">
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
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default EnhancedNavigation;