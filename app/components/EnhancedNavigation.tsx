'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, BarChart, Users, Zap, ArrowRight, Sparkles, Cpu, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings, Calendar, CheckSquare, FileText, MessageCircle, Heart, DollarSign, Box, Monitor, Link as LinkIcon, Server, Package, Mic, Workflow, Eye, Wifi } from 'lucide-react';

const EnhancedNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aiServicesOpen, setAiServicesOpen] = useState(false);
  const [itServicesOpen, setItServicesOpen] = useState(false);
  const [microSaasOpen, setMicroSaasOpen] = useState(false);
  const [emergingTechOpen, setEmergingTechOpen] = useState(false);

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
    setEmergingTechOpen(false);
  }, [servicesOpen]);

  const toggleAiServices = useCallback(() => {
    setAiServicesOpen(!aiServicesOpen);
    setServicesOpen(false);
    setItServicesOpen(false);
    setMicroSaasOpen(false);
    setEmergingTechOpen(false);
  }, [aiServicesOpen]);

  const toggleItServices = useCallback(() => {
    setItServicesOpen(!itServicesOpen);
    setServicesOpen(false);
    setAiServicesOpen(false);
    setMicroSaasOpen(false);
    setEmergingTechOpen(false);
  }, [itServicesOpen]);

  const toggleMicroSaas = useCallback(() => {
    setMicroSaasOpen(!microSaasOpen);
    setServicesOpen(false);
    setAiServicesOpen(false);
    setItServicesOpen(false);
    setEmergingTechOpen(false);
  }, [microSaasOpen]);

  const toggleEmergingTech = useCallback(() => {
    setEmergingTechOpen(!emergingTechOpen);
    setServicesOpen(false);
    setAiServicesOpen(false);
    setItServicesOpen(false);
    setMicroSaasOpen(false);
  }, [emergingTechOpen]);

  const closeAllMenus = useCallback(() => {
    setIsOpen(false);
    setServicesOpen(false);
    setAiServicesOpen(false);
    setItServicesOpen(false);
    setMicroSaasOpen(false);
    setEmergingTechOpen(false);
  }, []);

  // Organized AI Services by category
  const aiServices = {
    'Core AI': [
      { name: 'AI Analytics', href: '/ai-analytics', icon: BarChart, description: 'Advanced data insights' },
      { name: 'AI Automation', href: '/ai-automation', icon: Zap, description: 'Streamline workflows' },
      { name: 'AI Data Analytics', href: '/ai-data-analytics', icon: Database, description: 'Data-driven insights' },
      { name: 'AI Predictive Analytics', href: '/ai-predictive-analytics', icon: BarChart, description: 'Business forecasting' },
      { name: 'AI Predictive Modeling', href: '/ai-predictive-modeling', icon: BarChart, description: 'ML forecasting' }
    ],
    'Communication & Content': [
      { name: 'AI Chatbot Builder', href: '/ai-chatbot-builder', icon: MessageCircle, description: 'Intelligent conversations' },
      { name: 'AI Enterprise Chatbot', href: '/ai-chatbot-enterprise', icon: MessageCircle, description: 'Enterprise-grade chatbots' },
      { name: 'AI Conversational AI', href: '/ai-conversational-ai', icon: MessageCircle, description: 'Advanced conversations' },
      { name: 'AI Voice Solutions', href: '/ai-voice-solutions', icon: Mic, description: 'Speech recognition' },
      { name: 'AI Speech Synthesis', href: '/ai-speech-synthesis', icon: Mic, description: 'Text-to-speech' },
      { name: 'AI Content Generation', href: '/ai-content-generation', icon: FileText, description: 'Automated content' },
      { name: 'AI Content Generation Pro', href: '/ai-content-generation-pro', icon: FileText, description: 'Advanced content creation' },
      { name: 'AI Content Moderation', href: '/ai-content-moderation', icon: Shield, description: 'Automated content filtering' }
    ],
    'Business Solutions': [
      { name: 'AI CRM', href: '/ai-crm', icon: Users, description: 'Customer relationship management' },
      { name: 'AI E-commerce', href: '/ai-ecommerce-solutions', icon: Globe, description: 'E-commerce optimization' },
      { name: 'AI HR Solutions', href: '/ai-hr-solutions', icon: Users, description: 'Human resources AI' },
      { name: 'AI Financial Services', href: '/ai-financial-services', icon: DollarSign, description: 'Financial technology' },
      { name: 'AI Financial Forecasting', href: '/ai-financial-forecasting', icon: TrendingUp, description: 'Financial predictions' },
      { name: 'AI Customer Churn', href: '/ai-customer-churn', icon: Users, description: 'Churn prevention' },
      { name: 'AI Automated Reporting', href: '/ai-automated-reporting', icon: BarChart, description: 'Smart reporting' }
    ],
    'Technical & Security': [
      { name: 'AI Cybersecurity', href: '/ai-cybersecurity', icon: Shield, description: 'Advanced threat protection' },
      { name: 'AI Computer Vision', href: '/ai-computer-vision', icon: Eye, description: 'Image & video analysis' },
      { name: 'AI Video Analysis', href: '/ai-video-analysis', icon: Eye, description: 'Video content analysis' },
      { name: 'AI Edge Computing', href: '/ai-edge-computing', icon: Cpu, description: 'Distributed AI processing' },
      { name: 'AI Automated Testing', href: '/ai-automated-testing', icon: CheckSquare, description: 'Intelligent testing' },
      { name: 'AI IoT Analytics', href: '/ai-iot-analytics', icon: Cpu, description: 'IoT data analysis' }
    ],
    'Specialized': [
      { name: 'AI Healthcare', href: '/ai-healthcare', icon: Heart, description: 'Medical AI solutions' },
      { name: 'AI Healthcare Diagnostics', href: '/ai-healthcare-diagnostics', icon: Heart, description: 'Medical diagnostics' },
      { name: 'AI Document Processing', href: '/ai-document-processing', icon: FileText, description: 'Document analysis' },
      { name: 'AI Document Intelligence', href: '/ai-document-intelligence', icon: FileText, description: 'Smart document processing' },
      { name: 'AI Workflow Automation', href: '/ai-workflow-automation', icon: Workflow, description: 'Process optimization' },
      { name: 'AI Recommendation Engine', href: '/ai-recommendation-engine', icon: Target, description: 'Personalized recommendations' },
      { name: 'AI Sentiment Analysis', href: '/ai-sentiment-analysis', icon: Heart, description: 'Emotion detection' },
      { name: 'AI Conversation Analytics', href: '/ai-conversation-analytics', icon: Users, description: 'Conversation insights' },
      { name: 'AI Supply Chain AI', href: '/ai-supply-chain-ai', icon: Box, description: 'Supply chain optimization' },
      { name: 'AI Knowledge Management', href: '/ai-knowledge-management', icon: FileText, description: 'Smart knowledge systems' }
    ]
  };

  // Organized IT Services by category
  const itServices = {
    'Development': [
      { name: 'Web Development', href: '/web-development', icon: Globe, description: 'Modern web applications' },
      { name: 'Mobile Development', href: '/mobile-development', icon: Smartphone, description: 'iOS & Android apps' },
      { name: 'API Development', href: '/api-development', icon: Code, description: 'API development & management' },
      { name: 'API Development Advanced', href: '/api-development-advanced', icon: Code, description: 'Enterprise-grade APIs' },
      { name: 'Custom Software', href: '/custom-software', icon: Code, description: 'Tailored solutions' },
      { name: 'E-commerce Development', href: '/e-commerce-development', icon: Globe, description: 'Online store platforms' },
      { name: 'Blockchain Development', href: '/blockchain-development', icon: LinkIcon, description: 'Smart contracts & DeFi' },
      { name: 'IoT Development', href: '/iot-development', icon: Wifi, description: 'Connected device solutions' }
    ],
    'Cloud & Infrastructure': [
      { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: Cloud, description: 'Scalable cloud solutions' },
      { name: 'Cloud-Native Development', href: '/cloud-native-development', icon: Cloud, description: 'Microservices & containers' },
      { name: 'Cloud Migration Advanced', href: '/cloud-migration-advanced', icon: Cloud, description: 'Zero-downtime migration' },
      { name: 'Cloud Cost Optimization', href: '/cloud-cost-optimization', icon: TrendingUp, description: 'Cost reduction' },
      { name: 'Cloud-Native Security', href: '/cloud-native-security', icon: Shield, description: 'Container security' },
      { name: 'Network Infrastructure', href: '/network-infrastructure', icon: Wifi, description: 'Network design & setup' }
    ],
    'Security & Compliance': [
      { name: 'Cybersecurity Solutions', href: '/cybersecurity-solutions', icon: Shield, description: 'Comprehensive security' },
      { name: 'Cybersecurity Advanced', href: '/cybersecurity-advanced', icon: Shield, description: 'Threat hunting & response' },
      { name: 'IT Security Services', href: '/it-security-services', icon: Lock, description: 'Security assessment & monitoring' },
      { name: 'Security Automation', href: '/security-automation', icon: Shield, description: 'Automated security' },
      { name: 'Compliance Automation', href: '/compliance-automation', icon: CheckSquare, description: 'Regulatory compliance' }
    ],
    'Data & Analytics': [
      { name: 'Data Analytics & BI', href: '/data-analytics-bi', icon: BarChart, description: 'Business intelligence' },
      { name: 'Data Engineering', href: '/data-engineering', icon: Database, description: 'Data pipeline development' },
      { name: 'Data Visualization', href: '/data-visualization', icon: BarChart, description: 'Advanced dashboards' },
      { name: 'Database Management', href: '/database-management', icon: Database, description: 'Data processing & storage' }
    ],
    'Operations & Support': [
      { name: 'DevOps & CI/CD', href: '/devops-cicd', icon: Settings, description: 'Automated deployment' },
      { name: 'DevOps Advanced', href: '/devops-advanced', icon: Settings, description: 'Site reliability engineering' },
      { name: 'IT Support', href: '/it-support', icon: Monitor, description: '24/7 technical support' },
      { name: 'IT Project Management', href: '/it-project-management', icon: Calendar, description: 'Professional project management' },
      { name: 'IT Asset Management', href: '/it-asset-management', icon: Package, description: 'Asset lifecycle management' },
      { name: 'Performance Optimization', href: '/performance-optimization', icon: Zap, description: 'App & infrastructure optimization' },
      { name: 'Workflow Automation', href: '/workflow-automation', icon: Settings, description: 'Process automation' },
      { name: 'Disaster Recovery Advanced', href: '/disaster-recovery-advanced', icon: Shield, description: 'Business continuity' }
    ],
    'AI & Advanced': [
      { name: 'AI Integration Services', href: '/ai-integration-services', icon: Brain, description: 'AI model integration' },
      { name: 'Machine Learning Ops', href: '/machine-learning-ops', icon: Cpu, description: 'ML model deployment' },
      { name: 'Enterprise Integration', href: '/enterprise-integration', icon: LinkIcon, description: 'System integration' }
    ]
  };

  // Micro SAAS Services (organized by category)
  const microSaasServices = {
    'Analytics & Intelligence': [
      { name: 'Zion Analytics Pro', href: '/zion-analytics-pro', icon: BarChart, description: 'Business intelligence platform' },
      { name: 'Zion Customer Insights', href: '/zion-customer-insights', icon: Users, description: 'Customer analytics' },
      { name: 'Zion Performance Monitor', href: '/zion-performance-monitor', icon: Monitor, description: 'Performance monitoring' }
    ],
    'Communication & Support': [
      { name: 'Zion Chat AI', href: '/zion-chat-ai', icon: MessageCircle, description: 'AI customer support' },
      { name: 'Zion AI Email Assistant', href: '/zion-ai-email-assistant', icon: Mail, description: 'Smart email management' },
      { name: 'Zion AI Meeting Assistant', href: '/zion-ai-meeting-assistant', icon: Calendar, description: 'Meeting automation' },
      { name: 'Zion AI Customer Service Pro', href: '/zion-ai-customer-service-pro', icon: MessageCircle, description: 'Advanced customer service' }
    ],
    'Content & Marketing': [
      { name: 'Zion Content Studio', href: '/zion-content-studio', icon: FileText, description: 'AI content creation' },
      { name: 'Zion AI Video Editor', href: '/zion-ai-video-editor', icon: Eye, description: 'AI video editing' },
      { name: 'Zion AI Translator Pro', href: '/zion-ai-translator-pro', icon: Globe, description: 'Advanced translation' },
      { name: 'Zion Social Scheduler', href: '/zion-social-scheduler', icon: Globe, description: 'Social media management' },
      { name: 'Zion AI SEO Optimizer', href: '/zion-ai-seo-optimizer', icon: Target, description: 'SEO optimization' },
      { name: 'Zion AI Marketing Automation', href: '/zion-ai-marketing-automation', icon: Target, description: 'Marketing AI' }
    ],
    'Business Operations': [
      { name: 'Zion CRM Intelligence', href: '/zion-crm-intelligence', icon: Users, description: 'AI-enhanced CRM' },
      { name: 'Zion Lead Magnet', href: '/zion-lead-magnet', icon: Target, description: 'Lead generation platform' },
      { name: 'Zion Project Master', href: '/zion-project-master', icon: Calendar, description: 'Project management AI' },
      { name: 'Zion Workflow Automation', href: '/zion-workflow-automation', icon: Settings, description: 'Process automation' },
      { name: 'Zion Invoice Genius', href: '/zion-invoice-genius', icon: DollarSign, description: 'Invoice generation' },
      { name: 'Zion Inventory Smart', href: '/zion-inventory-smart', icon: Package, description: 'Inventory management' }
    ],
    'Security & Compliance': [
      { name: 'Zion Security Shield', href: '/zion-security-shield', icon: Shield, description: 'Cybersecurity monitoring' },
      { name: 'Zion Cloud Vault', href: '/zion-cloud-vault', icon: Cloud, description: 'Cloud backup & recovery' },
      { name: 'Zion Compliance Manager', href: '/zion-compliance-manager', icon: CheckSquare, description: 'Compliance management' },
      { name: 'Zion AI Fraud Detector', href: '/zion-ai-fraud-detector', icon: Shield, description: 'Fraud detection' }
    ],
    'Data & Development': [
      { name: 'Zion Data Sync', href: '/zion-data-sync', icon: Database, description: 'Data integration platform' },
      { name: 'Zion AI Data Cleaner', href: '/zion-ai-data-cleaner', icon: Database, description: 'Data cleaning & validation' },
      { name: 'Zion AI Code Reviewer', href: '/zion-ai-code-reviewer', icon: Code, description: 'Intelligent code review' }
    ]
  };

  // Emerging Technologies
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
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
                <div className="absolute top-full left-0 mt-2 w-[800px] bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-cyan-500/20 p-6 cyber-card">
                  <div className="grid grid-cols-2 gap-6">
                    {Object.entries(aiServices).map(([category, services]) => (
                      <div key={category}>
                        <h3 className="text-lg font-semibold text-cyan-400 mb-3">{category}</h3>
                        <div className="space-y-2">
                          {services.map((service) => (
                            <Link
                              key={service.name}
                              to={service.href}
                              className="flex items-center space-x-3 p-2 rounded-lg hover:bg-cyan-500/10 transition-colors duration-300 group"
                              onClick={closeAllMenus}
                            >
                              <service.icon className="w-4 h-4 text-cyan-400 group-hover:text-cyan-300" />
                              <div className="flex-1">
                                <div className="text-white font-medium text-sm">{service.name}</div>
                                <div className="text-xs text-gray-400">{service.description}</div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
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
                <Cloud className="w-4 h-4" />
                <span>IT Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${itServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {itServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-[800px] bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-cyan-500/20 p-6 cyber-card">
                  <div className="grid grid-cols-2 gap-6">
                    {Object.entries(itServices).map(([category, services]) => (
                      <div key={category}>
                        <h3 className="text-lg font-semibold text-cyan-400 mb-3">{category}</h3>
                        <div className="space-y-2">
                          {services.map((service) => (
                            <Link
                              key={service.name}
                              to={service.href}
                              className="flex items-center space-x-3 p-2 rounded-lg hover:bg-cyan-500/10 transition-colors duration-300 group"
                              onClick={closeAllMenus}
                            >
                              <service.icon className="w-4 h-4 text-cyan-400 group-hover:text-cyan-300" />
                              <div className="flex-1">
                                <div className="text-white font-medium text-sm">{service.name}</div>
                                <div className="text-xs text-gray-400">{service.description}</div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Micro SAAS Dropdown */}
            <div className="relative group">
              <button
                onClick={toggleMicroSaas}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
                <Cpu className="w-4 h-4" />
                <span>Micro SAAS</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${microSaasOpen ? 'rotate-180' : ''}`} />
              </button>
              {microSaasOpen && (
                <div className="absolute top-full left-0 mt-2 w-[800px] bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-cyan-500/20 p-6 cyber-card">
                  <div className="grid grid-cols-2 gap-6">
                    {Object.entries(microSaasServices).map(([category, services]) => (
                      <div key={category}>
                        <h3 className="text-lg font-semibold text-cyan-400 mb-3">{category}</h3>
                        <div className="space-y-2">
                          {services.map((service) => (
                            <Link
                              key={service.name}
                              to={service.href}
                              className="flex items-center space-x-3 p-2 rounded-lg hover:bg-cyan-500/10 transition-colors duration-300 group"
                              onClick={closeAllMenus}
                            >
                              <service.icon className="w-4 h-4 text-cyan-400 group-hover:text-cyan-300" />
                              <div className="flex-1">
                                <div className="text-white font-medium text-sm">{service.name}</div>
                                <div className="text-xs text-gray-400">{service.description}</div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Emerging Technologies Dropdown */}
            <div className="relative group">
              <button
                onClick={toggleEmergingTech}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
                <Zap className="w-4 h-4" />
                <span>Emerging Tech</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${emergingTechOpen ? 'rotate-180' : ''}`} />
              </button>
              {emergingTechOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-cyan-500/20 p-4 cyber-card">
                  <div className="grid grid-cols-1 gap-2">
                    {emergingTech.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-colors duration-300 group"
                        onClick={closeAllMenus}
                      >
                        <service.icon className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300" />
                        <div>
                          <div className="text-white font-medium">{service.name}</div>
                          <div className="text-xs text-gray-400">{service.description}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 ml-auto" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link to="/about" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              About
            </Link>
            <Link to="/services" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Services
            </Link>
            <Link to="/pricing" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Pricing
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
              className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium">
              <Phone className="w-4 h-4" />
              <span className="text-sm">(302) 464-0950</span>
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium">
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
                    {Object.entries(aiServices).map(([category, services]) => (
                      <div key={category}>
                        <h4 className="text-sm font-semibold text-cyan-400 mb-2">{category}</h4>
                        {services.slice(0, 3).map((service) => (
                          <Link
                            key={service.name}
                            to={service.href}
                            className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300 ml-2"
                            onClick={closeAllMenus}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
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
                    {Object.entries(itServices).map(([category, services]) => (
                      <div key={category}>
                        <h4 className="text-sm font-semibold text-cyan-400 mb-2">{category}</h4>
                        {services.slice(0, 3).map((service) => (
                          <Link
                            key={service.name}
                            to={service.href}
                            className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300 ml-2"
                            onClick={closeAllMenus}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
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
                    {Object.entries(microSaasServices).map(([category, services]) => (
                      <div key={category}>
                        <h4 className="text-sm font-semibold text-cyan-400 mb-2">{category}</h4>
                        {services.slice(0, 3).map((service) => (
                          <Link
                            key={service.name}
                            to={service.href}
                            className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300 ml-2"
                            onClick={closeAllMenus}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
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
              <Link to="/services" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
                Services
              </Link>
              <Link to="/pricing" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
                Pricing
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