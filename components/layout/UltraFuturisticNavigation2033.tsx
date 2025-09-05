import React, {_useState, _useEffect} from 'react';
import Link from 'next/link';
import {_Phone, _Mail, _MapPin, _Globe, _Rocket, _Brain, _Atom, _Cpu, _Target, _Microscope, _Shield, _Zap, _Sparkles, _Menu, _X, _Search, _ChevronDown, _Home, _Briefcase, _DollarSign, _BookOpen, _Users, _MessageCircle} from 'lucide-react';

const _contactInfo = {_mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709', _website: 'https://ziontechgroup.com'};

const _serviceCategories = [
  {_title: '🧠 Revolutionary AI', _icon: Brain, _color: 'from-violet-500 to-purple-600', _services: [
      { name: 'AI Consciousness Evolution', _href: '/ai-consciousness-evolution-platform', _description: 'Advanced AI consciousness', _price: '$2, _999/month'},
      {_name: 'AI Emotional Intelligence', _href: '/ai-emotional-intelligence-platform', _description: 'Emotional AI platform', _price: '$1, _999/month'},
      {_name: 'AI Creativity Orchestrator', _href: '/ai-creativity-orchestrator', _description: 'Creative AI solutions', _price: '$1, _499/month'},
      {_name: 'AI Autonomous Business Manager', _href: '/ai-autonomous-business-manager', _description: 'Autonomous business AI', _price: '$3, _999/month'}
    ]
  },
  {_title: '⚛️ Quantum & Emerging Tech', _icon: Atom, _color: 'from-indigo-500 to-blue-600', _services: [
      { name: 'Quantum Internet Security', _href: '/quantum-internet-security-gateway', _description: 'Quantum security', _price: '$4, _999/month'},
      {_name: 'Biotech DNA Computing', _href: '/biotech-dna-computing-platform', _description: 'DNA computing platform', _price: '$3, _999/month'},
      {_name: 'Quantum Financial Trading', _href: '/quantum-financial-trading-platform', _description: 'Quantum trading', _price: '$5, _999/month'},
      {_name: 'DNA Computing Platform', _href: '/dna-computing-platform', _description: 'Molecular computing', _price: '$1, _299/month'},
      {_name: 'Photonic Computing Infrastructure', _href: '/photonic-computing-infrastructure', _description: 'Light-speed computing', _price: '$699/month'},
      {_name: 'Swarm Robotics Platform', _href: '/swarm-robotics-platform', _description: 'Collective robot intelligence', _price: '$1, _199/month'}
    ]
  },
  {_title: '🏙️ Enterprise IT Solutions', _icon: Cpu, _color: 'from-blue-500 to-cyan-600', _services: [
      { name: 'Autonomous DevOps Platform', _href: '/autonomous-devops-platform', _description: 'Self-managing DevOps', _price: '$2, _499/month'},
      {_name: 'Zero Trust Network Architecture', _href: '/zero-trust-network-architecture', _description: 'Zero trust security', _price: '$1, _999/month'},
      {_name: 'Edge Computing Orchestration', _href: '/edge-computing-orchestration', _description: 'Edge computing platform', _price: '$1, _799/month'},
      {_name: 'AI IT Operations Center', _href: '/ai-it-operations-center', _description: 'AI-powered IT ops', _price: '$2, _999/month'}
    ]
  },
  {_title: '🌌 Space & Metaverse Tech', _icon: Rocket, _color: 'from-teal-500 to-emerald-600', _services: [
      { name: 'Space Mining Automation', _href: '/space-mining-automation-platform', _description: 'Space mining platform', _price: '$9, _999/month'},
      {_name: 'Metaverse Development', _href: '/metaverse-development-platform', _description: 'Metaverse platform', _price: '$3, _999/month'},
      {_name: 'Virtual Event Holograms', _href: '/virtual-event-hologram-platform', _description: 'Holographic events', _price: '$2, _499/month'}
    ]
  }
];

const _quickLinks = [
  {_name: 'Services Overview', _href: '/enhanced-services-overview', _icon: Globe, _color: 'from-cyan-500 to-blue-600'},
  {_name: 'AI Services', _href: '/ai-services', _icon: Brain, _color: 'from-violet-500 to-purple-600'},
  {_name: 'Quantum Tech', _href: '/quantum-services', _icon: Atom, _color: 'from-indigo-500 to-blue-600'},
  {_name: 'Space Tech', _href: '/space-technology', _icon: Rocket, _color: 'from-teal-500 to-emerald-600'},
  {_name: 'Enterprise IT', _href: '/enterprise-it', _icon: Cpu, _color: 'from-blue-500 to-cyan-600'},
  {_name: 'Micro SAAS', _href: '/enhanced-micro-saas-showcase', _icon: Target, _color: 'from-green-500 to-yellow-600'}
];

export default function UltraFuturisticNavigation2033() {_const [isOpen, _setIsOpen] = useState(false);
  const [activeCategory, _setActiveCategory] = useState<string | null>(null);
  const [searchQuery, _setSearchQuery] = useState('');

  const _toggleMenu = () => setIsOpen(!isOpen);
  const _closeMenu = () => setIsOpen(false);

  // Close menu on escape key
  useEffect__(() => {
    const _handleEscape = (_e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu();};
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  return (_<>
      {_/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-black via-purple-900/30 to-black border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-xs text-purple-300">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Phone className="w-3 h-3 text-purple-400" />
                <span>{_contactInfo.mobile}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3 h-3 text-purple-400" />
                <span>{_contactInfo.email}</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <MapPin className="w-3 h-3 text-purple-400" />
                <span>{_contactInfo.address}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-3 h-3 text-purple-400" />
                <span>{_contactInfo.website}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {_/* Main Navigation */}
      <nav className="bg-gradient-to-r from-black via-gray-900/95 to-black border-b border-purple-500/20 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {_/* Logo */}
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={_{ scale: 1.05}}
              transition={_{ type: "spring", _stiffness: 400, _damping: 10}}
            >
              <Link href="/" className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 via-cyan-500 to-blue-500 rounded-xl flex items-center justify-center shadow-2xl">
                    <Rocket className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-br from-purple-500 via-cyan-500 to-blue-500 rounded-xl blur opacity-75 animate-pulse"></div>
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    Zion Tech Group
                  </span>
                  <span className="text-xs text-purple-300 font-medium">
                    Future Technology Solutions
                  </span>
                </div>
              </Link>
            </motion.div>

            {_/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {_/* Services Mega Menu */}
              <div className="relative group">
                <button
                  onMouseEnter={_() => setActiveCategory('services')}
                  onMouseLeave={_() => setActiveCategory(null)}
                  className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-gray-800/50"
                >
                  <span>Services</span>
                  <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                </button>

                {_/* Mega Menu */}
                <AnimatePresence>
                  {_activeCategory === 'services' && (_<motion.div
                      initial={{ opacity: 0, _y: 10, _scale: 0.95}}
                      animate={_{ opacity: 1, _y: 0, _scale: 1}}
                      exit={_{ opacity: 0, _y: 10, _scale: 0.95}}
                      transition={_{ duration: 0.2}}
                      onMouseEnter={_() => setActiveCategory('services')}
                      onMouseLeave={_() => setActiveCategory(null)}
                      className="absolute top-full left-0 w-screen max-w-6xl bg-gray-900/95 backdrop-blur-xl border border-purple-500/20 rounded-2xl shadow-2xl p-8 -ml-4"
                    >
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {_serviceCategories.map(_(category) => (_<div key={category.title} className="space-y-4">
                            <div className="flex items-center space-x-3">
                              <div className={_`w-10 h-10 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                                <category.icon className="w-5 h-5 text-white" />
                              </div>
                              <h3 className="text-lg font-semibold text-white">{_category.title}</h3>
                            </div>
                            <div className="space-y-3">
                              {_category.services.map((service) => (
                                <Link
                                  key={service.name}
                                  href={_service.href}
                                  className="block group"
                                >
                                  <div className="p-3 rounded-lg hover:bg-gray-800/50 transition-all duration-200">
                                    <div className="flex items-center justify-between mb-2">
                                      <h4 className="font-medium text-white group-hover:text-cyan-400 transition-colors">
                                        {_service.name}
                                      </h4>
                                      <span className="text-sm text-purple-400 font-medium">
                                        {_service.price}
                                      </span>
                                    </div>
                                    <p className="text-sm text-gray-400">{_service.description}</p>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {_/* Quick Links */}
              {_quickLinks.map(_(link) => (
                <Link
                  key={link.name}
                  href={_link.href}
                  className="text-gray-300 hover:text-white transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-gray-800/50"
                >
                  {_link.name}
                </Link>
              ))}

              {_/* Contact Button */}
              <motion.div
                whileHover={_{ scale: 1.05}}
                whileTap={_{ scale: 0.95}}
              >
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-medium rounded-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-200 shadow-lg"
                >
                  Get Started
                </Link>
              </motion.div>
            </div>

            {_/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={_toggleMenu}
                className="text-gray-300 hover:text-white transition-colors duration-200 p-2"
              >
                {_isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {_/* Mobile Menu */}
        <AnimatePresence>
          {_isOpen && (_<motion.div
              initial={{ opacity: 0, _height: 0}}
              animate={_{ opacity: 1, _height: 'auto'}}
              exit={_{ opacity: 0, _height: 0}}
              transition={_{ duration: 0.3}}
              className="lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-purple-500/20"
            >
              <div className="px-4 py-6 space-y-6">
                {_/* Mobile Services */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white">Services</h3>
                  {_serviceCategories.map((category) => (_<div key={category.title} className="ml-4 space-y-2">
                      <h4 className="font-medium text-purple-300">{_category.title}</h4>
                      <div className="ml-4 space-y-1">
                        {_category.services.map((service) => (
                          <Link
                            key={service.name}
                            href={_service.href}
                            onClick={_closeMenu}
                            className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                          >
                            {_service.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {_/* Mobile Quick Links */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white">Quick Links</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {_quickLinks.map(_(link) => (
                      <Link
                        key={link.name}
                        href={_link.href}
                        onClick={_closeMenu}
                        className="text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                      >
                        {_link.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {_/* Mobile Contact Button */}
                <div className="pt-4">
                  <Link
                    href="/contact"
                    onClick={_closeMenu}
                    className="block w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-medium rounded-lg text-center hover:from-purple-700 hover:to-cyan-700 transition-all duration-200"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
