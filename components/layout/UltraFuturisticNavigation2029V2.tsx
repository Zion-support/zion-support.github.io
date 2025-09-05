import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, X, Search, ChevronDown, ChevronRight,
  Home, Users, Settings, HelpCircle, Mail, Phone, MapPin,
  BookOpen, MessageCircle, Star, TrendingUp,
  Layers, Cpu, Database, Cloud, Lock, Shield,
  Globe, Factory, Car, Building, GraduationCap, Scale,
  Palette, Camera, Video, Music, Gamepad2, Heart,
  Leaf, Sun, Moon, Wind, Droplets, Mountain,
  Code, Wrench, Smartphone, BarChart3, Eye, Globe2,
  Zap, Rocket, Brain, Sparkles, ShieldCheck, Target,
  Users2, Briefcase, Lightbulb, Award, Clock, CheckCircle
} from 'lucide-react';

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
};

const serviceCategories = [
  {
    title: '🚀 2029 Futuristic AI Services',
    icon: Brain,
    color: 'from-violet-600 via-purple-600 to-indigo-600',
    description: 'Next-generation AI consciousness and creativity',
    services: [
      { name: 'AI Consciousness Evolution Platform', href: '/services/ai-consciousness-evolution-platform', description: 'Develop genuine AI consciousness', price: '$19,999/month' },
      { name: 'AI Emotional Intelligence Platform', href: '/services/ai-emotional-intelligence-platform', description: 'Real-time emotion analysis and response', price: '$3,999/month' },
      { name: 'AI Creativity Orchestrator', href: '/services/ai-creativity-orchestrator', description: 'Multi-model creativity fusion', price: '$5,999/month' },
      { name: 'AI Autonomous Business Manager', href: '/services/ai-autonomous-business-manager', description: 'Fully autonomous business operations', price: '$12,999/month' }
    ]
  },
  {
    title: '⚛️ 2029 Quantum & Emerging Tech',
    icon: Globe,
    color: 'from-indigo-600 via-blue-600 to-cyan-600',
    description: 'Quantum computing and beyond',
    services: [
      { name: 'Quantum Internet Security Gateway', href: '/services/quantum-internet-security-gateway', description: 'Unbreakable quantum encryption', price: '$15,999/month' },
      { name: 'Biotech DNA Computing Platform', href: '/services/biotech-dna-computing-platform', description: 'DNA-based computation', price: '$25,999/month' },
      { name: 'Quantum Financial Trading Platform', href: '/services/quantum-financial-trading-platform', description: 'Quantum-powered trading algorithms', price: '$35,999/month' },
      { name: 'Quantum Creativity Studio', href: '/services/quantum-creativity-studio', description: 'Quantum-enhanced creativity', price: '$1,999/month' }
    ]
  },
  {
    title: '🏙️ 2029 Enterprise IT Solutions',
    icon: Cpu,
    color: 'from-blue-600 via-cyan-600 to-teal-600',
    description: 'Autonomous enterprise infrastructure',
    services: [
      { name: 'AI Business Intelligence Suite', href: '/services/ai-business-intelligence-suite', description: 'Intelligent insights and analytics', price: '$2,499/month' },
      { name: 'Smart Supply Chain Optimization', href: '/services/smart-supply-chain-optimization', description: 'AI-powered supply chain intelligence', price: '$3,999/month' },
      { name: 'Intelligent HR Management System', href: '/services/intelligent-hr-management-system', description: 'AI-powered HR optimization', price: '$1,599/month' },
      { name: 'Smart Financial Management Platform', href: '/services/smart-financial-management-platform', description: 'AI-powered financial planning', price: '$2,999/month' }
    ]
  },
  {
    title: '🌌 2029 Space & Metaverse Tech',
    icon: Rocket,
    color: 'from-teal-600 via-emerald-600 to-green-600',
    description: 'Space exploration and digital reality',
    services: [
      { name: 'Space Mining Automation Platform', href: '/services/space-mining-automation-platform', description: 'Automated asteroid mining', price: '$45,999/month' },
      { name: 'Metaverse Digital Reality Platform', href: '/services/metaverse-digital-reality-platform', description: 'Immersive virtual worlds', price: '$8,999/month' },
      { name: 'AI Predictive Health Analytics', href: '/services/ai-predictive-health-analytics', description: 'Predictive health outcomes', price: '$7,999/month' },
      { name: 'Virtual Event Hologram Platform', href: '/services/virtual-event-hologram-platform', description: 'Holographic event experiences', price: '$2,999/month' }
    ]
  },
  {
    title: '🎯 2029 Innovative Micro SAAS',
    icon: Target,
    color: 'from-green-600 via-yellow-600 to-orange-600',
    description: 'Cutting-edge micro solutions',
    services: [
      { name: 'Intelligent Customer Experience Platform', href: '/services/intelligent-customer-experience-platform', description: 'AI-powered customer journey optimization', price: '$1,899/month' },
      { name: 'Intelligent Marketing Automation', href: '/services/intelligent-marketing-automation', description: 'AI-powered marketing optimization', price: '$1,299/month' },
      { name: 'Smart Project Management', href: '/services/smart-project-management', description: 'AI-powered project optimization', price: '$899/month' },
      { name: 'Intelligent Sales Optimization', href: '/services/intelligent-sales-optimization', description: 'AI-powered sales intelligence', price: '$1,799/month' }
    ]
  },
  {
    title: '🔬 2029 Research & Development',
    icon: Eye,
    color: 'from-orange-600 via-red-600 to-pink-600',
    description: 'Breakthrough research solutions',
    services: [
      'Advanced Research Automation',
      'Quantum Research Platform',
      'AI Research Assistant',
      'Biotech Research Suite'
    ]
  }
];

const mainNavigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Services', href: '/services', icon: Briefcase },
  { name: 'AI Solutions', href: '/ai-solutions', icon: Brain },
  { name: 'Quantum Tech', href: '/quantum-tech', icon: Globe },
  { name: 'Enterprise IT', href: '/enterprise-it', icon: Cpu },
  { name: 'Space Tech', href: '/space-tech', icon: Rocket },
  { name: 'Micro SAAS', href: '/micro-saas', icon: Target },
  { name: 'Innovations', href: '/innovations', icon: Sparkles },
  { name: 'About', href: '/about', icon: Users },
  { name: 'Contact', href: '/contact', icon: MessageCircle }
];

const quickLinks = [
  { name: 'About Us', href: '/about', icon: Users },
  { name: 'Case Studies', href: '/case-studies', icon: BookOpen },
  { name: 'Blog', href: '/blog', icon: BookOpen },
  { name: 'News', href: '/news', icon: TrendingUp },
  { name: 'Careers', href: '/careers', icon: GraduationCap },
  { name: 'Support', href: '/support', icon: MessageCircle }
];

export default function UltraFuturisticNavigation2029V2() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className=&quot;relative z-50 bg-black/80 backdrop-blur-xl border-b border-cyan-500/20&quot;>
      {/* Main Navigation Bar */}
      <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
        <div className=&quot;flex justify-between items-center h-20&quot;>
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className=&quot;flex-shrink-0&quot;
          >
            <Link href=&quot;/&quot; className=&quot;flex items-center space-x-3 group&quot;>
              <div className=&quot;relative&quot;>
                <div className=&quot;w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300&quot;>
                  <Rocket className=&quot;w-7 h-7 text-white&quot; />
                </div>
                <div className=&quot;absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300&quot; />
              </div>
              <div className=&quot;hidden sm:block&quot;>
                <h1 className=&quot;text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent&quot;>
                  Zion Tech Group
                </h1>
                <p className=&quot;text-xs text-gray-400&quot;>Future Technology Solutions</p>
              </div>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className=&quot;hidden lg:flex items-center space-x-8&quot;>
            {mainNavigation.map((item) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: mainNavigation.indexOf(item) * 0.1 }}
                className=&quot;relative group&quot;
              >
                <Link
                  href={item.href}
                  className=&quot;flex items-center space-x-2 px-4 py-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 rounded-lg hover:bg-cyan-500/10&quot;
                >
                  <item.icon className=&quot;w-4 h-4&quot; />
                  <span>{item.name}</span>
                </a>
                
                {/* Hover effect */}
                <div className=&quot;absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 group-hover:w-full transition-all duration-300&quot; />
              </motion.div>
            ))}
          </div>

          {/* Right side - Contact & Search */}
          <div className=&quot;hidden lg:flex items-center space-x-4&quot;>
            {/* Search */}
            <div className=&quot;relative&quot;>
              <Search className=&quot;absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400&quot; />
              <input
                type=&quot;text&quot;
                placeholder=&quot;Search services...&quot;
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className=&quot;pl-10 pr-4 py-2 bg-gray-900/50 border border-gray-700 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 w-64&quot;
              />
            </div>

            {/* Contact Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Link
                href=&quot;/contact&quot;
                className=&quot;inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25&quot;
              >
                <MessageCircle className=&quot;w-4 h-4 mr-2&quot; />
                Get Started
              </a>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className=&quot;lg:hidden&quot;>
            <button
              onClick={toggleMenu}
              className=&quot;p-2 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-gray-800 transition-colors duration-300&quot;
            >
              {isOpen ? <X className=&quot;w-6 h-6&quot; /> : <Menu className=&quot;w-6 h-6&quot; />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className=&quot;lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-cyan-500/20&quot;
          >
            <div className=&quot;px-4 py-6 space-y-4&quot;>
              {/* Mobile Search */}
              <div className=&quot;relative&quot;>
                <Search className=&quot;absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400&quot; />
                <input
                  type=&quot;text&quot;
                  placeholder=&quot;Search services...&quot;
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className=&quot;w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50&quot;
                />
              </div>

              {/* Mobile Navigation Links */}
              <div className=&quot;space-y-2&quot;>
                {mainNavigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={closeMenu}
                    className=&quot;flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 rounded-lg transition-colors duration-300&quot;
                  >
                    <item.icon className=&quot;w-5 h-5&quot; />
                    <span>{item.name}</span>
                  </a>
                ))}
              </div>

              {/* Quick Links */}
              <div className=&quot;pt-4 border-t border-gray-700&quot;>
                <h3 className=&quot;text-sm font-medium text-gray-400 mb-3 px-4&quot;>Quick Links</h3>
                <div className=&quot;space-y-2&quot;>
                  {quickLinks.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={closeMenu}
                      className=&quot;flex items-center space-x-3 px-4 py-2 text-gray-400 hover:text-cyan-400 hover:bg-gray-800/50 rounded-lg transition-colors duration-300&quot;
                    >
                      <item.icon className=&quot;w-4 h-4&quot; />
                      <span className=&quot;text-sm&quot;>{item.name}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className=&quot;pt-4 border-t border-gray-700&quot;>
                <h3 className=&quot;text-sm font-medium text-gray-400 mb-3 px-4&quot;>Contact Info</h3>
                <div className=&quot;space-y-2 px-4&quot;>
                  <div className=&quot;flex items-center space-x-3 text-gray-400&quot;>
                    <Phone className=&quot;w-4 h-4&quot; />
                    <span className=&quot;text-sm&quot;>{contactInfo.mobile}</span>
                  </div>
                  <div className=&quot;flex items-center space-x-3 text-gray-400&quot;>
                    <Mail className=&quot;w-4 h-4&quot; />
                    <span className=&quot;text-sm&quot;>{contactInfo.email}</span>
                  </div>
                  <div className=&quot;flex items-center space-x-3 text-gray-400&quot;>
                    <MapPin className=&quot;w-4 h-4&quot; />
                    <span className=&quot;text-sm&quot;>{contactInfo.address}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Service Categories Dropdown */}
      <AnimatePresence>
        {activeCategory && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className=&quot;absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-xl border-t border-cyan-500/20 z-40&quot;
          >
            <div className=&quot;max-w-7xl mx-auto px-4 py-8&quot;>
              <div className=&quot;grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8&quot;>
                {serviceCategories.map((category) => (
                  <div key={category.title} className=&quot;space-y-4&quot;>
                    <div className=&quot;flex items-center space-x-3&quot;>
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color}`}>
                        <category.icon className=&quot;w-5 h-5 text-white&quot; />
                      </div>
                      <div>
                        <h3 className=&quot;text-lg font-semibold text-white&quot;>{category.title}</h3>
                        <p className=&quot;text-sm text-gray-400&quot;>{category.description}</p>
                      </div>
                    </div>
                    
                    <div className=&quot;space-y-3&quot;>
                      {category.services.map((service, index) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className=&quot;block p-3 rounded-lg bg-gray-800/50 hover:bg-gray-800/70 transition-colors duration-300 group&quot;
                        >
                          <div className=&quot;flex justify-between items-start&quot;>
                            <div>
                              <h4 className=&quot;font-medium text-white group-hover:text-cyan-400 transition-colors duration-300&quot;>
                                {service.name}
                              </h4>
                              <p className=&quot;text-sm text-gray-400 mt-1&quot;>{service.description}</p>
                            </div>
                            <span className=&quot;text-sm font-semibold text-cyan-400&quot;>{service.price}</span>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}