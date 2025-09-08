import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home,
  Rocket,
  Brain,
  Target,
  Users,
  HelpCircle,
  ChevronRight,
  Star,
  TrendingUp,
  Shield,
  Cloud,
  Cpu,
  Atom,
  Leaf,
  Satellite,
  Code,
  FileText,
  BookOpen,
  MessageCircle,
  DollarSign,
  Building,
  Heart,
  Truck,
  GraduationCap,
  Server,
  Database,
  Network,
  Workflow,
  BarChart3,
  PenTool,
  Zap,
  Globe,
  ChevronDown,
  ChevronRight,
  Briefcase,
  Phone,
  Building,
  FileText,
  TestTube,
  BarChart3,
  Database,
  Monitor,
  Code
} from 'lucide-react';

interface SidebarItem {
  title: string;
  icon: React.ComponentType<any>;
  items: {
    name: string;
    path: string;
    icon: React.ComponentType<any>;
    description: string;
  }[];
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const location = useLocation();

  const navigation: SidebarItem[] = [
    {
      title: 'Main Navigation',
      icon: Home,
      items: [
        { name: 'Home', path: '/', icon: Home, description: 'Welcome to Zion Tech Group' },
        { name: 'Services Overview', path: '/services', icon: Briefcase, description: 'All our services' },
        { name: 'Solutions', path: '/solutions', icon: Rocket, description: 'Industry solutions' },
        { name: 'Resources', path: '/resources', icon: BookOpen, description: 'Knowledge and insights' },
        { name: 'About Us', path: '/about', icon: Users, description: 'Learn about our company' },
        { name: 'Contact', path: '/contact', icon: Phone, description: 'Get in touch with us' }
      ]
    },
    {
      title: 'AI & Analytics Services',
      icon: Brain,
      items: [
        { name: 'AI Business Intelligence', path: '/services/ai-business-intelligence', icon: Brain, description: 'Machine Learning & Data Science' },
        { name: 'AI Healthcare Analytics', path: '/services/ai-healthcare-analytics', icon: Brain, description: 'Medical AI & Diagnostics' },
        { name: 'AI Legal Document Analysis', path: '/services/ai-legal-document-analysis', icon: Brain, description: 'Legal Tech Platform' },
        { name: 'AI Financial Trading', path: '/services/ai-financial-trading', icon: Brain, description: 'FinTech AI Solutions' },
        { name: 'AI Supply Chain Optimization', path: '/services/ai-supply-chain-optimization', icon: Brain, description: 'Supply Chain AI' }
      ]
    },
    {
      title: 'Cloud & Infrastructure',
      icon: Cloud,
      items: [
        { name: 'Cloud & DevOps', path: '/services/cloud-devops', icon: Cloud, description: 'Cloud migration and DevOps' },
        { name: 'IT Infrastructure', path: '/services/it-infrastructure', icon: Building, description: 'Enterprise infrastructure' },
        { name: 'Digital Twin', path: '/services/digital-twin', icon: Globe, description: 'Virtual replicas & simulation' },
        { name: 'IoT Edge Computing', path: '/services/iot-edge-computing', icon: Cpu, description: 'IoT & real-time processing' }
      ]
    },
    {
      title: 'Cybersecurity & Compliance',
      icon: Shield,
      items: [
        { name: 'Cybersecurity', path: '/services/cybersecurity', icon: Shield, description: 'AI-Powered Security' },
        { name: 'Zero Trust Security', path: '/services/zero-trust-network-access', icon: Shield, description: 'Advanced security framework' }
      ]
    },
    {
      title: 'Data & Analytics',
      icon: Database,
      items: [
        { name: 'Data Analytics', path: '/services/data-analytics', icon: BarChart3, description: 'Transform data into insights' },
        { name: 'Business Intelligence', path: '/services/ai-business-intelligence', icon: TrendingUp, description: 'Data-driven decisions' }
      ]
    },
    {
      title: 'Innovative Services',
      icon: Rocket,
      items: [
        { name: 'Micro SaaS Products', path: '/services/micro-saas', icon: ShoppingCart, description: 'AI automations with transparent pricing' },
        { name: 'Innovative Services 2025', path: '/new-innovative-services-2025', icon: Rocket, description: 'Cutting-edge solutions' },
        { name: 'Revolutionary Services 2030', path: '/revolutionary-services-2030', icon: Rocket, description: 'Future technology solutions' }
      ]
    },
    {
      title: 'Resources & Insights',
      icon: FileText,
      items: [
        { name: 'Blog', path: '/blog', icon: FileText, description: 'Latest insights and news' },
        { name: 'Case Studies', path: '/case-studies', icon: Target, description: 'Real-world success stories' },
        { name: 'White Papers', path: '/white-papers', icon: FileText, description: 'In-depth research and analysis' },
        { name: 'Webinars', path: '/webinars', icon: Users, description: 'Expert-led learning sessions' },
        { name: 'Documentation', path: '/docs', icon: Code, description: 'Technical guides and APIs' },
        { name: 'FAQ & Support', path: '/faq', icon: HelpCircle, description: 'Get help and answers' },
        { name: 'Pricing Guide 2025', path: '/pricing-guide-2025', icon: DollarSign, description: 'Complete pricing information' }
      ]
    },
    {
      title: 'Company & Team',
      icon: Users,
      items: [
        { name: 'About Us', path: '/about', icon: Users, description: 'Our story and mission' },
        { name: 'Careers', path: '/careers', icon: Briefcase, description: 'Join our team' },
        { name: 'Partners', path: '/partners', icon: Users, description: 'Strategic partnerships' },
        { name: 'Contact', path: '/contact', icon: Phone, description: 'Get in touch with us' }
      ]
    }
  ];

