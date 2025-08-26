import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronDown, Search, 
  Brain, Cpu, Rocket, Shield, 
  Zap, Globe, Star, Users,
  Target, Microscope, Atom, Database,
  Lock, Cloud, BarChart3, Settings,
  Eye, Code, Palette, Layers,
  Network, Server, ShieldCheck, ZapIcon,
  GlobeIcon, StarIcon, TrendingUpIcon, UsersIcon,
  CheckCircleIcon, ArrowRightIcon, CpuIcon,
  DollarSign, Phone, ArrowRight, Mail, MapPin, Dna, HelpCircle,
  Sparkles, Crown, Award, Target as TargetIcon, Zap as ZapIcon2, MessageCircle
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
}

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const navigationItems: NavigationItem[] = [
  {
    name: 'All Services',
    href: '/comprehensive-services-showcase-2025-enhanced',
    icon: <Globe className="w-5 h-5" />,
    description: 'Complete portfolio of all technology services',
    badge: 'Enhanced',
    children: [
      { name: 'Enhanced Services Showcase', href: '/comprehensive-services-showcase-2025-enhanced', description: 'Complete enhanced services portfolio' },
      { name: 'Original Showcase', href: '/comprehensive-services-showcase-2025', description: 'Original services portfolio' },
      { name: 'Service Categories', href: '/comprehensive-services-showcase-2025-enhanced#categories', description: 'Browse by category' },
      { name: 'Pricing Comparison', href: '/comprehensive-services-showcase-2025-enhanced#pricing', description: 'Compare service costs' },
      { name: 'Service Search', href: '/comprehensive-services-showcase-2025-enhanced#search', description: 'Find specific services' },
      { name: 'Enhanced Pricing', href: '/enhanced-pricing-2025', description: 'Comprehensive pricing and market comparisons' },
      { name: 'Latest Innovations', href: '/revolutionary-2025-services-showcase', description: 'Cutting-edge solutions' },
      { name: '2026 Services', href: '/revolutionary-2026-services', description: 'Next generation solutions' },
      { name: '2027 Services', href: '/revolutionary-2027-services-showcase', description: 'Future-ready services' },
      { name: 'Ultimate 2026', href: '/ultimate-2026-services-showcase', description: 'Premium service collection' }
    ]
  },
  {
    name: '🧠 AI & Consciousness',
    href: '/ai-services',
    icon: <Brain className="w-5 h-5" />,
    description: 'Revolutionary AI automation and autonomous business processing',
    badge: 'New',
    color: 'from-violet-500 to-purple-600',
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
    href: '/quantum-services',
    icon: <Atom className="w-5 h-5" />,
    description: 'Breakthrough quantum computing and space technology solutions',
    badge: 'Revolutionary',
    color: 'from-indigo-500 to-blue-600',
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
    href: '/enterprise-it',
    icon: <Shield className="w-5 h-5" />,
    description: 'Advanced enterprise infrastructure and security solutions',
    badge: 'Enterprise',
    color: 'from-blue-500 to-cyan-600',
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
    href: '/micro-saas',
    icon: <Rocket className="w-5 h-5" />,
    description: 'Innovative micro SaaS solutions for modern businesses',
    badge: 'Innovative',
    color: 'from-emerald-500 to-green-600',
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
    href: '/research-development',
    icon: <Microscope className="w-5 h-5" />,
    description: 'Cutting-edge research and development services',
    badge: 'Research',
    color: 'from-orange-500 to-red-600',
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

const quickActions = [
  { name: 'Get Quote', href: '/quote', icon: <DollarSign className="w-4 h-4" />, color: 'from-green-500 to-emerald-600' },
  { name: 'Book Demo', href: '/demo', icon: <Eye className="w-4 h-4" />, color: 'from-blue-500 to-cyan-600' },
  { name: 'Live Chat', href: '/chat', icon: <MessageCircle className="w-4 h-4" />, color: 'from-purple-500 to-pink-600' }
];

export default function EnhancedNavigation2025() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/95 backdrop-blur-xl border-b border-cyan-500/30 shadow-2xl shadow-cyan-500/20' 
        : 'bg-black/80 backdrop-blur-lg'
    }`}>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-cyan-900/50 to-blue-900/50 border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex flex-col sm:flex-row items-center justify-between text-sm">
            <div className="flex items-center gap-4 text-cyan-300">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>{contactInfo.email}</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Link to="/contact" className="text-cyan-300 hover:text-white transition-colors">
                Get Started Today
              </Link>
              <Link to="/support" className="text-cyan-300 hover:text-white transition-colors">
                Support
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Zion Tech Group
                </h1>
                <p className="text-xs text-gray-400">Future Technology Solutions</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative">
                <button
                  onClick={() => handleDropdownToggle(item.name)}
                  className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white rounded-lg hover:bg-white/5 transition-all duration-200 group-hover:bg-gradient-to-r group-hover:from-cyan-500/10 group-hover:to-blue-500/10"
                >
                  {item.icon}
                  <span className="font-medium">{item.name}</span>
                  {item.badge && (
                    <span className={`px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${item.color} text-white`}>
                      {item.badge}
                    </span>
                  )}
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-xl border border-cyan-500/30 rounded-xl shadow-2xl shadow-cyan-500/20 overflow-hidden"
                    >
                      <div className="p-4">
                        <div className="mb-3">
                          <h3 className="text-lg font-semibold text-white mb-2">{item.name}</h3>
                          <p className="text-sm text-gray-400">{item.description}</p>
                        </div>
                        <div className="space-y-1">
                          {item.children?.map((child) => (
                            <Link
                              key={child.name}
                              to={child.href}
                              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors group"
                            >
                              <div className="w-2 h-2 bg-cyan-400 rounded-full group-hover:bg-cyan-300 transition-colors" />
                              <div className="flex-1">
                                <div className="text-sm font-medium text-white group-hover:text-cyan-300 transition-colors">
                                  {child.name}
                                </div>
                                <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                                  {child.description}
                                </div>
                              </div>
                              <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors" />
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 pl-10 pr-4 py-2 bg-white/10 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
              />
            </div>

            {/* Quick Actions */}
            <div className="hidden md:flex items-center space-x-2">
              {quickActions.map((action) => (
                <Link
                  key={action.name}
                  to={action.href}
                  className={`px-4 py-2 rounded-lg bg-gradient-to-r ${action.color} text-white text-sm font-medium hover:shadow-lg transition-all duration-200 hover:scale-105`}
                >
                  {action.icon}
                  <span className="ml-2">{action.name}</span>
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-cyan-500/30"
          >
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
                />
              </div>

              {/* Mobile Navigation Items */}
              <div className="space-y-2">
                {navigationItems.map((item) => (
                  <div key={item.name}>
                    <button
                      onClick={() => handleDropdownToggle(item.name)}
                      className="w-full flex items-center justify-between p-3 text-left text-gray-300 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
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

                    {/* Mobile Dropdown */}
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
                              className="block p-3 text-sm text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
                            >
                              {child.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

              {/* Mobile Quick Actions */}
              <div className="pt-4 border-t border-cyan-500/30">
                <div className="grid grid-cols-1 gap-3">
                  {quickActions.map((action) => (
                    <Link
                      key={action.name}
                      to={action.href}
                      className={`flex items-center justify-center px-4 py-3 rounded-lg bg-gradient-to-r ${action.color} text-white font-medium hover:shadow-lg transition-all duration-200`}
                    >
                      {action.icon}
                      <span className="ml-2">{action.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
