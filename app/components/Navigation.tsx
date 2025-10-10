'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronDown, Phone, Mail, MapPin, Menu, X, Brain, Cloud, Shield, Code, 
  BarChart, Users, Zap, ArrowRight, Target, Globe, Database, Smartphone, 
  Settings, FileText, MessageCircle, Heart, DollarSign, Monitor, Workflow, 
  Eye, CheckCircle, Rocket, Star, Bot
} from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

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

  const handleDropdownToggle = useCallback((dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  }, [activeDropdown]);

  const closeAllMenus = useCallback(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, []);

  // AI Services
  const aiServices = [
    { name: 'AI Analytics Dashboard', href: '/ai-analytics-dashboard', icon: BarChart3, description: 'Advanced data insights' },
    { name: 'AI Automation Suite', href: '/ai-automation', icon: Workflow2, description: 'Streamline workflows' },
    { name: 'AI Chatbot Builder', href: '/ai-chatbot-builder', icon: Bot2, description: 'Intelligent conversations' },
    { name: 'AI CRM Assistant', href: '/ai-crm-assistant', icon: UserCheck, description: 'Customer relationship management' },
    { name: 'AI Cybersecurity Suite', href: '/ai-cybersecurity-suite', icon: ShieldCheck2, description: 'Advanced threat protection' },
    { name: 'AI Data Analytics', href: '/ai-data-analytics', icon: Database2, description: 'Data-driven insights' },
    { name: 'AI Healthcare Solutions', href: '/ai-healthcare', icon: Heart, description: 'Medical AI solutions' },
    { name: 'AI Financial Services', href: '/ai-financial-services', icon: DollarSign2, description: 'Financial technology' },
    { name: 'AI Computer Vision', href: '/ai-computer-vision', icon: Eye2, description: 'Image & video analysis' },
    { name: 'AI Voice Solutions', href: '/ai-voice-solutions', icon: Mic2, description: 'Speech recognition' },
    { name: 'AI E-commerce Optimizer', href: '/ai-ecommerce-optimizer', icon: ShoppingCart2, description: 'E-commerce optimization' },
    { name: 'AI Content Generation Pro', href: '/ai-content-generation-pro', icon: FileText2, description: 'Advanced content creation' },
    { name: 'AI Workflow Automation', href: '/ai-workflow-automation', icon: Workflow2, description: 'Process optimization' },
    { name: 'AI Document Processing', href: '/ai-document-processing', icon: FileText2, description: 'Document analysis' },
    { name: 'AI Predictive Analytics', href: '/ai-predictive-analytics', icon: BarChart3, description: 'Business forecasting' },
    { name: 'AI Edge Computing', href: '/ai-edge-computing', icon: CpuChip, description: 'Distributed AI processing' },
    { name: 'AI Video Analysis', href: '/ai-video-analysis', icon: Eye2, description: 'Video content analysis' },
    { name: 'AI Speech Synthesis', href: '/ai-speech-synthesis', icon: Mic2, description: 'Text-to-speech' },
    { name: 'AI Recommendation Engine', href: '/ai-recommendation-engine', icon: Target, description: 'Personalized recommendations' },
    { name: 'AI Sentiment Analysis', href: '/ai-sentiment-analysis', icon: Heart, description: 'Emotion detection' },
    { name: 'AI Enterprise Chatbot', href: '/ai-chatbot-enterprise', icon: MessageSquare3, description: 'Enterprise-grade chatbots' },
    { name: 'AI Content Moderation', href: '/ai-content-moderation', icon: ShieldCheck2, description: 'Automated content filtering' },
    { name: 'AI Predictive Modeling', href: '/ai-predictive-modeling', icon: BarChart3, description: 'ML forecasting' },
    { name: 'AI Document Intelligence', href: '/ai-document-intelligence', icon: FileText2, description: 'Smart document processing' },
    { name: 'AI Conversation Analytics', href: '/ai-conversation-analytics', icon: Users, description: 'Conversation insights' },
    { name: 'AI Supply Chain Intelligence', href: '/ai-supply-chain-ai', icon: Box2, description: 'Supply chain optimization' },
    { name: 'AI Healthcare Diagnostics', href: '/ai-healthcare-diagnostics', icon: Heart, description: 'Medical diagnostics' },
    { name: 'AI Financial Forecasting', href: '/ai-financial-forecasting', icon: TrendingUp, description: 'Financial predictions' },
    { name: 'AI IoT Analytics', href: '/ai-iot-analytics', icon: CpuChip, description: 'IoT data analysis' },
    { name: 'AI Conversational AI Platform', href: '/ai-conversational-ai', icon: MessageCircle, description: 'Advanced conversations' },
    { name: 'AI Automated Testing', href: '/ai-automated-testing', icon: CheckCircle3, description: 'Intelligent testing' },
    { name: 'AI Knowledge Management', href: '/ai-knowledge-management', icon: FileText2, description: 'Smart knowledge systems' },
    { name: 'AI Customer Churn Prediction', href: '/ai-customer-churn', icon: Users, description: 'Churn prevention' },
    { name: 'AI Automated Reporting', href: '/ai-automated-reporting', icon: BarChart3, description: 'Smart reporting' },
    { name: 'AI Voice Assistant Platform', href: '/ai-voice-assistant', icon: Mic2, description: 'Enterprise voice AI' },
    { name: 'AI Content Generation Pro', href: '/ai-content-generation-pro', icon: FileText2, description: 'Advanced content creation' }
  ];

  // IT Services
  const itServices = [
    { name: 'Cloud Infrastructure & Migration', href: '/cloud-infrastructure', icon: Cloud, description: 'Scalable cloud solutions' },
    { name: 'API Development & Management', href: '/api-development', icon: Code, description: 'API development & management' },
    { name: 'Cybersecurity Solutions', href: '/cybersecurity-solutions', icon: Shield, description: 'Comprehensive security' },
    { name: 'Database Management', href: '/database-management', icon: Database, description: 'Data processing & storage' },
    { name: 'Mobile Development', href: '/mobile-development', icon: Smartphone2, description: 'iOS & Android apps' },
    { name: 'Web Development', href: '/web-development', icon: Globe2, description: 'Modern web applications' },
    { name: 'DevOps & CI/CD', href: '/devops-cicd', icon: Settings, description: 'Automated deployment' },
    { name: 'IT Support & Maintenance', href: '/it-support', icon: Monitor2, description: '24/7 technical support' },
    { name: 'Data Analytics & BI', href: '/data-analytics-bi', icon: BarChart3, description: 'Business intelligence' },
    { name: 'Custom Software Development', href: '/custom-software', icon: Code, description: 'Tailored solutions' },
    { name: 'Network Infrastructure', href: '/network-infrastructure', icon: Wifi2, description: 'Network design & setup' },
    { name: 'IT Asset Management', href: '/it-asset-management', icon: Package2, description: 'Asset lifecycle management' },
    { name: 'IT Security Services', href: '/it-security-services', icon: Lock, description: 'Security assessment & monitoring' },
    { name: 'IT Project Management', href: '/it-project-management', icon: Calendar2, description: 'Professional project management' },
    { name: 'Cloud-Native Development', href: '/cloud-native-development', icon: Cloud, description: 'Microservices & containers' },
    { name: 'AI Integration Services', href: '/ai-integration-services', icon: Brain, description: 'AI model integration' },
    { name: 'Blockchain Development', href: '/blockchain-development', icon: Link2, description: 'Smart contracts & DeFi' },
    { name: 'IoT Development', href: '/iot-development', icon: Wifi2, description: 'Connected device solutions' },
    { name: 'E-commerce Development', href: '/e-commerce-development', icon: ShoppingCart2, description: 'Online store platforms' },
    { name: 'Advanced API Development', href: '/api-development-advanced', icon: Code, description: 'Enterprise-grade APIs' },
    { name: 'Data Engineering', href: '/data-engineering', icon: Database2, description: 'Data pipeline development' },
    { name: 'Advanced Cybersecurity', href: '/cybersecurity-advanced', icon: Shield, description: 'Threat hunting & response' },
    { name: 'Cloud Migration', href: '/cloud-migration-advanced', icon: Cloud, description: 'Zero-downtime migration' },
    { name: 'Advanced DevOps & SRE', href: '/devops-advanced', icon: Settings, description: 'Site reliability engineering' },
    { name: 'MLOps & AI Operations', href: '/machine-learning-ops', icon: CpuChip, description: 'ML model deployment' },
    { name: 'Enterprise Integration', href: '/enterprise-integration', icon: Link2, description: 'System integration' },
    { name: 'Performance Optimization', href: '/performance-optimization', icon: Zap2, description: 'App & infrastructure optimization' },
    { name: 'Disaster Recovery', href: '/disaster-recovery-advanced', icon: Shield, description: 'Business continuity' },
    { name: 'Compliance Automation', href: '/compliance-automation', icon: CheckCircle2, description: 'Regulatory compliance' },
    { name: 'Cloud Cost Optimization', href: '/cloud-cost-optimization', icon: TrendingUp, description: 'Cost reduction' },
    { name: 'Security Automation', href: '/security-automation', icon: Shield, description: 'Automated security' },
    { name: 'Data Visualization & BI', href: '/data-visualization', icon: BarChart3, description: 'Advanced dashboards' },
    { name: 'Workflow Automation', href: '/workflow-automation', icon: Settings, description: 'Process automation' },
    { name: 'Cloud-Native Security', href: '/cloud-native-security', icon: Shield, description: 'Container security' }
  ];

  // Micro SAAS Services
  const microSaasServices = [
    { name: 'Zion Analytics Pro', href: '/zion-analytics-pro', icon: BarChart3, description: 'Business intelligence platform', price: '$89/month' },
    { name: 'Zion Chat AI', href: '/zion-chat-ai', icon: MessageCircle, description: 'AI customer support', price: '$149/month' },
    { name: 'Zion Security Shield', href: '/zion-security-shield', icon: Shield, description: 'Cybersecurity monitoring', price: '$199/month' },
    { name: 'Zion Cloud Vault', href: '/zion-cloud-vault', icon: Cloud, description: 'Cloud backup & recovery', price: '$79/month' },
    { name: 'Zion Content Studio', href: '/zion-content-studio', icon: FileText2, description: 'AI content creation', price: '$129/month' },
    { name: 'Zion CRM Intelligence', href: '/zion-crm-intelligence', icon: Users, description: 'AI-enhanced CRM', price: '$179/month' },
    { name: 'Zion Data Sync', href: '/zion-data-sync', icon: Database2, description: 'Data integration platform', price: '$99/month' },
    { name: 'Zion Lead Magnet', href: '/zion-lead-magnet', icon: Target, description: 'Lead generation platform', price: '$99/month' },
    { name: 'Zion Project Master', href: '/zion-project-master', icon: Calendar2, description: 'Project management AI', price: '$119/month' },
    { name: 'Zion Email Automation', href: '/zion-email-automation', icon: Mail, description: 'Email marketing AI', price: '$89/month' },
    { name: 'Zion Inventory Smart', href: '/zion-inventory-smart', icon: Package2, description: 'Inventory management', price: '$149/month' },
    { name: 'Zion Invoice Genius', href: '/zion-invoice-genius', icon: DollarSign2, description: 'Invoice generation', price: '$49/month' },
    { name: 'Zion Workflow Automation', href: '/zion-workflow-automation', icon: Settings, description: 'Process automation', price: '$159/month' },
    { name: 'Zion Performance Monitor', href: '/zion-performance-monitor', icon: Monitor2, description: 'Performance monitoring', price: '$79/month' },
    { name: 'Zion Compliance Manager', href: '/zion-compliance-manager', icon: CheckSquare, description: 'Compliance management', price: '$199/month' },
    { name: 'Zion Social Scheduler', href: '/zion-social-scheduler', icon: Globe2, description: 'Social media management', price: '$69/month' },
    { name: 'Zion AI Video Editor', href: '/zion-ai-video-editor', icon: Eye2, description: 'AI video editing', price: '$189/month' },
    { name: 'Zion AI Translator Pro', href: '/zion-ai-translator-pro', icon: Globe2, description: 'Advanced translation', price: '$59/month' },
    { name: 'Zion AI Code Reviewer', href: '/zion-ai-code-reviewer', icon: Code, description: 'Intelligent code review', price: '$139/month' },
    { name: 'Zion Customer Insights Pro', href: '/zion-customer-insights', icon: Users, description: 'Customer analytics', price: '$169/month' },
    { name: 'Zion AI Email Assistant', href: '/zion-ai-email-assistant', icon: Mail, description: 'Smart email management', price: '$79/month' },
    { name: 'Zion AI Meeting Assistant', href: '/zion-ai-meeting-assistant', icon: Calendar2, description: 'Meeting automation', price: '$109/month' },
    { name: 'Zion AI SEO Optimizer', href: '/zion-ai-seo-optimizer', icon: Target, description: 'SEO optimization', price: '$89/month' },
    { name: 'Zion AI Data Cleaner', href: '/zion-ai-data-cleaner', icon: Database2, description: 'Data cleaning & validation', price: '$99/month' },
    { name: 'Zion AI Contract Analyzer', href: '/zion-ai-contract-analyzer', icon: FileText2, description: 'Contract analysis', price: '$179/month' },
    { name: 'Zion AI Survey Builder', href: '/zion-ai-survey-builder', icon: CheckSquare, description: 'Intelligent surveys', price: '$69/month' },
    { name: 'Zion AI Accounting Assistant', href: '/zion-ai-accounting-assistant', icon: DollarSign2, description: 'AI accounting', price: '$149/month' },
    { name: 'Zion AI Recruitment Pro', href: '/zion-ai-recruitment-pro', icon: Users, description: 'AI recruitment', price: '$199/month' },
    { name: 'Zion AI Content Moderation', href: '/zion-ai-content-moderation', icon: Shield, description: 'Content moderation', price: '$119/month' },
    { name: 'Zion AI Predictive Maintenance', href: '/zion-ai-predictive-maintenance', icon: Settings, description: 'Equipment maintenance', price: '$189/month' },
    { name: 'Zion AI Energy Manager', href: '/zion-ai-energy-manager', icon: Zap2, description: 'Energy optimization', price: '$159/month' },
    { name: 'Zion AI Supply Chain Optimizer', href: '/zion-ai-supply-chain-optimizer', icon: Box2, description: 'Supply chain AI', price: '$229/month' },
    { name: 'Zion AI Fraud Detector', href: '/zion-ai-fraud-detector', icon: Shield, description: 'Fraud detection', price: '$179/month' },
    { name: 'Zion AI Customer Service Pro', href: '/zion-ai-customer-service-pro', icon: MessageSquare3, description: 'Advanced customer service', price: '$199/month' },
    { name: 'Zion AI Marketing Automation', href: '/zion-ai-marketing-automation', icon: Target, description: 'Marketing AI', price: '$169/month' },
    { name: 'Zion AI Document AI', href: '/zion-ai-document-ai', icon: FileText2, description: 'Document processing', price: '$139/month' }
  ];

  // Emerging Technologies
  const emergingTech = [
    { name: '5G Implementation', href: '/5g-implementation', icon: Zap2, description: 'Next-gen connectivity' },
    { name: 'AI 3D Generation', href: '/ai-3d-generation', icon: Box2, description: '3D content creation' },
    { name: 'AI Holographic Workspace', href: '/ai-holographic-workspace', icon: Monitor2, description: 'Immersive work environments' },
    { name: 'AI Autonomous Systems', href: '/ai-autonomous-systems', icon: CpuChip, description: 'Self-operating systems' },
    { name: 'AI Blockchain Solutions', href: '/ai-blockchain-solutions', icon: Link2, description: 'Decentralized AI' },
    { name: 'AI Edge Computing', href: '/ai-edge-computing', icon: Server2, description: 'Distributed processing' },
    { name: 'Quantum Computing', href: '/quantum-computing', icon: CpuChip, description: 'Quantum processing power' },
    { name: 'AR/VR Solutions', href: '/ar-vr-solutions', icon: Monitor2, description: 'Immersive experiences' },
    { name: 'IoT Integration', href: '/iot-integration', icon: Wifi2, description: 'Internet of Things' },
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
                onClick={() => handleDropdownToggle('ai')}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
              >
                <Brain className="w-4 h-4" />
                <span>AI Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'ai' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'ai' && (
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
                        <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
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
                      to="/services"
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
                onClick={() => handleDropdownToggle('it')}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
              >
                <Cloud className="w-4 h-4" />
                <span>IT Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'it' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'it' && (
                <div className="absolute top-full left-0 mt-3 w-[450px] bg-slate-900/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-purple-500/30 p-6 cyber-card-enhanced holographic-card-enhanced">
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-purple-400 neon-text-enhanced">IT Services</h3>
                    <p className="text-sm text-gray-400">Complete technology infrastructure solutions</p>
                  </div>
                  <div className="grid grid-cols-1 gap-3 max-h-96 overflow-y-auto custom-scrollbar">
                    {itServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="flex items-center space-x-4 p-4 rounded-xl hover:bg-purple-500/10 transition-all duration-300 group cyber-card-enhanced"
                        onClick={closeAllMenus}
                      >
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
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
                      to="/services"
                      className="flex items-center justify-center w-full py-2 px-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg font-medium hover:from-purple-600 hover:to-pink-700 transition-all duration-300"
                      onClick={closeAllMenus}
                    >
                      View All IT Services
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Micro SAAS Dropdown */}
            <div className="relative group">
              <button
                onClick={() => handleDropdownToggle('saas')}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
              >
                <Cpu className="w-4 h-4" />
                <span>Micro SAAS</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'saas' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'saas' && (
                <div className="absolute top-full left-0 mt-3 w-[500px] bg-slate-900/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-green-500/30 p-6 cyber-card-enhanced holographic-card-enhanced">
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-green-400 neon-text-enhanced">Micro SAAS Solutions</h3>
                    <p className="text-sm text-gray-400">Ready-to-use business tools with AI and automation</p>
                  </div>
                  <div className="grid grid-cols-1 gap-3 max-h-96 overflow-y-auto custom-scrollbar">
                    {microSaasServices.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="flex items-center space-x-4 p-4 rounded-xl hover:bg-green-500/10 transition-all duration-300 group cyber-card-enhanced"
                        onClick={closeAllMenus}
                      >
                        <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          <service.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="text-white font-semibold group-hover:text-green-300 transition-colors">{service.name}</div>
                          <div className="text-xs text-gray-400 group-hover:text-gray-300">{service.description}</div>
                          {service.price && (
                            <div className="text-xs text-green-400 font-medium">{service.price}</div>
                          )}
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-green-400 ml-auto group-hover:translate-x-1 transition-all" />
                      </Link>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-green-500/20">
                    <Link
                      to="/services"
                      className="flex items-center justify-center w-full py-2 px-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-lg font-medium hover:from-green-600 hover:to-emerald-700 transition-all duration-300"
                      onClick={closeAllMenus}
                    >
                      View All Micro SAAS
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Emerging Technologies Dropdown */}
            <div className="relative group">
              <button
                onClick={() => handleDropdownToggle('emerging')}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
              >
                <Zap className="w-4 h-4" />
                <span>Emerging Tech</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'emerging' ? 'rotate-180' : ''}`} />
              </button>
              {activeDropdown === 'emerging' && (
                <div className="absolute top-full left-0 mt-3 w-[400px] bg-slate-900/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-orange-500/30 p-6 cyber-card-enhanced holographic-card-enhanced">
                  <div className="mb-4">
                    <h3 className="text-lg font-bold text-orange-400 neon-text-enhanced">Emerging Technologies</h3>
                    <p className="text-sm text-gray-400">Cutting-edge technology solutions for the future</p>
                  </div>
                  <div className="grid grid-cols-1 gap-3 max-h-80 overflow-y-auto custom-scrollbar">
                    {emergingTech.map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="flex items-center space-x-4 p-4 rounded-xl hover:bg-orange-500/10 transition-all duration-300 group cyber-card-enhanced"
                        onClick={closeAllMenus}
                      >
                        <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          <service.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="text-white font-semibold group-hover:text-orange-300 transition-colors">{service.name}</div>
                          <div className="text-xs text-gray-400 group-hover:text-gray-300">{service.description}</div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-orange-400 ml-auto group-hover:translate-x-1 transition-all" />
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
            <Link to="/case-studies" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Case Studies
            </Link>
            <Link to="/blog" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Blog
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
              
              {/* Mobile AI Services */}
              <div>
                <button
                  onClick={() => handleDropdownToggle('ai')}
                  className="flex items-center justify-between w-full text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                >
                  <span className="flex items-center space-x-2">
                    <Brain className="w-4 h-4" />
                    <span>AI Services</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'ai' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'ai' && (
                  <div className="mt-2 ml-4 space-y-2">
                    {aiServices.slice(0, 8).map((service) => (
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
                      to="/services"
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
                  onClick={() => handleDropdownToggle('it')}
                  className="flex items-center justify-between w-full text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                >
                  <span className="flex items-center space-x-2">
                    <Cloud className="w-4 h-4" />
                    <span>IT Services</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'it' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'it' && (
                  <div className="mt-2 ml-4 space-y-2">
                    {itServices.slice(0, 8).map((service) => (
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
                      to="/services"
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
                  onClick={() => handleDropdownToggle('saas')}
                  className="flex items-center justify-between w-full text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                >
                  <span className="flex items-center space-x-2">
                    <Cpu className="w-4 h-4" />
                    <span>Micro SAAS</span>
                  </span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === 'saas' ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'saas' && (
                  <div className="mt-2 ml-4 space-y-2">
                    {microSaasServices.slice(0, 8).map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                        onClick={closeAllMenus}
                      >
                        {service.name} - {service.price}
                      </Link>
                    ))}
                    <Link
                      to="/services"
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
