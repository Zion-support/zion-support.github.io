import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronDown, ChevronRight,
  Home, Search, Settings, User, 
  Brain, Cpu, Rocket, Shield, 
  Zap, Globe, Star, Users,
  Target, Microscope, Atom, Database,
  Lock, Cloud, BarChart3, Settings as SettingsIcon,
  Eye, Code, Palette, Layers,
  Network, Server, ShieldCheck, ZapIcon,
  GlobeIcon, StarIcon, TrendingUpIcon, UsersIcon,
  CheckCircleIcon, ArrowRightIcon, CpuIcon,
  DollarSign, Phone, ArrowRight, Mail, MapPin, Dna, HelpCircle,
  Sparkles, Crown, Award, Target as TargetIcon, Zap as ZapIcon2, MessageCircle,
  Calendar, ExternalLink, BookOpen, FileText, Video, Headphones
} from 'lucide-react';

interface SidebarItem {
  name: string;
  href: string;
  icon?: React.ReactNode;
  description?: string;
  children?: SidebarItem[];
  badge?: string;
}

const navigationItems = [
  {
    title: 'AI & Consciousness',
    icon: <Brain className="w-5 h-5 text-cyan-400" />,
    color: 'from-violet-500 to-purple-600',
    description: 'Revolutionary AI consciousness and emotional intelligence',
    badge: 'New',
    children: [
      { name: 'AI Consciousness Evolution Pro', href: '/ai-consciousness-evolution-pro', description: 'Advanced AI consciousness development' },
      { name: 'Quantum AI Fusion Platform', href: '/quantum-ai-fusion-platform', description: 'Quantum-AI hybrid computing' },
      { name: 'AI Autonomous Ecosystem', href: '/ai-autonomous-ecosystem', description: 'Self-managing AI systems' },
      { name: 'AI Ethics & Governance', href: '/ai-ethics-governance-platform', description: 'Ethical AI frameworks' },
      { name: 'AI Creativity Studio Pro', href: '/ai-creativity-studio-pro', description: 'AI-powered creative platform' },
      { name: 'AI Legal Contract Analyzer', href: '/ai-legal-contract-analyzer', description: 'Legal AI analysis platform' }
    ]
  },
  {
    title: 'Quantum & Emerging Tech',
    icon: <Atom className="w-5 h-5 text-blue-400" />,
    color: 'from-indigo-500 to-blue-600',
    description: 'Breakthrough quantum computing and space technology solutions',
    badge: 'Revolutionary',
    children: [
      { name: 'Quantum Internet Security', href: '/quantum-internet-security-platform', description: 'Unhackable quantum communication' },
      { name: 'Quantum Bio-Computing', href: '/quantum-bio-computing-platform', description: 'Quantum molecular simulation' },
      { name: 'Brain-Computer Interface', href: '/brain-computer-interface-platform', description: 'Neural interface platform' },
      { name: 'Space Mining Platform', href: '/space-mining-platform', description: 'Autonomous space mining' },
      { name: 'Quantum Energy Platform', href: '/quantum-energy-platform', description: 'Quantum energy optimization' },
      { name: 'Quantum Materials Discovery', href: '/quantum-materials-discovery', description: 'Quantum materials research' }
    ]
  },
  {
    title: 'Enterprise IT',
    icon: <Shield className="w-5 h-5 text-green-400" />,
    color: 'from-blue-500 to-cyan-600',
    description: 'Advanced enterprise infrastructure and security solutions',
    badge: 'Enterprise',
    children: [
      { name: 'Quantum Cloud Infrastructure Pro', href: '/quantum-cloud-infrastructure-pro', description: 'Quantum-enhanced cloud platform' },
      { name: 'Edge Computing Orchestrator Pro', href: '/edge-computing-orchestrator-pro', description: 'Advanced edge computing' },
      { name: 'Zero Trust Security Platform', href: '/zero-trust-security-platform', description: 'Comprehensive zero trust security' },
      { name: 'AI-Powered DevOps Platform', href: '/ai-powered-devops-platform', description: 'Intelligent DevOps automation' },
      { name: 'Quantum Network Security', href: '/quantum-network-security', description: 'Quantum-secured networking' },
      { name: 'Enterprise AI Platform', href: '/enterprise-ai-platform', description: 'Enterprise AI solutions' }
    ]
  },
  {
    title: 'Micro SAAS Solutions',
    icon: <Code className="w-5 h-5 text-purple-400" />,
    color: 'from-teal-500 to-emerald-600',
    description: 'Specialized software solutions for specific business needs',
    badge: 'Specialized',
    children: [
      { name: 'AI Business Intelligence Suite', href: '/ai-business-intelligence-suite', description: 'AI-powered business analytics' },
      { name: 'Customer Experience Platform', href: '/customer-experience-platform', description: 'Customer engagement solutions' },
      { name: 'Supply Chain Optimization', href: '/supply-chain-optimization', description: 'Supply chain management' },
      { name: 'HR & Talent Management', href: '/hr-talent-management', description: 'Human resources platform' },
      { name: 'Content Creation Studio', href: '/content-creation-studio', description: 'AI content generation' },
      { name: 'Financial Analytics Platform', href: '/financial-analytics-platform', description: 'Financial data analysis' }
    ]
  },
  {
    title: 'Sustainability & Green Tech',
    icon: <Target className="w-5 h-5 text-emerald-400" />,
    color: 'from-emerald-500 to-green-600',
    description: 'Environmental technology and sustainable business solutions',
    badge: 'Green',
    children: [
      { name: 'Carbon Footprint Tracker', href: '/carbon-footprint-tracker', description: 'Environmental impact monitoring' },
      { name: 'Renewable Energy Platform', href: '/renewable-energy-platform', description: 'Clean energy solutions' },
      { name: 'Sustainable Supply Chain', href: '/sustainable-supply-chain', description: 'Green supply chain management' },
      { name: 'Green Building Analytics', href: '/green-building-analytics', description: 'Sustainable construction' },
      { name: 'Climate Prediction Engine', href: '/climate-prediction-engine', description: 'Climate modeling platform' },
      { name: 'ESG Reporting Platform', href: '/esg-reporting-platform', description: 'Environmental reporting' }
    ]
  }
];

