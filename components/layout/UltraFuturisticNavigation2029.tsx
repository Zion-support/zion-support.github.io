import React, { useState, useEffect } from 'react',
import Link from 'next/link',
import { motion, AnimatePresence } from 'framer-motion',
import { 
  Menu, X, ChevronDown, Phone, Mail, MapPin,
  Rocket, Brain, Atom, Globe, Zap, Sparkles, Shield,
  Microscope, DollarSign, Home, Briefcase,
  BookOpen, MessageCircle, Star, TrendingUp, Target,
  Layers, Cpu, Database, Cloud, Lock, ShieldCheck,
  Earth, Factory, Car, Building, GraduationCap, Scale,
  Palette, Camera, Video, Music, Gamepad2, Heart,
  Leaf, Sun, Moon, Wind, Droplets, Mountain,
  Code, Wrench, Smartphone, BarChart3, Eye, Timer
} from 'lucide-react',

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
},
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
],

const mainNavItems = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Services', href: '/services', icon: Briefcase },
  { name: 'Solutions', href: '/solutions', icon: Target },
  { name: 'Pricing', href: '/pricing', icon: DollarSign },
  { name: 'Resources', href: '/resources', icon: BookOpen },
  { name: 'News', href: '/news', icon: TrendingUp },
  { name: 'Support', href: '/support', icon: MessageCircle },
  { name: 'Contact', href: '/contact', icon: Phone }
],

export default function UltraFuturisticNavigation2029() {
  const [isOpen, setIsOpen] = useState(false),
  const [activeCategory, setActiveCategory] = useState<string | null>(null),
  const [scrolled, setScrolled] = useState(false),

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    },
    window.addEventListener('scroll', handleScroll),
    return () => window.removeEventListener('scroll', handleScroll)
  }, []),

  const toggleMenu = () => setIsOpen(!isOpen),
  const closeMenu = () => setIsOpen(false),

  return (
    <>
      {/* Top Contact Bar */}
      <div className=&quot;bg-gradient-to-r from-cyan-900 via-blue-900 to-purple-900 text-white text-sm py-2 px-4&quot;>
        <div className=&quot;max-w-7xl mx-auto flex flex-wrap items-center justify-between&quot;>
          <div className=&quot;flex items-center space-x-6&quot;>
            <a href={`tel:${contactInfo.mobile}`} className=&quot;flex items-center space-x-2 hover:text-cyan-300 transition-colors&quot;>
              <Phone size={14} />
              <span>{contactInfo.mobile}</span>
            </a>
            <a href={`mailto:${contactInfo.email}`} className=&quot;flex items-center space-x-2 hover:text-cyan-300 transition-colors&quot;>
              <Mail size={14} />
              <span>{contactInfo.email}</span>
            </a>
            <div className=&quot;flex items-center space-x-2&quot;>
              <MapPin size={14} />
              <span>{contactInfo.address}</span>
            </div>
          </div>
          <div className=&quot;flex items-center space-x-4&quot;>
            <a href={contactInfo.website} className=&quot;hover:text-cyan-300 transition-colors&quot;>
              {contactInfo.website.replace('https://', '')}            </a>
          </div>
        </div>
      </div>

      {_/* Main Navigation */}
      <nav className={_`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/90 backdrop-blur-xl border-b border-cyan-500/30 shadow-2xl shadow-cyan-500/20' 
          : 'bg-transparent'
      }`}>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;flex items-center justify-between h-20&quot;>
            {/* Logo */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className=&quot;flex items-center space-x-3&quot;            >
              <div className=&quot;relative&quot;>
                <div className=&quot;w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center&quot;>
                  <Rocket className=&quot;w-6 h-6 text-white&quot; />
                </div>
                <div className=&quot;absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg blur opacity-75 animate-pulse&quot;></div>
              </div>
              <div className=&quot;flex flex-col&quot;>
                <span className=&quot;text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent&quot;>
                  Zion Tech Group
                </span>
                <span className=&quot;text-xs text-gray-400&quot;>2029 Innovation Hub</span>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className=&quot;hidden lg:flex items-center space-x-8&quot;>
              {mainNavItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className=&quot;group relative text-gray-300 hover:text-white transition-colors duration-200&quot;
                >
                  <div className=&quot;flex items-center space-x-2&quot;>
                    <item.icon size={16} className=&quot;group-hover:text-cyan-400 transition-colors&quot; />
                    <span>{item.name}</span>                  </div>
                  <div className=&quot;absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full&quot;></div>
                </a>
              ))}
