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
  Palette,
  Target,
  Rocket,
  Eye,
  DollarSign,
  ShoppingCart,
  Clock,
  Cloud,
  Search,
  Building,
  Zap,
  Heart,
  Lightbulb,
  TrendingUp,
  BarChart3,
  Lock,
  AlertTriangle,
  Server,
  CheckCircle,
  Truck,
  Car,
  TestTube,
  PenTool,
  Building2,
  Atom,
  FileText,
  Quote,
  Newspaper,
  Calendar,
  Video,
  HelpCircle,
  LifeBuoy,
  Store,
  PieChart,
  Share2,
  Monitor,
  Smartphone,
  Settings,
  User,
  Bell,
  BookOpen,
  Award,
  Leaf,
  Sun,
  Wind
} from 'lucide-react';

interface SidebarProps extends React.PropsWithChildren<{}> {
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
        : [...prev, section]
    );
  };

  const isActive = (path: string) => router.pathname === path;

  const navigation = {
    main: [
      { name: 'Home', href: '/', icon: Home },
      { name: 'About', href: '/about', icon: Building },
      { name: 'Services', href: '/services', icon: Briefcase },
      { name: 'Solutions', href: '/solutions', icon: Target },
      { name: 'Partners', href: '/partners', icon: Handshake },
      { name: 'Careers', href: '/careers', icon: Users },
      { name: 'Blog', href: '/blog', icon: Newspaper },
      { name: 'Contact', href: '/contact', icon: Phone },
    ],
    services: [
      {
        name: 'AI Services',
        icon: Brain,
        children: [
          { name: 'AI Services', href: '/services/ai-services' },
          { name: 'AI Development', href: '/services/ai-development' },
        ]
      },
      {
        name: 'IT & Development',
        icon: Code,
        children: [
          { name: 'IT Services', href: '/services/it-services' },
          { name: 'Web Development', href: '/services/web-development' },
          { name: 'Cloud Services', href: '/services/cloud-services' },
        ]
      },
      {
        name: 'SaaS Solutions',
        icon: Cloud,
        children: [
          { name: 'Micro SaaS', href: '/services/micro-saas' },
        ]
      },
    ],
    solutions: [
      {
        name: 'Automation Solutions',
        icon: Zap,
        children: [
          { name: 'AI Content Creation', href: '/solutions/ai-content-creation' },
          { name: 'Email Automation', href: '/solutions/email-automation' },
          { name: 'Workflow Automation', href: '/solutions/workflow-automation' },
        ]
      },
      {
        name: 'Business Solutions',
        icon: Target,
        children: [
          { name: 'Customer Support', href: '/solutions/customer-support' },
          { name: 'Event Management', href: '/solutions/event-management' },
          { name: 'Project Management', href: '/solutions/project-management' },
        ]
      },
    ],
    resources: [
      { name: 'Blog', href: '/blog', icon: BookOpen },
      { name: 'Help Center', href: '/help', icon: HelpCircle },
      { name: 'Pricing Guide', href: '/pricing-guide', icon: DollarSign },
      { name: 'Sitemap', href: '/sitemap', icon: Globe },
      { name: 'Search', href: '/search', icon: Search },
    ],
    support: [
      { name: 'Contact Us', href: '/contact', icon: Phone },
      { name: 'Privacy Policy', href: '/privacy', icon: Shield },
      { name: 'Terms of Service', href: '/terms', icon: FileText },
      { name: 'Cookie Policy', href: '/cookies', icon: Shield },
    ]
  };

  const renderNavigationItem = (item: any, level = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedSections.includes(item.name);
    const isCurrentActive = isActive(item.href);

    return (
      <div key={item.name} className={`${level > 0 ? 'ml-4' : ''}`}>
        {hasChildren ? (
          <button
            onClick={() => toggleSection(item.name)}
            className={`w-full flex items-center justify-between px-4 py-3 text-left rounded-lg transition-colors ${
              isExpanded
                ? 'bg-blue-50 text-blue-700'
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            <div className="flex items-center">
              <item.icon className="w-5 h-5 mr-3" />
              <span className="font-medium">{item.name}</span>
            </div>
            {isExpanded ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <ChevronRight className="w-4 h-4" />
            )}
          </button>
        ) : (
          <Link
            href={item.href}
            onClick={onClose}
            className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
              isCurrentActive
                ? 'bg-blue-100 text-blue-700 font-medium'
                : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            <item.icon className="w-5 h-5 mr-3" />
            <span>{item.name}</span>
          </Link>
        )}

        {hasChildren && isExpanded && (
          <div className="mt-2 space-y-1">
            {item.children.map((child: any) => (
              <Link
                key={child.name}
                href={child.href}
                onClick={onClose}
                className={`block px-4 py-2 text-sm rounded-lg transition-colors ${
                  isActive(child.href)
                    ? 'bg-blue-50 text-blue-700 font-medium'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {child.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 lg:translate-x-0 lg:static lg:shadow-none ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">Z</span>
              </div>
              <span className="ml-3 text-xl font-bold text-gray-900">Zion Tech</span>
            </div>
            <button
              onClick={onClose}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation */}
          <div className="flex-1 overflow-y-auto p-4">
            <div className="space-y-6">
              {/* Main Navigation */}
              <div>
                <h3 className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  Main
                </h3>
                <div className="space-y-1">
                  {navigation.main.map(item => renderNavigationItem(item))}
                </div>
              </div>

              {/* Services */}
              <div>
                <h3 className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  Services
                </h3>
                <div className="space-y-1">
                  {navigation.services.map(item => renderNavigationItem(item))}
                </div>
              </div>

              {/* Solutions */}
              <div>
                <h3 className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  Solutions
                </h3>
                <div className="space-y-1">
                  {navigation.solutions.map(item => renderNavigationItem(item))}
                </div>
              </div>

              {/* Resources */}
              <div>
                <h3 className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  Resources
                </h3>
                <div className="space-y-1">
                  {navigation.resources.map(item => renderNavigationItem(item))}
                </div>
              </div>

              {/* Support */}
              <div>
                <h3 className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  Support
                </h3>
                <div className="space-y-1">
                  {navigation.support.map(item => renderNavigationItem(item))}
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center space-x-4">
              <a
                href="https://linkedin.com/company/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-blue-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/ziontechgroup"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="mailto:info@ziontechgroup.com"
                className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
            <p className="mt-2 text-xs text-gray-500">
              © 2024 Zion Tech Group. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainSidebar;