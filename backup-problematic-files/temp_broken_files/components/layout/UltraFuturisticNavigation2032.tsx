import React, { useState, useEffect } from 'react',
import Link from 'next/link',
import { motion, AnimatePresence } from 'framer-motion',
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
  MenuIcon, CloseIcon, ChevronRightIcon
 from 'lucide-react',

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
,
const _serviceCategories = [
  {_title: ' AI & Consciousness 2030', _icon: BrainIcon, _color: 'from-violet-600 via-purple-600 to-indigo-600', _description: 'Next-generation AI consciousness and emotional intelligence', _services: [
      { name: 'AI Consciousness Evolution Platform', _href: '/ai-consciousness-evolution-platform', _description: 'Develop genuine AI consciousness', _price: '$19, _999/month'},
      {_name: 'AI Emotional Intelligence Platform', _href: '/ai-emotional-intelligence-platform', _description: 'Real-time emotion analysis and response', _price: '$3, _999/month'},
      {_name: 'AI Creativity Orchestrator', _href: '/ai-creativity-orchestrator', _description: 'Multi-model creativity fusion', _price: '$5, _999/month'},
      {_name: 'AI Autonomous Business Manager', _href: '/ai-autonomous-business-manager', _description: 'Fully autonomous business operations', _price: '$12, _999/month'}
    ]
  },
  {_title: ' Quantum & Emerging Tech 2030', _icon: AtomIcon, _color: 'from-indigo-600 via-blue-600 to-cyan-600', _description: 'Quantum computing and beyond', _services: [
      { name: 'Quantum Internet Security Gateway', _href: '/quantum-internet-security-gateway', _description: 'Unbreakable quantum encryption', _price: '$15, _999/month'},
      {_name: 'Biotech DNA Computing Platform', _href: '/biotech-dna-computing-platform', _description: 'DNA-based computation', _price: '$25, _999/month'},
      {_name: 'Neuromorphic Computing Platform', _href: '/neuromorphic-computing-platform', _description: 'Brain-inspired computing', _price: '$899/month'},
      {_name: 'Photonic Computing Infrastructure', _href: '/photonic-computing-infrastructure', _description: 'Light-speed computing', _price: '$699/month'}
    ]
  },
  {_title: ' Space & Metaverse 2030', _icon: Rocket, _color: 'from-teal-600 via-emerald-600 to-green-600', _description: 'Space exploration and digital reality', _services: [
      { name: 'Space Mining Automation Platform', _href: '/space-mining-automation-platform', _description: 'Automated asteroid mining', _price: '$45, _999/month'},
      {_name: 'Metaverse Development Platform', _href: '/metaverse-development-platform', _description: 'Build immersive virtual worlds', _price: '$499/month'},
      {_name: 'Virtual Event Hologram Platform', _href: '/virtual-event-hologram-platform', _description: 'Immersive holographic events', _price: '$799/month'},
      {_name: 'AI Predictive Health Analytics', _href: '/ai-predictive-health-analytics', _description: 'Predictive health outcomes', _price: '$7, _999/month'}
    ]
  },
  {_title: ' Enterprise IT 2030', _icon: CpuIcon, _color: 'from-blue-600 via-cyan-600 to-teal-600', _description: 'Autonomous enterprise infrastructure', _services: [
      { name: 'Autonomous DevOps Platform', _href: '/autonomous-devops-platform', _description: 'Fully autonomous DevOps', _price: '$799/month'},
      {_name: 'Zero Trust Network Architecture', _href: '/zero-trust-network-architecture', _description: 'Never trust, _always verify', _price: '$599/month'},
      {_name: 'Edge Computing Orchestration', _href: '/edge-computing-orchestration', _description: 'Distributed edge computing', _price: '$449/month'},
      {_name: 'AI-Powered IT Operations Center', _href: '/ai-it-operations-center', _description: 'Intelligent IT operations', _price: '$699/month'}
    ]
  },
  {_title: ' Business Solutions 2030', _icon: Target, _color: 'from-green-600 via-yellow-600 to-orange-600', _description: 'Practical business solutions with AI', _services: [
      { name: 'AI Business Intelligence Suite', _href: '/ai-business-intelligence-suite', _description: 'Intelligent business insights', _price: '$299/month'},
      {_name: 'AI Customer Success Automation', _href: '/ai-customer-success-automation', _description: 'Automate customer success', _price: '$199/month'},
      {_name: 'Blockchain Supply Chain Transparency', _href: '/blockchain-supply-chain-transparency', _description: 'End-to-end traceability', _price: '$399/month'},
      {_name: 'AI Meeting Transcriber Pro', _href: '/ai-meeting-transcriber-pro', _description: 'Professional transcription', _price: '$149/month'}
    ]
  },
  {_title: ' Research & Development 2030', _icon: Microscope, _color: 'from-orange-600 via-red-600 to-pink-600', _description: 'Breakthrough research solutions', _services: [
      { name: 'Swarm Robotics Orchestration', _href: '/swarm-robotics-orchestration', _description: 'Coordinate robot swarms', _price: '$449/month'},
      {_name: 'Brain-Computer Interface Platform', _href: '/brain-computer-interface-platform', _description: 'Direct neural interface', _price: '$1, _299/month'},
      {_name: 'Quantum Machine Learning Platform', _href: '/quantum-machine-learning-platform', _description: 'Quantum-enhanced ML', _price: '$2, _999/month'},
      {_name: 'Synthetic Biology Automation Platform', _href: '/synthetic-biology-automation-platform', _description: 'Automate biology research', _price: '$3, _999/month'}
    ]
  }
,

const mainNavigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Services', href: '/services', icon: Briefcase },
  { name: 'Solutions', href: '/solutions', icon: Layers },
  { name: 'Pricing', href: '/pricing', icon: DollarSign },
  { name: 'Resources', href: '/resources', icon: BookOpen },
  { name: 'Case Studies', href: '/case-studies', icon: TrendingUp },
  { name: 'Blog', href: '/blog', icon: MessageCircle },
  { name: 'Contact', href: '/contact', icon: MessageCircle }
,

const companyLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Careers', href: '/careers' },
  { name: 'News', href: '/news' },
  { name: 'Partners', href: '/partners' },
  { name: 'Support', href: '/support' },
  { name: 'Status', href: '/status' }
,

export default function UltraFuturisticNavigation2032() {
  const [isOpen, setIsOpen] = useState(false),
  const [activeCategory, setActiveCategory] = useState<number | null>(null),
  const [isScrolled, setIsScrolled] = useState(false),

  useEffect() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    },
    window.addEventListener('scroll', handleScroll),
    return () => window.removeEventListener('scroll', handleScroll)
  }, []),

  const toggleMenu = () => setIsOpen(!isOpen),
  const closeMenu = () => setIsOpen(false),

  return (
    <>
      {/* Top Contact Bar */}
      <div className=&quot;bg-gradient-to-r from-cyan-900/90 via-purple-900/90 to-pink-900/90 backdrop-blur-sm border-b border-cyan-500/20&quot;>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;flex items-center justify-between py-2 text-sm&quot;>
            <div className=&quot;flex items-center space-x-6 text-gray-300&quot;>
              <div className=&quot;flex items-center space-x-2&quot;>
                <Phone className=&quot;w-4 h-4 text-cyan-400&quot; />
                <a href={`tel:${contactInfo.mobile}`} className=&quot;hover:text-cyan-400 transition-colors&quot;>
                  {contactInfo.mobile}
                </a>
              </div>
              <div className=&quot;flex items-center space-x-2&quot;>
                <Mail className=&quot;w-4 h-4 text-purple-400&quot; />
                <a href={`mailto:${contactInfo.email}`} className=&quot;hover:text-purple-400 transition-colors&quot;>
                  {contactInfo.email}                </a>
              </div>
            </div>
            <div className=&quot;flex items-center space-x-4&quot;>
              <a href=&quot;https://github.com/Zion-Holdings&quot; target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot; className=&quot;text-gray-400 hover:text-cyan-400 transition-colors&quot;>
                <svg className=&quot;w-5 h-5&quot; fill=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path d=&quot;M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z&quot;/>
                </svg>
              </a>
              <a href=&quot;https://linkedin.com/company/ziontechgroup&quot; target=&quot;_blank&quot; rel=&quot;noopener noreferrer&quot; className=&quot;text-gray-400 hover:text-cyan-400 transition-colors&quot;>
                <svg className=&quot;w-5 h-5&quot; fill=&quot;currentColor&quot; viewBox=&quot;0 0 24 24&quot;>
                  <path d=&quot;M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.852-3.047-1.853 0-2.136 1.445-2.136 2.939v5.677H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z&quot;/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {_/* Main Navigation */}
      <nav className={_`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/95 backdrop-blur-xl border-b border-cyan-500/20 shadow-2xl shadow-cyan-500/10' 
          : 'bg-transparent'
      }`}>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;flex items-center justify-between h-20&quot;>
            {/* Logo */}
            <Link href=&quot;/&quot; className=&quot;flex items-center space-x-3 group&quot;>
              <div className=&quot;w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300&quot;>
                <Rocket className=&quot;w-7 h-7 text-white&quot; />              </div>
              <div>
                <div className=&quot;text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent&quot;>
                  Zion Tech Group
                </div>
                <div className=&quot;text-xs text-gray-400&quot;>2030 Future Technology</div>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className=&quot;hidden lg:flex items-center space-x-8&quot;>
              {mainNavigation.map(item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className=&quot;text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-center space-x-2 group&quot;
                >
                  <item.icon className=&quot;w-4 h-4 group-hover:scale-110 transition-transform&quot; />
                  <span>{item.name}</span>
                </a>
              )}
              ;
              {/* Services Dropdown */}
              <div className=&quot;relative group&quot;>
                <button className=&quot;text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-center space-x-2 group&quot;>
                  <Briefcase className=&quot;w-4 h-4 group-hover:scale-110 transition-transform&quot; />                  <span>Services</span>
                  <ChevronDown className=&quot;w-4 h-4 group-hover:rotate-180 transition-transform&quot; />
                </button>

                {/* Mega Menu */}
                <div className=&quot;absolute top-full left-0 w-screen max-w-7xl transform -translate-x-1/2 left-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 pt-4&quot;>
                  <div className=&quot;bg-black/95 backdrop-blur-xl border border-cyan-500/20 rounded-2xl p-8 shadow-2xl shadow-cyan-500/20&quot;>
                    <div className=&quot;grid grid-cols-2 gap-8&quot;>
                      {serviceCategories.map(category, index) => (
                        <div key={index} className=&quot;space-y-4&quot;>
                          <div className=&quot;flex items-center space-x-3&quot;>
                            <div className={`w-10 h-10 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center`}>
                              <category.icon className=&quot;w-5 h-5 text-white&quot; />
                            </div>
                            <div>
                              <h3 className=&quot;text-lg font-semibold text-white&quot;>{category.title}</h3>
                              <p className=&quot;text-sm text-gray-400&quot;>{category.description}</p>
                            </div>
                          </div>
                          <div className=&quot;space-y-2&quot;>
                            {category.services.map(service, serviceIndex) => (
                              <Link
                                key={serviceIndex}
                                href={service.href}
                                className=&quot;block p-3 rounded-lg hover:bg-gray-800/50 transition-colors group&quot;                              >
                                <div className=&quot;flex items-center justify-between&quot;>
                                  <div>
                                    <div className=&quot;text-white group-hover:text-cyan-400 transition-colors font-medium&quot;>
                                      {service.name}
                                    </div>
                                    <div className=&quot;text-sm text-gray-400&quot;>{service.description}</div>
                                  </div>
                                  <div className=&quot;text-cyan-400 font-semibold text-sm&quot;>{service.price}</div>                                </div>
                              </a>
                            )}
                          </div>;
                        </div>;
                      )}
                    </div>;
                  </div>;
                </div>;
              </div>;
            </div>;

            {/* CTA Buttons */}
            <div className=&quot;hidden lg:flex items-center space-x-4&quot;>
              <Link href=&quot;/contact&quot;>
                <button className=&quot;px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl&quot;>                  Get Started
                </button>
              </a>
            </div>

            {_/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className=&quot;lg:hidden p-2 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 transition-colors&quot;
            >
              {isOpen ? <X className=&quot;w-6 h-6&quot; /> : <Menu className=&quot;w-6 h-6&quot; />}            </button>
          </div>
        </div>
      </nav>

      {_/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={ opacity: 0, x: '100%' }
            animate={ opacity: 1, x: 0 }
            exit={ opacity: 0, x: '100%' }
            transition={ duration: 0.3 }
            className=&quot;fixed inset-0 z-50 lg:hidden&quot;
          >
            <div className=&quot;absolute inset-0 bg-black/80 backdrop-blur-xl&quot; onClick={closeMenu} />
            <div className=&quot;absolute right-0 top-0 h-full w-80 bg-black/95 backdrop-blur-xl border-l border-cyan-500/20 overflow-y-auto&quot;>
              <div className=&quot;p-6&quot;>
                <div className=&quot;flex items-center justify-between mb-8&quot;>
                  <div className=&quot;flex items-center space-x-3&quot;>
                    <div className=&quot;w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center&quot;>
                      <Rocket className=&quot;w-6 h-6 text-white&quot; />                    </div>
                    <div>
                      <div className=&quot;text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent&quot;>
                        Zion Tech Group
                      </div>
                    </div>
                  </div>
                  <button onClick={closeMenu} className=&quot;p-2 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50&quot;>
                    <X className=&quot;w-6 h-6&quot; />
                  </button>
                </div>

                {/* Mobile Navigation */}
                <div className=&quot;space-y-6&quot;>
                  {mainNavigation.map(item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={closeMenu}
                      className=&quot;flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors p-3 rounded-lg hover:bg-gray-800/50&quot;
                    >
                      <item.icon className=&quot;w-5 h-5&quot; />
                      <span>{item.name}</span>
                    </a>
                  )}

                  {/* Services Accordion */}
                  <div className=&quot;space-y-2&quot;>
                    <button
                      onClick={() => setActiveCategory(activeCategory = = 0 ? null : 0)}
                      className=&quot;w-full flex items-center justify-between p-3 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 transition-colors&quot;                    >
                      <span className=&quot;flex items-center space-x-3&quot;>
                        <Briefcase className=&quot;w-5 h-5&quot; />
                        <span>Services</span>
                      </span>
                      <ChevronRightIcon className={_`w-5 h-5 transition-transform ${activeCategory = = 0 ? 'rotate-90' : ''}`} />
                    </button>

                    {activeCategory = = 0 && (
                      <div className=&quot;pl-8 space-y-2&quot;>
                        {serviceCategories.map(category, index) => (
                          <div key={index} className=&quot;space-y-2&quot;>
                            <div className=&quot;text-sm font-medium text-cyan-400 py-2&quot;>{category.title}</div>
                            {category.services.map(service, serviceIndex) => (
                              <Link
                                key={serviceIndex}
                                href={service.href}
                                onClick={closeMenu}
                                className=&quot;block text-sm text-gray-400 hover:text-cyan-400 transition-colors py-1&quot;
                              >
                                {service.name}
                              </a>                            )}
                          </div>
                        )}
                      </div>;
                    )}
                  </div>;

                  {/* Company Links */}
                  <div className=&quot;pt-4 border-t border-gray-700/50&quot;>
                    <div className=&quot;text-sm font-medium text-gray-400 mb-3&quot;>Company</div>
                    <div className=&quot;space-y-2&quot;>
                      {companyLinks.map(link) => (
                        <Link
                          key={link.name}
                          href={link.href}
                          onClick={closeMenu}
                          className=&quot;block text-sm text-gray-400 hover:text-cyan-400 transition-colors py-1&quot;
                        >
                          {link.name}
                        </a>                      )}
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className=&quot;pt-4 border-t border-gray-700/50&quot;>
                    <div className=&quot;text-sm font-medium text-gray-400 mb-3&quot;>Contact</div>
                    <div className=&quot;space-y-2 text-sm text-gray-400&quot;>
                      <div className=&quot;flex items-center space-x-2&quot;>
                        <Phone className=&quot;w-4 h-4 text-cyan-400&quot; />
                        <span>{contactInfo.mobile}</span>
                      </div>
                      <div className=&quot;flex items-center space-x-2&quot;>
                        <Mail className=&quot;w-4 h-4 text-purple-400&quot; />
                        <span>{contactInfo.email}</span>
                      </div>
                      <div className=&quot;flex items-center space-x-2&quot;>
                        <MapPin className=&quot;w-4 h-4 text-pink-400&quot; />
                        <span className=&quot;text-xs&quot;>{contactInfo.address}</span>                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className=&quot;pt-4&quot;>
                    <Link href=&quot;/contact&quot; onClick={closeMenu}>
                      <button className=&quot;w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200&quot;>                        Get Started Today
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>;

      {/* Spacer for fixed navigation */}
      <div className=&quot;h-20&quot; />    </>
  )}