;
              {/* Services Dropdown */}
              <div className=&quot;relative group&quot;>
                <button className=&quot;flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200&quot;>
                  <Briefcase size={16} className=&quot;group-hover:text-cyan-400 transition-colors&quot; />
                  <span>All Services</span>
                  <ChevronDown size={14} className=&quot;group-hover:rotate-180 transition-transform duration-200&quot; />
                </button>
                
                {/* Mega Menu */}
                <div className=&quot;absolute top-full left-0 w-screen max-w-6xl bg-black/95 backdrop-blur-xl border border-cyan-500/30 rounded-lg shadow-2xl shadow-cyan-500/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0&quot;>
                  <div className=&quot;p-6 grid grid-cols-2 lg:grid-cols-3 gap-6&quot;>
                    {serviceCategories.map((category, index) => (
                      <motion.div
                        key={category.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className=&quot;group&quot;
                      >
                        <div className={`p-4 rounded-lg bg-gradient-to-br ${category.color} bg-opacity-10 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300`}>
                          <div className=&quot;flex items-center space-x-3 mb-3&quot;>
                            <category.icon size={20} className=&quot;text-cyan-400&quot; />
                            <h3 className=&quot;font-semibold text-white group-hover:text-cyan-300 transition-colors&quot;>
                              {category.title}
                            </h3>
                          </div>
                          <p className=&quot;text-sm text-gray-400 mb-4&quot;>{category.description}</p>
                          <div className=&quot;space-y-2&quot;>
                            {category.services.slice(0, 3).map((service) => (
                              <Link
                                key={service.name}
                                href={service.href}
                                className=&quot;block p-2 rounded bg-black/30 hover:bg-cyan-500/20 transition-all duration-200 group&quot;
                              >
                                <div className=&quot;flex items-center justify-between&quot;>
                                  <span className=&quot;text-sm text-gray-300 group-hover:text-white transition-colors&quot;>
                                    {service.name}
                                  </span>
                                  <span className=&quot;text-xs text-cyan-400 font-mono&quot;>
                                    {service.price}
                                  </span>
                                </div>
                                <p className=&quot;text-xs text-gray-500 mt-1&quot;>{service.description}</p>
                              </a>                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {_/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className=&quot;px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40&quot;              >
                Get Started
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className=&quot;lg:hidden&quot;>
              <button
                onClick={toggleMenu}
                className=&quot;text-gray-300 hover:text-white transition-colors&quot;              >
                {_isOpen ? <X size={24} /> : <Menu size={_24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {_/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className=&quot;fixed inset-0 z-50 lg:hidden&quot;
          >
            <div className=&quot;absolute inset-0 bg-black/80 backdrop-blur-sm&quot; onClick={closeMenu} />
            <div className=&quot;absolute right-0 top-0 h-full w-80 bg-black/95 backdrop-blur-xl border-l border-cyan-500/30 overflow-y-auto&quot;>
              <div className=&quot;p-6&quot;>
                <div className=&quot;flex items-center justify-between mb-8&quot;>
                  <div className=&quot;flex items-center space-x-3&quot;>
                    <div className=&quot;w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center&quot;>
                      <Rocket className=&quot;w-5 h-5 text-white&quot; />                    </div>
                    <span className=&quot;text-lg font-bold text-white&quot;>Zion Tech</span>
                  </div>
                  <button onClick={closeMenu} className=&quot;text-gray-400 hover:text-white&quot;>
                    <X size={24} />
                  </button>
                </div>

                {/* Mobile Navigation Items */}
                <div className=&quot;space-y-4&quot;>
                  {mainNavItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={closeMenu}
                      className=&quot;flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:text-white hover:bg-cyan-500/20 transition-all duration-200&quot;
                    >
                      <item.icon size={20} className=&quot;text-cyan-400&quot; />
                      <span>{item.name}</span>
                    </a>
                  ))}
                </div>;
;
                {/* Mobile Services */}
                <div className=&quot;mt-8&quot;>
                  <h3 className=&quot;text-lg font-semibold text-white mb-4&quot;>Our Services</h3>
                  <div className=&quot;space-y-3&quot;>
                    {serviceCategories.slice(0, 6).map((category) => (
                      <div key={category.title} className=&quot;p-3 rounded-lg bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20&quot;>
                        <h4 className=&quot;font-medium text-white mb-2&quot;>{category.title}</h4>
                        <p className=&quot;text-sm text-gray-400 mb-3&quot;>{category.description}</p>
                        <div className=&quot;space-y-2&quot;>
                          {category.services.slice(0, 2).map((service) => (
                            <Link
                              key={service.name}
                              href={service.href}
                              onClick={closeMenu}
                              className=&quot;block p-2 rounded bg-black/30 hover:bg-cyan-500/20 transition-all duration-200&quot;
                            >
                              <div className=&quot;flex items-center justify-between&quot;>
                                <span className=&quot;text-sm text-gray-300&quot;>{service.name}</span>
                                <span className=&quot;text-xs text-cyan-400 font-mono&quot;>{service.price}</span>                              </div>
                            </a>
                          ))}
                        </div>;
                      </div>;
                    ))}
                  </div>;
                </div>;
;
                {/* Mobile CTA */}
                <div className=&quot;mt-8&quot;>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className=&quot;w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300&quot;                  >
                    Get Started
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>;
;
      {/* Spacer for fixed navigation */}
      <div className=&quot;h-20&quot; />    </>
  )
}