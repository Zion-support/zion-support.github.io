import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronDown, ChevronRight, Search, User, ShoppingCart, 
  Brain, Atom, Shield, Rocket, Cpu, Database, Target, Sparkles,
  Home, Briefcase, Users, FileText, Phone, Mail, MapPin, Globe,
  Zap, Star, TrendingUp, Award, Clock, CheckCircle, ExternalLink,
  GraduationCap, Building, Truck, Zap as ZapIcon, Heart, DollarSign
} from 'lucide-react';

interface NavigationItem {
  label: string;
  href?: string;
  children?: NavigationItem[];
  icon?: React.ReactNode;
  description?: string;
  children?: NavigationItem[];
  badge?: string;
  title?: string;
  featured?: boolean;
  category?: string;
}

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const navigationItems: NavigationItem[] = [
  {
    name: 'AI & Machine Learning',
    href: '/ai-services',
    icon: <Brain className="w-5 h-5" />,
    description: 'Revolutionary AI consciousness and emotional intelligence',
    badge: 'New',
    featured: true,
    children: [
      { name: 'AI Business Intelligence', href: '/ai-business-intelligence-platform', description: 'Transform data into actionable insights', featured: true },
      { name: 'AI Customer Service', href: '/ai-customer-service-automation', description: '24/7 intelligent customer support', featured: true },
      { name: 'AI Sales Intelligence', href: '/ai-sales-intelligence-platform', description: 'Supercharge sales with AI automation', featured: true },
      { name: 'AI Marketing Automation', href: '/ai-marketing-automation-suite', description: 'Automate and optimize marketing campaigns' },
      { name: 'AI Content Creation', href: '/ai-content-creation-suite', description: 'Create engaging content at scale' },
      { name: 'AI HR Analytics', href: '/ai-hr-analytics-platform', description: 'Transform HR with data-driven insights' },
      { name: 'AI Financial Planning', href: '/ai-financial-planning-platform', description: 'Intelligent financial planning and wealth management' },
      { name: 'AI Healthcare Analytics', href: '/ai-healthcare-analytics-platform', description: 'Transform healthcare with AI-powered insights' }
    ]
  },
  {
    name: 'Quantum Computing',
    href: '/quantum-services',
    icon: <Atom className="w-5 h-5" />,
    description: 'Next-generation quantum computing solutions',
    badge: 'Quantum',
    children: [
      { name: 'Quantum Machine Learning', href: '/quantum-machine-learning-platform', description: 'Unlock quantum advantage in ML', featured: true },
      { name: 'Quantum-Secure Cloud', href: '/quantum-secure-cloud-infrastructure', description: 'Future-proof security with quantum encryption' },
      { name: 'Quantum Internet Security', href: '/quantum-internet-security-platform', description: 'Secure the future of the internet' },
      { name: 'Quantum Financial Trading', href: '/quantum-financial-trading-platform', description: 'Quantum advantage in financial markets' },
      { name: 'Quantum Materials Discovery', href: '/quantum-materials-discovery-platform', description: 'Discover new materials with quantum computing' },
      { name: 'Quantum Neural Networks', href: '/quantum-neural-network-platform', description: 'Advanced quantum neural computing' }
    ]
  },
  {
    name: 'Emerging Technologies',
    href: '/emerging-tech',
    icon: <Rocket className="w-5 h-5" />,
    description: 'Cutting-edge emerging technology solutions',
    badge: 'Future',
    children: [
      { name: 'Metaverse Development', href: '/metaverse-development-platform', description: 'Build immersive virtual worlds', featured: true },
      { name: 'Space Technology AI', href: '/space-technology-ai-platform', description: 'AI-powered space exploration' },
      { name: 'Brain-Computer Interface', href: '/brain-computer-interface-platform', description: 'Revolutionary neural interface technology' },
      { name: 'Autonomous Vehicles', href: '/autonomous-vehicle-ai-platform', description: 'AI-powered autonomous vehicle technology' },
      { name: 'Synthetic Biology', href: '/synthetic-biology-platform', description: 'Design and engineer biological systems' },
      { name: 'Digital Twin Platform', href: '/digital-twin-platform', description: 'Create virtual replicas of physical systems' }
    ]
  },
    {
    name: 'Enterprise Solutions',
    href: '/enterprise',
    icon: <Building className="w-5 h-5" />,
    description: 'Advanced enterprise infrastructure solutions',
    badge: 'Enterprise',
    children: [
      { name: 'Autonomous DevOps', href: '/autonomous-devops-platform', description: 'Self-healing infrastructure with AI', featured: true },
      { name: 'Edge Computing Orchestration', href: '/edge-computing-orchestration', description: 'Manage distributed edge infrastructure' },
      { name: 'AI-Powered Cybersecurity', href: '/ai-powered-cybersecurity-platform', description: 'Intelligent threat detection and response' },
      { name: 'Blockchain Identity Management', href: '/blockchain-identity-management', description: 'Secure, decentralized identity verification' },
      { name: 'Supply Chain Optimization', href: '/ai-supply-chain-optimization', description: 'Optimize supply chain with intelligent AI' },
      { name: 'Manufacturing AI', href: '/ai-manufacturing-platform', description: 'Optimize manufacturing with AI' }
    ]
  },
  {
    name: 'Innovative Services',
    href: '/innovative-services-showcase-2025',
    icon: <Star className="w-5 h-5" />,
    description: 'Cutting-edge AI, quantum, and emerging technology services',
    badge: '2025',
    featured: true,
    children: [
      { name: 'AI-Powered Solutions', href: '/innovative-services-showcase-2025?category=ai', description: 'Advanced AI and machine learning services', featured: true },
      { name: 'Quantum Computing', href: '/innovative-services-showcase-2025?category=quantum', description: 'Quantum computing and emerging tech solutions' },
      { name: 'Industry Solutions', href: '/innovative-services-showcase-2025?category=industry', description: 'Specialized industry-focused services' },
      { name: 'Cybersecurity', href: '/innovative-services-showcase-2025?category=cybersecurity', description: 'AI-powered security and threat intelligence' },
      { name: 'Emerging Technologies', href: '/innovative-services-showcase-2025?category=emerging', description: 'Blockchain, IoT, and metaverse solutions' }
    ]
  },
  {
    name: 'Micro SAAS',
    href: '/micro-saas',
    icon: <Zap className="w-5 h-5" />,
    description: 'Innovative business solutions for modern enterprises',
    badge: 'SAAS',
    children: [
      { name: 'AI Content Creation', href: '/ai-content-creation-suite', description: 'Create engaging content at scale', featured: true },
      { name: 'AI Sales Intelligence', href: '/ai-sales-intelligence-platform', description: 'Supercharge sales with AI insights' },
      { name: 'AI Marketing Automation', href: '/ai-marketing-automation-suite', description: 'Automate and optimize marketing' },
      { name: 'AI Customer Success', href: '/ai-customer-success-platform', description: 'Predict and prevent churn with AI' },
      { name: 'AI HR Analytics', href: '/ai-hr-analytics-platform', description: 'Transform HR with data-driven insights' },
      { name: 'AI Education Platform', href: '/ai-education-platform', description: 'Personalize learning with AI' }
    ]
  },
  {
    name: 'All Services',
    href: '/services',
    icon: <Grid className="w-5 h-5" />,
    description: 'Complete portfolio of all technology services',
    badge: 'Showcase',
    featured: true,
    children: [
      { name: 'View All Services', href: '/services', description: 'Complete services portfolio' },
      { name: 'Service Categories', href: '/services', description: 'Browse by category' },
      { name: 'Pricing Comparison', href: '/pricing', description: 'Compare service costs' },
      { name: 'Latest Innovations', href: '/revolutionary-2025-services-showcase', description: 'Cutting-edge solutions' },
      { name: 'Market Pricing', href: '/market-pricing', description: 'Average market prices & references' }
    ]
  }
];

