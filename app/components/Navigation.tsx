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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleServices = () => {
    setServicesOpen(!servicesOpen);
  };

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

  const aiServices = [
    { name: 'AI Analytics', url: '/ai-analytics', icon: BarChart },
    { name: 'AI Automation', url: '/ai-automation', icon: Zap },
    { name: 'AI Chatbot Builder', url: '/ai-chatbot-builder', icon: MessageCircle },
    { name: 'AI Cybersecurity', url: '/ai-cybersecurity', icon: Shield },
    { name: 'AI CRM', url: '/ai-crm', icon: Users },
    { name: 'AI Data Analytics', url: '/ai-data-analytics', icon: BarChart },
    { name: 'AI Healthcare', url: '/ai-healthcare', icon: Heart },
    { name: 'AI Financial Services', url: '/ai-financial-services', icon: DollarSign },
    { name: 'AI Computer Vision', url: '/ai-computer-vision', icon: Eye },
    { name: 'AI Voice Solutions', url: '/ai-voice-solutions', icon: Mic },
    { name: 'AI E-commerce Solutions', url: '/ai-ecommerce-solutions', icon: ShoppingCart },
    { name: 'AI HR Solutions', url: '/ai-hr-solutions', icon: Users },
    { name: 'AI Content Generation', url: '/ai-content-generation', icon: FileText },
    { name: 'AI Workflow Automation', url: '/ai-workflow-automation', icon: Workflow },
    { name: 'AI Document Processing', url: '/ai-document-processing', icon: FileText },
    { name: 'AI Predictive Analytics', url: '/ai-predictive-analytics', icon: TrendingUp },
    { name: 'AI Edge Computing', url: '/ai-edge-computing', icon: Cpu },
    { name: 'AI Video Analysis', url: '/ai-video-analysis', icon: Monitor },
    { name: 'AI Speech Synthesis', url: '/ai-speech-synthesis', icon: Mic },
    { name: 'AI Recommendation Engine', url: '/ai-recommendation-engine', icon: Target },
    { name: 'AI Sentiment Analysis', url: '/ai-sentiment-analysis', icon: Heart },
    { name: 'AI Chatbot Enterprise', url: '/ai-chatbot-enterprise', icon: MessageCircle },
    { name: 'AI Content Moderation', url: '/ai-content-moderation', icon: Shield },
    { name: 'AI Predictive Modeling', url: '/ai-predictive-modeling', icon: BarChart },
    { name: 'AI Document Intelligence', url: '/ai-document-intelligence', icon: FileText },
    { name: 'AI Conversation Analytics', url: '/ai-conversation-analytics', icon: MessageCircle },
    { name: 'AI Supply Chain AI', url: '/ai-supply-chain-ai', icon: Package },
    { name: 'AI Healthcare Diagnostics', url: '/ai-healthcare-diagnostics', icon: Heart },
    { name: 'AI Financial Forecasting', url: '/ai-financial-forecasting', icon: DollarSign },
    { name: 'AI IoT Analytics', url: '/ai-iot-analytics', icon: Wifi },
    { name: 'AI Conversational AI', url: '/ai-conversational-ai', icon: MessageCircle },
    { name: 'AI Automated Testing', url: '/ai-automated-testing', icon: CheckSquare },
    { name: 'AI Knowledge Management', url: '/ai-knowledge-management', icon: Database },
    { name: 'AI Customer Churn', url: '/ai-customer-churn', icon: Users },
    { name: 'AI Automated Reporting', url: '/ai-automated-reporting', icon: FileText },
    { name: 'AI Voice Assistant', url: '/ai-voice-assistant', icon: Mic },
    { name: 'AI Content Generation Pro', url: '/ai-content-generation-pro', icon: FileText }
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', url: '/cloud-infrastructure', icon: Cloud },
    { name: 'Cybersecurity Solutions', url: '/cybersecurity-solutions', icon: Shield },
    { name: 'Web Development', url: '/web-development', icon: Code },
    { name: 'Mobile Development', url: '/mobile-development', icon: Smartphone },
    { name: 'API Development', url: '/api-development', icon: LinkIcon },
    { name: 'Database Management', url: '/database-management', icon: Database },
    { name: 'DevOps & CI/CD', url: '/devops-cicd', icon: Settings },
    { name: 'IT Support', url: '/it-support', icon: Users },
    { name: 'Data Analytics & BI', url: '/data-analytics-bi', icon: BarChart },
    { name: 'Custom Software', url: '/custom-software', icon: Code },
    { name: 'Network Infrastructure', url: '/network-infrastructure', icon: Wifi },
    { name: 'IT Asset Management', url: '/it-asset-management', icon: Package },
    { name: 'IT Security Services', url: '/it-security-services', icon: Shield },
    { name: 'IT Project Management', url: '/it-project-management', icon: Calendar },
    { name: 'Cloud Native Development', url: '/cloud-native-development', icon: Cloud },
    { name: 'AI Integration Services', url: '/ai-integration-services', icon: Brain },
    { name: 'Blockchain Development', url: '/blockchain-development', icon: LinkIcon },
    { name: 'IoT Development', url: '/iot-development', icon: Wifi },
    { name: 'E-commerce Development', url: '/e-commerce-development', icon: ShoppingCart },
    { name: 'API Development Advanced', url: '/api-development-advanced', icon: LinkIcon },
    { name: 'Data Engineering', url: '/data-engineering', icon: Database },
    { name: 'Cybersecurity Advanced', url: '/cybersecurity-advanced', icon: Shield },
    { name: 'Cloud Migration Advanced', url: '/cloud-migration-advanced', icon: Cloud },
    { name: 'DevOps Advanced', url: '/devops-advanced', icon: Settings },
    { name: 'Machine Learning Ops', url: '/machine-learning-ops', icon: Cpu },
    { name: 'Enterprise Integration', url: '/enterprise-integration', icon: LinkIcon },
    { name: 'Performance Optimization', url: '/performance-optimization', icon: Zap },
    { name: 'Disaster Recovery Advanced', url: '/disaster-recovery-advanced', icon: Shield },
    { name: 'Compliance Automation', url: '/compliance-automation', icon: CheckSquare },
    { name: 'Cloud Cost Optimization', url: '/cloud-cost-optimization', icon: DollarSign },
    { name: 'Security Automation', url: '/security-automation', icon: Shield },
    { name: 'Data Visualization', url: '/data-visualization', icon: BarChart },
    { name: 'Workflow Automation', url: '/workflow-automation', icon: Workflow },
    { name: 'Cloud Native Security', url: '/cloud-native-security', icon: Shield }
  ];

  const microSaasServices = [
    { name: 'Zion Analytics Pro', url: '/zion-analytics-pro', icon: BarChart },
    { name: 'Zion Chat AI', url: '/zion-chat-ai', icon: MessageCircle },
    { name: 'Zion Security Shield', url: '/zion-security-shield', icon: Shield },
    { name: 'Zion Cloud Vault', url: '/zion-cloud-vault', icon: Cloud },
    { name: 'Zion Content Studio', url: '/zion-content-studio', icon: FileText },
    { name: 'Zion CRM Intelligence', url: '/zion-crm-intelligence', icon: Users },
    { name: 'Zion Data Sync', url: '/zion-data-sync', icon: Database },
    { name: 'Zion Lead Magnet', url: '/zion-lead-magnet', icon: Target },
    { name: 'Zion Project Master', url: '/zion-project-master', icon: Calendar },
    { name: 'Zion Email Automation', url: '/zion-email-automation', icon: Mail },
    { name: 'Zion Inventory Smart', url: '/zion-inventory-smart', icon: Package },
    { name: 'Zion Invoice Genius', url: '/zion-invoice-genius', icon: DollarSign },
    { name: 'Zion Workflow Automation', url: '/zion-workflow-automation', icon: Workflow },
    { name: 'Zion Performance Monitor', url: '/zion-performance-monitor', icon: Monitor },
    { name: 'Zion Compliance Manager', url: '/zion-compliance-manager', icon: CheckSquare },
    { name: 'Zion Social Scheduler', url: '/zion-social-scheduler', icon: Calendar },
    { name: 'Zion AI Video Editor', url: '/zion-ai-video-editor', icon: Monitor },
    { name: 'Zion AI Translator Pro', url: '/zion-ai-translator-pro', icon: Globe },
    { name: 'Zion AI Code Reviewer', url: '/zion-ai-code-reviewer', icon: Code },
    { name: 'Zion Customer Insights', url: '/zion-customer-insights', icon: Users },
    { name: 'Zion AI Email Assistant', url: '/zion-ai-email-assistant', icon: Mail },
    { name: 'Zion AI Meeting Assistant', url: '/zion-ai-meeting-assistant', icon: Calendar },
    { name: 'Zion AI SEO Optimizer', url: '/zion-ai-seo-optimizer', icon: Target },
    { name: 'Zion AI Data Cleaner', url: '/zion-ai-data-cleaner', icon: Database },
    { name: 'Zion AI Contract Analyzer', url: '/zion-ai-contract-analyzer', icon: FileText },
    { name: 'Zion AI Survey Builder', url: '/zion-ai-survey-builder', icon: CheckSquare },
    { name: 'Zion AI Accounting Assistant', url: '/zion-ai-accounting-assistant', icon: DollarSign },
    { name: 'Zion AI Recruitment Pro', url: '/zion-ai-recruitment-pro', icon: Users },
    { name: 'Zion AI Content Moderation', url: '/zion-ai-content-moderation', icon: Shield },
    { name: 'Zion AI Predictive Maintenance', url: '/zion-ai-predictive-maintenance', icon: Settings },
    { name: 'Zion AI Energy Manager', url: '/zion-ai-energy-manager', icon: Zap },
    { name: 'Zion AI Supply Chain Optimizer', url: '/zion-ai-supply-chain-optimizer', icon: Package },
    { name: 'Zion AI Fraud Detector', url: '/zion-ai-fraud-detector', icon: Shield },
    { name: 'Zion AI Customer Service Pro', url: '/zion-ai-customer-service-pro', icon: MessageCircle },
    { name: 'Zion AI Marketing Automation', url: '/zion-ai-marketing-automation', icon: Target },
    { name: 'Zion AI Document AI', url: '/zion-ai-document-ai', icon: FileText }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md border-b border-gray-700/50' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
              About
            </Link>

            {/* AI Services Dropdown */}
            <div className="relative group">
              <button
                onClick={toggleAiServices}
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                AI Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {aiServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-gray-800 rounded-lg shadow-xl border border-gray-700 py-2 max-h-96 overflow-y-auto">
                  {aiServices.map((service, index) => (
                    <Link
                      key={index}
                      to={service.url}
                      className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      <service.icon className="h-4 w-4 mr-3" />
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* IT Services Dropdown */}
            <div className="relative group">
              <button
                onClick={toggleItServices}
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                IT Solutions
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {itServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-gray-800 rounded-lg shadow-xl border border-gray-700 py-2 max-h-96 overflow-y-auto">
                  {itServices.map((service, index) => (
                    <Link
                      key={index}
                      to={service.url}
                      className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      <service.icon className="h-4 w-4 mr-3" />
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Micro SAAS Dropdown */}
            <div className="relative group">
              <button
                onClick={toggleMicroSaas}
                className="flex items-center text-gray-300 hover:text-white transition-colors"
              >
                Micro SAAS
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {microSaasOpen && (
                <div className="absolute top-full left-0 mt-2 w-80 bg-gray-800 rounded-lg shadow-xl border border-gray-700 py-2 max-h-96 overflow-y-auto">
                  {microSaasServices.map((service, index) => (
                    <Link
                      key={index}
                      to={service.url}
                      className="flex items-center px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
                    >
                      <service.icon className="h-4 w-4 mr-3" />
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/pricing" className="text-gray-300 hover:text-white transition-colors">
              Pricing
            </Link>
            <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-900/95 backdrop-blur-md border-t border-gray-700/50">
              <Link
                to="/"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/ai-services"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                AI Services
              </Link>
              <Link
                to="/it-services"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                IT Solutions
              </Link>
              <Link
                to="/micro-saas"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Micro SAAS
              </Link>
              <Link
                to="/pricing"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 text-center"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;