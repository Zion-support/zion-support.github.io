import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, ChevronDown,
  Brain, Rocket, Shield, 
  Zap,
  Target, Atom,
  BookOpen,
  Truck, DollarSign, BarChart3, Globe, Users, X, Phone, Mail, MapPin, ArrowRight,
  Star, Sparkles, Cpu, Lock, Cloud, BarChart3 as BarChart3Icon, Settings, Eye, Award, Clock, Heart, Lightbulb,
  Palette, Code, Database, Shield as ShieldIcon, Globe as GlobeIcon, Zap as ZapIcon, Target as TargetIcon
} from 'lucide-react';

interface NavigationItem {
  name: string;
  href: string;
  icon?: React.ReactNode;
  description?: string;
  children?: NavigationItem[];
  badge?: string;
  title?: string;
  color?: string;
  isNew?: boolean;
  isHot?: boolean;
  isPremium?: boolean;
}

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const navigationItems: NavigationItem[] = [
  {
    name: '🚀 All Services',
    href: '/comprehensive-services-showcase-2025',
    icon: <Globe className="w-5 h-5" />,
    description: 'Complete portfolio of all technology services',
    badge: 'Showcase',
    color: 'from-cyan-500 to-blue-600',
    isNew: true,
    children: [
      { name: 'View All Services', href: '/innovative-micro-saas-showcase', description: 'Complete services portfolio' },
      { name: 'Service Categories', href: '/innovative-micro-saas-showcase#categories', description: 'Browse by category' },
      { name: 'Pricing Comparison', href: '/pricing', description: 'Compare service costs' },
      { name: 'Service Search', href: '/innovative-micro-saas-showcase#search', description: 'Find specific services' }
    ]
  },
  {
    name: '🧠 AI & Consciousness',
    href: '/ai-services',
    icon: <Brain className="w-5 h-5" />,
    description: 'Revolutionary AI consciousness and emotional intelligence',
    badge: 'New',
    color: 'from-violet-500 to-purple-600',
    isHot: true,
    children: [
      { name: 'AI Consciousness Evolution Pro', href: '/ai-consciousness-evolution-pro', description: 'Advanced AI consciousness development', isNew: true },
      { name: 'Quantum AI Fusion Platform', href: '/quantum-ai-fusion-platform', description: 'Quantum-AI hybrid computing', isHot: true },
      { name: 'AI Autonomous Ecosystem', href: '/ai-autonomous-ecosystem', description: 'Self-managing AI systems' },
      { name: 'AI Ethics & Governance', href: '/ai-ethics-governance', description: 'Ethical AI frameworks' },
      { name: 'AI Creativity Studio Pro', href: '/ai-creativity-studio-pro', description: 'AI-powered creative platform', isNew: true }
    ]
  },
  {
    name: '⚛️ Quantum & Emerging Tech',
    href: '/quantum-services',
    icon: <Atom className="w-5 h-5" />,
    description: 'Breakthrough quantum computing and space technology solutions',
    badge: 'Revolutionary',
    color: 'from-indigo-500 to-blue-600',
    isPremium: true,
    children: [
      { name: 'Quantum Internet Security Platform', href: '/quantum-internet-security-platform', description: 'Unhackable quantum-secured internet', isPremium: true },
      { name: 'Quantum Bio-Computing Platform', href: '/quantum-bio-computing-platform', description: 'Quantum molecular simulation', isNew: true },
      { name: 'Brain-Computer Interface Platform', href: '/brain-computer-interface-platform', description: 'Neural interface development', isHot: true },
      { name: 'Space Mining Platform', href: '/space-mining-platform', description: 'Autonomous space mining operations', isPremium: true },
      { name: 'Quantum Energy Platform', href: '/quantum-energy-platform', description: 'Quantum energy optimization', isNew: true }
    ]
  },
  {
    name: '🏢 Enterprise IT',
    href: '/enterprise-it',
    icon: <Shield className="w-5 h-5" />,
    description: 'Advanced enterprise infrastructure and security solutions',
    badge: 'Enterprise',
    color: 'from-blue-500 to-cyan-600',
    children: [
      { name: 'Quantum-Secure Cloud', href: '/quantum-secure-cloud-infrastructure', description: 'Future-proof cloud security' },
      { name: 'Zero Trust Architecture', href: '/zero-trust-network-architecture', description: 'Advanced network security' },
      { name: 'Autonomous DevOps', href: '/autonomous-devops-orchestrator', description: 'AI-powered infrastructure' },
      { name: 'Edge Computing', href: '/edge-computing-orchestration-platform', description: 'Distributed computing optimization' },
      { name: 'AI Cybersecurity', href: '/ai-powered-cybersecurity-platform', description: 'Intelligent threat detection' },
      { name: 'Blockchain Infrastructure', href: '/blockchain-infrastructure-platform', description: 'Enterprise blockchain solutions' },
      { name: 'IoT Security Management', href: '/iot-security-management-platform', description: 'Connected device security' },
      { name: 'Data Privacy Management', href: '/data-privacy-management-platform', description: 'Compliance and privacy' },
      { name: 'Cloud Cost Optimization', href: '/cloud-cost-optimization-platform', description: 'AI-powered cost reduction' }
    ]
  },
  {
    name: '💻 Micro SAAS',
    href: '/micro-saas',
    icon: <Rocket className="w-5 h-5" />,
    description: 'Innovative business solutions for modern enterprises',
    badge: 'Popular',
    children: [
      { name: 'AI Business Intelligence', href: '/ai-business-intelligence-suite', description: 'Data-driven insights' },
      { name: 'AI Content Generation', href: '/ai-content-generation-platform', description: 'Automated content creation' },
      { name: 'AI Customer Service', href: '/ai-customer-service-automation', description: 'Intelligent support automation' },
      { name: 'AI Sales Intelligence', href: '/ai-sales-intelligence-platform', description: 'Sales performance optimization' },
      { name: 'AI Marketing Automation', href: '/ai-marketing-automation-suite', description: 'Campaign optimization' },
      { name: 'AI Project Management', href: '/ai-project-management-platform', description: 'Intelligent project coordination' },
      { name: 'AI Financial Analytics', href: '/ai-financial-analytics-platform', description: 'Financial insights and optimization' },
      { name: 'AI HR Management', href: '/ai-hr-management-platform', description: 'HR operations automation' },
      { name: 'AI Supply Chain', href: '/ai-supply-chain-optimization', description: 'Supply chain optimization' },
      { name: 'AI Legal Analysis', href: '/ai-legal-document-analysis', description: 'Legal document processing' }
    ]
  },
  {
    name: 'Creative & Design',
    href: '/creative-services',
    icon: <Palette className="w-5 h-5" />,
    description: 'AI-powered creative and design solutions',
    children: [
      { name: 'AI Creativity Studio', href: '/ai-creativity-studio', description: 'AI-powered creative content' },
      { name: 'Metaverse Development', href: '/metaverse-development-studio', description: '3D world creation' },
      { name: 'Quantum Metaverse', href: '/quantum-metaverse-platform', description: 'Quantum-enhanced experiences' },
      { name: '3D Design & Modeling', href: '/3d-design-platform', description: 'Advanced 3D creation tools' },
      { name: 'AI Video Generation', href: '/ai-video-generation', description: 'Automated video content' },
      { name: 'AI Music Composition', href: '/ai-music-composition', description: 'AI-generated music' }
    ]
  },
  {
    name: 'Research & Development',
    href: '/research-development',
    icon: <BookOpen className="w-5 h-5" />,
    description: 'Cutting-edge research and development services',
    children: [
      { name: 'AI Autonomous Research', href: '/ai-autonomous-research-assistant', description: 'Self-directed research' },
      { name: 'Quantum Materials Discovery', href: '/quantum-materials-discovery-platform', description: 'Materials science acceleration' },
      { name: 'Space Technology Research', href: '/space-technology-research', description: 'Space exploration solutions' },
      { name: 'Biotech AI Research', href: '/biotech-ai-research-platform', description: 'Biological research automation' },
      { name: 'Neuroscience Research', href: '/neuroscience-research-platform', description: 'Brain research tools' },
      { name: 'Climate Research AI', href: '/climate-research-ai', description: 'Environmental research automation' }
    ]
  },
  {
    name: 'Industry Solutions',
    href: '/industry-solutions',
    icon: <Truck className="w-5 h-5" />,
    description: 'Specialized solutions for specific industries',
    children: [
      { name: 'Healthcare AI', href: '/healthcare-ai-solutions', description: 'Medical AI applications' },
      { name: 'Financial Services', href: '/financial-ai-solutions', description: 'Fintech AI solutions' },
      { name: 'Manufacturing AI', href: '/manufacturing-ai-solutions', description: 'Industrial automation' },
      { name: 'Retail AI', href: '/retail-ai-solutions', description: 'Retail optimization' },
      { name: 'Education AI', href: '/education-ai-solutions', description: 'Educational technology' },
      { name: 'Transportation AI', href: '/transportation-ai-solutions', description: 'Smart transportation' }
    ]
  },
  {
    name: 'Pricing & Plans',
    href: '/pricing',
    icon: <DollarSign className="w-5 h-5" />,
    description: 'Flexible pricing options for all services',
    children: [
      { name: '2025 Pricing', href: '/pricing-2025', description: 'Current year pricing' },
      { name: '2026 Pricing', href: '/pricing-2026', description: 'Next year pricing' },
      { name: 'Enterprise Plans', href: '/enterprise-pricing', description: 'Large organization pricing' },
      { name: 'Startup Plans', href: '/startup-pricing', description: 'Small business pricing' },
      { name: 'Custom Solutions', href: '/custom-pricing', description: 'Tailored pricing' },
      { name: 'ROI Calculator', href: '/roi-calculator', description: 'Calculate your return on investment' }
    ]
  },
  {
    name: 'Resources',
    href: '/resources',
    icon: <BookOpen className="w-5 h-5" />,
    description: 'Educational resources and documentation',
    children: [
      { name: 'Documentation', href: '/docs', description: 'Technical documentation' },
      { name: 'API Reference', href: '/api-docs', description: 'API documentation' },
      { name: 'Tutorials', href: '/tutorials', description: 'Step-by-step guides' },
      { name: 'Case Studies', href: '/case-studies', description: 'Success stories' },
      { name: 'Blog', href: '/blog', description: 'Latest insights and news' },
      { name: 'Research Papers', href: '/research-papers', description: 'Academic publications' }
    ]
  },
  {
    name: 'Support',
    href: '/support',
    icon: <Settings className="w-5 h-5" />,
    description: 'Technical support and customer service',
    children: [
      { name: 'Help Center', href: '/help', description: 'Self-service support' },
      { name: 'Contact Support', href: '/contact', description: 'Get in touch' },
      { name: 'Live Chat', href: '/live-chat', description: 'Real-time assistance' },
      { name: 'Training Programs', href: '/training', description: 'Skill development' },
      { name: 'Community Forum', href: '/community', description: 'User community' },
      { name: 'Status Page', href: '/status', description: 'Service status' }
    ]
  }
];

const quickActions = [
  { name: 'Get Quote', href: '/contact', icon: <DollarSign className="w-4 h-4" />, color: 'from-green-500 to-emerald-600' },
  { name: 'Book Demo', href: '/contact', icon: <Eye className="w-4 h-4" />, color: 'from-blue-500 to-cyan-600' },
  { name: 'Live Chat', href: '/contact', icon: <MessageCircle className="w-4 h-4" />, color: 'from-purple-500 to-pink-600' }
];

export default function EnhancedNavigation2025() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = () => setActiveDropdown(null);
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleDropdownToggle = (name: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const getBadgeStyle = (item: NavigationItem) => {
    if (item.isPremium) return 'bg-gradient-to-r from-yellow-500 to-orange-500 text-black';
    if (item.isHot) return 'bg-gradient-to-r from-red-500 to-pink-500 text-white';
    if (item.isNew) return 'bg-gradient-to-r from-green-500 to-emerald-500 text-white';
    return 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white';
  };

  const getBadgeText = (item: NavigationItem) => {
    if (item.isPremium) return 'Premium';
    if (item.isHot) return 'Hot';
    if (item.isNew) return 'New';
    return item.badge || '';
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-xl border-b border-cyan-500/20">
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-gray-900/80 via-black/80 to-gray-900/80 border-b border-cyan-500/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-xs">
            <div className="flex items-center space-x-4 text-gray-400">
              <a href={`tel:${contactInfo.mobile}`} className="flex items-center space-x-1 hover:text-cyan-400 transition-colors">
                <Phone className="w-3 h-3" />
                <span>{contactInfo.mobile}</span>
              </a>
              <a href={`mailto:${contactInfo.email}`} className="flex items-center space-x-1 hover:text-cyan-400 transition-colors">
                <Mail className="w-3 h-3" />
                <span>{contactInfo.email}</span>
              </a>
            </div>
            <div className="flex items-center space-x-2">
              {quickActions.map((action) => (
                <a
                  key={action.name}
                  href={action.href}
                  className={`px-2 py-1 rounded text-xs font-medium bg-gradient-to-r ${action.color} text-white hover:scale-105 transition-all duration-200`}
                >
                  {action.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="hidden sm:block">
                <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Zion Tech Group
                </div>
                <div className="text-xs text-gray-400">Future Technology Solutions</div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative">
                <button
                  onClick={(e) => handleDropdownToggle(item.name, e)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-200 flex items-center space-x-2 ${
                    activeDropdown === item.name ? 'text-white bg-gray-800/50' : ''
                  }`}
                >
                  {item.icon}
                  <span>{item.name.replace(/^[^\s]+ /, '')}</span>
                  {item.children && (
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  )}
                  {getBadgeText(item) && (
                    <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${getBadgeStyle(item)}`}>
                      {getBadgeText(item)}
                    </span>
                  )}
                </button>

                {/* Dropdown Menu */}
                {item.children && activeDropdown === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-xl border border-cyan-500/20 rounded-xl shadow-2xl shadow-cyan-500/10"
                  >
                    <div className="p-4">
                      <div className="mb-3">
                        <h3 className="text-lg font-semibold text-white">{item.name.replace(/^[^\s]+ /, '')}</h3>
                        <p className="text-sm text-gray-400">{item.description}</p>
                      </div>
                      <div className="space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-200 group"
                          >
                            <div className="flex-1">
                              <div className="flex items-center space-x-2">
                                <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                                  {child.name}
                                </span>
                                {child.isNew && <span className="px-2 py-0.5 rounded-full text-xs bg-green-500 text-white">New</span>}
                                {child.isHot && <span className="px-2 py-0.5 rounded-full text-xs bg-red-500 text-white">Hot</span>}
                                {child.isPremium && <span className="px-2 py-0.5 rounded-full text-xs bg-yellow-500 text-black">Premium</span>}
                              </div>
                              <p className="text-xs text-gray-500 mt-1">{child.description}</p>
                            </div>
                            <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Search and Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="hidden md:flex items-center space-x-2 bg-gray-800/50 rounded-lg px-3 py-2 border border-gray-700/50">
              <Search className="w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent text-sm text-white placeholder-gray-400 outline-none w-48"
              />
            </div>

            {/* Contact Button */}
            <Link
              href="/contact"
              className="hidden md:flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 hover:scale-105"
            >
              <Phone className="w-4 h-4" />
              <span>Contact Us</span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800/50 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-cyan-500/20"
          >
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Search */}
              <div className="flex items-center space-x-2 bg-gray-800/50 rounded-lg px-3 py-2 border border-gray-700/50">
                <Search className="w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent text-sm text-white placeholder-gray-400 outline-none flex-1"
                />
              </div>

              {/* Mobile Navigation Items */}
              {navigationItems.map((item) => (
                <div key={item.name} className="space-y-2">
                  <Link
                    href={item.href}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-200"
                  >
                    <div className="flex items-center space-x-3">
                      {item.icon}
                      <span className="text-sm font-medium text-gray-300">{item.name.replace(/^[^\s]+ /, '')}</span>
                    </div>
                    {getBadgeText(item) && (
                      <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${getBadgeStyle(item)}`}>
                        {getBadgeText(item)}
                      </span>
                    )}
                  </Link>
                  
                  {/* Mobile Submenu */}
                  {item.children && (
                    <div className="ml-6 space-y-1">
                      {item.children.slice(0, 3).map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block p-2 rounded text-sm text-gray-400 hover:text-white hover:bg-gray-800/30 transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                      {item.children.length > 3 && (
                        <Link
                          href={item.href}
                          className="block p-2 rounded text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                          View all {item.children.length} services →
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile Contact Button */}
              <Link
                href="/contact"
                className="block w-full text-center px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}