  const toggleSection = (sectionTitle: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionTitle) 
        ? prev.filter(name => name !== sectionTitle)
        : [...prev, sectionTitle]
    );
  };

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const renderNavItem = (item: SidebarItem, level: number = 0) => {
    const isExpanded = expandedSections.includes(item.title);

    return (
      <div key={item.title} className="mb-4">
        <button
          onClick={() => toggleSection(item.title)}
          className={`flex items-center w-full px-3 py-2 text-sm font-medium rounded-md transition-colors ${
            isExpanded 
              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/30' 
              : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
          }`}
        >
          <item.icon className="w-4 h-4 mr-3 flex-shrink-0" />
          <span className="flex-1 text-left">{item.title}</span>
          {isExpanded ? (
            <ChevronDown className="w-4 h-4 ml-auto" />
          ) : (
            <ChevronRight className="w-4 h-4 ml-auto" />
          )}
        </button>
        
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="ml-4 mt-2 space-y-1"
          >
            {item.items.map(child => (
              <Link
                key={child.name}
                to={child.path}
                className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive(child.path)
                    ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-400/20'
                    : 'text-slate-400 hover:text-white hover:bg-slate-700/30'
                }`}
                onClick={() => setIsOpen(false)}
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

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            onClick={onClose}
          />
          
          {/* Sidebar */}
          <motion.aside
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed left-0 top-0 h-full w-80 bg-slate-900/95 backdrop-blur-xl border-r border-slate-700/50 z-50 overflow-y-auto"
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

              {/* Footer */}
              <div className="p-4 border-t border-slate-700/50">
                <div className="text-center">
                  <Link
                    to="/contact"
                    className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-cyan-500/20"
                    onClick={() => setIsOpen(false)}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar */}
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

            {/* Search */}
            <div className="p-6 border-b border-slate-700/50">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full px-4 py-2 pl-10 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
              </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-6 space-y-6">
              {navigationSections.map((section) => (
                <div key={section.name}>
                  <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-3">
                    {section.name}
                  </h3>
                  <div className="space-y-1">
                    {section.items.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        onClick={onClose}
                        className={`flex items-center justify-between p-3 rounded-lg transition-all duration-200 group ${
                          location.pathname === item.href
                            ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30'
                            : 'text-gray-300 hover:text-white hover:bg-slate-800/50'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <item.icon className="w-5 h-5 flex-shrink-0" />
                          <span className="font-medium">{item.name}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          {item.badge && (
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                              item.badge === 'New' ? 'bg-green-500/20 text-green-400' :
                              item.badge === 'Popular' ? 'bg-blue-500/20 text-blue-400' :
                              item.badge === 'Hot' ? 'bg-red-500/20 text-red-400' :
                              item.badge === 'Hiring' ? 'bg-purple-500/20 text-purple-400' :
                              item.badge === '24/7' ? 'bg-orange-500/20 text-orange-400' :
                              'bg-gray-500/20 text-gray-400'
                            }`}>
                              {item.badge}
                            </span>
                          )}
                          {section.expandable && (
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                toggleSection(section.name);
                              }}
                              className="p-1 text-gray-400 hover:text-white transition-colors"
                            >
                              <ChevronRight className={`w-4 h-4 transition-transform ${
                                expandedSections.includes(section.name) ? 'rotate-90' : ''
                              }`} />
                            </button>
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>

                  {/* Expanded Items */}
                  {section.expandable && expandedSections.includes(section.name) && (
                    <div className="ml-6 mt-3 space-y-3">
                      {section.expandedItems?.map((subsection, index) => (
                        <div key={index}>
                          <h4 className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-2">
                            {subsection.title}
                          </h4>
                          <div className="space-y-1">
                            {subsection.items.map((item) => (
                              <Link
                                key={item.name}
                                to={item.href}
                                onClick={onClose}
                                className="flex items-center space-x-3 p-2 rounded-lg text-gray-400 hover:text-white hover:bg-slate-800/50 transition-all duration-200 group"
                              >
                                <item.icon className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
                                <span className="text-sm">{item.name}</span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Quick Actions */}
            <div className="p-6 border-t border-slate-700/50">
              <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-3">
                Quick Actions
              </h3>
              <div className="space-y-3">
                {quickActions.map((action, index) => (
                  <Link
                    key={index}
                    to={action.href}
                    onClick={onClose}
                    className={`flex items-center space-x-3 p-3 rounded-lg font-medium transition-all duration-200 ${
                      action.variant === 'primary'
                        ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-500/25'
                        : action.variant === 'secondary'
                        ? 'bg-slate-700 hover:bg-slate-600 text-white'
                        : 'border border-slate-600 text-gray-300 hover:border-blue-500 hover:text-blue-400'
                    }`}
                  >
                    <action.icon className="w-5 h-5" />
                    <span>{action.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div className="p-6 border-t border-slate-700/50">
              <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-3">
                Contact Info
              </h3>
              <div className="space-y-3">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    className="flex items-center space-x-3 p-2 rounded-lg text-gray-300 hover:text-blue-400 transition-colors duration-200 group"
                  >
                    <contact.icon className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
                    <span className="text-sm">{contact.text}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-slate-700/50">
              <div className="text-center text-xs text-gray-400">
                <p>© {new Date().getFullYear()} Zion Tech Group</p>
                <p className="mt-1">Leading the future of technology</p>
              </div>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
