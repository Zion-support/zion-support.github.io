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
  Infinity, Hexagon, Network
} from 'lucide-react',

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
},
const _serviceCategories = [
  {_title: '🚀 2030 Ultra-Futuristic AI Services', _icon: Brain, _color: 'from-violet-600 via-purple-600 to-indigo-600', _description: 'Next-generation AI consciousness and creativity', _services: [
      { name: 'AI Consciousness Evolution Platform', _href: '/ai-consciousness-evolution-platform', _description: 'Develop genuine AI consciousness', _price: '$19, _999/month'},
      {_name: 'AI Emotional Intelligence Platform', _href: '/ai-emotion-intelligence-platform', _description: 'Real-time emotion analysis and response', _price: '$1, _299/month'},
      {_name: 'AI Creativity Orchestrator', _href: '/ai-creativity-orchestrator', _description: 'Multi-model creativity fusion', _price: '$1, _799/month'},
      {_name: 'AI Autonomous Business Manager', _href: '/ai-autonomous-business-manager', _description: 'Fully autonomous business operations', _price: '$3, _999/month'}
    ]
  },
  {_title: '⚛️ 2030 Quantum & Emerging Tech', _icon: Atom, _color: 'from-indigo-600 via-blue-600 to-cyan-600', _description: 'Quantum computing and beyond', _services: [
      { name: 'Quantum Internet Security Gateway', _href: '/quantum-internet-security-gateway', _description: 'Unbreakable quantum encryption', _price: '$3, _999/month'},
      {_name: 'Quantum Learning Accelerator', _href: '/quantum-learning-accelerator', _description: 'Quantum-enhanced learning paths', _price: '$899/month'},
      {_name: 'Quantum Financial Trading Platform', _href: '/quantum-financial-trading-platform', _description: 'Quantum-powered trading algorithms', _price: '$4, _999/month'},
      {_name: 'Quantum Cloud Infrastructure', _href: '/quantum-cloud-infrastructure', _description: 'Quantum-enhanced cloud performance', _price: '$4, _999/month'}
    ]
  },
  {_title: '🧬 2030 Biotech & DNA Computing', _icon: Microscope, _color: 'from-green-600 via-emerald-600 to-teal-600', _description: 'Biological computing and genetic engineering', _services: [
      { name: 'Biotech DNA Computing Platform', _href: '/biotech-dna-computing-platform', _description: 'DNA-based computation', _price: '$5, _999/month'},
      {_name: 'Biotech Personalized Nutrition', _href: '/biotech-personalized-nutrition', _description: 'DNA-based nutrition plans', _price: '$599/month'},
      {_name: 'AI Predictive Health Analytics', _href: '/ai-predictive-health-analytics', _description: 'Predictive health outcomes', _price: '$1, _599/month'},
      {_name: 'Advanced Research Automation', _href: '/advanced-research-automation', _description: 'Automated research workflows', _price: '$1, _999/month'}
    ]
  },
  {_title: '🏙️ 2030 Enterprise IT Solutions', _icon: Cpu, _color: 'from-blue-600 via-cyan-600 to-teal-600', _description: 'Autonomous enterprise infrastructure', _services: [
      { name: 'Autonomous DevOps Platform', _href: '/autonomous-devops-platform', _description: 'Fully autonomous DevOps', _price: '$2, _999/month'},
      {_name: 'Autonomous IT Operations Center', _href: '/autonomous-it-operations-center', _description: 'Self-managing IT infrastructure', _price: '$6, _999/month'},
      {_name: 'AI-Powered Enterprise Security', _href: '/ai-powered-enterprise-security', _description: 'AI-driven threat detection', _price: '$2, _999/month'},
      {_name: 'Intelligent Data Governance', _href: '/intelligent-data-governance', _description: 'AI-powered data management', _price: '$7, _999/month'}
    ]
  },
  {_title: '🌌 2030 Space & Metaverse Tech', _icon: Rocket, _color: 'from-teal-600 via-emerald-600 to-green-600', _description: 'Space exploration and digital reality', _services: [
      { name: 'Space Mining Automation Platform', _href: '/space-mining-automation-platform', _description: 'Automated asteroid mining', _price: '$8, _999/month'},
      {_name: 'Metaverse Digital Reality Platform', _href: '/metaverse-digital-reality-platform', _description: 'Immersive virtual worlds', _price: '$2, _499/month'},
      {_name: 'Quantum Research Platform', _href: '/quantum-research-platform', _description: 'Quantum computing research', _price: '$3, _999/month'},
      {_name: 'AI Research Assistant', _href: '/ai-research-assistant', _description: 'Intelligent research support', _price: '$899/month'}
    ]
  },
  {_title: '🎯 2030 Innovative Micro SAAS', _icon: Target, _color: 'from-green-600 via-yellow-600 to-orange-600', _description: 'Cutting-edge micro solutions', _services: [
      { name: 'AI Business Intelligence Suite 2030', _href: '/ai-business-intelligence-suite-2030', _description: 'AI-powered business analytics and insights', _price: '$299/month'},
      {_name: 'AI Customer Experience Platform 2030', _href: '/ai-customer-experience-platform-2030', _description: 'AI-powered customer experience management', _price: '$199/month'},
      {_name: 'AI Marketing Automation Suite 2030', _href: '/ai-marketing-automation-2030', _description: 'Intelligent marketing automation powered by AI', _price: '$179/month'},
      {_name: 'AI HR Management Suite 2030', _href: '/ai-hr-management-suite-2030', _description: 'Intelligent human resources management powered by AI', _price: '$149/month'}
    ]
  }
],

const mainNavigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Services', href: '/services', icon: Briefcase },
  { name: 'Solutions', href: '/solutions', icon: Layers },
  { name: 'Pricing', href: '/pricing', icon: DollarSign },
  { name: 'Resources', href: '/resources', icon: BookOpen },
  { name: 'Case Studies', href: '/case-studies', icon: BarChart3 },
  { name: 'Blog', href: '/blog', icon: MessageCircle },
  { name: 'Contact', href: '/contact', icon: MessageCircle }
],

const quickLinks = [
  { name: 'AI Services', href: '/services/ai', icon: Brain, color: 'from-purple-500 to-pink-500' },
  { name: 'Quantum Tech', href: '/services/quantum', icon: Atom, color: 'from-blue-500 to-cyan-500' },
  { name: 'Biotech Solutions', href: '/services/biotech', icon: Microscope, color: 'from-green-500 to-emerald-500' },
  { name: 'Space Technology', href: '/services/space', icon: Rocket, color: 'from-indigo-500 to-purple-500' },
  { name: 'Enterprise IT', href: '/services/enterprise', icon: Cpu, color: 'from-gray-500 to-slate-500' },
  { name: 'Micro SAAS', href: '/services/micro-saas', icon: Target, color: 'from-orange-500 to-red-500' }
],

