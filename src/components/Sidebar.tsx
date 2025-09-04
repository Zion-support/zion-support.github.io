import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
<<<<<<< HEAD
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
  Cloud,
  Target,
  Heart,
  DollarSign,
  Briefcase,
  Newspaper,
  Mail,
  Phone
} from 'lucide-react';

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function Sidebar(props: SidebarProps) {
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
      icon: Zap,
      type: 'section',
      children: [
        { name: 'AI Solutions', href: '/services/ai-solutions', icon: Brain },
        { name: 'Quantum Computing', href: '/services/quantum-computing', icon: Shield },
        { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield },
        { name: 'Cloud DevOps', href: '/services/cloud-devops', icon: Cloud },
        { name: 'Data Analytics', href: '/services/data-analytics', icon: TrendingUp },
        { name: 'IT Infrastructure', href: '/services/it-infrastructure', icon: HardDrive },
        { name: 'AI Project Management', href: '/services/ai-project-management', icon: Brain },
        { name: 'AI Marketing Automation', href: '/services/ai-marketing-automation', icon: Brain },
        { name: 'AI Financial Analytics', href: '/services/ai-financial-analytics', icon: Brain },
        { name: 'AI Customer Support', href: '/services/ai-customer-support-automation', icon: Brain }
      ]
    },
    {
      name: 'Solutions',
      icon: Target,
      type: 'section',
      children: [
        { name: 'Enterprise Solutions', href: '/solutions/enterprise', icon: Building2 },
        { name: 'Healthcare Solutions', href: '/solutions/healthcare', icon: Heart },
        { name: 'Financial Solutions', href: '/solutions/finance', icon: DollarSign },
        { name: 'Retail Solutions', href: '/solutions/retail', icon: Target }
      ]
    },
    {
      name: 'Company',
      icon: Building2,
      type: 'section',
      children: [
        { name: 'About Us', href: '/about', icon: Users },
        { name: 'Our Team', href: '/team', icon: Users },
        { name: 'Careers', href: '/careers', icon: Briefcase },
        { name: 'News', href: '/news', icon: Newspaper },
        { name: 'Partners', href: '/partners', icon: Users }
      ]
    },
    {
      name: 'Resources',
      href: '/resources',
      icon: FileText,
      type: 'link'
    },
    {
      name: 'Blog',
      href: '/blog',
      icon: FileText,
      type: 'link'
    },
    {
      name: 'Contact',
      href: '/contact',
      icon: Mail,
      type: 'link'
    },
    {
      name: 'Help',
      href: '/help',
      icon: HelpCircle,
      type: 'link'
    }
  ];

  const renderSidebarItem = (item: any, level = 0) => {
    const isExpanded = expandedSections.includes(item.name);
    const hasActiveChild = item.children?.some((child: any) => isActive(child.href));
    const isItemActive = item.href ? isActive(item.href) : false;

    if (item.type === 'link') {
      return (
        <Link
          key={item.name}
          to={item.href}
          className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
            isItemActive
              ? 'bg-blue-600 text-white'
              : 'text-gray-300 hover:bg-gray-700 hover:text-white'
          }`}
          onClick={props.onClose}
        >
          <item.icon className="w-5 h-5" />
          <span>{item.name}</span>
        </Link>
      );
    }

    if (item.type === 'section') {
      return (
        <div key={item.name} className="space-y-1">
          <button
            onClick={() => toggleSection(item.name)}
            className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              hasActiveChild
                ? 'bg-blue-600 text-white'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
            }`}
          >
            <div className="flex items-center space-x-3">
              <item.icon className="w-5 h-5" />
              <span>{item.name}</span>
            </div>
            {isExpanded ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <ChevronRight className="w-4 h-4" />
            )}
          </button>
          
          {isExpanded && (
            <div className="ml-6 space-y-1">
              {item.children.map((child: any) => (
                <Link
                  key={child.name}
                  to={child.href}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                    isActive(child.href)
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-400 hover:bg-gray-700 hover:text-white'
                  }`}
                  onClick={props.onClose}
                >
                  <child.icon className="w-4 h-4" />
                  <span>{child.name}</span>
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
    <aside className={`fixed left-0 top-0 z-40 h-full w-80 bg-gray-900 transform transition-transform duration-300 ease-in-out ${
      props.isOpen ? 'translate-x-0' : '-translate-x-full'
    } lg:translate-x-0 lg:static lg:inset-0`}>
      <div className="flex h-full flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-lg font-semibold text-white">Zion Tech Group</h2>
          </div>
          {props.onClose && (
            <button
              onClick={props.onClose}
              className="lg:hidden p-2 text-gray-400 hover:text-white"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-2">
          {sidebarItems.map((item) => renderSidebarItem(item))}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-gray-700">
          <div className="space-y-3">
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Phone className="w-4 h-4" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Mail className="w-4 h-4" />
              <span>info@ziontechgroup.com</span>
=======
import { X, Menu, Zap, Home, Settings, User, HelpCircle } from 'lucide-react';

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Services', href: '/services', icon: Settings },
    { name: 'New Services 2025', href: '/new-services-2025', icon: Zap },
    { name: 'AI Services', href: '/ai-services', icon: Zap },
    { name: 'IT Services', href: '/it-services', icon: Settings },
    { name: 'Micro SaaS', href: '/micro-saas', icon: Zap },
    { name: 'Solutions', href: '/solutions', icon: Settings },
    { name: 'About', href: '/about', icon: User },
    { name: 'Contact', href: '/contact', icon: HelpCircle }
  ];

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-gray-800 text-white rounded-lg"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-40 w-64 bg-gray-900 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0`}>
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between h-16 px-6 border-b border-gray-800">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech</span>
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="lg:hidden p-1 text-gray-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-6 py-6 space-y-2">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors duration-200 ${
                  location.pathname === item.href
                    ? 'bg-cyan-500 text-white'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* Bottom section */}
          <div className="p-6 border-t border-gray-800">
            <div className="text-xs text-gray-400 mb-4">
              <p>© 2025 Zion Tech Group</p>
              <p>All rights reserved</p>
            </div>
            <div className="space-y-2">
              <Link
                to="/help"
                className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Help & Support
              </Link>
              <Link
                to="/privacy"
                className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Privacy Policy
              </Link>
>>>>>>> origin/main
            </div>
          </div>
        </div>
      </div>
<<<<<<< HEAD
    </aside>
=======

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-black bg-opacity-50 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
>>>>>>> origin/main
  );
}