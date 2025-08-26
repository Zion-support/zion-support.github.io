import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, ChevronRight, Home, Star, Users, 
  Settings, HelpCircle, Mail, Phone, MapPin,
  Brain, Atom, Shield, Rocket, DollarSign,
  Globe, Cpu, Database, Lock, Zap,
  TrendingUp, Award, CheckCircle, Clock,
  ArrowRight, Search, Menu, X as CloseIcon,
  Target, BookOpen, Truck, BarChart3,
  Sparkles, Eye, Lightbulb, Palette, Code,
  FileText, BookOpen as BookIcon, Users as UsersIcon
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
    ]
  }
];

<<<<<<< HEAD
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
  );
}