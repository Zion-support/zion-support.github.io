import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Home,
  Zap,
  Brain,
  Shield,
  Users,
  HardDrive,
  TrendingUp,
  Building2,
  FileText,
  HelpCircle,
  BarChart3,
  Settings,
  ChevronRight,
  ChevronDown,
  Phone,
  Mail,
  MapPin,
  Star,
  Rocket,
  Target,
  Code,
  Cloud,
  Lock,
  Database,
  Activity,
  MessageCircle,
  DollarSign,
  Award,
  Heart,
  Globe,
  Cpu,
  Network,
  Layers,
  Monitor,
  ArrowRight
} from 'lucide-react';

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function Sidebar({ isOpen = false, onClose }: SidebarProps) {
  const [expandedSections, setExpandedSections] = useState<string[]>(['Services', 'Quick Access']);
  const location = useLocation();

  const toggleSection = (sectionName: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionName) 
        ? prev.filter(name => name !== sectionName)
        : [...prev, sectionName]
    );
  };

  const isActive = (path: string) => location.pathname === path;

  const sidebarSections = [
    {
      name: 'Quick Access',
      type: 'section',
      icon: Star,
      items: [
        { name: 'Home', href: '/', icon: Home },
        { name: 'Services Overview', href: '/services', icon: Zap },
        { name: 'Solutions', href: '/solutions', icon: Target },
        { name: 'Pricing', href: '/pricing', icon: DollarSign },
        { name: 'Contact', href: '/contact', icon: MessageCircle }
      ]
    },
    {
      name: 'Services',
      type: 'section',
      icon: Zap,
      items: [
        { name: 'AI Content Studio Pro', href: '/services/ai-content-studio-pro', icon: Brain, featured: true },
        { name: 'AI Email Orchestrator', href: '/services/ai-email-orchestrator', icon: MessageCircle, featured: true },
        { name: 'AI Project Orchestrator', href: '/services/ai-project-orchestrator', icon: Settings, featured: true },
        { name: 'AI Financial Analytics', href: '/services/ai-financial-analytics-pro', icon: BarChart3 },
        { name: 'Quantum Optimization', href: '/services/quantum-optimization-suite', icon: Cpu },
        { name: 'Enterprise Blockchain', href: '/services/enterprise-blockchain-platform', icon: Layers },
        { name: 'AI Edge Computing', href: '/services/ai-edge-computing-platform', icon: Monitor },
        { name: 'AI Cybersecurity Suite', href: '/services/ai-cybersecurity-suite', icon: Lock },
        { name: 'Cloud Cost Optimization', href: '/services/cloud-cost-optimization', icon: Cloud },
        { name: 'Managed Kubernetes', href: '/services/managed-kubernetes', icon: Database },
        { name: 'Data Engineering', href: '/services/data-engineering-analytics', icon: Activity },
        { name: 'Security Assessments', href: '/services/security-assessments-and-pentest', icon: Shield }
      ]
    },
    {
      name: 'Solutions',
      type: 'section',
      icon: Target,
      items: [
        { name: 'Enterprise Solutions', href: '/solutions/enterprise', icon: Building2 },
        { name: 'Healthcare Tech', href: '/solutions/healthcare', icon: Heart },
        { name: 'Financial Services', href: '/solutions/financial', icon: DollarSign },
        { name: 'Manufacturing', href: '/solutions/manufacturing', icon: Activity },
        { name: 'Retail & E-commerce', href: '/solutions/retail', icon: TrendingUp },
        { name: 'Education', href: '/solutions/education', icon: Users },
        { name: 'Government', href: '/solutions/government', icon: Building2 },
        { name: 'Non-Profit', href: '/solutions/nonprofit', icon: Heart }
      ]
    },
    {
      name: 'Company',
      type: 'section',
      icon: Building2,
      items: [
        { name: 'About Us', href: '/about', icon: Users },
        { name: 'Our Team', href: '/team', icon: Users },
        { name: 'Careers', href: '/careers', icon: Award },
        { name: 'Partners', href: '/partners', icon: Users },
        { name: 'News & Updates', href: '/news', icon: FileText },
        { name: 'Case Studies', href: '/case-studies', icon: FileText },
        { name: 'Press Kit', href: '/press', icon: FileText }
      ]
    },
    {
      name: 'Resources',
      type: 'section',
      icon: FileText,
      items: [
        { name: 'Blog', href: '/blog', icon: FileText },
        { name: 'Documentation', href: '/docs', icon: FileText },
        { name: 'API Reference', href: '/api', icon: Code },
        { name: 'White Papers', href: '/white-papers', icon: FileText },
        { name: 'Webinars', href: '/webinars', icon: Monitor },
        { name: 'Training', href: '/training', icon: Users },
        { name: 'Help Center', href: '/help', icon: HelpCircle },
        { name: 'Community', href: '/community', icon: Users }
      ]
    }
  ];

  const renderSidebarItem = (item: any) => {
    if (item.type === 'link') {
      return (
        <Link
          key={item.name}
          to={item.href}
          className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
            isActive(item.href)
              ? 'bg-blue-600/20 text-blue-400 border border-blue-600/30'
              : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
          }`}
          onClick={onClose}
        >
          <item.icon className="w-5 h-5" />
          <span className="font-medium">{item.name}</span>
        </Link>
      );
    }

    if (item.type === 'section') {
      const isExpanded = expandedSections.includes(item.name);
      
      return (
        <div key={item.name} className="space-y-2">
          <button
            onClick={() => toggleSection(item.name)}
            className="flex items-center justify-between w-full px-4 py-3 text-left text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors"
          >
            <div className="flex items-center space-x-3">
              <item.icon className="w-5 h-5" />
              <span className="font-medium">{item.name}</span>
            </div>
            {isExpanded ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <ChevronRight className="w-4 h-4" />
            )}
          </button>
          
          {isExpanded && (
            <div className="ml-8 space-y-1">
              {item.items.map((subItem: any) => (
                <Link
                  key={subItem.name}
                  to={subItem.href}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition-colors group ${
                    isActive(subItem.href)
                      ? 'text-blue-400 bg-blue-600/10'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800/30'
                  }`}
                  onClick={onClose}
                >
                  <subItem.icon className="w-4 h-4" />
                  <span className="flex-1">{subItem.name}</span>
                  {subItem.featured && (
                    <Star className="w-3 h-3 text-yellow-400" />
                  )}
                  {isActive(subItem.href) && (
                    <ArrowRight className="w-3 h-3 text-blue-400" />
                  )}
                </Link>
              ))}
            </div>
          )}
        </div>
      );
    }

    return null;
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-80 bg-gray-900 text-white z-50 overflow-y-auto">
        {/* Sidebar Header */}
        <div className="p-4 border-b border-gray-800">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg">Zion Tech Group</span>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Sidebar Content */}
        <div className="p-4 space-y-2">
          {sidebarSections.map(renderSidebarItem)}
        </div>

        {/* Contact Information */}
        <div className="p-4 border-t border-gray-800 mt-8">
          <h3 className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-3">
            Contact Information
          </h3>
          <div className="space-y-3">
            <a 
              href="tel:+13024640950" 
              className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm">+1 302 464 0950</span>
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com" 
              className="flex items-center space-x-3 text-gray-300 hover:text-blue-400 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span className="text-sm">kleber@ziontechgroup.com</span>
            </a>
            <div className="flex items-start space-x-3 text-gray-300">
              <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
              <span className="text-sm">
                364 E Main St STE 1008<br />
                Middletown DE 19709
              </span>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="p-4 border-t border-gray-800">
          <h3 className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-3">
            Quick Actions
          </h3>
          <div className="space-y-2">
            <Link
              to="/request-quote"
              className="flex items-center space-x-3 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              onClick={onClose}
            >
              <TrendingUp className="w-5 h-5" />
              <span className="font-medium">Get Quote</span>
            </Link>
            <Link
              to="/demo"
              className="flex items-center space-x-3 px-4 py-3 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-800 hover:text-white transition-colors"
              onClick={onClose}
            >
              <Settings className="w-5 h-5" />
              <span className="font-medium">Request Demo</span>
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-800 mt-auto">
          <div className="text-center text-gray-400 text-sm">
            <p>© 2024 Zion Tech Group</p>
            <p className="mt-1">Empowering Innovation</p>
          </div>
        </div>
      </aside>
    </>
  );
}