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
        { name: 'Pricing', href: '/pricing', icon: Star },
        { name: 'Team', href: '/team', icon: Users },
        { name: 'Careers', href: '/careers', icon: Users }
      ]
    },
    {
      title: 'AI Services',
      items: [
        { name: 'AI Solutions Overview', href: '/ai-solutions', icon: Settings },
        { name: 'AI Services', href: '/ai-services', icon: Settings },
        { name: 'AI Chatbot Builder', href: '/ai-chatbot-builder', icon: Settings },
        { name: 'AI Content Generator', href: '/ai-content-generator', icon: Settings },
        { name: 'AI Code Assistant Pro', href: '/ai-code-assistant-pro', icon: Code },
        { name: 'AI Translator Pro', href: '/ai-translator-pro', icon: Settings },
        { name: 'AI Video Analyzer Pro', href: '/ai-video-analyzer-pro', icon: Settings },
        { name: 'AI Personalization Engine', href: '/ai-personalization-engine-pro', icon: Settings }
      ]
    },
    {
      title: 'Micro SaaS',
      items: [
        { name: 'Micro SaaS Overview', href: '/micro-saas-solutions', icon: Settings },
        { name: 'Task Manager Pro', href: '/task-manager-pro', icon: Settings },
        { name: 'CRM Pro', href: '/crm-pro', icon: Users },
        { name: 'Analytics Dashboard Pro', href: '/analytics-dashboard-pro', icon: Settings },
        { name: 'AI Meeting Scheduler Pro', href: '/ai-meeting-scheduler-pro', icon: Settings },
        { name: 'AI Content Calendar Pro', href: '/ai-content-calendar-pro', icon: Settings },
        { name: 'Lead Generator Pro', href: '/lead-generator-pro', icon: Settings },
        { name: 'Time Tracker Pro', href: '/time-tracker-pro', icon: Settings }
      ]
    },
    {
      title: 'IT Solutions',
      items: [
        { name: 'IT Services Overview', href: '/it-services', icon: Settings },
        { name: 'Cloud Infrastructure', href: '/cloud-infrastructure', icon: Cloud },
        { name: 'Web Development', href: '/web-development', icon: Code },
        { name: 'Mobile Development', href: '/mobile-development', icon: Settings },
        { name: 'Edge Computing', href: '/edge-computing-solutions', icon: Settings },
        { name: 'Quantum Computing', href: '/quantum-computing-services', icon: Settings },
        { name: 'AR/VR Solutions', href: '/augmented-reality-solutions', icon: Settings },
        { name: 'RPA Solutions', href: '/robotic-process-automation', icon: Settings }
      ]
    },
    {
      title: 'Resources',
      items: [
        { name: 'Blog', href: '/blog', icon: Code },
        { name: 'Case Studies', href: '/case-studies', icon: Star },
        { name: 'API Documentation', href: '/api-docs', icon: Code },
        { name: 'Help Center', href: '/help', icon: Settings },
        { name: 'Partnerships', href: '/partnerships', icon: Users },
        { name: 'Accessibility', href: '/accessibility', icon: Settings }
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
