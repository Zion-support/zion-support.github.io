import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
<<<<<<< HEAD
import { 
  Menu, 
  X, 
  ChevronDown, 
  ChevronRight,
  Home,
=======
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
>>>>>>> origin/main
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
<<<<<<< HEAD
  PenTool,
  Atom,
  Server,
  Smartphone,
  BarChart3,
  Search,
  FileText,
  Calendar,
  Briefcase,
  Info,
  Phone,
  Mail,
  MapPin,
  Users
=======
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
>>>>>>> origin/main
} from 'lucide-react';
interface SidebarItem {
  title: string;
  href?: string;
  icon: React.ComponentType<{ className?: string }>;
  children?: SidebarItem[];
  badge?: string;
  disabled?: boolean;
}
<<<<<<< HEAD
export function MainSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<string[]>(['services']);
  const location = useLocation();
  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };
  const navigation: SidebarItem[] = [
    {
      title: 'Main',
      items[
        { name: 'Home', href: '/', icon: Home },
        { name: 'About', href: '/about', icon: Building },
        { name: 'Services', href: '/services', icon: Briefcase },
        { name: 'Solutions', href: '/solutions', icon: Target },
        { name: 'AI Solutions', href: '/ai-solutions', icon: Brain },
        { name: 'Case Studies', href: '/case-studies', icon: FileText },
        { name: 'Research', href: '/research-development', icon: TestTube },
        { name: 'Events', href: '/events', icon: Video },
        { name: 'News', href: '/news', icon: Newspaper },
        { name: 'Contact', href: '/contact', icon: Mail },
        { name: 'Blog', href: '/blog', icon: FileText },
      ]
    },
    {
      name: 'Core Services',
      href: '#',
      icon: Target,
      children: [
        {
          name: 'Cloud & DevOps',
          href: '/services/cloud-devops',
          icon: Cloud,
          description: 'Infrastructure & Automation'
        },
        {
          name: 'Digital Twin',
          href: '/services/digital-twin',
          icon: Globe,
          description: 'Simulation & Monitoring'
        },
        {
          name: 'Data Analytics',
          href: '/services/data-analytics',
          icon: BarChart3,
          description: 'Business Intelligence'
        },
        {
          name: 'IT Infrastructure',
          href: '/services/it-infrastructure',
          icon: Server,
          description: 'Hardware & Network'
        }
      ]
    },
    {
      name: 'AI Products',
      href: '#',
      icon: Brain,
      children: [
        {
          name: 'AI Sales Copilot',
          href: '/services/ai-sales-copilot',
          icon: Users,
          description: 'Sales Intelligence'
        },
        {
          name: 'AI Compliance Assistant',
          href: '/services/ai-compliance-assistant',
          icon: Shield,
          description: 'Regulatory Compliance'
        },
        {
          name: 'AI Auto Email Responder',
          href: '/services/ai-auto-email-responder',
          icon: MessageCircle,
          description: 'Email Automation'
        },
        {
          name: 'LLM Content Studio',
          href: '/services/llm-content-studio',
          icon: PenTool,
          description: 'Content Creation'
        }
      ]
    },
    {
      name: 'Emerging Tech',
      href: '#',
      icon: Rocket,
      children: [
        {
          name: 'Quantum Computing',
          href: '/services/quantum-computing',
          icon: Atom,
          description: 'Next-gen Computing'
        },
        {
          name: 'AI Cybersecurity',
          href: '/services/ai-cybersecurity',
          icon: Lock,
          description: 'Intelligent Security'
        },
        {
          name: 'IoT Edge Computing',
          href: '/services/iot-edge-computing',
          icon: Smartphone,
          description: 'Connected Ecosystems'
        },
        {
          name: 'AI Content Creation',
          href: '/services/ai-content-creation',
          icon: Video,
          description: 'Creative AI'
        }
      ]
    },
    {
      name: 'Business Solutions',
      href: '#',
      icon: Briefcase,
      children: [
        {
          name: 'Marketplace',
          href: '/marketplace',
          icon: ShoppingCart,
          description: 'Product & Service Hub'
        },
        {
          name: 'Talent Solutions',
          href: '/talent',
          icon: Users,
          description: 'HR & Recruitment'
        },
        {
          name: 'Equipment Services',
          href: '/equipment',
          icon: Server,
          description: 'Hardware Solutions'
        },
        {
          name: 'Request Quote',
          href: '/request-quote',
          icon: MessageCircle,
          description: 'Get Pricing'
        }
      ]
    },
    {
      name: 'Company',
      href: '#',
      icon: Info,
      children: [
        {
          name: 'About Us',
          href: '/about',
          icon: Info,
          description: 'Our Story'
        },
        {
          name: 'Team',
          href: '/team',
          icon: Users,
          description: 'Meet Our Team'
        },
        {
          name: 'Careers',
          href: '/careers',
          icon: Briefcase,
          description: 'Join Us'
        },
        {
          name: 'Partners',
          href: '/partners',
          icon: Users,
          description: 'Partnerships'
        }
      ]
    },
    {
      name: 'Resources',
      href: '#',
      icon: BookOpen,
      children: [
        {
          name: 'Blog',
          href: '/blog',
          icon: FileText,
          description: 'Latest Insights'
        },
        {
          name: 'FAQ',
          href: '/faq',
          icon: HelpCircle,
          description: 'Common Questions'
        },
        {
          name: 'Help Center',
          href: '/help',
          icon: MessageCircle,
          description: 'Support Resources'
        },
        {
          name: 'Documentation',
          href: '/docs',
          icon: BookOpen,
          description: 'Technical Docs'
        }
      ]
    },
    {
      name: 'Contact',
      href: '/contact',
      icon: Phone
    }
  ];
  const renderSidebarItem = (item: SidebarItem, level: number = 0) => {
    const isActive = location.pathname === item.href;
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedSections.includes(item.name.toLowerCase());
    const isFeatured = item.featured;
    return (
      <div key={item.name} className="mb-1">
        {hasChildren ? (
          <div>
            <button
              onClick={() => toggleSection(item.name.toLowerCase())}
              className={`w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
                level === 0 
                  ? 'text-slate-300 hover:text-white hover:bg-slate-700/50' 
                  : 'text-slate-400 hover:text-slate-300'
              }`}
            >
              <div className="flex items-center space-x-3">
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
                {isFeatured && (
                  <Star className="w-3 h-3 text-yellow-400" />
                )}
              </div>
              {isExpanded ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </button>
            {isExpanded && (
              <div className="ml-6 mt-2 space-y-1">
                {item.children!.map(child => renderSidebarItem(child, level + 1))}
              </div>
            )}
          </div>
        ) : (
          <Link
            to={item.href}
            className={`flex items-center space-x-3 px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200 ${
              isActive
                ? 'text-cyan-400 bg-cyan-400/10 border border-cyan-400/20'
                : level === 0
                ? 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                : 'text-slate-400 hover:text-slate-300'
            }`}
            onClick={() => setIsOpen(false)}
          >
            <item.icon className="w-4 h-4" />
            <span>{item.name}</span>
            {isFeatured && (
              <Star className="w-3 h-3 text-yellow-400" />
            )}
          </Link>
        )}
      </div>
    );
=======

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
>>>>>>> origin/main
  };
  return (
<<<<<<< HEAD
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>
      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-50 w-80 bg-slate-900/95 border-r border-slate-700/50 backdrop-blur-xl
        transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-slate-700/50">
            <h2 className="text-lg font-semibold text-white">Navigation</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="lg:hidden p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-4 space-y-2">
            {navigation.map(item => renderSidebarItem(item))}
          </nav>
          {/* Footer */}
          <div className="p-4 border-t border-slate-700/50">
            <div className="text-xs text-slate-400 space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="w-3 h-3" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3 h-3" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-3 h-3" />
                <span>Middletown DE 19709</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )};
            </div>;
          </div>;
        </div>;
      </div>;
    </>;
  );
}
=======
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
>>>>>>> origin/main
