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
  Network, Server, ShieldCheck,
  DollarSign, Phone, ArrowRight, Mail, MapPin, Dna, HelpCircle,
  Sparkles, Crown, Award, MessageCircle,
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
      { name: 'Quantum Data Center Platform', href: '/quantum-data-center-platform', description: 'Quantum data center solutions' },
      { name: 'Blockchain Enterprise Platform', href: '/blockchain-infrastructure-platform', description: 'Enterprise blockchain solutions' }
    ]
  },
  {
    title: 'Micro SAAS',
    icon: <Rocket className="w-5 h-5 text-purple-400" />,
    color: 'from-teal-500 to-emerald-600',
    description: 'Innovative business solutions for modern enterprises',
    badge: 'Popular',
    children: [
      { name: 'AI Content Factory Enterprise', href: '/ai-content-factory-enterprise', description: 'Enterprise AI content generation' },
      { name: 'Quantum CRM Suite Enterprise', href: '/quantum-crm-suite-enterprise', description: 'Quantum-enhanced CRM platform' },
      { name: 'AI Autonomous Decision Engine', href: '/ai-autonomous-decision-engine', description: 'Autonomous decision making' },
      { name: 'AI Healthcare Diagnostics Pro', href: '/ai-healthcare-diagnostics-pro', description: 'Advanced medical AI diagnostics' },
      { name: 'AI Legal Contract Analyzer', href: '/ai-legal-contract-analyzer', description: 'Legal AI analysis platform' },
      { name: 'AI Financial Intelligence', href: '/ai-financial-intelligence', description: 'Financial AI analytics' }
    ]
  },
  {
    title: 'Financial Technology',
    icon: <DollarSign className="w-5 h-5 text-yellow-400" />,
    color: 'from-amber-500 to-orange-600',
    description: 'Next-generation fintech and blockchain solutions',
    badge: 'FinTech',
    children: [
      { name: 'Quantum Trading Platform', href: '/quantum-trading-platform', description: 'Quantum-enhanced trading algorithms' },
      { name: 'AI Risk Management Suite', href: '/ai-risk-management-suite', description: 'Intelligent risk assessment' },
      { name: 'Blockchain Payment Gateway', href: '/blockchain-payment-gateway', description: 'Secure crypto payments' },
      { name: 'AI Credit Scoring Platform', href: '/ai-credit-scoring-platform', description: 'Advanced credit analysis' },
      { name: 'Quantum Portfolio Optimizer', href: '/quantum-portfolio-optimizer', description: 'Quantum portfolio management' },
      { name: 'DeFi Yield Farming Platform', href: '/defi-yield-farming-platform', description: 'Automated yield optimization' }
    ]
  },
  {
    title: 'Healthcare & Biotech',
    icon: <Dna className="w-5 h-5 text-pink-400" />,
    color: 'from-pink-500 to-rose-600',
    description: 'Revolutionary healthcare and biotechnology innovations',
    badge: 'HealthTech',
    children: [
      { name: 'AI Drug Discovery Platform', href: '/ai-drug-discovery-platform', description: 'AI-powered pharmaceutical research' },
      { name: 'Quantum Medical Imaging', href: '/quantum-medical-imaging', description: 'Quantum-enhanced diagnostics' },
      { name: 'Personalized Medicine AI', href: '/personalized-medicine-ai', description: 'Individualized treatment plans' },
      { name: 'Biotech Lab Automation', href: '/biotech-lab-automation', description: 'Automated laboratory processes' },
      { name: 'AI Clinical Trial Manager', href: '/ai-clinical-trial-manager', description: 'Intelligent trial management' },
      { name: 'Quantum DNA Sequencing', href: '/quantum-dna-sequencing', description: 'Ultra-fast genetic analysis' }
    ]
  }
];

export default function EnhancedSidebar2025() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  const toggleItem = (title: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(title)) {
      newExpanded.delete(title);
    } else {
      newExpanded.add(title);
    }
    setExpandedItems(newExpanded);
  };

  const filteredItems = navigationItems.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.children?.some(child => 
      child.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      child.description?.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  const closeSidebar = () => setIsOpen(false);

  // Close sidebar when route changes
  useEffect(() => {
    const handleRouteChange = () => setIsOpen(false);
    router.events.on('routeChangeStart', handleRouteChange);
    return () => router.events.off('routeChangeStart', handleRouteChange);
  }, [router]);

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-zion-slate-dark/80 backdrop-blur-sm border border-zion-cyan/20 rounded-lg text-zion-cyan hover:bg-zion-cyan/10 transition-all duration-300"
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
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            onClick={closeSidebar}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed left-0 top-0 h-full w-80 bg-zion-slate-dark/95 backdrop-blur-xl border-r border-zion-cyan/20 z-50 lg:hidden"
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-zion-cyan/20">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xl font-bold text-white">Zion Tech</span>
                </div>
                <button
                  onClick={closeSidebar}
                  className="p-2 text-zion-slate-light hover:text-white hover:bg-zion-slate-dark/50 rounded-lg transition-all duration-300"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Search */}
              <div className="p-6 border-b border-zion-cyan/20">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zion-slate-light" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                  />
                </div>
              </div>

              {/* Navigation */}
              <nav className="flex-1 overflow-y-auto p-6 space-y-4">
                {filteredItems.map((item) => (
                  <div key={item.title} className="space-y-2">
                    <button
                      onClick={() => toggleItem(item.title)}
                      className="w-full flex items-center justify-between p-3 bg-zion-slate-dark/50 hover:bg-zion-slate-dark/70 border border-zion-cyan/20 hover:border-zion-cyan/40 rounded-lg transition-all duration-300 group"
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center`}>
                          {item.icon}
                        </div>
                        <div className="text-left">
                          <h3 className="font-semibold text-white group-hover:text-zion-cyan transition-colors duration-300">
                            {item.title}
                          </h3>
                          <p className="text-xs text-zion-slate-light">{item.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {item.badge && (
                          <span className="px-2 py-1 text-xs font-medium bg-zion-cyan/20 text-zion-cyan rounded-full">
                            {item.badge}
                          </span>
                        )}
                        {expandedItems.has(item.title) ? (
                          <ChevronDown className="w-4 h-4 text-zion-cyan" />
                        ) : (
                          <ChevronRight className="w-4 h-4 text-zion-cyan" />
                        )}
                      </div>
                    </button>

                    {/* Children */}
                    <AnimatePresence>
                      {expandedItems.has(item.title) && item.children && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="ml-6 space-y-2"
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block p-3 bg-zion-slate-dark/30 hover:bg-zion-slate-dark/50 border border-zion-cyan/10 hover:border-zion-cyan/30 rounded-lg transition-all duration-300 group"
                            >
                              <h4 className="font-medium text-white group-hover:text-zion-cyan transition-colors duration-300">
                                {child.name}
                              </h4>
                              <p className="text-sm text-zion-slate-light mt-1">
                                {child.description}
                              </p>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </nav>

              {/* Footer */}
              <div className="p-6 border-t border-zion-cyan/20">
                <div className="space-y-3">
                  <Link
                    href="/contact"
                    className="flex items-center space-x-3 p-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
                  >
                    <Phone className="w-5 h-5" />
                    <span className="font-medium">Contact Us</span>
                  </Link>
                  <Link
                    href="/help"
                    className="flex items-center space-x-3 p-3 text-zion-slate-light hover:text-white hover:bg-zion-slate-dark/50 rounded-lg transition-all duration-300"
                  >
                    <HelpCircle className="w-5 h-5" />
                    <span>Help & Support</span>
                  </Link>
                </div>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}