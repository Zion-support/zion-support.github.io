import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";
import {
  Home,
  Briefcase,
  Target,
  Building2,
  FileText,
  HelpCircle,
  BarChart3,
  Server,
  Cloud,
  Lock,
  BarChart,
  Cpu,
  Workflow,
  Database,
  Globe,
  Rocket,
  Lightbulb,
  Code,
  Monitor,
  Smartphone,
  Network,
  Wifi,
  Activity,
  Search,
  Settings,
  Palette,
  Zap,
  Phone,
  Mail,
  MapPin,
  Clock,
  DollarSign,
  Atom,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  MessageCircle,
  Star,
  Users2,
  Cog,
  Menu,
  X,
  ArrowRight,
  Video,
  GraduationCap,
  Handshake,
  ShoppingCart,
  Truck,
  Heart,
  Scale,
  BookOpen,
  Microscope,
  Flask,
  TestTube,
  Beaker,
  Dna,
  Pill,
  Stethoscope,
  Car,
  Plane,
  Ship,
  Train,
  Building,
  Factory,
  Warehouse,
  Store,
  Bank,
  CreditCard,
  PiggyBank,
  ChartLine,
  PieChart,
  TrendingDown,
  AlertTriangle,
  CheckCircle,
  Calendar,
  UserCheck,
  UserPlus,
  UserMinus,
  UserX,
  UserCog,
  UserEdit,
  UserSearch,
  UserVoice,
  UserHeart,
  UserStar,
  UserCheckCircle,
  Newspaper,
  Award,
  Eye,
  Camera,
  Film,
  Image,
  ChevronDown,
  ChevronRight
} from 'lucide-react';

interface SidebarItem {
  name: string;
  path: string;
  icon: any;
  children?: SidebarItem[];
  badge?: string;
  external?: boolean;
}

interface SidebarSection {
  title: string;
  items: SidebarItem[];
}

