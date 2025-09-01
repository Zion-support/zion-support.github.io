<<<<<<< HEAD
import React, { useState } from 'react.ts';
import { Link, useLocation               } from 'react-router-dom.ts';
import { motion, AnimatePresence               } from 'framer-motion.ts';
import { Home,
  Brain,
  Cloud,
  Server,
  Rocket,
  Users,
  Briefcase,
  FileText,
  HelpCircle,
  MessageCircle,
  Settings,
  BarChart3,
  Shield,
  Zap,
  Globe,
  Cpu,
  Database,
  Network,
  Lock,
  Code,
  ShoppingCart,
  Target,
  Lightbulb,
  Award,
  TrendingUp,
  BookOpen,
  Calendar,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
  ChevronDown,
  Handshake,
  Atom,
  Link as LinkIcon,
  Wifi,
  HeartPulse,
  DollarSign,
  Leaf,
  Building,
  User
<<<<<<< HEAD
 } from 'lucide-react';
export const EnhancedSidebar: React.FC = () => {;
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['Services']));
  const location = useLocation();
  const toggleSection = (section: string) => {;
=======
<<<<<<< HEAD
export const EnhancedSidebar: React.FC = (): JSX.Element => {
=======
               } from 'lucide-react.ts';
=======
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, ChevronRight, Home, Users, Building, Code, Shield, 
  Cloud, Rocket, Brain, Heart, DollarSign, Truck, 
  BookOpen, FileText, HelpCircle, MessageCircle, 
  Settings, User, Bell, Search, Menu, Zap, Star,
  TrendingUp, Award, Globe, Server, Smartphone,
  Database, Network, Lock, BarChart3, PenTool,
  Eye, Sparkles, Phone, Mail, MapPin
} from 'lucide-react';
>>>>>>> cursor/add-new-services-and-advertise-them-650b

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function EnhancedSidebar({ isOpen, onClose }: SidebarProps) {
  const location = useLocation();
<<<<<<< HEAD

  const toggleSection = (section: anyanyanyanyanyanyanyanyanyanyanyanyanyanystring)                => {;
=======;
export const EnhancedSidebar: React.FC = (): JSX.Element => {;
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set(['Services']));
  const location = useLocation();

  const toggleSection = (section: anyanyanyanyanyanyanyanyanyanyanyanyanyanystring)               => {;
>>>>>>> cursor/fix-project-errors-and-automate-future-fixes-53bd
>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(section)) {
      newExpanded.delete(section)} else {
      newExpanded.add(section)}
    setExpandedSections(newExpanded)};
<<<<<<< HEAD
  const isActive = (path: string)  => location.pathname === path;
=======
>>>>>>> 93c877c1f5b152c458bc28f698e09e33b34cdae3

  const isActive = (path: anyanyanyanyanyanyanyanyanyanyanyanyanyanystring)                => location.pathname === path;
=======
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
>>>>>>> cursor/add-new-services-and-advertise-them-650b

>>>>>>> 4cc4a42f69bd95988691b9548650af1405020894
  const navigationSections = [
    {
      id: 'main',
      title: 'Main',
      icon: Home,
      links: [
        { name: 'Home', href: '/', icon: Home, description: 'Welcome to Zion Tech Group' },
        { name: 'About Us', href: '/about', icon: Building, description: 'Our story and mission' },
        { name: 'Our Team', href: '/team', icon: Users, description: 'Meet our experts' },
        { name: 'Leadership', href: '/leadership', icon: Award, description: 'Executive team' },
        { name: 'Careers', href: '/careers', icon: Star, description: 'Join our team' },
        { name: 'Partners', href: '/partners', icon: Users, description: 'Strategic partnerships' },
        { name: 'News', href: '/news', icon: TrendingUp, description: 'Latest updates' },
      ]
    },
    {
      id: 'services',
      title: 'Services',
      icon: Code,
      links: [
        { name: 'AI Solutions', href: '/ai-solutions', icon: Brain, description: 'Machine learning & automation' },
        { name: 'Cloud & DevOps', href: '/services/cloud-devops', icon: Cloud, description: 'Infrastructure & deployment' },
        { name: 'Cybersecurity', href: '/services/ai-cybersecurity-platform', icon: Shield, description: 'Security & compliance' },
        { name: 'Digital Transformation', href: '/services/digital-transformation', icon: TrendingUp, description: 'Business modernization' },
        { name: 'Micro SaaS', href: '/micro-saas', icon: Rocket, description: 'Lightweight applications' },
        { name: 'IT Consulting', href: '/it-consulting', icon: Building, description: 'Technology advisory' },
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', icon: BarChart3, description: 'Data analytics & insights' },
        { name: 'AI Content Creation', href: '/services/ai-content-marketing-suite', icon: PenTool, description: 'Content marketing tools' },
        { name: 'AI Project Management', href: '/services/ai-project-management', icon: TrendingUp, description: 'Smart project coordination' },
        { name: 'AI Financial Analytics', href: '/services/ai-financial-analytics', icon: DollarSign, description: 'Financial insights & forecasting' },
        { name: 'AI Healthcare Platform', href: '/services/ai-healthcare-platform', icon: Heart, description: 'Medical technology solutions' },
        { name: 'AI Sales Copilot', href: '/services/ai-sales-copilot', icon: TrendingUp, description: 'Sales automation & optimization' },
      ]
    },
    {
      id: 'solutions',
      title: 'Solutions',
      icon: Building,
      links: [
        { name: 'Enterprise Solutions', href: '/solutions/enterprise', icon: Building, description: 'Large-scale business solutions' },
        { name: 'Healthcare Solutions', href: '/solutions/healthcare', icon: Heart, description: 'Medical technology & systems' },
        { name: 'Financial Solutions', href: '/financial-solutions', icon: DollarSign, description: 'Fintech & banking solutions' },
        { name: 'Manufacturing Solutions', href: '/manufacturing-solutions', icon: Truck, description: 'Industry 4.0 & automation' },
        { name: 'Research & Development', href: '/research-development', icon: Brain, description: 'Innovation labs & R&D' },
        { name: 'Green IT Solutions', href: '/green-it', icon: Globe, description: 'Sustainable technology' },
        { name: 'Government Solutions', href: '/solutions/government', icon: Building, description: 'Public sector technology' },
        { name: 'Education Solutions', href: '/solutions/education', icon: BookOpen, description: 'Educational technology' },
        { name: 'Retail Solutions', href: '/solutions/retail', icon: ShoppingCart, description: 'E-commerce & retail tech' },
      ]
<<<<<<< HEAD
=======
    },
    {
      id: 'resources',
      title: 'Resources',
      icon: BookOpen,
      links: [
        { name: 'Blog', href: '/blog', icon: PenTool, description: 'Insights & industry updates' },
        { name: 'Case Studies', href: '/case-studies', icon: FileText, description: 'Success stories & examples' },
        { name: 'White Papers', href: '/white-papers', icon: FileText, description: 'In-depth research & analysis' },
        { name: 'Webinars', href: '/webinars', icon: Users, description: 'Educational content & sessions' },
        { name: 'Documentation', href: '/documentation', icon: BookOpen, description: 'Technical guides & manuals' },
        { name: 'API Reference', href: '/api', icon: Code, description: 'Developer resources & APIs' },
        { name: 'Developer Portal', href: '/developer-portal', icon: Code, description: 'Tools for developers' },
        { name: 'Training Materials', href: '/training', icon: BookOpen, description: 'Learning resources' },
      ]
    },
    {
      id: 'support',
      title: 'Support',
      icon: HelpCircle,
      links: [
        { name: 'Help Center', href: '/help', icon: HelpCircle, description: 'Find answers & solutions' },
        { name: 'FAQ', href: '/faq', icon: HelpCircle, description: 'Common questions & answers' },
        { name: 'Contact Support', href: '/support', icon: MessageCircle, description: 'Get help from our team' },
        { name: 'Training', href: '/training', icon: BookOpen, description: 'Skill development programs' },
        { name: 'Status Page', href: '/status', icon: Server, description: 'Service status & updates' },
        { name: 'Community', href: '/community', icon: Users, description: 'User forums & discussions' },
        { name: 'Live Chat', href: '/chat', icon: MessageCircle, description: 'Real-time support' },
        { name: 'Request Quote', href: '/request-quote', icon: DollarSign, description: 'Get pricing information' },
        { name: 'Schedule Demo', href: '/schedule-demo', icon: Calendar, description: 'See our solutions in action' },
      ]
    },
    {
      id: 'company',
      title: 'Company',
      icon: Building,
      links: [
        { name: 'Contact Us', href: '/contact', icon: MessageCircle, description: 'Get in touch with us' },
        { name: 'Privacy Policy', href: '/privacy', icon: Shield, description: 'Data protection & privacy' },
        { name: 'Terms of Service', href: '/terms', icon: FileText, description: 'Terms & conditions' },
        { name: 'Cookie Policy', href: '/cookies', icon: Shield, description: 'Cookie usage & preferences' },
        { name: 'Data Protection', href: '/data-protection', icon: Lock, description: 'GDPR & data security' },
        { name: 'Accessibility', href: '/accessibility', icon: Eye, description: 'Accessibility statement' },
        { name: 'Sitemap', href: '/sitemap', icon: Globe, description: 'Site navigation structure' },
      ]
    }
>>>>>>> cursor/add-new-services-and-advertise-them-650b
  ];
  const quickActions = [
    { name: 'Request Quote', href: '/request-quote', icon: DollarSign, color: 'bg-blue-500' },
    { name: 'Schedule Demo', href: '/schedule-demo', icon: Calendar, color: 'bg-green-500' },
    { name: 'Contact Sales', href: '/contact', icon: Phone, color: 'bg-purple-500' },
    { name: 'Support Chat', href: '/chat', icon: MessageCircle, color: 'bg-orange-500' },
  ];
<<<<<<< HEAD
  return (
    <div className = "w-64 bg-slate-900/95 backdrop-blur-xl border-r border-slate-700/50 h-screen overflow-y-auto">
      <div className="p-6">
        {/* Logo */}
        <div className="mb-8">;
        { name: "Sitemap", href: "/sitemap", icon: Globe },;
        { name: "Dashboard", href: "/dashboard", icon: BarChart3 },;
        { name: "Login", href: "/login", icon: User };
      ];
    };
  ];
  const quickActions = [;
    { name: "Get Quote", href: "/contact", icon: MessageCircle, variant: "primary" },;
    { name: "Book Demo", href: "/enterprise-demo", icon: Calendar, variant: "secondary" },;
    { name: "Support", href: "/support", icon: HelpCircle, variant: "secondary" };
  ];
  return (
    <aside className = "hidden lg:block w-80 min-h-screen bg-zion-slate-dark/95 backdrop-blur-xl border-r border-zion-cyan/20 overflow-y-auto">
      <div className="p-6">
        {/* Logo Section */}
        <motion.div
          className="mb-8"
          initial = {
  { opacity: 0,
  y: -20 
}}
          animate = {
  { opacity: 1,
  y: 0 
}}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
              Zion Tech Group
            </h1>
          </Link>
        </div>
        {/* Quick Actions */}
        <motion.div
          className="mb-8"
          initial = {
  { opacity: 0,
  y: -20 
}}
          animate = {
  { opacity: 1,
  y: 0 
}}
          transition = {
  { duration: 0.5,
  delay: 0.1 
}}
        >
          <h3 className="text-sm font-semibold text-zion-slate-light mb-3 uppercase tracking-wide">Quick Actions</h3>
          <div className="space-y-2">
            {quickActions.map((action, index) => (
              <motion.div
                key={action.name}
                initial = {
  { opacity: 0,
  x: -20 
}}
                animate = {
  { opacity: 1,
  x: 0 
}}
                transition = {
  { duration: 0.3,
  delay: index * 0.1 
}}
              >
                <Link
                  to={action.href}
                  className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 group ${
                    action.variant === 'primary'
                      ? 'bg-gradient-to-r from-zion-cyan to-zion-blue text-white hover:from-zion-cyan/90 hover:to-zion-blue/90 shadow-lg shadow-zion-cyan/25'
                      : 'bg-zion-slate-dark/50 text-zion-slate-light hover:text-white hover:bg-zion-cyan/10 border border-zion-cyan/20 hover:border-zion-cyan/40'
                  }`}
                  <action.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                  <span className="font-medium">{action.name}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
        {/* Navigation Sections */}
        <div className="space-y-6">
          {navigationSections.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial = {
  { opacity: 0,
  y: -20 
}}
              animate = {
  { opacity: 1,
  y: 0 
}}
              transition = {
  { duration: 0.5,
  delay: sectionIndex * 0.1 
}}
            >
              <button
                onClick={() => toggleSection(section.title)}
                className="flex items-center justify-between w-full text-left p-3 rounded-lg hover:bg-slate-800/50 transition-colors duration-200 group"
              >
=======

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const isSectionExpanded = (sectionId: string) => expandedSections.includes(sectionId);

  const isLinkActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };

  const filteredSections = searchQuery 
    ? navigationSections.map(section => ({
        ...section,
        links: section.links.filter(link => 
          link.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          link.description.toLowerCase().includes(searchQuery.toLowerCase())
        )
      })).filter(section => section.links.length > 0)
    : navigationSections;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={onClose}
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed left-0 top-0 h-full w-80 bg-white shadow-2xl z-50 overflow-y-auto"
          >
            {/* Header */}
            <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
              <div className="flex items-center justify-between mb-6">
>>>>>>> cursor/add-new-services-and-advertise-them-650b
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">Zion Tech Group</h2>
                    <p className="text-sm text-blue-100">Navigation</p>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-blue-200" />
                <input
                  type="text"
                  placeholder="Search navigation..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
<<<<<<< HEAD
              </button>
              <AnimatePresence>
                {expandedSections.has(section.title) && (
                  <motion.div
                    initial = {
  { opacity: 0,
  height: 0 
}}
                    animate = {
  { opacity: 1,
  height: 'auto' 
}}
                    exit = {
  { opacity: 0,
  height: 0 
}}
                    transition={{ duration: 0.3 }}
                    className="ml-7 mt-2 space-y-1"
                  >
                    {section.items.map((item) => (
                      <Link
                        key={item.name}
                        initial = {
  { opacity: 0,
  x: -20 
}}
                        animate = {
  { opacity: 1,
  x: 0 
}}
                        transition = {
  { duration: 0.2,
  delay: itemIndex * 0.05 
}}
                      >
                        <item.icon className="w-4 h-4" />
                        <span>{item.name}</span>
                        {isActive(item.href) && (
                          <div className="w-2 h-2 bg-cyan-400 rounded-full ml-auto"></div>
                        )}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>
        {/* Contact Info */}
        <motion.div
          className="mt-8 p-4 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg"
          initial = {
  { opacity: 0,
  y: 20 
}}
          animate = {
  { opacity: 1,
  y: 0 
}}
          transition = {
  { duration: 0.5,
  delay: 0.5 
}}
        >
          <h3 className="text-sm font-semibold text-zion-cyan mb-3">Need Help?</h3>
          <div className="space-y-2 text-xs text-zion-slate-light">
            <div className="flex items-center space-x-2">
              <Phone className="w-3 h-3" />
              <span>+1 302 464 0950</span>
            </div>
            <div className="flex items-center space-x-3 text-sm text-slate-400">
              <Mail className="w-4 h-4" />
              <span>kleber@ziontechgroup.com</span>
            </div>
            <div className = "flex items-center space-x-2">
              <MapPin className="w-3 h-3" />;
              <span>Middletown, DE</span>;
            </div>;
          </div>;
        </motion.div>;
      </div>;
    </aside>;
  );
};
=======
              </div>
            </div>

            {/* Quick Actions */}
            {searchQuery === '' && (
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-sm font-semibold text-gray-600 mb-4 uppercase tracking-wide">
                  Quick Actions
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {quickActions.map((action) => (
                    <Link
                      key={action.name}
                      to={action.href}
                      onClick={onClose}
                      className="flex flex-col items-center p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors group"
                    >
                      <div className={`w-8 h-8 ${action.color} rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform`}>
                        <action.icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-xs font-medium text-gray-700 text-center">
                        {action.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Navigation Sections */}
            <div className="p-6 space-y-6">
              {filteredSections.map((section) => (
                <div key={section.id} className="space-y-2">
                  <button
                    onClick={() => toggleSection(section.id)}
                    className="flex items-center justify-between w-full p-3 text-left text-gray-700 hover:bg-gray-50 rounded-lg transition-colors group"
                  >
                    <div className="flex items-center space-x-3">
                      <section.icon className="w-5 h-5 text-gray-500 group-hover:text-blue-600 transition-colors" />
                      <span className="font-medium">{section.title}</span>
                    </div>
                    <ChevronRight 
                      className={`w-4 h-4 text-gray-400 transition-transform ${
                        isSectionExpanded(section.id) ? 'rotate-90' : ''
                      }`} 
                    />
                  </button>

                  <AnimatePresence>
                    {isSectionExpanded(section.id) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="ml-8 space-y-1">
                          {section.links.map((link) => (
                            <Link
                              key={link.href}
                              to={link.href}
                              onClick={onClose}
                              className={`flex items-start space-x-3 p-3 rounded-lg transition-colors group ${
                                isLinkActive(link.href)
                                  ? 'bg-blue-50 text-blue-700 border-l-2 border-blue-500'
                                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                              }`}
                            >
                              <link.icon className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                                isLinkActive(link.href)
                                  ? 'text-blue-600'
                                  : 'text-gray-400 group-hover:text-gray-600'
                              }`} />
                              <div className="flex-1 min-w-0">
                                <div className={`font-medium ${
                                  isLinkActive(link.href)
                                    ? 'text-blue-700'
                                    : 'text-gray-700'
                                }`}>
                                  {link.name}
                                </div>
                                <div className="text-xs text-gray-500 mt-1 line-clamp-2">
                                  {link.description}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="sticky bottom-0 bg-gray-50 border-t border-gray-200 p-6">
              <div className="text-center space-y-3">
                <div className="flex justify-center space-x-4">
                  <a
                    href="mailto:contact@ziontechgroup.com"
                    className="p-2 text-gray-500 hover:text-blue-600 transition-colors"
                    aria-label="Email"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                  <a
                    href="tel:+15551234567"
                    className="p-2 text-gray-500 hover:text-blue-600 transition-colors"
                    aria-label="Phone"
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                  <a
                    href="https://maps.google.com/?q=123+Tech+Street+Innovation+City"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-gray-500 hover:text-blue-600 transition-colors"
                    aria-label="Address"
                  >
                    <MapPin className="w-4 h-4" />
                  </a>
                </div>
                <p className="text-xs text-gray-500">
                  © {new Date().getFullYear()} Zion Tech Group
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
>>>>>>> cursor/add-new-services-and-advertise-them-650b
