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
  Brain,
  Cpu,
  Database,
  Cloud,
  Lock,
  Leaf,
  Rocket,
  Layers,
  Target,
  TrendingUp,
  BookOpen,
  Video,
  Calendar,
  Lightbulb,
  Search,
  Star
} from 'lucide-react';

export function Sidebar() {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const location = useLocation();

  const sidebarItems = [
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
        { name: 'Quantum Computing', path: '/services/quantum-computing', icon: Cpu },
        { name: 'Cybersecurity', path: '/services/cybersecurity', icon: Shield },
        { name: 'Cloud & DevOps', path: '/services/cloud-devops', icon: Cloud },
        { name: 'Blockchain & Web3', path: '/services/blockchain-web3', icon: Database },
        { name: 'Enterprise IT', path: '/services/enterprise-it', icon: Building },
        { name: 'Green IT', path: '/services/green-it', icon: Leaf },
        { name: 'Space Technology', path: '/services/space-tech', icon: Rocket },
        { name: 'Micro SaaS', path: '/services/micro-saas', icon: Layers }
      ]
    },
    {
      name: 'Solutions',
      path: '/solutions',
      icon: Target,
      children: [
        { name: 'AI Autonomous Business', path: '/solutions/ai-autonomous-business', icon: Brain },
        { name: 'AI Autonomous Research', path: '/solutions/ai-autonomous-research', icon: Search },
        { name: 'AI Autonomous Ecosystem', path: '/solutions/ai-autonomous-ecosystem', icon: Globe },
        { name: 'Quantum Neural Network', path: '/solutions/quantum-neural-network', icon: Cpu },
        { name: 'Quantum Edge Computing', path: '/solutions/quantum-edge-computing', icon: Zap },
        { name: 'AI-Powered Security', path: '/solutions/ai-powered-security', icon: Shield },
        { name: 'AI Content Generation', path: '/solutions/ai-content-generation', icon: FileText },
        { name: 'AI Business Intelligence', path: '/solutions/ai-business-intelligence', icon: TrendingUp }
      ]
    },
    {
      name: 'Talent',
      path: '/talent',
      icon: Users,
      children: [
        { name: 'Browse Talents', path: '/talents', icon: Users },
        { name: 'Talent Directory', path: '/talent-directory', icon: Users },
        { name: 'AI Matcher', path: '/match', icon: Brain },
        { name: 'Hire Now', path: '/hire-now', icon: Briefcase },
        { name: 'Post a Job', path: '/post-job', icon: FileText },
        { name: 'Zion Hire AI', path: '/zion-hire-ai', icon: Zap }
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
        { name: 'Our Team', path: '/team', icon: Users },
        { name: 'Careers', path: '/careers', icon: Briefcase },
        { name: 'Partners', path: '/partners', icon: Users },
        { name: 'News', path: '/news', icon: FileText },
        { name: 'Case Studies', path: '/case-studies', icon: FileText }
      ]
    },
    {
      name: 'Resources',
      path: '/resources',
      icon: FileText,
      children: [
        { name: 'Blog', path: '/blog', icon: FileText },
        { name: 'White Papers', path: '/white-papers', icon: FileText },
        { name: 'Webinars', path: '/webinars', icon: Video },
        { name: 'Events', path: '/events', icon: Calendar },
        { name: 'Research & Development', path: '/research-development', icon: Lightbulb },
        { name: 'Tutorials', path: '/tutorials', icon: BookOpen },
        { name: 'Documentation', path: '/docs', icon: Code },
        { name: 'API Reference', path: '/api', icon: Code }
      ]
    },
    {
      name: 'Support',
      path: '/support',
      icon: HelpCircle,
      children: [
        { name: 'Help Center', path: '/help-center', icon: HelpCircle },
        { name: 'FAQ', path: '/faq', icon: HelpCircle },
        { name: 'Contact', path: '/contact', icon: MessageSquare },
        { name: 'Live Chat', path: '/chat', icon: MessageSquare },
        { name: 'Status', path: '/status', icon: BarChart3 },
        { name: 'Training', path: '/training', icon: BookOpen },
        { name: 'Consulting', path: '/consulting', icon: Briefcase }
      ]
    },
    {
      name: 'Analytics',
      path: '/analytics',
      icon: BarChart3
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

  const renderSidebarItem = (item: any, level = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedItems.includes(item.name);
    const isItemActive = isActive(item.path);

    return (
      <div key={item.name}>
        <div className={`flex items-center justify-between px-4 py-3 rounded-lg transition-colors ${
          isItemActive
            ? 'bg-blue-600 text-white'
            : 'text-gray-700 hover:bg-gray-100'
        }`}>
          <Link
            to={item.path}
            className={`flex items-center space-x-3 flex-1 ${level > 0 ? 'ml-4' : ''}`}
          >
            <item.icon className={`h-5 w-5 ${isItemActive ? 'text-white' : 'text-gray-500'}`} />
            <span className="font-medium">{item.name}</span>
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
            {item.children.map((child: any) => renderSidebarItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <aside className="w-64 bg-white border-r border-gray-200 h-screen overflow-y-auto">
      <div className="p-4">
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900">Navigation</h2>
        </div>
        <nav className="space-y-2">
          {sidebarItems.map(item => renderSidebarItem(item))}
        </nav>
        
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
          </div>
        </div>
      </div>
    </aside>
  );
}