const sidebarSections: SidebarSection[] = [
  {
    title: 'Main',
    items: [
      { name: 'Dashboard', path: '/dashboard', icon: Home },
      { name: 'Services', path: '/services', icon: Briefcase },
      { name: 'Solutions', path: '/solutions', icon: Target },
      { name: 'About', path: '/about', icon: Building2 },
      { name: 'Contact', path: '/contact', icon: Phone }
    ]
  },
  {
    title: 'AI & Technology',
    items: [
      { name: 'AI Solutions', path: '/services/ai', icon: Brain, children: [
        { name: 'AI Business Intelligence', path: '/services/ai-business-intelligence-dashboard', icon: BarChart3 },
        { name: 'AI Autonomous Operations', path: '/services/ai-autonomous-business-operations-platform', icon: Workflow },
        { name: 'AI Customer Experience', path: '/services/ai-customer-experience-analytics-platform', icon: Users2 },
        { name: 'AI Cybersecurity', path: '/services/ai-cybersecurity-platform', icon: Shield },
        { name: 'AI Healthcare', path: '/services/ai-healthcare-platform', icon: Heart },
        { name: 'AI Customer Support', path: '/services/ai-customer-support-automation', icon: MessageCircle }
      ]},
      { name: 'Quantum Computing', path: '/services/quantum-computing', icon: Atom },
      { name: 'Cloud Solutions', path: '/services/cloud', icon: Cloud },
      { name: 'Cybersecurity', path: '/services/cybersecurity', icon: Shield },
      { name: 'Digital Transformation', path: '/services/digital-transformation', icon: TrendingUp },
      { name: 'Data Analytics', path: '/services/data-analytics', icon: BarChart3 },
      { name: 'Enterprise Software', path: '/services/enterprise-software', icon: Building2 }
    ]
  },
  {
    title: 'Industry Solutions',
    items: [
      { name: 'Healthcare', path: '/solutions/healthcare', icon: Heart },
      { name: 'Finance', path: '/solutions/finance', icon: DollarSign },
      { name: 'Manufacturing', path: '/solutions/manufacturing', icon: Factory },
      { name: 'Retail', path: '/solutions/retail', icon: ShoppingCart },
      { name: 'Education', path: '/solutions/education', icon: GraduationCap },
      { name: 'Transportation', path: '/solutions/transportation', icon: Truck },
      { name: 'Energy', path: '/solutions/energy', icon: Zap },
      { name: 'Government', path: '/solutions/government', icon: Building }
    ]
  },
  {
    title: 'Resources',
    items: [
      { name: 'Blog', path: '/blog', icon: Newspaper },
      { name: 'Case Studies', path: '/case-studies', icon: FileText },
      { name: 'Documentation', path: '/docs', icon: BookOpen },
      { name: 'API Reference', path: '/api', icon: Code },
      { name: 'Developer Portal', path: '/developers', icon: Cpu },
      { name: 'Knowledge Base', path: '/knowledge-base', icon: BookOpen },
      { name: 'Video Tutorials', path: '/tutorials', icon: Video },
      { name: 'Webinars', path: '/webinars', icon: Monitor },
      { name: 'Training', path: '/training', icon: GraduationCap },
      { name: 'White Papers', path: '/white-papers', icon: FileText },
      { name: 'Research', path: '/research-development', icon: Microscope },
      { name: 'Community', path: '/community', icon: Users2 }
    ]
  },
  {
    title: 'Support',
    items: [
      { name: 'Help Desk', path: '/helpdesk', icon: Headphones },
      { name: 'Contact Support', path: '/contact', icon: MessageCircle },
      { name: 'Status Page', path: '/status', icon: Activity },
      { name: 'System Status', path: '/system-status', icon: Monitor },
      { name: 'Bug Report', path: '/bug-report', icon: AlertTriangle },
      { name: 'Feature Request', path: '/feature-request', icon: Lightbulb },
      { name: 'Live Chat', path: '/live-chat', icon: MessageCircle },
      { name: 'Phone Support', path: 'tel:+13024640950', icon: Phone },
      { name: 'Email Support', path: 'mailto:support@ziontechgroup.com', icon: Mail },
      { name: 'Emergency', path: '/emergency', icon: AlertTriangle }
    ]
  },
  {
    title: 'Company',
    items: [
      { name: 'About Us', path: '/about', icon: Users2 },
      { name: 'Leadership', path: '/leadership', icon: Users2 },
      { name: 'Careers', path: '/careers', icon: Briefcase },
      { name: 'Partners', path: '/partners', icon: Handshake },
      { name: 'News', path: '/news', icon: Newspaper },
      { name: 'Events', path: '/events', icon: Calendar },
      { name: 'Press', path: '/press', icon: PenTool },
      { name: 'Privacy', path: '/privacy', icon: Eye },
      { name: 'Terms', path: '/terms', icon: Scale },
      { name: 'Cookies', path: '/cookies', icon: Cookie }
    ]
  }
];

interface MainSidebarProps {
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
}

