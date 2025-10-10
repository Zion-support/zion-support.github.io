'use client';
import React, { Suspense, lazy } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  X,
  Menu,
  Home,
  Users,
  Settings,
  Brain,
  Cloud,
  Shield,
  Code,
  BarChart,
  Zap,
  ArrowRight,
  ChevronDown,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  Target,
  Globe,
  Database,
  Smartphone,
  Lock,
  TrendingUp,
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
  Rocket
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation();
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null);

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const handleLinkClick = () => {
    onClose();
    setActiveDropdown(null);
  };

  const aiServices = [
    { name: 'AI Analytics', href: '/ai-analytics', icon: BarChart, description: 'Advanced data insights' },
    { name: 'AI Automation', href: '/ai-automation', icon: Zap, description: 'Streamline workflows' },
    { name: 'AI Chatbot', href: '/ai-chatbot-builder', icon: MessageCircle, description: 'Intelligent conversations' },
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
    { name: 'AI Edge Computing', href: '/ai-edge-computing', icon: Server, description: 'Distributed AI processing' },
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
    { name: 'AI IoT Analytics', href: '/ai-iot-analytics', icon: Server, description: 'IoT data analysis' },
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
    { name: 'Cybersecurity', href: '/cybersecurity-solutions', icon: Shield, description: 'Comprehensive security' },
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
    { name: 'Advanced DevOps & SRE', href: '/devops-advanced', icon: Settings, description: 'Site reliability engineering' },
    { name: 'MLOps & AI Operations', href: '/machine-learning-ops', icon: Server, description: 'ML model deployment' },
    { name: 'Enterprise Integration', href: '/enterprise-integration', icon: LinkIcon, description: 'System integration' },
    { name: 'Performance Optimization', href: '/performance-optimization', icon: Zap, description: 'App & infrastructure optimization' },
    { name: 'Disaster Recovery', href: '/disaster-recovery-advanced', icon: Shield, description: 'Business continuity' },
    { name: 'Compliance Automation', href: '/compliance-automation', icon: CheckCircle, description: 'Regulatory compliance' },
    { name: 'Cloud Cost Optimization', href: '/cloud-cost-optimization', icon: TrendingUp, description: 'Cost reduction' },
    { name: 'Security Automation', href: '/security-automation', icon: Shield, description: 'Automated security' },
    { name: 'Data Visualization & BI', href: '/data-visualization', icon: BarChart, description: 'Advanced dashboards' },
    { name: 'Workflow Automation', href: '/workflow-automation', icon: Settings, description: 'Process automation' },
    { name: 'Cloud-Native Security', href: '/cloud-native-security', icon: Shield, description: 'Container security' }
  ];

  const microSaasServices = [
    { name: 'Zion Analytics Pro', href: '/zion-analytics-pro', icon: BarChart, description: 'Business intelligence platform' },
    { name: 'Zion Chat AI', href: '/zion-chat-ai', icon: MessageCircle, description: 'AI customer support' },
    { name: 'Zion Security Shield', href: '/zion-security-shield', icon: Shield, description: 'Cybersecurity monitoring' },
    { name: 'Zion Cloud Vault', href: '/zion-cloud-vault', icon: Cloud, description: 'Cloud backup & recovery' },
    { name: 'Zion Content Studio', href: '/zion-content-studio', icon: FileText, description: 'AI content creation' },
    { name: 'Zion CRM Intelligence', href: '/zion-crm-intelligence', icon: Users, description: 'AI-enhanced CRM' },
    { name: 'Zion Data Sync', href: '/zion-data-sync', icon: Database, description: 'Data integration platform' },
    { name: 'Zion Lead Magnet', href: '/zion-lead-magnet', icon: Target, description: 'Lead generation platform' },
    { name: 'Zion Project Master', href: '/zion-project-master', icon: Calendar, description: 'Project management AI' },
    { name: 'Zion Email Automation', href: '/zion-email-automation', icon: Mail, description: 'Email marketing AI' },
    { name: 'Zion Inventory Smart', href: '/zion-inventory-smart', icon: Package, description: 'Inventory management' },
    { name: 'Zion Invoice Genius', href: '/zion-invoice-genius', icon: DollarSign, description: 'Invoice generation' },
    { name: 'Zion Workflow Automation', href: '/zion-workflow-automation', icon: Settings, description: 'Process automation' },
    { name: 'Zion Performance Monitor', href: '/zion-performance-monitor', icon: Monitor, description: 'Performance monitoring' },
    { name: 'Zion Compliance Manager', href: '/zion-compliance-manager', icon: CheckSquare, description: 'Compliance management' },
    { name: 'Zion Social Scheduler', href: '/zion-social-scheduler', icon: Globe, description: 'Social media management' },
    { name: 'Zion AI Video Editor', href: '/zion-ai-video-editor', icon: Eye, description: 'AI video editing' },
    { name: 'Zion AI Translator Pro', href: '/zion-ai-translator-pro', icon: Globe, description: 'Advanced translation' },
    { name: 'Zion AI Code Reviewer', href: '/zion-ai-code-reviewer', icon: Code, description: 'Intelligent code review' },
    { name: 'Zion Customer Insights Pro', href: '/zion-customer-insights', icon: Users, description: 'Customer analytics' },
    { name: 'Zion AI Email Assistant', href: '/zion-ai-email-assistant', icon: Mail, description: 'Smart email management' },
    { name: 'Zion AI Meeting Assistant', href: '/zion-ai-meeting-assistant', icon: Calendar, description: 'Meeting automation' },
    { name: 'Zion AI SEO Optimizer', href: '/zion-ai-seo-optimizer', icon: Target, description: 'SEO optimization' },
    { name: 'Zion AI Data Cleaner', href: '/zion-ai-data-cleaner', icon: Database, description: 'Data cleaning & validation' },
    { name: 'Zion AI Contract Analyzer', href: '/zion-ai-contract-analyzer', icon: FileText, description: 'Contract analysis' },
    { name: 'Zion AI Survey Builder', href: '/zion-ai-survey-builder', icon: CheckSquare, description: 'Intelligent surveys' },
    { name: 'Zion AI Accounting Assistant', href: '/zion-ai-accounting-assistant', icon: DollarSign, description: 'AI accounting' },
    { name: 'Zion AI Recruitment Pro', href: '/zion-ai-recruitment-pro', icon: Users, description: 'AI recruitment' },
    { name: 'Zion AI Content Moderation', href: '/zion-ai-content-moderation', icon: Shield, description: 'Content moderation' },
    { name: 'Zion AI Predictive Maintenance', href: '/zion-ai-predictive-maintenance', icon: Settings, description: 'Equipment maintenance' },
    { name: 'Zion AI Energy Manager', href: '/zion-ai-energy-manager', icon: Zap, description: 'Energy optimization' },
    { name: 'Zion AI Supply Chain Optimizer', href: '/zion-ai-supply-chain-optimizer', icon: Box, description: 'Supply chain AI' },
    { name: 'Zion AI Fraud Detector', href: '/zion-ai-fraud-detector', icon: Shield, description: 'Fraud detection' },
    { name: 'Zion AI Customer Service Pro', href: '/zion-ai-customer-service-pro', icon: MessageSquare, description: 'Advanced customer service' },
    { name: 'Zion AI Marketing Automation', href: '/zion-ai-marketing-automation', icon: Target, description: 'Marketing AI' },
    { name: 'Zion AI Document AI', href: '/zion-ai-document-ai', icon: FileText, description: 'Document processing' }
  ];

  const emergingTech = [
    { name: '5G Implementation', href: '/5g-implementation', icon: Zap, description: 'Next-gen connectivity' },
    { name: 'AI 3D Generation', href: '/ai-3d-generation', icon: Box, description: '3D content creation' },
    { name: 'AI Holographic Workspace', href: '/ai-holographic-workspace', icon: Monitor, description: 'Immersive work environments' },
    { name: 'AI Autonomous Systems', href: '/ai-autonomous-systems', icon: Server, description: 'Self-operating systems' },
    { name: 'AI Blockchain Solutions', href: '/ai-blockchain-solutions', icon: LinkIcon, description: 'Decentralized AI' },
    { name: 'AI Edge Computing', href: '/ai-edge-computing', icon: Server, description: 'Distributed processing' },
    { name: 'Quantum Computing', href: '/quantum-computing', icon: Server, description: 'Quantum processing power' },
    { name: 'AR/VR Solutions', href: '/ar-vr-solutions', icon: Monitor, description: 'Immersive experiences' },
    { name: 'IoT Integration', href: '/iot-integration', icon: Wifi, description: 'Internet of Things' },
    { name: 'Machine Learning', href: '/machine-learning', icon: Brain, description: 'Advanced ML algorithms' }
  ];

  const companyLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Partners', href: '/partners' },
    { name: 'Blog', href: '/blog' },
    { name: 'News', href: '/news' }
  ];

  const supportLinks = [
    { name: 'Help Center', href: '/support' },
    { name: 'Documentation', href: '/docs' },
    { name: 'API Reference', href: '/api' },
    { name: 'Status Page', href: '/status' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Consultation', href: '/consultation' }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-80 bg-slate-900/95 backdrop-blur-xl border-r border-cyan-500/20 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-cyan-500/20">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-white transition-colors duration-200"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {/* Home */}
            <Link
              to="/"
              className={`flex items-center space-x-3 p-3 rounded-lg transition-colors duration-200 ${
                isActive('/') ? 'bg-cyan-500/20 text-cyan-400' : 'text-gray-300 hover:text-white hover:bg-slate-800/50'
              }`}
              onClick={handleLinkClick}
            >
              <Home className="w-5 h-5" />
              <span>Home</span>
            </Link>

            {/* AI Services */}
            <div>
              <button
                onClick={() => handleDropdownToggle('ai')}
                className="flex items-center justify-between w-full p-3 rounded-lg text-gray-300 hover:text-white hover:bg-slate-800/50 transition-colors duration-200"
              >
                <div className="flex items-center space-x-3">
                  <Brain className="w-5 h-5" />
                  <span>AI Services</span>
                </div>
                {activeDropdown === 'ai' ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
              </button>
              {activeDropdown === 'ai' && (
                <div className="mt-2 ml-8 space-y-2">
                  {aiServices.slice(0, 8).map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="flex items-center space-x-3 p-2 rounded-lg text-sm text-gray-400 hover:text-cyan-400 hover:bg-slate-800/30 transition-colors duration-200"
                      onClick={handleLinkClick}
                    >
                      <service.icon className="w-4 h-4" />
                      <span>{service.name}</span>
                    </Link>
                  ))}
                  <Link
                    to="/ai-services"
                    className="flex items-center space-x-3 p-2 rounded-lg text-sm text-cyan-400 hover:text-cyan-300 hover:bg-slate-800/30 transition-colors duration-200"
                    onClick={handleLinkClick}
                  >
                    <ArrowRight className="w-4 h-4" />
                    <span>View All AI Services</span>
                  </Link>
                </div>
              )}
            </div>

            {/* IT Services */}
            <div>
              <button
                onClick={() => handleDropdownToggle('it')}
                className="flex items-center justify-between w-full p-3 rounded-lg text-gray-300 hover:text-white hover:bg-slate-800/50 transition-colors duration-200"
              >
                <div className="flex items-center space-x-3">
                  <Cloud className="w-5 h-5" />
                  <span>IT Services</span>
                </div>
                {activeDropdown === 'it' ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
              </button>
              {activeDropdown === 'it' && (
                <div className="mt-2 ml-8 space-y-2">
                  {itServices.slice(0, 8).map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="flex items-center space-x-3 p-2 rounded-lg text-sm text-gray-400 hover:text-cyan-400 hover:bg-slate-800/30 transition-colors duration-200"
                      onClick={handleLinkClick}
                    >
                      <service.icon className="w-4 h-4" />
                      <span>{service.name}</span>
                    </Link>
                  ))}
                  <Link
                    to="/it-services"
                    className="flex items-center space-x-3 p-2 rounded-lg text-sm text-cyan-400 hover:text-cyan-300 hover:bg-slate-800/30 transition-colors duration-200"
                    onClick={handleLinkClick}
                  >
                    <ArrowRight className="w-4 h-4" />
                    <span>View All IT Services</span>
                  </Link>
                </div>
              )}
            </div>

            {/* Micro SAAS */}
            <div>
              <button
                onClick={() => handleDropdownToggle('saas')}
                className="flex items-center justify-between w-full p-3 rounded-lg text-gray-300 hover:text-white hover:bg-slate-800/50 transition-colors duration-200"
              >
                <div className="flex items-center space-x-3">
                  <Server className="w-5 h-5" />
                  <span>Micro SAAS</span>
                </div>
                {activeDropdown === 'saas' ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
              </button>
              {activeDropdown === 'saas' && (
                <div className="mt-2 ml-8 space-y-2">
                  {microSaasServices.slice(0, 8).map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="flex items-center space-x-3 p-2 rounded-lg text-sm text-gray-400 hover:text-cyan-400 hover:bg-slate-800/30 transition-colors duration-200"
                      onClick={handleLinkClick}
                    >
                      <service.icon className="w-4 h-4" />
                      <span>{service.name}</span>
                    </Link>
                  ))}
                  <Link
                    to="/micro-saas"
                    className="flex items-center space-x-3 p-2 rounded-lg text-sm text-cyan-400 hover:text-cyan-300 hover:bg-slate-800/30 transition-colors duration-200"
                    onClick={handleLinkClick}
                  >
                    <ArrowRight className="w-4 h-4" />
                    <span>View All Micro SAAS</span>
                  </Link>
                </div>
              )}
            </div>

            {/* Emerging Technologies */}
            <div>
              <button
                onClick={() => handleDropdownToggle('emerging')}
                className="flex items-center justify-between w-full p-3 rounded-lg text-gray-300 hover:text-white hover:bg-slate-800/50 transition-colors duration-200"
              >
                <div className="flex items-center space-x-3">
                  <Zap className="w-5 h-5" />
                  <span>Emerging Tech</span>
                </div>
                {activeDropdown === 'emerging' ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
              </button>
              {activeDropdown === 'emerging' && (
                <div className="mt-2 ml-8 space-y-2">
                  {emergingTech.map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="flex items-center space-x-3 p-2 rounded-lg text-sm text-gray-400 hover:text-cyan-400 hover:bg-slate-800/30 transition-colors duration-200"
                      onClick={handleLinkClick}
                    >
                      <service.icon className="w-4 h-4" />
                      <span>{service.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Company Links */}
            <div>
              <button
                onClick={() => handleDropdownToggle('company')}
                className="flex items-center justify-between w-full p-3 rounded-lg text-gray-300 hover:text-white hover:bg-slate-800/50 transition-colors duration-200"
              >
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5" />
                  <span>Company</span>
                </div>
                {activeDropdown === 'company' ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
              </button>
              {activeDropdown === 'company' && (
                <div className="mt-2 ml-8 space-y-2">
                  {companyLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      className="block p-2 rounded-lg text-sm text-gray-400 hover:text-cyan-400 hover:bg-slate-800/30 transition-colors duration-200"
                      onClick={handleLinkClick}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Support Links */}
            <div>
              <button
                onClick={() => handleDropdownToggle('support')}
                className="flex items-center justify-between w-full p-3 rounded-lg text-gray-300 hover:text-white hover:bg-slate-800/50 transition-colors duration-200"
              >
                <div className="flex items-center space-x-3">
                  <MessageCircle className="w-5 h-5" />
                  <span>Support</span>
                </div>
                {activeDropdown === 'support' ? (
                  <ChevronDown className="w-4 h-4" />
                ) : (
                  <ChevronRight className="w-4 h-4" />
                )}
              </button>
              {activeDropdown === 'support' && (
                <div className="mt-2 ml-8 space-y-2">
                  {supportLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      className="block p-2 rounded-lg text-sm text-gray-400 hover:text-cyan-400 hover:bg-slate-800/30 transition-colors duration-200"
                      onClick={handleLinkClick}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Direct Links */}
            <div className="space-y-2">
              <Link
                to="/about"
                className={`flex items-center space-x-3 p-3 rounded-lg transition-colors duration-200 ${
                  isActive('/about') ? 'bg-cyan-500/20 text-cyan-400' : 'text-gray-300 hover:text-white hover:bg-slate-800/50'
                }`}
                onClick={handleLinkClick}
              >
                <Users className="w-5 h-5" />
                <span>About</span>
              </Link>
              <Link
                to="/services"
                className={`flex items-center space-x-3 p-3 rounded-lg transition-colors duration-200 ${
                  isActive('/services') ? 'bg-cyan-500/20 text-cyan-400' : 'text-gray-300 hover:text-white hover:bg-slate-800/50'
                }`}
                onClick={handleLinkClick}
              >
                <Settings className="w-5 h-5" />
                <span>Services</span>
              </Link>
              <Link
                to="/pricing"
                className={`flex items-center space-x-3 p-3 rounded-lg transition-colors duration-200 ${
                  isActive('/pricing') ? 'bg-cyan-500/20 text-cyan-400' : 'text-gray-300 hover:text-white hover:bg-slate-800/50'
                }`}
                onClick={handleLinkClick}
              >
                <DollarSign className="w-5 h-5" />
                <span>Pricing</span>
              </Link>
              <Link
                to="/case-studies"
                className={`flex items-center space-x-3 p-3 rounded-lg transition-colors duration-200 ${
                  isActive('/case-studies') ? 'bg-cyan-500/20 text-cyan-400' : 'text-gray-300 hover:text-white hover:bg-slate-800/50'
                }`}
                onClick={handleLinkClick}
              >
                <FileText className="w-5 h-5" />
                <span>Case Studies</span>
              </Link>
              <Link
                to="/blog"
                className={`flex items-center space-x-3 p-3 rounded-lg transition-colors duration-200 ${
                  isActive('/blog') ? 'bg-cyan-500/20 text-cyan-400' : 'text-gray-300 hover:text-white hover:bg-slate-800/50'
                }`}
                onClick={handleLinkClick}
              >
                <FileText className="w-5 h-5" />
                <span>Blog</span>
              </Link>
              <Link
                to="/contact"
                className={`flex items-center space-x-3 p-3 rounded-lg transition-colors duration-200 ${
                  isActive('/contact') ? 'bg-cyan-500/20 text-cyan-400' : 'text-gray-300 hover:text-white hover:bg-slate-800/50'
                }`}
                onClick={handleLinkClick}
              >
                <MessageCircle className="w-5 h-5" />
                <span>Contact</span>
              </Link>
            </div>
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-cyan-500/20">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-cyan-400">
                <Phone className="w-4 h-4" />
                <span className="text-sm">(302) 464-0950</span>
              </div>
              <div className="flex items-center space-x-2 text-cyan-400">
                <Mail className="w-4 h-4" />
                <span className="text-sm">kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