export default function UltraFuturisticNavigation2030() {
  const [isOpen, setIsOpen] = useState(false),
  const [activeCategory, setActiveCategory] = useState<number | null>(null),
  const [isScrolled, setIsScrolled] = useState(false),

  useEffect(() => {
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
      <div className=&quot;bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white py-2 px-4 text-sm&quot;>
        <div className=&quot;max-w-7xl mx-auto flex flex-wrap items-center justify-between&quot;>
          <div className=&quot;flex items-center space-x-6&quot;>
            <div className=&quot;flex items-center space-x-2&quot;>
              <Phone className=&quot;w-4 h-4 text-cyan-400&quot; />
              <span>{contactInfo.mobile}</span>
            </div>
            <div className=&quot;flex items-center space-x-2&quot;>
              <Mail className=&quot;w-4 h-4 text-cyan-400&quot; />
              <span>{contactInfo.email}</span>
            </div>
          </div>
          <div className=&quot;flex items-center space-x-4&quot;>
            <div className=&quot;flex items-center space-x-2&quot;>
              <MapPin className=&quot;w-4 h-4 text-cyan-400&quot; />
              <span>{contactInfo.address}</span>
            </div>
            <div className=&quot;flex items-center space-x-2&quot;>
              <Globe className=&quot;w-4 h-4 text-cyan-400&quot; />
              <a href={contactInfo.website} className=&quot;hover:text-cyan-400 transition-colors&quot;>
                {contactInfo.website.replace('https://', '')}              </a>
            </div>
          </div>
        </div>
      </div>

      {_/* Main Navigation */}
      <nav className={_`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-xl border-b border-purple-500/20 shadow-2xl' 
          : 'bg-gradient-to-r from-black/95 via-purple-900/95 to-black/95 backdrop-blur-sm'
      }`}>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;flex items-center justify-between h-20&quot;>
            {/* Logo */}
            <div className=&quot;flex items-center space-x-4&quot;>
              <Link href=&quot;/&quot; className=&quot;flex items-center space-x-3 group&quot;>
                <div className=&quot;relative&quot;>
                  <div className=&quot;w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center transform group-hover:shadow-lg hover:shadow-cyan-400/40 transition-transform duration-300&quot;>
                    <Zap className=&quot;w-6 h-6 text-white&quot; />                  </div>
                  <div className=&quot;absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300&quot;></div>
                </div>
                <div className=&quot;flex flex-col&quot;>
                  <span className=&quot;text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent&quot;>
                    Zion Tech Group
                  </span>
                  <span className=&quot;text-xs text-gray-400 font-mono&quot;>2030 Future Technology</span>
                </div>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className=&quot;hidden lg:flex items-center space-x-8&quot;>
              {mainNavigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className=&quot;flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 group&quot;
                >
                  <item.icon className=&quot;w-4 h-4 group-hover:text-purple-400 transition-colors&quot; />
                  <span>{item.name}</span>
                </a>
              ))}
              ;
              {/* Services Dropdown */}
              <div className=&quot;relative group&quot;>
                <button className=&quot;flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200&quot;>
                  <Briefcase className=&quot;w-4 h-4&quot; />                  <span>Services</span>
                  <ChevronDown className=&quot;w-4 h-4 group-hover:rotate-180 transition-transform duration-200&quot; />
                </button>
                
                {/* Mega Menu */}
                <div className=&quot;absolute top-full left-0 w-screen max-w-6xl bg-black/95 backdrop-blur-xl border border-purple-500/20 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-4&quot;>
                  <div className=&quot;p-8&quot;>
                    <div className=&quot;grid grid-cols-2 gap-8&quot;>
                      {serviceCategories.map((category, index) => (
                        <div key={index} className=&quot;space-y-4&quot;>
                          <div className=&quot;flex items-center space-x-3&quot;>
                            <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color}`}>
                              <category.icon className=&quot;w-5 h-5 text-white&quot; />
                            </div>
                            <div>
                              <h3 className=&quot;text-lg font-semibold text-white&quot;>{category.title}</h3>
                              <p className=&quot;text-sm text-gray-400&quot;>{category.description}</p>
                            </div>
                          </div>
                          <div className=&quot;space-y-2&quot;>
                            {category.services.map((service, serviceIndex) => (
                              <Link
                                key={serviceIndex}
                                href={service.href}
                                className=&quot;block p-3 rounded-lg hover:bg-purple-500/10 transition-colors duration-200 group&quot;                              >
                                <div className=&quot;flex items-center justify-between&quot;>
                                  <div>
                                    <h4 className=&quot;text-sm font-medium text-white group-hover:text-purple-400 transition-colors&quot;>
                                      {service.name}
                                    </h4>
                                    <p className=&quot;text-xs text-gray-400&quot;>{service.description}</p>
                                  </div>
                                  <span className=&quot;text-xs font-mono text-purple-400&quot;>{service.price}</span>                                </div>
                              </a>
                            ))}
                          </div>;
                        </div>;
                      ))}
                    </div>;
                  </div>;
                </div>;
              </div>;
            </div>;
;
            {/* CTA Buttons */}
            <div className=&quot;hidden lg:flex items-center space-x-4&quot;>              <Link
                href=&quot;/contact&quot;
                className=&quot;px-6 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-200 transform hover:shadow-xl hover:shadow-cyan-500/30 shadow-lg hover:shadow-purple-500/25&quot;
              >
                Get Started
              </a>
              <Link
                href=&quot;/pricing&quot;
                className=&quot;px-6 py-2 border border-purple-500/30 text-purple-400 rounded-lg hover:bg-purple-500/10 transition-all duration-200&quot;
              >
                View Pricing
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className=&quot;lg:hidden&quot;>
              <button
                onClick={toggleMenu}
                className=&quot;p-2 rounded-lg text-gray-400 hover:text-white hover:bg-purple-500/20 transition-colors duration-200&quot;
              >
                {isOpen ? <X className=&quot;w-6 h-6&quot; /> : <Menu className=&quot;w-6 h-6&quot; />}              </button>
            </div>
          </div>
        </div>

        {_/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className=&quot;lg:hidden bg-black/95 backdrop-blur-xl border-t border-purple-500/20&quot;
            >
              <div className=&quot;px-4 py-6 space-y-6&quot;>
                {/* Mobile Navigation Links */}
                <div className=&quot;space-y-4&quot;>
                  {mainNavigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={closeMenu}
                      className=&quot;flex items-center space-x-3 p-3 rounded-lg text-gray-300 hover:text-white hover:bg-purple-500/10 transition-colors duration-200&quot;
                    >
                      <item.icon className=&quot;w-5 h-5&quot; />
                      <span>{item.name}</span>
                    </a>
                  ))}
                </div>;
;
                {/* Mobile Services */}
                <div className=&quot;space-y-4&quot;>
                  <h3 className=&quot;text-lg font-semibold text-white px-3&quot;>Our Services</h3>
                  <div className=&quot;grid grid-cols-2 gap-3&quot;>
                    {quickLinks.map((link) => (                      <Link
                        key={link.name}
                        href={_link.href}
                        onClick={_closeMenu}
                        className={_`p-3 rounded-lg text-center transition-all duration-200 transform hover:shadow-xl hover:shadow-cyan-500/30 ${
                          link.color.includes('from-') 
                            ? `bg-gradient-to-r ${link.color} text-white` 
                            : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                        }`}
                      >
                        <link.icon className=&quot;w-6 h-6 mx-auto mb-2&quot; />
                        <span className=&quot;text-sm font-medium&quot;>{link.name}</span>
                      </a>                    ))}
                  </div>
                </div>

                {/* Mobile CTA */}
                <div className=&quot;space-y-3 pt-4 border-t border-purple-500/20&quot;>
                  <Link
                    href=&quot;/contact&quot;
                    onClick={closeMenu}
                    className=&quot;block w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-center rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-200&quot;                  >
                    Get Started
                  </a>
                  <Link
                    href=&quot;/pricing&quot;
                    onClick={closeMenu}
                    className=&quot;block w-full px-6 py-3 border border-purple-500/30 text-purple-400 text-center rounded-lg hover:bg-purple-500/10 transition-all duration-200&quot;                  >
                    View Pricing
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>;
      </nav>;
;
      {/* Spacer for fixed navigation */}
      <div className=&quot;h-20&quot;></div>    </>
  )
}
