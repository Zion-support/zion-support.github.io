import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
<<<<<<< HEAD
import { 
  X, 
  Home, 
  Zap, 
  Brain, 
  Shield, 
  Cloud, 
  Atom, 
  Rocket, 
  Code, 
  Target, 
  Users, 
  MessageCircle, 
  BookOpen, 
  HelpCircle, 
  DollarSign, 
  Settings, 
  User, 
  Bell, 
  Search, 
  Star, 
  TrendingUp, 
  Award, 
  Globe, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ChevronRight,
  ChevronDown,
  Plus,
  Minus
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const location = useLocation();
  const [expandedSections, setExpandedSections] = useState<string[]>(['services']);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const isActive = (path: string) => location.pathname === path;

  const mainNavigation = [
    { name: 'Home', href: '/', icon: Home, badge: null },
    { name: 'Services', href: '/services', icon: Zap, badge: 'New', hasDropdown: true },
    { name: 'Solutions', href: '/solutions', icon: Target, badge: null },
    { name: 'About', href: '/about', icon: Users, badge: null },
    { name: 'Contact', href: '/contact', icon: MessageCircle, badge: null },
    { name: 'Blog', href: '/blog', icon: BookOpen, badge: null },
    { name: 'Help Center', href: '/help', icon: HelpCircle, badge: null },
    { name: 'Pricing', href: '/pricing', icon: DollarSign, badge: null },
  ];

  const serviceCategories = [
=======
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home,
  Zap,
  Target,
  Users,
  FileText,
  Phone,
  ChevronRight,
  Brain,
  Atom,
  Shield,
  Rocket,
  BarChart3,
  Activity,
  Globe,
  Building,
  Eye,
  Cpu,
  Cloud,
  Network,
  Server,
  GraduationCap,
  HelpCircle,
  Settings,
  Menu,
  X
} from 'lucide-react';
export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const location = useLocation();
  const navigation = [
    {
      name: 'Home',
      href: '/',
      icon: Home,
      description: 'Main dashboard and overview'
    },
    {
      name: 'Services',
      href: '/services',
      icon: Zap,
      description: 'Our technology services',
      subItems: [
        { name: 'AI Solutions', href: '/services/ai-solutions', icon: Brain },
        { name: 'Quantum Computing', href: '/services/quantum-computing', icon: Atom },
        { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield },
        { name: 'Digital Transformation', href: '/services/digital-transformation', icon: Rocket },
        { name: 'Data Analytics', href: '/services/data-analytics', icon: BarChart3 },
        { name: 'IoT & Edge', href: '/services/iot-edge-computing', icon: Activity },
        { name: 'Space Technology', href: '/services/space-technology', icon: Rocket },
        { name: 'Cloud & DevOps', href: '/services/cloud-devops', icon: Cloud }
      ]
    },
    {
      name: 'Solutions',
      href: '/solutions',
      icon: Target,
      description: 'Industry-specific solutions',
      subItems: [
        { name: 'Enterprise', href: '/solutions/enterprise', icon: Building },
        { name: 'AI Business Intelligence', href: '/solutions/ai-business-intelligence', icon: Brain },
        { name: 'Quantum AI Platform', href: '/solutions/quantum-ai-platform', icon: Atom },
        { name: 'Digital Twin', href: '/solutions/digital-twin', icon: Eye },
        { name: 'Zero Trust Security', href: '/solutions/zero-trust-security', icon: Shield }
      ]
    },
    {
      name: 'About',
      href: '/about',
      icon: Users,
      description: 'Company information',
      subItems: [
        { name: 'Our Story', href: '/about/story', icon: FileText },
        { name: 'Team', href: '/about/team', icon: Users },
        { name: 'Careers', href: '/careers', icon: Users },
        { name: 'Partners', href: '/partners', icon: Network },
        { name: 'Press', href: '/press', icon: FileText }
      ]
    },
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
    {
      id: 'ai-ml',
      title: 'AI & Machine Learning',
      icon: Brain,
      color: 'text-blue-500',
      services: [
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence' },
        { name: 'AI Compliance Assistant', href: '/services/ai-compliance-assistant' },
        { name: 'AI Sales Copilot', href: '/services/ai-sales-copilot' },
        { name: 'AI Content Marketing', href: '/services/ai-content-marketing-suite' },
        { name: 'AI Customer Support', href: '/services/ai-customer-support-automation' },
        { name: 'AI Project Management', href: '/services/ai-project-management' },
        { name: 'AI Financial Analytics', href: '/services/ai-financial-analytics' },
        { name: 'AI Healthcare Platform', href: '/services/ai-healthcare-platform' }
      ]
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      icon: Shield,
      color: 'text-red-500',
      services: [
        { name: 'AI Cybersecurity Platform', href: '/services/ai-cybersecurity-platform' },
        { name: 'Security Headers & CSP', href: '/services/security-headers-csp' },
        { name: 'DSR Privacy Portal', href: '/services/dsr-portal' },
        { name: 'Zero Trust Network', href: '/services/zero-trust-network-access' },
        { name: 'SOC2 Compliance', href: '/services/soc2-compliance-automation' },
        { name: 'Threat Intelligence', href: '/services/ai-cyber-threat-intelligence' }
      ]
    },
    {
      id: 'cloud-infrastructure',
      title: 'Cloud & Infrastructure',
      icon: Cloud,
      color: 'text-cyan-500',
      services: [
        { name: 'Cloud DevOps', href: '/services/cloud-devops' },
        { name: 'IT Infrastructure', href: '/services/it-infrastructure' },
        { name: 'FinOps Advisor', href: '/services/finops-advisor' },
        { name: 'Cloud Migration', href: '/services/cloud-migration-services' },
        { name: 'Edge Computing', href: '/services/iot-edge-computing' },
        { name: 'Container Orchestration', href: '/services/kubernetes-services' }
      ]
    },
    {
      id: 'quantum-computing',
      title: 'Quantum Computing',
      icon: Atom,
      color: 'text-purple-500',
      services: [
        { name: 'Quantum Edge Computing', href: '/services/quantum-edge-computing' },
        { name: 'Quantum Neural Networks', href: '/services/quantum-neural-networks' },
        { name: 'Quantum Financial Trading', href: '/services/quantum-financial-trading' },
        { name: 'AI Quantum Hybrid', href: '/services/ai-quantum-hybrid-platform' }
      ]
    },
    {
      id: 'digital-transformation',
      title: 'Digital Transformation',
      icon: Rocket,
      color: 'text-green-500',
      services: [
        { name: 'Digital Twin Solutions', href: '/services/digital-twin' },
        { name: 'IoT Edge Computing', href: '/services/iot-edge-computing' },
        { name: 'Blockchain Solutions', href: '/services/blockchain' },
        { name: '5G Enterprise Solutions', href: '/services/5g-enterprise-solutions' },
        { name: 'IT Consulting', href: '/services/it-consulting' }
      ]
    },
    {
      id: 'micro-saas',
      title: 'Micro SaaS',
      icon: Code,
      color: 'text-yellow-500',
      services: [
        { name: 'Custom SaaS Development', href: '/services/micro-saas-solutions' },
        { name: 'API Development', href: '/services/api-development' },
        { name: 'Mobile App Development', href: '/services/mobile-development' },
        { name: 'Web Application Development', href: '/services/web-development' },
        { name: 'E-commerce Solutions', href: '/services/ecommerce-personalization' }
      ]
    }
  ];
<<<<<<< HEAD

  const quickActions = [
    { name: 'Request Quote', href: '/request-quote', icon: MessageCircle, color: 'bg-blue-500' },
    { name: 'Schedule Demo', href: '/schedule-demo', icon: Users, color: 'bg-green-500' },
    { name: 'Support Chat', href: '/support', icon: HelpCircle, color: 'bg-purple-500' },
    { name: 'Documentation', href: '/documentation', icon: BookOpen, color: 'bg-orange-500' }
  ];

  const contactInfo = [
    { icon: Phone, text: '+1 302 464 0950', href: 'tel:+13024640950' },
    { icon: Mail, text: 'kleber@ziontechgroup.com', href: 'mailto:kleber@ziontechgroup.com' },
    { icon: MapPin, text: 'Middletown, DE 19709', href: 'https://maps.google.com/?q=Middletown,DE' },
    { icon: Clock, text: 'Mon-Fri: 9AM-6PM EST', href: '#' }
  ];

  const recentServices = [
    { name: 'AI Cybersecurity Platform', href: '/services/ai-cybersecurity-platform', views: '2.3k' },
    { name: 'Quantum Edge Computing', href: '/services/quantum-edge-computing', views: '1.8k' },
    { name: 'AI Healthcare Platform', href: '/services/ai-healthcare-platform', views: '1.5k' },
    { name: 'Micro SaaS Solutions', href: '/services/micro-saas-solutions', views: '1.2k' }
  ];

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-80 bg-white dark:bg-slate-900 border-r border-gray-200 dark:border-slate-700 z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0 lg:static lg:inset-0`}>
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-slate-700">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-bold text-gray-900 dark:text-white">Zion Tech</span>
          </div>
          <button
            onClick={onClose}
            className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-4 space-y-6">
            
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search services..."
                className="w-full pl-10 pr-4 py-2 bg-gray-100 dark:bg-slate-800 border border-gray-300 dark:border-slate-600 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white"
              />
            </div>

            {/* Main Navigation */}
            <div>
              <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                Navigation
              </h3>
              <nav className="space-y-1">
                {mainNavigation.map((item) => (
                  <div key={item.name}>
                    {item.hasDropdown ? (
                      <button
                        onClick={() => toggleSection('services')}
                        className={`w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                          isActive(item.href) 
                            ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300' 
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <item.icon className="w-4 h-4" />
                          <span>{item.name}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          {item.badge && (
                            <span className="px-2 py-1 text-xs font-medium bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded-full">
                              {item.badge}
                            </span>
                          )}
                          {expandedSections.includes('services') ? (
                            <ChevronDown className="w-4 h-4" />
                          ) : (
                            <ChevronRight className="w-4 h-4" />
                          )}
                        </div>
                      </button>
                    ) : (
                      <Link
                        to={item.href}
                        className={`flex items-center justify-between px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                          isActive(item.href) 
                            ? 'bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300' 
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <item.icon className="w-4 h-4" />
                          <span>{item.name}</span>
                        </div>
                        {item.badge && (
                          <span className="px-2 py-1 text-xs font-medium bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded-full">
                            {item.badge}
                          </span>
                        )}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>
            </div>

            {/* Services Dropdown */}
            {expandedSections.includes('services') && (
              <div className="ml-4 space-y-4">
                {serviceCategories.map((category) => (
                  <div key={category.id}>
                    <button
                      onClick={() => toggleSection(category.id)}
                      className="flex items-center justify-between w-full text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors duration-200"
                    >
                      <div className="flex items-center space-x-2">
                        <category.icon className={`w-4 h-4 ${category.color}`} />
                        <span>{category.title}</span>
                      </div>
                      {expandedSections.includes(category.id) ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </button>
                    
                    {expandedSections.includes(category.id) && (
                      <div className="mt-2 ml-6 space-y-1">
                        {category.services.map((service) => (
                          <Link
                            key={service.name}
                            to={service.href}
                            className={`block px-3 py-2 text-sm rounded-md transition-colors duration-200 ${
                              isActive(service.href)
                                ? 'bg-blue-50 dark:bg-blue-900/10 text-blue-700 dark:text-blue-300'
                                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-slate-800'
                            }`}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Quick Actions */}
            <div>
              <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                Quick Actions
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {quickActions.map((action) => (
                  <Link
                    key={action.name}
                    to={action.href}
                    className="flex flex-col items-center p-3 rounded-lg bg-gray-50 dark:bg-slate-800 hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors duration-200"
                  >
                    <div className={`w-8 h-8 ${action.color} rounded-lg flex items-center justify-center mb-2`}>
                      <action.icon className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300 text-center">
                      {action.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Recent Services */}
            <div>
              <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                Popular Services
              </h3>
              <div className="space-y-2">
                {recentServices.map((service) => (
                  <Link
                    key={service.name}
                    to={service.href}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors duration-200"
                  >
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300 truncate">
                      {service.name}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {service.views}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                Contact Info
              </h3>
              <div className="space-y-2">
                {contactInfo.map((contact) => (
                  <a
                    key={contact.text}
                    href={contact.href}
                    className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors duration-200"
                  >
                    <contact.icon className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {contact.text}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* User Tools */}
            <div className="pt-4 border-t border-gray-200 dark:border-slate-700">
              <div className="flex items-center space-x-3 p-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">Guest User</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Sign in for more features</p>
                </div>
                <button className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                  <Settings className="w-4 h-4" />
                </button>
              </div>
=======
  const isActive = (href: string) => location.pathname === href;
  const toggleSection = (sectionName: string) => {
    setActiveSection(activeSection === sectionName ? null : sectionName);
  };
  return (
    <motion.aside
      className={`fixed left-0 top-16 h-full bg-gray-900/95 backdrop-blur-md border-r border-gray-700 transition-all duration-300 z-40 ${
        isCollapsed ? 'w-16' : 'w-64'
      }`}
      initial={{ x: -256 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-6 bg-gray-800 border border-gray-600 rounded-full p-1 text-gray-400 hover:text-white hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-900"
        aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
      >
        {isCollapsed ? (
          <ChevronRight className="w-4 h-4" />
        ) : (
          <ChevronRight className="w-4 h-4 rotate-180" />
        )}
      </button>
      {/* Navigation */}
      <nav className="h-full overflow-y-auto py-6 px-4">
        <div className="space-y-2">
          {navigation.map((item) => (
            <div key={item.name}>
              {item.subItems ? (
                <div>
                  <button
                    onClick={() => toggleSection(item.name)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-inset ${
                      isActive(item.href) || activeSection === item.name
                        ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                        : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                    }`}
                    aria-expanded={activeSection === item.name}
                    title={!isCollapsed ? item.description : item.name}
                  >
                    <div className="flex items-center space-x-3">
                      <item.icon className="w-5 h-5 flex-shrink-0" />
                      {!isCollapsed && <span className="font-medium">{item.name}</span>}
                    </div>
                    {!isCollapsed && (
                      <ChevronRight 
                        className={`w-4 h-4 transition-transform ${activeSection === item.name ? 'rotate-90' : ''}`} 
                      />
                    )}
                  </button>
                  <AnimatePresence>
                    {activeSection === item.name && !isCollapsed && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="ml-6 mt-2 space-y-1"
                      >
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-inset ${
                              isActive(subItem.href)
                                ? 'bg-cyan-500/10 text-cyan-400'
                                : 'text-gray-400 hover:text-white hover:bg-gray-800/30'
                            }`}
                            title={subItem.name}
                          >
                            <subItem.icon className="w-4 h-4 flex-shrink-0" />
                            <span className="truncate">{subItem.name}</span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  to={item.href}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-inset ${
                    isActive(item.href)
                      ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                      : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                  }`}
                  title={!isCollapsed ? item.description : item.name}
                >
                  <item.icon className="w-5 h-5 flex-shrink-0" />
                  {!isCollapsed && <span className="font-medium">{item.name}</span>}
                </Link>
              )}
            </div>
          ))}
        </div>
        {/* Quick Actions */}
        {!isCollapsed && (
          <div className="mt-8 pt-6 border-t border-gray-700">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-3">
              Quick Actions
            </h3>
            <div className="space-y-2">
              <Link
                to="/contact"
                className="flex items-center space-x-3 px-3 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-inset"
              >
                <Phone className="w-4 h-4" />
                <span className="font-medium">Get Started</span>
              </Link>
              <Link
                to="/support"
                className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-inset"
              >
                <HelpCircle className="w-4 h-4" />
                <span className="font-medium">Support</span>
              </Link>
>>>>>>> origin/cursor/enhance-ziontechgroup-website-with-new-services-and-improvements-04d7
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