export function MainSidebar({ className, isOpen = false, onClose }: MainSidebarProps) {
  const location = useLocation();
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const toggleSection = (title: string) => {
    setExpandedSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(title)) {
        newSet.delete(title);
      } else {
        newSet.add(title);
      }
      return newSet;
    });
  };

  const toggleItem = (name: string) => {
    setExpandedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(name)) {
        newSet.delete(name);
      } else {
        newSet.add(name);
      }
      return newSet;
    });
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const renderSidebarItem = (item: SidebarItem, level: number = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedItems.has(item.name);
    const isCurrentActive = isActive(item.path);

    return (
      <div key={item.name} className="space-y-1">
        <div className="flex items-center">
          {hasChildren ? (
            <button
              onClick={() => toggleItem(item.name)}
              className={cn(
                "flex items-center w-full px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 group",
                isCurrentActive 
                  ? "bg-zion-cyan/20 text-zion-cyan border border-zion-cyan/30" 
                  : "text-zion-slate-light hover:text-white hover:bg-zion-slate-dark/50"
              )}
              style={{ paddingLeft: `${level * 16 + 12}px` }}
            >
              <item.icon className="w-4 h-4 mr-3" />
              <span className="flex-1 text-left">{item.name}</span>
              {item.badge && (
                <span className="ml-2 px-2 py-1 text-xs font-medium bg-zion-cyan text-zion-slate-dark rounded-full">
                  {item.badge}
                </span>
              )}
              {isExpanded ? (
                <ChevronDown className="w-4 h-4 ml-2 transition-transform duration-200" />
              ) : (
                <ChevronRight className="w-4 h-4 ml-2 transition-transform duration-200" />
              )}
            </button>
          ) : (
            <Link
              to={item.path}
              className={cn(
                "flex items-center w-full px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 group",
                isCurrentActive 
                  ? "bg-zion-cyan/20 text-zion-cyan border border-zion-cyan/30" 
                  : "text-zion-slate-light hover:text-white hover:bg-zion-slate-dark/50"
              )}
              style={{ paddingLeft: `${level * 16 + 12}px` }}
            >
              <item.icon className="w-4 h-4 mr-3" />
              <span className="flex-1">{item.name}</span>
              {item.badge && (
                <span className="ml-2 px-2 py-1 text-xs font-medium bg-zion-cyan text-zion-slate-dark rounded-full">
                  {item.badge}
                </span>
              )}
            </Link>
          )}
        </div>

        {/* Render children if expanded */}
        {hasChildren && isExpanded && (
          <div className="ml-4 space-y-1">
            {item.children!.map(child => renderSidebarItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <aside className={cn(
      "fixed inset-y-0 left-0 z-50 w-64 bg-zion-slate-dark border-r border-zion-purple/20 transform transition-transform duration-300 ease-in-out",
      isOpen ? "translate-x-0" : "-translate-x-full",
      "lg:relative lg:translate-x-0 lg:inset-0",
      className
    )}>
      {/* Header */}
      <div className="flex items-center justify-between h-16 px-4 border-b border-zion-purple/20">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-zion-cyan rounded-lg flex items-center justify-center">
            <Zap className="w-5 h-5 text-zion-slate-dark" />
          </div>
          <span className="text-lg font-bold text-white">Zion Tech</span>
        </div>
        
        {/* Close button for mobile */}
        <button
          onClick={onClose}
          className="lg:hidden p-2 text-zion-slate-light hover:text-white hover:bg-zion-slate-dark/50 rounded-lg transition-colors duration-200"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Search */}
      <div className="p-4 border-b border-zion-purple/20">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zion-slate-light" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 bg-zion-slate-darker border border-zion-purple/20 rounded-lg text-white placeholder-zion-slate-light text-sm focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
          />
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4">
        <div className="px-4 space-y-6">
          {sidebarSections.map((section) => (
            <div key={section.title}>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xs font-semibold text-zion-slate-light uppercase tracking-wider">
                  {section.title}
                </h3>
                <button
                  onClick={() => toggleSection(section.title)}
                  className="p-1 text-zion-slate-light hover:text-white hover:bg-zion-slate-dark/50 rounded transition-colors duration-200"
                >
                  {expandedSections.has(section.title) ? (
                    <ChevronDown className="w-3 h-3" />
                  ) : (
                    <ChevronRight className="w-3 h-3" />
                  )}
                </button>
              </div>
              
              {expandedSections.has(section.title) && (
                <div className="space-y-1">
                  {section.items.map(item => renderSidebarItem(item))}
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-zion-purple/20">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 text-zion-slate-light text-sm mb-2">
            <Settings className="w-4 h-4" />
            <span>Settings</span>
          </div>
          <div className="text-xs text-zion-slate-light">
            Version 2.0.0
          </div>
        </div>
      </div>
    </aside>
  );
}
