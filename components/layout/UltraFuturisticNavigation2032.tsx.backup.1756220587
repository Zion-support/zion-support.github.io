import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, ChevronDown, Search, Phone, Mail, MapPin, 
  Rocket, Brain, Atom, Globe, Zap, Sparkles, Shield, 
  Microscope, DollarSign, Home, Users, Briefcase, 
  BookOpen, MessageCircle, Star, TrendingUp, Target,
  Layers, Cpu, Database, Cloud, Lock, ShieldCheck,
  Earth, Factory, Car, Building, GraduationCap, Scale,
  Palette, Camera, Video, Music, Gamepad2, Heart,
  Leaf, Sun, Moon, Wind, Droplets, Mountain,
  Code, Wrench, Smartphone, BarChart3, Eye,
  Network, Server, HardDrive, Monitor,
  Laptop, Watch, Headphones, Speaker, Mic, 
  Keyboard, Mouse, CpuIcon, DatabaseIcon, 
  CloudIcon, LockIcon, ShieldIcon, GlobeIcon,
  ZapIcon, SparklesIcon, BrainIcon, AtomIcon,
<<<<<<< HEAD
  MenuIcon, CloseIcon, ChevronRightIcon
=======
  Infinity, TargetIcon, ZapIcon2, BrainIcon2
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-917b
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceCategories = [
  {
<<<<<<< HEAD
    title: '🧠 AI & Consciousness 2030',
    icon: BrainIcon,
    color: 'from-violet-600 via-purple-600 to-indigo-600',
    description: 'Next-generation AI consciousness and emotional intelligence',
    services: [
      { name: 'AI Consciousness Evolution Platform', href: '/ai-consciousness-evolution-platform', description: 'Develop genuine AI consciousness', price: '$19,999/month' },
      { name: 'AI Emotional Intelligence Platform', href: '/ai-emotional-intelligence-platform', description: 'Real-time emotion analysis and response', price: '$3,999/month' },
      { name: 'AI Creativity Orchestrator', href: '/ai-creativity-orchestrator', description: 'Multi-model creativity fusion', price: '$5,999/month' },
      { name: 'AI Autonomous Business Manager', href: '/ai-autonomous-business-manager', description: 'Fully autonomous business operations', price: '$12,999/month' }
    ]
  },
  {
    title: '⚛️ Quantum & Emerging Tech 2030',
=======
    title: '🧠 2032 AI Consciousness & Evolution',
    icon: BrainIcon2,
    color: 'from-violet-600 via-purple-600 to-indigo-600',
    description: 'Next-generation AI consciousness and creativity',
    services: [
      { name: 'AI Consciousness Evolution Platform 2029', href: '/ai-consciousness-evolution-platform-2029', description: 'Develop genuine AI consciousness', price: '$24,999/month' },
      { name: 'AI Consciousness Evolution 2030', href: '/ai-consciousness-evolution-2030', description: 'Next-generation AI consciousness', price: '$39,999/month' },
      { name: 'Quantum Consciousness Computing Platform', href: '/quantum-consciousness-computing', description: 'Quantum computing meets AI consciousness', price: '$19,999/month' },
      { name: 'AI Autonomous Operations 2030', href: '/ai-autonomous-operations-2030', description: 'Fully autonomous AI operations', price: '$19,999/month' }
    ]
  },
  {
    title: '⚛️ 2032 Quantum & Emerging Tech',
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-917b
    icon: AtomIcon,
    color: 'from-indigo-600 via-blue-600 to-cyan-600',
    description: 'Quantum computing and beyond',
    services: [
<<<<<<< HEAD
      { name: 'Quantum Internet Security Gateway', href: '/quantum-internet-security-gateway', description: 'Unbreakable quantum encryption', price: '$15,999/month' },
      { name: 'Biotech DNA Computing Platform', href: '/biotech-dna-computing-platform', description: 'DNA-based computation', price: '$25,999/month' },
      { name: 'Neuromorphic Computing Platform', href: '/neuromorphic-computing-platform', description: 'Brain-inspired computing', price: '$899/month' },
      { name: 'Photonic Computing Infrastructure', href: '/photonic-computing-infrastructure', description: 'Light-speed computing', price: '$699/month' }
    ]
  },
  {
    title: '🚀 Space & Metaverse 2030',
    icon: Rocket,
    color: 'from-teal-600 via-emerald-600 to-green-600',
    description: 'Space exploration and digital reality',
    services: [
      { name: 'Space Mining Automation Platform', href: '/space-mining-automation-platform', description: 'Automated asteroid mining', price: '$45,999/month' },
      { name: 'Metaverse Development Platform', href: '/metaverse-development-platform', description: 'Build immersive virtual worlds', price: '$499/month' },
      { name: 'Virtual Event Hologram Platform', href: '/virtual-event-hologram-platform', description: 'Immersive holographic events', price: '$799/month' },
      { name: 'AI Predictive Health Analytics', href: '/ai-predictive-health-analytics', description: 'Predictive health outcomes', price: '$7,999/month' }
    ]
  },
  {
    title: '⚙️ Enterprise IT 2030',
=======
      { name: 'Quantum AI Computing 2030', href: '/quantum-ai-computing-2030', description: 'Quantum-powered AI computation', price: '$29,999/month' },
      { name: 'Quantum-Secure Communication 2030', href: '/quantum-secure-communication-2030', description: 'Unbreakable quantum encryption', price: '$4,999/month' },
      { name: 'Quantum-Secure Infrastructure 2030', href: '/quantum-secure-infrastructure-2030', description: 'Quantum-proof infrastructure security', price: '$12,999/month' },
      { name: 'DNA Computing Platform 2029', href: '/dna-computing-platform-2029', description: 'Molecular computing with DNA', price: '$34,999/month' }
    ]
  },
  {
    title: '🏢 2032 Enterprise IT Solutions',
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-917b
    icon: CpuIcon,
    color: 'from-blue-600 via-cyan-600 to-teal-600',
    description: 'Autonomous enterprise infrastructure',
    services: [
<<<<<<< HEAD
      { name: 'Autonomous DevOps Platform', href: '/autonomous-devops-platform', description: 'Fully autonomous DevOps', price: '$799/month' },
      { name: 'Zero Trust Network Architecture', href: '/zero-trust-network-architecture', description: 'Never trust, always verify', price: '$599/month' },
      { name: 'Edge Computing Orchestration', href: '/edge-computing-orchestration', description: 'Distributed edge computing', price: '$449/month' },
      { name: 'AI-Powered IT Operations Center', href: '/ai-it-operations-center', description: 'Intelligent IT operations', price: '$699/month' }
    ]
  },
  {
    title: '🎯 Business Solutions 2030',
    icon: Target,
    color: 'from-green-600 via-yellow-600 to-orange-600',
    description: 'Practical business solutions with AI',
    services: [
      { name: 'AI Business Intelligence Suite', href: '/ai-business-intelligence-suite', description: 'Intelligent business insights', price: '$299/month' },
      { name: 'AI Customer Success Automation', href: '/ai-customer-success-automation', description: 'Automate customer success', price: '$199/month' },
      { name: 'Blockchain Supply Chain Transparency', href: '/blockchain-supply-chain-transparency', description: 'End-to-end traceability', price: '$399/month' },
      { name: 'AI Meeting Transcriber Pro', href: '/ai-meeting-transcriber-pro', description: 'Professional transcription', price: '$149/month' }
    ]
  },
  {
    title: '🔬 Research & Development 2030',
=======
      { name: 'Autonomous DevOps Platform 2030', href: '/autonomous-devops-platform-2030', description: 'Fully autonomous DevOps', price: '$8,999/month' },
      { name: 'Zero Trust Network Architecture 2030', href: '/zero-trust-network-architecture-2030', description: 'Never trust, always verify', price: '$6,999/month' },
      { name: 'Edge Computing Orchestration 2030', href: '/edge-computing-orchestration-2030', description: 'Distributed edge computing', price: '$5,999/month' },
      { name: 'AI-Powered IT Operations Center 2030', href: '/ai-it-operations-center-2030', description: 'Intelligent IT operations', price: '$7,999/month' }
    ]
  },
  {
    title: '🌌 2032 Space & Metaverse Tech',
    icon: Rocket,
    color: 'from-teal-600 via-emerald-600 to-green-600',
    description: 'Space exploration and digital reality',
    services: [
      { name: 'Space Colonization Automation Platform', href: '/space-colonization-automation-platform', description: 'Automate space colonization', price: '$89,999/month' },
      { name: 'AI Space Technology 2030', href: '/ai-space-technology-2030', description: 'AI-powered space exploration', price: '$79,999/month' },
      { name: 'Metaverse Consciousness Platform', href: '/metaverse-consciousness-platform', description: 'Digital consciousness in virtual worlds', price: '$12,999/month' },
      { name: 'AI Metaverse Integration 2030', href: '/ai-metaverse-integration-2030', description: 'AI-powered metaverse experiences', price: '$14,999/month' }
    ]
  },
  {
    title: '🎯 2032 Innovative Micro SAAS',
    icon: TargetIcon,
    color: 'from-green-600 via-yellow-600 to-orange-600',
    description: 'Cutting-edge micro solutions',
    services: [
      { name: 'AI Business Intelligence 2030', href: '/ai-business-intelligence-2030', description: 'Next-generation AI-powered business insights', price: '$2,999/month' },
      { name: 'AI Customer Success Automation 2030', href: '/ai-customer-success-automation-2030', description: 'Fully automated customer success', price: '$1,999/month' },
      { name: 'AI Marketing Automation 2030', href: '/ai-marketing-automation-2030', description: 'Fully autonomous marketing', price: '$2,499/month' },
      { name: 'Blockchain Supply Chain Transparency 2030', href: '/blockchain-supply-chain-transparency-2030', description: 'End-to-end blockchain traceability', price: '$3,999/month' }
    ]
  },
  {
    title: '🔬 2032 Research & Development',
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-917b
    icon: Microscope,
    color: 'from-orange-600 via-red-600 to-pink-600',
    description: 'Breakthrough research solutions',
    services: [
<<<<<<< HEAD
      { name: 'Swarm Robotics Orchestration', href: '/swarm-robotics-orchestration', description: 'Coordinate robot swarms', price: '$449/month' },
      { name: 'Brain-Computer Interface Platform', href: '/brain-computer-interface-platform', description: 'Direct neural interface', price: '$1,299/month' },
      { name: 'Quantum Machine Learning Platform', href: '/quantum-machine-learning-platform', description: 'Quantum-enhanced ML', price: '$2,999/month' },
      { name: 'Synthetic Biology Automation Platform', href: '/synthetic-biology-automation-platform', description: 'Automate biology research', price: '$3,999/month' }
=======
      { name: 'Autonomous Business Ecosystem 2029', href: '/autonomous-business-ecosystem-2029', description: 'Fully autonomous business operations', price: '$49,999/month' },
      { name: 'Neuromorphic Computing Platform', href: '/neuromorphic-computing-platform', description: 'Brain-inspired computing', price: '$899/month' },
      { name: 'Photonic Computing Infrastructure', href: '/photonic-computing-infrastructure', description: 'Light-speed computing', price: '$699/month' },
      { name: 'Swarm Robotics Orchestration', href: '/swarm-robotics-orchestration', description: 'Coordinate robot swarms', price: '$449/month' }
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-917b
    ]
  }
];

const mainNavigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Services', href: '/services', icon: Briefcase },
<<<<<<< HEAD
  { name: 'Solutions', href: '/solutions', icon: Layers },
  { name: 'Pricing', href: '/pricing', icon: DollarSign },
  { name: 'Resources', href: '/resources', icon: BookOpen },
  { name: 'Case Studies', href: '/case-studies', icon: TrendingUp },
  { name: 'Blog', href: '/blog', icon: MessageCircle },
  { name: 'Contact', href: '/contact', icon: MessageCircle }
];

const companyLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Careers', href: '/careers' },
  { name: 'News', href: '/news' },
  { name: 'Partners', href: '/partners' },
  { name: 'Support', href: '/support' },
  { name: 'Status', href: '/status' }
=======
  { name: 'AI Services', href: '/ai-services', icon: Brain },
  { name: 'IT Solutions', href: '/it-solutions', icon: Cpu },
  { name: 'Quantum Tech', href: '/quantum-tech', icon: Atom },
  { name: 'Space Tech', href: '/space-tech', icon: Rocket },
  { name: 'Pricing', href: '/pricing', icon: DollarSign },
  { name: 'About', href: '/about', icon: Users },
  { name: 'Contact', href: '/contact', icon: MessageCircle },
  { name: 'Blog', href: '/blog', icon: BookOpen }
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-917b
];

