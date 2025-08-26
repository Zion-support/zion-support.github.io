<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Home, Briefcase, Users, Phone, Mail, MapPin, Globe, Linkedin, Twitter, Facebook, Instagram, Shield, Handshake, Brain, Cpu, Rocket, Building, Target, Zap, Database, Network, Cloud, Lock, BarChart3, Palette, Smartphone, Server, Github, Youtube, DollarSign, LifeBuoy, BookOpen, Video, FileText } from 'lucide-react';
=======
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Home, Briefcase, Users, Phone, Mail, MapPin, Globe, Linkedin, Twitter, Facebook, Instagram, Shield, Handshake, Brain, Cpu, Rocket, Building, Target, Zap, Database, Network, Cloud, Lock, BarChart3, Palette, Smartphone, Server, Github, Youtube, FileText, BookOpen, Calendar, HelpCircle, Settings, ChevronRight } from 'lucide-react';
>>>>>>> origin/cursor/website-audit-and-enhancement-c6a8
import { Link, useLocation } from 'react-router-dom';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const location = useLocation();

  // Close sidebar when route changes
  useEffect(() => {
    onClose();
  }, [location.pathname, onClose]);

  const navigationItems = [
    {
<<<<<<< HEAD
      title: 'Main',
      items: [
        { name: 'Home', path: '/', icon: Home },
        { name: 'Services', path: '/services', icon: Briefcase },
        { name: 'Pricing', path: '/pricing', icon: DollarSign },
        { name: 'About', path: '/about', icon: Users },
        { name: 'Support', path: '/support', icon: LifeBuoy },
        { name: 'Contact', path: '/contact', icon: Phone }
      ]
    },
    {
      title: 'AI & Technology',
      items: [
        { name: 'AI Solutions', path: '/services/ai', icon: Brain },
        { name: 'Cloud & DevOps', path: '/services/cloud', icon: Cloud },
        { name: 'Cybersecurity', path: '/services/cybersecurity', icon: Shield },
        { name: 'IT Infrastructure', path: '/services/infrastructure', icon: Server },
        { name: 'Digital Transformation', path: '/services/transformation', icon: Rocket },
        { name: 'Consulting', path: '/services/consulting', icon: Handshake }
      ]
    },
    {
      title: 'Resources',
      items: [
        { name: 'Blog', path: '/blog', icon: BookOpen },
        { name: 'Case Studies', path: '/case-studies', icon: FileText },
        { name: 'White Papers', path: '/white-papers', icon: FileText },
        { name: 'Webinars', path: '/webinars', icon: Video },
        { name: 'Tutorials', path: '/tutorials', icon: Video },
        { name: 'Documentation', path: '/docs', icon: BookOpen }
      ]
    },
    {
      title: 'Company',
      items: [
        { name: 'Careers', path: '/careers', icon: Users },
        { name: 'Partners', path: '/partners', icon: Handshake },
        { name: 'Sitemap', path: '/sitemap', icon: MapPin },
        { name: 'Privacy Policy', path: '/privacy', icon: Shield },
        { name: 'Terms of Service', path: '/terms', icon: FileText }
=======
      title: 'Main Navigation',
      items: [
        { name: 'Home', path: '/', icon: Home },
        { name: 'Services', path: '/services', icon: Briefcase },
        { name: 'About Us', path: '/about', icon: Users },
        { name: 'Contact', path: '/contact', icon: Phone },
        { name: 'Blog', path: '/blog', icon: BookOpen }
      ]
    },
    {
      title: 'Core Services',
      items: [
        { name: 'AI Solutions', path: '/ai-solutions', icon: Brain },
        { name: 'Quantum Technology', path: '/quantum-technology', icon: Globe },
        { name: 'Cybersecurity', path: '/cybersecurity', icon: Shield },
        { name: 'Cloud & DevOps', path: '/cloud-devops', icon: Cloud },
        { name: 'Enterprise Solutions', path: '/enterprise-solutions', icon: Building },
        { name: 'Micro SAAS', path: '/micro-saas', icon: Rocket }
      ]
    },
    {
      title: 'AI & Autonomous Systems',
      items: [
        { name: 'AI Autonomous Systems', path: '/ai-autonomous-systems', icon: Brain },
        { name: 'AI Research Assistant', path: '/ai-autonomous-research-assistant', icon: Brain },
        { name: 'AI Business Manager', path: '/ai-autonomous-business-manager', icon: Brain },
        { name: 'AI Business Platform', path: '/ai-autonomous-business-platform', icon: Brain },
        { name: 'AI Asset Management', path: '/ai-powered-it-asset-management', icon: Brain }
      ]
    },
    {
      title: 'Advanced Solutions',
      items: [
        { name: 'Quantum Neural Networks', path: '/quantum-neural-network-platform', icon: Globe },
        { name: 'Autonomous Business Platform', path: '/autonomous-business-operations-platform', icon: Briefcase },
        { name: 'SOC2 Compliance', path: '/soc2-compliance-automation', icon: Shield },
        { name: '5G Enterprise Solutions', path: '/5g-enterprise-solutions', icon: Network },
        { name: 'Emerging Technology', path: '/emerging-tech', icon: Globe }
      ]
    },
    {
      title: 'Industry Solutions',
      items: [
        { name: 'Healthcare Solutions', path: '/solutions/healthcare', icon: Users },
        { name: 'Financial Solutions', path: '/solutions/financial', icon: BarChart3 },
        { name: 'Manufacturing Solutions', path: '/solutions/manufacturing', icon: Cpu },
        { name: 'Retail Solutions', path: '/solutions/retail', icon: Smartphone },
        { name: 'Government Solutions', path: '/solutions/government', icon: Building },
        { name: 'Digital Transformation', path: '/digital-transformation', icon: Zap }
      ]
    },
    {
      title: 'Resources & Support',
      items: [
        { name: 'Help Center', path: '/help', icon: HelpCircle },
        { name: 'Documentation', path: '/docs', icon: FileText },
        { name: 'FAQ', path: '/faq', icon: HelpCircle },
        { name: 'Webinars', path: '/webinars', icon: Calendar },
        { name: 'White Papers', path: '/white-papers', icon: FileText },
        { name: 'Case Studies', path: '/case-studies', icon: BookOpen }
>>>>>>> origin/cursor/website-audit-and-enhancement-c6a8
      ]
    }
  ];

<<<<<<< HEAD
  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github },
    { name: 'YouTube', href: 'https://youtube.com/@ziontechgroup', icon: Youtube }
  ];

=======
  const contactInfo = [
    { icon: Phone, text: '+1 302 464 0950', href: 'tel:+13024640950' },
    { icon: Mail, text: 'info@ziontechgroup.com', href: 'mailto:info@ziontechgroup.com' },
    { icon: MapPin, text: 'Delaware, USA', href: '#' }
  ];

  const socialLinks = [
    { name: 'LinkedIn', url: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin },
    { name: 'Twitter', url: 'https://twitter.com/ziontechgroup', icon: Twitter },
    { name: 'GitHub', url: 'https://github.com/ziontechgroup', icon: Github },
    { name: 'YouTube', url: 'https://youtube.com/@ziontechgroup', icon: Youtube }
  ];

  const isActive = (path: string) => location.pathname === path;

>>>>>>> origin/cursor/website-audit-and-enhancement-c6a8
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
<<<<<<< HEAD
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
=======
            className="fixed inset-0 bg-black/50 z-40"
>>>>>>> origin/cursor/website-audit-and-enhancement-c6a8
            onClick={onClose}
          />
          
          {/* Sidebar */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
<<<<<<< HEAD
            className="fixed left-0 top-0 h-full w-80 bg-slate-900/95 backdrop-blur-lg border-r border-white/10 z-50 overflow-y-auto"
=======
            className="fixed left-0 top-0 h-full w-80 bg-slate-900 border-r border-white/10 z-50 overflow-y-auto"
>>>>>>> origin/cursor/website-audit-and-enhancement-c6a8
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-lg">Z</span>
                </div>
                <span className="text-xl font-bold text-white">Zion Tech Group</span>
              </div>
              <button
                onClick={onClose}
<<<<<<< HEAD
                className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
              >
                <X className="w-6 h-6" />
=======
                className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
>>>>>>> origin/cursor/website-audit-and-enhancement-c6a8
              </button>
            </div>

            {/* Navigation */}
<<<<<<< HEAD
            <div className="p-6 space-y-8">
              {navigationItems.map((section, sectionIndex) => (
                <div key={sectionIndex}>
                  <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                    {section.title}
                  </h3>
                  <div className="space-y-2">
                    {section.items.map((item, itemIndex) => {
                      const Icon = item.icon;
                      const isActive = location.pathname === item.path;
                      return (
                        <Link
                          key={itemIndex}
                          to={item.path}
                          className={`flex items-center px-3 py-3 rounded-lg transition-all duration-300 group ${
                            isActive
                              ? 'bg-blue-600/20 text-blue-400 border border-blue-400/20'
                              : 'text-gray-300 hover:text-white hover:bg-white/10'
                          }`}
                        >
                          <Icon className={`w-5 h-5 mr-3 transition-colors duration-300 ${
                            isActive ? 'text-blue-400' : 'text-gray-400 group-hover:text-white'
                          }`} />
                          <span className="font-medium">{item.name}</span>
                          {isActive && (
                            <div className="ml-auto w-2 h-2 bg-blue-400 rounded-full"></div>
                          )}
                        </Link>
                      );
                    })}
=======
            <div className="p-4 space-y-6">
              {navigationItems.map((section) => (
                <div key={section.title}>
                  <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3 px-2">
                    {section.title}
                  </h3>
                  <div className="space-y-1">
                    {section.items.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className={`flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 group ${
                          isActive(item.path)
                            ? 'text-white bg-blue-600/20 border-l-4 border-blue-400'
                            : 'text-gray-300 hover:text-white hover:bg-white/10'
                        }`}
                      >
                        <item.icon className="w-4 h-4 mr-3" />
                        {item.name}
                        <ChevronRight className={`w-3 h-3 ml-auto transition-transform duration-200 ${
                          isActive(item.path) ? 'rotate-90' : 'group-hover:translate-x-1'
                        }`} />
                      </Link>
                    ))}
>>>>>>> origin/cursor/website-audit-and-enhancement-c6a8
                  </div>
                </div>
              ))}
            </div>

<<<<<<< HEAD
            {/* Social Links */}
            <div className="p-6 border-t border-white/10">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                Follow Us
              </h3>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-slate-800/50 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all duration-300"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Contact Info */}
            <div className="p-6 border-t border-white/10">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                Contact Info
              </h3>
              <div className="space-y-3 text-sm text-gray-300">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-3 text-blue-400" />
                  <span>+1 (302) 464-0950</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-3 text-blue-400" />
                  <span>info@ziontechgroup.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-3 text-blue-400" />
                  <span>Wilmington, DE & Remote</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="p-6">
              <Link
                to="/contact"
                onClick={onClose}
                className="block w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-center py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Link>
            </div>
=======
            {/* Contact Information */}
            <div className="p-4 border-t border-white/10 mt-6">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3 px-2">
                Contact Information
              </h3>
              <div className="space-y-2">
                {contactInfo.map((contact) => (
                  <a
                    key={contact.text}
                    href={contact.href}
                    className="flex items-center px-3 py-2 text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    <contact.icon className="w-4 h-4 mr-3" />
                    {contact.text}
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="p-4 border-t border-white/10">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3 px-2">
                Follow Us
              </h3>
              <div className="flex space-x-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:bg-blue-500/20 transition-all duration-200"
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-c6a8
          </motion.div>
        </>
      )}
    </AnimatePresence>
<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/website-audit-and-enhancement-438b
  );
}
=======
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface SidebarSectionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const SidebarSection: React.FC<SidebarSectionProps> = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  
  return (
    <div className="border-b border-gray-700">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-3 text-left text-gray-300 hover:text-white hover:bg-gray-800 transition-colors duration-200"
      >
        <span className="font-medium">{title}</span>
        {isOpen ? (
          <ChevronDownIcon className="h-4 w-4" />
        ) : (
          <ChevronRightIcon className="h-4 w-4" />
        )}
      </button>
      {isOpen && (
        <div className="bg-gray-800/50">
          {children}
        </div>
      )}
    </div>
  );
};

