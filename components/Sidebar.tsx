import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { 
  Home, 
  Users, 
  Settings, 
  BookOpen, 
  DollarSign, 
  HelpCircle, 
  Mail,
  Cloud,
  Shield,
  Brain,
  Layers,
  Server,
  Zap,
  ChevronDown,
  ChevronRight
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const [expandedSections, setExpandedSections] = useState<string[]>(['services']);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: Users },
    { 
      name: 'Services', 
      icon: Settings, 
      children: [
        { name: 'All Services', href: '/services' },
        { name: 'Services Catalog', href: '/services-catalog' },
        { name: 'Micro SaaS', href: '/micro-saas' },
        { name: 'AI Services', href: '/ai-services' },
        { name: 'IT Services', href: '/it-services' },
        { name: 'Cloud DevOps', href: '/cloud-devops' },
        { name: 'Cybersecurity', href: '/cybersecurity' },
        { name: 'Quantum Computing', href: '/quantum-computing' }
      ]
    },
    { name: 'Documentation', href: '/docs', icon: BookOpen },
    { name: 'Pricing', href: '/pricing', icon: DollarSign },
    { name: 'FAQ', href: '/faq', icon: HelpCircle },
    { name: 'Contact', href: '/contact', icon: Mail }
  ];

  const quickLinks = [
    { name: 'Cloud Migration', href: '/cloud-devops', icon: Cloud },
    { name: 'Security Audit', href: '/cybersecurity', icon: Shield },
    { name: 'AI Solutions', href: '/ai-services', icon: Brain },
    { name: 'Micro SaaS', href: '/micro-saas', icon: Layers },
    { name: 'IT Support', href: '/it-services', icon: Server },
    { name: 'Quantum Computing', href: '/quantum-computing', icon: Zap }
  ];

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-80 bg-slate-900 border-r border-slate-700 z-50 overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">Z</span>
              </div>
              <span className="text-white font-bold text-lg">Zion Tech Group</span>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white lg:hidden"
            >
              ✕
            </button>
          </div>

          {/* Navigation */}
          <nav className="space-y-2">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.children ? (
                  <button
                    onClick={() => toggleSection(item.name.toLowerCase())}
                    className="w-full flex items-center justify-between p-3 text-gray-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <item.icon className="w-5 h-5" />
                      <span>{item.name}</span>
                    </div>
                    {expandedSections.includes(item.name.toLowerCase()) ? (
                      <ChevronDown className="w-4 h-4" />
                    ) : (
                      <ChevronRight className="w-4 h-4" />
                    )}
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="flex items-center space-x-3 p-3 text-gray-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.name}</span>
                  </Link>
                )}
                
                {item.children && expandedSections.includes(item.name.toLowerCase()) && (
                  <div className="ml-8 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block p-2 text-sm text-gray-400 hover:text-white hover:bg-slate-800 rounded transition-colors"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Quick Links */}
          <div className="mt-8">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <div className="space-y-1">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="flex items-center space-x-3 p-2 text-sm text-gray-400 hover:text-white hover:bg-slate-800 rounded transition-colors"
                >
                  <link.icon className="w-4 h-4" />
                  <span>{link.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}