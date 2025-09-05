<<<<<<< HEAD
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
  ZapIcon, SparklesIcon, BrainIcon, AtomIcon
} from 'lucide-react',

const contactInfo = {
  mobile: '+1 302 464 0950',
  email: 'kleber@ziontechgroup.com',
  address: '364 E Main St STE 1008 Middletown DE 19709',
  website: 'https://ziontechgroup.com'
},
=======
import React, {_useState, _useEffect} from 'react';
import Link from 'next/link';
import {_Menu, _X, _ChevronDown, _Search, _Phone, _Mail, _MapPin, _Rocket, _Brain, _Atom, _Globe, _Zap, _Sparkles, _Shield, _Microscope, _DollarSign, _Home, _Users, _Briefcase, _BookOpen, _MessageCircle, _Star, _TrendingUp, _Target, _Layers, _Cpu, _Database, _Cloud, _Lock, _ShieldCheck, _Earth, _Factory, _Car, _Building, _GraduationCap, _Scale, _Palette, _Camera, _Video, _Music, _Gamepad2, _Heart, _Leaf, _Sun, _Moon, _Wind, _Droplets, _Mountain, _Code, _Wrench, _Smartphone, _BarChart3, _Eye, _Network, _Server, _HardDrive, _Monitor, _Laptop, _Watch, _Headphones, _Speaker, _Mic, _Keyboard, _Mouse, _CpuIcon, _DatabaseIcon, _CloudIcon, _LockIcon, _ShieldIcon, _GlobeIcon, _ZapIcon, _SparklesIcon, _BrainIcon, _AtomIcon} from 'lucide-react';