export default function UltraFuturisticNavigation2032() {
  const [isOpen, setIsOpen] = useState(false);
<<<<<<< HEAD
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
=======
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-917b
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
<<<<<<< HEAD
    <>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-cyan-900/90 via-purple-900/90 to-pink-900/90 backdrop-blur-sm border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-2 text-sm">
            <div className="flex items-center space-x-6 text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-cyan-400" />
                <a href={`tel:${contactInfo.mobile}`} className="hover:text-cyan-400 transition-colors">
                  {contactInfo.mobile}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-purple-400" />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-purple-400 transition-colors">
                  {contactInfo.email}
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a href="https://github.com/Zion-Holdings" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://linkedin.com/company/ziontechgroup" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.852-3.047-1.853 0-2.136 1.445-2.136 2.939v5.677H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
=======
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-xl border-b border-cyan-500/30 shadow-2xl shadow-cyan-500/20' 
        : 'bg-black/70 backdrop-blur-lg'
    }`}>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 text-white text-center py-2 text-sm font-medium">
        <div className="flex items-center justify-center space-x-6">
          <span className="flex items-center space-x-2">
            <Phone className="w-4 h-4" />
            <span>{contactInfo.mobile}</span>
          </span>
          <span className="flex items-center space-x-2">
            <Mail className="w-4 h-4" />
            <span>{contactInfo.email}</span>
          </span>
          <span className="flex items-center space-x-2">
            <MapPin className="w-4 h-4" />
            <span>{contactInfo.address}</span>
          </span>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-917b
        </div>
      </div>

      {/* Main Navigation */}
<<<<<<< HEAD
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/95 backdrop-blur-xl border-b border-cyan-500/20 shadow-2xl shadow-cyan-500/10' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Rocket className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Zion Tech Group
                </div>
                <div className="text-xs text-gray-400">2030 Future Technology</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {mainNavigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-center space-x-2 group"
                >
                  <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span>{item.name}</span>
                </Link>
              ))}
              
              {/* Services Dropdown */}
              <div className="relative group">
                <button className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-center space-x-2 group">
                  <Briefcase className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span>Services</span>
                  <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
                </button>
                
                {/* Mega Menu */}
                <div className="absolute top-full left-0 w-screen max-w-7xl transform -translate-x-1/2 left-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pt-4">
                  <div className="bg-black/95 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8 shadow-2xl shadow-cyan-500/20">
                    <div className="grid grid-cols-2 gap-8">
                      {serviceCategories.map((category, index) => (
                        <div key={index} className="space-y-4">
                          <div className="flex items-center space-x-3">
                            <div className={`w-10 h-10 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center`}>
                              <category.icon className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                              <p className="text-sm text-gray-400">{category.description}</p>
                            </div>
                          </div>
                          <div className="space-y-2">
                            {category.services.map((service, serviceIndex) => (
                              <Link
                                key={serviceIndex}
                                href={service.href}
                                className="block p-3 rounded-lg hover:bg-gray-800/50 transition-colors group"
                              >
                                <div className="flex items-center justify-between">
                                  <div>
                                    <div className="text-white group-hover:text-cyan-400 transition-colors font-medium">
                                      {service.name}
                                    </div>
                                    <div className="text-sm text-gray-400">{service.description}</div>
                                  </div>
                                  <div className="text-cyan-400 font-semibold text-sm">{service.price}</div>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link href="/contact">
                <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl">
                  Get Started
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>
=======
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 shadow-lg shadow-cyan-500/30">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
              <span className="text-xs text-gray-400 font-mono">2032 Future Technology</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {mainNavigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group relative flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300"
              >
                <item.icon className="w-4 h-4 group-hover:text-cyan-400 transition-colors duration-300" />
                <span className="font-medium">{item.name}</span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></div>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/contact"
              className="relative group px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-105"
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 transition-colors duration-300"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-917b

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
<<<<<<< HEAD
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-xl" onClick={closeMenu} />
            <div className="absolute right-0 top-0 h-full w-80 bg-black/95 backdrop-blur-xl border-l border-cyan-500/20 overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <Rocket className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                        Zion Tech Group
                      </div>
                    </div>
                  </div>
                  <button onClick={closeMenu} className="p-2 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50">
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Mobile Navigation */}
                <div className="space-y-6">
                  {mainNavigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={closeMenu}
                      className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors p-3 rounded-lg hover:bg-gray-800/50"
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.name}</span>
                    </Link>
                  ))}

                  {/* Services Accordion */}
                  <div className="space-y-2">
                    <button
                      onClick={() => setActiveCategory(activeCategory === 0 ? null : 0)}
                      className="w-full flex items-center justify-between p-3 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 transition-colors"
                    >
                      <span className="flex items-center space-x-3">
                        <Briefcase className="w-5 h-5" />
                        <span>Services</span>
                      </span>
                      <ChevronRightIcon className={`w-5 h-5 transition-transform ${activeCategory === 0 ? 'rotate-90' : ''}`} />
                    </button>
                    
                    {activeCategory === 0 && (
                      <div className="pl-8 space-y-2">
                        {serviceCategories.map((category, index) => (
                          <div key={index} className="space-y-2">
                            <div className="text-sm font-medium text-cyan-400 py-2">{category.title}</div>
                            {category.services.map((service, serviceIndex) => (
                              <Link
                                key={serviceIndex}
                                href={service.href}
                                onClick={closeMenu}
                                className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors py-1"
                              >
                                {service.name}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Company Links */}
                  <div className="pt-4 border-t border-gray-700/50">
                    <div className="text-sm font-medium text-gray-400 mb-3">Company</div>
                    <div className="space-y-2">
                      {companyLinks.map((link) => (
                        <Link
                          key={link.name}
                          href={link.href}
                          onClick={closeMenu}
                          className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors py-1"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="pt-4 border-t border-gray-700/50">
                    <div className="text-sm font-medium text-gray-400 mb-3">Contact</div>
                    <div className="space-y-2 text-sm text-gray-400">
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-cyan-400" />
                        <span>{contactInfo.mobile}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4 text-purple-400" />
                        <span>{contactInfo.email}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-pink-400" />
                        <span className="text-xs">{contactInfo.address}</span>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-4">
                    <Link href="/contact" onClick={closeMenu}>
                      <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200">
                        Get Started Today
                      </button>
                    </Link>
                  </div>
                </div>
=======
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-cyan-500/30"
          >
            <div className="px-4 py-6 space-y-4">
              {mainNavigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={closeMenu}
                  className="flex items-center space-x-3 text-gray-300 hover:text-white hover:bg-gray-800/50 p-3 rounded-lg transition-all duration-300"
                >
                  <item.icon className="w-5 h-5 text-cyan-400" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              ))}
              
              <div className="pt-4 border-t border-gray-700">
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl"
                >
                  Get Started
                </Link>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-917b
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

<<<<<<< HEAD
      {/* Spacer for fixed navigation */}
      <div className="h-20" />
    </>
=======
      {/* Service Categories Dropdown */}
      <AnimatePresence>
        {activeCategory && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-cyan-500/30 shadow-2xl"
          >
            <div className="max-w-7xl mx-auto px-4 py-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {serviceCategories.map((category) => (
                  <div key={category.title} className="group">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color}`}>
                        <category.icon className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors duration-300">
                        {category.title}
                      </h3>
                    </div>
                    <p className="text-gray-400 text-sm mb-4">{category.description}</p>
                    <div className="space-y-3">
                      {category.services.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="block p-3 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300 group"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-medium text-white group-hover:text-cyan-400 transition-colors duration-300">
                              {service.name}
                            </h4>
                            <span className="text-sm text-cyan-400 font-semibold">{service.price}</span>
                          </div>
                          <p className="text-sm text-gray-400">{service.description}</p>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-917b
  );
}