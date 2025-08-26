import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  Menu, X, ChevronDown, Rocket, Phone, Mail, MapPin,
  Brain, Cpu, Shield, Zap, Star, Users, TrendingUp,
  Globe, Database, Cloud, Lock, Palette, Target,
  Layers, Sparkles, Atom, Microscope, Satellite, Building2, Monitor, DollarSign
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceCategories = [
  {
    title: 'AI & Machine Learning',
    icon: Brain,
    services: [
      { name: 'AI Consciousness Simulator', href: '/ai-consciousness-simulator', description: 'Simulate human-like consciousness in AI systems', price: '$2,999/month' },
      { name: 'AI Quantum Hybrid Computing', href: '/ai-quantum-hybrid-computing', description: 'Hybrid AI-Quantum computing for complex problem solving', price: '$4,999/month' },
      { name: 'AI Multimodal Fusion Platform', href: '/ai-multimodal-fusion-platform', description: 'Unified AI platform for text, image, audio, and video processing', price: '$1,999/month' },
      { name: 'AI Autonomous Decision Engine', href: '/ai-autonomous-decision-engine', description: 'AI system that makes complex decisions autonomously', price: '$3,499/month' }
    ]
  },
  {
    title: '2026 AI Services',
    icon: Sparkles,
    services: [
      { name: 'AI Consciousness Simulator Pro', href: '/ai-consciousness-simulator-pro', description: 'Simulate human-like consciousness in AI systems', price: '$4,999/month' },
      { name: 'AI Quantum Hybrid Computing', href: '/quantum-ai-hybrid-computing', description: 'Hybrid AI-Quantum computing for complex problem solving', price: '$7,999/month' },
      { name: 'AI Multimodal Fusion Platform', href: '/ai-multimodal-fusion-platform', description: 'Unified AI platform for text, image, audio, and video processing', price: '$2,999/month' },
      { name: 'AI Autonomous Decision Engine', href: '/ai-autonomous-decision-engine', description: 'AI system that makes complex decisions autonomously', price: '$5,999/month' }
    ]
  },
  {
    title: 'Quantum Computing',
    icon: Atom,
    services: [
      { name: 'Quantum-Secure Communication', href: '/quantum-secure-communication', description: 'Unbreakable encryption for the quantum era', price: '$599/month' },
      { name: 'Quantum Financial Trading', href: '/quantum-financial-trading-platform', description: 'Quantum computing for financial market advantage', price: '$999/month' },
      { name: 'Quantum Internet Security', href: '/quantum-internet-security', description: 'Next-generation internet security with quantum technology', price: '$699/month' },
      { name: 'Quantum Internet Platform', href: '/quantum-internet-platform', description: 'Ultra-secure quantum communication network', price: '$1,599/month' }
    ]
  },
  {
    title: 'Emerging Technologies',
    icon: Sparkles,
    services: [
      { name: 'Neuromorphic Computing Platform', href: '/neuromorphic-computing-platform', description: 'Brain-inspired computing for next-generation AI', price: '$1,499/month' },
      { name: 'DNA Computing Platform', href: '/dna-computing-platform', description: 'Molecular computing for complex problem solving', price: '$2,999/month' },
      { name: 'Photonic Computing Platform', href: '/photonic-computing-platform', description: 'Light-speed computing with photonic processors', price: '$1,999/month' },
      { name: 'Holographic Display Platform', href: '/holographic-display-platform', description: 'Next-generation 3D holographic visualization', price: '$699/month' }
    ]
  },
  {
    title: 'Autonomous Systems',
    icon: Target,
    services: [
      { name: 'Autonomous Supply Chain', href: '/autonomous-supply-chain-optimization', description: 'AI-powered supply chain management and optimization', price: '$399/month' },
      { name: 'Autonomous Manufacturing AI', href: '/autonomous-manufacturing-ai', description: 'AI-powered manufacturing automation and optimization', price: '$599/month' },
      { name: 'Swarm Robotics Platform', href: '/swarm-robotics-platform', description: 'Coordinated multi-robot systems for complex tasks', price: '$899/month' },
      { name: 'Quantum Space Mining', href: '/quantum-space-mining-platform', description: 'Revolutionary space resource exploration and mining', price: '$1,299/month' }
    ]
  },
  {
    title: 'Enterprise IT',
    icon: Shield,
    services: [
      { name: 'Zero Trust Architecture', href: '/zero-trust-network-architecture', description: 'Advanced network security', price: 'Custom pricing' },
      { name: 'Edge Computing Orchestration', href: '/edge-computing-orchestration', description: 'Distributed computing management', price: 'Custom pricing' },
      { name: '5G Private Networks', href: '/5g-private-network-solutions', description: 'High-speed private networks', price: 'Custom pricing' },
      { name: 'Blockchain Infrastructure', href: '/blockchain-infrastructure-platform', description: 'Secure blockchain solutions', price: 'Custom pricing' }
    ]
  },
  {
    title: 'Innovative SaaS',
    icon: Zap,
    services: [
      { name: 'AI Autonomous Business Platform', href: '/ai-autonomous-business-platform', description: 'Run your business with AI', price: 'Custom pricing' },
      { name: 'AI Creative Studio Platform', href: '/ai-creative-studio-platform', description: 'Unlimited AI-powered creativity', price: 'Custom pricing' },
      { name: 'AI Healthcare Companion', href: '/ai-healthcare-companion', description: 'Personalized healthcare AI', price: 'Custom pricing' },
      { name: 'Quantum Logistics Platform', href: '/quantum-logistics-platform', description: 'Optimize supply chains with quantum', price: 'Custom pricing' }
    ]
  },
  {
    title: 'Quantum AI Services',
    icon: Atom,
    services: [
      { name: 'Neuromorphic Computing', href: '/neuromorphic-computing-platform', description: 'Brain-inspired computing for next-generation AI', price: '$6,999/month' },
      { name: 'DNA Computing Platform', href: '/dna-computing-platform', description: 'Molecular computing for complex problem solving', price: '$11,999/month' },
      { name: 'Photonic Computing', href: '/photonic-computing-platform', description: 'Light-speed computing with photonic processors', price: '$7,499/month' },
      { name: 'Holographic Display', href: '/holographic-display-platform', description: 'Next-generation 3D holographic visualization', price: '$5,999/month' }
    ]
  },
  {
    title: 'Revolutionary 2026 Services',
    icon: Star,
    services: [
      { name: 'AI Consciousness Transfer', href: '/ai-consciousness-transfer', description: 'Transfer consciousness between AI systems and humans', price: '$15,999/month' },
      { name: 'Quantum Internet Infrastructure', href: '/quantum-internet-infrastructure', description: 'Ultra-secure quantum communication network', price: '$8,999/month' },
      { name: 'Edge Quantum Computing', href: '/edge-quantum-computing', description: 'Quantum computing at the edge for real-time processing', price: '$4,999/month' },
      { name: 'AI Space Mining Automation', href: '/ai-space-mining-automation', description: 'Automated space mining using advanced AI', price: '$8,999/month' }
    ]
  }
];

