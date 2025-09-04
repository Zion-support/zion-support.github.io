import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Home,
  Users,
  Phone,
  FileText,
  Briefcase,
  Brain,
  Network,
  Cloud,
  Code,
  Server,
  Cpu,
  Calendar,
  Mail,
  BarChart3,
  Zap,
  BookOpen,
  HelpCircle,
  Shield,
  DollarSign,
  X
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const location = useLocation();
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleSection = (section: string) => {
    setExpandedSections(prev =>
      prev.includes(section)
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const mainNavigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: Users },
    { name: 'Contact', href: '/contact', icon: Phone },
    { name: 'Blog', href: '/blog', icon: FileText },
    { name: 'Careers', href: '/careers', icon: Briefcase }
  ];

  const services = [
    { name: 'AI Services', href: '/ai-services', icon: Brain },
    { name: 'IT Services', href: '/it-services', icon: Network },
    { name: 'Micro SaaS', href: '/micro-saas', icon: Cloud },
    { name: 'Web Development', href: '/services/web-development', icon: Code },
    { name: 'Cloud Services', href: '/services/cloud-services', icon: Server },
    { name: 'AI Development', href: '/services/ai-development', icon: Cpu }
  ];

  const solutions = [
    { name: 'AI Content Creation', href: '/solutions/ai-content-creation', icon: Brain },
    { name: 'Customer Support', href: '/solutions/customer-support', icon: Users },
    { name: 'Email Automation', href: '/solutions/email-automation', icon: Mail },
    { name: 'Event Management', href: '/solutions/event-management', icon: Calendar },
    { name: 'Project Management', href: '/solutions/project-management', icon: BarChart3 },
    { name: 'Workflow Automation', href: '/solutions/workflow-automation', icon: Zap }
  ];

  const resources = [
    { name: 'Documentation', href: '/docs', icon: BookOpen },
    { name: 'FAQ', href: '/faq', icon: HelpCircle },
    { name: 'Support', href: '/support', icon: Shield }
  ];

  const legal = [
    { name: 'Privacy Policy', href: '/privacy', icon: Shield },
    { name: 'Terms of Service', href: '/terms', icon: FileText },
    { name: 'Pricing', href: '/pricing', icon: DollarSign }
  ];

  const navigationSections = [
    { title: 'Main', items: mainNavigation, key: 'main' },
    { title: 'Services', items: services, key: 'services' },
    { title: 'Solutions', items: solutions, key: 'solutions' },
    { title: 'Resources', items: resources, key: 'resources' },
    { title: 'Legal', items: legal, key: 'legal' }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-black/50" onClick={onClose}  />
      <div className="fixed top-0 left-0 h-full w-80 bg-black border-r border-white/10 overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">Z</span>
            </div>
            <span className="text-white font-bold text-xl">Zion Tech</span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            <X className="w-6 h-6 text-white"  />
          </button>
        </div>

        <nav className="p-6 space-y-6">
          {navigationSections.map((section) => (
            <div key={section.key}>
              <button
                onClick={() => toggleSection(section.key)}
                className="flex items-center justify-between w-full text-left text-white font-semibold text-lg mb-3 hover:text-blue-400 transition-colors"
              >
                {section.title}
                <span className={`transform transition-transform ${
                  expandedSections.includes(section.key) ? 'rotate-180' : ''
                }`}>
                  ▼
                </span>
              </button>
              
              {expandedSections.includes(section.key) && (
                <div className="space-y-2 ml-4">
                  {section.items.map((item) => {
                    const Icon = item.icon;
                    const isActive = location.pathname === item.href;
                    
                    return (
                      <Link
                        key={item.name}
                        to={item.href}
                        onClick={onClose}
                        className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                          isActive
                            ? 'bg-blue-600 text-white'
                            : 'text-gray-300 hover:text-white hover:bg-white/10'
                        }`}
                      >
                        <Icon className="w-5 h-5"  />
                        <span>{item.name}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}