interface SidebarLinkProps {
  to: string;
  children: React.ReactNode;
  isActive?: boolean;
}

const SidebarLink: React.FC<SidebarLinkProps> = ({ to, children, isActive }) => (
  <Link
    to={to}
    className={`block px-6 py-2 text-sm text-gray-300 hover:text-white hover:bg-gray-700 transition-colors duration-200 ${
      isActive ? 'text-blue-400 bg-blue-900/20 border-r-2 border-blue-400' : ''
    }`}
  >
    {children}
  </Link>
);

const Sidebar: React.FC = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;

  return (
    <aside className="fixed left-0 top-16 h-screen w-64 bg-slate-800/95 backdrop-blur-lg border-r border-white/10 overflow-y-auto z-40">
      <div className="p-4">
        <h2 className="text-lg font-semibold text-white mb-4">Navigation</h2>
        
        {/* Main Pages */}
        <SidebarSection title="Main Pages" defaultOpen={true}>
          <SidebarLink to="/" isActive={isActive('/')}>
            Home
          </SidebarLink>
          <SidebarLink to="/about" isActive={isActive('/about')}>
            About
          </SidebarLink>
          <SidebarLink to="/services" isActive={isActive('/services')}>
            Services Overview
          </SidebarLink>
          <SidebarLink to="/services-showcase" isActive={isActive('/services-showcase')}>
            Services Showcase
          </SidebarLink>
          <SidebarLink to="/contact" isActive={isActive('/contact')}>
            Contact
          </SidebarLink>
          <SidebarLink to="/blog" isActive={isActive('/blog')}>
            Blog
          </SidebarLink>
        </SidebarSection>

        {/* AI & Technology Services */}
        <SidebarSection title="AI & Technology Services">
          <SidebarLink to="/ai-autonomous-business-manager" isActive={isActive('/ai-autonomous-business-manager')}>
            AI Autonomous Business Manager
          </SidebarLink>
          <SidebarLink to="/ai-autonomous-research-assistant" isActive={isActive('/ai-autonomous-research-assistant')}>
            AI Research Assistant
          </SidebarLink>
          <SidebarLink to="/ai-autonomous-systems-platform" isActive={isActive('/ai-autonomous-systems-platform')}>
            AI Systems Platform
          </SidebarLink>
          <SidebarLink to="/ai-business-intelligence-suite" isActive={isActive('/ai-business-intelligence-suite')}>
            AI Business Intelligence
          </SidebarLink>
          <SidebarLink to="/ai-content-generator" isActive={isActive('/ai-content-generator')}>
            AI Content Generator
          </SidebarLink>
          <SidebarLink to="/ai-code-review" isActive={isActive('/ai-code-review')}>
            AI Code Review
          </SidebarLink>
          <SidebarLink to="/ai-autonomous-decision-engine" isActive={isActive('/ai-autonomous-decision-engine')}>
            AI Decision Engine
          </SidebarLink>
          <SidebarLink to="/ai-autonomous-ecosystem" isActive={isActive('/ai-autonomous-ecosystem')}>
            AI Ecosystem
          </SidebarLink>
          <SidebarLink to="/ai-autonomous-business-operations" isActive={isActive('/ai-autonomous-business-operations')}>
            AI Business Operations
          </SidebarLink>
          <SidebarLink to="/ai-autonomous-business-process-automation" isActive={isActive('/ai-autonomous-business-process-automation')}>
            AI Process Automation
          </SidebarLink>
          <SidebarLink to="/ai-autonomous-creative-director" isActive={isActive('/ai-autonomous-creative-director')}>
            AI Creative Director
          </SidebarLink>
          <SidebarLink to="/ai-autonomous-data" isActive={isActive('/ai-autonomous-data')}>
            AI Data Management
          </SidebarLink>
          <SidebarLink to="/ai-autonomous-devops" isActive={isActive('/ai-autonomous-devops')}>
            AI DevOps
          </SidebarLink>
          <SidebarLink to="/ai-autonomous-education-professor" isActive={isActive('/ai-autonomous-education-professor')}>
            AI Education
          </SidebarLink>
          <SidebarLink to="/ai-autonomous-healthcare-physician" isActive={isActive('/ai-autonomous-healthcare-physician')}>
            AI Healthcare
          </SidebarLink>
          <SidebarLink to="/ai-autonomous-legal-counsel" isActive={isActive('/ai-autonomous-legal-counsel')}>
            AI Legal Counsel
          </SidebarLink>
          <SidebarLink to="/ai-autonomous-logistics" isActive={isActive('/ai-autonomous-logistics')}>
            AI Logistics
          </SidebarLink>
          <SidebarLink to="/ai-autonomous-manufacturing" isActive={isActive('/ai-autonomous-manufacturing')}>
            AI Manufacturing
          </SidebarLink>
          <SidebarLink to="/ai-autonomous-robotics" isActive={isActive('/ai-autonomous-robotics')}>
            AI Robotics
          </SidebarLink>
          <SidebarLink to="/ai-autonomous-security" isActive={isActive('/ai-autonomous-security')}>
            AI Security
          </SidebarLink>
          <SidebarLink to="/ai-autonomous-testing" isActive={isActive('/ai-autonomous-testing')}>
            AI Testing
          </SidebarLink>
          <SidebarLink to="/ai-autonomous-vehicle-platform" isActive={isActive('/ai-autonomous-vehicle-platform')}>
            AI Vehicle Platform
          </SidebarLink>
          <SidebarLink to="/ai-autonomous-vehicles" isActive={isActive('/ai-autonomous-vehicles')}>
            AI Vehicles
          </SidebarLink>
          <SidebarLink to="/ai-biomedical-research" isActive={isActive('/ai-biomedical-research')}>
            AI Biomedical Research
          </SidebarLink>
          <SidebarLink to="/ai-biotech-drug-discovery" isActive={isActive('/ai-biotech-drug-discovery')}>
            AI Drug Discovery
          </SidebarLink>
          <SidebarLink to="/ai-blockchain-analytics" isActive={isActive('/ai-blockchain-analytics')}>
            AI Blockchain Analytics
          </SidebarLink>
          <SidebarLink to="/ai-brain-computer-interface" isActive={isActive('/ai-brain-computer-interface')}>
            AI Brain Interface
          </SidebarLink>
          <SidebarLink to="/ai-climate-prediction" isActive={isActive('/ai-climate-prediction')}>
            AI Climate Prediction
          </SidebarLink>
          <SidebarLink to="/ai-computer-vision-platform" isActive={isActive('/ai-computer-vision-platform')}>
            AI Computer Vision
          </SidebarLink>
          <SidebarLink to="/ai-consciousness-evolution" isActive={isActive('/ai-consciousness-evolution')}>
            AI Consciousness
          </SidebarLink>
          <SidebarLink to="/ai-content-creation" isActive={isActive('/ai-content-creation')}>
            AI Content Creation
          </SidebarLink>
          <SidebarLink to="/ai-content-factory" isActive={isActive('/ai-content-factory')}>
            AI Content Factory
          </SidebarLink>
          <SidebarLink to="/ai-content-marketing-automation" isActive={isActive('/ai-content-marketing-automation')}>
            AI Marketing Automation
          </SidebarLink>
          <SidebarLink to="/ai-creativity-studio" isActive={isActive('/ai-creativity-studio')}>
            AI Creativity Studio
          </SidebarLink>
          <SidebarLink to="/ai-market-research" isActive={isActive('/ai-market-research')}>
            AI Market Research
          </SidebarLink>
          <SidebarLink to="/ai-powered-enterprise-security" isActive={isActive('/ai-powered-enterprise-security')}>
            AI Enterprise Security
          </SidebarLink>
        </SidebarSection>

        {/* Advanced Services */}
        <SidebarSection title="Advanced Services">
          <SidebarLink to="/advanced-ai-automation-services" isActive={isActive('/advanced-ai-automation-services')}>
            Advanced AI Automation
          </SidebarLink>
          <SidebarLink to="/advanced-cybersecurity-suite" isActive={isActive('/advanced-cybersecurity-suite')}>
            Advanced Cybersecurity
          </SidebarLink>
          <SidebarLink to="/advanced-it-infrastructure-services" isActive={isActive('/advanced-it-infrastructure-services')}>
            Advanced IT Infrastructure
          </SidebarLink>
          <SidebarLink to="/advanced-research-automation" isActive={isActive('/advanced-research-automation')}>
            Advanced Research Automation
          </SidebarLink>
          <SidebarLink to="/affiliate-attribution-hub" isActive={isActive('/affiliate-attribution-hub')}>
            Affiliate Attribution Hub
          </SidebarLink>
          <SidebarLink to="/agentic-rag" isActive={isActive('/agentic-rag')}>
            Agentic RAG
          </SidebarLink>
          <SidebarLink to="/agentic-rag-helpdesk" isActive={isActive('/agentic-rag-helpdesk')}>
            Agentic RAG Helpdesk
          </SidebarLink>
          <SidebarLink to="/agentic-sales-outreach" isActive={isActive('/agentic-sales-outreach')}>
            Agentic Sales Outreach
          </SidebarLink>
          <SidebarLink to="/accessibility-auditor" isActive={isActive('/accessibility-auditor')}>
            Accessibility Auditor
          </SidebarLink>
          <SidebarLink to="/accessibility-scanner" isActive={isActive('/accessibility-scanner')}>
            Accessibility Scanner
          </SidebarLink>
          <SidebarLink to="/soc2-compliance-automation" isActive={isActive('/soc2-compliance-automation')}>
            SOC2 Compliance Automation
          </SidebarLink>
        </SidebarSection>

        {/* 5G & Network Services */}
        <SidebarSection title="5G & Network Services">
          <SidebarLink to="/5g-enterprise-network" isActive={isActive('/5g-enterprise-network')}>
            5G Enterprise Network
          </SidebarLink>
          <SidebarLink to="/5g-enterprise-solutions" isActive={isActive('/5g-enterprise-solutions')}>
            5G Enterprise Solutions
          </SidebarLink>
          <SidebarLink to="/5g-network-optimization" isActive={isActive('/5g-network-optimization')}>
            5G Network Optimization
          </SidebarLink>
          <SidebarLink to="/5g-private-network-solutions" isActive={isActive('/5g-private-network-solutions')}>
            5G Private Network Solutions
          </SidebarLink>
        </SidebarSection>

        {/* Quantum & Advanced Tech */}
        <SidebarSection title="Quantum & Advanced Tech">
          <SidebarLink to="/quantum-neural-network-platform" isActive={isActive('/quantum-neural-network-platform')}>
            Quantum Neural Network Platform
          </SidebarLink>
          <SidebarLink to="/quantum-edge-computing-platform" isActive={isActive('/quantum-edge-computing-platform')}>
            Quantum Edge Computing
          </SidebarLink>
          <SidebarLink to="/quantum-technology" isActive={isActive('/quantum-technology')}>
            Quantum Technology
          </SidebarLink>
          <SidebarLink to="/quantum-cloud-infrastructure" isActive={isActive('/quantum-cloud-infrastructure')}>
            Quantum Cloud Infrastructure
          </SidebarLink>
          <SidebarLink to="/quantum-financial-trading" isActive={isActive('/quantum-financial-trading')}>
            Quantum Financial Trading
          </SidebarLink>
          <SidebarLink to="/quantum-services" isActive={isActive('/quantum-services')}>
            Quantum Services
          </SidebarLink>
        </SidebarSection>

        {/* Infrastructure & Operations */}
        <SidebarSection title="Infrastructure & Operations">
          <SidebarLink to="/autonomous-business-operations-platform" isActive={isActive('/autonomous-business-operations-platform')}>
            Autonomous Business Operations Platform
          </SidebarLink>
          <SidebarLink to="/autonomous-devops-platform" isActive={isActive('/autonomous-devops-platform')}>
            Autonomous DevOps Platform
          </SidebarLink>
          <SidebarLink to="/ai-powered-it-asset-management" isActive={isActive('/ai-powered-it-asset-management')}>
            AI-Powered IT Asset Management
          </SidebarLink>
          <SidebarLink to="/it-onsite-services" isActive={isActive('/it-onsite-services')}>
            IT Onsite Services
          </SidebarLink>
          <SidebarLink to="/it-services" isActive={isActive('/it-services')}>
            IT Services
          </SidebarLink>
          <SidebarLink to="/iot-services" isActive={isActive('/iot-services')}>
            IoT Services
          </SidebarLink>
          <SidebarLink to="/mobile-services" isActive={isActive('/mobile-services')}>
            Mobile Services
          </SidebarLink>
          <SidebarLink to="/green-it" isActive={isActive('/green-it')}>
            Green IT
          </SidebarLink>
          <SidebarLink to="/space-tech" isActive={isActive('/space-tech')}>
            Space Tech
          </SidebarLink>
        </SidebarSection>

        {/* Business Solutions */}
        <SidebarSection title="Business Solutions">
          <SidebarLink to="/micro-saas" isActive={isActive('/micro-saas')}>
            Micro SaaS
          </SidebarLink>
          <SidebarLink to="/industry-solutions" isActive={isActive('/industry-solutions')}>
            Industry Solutions
          </SidebarLink>
          <SidebarLink to="/manufacturing-solutions" isActive={isActive('/manufacturing-solutions')}>
            Manufacturing Solutions
          </SidebarLink>
          <SidebarLink to="/marketplace" isActive={isActive('/marketplace')}>
            Marketplace
          </SidebarLink>
          <SidebarLink to="/enterprise-it" isActive={isActive('/enterprise-it')}>
            Enterprise IT
          </SidebarLink>
        </SidebarSection>

        {/* Support & Resources */}
        <SidebarSection title="Support & Resources">
          <SidebarLink to="/help-center" isActive={isActive('/help-center')}>
            Help Center
          </SidebarLink>
          <SidebarLink to="/support" isActive={isActive('/support')}>
            Support
          </SidebarLink>
          <SidebarLink to="/tutorials" isActive={isActive('/tutorials')}>
            Tutorials
          </SidebarLink>
          <SidebarLink to="/webinars" isActive={isActive('/webinars')}>
            Webinars
          </SidebarLink>
          <SidebarLink to="/white-papers" isActive={isActive('/white-papers')}>
            White Papers
          </SidebarLink>
          <SidebarLink to="/news" isActive={isActive('/news')}>
            News
          </SidebarLink>
          <SidebarLink to="/events" isActive={isActive('/events')}>
            Events
          </SidebarLink>
          <SidebarLink to="/case-studies" isActive={isActive('/case-studies')}>
            Case Studies
          </SidebarLink>
          <SidebarLink to="/research-development" isActive={isActive('/research-development')}>
            Research & Development
          </SidebarLink>
        </SidebarSection>

        {/* Company Pages */}
        <SidebarSection title="Company">
          <SidebarLink to="/team" isActive={isActive('/team')}>
            Team
          </SidebarLink>
          <SidebarLink to="/leadership" isActive={isActive('/leadership')}>
            Leadership
          </SidebarLink>
          <SidebarLink to="/partners" isActive={isActive('/partners')}>
            Partners
          </SidebarLink>
          <SidebarLink to="/careers" isActive={isActive('/careers')}>
            Careers
          </SidebarLink>
          <SidebarLink to="/pricing" isActive={isActive('/pricing')}>
            Pricing
          </SidebarLink>
        </SidebarSection>

        {/* Legal & Resources */}
        <SidebarSection title="Legal & Resources">
          <SidebarLink to="/privacy" isActive={isActive('/privacy')}>
            Privacy Policy
          </SidebarLink>
          <SidebarLink to="/terms" isActive={isActive('/terms')}>
            Terms of Service
          </SidebarLink>
          <SidebarLink to="/cookies" isActive={isActive('/cookies')}>
            Cookies
          </SidebarLink>
          <SidebarLink to="/sitemap" isActive={isActive('/sitemap')}>
            Sitemap
          </SidebarLink>
        </SidebarSection>

        {/* Special Solutions */}
        <SidebarSection title="Special Solutions">
          <SidebarLink to="/zero-trust-network-architecture" isActive={isActive('/zero-trust-network-architecture')}>
            Zero Trust Network Architecture
          </SidebarLink>
          <SidebarLink to="/service-innovation-hub" isActive={isActive('/service-innovation-hub')}>
            Service Innovation Hub
          </SidebarLink>
          <SidebarLink to="/service-portfolio-dashboard" isActive={isActive('/service-portfolio-dashboard')}>
            Service Portfolio Dashboard
          </SidebarLink>
          <SidebarLink to="/service-recommendations" isActive={isActive('/service-recommendations')}>
            Service Recommendations
          </SidebarLink>
          <SidebarLink to="/service-comparison" isActive={isActive('/service-comparison')}>
            Service Comparison
          </SidebarLink>
        </SidebarSection>
      </div>
    </aside>
  );
};

export default Sidebar;
>>>>>>> origin/cursor/website-audit-and-enhancement-56af
=======
  );
}
>>>>>>> origin/cursor/website-audit-and-enhancement-c6a8