const companyLinks = [
  { name: 'About Us', href: '/about' },
  { name: '2026 Services', href: '/2026-services-showcase' },
  { name: 'Revolutionary 2026', href: '/revolutionary-2026-services-showcase' },
  { name: 'News', href: '/news' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Blog', href: '/blog' },
  { name: 'Resources', href: '/resources' }
];

export default function UltraAdvancedNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navigationItems: Array<{ name: string; href: string; icon?: React.ComponentType<any>; description?: string }>
    = [
      { name: 'Home', href: '/' },
      { name: 'AI', href: '/ai-services', icon: Brain, description: 'AI & ML services' },
      { name: 'Quantum', href: '/quantum-cloud-infrastructure', icon: Atom, description: 'Quantum & space' },
      { name: 'Enterprise IT', href: '/it-services', icon: Building2, description: 'Cloud, DevOps, Security' },
      { name: 'Micro SaaS', href: '/micro-saas', icon: Monitor, description: 'Micro SaaS products' },
      { name: 'Services', href: '/services', icon: Monitor, description: 'Directory of services' },
      { name: 'Advertising', href: '/services-advertising', icon: DollarSign, description: 'Benefits & pricing references' },
      { name: 'Market Pricing', href: '/market-pricing', icon: DollarSign, description: 'Vendor references' },
      { name: 'Pricing', href: '/pricing', icon: DollarSign, description: 'Transparent, market-aligned pricing' },
      { name: 'Contact', href: '/contact' }
    ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const toggleDropdown = (category: string) => {
    setActiveDropdown(activeDropdown === category ? null : category);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-gray-900/95 backdrop-blur-xl border-b border-cyan-500/30 shadow-2xl shadow-cyan-500/20' 
        : 'bg-transparent'
    }`}>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 border-b border-cyan-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-2">
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2 text-cyan-300 hover:text-cyan-200 transition-colors">
                <Phone className="w-4 h-4" />
                <a href={`tel:${contactInfo.mobile}`} className="hover:underline">
                  {contactInfo.mobile}
                </a>
              </div>
              <div className="flex items-center space-x-2 text-purple-300 hover:text-purple-200 transition-colors">
                <Mail className="w-4 h-4" />
                <a href={`mailto:${contactInfo.email}`} className="hover:underline">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center space-x-2 text-pink-300 hover:text-pink-200 transition-colors">
                <MapPin className="w-4 h-4" />
                <span>{contactInfo.address}</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-yellow-300">
                <Star className="w-4 h-4 fill-current" />
                <span className="font-semibold">1000+ Revolutionary Services</span>
              </div>
              <div className="flex items-center space-x-2 text-green-300">
                <TrendingUp className="w-4 h-4" />
                <span className="font-semibold">1000% ROI Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-gray-900/90 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/25 group-hover:shadow-cyan-500/40 transition-all duration-300">
                    <Rocket className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Zion Tech Group
                  </span>
                  <span className="text-xs text-gray-400 font-medium">
                    Revolutionary AI & Quantum Solutions
                  </span>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {serviceCategories.map((category) => (
                <div key={category.title} className="relative group">
                  <button
                    onClick={() => toggleDropdown(category.title)}
                    className="flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 group-hover:text-cyan-400"
                  >
                    <category.icon className="w-4 h-4" />
                    <span>{category.title}</span>
                    <ChevronDown className="w-3 h-3 transition-transform duration-200 group-hover:rotate-180" />
                  </button>
                  
                  {/* Dropdown */}
                  <AnimatePresence>
                    {activeDropdown === category.title && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-lg shadow-2xl shadow-black/50 z-50"
                      >
                        <div className="p-4">
                          <h3 className="text-lg font-semibold text-white mb-3">{category.title}</h3>
                          <div className="space-y-3">
                            {category.services.map((service) => (
                              <Link
                                key={service.name}
                                href={service.href}
                                className="block p-3 hover:bg-gray-800/50 rounded-lg transition-colors duration-200 group"
                              >
                                <div className="flex items-start justify-between">
                                  <div className="flex-1">
                                    <h4 className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                                      {service.name}
                                    </h4>
                                    <p className="text-gray-400 text-sm mt-1">{service.description}</p>
                                  </div>
                                  <span className="text-cyan-400 text-sm font-medium">{service.price}</span>
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
              {/* Contact button */}
              <Link
                href="/contact"
                className="hidden lg:inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40"
              >
                <Phone className="w-4 h-4" />
                <span>Get Started</span>
              </Link>

              {/* Mobile menu button */}
              <button
                onClick={toggleMenu}
                className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors duration-200"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-700/50"
          >
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={closeMenu}
                  className="flex items-center space-x-3 p-3 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-200"
                >
                  {item.icon && <item.icon className="w-5 h-5" />}
                  <span>{item.name}</span>
                </Link>
              ))}
              
              <div className="pt-4 border-t border-gray-700/50">
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="flex items-center justify-center space-x-2 w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                >
                  <Phone className="w-4 h-4" />
                  <span>Contact Us</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
