import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Home,
  Briefcase,
  Users,
  Settings,
  BarChart3,
  FileText,
  MessageSquare,
  HelpCircle,
  Code,
  Smartphone,
  Globe,
  Building,
  Mail,
  Phone,
  MapPin,
  Brain,
  Cpu,
  Shield,
  Rocket,
  Zap,
  Cloud,
  ShoppingCart,
  BookOpen,
  MessageCircle,
  DollarSign,
  Star,
  Target,
  TrendingUp,
  Award,
  Heart,
  Lock,
  Database,
  Network,
  Palette,
  Video,
  Audio,
  Document,
  Folder,
  File,
  Archive,
  Backup,
  Restore,
  Sync,
  Share,
  Export,
  Import,
  Download,
  Upload,
  Copy,
  Paste,
  Cut,
  Delete,
  Undo,
  Redo,
  Save,
  Load,
  Open,
  Close,
  Minimize,
  Maximize,
  Move,
  Resize,
  Rotate,
  Scale,
  Transform,
  Animate,
  Transition,
  Effect,
  Filter,
  Blend,
  Mask,
  Clip,
  Crop
} from 'lucide-react';

interface SidebarItem {
  title: string;
  href?: string;
  icon: React.ComponentType<{ className?: string }>;
  children?: SidebarItem[];
  badge?: string;
  disabled?: boolean;
}

interface MainSidebarProps {
  className?: string;
  isOpen?: boolean;
  onToggle?: () => void;
}

const navigationItems: SidebarItem[] = [
  {
    title: 'Dashboard',
    href: '/',
    icon: Home
  },
  {
    title: 'AI Services',
    href: '/ai-services',
    icon: Brain,
    children: [
      {
        title: 'AI Solutions',
        href: '/ai-solutions',
        icon: Brain
      },
      {
        title: 'AI Healthcare',
        href: '/services/ai-healthcare-platform',
        icon: Heart
      },
      {
        title: 'AI Cybersecurity',
        href: '/services/ai-cybersecurity-platform',
        icon: Shield
      },
      {
        title: 'AI Supply Chain',
        href: '/services/ai-supply-chain-optimization',
        icon: Network
      },
      {
        title: 'AI Quantum Hybrid',
        href: '/services/ai-quantum-hybrid-platform',
        icon: Cpu
      }
    ]
  },
  {
    title: 'IT Services',
    href: '/it-services',
    icon: Code,
    children: [
      {
        title: 'Cloud Solutions',
        href: '/cloud-solutions',
        icon: Cloud
      },
      {
        title: 'Digital Transformation',
        href: '/digital-transformation',
        icon: Rocket
      },
      {
        title: 'Edge Computing',
        href: '/services/edge-computing-platform',
        icon: Zap
      }
    ]
  },
  {
    title: 'Enterprise',
    href: '/enterprise',
    icon: Building
  },
  {
    title: 'Industry Solutions',
    href: '/industry-solutions',
    icon: Target
  },
  {
    title: 'Emerging Tech',
    href: '/emerging-tech',
    icon: Star
  },
  {
    title: 'Micro SaaS',
    href: '/micro-saas',
    icon: ShoppingCart
  },
  {
    title: 'About',
    href: '/about',
    icon: Users
  },
  {
    title: 'Contact',
    href: '/contact',
    icon: MessageSquare
  }
];

const SidebarItem: React.FC<{ item: SidebarItem; level?: number }> = ({ item, level = 0 }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const location = useLocation();
  const isActive = item.href && location.pathname === item.href;
  const hasChildren = item.children && item.children.length > 0;

  const handleToggle = () => {
    if (hasChildren) {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div>
      <div
        className={cn(
          'flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer transition-colors',
          isActive
            ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
            : 'text-gray-300 hover:bg-white/10 hover:text-white',
          level > 0 && 'ml-4'
        )}
        onClick={handleToggle}
      >
        <div className="flex items-center space-x-3">
          <item.icon className="w-5 h-5" />
          <span className="text-sm font-medium">{item.title}</span>
          {item.badge && (
            <span className="px-2 py-1 text-xs bg-cyan-500/20 text-cyan-400 rounded-full">
              {item.badge}
            </span>
          )}
        </div>
        {hasChildren && (
          <ChevronRight
            className={cn(
              'w-4 h-4 transition-transform',
              isExpanded && 'rotate-90'
            )}
          />
        )}
      </div>
      
      {hasChildren && isExpanded && (
        <div className="mt-2 space-y-1">
          {item.children!.map((child, index) => (
            <SidebarItem key={index} item={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  );
};

export const MainSidebar: React.FC<MainSidebarProps> = ({
  className,
  isOpen = true,
  onToggle
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside
      className={cn(
        'bg-slate-900/95 backdrop-blur-sm border-r border-white/10 transition-all duration-300',
        isCollapsed ? 'w-16' : 'w-64',
        className
      )}
    >
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          {!isCollapsed && (
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold text-white">Zion Tech</span>
            </div>
          )}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-1 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
          >
            {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {navigationItems.map((item, index) => (
            <SidebarItem key={index} item={item} />
          ))}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-white/10">
          <div className="flex items-center space-x-3 text-sm text-gray-400">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>System Online</span>
          </div>
        </div>
      </div>
    </aside>
  );
};
