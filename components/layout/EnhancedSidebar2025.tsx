import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { 
<<<<<<< HEAD
  X, ChevronRight, Home, Star, Users, 
  Settings, HelpCircle, Mail, Phone, MapPin,
  Brain, Atom, Shield, Rocket, DollarSign,
  Globe, Cpu, Database, Lock, Zap,
  TrendingUp, Award, CheckCircle, Clock,
  ArrowRight, Search, Menu, X as CloseIcon,
  Target, BookOpen, Truck, BarChart3,
  Sparkles, Eye, Lightbulb, Palette, Code,
  FileText, BookOpen as BookIcon, Users as UsersIcon
=======
  X, Menu, Home, Zap, Brain, Atom, Shield, Rocket,
  ChevronDown, ChevronRight, Star, TrendingUp, 
  Award, Users, FileText, HelpCircle, Settings,
  Globe, Mail, Phone, MapPin, ArrowRight,
  Cpu, Database, Lock, Heart, Palette, GraduationCap,
  Leaf, Pill, Coins, Building2, Code, Server, ShieldCheck,
  BarChart3, Target, Lightbulb, Eye, Sparkles, Layers
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-df1a
} from 'lucide-react';

interface SidebarItem {
  name: string;
  href: string;
  icon: React.ReactNode;
  description?: string;
  children?: SidebarItem[];
  badge?: string;
  color?: string;
  isNew?: boolean;
  isHot?: boolean;
  isPremium?: boolean;
  category?: string;
}

