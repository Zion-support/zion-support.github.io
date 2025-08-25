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
  DollarSign, Phone, ArrowRight, Mail, MapPin, Dna, BookOpen, Building
} from 'lucide-react';

interface NavigationItem {
  name: string;
  href: string;
  icon?: React.ReactNode;
  description?: string;
  children?: NavigationItem[];
  badge?: string;
  title?: string;
}

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const navigationItems: NavigationItem[] = [
  {
    name: '🚀 All Services',
    href: '/comprehensive-services-showcase-2025',
    icon: <Globe className="w-5 h-5" />,
    description: 'Complete portfolio of all technology services',
    badge: 'Showcase',
    color: 'from-cyan-500 to-blue-600',
    isNew: true,
    children: [
      { name: 'View All Services', href: '/innovative-micro-saas-showcase', description: 'Complete services portfolio' },
      { name: 'Service Categories', href: '/innovative-micro-saas-showcase#categories', description: 'Browse by category' },
      { name: 'Pricing Comparison', href: '/pricing', description: 'Compare service costs' },
      { name: 'Service Search', href: '/innovative-micro-saas-showcase#search', description: 'Find specific services' }
    ]
  },
  {
    name: '🧠 AI & Consciousness',
    href: '/ai-services',
    icon: <Brain className="w-5 h-5" />,
    description: 'Revolutionary AI automation and autonomous business processing',
    badge: 'New',
    color: 'from-violet-500 to-purple-600',
    isHot: true,
    children: [
      { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution', description: 'Emotional intelligence and self-awareness' },
      { name: 'Quantum AI Fusion', href: '/quantum-ai-fusion', description: 'Quantum-AI hybrid computing' },
      { name: 'AI Autonomous Ecosystem', href: '/ai-autonomous-ecosystem', description: 'Self-managing AI systems' },
      { name: 'AI Ethics & Governance', href: '/ai-ethics-governance', description: 'Ethical AI frameworks' },
      { name: 'AI Creativity Studio', href: '/ai-creativity-studio', description: 'AI-powered creative content' },
      { name: 'AI Education Platform', href: '/ai-education-platform', description: 'Personalized AI learning' },
      { name: 'AI Healthcare Diagnostics', href: '/ai-healthcare-diagnostics', description: 'Medical AI solutions' },
      { name: 'AI Financial Intelligence', href: '/ai-financial-intelligence', description: 'Financial AI analytics' },
      { name: 'AI Sustainability Platform', href: '/ai-sustainability-platform', description: 'Environmental AI solutions' },
      { name: 'AI Emotional Intelligence', href: '/ai-emotional-intelligence', description: 'Human-AI emotional collaboration' }
    ]
  },
  {
    name: '⚛️ Quantum & Emerging Tech',
    href: '/quantum-services',
    icon: <Atom className="w-5 h-5" />,
    description: 'Breakthrough quantum computing and space technology solutions',
    badge: 'Revolutionary',
    color: 'from-indigo-500 to-blue-600',
    isPremium: true,
    children: [
      { name: 'Space Mining Platform', href: '/space-mining-platform', description: 'Asteroid mining and space resources' },
      { name: 'Quantum Bio-Computing', href: '/quantum-bio-computing', description: 'Quantum-biological hybrid processing' },
      { name: 'Brain-Computer Interface', href: '/brain-computer-interface', description: 'Neural interface technology' },
      { name: 'Quantum Energy Platform', href: '/quantum-energy-platform', description: 'Fusion power simulation' },
      { name: 'Autonomous Vehicle AI', href: '/autonomous-vehicle-ai', description: 'Self-driving AI systems' },
      { name: 'Quantum Materials Discovery', href: '/quantum-materials-discovery', description: 'Materials science acceleration' },
      { name: 'Quantum Robotics', href: '/quantum-robotics', description: 'Quantum-enhanced robotics' },
      { name: 'Quantum Internet Security', href: '/quantum-internet-security', description: 'Unbreakable encryption' },
      { name: 'Quantum Logistics', href: '/quantum-logistics-optimization', description: 'Route optimization' },
      { name: 'Metaverse AI Platform', href: '/metaverse-ai-platform', description: 'AI-powered virtual worlds' }
    ]
  },
  {
    name: '🏢 Enterprise IT',
    href: '/enterprise-it',
    icon: <Shield className="w-5 h-5" />,
    description: 'Advanced enterprise infrastructure and security solutions',
    badge: 'Enterprise',
    color: 'from-blue-500 to-cyan-600',
    children: [
      { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure', description: 'Quantum-enhanced cloud computing' },
      { name: 'Edge Computing Orchestrator', href: '/edge-computing-orchestration', description: 'Edge processing optimization' },
      { name: 'Zero Trust Security Platform', href: '/zero-trust-security', description: 'Advanced cybersecurity' },
      { name: 'Blockchain Enterprise Platform', href: '/blockchain-enterprise', description: 'Enterprise blockchain solutions' },
      { name: 'AI-Powered DevOps', href: '/ai-powered-devops', description: 'Intelligent development automation' },
      { name: 'Quantum Networking', href: '/quantum-networking', description: 'Quantum communication protocols' },
      { name: 'Autonomous IT Operations', href: '/autonomous-it-operations', description: 'Self-managing IT systems' },
      { name: 'Quantum Data Center', href: '/quantum-data-center', description: 'Next-gen data centers' },
      { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity', description: 'Quantum security solutions' },
      { name: 'Quantum Cloud Migration', href: '/quantum-cloud-migration', description: 'Seamless cloud migration' }
    ]
  },
  {
    name: '💻 Micro SAAS',
    href: '/micro-saas',
    icon: <Rocket className="w-5 h-5" />,
    description: 'Innovative business solutions',
    children: [
      { name: 'AI Customer Success', href: '/ai-customer-success-platform', description: 'Churn prediction and retention' },
      { name: 'AI Sales Intelligence', href: '/ai-sales-intelligence-platform', description: 'Sales performance optimization' },
      { name: 'AI HR Analytics', href: '/ai-hr-analytics-platform', description: 'People intelligence' },
      { name: 'AI Financial Planning', href: '/ai-financial-planning-platform', description: 'Intelligent financial analysis' },
      { name: 'AI Supply Chain Optimization', href: '/ai-supply-chain-optimization', description: 'AI-powered logistics' },
      { name: 'AI Project Management', href: '/ai-project-management-suite', description: 'AI project optimization' },
      { name: 'AI Content Automation', href: '/ai-content-automation-platform', description: 'AI content creation' },
      { name: 'AI Decision Engine', href: '/ai-decision-engine', description: 'Intelligent decision making' },
      { name: 'AI Smart CRM Suite', href: '/ai-smart-crm-suite', description: 'AI-enhanced CRM' },
      { name: 'AI Business Intelligence', href: '/ai-business-intelligence-suite', description: 'Advanced analytics' },
      { name: 'AI Marketing Automation', href: '/ai-autonomous-marketing-platform', description: 'Intelligent marketing' },
      { name: 'AI Customer Service', href: '/ai-autonomous-customer-service', description: 'Automated support' },
      { name: 'AI HR & Recruitment', href: '/ai-autonomous-hr-platform', description: 'AI talent management' },
      { name: 'AI Legal Contract Analysis', href: '/ai-legal-contract-analyzer', description: 'Legal document review' },
      { name: 'AI Autonomous Content Studio', href: '/ai-autonomous-content-studio', description: 'Autonomous content creation' },
      { name: 'Quantum Financial Trading', href: '/quantum-enhanced-financial-trading', description: 'Quantum-powered trading' },
      { name: 'AI Healthcare Diagnostics', href: '/ai-healthcare-diagnostics-platform', description: 'Medical AI diagnostics' },
      { name: 'Autonomous Manufacturing', href: '/autonomous-manufacturing-ai-platform', description: 'AI manufacturing' },
      { name: 'Innovative Business Solutions', href: '/innovative-business-solutions', description: 'AI-powered business intelligence, marketing, sales, customer service, and HR solutions' }
    ]
  },
  {
    name: 'Space & Metaverse',
    href: '/space-tech',
    icon: <Rocket className="w-5 h-5" />,
    description: 'Space technology and metaverse solutions',
    children: [
      { name: 'Space Mining Platform', href: '/autonomous-space-mining-platform', description: 'Asteroid mining operations' },
      { name: 'Space Technology AI', href: '/space-technology-ai-platform', description: 'AI space solutions' },
      { name: 'Metaverse Development', href: '/metaverse-ai-development-platform', description: 'Metaverse platforms' },
      { name: 'Virtual Event Holograms', href: '/virtual-event-hologram-platform', description: 'Holographic events' },
      { name: 'Space Logistics', href: '/space-logistics-platform', description: 'Space transportation' },
      { name: 'Satellite Technology', href: '/satellite-technology-platform', description: 'Satellite solutions' },
      { name: 'Space Research', href: '/space-research-platform', description: 'Space exploration tools' },
      { name: 'Space Mining Analytics', href: '/space-mining-analytics', description: 'Mining data analysis' }
    ]
  },
  {
    name: 'Solutions',
    href: '/solutions',
    icon: <Target className="w-5 h-5" />,
    description: 'Industry-specific solutions',
    children: [
      { name: 'Healthcare Solutions', href: '/healthcare-solutions', description: 'Medical technology solutions' },
      { name: 'Financial Services', href: '/financial-solutions', description: 'Fintech and banking solutions' },
      { name: 'Manufacturing', href: '/manufacturing-solutions', description: 'Industrial automation' },
      { name: 'Retail & E-commerce', href: '/retail-solutions', description: 'Digital commerce solutions' },
      { name: 'Education', href: '/education-solutions', description: 'EdTech solutions' },
      { name: 'Government', href: '/government-solutions', description: 'Public sector technology' }
    ]
  },
  {
    name: 'Resources',
    href: '/resources',
    icon: <BookOpen className="w-5 h-5" />,
    description: 'Knowledge and tools',
    children: [
      { name: 'Documentation', href: '/docs', description: 'Technical documentation' },
      { name: 'API Reference', href: '/api-docs', description: 'Developer APIs' },
      { name: 'Blog', href: '/blog', description: 'Industry insights' },
      { name: 'Case Studies', href: '/case-studies', description: 'Success stories' },
      { name: 'Whitepapers', href: '/whitepapers', description: 'Research papers' },
      { name: 'Webinars', href: '/webinars', description: 'Educational content' }
    ]
  },
  {
    name: 'Company',
    href: '/about',
    icon: <Building className="w-5 h-5" />,
    description: 'About Zion Tech Group',
    children: [
      { name: 'About Us', href: '/about', description: 'Our mission and vision' },
      { name: 'Careers', href: '/careers', description: 'Join our team' },
      { name: 'News', href: '/news', description: 'Company updates' },
      { name: 'Contact', href: '/contact', description: 'Get in touch' },
      { name: 'Partners', href: '/partners', description: 'Partnership opportunities' }
    ]
  }
];

export default function EnhancedNavigation2025() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdownToggle = (name: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const closeAllDropdowns = () => {
    setActiveDropdown(null);
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-gray-800/50' : 'bg-transparent'
    }`}>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-cyan-900/80 to-purple-900/80 backdrop-blur-sm border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-6 text-cyan-300">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>{contactInfo.mobile}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>{contactInfo.email}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
              <span className="text-yellow-400 font-semibold">Revolutionary Technology Solutions</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" onClick={closeAllDropdowns}>
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
            </div>
            <div>
              <div className="text-xl font-bold bg-gradient-to-r from-white to-cyan-300 bg-clip-text text-transparent">
                Zion Tech Group
              </div>
              <div className="text-xs text-gray-400">Revolutionary Technology</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="hidden sm:block">
                <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Zion Tech Group
                </div>
                <div className="text-xs text-gray-400">Future Technology Solutions</div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative">
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className="flex items-center gap-2 px-4 py-3 text-gray-300 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5 group"
                >
                  {item.icon}
                  <span>{item.name}</span>
                  {item.badge && (
                    <span className="px-2 py-1 text-xs font-semibold bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full">
                      {item.badge}
                    </span>
                  )}
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl overflow-hidden"
                    >
                      <div className="p-6">
                        <div className="mb-4">
                          <h3 className="text-lg font-semibold text-white mb-2">{item.title || item.name}</h3>
                          <p className="text-sm text-gray-400">{item.description}</p>
                        </div>
                        <div className="space-y-2">
                          {item.children?.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              onClick={closeAllDropdowns}
                              className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors duration-200 group"
                            >
                              <div className="w-2 h-2 bg-cyan-400 rounded-full group-hover:scale-150 transition-transform duration-200"></div>
                              <div className="flex-1">
                                <div className="font-medium text-white group-hover:text-cyan-300 transition-colors duration-200">
                                  {child.name}
                                </div>
                                <div className="text-sm text-gray-400">{child.description}</div>
                              </div>
                              <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-200" />
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

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/contact">
              <button className="px-6 py-3 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
            </Link>
            <Link href="/comprehensive-services-showcase-2025">
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105">
                View Services
              </button>
            </Link>
          </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800/50 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-700/50 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="flex items-center justify-between w-full p-3 text-left text-gray-300 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5"
                  >
                    <div className="flex items-center gap-3">
                      {item.icon}
                      <span>{item.name}</span>
                      {item.badge && (
                        <span className="px-2 py-1 text-xs font-semibold bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
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
                          onClick={closeAllDropdowns}
                          className="block p-3 text-gray-400 hover:text-cyan-300 transition-colors duration-200 rounded-lg hover:bg-white/5"
                        >
                          <div className="font-medium">{child.name}</div>
                          <div className="text-sm text-gray-500">{child.description}</div>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
              
              {/* Mobile CTA Buttons */}
              <div className="pt-4 space-y-3">
                <Link href="/contact" onClick={closeAllDropdowns}>
                  <button className="w-full px-6 py-3 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-semibold rounded-lg transition-all duration-300">
                    Get Started
                  </button>
                </Link>
                <Link href="/comprehensive-services-showcase-2025" onClick={closeAllDropdowns}>
                  <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300">
                    View Services
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Click outside to close dropdowns */}
      {activeDropdown && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setActiveDropdown(null)}
        />
      )}
    </nav>
  );
}