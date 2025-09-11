import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, Menu, Home, Zap, Brain, Atom, Shield, Rocket, Globe, 
  Phone, Mail, MapPin, ChevronRight, ChevronDown, 
  Sparkles, Cpu, Lock, Cloud, BarChart3, Settings, Eye, 
  Award, Clock, Heart, Lightbulb, Users, FileText, 
  HelpCircle, BookOpen, Target, TrendingUp, Star, DollarSign, CheckCircle
} from 'lucide-react';

interface SidebarItem {
  name: string;
  href: string;
  icon: React.ReactNode;
  description?: string;
  children?: SidebarItem[];
  badge?: string;
  featured?: boolean;
  category?: string;
}

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const sidebarItems: SidebarItem[] = [
  {
    name: 'Home',
    href: '/',
    icon: <Home className="w-5 h-5" />,
    description: 'Welcome to Zion Tech Group'
  },
  {
    name: 'AI & Consciousness',
    href: '/ai-services',
    icon: <Brain className="w-5 h-5" />,
    description: 'Revolutionary AI consciousness and emotional intelligence',
    badge: 'New',
    isNew: true,
    children: [
      { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-2025', description: 'Emotional intelligence and self-awareness' },
      { name: 'AI Quantum Neural Network', href: '/ai-quantum-neural-network', description: 'Hybrid AI-Quantum computing platform' },
      { name: 'AI Autonomous Research', href: '/ai-autonomous-research-assistant', description: 'Self-directed AI research' },
      { name: 'AI Emotional Intelligence', href: '/ai-emotional-intelligence-training', description: 'EQ training platform' },
      { name: 'AI Predictive Maintenance', href: '/ai-predictive-maintenance-platform', description: 'Equipment failure prediction' },
      { name: 'AI Content Personalization', href: '/ai-content-personalization-engine', description: 'Personalized content delivery' },
      { name: 'AI Autonomous Ecosystem', href: '/ai-autonomous-ecosystem-manager', description: 'Self-managing AI systems' },
      { name: 'AI Ethics & Governance', href: '/ai-ethics-governance-framework', description: 'Ethical AI frameworks' },
      { name: 'AI Creativity Studio', href: '/ai-creativity-studio', description: 'AI-powered creative content' },
      { name: 'AI Education Platform', href: '/ai-education-platform', description: 'Personalized AI learning' },
      { name: 'AI Healthcare Diagnostics', href: '/ai-healthcare-diagnostics', description: 'Medical AI solutions' },
      { name: 'AI Financial Intelligence', href: '/ai-financial-intelligence', description: 'Financial AI analytics' },
      { name: 'AI Sustainability Platform', href: '/ai-sustainability-platform', description: 'Environmental AI solutions' },
      { name: 'AI Legal Contract Analyzer', href: '/ai-legal-contract-analyzer', description: 'Legal document analysis' }
    ]
  },
  {
    name: 'Quantum & Emerging Tech',
    href: '/quantum-services',
    icon: <Atom className="w-5 h-5" />,
    description: 'Quantum computing and breakthrough technologies',
    badge: 'Hot',
    isHot: true,
    children: [
      { name: 'Space Resource Mining', href: '/space-resource-mining-platform', description: 'Asteroid mining and space resources' },
      { name: 'Quantum Internet Security', href: '/quantum-internet-security-platform', description: 'Unbreakable encryption' },
      { name: 'Brain-Computer Interface', href: '/brain-computer-interface-platform', description: 'Neural interface technology' },
      { name: 'Quantum Materials Discovery', href: '/quantum-materials-discovery-platform', description: 'Materials science acceleration' },
      { name: 'Autonomous Vehicle AI', href: '/autonomous-vehicle-ai-platform', description: 'Self-driving AI systems' },
      { name: 'Quantum Bio-Computing', href: '/quantum-bio-computing-platform', description: 'Quantum-biological hybrid processing' },
      { name: 'Quantum Energy Platform', href: '/quantum-energy-platform', description: 'Fusion power simulation' },
      { name: 'Quantum Robotics', href: '/quantum-robotics', description: 'Quantum-enhanced robotics' },
      { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity-platform', description: 'Next-gen security' },
      { name: 'Quantum Logistics', href: '/quantum-logistics-optimization', description: 'Route optimization' },
      { name: 'Quantum Metaverse', href: '/quantum-metaverse', description: 'Quantum-enhanced virtual worlds' },
      { name: 'Quantum IoT Platform', href: '/quantum-iot', description: 'Quantum-secured IoT' },
      { name: 'Quantum Financial Trading', href: '/quantum-financial-trading', description: 'Quantum trading algorithms' }
    ]
  },
  {
    name: 'Enterprise IT',
    href: '/enterprise-it',
    icon: <Shield className="w-5 h-5" />,
    color: 'text-blue-400',
    items: [
      { name: 'Quantum-Secure Cloud', href: '/quantum-secure-cloud-infrastructure', badge: 'New' },
      { name: 'Autonomous IT Operations', href: '/autonomous-it-operations-center', badge: 'New' },
      { name: 'Edge Computing Orchestration', href: '/edge-computing-orchestration', badge: 'New' },
      { name: 'Blockchain Infrastructure', href: '/blockchain-infrastructure-platform', badge: 'New' },
      { name: 'AI-Powered DevOps', href: '/ai-powered-devops-platform', badge: 'New' },
      { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure-platform' },
      { name: 'Zero Trust Security', href: '/zero-trust-security-platform' },
      { name: 'Quantum Networking', href: '/quantum-networking' },
      { name: 'Quantum Data Center', href: '/quantum-data-center' },
      { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity' },
      { name: 'Quantum Cloud Migration', href: '/quantum-cloud-migration' }
    ]
  },
  {
    name: 'Micro SAAS',
    href: '/micro-saas',
    icon: <Rocket className="w-5 h-5" />,
    description: 'Our comprehensive technology solutions',
    badge: 'Featured',
    children: [
      { name: 'All Services', href: '/services', icon: <Rocket className="w-4 h-4" />, featured: true },
      { name: 'AI & Machine Learning', href: '/ai-services', icon: <Brain className="w-4 h-4" /> },
      { name: 'Quantum Technology', href: '/quantum-services', icon: <Atom className="w-4 h-4" /> },
      { name: 'Cybersecurity', href: '/cybersecurity', icon: <Shield className="w-4 h-4" /> },
      { name: 'Cloud & Infrastructure', href: '/it-services', icon: <Cloud className="w-4 h-4" /> },
      { name: 'Business Intelligence', href: '/data-analytics', icon: <BarChart className="w-4 h-4" /> },
      { name: 'DevOps & Automation', href: '/devops-automation', icon: <Code className="w-4 h-4" /> },
      { name: 'Space Technology', href: '/space-tech', icon: <RocketIcon className="w-4 h-4" /> }
    ]
  },
  {
    name: 'Solutions',
    href: '/solutions',
    icon: <Target className="w-5 h-5" />,
    description: 'Industry-specific solutions',
    children: [
      { name: 'Enterprise Solutions', href: '/solutions/enterprise', icon: <Building className="w-4 h-4" /> },
      { name: 'Healthcare Solutions', href: '/solutions/healthcare', icon: <Heart className="w-4 h-4" /> },
      { name: 'Financial Solutions', href: '/solutions/financial', icon: <DollarSign className="w-4 h-4" /> },
      { name: 'Manufacturing Solutions', href: '/solutions/manufacturing', icon: <Cog className="w-4 h-4" /> },
      { name: 'Retail Solutions', href: '/retail-technology-solutions', icon: <Target className="w-4 h-4" /> },
      { name: 'Government Solutions', href: '/government-technology-solutions', icon: <Shield className="w-4 h-4" /> }
    ]
  },
  {
    name: 'Company',
    href: '/about',
    icon: <Building className="w-5 h-5" />,
    description: 'About Zion Tech Group',
    children: [
      { name: 'About Us', href: '/about', icon: <Info className="w-4 h-4" /> },
      { name: 'Our Mission', href: '/mission', icon: <Target className="w-4 h-4" /> },
      { name: 'Leadership Team', href: '/leadership', icon: <Users className="w-4 h-4" /> },
      { name: 'Company Culture', href: '/culture', icon: <Heart className="w-4 h-4" /> },
      { name: 'Our Values', href: '/values', icon: <Star className="w-4 h-4" /> },
      { name: 'Careers', href: '/careers', icon: <Briefcase className="w-4 h-4" /> },
      { name: 'News & Press', href: '/press', icon: <FileText className="w-4 h-4" /> }
    ]
  },
  {
    name: 'Resources',
    href: '/resources',
    icon: <BookOpen className="w-5 h-5" />,
    description: 'Knowledge and resources',
    children: [
      { name: 'Documentation', href: '/docs', icon: <FileText className="w-4 h-4" /> },
      { name: 'Blog & Articles', href: '/blog', icon: <BookOpen className="w-4 h-4" /> },
      { name: 'Case Studies', href: '/case-studies', icon: <BarChart className="w-4 h-4" /> },
      { name: 'White Papers', href: '/white-papers', icon: <FileText className="w-4 h-4" /> },
      { name: 'Webinars', href: '/webinars', icon: <Calendar className="w-4 h-4" /> },
      { name: 'Events', href: '/events-webinars', icon: <Calendar className="w-4 h-4" /> },
      { name: 'Training', href: '/training', icon: <Lightbulb className="w-4 h-4" /> }
    ]
  },
  {
    name: 'Support',
    href: '/support',
    icon: <MessageCircle className="w-5 h-5" />,
    description: 'Get help and support',
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

const resources = [
  { name: 'Documentation', href: '/docs', icon: <FileText className="w-4 h-4" /> },
  { name: 'API Reference', href: '/api-documentation', icon: <Settings className="w-4 h-4" /> },
  { name: 'Case Studies', href: '/case-studies', icon: <BookOpen className="w-4 h-4" /> },
  { name: 'Blog & News', href: '/blog', icon: <FileText className="w-4 h-4" /> },
  { name: 'Training & Certification', href: '/training', icon: <Award className="w-4 h-4" /> },
  { name: 'Community Forum', href: '/community', icon: <Users className="w-4 h-4" /> }
=======
const quickLinks = [
  { name: 'Home', href: '/', icon: <Home className="w-4 h-4" /> },
  { name: 'All Services', href: '/comprehensive-services-showcase-2025', icon: <Star className="w-4 h-4" /> },
  { name: 'Pricing', href: '/pricing', icon: <DollarSign className="w-4 h-4" /> },
  { name: 'Market Pricing', href: '/market-pricing', icon: <DollarSign className="w-4 h-4" /> },
  { name: 'Services Advertising', href: '/services-advertising', icon: <BookOpen className="w-4 h-4" /> },
  { name: 'About Us', href: '/about', icon: <Users className="w-4 h-4" /> },
  { name: 'Contact', href: '/contact', icon: <Mail className="w-4 h-4" /> },
  { name: 'Support', href: '/support', icon: <HelpCircle className="w-4 h-4" /> }
];


const supportLinks = [
  { name: 'Contact Support', href: '/support', description: 'Get help from our team' },
  { name: 'Documentation', href: '/docs', description: 'Technical guides' },
  { name: 'API Reference', href: '/api-documentation', description: 'Developer documentation' },
  { name: 'Status Page', href: '/status', description: 'Service status' },
  { name: 'Training', href: '/training', description: 'Learn our platforms' },
  { name: 'Community', href: '/community', description: 'Connect with users' }
];

const stats = [
  { label: 'Services Delivered', value: '500+', icon: <CheckCircle className="w-5 h-5" /> },
  { label: 'Happy Clients', value: '200+', icon: <Users className="w-5 h-5" /> },
  { label: 'Years Experience', value: '15+', icon: <Clock className="w-5 h-5" /> },
  { label: 'Awards Won', value: '25+', icon: <Award className="w-5 h-5" /> }
];

const contactInfo = {
  mobile: '+1 (555) 123-4567',
  email: 'info@ziontechgroup.com'
};

interface EnhancedSidebar2025Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function EnhancedSidebar2025({ isOpen, onClose }: EnhancedSidebar2025Props) {
  const router = useRouter();
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const toggleSection = (sectionTitle: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(title)) {
      newExpanded.delete(title);
    } else {
      newExpandedItems.add(itemName);
    }
    setExpandedItems(newExpandedItems);
  };

  const filteredServices = sidebarItems.flatMap(item =>
    item.children?.filter(child =>
      child.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      child.description?.toLowerCase().includes(searchQuery.toLowerCase())
    ) || []
  );

  return (
    <motion.aside
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed left-0 top-0 h-full w-80 bg-black/95 backdrop-blur-xl border-r border-cyan-500/20 shadow-2xl shadow-cyan-500/20 z-40 overflow-y-auto scrollbar-thin scrollbar-thumb-cyan-500/50 scrollbar-track-transparent"
    >
      {/* Header */}
      <div className="sticky top-0 bg-black/95 backdrop-blur-xl border-b border-cyan-500/20 p-4">
        <div className="flex items-center space-x-3 mb-4">
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg blur-lg opacity-50"></div>
          </div>
          <div>
            <h2 className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Zion Tech Group
            </h2>
            <p className="text-xs text-gray-400">Navigation</p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="space-y-2 text-xs text-gray-300">
          <div className="flex items-center space-x-2">
            <Phone className="w-3 h-3 text-cyan-400" />
            <span>{contactInfo.mobile}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="w-3 h-3 text-cyan-400" />
            <span>{contactInfo.email}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Globe className="w-3 h-3 text-cyan-400" />
            <span>{contactInfo.website}</span>
          </div>
        </div>
      </div>

      {/* Navigation Sections */}
      <div className="p-4 space-y-2">
        {sidebarSections.map((section) => (
          <div key={section.title} className="space-y-1">
            <button
              onClick={() => toggleSection(section.title)}
              className="w-full flex items-center justify-between p-3 text-left text-gray-300 hover:text-white hover:bg-cyan-500/10 rounded-lg transition-all duration-200 group"
            >
              <div className="flex items-center space-x-3">
                <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors duration-200">
                  {section.icon}
                </div>
                <span className="font-medium">{section.title}</span>
                {section.badge && (
                  <span className="px-2 py-1 text-xs font-medium bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full">
                    {section.badge}
                  </span>
                )}
              </div>
              {expandedSections.has(section.title) ? (
                <ChevronDown className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors duration-200" />
              ) : (
                <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors duration-200" />
              )}
            </button>

            <AnimatePresence>
              {expandedSections.has(section.title) && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                  className="ml-8 space-y-1"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Search Bar */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search navigation..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
                />
              </div>
            </div>

            {/* Contact Information */}
            <div className="p-6 border-b border-cyan-500/30">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                <Mail className="w-5 h-5 text-cyan-400" />
                <span>Contact Information</span>
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <a href={`tel:${contactInfo.mobile}`} className="hover:text-cyan-400 transition-colors duration-200">
                    {contactInfo.mobile}
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-cyan-400 transition-colors duration-200">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-start space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-cyan-400 mt-1" />
                  <span className="text-sm">{contactInfo.address}</span>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="p-6 border-b border-cyan-500/30">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-cyan-400" />
                <span>Company Stats</span>
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="text-center p-3 bg-gray-800/30 rounded-lg border border-gray-700/30"
                  >
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="p-6 border-b border-cyan-500/30">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                <Star className="w-5 h-5 text-cyan-400" />
                <span>Quick Links</span>
              </h3>
              <div className="space-y-2">
                {quickLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={onClose}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-200 group"
                  >
                    <div className="text-gray-400 group-hover:text-cyan-400 transition-colors duration-200">
                      {link.icon}
                    </div>
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-200">
                      {link.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Service Categories */}
            <div className="p-6 border-b border-cyan-500/30">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                <Rocket className="w-5 h-5 text-cyan-400" />
                <span>Service Categories</span>
              </h3>
              <div className="space-y-2">
                {sidebarItems.map((item) => (
                  <div key={item.name}>
                    <button
                      onClick={() => toggleCategory(item.name)}
                      className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-200 group"
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 bg-gradient-to-r ${item.isHot ? 'from-indigo-500 to-purple-600' : 'from-cyan-500 to-blue-600'} rounded-lg flex items-center justify-center`}>
                          {item.icon}
                        </div>
                        <span className="text-gray-300 group-hover:text-white transition-colors duration-200">
                          {item.name}
                        </span>
                      </div>
                      <ChevronRight 
                        className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                          expandedCategory === item.name ? 'rotate-90' : ''
                        }`} 
                      />
                    </button>
                    
                    <AnimatePresence>
                      {expandedCategory === item.name && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="ml-8 mt-2 space-y-1"
                        >
                          {item.children?.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              onClick={onClose}
                              className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-800/30 transition-colors duration-200 group"
                            >
                              <span className="text-sm text-gray-400 group-hover:text-cyan-400 transition-colors duration-200">
                                {child.name}
                              </span>
                              {child.badge && (
                                <span className="px-2 py-1 text-xs bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full">
                                  {child.badge}
                                </span>
                              )}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="sticky bottom-0 bg-black/80 backdrop-blur-md border-t border-cyan-500/20 p-4 mt-8">
              <div className="space-y-3">
                <div className="text-xs text-gray-500 text-center">
                  © 2025 Zion Tech Group
                </div>
                <div className="flex justify-center space-x-4">
                  <Link
                    href="/contact"
                    className="text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Contact
                  </Link>
                  <Link
                    href="/support"
                    className="text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Support
                  </Link>
                  <Link
                    href="/privacy"
                    className="text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    Privacy
                  </Link>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="p-6 border-b border-cyan-500/30">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center space-x-2">
                <Zap className="w-5 h-5 text-cyan-400" />
                <span>Quick Links</span>
              </h3>
              <div className="space-y-2">
                <Link
                  href="/contact"
                  onClick={onClose}
                  className="block p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-200 group"
                >
                  <div className="font-medium text-gray-300 group-hover:text-white transition-colors duration-200">
                    Contact Us
                  </div>
                  <div className="text-xs text-gray-500">Get in touch with our team</div>
                </Link>
                <Link
                  href="/pricing"
                  onClick={onClose}
                  className="block p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-200 group"
                >
                  <div className="font-medium text-gray-300 group-hover:text-white transition-colors duration-200">
                    View Pricing
                  </div>
                  <div className="text-xs text-gray-500">Explore our pricing plans</div>
                </Link>
                <Link
                  href="/about"
                  onClick={onClose}
                  className="block p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-200 group"
                >
                  <div className="font-medium text-gray-300 group-hover:text-white transition-colors duration-200">
                    About Us
                  </div>
                  <div className="text-xs text-gray-500">Learn about Zion Tech Group</div>
                </Link>
              </div>
            </div>
            <div className="text-center p-3 bg-gray-800/50 rounded-lg">
              <div className="text-lg font-bold text-blue-400">1000+</div>
              <div className="text-xs text-gray-400">Clients</div>
            </div>
            <div className="text-center p-3 bg-gray-800/50 rounded-lg">
              <div className="text-lg font-bold text-purple-400">24/7</div>
              <div className="text-xs text-gray-400">Support</div>
            </div>
            <div className="text-center p-3 bg-gray-800/50 rounded-lg">
              <div className="text-lg font-bold text-green-400">99.9%</div>
              <div className="text-xs text-gray-400">Uptime</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="pt-4 border-t border-gray-800 px-3">
          <Link
            href="/contact"
            className="block w-full text-center px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
          >
            <span>Get Started Today</span>
            <ArrowRight className="w-4 h-4 ml-2 inline" />
          </Link>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-4 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
      <div className="absolute top-1/2 right-4 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute bottom-1/4 left-4 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-2000"></div>
    </motion.aside>
  );
};

export default EnhancedSidebar2025;