const _contactInfo = {_mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709', _website: 'https://ziontechgroup.com'};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

const _serviceCategories = [
  {_title: '🚀 2031 Revolutionary AI Services', _icon: BrainIcon, _color: 'from-violet-600 via-purple-600 to-indigo-600', _description: 'Next-generation AI consciousness and creativity', _services: [
      { name: 'AI Consciousness Evolution Platform', _href: '/ai-consciousness-evolution-platform', _description: 'Develop genuine AI consciousness', _price: '$19, _999/month'},
      {_name: 'AI Emotional Intelligence Platform', _href: '/ai-emotional-intelligence-platform', _description: 'Real-time emotion analysis and response', _price: '$3, _999/month'},
      {_name: 'AI Creativity Orchestrator', _href: '/ai-creativity-orchestrator', _description: 'Multi-model creativity fusion', _price: '$5, _999/month'},
      {_name: 'AI Dream Interpreter Platform', _href: '/ai-dream-interpreter-platform', _description: 'Dream analysis with AI psychology', _price: '$299/month'}
    ]
  },
  {_title: '⚛️ 2031 Quantum & Emerging Tech', _icon: AtomIcon, _color: 'from-indigo-600 via-blue-600 to-cyan-600', _description: 'Quantum computing and beyond', _services: [
      { name: 'Quantum Internet Security Gateway', _href: '/quantum-internet-security-gateway', _description: 'Unbreakable quantum encryption', _price: '$15, _999/month'},
      {_name: 'Biotech DNA Computing Platform', _href: '/biotech-dna-computing-platform', _description: 'DNA-based computation', _price: '$25, _999/month'},
      {_name: 'Quantum Financial Trading Platform', _href: '/quantum-financial-trading-platform', _description: 'Quantum-powered trading algorithms', _price: '$35, _999/month'},
      {_name: 'Quantum Creativity Studio', _href: '/quantum-creativity-studio', _description: 'Quantum-enhanced creativity', _price: '$1, _999/month'}
    ]
  },
  {_title: '🏙️ 2031 Enterprise IT Solutions', _icon: CpuIcon, _color: 'from-blue-600 via-cyan-600 to-teal-600', _description: 'Autonomous enterprise infrastructure', _services: [
      { name: 'Autonomous DevOps Platform', _href: '/autonomous-devops-platform', _description: 'Fully autonomous DevOps', _price: '$799/month'},
      {_name: 'Zero Trust Network Architecture', _href: '/zero-trust-network-architecture', _description: 'Never trust, _always verify', _price: '$599/month'},
      {_name: 'Edge Computing Orchestration', _href: '/edge-computing-orchestration', _description: 'Distributed edge computing', _price: '$449/month'},
      {_name: 'AI-Powered IT Operations Center', _href: '/ai-it-operations-center', _description: 'Intelligent IT operations', _price: '$699/month'}
    ]
  },
  {_title: '🌌 2031 Space & Metaverse Tech', _icon: Rocket, _color: 'from-teal-600 via-emerald-600 to-green-600', _description: 'Space exploration and digital reality', _services: [
      { name: 'Space Mining Automation Platform', _href: '/space-mining-automation-platform', _description: 'Automated asteroid mining', _price: '$45, _999/month'},
      {_name: 'Metaverse Development Platform', _href: '/metaverse-development-platform', _description: 'Build immersive virtual worlds', _price: '$499/month'},
      {_name: 'AI Predictive Health Analytics', _href: '/ai-predictive-health-analytics', _description: 'Predictive health outcomes', _price: '$7, _999/month'},
      {_name: 'AI Autonomous Business Manager', _href: '/ai-autonomous-business-manager', _description: 'Fully autonomous business operations', _price: '$12, _999/month'}
    ]
  },
  {_title: '🎯 2031 Innovative Micro SAAS', _icon: Target, _color: 'from-green-600 via-yellow-600 to-orange-600', _description: 'Cutting-edge micro solutions', _services: [
      { name: 'AI Business Intelligence Suite', _href: '/ai-business-intelligence-suite', _description: 'Intelligent business insights', _price: '$299/month'},
      {_name: 'Quantum-Secure Communication Platform', _href: '/quantum-secure-communication-platform', _description: 'Unbreakable encryption', _price: '$599/month'},
      {_name: 'AI Customer Success Automation', _href: '/ai-customer-success-automation', _description: 'Automate customer success', _price: '$199/month'},
      {_name: 'Blockchain Supply Chain Transparency', _href: '/blockchain-supply-chain-transparency', _description: 'End-to-end traceability', _price: '$399/month'}
    ]
  },
  {_title: '🔬 2031 Research & Development', _icon: Microscope, _color: 'from-orange-600 via-red-600 to-pink-600', _description: 'Breakthrough research solutions', _services: [
      { name: 'Neuromorphic Computing Platform', _href: '/neuromorphic-computing-platform', _description: 'Brain-inspired computing', _price: '$899/month'},
      {_name: 'DNA Computing Platform', _href: '/dna-computing-platform', _description: 'Molecular computing', _price: '$1, _299/month'},
      {_name: 'Photonic Computing Infrastructure', _href: '/photonic-computing-infrastructure', _description: 'Light-speed computing', _price: '$699/month'},
      {_name: 'Swarm Robotics Orchestration', _href: '/swarm-robotics-orchestration', _description: 'Coordinate robot swarms', _price: '$449/month'}
    ]
  }
],

<<<<<<< HEAD
const mainNavigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Services', href: '/services', icon: Briefcase },
  { name: '2030 Services', href: '/services/2030-futuristic-services', icon: Rocket },
  { name: 'AI Solutions', href: '/ai-services', icon: Brain },
  { name: 'IT Solutions', href: '/it-services', icon: Cpu },
  { name: 'Quantum Tech', href: '/quantum-services', icon: Atom },
  { name: 'Space Tech', href: '/space-tech', icon: Rocket },
  { name: 'Pricing', href: '/pricing', icon: DollarSign },
  { name: 'About', href: '/about', icon: Users },
  { name: 'Contact', href: '/contact', icon: MessageCircle },
  { name: 'Resources', href: '/resources', icon: BookOpen }
],

