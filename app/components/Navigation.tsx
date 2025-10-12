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
    setIsOpen(false);
    setServicesOpen(false);
    setAiServicesOpen(false);
    setItServicesOpen(false);
    setMicroSaasOpen(false);
  }, []);

  // Service data
  const aiServices = [
    { name: 'AI Analytics', href: '/ai-analytics', icon: BarChart, description: 'Advanced data insights' },
    { name: 'AI Automation', href: '/ai-automation', icon: Zap, description: 'Streamline workflows' },
    { name: 'AI Chatbot Builder', href: '/ai-chatbot-builder', icon: MessageCircle, description: 'Intelligent conversations' },
    { name: 'AI CRM', href: '/ai-crm', icon: Users, description: 'Customer relationship management' },
    { name: 'AI Cybersecurity', href: '/ai-cybersecurity', icon: Shield, description: 'Advanced threat protection' },
    { name: 'AI Data Analytics', href: '/ai-data-analytics', icon: Database, description: 'Data-driven insights' },
    { name: 'AI Healthcare', href: '/ai-healthcare', icon: Heart, description: 'Medical AI solutions' },
    { name: 'AI Financial Services', href: '/ai-financial-services', icon: DollarSign, description: 'Financial technology' },
    { name: 'AI Computer Vision', href: '/ai-computer-vision', icon: Eye, description: 'Image & video analysis' },
    { name: 'AI Voice Solutions', href: '/ai-voice-solutions', icon: Mic, description: 'Speech recognition' },
    { name: 'AI E-commerce', href: '/ai-ecommerce-solutions', icon: Globe, description: 'E-commerce optimization' },
    { name: 'AI HR Solutions', href: '/ai-hr-solutions', icon: Users, description: 'Human resources AI' },
    { name: 'AI Content Generation', href: '/ai-content-generation', icon: FileText, description: 'Automated content' },
    { name: 'AI Workflow Automation', href: '/ai-workflow-automation', icon: Workflow, description: 'Process optimization' },
    { name: 'AI Document Processing', href: '/ai-document-processing', icon: FileText, description: 'Document analysis' },
    { name: 'AI Predictive Analytics', href: '/ai-predictive-analytics', icon: BarChart, description: 'Business forecasting' },
    { name: 'AI Edge Computing', href: '/ai-edge-computing', icon: Cpu, description: 'Distributed AI processing' },
    { name: 'AI Video Analysis', href: '/ai-video-analysis', icon: Eye, description: 'Video content analysis' },
    { name: 'AI Speech Synthesis', href: '/ai-speech-synthesis', icon: Mic, description: 'Text-to-speech' },
    { name: 'AI Recommendation Engine', href: '/ai-recommendation-engine', icon: Target, description: 'Personalized recommendations' },
    { name: 'AI Sentiment Analysis', href: '/ai-sentiment-analysis', icon: Heart, description: 'Emotion detection' },
    { name: 'AI Enterprise Chatbot', href: '/ai-chatbot-enterprise', icon: MessageSquare, description: 'Enterprise-grade chatbots' },
    { name: 'AI Content Moderation', href: '/ai-content-moderation', icon: Shield, description: 'Automated content filtering' },
    { name: 'AI Predictive Modeling', href: '/ai-predictive-modeling', icon: BarChart, description: 'ML forecasting' },
    { name: 'AI Document Intelligence', href: '/ai-document-intelligence', icon: FileText, description: 'Smart document processing' },
    { name: 'AI Conversation Analytics', href: '/ai-conversation-analytics', icon: Users, description: 'Conversation insights' },
    { name: 'AI Supply Chain Intelligence', href: '/ai-supply-chain-ai', icon: Box, description: 'Supply chain optimization' },
    { name: 'AI Healthcare Diagnostics', href: '/ai-healthcare-diagnostics', icon: Heart, description: 'Medical diagnostics' },
    { name: 'AI Financial Forecasting', href: '/ai-financial-forecasting', icon: TrendingUp, description: 'Financial predictions' },
    { name: 'AI IoT Analytics', href: '/ai-iot-analytics', icon: Cpu, description: 'IoT data analysis' },
    { name: 'AI Conversational AI Platform', href: '/ai-conversational-ai', icon: MessageCircle, description: 'Advanced conversations' },
    { name: 'AI Automated Testing', href: '/ai-automated-testing', icon: CheckCircle, description: 'Intelligent testing' },
    { name: 'AI Knowledge Management', href: '/ai-knowledge-management', icon: FileText, description: 'Smart knowledge systems' },
    { name: 'AI Customer Churn Prediction', href: '/ai-customer-churn', icon: Users, description: 'Churn prevention' },
    { name: 'AI Automated Reporting', href: '/ai-automated-reporting', icon: BarChart, description: 'Smart reporting' },
    { name: 'AI Voice Assistant Platform', href: '/ai-voice-assistant', icon: Mic, description: 'Enterprise voice AI' },
    { name: 'AI Content Generation Pro', href: '/ai-content-generation-pro', icon: FileText, description: 'Advanced content creation' }
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: Cloud, description: 'Scalable cloud solutions' },
    { name: 'API Development', href: '/api-development', icon: Code, description: 'API development & management' },
    { name: 'Cybersecurity Solutions', href: '/cybersecurity-solutions', icon: Shield, description: 'Comprehensive security' },
    { name: 'Database Management', href: '/database-management', icon: Database, description: 'Data processing & storage' },
    { name: 'Mobile Development', href: '/mobile-development', icon: Smartphone, description: 'iOS & Android apps' },
    { name: 'Web Development', href: '/web-development', icon: Globe, description: 'Modern web applications' },
    { name: 'DevOps & CI/CD', href: '/devops-cicd', icon: Settings, description: 'Automated deployment' },
    { name: 'IT Support', href: '/it-support', icon: Monitor, description: '24/7 technical support' },
    { name: 'Data Analytics & BI', href: '/data-analytics-bi', icon: BarChart, description: 'Business intelligence' },
    { name: 'Custom Software', href: '/custom-software', icon: Code, description: 'Tailored solutions' },
    { name: 'Network Infrastructure', href: '/network-infrastructure', icon: Wifi, description: 'Network design & setup' },
    { name: 'IT Asset Management', href: '/it-asset-management', icon: Package, description: 'Asset lifecycle management' },
    { name: 'IT Security Services', href: '/it-security-services', icon: Lock, description: 'Security assessment & monitoring' },
    { name: 'IT Project Management', href: '/it-project-management', icon: Calendar, description: 'Professional project management' },
    { name: 'Cloud-Native Development', href: '/cloud-native-development', icon: Cloud, description: 'Microservices & containers' },
    { name: 'AI Integration Services', href: '/ai-integration-services', icon: Brain, description: 'AI model integration' },
    { name: 'Blockchain Development', href: '/blockchain-development', icon: LinkIcon, description: 'Smart contracts & DeFi' },
    { name: 'IoT Development', href: '/iot-development', icon: Wifi, description: 'Connected device solutions' },
    { name: 'E-commerce Development', href: '/e-commerce-development', icon: ShoppingCart, description: 'Online store platforms' },
    { name: 'Advanced API Development', href: '/api-development-advanced', icon: Code, description: 'Enterprise-grade APIs' },
    { name: 'Data Engineering', href: '/data-engineering', icon: Database, description: 'Data pipeline development' },
    { name: 'Advanced Cybersecurity', href: '/cybersecurity-advanced', icon: Shield, description: 'Threat hunting & response' },
    { name: 'Cloud Migration', href: '/cloud-migration-advanced', icon: Cloud, description: 'Zero-downtime migration' },
    { name: 'Advanced DevOps', href: '/devops-advanced', icon: Settings, description: 'Enterprise DevOps' },
    { name: 'Machine Learning Ops', href: '/machine-learning-ops', icon: Cpu, description: 'ML model deployment' },
    { name: 'Enterprise Integration', href: '/enterprise-integration', icon: LinkIcon, description: 'System integration' },
    { name: 'Performance Optimization', href: '/performance-optimization', icon: TrendingUp, description: 'System optimization' },
    { name: 'Disaster Recovery', href: '/disaster-recovery-advanced', icon: Shield, description: 'Business continuity' },
    { name: 'Compliance Automation', href: '/compliance-automation', icon: CheckSquare, description: 'Regulatory compliance' },
    { name: 'Cloud Cost Optimization', href: '/cloud-cost-optimization', icon: DollarSign, description: 'Cost management' },
    { name: 'Security Automation', href: '/security-automation', icon: Lock, description: 'Automated security' },
    { name: 'Data Visualization', href: '/data-visualization', icon: BarChart, description: 'Interactive dashboards' },
    { name: 'Workflow Automation', href: '/workflow-automation', icon: Workflow, description: 'Process automation' },
    { name: 'Cloud-Native Security', href: '/cloud-native-security', icon: Shield, description: 'Container security' }
  ];

  const microSaasServices = [
    { name: 'Zion Analytics Pro', href: '/zion-analytics-pro', icon: BarChart, description: 'Business intelligence platform' },
    { name: 'Zion Chat AI', href: '/zion-chat-ai', icon: MessageCircle, description: 'AI customer support' },
    { name: 'Zion Security Shield', href: '/zion-security-shield', icon: Shield, description: 'Cybersecurity monitoring' },
    { name: 'Zion Cloud Vault', href: '/zion-cloud-vault', icon: Cloud, description: 'Cloud backup & recovery' },
    { name: 'Zion Content Studio', href: '/zion-content-studio', icon: FileText, description: 'Content creation platform' },
    { name: 'Zion CRM Intelligence', href: '/zion-crm-intelligence', icon: Users, description: 'AI-powered CRM' },
    { name: 'Zion Data Sync', href: '/zion-data-sync', icon: Database, description: 'Data synchronization' },
    { name: 'Zion Lead Magnet', href: '/zion-lead-magnet', icon: Target, description: 'Lead generation tool' },
    { name: 'Zion Project Master', href: '/zion-project-master', icon: Calendar, description: 'Project management' },
    { name: 'Zion Email Automation', href: '/zion-email-automation', icon: Mail, description: 'Email marketing automation' },
    { name: 'Zion Inventory Smart', href: '/zion-inventory-smart', icon: Package, description: 'Inventory management' },
    { name: 'Zion Invoice Genius', href: '/zion-invoice-genius', icon: FileText, description: 'Automated invoicing' },
    { name: 'Zion Workflow Automation', href: '/zion-workflow-automation', icon: Workflow, description: 'Process automation' },
    { name: 'Zion Performance Monitor', href: '/zion-performance-monitor', icon: Monitor, description: 'Performance tracking' },
    { name: 'Zion Compliance Manager', href: '/zion-compliance-manager', icon: CheckSquare, description: 'Compliance management' },
    { name: 'Zion Social Scheduler', href: '/zion-social-scheduler', icon: Calendar, description: 'Social media scheduling' },
    { name: 'Zion AI Video Editor', href: '/zion-ai-video-editor', icon: Eye, description: 'AI video editing' },
    { name: 'Zion AI Translator Pro', href: '/zion-ai-translator-pro', icon: Globe, description: 'AI translation service' },
    { name: 'Zion AI Code Reviewer', href: '/zion-ai-code-reviewer', icon: Code, description: 'AI code analysis' },
    { name: 'Zion Customer Insights', href: '/zion-customer-insights', icon: Users, description: 'Customer analytics' },
    { name: 'Zion AI Email Assistant', href: '/zion-ai-email-assistant', icon: Mail, description: 'AI email management' },
    { name: 'Zion AI Meeting Assistant', href: '/zion-ai-meeting-assistant', icon: MessageSquare, description: 'Meeting automation' },
    { name: 'Zion AI SEO Optimizer', href: '/zion-ai-seo-optimizer', icon: TrendingUp, description: 'SEO optimization' },
    { name: 'Zion AI Data Cleaner', href: '/zion-ai-data-cleaner', icon: Database, description: 'Data cleaning service' },
    { name: 'Zion AI Contract Analyzer', href: '/zion-ai-contract-analyzer', icon: FileText, description: 'Contract analysis' },
    { name: 'Zion AI Survey Builder', href: '/zion-ai-survey-builder', icon: CheckSquare, description: 'Survey creation' },
    { name: 'Zion AI Accounting Assistant', href: '/zion-ai-accounting-assistant', icon: DollarSign, description: 'Accounting automation' },
    { name: 'Zion AI Recruitment Pro', href: '/zion-ai-recruitment-pro', icon: Users, description: 'AI recruitment' },
    { name: 'Zion AI Content Moderation', href: '/zion-ai-content-moderation', icon: Shield, description: 'Content moderation' },
    { name: 'Zion AI Predictive Maintenance', href: '/zion-ai-predictive-maintenance', icon: Settings, description: 'Maintenance prediction' },
    { name: 'Zion AI Energy Manager', href: '/zion-ai-energy-manager', icon: Zap, description: 'Energy optimization' },
    { name: 'Zion AI Supply Chain Optimizer', href: '/zion-ai-supply-chain-optimizer', icon: Box, description: 'Supply chain optimization' },
    { name: 'Zion AI Fraud Detector', href: '/zion-ai-fraud-detector', icon: Shield, description: 'Fraud detection' },
    { name: 'Zion AI Customer Service Pro', href: '/zion-ai-customer-service-pro', icon: MessageCircle, description: 'Customer service AI' },
    { name: 'Zion AI Marketing Automation', href: '/zion-ai-marketing-automation', icon: Target, description: 'Marketing automation' },
    { name: 'Zion AI Document AI', href: '/zion-ai-document-ai', icon: FileText, description: 'Document intelligence' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2" onClick={closeAllMenus}>
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                to="/"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                onClick={closeAllMenus}
              >
                Home
              </Link>
              
              <Link
                to="/about"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                onClick={closeAllMenus}
              >
                About
              </Link>

              {/* AI Services Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleAiServices}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
                >
                  AI Services
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {aiServicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800 rounded-lg shadow-xl border border-slate-700 z-50">
                    <div className="p-4">
                      <h3 className="text-sm font-semibold text-white mb-3">AI Services</h3>
                      <div className="grid grid-cols-1 gap-2 max-h-96 overflow-y-auto">
                        {aiServices.map((service) => (
                          <Link
                            key={service.name}
                            to={service.href}
                            className="flex items-center p-2 rounded-md hover:bg-slate-700 transition-colors"
                            onClick={closeAllMenus}
                          >
                            <service.icon className="w-4 h-4 text-purple-400 mr-3" />
                            <div>
                              <div className="text-sm text-white">{service.name}</div>
                              <div className="text-xs text-gray-400">{service.description}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* IT Services Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleItServices}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
                >
                  IT Services
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {itServicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800 rounded-lg shadow-xl border border-slate-700 z-50">
                    <div className="p-4">
                      <h3 className="text-sm font-semibold text-white mb-3">IT Services</h3>
                      <div className="grid grid-cols-1 gap-2 max-h-96 overflow-y-auto">
                        {itServices.map((service) => (
                          <Link
                            key={service.name}
                            to={service.href}
                            className="flex items-center p-2 rounded-md hover:bg-slate-700 transition-colors"
                            onClick={closeAllMenus}
                          >
                            <service.icon className="w-4 h-4 text-blue-400 mr-3" />
                            <div>
                              <div className="text-sm text-white">{service.name}</div>
                              <div className="text-xs text-gray-400">{service.description}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Micro SAAS Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleMicroSaas}
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center"
                >
                  Micro SAAS
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {microSaasOpen && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800 rounded-lg shadow-xl border border-slate-700 z-50">
                    <div className="p-4">
                      <h3 className="text-sm font-semibold text-white mb-3">Micro SAAS Solutions</h3>
                      <div className="grid grid-cols-1 gap-2 max-h-96 overflow-y-auto">
                        {microSaasServices.map((service) => (
                          <Link
                            key={service.name}
                            to={service.href}
                            className="flex items-center p-2 rounded-md hover:bg-slate-700 transition-colors"
                            onClick={closeAllMenus}
                          >
                            <service.icon className="w-4 h-4 text-green-400 mr-3" />
                            <div>
                              <div className="text-sm text-white">{service.name}</div>
                              <div className="text-xs text-gray-400">{service.description}</div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/pricing"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                onClick={closeAllMenus}
              >
                Pricing
              </Link>

              <Link
                to="/contact"
                className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                onClick={closeAllMenus}
              >
                Contact
              </Link>

              {/* CTA Button */}
              <Link
                to="/demo"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center"
                onClick={closeAllMenus}
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white p-2 rounded-md"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-900/95 backdrop-blur-md">
            <Link
              to="/"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={closeAllMenus}
            >
              Home
            </Link>
            
            <Link
              to="/about"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={closeAllMenus}
            >
              About
            </Link>

            <Link
              to="/ai-services"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={closeAllMenus}
            >
              AI Services
            </Link>

            <Link
              to="/it-services"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={closeAllMenus}
            >
              IT Services
            </Link>

            <Link
              to="/micro-saas"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={closeAllMenus}
            >
              Micro SAAS
            </Link>

            <Link
              to="/pricing"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={closeAllMenus}
            >
              Pricing
            </Link>

            <Link
              to="/contact"
              className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={closeAllMenus}
            >
              Contact
            </Link>

            <Link
              to="/demo"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white block px-3 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 text-center"
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
