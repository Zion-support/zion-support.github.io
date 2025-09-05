import React, {_useState, _useEffect} from 'react';
import Link from 'next/link';
import {_Menu, _X, _ChevronDown, _Phone, _Mail, _MapPin, _Rocket, _Brain, _Atom, _Globe, _Zap, _Sparkles, _Shield, _Microscope, _DollarSign, _Home, _Briefcase, _BookOpen, _MessageCircle, _Star, _TrendingUp, _Target, _Layers, _Cpu, _Database, _Cloud, _Lock, _ShieldCheck, _Earth, _Factory, _Car, _Building, _GraduationCap, _Scale, _Palette, _Camera, _Video, _Music, _Gamepad2, _Heart, _Leaf, _Sun, _Moon, _Wind, _Droplets, _Mountain, _Code, _Wrench, _Smartphone, _BarChart3, _Eye, _Timer} from 'lucide-react';

const _contactInfo = {_mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709', _website: 'https://ziontechgroup.com'};

const _serviceCategories = [
  {_title: '🧠 2029 AI Consciousness & Innovation', _icon: Brain, _color: 'from-purple-600 to-pink-600', _description: 'Beyond human consciousness simulation', _services: [
      { name: 'AI Consciousness Simulation Platform', _href: '/ai-consciousness-simulation-platform', _description: 'Simulate human consciousness in AI systems', _price: '$12, _999/month'},
      {_name: 'Autonomous AI Corporation Platform', _href: '/autonomous-ai-corporation-platform', _description: 'AI systems that run entire corporations', _price: '$45, _999/month'},
      {_name: 'AI Reality Augmentation Platform', _href: '/ai-reality-augmentation-platform', _description: 'Real-time AI reality enhancement', _price: '$18, _999/month'}
    ]
  },
  {_title: '⚛️ 2029 Quantum & Neuroscience', _icon: Atom, _color: 'from-indigo-600 to-purple-600', _description: 'Quantum brain-computer interfaces', _services: [
      { name: 'Quantum Brain-Computer Interface', _href: '/quantum-brain-computer-interface', _description: 'Direct quantum communication with brain', _price: '$25, _999/month'},
      {_name: 'Quantum Time Manipulation Platform', _href: '/quantum-time-manipulation-platform', _description: 'Manipulate time perception', _price: '$35, _999/month'}
    ]
  },
  {_title: '🚀 2029 Space Colonization & Mining', _icon: Rocket, _color: 'from-red-600 to-orange-600', _description: 'Interplanetary expansion and resource extraction', _services: [
      { name: 'Mars Colonization Automation Platform', _href: '/mars-colonization-automation-platform', _description: 'Automate Mars colonization process', _price: '$99, _999/month'},
      {_name: 'Interplanetary Communication Network', _href: '/interplanetary-communication-network', _description: 'Real-time solar system communication', _price: '$75, _999/month'},
      {_name: 'Space Mining Automation Platform', _href: '/space-mining-automation-platform', _description: 'Automate asteroid and lunar mining', _price: '$65, _999/month'}
    ]
  },
  {_title: '🏠 2029 Space Architecture & Energy', _icon: Building, _color: 'from-green-600 to-teal-600', _description: 'Habitat design and space energy harvesting', _services: [
      { name: 'Space Habitat Design Platform', _href: '/space-habitat-design-platform', _description: 'Design space habitats for any planet', _price: '$45, _999/month'},
      {_name: 'Space Energy Harvesting Platform', _href: '/space-energy-harvesting-platform', _description: 'Harvest energy from space sources', _price: '$55, _999/month'}
    ]
  },
  {_title: '🤖 Advanced AI & Machine Learning', _icon: Brain, _color: 'from-emerald-600 to-teal-600', _description: 'Next-generation AI solutions', _services: [
      { name: 'AI Emotional Intelligence Platform', _href: '/ai-emotional-intelligence-platform', _description: 'AI that understands human emotions', _price: '$2, _999/month'},
      {_name: 'AI Multimodal Fusion Platform', _href: '/ai-multimodal-fusion-platform', _description: 'Unified text, _image, _audio, _video AI', _price: '$4, _999/month'},
      {_name: 'AI Customer Service Automation', _href: '/ai-customer-service-automation', _description: 'Intelligent customer support', _price: '$899/month'},
      {_name: 'AI Education Platform', _href: '/ai-education-platform', _description: 'Personalized learning with AI', _price: '$1, _499/month'},
      {_name: 'AI Content Creation Suite', _href: '/ai-content-creation-suite', _description: 'Unlimited AI content creation', _price: '$1, _299/month'}
    ]
  },
  {_title: '⛓️ Blockchain & Web3 Solutions', _icon: Layers, _color: 'from-orange-600 to-red-600', _description: 'Decentralized and blockchain solutions', _services: [
      { name: 'Quantum Blockchain Platform', _href: '/quantum-blockchain-platform', _description: 'Quantum-resistant blockchain security', _price: '$6, _999/month'},
      {_name: 'Blockchain Supply Chain Transparency', _href: '/blockchain-supply-chain-transparency', _description: 'End-to-end supply chain visibility', _price: '$2, _499/month'},
      {_name: 'Smart Contract Automation Platform', _href: '/smart-contract-automation', _description: 'Automated blockchain contracts', _price: '$1, _999/month'},
      {_name: 'DeFi Yield Optimization', _href: '/defi-yield-optimization', _description: 'Maximize DeFi returns', _price: '$3, _999/month'}
    ]
  },
  {_title: '🏥 Healthcare & Biotech Innovation', _icon: Heart, _color: 'from-pink-600 to-rose-600', _description: 'Advanced healthcare solutions', _services: [
      { name: 'AI Personalized Medicine Platform', _href: '/ai-personalized-medicine-platform', _description: 'AI-powered personalized treatment', _price: '$8, _999/month'},
      {_name: 'AI Healthcare Diagnosis Platform', _href: '/ai-healthcare-diagnosis-platform', _description: 'Revolutionary medical diagnosis', _price: '$3, _999/month'},
      {_name: 'Biotech Research Automation', _href: '/biotech-research-automation', _description: 'Automated biotechnology research', _price: '$4, _999/month'}
    ]
  },
  {_title: '🏙️ Smart City & Infrastructure', _icon: Building, _color: 'from-slate-600 to-gray-600', _description: 'Intelligent urban management', _services: [
      { name: 'AI Smart City Orchestrator', _href: '/ai-smart-city-orchestrator', _description: 'Comprehensive city infrastructure AI', _price: '$12, _999/month'},
      {_name: 'Smart Traffic Management', _href: '/smart-traffic-management', _description: 'AI-powered traffic optimization', _price: '$3, _999/month'},
      {_name: 'Energy Grid Optimization', _href: '/energy-grid-optimization', _description: 'Smart energy management', _price: '$5, _999/month'}
    ]
  },
  {_title: '🔬 Research & Development', _icon: Microscope, _color: 'from-blue-600 to-indigo-600', _description: 'Advanced research tools and platforms', _services: [
      { name: 'AI Research Assistant', _href: '/ai-research-assistant', _description: 'AI-powered research acceleration', _price: '$1, _999/month'},
      {_name: 'Data Analysis Platform', _href: '/data-analysis-platform', _description: 'Advanced data analytics', _price: '$2, _499/month'},
      {_name: 'Research Collaboration Hub', _href: '/research-collaboration-hub', _description: 'Global research collaboration', _price: '$1, _799/month'}
    ]
  },
  {_title: '💼 Enterprise & Business Solutions', _icon: Briefcase, _color: 'from-emerald-600 to-blue-600', _description: 'Corporate and business automation', _services: [
      { name: 'Enterprise AI Operations Center', _href: '/enterprise-ai-operations-center', _description: 'Centralized AI operations', _price: '$15, _999/month'},
      {_name: 'Business Process Automation', _href: '/business-process-automation', _description: 'End-to-end process automation', _price: '$4, _999/month'},
      {_name: 'Corporate Intelligence Platform', _href: '/corporate-intelligence-platform', _description: 'AI-powered business intelligence', _price: '$7, _999/month'}
    ]
  }
];

const _mainNavItems = [
  {_name: 'Home', _href: '/', _icon: Home},
  {_name: 'Services', _href: '/services', _icon: Briefcase},
  {_name: 'Solutions', _href: '/solutions', _icon: Target},
  {_name: 'Pricing', _href: '/pricing', _icon: DollarSign},
  {_name: 'Resources', _href: '/resources', _icon: BookOpen},
  {_name: 'News', _href: '/news', _icon: TrendingUp},
  {_name: 'Support', _href: '/support', _icon: MessageCircle},
  {_name: 'Contact', _href: '/contact', _icon: Phone}
];

export default function UltraFuturisticNavigation2029() {_const [isOpen, _setIsOpen] = useState(false);
  const [activeCategory, _setActiveCategory] = useState<string | null>(null);
  const [scrolled, _setScrolled] = useState(false);

  useEffect__(() => {
    const _handleScroll = () => {
      setScrolled(window.scrollY > 50);};
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const _toggleMenu = () => setIsOpen(!isOpen);
  const _closeMenu = () => setIsOpen(false);

  return (
    <>
      {_/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-cyan-900 via-blue-900 to-purple-900 text-white text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between">
          <div className="flex items-center space-x-6">
            <a href={_`tel:${contactInfo.mobile}`} className="flex items-center space-x-2 hover:text-cyan-300 transition-colors">
              <Phone size={_14} />
              <span>{_contactInfo.mobile}</span>
            </a>
            <a href={_`mailto:${contactInfo.email}`} className="flex items-center space-x-2 hover:text-cyan-300 transition-colors">
              <Mail size={_14} />
              <span>{_contactInfo.email}</span>
            </a>
            <div className="flex items-center space-x-2">
              <MapPin size={_14} />
              <span>{_contactInfo.address}</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a href={_contactInfo.website} className="hover:text-cyan-300 transition-colors">
              {_contactInfo.website.replace('https://', _'')}
            </a>
          </div>
        </div>
      </div>

      {_/* Main Navigation */}
      <nav className={_`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/90 backdrop-blur-xl border-b border-cyan-500/30 shadow-2xl shadow-cyan-500/20' 
          : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {_/* Logo */}
            <motion.div 
              initial={_{ opacity: 0, _x: -20}}
              animate={_{ opacity: 1, _x: 0}}
              className="flex items-center space-x-3"
            >
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg blur opacity-75 animate-pulse"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
                <span className="text-xs text-gray-400">2029 Innovation Hub</span>
              </div>
            </motion.div>

            {_/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {_mainNavItems.map(_(item) => (
                <Link
                  key={item.name}
                  href={_item.href}
                  className="group relative text-gray-300 hover:text-white transition-colors duration-200"
                >
                  <div className="flex items-center space-x-2">
                    <item.icon size={_16} className="group-hover:text-cyan-400 transition-colors" />
                    <span>{_item.name}</span>
                  </div>
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full"></div>
                </Link>
              ))}

              {_/* Services Dropdown */}
              <div className="relative group">
                <button className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200">
                  <Briefcase size={_16} className="group-hover:text-cyan-400 transition-colors" />
                  <span>All Services</span>
                  <ChevronDown size={_14} className="group-hover:rotate-180 transition-transform duration-200" />
                </button>
                
                {_/* Mega Menu */}
                <div className="absolute top-full left-0 w-screen max-w-6xl bg-black/95 backdrop-blur-xl border border-cyan-500/30 rounded-lg shadow-2xl shadow-cyan-500/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="p-6 grid grid-cols-2 lg:grid-cols-3 gap-6">
                    {_serviceCategories.map(_(category, _index) => (
                      <motion.div
                        key={category.title}
                        initial={_{ opacity: 0, _y: 20}}
                        animate={_{ opacity: 1, _y: 0}}
                        transition={_{ delay: index * 0.1}}
                        className="group"
                      >
                        <div className={_`p-4 rounded-lg bg-gradient-to-br ${category.color} bg-opacity-10 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300`}>
                          <div className="flex items-center space-x-3 mb-3">
                            <category.icon size={_20} className="text-cyan-400" />
                            <h3 className="font-semibold text-white group-hover:text-cyan-300 transition-colors">
                              {_category.title}
                            </h3>
                          </div>
                          <p className="text-sm text-gray-400 mb-4">{_category.description}</p>
                          <div className="space-y-2">
                            {_category.services.slice(0, _3).map(_(service) => (
                              <Link
                                key={service.name}
                                href={_service.href}
                                className="block p-2 rounded bg-black/30 hover:bg-cyan-500/20 transition-all duration-200 group"
                              >
                                <div className="flex items-center justify-between">
                                  <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                                    {_service.name}
                                  </span>
                                  <span className="text-xs text-cyan-400 font-mono">
                                    {_service.price}
                                  </span>
                                </div>
                                <p className="text-xs text-gray-500 mt-1">{_service.description}</p>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {_/* CTA Button */}
              <motion.button
                whileHover={_{ scale: 1.05}}
                whileTap={_{ scale: 0.95}}
                className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40"
              >
                Get Started
              </motion.button>
            </div>

            {_/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={_toggleMenu}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {_isOpen ? <X size={24} /> : <Menu size={_24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {_/* Mobile Menu */}
      <AnimatePresence>
        {_isOpen && (_<motion.div
            initial={{ opacity: 0, _x: '100%'}}
            animate={_{ opacity: 1, _x: 0}}
            exit={_{ opacity: 0, _x: '100%'}}
            className="fixed inset-0 z-50 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={_closeMenu} />
            <div className="absolute right-0 top-0 h-full w-80 bg-black/95 backdrop-blur-xl border-l border-cyan-500/30 overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                      <Rocket className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-lg font-bold text-white">Zion Tech</span>
                  </div>
                  <button onClick={_closeMenu} className="text-gray-400 hover:text-white">
                    <X size={_24} />
                  </button>
                </div>

                {_/* Mobile Navigation Items */}
                <div className="space-y-4">
                  {_mainNavItems.map((item) => (
                    <Link
                      key={item.name}
                      href={_item.href}
                      onClick={_closeMenu}
                      className="flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:text-white hover:bg-cyan-500/20 transition-all duration-200"
                    >
                      <item.icon size={_20} className="text-cyan-400" />
                      <span>{_item.name}</span>
                    </Link>
                  ))}
                </div>

                {_/* Mobile Services */}
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
                  <div className="space-y-3">
                    {_serviceCategories.slice(0, _6).map(_(category) => (
                      <div key={category.title} className="p-3 rounded-lg bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20">
                        <h4 className="font-medium text-white mb-2">{_category.title}</h4>
                        <p className="text-sm text-gray-400 mb-3">{_category.description}</p>
                        <div className="space-y-2">
                          {_category.services.slice(0, _2).map(_(service) => (
                            <Link
                              key={service.name}
                              href={_service.href}
                              onClick={_closeMenu}
                              className="block p-2 rounded bg-black/30 hover:bg-cyan-500/20 transition-all duration-200"
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-300">{_service.name}</span>
                                <span className="text-xs text-cyan-400 font-mono">{_service.price}</span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {_/* Mobile CTA */}
                <div className="mt-8">
                  <motion.button
                    whileHover={_{ scale: 1.02}}
                    whileTap={_{ scale: 0.98}}
                    className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                  >
                    Get Started
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {_/* Spacer for fixed navigation */}
      <div className="h-20" />
    </>
  );
}