import React, { useState, useEffect } from 'react',
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion',
import { 
  Menu, X, ChevronDown, Search, Phone, Mail, MapPin,
  Rocket, Brain, Atom, Globe, Zap, Sparkles, Shield,
  Microscope, DollarSign, Home, Users, Briefcase,
  BookOpen, MessageCircle 
} from 'lucide-react',

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
},

const _contactInfo = {_mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709', _website: 'https://ziontechgroup.com'};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

const _serviceCategories = [
  {_title: 'AI & Machine Learning 2026', _icon: Brain, _color: 'from-purple-600 to-pink-600', _description: 'Next-generation AI solutions', _services: [
      { name: 'AI Consciousness Simulation', _href: '/ai-consciousness-simulation-platform', _description: 'Simulate human consciousness', _price: '$4, _999/month'},
      {_name: 'Autonomous AI Agents', _href: '/autonomous-ai-agents-platform-2026', _description: 'Create autonomous AI agents', _price: '$199/month'},
      {_name: 'AI Healthcare Companion', _href: '/ai-healthcare-companion-2026', _description: 'Revolutionary healthcare AI', _price: '$399/month'},
      {_name: 'AI Content Creation Revolution', _href: '/ai-content-creation-revolution', _description: 'Unlimited AI content generation', _price: '$599/month'}
    ]
  },
  {_title: 'Quantum Computing & Security', _icon: Atom, _color: 'from-blue-600 to-cyan-600', _description: 'Quantum-powered solutions', _services: [
      { name: 'Quantum Neural Interface', _href: '/quantum-neural-interface-platform', _description: 'Brain-computer interface', _price: '$8, _999/month'},
      {_name: 'Quantum Internet Security', _href: '/quantum-internet-security-gateway', _description: 'Unbreakable encryption', _price: '$3, _999/month'},
      {_name: 'Quantum Financial Trading', _href: '/quantum-financial-trading-algorithm-platform', _description: 'Quantum trading algorithms', _price: '$12, _999/month'},
      {_name: 'Quantum Internet Infrastructure', _href: '/quantum-internet-infrastructure-platform', _description: 'Build the quantum internet', _price: '$15, _999/month'}
    ]
  },
  {_title: 'Emerging Technologies 2026', _icon: Sparkles, _color: 'from-green-600 to-emerald-600', _description: 'Cutting-edge innovations', _services: [
      { name: 'Holographic Metaverse', _href: '/holographic-metaverse-development-platform', _description: '3D holographic experiences', _price: '$2, _999/month'},
      {_name: 'Space Debris Management', _href: '/space-debris-management-ai-platform', _description: 'AI space safety', _price: '$5, _999/month'},
      {_name: 'AI Climate Prediction', _href: '/ai-climate-prediction-platform', _description: 'Climate change prediction', _price: '$1, _999/month'},
      {_name: 'Autonomous Manufacturing', _href: '/autonomous-manufacturing-ai-platform', _description: 'Self-optimizing manufacturing', _price: '$3, _499/month'}
    ]
  },
  {_title: 'Enterprise IT Solutions 2026', _icon: Shield, _color: 'from-red-600 to-orange-600', _description: 'Enterprise-grade solutions', _services: [
      { name: 'Zero Trust Architecture', _href: '/zero-trust-network-architecture-2026', _description: 'Next-gen security', _price: 'Custom pricing'},
      {_name: 'Edge Computing Orchestration', _href: '/edge-computing-orchestration-2026', _description: 'Intelligent edge computing', _price: 'Custom pricing'},
      {_name: '5G Private Networks', _href: '/5g-private-network-solutions-2026', _description: 'Enterprise 5G', _price: 'Custom pricing'},
      {_name: 'Blockchain Infrastructure', _href: '/blockchain-infrastructure-platform-2026', _description: 'Enterprise blockchain', _price: 'Custom pricing'}
    ]
  },
  {_title: 'Healthcare & Life Sciences', _icon: Microscope, _color: 'from-teal-600 to-cyan-600', _description: 'Healthcare innovation', _services: [
      { name: 'AI Drug Discovery', _href: '/ai-drug-discovery-platform', _description: 'Accelerate drug development', _price: '$4, _999/month'},
      {_name: 'Autonomous Healthcare AI', _href: '/autonomous-healthcare-ai-platform', _description: 'Self-learning healthcare', _price: '$2, _499/month'},
      {_name: 'Quantum Machine Learning', _href: '/quantum-machine-learning-platform', _description: 'Quantum AI research', _price: '$6, _999/month'},
      {_name: 'AI Legal Research', _href: '/ai-legal-research-platform', _description: 'Revolutionary legal tech', _price: '$899/month'}
    ]
  },
  {_title: 'Financial Technology', _icon: DollarSign, _color: 'from-emerald-600 to-green-600', _description: 'Fintech solutions', _services: [
      { name: 'Autonomous Supply Chain', _href: '/autonomous-supply-chain-optimization-ai', _description: 'AI supply chain optimization', _price: '$899/month'},
      {_name: 'Autonomous Marketing AI', _href: '/autonomous-marketing-ai-platform', _description: 'Self-optimizing marketing', _price: '$1, _499/month'},
      {_name: 'AI Cybersecurity', _href: '/ai-cybersecurity-platform', _description: 'Next-gen security', _price: '$2, _999/month'},
      {_name: 'AI Business Intelligence', _href: '/autonomous-business-intelligence-network', _description: 'Self-evolving BI', _price: '$1, _299/month'}
    ]
  }
],

const companyLinks = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'About Us', href: '/about', icon: Users },
  { name: '2026 Services', href: '/2026-services-showcase', icon: Rocket },
  { name: 'Innovative 2026', href: '/2026-innovative-services-showcase', icon: Zap },
  { name: 'Ultimate 2026', href: '/ultimate-2026-services-showcase', icon: Sparkles },
  { name: '2026 Pricing', href: '/revolutionary-2026-pricing', icon: DollarSign },
  { name: 'Case Studies', href: '/case-studies', icon: Briefcase },
  { name: 'Blog & Resources', href: '/blog', icon: BookOpen },
  { name: 'Careers', href: '/careers', icon: Users },
  { name: 'Contact', href: '/contact', icon: MessageCircle }
],

