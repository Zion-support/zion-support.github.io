import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, ChevronDown, Search, 
  Brain, Rocket, Shield, 
  Zap, Globe, Star, Users,
  Target, Atom, BarChart3, Settings,
  Palette, BookOpen, GraduationCap, Heart,
  Truck, DollarSign, X, Phone, Mail, MapPin
} from 'lucide-react';

interface NavigationItem {
  name: string;
  href: string;
  icon?: React.ReactNode;
  description?: string;
  children?: NavigationItem[];
  badge?: string;
  color?: string;
}

const navigationItems: NavigationItem[] = [
  {
    name: 'Pricing',
    href: '/pricing',
    icon: <DollarSign className="w-5 h-5" />,
    description: 'Plans and average market prices',
    children: [
      { name: 'Standard Pricing', href: '/pricing', description: 'Our plans' },
      { name: 'Market Pricing', href: '/market-pricing', description: 'Compare market averages' }
    ]
  },
  {
    name: 'Resources',
    href: '/resources',
    icon: <BookOpen className="w-5 h-5" />,
    description: 'Guides, reports and tools',
    children: [
      { name: 'Blog', href: '/blog', description: 'Insights and updates' },
      { name: 'Case Studies', href: '/case-studies', description: 'Proven results' },
      { name: 'Developer', href: '/developer', description: 'Docs and SDKs' },
      { name: 'Services Advertising', href: '/services-advertising', description: 'Features, benefits and market pricing links' }
    ]
  },
  {
    name: 'Contact',
    href: '/contact',
    icon: <Phone className="w-5 h-5" />,
    description: 'Talk to our team',
    featured: true,
    children: [
      { name: 'Contact Sales', href: '/contact', description: 'Get a quote' },
      { name: 'Support', href: '/support', description: 'Help center' }
    ]
  },
  {
    name: 'Services',
    href: '/services',
    icon: <Grid className="w-5 h-5" />,
    description: 'Browse by category',
    badge: 'New',
    children: [
      { name: 'AI & Data', href: '/services#ai-consciousness', description: 'AI, data, ML services' },
      { name: 'Cloud & FinOps', href: '/services#enterprise-it', description: 'Cloud, cost, platform' },
      { name: 'Observability', href: '/services#enterprise-it', description: 'Monitoring & telemetry' },
      { name: 'Developer Tools', href: '/services#enterprise-it', description: 'Developer productivity' },
      { name: 'Training & Education', href: '/training', description: 'Learning and R&D' },
      { name: 'SEO Automation Suite', href: '/seo-automation-suite', description: 'Technical SEO automation' },
      { name: 'IT Asset Discovery Agent', href: '/it-asset-discovery-agent', description: 'Agentless discovery' },
      { name: 'Managed Postgres HA', href: '/managed-postgres-ha', description: 'HA Postgres ops' },
      { name: 'Micro SAAS', href: '/micro-saas', description: 'Business tools and automation' }
    ]
  },
  {
    name: 'All Services',
    href: '/comprehensive-services-showcase-2025',
    icon: <Globe className="w-5 h-5" />,
    description: 'Complete portfolio of all technology services',
    badge: 'Showcase',
    featured: true,
    children: [
      { name: 'View All Services', href: '/comprehensive-services-showcase-2025', description: 'Complete services portfolio' },
      { name: 'Ultimate 2035 Futuristic', href: '/ultimate-2035-futuristic-services-showcase', description: 'Revolutionary future technology', featured: true },
      { name: 'Ultimate 2025 Micro SAAS', href: '/ultimate-2025-micro-saas-showcase', description: 'Latest innovative services', featured: true },
      { name: 'Service Categories', href: '/comprehensive-services-showcase-2025', description: 'Browse by category' },
      { name: 'Pricing Comparison', href: '/comprehensive-services-showcase-2025', description: 'Compare service costs' },
      { name: 'Service Search', href: '/comprehensive-services-showcase-2025', description: 'Find specific services' },
      { name: 'Market Pricing', href: '/market-pricing', description: 'Average market prices & references' },
      { name: 'Latest Innovations', href: '/revolutionary-2025-services-showcase', description: 'Cutting-edge solutions' },
      { name: '2026 Services', href: '/revolutionary-2026-services', description: 'Next generation solutions' },
      { name: '2027 Services', href: '/revolutionary-2027-services-showcase', description: 'Future-ready services' },
      { name: 'Ultimate 2026', href: '/ultimate-2026-services-showcase', description: 'Premium service collection' },
      { name: 'Enterprise Solutions', href: '/enterprise-solutions-showcase', description: 'Enterprise-grade solutions' },
      { name: 'Innovative Business Solutions', href: '/innovative-business-solutions', description: 'Business transformation services' },
      { name: 'AI Sales Copilot', href: '/ai-sales-copilot', description: 'Prospecting, outreach, scoring' },
      { name: 'AI Autonomous Marketing', href: '/ai-autonomous-marketing-platform', description: 'Always-on marketing automation' },
      { name: 'AI Customer Service', href: '/ai-customer-service', description: 'Omnichannel AI support' }
    ]
  },
  {
    name: 'AI & Consciousness',
    href: '/ai-services',
    icon: <Brain className="w-5 h-5" />,
    description: 'Revolutionary AI consciousness and emotional intelligence',
    badge: 'New',
    color: 'from-purple-500 to-pink-500',
    children: [
      { name: 'AI Customer Success Platform', href: '/ai-customer-success-platform', description: 'Predict and prevent churn with AI', featured: true },
      { name: 'AI Sales Intelligence', href: '/ai-sales-intelligence-platform', description: 'Supercharge sales with AI automation' },
      { name: 'AI Financial Planning', href: '/ai-financial-planning-platform', description: 'Intelligent financial forecasting' },
      { name: 'AI Decision Engine', href: '/ai-powered-decision-engine', description: 'AI-powered business decisions' },
      { name: 'AI Content Automation', href: '/intelligent-content-automation-platform', description: 'Automate content creation' },
      { name: 'AI HR Analytics', href: '/ai-hr-analytics-platform', description: 'Transform HR with AI insights' },
      { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-2025', description: 'Emotional intelligence and self-awareness' },
      { name: 'AI Quantum Neural Network', href: '/ai-quantum-neural-network', description: 'Hybrid AI-Quantum computing platform' },
      { name: 'AI Autonomous Business Operations', href: '/ai-autonomous-business-operations', description: 'Fully autonomous business management' },
      { name: 'AI Autonomous Research', href: '/ai-autonomous-research-assistant', description: 'Self-directed AI research' },
      { name: 'AI Emotional Intelligence', href: '/ai-emotional-intelligence-training', description: 'EQ training platform' },
      { name: 'AI Predictive Maintenance', href: '/ai-predictive-maintenance-platform', description: 'Equipment failure prediction' },
      { name: 'AI Content Personalization', href: '/ai-content-personalization-engine', description: 'Personalized content delivery' },
      { name: 'AI Autonomous Ecosystem', href: '/ai-autonomous-ecosystem-manager', description: 'Self-managing AI systems' },
      { name: 'AI Ethics & Governance', href: '/ai-ethics-governance-framework', description: 'Ethical AI frameworks' },
      { name: 'Advanced AI Automation', href: '/advanced-ai-automation-services', description: 'AI automation for development, testing, DevOps, security, and data' }
    ]
  },
  {
    name: 'Micro SAAS Solutions',
    href: '/micro-saas',
    icon: <Rocket className="w-5 h-5" />,
    description: 'Innovative business solutions for modern enterprises',
    badge: 'Hot',
    featured: true,
    children: [
      { name: 'Customer Success Platform', href: '/ai-customer-success-platform', description: 'AI-powered customer retention', featured: true },
      { name: 'Supply Chain Optimization', href: '/intelligent-supply-chain-optimization', description: 'AI-powered supply chain management' },
      { name: 'Financial Planning Platform', href: '/ai-financial-planning-platform', description: 'Intelligent financial planning' },
      { name: 'HR Analytics Platform', href: '/ai-hr-analytics-platform', description: 'AI-powered HR insights' },
      { name: 'Sales Intelligence Platform', href: '/ai-sales-intelligence-platform', description: 'AI-powered sales automation' },
      { name: 'CRM Intelligence Suite', href: '/smart-crm-intelligence-suite', description: 'Transform your CRM with AI' },
      { name: 'Content Automation Platform', href: '/intelligent-content-automation-platform', description: 'AI-powered content management' },
      { name: 'Decision Engine', href: '/ai-powered-decision-engine', description: 'AI-powered business decisions' }
    ]
  },
  {
    name: 'Quantum & Emerging Tech',
    href: '/quantum-services',
    icon: <Atom className="w-5 h-5" />,
    description: 'Quantum computing and breakthrough technologies',
    badge: 'Hot',
    color: 'from-cyan-500 to-blue-500',
    children: [
      { name: 'Space Mining Platform', href: '/space-mining-platform', description: 'Asteroid mining and space resources' },
      { name: 'Quantum Bio-Computing', href: '/quantum-bio-computing-platform', description: 'Quantum-biological hybrid processing' },
      { name: 'Brain-Computer Interface', href: '/brain-computer-interface-platform', description: 'Neural interface technology' },
      { name: 'Quantum Energy Platform', href: '/quantum-energy-platform', description: 'Fusion power simulation' },
      { name: 'Autonomous Vehicle AI', href: '/autonomous-vehicle-ai-platform', description: 'Self-driving AI systems' },
      { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure', description: 'Quantum-enhanced cloud computing' },
      { name: 'Edge Computing Orchestrator', href: '/edge-computing-orchestrator', description: 'Edge processing optimization' },
      { name: 'Zero Trust Security Platform', href: '/zero-trust-security-platform', description: 'Advanced cybersecurity' }
    ]
  },
  {
    name: 'Enterprise IT',
    href: '/enterprise-it',
    icon: <Shield className="w-5 h-5" />,
    description: 'Enterprise solutions and infrastructure',
    color: 'from-green-500 to-emerald-500',
    children: [
      { name: 'Quantum Cloud Infrastructure', href: '/quantum-cloud-infrastructure', description: 'Next-gen cloud with quantum capabilities' },
      { name: 'AI-Powered DevOps', href: '/ai-powered-devops-automation', description: 'Intelligent development automation' },
      { name: 'Quantum Networking', href: '/quantum-networking-solutions', description: 'Quantum communication protocols' },
      { name: 'Autonomous IT Operations', href: '/autonomous-it-operations-center', description: 'Self-managing IT systems' },
      { name: 'Quantum Data Center', href: '/quantum-data-center-platform', description: 'Next-gen data centers' },
      { name: 'Quantum Cybersecurity', href: '/quantum-cybersecurity-suite', description: 'Quantum security solutions' },
      { name: 'Quantum Cloud Migration', href: '/quantum-cloud-migration', description: 'Intelligent migration platform' },
      { name: '5G Private Network Solutions', href: '/5g-private-network-solutions', description: 'Advanced 5G infrastructure' }
    ]
  },
  {
    name: 'Space & Metaverse',
    href: '/space-technology',
    icon: <Rocket className="w-5 h-5" />,
    description: 'Space exploration and virtual worlds',
    color: 'from-pink-500 to-rose-500',
    children: [
      { name: 'Healthcare AI', href: '/healthcare-solutions', description: 'AI-powered healthcare' },
      { name: 'Financial Technology', href: '/financial-solutions', description: 'Next-gen fintech' },
      { name: 'Manufacturing AI', href: '/manufacturing-ai-solutions', description: 'Smart manufacturing' },
      { name: 'Retail Technology', href: '/retail-technology-solutions', description: 'Digital retail transformation' },
      { name: 'Education Technology', href: '/education-technology-solutions', description: 'AI-powered learning' },
      { name: 'Government Solutions', href: '/enterprise-solutions-showcase', description: 'Public sector innovation' },
      { name: 'Energy & Utilities', href: '/quantum-energy', description: 'Sustainable energy tech' },
      { name: 'Biotech AI Research', href: '/biotech-ai', description: 'AI-driven biotech' }
    ]
  },
  {
    name: 'Micro SAAS',
    href: '/micro-saas',
    icon: <Target className="w-5 h-5" />,
    description: 'Innovative business solutions',
    badge: 'Popular',
    color: 'from-orange-500 to-red-500',
    children: [
      { name: 'Blog', href: '/blog', description: 'Insights and updates' },
      { name: 'Case Studies', href: '/case-studies', description: 'Proven results' },
      { name: 'Developer', href: '/developer', description: 'Docs and SDKs' },
      { name: 'Community', href: '/community', description: 'Forum and updates' },
      { name: 'Services Advertising', href: '/services-advertising', description: 'Features, benefits and market pricing links' }
    ]
  }
];

const UltraFuturisticNavigation2035: React.FC<{ onMenuClick: () => void }> = ({ onMenuClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
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

  const filteredNavigation = navigationItems.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-xl border-b border-gray-800/50' 
        : 'bg-transparent'
    }`}>
      {/* Top contact bar */}
      <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-xs">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-cyan-400">
                <Phone className="w-3 h-3" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2 text-purple-400">
                <Mail className="w-3 h-3" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-gray-400">
              <MapPin className="w-3 h-3" />
              <span>364 E Main St STE 1008, Middletown DE 19709</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                Z
              </div>
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl blur opacity-75 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
            <div>
              <div className="text-xl font-bold text-white">Zion Tech Group</div>
              <div className="text-xs text-gray-400">Future Technology Solutions</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {filteredNavigation.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  onClick={() => handleDropdownToggle(item.name)}
                  className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 rounded-lg hover:bg-gray-800/50"
                >
                  {item.icon}
                  <span>{item.name}</span>
                  {item.badge && (
                    <span className="px-2 py-1 text-xs bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full">
                      {item.badge}
                    </span>
                  )}
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === item.name ? 'rotate-180' : ''
                  }`} />
                </button>

                {/* Dropdown */}
                <AnimatePresence>
                  {activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden"
                    >
                      <div className="p-4">
                        <div className="mb-4">
                          <h3 className="text-lg font-semibold text-white mb-2">{item.name}</h3>
                          <p className="text-sm text-gray-400">{item.description}</p>
                        </div>
                        <div className="space-y-2">
                          {item.children?.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="block p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-200 group"
                            >
                              <div className="font-medium text-white group-hover:text-cyan-400 transition-colors duration-200">
                                {child.name}
                              </div>
                              <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-200">
                                {child.description}
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

          {/* Right side */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="hidden md:flex items-center space-x-2 bg-gray-800/50 rounded-lg px-3 py-2 border border-gray-700/50">
              <Search className="w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent text-white placeholder-gray-400 outline-none w-48"
              />
            </div>

            {/* CTA Button */}
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-600 transition-all duration-200 transform hover:scale-105 shadow-lg shadow-cyan-500/25"
            >
              Get Started
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={onMenuClick}
              className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors duration-200"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Search results dropdown */}
      {searchQuery && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-xl border-t border-gray-700/50"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredNavigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="p-4 rounded-lg hover:bg-gray-800/50 transition-colors duration-200 border border-gray-700/30"
                >
                  <div className="flex items-center space-x-3 mb-2">
                    {item.icon}
                    <span className="font-medium text-white">{item.name}</span>
                    {item.badge && (
                      <span className="px-2 py-1 text-xs bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default UltraFuturisticNavigation2035;