'use client';
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  X, 
  Brain, 
  Cloud, 
  Shield, 
  Code, 
  BarChart, 
  Users, 
  Zap, 
  ArrowRight, 
  ChevronDown, 
  ChevronRight,
  Home,
  FileText,
  DollarSign,
  Phone,
  MessageSquare,
  Settings,
  Globe,
  Database,
  Smartphone,
  Lock,
  TrendingUp,
  Target,
  Calendar,
  CheckSquare,
  Play,
  Mail,
  MapPin,
  Clock,
  Cpu,
  Eye,
  Mic,
  Workflow,
  Wifi,
  Server,
  Package,
  ShoppingCart,
  Link as LinkIcon,
  Heart,
  Building
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && !(event.target as Element).closest('.sidebar')) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose]);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const aiServices = [
    { name: 'AI Analytics Dashboard', href: '/ai-analytics-dashboard', icon: BarChart },
    { name: 'AI API Management', href: '/ai-api-management', icon: Code },
    { name: 'AI Automated Reporting', href: '/ai-automated-reporting', icon: FileText },
    { name: 'AI Automated Testing', href: '/ai-automated-testing', icon: CheckSquare },
    { name: 'AI Automation', href: '/ai-automation', icon: Zap },
    { name: 'AI Autonomous Systems', href: '/ai-autonomous-systems', icon: Cpu },
    { name: 'AI Blockchain Analytics', href: '/ai-blockchain-analytics', icon: LinkIcon },
    { name: 'AI Blockchain Solutions', href: '/ai-blockchain-solutions', icon: LinkIcon },
    { name: 'AI Business Intelligence', href: '/ai-business-intelligence', icon: BarChart },
    { name: 'AI Chatbot Builder', href: '/ai-chatbot-builder', icon: MessageSquare },
    { name: 'AI Chatbot Enterprise', href: '/ai-chatbot-enterprise', icon: MessageSquare },
    { name: 'AI Climate Prediction', href: '/ai-climate-prediction-engine', icon: Globe },
    { name: 'AI Climate Solutions', href: '/ai-climate-solutions-pro', icon: Globe },
    { name: 'AI Cloud Infrastructure', href: '/ai-cloud-infrastructure', icon: Cloud },
    { name: 'AI Code Assistant', href: '/ai-code-assistant', icon: Code },
    { name: 'AI Code Generation', href: '/ai-code-generation', icon: Code },
    { name: 'AI Code Security Auditor', href: '/ai-code-security-auditor', icon: Shield },
    { name: 'AI Computer Vision', href: '/ai-computer-vision', icon: Eye },
    { name: 'AI Content Delivery Network', href: '/ai-content-delivery-network', icon: Globe },
    { name: 'AI Content Generation', href: '/ai-content-generation', icon: FileText },
    { name: 'AI Content Generation Pro', href: '/ai-content-generation-pro', icon: FileText },
    { name: 'AI Content Moderation', href: '/ai-content-moderation', icon: Shield },
    { name: 'AI Content Studio', href: '/ai-content-studio', icon: FileText },
    { name: 'AI Content Writer', href: '/ai-content-writer', icon: FileText },
    { name: 'AI Conversation Analytics', href: '/ai-conversation-analytics', icon: Users },
    { name: 'AI Conversational AI', href: '/ai-conversational-ai', icon: MessageSquare },
    { name: 'AI CRM', href: '/ai-crm', icon: Users },
    { name: 'AI CRM Assistant', href: '/ai-crm-assistant', icon: Users },
    { name: 'AI Customer Churn', href: '/ai-customer-churn', icon: Users },
    { name: 'AI Customer Service', href: '/ai-customer-service', icon: Phone },
    { name: 'AI Customer Support', href: '/ai-customer-support', icon: Phone },
    { name: 'AI Customer Support Bot', href: '/ai-customer-support-bot', icon: MessageSquare },
    { name: 'AI Customer Support Chatbot', href: '/ai-customer-support-chatbot', icon: MessageSquare },
    { name: 'AI Cyber Defense Matrix', href: '/ai-cyber-defense-matrix', icon: Shield },
    { name: 'AI Cybersecurity', href: '/ai-cybersecurity', icon: Shield },
    { name: 'AI Cybersecurity Monitor', href: '/ai-cybersecurity-monitor', icon: Shield },
    { name: 'AI Cybersecurity Suite', href: '/ai-cybersecurity-suite', icon: Shield },
    { name: 'AI Data Analytics', href: '/ai-data-analytics', icon: Database },
    { name: 'AI Data Visualization', href: '/ai-data-visualization', icon: BarChart },
    { name: 'AI Design Studio', href: '/ai-design-studio', icon: Eye },
    { name: 'AI Document Intelligence', href: '/ai-document-intelligence', icon: FileText },
    { name: 'AI Document Processing', href: '/ai-document-processing', icon: FileText },
    { name: 'AI Document Processor', href: '/ai-document-processor', icon: FileText },
    { name: 'AI Document Scanner', href: '/ai-document-scanner', icon: FileText },
    { name: 'AI Drug Discovery Pro', href: '/ai-drug-discovery-pro', icon: Heart },
    { name: 'AI E-commerce Optimizer', href: '/ai-ecommerce-optimizer', icon: ShoppingCart },
    { name: 'AI E-commerce Solutions', href: '/ai-ecommerce-solutions', icon: ShoppingCart },
    { name: 'AI Edge Computing', href: '/ai-edge-computing', icon: Server },
    { name: 'AI Education', href: '/ai-education', icon: Users },
    { name: 'AI Email Assistant', href: '/ai-email-assistant', icon: Mail },
    { name: 'AI Email Marketing', href: '/ai-email-marketing', icon: Mail },
    { name: 'AI Email Marketing Automation', href: '/ai-email-marketing-automation', icon: Mail },
    { name: 'AI Energy', href: '/ai-energy', icon: Zap },
    { name: 'AI Energy Grid Management', href: '/ai-energy-grid-management-pro', icon: Zap },
    { name: 'AI Enterprise Solutions', href: '/ai-enterprise-solutions', icon: Building },
    { name: 'AI Expense Tracker', href: '/ai-expense-tracker', icon: DollarSign },
    { name: 'AI Fashion Design', href: '/ai-fashion-design', icon: Eye },
    { name: 'AI Financial Advisor', href: '/ai-financial-advisor', icon: DollarSign },
    { name: 'AI Financial Analyzer', href: '/ai-financial-analyzer', icon: DollarSign },
    { name: 'AI Financial Crime Detection', href: '/ai-financial-crime-detection-pro', icon: Shield },
    { name: 'AI Financial Forecasting', href: '/ai-financial-forecasting', icon: TrendingUp },
    { name: 'AI Financial Services', href: '/ai-financial-services', icon: DollarSign },
    { name: 'AI Fintech', href: '/ai-fintech', icon: DollarSign },
    { name: 'AI Healthcare', href: '/ai-healthcare', icon: Heart },
    { name: 'AI Healthcare Diagnostics', href: '/ai-healthcare-diagnostics', icon: Heart },
    { name: 'AI HR Solutions', href: '/ai-hr-solutions', icon: Users },
    { name: 'AI IoT Analytics', href: '/ai-iot-analytics', icon: Wifi },
    { name: 'AI Knowledge Management', href: '/ai-knowledge-management', icon: FileText },
    { name: 'AI Predictive Analytics', href: '/ai-predictive-analytics', icon: BarChart },
    { name: 'AI Predictive Modeling', href: '/ai-predictive-modeling', icon: BarChart },
    { name: 'AI Recommendation Engine', href: '/ai-recommendation-engine', icon: Target },
    { name: 'AI Sentiment Analysis', href: '/ai-sentiment-analysis', icon: Heart },
    { name: 'AI Supply Chain Intelligence', href: '/ai-supply-chain-ai', icon: Package },
    { name: 'AI Voice Assistant', href: '/ai-voice-assistant', icon: Mic },
    { name: 'AI Voice Solutions', href: '/ai-voice-solutions', icon: Mic },
    { name: 'AI Workflow Automation', href: '/ai-workflow-automation', icon: Workflow }
  ];

  const itServices = [
    { name: '5G Implementation', href: '/5g-implementation', icon: Zap },
    { name: 'API Development', href: '/api-development', icon: Code },
    { name: 'API Management', href: '/api-management', icon: Code },
    { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: Cloud },
    { name: 'Cloud Migration', href: '/cloud-migration', icon: Cloud },
    { name: 'Cloud-Native Development', href: '/cloud-native-development', icon: Cloud },
    { name: 'Cloud Security', href: '/cloud-security', icon: Shield },
    { name: 'Cybersecurity Solutions', href: '/cybersecurity-solutions', icon: Shield },
    { name: 'Database Management', href: '/database-management', icon: Database },
    { name: 'Data Analytics & BI', href: '/data-analytics-bi', icon: BarChart },
    { name: 'Data Engineering', href: '/data-engineering', icon: Database },
    { name: 'Data Visualization', href: '/data-visualization', icon: BarChart },
    { name: 'DevOps & CI/CD', href: '/devops-cicd', icon: Settings },
    { name: 'Disaster Recovery', href: '/disaster-recovery', icon: Shield },
    { name: 'E-commerce Development', href: '/e-commerce-development', icon: ShoppingCart },
    { name: 'IT Asset Management', href: '/it-asset-management', icon: Package },
    { name: 'IT Consulting', href: '/it-consulting', icon: Settings },
    { name: 'IT Project Management', href: '/it-project-management', icon: Calendar },
    { name: 'IT Security Services', href: '/it-security-services', icon: Lock },
    { name: 'IT Support', href: '/it-support', icon: Smartphone },
    { name: 'Mobile Development', href: '/mobile-development', icon: Smartphone },
    { name: 'Network Infrastructure', href: '/network-infrastructure', icon: Wifi },
    { name: 'Performance Optimization', href: '/performance-optimization', icon: Zap },
    { name: 'Software Development', href: '/software-development', icon: Code },
    { name: 'System Integration', href: '/system-integration', icon: Server },
    { name: 'Web Development', href: '/web-development', icon: Globe },
    { name: 'Workflow Automation', href: '/workflow-automation', icon: Settings }
  ];

  const microSaasServices = [
    { name: 'Zion Analytics Pro', href: '/zion-analytics-pro', icon: BarChart },
    { name: 'Zion Chat AI', href: '/zion-chat-ai', icon: MessageSquare },
    { name: 'Zion Security Shield', href: '/zion-security-shield', icon: Shield },
    { name: 'Zion Cloud Vault', href: '/zion-cloud-vault', icon: Cloud },
    { name: 'Zion Content Studio', href: '/zion-content-studio', icon: FileText },
    { name: 'Zion CRM Intelligence', href: '/zion-crm-intelligence', icon: Users },
    { name: 'Zion Data Sync', href: '/zion-data-sync', icon: Database },
    { name: 'Zion Lead Magnet', href: '/zion-lead-magnet', icon: Target },
    { name: 'Zion Project Master', href: '/zion-project-master', icon: Calendar },
    { name: 'Zion Email Automation', href: '/zion-email-automation', icon: Mail },
    { name: 'Zion Inventory Smart', href: '/zion-inventory-smart', icon: Package },
    { name: 'Zion Invoice Genius', href: '/zion-invoice-genius', icon: DollarSign },
    { name: 'Zion Workflow Automation', href: '/zion-workflow-automation', icon: Settings },
    { name: 'Zion Performance Monitor', href: '/zion-performance-monitor', icon: Smartphone },
    { name: 'Zion Compliance Manager', href: '/zion-compliance-manager', icon: CheckSquare },
    { name: 'Zion Social Scheduler', href: '/zion-social-scheduler', icon: Globe },
    { name: 'Zion AI Video Editor', href: '/zion-ai-video-editor', icon: Eye },
    { name: 'Zion AI Translator Pro', href: '/zion-ai-translator-pro', icon: Globe },
    { name: 'Zion AI Code Reviewer', href: '/zion-ai-code-reviewer', icon: Code },
    { name: 'Zion Customer Insights Pro', href: '/zion-customer-insights', icon: Users },
    { name: 'Zion AI Email Assistant', href: '/zion-ai-email-assistant', icon: Mail },
    { name: 'Zion AI Meeting Assistant', href: '/zion-ai-meeting-assistant', icon: Calendar },
    { name: 'Zion AI SEO Optimizer', href: '/zion-ai-seo-optimizer', icon: Target },
    { name: 'Zion AI Data Cleaner', href: '/zion-ai-data-cleaner', icon: Database },
    { name: 'Zion AI Contract Analyzer', href: '/zion-ai-contract-analyzer', icon: FileText },
    { name: 'Zion AI Survey Builder', href: '/zion-ai-survey-builder', icon: CheckSquare },
    { name: 'Zion AI Accounting Assistant', href: '/zion-ai-accounting-assistant', icon: DollarSign },
    { name: 'Zion AI Recruitment Pro', href: '/zion-ai-recruitment-pro', icon: Users },
    { name: 'Zion AI Content Moderation', href: '/zion-ai-content-moderation', icon: Shield },
    { name: 'Zion AI Predictive Maintenance', href: '/zion-ai-predictive-maintenance', icon: Settings },
    { name: 'Zion AI Energy Manager', href: '/zion-ai-energy-manager', icon: Zap },
    { name: 'Zion AI Supply Chain Optimizer', href: '/zion-ai-supply-chain-optimizer', icon: Package },
    { name: 'Zion AI Fraud Detector', href: '/zion-ai-fraud-detector', icon: Shield },
    { name: 'Zion AI Customer Service Pro', href: '/zion-ai-customer-service-pro', icon: MessageSquare },
    { name: 'Zion AI Marketing Automation', href: '/zion-ai-marketing-automation', icon: Target },
    { name: 'Zion AI Document AI', href: '/zion-ai-document-ai', icon: FileText }
  ];

  const emergingTech = [
    { name: '5G Implementation', href: '/5g-implementation', icon: Zap },
    { name: 'AI 3D Generation', href: '/ai-3d-generation', icon: Package },
    { name: 'AI Holographic Workspace', href: '/ai-holographic-workspace', icon: Smartphone },
    { name: 'AI Autonomous Systems', href: '/ai-autonomous-systems', icon: Cpu },
    { name: 'AI Blockchain Solutions', href: '/ai-blockchain-solutions', icon: LinkIcon },
    { name: 'AI Edge Computing', href: '/ai-edge-computing', icon: Server },
    { name: 'Quantum Computing', href: '/quantum-computing', icon: Cpu },
    { name: 'AR/VR Solutions', href: '/ar-vr-solutions', icon: Smartphone },
    { name: 'IoT Integration', href: '/iot-integration', icon: Wifi },
    { name: 'Machine Learning', href: '/machine-learning', icon: Brain }
  ];

  const mainPages = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: Users },
    { name: 'Services', href: '/services', icon: Settings },
    { name: 'Pricing', href: '/pricing', icon: DollarSign },
    { name: 'Case Studies', href: '/case-studies', icon: FileText },
    { name: 'Blog', href: '/blog', icon: FileText },
    { name: 'Tutorials', href: '/tutorials', icon: Play },
    { name: 'Contact', href: '/contact', icon: MessageSquare }
  ];

  const renderServiceSection = (title: string, services: any[], sectionKey: string, icon: any) => {
    const isExpanded = expandedSections.includes(sectionKey);
    
    return (
      <div className="mb-4">
        <button
          onClick={() => toggleSection(sectionKey)}
          className="w-full flex items-center justify-between p-3 text-left text-gray-300 hover:text-cyan-400 transition-colors duration-300 rounded-lg hover:bg-white/5"
        >
          <div className="flex items-center space-x-3">
            <icon className="w-5 h-5" />
            <span className="font-medium">{title}</span>
          </div>
          {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
        </button>
        
        {isExpanded && (
          <div className="ml-6 mt-2 space-y-1 max-h-64 overflow-y-auto custom-scrollbar">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.href}
                className={`flex items-center space-x-3 p-2 rounded-lg text-sm transition-colors duration-300 ${
                  location.pathname === service.href
                    ? 'bg-cyan-500/20 text-cyan-400'
                    : 'text-gray-400 hover:text-cyan-400 hover:bg-white/5'
                }`}
                onClick={onClose}
              >
                <service.icon className="w-4 h-4 flex-shrink-0" />
                <span className="truncate">{service.name}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      {/* Sidebar Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden" onClick={onClose} />
      )}

      {/* Sidebar */}
      <div className={`sidebar fixed top-0 left-0 h-full w-80 bg-slate-900/95 backdrop-blur-xl border-r border-cyan-500/20 z-50 transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 lg:static lg:z-auto`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b border-cyan-500/20">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center space-x-3 group" onClick={onClose}>
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg shadow-cyan-500/25">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-white neon-text-enhanced group-hover:glow">Zion Tech</span>
                  <span className="text-xs text-cyan-400 font-medium tracking-wider">AI & IT SOLUTIONS</span>
                </div>
              </Link>
              <button
                onClick={onClose}
                className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto p-6 space-y-2">
            {/* Main Pages */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-3">Main Pages</h3>
              <div className="space-y-1">
                {mainPages.map((page, index) => (
                  <Link
                    key={index}
                    to={page.href}
                    className={`flex items-center space-x-3 p-3 rounded-lg transition-colors duration-300 ${
                      location.pathname === page.href
                        ? 'bg-cyan-500/20 text-cyan-400'
                        : 'text-gray-300 hover:text-cyan-400 hover:bg-white/5'
                    }`}
                    onClick={onClose}
                  >
                    <page.icon className="w-5 h-5 flex-shrink-0" />
                    <span className="font-medium">{page.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* AI Services */}
            {renderServiceSection('AI Services', aiServices, 'ai-services', Brain)}

            {/* IT Services */}
            {renderServiceSection('IT Services', itServices, 'it-services', Cloud)}

            {/* Micro SAAS */}
            {renderServiceSection('Micro SAAS', microSaasServices, 'micro-saas', Cpu)}

            {/* Emerging Technologies */}
            {renderServiceSection('Emerging Tech', emergingTech, 'emerging-tech', Zap)}

            {/* Contact Info */}
            <div className="mt-8 p-4 bg-slate-800/50 rounded-lg">
              <h3 className="text-sm font-semibold text-cyan-400 mb-3">Contact Information</h3>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>(302) 464-0950</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span className="truncate">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs">364 E Main St STE 1008<br />Middletown, DE 19709</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs">Mon-Fri: 9AM-6PM EST</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-cyan-500/20">
            <div className="text-center">
              <p className="text-xs text-gray-400 mb-2">© 2024 Zion Tech Group</p>
              <div className="flex justify-center space-x-4">
                <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  <Phone className="w-4 h-4" />
                </a>
                <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
