import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { 
  Home, 
  Briefcase, 
  Users, 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Linkedin, 
  Twitter, 
  Shield, 
  Handshake, 
  ChevronDown, 
  ChevronRight, 
  Brain, 
  Cpu, 
  Database, 
  Network, 
  Code, 
  Target, 
  Rocket, 
  Building, 
  Zap, 
  Heart, 
  DollarSign, 
  ShoppingCart, 
  Cloud, 
  Building2, 
  FileText, 
  Newspaper, 
  HelpCircle, 
  CheckCircle, 
  Store, 
  X
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const MainSidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const router = useRouter();
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section];
    );
  };

  const isActive = (path: string) => router.pathname === path;

  const navigation = {
    main: [
      { name: 'Home', href: '/', icon: Home },
      { name: 'About', href: '/about', icon: Building },
      { name: 'Services', href: '/services', icon: Briefcase },
      { name: 'Solutions', href: '/solutions', icon: Target },
      { name: 'Pricing', href: '/pricing', icon: DollarSign },
      { name: 'Contact', href: '/contact', icon: Phone },
    ],
    services: [
      { name: 'AI Development', href: '/services/ai-development', icon: Brain, description: 'Custom AI solutions' },
      { name: 'Cloud Architecture', href: '/services/cloud-architecture', icon: Cloud, description: 'Scalable cloud infrastructure' },
      { name: 'Cybersecurity', href: '/services/it/cybersecurity', icon: Shield, description: 'Security solutions' },
      { name: 'Data Analytics', href: '/services/data-analytics', icon: Database, description: 'Business intelligence' },
      { name: 'DevOps', href: '/services/devops', icon: Zap, description: 'Automation & deployment' },
      { name: 'IT Services', href: '/it-services', icon: Cpu, description: 'Comprehensive IT support' },
      { name: 'Micro SaaS', href: '/micro-saas', icon: Store, description: 'Rapid product development' },
    ],
    solutions: [
      { name: 'Blockchain Solutions', href: '/blockchain-solutions', icon: Network, description: 'Decentralized applications' },
      { name: 'IoT Platforms', href: '/iot-platforms', icon: Cpu, description: 'Connected device solutions' },
      { name: 'Digital Transformation', href: '/solutions/digital-transformation', icon: Rocket, description: 'Business modernization' },
      { name: 'Enterprise Solutions', href: '/solutions/enterprise', icon: Building2, description: 'Large-scale implementations' },
      { name: 'Healthcare Solutions', href: '/solutions/healthcare', icon: Heart, description: 'Health tech solutions' },
    ],
    resources: [
      { name: 'Case Studies', href: '/case-studies', icon: FileText, description: 'Success stories' },
      { name: 'API Documentation', href: '/api-documentation', icon: Code, description: 'Developer resources' },
      { name: 'FAQ', href: '/faq', icon: HelpCircle, description: 'Frequently asked questions' },
      { name: 'Terms of Service', href: '/terms', icon: FileText, description: 'Legal terms' },
    ]
  };

  const renderNavItem = (item: any, level = 0) => {
    const isItemActive = isActive(item.href);
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedSections.includes(item.name);

    return (
      <div key={item.name}>
        <Link
          href={item.href}
          className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
            isItemActive
              ? 'bg-blue-600 text-white'
              : 'text-gray-300 hover:bg-white/10 hover:text-white'
          } ${level > 0 ? 'ml-4' : ''}`}
          onClick={onClose}
        >
          {item.icon && <item.icon className="w-5 h-5 flex-shrink-0" />}
          <div className="flex-1">
            <span className="font-medium">{item.name}</span>
            {item.description && (
              <p className="text-xs text-gray-400 mt-1">{item.description}</p>
            )}
          </div>
          {hasChildren && (
            <button
              onClick={(e) => {
                e.preventDefault();
                toggleSection(item.name);
              }}
              className="p-1 hover:bg-white/10 rounded"
            >
              {isExpanded ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </button>
          )}
        </Link>
        {hasChildren && isExpanded && (
          <div className="ml-4 mt-2 space-y-1">
            {item.children.map((child: any) => renderNavItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-gray-900 border-r border-white/10 z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 lg:static lg:z-auto`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <Link href="/" className="flex items-center space-x-2" onClick={onClose}>
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">Z</span>
              </div>
              <span className="text-white font-bold text-xl">Zion Tech</span>
            </Link>
            <button
              onClick={onClose}
              className="lg:hidden p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-200"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto p-4 space-y-6">
            {/* Main Navigation */}
            <div>
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                Main
              </h3>
              <div className="space-y-1">
                {navigation.main.map(renderNavItem)}
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                Services
              </h3>
              <div className="space-y-1">
                {navigation.services.map(renderNavItem)}
              </div>
            </div>

            {/* Solutions */}
            <div>
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                Solutions
              </h3>
              <div className="space-y-1">
                {navigation.solutions.map(renderNavItem)}
              </div>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
                Resources
              </h3>
              <div className="space-y-1">
                {navigation.resources.map(renderNavItem)}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-white/10">
            <div className="flex space-x-3">
              <a
                href="https://linkedin.com/company/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-600 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-blue-400 transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gray-600 transition-all duration-300"
                aria-label="GitHub"
              >
                <Globe className="w-5 h-5" />
              </a>
            </div>
            <p className="text-xs text-gray-400 mt-3">
              © 2025 Zion Tech Group. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainSidebar;