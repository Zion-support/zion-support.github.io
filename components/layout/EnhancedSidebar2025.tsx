import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, ChevronDown, ChevronRight, Search, Settings, User, 
  Brain, Atom, Rocket, Shield, Cpu, Database, Cloud, 
  BarChart3, Code, Smartphone, Server, Users, Award, 
  TrendingUp, BookOpen, FileText, GraduationCap, Headphones,
  Zap, Globe, Lock, Phone, Mail, MapPin, Star, MessageCircle,
  ExternalLink, Home, Briefcase, Info, HelpCircle, Shield as ShieldIcon, Play, Building,
  Heart, Palette, Target, Sparkles, Download
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const sidebarSections = [
  {
    title: 'AI & Consciousness',
    icon: <Brain className="w-5 h-5" />,
    color: 'text-violet-400',
    items: [
      { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-2025', badge: 'New' },
      { name: 'AI Quantum Neural Network', href: '/ai-quantum-neural-network', badge: 'Hot' },
      { name: 'AI Autonomous Research', href: '/ai-autonomous-research-assistant', badge: 'New' },
      { name: 'AI Emotional Intelligence', href: '/ai-emotional-intelligence-training', badge: 'Popular' },
      { name: 'AI Predictive Maintenance', href: '/ai-predictive-maintenance-platform', badge: 'New' },
      { name: 'AI Content Personalization', href: '/ai-content-personalization-engine', badge: 'New' },
      { name: 'AI Autonomous Ecosystem', href: '/ai-autonomous-ecosystem-manager' },
      { name: 'AI Ethics & Governance', href: '/ai-ethics-governance-framework' },
      { name: 'AI Creativity Studio', href: '/intelligent-content-automation-platform' },
      { name: 'AI Education Platform', href: '/education-technology-solutions' },
      { name: 'AI Healthcare Diagnostics', href: '/healthcare-solutions' },
      { name: 'AI Financial Intelligence', href: '/ai-financial-intelligence' },
      { name: 'AI Sustainability Platform', href: '/ai-sustainability-platform' },
      { name: 'AI Legal Contract Analyzer', href: '/ai-legal-contract-analyzer' }
    ]
  },
  {
    title: 'Quantum & Emerging Tech',
    icon: <Atom className="w-5 h-5" />,
    color: 'text-indigo-400',
    items: [
      { name: 'Space Resource Mining', href: '/space-resource-mining-platform', badge: 'Hot' },
      { name: 'Quantum Internet Security', href: '/quantum-internet-security-platform', badge: 'New' },
      { name: 'Brain-Computer Interface', href: '/brain-computer-interface-platform', badge: 'New' },
      { name: 'Quantum Materials Discovery', href: '/quantum-materials-discovery-platform', badge: 'New' },
      { name: 'Autonomous Vehicle AI', href: '/autonomous-vehicle-ai-platform', badge: 'New' },
      { name: 'Quantum Bio-Computing', href: '/quantum-bio-computing-platform' },
      { name: 'Quantum Energy Platform', href: '/quantum-energy-platform' },
      { name: 'Quantum Robotics', href: '/quantum-robotics' },
      { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity-platform' },
      { name: 'Quantum Logistics', href: '/quantum-logistics-optimization' },
      { name: 'Quantum Metaverse', href: '/quantum-metaverse' },
      { name: 'Quantum IoT Platform', href: '/quantum-iot' },
      { name: 'Quantum Financial Trading', href: '/quantum-financial-trading' }
    ]
  },
  {
    title: 'Enterprise IT',
    icon: <Shield className="w-5 h-5" />,
    color: 'text-blue-400',
    items: [
      { name: 'Quantum-Secure Cloud', href: '/quantum-secure-cloud-infrastructure', badge: 'New' },
      { name: 'Autonomous IT Operations', href: '/autonomous-it-operations-center', badge: 'New' },
      { name: 'Edge Computing Orchestration', href: '/edge-computing-orchestration-platform', badge: 'New' },
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
    title: 'Micro SAAS',
    icon: <Rocket className="w-5 h-5" />,
    color: 'text-emerald-400',
    items: [
      { name: 'AI Customer Success', href: '/ai-customer-success-platform', badge: 'New' },
      { name: 'Supply Chain Optimization', href: '/intelligent-supply-chain-optimization', badge: 'New' },
      { name: 'Financial Planning AI', href: '/ai-financial-planning-platform', badge: 'New' },
      { name: 'HR Analytics Platform', href: '/intelligent-hr-analytics-platform', badge: 'New' },
      { name: 'Sales Intelligence AI', href: '/ai-sales-intelligence-platform', badge: 'New' },
      { name: 'AI Decision Engine', href: '/ai-powered-decision-engine' },
      { name: 'Content Automation', href: '/intelligent-content-automation-platform' },
      { name: 'Smart CRM Suite', href: '/smart-crm-intelligence-suite' },
      { name: 'Financial Analytics', href: '/financial-solutions' },
      { name: 'Project Management', href: '/enterprise-it' },
      { name: 'Business Intelligence', href: '/ai-business-intelligence-suite' },
      { name: 'Marketing Automation', href: '/ai-autonomous-marketing-platform' },
      { name: 'Customer Service AI', href: '/ai-customer-service' },
      { name: 'HR & Recruitment', href: '/ai-hr-recruitment' },
      { name: 'Legal Contract Analysis', href: '/ai-legal-contract-analyzer' }
    ]
  },
  {
    title: 'Solutions',
    icon: <Target className="w-5 h-5" />,
    color: 'text-orange-400',
    items: [
      { name: 'Healthcare Solutions', href: '/healthcare-solutions' },
      { name: 'Financial Services', href: '/financial-solutions' },
      { name: 'Manufacturing AI', href: '/manufacturing-ai-solutions' },
      { name: 'Retail Technology', href: '/retail-technology-solutions' },
      { name: 'Education Technology', href: '/education-technology-solutions' },
      { name: 'Government Solutions', href: '/government-technology-solutions' },
      { name: 'Energy & Utilities', href: '/energy-utilities-solutions' },
      { name: 'Transportation & Logistics', href: '/retail-technology-solutions' },
      { name: 'Real Estate Technology', href: '/enterprise-it' },
      { name: 'Entertainment & Media', href: '/resources' },
      { name: 'Space Technology', href: '/space-technology' },
      { name: 'Biotech & Healthcare', href: '/biotech-ai' }
    ]
  },
  {
    title: 'Resources',
    icon: <BookOpen className="w-5 h-5" />,
    color: 'text-cyan-400',
    items: [
      { name: 'Documentation', href: '/docs' },
      { name: 'API Reference', href: '/api-documentation' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Blog & News', href: '/blog' },
      { name: 'Support Center', href: '/support' },
      { name: 'Training & Certification', href: '/training' },
      { name: 'Community Forum', href: '/community' },
      { name: 'Developer Resources', href: '/developer' },
      { name: 'Research & Development', href: '/research-development' },
      { name: 'White Papers', href: '/white-papers' },
      { name: 'Performance Reports', href: '/reports' },
      { name: 'Market Analysis', href: '/market-pricing' }
    ]
  },
  {
    title: 'Company',
    icon: <Users className="w-5 h-5" />,
    color: 'text-pink-400',
    items: [
      { name: 'About Us', href: '/about' },
      { name: 'Leadership Team', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'News & Press', href: '/news' },
      { name: 'Partners', href: '/partners' },
      { name: 'Investors', href: '/investors' },
      { name: 'Contact Us', href: '/contact' },
      { name: 'Locations', href: '/locations' },
      { name: 'Sustainability', href: '/sustainability' },
      { name: 'Diversity & Inclusion', href: '/diversity-inclusion' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'Privacy Policy', href: '/privacy' }
    ]
  }
];

const quickLinks = [
  { name: 'Home', href: '/', icon: <Home className="w-4 h-4" /> },
  { name: 'All Services', href: '/comprehensive-services-showcase-2025', icon: <Star className="w-4 h-4" /> },
  { name: 'Pricing', href: '/pricing', icon: <DollarSign className="w-4 h-4" /> },
  { name: 'About Us', href: '/about', icon: <Users className="w-4 h-4" /> },
  { name: 'Contact', href: '/contact', icon: <Mail className="w-4 h-4" /> },
  { name: 'Support', href: '/support', icon: <HelpCircle className="w-4 h-4" /> }
];

const companyLinks = [
  { name: 'About Us', href: '/about', description: 'Our mission and vision' },
  { name: 'Careers', href: '/careers', description: 'Join our team' },
  { name: 'News & Updates', href: '/news', description: 'Latest company news' },
  { name: 'Case Studies', href: '/case-studies', description: 'Success stories' },
  { name: 'Resources', href: '/resources', description: 'Whitepapers and guides' },
  { name: 'Blog', href: '/blog', description: 'Industry insights' }
];

const supportLinks = [
  { name: 'Contact Support', href: '/support', description: 'Get help from our team' },
  { name: 'Documentation', href: '/docs', description: 'Technical guides' },
  { name: 'API Reference', href: '/api-docs', description: 'Developer documentation' },
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

interface EnhancedSidebar2025Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function EnhancedSidebar2025({ isOpen, onClose }: EnhancedSidebar2025Props) {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleCategory = (title: string) => {
    setExpandedCategory(expandedCategory === title ? null : title);
  };

  const sidebarSections = [
    {
      id: 'ai-services',
      title: 'AI & Consciousness',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      items: [
        { label: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-2044', badge: 'Hot', featured: true },
        { label: 'AI Emotional Intelligence', href: '/ai-emotional-intelligence-platform', badge: 'New' },
        { label: 'AI Autonomous Research', href: '/ai-autonomous-research', badge: 'Trending' },
        { label: 'AI Content Personalization', href: '/ai-content-personalization-engine' },
        { label: 'AI Ethics & Governance', href: '/ai-ethics-governance-framework' },
        { label: 'AI Autonomous Ecosystem', href: '/ai-autonomous-ecosystem' },
        { label: 'AI Predictive Maintenance', href: '/ai-predictive-maintenance-platform' },
        { label: 'AI Customer Success', href: '/ai-customer-success-platform' },
        { label: 'AI Sales Intelligence', href: '/ai-sales-intelligence-platform' },
        { label: 'AI Financial Intelligence', href: '/ai-financial-planning-platform' },
        { label: 'AI Legal Contract Analyzer', href: '/ai-legal-contract-analyzer' },
        { label: 'AI Manufacturing Optimization', href: '/ai-manufacturing-optimization' },
        { label: 'AI Market Research', href: '/ai-market-research' },
        { label: 'AI Sustainability Platform', href: '/ai-sustainability-platform' },
        { label: 'AI Autonomous Vehicle', href: '/ai-autonomous-vehicle-platform' }
      ]
    },
    {
      id: 'quantum-tech',
      title: 'Quantum & Emerging Tech',
      icon: Atom,
      color: 'from-blue-500 to-cyan-500',
      items: [
        { label: 'Quantum Neural Ecosystem', href: '/quantum-neural-ecosystem-2040', badge: 'Revolutionary', featured: true },
        { label: 'Quantum Cybersecurity', href: '/quantum-cybersecurity-platform-2044', badge: 'Critical' },
        { label: 'Quantum Internet Security', href: '/quantum-internet-security-platform' },
        { label: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure-2044' },
        { label: 'Quantum Bio-Computing', href: '/quantum-bio-computing-platform' },
        { label: 'Quantum Materials Discovery', href: '/quantum-materials-discovery-platform' },
        { label: 'Quantum Financial Intelligence', href: '/quantum-financial-trading-platform' },
        { label: 'Quantum Supply Chain Optimizer', href: '/quantum-logistics-optimization' },
        { label: 'Quantum Financial Trading', href: '/quantum-financial-trading' },
        { label: 'Quantum Internet Security Platform', href: '/quantum-internet-security-platform' },
        { label: 'Quantum Storage Solutions', href: '/quantum-storage-solutions-2044' },
        { label: 'Quantum Workload Orchestration', href: '/quantum-workload-orchestration' }
      ]
    },
    {
      id: 'space-tech',
      title: 'Space Technology',
      icon: Globe,
      color: 'from-indigo-500 to-purple-500',
      items: [
        { label: 'Space Resource Intelligence', href: '/space-resource-intelligence-2044', badge: 'Future', featured: true },
        { label: 'Satellite Technology', href: '/satellite-technology' },
        { label: 'Space Data Analytics', href: '/space-data-analytics' },
        { label: 'Orbital Computing', href: '/orbital-computing' },
        { label: 'Space Cybersecurity', href: '/space-cybersecurity' },
        { label: 'Interplanetary Communication', href: '/interplanetary-communication' },
        { label: 'Space Mining Platform', href: '/space-mining-platform' },
        { label: 'Space Colonization Services', href: '/space-colonization-services' }
      ]
    },
    {
      id: 'enterprise-it',
      title: 'Enterprise IT Solutions',
      icon: Server,
      color: 'from-green-500 to-emerald-500',
      items: [
        { label: 'IT Infrastructure', href: '/it-services', badge: 'Popular' },
        { label: 'Cloud Platform', href: '/cloud-platform', badge: 'Scalable' },
        { label: 'Cybersecurity', href: '/cybersecurity', badge: 'Critical' },
        { label: 'Data Analytics', href: '/data-analytics', badge: 'Insights' },
        { label: 'DevOps Automation', href: '/automation', badge: 'Efficient' },
        { label: 'Mobile & Web Solutions', href: '/mobile-web-solutions', badge: 'Modern' },
        { label: 'Zero Trust Security', href: '/zero-trust-security-platform' },
        { label: 'Network Management', href: '/autonomous-network-management-2044' },
        { label: 'Asset Management', href: '/it-asset-discovery-agent' },
        { label: 'Performance Monitoring', href: '/browser-performance-monitor' }
      ]
    },
    {
      id: 'business-solutions',
      title: 'Business Solutions',
      icon: Target,
      color: 'from-emerald-500 to-teal-500',
      items: [
        { label: 'Business Intelligence', href: '/ai-autonomous-business-intelligence-2044', badge: 'AI-Powered', featured: true },
        { label: 'Customer Success', href: '/autonomous-customer-success-2044', badge: 'Automated' },
        { label: 'Sales Automation', href: '/ai-autonomous-sales-platform', badge: 'Intelligent' },
        { label: 'HR Management', href: '/ai-autonomous-hr-platform', badge: 'Smart' },
        { label: 'Marketing Automation', href: '/ai-autonomous-marketing-platform', badge: 'AI-Driven' },
        { label: 'Financial Planning', href: '/ai-financial-planning-platform', badge: 'Predictive' },
        { label: 'Supply Chain', href: '/ai-supply-chain-optimization', badge: 'Optimized' },
        { label: 'Content Factory', href: '/ai-autonomous-content-factory', badge: 'Automated' },
        { label: 'Research Assistant', href: '/ai-autonomous-research-assistant', badge: 'AI-Powered' },
        { label: 'Robotics Platform', href: '/ai-autonomous-robotics-platform', badge: 'Future' }
      ]
    },
    {
      id: 'industry-solutions',
      title: 'Industry Solutions',
      icon: Building,
      color: 'from-orange-500 to-red-500',
      items: [
        { label: 'Healthcare & Biotech', href: '/solutions/healthcare', badge: 'Life Sciences', featured: true },
        { label: 'Financial Services', href: '/solutions/financial', badge: 'Fintech' },
        { label: 'Manufacturing', href: '/solutions/manufacturing', badge: 'Smart Factory' },
        { label: 'Retail & E-commerce', href: '/solutions/retail', badge: 'Digital Commerce' },
        { label: 'Education', href: '/solutions/education', badge: 'Edtech' },
        { label: 'Government', href: '/solutions/government', badge: 'Public Sector' },
        { label: 'Entertainment & Media', href: '/entertainment-media-solutions', badge: 'Creative Tech' },
        { label: 'Energy & Utilities', href: '/energy-utilities-solutions', badge: 'Smart Energy' }
      ]
    },
    {
      id: 'resources',
      title: 'Resources & Support',
      icon: BookOpen,
      color: 'from-yellow-500 to-orange-500',
      items: [
        { label: 'Documentation', href: '/docs', badge: 'Guides' },
        { label: 'API Reference', href: '/api-docs', badge: 'Developer' },
        { label: 'Blog & Insights', href: '/blog', badge: 'Latest' },
        { label: 'Webinars', href: '/webinars', badge: 'Learning' },
        { label: 'Case Studies', href: '/case-studies', badge: 'Success Stories' },
        { label: 'Training Programs', href: '/training', badge: 'Skill Development' },
        { label: 'Support Center', href: '/support', badge: 'Help' },
        { label: 'Status Page', href: '/status', badge: 'System Health' }
      ]
    }
  ];

  const quickActions = [
    { label: 'Get Started', href: '/contact', icon: Play, color: 'from-cyan-500 to-purple-500' },
    { label: 'View Pricing', href: '/pricing', icon: TrendingUp, color: 'from-green-500 to-emerald-500' },
    { label: 'Schedule Demo', href: '/demo', icon: MessageCircle, color: 'from-blue-500 to-indigo-500' },
    { label: 'Download Resources', href: '/resources', icon: Download, color: 'from-purple-500 to-pink-500' }
  ];

  const filteredSections = searchQuery 
    ? sidebarSections.map(section => ({
        ...section,
        items: section.items.filter(item => 
          item.label.toLowerCase().includes(searchQuery.toLowerCase())
        )
      })).filter(section => section.items.length > 0)
    : sidebarSections;

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
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed left-0 top-0 h-full w-80 bg-gray-900/95 backdrop-blur-md border-r border-cyan-500/30 z-50 overflow-y-auto"
          >
            {/* Header */}
            <div className="p-6 border-b border-cyan-500/30">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-white">Zion Tech Group</div>
                    <div className="text-xs text-cyan-400">Revolutionary Technology</div>
                  </div>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 text-white/70 hover:text-white transition-colors duration-300"
                >
                  <CloseIcon className="w-5 h-5" />
                </button>
              </div>

              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/50" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500/50"
                />
              </div>
            </div>

            {/* Content */}
            <div className="p-4 space-y-6">
              {/* Quick Actions */}
              <div>
                <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-3">
                  Quick Actions
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {quickActions.map((action) => (
                    <Link
                      key={action.label}
                      href={action.href}
                      className="p-3 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300 group"
                      onClick={onClose}
                    >
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${action.color} flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300`}>
                        <action.icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-xs text-white font-medium">{action.label}</span>
                    </Link>
                  ))}
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
                {sidebarSections.map((section) => (
                  <div key={section.title}>
                    <button
                      onClick={() => toggleCategory(section.title)}
                      className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-200 group"
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 bg-gradient-to-r ${section.color} rounded-lg flex items-center justify-center`}>
                          {section.icon}
                        </div>
                        <span className="text-gray-300 group-hover:text-white transition-colors duration-200">
                          {section.title}
                        </span>
                      </div>
                      <ChevronRight 
                        className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${
                          expandedCategory === section.title ? 'rotate-90' : ''
                        }`} 
                      />
                    </button>
                    
                    <AnimatePresence>
                      {expandedCategory === section.title && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="ml-8 mt-2 space-y-1"
                        >
                          {section.items.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              onClick={onClose}
                              className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-800/30 transition-colors duration-200 group"
                            >
                              <span className="text-sm text-gray-400 group-hover:text-cyan-400 transition-colors duration-200">
                                {item.name}
                              </span>
                              {item.badge && (
                                <span className="px-2 py-1 text-xs bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full">
                                  {item.badge}
                                </span>
                              )}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              {/* Contact Info */}
              <div className="pt-4 border-t border-white/10">
                <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-3">
                  Contact Us
                </h3>
                <div className="space-y-2 text-sm text-white/70">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-cyan-400" />
                    <span>+1 302 464 0950</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-cyan-400" />
                    <span>kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs">Middletown, DE 19709</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}