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
    { name: 'AI Voice Solutions', href: '/ai-voice-solutions', icon: Mic }
  ];

  const itServices = [
    { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: Cloud },
    { name: 'DevOps & CI/CD', href: '/devops-cicd', icon: Settings },
    { name: 'Cybersecurity Solutions', href: '/cybersecurity-solutions', icon: Shield },
    { name: 'Web Development', href: '/web-development', icon: Globe },
    { name: 'Mobile Development', href: '/mobile-development', icon: Smartphone },
    { name: 'API Development', href: '/api-development', icon: Code },
    { name: 'IT Support', href: '/it-support', icon: Monitor },
    { name: 'Data Analytics & BI', href: '/data-analytics-bi', icon: BarChart },
    { name: 'Custom Software', href: '/custom-software', icon: Code },
    { name: 'Database Management', href: '/database-management', icon: Database }
  ];

  const microSaasServices = [
    { name: 'ZionAnalytics Pro', href: '/zion-analytics-pro', icon: BarChart },
    { name: 'ZionChat AI', href: '/zion-chat-ai', icon: MessageCircle },
    { name: 'ZionSecurity Shield', href: '/zion-security-shield', icon: Shield },
    { name: 'ZionCloud Vault', href: '/zion-cloud-vault', icon: Cloud },
    { name: 'ZionContent Studio', href: '/zion-content-studio', icon: FileText },
    { name: 'ZionCRM Intelligence', href: '/zion-crm-intelligence', icon: Users },
    { name: 'ZionLead Magnet', href: '/zion-lead-magnet', icon: Target },
    { name: 'ZionProject Master', href: '/zion-project-master', icon: Calendar },
    { name: 'ZionEmail Automation', href: '/zion-email-automation', icon: Mail },
    { name: 'ZionInvoice Genius', href: '/zion-invoice-genius', icon: DollarSign }
  ];

  const mainNavItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: Users },
    { name: 'Services', href: '/services', icon: Settings },
    { name: 'Pricing', href: '/pricing', icon: DollarSign },
    { name: 'Case Studies', href: '/case-studies', icon: BarChart },
    { name: 'Blog', href: '/blog', icon: FileText },
    { name: 'Contact', href: '/contact', icon: Phone }
  ];

  const isActive = (href: string) => location.pathname === href;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="fixed left-0 top-0 h-full w-80 bg-slate-900 border-r border-slate-700 overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
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
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Main Navigation */}
          <div className="space-y-2 mb-8">
            {mainNavItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={onClose}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive(item.href)
                    ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                    : 'text-gray-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.name}</span>
              </Link>
            ))}
          </div>

          {/* AI Services Section */}
          <div className="mb-6">
            <button
              onClick={() => toggleSection('ai-services')}
              className="flex items-center justify-between w-full px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              <div className="flex items-center space-x-3">
                <Brain className="w-5 h-5" />
                <span className="font-medium">AI Services</span>
              </div>
              {expandedSections.has('ai-services') ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </button>
            {expandedSections.has('ai-services') && (
              <div className="ml-8 mt-2 space-y-1">
                {aiServices.map((service) => (
                  <Link
                    key={service.name}
                    to={service.href}
                    onClick={onClose}
                    className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-colors"
                  >
                    <service.icon className="w-4 h-4" />
                    <span>{service.name}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* IT Services Section */}
          <div className="mb-6">
            <button
              onClick={() => toggleSection('it-services')}
              className="flex items-center justify-between w-full px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              <div className="flex items-center space-x-3">
                <Cloud className="w-5 h-5" />
                <span className="font-medium">IT Services</span>
              </div>
              {expandedSections.has('it-services') ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </button>
            {expandedSections.has('it-services') && (
              <div className="ml-8 mt-2 space-y-1">
                {itServices.map((service) => (
                  <Link
                    key={service.name}
                    to={service.href}
                    onClick={onClose}
                    className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-colors"
                  >
                    <service.icon className="w-4 h-4" />
                    <span>{service.name}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Micro SaaS Section */}
          <div className="mb-6">
            <button
              onClick={() => toggleSection('micro-saas')}
              className="flex items-center justify-between w-full px-4 py-3 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              <div className="flex items-center space-x-3">
                <Zap className="w-5 h-5" />
                <span className="font-medium">Micro SaaS</span>
              </div>
              {expandedSections.has('micro-saas') ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </button>
            {expandedSections.has('micro-saas') && (
              <div className="ml-8 mt-2 space-y-1">
                {microSaasServices.map((service) => (
                  <Link
                    key={service.name}
                    to={service.href}
                    onClick={onClose}
                    className="flex items-center space-x-3 px-4 py-2 text-sm text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-colors"
                  >
                    <service.icon className="w-4 h-4" />
                    <span>{service.name}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Contact Info */}
          <div className="pt-6 border-t border-slate-700">
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-sm text-gray-400">
                <Phone className="w-4 h-4" />
                <a href="tel:+13024640950" className="hover:text-cyan-400 transition-colors">
                  (302) 464-0950
                </a>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-400">
                <Mail className="w-4 h-4" />
                <a href="mailto:kleber@ziontechgroup.com" className="hover:text-cyan-400 transition-colors">
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;