const sidebarSections = [
  {
<<<<<<< HEAD
    title: 'Revolutionary Services',
    icon: Zap,
    color: 'from-cyan-500 to-blue-600',
    items: [
      {
        name: 'AI & Consciousness',
        href: '/ai-services',
        icon: Brain,
        description: 'Advanced AI consciousness and evolution platforms',
        subItems: [
          { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution' },
          { name: 'AI Autonomous Ecosystem', href: '/ai-autonomous-ecosystem' },
          { name: 'AI Ethics & Governance', href: '/ai-ethics-governance' },
          { name: 'AI Creativity Studio', href: '/ai-creativity-studio' },
          { name: 'AI Education Platform', href: '/ai-education-platform' },
          { name: 'AI Healthcare Diagnostics', href: '/ai-healthcare-diagnostics' },
          { name: 'AI Financial Intelligence', href: '/ai-financial-intelligence' },
          { name: 'AI Sustainability Platform', href: '/ai-sustainability-platform' },
          { name: 'AI Emotional Intelligence', href: '/ai-emotional-intelligence-platform' },
          { name: 'AI Legal Contract Analyzer', href: '/ai-legal-contract-analyzer' }
        ]
      },
      {
        name: 'Quantum Computing',
        href: '/quantum-services',
        icon: Atom,
        description: 'Next-generation quantum computing solutions',
        subItems: [
          { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure' },
          { name: 'Quantum Bio-Computing', href: '/quantum-bio-computing' },
          { name: 'Quantum Energy Platform', href: '/quantum-energy-platform' },
          { name: 'Quantum Materials Discovery', href: '/quantum-materials-discovery' },
          { name: 'Quantum Robotics', href: '/quantum-robotics' },
          { name: 'Quantum Internet Security', href: '/quantum-internet-security' },
          { name: 'Quantum Logistics', href: '/quantum-logistics-optimization' },
          { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity-platform' }
        ]
      },
      {
        name: 'Enterprise IT',
        href: '/enterprise-it',
        icon: Shield,
        description: 'Enterprise-grade IT infrastructure and security',
        subItems: [
          { name: 'Edge Computing Orchestrator', href: '/edge-computing-orchestration' },
          { name: 'Zero Trust Security Platform', href: '/zero-trust-network-architecture' },
          { name: 'Blockchain Enterprise Platform', href: '/blockchain-infrastructure-platform' },
          { name: 'AI-Powered DevOps', href: '/ai-powered-devops' },
          { name: 'Quantum Networking', href: '/quantum-networking' },
          { name: 'Autonomous IT Operations', href: '/autonomous-it-operations' },
          { name: 'Quantum Data Center', href: '/quantum-data-center' },
          { name: 'Quantum Cloud Migration', href: '/quantum-cloud-migration' }
        ]
      },
      {
        name: 'Micro SAAS',
        href: '/micro-saas',
        icon: Rocket,
        description: 'AI-powered micro SAAS solutions',
        subItems: [
          { name: 'AI Content Factory Platform', href: '/ai-content-factory' },
          { name: 'CRM Intelligence & Automation', href: '/crm-intelligence-automation' },
          { name: 'AI Decision Engine Platform', href: '/ai-decision-engine' },
          { name: 'E-commerce Optimization', href: '/ecommerce-optimization-platform' },
          { name: 'AI HR & Talent Platform', href: '/ai-hr-talent-platform' },
          { name: 'Financial Analytics Platform', href: '/financial-analytics-platform' },
          { name: 'Supply Chain Intelligence', href: '/supply-chain-intelligence' },
          { name: 'Marketing Automation Platform', href: '/marketing-automation-platform' },
          { name: 'Project Management AI', href: '/project-management-ai' }
        ]
      },
      {
        name: 'Space Technology',
        href: '/space-tech',
        icon: Globe,
        description: 'Cutting-edge space exploration and mining',
        subItems: [
          { name: 'Space Mining Platform', href: '/space-mining-platform' },
          { name: 'Satellite Technology', href: '/satellite-technology' },
          { name: 'Space Resource Management', href: '/space-resource-management' },
          { name: 'Interplanetary Communication', href: '/interplanetary-communication' }
        ]
      },
      {
        name: 'Emerging Tech',
        href: '/emerging-tech',
        icon: Sparkles,
        description: 'Future technologies and innovations',
        subItems: [
          { name: 'Brain-Computer Interface', href: '/brain-computer-interface' },
          { name: 'Autonomous Vehicle AI', href: '/autonomous-vehicle-ai' },
          { name: 'Advanced Robotics', href: '/advanced-robotics' },
          { name: 'Biotechnology Platform', href: '/biotechnology-platform' }
        ]
      }
    ]
  },
  {
    title: 'Industry Solutions',
    icon: Target,
    color: 'from-purple-500 to-pink-600',
    items: [
      {
        name: 'Healthcare',
        href: '/healthcare-solutions',
        icon: Heart,
        description: 'AI-powered healthcare diagnostics and solutions',
        subItems: [
          { name: 'AI Healthcare Diagnostics', href: '/ai-healthcare-diagnostics' },
          { name: 'Medical Imaging AI', href: '/medical-imaging-ai' },
          { name: 'Drug Discovery Platform', href: '/drug-discovery-platform' }
        ]
      },
      {
        name: 'Financial Services',
        href: '/financial-solutions',
        icon: BarChart3,
        description: 'Advanced financial intelligence and analytics',
        subItems: [
          { name: 'AI Financial Intelligence', href: '/ai-financial-intelligence' },
          { name: 'Quantum Trading Platform', href: '/quantum-financial-trading' },
          { name: 'Risk Assessment AI', href: '/risk-assessment-ai' }
        ]
      },
      {
        name: 'Manufacturing',
        href: '/manufacturing-solutions',
        icon: Settings,
        description: 'Industry 4.0 and smart manufacturing',
        subItems: [
          { name: 'Smart Factory Platform', href: '/smart-factory-platform' },
          { name: 'Predictive Maintenance AI', href: '/predictive-maintenance-ai' },
          { name: 'Quality Control AI', href: '/quality-control-ai' }
        ]
      },
      {
        name: 'Retail & E-commerce',
        href: '/retail-solutions',
        icon: Eye,
        description: 'E-commerce optimization and retail intelligence',
        subItems: [
          { name: 'E-commerce Optimization', href: '/ecommerce-optimization-platform' },
          { name: 'Customer Behavior AI', href: '/customer-behavior-ai' },
          { name: 'Inventory Management AI', href: '/inventory-management-ai' }
        ]
      },
      {
        name: 'Government & Defense',
        href: '/government-solutions',
        icon: Shield,
        description: 'Secure government and defense solutions',
        subItems: [
          { name: 'Cybersecurity Platform', href: '/quantum-cybersecurity-platform' },
          { name: 'Data Protection AI', href: '/data-protection-ai' },
          { name: 'Threat Detection AI', href: '/threat-detection-ai' }
        ]
      },
      {
        name: 'Education',
        href: '/education-solutions',
        icon: Award,
        description: 'AI-powered education and learning platforms',
        subItems: [
          { name: 'AI Education Platform', href: '/ai-education-platform' },
          { name: 'Personalized Learning AI', href: '/personalized-learning-ai' },
          { name: 'Student Performance AI', href: '/student-performance-ai' }
        ]
      }
    ]
  },
  {
    title: 'Company & Resources',
    icon: Users,
    color: 'from-green-500 to-emerald-600',
    items: [
<<<<<<< HEAD
      {
        name: 'About Us',
        href: '/about',
        icon: Users,
        description: 'Learn about Zion Tech Group',
        subItems: [
          { name: 'Our Mission', href: '/mission' },
          { name: 'Leadership Team', href: '/leadership' },
          { name: 'Company History', href: '/history' },
          { name: 'Careers', href: '/careers' }
        ]
      },
      {
        name: 'Resources',
        href: '/resources',
        icon: BookOpen,
        description: 'Educational content and documentation',
        subItems: [
          { name: 'Documentation', href: '/docs' },
          { name: 'API Reference', href: '/api-docs' },
          { name: 'Blog & News', href: '/blog' },
          { name: 'Case Studies', href: '/case-studies' },
          { name: 'Whitepapers', href: '/whitepapers' },
          { name: 'Webinars', href: '/webinars' }
        ]
      },
      {
        name: 'Support',
        href: '/support',
        icon: HelpCircle,
        description: 'Get help and support',
        subItems: [
          { name: 'Contact Support', href: '/contact-support' },
          { name: 'Training Programs', href: '/training' },
          { name: 'Community Forum', href: '/community' },
          { name: 'Knowledge Base', href: '/knowledge-base' }
        ]
      }
=======
      { name: 'Quantum-Secure Cloud', href: '/quantum-secure-cloud-infrastructure', badge: 'New' },
      { name: 'Autonomous IT Operations', href: '/autonomous-it-operations-center', badge: 'New' },
      { name: 'Edge Computing Orchestration', href: '/edge-computing-orchestration', badge: 'New' },
      { name: 'Blockchain Infrastructure', href: '/blockchain-infrastructure-platform', badge: 'New' },
      { name: 'AI-Powered DevOps', href: '/ai-powered-devops-platform', badge: 'New' },
      { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure-platform' },
      { name: 'Zero Trust Security', href: '/zero-trust-security-platform' },
=======
    title: 'AI & Consciousness',
    icon: <Brain className="w-5 h-5 text-cyan-400" />,
    color: 'from-cyan-500 to-blue-600',
    services: [
      { name: 'AI Consciousness Evolution 2029', href: '/ai-consciousness-evolution-2029', featured: true },
      { name: 'Quantum AI Fusion', href: '/quantum-ai-fusion', featured: true },
      { name: 'AI Autonomous Ecosystem', href: '/ai-autonomous-ecosystem' },
      { name: 'AI Ethics & Governance', href: '/ai-ethics-governance' },
      { name: 'AI Creativity Studio', href: '/ai-creativity-studio' },
      { name: 'AI Education Platform', href: '/ai-education-platform' },
      { name: 'AI Healthcare Diagnostics', href: '/ai-healthcare-diagnostics' },
      { name: 'AI Financial Intelligence', href: '/ai-financial-intelligence' },
      { name: 'AI Sustainability Platform', href: '/ai-sustainability-platform' },
      { name: 'AI Emotional Intelligence', href: '/ai-emotional-intelligence-platform' }
    ]
  },
  {
    title: 'Quantum & Emerging Tech',
    icon: <Atom className="w-5 h-5 text-blue-400" />,
    color: 'from-blue-500 to-indigo-600',
    services: [
      { name: 'Space Mining Platform', href: '/space-mining-platform', featured: true },
      { name: 'Quantum Bio-Computing', href: '/quantum-bio-computing', featured: true },
      { name: 'Brain-Computer Interface', href: '/brain-computer-interface' },
      { name: 'Quantum Energy Platform', href: '/quantum-energy-platform' },
      { name: 'Autonomous Vehicle AI', href: '/autonomous-vehicle-ai' },
      { name: 'Quantum Materials Discovery', href: '/quantum-materials-discovery' },
      { name: 'Quantum Robotics', href: '/quantum-robotics' },
      { name: 'Quantum Internet Security', href: '/quantum-internet-security' },
      { name: 'Quantum Logistics', href: '/quantum-logistics-optimization' },
      { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity-platform' }
    ]
  },
  {
    title: 'Enterprise IT',
    icon: <Shield className="w-5 h-5 text-green-400" />,
    color: 'from-green-500 to-emerald-600',
    services: [
      { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure', featured: true },
      { name: 'Edge Computing Orchestrator', href: '/edge-computing-orchestration', featured: true },
      { name: 'Zero Trust Security Platform', href: '/zero-trust-network-architecture' },
      { name: 'Blockchain Enterprise Platform', href: '/blockchain-infrastructure-platform' },
      { name: 'AI-Powered DevOps', href: '/ai-powered-devops' },
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-df1a
      { name: 'Quantum Networking', href: '/quantum-networking' },
      { name: 'Quantum Data Center', href: '/quantum-data-center' },
      { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity' },
      { name: 'Quantum Cloud Migration', href: '/quantum-cloud-migration' }
    ]
  },
  {
    title: 'Micro SAAS',
<<<<<<< HEAD
    icon: <Rocket className="w-5 h-5" />,
    color: 'text-emerald-400',
    items: [
      { name: 'AI Customer Success', href: '/services/ai-customer-success-platform', badge: 'New' },
      { name: 'Supply Chain Optimization', href: '/intelligent-supply-chain-optimization', badge: 'New' },
      { name: 'Financial Planning AI', href: '/services/ai-financial-planning-platform', badge: 'New' },
      { name: 'HR Analytics Platform', href: '/ai-hr-analytics-platform', badge: 'New' },
      { name: 'Sales Intelligence AI', href: '/services/ai-sales-intelligence-platform', badge: 'New' },
      { name: 'AI Decision Engine', href: '/services/ai-powered-decision-engine' },
      { name: 'Content Automation', href: '/services/intelligent-content-automation-platform' },
      { name: 'Smart CRM Suite', href: '/services/smart-crm-intelligence-suite' },
      { name: 'Financial Analytics', href: '/automated-financial-analytics-platform' },
      { name: 'Project Management', href: '/intelligent-project-management-suite' },
      { name: 'Business Intelligence', href: '/ai-business-intelligence' },
      { name: 'Marketing Automation', href: '/ai-marketing-automation' },
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
      { name: 'Transportation & Logistics', href: '/transportation-logistics-solutions' },
      { name: 'Real Estate Technology', href: '/real-estate-technology-solutions' },
      { name: 'Entertainment & Media', href: '/entertainment-media-solutions' },
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
      { name: 'Developer Resources', href: '/developer-resources' },
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
      { name: 'Leadership Team', href: '/leadership' },
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
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-757c
=======
    icon: <Rocket className="w-5 h-5 text-purple-400" />,
    color: 'from-purple-500 to-pink-600',
    services: [
      { name: 'AI Autonomous Decision Engine', href: '/ai-autonomous-decision-engine', featured: true },
      { name: 'Quantum CRM Suite', href: '/quantum-crm-suite', featured: true },
      { name: 'AI Content Factory Pro', href: '/ai-content-factory-pro' },
      { name: 'AI Legal Contract Analyzer', href: '/ai-legal-contract-analyzer' },
      { name: 'AI Financial Intelligence', href: '/ai-financial-intelligence' },
      { name: 'AI Healthcare Diagnostics', href: '/ai-healthcare-diagnostics' },
      { name: 'AI Sustainability Platform', href: '/ai-sustainability-platform' },
      { name: 'AI Education Platform', href: '/ai-education-platform' },
      { name: 'AI Emotional Intelligence', href: '/ai-emotional-intelligence-platform' },
      { name: 'AI Creativity Studio', href: '/ai-creativity-studio' }
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-df1a
    ]
  }
];

<<<<<<< HEAD
=======
const quickLinks = [
<<<<<<< HEAD
  { name: 'Home', href: '/', icon: <Home className="w-4 h-4" /> },
  { name: 'All Services', href: '/comprehensive-services-showcase-2025', icon: <Star className="w-4 h-4" /> },
  { name: 'Pricing', href: '/pricing', icon: <DollarSign className="w-4 h-4" /> },
  { name: 'Market Pricing', href: '/market-pricing', icon: <DollarSign className="w-4 h-4" /> },
  { name: 'Services Advertising', href: '/services-advertising', icon: <BookOpen className="w-4 h-4" /> },
  { name: 'About Us', href: '/about', icon: <Users className="w-4 h-4" /> },
  { name: 'Contact', href: '/contact', icon: <Mail className="w-4 h-4" /> },
  { name: 'Support', href: '/support', icon: <HelpCircle className="w-4 h-4" /> }
=======
  { name: 'Home', href: '/', icon: Home, color: 'text-blue-400' },
  { name: 'Services', href: '/services', icon: Zap, color: 'text-cyan-400' },
  { name: 'About', href: '/about', icon: Users, color: 'text-green-400' },
  { name: 'Contact', href: '/contact', icon: Mail, color: 'text-purple-400' },
  { name: 'Pricing', href: '/pricing', icon: TrendingUp, color: 'text-orange-400' },
  { name: 'Support', href: '/support', icon: HelpCircle, color: 'text-red-400' }
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-df1a
];

const industrySolutions = [
  { name: 'Healthcare', href: '/healthcare-solutions', icon: Pill, color: 'text-pink-400' },
  { name: 'Financial Services', href: '/financial-solutions', icon: Coins, color: 'text-yellow-400' },
  { name: 'Manufacturing', href: '/manufacturing-solutions', icon: Cpu, color: 'text-blue-400' },
  { name: 'Retail & E-commerce', href: '/retail-solutions', icon: Globe, color: 'text-green-400' },
  { name: 'Education', href: '/education-solutions', icon: GraduationCap, color: 'text-purple-400' },
  { name: 'Government', href: '/government-solutions', icon: Building2, color: 'text-indigo-400' }
];

<<<<<<< HEAD
const supportLinks = [
  { name: 'Contact Support', href: '/support', description: 'Get help from our team' },
  { name: 'Documentation', href: '/docs', description: 'Technical guides' },
  { name: 'API Reference', href: '/api-documentation', description: 'Developer documentation' },
  { name: 'Status Page', href: '/status', description: 'Service status' },
  { name: 'Training', href: '/training', description: 'Learn our platforms' },
  { name: 'Community', href: '/community', description: 'Connect with users' }
=======
const featuredServices = [
  { name: 'AI Consciousness Evolution 2029', href: '/ai-consciousness-evolution-2029', category: 'AI & Consciousness' },
  { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure', category: 'Enterprise IT' },
  { name: 'Space Mining Platform', href: '/space-mining-platform', category: 'Emerging Tech' },
  { name: 'AI Autonomous Decision Engine', href: '/ai-autonomous-decision-engine', category: 'Micro SAAS' }
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-df1a
];

export default function EnhancedSidebar2025() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

<<<<<<< HEAD
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-732a
interface EnhancedSidebar2025Props {
  isOpen: boolean;
  onClose: () => void;
}

interface EnhancedSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EnhancedSidebar2025({ isOpen, onClose }: EnhancedSidebarProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());

  const toggleSection = (title: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(title)) newExpanded.delete(title); else newExpanded.add(title);
    setExpandedSections(newExpanded);
  };

  const filteredServices = sidebarItems.flatMap(item =>
    item.children?.filter(child =>
      child.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      child.description?.toLowerCase().includes(searchQuery.toLowerCase())
    ) || []
  );
=======

  return (
    <motion.aside
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: isOpen ? 0 : -300, opacity: isOpen ? 1 : 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="fixed left-0 top-0 h-full w-80 bg-black/95 backdrop-blur-xl border-r border-cyan-500/20 shadow-2xl shadow-cyan-500/20 z-40 overflow-y-auto"
      aria-hidden={!isOpen}
    >
      {/* Header */}
      <div className="sticky top-0 bg-black/95 backdrop-blur-xl border-b border-cyan-500/20 p-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Zion Tech Group</h2>
              <p className="text-xs text-gray-400">Navigation</p>
            </div>
          </div>
          <button onClick={onClose} aria-label="Close sidebar" className="text-gray-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="space-y-2 text-xs text-gray-300">
          <div className="flex items-center space-x-2"><Phone className="w-3 h-3 text-cyan-400" /><span>{contactInfo.mobile}</span></div>
          <div className="flex items-center space-x-2"><Mail className="w-3 h-3 text-cyan-400" /><span>{contactInfo.email}</span></div>
          <div className="flex items-center space-x-2"><Globe className="w-3 h-3 text-cyan-400" /><span>{contactInfo.website}</span></div>
        </div>
      </div>

      {/* Sections */}
      <div className="p-4 space-y-2">
        {sidebarItems.map((item) => (
          <div key={item.name}>
            <button
              onClick={() => toggleSection(item.name)}
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
                  expandedSections.has(item.name) ? 'rotate-90' : ''
                }`} 
              />
            </button>
            
            <AnimatePresence>
              {expandedSections.has(item.name) && (
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
            </AnimatePresence>
          </div>
        ))}
      </div>
    </motion.aside>
=======
  const toggleCategory = (categoryTitle: string) => {
    setExpandedCategories(prev => 
      prev.includes(categoryTitle) 
        ? prev.filter(cat => cat !== categoryTitle)
        : [...prev, categoryTitle]
    );
  };

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-black/80 backdrop-blur-sm border border-white/20 rounded-lg text-white hover:bg-white/10 transition-all duration-200"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleSidebar}
            className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={{ x: '-100%' }}
        animate={{ x: isOpen ? 0 : '-100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className={`fixed left-0 top-0 h-full w-80 bg-black/95 backdrop-blur-xl border-r border-white/10 z-50 overflow-y-auto scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent`}
      >
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl opacity-20 -z-10" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Zion Tech</h2>
                <p className="text-cyan-400 text-xs">Revolutionary Solutions</p>
              </div>
            </div>
            <button
              onClick={toggleSidebar}
              className="lg:hidden p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Contact Info */}
          <div className="mb-8 p-4 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 rounded-xl">
            <h3 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
              <Mail className="w-4 h-4 text-cyan-400" />
              Contact Info
            </h3>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2 text-gray-300">
                <Phone className="w-3 h-3 text-cyan-400" />
                <span>{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Mail className="w-3 h-3 text-cyan-400" />
                <span>{contactInfo.email}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="w-3 h-3 text-cyan-400" />
                <span className="text-xs">{contactInfo.address}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
              <Zap className="w-4 h-4 text-cyan-400" />
              Quick Navigation
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <Link key={link.name} href={link.href}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white text-sm font-medium transition-all duration-200 flex items-center gap-2"
                  >
                    <link.icon className={`w-4 h-4 ${link.color}`} />
                    {link.name}
                  </motion.button>
                </Link>
              ))}
            </div>
          </div>

          {/* Featured Services */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-400" />
              Featured Services
            </h3>
            <div className="space-y-2">
              {featuredServices.map((service) => (
                <Link key={service.name} href={service.href}>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="p-3 bg-gradient-to-r from-white/5 to-white/10 border border-white/10 rounded-lg hover:border-cyan-400/50 transition-all duration-200"
                  >
                    <div className="text-sm font-medium text-white mb-1">{service.name}</div>
                    <div className="text-xs text-cyan-400">{service.category}</div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>

          {/* Service Categories */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
              <Layers className="w-4 h-4 text-cyan-400" />
              All Services
            </h3>
            <div className="space-y-2">
              {serviceCategories.map((category) => (
                <div key={category.title} className="border border-white/10 rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleCategory(category.title)}
                    className="w-full p-3 bg-gradient-to-r from-white/5 to-white/10 hover:from-white/10 hover:to-white/15 transition-all duration-200 flex items-center justify-between text-left"
                  >
                    <div className="flex items-center gap-3">
                      {category.icon}
                      <span className="text-sm font-medium text-white">{category.title}</span>
                    </div>
                    {expandedCategories.includes(category.title) ? (
                      <ChevronDown className="w-4 h-4 text-cyan-400" />
                    ) : (
                      <ChevronRight className="w-4 h-4 text-cyan-400" />
                    )}
                  </button>
                  
                  <AnimatePresence>
                    {expandedCategories.includes(category.title) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="p-3 bg-black/20 space-y-2">
                          {category.services.map((service) => (
                            <Link key={service.name} href={service.href}>
                              <motion.div
                                whileHover={{ x: 5 }}
                                className="flex items-center gap-2 p-2 rounded-lg hover:bg-white/5 transition-colors"
                              >
                                {service.featured && (
                                  <Star className="w-3 h-3 text-yellow-400" />
                                )}
                                <span className={`text-xs ${service.featured ? 'text-white font-medium' : 'text-gray-300'}`}>
                                  {service.name}
                                </span>
                              </motion.div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>

          {/* Industry Solutions */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
              <Target className="w-4 h-4 text-green-400" />
              Industry Solutions
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {industrySolutions.map((solution) => (
                <Link key={solution.name} href={solution.href}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full p-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white text-xs font-medium transition-all duration-200 flex items-center gap-2"
                  >
                    <solution.icon className={`w-3 h-3 ${solution.color}`} />
                    {solution.name}
                  </motion.button>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mb-8 p-4 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 rounded-xl">
            <h3 className="text-sm font-semibold text-white mb-3 text-center">Ready to Transform?</h3>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full p-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <ArrowRight className="w-4 h-4" />
                Get Started
              </motion.button>
            </Link>
          </div>

          {/* Footer */}
          <div className="text-center text-xs text-gray-400">
            <p>© 2025 Zion Tech Group</p>
            <p className="mt-1">Revolutionary Technology Solutions</p>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-20"
              animate={{
                x: [0, 20, 0],
                y: [0, -20, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 6 + i * 2,
                repeat: Infinity,
                delay: i * 0.8,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </motion.aside>
    </>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-df1a
  );
}