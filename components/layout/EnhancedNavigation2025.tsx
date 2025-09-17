import React, { useState, useEffect } from 'react';
import Link from 'next/link';
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
      { name: 'Quantum Network Security', href: '/quantum-network-security', description: 'Quantum-secured networking' },
      { name: 'Enterprise AI Platform', href: '/enterprise-ai-platform', description: 'Enterprise AI solutions' }
    ]
  },
  {
    name: 'Micro SAAS Solutions',
    href: '/micro-saas-services',
    icon: <Code className="w-5 h-5" />,
    description: 'Specialized software solutions for specific business needs',
    badge: 'Specialized',
    color: 'from-green-500 to-emerald-600',
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
    name: 'Sustainability & Green Tech',
    href: '/sustainability',
    icon: <Target className="w-5 h-5" />,
    description: 'Environmental technology and sustainable business solutions',
    badge: 'Green',
    color: 'from-emerald-500 to-green-600',
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

export function EnhancedNavigation2025() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/90 backdrop-blur-xl border-b border-zinc-800/50' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold neon-cyan">ZION</span>
              <span className="text-sm text-zinc-400 -mt-1">TECH GROUP</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className="nav-item flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 group-hover:bg-zinc-800/50"
                >
                  {item.icon}
                  <span>{item.name}</span>
                  {item.badge && (
                    <span className="px-2 py-1 text-xs bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-full">
                      {item.badge}
                    </span>
                  )}
                  <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-96 bg-zinc-900/95 backdrop-blur-xl border border-zinc-800 rounded-xl shadow-2xl overflow-hidden"
                    >
                      <div className="p-4">
                        <div className="mb-4">
                          <h3 className="text-lg font-semibold text-white mb-2">{item.name}</h3>
                          <p className="text-sm text-zinc-400">{item.description}</p>
                        </div>
                        <div className="grid grid-cols-1 gap-2">
                          {item.children?.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-zinc-800/50 transition-all duration-200 group"
                            >
                              <div className="w-8 h-8 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                                <ArrowRight className="w-4 h-4 text-white" />
                              </div>
                              <div>
                                <span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors duration-200">
                                  {child.name}
                                </span>
                                <p className="text-xs text-zinc-500 group-hover:text-zinc-400 transition-colors duration-200">
                                  {child.description}
                                </p>
                              </div>
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

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Contact Info */}
            <div className="hidden lg:flex items-center space-x-4 text-sm text-zinc-300">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-zion-cyan" />
                <span>{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-zion-cyan" />
                <span>{contactInfo.email}</span>
              </div>
            </div>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="btn-futuristic hidden lg:flex items-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-zinc-800/50 transition-all duration-200"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-zinc-400" />
              ) : (
                <Menu className="w-6 h-6 text-zinc-400" />
              )}
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
            className="lg:hidden bg-zinc-900/95 backdrop-blur-xl border-t border-zinc-800/50 overflow-hidden"
          >
            <div className="container mx-auto px-6 py-6">
              {/* Mobile Navigation */}
              <nav className="space-y-4">
                {navigationItems.map((item) => (
                  <div key={item.name}>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center justify-between w-full p-3 rounded-lg hover:bg-zinc-800/50 transition-all duration-200"
                    >
                      <div className="flex items-center space-x-3">
                        {item.icon}
                        <span className="font-medium text-zinc-300">{item.name}</span>
                        {item.badge && (
                          <span className="px-2 py-1 text-xs bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-full">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <ChevronDown className={`w-4 h-4 text-zinc-400 transition-transform duration-200 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    </button>

                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="ml-6 mt-2 space-y-2"
                      >
                        {item.children?.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-zinc-800/50 transition-all duration-200"
                          >
                            <div className="w-6 h-6 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center">
                              <ArrowRight className="w-3 h-3 text-white" />
                            </div>
                            <div>
                              <span className="text-sm text-zinc-400">{child.name}</span>
                              <p className="text-xs text-zinc-500">{child.description}</p>
                            </div>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ))}
              </nav>

              {/* Mobile Contact Info */}
              <div className="mt-6 pt-6 border-t border-zinc-800/50 space-y-3">
                <div className="flex items-center space-x-3 text-zinc-300">
                  <Phone className="w-4 h-4 text-zion-cyan" />
                  <span>{contactInfo.mobile}</span>
                </div>
                <div className="flex items-center space-x-3 text-zinc-300">
                  <Mail className="w-4 h-4 text-zion-cyan" />
                  <span>{contactInfo.email}</span>
                </div>
                <div className="flex items-center space-x-3 text-zinc-300">
                  <MapPin className="w-4 h-4 text-zion-cyan" />
                  <span>{contactInfo.address}</span>
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="mt-6">
                <Link
                  href="/contact"
                  className="btn-futuristic w-full text-center"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
