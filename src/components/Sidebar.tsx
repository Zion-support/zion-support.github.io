import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { 
  X, 
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
  Settings,
  MessageSquare,
  BookOpen,
  Star,
  Leaf,
  Key,
  ShieldCheck,
  Bug,
  Activity,
  LineChart,
  Map,
  Wifi,
  Satellite,
  Microscope,
  Plane,
  Ship,
  Factory,
  Bot,
  QrCode,
  Wallet,
  Coins,
  Sun,
  Wind,
  Cookie,
  Info,
  Layers,
  ZapIcon,
  CpuIcon
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

export function Sidebar({ isOpen, onClose, className }: SidebarProps) {
  const location = useLocation();
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  // Close sidebar when location changes
  React.useEffect(() => {
    onClose();
  }, [location.pathname, onClose]);

  const toggleSection = (sectionTitle: string) => {
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
        { name: 'Home', path: '/', icon: Home, description: 'Welcome to Zion Tech Group' },
        { name: 'Services Overview', path: '/services', icon: Briefcase, description: 'All our services' },
        { name: 'Solutions', path: '/solutions/enterprise', icon: Target, description: 'Industry solutions' },
        { name: 'Pricing', path: '/pricing', icon: Star, description: 'Service pricing' },
        { name: 'About', path: '/about', icon: Users, description: 'About our company' },
        { name: 'Contact', path: '/contact', icon: Phone, description: 'Get in touch' }
      ]
    },
    {
      title: 'AI & Autonomous Systems',
      icon: Brain,
      items: [
        { name: 'AI Autonomous Systems', path: '/services/ai-autonomous-systems', icon: Brain, description: 'Advanced AI solutions' },
        { name: 'AI Research Assistant', path: '/ai-autonomous-research-assistant', icon: Brain, description: 'AI-powered research' },
        { name: 'AI Business Manager', path: '/ai-autonomous-business-manager', icon: Brain, description: 'Autonomous business management' },
        { name: 'AI Business Platform', path: '/ai-autonomous-business-platform', icon: Brain, description: 'Complete business platform' },
        { name: 'AI Code Review', path: '/ai-autonomous-code-review', icon: Code, description: 'Automated code review' },
        { name: 'AI Creative Director', path: '/ai-autonomous-creative-director', icon: Palette, description: 'AI creative solutions' },
        { name: 'AI Data Management', path: '/ai-autonomous-data', icon: Database, description: 'Intelligent data handling' },
        { name: 'AI Decision Engine', path: '/ai-autonomous-decision-engine', icon: Brain, description: 'Smart decision making' },
        { name: 'AI DevOps', path: '/ai-autonomous-devops', icon: Server, description: 'Automated DevOps' },
        { name: 'AI Education', path: '/ai-autonomous-education-professor', icon: BookOpen, description: 'AI learning systems' },
        { name: 'AI Healthcare', path: '/ai-autonomous-healthcare-physician', icon: Users, description: 'Medical AI solutions' },
        { name: 'AI Learning System', path: '/ai-autonomous-learning-system', icon: Lightbulb, description: 'Adaptive learning' },
        { name: 'AI Legal Counsel', path: '/ai-autonomous-legal-counsel', icon: Shield, description: 'Legal AI assistance' },
        { name: 'AI Logistics', path: '/ai-autonomous-logistics', icon: Network, description: 'Smart logistics' },
        { name: 'AI Manufacturing', path: '/ai-autonomous-manufacturing', icon: Settings, description: 'Smart manufacturing' },
        { name: 'AI Research', path: '/ai-autonomous-research', icon: Brain, description: 'Research automation' },
        { name: 'AI Robotics', path: '/ai-autonomous-robotics', icon: Cpu, description: 'Autonomous robotics' },
        { name: 'AI Security', path: '/ai-autonomous-security', icon: Shield, description: 'Intelligent security' },
        { name: 'AI Testing', path: '/ai-autonomous-testing', icon: Code, description: 'Automated testing' },
        { name: 'AI Vehicles', path: '/ai-autonomous-vehicle', icon: Rocket, description: 'Autonomous vehicles' },
        { name: 'AI Venture Capital', path: '/ai-autonomous-venture-capitalist', icon: TrendingUp, description: 'AI investment' }
      ]
    },
    {
      title: 'Core Services',
      icon: Zap,
      items: [
        { name: 'Quantum Neural Networks', path: '/quantum-neural-network-platform', icon: Zap, description: 'Quantum computing' },
        { name: 'Autonomous Business Operations', path: '/autonomous-business-operations-platform', icon: Rocket, description: 'Business automation' },
        { name: 'AI Asset Management', path: '/ai-powered-it-asset-management', icon: Database, description: 'IT asset management' },
        { name: 'Cybersecurity', path: '/services/cybersecurity', icon: Shield, description: 'Security solutions' },
        { name: 'SOC2 Compliance', path: '/soc2-compliance-automation', icon: Shield, description: 'Compliance automation' },
        { name: 'Quantum Technology', path: '/services/quantum-technology', icon: Zap, description: 'Quantum solutions' },
        { name: 'IT Infrastructure', path: '/services/it-infrastructure', icon: Server, description: 'Infrastructure services' },
        { name: '5G Enterprise Solutions', path: '/5g-enterprise-solutions', icon: Network, description: '5G technology' },
        { name: 'Micro SAAS Solutions', path: '/services/micro-saas-solutions', icon: Globe, description: 'SAAS platforms' },
        { name: 'Cloud & DevOps', path: '/cloud-devops', icon: Cloud, description: 'Cloud solutions' },
        { name: 'AI Workflow Automation', path: '/ai-workflow-automation', icon: Zap, description: 'Workflow optimization' },
        { name: 'Blockchain Solutions', path: '/blockchain-enterprise-solutions', icon: Lock, description: 'Blockchain technology' },
        { name: 'IoT Data Analytics', path: '/iot-data-analytics', icon: Database, description: 'IoT solutions' },
        { name: 'Digital Transformation', path: '/digital-transformation', icon: Globe, description: 'Digital strategy' },
        { name: 'Industry Solutions', path: '/services/industry-solutions', icon: Briefcase, description: 'Industry-specific' }
      ]
    },
    {
      title: 'Industry Solutions',
      icon: Building,
      items: [
        { name: 'Enterprise Solutions', path: '/solutions/enterprise', icon: Building, description: 'Large-scale solutions' },
        { name: 'Healthcare Solutions', path: '/solutions/healthcare', icon: Users, description: 'Medical technology' },
        { name: 'Financial Solutions', path: '/solutions/financial', icon: Briefcase, description: 'Fintech solutions' },
        { name: 'Manufacturing Solutions', path: '/solutions/manufacturing', icon: Briefcase, description: 'Smart manufacturing' },
        { name: 'Retail Solutions', path: '/solutions/retail', icon: Briefcase, description: 'Digital retail' },
        { name: 'Government Solutions', path: '/solutions/government', icon: Shield, description: 'Public sector tech' },
        { name: 'Digital Transformation', path: '/digital-transformation', icon: Rocket, description: 'Business modernization' },
        { name: 'Business Intelligence', path: '/services#business-intelligence', icon: Lightbulb, description: 'Data insights' }
      ]
    },
    {
      title: 'Company & Resources',
      icon: Users,
      items: [
        { name: 'About Us', path: '/about', icon: Users, description: 'Our story' },
        { name: 'Our Team', path: '/team', icon: Users, description: 'Meet the team' },
        { name: 'Partners', path: '/partners', icon: Handshake, description: 'Partnerships' },
        { name: 'Case Studies', path: '/case-studies', icon: FileText, description: 'Success stories' },
        { name: 'News & Updates', path: '/news', icon: Globe, description: 'Latest news' },
        { name: 'Blog', path: '/blog', icon: BookOpen, description: 'Insights & articles' },
        { name: 'Events', path: '/events', icon: Calendar, description: 'Upcoming events' },
        { name: 'Webinars', path: '/webinars', icon: Globe, description: 'Educational content' },
        { name: 'White Papers', path: '/white-papers', icon: FileText, description: 'Research papers' },
        { name: 'Testimonials', path: '/testimonials', icon: Star, description: 'Client feedback' }
      ]
    },
    {
      title: 'Support & Help',
      icon: HelpCircle,
      items: [
        { name: 'Help Center', path: '/help', icon: HelpCircle, description: 'Get help' },
        { name: 'Documentation', path: '/docs', icon: BookOpen, description: 'Technical docs' },
        { name: 'Contact Support', path: '/support', icon: Phone, description: 'Support team' },
        { name: 'FAQ', path: '/faq', icon: HelpCircle, description: 'Frequently asked' },
        { name: 'Pricing', path: '/pricing', icon: Star, description: 'Service costs' },
        { name: 'Status Page', path: '/status', icon: Settings, description: 'System status' }
      ]
    }
  ];

  const contactInfo = [
    { icon: Phone, text: '+1 (302) 464-0950', href: 'tel:+13024640950' },
    { icon: Mail, text: 'kleber@ziontechgroup.com', href: 'mailto:kleber@ziontechgroup.com' },
    { icon: MapPin, text: '364 E Main St STE 1008, Middletown DE 19709', href: '#' }
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/company/ziontechgroup', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/ziontechgroup', label: 'Twitter' },
    { icon: Facebook, href: 'https://www.facebook.com/ziontechgroup', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/ziontechgroup', label: 'Instagram' },
    { icon: Github, href: 'https://github.com/ziontechgroup', label: 'GitHub' },
    { icon: Youtube, href: 'https://www.youtube.com/@ziontechgroup', label: 'YouTube' }
  ];

  const sidebarVariants = {
    closed: {
      x: '-100%',
      transition: {
        type: 'spring' as const,
        stiffness: 300,
        damping: 30
      }
    },
    open: {
      x: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 300,
        damping: 30
      }
    }
  };

  const overlayVariants = {
    closed: { opacity: 0 },
    open: { opacity: 1 }
  };

  return (
    <>
      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            className={cn(
              "fixed left-0 top-0 z-50 h-full w-80 bg-futuristic border-r border-zion-cyan/20 shadow-2xl overflow-y-auto",
              className
            )}
            variants={sidebarVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-zion-cyan/20">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-zion-cyan via-zion-purple to-zion-blue rounded-xl flex items-center justify-center">
                  <span className="text-xl font-bold text-white">Z</span>
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white">ZION TECH GROUP</h2>
                  <p className="text-xs text-zion-slate-light">Navigation</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Navigation */}
            <nav className="p-4 space-y-2">
              {navigationItems.map((section) => (
                <div key={section.title} className="space-y-2">
                  <button
                    onClick={() => toggleSection(section.title)}
                    className="flex items-center justify-between w-full p-3 text-left text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-colors group"
                  >
                    <div className="flex items-center space-x-3">
                      <section.icon className="w-5 h-5 text-zion-cyan" />
                      <span className="font-medium">{section.title}</span>
                    </div>
                    {expandedSections.includes(section.title) ? (
                      <ChevronDown className="w-4 h-4 text-zion-cyan transition-transform" />
                    ) : (
                      <ChevronRight className="w-4 h-4 text-zion-slate-light group-hover:text-zion-cyan transition-transform" />
                    )}
                  </button>
                  
                  <AnimatePresence>
                    {expandedSections.includes(section.title) && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="ml-8 space-y-1"
                      >
                        {section.items.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            className={cn(
                              "flex items-center space-x-3 p-3 text-sm text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-colors group",
                              location.pathname === item.path && "text-zion-cyan bg-zion-cyan/10"
                            )}
                          >
                            <item.icon className="w-4 h-4 text-zion-slate-light group-hover:text-zion-cyan" />
                            <div className="flex-1">
                              <div className="font-medium">{item.name}</div>
                              {item.description && (
                                <div className="text-xs text-zion-slate-light/70 mt-1">
                                  {item.description}
                                </div>
                              )}
                            </div>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* Contact Information */}
            <div className="p-4 border-t border-zion-cyan/20 mt-6">
              <h3 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                <Phone className="w-4 h-4 text-zion-cyan" />
                Contact Info
              </h3>
              <div className="space-y-2">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    className="flex items-center space-x-3 p-2 text-sm text-zion-slate-light hover:text-zion-cyan transition-colors"
                  >
                    <contact.icon className="w-4 h-4 text-zion-cyan" />
                    <span className="text-xs">{contact.text}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="p-4 border-t border-zion-cyan/20">
              <h3 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                <Globe className="w-4 h-4 text-zion-cyan" />
                Follow Us
              </h3>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-all duration-300 hover:scale-110"
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-zion-cyan/20 mt-auto">
              <div className="text-center text-xs text-zion-slate-light">
                <p>&copy; 2025 Zion Tech Group</p>
                <p className="mt-1">Innovation • Intelligence • Impact</p>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
