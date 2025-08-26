import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  Briefcase, 
  Users, 
  Settings, 
  FileText, 
  HelpCircle, 
  MessageSquare, 
  BarChart3, 
  ShoppingCart, 
  Wrench, 
  Globe, 
  Building, 
  Code, 
  Shield, 
  Zap, 
  ChevronRight, 
  ChevronDown,
  Star,
  Rocket,
  Cpu,
  Database,
  Network,
  Lock,
  Brain,
  Leaf,
  Smartphone,
  DollarSign,
  BookOpen,
  Video,
  FileSearch,
  Lightbulb,
  Target,
  Users2,
  Handshake,
  Award,
  TrendingUp,
  Palette,
  Monitor,
  Server,
  Cloud,
  Key,
  Eye,
  ShieldCheck,
  Bug,
  Activity,
  PieChart,
  BarChart,
  LineChart,
  Map,
  Calendar,
  Clock,
  Mail,
  Phone,
  MapPin,
  Globe2,
  Heart,
  ThumbsUp,
  CheckCircle,
  AlertCircle,
  Info,
  ExternalLink
} from 'lucide-react';

interface SidebarItem {
  name: string;
  path: string;
  icon: React.ComponentType<{ className?: string }>;
  children?: SidebarItem[];
  badge?: string;
  external?: boolean;
}

