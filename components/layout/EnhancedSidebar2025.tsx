import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, ChevronRight, Home, Star, Users, 
  Settings, HelpCircle, Mail, Phone, MapPin,
  Brain, Atom, Shield, Rocket, DollarSign,
  Globe, Cpu, Database, Lock, Zap,
  TrendingUp, Award, CheckCircle, Clock,
  ArrowRight, Search, Menu, Target, BookOpen, 
  Truck, BarChart3, Sparkles, Eye, Lightbulb, 
  Palette, Code, FileText, BookOpen as BookIcon, 
  Users as UsersIcon, Cloud
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

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  website: 'ziontechgroup.com'
};

const sidebarItems: SidebarItem[] = [
  {
    name: 'AI & Consciousness',
    href: '/ai-services',
    icon: <Brain className="w-5 h-5" />,
    description: 'Advanced AI consciousness and evolution platforms',
    isHot: true,
    children: [
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
    icon: <Atom className="w-5 h-5" />,
    description: 'Next-generation quantum computing solutions',
    isHot: true,
    children: [
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
    icon: <Shield className="w-5 h-5" />,
    description: 'Enterprise-grade IT infrastructure and security',
    children: [
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
    icon: <Rocket className="w-5 h-5" />,
    description: 'AI-powered micro SAAS solutions',
    children: [
      { name: 'AI Content Factory Platform', href: '/ai-content-factory' },
      { name: 'CRM Intelligence & Automation', href: '/crm-intelligence-automation' },
      { name: 'AI Decision Engine Platform', href: '/ai-decision-engine' },
      { name: 'E-commerce Optimization', href: '/ecommerce-optimization-platform' },
      { name: 'AI HR & Talent Platform', href: '/ai-hr-talent-platform' },
      { name: 'Financial Analytics Platform', href: '/financial-analytics-platform' },
      { name: 'Supply Chain Intelligence', href: '/supply-chain-intelligence' },
      { name: 'Marketing Automation Platform', href: '/marketing-automation-platform' }
    ]
  },
  {
    name: 'Cloud & DevOps',
    href: '/cloud-devops',
    icon: <Cloud className="w-5 h-5" />,
    description: 'Cloud infrastructure and DevOps automation',
    children: [
      { name: 'Multi-Cloud Management', href: '/multi-cloud-management' },
      { name: 'DevOps Automation', href: '/devops-automation' },
      { name: 'Container Orchestration', href: '/container-orchestration' },
      { name: 'Serverless Architecture', href: '/serverless-architecture' },
      { name: 'Infrastructure as Code', href: '/infrastructure-as-code' },
      { name: 'CI/CD Pipelines', href: '/ci-cd-pipelines' },
      { name: 'Monitoring & Observability', href: '/monitoring-observability' },
      { name: 'Disaster Recovery', href: '/disaster-recovery' }
    ]
  },
  {
    name: 'Cybersecurity',
    href: '/cybersecurity',
    icon: <Lock className="w-5 h-5" />,
    description: 'Advanced security and threat protection',
    children: [
      { name: 'Zero Trust Architecture', href: '/zero-trust-architecture' },
      { name: 'Threat Intelligence', href: '/threat-intelligence' },
      { name: 'Incident Response', href: '/incident-response' },
      { name: 'Penetration Testing', href: '/penetration-testing' },
      { name: 'Security Compliance', href: '/security-compliance' },
      { name: 'Identity & Access Management', href: '/identity-access-management' },
      { name: 'Data Protection', href: '/data-protection' },
      { name: 'Security Training', href: '/security-training' }
    ]
  }
];

interface EnhancedSidebar2025Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function EnhancedSidebar2025({ isOpen, onClose }: EnhancedSidebar2025Props) {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());

  const toggleSection = (title: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(title)) {
      newExpanded.delete(title);
    } else {
      newExpanded.add(title);
    }
    setExpandedSections(newExpanded);
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
              <h2 className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Zion Tech Group
              </h2>
              <p className="text-xs text-gray-400">Navigation</p>
            </div>
          </div>
          <button 
            onClick={onClose} 
            aria-label="Close sidebar" 
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        {/* Search */}
        <div className="mb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50"
            />
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

      {/* Sections */}
      <div className="p-4 space-y-2">
        {sidebarItems.map((item) => (
          <div key={item.name}>
            <button
              onClick={() => toggleSection(item.name)}
              className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-200 group"
            >
              <div className="flex items-center space-x-3">
                <div className={`w-8 h-8 bg-gradient-to-r ${
                  item.isHot ? 'from-indigo-500 to-purple-600' : 'from-cyan-500 to-blue-600'
                } rounded-lg flex items-center justify-center`}>
                  {item.icon}
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-200">
                  {item.name}
                </span>
                {item.isHot && (
                  <span className="px-2 py-1 text-xs bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full">
                    HOT
                  </span>
                )}
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

      {/* Footer */}
      <div className="sticky bottom-0 bg-black/95 backdrop-blur-xl border-t border-cyan-500/20 p-4">
        <div className="text-center">
          <p className="text-xs text-gray-400 mb-2">© 2025 Zion Tech Group</p>
          <div className="flex justify-center space-x-4">
            <Link href="/privacy" className="text-xs text-gray-400 hover:text-cyan-400 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-xs text-gray-400 hover:text-cyan-400 transition-colors">
              Terms
            </Link>
            <Link href="/contact" className="text-xs text-gray-400 hover:text-cyan-400 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </motion.aside>
  );
}