const UltraFuturisticNavigation2040: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [router.asPath]);

  // Handle click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle keyboard navigation
  const handleKeyDown = (event: React.KeyboardEvent, action: () => void) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      action();
    }
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={`hidden lg:block fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-2xl' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                Zion Tech Group
              </div>
            </Link>

            {/* Navigation Items */}
            <div className="flex items-center space-x-8">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.dropdown ? (
                    <button
                      onClick={() => handleDropdownToggle(item.name)}
                      className="flex items-center space-x-1 text-white/80 hover:text-white transition-colors duration-300 py-2"
                    >
                      <span className="font-medium">{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-white/80 hover:text-white transition-colors duration-300 py-2 font-medium"
                    >
                      {item.name}
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  {item.children && activeDropdown === item.label && (
                    <div
                      onMouseEnter={() => setActiveDropdown(item.label)}
                      onMouseLeave={() => setActiveDropdown(null)}
                      className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-md border border-gray-700 rounded-xl shadow-2xl"
                    >
                      <div className="p-4 space-y-3">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href || '#'}
                            className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-800/50 transition-colors group"
                            onClick={closeAllDropdowns}
                          >
                            <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                              {child.icon}
                            </div>
                            <div className="flex-1">
                              <div className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                                {child.label}
                              </div>
                              <div className="text-sm text-gray-400 mt-1">
                                {child.description}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Search Button */}
              <button
                onClick={() => setShowSearch(true)}
                className="p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-gray-800/50"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Contact Button */}
              <Link
                href="/contact"
                className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                onClick={closeAllDropdowns}
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-gray-800/50"
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-800/50"
            >
              <div className="px-4 py-6 space-y-4">
                {/* Mobile Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>

                {/* Mobile Menu Items */}
                {navigationItems.map((item) => (
                  <div key={item.label}>
                    {item.children ? (
                      <div>
                        <button
                          onClick={() => toggleDropdown(item.label)}
                          className="w-full flex items-center justify-between px-3 py-3 text-left text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-gray-800/50"
                        >
                          <span>{item.label}</span>
                          <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                        </button>
                        {activeDropdown === item.label && (
                          <div className="ml-4 mt-2 space-y-2">
                            {item.children.map((child) => (
                              <Link
                                key={child.label}
                                href={child.href || '#'}
                                className="block px-3 py-2 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-gray-800/50"
                                onClick={closeAllDropdowns}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item.href || '#'}
                        className="block px-3 py-3 text-gray-300 hover:text-white transition-colors rounded-lg hover:bg-gray-800/50"
                        onClick={closeAllDropdowns}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}

                {/* Mobile Contact Button */}
                <Link
                  href="/contact"
                  className="block w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium text-center rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
                  onClick={closeAllDropdowns}
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}