export function Sidebar() {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const location = useLocation();

  const sidebarItems: SidebarItem[] = [
    {
      name: 'Dashboard',
      path: '/',
      icon: Home
    },
    {
      name: 'Services',
      path: '/services',
      icon: Briefcase,
      children: [
        { name: 'AI Solutions', path: '/services/ai-solutions', icon: Brain },
        { name: 'Cybersecurity', path: '/services/cybersecurity', icon: Shield },
        { name: 'Cloud & DevOps', path: '/services/cloud-devops', icon: Cloud },
        { name: 'IT Infrastructure', path: '/services/it-infrastructure', icon: Server },
        { name: 'Digital Transformation', path: '/services/digital-transformation', icon: Zap },
        { name: 'Green IT', path: '/green-it', icon: Leaf },
        { name: 'Quantum Technology', path: '/quantum-technology', icon: Cpu },
        { name: 'Space Tech', path: '/space-tech', icon: Rocket },
        { name: 'Mobile Solutions', path: '/mobile', icon: Smartphone },
        { name: 'Financial Solutions', path: '/financial-solutions', icon: DollarSign },
        { name: 'Micro SaaS Services', path: '/micro-saas-services', icon: Building }
      ]
    },
    {
      name: 'Talent',
      path: '/talent',
      icon: Users,
      children: [
        { name: 'Browse Talents', path: '/talents', icon: Users2 },
        { name: 'Talent Directory', path: '/talent-directory', icon: FileSearch },
        { name: 'AI Matcher', path: '/ai-matcher', icon: Brain },
        { name: 'Hire Now', path: '/hire-now', icon: Briefcase },
        { name: 'Post a Job', path: '/post-job', icon: FileText }
      ]
    },
    {
      name: 'Marketplace',
      path: '/marketplace',
      icon: ShoppingCart,
      children: [
        { name: 'Equipment', path: '/equipment', icon: Wrench },
        { name: 'Categories', path: '/categories', icon: Settings },
        { name: 'Featured', path: '/featured', icon: Star },
        { name: 'Deals', path: '/deals', icon: Zap }
      ]
    },
    {
      name: 'Company',
      path: '/company',
      icon: Building,
      children: [
        { name: 'About Us', path: '/about', icon: Building },
        { name: 'Our Team', path: '/team', icon: Users2 },
        { name: 'Careers', path: '/careers', icon: Briefcase },
        { name: 'Partners', path: '/partners', icon: Handshake },
        { name: 'Press', path: '/press', icon: FileText },
        { name: 'Research & Development', path: '/research-development', icon: Lightbulb }
      ]
    },
    {
      name: 'Resources',
      path: '/resources',
      icon: FileText,
      children: [
        { name: 'Blog & Insights', path: '/blog', icon: BookOpen },
        { name: 'Tutorials', path: '/tutorials', icon: Code },
        { name: 'Webinars', path: '/webinars', icon: Video },
        { name: 'White Papers', path: '/white-papers', icon: FileSearch },
        { name: 'Case Studies', path: '/case-studies', icon: Target },
        { name: 'Documentation', path: '/documentation', icon: Code },
        { name: 'API Reference', path: '/api', icon: Code },
        { name: 'Developer Portal', path: '/developer', icon: Code }
      ]
    },
    {
      name: 'Support',
      path: '/support',
      icon: HelpCircle,
      children: [
        { name: 'Help Center', path: '/help-center', icon: HelpCircle },
        { name: 'FAQ', path: '/faq', icon: HelpCircle },
        { name: 'Contact Support', path: '/contact', icon: MessageSquare },
        { name: 'Live Chat', path: '/chat', icon: MessageSquare },
        { name: 'Status', path: '/status', icon: BarChart3 },
        { name: 'Request Quote', path: '/request-quote', icon: MessageSquare }
      ]
    },
    {
      name: 'Enterprise',
      path: '/enterprise',
      icon: Building,
      children: [
        { name: 'Enterprise Solutions', path: '/enterprise', icon: Building },
        { name: 'Custom Solutions', path: '/solutions', icon: Target },
        { name: 'Community', path: '/community', icon: Users2 },
        { name: 'Marketplace', path: '/marketplace', icon: ShoppingCart }
      ]
    },
    {
      name: 'Analytics',
      path: '/analytics',
      icon: BarChart3,
      children: [
        { name: 'Performance Metrics', path: '/analytics/performance', icon: Activity },
        { name: 'User Analytics', path: '/analytics/users', icon: Users },
        { name: 'Business Intelligence', path: '/analytics/bi', icon: PieChart },
        { name: 'Reports', path: '/analytics/reports', icon: BarChart }
      ]
    }
  ];

  const toggleItem = (itemName: string) => {
    setExpandedItems(prev => 
      prev.includes(itemName)
        ? prev.filter(name => name !== itemName)
        : [...prev, itemName]
    );
  };

  const isActive = (path: string) => location.pathname === path;

  const renderSidebarItem = (item: SidebarItem, level: number = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedItems.includes(item.name);
    const isItemActive = isActive(item.path);

    return (
      <div key={item.name}>
        <div className={`flex items-center justify-between px-4 py-3 rounded-lg transition-colors ${
          isItemActive
            ? 'bg-blue-600 text-white shadow-lg'
            : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
        }`}>
          <Link 
            to={item.path} 
            className={`flex items-center space-x-3 flex-1 ${level > 0 ? 'ml-4' : ''}`}
          >
            <item.icon className={`h-5 w-5 ${isItemActive ? 'text-white' : 'text-gray-500'}`} />
            <span className="font-medium">{item.name}</span>
            {item.badge && (
              <span className="ml-auto px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
                {item.badge}
              </span>
            )}
          </Link>
          
          {hasChildren && (
            <button
              onClick={() => toggleItem(item.name)}
              className={`p-1 rounded transition-colors ${
                isItemActive
                  ? 'text-white hover:bg-white/20'
                  : 'text-gray-500 hover:bg-gray-200'
              }`}
            >
              {isExpanded ? (
                <ChevronDown className="h-4 w-4" />
              ) : (
                <ChevronRight className="h-4 w-4" />
              )}
            </button>
          )}
        </div>
        
        {hasChildren && isExpanded && (
          <div className="ml-4 mt-2 space-y-1">
            {item.children.map(child => renderSidebarItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <aside className="w-64 bg-white border-r border-gray-200 h-screen overflow-y-auto shadow-lg">
      <div className="p-4">
        {/* Logo */}
        <div className="mb-6">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
              <Zap className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Zion Tech</span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="space-y-2">
          {sidebarItems.map(item => renderSidebarItem(item))}
        </nav>

        {/* Quick Actions */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <h3 className="text-sm font-semibold text-gray-600 mb-3">Quick Actions</h3>
          <div className="space-y-2">
            <Link
              to="/request-quote"
              className="flex items-center space-x-3 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <MessageSquare className="h-5 w-5" />
              <span className="font-medium">Request Quote</span>
            </Link>
            
            <Link
              to="/contact"
              className="flex items-center space-x-3 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <HelpCircle className="h-5 w-5" />
              <span className="font-medium">Get Help</span>
            </Link>

            <Link
              to="/pricing"
              className="flex items-center space-x-3 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <DollarSign className="h-5 w-5" />
              <span className="font-medium">View Pricing</span>
            </Link>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <h3 className="text-sm font-semibold text-gray-600 mb-3">Contact</h3>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>info@ziontechgroup.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+1 (302) 464-0950</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="h-4 w-4" />
              <span>Delaware, USA</span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;