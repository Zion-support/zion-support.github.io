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
  Lock,
  Award,
  ShoppingCart,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Settings,
  User,
  Bell,
  Search,
  Menu,
  X,
  CheckCircle
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const location = useLocation();
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const toggleSection = (sectionName: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionName) 
        ? prev.filter(name => name !== sectionName)
        : [...prev, sectionName]
    );
  };

  const navigationSections = [
    {
      name: 'Main',
      items: [
        { name: 'Home', href: '/', icon: Home, badge: null },
        { name: 'About', href: '/about', icon: Users, badge: null },
        { name: 'Contact', href: '/contact', icon: MessageCircle, badge: null },
        { name: 'Careers', href: '/careers', icon: Award, badge: 'Hiring' },
        { name: 'Partners', href: '/partners', icon: Users, badge: null }
      ]
    },
    {
      name: 'Services',
      items: [
        { name: 'AI Services', href: '/ai-services', icon: Brain, badge: 'New' },
        { name: 'IT Services', href: '/it-services', icon: Cpu, badge: null },
        { name: 'Micro SaaS', href: '/micro-saas', icon: ShoppingCart, badge: 'Popular' },
        { name: 'Cloud & DevOps', href: '/services/cloud-devops', icon: Cloud, badge: null },
        { name: 'Cybersecurity', href: '/services/ai-cybersecurity-platform', icon: Shield, badge: 'Hot' }
      ],
      expandable: true,
      expandedItems: [
        {
          title: 'AI Solutions',
          items: [
            { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', icon: BarChart3 },
            { name: 'AI Content Creation', href: '/services/ai-content-marketing-suite', icon: PenTool },
            { name: 'AI Project Management', href: '/services/ai-project-management', icon: Workflow },
            { name: 'AI Financial Analytics', href: '/services/ai-financial-analytics', icon: DollarSign },
            { name: 'AI Healthcare Platform', href: '/services/ai-healthcare-platform', icon: Heart }
          ]
        },
        {
          title: 'Specialized Services',
          items: [
            { name: 'Quantum Computing', href: '/services/quantum-computing', icon: Atom },
            { name: 'IoT & Edge Computing', href: '/services/iot-edge-computing', icon: Cpu },
            { name: 'Space Technology', href: '/services/space-tech', icon: Satellite },
            { name: 'Green Technology', href: '/services/sustainable-technology', icon: Leaf },
            { name: 'Digital Transformation', href: '/services/digital-transformation', icon: TrendingUp }
          ]
        }
      ]
    },
    {
      name: 'Solutions',
      items: [
        { name: 'Enterprise', href: '/solutions/enterprise', icon: Building, badge: null },
        { name: 'Healthcare', href: '/solutions/healthcare', icon: Heart, badge: null },
        { name: 'Financial Services', href: '/solutions/financial', icon: DollarSign, badge: null },
        { name: 'Manufacturing', href: '/solutions/manufacturing', icon: Truck, badge: null },
        { name: 'Education', href: '/solutions/education', icon: GraduationCap, badge: null }
      ],
      expandable: true,
      expandedItems: [
        {
          title: 'Technology Solutions',
          items: [
            { name: 'AI & ML Platforms', href: '/solutions/ai-ml', icon: Brain },
            { name: 'Quantum Solutions', href: '/solutions/quantum', icon: Atom },
            { name: 'Blockchain & Web3', href: '/solutions/blockchain', icon: Code },
            { name: 'Edge Computing', href: '/solutions/edge-computing', icon: Cpu },
            { name: 'Data Analytics', href: '/solutions/data-analytics', icon: Database }
          ]
        }
      ]
    },
    {
      name: 'Resources',
      items: [
        { name: 'Blog', href: '/blog', icon: BookOpen, badge: null },
        { name: 'News', href: '/news', icon: FileText, badge: null },
        { name: 'Case Studies', href: '/case-studies', icon: BarChart3, badge: null },
        { name: 'White Papers', href: '/white-papers', icon: FileText, badge: null },
        { name: 'Webinars', href: '/webinars', icon: Users, badge: null }
      ],
      expandable: true,
      expandedItems: [
        {
          title: 'Developer Resources',
          items: [
            { name: 'Documentation', href: '/documentation', icon: FileText },
            { name: 'API Reference', href: '/api', icon: Code },
            { name: 'Developer Portal', href: '/developers', icon: Cpu },
            { name: 'Training', href: '/training', icon: BookOpen },
            { name: 'Help Center', href: '/help', icon: HelpCircle }
          ]
        }
      ]
    },
    {
      name: 'Support',
      items: [
        { name: 'Help Center', href: '/help', icon: HelpCircle, badge: null },
        { name: 'Contact Support', href: '/support', icon: MessageCircle, badge: null },
        { name: 'Status Page', href: '/status', icon: CheckCircle, badge: null },
        { name: 'FAQ', href: '/faq', icon: MessageCircle, badge: null },
        { name: 'Live Chat', href: '/chat', icon: MessageCircle, badge: '24/7' }
      ]
    }
  ];

  const quickActions = [
    { name: 'Request Quote', href: '/request-quote', icon: DollarSign, variant: 'primary' },
    { name: 'Schedule Demo', href: '/schedule-demo', icon: Calendar, variant: 'secondary' },
    { name: 'Contact Sales', href: '/contact', icon: MessageCircle, variant: 'outline' }
  ];

  const contactInfo = [
    { icon: Phone, text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: Mail, text: 'info@ziontechgroup.com', href: 'mailto:info@ziontechgroup.com' },
    { icon: MapPin, text: '123 Tech Street, Innovation City, IC 12345', href: 'https://maps.google.com' }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
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
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-700/50">
              <Link to="/" className="flex items-center space-x-3 group" onClick={onClose}>
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    Zion Tech Group
                  </h1>
                  <p className="text-xs text-blue-300">Future of Technology</p>
                </div>
              </Link>
              <button
                onClick={onClose}
                className="p-2 text-gray-400 hover:text-white transition-colors lg:hidden"
              >
                <X className="w-5 h-5" />
              </button>
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
