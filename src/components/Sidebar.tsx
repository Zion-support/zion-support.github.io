import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Home, 
  Zap, 
  Brain, 
  Shield, 
  Cloud, 
  Cpu, 
  Rocket, 
  Users, 
  ShoppingCart, 
  BookOpen, 
  MessageCircle, 
  HelpCircle, 
  DollarSign, 
  Gauge, 
  Workflow, 
  Atom, 
  Star, 
  Target, 
  TrendingUp, 
  Globe,
  ChevronDown,
  ChevronRight
} from 'lucide-react';

interface SidebarItem {
  name: string;
  href: string;
  icon: React.ComponentType<any>;
  children?: SidebarItem[];
}

export const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<string[]>(['services']);
  const location = useLocation();

  const navigation: SidebarItem[] = [
    {
      name: 'Home',
      href: '/',
      icon: Home
    },
    {
      name: 'Services',
      href: '/services',
      icon: Zap,
      children: [
        { name: 'AI Services', href: '/ai-services', icon: Brain },
        { name: 'IT Services', href: '/it-services', icon: Cpu },
        { name: 'Cloud & DevOps', href: '/services/cloud-devops', icon: Cloud },
        { name: 'AI Workflow Automation', href: '/services/ai-workflow-automation', icon: Workflow },
        { name: 'Quantum Computing', href: '/services/quantum-computing-solutions', icon: Atom },
        { name: 'Green IT Solutions', href: '/services/green-it', icon: Globe },
        { name: 'Digital Twin', href: '/services/digital-twin', icon: Rocket },
        { name: 'Data Analytics', href: '/services/data-analytics', icon: Gauge },
        { name: 'Cybersecurity', href: '/services/ai-cybersecurity', icon: Shield },
        { name: 'Micro SaaS', href: '/services/micro-saas-solutions', icon: ShoppingCart }
      ]
    },
    {
      name: '2026 Services',
      href: '/services2026',
      icon: Star,
      children: [
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', icon: Brain },
        { name: 'AI Cybersecurity', href: '/services/ai-cybersecurity', icon: Shield },
        { name: 'IoT Edge Computing', href: '/services/iot-edge-computing', icon: Cpu },
        { name: 'AI Content Creation', href: '/services/ai-content-creation', icon: BookOpen },
        { name: 'AI HR Platform', href: '/services/ai-hr-platform', icon: Users },
        { name: 'Sustainable Technology', href: '/services/sustainable-technology', icon: Globe },
        { name: 'AI Predictive Maintenance', href: '/services/ai-predictive-maintenance', icon: Target },
        { name: 'Quantum Machine Learning', href: '/services/quantum-machine-learning', icon: Atom }
      ]
    },
    {
      name: 'Solutions',
      href: '/solutions',
      icon: Target
    },
    {
      name: 'Case Studies',
      href: '/case-studies',
      icon: BookOpen
    },
    {
      name: 'Research & Development',
      href: '/research-development',
      icon: TrendingUp
    },
    {
      name: 'Company',
      href: '/about',
      icon: Users,
      children: [
        { name: 'About Us', href: '/about', icon: Users },
        { name: 'Team', href: '/team', icon: Users },
        { name: 'Careers', href: '/careers', icon: Users },
        { name: 'Partners', href: '/partners', icon: Users }
      ]
    },
    {
      name: 'Resources',
      href: '/blog',
      icon: BookOpen,
      children: [
        { name: 'Blog', href: '/blog', icon: BookOpen },
        { name: 'News', href: '/news', icon: BookOpen },
        { name: 'Events', href: '/events', icon: BookOpen },
        { name: 'Webinars', href: '/webinars', icon: BookOpen },
        { name: 'White Papers', href: '/white-papers', icon: BookOpen },
        { name: 'Documentation', href: '/docs', icon: BookOpen }
      ]
    },
    {
      name: 'Support',
      href: '/help',
      icon: HelpCircle,
      children: [
        { name: 'Help Center', href: '/help', icon: HelpCircle },
        { name: 'FAQ', href: '/faq', icon: HelpCircle },
        { name: 'Contact', href: '/contact', icon: MessageCircle },
        { name: 'Request Quote', href: '/request-quote', icon: DollarSign }
      ]
    }
  ];

  const toggleSection = (sectionName: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionName) 
        ? prev.filter(name => name !== sectionName)
        : [...prev, sectionName]
    );
  };

  const isActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  const renderNavItem = (item: SidebarItem, level: number = 0) => {
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedSections.includes(item.name.toLowerCase());
    const active = isActive(item.href);

    return (
      <div key={item.name}>
        <div className="flex items-center">
          {hasChildren ? (
            <button
              onClick={() => toggleSection(item.name.toLowerCase())}
              className={`flex items-center w-full px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                active 
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/30' 
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <item.icon className="w-4 h-4 mr-3 flex-shrink-0" />
              <span className="flex-1 text-left">{item.name}</span>
              {isExpanded ? (
                <ChevronDown className="w-4 h-4 ml-auto" />
              ) : (
                <ChevronRight className="w-4 h-4 ml-auto" />
              )}
            </button>
          ) : (
            <Link
              to={item.href}
              className={`flex items-center w-full px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                active 
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/30' 
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              <item.icon className="w-4 h-4 mr-3 flex-shrink-0" />
              <span>{item.name}</span>
            </Link>
          )}
        </div>
        
        {hasChildren && isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="ml-4 mt-1 space-y-1"
          >
            {item.children!.map(child => (
              <Link
                key={child.name}
                to={child.href}
                className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive(child.href)
                    ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-400/20'
                    : 'text-slate-400 hover:text-white hover:bg-slate-700/30'
                }`}
              >
                <child.icon className="w-4 h-4 mr-3 flex-shrink-0" />
                <span>{child.name}</span>
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    );
  };

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700/80 transition-colors"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />
            
            {/* Sidebar */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute left-0 top-0 h-full w-80 bg-slate-900/95 border-r border-slate-700/50 backdrop-blur-xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-slate-700/50">
                <h2 className="text-lg font-semibold text-white">Navigation</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation */}
              <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
                {navigation.map(item => renderNavItem(item))}
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop sidebar */}
      <div className="hidden lg:block fixed left-0 top-0 h-full w-80 bg-slate-900/95 border-r border-slate-700/50 backdrop-blur-xl z-40">
        {/* Header */}
        <div className="p-6 border-b border-slate-700/50">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Zion Tech Group
            </h1>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {navigation.map(item => renderNavItem(item))}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-slate-700/50">
          <div className="text-center">
            <Link
              to="/contact"
              className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-cyan-500/20"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
