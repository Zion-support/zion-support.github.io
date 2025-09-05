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

const serviceCategories = [
  {
    title: '🧠 2029 AI Consciousness & Innovation',
    icon: Brain,
    color: 'from-purple-600 to-pink-600',
    description: 'Beyond human consciousness simulation',
    services: [
      { name: 'AI Consciousness Simulation Platform', href: '/ai-consciousness-simulation-platform', description: 'Simulate human consciousness in AI systems', price: '$12,999/month' },
      { name: 'Autonomous AI Corporation Platform', href: '/autonomous-ai-corporation-platform', description: 'AI systems that run entire corporations', price: '$45,999/month' },
      { name: 'AI Reality Augmentation Platform', href: '/ai-reality-augmentation-platform', description: 'Real-time AI reality enhancement', price: '$18,999/month' }
    ]
  },
  {
    title: '⚛️ 2029 Quantum & Neuroscience',
    icon: Atom,
    color: 'from-indigo-600 to-purple-600',
    description: 'Quantum brain-computer interfaces',
    services: [
      { name: 'Quantum Brain-Computer Interface', href: '/quantum-brain-computer-interface', description: 'Direct quantum communication with brain', price: '$25,999/month' },
      { name: 'Quantum Time Manipulation Platform', href: '/quantum-time-manipulation-platform', description: 'Manipulate time perception', price: '$35,999/month' }
    ]
  },
  {
    title: '🚀 2029 Space Colonization & Mining',
    icon: Rocket,
    color: 'from-red-600 to-orange-600',
    description: 'Interplanetary expansion and resource extraction',
    services: [
      { name: 'Mars Colonization Automation Platform', href: '/mars-colonization-automation-platform', description: 'Automate Mars colonization process', price: '$99,999/month' },
      { name: 'Interplanetary Communication Network', href: '/interplanetary-communication-network', description: 'Real-time solar system communication', price: '$75,999/month' },
      { name: 'Space Mining Automation Platform', href: '/space-mining-automation-platform', description: 'Automate asteroid and lunar mining', price: '$65,999/month' }
    ]
  },
  {
    title: '🏠 2029 Space Architecture & Energy',
    icon: Building,
    color: 'from-green-600 to-teal-600',
    description: 'Habitat design and space energy harvesting',
    services: [
      { name: 'Space Habitat Design Platform', href: '/space-habitat-design-platform', description: 'Design space habitats for any planet', price: '$45,999/month' },
      { name: 'Space Energy Harvesting Platform', href: '/space-energy-harvesting-platform', description: 'Harvest energy from space sources', price: '$55,999/month' }
    ]
  },
  {
    title: '🤖 Advanced AI & Machine Learning',
    icon: Brain,
    color: 'from-emerald-600 to-teal-600',
    description: 'Next-generation AI solutions',
    services: [
      { name: 'AI Emotional Intelligence Platform', href: '/ai-emotional-intelligence-platform', description: 'AI that understands human emotions', price: '$2,999/month' },
      { name: 'AI Multimodal Fusion Platform', href: '/ai-multimodal-fusion-platform', description: 'Unified text, image, audio, video AI', price: '$4,999/month' },
      { name: 'AI Customer Service Automation', href: '/ai-customer-service-automation', description: 'Intelligent customer support', price: '$899/month' },
      { name: 'AI Education Platform', href: '/ai-education-platform', description: 'Personalized learning with AI', price: '$1,499/month' },
      { name: 'AI Content Creation Suite', href: '/ai-content-creation-suite', description: 'Unlimited AI content creation', price: '$1,299/month' }
    ]
  },
  {
    title: '⛓️ Blockchain & Web3 Solutions',
    icon: Layers,
    color: 'from-orange-600 to-red-600',
    description: 'Decentralized and blockchain solutions',
    services: [
      { name: 'Quantum Blockchain Platform', href: '/quantum-blockchain-platform', description: 'Quantum-resistant blockchain security', price: '$6,999/month' },
      { name: 'Blockchain Supply Chain Transparency', href: '/blockchain-supply-chain-transparency', description: 'End-to-end supply chain visibility', price: '$2,499/month' },
      { name: 'Smart Contract Automation Platform', href: '/smart-contract-automation', description: 'Automated blockchain contracts', price: '$1,999/month' },
      { name: 'DeFi Yield Optimization', href: '/defi-yield-optimization', description: 'Maximize DeFi returns', price: '$3,999/month' }
    ]
  },
  {
    title: '🏥 Healthcare & Biotech Innovation',
    icon: Heart,
    color: 'from-pink-600 to-rose-600',
    description: 'Advanced healthcare solutions',
    services: [
      { name: 'AI Personalized Medicine Platform', href: '/ai-personalized-medicine-platform', description: 'AI-powered personalized treatment', price: '$8,999/month' },
      { name: 'AI Healthcare Diagnosis Platform', href: '/ai-healthcare-diagnosis-platform', description: 'Revolutionary medical diagnosis', price: '$3,999/month' },
      { name: 'Biotech Research Automation', href: '/biotech-research-automation', description: 'Automated biotechnology research', price: '$4,999/month' }
    ]
  },
  {
    title: '🏙️ Smart City & Infrastructure',
    icon: Building,
    color: 'from-slate-600 to-gray-600',
    description: 'Intelligent urban management',
    services: [
      { name: 'AI Smart City Orchestrator', href: '/ai-smart-city-orchestrator', description: 'Comprehensive city infrastructure AI', price: '$12,999/month' },
      { name: 'Smart Traffic Management', href: '/smart-traffic-management', description: 'AI-powered traffic optimization', price: '$3,999/month' },
      { name: 'Energy Grid Optimization', href: '/energy-grid-optimization', description: 'Smart energy management', price: '$5,999/month' }
    ]
  },
  {
    title: '🔬 Research & Development',
    icon: Microscope,
    color: 'from-blue-600 to-indigo-600',
    description: 'Advanced research tools and platforms',
    services: [
      { name: 'AI Research Assistant', href: '/ai-research-assistant', description: 'AI-powered research acceleration', price: '$1,999/month' },
      { name: 'Data Analysis Platform', href: '/data-analysis-platform', description: 'Advanced data analytics', price: '$2,499/month' },
      { name: 'Research Collaboration Hub', href: '/research-collaboration-hub', description: 'Global research collaboration', price: '$1,799/month' }
    ]
  },
  {
    title: '💼 Enterprise & Business Solutions',
    icon: Briefcase,
    color: 'from-emerald-600 to-blue-600',
    description: 'Corporate and business automation',
    services: [
      { name: 'Enterprise AI Operations Center', href: '/enterprise-ai-operations-center', description: 'Centralized AI operations', price: '$15,999/month' },
      { name: 'Business Process Automation', href: '/business-process-automation', description: 'End-to-end process automation', price: '$4,999/month' },
      { name: 'Corporate Intelligence Platform', href: '/corporate-intelligence-platform', description: 'AI-powered business intelligence', price: '$7,999/month' }
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
              {contactInfo.website.replace('https://', '')}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
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
              className=&quot;flex items-center space-x-3&quot;
            >
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
                    <span>{item.name}</span>
                  </div>
                  <div className=&quot;absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full&quot;></div>
                </a>
              ))}

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
                              </a>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className=&quot;px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40&quot;
              >
                Get Started
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className=&quot;lg:hidden&quot;>
              <button
                onClick={toggleMenu}
                className=&quot;text-gray-300 hover:text-white transition-colors&quot;
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
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
                      <Rocket className=&quot;w-5 h-5 text-white&quot; />
                    </div>
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
                </div>

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
                                <span className=&quot;text-xs text-cyan-400 font-mono&quot;>{service.price}</span>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mobile CTA */}
                <div className=&quot;mt-8&quot;>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className=&quot;w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300&quot;
                  >
                    Get Started
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer for fixed navigation */}
      <div className=&quot;h-20&quot; />
    </>
  )
}