export default function UltraFuturisticNavigation2031() {
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

  return (
    <>
      {/* Top Contact Bar */}
      <div className=&quot;bg-gradient-to-r from-cyan-900 via-purple-900 to-pink-900 text-white py-2 px-4 text-sm&quot;>
        <div className=&quot;max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0&quot;>
          <div className=&quot;flex items-center space-x-6&quot;>
            <div className=&quot;flex items-center space-x-2&quot;>
              <Phone className=&quot;w-4 h-4 text-cyan-400&quot; />
              <span>{contactInfo.mobile}</span>
            </div>
            <div className=&quot;flex items-center space-x-2&quot;>
              <Mail className=&quot;w-4 h-4 text-purple-400&quot; />
              <span>{contactInfo.email}</span>
            </div>
          </div>
          <div className=&quot;flex items-center space-x-2&quot;>
            <MapPin className=&quot;w-4 h-4 text-pink-400&quot; />
            <span className=&quot;text-xs&quot;>{contactInfo.address}</span>
=======
const _mainNavigation = [
  {_name: 'Home', _href: '/', _icon: Home},
  {_name: 'Services', _href: '/services', _icon: Briefcase},
  {_name: '2030 Services', _href: '/services/2030-futuristic-services', _icon: Rocket},
  {_name: 'AI Solutions', _href: '/ai-services', _icon: Brain},
  {_name: 'IT Solutions', _href: '/it-services', _icon: Cpu},
  {_name: 'Quantum Tech', _href: '/quantum-services', _icon: Atom},
  {_name: 'Space Tech', _href: '/space-tech', _icon: Rocket},
  {_name: 'Pricing', _href: '/pricing', _icon: DollarSign},
  {_name: 'About', _href: '/about', _icon: Users},
  {_name: 'Contact', _href: '/contact', _icon: MessageCircle},
  {_name: 'Resources', _href: '/resources', _icon: BookOpen}
];

export default function UltraFuturisticNavigation2031() {_const [isOpen, _setIsOpen] = useState(false);
  const [activeCategory, _setActiveCategory] = useState<string | null>(null);
  const [scrolled, _setScrolled] = useState(false);

  useEffect__(() => {
    const _handleScroll = () => {
      setScrolled(window.scrollY > 50);};
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (_<>
      {_/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-cyan-900 via-purple-900 to-pink-900 text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-cyan-400" />
              <span>{_contactInfo.mobile}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-purple-400" />
              <span>{_contactInfo.email}</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4 text-pink-400" />
            <span className="text-xs">{_contactInfo.address}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          </div>
        </div>
      </div>

      {_/* Main Navigation */}
      <nav className={_`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/80 backdrop-blur-xl border-b border-cyan-500/20' 
<<<<<<< HEAD
          : 'bg-transparent'
      }`}>
        <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
          <div className=&quot;flex justify-between items-center h-20&quot;>
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className=&quot;flex items-center space-x-3&quot;
=======
          : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {_/* Logo */}
            <motion.div
              initial={_{ opacity: 0, _x: -20}}
              animate={_{ opacity: 1, _x: 0}}
              transition={_{ duration: 0.5}}
              className="flex items-center space-x-3"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              <div className=&quot;w-12 h-12 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center&quot;>
                <Rocket className=&quot;w-6 h-6 text-white&quot; />
              </div>
              <div className=&quot;hidden sm:block&quot;>
                <h1 className=&quot;text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent&quot;>
                  Zion Tech Group
                </h1>
                <p className=&quot;text-xs text-gray-400&quot;>2031 Future Technology</p>
              </div>
            </motion.div>

<<<<<<< HEAD
            {/* Desktop Navigation */}
            <div className=&quot;hidden lg:flex items-center space-x-8&quot;>
              {mainNavigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className=&quot;relative group&quot;
                >
                  <Link
                    href={item.href}
                    className=&quot;flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 group-hover:text-cyan-400&quot;
                  >
                    <item.icon className=&quot;w-4 h-4&quot; />
                    <span>{item.name}</span>
                  </a>
                  
                  {/* Hover effect */}
                  <div className=&quot;absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 transition-all duration-300 group-hover:w-full&quot;></div>
=======
            {_/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {_mainNavigation.map((item, _index) => (
                <motion.div
                  key={item.name}
                  initial={_{ opacity: 0, _y: -20}}
                  animate={_{ opacity: 1, _y: 0}}
                  transition={_{ duration: 0.5, _delay: index * 0.1}}
                  className="relative group"
                >
                  <Link
                    href={_item.href}
                    className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 group-hover:text-cyan-400"
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{_item.name}</span>
                  </Link>
                  
                  {_/* Hover effect */}
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 transition-all duration-300 group-hover:w-full"></div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </motion.div>
              ))}
            </div>

<<<<<<< HEAD
            {/* CTA Buttons */}
            <div className=&quot;hidden lg:flex items-center space-x-4&quot;>
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className=&quot;px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 transform hover:shadow-xl hover:shadow-cyan-500/30&quot;
=======
            {_/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <motion.button
                initial={_{ opacity: 0, _scale: 0.8}}
                animate={_{ opacity: 1, _scale: 1}}
                transition={_{ duration: 0.5, _delay: 0.8}}
                className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 transform hover:shadow-xl hover:shadow-cyan-500/30"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                Get Started
              </motion.button>
              <motion.button
<<<<<<< HEAD
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className=&quot;px-6 py-2 border-2 border-cyan-400 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-200 transform hover:shadow-xl hover:shadow-cyan-500/30&quot;
=======
                initial={_{ opacity: 0, _scale: 0.8}}
                animate={_{ opacity: 1, _scale: 1}}
                transition={_{ duration: 0.5, _delay: 0.9}}
                className="px-6 py-2 border-2 border-cyan-400 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-200 transform hover:shadow-xl hover:shadow-cyan-500/30"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              >
                Contact Us
              </motion.button>
            </div>

<<<<<<< HEAD
            {/* Mobile menu button */}
            <div className=&quot;lg:hidden&quot;>
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                onClick={() => setIsOpen(!isOpen)}
                className=&quot;text-gray-300 hover:text-white transition-colors duration-200&quot;
              >
                {isOpen ? <X className=&quot;w-6 h-6&quot; /> : <Menu className=&quot;w-6 h-6&quot; />}
=======
            {_/* Mobile menu button */}
            <div className="lg:hidden">
              <motion.button
                initial={_{ opacity: 0, _scale: 0.8}}
                animate={_{ opacity: 1, _scale: 1}}
                transition={_{ duration: 0.5, _delay: 1}}
                onClick={_() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                {_isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </motion.button>
            </div>
          </div>
        </div>

<<<<<<< HEAD
        {/* Service Categories Bar */}
        <div className=&quot;hidden lg:block border-t border-gray-800/50 bg-black/40 backdrop-blur-sm&quot;>
          <div className=&quot;max-w-7xl mx-auto px-4 sm:px-6 lg:px-8&quot;>
            <div className=&quot;flex items-center justify-center space-x-8 py-3&quot;>
              {serviceCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className=&quot;relative group&quot;
                  onMouseEnter={() => setActiveCategory(category.title)}
                  onMouseLeave={() => setActiveCategory(null)}
                >
                  <button className=&quot;flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 group-hover:text-cyan-400&quot;>
                    <category.icon className=&quot;w-4 h-4&quot; />
                    <span className=&quot;text-sm font-medium&quot;>{category.title.split(' ')[0]}</span>
                    <ChevronDown className=&quot;w-3 h-3 transition-transform duration-200 group-hover:rotate-180&quot; />
=======
        {_/* Service Categories Bar */}
        <div className="hidden lg:block border-t border-gray-800/50 bg-black/40 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center space-x-8 py-3">
              {_serviceCategories.map(_(category, _index) => (_<motion.div
                  key={category.title}
                  initial={_{ opacity: 0, _y: 10}}
                  animate={_{ opacity: 1, _y: 0}}
                  transition={_{ duration: 0.5, _delay: index * 0.1}}
                  className="relative group"
                  onMouseEnter={_() => setActiveCategory(category.title)}
                  onMouseLeave={_() => setActiveCategory(null)}
                >
                  <button className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200 group-hover:text-cyan-400">
                    <category.icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{_category.title.split(' ')[0]}</span>
                    <ChevronDown className="w-3 h-3 transition-transform duration-200 group-hover:rotate-180" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                  </button>

                  {_/* Dropdown Menu */}
                  <AnimatePresence>
<<<<<<< HEAD
                    {activeCategory === category.title && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className=&quot;absolute top-full left-0 mt-2 w-80 bg-black/90 backdrop-blur-xl border border-cyan-500/20 rounded-2xl shadow-2xl shadow-cyan-500/20 overflow-hidden&quot;
                      >
                        <div className=&quot;p-4&quot;>
                          <div className=&quot;mb-3&quot;>
                            <h3 className=&quot;text-lg font-semibold text-white mb-1&quot;>{category.title}</h3>
                            <p className=&quot;text-sm text-gray-400&quot;>{category.description}</p>
                          </div>
                          <div className=&quot;space-y-3&quot;>
                            {category.services.map((service, serviceIndex) => (
                              <motion.div
                                key={service.name}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.2, delay: serviceIndex * 0.05 }}
                                className=&quot;group cursor-pointer&quot;
                              >
                                <Link
                                  href={service.href}
                                  className=&quot;block p-3 rounded-xl bg-gray-900/50 hover:bg-gradient-to-r hover:from-cyan-900/20 hover:to-purple-900/20 border border-transparent hover:border-cyan-500/30 transition-all duration-200&quot;
                                >
                                  <div className=&quot;flex items-start justify-between&quot;>
                                    <div className=&quot;flex-1&quot;>
                                      <h4 className=&quot;font-medium text-white group-hover:text-cyan-400 transition-colors duration-200&quot;>
                                        {service.name}
                                      </h4>
                                      <p className=&quot;text-sm text-gray-400 mt-1&quot;>{service.description}</p>
                                    </div>
                                    <div className=&quot;text-right&quot;>
                                      <span className=&quot;text-sm font-semibold text-cyan-400&quot;>{service.price}</span>
=======
                    {_activeCategory === category.title && (_<motion.div
                        initial={{ opacity: 0, _y: 10, _scale: 0.95}}
                        animate={_{ opacity: 1, _y: 0, _scale: 1}}
                        exit={_{ opacity: 0, _y: 10, _scale: 0.95}}
                        transition={_{ duration: 0.2}}
                        className="absolute top-full left-0 mt-2 w-80 bg-black/90 backdrop-blur-xl border border-cyan-500/20 rounded-2xl shadow-2xl shadow-cyan-500/20 overflow-hidden"
                      >
                        <div className="p-4">
                          <div className="mb-3">
                            <h3 className="text-lg font-semibold text-white mb-1">{_category.title}</h3>
                            <p className="text-sm text-gray-400">{_category.description}</p>
                          </div>
                          <div className="space-y-3">
                            {_category.services.map((service, _serviceIndex) => (
                              <motion.div
                                key={service.name}
                                initial={_{ opacity: 0, _x: -10}}
                                animate={_{ opacity: 1, _x: 0}}
                                transition={_{ duration: 0.2, _delay: serviceIndex * 0.05}}
                                className="group cursor-pointer"
                              >
                                <Link
                                  href={_service.href}
                                  className="block p-3 rounded-xl bg-gray-900/50 hover:bg-gradient-to-r hover:from-cyan-900/20 hover:to-purple-900/20 border border-transparent hover:border-cyan-500/30 transition-all duration-200"
                                >
                                  <div className="flex items-start justify-between">
                                    <div className="flex-1">
                                      <h4 className="font-medium text-white group-hover:text-cyan-400 transition-colors duration-200">
                                        {_service.name}
                                      </h4>
                                      <p className="text-sm text-gray-400 mt-1">{_service.description}</p>
                                    </div>
                                    <div className="text-right">
                                      <span className="text-sm font-semibold text-cyan-400">{_service.price}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                                    </div>
                                  </div>
                                </a>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {_/* Mobile Navigation Menu */}
      <AnimatePresence>
<<<<<<< HEAD
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className=&quot;fixed top-0 right-0 h-full w-80 bg-black/95 backdrop-blur-xl border-l border-cyan-500/20 z-50 lg:hidden&quot;
=======
        {_isOpen && (_<motion.div
            initial={{ opacity: 0, _x: '100%'}}
            animate={_{ opacity: 1, _x: 0}}
            exit={_{ opacity: 0, _x: '100%'}}
            transition={_{ duration: 0.3}}
            className="fixed top-0 right-0 h-full w-80 bg-black/95 backdrop-blur-xl border-l border-cyan-500/20 z-50 lg:hidden"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          >
            <div className=&quot;p-6&quot;>
              <div className=&quot;flex justify-between items-center mb-8&quot;>
                <h2 className=&quot;text-xl font-bold text-white&quot;>Menu</h2>
                <button
<<<<<<< HEAD
                  onClick={() => setIsOpen(false)}
                  className=&quot;text-gray-400 hover:text-white transition-colors duration-200&quot;
=======
                  onClick={_() => setIsOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                >
                  <X className=&quot;w-6 h-6&quot; />
                </button>
              </div>

<<<<<<< HEAD
              <div className=&quot;space-y-6&quot;>
                {mainNavigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className=&quot;flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200 hover:text-cyan-400&quot;
                  >
                    <item.icon className=&quot;w-5 h-5&quot; />
                    <span className=&quot;text-lg&quot;>{item.name}</span>
                  </a>
=======
              <div className="space-y-6">
                {_mainNavigation.map(_(item) => (_<Link
                    key={item.name}
                    href={_item.href}
                    onClick={_() => setIsOpen(false)}
                    className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200 hover:text-cyan-400"
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="text-lg">{_item.name}</span>
                  </Link>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                ))}

                <div className=&quot;pt-6 border-t border-gray-800&quot;>
                  <div className=&quot;space-y-4&quot;>
                    <button className=&quot;w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-200&quot;>
                      Get Started
                    </button>
                    <button className=&quot;w-full px-6 py-3 border-2 border-cyan-400 text-cyan-400 rounded-xl font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-200&quot;>
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

<<<<<<< HEAD
      {/* Spacer for fixed navigation */}
<<<<<<< HEAD
      <div className="h-32 lg: h-40"></div>
=======
      <div className=&quot;h-32 lg:h-40&quot;></div>
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
      {_/* Spacer for fixed navigation */}
      <div className="h-32 lg:h-40"></div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    </>
  )
}