const UltraAdvancedNavigation2026 = () => {
  const [isOpen, setIsOpen] = useState(false),
  const [isScrolled, setIsScrolled] = useState(false),
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null),

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    },
    window.addEventListener('scroll', handleScroll),
    return () => window.removeEventListener('scroll', handleScroll)
  }, []),

  const _navigationItems = [
    {_name: 'AI Services', _href: '/services?category=ai', _icon: Brain, _color: 'from-blue-500 to-cyan-500', _description: 'Autonomous AI systems and consciousness interfaces', _subItems: [
        { name: 'AI Autonomous Agents', _href: '/services?category=ai-autonomous', _description: 'Fully autonomous AI systems'},
        {_name: 'AI Consciousness', _href: '/services?category=ai-consciousness', _description: 'Consciousness simulation and interfaces'},
        {_name: 'AI Healthcare', _href: '/services?category=ai-healthcare', _description: 'Medical AI and diagnostics'},
        {_name: 'AI Education', _href: '/services?category=ai-education', _description: 'Educational AI systems'},
        {_name: 'AI Legal', _href: '/services?category=ai-legal', _description: 'Legal AI and compliance'},
        {_name: 'AI Creative', _href: '/services?category=ai-creative', _description: 'Creative AI and content generation'}
      ]
    },
    {_name: 'Quantum Tech', _href: '/services?category=quantum', _icon: Atom, _color: 'from-purple-500 to-indigo-500', _description: 'Quantum computing and space technology', _subItems: [
        { name: 'Quantum Space Tech', _href: '/services?category=quantum-space', _description: 'Space exploration and communication'},
        {_name: 'Quantum Computing', _href: '/services?category=quantum-computing', _description: 'Advanced quantum systems'},
        {_name: 'Quantum AI', _href: '/services?category=quantum-ai', _description: 'Quantum-powered AI'},
        {_name: 'Quantum Security', _href: '/services?category=quantum-security', _description: 'Quantum encryption and security'}
      ]
    },
    {_name: 'Metaverse', _href: '/services?category=metaverse', _icon: Globe, _color: 'from-pink-500 to-rose-500', _description: 'Virtual worlds and digital reality', _subItems: [
        { name: 'Metaverse Platforms', _href: '/services?category=metaverse-platforms', _description: 'Virtual world platforms'},
        {_name: 'Digital Reality', _href: '/services?category=digital-reality', _description: 'Immersive experiences'},
        {_name: 'Holographic Tech', _href: '/services?category=holographic', _description: '3D holographic systems'},
        {_name: 'Consciousness Interface', _href: '/services?category=consciousness-interface', _description: 'Brain-computer interfaces'}
      ]
    },
    {_name: 'Enterprise IT', _href: '/services?category=enterprise', _icon: Zap, _color: 'from-green-500 to-emerald-500', _description: 'Enterprise solutions and infrastructure', _subItems: [
        { name: 'Cloud Solutions', _href: '/services?category=cloud', _description: 'Cloud infrastructure and services'},
        {_name: 'Cybersecurity', _href: '/services?category=security', _description: 'Advanced security solutions'},
        {_name: 'Data Analytics', _href: '/services?category=analytics', _description: 'Business intelligence and analytics'},
        {_name: 'DevOps', _href: '/services?category=devops', _description: 'Development and operations'}
      ]
    }
  ],

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  },

  return (_<>
      {_/* Enhanced Navigation Bar */}
      <nav className={_`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-xl border-b border-purple-500/20 shadow-2xl' 
          : 'bg-transparent'
      }`}>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;flex items-center justify-between h-20&quot;>
            {/* Logo */}
            <Link href=&quot;/&quot; className=&quot;flex items-center space-x-3 group&quot;>
              <div className=&quot;relative&quot;>
                <div className=&quot;w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300&quot;>
                  <Rocket className=&quot;w-6 h-6 text-white&quot; />
                </div>
                <div className=&quot;absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300&quot;></div>
              </div>
              <div className=&quot;hidden sm:block&quot;>
                <div className=&quot;text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent&quot;>
                  Zion Tech Group
                </div>
                <div className=&quot;text-xs text-gray-400&quot;>Revolutionary Technology Solutions</div>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className=&quot;hidden lg:flex items-center space-x-8&quot;>
              {navigationItems.map((item) => (
                <div key={item.name} className=&quot;relative group&quot;>
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                    className=&quot;flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 py-2&quot;
                  >
                    <item.icon className=&quot;w-5 h-5&quot; />
                    <span className=&quot;font-medium&quot;>{item.name}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  </button>

                  {_/* Dropdown Menu */}
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className=&quot;absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-xl border border-purple-500/20 rounded-2xl shadow-2xl overflow-hidden&quot;
                      >
                        <div className=&quot;p-4&quot;>
                          <div className=&quot;flex items-center space-x-3 mb-4&quot;>
                            <div className={`w-10 h-10 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center`}>
                              <item.icon className=&quot;w-5 h-5 text-white&quot; />
                            </div>
                            <div>
                              <h3 className=&quot;text-white font-semibold&quot;>{item.name}</h3>
                              <p className=&quot;text-gray-400 text-sm&quot;>{item.description}</p>
                            </div>
                          </div>
                          
                          <div className=&quot;space-y-2&quot;>
                            {item.subItems.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className=&quot;block p-3 rounded-xl hover:bg-purple-500/10 transition-colors duration-200 group&quot;
                                onClick={() => setActiveDropdown(null)}
                              >
                                <div className=&quot;text-white font-medium group-hover:text-purple-300 transition-colors duration-200&quot;>
                                  {subItem.name}
                                </div>
                                <div className=&quot;text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-200&quot;>
                                  {subItem.description}
                                </div>
                              </a>
                            ))}
                          </div>
                          
                          <Link
                            href={item.href}
                            className=&quot;block w-full mt-4 p-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center font-medium rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-200&quot;
                            onClick={() => setActiveDropdown(null)}
                          >
                            View All {item.name}
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {/* Quick Links */}
              <div className=&quot;flex items-center space-x-6&quot;>
                <Link href=&quot;/services&quot; className=&quot;text-gray-300 hover:text-white transition-colors duration-200 font-medium&quot;>
                  All Services
                </a>
                <Link href=&quot;/pricing&quot; className=&quot;text-gray-300 hover:text-white transition-colors duration-200 font-medium&quot;>
                  Pricing
                </a>
                <Link href=&quot;/contact&quot; className=&quot;text-gray-300 hover:text-white transition-colors duration-200 font-medium&quot;>
                  Contact
                </a>
              </div>
            </div>

            {/* Contact Info - Desktop */}
            <div className=&quot;hidden lg:flex items-center space-x-4&quot;>
              <div className=&quot;flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200&quot;>
                <Phone className=&quot;w-4 h-4&quot; />
                <span className=&quot;text-sm font-medium&quot;>{contactInfo.phone}</span>
              </div>
              <Link
                href=&quot;/contact&quot;
                className=&quot;px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-200 transform hover:scale-105&quot;
              >
                Get Started
              </a>
            </div>

            {_/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className=&quot;lg:hidden p-2 text-gray-300 hover:text-white transition-colors duration-200&quot;
            >
              {isOpen ? <X className=&quot;w-6 h-6&quot; /> : <Menu className=&quot;w-6 h-6&quot; />}
            </button>
          </div>
        </div>
      </nav>

      {_/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className=&quot;fixed inset-0 bg-black/80 backdrop-blur-sm z-40 lg:hidden&quot;
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className=&quot;absolute right-0 top-0 h-full w-80 bg-black/95 backdrop-blur-xl border-l border-purple-500/20 p-6 overflow-y-auto&quot;
              onClick={(e) => e.stopPropagation()}
            >
              {/* Mobile Menu Header */}
              <div className=&quot;flex items-center justify-between mb-8&quot;>
                <div className=&quot;flex items-center space-x-3&quot;>
                  <div className=&quot;w-10 h-10 bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 rounded-xl flex items-center justify-center&quot;>
                    <Rocket className=&quot;w-5 h-5 text-white&quot; />
                  </div>
                  <span className=&quot;text-white font-bold text-lg&quot;>Menu</span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className=&quot;p-2 text-gray-300 hover:text-white transition-colors duration-200&quot;
                >
                  <X className=&quot;w-6 h-6&quot; />
                </button>
              </div>

              {/* Mobile Navigation Items */}
              <div className=&quot;space-y-4&quot;>
                {navigationItems.map((item) => (
                  <div key={item.name} className=&quot;border-b border-gray-700/50 pb-4&quot;>
                    <Link
                      href={item.href}
                      className=&quot;flex items-center space-x-3 text-white hover:text-purple-300 transition-colors duration-200 py-2&quot;
                      onClick={() => setIsOpen(false)}
                    >
                      <div className={`w-8 h-8 bg-gradient-to-br ${item.color} rounded-lg flex items-center justify-center`}>
                        <item.icon className=&quot;w-4 h-4 text-white&quot; />
                      </div>
                      <span className=&quot;font-medium&quot;>{item.name}</span>
                    </a>
                    
                    {/* Mobile Sub-items */}
                    <div className=&quot;mt-3 ml-11 space-y-2&quot;>
                      {item.subItems.slice(0, 3).map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className=&quot;block text-gray-400 hover:text-white transition-colors duration-200 text-sm py-1&quot;
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  </div>
                ))}

                {/* Quick Links */}
                <div className=&quot;space-y-3 pt-4&quot;>
                  <Link
                    href=&quot;/services&quot;
                    className=&quot;block text-gray-300 hover:text-white transition-colors duration-200 font-medium&quot;
                    onClick={() => setIsOpen(false)}
                  >
                    All Services
                  </a>
                  <Link
                    href=&quot;/pricing&quot;
                    className=&quot;block text-gray-300 hover:text-white transition-colors duration-200 font-medium&quot;
                    onClick={() => setIsOpen(false)}
                  >
                    Pricing
                  </a>
                  <Link
                    href=&quot;/contact&quot;
                    className=&quot;block text-gray-300 hover:text-white transition-colors duration-200 font-medium&quot;
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </a>
                </div>

                {/* Contact Info - Mobile */}
                <div className=&quot;pt-6 border-t border-gray-700/50 space-y-3&quot;>
                  <div className=&quot;flex items-center space-x-3 text-gray-300&quot;>
                    <Phone className=&quot;w-4 h-4&quot; />
                    <span className=&quot;text-sm&quot;>{contactInfo.phone}</span>
                  </div>
                  <div className=&quot;flex items-center space-x-3 text-gray-300&quot;>
                    <Mail className=&quot;w-4 h-4&quot; />
                    <span className=&quot;text-sm&quot;>{contactInfo.email}</span>
                  </div>
                  <div className=&quot;flex items-center space-x-3 text-gray-300&quot;>
                    <MapPin className=&quot;w-4 h-4&quot; />
                    <span className=&quot;text-sm&quot;>{contactInfo.address}</span>
                  </div>
                </div>

                {/* Get Started Button - Mobile */}
                <div className=&quot;pt-4&quot;>
                  <Link
                    href=&quot;/contact&quot;
                    className=&quot;block w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-center font-medium rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-200&quot;
                    onClick={() => setIsOpen(false)}
                  >
                    Get Started Today
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer for fixed navigation */}
      <div className=&quot;h-20&quot;></div>
    </>
  )
}

export default UltraAdvancedNavigation2026