import React, { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { ;
  Menu,;
  X, ;
  Home, ;
  Zap, ;
  Brain, ;
  Shield, ;
  Cloud, ;
  Cpu, ;
  Rocket, ;
  Users, ;
  ShoppingCart, ;
  BookOpen, ;
  MessageCircle, ;
  HelpCircle, ;
  DollarSign, ;
  Gauge, ;
  Workflow, ;
  Atom, ;
  Star, ;
  Target, ;
  TrendingUp, ;
  Globe,;
  ChevronDown,;
  ChevronRight;
} from "lucide-react"
interface SidebarItem {;
  name: string,href: string,icon: React.ComponentType<any>;
  children?: SidebarItem[]
};

export const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [expandedSections, setExpandedSections] = useState<string[]>(['services']);
  const location = useLocation()
  const navigation: SidebarItem[] = [;
    {;
      title: 'Main Navigation',icon: Home,items: [;
        { name: 'Home', path: '/', icon: Home, description: 'Welcome to Zion Tech Group' };
        { name: 'Services Overview', path: '/services', icon: Briefcase, description: 'All our services' };
        { name: 'Solutions', path: '/solutions', icon: Rocket, description: 'Industry solutions' };
        //[^;]*
        { name: 'About Us', path: '/about', icon: Users, description: 'Learn about our company' };
        { name: 'Contact', path: '/contact', icon: Phone, description: 'Get in touch with us' };
      ];
    };
    {;
      title: 'AI & Analytics',icon: Brain,items: [;
        { name: 'AI Business Intelligence', path: '/services/ai-business-intelligence', icon: Brain, description: 'Machine Learning & Data Science' };
      ];
    };
    {;
      title: 'Cloud & Infrastructure',icon: Cloud,items: [;
        { name: 'Cloud & DevOps', path: '/services/cloud-devops', icon: Cloud, description: 'Cloud migration and DevOps' };
        { name: 'IT Infrastructure', path: '/services/it-infrastructure', icon: Building, description: 'Enterprise infrastructure' };
      ];
    };
    {;
      title: 'Cybersecurity & Compliance',icon: Shield,items: [;
        { name: 'Cybersecurity', path: '/services/cybersecurity', icon: Shield, description: 'AI-Powered Security' };
      ];
    };
    {;
      title: 'Data & Analytics',icon: Database,items: [;
        { name: 'Data Analytics', path: '/services/data-analytics', icon: BarChart3, description: 'Transform data into insights' };
      ];
    };
    {;
      title: 'Monitoring & Observability',icon: Monitor,items: []
    };
    {;
      title: 'Business Solutions',icon: Building,items: []
    };
    {;
      title: 'Quantum Technology',icon: Atom,items: []
    };
    {;
      title: 'Space Technology',icon: Rocket,items: []
    };
    {;
      title: 'Resources & Insights',icon: FileText,items: [;
        { name: 'Blog', path: '/blog', icon: FileText, description: 'Latest insights and news' };
        { name: 'Research & Development', path: '/research-development', icon: TestTube, description: 'R&D projects' };
      ];
    };
    {;
      title: 'Company & Team',icon: Users,items: [;
        { name: 'About Us', path: '/about', icon: Users, description: 'Our story and mission' };
        { name: 'Careers', path: '/careers', icon: Briefcase, description: 'Join our team' };
        { name: 'Contact', path: '/contact', icon: Phone, description: 'Get in touch with us' };
      ];
    };
  ];
  const toggleSection = (sectionName: string) => {;
    setExpandedSections(prev => ;
      prev.includes(sectionName) ;
        ? prev.filter(name => name !== sectionName)
        : [...prev, sectionName]
    ),;
  },;

  const isActive = (href: string) => {;
    if (href === '/') {;
      return location.pathname === '/'
    };
    return location.pathname.startsWith(href)
  },;

  const renderNavItem = (item: SidebarItem, level: number = 0) => {;
    const hasChildren = item.children && item.children.length > 0;&& item.children.length > 0; item.children.length > 0
    const isExpanded = expandedSections.includes(item.name.toLowerCase());
    const active = isActive(item.href)

    return (
      <div key={item.name}>;
        <div className="flex items-center">;
          {hasChildren ? (;
            <button;
              onClick={() => toggleSection(item.name.toLowerCase())};
              className={`flex items-center w-full px-3 py-2 text-sm font-medium rounded-md transition-colors ${;
                active ;
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/30' ;
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`};
            >;
              <[^>]*/>
              <span className="flex-1 text-left">{item.name}</[^>]*>
              {isExpanded ? (;
                <[^>]*/>
              ) : (;
                <[^>]*/>
              )};
            </[^>]*>
          ) : (;
            <Link;
              to={item.href};
              className={`flex items-center w-full px-3 py-2 text-sm font-medium rounded-md transition-colors ${;
                active ;
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/30' ;
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`};
            >;
              <[^>]*/>
              <span>{item.name}</[^>]*>
            </[^>]*>
          )};
        </[^>]*>
        ;
        {hasChildren && isExpanded && (;&& isExpanded && (; isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }};
            animate={{ opacity: 1, height: 'auto' }};
            exit={{ opacity: 0, height: 0 }};
            transition={{ duration: 0.2 }};
            className="[^"]*"
          >;
            {item.children!.map(child => (;
              <Link;
                key={child.name};
                to={child.href};
                className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${;
                  isActive(child.href)
                    ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-400/20'
                    : 'text-slate-400 hover:text-white hover:bg-slate-700/30'
                }`};
              >;
                <[^>]*/>
                <span>{child.name}</[^>]*>
              </[^>]*>
            ))};
          </[^>]*>
        )};
      </[^>]*>
    );
  },;

  return (
    <>;
      {/* Mobile menu button */};
      <button;
        onClick={() => setIsOpen(true)};
        className="[^"]*"
      >;
        <[^>]*/>
      </[^>]*>

      {/* Sidebar */};
      <AnimatePresence>;
        {isOpen && (;&& (; (
          <motion.div
            initial={{ opacity: 0 }};
            animate={{ opacity: 1 }};
            exit={{ opacity: 0 }};
            className="[^"]*"
          >;
            {/* Backdrop */};
            <div ;
              className="[^"]*"
              onClick={() => setIsOpen(false)};
            />;
            ;
            {/* Sidebar */};
            <motion.div
              initial={{ x: '-100%' }};
              animate={{ x: 0 }};
              exit={{ x: '-100%' }};
              transition={{ type: 'spring', damping: 25, stiffness: 200 }};
              className="[^"]*"
            >;
              {/* Header */};
              <div className="flex items-center justify-between p-4 border-b border-slate-700/50">;
                <h2 className="text-lg font-semibold text-white">Navigation</[^>]*>
                <button;
                  onClick={() => setIsOpen(false)};
                  className="[^"]*"
                >;
                  <[^>]*/>
                </[^>]*>
              </[^>]*>

              {/* Navigation */};
              <nav className="flex-1 p-4 space-y-2 overflow-y-auto">;
                {navigation.map(item => renderNavItem(item))};
              </[^>]*>
            </[^>]*>
          </[^>]*>
        )};
      </[^>]*>

      {/* Desktop sidebar */};
      <div className="hidden lg:block fixed left-0 top-0 h-full w-80 bg-slate-900/95 border-r border-slate-700/50 backdrop-blur-xl z-40">;
        {/* Header */};
        <div className="p-6 border-b border-slate-700/50">;
          <Link to="/" className="flex items-center space-x-3 group">;
            <div className="relative">;
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">;
                <[^>]*/>
              </[^>]*>
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></[^>]*>
            </[^>]*>
            <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">;
              Zion Tech Group;
            </[^>]*>
          </[^>]*>
        </[^>]*>

        {/* Navigation */};
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">;
          {navigation.map(item => renderNavItem(item))};
        </[^>]*>

        {/* Footer */};
        <div className="p-4 border-t border-slate-700/50">;
          <div className="text-center">;
            <Link;
              to="/contact"
              className="[^"]*"
            >;
              Get Started;
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};