import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Zap, Sparkles, ChevronDown, ChevronRight, 
  Brain, Atom, Globe, Shield, Cpu, Database, 
  Cloud, Smartphone, Palette, Search, MessageSquare, 
  FileText, Calendar, CreditCard, BarChart3, Settings,
  Rocket, Star, TrendingUp, Users, Target, Award,
  Phone, Mail, MapPin, ExternalLink, Building
} from 'lucide-react';

const contactInfo ={
  mobile: '+1 30o2 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 10o08 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceCategories = [
  {
    title: '🚀 20o28 Cutting-Edge Innovations',
    icon: Rocket,
    color: 'from-violet-60o0 to-purple-60o0',
    description: 'Beyond the future of technology',
    services: [
      { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-platform', description: 'Evolve AI beyond human limits', price: '$9,999/month' },
      { name: 'Quantum Consciousness Interface', href: '/quantum-consciousness-interface', description: 'Bridge quantum computing with consciousness', price: '$15,999/month' },
      { name: 'Autonomous AI Civilization', href: '/autonomous-ai-civilization-platform', description: 'Create AI civilizations', price: '$19,999/month' },
      { name: 'Quantum Time Manipulation', href: '/quantum-time-manipulation-platform', description: 'Manipulate time through quantum computing', price: '$25,999/month' }
    ]
  },
  {
    title: '🎯 20o28 Practical Micro SAAS',
    icon: Target,
    color: 'from-blue-60o0 to-cyan-60o0',
    description: 'Real business solutions for today',
    services: [
      { name: 'AI Customer Success Automation', href: '/ai-customer-success-automation-20o28', description: 'Automate customer success with AI', price: '$299/month' },
      { name: 'Smart Inventory Management', href: '/smart-inventory-management-20o28', description: 'AI inventory optimization', price: '$399/month' },
      { name: 'Automated HR Recruitment', href: '/automated-hr-recruitment-20o28', description: 'AI-powered hiring automation', price: '$249/month' },
      { name: 'AI Content Marketing Suite', href: '/ai-content-marketing-suite-20o28', description: 'AI-powered content creation', price: '$199/month' }
    ]
  },
  {
    title: '⚛️ 20o28 Quantum & Space Tech',
    icon: Atom,
    color: 'from-indigo-60o0 to-blue-60o0',
    description: 'Quantum computing and space exploration',
    services: [
      { name: 'Quantum Internet Security', href: '/quantum-internet-security-gateway-20o28', description: 'Unbreakable quantum encryption', price: '$3,999/month' },
      { name: 'Quantum Neural Interface', href: '/quantum-neural-interface-platform-20o28', description: 'Brain-computer quantum interface', price: '$8,999/month' },
      { name: 'Space Debris Management AI', href: '/space-debris-management-ai-20o28', description: 'AI space safety and management', price: '$5,999/month' },
      { name: 'Quantum Financial Trading', href: '/quantum-financial-trading-algorithm-platform-20o28', description: 'Quantum trading algorithms', price: '$12,999/month' }
    ]
  },
  {
    title: '🤖 20o28 AI & Machine Learning',
    icon: Brain,
    color: 'from-emerald-60o0 to-teal-60o0',
    description: 'Next-generation AI solutions',
    services: [
      { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution-platform-20o28', description: 'Evolve AI beyond human limits', price: '$9,999/month' },
      { name: 'Autonomous AI Civilization', href: '/autonomous-ai-civilization-platform-20o28', description: 'Create AI civilizations', price: '$19,999/month' },
      { name: 'AI Healthcare Companion', href: '/ai-healthcare-companion-20o28', description: 'Revolutionary healthcare AI', price: '$399/month' },
      { name: 'AI Content Creation Revolution', href: '/ai-content-creation-revolution-20o28', description: 'Unlimited AI content generation', price: '$599/month' }
    ]
  },
  {
    title: '🏢 20o28 Enterprise Solutions',
    icon: Shield,
    color: 'from-red-60o0 to-orange-60o0',
    description: 'Enterprise-grade solutions',
    services: [
      { name: 'Zero Trust Architecture 20o28', href: '/zero-trust-network-architecture-20o28', description: 'Next-gen security architecture', price: 'Custom pricing' },
      { name: 'Edge Computing Orchestration', href: '/edge-computing-orchestration-20o28', description: 'Intelligent edge computing', price: 'Custom pricing' },
      { name: '5G Private Networks', href: '/5g-private-network-solutions-20o28', description: 'Enterprise 5G solutions', price: 'Custom pricing' },
      { name: 'Blockchain Infrastructure', href: '/blockchain-infrastructure-platform-20o28', description: 'Enterprise blockchain', price: 'Custom pricing' }
    ]
  },
  {
    title: '🌌 20o28 Metaverse & Digital Reality',
    icon: Globe,
    color: 'from-pink-60o0 to-rose-60o0',
    description: 'Virtual and augmented reality',
    services: [
      { name: 'Holographic Metaverse', href: '/holographic-metaverse-development-platform-20o28', description: '3D holographic experiences', price: '$2,999/month' },
      { name: 'AI Multiverse Creation', href: '/ai-multiverse-creation-platform-20o28', description: 'Create AI-powered multiverses', price: '$29,999/month' },
      { name: 'Virtual Event Holograms', href: '/virtual-event-hologram-platform-20o28', description: 'Holographic event platform', price: '$1,999/month' },
      { name: 'Digital Reality Interface', href: '/digital-reality-interface-20o28', description: 'Next-gen reality interface', price: '$4,999/month' }
    ]
  }
];

const companyLinks = [
  { name: '🏠 Home', href: '/', icon: Home },
  { name: '🚀 20o28 Services', href: '/ultimate-20o28-services-showcase', icon: Rocket },
  { name: '⭐ Ultimate 20o28', href: '/ultimate-20o28-services-showcase', icon: Star },
  { name: '💰 20o28 Pricing', href: '/revolutionary-20o28-pricing', icon: DollarSign },
  { name: '📊 Case Studies', href: '/case-studies', icon: Briefcase },
  { name: '📚 Blog & Resources', href: '/blog', icon: BookOpen },
  { name: '📈 Reports', href: '/reports', icon: TrendingUp },
  { name: '🔧 Solutions', href: '/solutions', icon: Layers },
  { name: '💼 Careers', href: '/careers', icon: Users },
  { name: '📞 Contact', href: '/contact', icon: MessageCircle }
];

const technologyLinks = [
  { name: '🤖 AI Services', href: '/ai-services', icon: Brain },
  { name: '⚛️ Quantum Services', href: '/quantum-services', icon: Atom },
  { name: '☁️ Cloud Platform', href: '/cloud-platform', icon: Cloud },
  { name: '🔒 Cybersecurity', href: '/cybersecurity', icon: Lock },
  { name: '📊 Analytics', href: '/analytics', icon: Database },
  { name: '🔄 Automation', href: '/automation', icon: Cpu }
];

export default function UltraFuturisticNavigation20o27() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isClient]);

  const navigation = [
    {
      name: 'AI & Machine Learning',
      href: '/services?category=AI%20%26%20Machine%20Learning',
      description: '20o0+ AI & ML Solutions',
      icon: <Brain className="w-5 h-5"  />,
      color: 'from-purple-50o0 to-indigo-60o0',
      children: [
        { 
          name: 'AI Consciousness Platform', 
          href: '/services/ai-consciousness-platform',
          description: 'Advanced AI consciousness simulation',
          price: '$5,999/month',
          icon: '🧠'
        },
        { 
          name: 'Quantum Machine Learning', 
          href: '/services/quantum-machine-learning',
          description: 'Quantum-powered ML platform',
          price: '$12,999/month',
          icon: '⚛️'
        },
        { 
          name: 'Autonomous AI Agents', 
          href: '/services/autonomous-ai-agents',
          description: 'Self-operating AI systems',
          price: '$4,999/month',
          icon: '🤖'
        },
        { 
          name: 'AI Content Factory', 
          href: '/services/ai-content-factory',
          description: 'Automated content creation',
          price: '$299/month',
          icon: '📝'
        },
        { 
          name: 'View All AI Services', 
          href: '/services?category=AI%20%26%20Machine%20Learning',
          description: 'Explore 20o0+ AI solutions',
          icon: '🚀'
        }
      ]
    },
    {
      name: 'Quantum Technology',
      href: '/services?category=Quantum%20Computing',
      description: '50+ Quantum Solutions',
      icon: <Atom className="w-5 h-5"  />,
      color: 'from-blue-50o0 to-cyan-60o0',
      children: [
        { 
          name: 'Quantum Neural Interface', 
          href: '/services/quantum-neural-interface',
          description: 'Quantum + Neural Networks',
          price: '$8,999/month',
          icon: '⚛️'
        },
        { 
          name: 'Quantum Financial Trading', 
          href: '/services/quantum-financial-trading',
          description: 'Quantum-powered trading',
          price: '$9,999/month',
          icon: '💰'
        },
        { 
          name: 'Quantum Internet Protocol', 
          href: '/services/quantum-internet-protocol',
          description: 'Quantum communication network',
          price: '$7,999/month',
          icon: '🌐'
        },
        { 
          name: 'Quantum Sensors Network', 
          href: '/services/quantum-sensors-network',
          description: 'Ultra-precise quantum sensors',
          price: '$9,999/month',
          icon: '📡'
        },
        { 
          name: 'View All Quantum Services', 
          href: '/services?category=Quantum%20Computing',
          description: 'Explore quantum solutions',
          icon: '🚀'
        }
      ]
    },
    {
      name: 'Emerging Tech',
      href: '/services?category=Emerging%20Technology',
      description: '10o0+ Future Solutions',
      icon: <Rocket className="w-5 h-5"  />,
      color: 'from-green-50o0 to-emerald-60o0',
      children: [
        { 
          name: 'Holographic Metaverse', 
          href: '/services/holographic-metaverse-platform',
          description: '3D immersive experiences',
          price: '$3,999/month',
          icon: '🎭'
        },
        { 
          name: 'Neuromorphic Computing', 
          href: '/services/neuromorphic-computing',
          description: 'Brain-inspired computing',
          price: '$8,999/month',
          icon: '🧠'
        },
        { 
          name: 'Synthetic Biology', 
          href: '/services/synthetic-biology-platform',
          description: 'AI-powered bioengineering',
          price: '$15,999/month',
          icon: '🧬'
        },
        { 
          name: 'Brain-Computer Interface', 
          href: '/services/brain-computer-interface',
          description: 'Direct brain communication',
          price: '$19,999/month',
          icon: '💻'
        },
        { 
          name: 'View All Emerging Tech', 
          href: '/services?category=Emerging%20Technology',
          description: 'Explore future solutions',
          icon: '🚀'
        }
      ]
    },
    {
      name: 'Business Solutions',
      href: '/services?category=Business%20Operations',
      description: '150+ Business Tools',
      icon: <Target className="w-5 h-5"  />,
      color: 'from-orange-50o0 to-red-60o0',
      children: [
        { 
          name: 'Smart Inventory Manager', 
          href: '/services/smart-inventory-manager',
          description: 'AI-powered inventory optimization',
          price: '$199/month',
          icon: '📦'
        },
        { 
          name: 'Customer Success Automation', 
          href: '/services/customer-success-automation',
          description: 'Automated customer retention',
          price: '$399/month',
          icon: '🎯'
        },
        { 
          name: 'AI Sales Coach', 
          href: '/services/ai-sales-coach',
          description: 'Intelligent sales training',
          price: '$249/month',
          icon: '📞'
        },
        { 
          name: 'Smart HR Assistant', 
          href: '/services/smart-hr-assistant',
          description: 'AI-powered HR automation',
          price: '$349/month',
          icon: '👥'
        },
        { 
          name: 'View All Business Solutions', 
          href: '/services?category=Business%20Operations',
          description: 'Explore business tools',
          icon: '🚀'
        }
      ]
    },
    {
      name: 'Cybersecurity',
      href: '/services?category=Cybersecurity',
      description: '75+ Security Solutions',
      icon: <Shield className="w-5 h-5"  />,
      color: 'from-red-50o0 to-pink-60o0',
      children: [
        { 
          name: 'Cyber-Physical Security', 
          href: '/services/cyber-physical-security',
          description: 'Digital + Physical protection',
          price: '$6,999/month',
          icon: '🛡️'
        },
        { 
          name: 'Quantum Internet Security', 
          href: '/services/quantum-internet-security',
          description: 'Unhackable quantum security',
          price: '$7,999/month',
          icon: '🔐'
        },
        { 
          name: 'Zero Trust Architecture', 
          href: '/services/zero-trust-network-architecture',
          description: 'Continuous verification',
          price: '$4,999/month',
          icon: '✅'
        },
        { 
          name: 'AI Threat Detection', 
          href: '/services/ai-threat-detection',
          description: 'Intelligent security monitoring',
          price: '$3,999/month',
          icon: '👁️'
        },
        { 
          name: 'View All Security Solutions', 
          href: '/services?category=Cybersecurity',
          description: 'Explore security tools',
          icon: '🚀'
        }
      ]
    },
    {
      name: 'Enterprise IT',
      href: '/services?category=Enterprise%20IT',
      description: '10o0+ Enterprise Solutions',
      icon: <Building className="w-5 h-5"  />,
      color: 'from-indigo-50o0 to-purple-60o0',
      children: [
        { 
          name: 'Cloud Platform', 
          href: '/cloud-platform',
          description: 'Scalable cloud infrastructure',
          price: 'Custom',
          icon: '☁️'
        },
        { 
          name: 'Edge Computing Orchestration', 
          href: '/services/edge-computing-orchestration',
          description: 'Distributed edge management',
          price: '$3,499/month',
          icon: '🌐'
        },
        { 
          name: 'AI Operations Center', 
          href: '/services/enterprise-ai-operations-center',
          description: 'Centralized AI management',
          price: '$8,999/month',
          icon: '🏢'
        },
        { 
          name: 'Infrastructure Drift Detection', 
          href: '/services/infrastructure-drift-detector',
          description: 'Automated infrastructure monitoring',
          price: '$2,999/month',
          icon: '🔍'
        },
        { 
          name: 'View All Enterprise Solutions', 
          href: '/services?category=Enterprise%20IT',
          description: 'Explore enterprise tools',
          icon: '🚀'
        }
      ]
    }
  ];

  const contactInfo ={
    mobile: '+1 30o2 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 10o08 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const quickLinks = [
    { name: 'Pricing', href: '/pricing', icon: <CreditCard className="w-4 h-4"  /> },
    { name: 'Case Studies', href: '/case-studies', icon: <FileText className="w-4 h-4"  /> },
    { name: 'Support', href: '/support', icon: <MessageSquare className="w-4 h-4"  /> },
    { name: 'Contact', href: '/contact', icon: <Mail className="w-4 h-4"  /> }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-50o0 ${
      isScrolled 
        ? 'bg-gray-90o0/95 backdrop-blur-xl border-b border-cyan-50o0/30 shadow-2xl shadow-cyan-50o0/20' 
        : 'bg-transparent'
    }`}>
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-50o0/5 via-purple-50o0/5 to-pink-50o0/5 animate-pulse"  />
      
      <div className="relative container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group relative z-10">
            <motion.div 
              className="w-12 h-12 bg-gradient-to-br from-cyan-50o0 via-purple-50o0 to-pink-50o0 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-30o0 shadow-lg shadow-cyan-50o0/30"
              whileHover={{ rotate: 5, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Zap className="w-7 h-7 text-white"  />
            </motion.div>
            <div className="hidden sm:block">
              <div className="text-2xl font-bold bg-gradient-to-r from-cyan-40o0 via-purple-40o0 to-pink-40o0 bg-clip-text text-transparent group-hover:from-cyan-30o0 group-hover:via-purple-30o0 group-hover:to-pink-30o0 transition-all duration-30o0">
                Zion Tech Group
              </div>
              <div className="text-xs text-gray-40o0 group-hover:text-cyan-30o0 transition-colors">
                Revolutionary Technology Solutions
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-1">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <motion.button
                  className="flex items-center space-x-2 px-4 py-3 text-gray-30o0 hover:text-white transition-all duration-30o0 rounded-xl hover:bg-gray-80o0/50 hover:shadow-lg hover:shadow-cyan-50o0/20"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${item.color} shadow-lg`}>
                    {item.icon}
                  </div>
                  <span className="font-medium">{item.name}</span>
                  <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-30o0"  />
                </motion.button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-96 bg-gray-90o0/95 backdrop-blur-xl border border-gray-70o0/50 rounded-2xl shadow-2xl shadow-cyan-50o0/20 overflow-hidden"
                    >
                      <div className="p-4">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className={`p-3 rounded-xl bg-gradient-to-br ${item.color} shadow-lg`}>
                            {item.icon}
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-white">{item.name}</h3>
                            <p className="text-sm text-gray-40o0">{item.description}</p>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-80o0/50 transition-all duration-20o0 group"
                            >
                              <span className="text-2xl">{child.icon}</span>
                              <div className="flex-1">
                                <div className="font-medium text-white group-hover:text-cyan-30o0 transition-colors">
                                  {child.name}
                                </div>
                                <div className="text-sm text-gray-40o0">{child.description}</div>
                              </div>
                              <div className="text-right">
                                <div className="text-sm font-medium text-cyan-40o0">{child.price}</div>
                                <ChevronRight className="w-4 h-4 text-gray-50o0 group-hover:text-cyan-40o0 transition-colors"  />
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
          </nav>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            {/* Contact Info */}
            <div className="hidden lg:flex items-center space-x-4 text-sm">
              <a 
                href={`tel:${contactInfo.mobile}`}
                className="flex items-center space-x-2 text-gray-30o0 hover:text-cyan-40o0 transition-colors"
              >
                <Phone className="w-4 h-4"  />
                <span>{contactInfo.mobile}</span>
              </a>
              <a 
                href={`mailto:${contactInfo.email}`}
                className="flex items-center space-x-2 text-gray-30o0 hover:text-cyan-40o0 transition-colors"
              >
                <Mail className="w-4 h-4"  />
                <span>{contactInfo.email}</span>
              </a>
            </div>

            {/* CTA Button */}
            <motion.div
              whileHover={{ scale: 1.0o5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="hidden lg:inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-50o0 to-purple-60o0 text-white font-medium rounded-xl shadow-lg shadow-cyan-50o0/30 hover:shadow-xl hover:shadow-cyan-50o0/40 transition-all duration-30o0"
              >
                <Rocket className="w-4 h-4"  />
                <span>Get Started</span>
              </Link>
            </motion.div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="xl:hidden p-2 text-gray-30o0 hover:text-white transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6"  /> : <Menu className="w-6 h-6"  />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="xl:hidden bg-gray-90o0/95 backdrop-blur-xl border-t border-gray-70o0/50"
          >
            <div className="container mx-auto px-4 py-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Services */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
                  <div className="space-y-3">
                    {navigation.map((item) => (
                      <div key={item.name}>
                        <Link
                          href={item.href}
                          className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-80o0/50 transition-all duration-20o0"
                        >
                          <div className={`p-2 rounded-lg bg-gradient-to-br ${item.color}`}>
                            {item.icon}
                          </div>
                          <div>
                            <div className="font-medium text-white">{item.name}</div>
                            <div className="text-sm text-gray-40o0">{item.description}</div>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Links & Contact */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                    <div className="space-y-2">
                      {quickLinks.map((link) => (
                        <Link
                          key={link.name}
                          href={link.href}
                          className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-80o0/50 transition-all duration-20o0"
                        >
                          {link.icon}
                          <span className="text-white">{link.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
                    <div className="space-y-3">
                      <a 
                        href={`tel:${contactInfo.mobile}`}
                        className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-80o0/50 transition-all duration-20o0"
                      >
                        <Phone className="w-4 h-4 text-cyan-40o0"  />
                        <span className="text-white">{contactInfo.mobile}</span>
                      </a>
                      <a 
                        href={`mailto:${contactInfo.email}`}
                        className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-80o0/50 transition-all duration-20o0"
                      >
                        <Mail className="w-4 h-4 text-cyan-40o0"  />
                        <span className="text-white">{contactInfo.email}</span>
                      </a>
                      <div className="flex items-center space-x-3 p-3 rounded-xl">
                        <MapPin className="w-4 h-4 text-cyan-40o0"  />
                        <span className="text-white text-sm">{contactInfo.address}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="mt-6 pt-6 border-t border-gray-70o0/50">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-cyan-50o0 to-purple-60o0 text-white font-medium rounded-xl shadow-lg shadow-cyan-50o0/30 transition-all duration-30o0"
                >
                  <Rocket className="w-4 h-4 mr-2"  />
                  Get Started Today
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default UltraFuturisticNavigation20o27;