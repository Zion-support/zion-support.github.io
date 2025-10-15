import React, { useState, useCallback, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import {
  X,
  ChevronDown,
  ChevronRight,
  Home,
  Users,
  Settings,
  Cloud,
  Code,
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin
} from "lucide-react";
import {
  GlobeAltIcon,
  EyeIcon,
  ChatBubbleLeftRightIcon,
  ChartBarIcon,
  EnvelopeIcon,
  ShareIcon,
  DevicePhoneMobileIcon,
  CircleStackIcon,
  SignalIcon,
  ShieldCheckIcon,
  QuestionMarkCircleIcon
} from '@heroicons/react/24/outline';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const location = useLocation();
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());

  const toggleSection = useCallback((section: string) => {
    setExpandedSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(section)) {
        newSet.delete(section);
      } else {
        newSet.add(section);
      }
      return newSet;
    });
  }, []);

  const navigationSections = useMemo(() => [
    {
      title: 'Main',
      items: [
        { name: 'Home', href: '/', icon: Home },
        { name: 'About', href: '/about', icon: Users },
        { name: 'Contact', href: '/contact', icon: Phone },
        { name: 'Pricing', href: '/pricing', icon: Star }
      ]
    },
    {
      title: 'AI Services',
      items: [
        { name: 'AI Solutions', href: '/ai-solutions', icon: Settings },
        { name: 'AI Code Assistant', href: '/ai-code-assistant', icon: Code },
        { name: 'AI Translator Pro', href: '/ai-translator-pro', icon: GlobeAltIcon },
        { name: 'AI Video Generator', href: '/ai-video-generator', icon: EyeIcon },
        { name: 'AI Voice Cloner', href: '/ai-voice-cloner', icon: ChatBubbleLeftRightIcon },
        { name: 'AI Design Assistant', href: '/ai-design-assistant', icon: Settings }
      ]
    },
    {
      title: 'Micro SaaS',
      items: [
        { name: 'Micro SaaS Overview', href: '/micro-saas-solutions', icon: GlobeAltIcon },
        { name: 'AI CRM Optimizer', href: '/ai-crm-optimizer', icon: Settings },
        { name: 'AI Data Visualizer', href: '/ai-data-visualizer', icon: ChartBarIcon },
        { name: 'AI Email Optimizer', href: '/ai-email-optimizer', icon: EnvelopeIcon },
        { name: 'AI Website Analyzer', href: '/ai-website-analyzer', icon: EyeIcon },
        { name: 'AI Social Media Manager', href: '/ai-social-media-manager', icon: ShareIcon }
      ]
    },
    {
      title: 'IT Solutions',
      items: [
        { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: Cloud },
        { name: 'Web Development', href: '/web-development', icon: Code },
        { name: 'Mobile Development', href: '/mobile-development', icon: DevicePhoneMobileIcon },
        { name: 'Database Management', href: '/database-management', icon: CircleStackIcon },
        { name: 'Network Infrastructure', href: '/network-infrastructure', icon: SignalIcon },
        { name: 'Security Audit', href: '/security-audit', icon: ShieldCheckIcon }
      ]
    },
    {
      title: 'Resources',
      items: [
        { name: 'Blog', href: '/blog', icon: Code },
        { name: 'Case Studies', href: '/case-studies', icon: Star },
        { name: 'API Documentation', href: '/api-docs', icon: Code },
        { name: 'Help Center', href: '/help', icon: QuestionMarkCircleIcon }
      ]
    }
  ], []);

  const isActive = (href: string) => location.pathname === href;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="fixed top-0 left-0 h-full w-80 bg-slate-900 shadow-xl">
        <div className="flex items-center justify-between p-4 border-b border-slate-700">
          <h2 className="text-lg font-semibold text-white">Navigation</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-md text-gray-400 hover:text-white hover:bg-slate-700"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <div className="overflow-y-auto h-full pb-20">
          {navigationSections.map((section) => (
            <div key={section.title} className="border-b border-slate-700">
              <button
                onClick={() => toggleSection(section.title)}
                className="w-full flex items-center justify-between p-4 text-left text-white hover:bg-slate-800"
              >
                <span className="font-medium">{section.title}</span>
                {expandedSections.has(section.title) ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronRight className="h-4 w-4" />
                )}
              </button>
              
              {expandedSections.has(section.title) && (
                <div className="bg-slate-800">
                  {section.items.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`flex items-center px-6 py-3 text-sm transition-colors ${
                        isActive(item.href)
                          ? 'bg-blue-600 text-white'
                          : 'text-gray-300 hover:bg-slate-700 hover:text-white'
                      }`}
                    >
                      <item.icon className="h-4 w-4 mr-3" />
                      {item.name}
                      {isActive(item.href) && (
                        <ArrowRight className="h-3 w-3 ml-auto" />
                      )}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-slate-900 border-t border-slate-700">
          <div className="flex items-center space-x-4 text-sm text-gray-400">
            <div className="flex items-center">
              <Mail className="h-4 w-4 mr-2" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-2" />
              <span>Middletown, DE</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
