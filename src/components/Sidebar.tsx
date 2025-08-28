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
  ChevronRight,
  Briefcase,
  Phone,
  Database,
  BarChart3,
  Monitor,
  Building,
  FileText,
  TestTube,
  Lock,
  Palette,
  Code,
  Heart,
  Globe2,
  Leaf,
  Gamepad2,
  GraduationCap,
  Microscope,
  Satellite,
  Wrench,
  Settings,
  Lightbulb,
  Network,
  Server,
  Smartphone,
  Camera,
  Music,
  Video,
  Search,
  PieChart,
  Activity,
  AlertTriangle,
  CheckCircle,
  Clock,
  Calendar,
  Mail,
  MapPin,
  Handshake
} from 'lucide-react';

interface SidebarItem {
  name: string;
  href: string;
  icon: React.ComponentType<any>;
  description?: string;
  featured?: boolean;
}

interface SidebarSection {
  title: string;
  icon: React.ComponentType<any>;
  items: SidebarItem[];
  featured?: boolean;
}

export const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState<string[]>(['main', 'ai-services', 'core-services']);
  const location = useLocation();

  const navigation: SidebarSection[] = [
    {
      title: 'Main Navigation',
      icon: Home,
      items: [
        { name: 'Home', href: '/', icon: Home, description: 'Welcome to Zion Tech Group' },
        { name: 'Services Overview', href: '/services', icon: Briefcase, description: 'All our services' },
        { name: 'Comprehensive Services Showcase', href: '/comprehensive-services-showcase-2030', icon: Star, description: 'Complete service portfolio', featured: true },
        { name: 'Solutions', href: '/solutions', icon: Rocket, description: 'Industry solutions' },
        { name: 'Micro SaaS Products', href: '/services/micro-saas', icon: ShoppingCart, description: 'Specialized software solutions' },
        { name: 'About Us', href: '/about', icon: Users, description: 'Learn about our company' },
        { name: 'Contact', href: '/contact', icon: Phone, description: 'Get in touch with us' }
      ]
    },
    {
      title: 'AI & Autonomous Operations',
      icon: Brain,
      featured: true,
      items: [
        { name: 'AI Autonomous Business Operations', href: '/services/ai-autonomous-business-operations-platform', icon: Brain, description: 'Revolutionary AI platform for autonomous business management', featured: true },
        { name: 'AI Content Creation Studio', href: '/services/ai-content-creation-studio', icon: Palette, description: 'Comprehensive AI-powered content generation' },
        { name: 'AI Sales Intelligence', href: '/services/ai-sales-intelligence-platform', icon: TrendingUp, description: 'Advanced sales intelligence with predictive analytics' },
        { name: 'AI Customer Support', href: '/services/ai-customer-support-automation', icon: MessageCircle, description: 'Intelligent customer support automation' },
        { name: 'AI Data Analytics & BI', href: '/services/ai-data-analytics-bi', icon: BarChart3, description: 'Advanced business intelligence platform' },
        { name: 'AI Research Assistant', href: '/services/ai-autonomous-research-assistant', icon: Microscope, description: 'Autonomous research platform' },
        { name: 'AI Legal Tech Platform', href: '/services/ai-legal-tech-platform', icon: Shield, description: 'Legal technology automation' },
        { name: 'AI Healthcare Diagnostics', href: '/services/ai-healthcare-diagnostics-platform', icon: Heart, description: 'Medical AI diagnostics platform' },
        { name: 'AI Education Platform', href: '/services/ai-education-platform', icon: GraduationCap, description: 'Personalized learning platform' },
        { name: 'AI Entertainment Platform', href: '/services/ai-entertainment-platform', icon: Gamepad2, description: 'AI-generated content platform' },
        { name: 'AI Metaverse Platform', href: '/services/ai-metaverse-platform', icon: Globe2, description: 'Virtual reality and metaverse solutions' },
        { name: 'AI Space Technology', href: '/services/ai-space-technology-platform', icon: Satellite, description: 'Space exploration and satellite management' },
        { name: 'AI Green Technology', href: '/services/ai-green-technology-platform', icon: Leaf, description: 'Sustainable technology solutions' },
        { name: 'AI Development Platform', href: '/services/ai-development-platform', icon: Code, description: 'AI-powered code generation' }
      ]
    },
    {
      title: 'Quantum & Advanced Tech',
      icon: Atom,
      featured: true,
      items: [
        { name: 'Quantum AI Cybersecurity', href: '/services/quantum-ai-cybersecurity-platform', icon: Lock, description: 'Next-generation cybersecurity with quantum computing', featured: true },
        { name: 'Quantum Computing Solutions', href: '/services/quantum-computing', icon: Atom, description: 'Advanced quantum computing services' },
        { name: 'Blockchain Web3 Platform', href: '/services/blockchain-web3-platform', icon: Network, description: 'Advanced blockchain with Web3 capabilities' },
        { name: 'IoT Edge Computing Platform', href: '/services/iot-edge-computing-platform', icon: Server, description: 'Advanced IoT with edge computing' },
        { name: 'Digital Twin Platform', href: '/services/digital-twin-platform', icon: Cpu, description: 'Virtual replicas and simulation platform' }
      ]
    },
    {
      title: 'Core IT Services',
      icon: Settings,
      items: [
        { name: 'Cloud Infrastructure & DevOps', href: '/services/cloud-infrastructure-devops', icon: Cloud, description: 'Comprehensive cloud management solutions' },
        { name: 'Cybersecurity Solutions', href: '/services/cybersecurity', icon: Shield, description: 'AI-Powered Security & Compliance' },
        { name: 'IT Infrastructure', href: '/services/it-infrastructure', icon: Building, description: 'Enterprise infrastructure solutions' },
        { name: 'Data Analytics & BI', href: '/services/data-analytics', icon: PieChart, description: 'Transform data into insights' },
        { name: 'Digital Transformation', href: '/services/digital-transformation', icon: Workflow, description: 'Business process optimization' }
      ]
    },
    {
      title: 'Industry Solutions',
      icon: Target,
      items: [
        { name: 'Healthcare Solutions', href: '/solutions/healthcare', icon: Heart, description: 'AI-powered healthcare technology' },
        { name: 'Financial Solutions', href: '/financial-solutions', icon: DollarSign, description: 'FinTech and financial services' },
        { name: 'Manufacturing Solutions', href: '/manufacturing-solutions', icon: Wrench, description: 'Smart manufacturing and Industry 4.0' },
        { name: 'Government Solutions', href: '/solutions/government', icon: Building, description: 'Public sector technology solutions' },
        { name: 'Enterprise Solutions', href: '/solutions/enterprise', icon: Briefcase, description: 'Large-scale enterprise solutions' }
      ]
    },
    {
      title: 'Resources & Support',
      icon: BookOpen,
      items: [
        { name: 'Help Center', href: '/help', icon: HelpCircle, description: 'Support and documentation' },
        { name: 'Blog & Insights', href: '/blog', icon: FileText, description: 'Latest insights and news' },
        { name: 'Research & Development', href: '/research-development', icon: TestTube, description: 'R&D projects and innovations' },
        { name: 'Training & Certification', href: '/training', icon: GraduationCap, description: 'Professional development programs' },
        { name: 'Case Studies', href: '/case-studies', icon: Lightbulb, description: 'Success stories and implementations' }
      ]
    },
    {
      title: 'Company & Team',
      icon: Users,
      items: [
        { name: 'About Us', href: '/about', icon: Users, description: 'Our story and mission' },
        { name: 'Leadership Team', href: '/leadership', icon: Star, description: 'Meet our leadership' },
        { name: 'Careers', href: '/careers', icon: Briefcase, description: 'Join our team' },
        { name: 'Partners', href: '/partners', icon: Handshake, description: 'Strategic partnerships' },
        { name: 'Contact', href: '/contact', icon: Mail, description: 'Get in touch with us' }
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
    const active = isActive(item.href);

    return (
      <Link
        key={item.name}
        to={item.href}
        className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 group ${
          active 
            ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 shadow-lg shadow-cyan-500/20' 
            : 'text-slate-300 hover:text-white hover:bg-slate-700/50 hover:shadow-md'
        } ${item.featured ? 'ring-1 ring-cyan-400/30' : ''}`}
      >
        <item.icon className={`w-4 h-4 mr-3 flex-shrink-0 ${item.featured ? 'text-cyan-400' : ''}`} />
        <span className="flex-1">{item.name}</span>
        {item.featured && (
          <Star className="w-3 h-3 text-cyan-400 ml-2" />
        )}
      </Link>
    );
  };

  const renderSection = (section: SidebarSection) => {
    const isExpanded = expandedSections.includes(section.title.toLowerCase().replace(/\s+/g, '-'));
    const hasFeaturedItems = section.items.some(item => item.featured);

    return (
      <div key={section.title} className="space-y-2">
        <button
          onClick={() => toggleSection(section.title.toLowerCase().replace(/\s+/g, '-'))}
          className={`flex items-center w-full px-3 py-2 text-sm font-semibold rounded-md transition-all duration-200 group ${
            isExpanded 
              ? 'bg-slate-800/50 text-white' 
              : 'text-slate-400 hover:text-white hover:bg-slate-800/30'
          } ${section.featured ? 'text-cyan-300' : ''}`}
        >
          <section.icon className={`w-4 h-4 mr-3 flex-shrink-0 ${section.featured ? 'text-cyan-400' : ''}`} />
          <span className="flex-1 text-left">{section.title}</span>
          {hasFeaturedItems && (
            <Star className="w-3 h-3 text-cyan-400 mr-2" />
          )}
          {isExpanded ? (
            <ChevronDown className="w-4 h-4 ml-auto transition-transform duration-200" />
          ) : (
            <ChevronRight className="w-4 h-4 ml-auto transition-transform duration-200" />
          )}
        </button>
        
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="ml-4 space-y-1"
          >
            {section.items.map(item => renderNavItem(item))}
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
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-slate-800/80 text-slate-300 hover:text-white hover:bg-slate-700/80 transition-colors backdrop-blur-sm"
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
                <Link to="/" className="flex items-center space-x-3 group">
                  <div className="relative">
                    <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <Zap className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <h2 className="text-lg font-semibold text-white">Zion Tech Group</h2>
                </Link>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation */}
              <nav className="flex-1 p-4 space-y-3 overflow-y-auto">
                {navigation.map(section => renderSection(section))}
              </nav>

              {/* Footer */}
              <div className="p-4 border-t border-slate-700/50">
                <div className="text-center space-y-3">
                  <Link
                    to="/contact"
                    className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-cyan-500/20"
                  >
                    Get Started
                  </Link>
                  <div className="text-xs text-slate-400">
                    <p>+1 302 464 0950</p>
                    <p>kleber@ziontechgroup.com</p>
                  </div>
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
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Zion Tech Group
              </h1>
              <p className="text-xs text-slate-400">Innovation & Technology</p>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-3 overflow-y-auto">
          {navigation.map(section => renderSection(section))}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-slate-700/50">
          <div className="text-center space-y-3">
            <Link
              to="/contact"
              className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-cyan-500/20"
            >
              Get Started
            </Link>
            <div className="text-xs text-slate-400 space-y-1">
              <p className="flex items-center justify-center">
                <Phone className="w-3 h-3 mr-1" />
                +1 302 464 0950
              </p>
              <p className="flex items-center justify-center">
                <Mail className="w-3 h-3 mr-1" />
                kleber@ziontechgroup.com
              </p>
              <p className="flex items-center justify-center">
                <MapPin className="w-3 h-3 mr-1" />
                Middletown, DE
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
