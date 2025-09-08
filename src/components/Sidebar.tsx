import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence    } from 'framer-motion';
import { Link, useLocation    } from 'react-router-dom';
import { X, 
  Home, 
  Briefcase, 
  Users, 
  Phone, 
  Mail, 
  MapPin, 
  Globe, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Instagram, 
  Shield, 
  Handshake, 
  ChevronDown, 
  ChevronRight, 
  Brain, 
  Cpu, 
  Database, 
  Network, 
  Code, 
  Palette, 
  Target, 
  Rocket, 
  Eye, 
  DollarSign, 
  ShoppingCart, 
  Clock, 
  Cloud, 
  Search, 
  Building, 
  Zap, 
  Heart, 
  Lightbulb, 
  TrendingUp, 
  BarChart3, 
  Lock, 
  AlertTriangle, 
  Server, 
  CheckCircle, 
  Truck, 
  Car, 
  TestTube, 
  PenTool, 
  Building2, 
  Atom, 
  FileText, 
  Quote, 
  Newspaper, 
  Calendar, 
  Video, 
  HelpCircle, 
  LifeBuoy, 
  Store, 
  PieChart, 
  Share2, 
  Monitor, 
  Smartphone,
  Github, 
  Youtube,
  GraduationCap,
  Activity,
  DollarSign as DollarSignIcon
   } from 'lucide-react';
import { cn    } from '@/lib/utils';

interface SidebarProps extends React.PropsWithChildren<{}> {

  isOpen: anyboolean;
  onClose: ()    => void;
  className?: string;

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

export const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<string[]>(['services']);
  const location = useLocation();

  // Close sidebar when location changes
  React.useEffect(() => {
    onClose();
  }, [location.pathname, onClose]);

  const toggleSection = (sectionTitle: string)    => {
    setExpandedSections(prev => 
      prev.includes(sectionTitle) 
        ? prev.filter(title => title !== sectionTitle)
        : [...prev, sectionTitle]
    );
  };

  const navigationItems = [
    {
      title: 'Main Navigation',
      icon: Home,
      items: [
        { name: 'Home', href: '/', icon: Home },
        { name: 'About', href: '/about', icon: Users },
        { name: 'Services', href: '/services', icon: Zap },
        { name: 'Contact', href: '/contact', icon: MessageCircle },
        { name: 'Blog', href: '/blog', icon: BookOpen },
        { name: 'Careers', href: '/careers', icon: Briefcase },
        { name: 'Partners', href: '/partners', icon: Users },
        { name: 'Case Studies', href: '/case-studies', icon: FileText },
        { name: 'Help Center', href: '/help', icon: HelpCircle }
      ]
    },
    {
      title: 'Featured Services',
      featured: true,
      items: [
        { name: 'AI Solutions Hub', href: '/ai-solutions', icon: Brain, featured: true },
        { name: 'Quantum Computing', href: '/services/quantum-computing', icon: Atom, featured: true },
        { name: 'AI Cybersecurity Platform', href: '/services/ai-cybersecurity-platform', icon: Shield },
        { name: 'IoT Edge Computing', href: '/services/iot-edge-computing', icon: Network },
        { name: 'AI Content Creation', href: '/services/ai-content-creation', icon: PenTool },
        { name: 'AI HR Platform', href: '/services/ai-hr-platform', icon: Users },
        { name: 'AI Predictive Maintenance', href: '/services/ai-predictive-maintenance', icon: TrendingUp },
        { name: 'Quantum Machine Learning', href: '/services/quantum-machine-learning', icon: Brain }
      ]
    },
      ]
    },
    {
      title: 'AI & Machine Learning',
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
        { name: 'AI Cybersecurity Platform', href: '/services/ai-cybersecurity-platform', icon: Shield },
        { name: 'Security Headers & CSP', href: '/services/security-headers-csp', icon: Lock },
        { name: 'DSR Privacy Portal', href: '/services/dsr-portal', icon: Shield },
        { name: 'Zero Trust Network Access', href: '/services/zero-trust-network-access', icon: Lock },
        { name: 'AI Compliance Assistant', href: '/services/ai-compliance-assistant', icon: Shield }
      ]
      ]
    },
    {
      title: 'Digital Transformation',
      icon: Zap,
      items: [
        { name: 'Data Analytics', href: '/services/data-analytics', icon: BarChart3 },
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', icon: TrendingUp },
        { name: 'Website Analytics', href: '/services/website-analytics', icon: BarChart3 },
        { name: 'AI Financial Analytics', href: '/services/ai-financial-analytics', icon: DollarSign },
        { name: 'AI Healthcare Analytics', href: '/services/ai-healthcare-analytics', icon: Heart },
        { name: 'Digital Twin', href: '/services/digital-twin', icon: Eye },
        { name: 'Digital Transformation', href: '/services/digital-transformation', icon: Zap },
        { name: 'IT Consulting', href: '/it-consulting', icon: Cpu },
        { name: 'Enterprise Solutions', href: '/solutions/enterprise', icon: Building }
      ]
      ]
    },
    {
      title: 'Emerging Technologies',
      icon: Atom,
      items: [
        { name: 'Quantum Computing', href: '/services/quantum-computing', icon: Atom },
        { name: 'IoT Edge Computing', href: '/services/iot-edge-computing', icon: Network },
        { name: 'AI Healthcare Platform', href: '/services/ai-healthcare-platform', icon: Heart },
        { name: 'AI Autonomous Research', href: '/services/ai-autonomous-research-assistant', icon: Brain },
        { name: 'AI Quantum Hybrid Platform', href: '/services/ai-quantum-hybrid-platform', icon: Atom },
        { name: 'Digital Twin', href: '/services/digital-twin', icon: Eye },
        { name: 'Space Technology', href: '/space-tech', icon: Satellite }
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
      ]
    },
    {
      title: 'Innovative Services',
      icon: Rocket,
      items: [
        { name: 'Micro SaaS Products', path: '/services/micro-saas', icon: ShoppingCart, description: 'AI automations with transparent pricing' },
        { name: 'Innovative Services 2025', path: '/services/innovative-2025', icon: Rocket, description: 'Cutting-edge solutions' },
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
      title: 'Comp & Team',
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
    <div className="fixed inset-0 z-50 lg:hidden">
            className="p-2 hover:bg-gray-100 rounded-lg"
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50"
        onClick={onClose}
        onKeyDown={(e) => e.key === 'Escape' && onClose()}
        role="button"
        tabIndex={0}
        aria-label="Close sidebar"
      />
      
      {/* Sidebar */}
      <div className="fixed top-0 right-0 h-full w-64 bg-gray-900 shadow-xl">
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h2 className="text-white font-semibold">Menu</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <nav className="p-4">
          <div className="space-y-2">
            <a href="/" className="block text-gray-300 hover:text-white py-2">Home</a>
            <a href="/about" className="block text-gray-300 hover:text-white py-2">About</a>
            <a href="/services" className="block text-gray-300 hover:text-white py-2">Services</a>
            <a href="/pricing" className="block text-gray-300 hover:text-white py-2">Pricing</a>
            <a href="/contact" className="block text-gray-300 hover:text-white py-2">Contact</a>
          </div>
        </nav>
      </div>
    </div>
  )
};

      {/* Mobile Sidebar */}
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
        </React.Fragment>
      )}
    </AnimatePresence>
  )}
