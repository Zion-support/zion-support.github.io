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
  Briefcase,
  DollarSign,
  Phone,
  MessageSquare,
  HelpCircle,
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
  Clock
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  const location = useLocation();

  // Close sidebar when clicking outside
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

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const aiServices = [
    { name: 'AI Analytics', href: '/ai-analytics', icon: BarChart },
    { name: 'AI Automation', href: '/ai-automation', icon: Zap },
    { name: 'AI Chatbot Builder', href: '/ai-chatbot-builder', icon: MessageSquare },
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
    { name: 'API Development', href: '/api-development', icon: Code },
    { name: 'Cybersecurity Solutions', href: '/cybersecurity-solutions', icon: Shield },
    { name: 'Database Management', href: '/database-management', icon: Database },
    { name: 'Mobile Development', href: '/mobile-development', icon: Smartphone },
    { name: 'Web Development', href: '/web-development', icon: Globe },
    { name: 'DevOps & CI/CD', href: '/devops-cicd', icon: Settings },
    { name: 'IT Support', href: '/it-support', icon: Monitor },
    { name: 'Data Analytics & BI', href: '/data-analytics-bi', icon: BarChart },
    { name: 'Custom Software', href: '/custom-software', icon: Code }
  ];

  const microSaasServices = [
    { name: 'Analytics Tools', href: '/analytics-tools', icon: BarChart },
    { name: 'Productivity Apps', href: '/productivity-apps', icon: CheckSquare },
    { name: 'Communication Tools', href: '/communication-tools', icon: MessageSquare },
    { name: 'Project Management', href: '/project-management', icon: Calendar },
    { name: 'Customer Support', href: '/customer-support', icon: Users },
    { name: 'Marketing Automation', href: '/marketing-automation', icon: Target }
  ];

  const companyLinks = [
    { name: 'About Us', href: '/about', icon: Users },
    { name: 'Our Team', href: '/team', icon: Users },
    { name: 'Careers', href: '/careers', icon: Briefcase },
    { name: 'Partners', href: '/partners', icon: Users },
    { name: 'Blog', href: '/blog', icon: FileText },
    { name: 'News', href: '/news', icon: FileText }
  ];

  const supportLinks = [
    { name: 'Help Center', href: '/support', icon: HelpCircle },
    { name: 'Documentation', href: '/docs', icon: FileText },
    { name: 'API Reference', href: '/api', icon: Code },
    { name: 'Status Page', href: '/status', icon: Settings },
    { name: 'Contact Us', href: '/contact', icon: MessageSquare },
    { name: 'Consultation', href: '/consultation', icon: Phone }
  ];

  const renderServiceSection = (title: string, services: any[], sectionKey: string, icon: any) => {
    const isExpanded = expandedSections.includes(sectionKey);
    
    return (
      <div className="mb-4">
        <button
          onClick={() => toggleSection(sectionKey)}
          className="w-full flex items-center justify-between p-3 text-left text-gray-300 hover:text-blue-400 transition-colors duration-300 rounded-lg hover:bg-white/5"
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
                  isActive(service.href)
                    ? 'bg-blue-500/20 text-blue-400'
                    : 'text-gray-400 hover:text-blue-400 hover:bg-white/5'
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
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={onClose} />
      )}

      {/* Sidebar */}
      <div className={`sidebar fixed top-0 left-0 h-full w-80 bg-slate-900/95 backdrop-blur-xl border-r border-blue-500/20 z-50 transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 lg:static lg:z-auto`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-700">
            <Link to="/" className="flex items-center space-x-2" onClick={onClose}>
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Zion Tech Group</span>
            </Link>
            <button
              onClick={onClose}
              className="p-2 hover:bg-slate-700 rounded-md transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto p-4">
            {/* Home */}
            <Link
              to="/"
              onClick={onClose}
              className={`flex items-center px-3 py-2 mb-4 rounded-md transition-colors ${
                isActive('/')
                  ? 'text-blue-400 bg-blue-400/10'
                  : 'text-gray-300 hover:text-white hover:bg-slate-700'
              }`}
            >
              <Home className="w-5 h-5 mr-3" />
              <span className="font-medium">Home</span>
            </Link>

            {/* AI Services */}
            {renderServiceSection('AI Services', aiServices, 'ai-services', Brain)}

            {/* IT Services */}
            {renderServiceSection('IT Services', itServices, 'it-services', Cloud)}

            {/* Micro SaaS */}
            {renderServiceSection('Micro SaaS', microSaasServices, 'micro-saas', Code)}

            {/* Company */}
            <div className="mb-4">
              <div className="px-3 py-2 text-sm font-semibold text-gray-400 uppercase tracking-wider">
                Company
              </div>
              <div className="mt-2 space-y-1">
                {companyLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.href}
                    onClick={onClose}
                    className={`flex items-center px-3 py-2 text-sm rounded-md transition-colors ${
                      isActive(link.href)
                        ? 'text-blue-400 bg-blue-400/10'
                        : 'text-gray-400 hover:text-white hover:bg-slate-700'
                    }`}
                  >
                    <link.icon className="w-4 h-4 mr-3" />
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Support */}
            <div className="mb-4">
              <div className="px-3 py-2 text-sm font-semibold text-gray-400 uppercase tracking-wider">
                Support
              </div>
              <div className="mt-2 space-y-1">
                {supportLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.href}
                    onClick={onClose}
                    className={`flex items-center px-3 py-2 text-sm rounded-md transition-colors ${
                      isActive(link.href)
                        ? 'text-blue-400 bg-blue-400/10'
                        : 'text-gray-400 hover:text-white hover:bg-slate-700'
                    }`}
                  >
                    <link.icon className="w-4 h-4 mr-3" />
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="mt-8 p-4 bg-slate-800/50 rounded-lg">
              <h3 className="text-sm font-semibold text-blue-400 mb-3">Contact Information</h3>
              <div className="space-y-2 text-sm text-gray-300">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-blue-400" />
                  <span>(302) 464-0950</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span className="truncate">kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span className="text-xs">364 E Main St STE 1008<br />Middletown, DE 19709</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-4 h-4 text-blue-400" />
                  <span className="text-xs">Mon-Fri: 9AM-6PM EST</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-gray-700">
            <div className="text-center">
              <p className="text-xs text-gray-400 mb-2">© 2024 Zion Tech Group</p>
              <div className="flex justify-center space-x-4">
                <a href="tel:+13024640950" className="text-blue-400 hover:text-blue-300 transition-colors">
                  <Phone className="w-4 h-4" />
                </a>
                <a href="mailto:kleber@ziontechgroup.com" className="text-blue-400 hover:text-blue-300 transition-colors">
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