export function EnhancedSidebar2025() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      setIsOpen(false);
      setActiveDropdown(null);
    };

    router.events.on('routeChangeStart', handleRouteChange);
    return () => router.events.off('routeChangeStart', handleRouteChange);
  }, [router]);

  const toggleDropdown = (title: string) => {
    setActiveDropdown(activeDropdown === title ? null : title);
  };

  const filteredItems = navigationItems.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.children?.some(child => 
      child.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      child.description?.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={{ x: -300 }}
        animate={{ x: isOpen ? 0 : -300 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className={`fixed left-0 top-0 h-full w-80 bg-zinc-900/95 backdrop-blur-xl border-r border-zinc-800/50 z-50 overflow-y-auto`}
      >
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold neon-cyan">ZION</span>
                <span className="text-xs text-zinc-400 -mt-1">TECH GROUP</span>
              </div>
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="lg:hidden p-2 text-zinc-400 hover:text-white hover:bg-zinc-800/50 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Search */}
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-zinc-800/50 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
            </div>
          </div>

          {/* Navigation */}
          <nav className="space-y-2">
            {filteredItems.map((item) => (
              <div key={item.title}>
                <button
                  onClick={() => toggleDropdown(item.title)}
                  className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-zinc-800/50 transition-all duration-200 group"
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-8 h-8 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center`}>
                      {item.icon}
                    </div>
                    <div className="text-left">
                      <div className="flex items-center space-x-2">
                        <span className="font-medium text-white">{item.title}</span>
                        {item.badge && (
                          <span className="px-2 py-1 text-xs bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-full">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-zinc-400">{item.description}</p>
                    </div>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-zinc-400 transition-transform duration-200 ${
                    activeDropdown === item.title ? 'rotate-180' : ''
                  }`} />
                </button>

                {/* Dropdown Items */}
                <AnimatePresence>
                  {activeDropdown === item.title && (
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
                          className="block p-3 rounded-lg hover:bg-zinc-800/50 transition-all duration-200 group"
                        >
                          <div className="flex items-center space-x-3">
                            <div className="w-6 h-6 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                              <ArrowRight className="w-3 h-3 text-white" />
                            </div>
                            <div>
                              <span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors duration-200">
                                {child.name}
                              </span>
                              <p className="text-xs text-zinc-500 group-hover:text-zinc-400 transition-colors duration-200">
                                {child.description}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Quick Actions */}
          <div className="mt-8 pt-6 border-t border-zinc-800/50">
            <h3 className="text-sm font-semibold text-zinc-300 mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <Link
                href="/contact"
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-zinc-800/50 transition-all duration-200 group"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors duration-200">
                  Get Quote
                </span>
              </Link>
              <Link
                href="/demo"
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-zinc-800/50 transition-all duration-200 group"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-zion-purple to-zion-cyan rounded-lg flex items-center justify-center">
                  <Video className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors duration-200">
                  Book Demo
                </span>
              </Link>
              <Link
                href="/support"
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-zinc-800/50 transition-all duration-200 group"
              >
                <div className="w-8 h-8 bg-gradient-to-br from-zion-green to-zion-cyan rounded-lg flex items-center justify-center">
                  <Headphones className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors duration-200">
                  Support
                </span>
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-8 pt-6 border-t border-zinc-800/50">
            <h3 className="text-sm font-semibold text-zinc-300 mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm text-zinc-400">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-zion-cyan" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-zion-cyan" />
                <span>kleber@ziontechgroup.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-zion-cyan" />
                <span>364 E Main St STE 1008 Middletown DE 19709</span>
              </div>
            </div>
          </div>
        </div>
      </motion.aside>

      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-4 left-4 z-30 lg:hidden p-2 bg-zinc-900/90 backdrop-blur-sm border border-zinc-800/50 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800/90 transition-all duration-200"
      >
        <Menu className="w-5 h-5" />
      </button>
    </>
  );
}