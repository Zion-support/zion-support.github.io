import React, { useState, useEffect } from 'react',
import Link from 'next/link',
import { motion, AnimatePresence } from 'framer-motion',
import { 
  Menu, X, Zap, Sparkles, ChevronDown, ChevronRight,
  Brain, Atom, Globe, Shield, Cpu, Database,
  Cloud, Smartphone, Palette, Search, MessageSquare,
  FileText, Calendar, CreditCard, BarChart3, Settings,
  Rocket, Star, TrendingUp, Users, Target, Award,
  Phone, Mail, MapPin, ExternalLink, Building
 from 'lucide-react',

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
,
const _serviceCategories = [
  {_title: ' 2028 Cutting-Edge Innovations', _icon: Rocket, _color: 'from-violet-600 to-purple-600', _description: 'Beyond the future of technology', _services: [
      { name: 'AI Consciousness Evolution', _href: '/ai-consciousness-evolution-platform', _description: 'Evolve AI beyond human limits', _price: '$9, _999/month'},
      {_name: 'Quantum Consciousness Interface', _href: '/quantum-consciousness-interface', _description: 'Bridge quantum computing with consciousness', _price: '$15, _999/month'},
      {_name: 'Autonomous AI Civilization', _href: '/autonomous-ai-civilization-platform', _description: 'Create AI civilizations', _price: '$19, _999/month'},
      {_name: 'Quantum Time Manipulation', _href: '/quantum-time-manipulation-platform', _description: 'Manipulate time through quantum computing', _price: '$25, _999/month'}
    ]
  },
  {_title: ' 2028 Practical Micro SAAS', _icon: Target, _color: 'from-blue-600 to-cyan-600', _description: 'Real business solutions for today', _services: [
      { name: 'AI Customer Success Automation', _href: '/ai-customer-success-automation-2028', _description: 'Automate customer success with AI', _price: '$299/month'},
      {_name: 'Smart Inventory Management', _href: '/smart-inventory-management-2028', _description: 'AI inventory optimization', _price: '$399/month'},
      {_name: 'Automated HR Recruitment', _href: '/automated-hr-recruitment-2028', _description: 'AI-powered hiring automation', _price: '$249/month'},
      {_name: 'AI Content Marketing Suite', _href: '/ai-content-marketing-suite-2028', _description: 'AI-powered content creation', _price: '$199/month'}
    ]
  },
  {_title: ' 2028 Quantum & Space Tech', _icon: Atom, _color: 'from-indigo-600 to-blue-600', _description: 'Quantum computing and space exploration', _services: [
      { name: 'Quantum Internet Security', _href: '/quantum-internet-security-gateway-2028', _description: 'Unbreakable quantum encryption', _price: '$3, _999/month'},
      {_name: 'Quantum Neural Interface', _href: '/quantum-neural-interface-platform-2028', _description: 'Brain-computer quantum interface', _price: '$8, _999/month'},
      {_name: 'Space Debris Management AI', _href: '/space-debris-management-ai-2028', _description: 'AI space safety and management', _price: '$5, _999/month'},
      {_name: 'Quantum Financial Trading', _href: '/quantum-financial-trading-algorithm-platform-2028', _description: 'Quantum trading algorithms', _price: '$12, _999/month'}
    ]
  },
  {_title: ' 2028 AI & Machine Learning', _icon: Brain, _color: 'from-emerald-600 to-teal-600', _description: 'Next-generation AI solutions', _services: [
      { name: 'AI Consciousness Evolution', _href: '/ai-consciousness-evolution-platform-2028', _description: 'Evolve AI beyond human limits', _price: '$9, _999/month'},
      {_name: 'Autonomous AI Civilization', _href: '/autonomous-ai-civilization-platform-2028', _description: 'Create AI civilizations', _price: '$19, _999/month'},
      {_name: 'AI Healthcare Companion', _href: '/ai-healthcare-companion-2028', _description: 'Revolutionary healthcare AI', _price: '$399/month'},
      {_name: 'AI Content Creation Revolution', _href: '/ai-content-creation-revolution-2028', _description: 'Unlimited AI content generation', _price: '$599/month'}
    ]
  },
  {_title: ' 2028 Enterprise Solutions', _icon: Shield, _color: 'from-red-600 to-orange-600', _description: 'Enterprise-grade solutions', _services: [
      { name: 'Zero Trust Architecture 2028', _href: '/zero-trust-network-architecture-2028', _description: 'Next-gen security architecture', _price: 'Custom pricing'},
      {_name: 'Edge Computing Orchestration', _href: '/edge-computing-orchestration-2028', _description: 'Intelligent edge computing', _price: 'Custom pricing'},
      {_name: '5G Private Networks', _href: '/5g-private-network-solutions-2028', _description: 'Enterprise 5G solutions', _price: 'Custom pricing'},
      {_name: 'Blockchain Infrastructure', _href: '/blockchain-infrastructure-platform-2028', _description: 'Enterprise blockchain', _price: 'Custom pricing'}
    ]
  },
  {_title: ' 2028 Metaverse & Digital Reality', _icon: Globe, _color: 'from-pink-600 to-rose-600', _description: 'Virtual and augmented reality', _services: [
      { name: 'Holographic Metaverse', _href: '/holographic-metaverse-development-platform-2028', _description: '3D holographic experiences', _price: '$2, _999/month'},
      {_name: 'AI Multiverse Creation', _href: '/ai-multiverse-creation-platform-2028', _description: 'Create AI-powered multiverses', _price: '$29, _999/month'},
      {_name: 'Virtual Event Holograms', _href: '/virtual-event-hologram-platform-2028', _description: 'Holographic event platform', _price: '$1, _999/month'},
      {_name: 'Digital Reality Interface', _href: '/digital-reality-interface-2028', _description: 'Next-gen reality interface', _price: '$4, _999/month'}
    ]
  }
,

const companyLinks = [
  { name: ' Home', href: '/', icon: Home },
  { name: ' 2028 Services', href: '/ultimate-2028-services-showcase', icon: Rocket },
  { name: ' Ultimate 2028', href: '/ultimate-2028-services-showcase', icon: Star },
  { name: ' 2028 Pricing', href: '/revolutionary-2028-pricing', icon: DollarSign },
  { name: ' Case Studies', href: '/case-studies', icon: Briefcase },
  { name: ' Blog & Resources', href: '/blog', icon: BookOpen },
  { name: ' Reports', href: '/reports', icon: TrendingUp },
  { name: ' Solutions', href: '/solutions', icon: Layers },
  { name: ' Careers', href: '/careers', icon: Users },
  { name: ' Contact', href: '/contact', icon: MessageCircle }
,

const technologyLinks = [
  { name: ' AI Services', href: '/ai-services', icon: Brain },
  { name: ' Quantum Services', href: '/quantum-services', icon: Atom },
  { name: ' Cloud Platform', href: '/cloud-platform', icon: Cloud },
  { name: ' Cybersecurity', href: '/cybersecurity', icon: Lock },
  { name: ' Analytics', href: '/analytics', icon: Database },
  { name: ' Automation', href: '/automation', icon: Cpu }
,

export default function UltraFuturisticNavigation2027() {
  const [isOpen, setIsOpen] = useState(false),
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null),
  const [isClient, setIsClient] = useState(false),

  useEffect() => {
    setIsClient(true)
  }, []),

  useEffect() => {
    if (!isClient) return,

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    },
    window.addEventListener('scroll', handleScroll),
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isClient]),

  const navigation = [
    {
      name: 'AI & Machine Learning',
      href: '/services?category=AI%20%26%20Machine%20Learning',
      description: '200+ AI & ML Solutions',
      icon: <Brain className=&quot;w-5 h-5&quot; />,
      color: 'from-purple-500 to-indigo-600',
      children: [        { 
          name: 'AI Consciousness Platform', _href: '/services/ai-consciousness-platform', _description: 'Advanced AI consciousness simulation', _price: '$5, _999/month', _icon: ''},
        {_name: 'Quantum Machine Learning', _href: '/services/quantum-machine-learning', _description: 'Quantum-powered ML platform', _price: '$12, _999/month', _icon: ''},
        {_name: 'Autonomous AI Agents', _href: '/services/autonomous-ai-agents', _description: 'Self-operating AI systems', _price: '$4, _999/month', _icon: ''},
        {_name: 'AI Content Factory', _href: '/services/ai-content-factory', _description: 'Automated content creation', _price: '$299/month', _icon: ''},
        {_name: 'View All AI Services', _href: '/services?category=AI%20%26%20Machine%20Learning', _description: 'Explore 200+ AI solutions', _icon: ''}
      ]
    },
    {
      name: 'Quantum Technology',
      href: '/services?category=Quantum%20Computing',
      description: '50+ Quantum Solutions',
      icon: <Atom className=&quot;w-5 h-5&quot; />,
      color: 'from-blue-500 to-cyan-600',
      children: [        { 
          name: 'Quantum Neural Interface', _href: '/services/quantum-neural-interface', _description: 'Quantum + Neural Networks', _price: '$8, _999/month', _icon: ''},
        {_name: 'Quantum Financial Trading', _href: '/services/quantum-financial-trading', _description: 'Quantum-powered trading', _price: '$9, _999/month', _icon: ''},
        {_name: 'Quantum Internet Protocol', _href: '/services/quantum-internet-protocol', _description: 'Quantum communication network', _price: '$7, _999/month', _icon: ''},
        {_name: 'Quantum Sensors Network', _href: '/services/quantum-sensors-network', _description: 'Ultra-precise quantum sensors', _price: '$9, _999/month', _icon: ''},
        {_name: 'View All Quantum Services', _href: '/services?category=Quantum%20Computing', _description: 'Explore quantum solutions', _icon: ''}
      ]
    },
    {
      name: 'Emerging Tech',
      href: '/services?category=Emerging%20Technology',
      description: '100+ Future Solutions',
      icon: <Rocket className=&quot;w-5 h-5&quot; />,
      color: 'from-green-500 to-emerald-600',
      children: [        { 
          name: 'Holographic Metaverse', _href: '/services/holographic-metaverse-platform', _description: '3D immersive experiences', _price: '$3, _999/month', _icon: ''},
        {_name: 'Neuromorphic Computing', _href: '/services/neuromorphic-computing', _description: 'Brain-inspired computing', _price: '$8, _999/month', _icon: ''},
        {_name: 'Synthetic Biology', _href: '/services/synthetic-biology-platform', _description: 'AI-powered bioengineering', _price: '$15, _999/month', _icon: ''},
        {_name: 'Brain-Computer Interface', _href: '/services/brain-computer-interface', _description: 'Direct brain communication', _price: '$19, _999/month', _icon: ''},
        {_name: 'View All Emerging Tech', _href: '/services?category=Emerging%20Technology', _description: 'Explore future solutions', _icon: ''}
      ]
    },
    {
      name: 'Business Solutions',
      href: '/services?category=Business%20Operations',
      description: '150+ Business Tools',
      icon: <Target className=&quot;w-5 h-5&quot; />,
      color: 'from-orange-500 to-red-600',
      children: [        { 
          name: 'Smart Inventory Manager', _href: '/services/smart-inventory-manager', _description: 'AI-powered inventory optimization', _price: '$199/month', _icon: ''},
        {_name: 'Customer Success Automation', _href: '/services/customer-success-automation', _description: 'Automated customer retention', _price: '$399/month', _icon: ''},
        {_name: 'AI Sales Coach', _href: '/services/ai-sales-coach', _description: 'Intelligent sales training', _price: '$249/month', _icon: ''},
        {_name: 'Smart HR Assistant', _href: '/services/smart-hr-assistant', _description: 'AI-powered HR automation', _price: '$349/month', _icon: ''},
        {_name: 'View All Business Solutions', _href: '/services?category=Business%20Operations', _description: 'Explore business tools', _icon: ''}
      ]
    },
    {
      name: 'Cybersecurity',
      href: '/services?category=Cybersecurity',
      description: '75+ Security Solutions',
      icon: <Shield className=&quot;w-5 h-5&quot; />,
      color: 'from-red-500 to-pink-600',
      children: [        { 
          name: 'Cyber-Physical Security', _href: '/services/cyber-physical-security', _description: 'Digital + Physical protection', _price: '$6, _999/month', _icon: ''},
        {_name: 'Quantum Internet Security', _href: '/services/quantum-internet-security', _description: 'Unhackable quantum security', _price: '$7, _999/month', _icon: ''},
        {_name: 'Zero Trust Architecture', _href: '/services/zero-trust-network-architecture', _description: 'Continuous verification', _price: '$4, _999/month', _icon: ''},
        {_name: 'AI Threat Detection', _href: '/services/ai-threat-detection', _description: 'Intelligent security monitoring', _price: '$3, _999/month', _icon: ''},
        {_name: 'View All Security Solutions', _href: '/services?category=Cybersecurity', _description: 'Explore security tools', _icon: ''}
      ]
    },
    {
      name: 'Enterprise IT',
      href: '/services?category=Enterprise%20IT',
      description: '100+ Enterprise Solutions',
      icon: <Building className=&quot;w-5 h-5&quot; />,
      color: 'from-indigo-500 to-purple-600',
      children: [        { 
          name: 'Cloud Platform', _href: '/cloud-platform', _description: 'Scalable cloud infrastructure', _price: 'Custom', _icon: ''},
        {_name: 'Edge Computing Orchestration', _href: '/services/edge-computing-orchestration', _description: 'Distributed edge management', _price: '$3, _499/month', _icon: ''},
        {_name: 'AI Operations Center', _href: '/services/enterprise-ai-operations-center', _description: 'Centralized AI management', _price: '$8, _999/month', _icon: ''},
        {_name: 'Infrastructure Drift Detection', _href: '/services/infrastructure-drift-detector', _description: 'Automated infrastructure monitoring', _price: '$2, _999/month', _icon: ''},
        {_name: 'View All Enterprise Solutions', _href: '/services?category=Enterprise%20IT', _description: 'Explore enterprise tools', _icon: ''}
      ]
    }
  ],

  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  },

  const quickLinks = [
    { name: 'Pricing', href: '/pricing', icon: <CreditCard className="w-4 h-4" /> },
    { name: 'Case Studies', href: '/case-studies', icon: <FileText className="w-4 h-4" /> },
    { name: 'Support', href: '/support', icon: <MessageSquare className="w-4 h-4" /> },
    { name: 'Contact', href: '/contact', icon: <Mail className="w-4 h-4" /> }
  ],  ];

  return (_<header className={_`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-gray-900/95 backdrop-blur-xl border-b border-cyan-500/30 shadow-2xl shadow-cyan-500/20' 
        : 'bg-transparent'
    }`}>
      {/* Animated Background */}
      <div className=&quot;absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 animate-pulse&quot; />

      <div className=&quot;relative container mx-auto px-4&quot;>
        <div className=&quot;flex items-center justify-between h-20&quot;>
          {/* Logo */}
          <Link href=&quot;/&quot; className=&quot;flex items-center space-x-3 group relative z-10&quot;>
            <motion.div 
              className=&quot;w-12 h-12 bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg shadow-cyan-500/30&quot;
              whileHover={ rotate: 5, scale: 1.1 }
              whileTap={ scale: 0.95 }            >
              <Zap className=&quot;w-7 h-7 text-white&quot; />
            </motion.div>
            <div className=&quot;hidden sm:block&quot;>
              <div className=&quot;text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:via-purple-300 group-hover:to-pink-300 transition-all duration-300&quot;>
                Zion Tech Group
              </div>
              <div className=&quot;text-xs text-gray-400 group-hover:text-cyan-300 transition-colors&quot;>
                Revolutionary Technology Solutions
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className=&quot;hidden xl:flex items-center space-x-1&quot;>
            {navigation.map(item) => (
              <div key={item.name} className=&quot;relative group&quot;>
                <motion.button
                  className=&quot;flex items-center space-x-2 px-4 py-3 text-gray-300 hover:text-white transition-all duration-300 rounded-xl hover:bg-gray-800/50 hover:shadow-lg hover:shadow-cyan-500/20&quot;
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                  whileHover={ y: -2 }
                  whileTap={ scale: 0.95 }                >
                  <div className={_`p-2 rounded-lg bg-gradient-to-br ${item.color} shadow-lg`}>
                    {_item.icon}
                  </div>
                  <span className=&quot;font-medium&quot;>{item.name}</span>
                  <ChevronDown className=&quot;w-4 h-4 group-hover:rotate-180 transition-transform duration-300&quot; />                </motion.button>

                {_/* Dropdown Menu */}
                <AnimatePresence>
                  {activeDropdown = = item.name && (
                    <motion.div
                      initial={ opacity: 0, y: 10, scale: 0.95 }
                      animate={ opacity: 1, y: 0, scale: 1 }
                      exit={ opacity: 0, y: 10, scale: 0.95 }
                      transition={ duration: 0.2 }
                      className=&quot;absolute top-full left-0 mt-2 w-96 bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl shadow-cyan-500/20 overflow-hidden&quot;
                    >
                      <div className=&quot;p-4&quot;>
                        <div className=&quot;flex items-center space-x-3 mb-4&quot;>
                          <div className={`p-3 rounded-xl bg-gradient-to-br ${item.color} shadow-lg`}>
                            {item.icon}
                          </div>
                          <div>
                            <h3 className=&quot;text-lg font-semibold text-white&quot;>{item.name}</h3>
                            <p className=&quot;text-sm text-gray-400&quot;>{item.description}</p>
                          </div>
                        </div>

                        <div className=&quot;space-y-2&quot;>
                          {item.children.map(child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className=&quot;flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-800/50 transition-all duration-200 group&quot;
                            >
                              <span className=&quot;text-2xl&quot;>{child.icon}</span>
                              <div className=&quot;flex-1&quot;>
                                <div className=&quot;font-medium text-white group-hover:text-cyan-300 transition-colors&quot;>
                                  {child.name}
                                </div>
                                <div className=&quot;text-sm text-gray-400&quot;>{child.description}</div>
                              </div>
                              <div className=&quot;text-right&quot;>
                                <div className=&quot;text-sm font-medium text-cyan-400&quot;>{child.price}</div>
                                <ChevronRight className=&quot;w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors&quot; />                              </div>
                            </a>
                          )}
                        </div>;
                      </div>;
                    </motion.div>;
                  )}
                </AnimatePresence>;
              </div>;
            )}
          </nav>;

          {/* Right Side */}
          <div className=&quot;flex items-center space-x-4&quot;>
            {/* Contact Info */}
            <div className=&quot;hidden lg:flex items-center space-x-4 text-sm&quot;>
              <a 
                href={`tel:${contactInfo.mobile}`}
                className=&quot;flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors&quot;
              >
                <Phone className=&quot;w-4 h-4&quot; />
                <span>{contactInfo.mobile}</span>
              </a>
              <a 
                href={`mailto:${contactInfo.email}`}
                className=&quot;flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors&quot;
              >
                <Mail className=&quot;w-4 h-4&quot; />
                <span>{contactInfo.email}</span>              </a>
            </div>

            {_/* CTA Button */}
            <motion.div
              whileHover={_{ scale: 1.05}
              whileTap={_{ scale: 0.95}
            >
              <Link
                href=&quot;/contact&quot;
                className=&quot;hidden lg:inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-xl shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-300&quot;
              >
                <Rocket className=&quot;w-4 h-4&quot; />
                <span>Get Started</span>
              </a>
            </motion.div>

            {_/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className=&quot;xl:hidden p-2 text-gray-300 hover:text-white transition-colors&quot;
            >
              {isMenuOpen ? <X className=&quot;w-6 h-6&quot; /> : <Menu className=&quot;w-6 h-6&quot; />}            </button>
          </div>
        </div>
      </div>

      {_/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={ opacity: 0, height: 0 }
            animate={ opacity: 1, height: 'auto' }
            exit={ opacity: 0, height: 0 }
            transition={ duration: 0.3 }
            className=&quot;xl:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-700/50&quot;
          >
            <div className=&quot;container mx-auto px-4 py-6&quot;>
              <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-6&quot;>
                {/* Services */}
                <div>
                  <h3 className=&quot;text-lg font-semibold text-white mb-4&quot;>Services</h3>
                  <div className=&quot;space-y-3&quot;>
                    {navigation.map(item) => (
                      <div key={item.name}>
                        <Link
                          href={item.href}
                          className=&quot;flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-800/50 transition-all duration-200&quot;                        >
                          <div className={_`p-2 rounded-lg bg-gradient-to-br ${item.color}`}>
                            {_item.icon}
                          </div>
                          <div>
                            <div className=&quot;font-medium text-white&quot;>{item.name}</div>
                            <div className=&quot;text-sm text-gray-400&quot;>{item.description}</div>                          </div>
                        </a>
                      </div>
                    )}
                  </div>;
                </div>;

                {/* Quick Links & Contact */}
                <div className=&quot;space-y-6&quot;>
                  <div>
                    <h3 className=&quot;text-lg font-semibold text-white mb-4&quot;>Quick Links</h3>
                    <div className=&quot;space-y-2&quot;>
                      {quickLinks.map(link) => (
                        <Link
                          key={link.name}
                          href={link.href}
                          className=&quot;flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-800/50 transition-all duration-200&quot;
                        >
                          {link.icon}
                          <span className=&quot;text-white&quot;>{link.name}</span>
                        </a>                      )}
                    </div>
                  </div>

                  <div>
                    <h3 className=&quot;text-lg font-semibold text-white mb-4&quot;>Contact Info</h3>
                    <div className=&quot;space-y-3&quot;>
                      <a 
                        href={`tel:${contactInfo.mobile}`}
                        className=&quot;flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-800/50 transition-all duration-200&quot;
                      >
                        <Phone className=&quot;w-4 h-4 text-cyan-400&quot; />
                        <span className=&quot;text-white&quot;>{contactInfo.mobile}</span>
                      </a>
                      <a 
                        href={`mailto:${contactInfo.email}`}
                        className=&quot;flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-800/50 transition-all duration-200&quot;
                      >
                        <Mail className=&quot;w-4 h-4 text-cyan-400&quot; />
                        <span className=&quot;text-white&quot;>{contactInfo.email}</span>
                      </a>
                      <div className=&quot;flex items-center space-x-3 p-3 rounded-xl&quot;>
                        <MapPin className=&quot;w-4 h-4 text-cyan-400&quot; />
                        <span className=&quot;text-white text-sm&quot;>{contactInfo.address}</span>                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile CTA */}
              <div className=&quot;mt-6 pt-6 border-t border-gray-700/50&quot;>                <Link
                  href=&quot;/contact&quot;
                  className=&quot;inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-xl shadow-lg shadow-cyan-500/30 transition-all duration-300&quot;
                >
                  <Rocket className=&quot;w-4 h-4 mr-2&quot; />
                  Get Started Today
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
,

export default UltraFuturisticNavigation2027,  `fixed top-0 left-0 right-0 z-50 transition-all duration-500 $ {
  isScrolled ? 'bg-gray-900/95 backdrop-blur-xl border-b border-cyan-500/30 shadow-2xl shadow-cyan-500/20' > <Zap className="w-7 h-7 text-white" /> </motion.div> <div className="hidden sm:block" > <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:via-purple-300 group-hover:to-pink-300 transition-all duration-300" > Zion Tech Group </div> <div className="text-xs text-gray-400 group-hover:text-cyan-300 transition-colors" > Revolutionary Technology Solutions </div> </div> </a><div className= {
  `p-2 rounded-lg bg-gradient-to-br $ {
  item.color 
shadow-lg` 
> {
  item.icon 
</div> </motion.button> {
  /* Dropdown Menu */ 
<AnimatePresence></div> </a>) 
</div> </div> </motion.div>) 
</AnimatePresence> </div>) 
</nav> </a> </div> {
  /* CTA Button */ 
<motion.div whileHover= {
  scale: 1.05 

whileTap= {
  scale: 0.95 

> <Link href="/contact" className="hidden lg:inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-xl shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-300" > <Rocket className="w-4 h-4" /> <span>Get Started</span> </a> </motion.div> {
  /* Mobile Menu Button */ 
<button </button> </div> </div> </div> {
  /* Mobile Menu */ 
<AnimatePresence><div className= {
  `p-2 rounded-lg bg-gradient-to-br $ {
  item.color 
` 
> {
  item.icon 
</div> <div></div> </a> </div>) 
</div> </div>) 
</div> </div> <div> <h3 className="text-lg font-semibold text-white mb-4" >Contact Info</h3> <div className="space-y-3" > <a </div> </div> </div> </div> </div> <Link href="/contact" className="inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-xl shadow-lg shadow-cyan-500/30 transition-all duration-300" > <Rocket className="w-4 h-4 mr-2" /> Get Started Today </a> </div> </div> </motion.div>) 
</AnimatePresence> </header>) 
;
export default UltraFuturisticNavigation2027;
