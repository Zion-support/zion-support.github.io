import React, {_useState, _useEffect} from 'react';
import {_Menu, _X, _ChevronDown, _Search, _Phone, _Mail, _MapPin, _Brain, _Rocket, _Dna, _Globe, _Shield, _Wifi, _Package, _Bot, _Car, _Building2, _DollarSign, _Monitor, _Users, _Cpu, _Zap, _Atom, _Database, _Cloud, _Lock, _Code} from 'lucide-react';
import Link from 'next/link';

const UltraAdvancedNavigation: React.FC = () => {_const [isOpen, _setIsOpen] = useState(false);
  const [isScrolled, _setIsScrolled] = useState(false);
  const [activeDropdown, _setActiveDropdown] = useState<string | null>(null);

  useEffect__(() => {
    const _handleScroll = () => {
      setIsScrolled(window.scrollY > 50);};

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const _navigationItems = [
    {_name: 'Home', _href: '/', _icon: null},
    {_name: 'AI Services', _href: '#', _icon: Brain, _description: 'Cutting-edge AI solutions', _dropdown: [
        {
          name: 'AI Agent Orchestrator', _href: '/ai-agents', _icon: Bot, _description: 'Multi-agent workflow automation', _price: '$2, _999/month'},
        {_name: 'AI Cybersecurity', _href: '/security', _icon: Shield, _description: 'AI-powered threat detection', _price: '$4, _999/month'},
        {_name: 'AI Healthcare Analytics', _href: '/ai-data-analytics', _icon: Dna, _description: 'Patient outcome prediction', _price: '$3, _999/month'},
        {_name: 'AI Supply Chain', _href: '/quantum-logistics', _icon: Package, _description: 'End-to-end optimization', _price: '$2, _499/month'},
        {_name: 'AI Financial Risk', _href: '/ai-financial-risk', _icon: DollarSign, _description: 'Advanced risk management', _price: '$5, _999/month'}
      ]
    },
    {_name: 'Quantum Computing', _href: '#', _icon: Atom, _description: 'Quantum-powered solutions', _dropdown: [
        {
          name: 'Quantum AI Supercomputer', _href: '/quantum-ai-cognitive', _icon: Cpu, _description: 'Enterprise quantum computing', _price: '$15, _999/month'},
        {_name: 'Quantum Internet Security', _href: '/quantum-internet-security-platform', _icon: Lock, _description: 'Future-proof encryption', _price: '$8, _999/month'},
        {_name: 'Quantum Drug Discovery', _href: '/biotech-ai', _icon: Dna, _description: 'Accelerated drug development', _price: '$12, _999/month'},
        {_name: 'Quantum Financial Trading', _href: '/quantum-financial-trading', _icon: DollarSign, _description: 'Nanosecond precision trading', _price: '$19, _999/month'},
        {_name: 'Quantum IoT Platform', _href: '/quantum-iot', _icon: Wifi, _description: 'Quantum-secured IoT', _price: '$4, _999/month'}
      ]
    },
    {_name: 'Space Technology', _href: '#', _icon: Rocket, _description: 'Space mission management', _dropdown: [
        {
          name: 'Space Mission Control', _href: '/space-technology', _icon: Rocket, _description: 'Complete mission management', _price: '$25, _999/month'},
        {_name: 'Space Debris Cleanup', _href: '/space-technology', _icon: Package, _description: 'AI-powered debris removal', _price: '$35, _999/month'}
      ]
    },
    {_name: 'Enterprise IT', _href: '#', _icon: Building2, _description: 'Enterprise solutions', _dropdown: [
        {
          name: 'Cloud Migration', _href: '/cloud-platform', _icon: Cloud, _description: 'Zero-downtime migration', _price: '$8, _999/month'},
        {_name: 'DevOps Automation', _href: '/automation', _icon: Code, _description: 'AI-powered automation', _price: '$5, _999/month'},
        {_name: 'Data Analytics', _href: '/ai-data-analytics', _icon: Database, _description: 'AI-powered insights', _price: '$6, _999/month'},
        {_name: 'Security Operations', _href: '/security', _icon: Shield, _description: '24/7 security monitoring', _price: '$12, _999/month'},
        {_name: 'API Management', _href: '/api-observability', _icon: Code, _description: 'Complete lifecycle management', _price: '$4, _999/month'},
        {_name: 'Digital Transformation', _href: '/solutions', _icon: Zap, _description: 'AI-powered transformation', _price: '$15, _999/month'},
        {_name: 'IoT Management', _href: '/it-asset-discovery-agent', _icon: Wifi, _description: 'AI-powered device management', _price: '$7, _999/month'}
      ]
    },
    {_name: 'Micro SaaS', _href: '/services', _icon: Monitor, _description: '300+ micro SaaS services'},
    {_name: 'Market Pricing', _href: '/market-pricing', _icon: DollarSign, _description: 'Benchmarks & vendor references'},
    {_name: 'About', _href: '/about', _icon: null},
    {_name: 'Contact', _href: '/contact', _icon: null}
  ];

  const _contactInfo = {_mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709'};

  return (_<nav className={_`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-xl border-b border-gray-800/50' 
        : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {_/* Logo */}
          <motion.div
            initial={_{ opacity: 0, _x: -20}}
            animate={_{ opacity: 1, _x: 0}}
            transition={_{ duration: 0.5}}
            className="flex items-center"
          >
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="hidden sm:block">
                <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Zion Tech Group
                </div>
                <div className="text-xs text-gray-400">Revolutionary Technology</div>
              </div>
            </Link>
          </motion.div>

          {_/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {_navigationItems.map((item, _index) => (_<div key={item.name} className="relative group">
                {_item.dropdown ? (
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300 py-2"
                  >
                    {_item.icon && <item.icon className="w-4 h-4" />}
                    <span>{_item.name}</span>
                    <ChevronDown className={_`w-4 h-4 transition-transform duration-300 ${
                      activeDropdown === item.name ? 'rotate-180' : ''}`} />
                  </button>
                ) : (
                  <Link
                    href={_item.href}
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300 py-2"
                  >
                    {_item.icon && <item.icon className="w-4 h-4" />}
                    <span>{_item.name}</span>
                  </Link>
                )}

                {_/* Dropdown Menu */}
                {_item.dropdown && (_<AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, _y: 10, _scale: 0.95}}
                        animate={_{ opacity: 1, _y: 0, _scale: 1}}
                        exit={_{ opacity: 0, _y: 10, _scale: 0.95}}
                        transition={_{ duration: 0.2}}
                        className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl shadow-black/50 overflow-hidden"
                      >
                        <div className="p-4">
                          <div className="text-sm text-gray-400 mb-3">{_item.description}</div>
                          <div className="space-y-2">
                            {_item.dropdown.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                href={_dropdownItem.href}
                                className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-800/50 transition-colors duration-200 group"
                              >
                                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                                  <dropdownItem.icon className="w-5 h-5 text-cyan-400" />
                                </div>
                                <div className="flex-1">
                                  <div className="text-white font-medium group-hover:text-cyan-400 transition-colors duration-200">
                                    {_dropdownItem.name}
                                  </div>
                                  <div className="text-sm text-gray-400">{_dropdownItem.description}</div>
                                </div>
                                <div className="text-sm font-semibold text-cyan-400">
                                  {_dropdownItem.price}
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {_/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-4 text-sm text-gray-300">
              <a href={_`tel:${contactInfo.mobile}`} className="flex items-center space-x-2 hover:text-cyan-400 transition-colors duration-200">
                <Phone className="w-4 h-4" />
                <span className="hidden xl:inline">{_contactInfo.mobile}</span>
              </a>
              <a href={_`mailto:${contactInfo.email}`} className="flex items-center space-x-2 hover:text-cyan-400 transition-colors duration-200">
                <Mail className="w-4 h-4" />
                <span className="hidden xl:inline">{_contactInfo.email}</span>
              </a>
            </div>
            
            <motion.a
              href="/contact"
              whileHover={_{ scale: 1.05}}
              whileTap={_{ scale: 0.95}}
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-2xl font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
            >
              Get Started
            </motion.a>
          </div>

          {_/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={_() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white transition-colors duration-200"
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
            className="lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-800/50 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {_navigationItems.map((item) => (_<div key={item.name}>
                  {_item.dropdown ? (
                    <div>
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                        className="flex items-center justify-between w-full text-left text-gray-300 hover:text-white transition-colors duration-200 py-3"
                      >
                        <div className="flex items-center space-x-3">
                          {_item.icon && <item.icon className="w-5 h-5" />}
                          <span>{_item.name}</span>
                        </div>
                        <ChevronDown className={_`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {_activeDropdown === item.name && (_<div className="ml-8 mt-2 space-y-2">
                          {item.dropdown.map((dropdownItem) => (_<Link
                              key={dropdownItem.name}
                              href={_dropdownItem.href}
                              onClick={_() => setIsOpen(false)}
                              className="block py-2 text-gray-400 hover:text-white transition-colors duration-200"
                            >
                              {_dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (_<Link
                      href={_item.href}
                      onClick={_() => setIsOpen(false)}
                      className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200 py-3"
                    >
                      {_item.icon && <item.icon className="w-5 h-5" />}
                      <span>{_item.name}</span>
                    </Link>
                  )}
                </div>
              ))}
              
              {_/* Mobile Contact Info */}
              <div className="pt-6 border-t border-gray-800/50">
                <div className="space-y-3 text-sm text-gray-400">
                  <a href={_`tel:${contactInfo.mobile}`} className="flex items-center space-x-3 hover:text-cyan-400 transition-colors duration-200">
                    <Phone className="w-4 h-4" />
                    <span>{_contactInfo.mobile}</span>
                  </a>
                  <a href={_`mailto:${contactInfo.email}`} className="flex items-center space-x-3 hover:text-cyan-400 transition-colors duration-200">
                    <Mail className="w-4 h-4" />
                    <span>{_contactInfo.email}</span>
                  </a>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-4 h-4 mt-0.5" />
                    <span>{_contactInfo.address}</span>
                  </div>
                </div>
                
                <motion.a
                  href="/contact"
                  whileHover={_{ scale: 1.05}}
                  whileTap={_{ scale: 0.95}}
                  className="block w-full mt-6 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-center py-3 rounded-2xl font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
                >
                  Get Started
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default UltraAdvancedNavigation;