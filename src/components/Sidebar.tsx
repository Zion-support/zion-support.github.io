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
  ChevronDown
} from 'lucide-react';

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function Sidebar({ isOpen = true, onClose }: SidebarProps) {
  const [expandedSections, setExpandedSections] = useState<string[]>(['Services']);
  const location = useLocation();

  const toggleSection = (sectionName: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionName) 
        ? prev.filter(name => name !== sectionName)
        : [...prev, sectionName]
    );
  };

  const isActive = (path: string) => location.pathname === path;

  const sidebarItems = [
    {
      name: 'Home',
      href: '/',
      icon: Home,
      type: 'link'
    },
    {
      name: 'Services',
      type: 'section',
      icon: Zap,
      items: [
        { name: 'AI & Automation', href: '/services/ai', icon: Brain },
        { name: 'Cloud & DevOps', href: '/services/cloud', icon: HardDrive },
        { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield },
        { name: 'Digital Transformation', href: '/services/digital', icon: TrendingUp },
        { name: 'IT Consulting', href: '/services/consulting', icon: Users },
        { name: 'Micro SAAS', href: '/services/micro-saas', icon: Building2 }
      ]
    },
    {
      name: 'Solutions',
      type: 'section',
      icon: Brain,
      items: [
        { name: 'Enterprise', href: '/solutions/enterprise', icon: Building2 },
        { name: 'Healthcare', href: '/solutions/healthcare', icon: Users },
        { name: 'Financial Services', href: '/solutions/financial', icon: TrendingUp },
        { name: 'Government', href: '/solutions/government', icon: Shield },
        { name: 'Manufacturing', href: '/solutions/manufacturing', icon: HardDrive },
        { name: 'Retail', href: '/solutions/retail', icon: BarChart3 }
      ]
    },
    {
      name: 'Company',
      type: 'section',
      icon: Building2,
      items: [
        { name: 'About Us', href: '/about', icon: Users },
        { name: 'Leadership', href: '/about#team', icon: Users },
        { name: 'Careers', href: '/careers', icon: Users },
        { name: 'Partners', href: '/partners', icon: Users },
        { name: 'Press', href: '/press', icon: FileText }
      ]
    },
    {
      name: 'Resources',
      type: 'section',
      icon: FileText,
      items: [
        { name: 'Blog', href: '/blog', icon: FileText },
        { name: 'Case Studies', href: '/case-studies', icon: FileText },
        { name: 'White Papers', href: '/white-papers', icon: FileText },
        { name: 'Webinars', href: '/webinars', icon: FileText },
        { name: 'Documentation', href: '/docs', icon: FileText },
        { name: 'API Reference', href: '/api', icon: FileText }
      ]
    },
    {
      name: 'Support',
      type: 'section',
      icon: HelpCircle,
      items: [
        { name: 'Help Center', href: '/help', icon: HelpCircle },
        { name: 'Contact Support', href: '/contact', icon: Users },
        { name: 'Training', href: '/training', icon: FileText },
        { name: 'Community', href: '/community', icon: Users },
        { name: 'System Status', href: '/status', icon: BarChart3 }
      ]
    },
    {
      name: 'Pricing',
      href: '/pricing',
      icon: BarChart3,
      type: 'link'
    },
    {
      name: 'Contact',
      href: '/contact',
      icon: Users,
      type: 'link'
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
                  className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                    isActive(subItem.href)
                      ? 'text-blue-400 bg-blue-600/10'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800/30'
                  }`}
                  onClick={onClose}
                >
                  <subItem.icon className="w-4 h-4" />
                  <span>{subItem.name}</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      );
    }

    return null;
  };

  return (
    <aside className={`bg-gray-900 text-white w-64 min-h-screen transition-transform duration-300 ${
      isOpen ? 'translate-x-0' : '-translate-x-full'
    }`}>
      {/* Sidebar Header */}
      <div className="p-4 border-b border-gray-800">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-lg">Zion Tech</span>
        </div>
      </div>

      {/* Sidebar Content */}
      <div className="p-4 space-y-2">
        {sidebarItems.map(renderSidebarItem)}
      </div>

      {/* Quick Actions */}
      <div className="p-4 border-t border-gray-800 mt-8">
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
  );
}