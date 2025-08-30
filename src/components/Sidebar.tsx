import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  Home, 
  Zap, 
  Brain, 
  Shield, 
  Users, 
  HardDrive, 
  TrendingUp, 
  Building2, 
  FileText, 
  HelpCircle, 
  BarChart3,
  Globe,
  Cpu,
  Database,
  Lock,
  Cloud,
  Rocket,
  Code,
  Server,
  Chip,
  Wifi,
  ShieldCheck,
  Bot,
  Workflow,
  Eye,
  Sparkles,
  Atom,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  MessageCircle,
  Search,
  BarChart,
  Users2,
  Settings,
  Palette,
  Target,
  Handshake,
  Lightbulb,
  Network,
  Smartphone,
  Star,
  CheckCircle,
  ArrowRight,
  Play,
  ChevronLeft,
  ChevronRight,
  Menu,
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  Github
} from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

interface NavigationItem {
  name: string;
  href: string;
  icon: React.ComponentType<any>;
  description?: string;
  badge?: string;
  children?: NavigationItem[];
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const location = useLocation();
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden'; // Prevent body scroll
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Close sidebar on route change
  useEffect(() => {
    onClose();
  }, [location.pathname, onClose]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const navigationItems: NavigationItem[] = [
    {
      name: 'Home',
      href: '/',
      icon: Home,
      description: 'Welcome to Zion Tech Group'
    },
    {
      name: 'Services',
      href: '/services',
      icon: Zap,
      description: 'Our comprehensive service offerings',
      children: [
        { name: 'AI Services', href: '/ai-services', icon: Brain, description: 'Artificial Intelligence Solutions' },
        { name: 'Cybersecurity', href: '/services/ai-cybersecurity-platform', icon: Shield, description: 'Security & Protection' },
        { name: 'Cloud & DevOps', href: '/services/cloud-devops', icon: Cloud, description: 'Cloud Infrastructure' },
        { name: 'IT Services', href: '/it-services', icon: Server, description: 'IT Infrastructure & Support' },
        { name: 'Micro SAAS', href: '/micro-saas', icon: Building2, description: 'Software as a Service' }
      ]
    },
    {
      name: 'Solutions',
      href: '/solutions',
      icon: Brain,
      description: 'Industry-specific solutions',
      children: [
        { name: 'Enterprise', href: '/solutions', icon: Building2, description: 'Large-scale business solutions' },
        { name: 'Startups', href: '/startup-solutions', icon: Rocket, description: 'Startup-focused solutions' },
        { name: 'Healthcare', href: '/services/ai-healthcare-platform', icon: Activity, description: 'Healthcare technology' },
        { name: 'Finance', href: '/solutions', icon: Coins, description: 'Financial technology solutions' }
      ]
    },
    {
      name: 'About',
      href: '/about',
      icon: Users,
      description: 'Learn about our company'
    },
    {
      name: 'Contact',
      href: '/contact',
      icon: MessageCircle,
      description: 'Get in touch with us'
    },
    {
      name: 'Resources',
      href: '/resources',
      icon: FileText,
      description: 'Knowledge and insights',
      children: [
        { name: 'Case Studies', href: '/case-studies', icon: BarChart3, description: 'Success stories' },
        { name: 'White Papers', href: '/white-papers', icon: FileText, description: 'Industry insights' },
        { name: 'Webinars', href: '/webinars', icon: Play, description: 'Educational content' },
        { name: 'Blog', href: '/news', icon: FileText, description: 'Latest updates' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'LinkedIn', href: 'https://linkedin.com/company/ziontechgroup', icon: Linkedin, color: 'hover:text-blue-400' },
    { name: 'Twitter', href: 'https://twitter.com/ziontechgroup', icon: Twitter, color: 'hover:text-blue-400' },
    { name: 'Facebook', href: 'https://facebook.com/ziontechgroup', icon: Facebook, color: 'hover:text-blue-600' },
    { name: 'Instagram', href: 'https://instagram.com/ziontechgroup', icon: Instagram, color: 'hover:text-pink-400' },
    { name: 'YouTube', href: 'https://youtube.com/ziontechgroup', icon: Youtube, color: 'hover:text-red-400' },
    { name: 'GitHub', href: 'https://github.com/ziontechgroup', icon: Github, color: 'hover:text-gray-400' }
  ];

  const contactInfo = [
    { icon: Phone, text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: Mail, text: 'info@ziontechgroup.com', href: 'mailto:info@ziontechgroup.com' },
    { icon: MapPin, text: 'San Francisco, CA', href: '#' }
  ];

  const renderNavigationItem = (item: NavigationItem, isChild = false) => {
    const isActive = location.pathname === item.href;
    const Icon = item.icon;

    return (
      <div key={item.href} className="space-y-1">
        <Link
          to={item.href}
          className={`group flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-200 ${
            isActive
              ? 'bg-zion-cyan/20 text-zion-cyan border border-zion-cyan/30'
              : 'text-zion-slate-light hover:text-zion-cyan hover:bg-zion-blue/20'
          } ${isChild ? 'ml-4' : ''}`}
          onClick={onClose}
        >
          <Icon className={`w-4 h-4 ${isChild ? 'w-3 h-3' : 'w-4 h-4'}`} />
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <span className={`font-medium ${isChild ? 'text-sm' : 'text-base'}`}>
                {item.name}
              </span>
              {item.badge && (
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-zion-cyan/20 text-zion-cyan">
                  {item.badge}
                </span>
              )}
            </div>
            {item.description && (
              <p className={`text-xs text-zion-slate-light truncate ${isChild ? 'hidden' : ''}`}>
                {item.description}
              </p>
            )}
          </div>
          {item.children && (
            <ChevronRight className="w-4 h-4 text-zion-slate-light group-hover:text-zion-cyan transition-colors" />
          )}
        </Link>
        
        {/* Render children if they exist */}
        {item.children && (
          <div className="ml-4 space-y-1">
            {item.children.map(child => renderNavigationItem(child, true))}
          </div>
        )}
      </div>
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={onClose}
          />

          {/* Sidebar */}
          <motion.div
            ref={sidebarRef}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-80 max-w-[85vw] bg-zion-blue-dark border-l border-zion-purple/30 shadow-2xl shadow-zion-purple/20 z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-zion-purple/20 bg-zion-blue-darker">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white">Zion Tech Group</h2>
                  <p className="text-xs text-zion-slate-light">Innovation Group</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-blue/20 rounded-lg transition-colors"
                aria-label="Close sidebar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation */}
            <div className="flex-1 overflow-y-auto">
              <nav className="p-4 space-y-2">
                {navigationItems.map(item => renderNavigationItem(item))}
              </nav>

              {/* Contact Information */}
              <div className="p-4 border-t border-zion-purple/20">
                <h3 className="text-zion-cyan font-medium mb-3 flex items-center">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Contact Us
                </h3>
                <div className="space-y-2">
                  {contactInfo.map((contact, index) => (
                    <a
                      key={index}
                      href={contact.href}
                      className="flex items-center space-x-3 text-sm text-zion-slate-light hover:text-zion-cyan transition-colors"
                    >
                      <contact.icon className="w-4 h-4" />
                      <span>{contact.text}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="p-4 border-t border-zion-purple/20">
                <h3 className="text-zion-cyan font-medium mb-3 flex items-center">
                  <Globe className="w-4 h-4 mr-2" />
                  Follow Us
                </h3>
                <div className="grid grid-cols-3 gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex flex-col items-center space-y-1 p-3 rounded-lg bg-zion-blue/20 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-blue/30 transition-all duration-200 ${social.color}`}
                      aria-label={`Follow us on ${social.name}`}
                    >
                      <social.icon className="w-5 h-5" />
                      <span className="text-xs">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="p-4 border-t border-zion-purple/20">
                <h3 className="text-zion-cyan font-medium mb-3 flex items-center">
                  <Rocket className="w-4 h-4 mr-2" />
                  Quick Actions
                </h3>
                <div className="space-y-2">
                  <Link
                    to="/request-quote"
                    className="flex items-center justify-center space-x-2 w-full px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg hover:from-zion-cyan-dark hover:to-zion-purple-dark transition-all duration-200 font-medium"
                    onClick={onClose}
                  >
                    <Target className="w-4 h-4" />
                    <span>Get Quote</span>
                  </Link>
                  <Link
                    to="/contact"
                    className="flex items-center justify-center space-x-2 w-full px-4 py-2 border border-zion-cyan/30 text-zion-cyan rounded-lg hover:bg-zion-cyan/10 transition-all duration-200 font-medium"
                    onClick={onClose}
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Contact Sales</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-zion-purple/20 bg-zion-blue-darker">
              <div className="text-center">
                <p className="text-xs text-zion-slate-light">
                  © {new Date().getFullYear()} Zion Tech Group. All rights reserved.
                </p>
                <div className="flex items-center justify-center space-x-4 mt-2">
                  <Link to="/privacy" className="text-xs text-zion-slate-light hover:text-zion-cyan transition-colors">
                    Privacy
                  </Link>
                  <Link to="/terms" className="text-xs text-zion-slate-light hover:text-zion-cyan transition-colors">
                    Terms
                  </Link>
                  <Link to="/cookies" className="text-xs text-zion-slate-light hover:text-zion-cyan transition-colors">
                    Cookies
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
