import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, Zap, Phone, Mail, ChevronDown, Search,
  Brain, Cpu, Rocket, Shield, Atom, Globe, Star, Users,
  Target, Microscope, Database, Lock, Cloud, BarChart3, Settings,
  Eye, Code, Palette, Layers, Network, Server, ShieldCheck, Building
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
    name: 'AI & Consciousness',
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
    name: 'Quantum & Emerging Tech',
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
    name: 'Enterprise IT',
    icon: <Shield className="w-5 h-5 text-green-400" />,
    color: 'from-blue-500 to-cyan-600',
    description: 'Advanced enterprise infrastructure and security solutions',
    badge: 'Enterprise',
    children: [
      { name: 'Quantum Cloud Infrastructure Pro', href: '/quantum-cloud-infrastructure-pro', description: 'Quantum-enhanced cloud platform' },
      { name: 'Edge Computing Orchestrator Pro', href: '/edge-computing-orchestrator-pro', description: 'Advanced edge computing' },
      { name: 'Zero Trust Security Platform', href: '/zero-trust-security-platform', description: 'Comprehensive zero trust security' },
      { name: 'AI-Powered DevOps Platform', href: '/ai-powered-devops-platform', description: 'Intelligent DevOps automation' },
      { name: 'Quantum Database Platform', href: '/quantum-database-platform', description: 'Quantum-enhanced data storage' },
      { name: 'Enterprise Blockchain Platform', href: '/enterprise-blockchain-platform', description: 'Enterprise blockchain solutions' }
    ]
  },
  {
    name: 'Micro SaaS',
    icon: <Rocket className="w-5 h-5 text-purple-400" />,
    color: 'from-teal-500 to-emerald-600',
    description: 'Innovative business solutions for modern enterprises',
    badge: 'Popular',
    children: [
      { name: 'AI Workflow Automation', href: '/ai-workflow-automation', description: 'Intelligent process automation' },
      { name: 'Blockchain Enterprise Solutions', href: '/blockchain-enterprise-solutions', description: 'Enterprise blockchain platform' },
      { name: 'IoT Data Analytics Platform', href: '/iot-data-analytics-platform', description: 'IoT insights and analytics' },
      { name: 'AI Legal Document Automation', href: '/ai-legal-document-automation', description: 'Legal document processing' },
      { name: 'AI Healthcare Analytics', href: '/ai-healthcare-analytics', description: 'Healthcare data insights' },
      { name: 'AI Financial Trading Platform', href: '/ai-financial-trading-platform', description: 'AI-powered trading' }
    ]
  },
  {
    name: 'Research & Development',
    icon: <Microscope className="w-5 h-5 text-orange-400" />,
    color: 'from-orange-500 to-red-600',
    description: 'Cutting-edge research and development services',
    badge: 'Research',
    children: [
      { name: 'AI Autonomous Research Assistant', href: '/ai-autonomous-research-assistant', description: 'Self-directed research AI' },
      { name: 'Quantum Neural Network Platform', href: '/quantum-neural-network-platform', description: 'Quantum AI research' },
      { name: 'Biotechnology Research Platform', href: '/biotechnology-research-platform', description: 'Bio-tech research tools' },
      { name: 'Space Technology Research', href: '/space-technology-research', description: 'Space tech development' },
      { name: 'Neurotechnology Research', href: '/neurotechnology-research', description: 'Brain-computer interface research' },
      { name: 'Climate AI Research Platform', href: '/climate-ai-research-platform', description: 'Climate change AI solutions' }
    ]
  }
];

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

export default function EnhancedSidebar2025() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  const handleDropdownToggle = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const filteredServices = navigationItems.flatMap(item => 
    item.children?.filter(child => 
      child.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      child.description?.toLowerCase().includes(searchQuery.toLowerCase())
    ) || []
  );

  const isActive = (href: string) => {
    return location.pathname === href || location.pathname.startsWith(href + '/');
  };

  return (
    <>
      {/* Sidebar Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-4 left-4 z-50 p-2 bg-black/80 backdrop-blur-lg border border-cyan-500/30 rounded-lg text-cyan-400 hover:text-white hover:bg-cyan-500/20 transition-all duration-200"
      >
        <Zap className="w-6 h-6" />
      </button>

      {/* Sidebar Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed left-0 top-0 h-full w-80 bg-black/95 backdrop-blur-xl border-r border-cyan-500/30 shadow-2xl shadow-cyan-500/20 z-50 overflow-y-auto"
          >
            {/* Header */}
            <div className="p-6 border-b border-cyan-500/20">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                      Zion Tech Group
                    </h1>
                    <p className="text-xs text-gray-400">Future Technology Solutions</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
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
                  className="w-full pl-10 pr-4 py-2 bg-white/10 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
                />
              </div>
            </div>

            {/* Navigation */}
            <div className="p-4 space-y-2">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <button
                    onClick={() => handleDropdownToggle(item.name)}
                    className={`w-full flex items-center justify-between p-3 text-left rounded-lg transition-colors ${
                      isActive(item.href)
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      {item.icon}
                      <span className="font-medium">{item.name}</span>
                      {item.badge && (
                        <span className={`px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${item.color} text-white`}>
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                  </button>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="ml-6 mt-2 space-y-1"
                      >
                        {item.children?.map((child) => (
                          <Link
                            key={child.name}
                            to={child.href}
                            onClick={() => setIsOpen(false)}
                            className={`block p-3 text-sm rounded-lg transition-colors ${
                              isActive(child.href)
                                ? 'text-cyan-300 bg-cyan-500/10 border border-cyan-500/20'
                                : 'text-gray-400 hover:text-white hover:bg-white/5'
                            }`}
                          >
                            <div className="font-medium">{child.name}</div>
                            <div className="text-xs text-gray-500">{child.description}</div>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="p-4 border-t border-cyan-500/20 mt-auto">
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-2 text-cyan-300">
                  <Phone className="w-4 h-4" />
                  <span>{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center space-x-2 text-cyan-300">
                  <Mail className="w-4 h-4" />
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <Building className="w-4 h-4" />
                  <span className="text-xs">{contactInfo.address}</span>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-cyan-500/20">
                <Link
                  to="/contact"
                  className="block w-full text-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:shadow-lg transition-all duration-200"
                >
                  Get Started Today
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}