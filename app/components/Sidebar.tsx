'use client';
import React, { useState, useEffect } from 'react';
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
  ChevronDown,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  Zap,
  Cpu,
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
  ShoppingCart
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['ai-services', 'micro-saas', 'it-services']));
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        onClose();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [onClose]);

  const toggleSection = (section: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(section)) {
      newExpanded.delete(section);
    } else {
      newExpanded.add(section);
    }
    setExpandedSections(newExpanded);
  };

  const aiServices = [
    { name: 'AI Analytics', href: '/ai-analytics', icon: BarChart },
    { name: 'AI Automation', href: '/ai-automation', icon: Zap },
    { name: 'AI Chatbot', href: '/ai-chatbot-builder', icon: MessageCircle },
    { name: 'AI CRM', href: '/ai-crm', icon: Users },
    { name: 'AI Cybersecurity', href: '/ai-cybersecurity', icon: Shield },
    { name: 'AI Data Analytics', href: '/ai-data-analytics', icon: Database },
    { name: 'AI Healthcare', href: '/ai-healthcare', icon: Heart },
    { name: 'AI Financial Services', href: '/ai-financial-services', icon: DollarSign },
    { name: 'AI Computer Vision', href: '/ai-computer-vision', icon: Eye },
    { name: 'AI Voice Solutions', href: '/ai-voice-solutions', icon: Mic },
    { name: 'AI E-commerce', href: '/ai-ecommerce-solutions', icon: Globe },
    { name: 'AI HR Solutions', href: '/ai-hr-solutions', icon: Users },
    { name: 'AI Content Generation', href: '/ai-content-generation', icon: FileText },
    { name: 'AI Workflow Automation', href: '/ai-workflow-automation', icon: Workflow },
    { name: 'AI Document Processing', href: '/ai-document-processing', icon: FileText },
    { name: 'AI Predictive Analytics', href: '/ai-predictive-analytics', icon: BarChart },
    { name: 'AI Edge Computing', href: '/ai-edge-computing', icon: Cpu },
    { name: 'AI Video Analysis', href: '/ai-video-analysis', icon: Eye },
    { name: 'AI Speech Synthesis', href: '/ai-speech-synthesis', icon: Mic },
    { name: 'AI Recommendation Engine', href: '/ai-recommendation-engine', icon: Target }
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: Cloud },
    { name: 'API Development', href: '/api-development', icon: Code },
    { name: 'Cybersecurity', href: '/cybersecurity-solutions', icon: Shield },
    { name: 'Database Management', href: '/database-management', icon: Database },
    { name: 'Mobile Development', href: '/mobile-development', icon: Smartphone },
    { name: 'Web Development', href: '/web-development', icon: Globe },
    { name: 'DevOps & CI/CD', href: '/devops-cicd', icon: Settings },
    { name: 'IT Support', href: '/it-support', icon: Monitor },
    { name: 'Data Analytics & BI', href: '/data-analytics-bi', icon: BarChart },
    { name: 'Custom Software', href: '/custom-software', icon: Code },
    { name: 'Network Infrastructure', href: '/network-infrastructure', icon: Wifi },
    { name: 'IT Asset Management', href: '/it-asset-management', icon: Package },
    { name: 'IT Security Services', href: '/it-security-services', icon: Lock },
    { name: 'IT Project Management', href: '/it-project-management', icon: Calendar },
    { name: 'Cloud-Native Development', href: '/cloud-native-development', icon: Cloud },
    { name: 'AI Integration Services', href: '/ai-integration-services', icon: Brain },
    { name: 'Blockchain Development', href: '/blockchain-development', icon: LinkIcon },
    { name: 'IoT Development', href: '/iot-development', icon: Wifi },
    { name: 'E-commerce Development', href: '/e-commerce-development', icon: ShoppingCart },
    { name: 'Advanced API Development', href: '/api-development-advanced', icon: Code }
  ];

  const microSaasServices = [
    { name: 'Zion Analytics Pro', href: '/zion-analytics-pro', icon: BarChart },
    { name: 'Zion Chat AI', href: '/zion-chat-ai', icon: MessageCircle },
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
    { name: 'Zion Performance Monitor', href: '/zion-performance-monitor', icon: Monitor },
    { name: 'Zion Compliance Manager', href: '/zion-compliance-manager', icon: CheckSquare },
    { name: 'Zion Social Scheduler', href: '/zion-social-scheduler', icon: Globe },
    { name: 'Zion AI Video Editor', href: '/zion-ai-video-editor', icon: Eye },
    { name: 'Zion AI Translator Pro', href: '/zion-ai-translator-pro', icon: Globe },
    { name: 'Zion AI Code Reviewer', href: '/zion-ai-code-reviewer', icon: Code },
    { name: 'Zion Customer Insights Pro', href: '/zion-customer-insights', icon: Users }
  ];

  const mainLinks = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: Users },
    { name: 'Services', href: '/services', icon: Settings },
    { name: 'Pricing', href: '/pricing', icon: DollarSign },
    { name: 'Case Studies', href: '/case-studies', icon: BarChart },
    { name: 'Blog', href: '/blog', icon: FileText },
    { name: 'Tutorials', href: '/tutorials', icon: Book },
    { name: 'Contact', href: '/contact', icon: Phone }
  ];

  const renderServiceSection = (title: string, services: any[], sectionKey: string) => (
    <div className="mb-4">
      <button
        onClick={() => toggleSection(sectionKey)}
        className="flex items-center justify-between w-full text-left text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium py-2"
      >
        <span>{title}</span>
        {expandedSections.has(sectionKey) ? (
          <ChevronDown className="w-4 h-4" />
        ) : (
          <ChevronRight className="w-4 h-4" />
        )}
      </button>
      {expandedSections.has(sectionKey) && (
        <div className="ml-4 space-y-1">
          {services.map((service, index) => (
            <Link
              key={index}
              to={service.href}
              onClick={onClose}
              className={`flex items-center space-x-2 text-sm py-2 px-3 rounded-lg transition-colors duration-300 ${
                location.pathname === service.href
                  ? 'text-cyan-400 bg-cyan-400/10'
                  : 'text-gray-400 hover:text-cyan-400 hover:bg-white/5'
              }`}
            >
              <service.icon className="w-4 h-4" />
              <span>{service.name}</span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-80 bg-slate-900/95 backdrop-blur-xl border-r border-cyan-500/20 z-50 transform transition-transform duration-300 ease-in-out">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-cyan-500/20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white">Zion Tech Group</span>
                <span className="text-xs text-cyan-400 font-medium tracking-wider">AI & IT SOLUTIONS</span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto p-6">
            <div className="space-y-6">
              {/* Main Links */}
              <div>
                <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-4">Navigation</h3>
                <div className="space-y-1">
                  {mainLinks.map((link, index) => (
                    <Link
                      key={index}
                      to={link.href}
                      onClick={onClose}
                      className={`flex items-center space-x-3 py-3 px-4 rounded-lg transition-colors duration-300 ${
                        location.pathname === link.href
                          ? 'text-cyan-400 bg-cyan-400/10'
                          : 'text-gray-300 hover:text-cyan-400 hover:bg-white/5'
                      }`}
                    >
                      <link.icon className="w-5 h-5" />
                      <span>{link.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* AI Services */}
              {renderServiceSection('AI Services', aiServices, 'ai-services')}

              {/* IT Services */}
              {renderServiceSection('IT Services', itServices, 'it-services')}

              {/* Micro SaaS */}
              {renderServiceSection('Micro SaaS', microSaasServices, 'micro-saas')}
            </div>
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-cyan-500/20">
            <div className="space-y-4">
              <div className="text-center">
                <h4 className="text-sm font-semibold text-white mb-3">Contact Info</h4>
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex items-center justify-center space-x-2">
                    <Phone className="w-4 h-4 text-cyan-400" />
                    <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                      (302) 464-0950
                    </a>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Mail className="w-4 h-4 text-cyan-400" />
                    <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                      kleber@ziontechgroup.com
                    </a>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <MapPin className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs">Middletown, DE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;