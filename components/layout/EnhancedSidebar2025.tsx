<<<<<<< HEAD
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Menu, 
  X, 
  Zap, 
  Sparkles, 
  Phone, 
  Mail, 
  MapPin,
  ChevronRight,
  Search,
  Home,
  Brain,
  Atom,
  Shield,
  Rocket,
  Globe,
  ChevronDown,
  Cpu,
  Lock,
  Cloud,
  BarChart3,
  Settings,
  Eye,
  Award,
  Clock,
  Heart,
  Lightbulb,
  Users,
  FileText,
  HelpCircle,
  BookOpen,
  Target,
  TrendingUp,
  Star
=======
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
>>>>>>> 2bf5372f7382c686e4764d0c383c85abea9dafdc
} from 'lucide-react';

interface SidebarItem {
  name: string;
  href: string;
  icon?: React.ReactNode;
  children?: SidebarItem[];
}

<<<<<<< HEAD
const quickActions = [
  {
    name: 'Get Quote',
    href: '/request-quote/',
    color: 'from-green-500 to-emerald-600'
  },
  {
    name: 'Contact Us',
    href: '/contact/',
    color: 'from-blue-500 to-cyan-600'
=======
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
>>>>>>> 2bf5372f7382c686e4764d0c383c85abea9dafdc
  }
];

const sidebarItems: SidebarItem[] = [
  {
    name: 'Home',
    href: '/',
    icon: <Home className="w-4 h-4" />
  },
  {
    name: 'Services',
    href: '/services/',
    icon: <Sparkles className="w-4 h-4" />,
    children: [
      { name: 'AI Solutions', href: '/services/ai-solutions/' },
      { name: '5G Enterprise', href: '/services/5g-enterprise/' },
      { name: 'Quantum Tech', href: '/services/quantum-technology/' },
      { name: 'Legal Tech', href: '/services/ai-legal-tech/' },
      { name: 'Healthcare Analytics', href: '/services/ai-healthcare-analytics/' },
      { name: 'HR Recruitment', href: '/services/ai-hr-recruitment/' }
    ]
  },
  {
    name: 'Pricing',
    href: '/pricing/',
    icon: <Award className="w-4 h-4" />
  },
  {
    name: 'Blog',
    href: '/blog/',
    icon: <BookOpen className="w-4 h-4" />
  },
  {
    name: 'Contact',
    href: '/contact/',
    icon: <Phone className="w-4 h-4" />
  }
];

<<<<<<< HEAD
export default function EnhancedSidebar2025() {
  const [isOpen, setIsOpen] = useState(false);
=======
export default function EnhancedSidebar2025({ isOpen, onClose }: EnhancedSidebar2025Props) {
>>>>>>> 2bf5372f7382c686e4764d0c383c85abea9dafdc
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleSection = (sectionName: string) => {
    const newExpanded = new Set(expandedSections);
<<<<<<< HEAD
    if (newExpanded.has(sectionName)) {
      newExpanded.delete(sectionName);
    } else {
      newExpanded.add(sectionName);
=======
    if (newExpanded.has(title)) {
      newExpanded.delete(title);
    } else {
      newExpanded.add(title);
>>>>>>> 2bf5372f7382c686e4764d0c383c85abea9dafdc
    }
    setExpandedSections(newExpanded);
  };

  const filteredItems = sidebarItems.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.children?.some(child => child.name.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
<<<<<<< HEAD
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-40 p-3 bg-black/80 backdrop-blur-lg border border-cyan-500/30 rounded-lg text-cyan-400 hover:text-white hover:bg-cyan-500/20 transition-all duration-200"
      >
        <Menu className="w-6 h-6" />
      </button>
=======
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
>>>>>>> 2bf5372f7382c686e4764d0c383c85abea9dafdc

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      {isOpen && (
        <aside className="fixed left-0 top-0 h-full w-80 bg-black/95 backdrop-blur-xl border-r border-cyan-500/30 z-50 overflow-y-auto">
          {/* Header */}
          <div className="p-6 border-b border-cyan-500/30">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
<<<<<<< HEAD
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl blur-lg opacity-50" />
                </div>
                <div>
                  <h2 className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Zion Tech Group
                  </h2>
                  <p className="text-xs text-gray-400">Future Technology Solutions</p>
                </div>
=======
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
>>>>>>> 2bf5372f7382c686e4764d0c383c85abea9dafdc
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors duration-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white/10 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:bg-white/20 transition-all duration-200"
              />
            </div>
          </div>
<<<<<<< HEAD

          {/* Quick Actions */}
          <div className="p-6 border-b border-cyan-500/30">
            <h3 className="text-sm font-semibold text-gray-300 mb-3 flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Quick Actions</span>
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {quickActions.map((action) => (
                <Link
                  key={action.name}
                  href={action.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-center space-x-2 px-3 py-2 text-xs font-medium text-white rounded-lg bg-gradient-to-r ${action.color} hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl`}
                >
                  <span>{action.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation Items */}
          <div className="p-6">
            <h3 className="text-sm font-semibold text-gray-300 mb-4">Navigation</h3>
            <nav className="space-y-2">
              {filteredItems.map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    <div>
                      <button
                        onClick={() => toggleSection(item.name)}
                        className="w-full flex items-center justify-between p-3 text-left text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
                      >
                        <div className="flex items-center space-x-3">
                          {item.icon}
                          <span>{item.name}</span>
                        </div>
                        <ChevronRight 
                          className={`w-4 h-4 transition-transform duration-200 ${
                            expandedSections.has(item.name) ? 'rotate-90' : ''
                          }`} 
                        />
                      </button>
                      {expandedSections.has(item.name) && (
                        <div className="ml-6 mt-2 space-y-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              onClick={() => setIsOpen(false)}
                              className="block p-2 text-sm text-gray-400 hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-all duration-200"
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center space-x-3 p-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
                    >
                      {item.icon}
                      <span>{item.name}</span>
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>

          {/* Contact Information */}
          <div className="p-6 border-t border-cyan-500/30">
            <h3 className="text-sm font-semibold text-gray-300 mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-gray-400">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-400">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-400">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>Middletown, DE</span>
              </div>
            </div>
          </div>
        </aside>
      )}
    </>
=======
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
>>>>>>> 2bf5372f7382c686e4764d0c383c85abea9dafdc
  );
}