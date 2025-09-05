<<<<<<< HEAD
import React, { useState, useEffect } from 'react',
import Link from 'next/link',
import { motion, AnimatePresence } from 'framer-motion',
import { 
  Menu, X, Zap, Sparkles, ChevronDown, ChevronRight, 
  Brain, Atom, Globe, Shield, Cpu, Database, 
  Cloud, Smartphone, Palette, Search, MessageSquare, 
  FileText, Calendar, CreditCard, BarChart3, Settings,
  Rocket, Star, TrendingUp, Users, Target, Award,
  Phone, Mail, MapPin, ExternalLink, Building
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
import {_Menu, _X, _Zap, _Sparkles, _ChevronDown, _ChevronRight, _Brain, _Atom, _Globe, _Shield, _Cpu, _Database, _Cloud, _Smartphone, _Palette, _Search, _MessageSquare, _FileText, _Calendar, _CreditCard, _BarChart3, _Settings, _Rocket, _Star, _TrendingUp, _Users, _Target, _Award, _Phone, _Mail, _MapPin, _ExternalLink, _Building} from 'lucide-react';

const _contactInfo = {_mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709', _website: 'https://ziontechgroup.com'};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

const _serviceCategories = [
  {_title: '🚀 2028 Cutting-Edge Innovations', _icon: Rocket, _color: 'from-violet-600 to-purple-600', _description: 'Beyond the future of technology', _services: [
      { name: 'AI Consciousness Evolution', _href: '/ai-consciousness-evolution-platform', _description: 'Evolve AI beyond human limits', _price: '$9, _999/month'},
      {_name: 'Quantum Consciousness Interface', _href: '/quantum-consciousness-interface', _description: 'Bridge quantum computing with consciousness', _price: '$15, _999/month'},
      {_name: 'Autonomous AI Civilization', _href: '/autonomous-ai-civilization-platform', _description: 'Create AI civilizations', _price: '$19, _999/month'},
      {_name: 'Quantum Time Manipulation', _href: '/quantum-time-manipulation-platform', _description: 'Manipulate time through quantum computing', _price: '$25, _999/month'}
    ]
  },
  {_title: '🎯 2028 Practical Micro SAAS', _icon: Target, _color: 'from-blue-600 to-cyan-600', _description: 'Real business solutions for today', _services: [
      { name: 'AI Customer Success Automation', _href: '/ai-customer-success-automation-2028', _description: 'Automate customer success with AI', _price: '$299/month'},
      {_name: 'Smart Inventory Management', _href: '/smart-inventory-management-2028', _description: 'AI inventory optimization', _price: '$399/month'},
      {_name: 'Automated HR Recruitment', _href: '/automated-hr-recruitment-2028', _description: 'AI-powered hiring automation', _price: '$249/month'},
      {_name: 'AI Content Marketing Suite', _href: '/ai-content-marketing-suite-2028', _description: 'AI-powered content creation', _price: '$199/month'}
    ]
  },
  {_title: '⚛️ 2028 Quantum & Space Tech', _icon: Atom, _color: 'from-indigo-600 to-blue-600', _description: 'Quantum computing and space exploration', _services: [
      { name: 'Quantum Internet Security', _href: '/quantum-internet-security-gateway-2028', _description: 'Unbreakable quantum encryption', _price: '$3, _999/month'},
      {_name: 'Quantum Neural Interface', _href: '/quantum-neural-interface-platform-2028', _description: 'Brain-computer quantum interface', _price: '$8, _999/month'},
      {_name: 'Space Debris Management AI', _href: '/space-debris-management-ai-2028', _description: 'AI space safety and management', _price: '$5, _999/month'},
      {_name: 'Quantum Financial Trading', _href: '/quantum-financial-trading-algorithm-platform-2028', _description: 'Quantum trading algorithms', _price: '$12, _999/month'}
    ]
  },
  {_title: '🤖 2028 AI & Machine Learning', _icon: Brain, _color: 'from-emerald-600 to-teal-600', _description: 'Next-generation AI solutions', _services: [
      { name: 'AI Consciousness Evolution', _href: '/ai-consciousness-evolution-platform-2028', _description: 'Evolve AI beyond human limits', _price: '$9, _999/month'},
      {_name: 'Autonomous AI Civilization', _href: '/autonomous-ai-civilization-platform-2028', _description: 'Create AI civilizations', _price: '$19, _999/month'},
      {_name: 'AI Healthcare Companion', _href: '/ai-healthcare-companion-2028', _description: 'Revolutionary healthcare AI', _price: '$399/month'},
      {_name: 'AI Content Creation Revolution', _href: '/ai-content-creation-revolution-2028', _description: 'Unlimited AI content generation', _price: '$599/month'}
    ]
  },
  {_title: '🏢 2028 Enterprise Solutions', _icon: Shield, _color: 'from-red-600 to-orange-600', _description: 'Enterprise-grade solutions', _services: [
      { name: 'Zero Trust Architecture 2028', _href: '/zero-trust-network-architecture-2028', _description: 'Next-gen security architecture', _price: 'Custom pricing'},
      {_name: 'Edge Computing Orchestration', _href: '/edge-computing-orchestration-2028', _description: 'Intelligent edge computing', _price: 'Custom pricing'},
      {_name: '5G Private Networks', _href: '/5g-private-network-solutions-2028', _description: 'Enterprise 5G solutions', _price: 'Custom pricing'},
      {_name: 'Blockchain Infrastructure', _href: '/blockchain-infrastructure-platform-2028', _description: 'Enterprise blockchain', _price: 'Custom pricing'}
    ]
  },
  {_title: '🌌 2028 Metaverse & Digital Reality', _icon: Globe, _color: 'from-pink-600 to-rose-600', _description: 'Virtual and augmented reality', _services: [
      { name: 'Holographic Metaverse', _href: '/holographic-metaverse-development-platform-2028', _description: '3D holographic experiences', _price: '$2, _999/month'},
      {_name: 'AI Multiverse Creation', _href: '/ai-multiverse-creation-platform-2028', _description: 'Create AI-powered multiverses', _price: '$29, _999/month'},
      {_name: 'Virtual Event Holograms', _href: '/virtual-event-hologram-platform-2028', _description: 'Holographic event platform', _price: '$1, _999/month'},
      {_name: 'Digital Reality Interface', _href: '/digital-reality-interface-2028', _description: 'Next-gen reality interface', _price: '$4, _999/month'}
    ]
  }
],

<<<<<<< HEAD
const companyLinks = [
  { name: '🏠 Home', href: '/', icon: Home },
  { name: '🚀 2028 Services', href: '/ultimate-2028-services-showcase', icon: Rocket },
  { name: '⭐ Ultimate 2028', href: '/ultimate-2028-services-showcase', icon: Star },
  { name: '💰 2028 Pricing', href: '/revolutionary-2028-pricing', icon: DollarSign },
  { name: '📊 Case Studies', href: '/case-studies', icon: Briefcase },
  { name: '📚 Blog & Resources', href: '/blog', icon: BookOpen },
  { name: '📈 Reports', href: '/reports', icon: TrendingUp },
  { name: '🔧 Solutions', href: '/solutions', icon: Layers },
  { name: '💼 Careers', href: '/careers', icon: Users },
  { name: '📞 Contact', href: '/contact', icon: MessageCircle }
],

const technologyLinks = [
  { name: '🤖 AI Services', href: '/ai-services', icon: Brain },
  { name: '⚛️ Quantum Services', href: '/quantum-services', icon: Atom },
  { name: '☁️ Cloud Platform', href: '/cloud-platform', icon: Cloud },
  { name: '🔒 Cybersecurity', href: '/cybersecurity', icon: Lock },
  { name: '📊 Analytics', href: '/analytics', icon: Database },
  { name: '🔄 Automation', href: '/automation', icon: Cpu }
],

export default function UltraFuturisticNavigation2027() {
  const [isOpen, setIsOpen] = useState(false),
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null),
  const [isClient, setIsClient] = useState(false),

  useEffect(() => {
    setIsClient(true)
  }, []),

  useEffect(() => {
    if (!isClient) return,

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    },
=======
const _companyLinks = [
  {_name: '🏠 Home', _href: '/', _icon: Home},
  {_name: '🚀 2028 Services', _href: '/ultimate-2028-services-showcase', _icon: Rocket},
  {_name: '⭐ Ultimate 2028', _href: '/ultimate-2028-services-showcase', _icon: Star},
  {_name: '💰 2028 Pricing', _href: '/revolutionary-2028-pricing', _icon: DollarSign},
  {_name: '📊 Case Studies', _href: '/case-studies', _icon: Briefcase},
  {_name: '📚 Blog & Resources', _href: '/blog', _icon: BookOpen},
  {_name: '📈 Reports', _href: '/reports', _icon: TrendingUp},
  {_name: '🔧 Solutions', _href: '/solutions', _icon: Layers},
  {_name: '💼 Careers', _href: '/careers', _icon: Users},
  {_name: '📞 Contact', _href: '/contact', _icon: MessageCircle}
];

const _technologyLinks = [
  {_name: '🤖 AI Services', _href: '/ai-services', _icon: Brain},
  {_name: '⚛️ Quantum Services', _href: '/quantum-services', _icon: Atom},
  {_name: '☁️ Cloud Platform', _href: '/cloud-platform', _icon: Cloud},
  {_name: '🔒 Cybersecurity', _href: '/cybersecurity', _icon: Lock},
  {_name: '📊 Analytics', _href: '/analytics', _icon: Database},
  {_name: '🔄 Automation', _href: '/automation', _icon: Cpu}
];

export default function UltraFuturisticNavigation2027() {_const [isOpen, _setIsOpen] = useState(false);
  const [activeDropdown, _setActiveDropdown] = useState<string | null>(null);
  const [isClient, _setIsClient] = useState(false);

  useEffect__(() => {
    setIsClient(true);}, []);

  useEffect__(() => {_if (!isClient) return;

    const _handleScroll = () => {
      setIsScrolled(window.scrollY > 20);};
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    window.addEventListener('scroll', handleScroll),
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isClient]),

<<<<<<< HEAD
  const navigation = [
    {
      name: 'AI & Machine Learning',
      href: '/services?category=AI%20%26%20Machine%20Learning',
      description: '200+ AI & ML Solutions',
      icon: <Brain className=&quot;w-5 h-5&quot; />,
      color: 'from-purple-500 to-indigo-600',
      children: [
=======
  const _navigation = [
    {_name: 'AI & Machine Learning', _href: '/services?category=AI%20%26%20Machine%20Learning', _description: '200+ AI & ML Solutions', _icon: <Brain className="w-5 h-5" />, _color: 'from-purple-500 to-indigo-600', _children: [
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        { 
          name: 'AI Consciousness Platform', _href: '/services/ai-consciousness-platform', _description: 'Advanced AI consciousness simulation', _price: '$5, _999/month', _icon: '🧠'},
        {_name: 'Quantum Machine Learning', _href: '/services/quantum-machine-learning', _description: 'Quantum-powered ML platform', _price: '$12, _999/month', _icon: '⚛️'},
        {_name: 'Autonomous AI Agents', _href: '/services/autonomous-ai-agents', _description: 'Self-operating AI systems', _price: '$4, _999/month', _icon: '🤖'},
        {_name: 'AI Content Factory', _href: '/services/ai-content-factory', _description: 'Automated content creation', _price: '$299/month', _icon: '📝'},
        {_name: 'View All AI Services', _href: '/services?category=AI%20%26%20Machine%20Learning', _description: 'Explore 200+ AI solutions', _icon: '🚀'}
      ]
    },
<<<<<<< HEAD
    {
      name: 'Quantum Technology',
      href: '/services?category=Quantum%20Computing',
      description: '50+ Quantum Solutions',
      icon: <Atom className=&quot;w-5 h-5&quot; />,
      color: 'from-blue-500 to-cyan-600',
      children: [
=======
    {_name: 'Quantum Technology', _href: '/services?category=Quantum%20Computing', _description: '50+ Quantum Solutions', _icon: <Atom className="w-5 h-5" />, _color: 'from-blue-500 to-cyan-600', _children: [
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        { 
          name: 'Quantum Neural Interface', _href: '/services/quantum-neural-interface', _description: 'Quantum + Neural Networks', _price: '$8, _999/month', _icon: '⚛️'},
        {_name: 'Quantum Financial Trading', _href: '/services/quantum-financial-trading', _description: 'Quantum-powered trading', _price: '$9, _999/month', _icon: '💰'},
        {_name: 'Quantum Internet Protocol', _href: '/services/quantum-internet-protocol', _description: 'Quantum communication network', _price: '$7, _999/month', _icon: '🌐'},
        {_name: 'Quantum Sensors Network', _href: '/services/quantum-sensors-network', _description: 'Ultra-precise quantum sensors', _price: '$9, _999/month', _icon: '📡'},
        {_name: 'View All Quantum Services', _href: '/services?category=Quantum%20Computing', _description: 'Explore quantum solutions', _icon: '🚀'}
      ]
    },
<<<<<<< HEAD
    {
      name: 'Emerging Tech',
      href: '/services?category=Emerging%20Technology',
      description: '100+ Future Solutions',
      icon: <Rocket className=&quot;w-5 h-5&quot; />,
      color: 'from-green-500 to-emerald-600',
      children: [
=======
    {_name: 'Emerging Tech', _href: '/services?category=Emerging%20Technology', _description: '100+ Future Solutions', _icon: <Rocket className="w-5 h-5" />, _color: 'from-green-500 to-emerald-600', _children: [
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        { 
          name: 'Holographic Metaverse', _href: '/services/holographic-metaverse-platform', _description: '3D immersive experiences', _price: '$3, _999/month', _icon: '🎭'},
        {_name: 'Neuromorphic Computing', _href: '/services/neuromorphic-computing', _description: 'Brain-inspired computing', _price: '$8, _999/month', _icon: '🧠'},
        {_name: 'Synthetic Biology', _href: '/services/synthetic-biology-platform', _description: 'AI-powered bioengineering', _price: '$15, _999/month', _icon: '🧬'},
        {_name: 'Brain-Computer Interface', _href: '/services/brain-computer-interface', _description: 'Direct brain communication', _price: '$19, _999/month', _icon: '💻'},
        {_name: 'View All Emerging Tech', _href: '/services?category=Emerging%20Technology', _description: 'Explore future solutions', _icon: '🚀'}
      ]
    },
<<<<<<< HEAD
    {
      name: 'Business Solutions',
      href: '/services?category=Business%20Operations',
      description: '150+ Business Tools',
      icon: <Target className=&quot;w-5 h-5&quot; />,
      color: 'from-orange-500 to-red-600',
      children: [
=======
    {_name: 'Business Solutions', _href: '/services?category=Business%20Operations', _description: '150+ Business Tools', _icon: <Target className="w-5 h-5" />, _color: 'from-orange-500 to-red-600', _children: [
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        { 
          name: 'Smart Inventory Manager', _href: '/services/smart-inventory-manager', _description: 'AI-powered inventory optimization', _price: '$199/month', _icon: '📦'},
        {_name: 'Customer Success Automation', _href: '/services/customer-success-automation', _description: 'Automated customer retention', _price: '$399/month', _icon: '🎯'},
        {_name: 'AI Sales Coach', _href: '/services/ai-sales-coach', _description: 'Intelligent sales training', _price: '$249/month', _icon: '📞'},
        {_name: 'Smart HR Assistant', _href: '/services/smart-hr-assistant', _description: 'AI-powered HR automation', _price: '$349/month', _icon: '👥'},
        {_name: 'View All Business Solutions', _href: '/services?category=Business%20Operations', _description: 'Explore business tools', _icon: '🚀'}
      ]
    },
<<<<<<< HEAD
    {
      name: 'Cybersecurity',
      href: '/services?category=Cybersecurity',
      description: '75+ Security Solutions',
      icon: <Shield className=&quot;w-5 h-5&quot; />,
      color: 'from-red-500 to-pink-600',
      children: [
=======
    {_name: 'Cybersecurity', _href: '/services?category=Cybersecurity', _description: '75+ Security Solutions', _icon: <Shield className="w-5 h-5" />, _color: 'from-red-500 to-pink-600', _children: [
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        { 
          name: 'Cyber-Physical Security', _href: '/services/cyber-physical-security', _description: 'Digital + Physical protection', _price: '$6, _999/month', _icon: '🛡️'},
        {_name: 'Quantum Internet Security', _href: '/services/quantum-internet-security', _description: 'Unhackable quantum security', _price: '$7, _999/month', _icon: '🔐'},
        {_name: 'Zero Trust Architecture', _href: '/services/zero-trust-network-architecture', _description: 'Continuous verification', _price: '$4, _999/month', _icon: '✅'},
        {_name: 'AI Threat Detection', _href: '/services/ai-threat-detection', _description: 'Intelligent security monitoring', _price: '$3, _999/month', _icon: '👁️'},
        {_name: 'View All Security Solutions', _href: '/services?category=Cybersecurity', _description: 'Explore security tools', _icon: '🚀'}
      ]
    },
<<<<<<< HEAD
    {
      name: 'Enterprise IT',
      href: '/services?category=Enterprise%20IT',
      description: '100+ Enterprise Solutions',
      icon: <Building className=&quot;w-5 h-5&quot; />,
      color: 'from-indigo-500 to-purple-600',
      children: [
=======
    {_name: 'Enterprise IT', _href: '/services?category=Enterprise%20IT', _description: '100+ Enterprise Solutions', _icon: <Building className="w-5 h-5" />, _color: 'from-indigo-500 to-purple-600', _children: [
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        { 
          name: 'Cloud Platform', _href: '/cloud-platform', _description: 'Scalable cloud infrastructure', _price: 'Custom', _icon: '☁️'},
        {_name: 'Edge Computing Orchestration', _href: '/services/edge-computing-orchestration', _description: 'Distributed edge management', _price: '$3, _499/month', _icon: '🌐'},
        {_name: 'AI Operations Center', _href: '/services/enterprise-ai-operations-center', _description: 'Centralized AI management', _price: '$8, _999/month', _icon: '🏢'},
        {_name: 'Infrastructure Drift Detection', _href: '/services/infrastructure-drift-detector', _description: 'Automated infrastructure monitoring', _price: '$2, _999/month', _icon: '🔍'},
        {_name: 'View All Enterprise Solutions', _href: '/services?category=Enterprise%20IT', _description: 'Explore enterprise tools', _icon: '🚀'}
      ]
    }
  ],

<<<<<<< HEAD
  const contactInfo = {
    mobile: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  },

  const quickLinks = [
<<<<<<< HEAD
    { name: 'Pricing', href: '/pricing', icon: <CreditCard className="w-4 h-4" /> },
    { name: 'Case Studies', href: '/case-studies', icon: <FileText className="w-4 h-4" /> },
    { name: 'Support', href: '/support', icon: <MessageSquare className="w-4 h-4" /> },
    { name: 'Contact', href: '/contact', icon: <Mail className="w-4 h-4" /> }
  ],
=======
    { name: 'Pricing', href: '/pricing', icon: <CreditCard className=&quot;w-4 h-4&quot; /> },
    { name: 'Case Studies', href: '/case-studies', icon: <FileText className=&quot;w-4 h-4&quot; /> },
    { name: 'Support', href: '/support', icon: <MessageSquare className=&quot;w-4 h-4&quot; /> },
    { name: 'Contact', href: '/contact', icon: <Mail className=&quot;w-4 h-4&quot; /> }
=======
  const _contactInfo = {_mobile: '+1 302 464 0950', _email: 'kleber@ziontechgroup.com', _address: '364 E Main St STE 1008 Middletown DE 19709', _website: 'https://ziontechgroup.com'};

  const _quickLinks = [
    {_name: 'Pricing', _href: '/pricing', _icon: <CreditCard className="w-4 h-4" />},
    {_name: 'Case Studies', _href: '/case-studies', _icon: <FileText className="w-4 h-4" />},
    {_name: 'Support', _href: '/support', _icon: <MessageSquare className="w-4 h-4" />},
    {_name: 'Contact', _href: '/contact', _icon: <Mail className="w-4 h-4" />}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  ];
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7

  return (_<header className={_`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-gray-900/95 backdrop-blur-xl border-b border-cyan-500/30 shadow-2xl shadow-cyan-500/20' 
<<<<<<< HEAD
        : 'bg-transparent'
    }`}>
      {/* Animated Background */}
      <div className=&quot;absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 animate-pulse&quot; />
      
      <div className=&quot;relative container mx-auto px-4&quot;>
        <div className=&quot;flex items-center justify-between h-20&quot;>
          {/* Logo */}
          <Link href=&quot;/&quot; className=&quot;flex items-center space-x-3 group relative z-10&quot;>
            <motion.div 
              className=&quot;w-12 h-12 bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg shadow-cyan-500/30&quot;
              whileHover={{ rotate: 5, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
=======
        : 'bg-transparent'}`}>
      {_/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 animate-pulse" />
      
      <div className="relative container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {_/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group relative z-10">
            <motion.div 
              className="w-12 h-12 bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg shadow-cyan-500/30"
              whileHover={_{ rotate: 5, _scale: 1.1}}
              whileTap={_{ scale: 0.95}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            >
              <Zap className=&quot;w-7 h-7 text-white&quot; />
            </motion.div>
            <div className=&quot;hidden sm:block&quot;>
              <div className=&quot;text-2xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:via-purple-300 group-hover:to-pink-300 transition-all duration-300&quot;>
                Zion Tech Group
              </div>
              <div className=&quot;text-xs text-gray-400 group-hover:text-cyan-300 transition-colors&quot;>
                Revolutionary Technology Solutions
              </div>
            </div>
          </a>

<<<<<<< HEAD
          {/* Desktop Navigation */}
          <nav className=&quot;hidden xl:flex items-center space-x-1&quot;>
            {navigation.map((item) => (
              <div key={item.name} className=&quot;relative group&quot;>
                <motion.button
                  className=&quot;flex items-center space-x-2 px-4 py-3 text-gray-300 hover:text-white transition-all duration-300 rounded-xl hover:bg-gray-800/50 hover:shadow-lg hover:shadow-cyan-500/20&quot;
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
=======
          {_/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-1">
            {_navigation.map((item) => (_<div key={item.name} className="relative group">
                <motion.button
                  className="flex items-center space-x-2 px-4 py-3 text-gray-300 hover:text-white transition-all duration-300 rounded-xl hover:bg-gray-800/50 hover:shadow-lg hover:shadow-cyan-500/20"
                  onMouseEnter={_() => setActiveDropdown(item.name)}
                  onMouseLeave={_() => setActiveDropdown(null)}
                  whileHover={_{ y: -2}}
                  whileTap={_{ scale: 0.95}}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                >
                  <div className={_`p-2 rounded-lg bg-gradient-to-br ${item.color} shadow-lg`}>
                    {_item.icon}
                  </div>
<<<<<<< HEAD
                  <span className=&quot;font-medium&quot;>{item.name}</span>
                  <ChevronDown className=&quot;w-4 h-4 group-hover:rotate-180 transition-transform duration-300&quot; />
=======
                  <span className="font-medium">{_item.name}</span>
                  <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                </motion.button>

                {_/* Dropdown Menu */}
                <AnimatePresence>
<<<<<<< HEAD
                  {activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className=&quot;absolute top-full left-0 mt-2 w-96 bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl shadow-cyan-500/20 overflow-hidden&quot;
                    >
                      <div className=&quot;p-4&quot;>
                        <div className=&quot;flex items-center space-x-3 mb-4&quot;>
                          <div className={`p-3 rounded-xl bg-gradient-to-br ${item.color} shadow-lg`}>
                            {item.icon}
                          </div>
                          <div>
                            <h3 className=&quot;text-lg font-semibold text-white&quot;>{item.name}</h3>
                            <p className=&quot;text-sm text-gray-400&quot;>{item.description}</p>
                          </div>
                        </div>
                        
                        <div className=&quot;space-y-2&quot;>
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className=&quot;flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-800/50 transition-all duration-200 group&quot;
                            >
                              <span className=&quot;text-2xl&quot;>{child.icon}</span>
                              <div className=&quot;flex-1&quot;>
                                <div className=&quot;font-medium text-white group-hover:text-cyan-300 transition-colors&quot;>
                                  {child.name}
                                </div>
                                <div className=&quot;text-sm text-gray-400&quot;>{child.description}</div>
                              </div>
                              <div className=&quot;text-right&quot;>
                                <div className=&quot;text-sm font-medium text-cyan-400&quot;>{child.price}</div>
                                <ChevronRight className=&quot;w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors&quot; />
=======
                  {_activeDropdown === item.name && (_<motion.div
                      initial={{ opacity: 0, _y: 10, _scale: 0.95}}
                      animate={_{ opacity: 1, _y: 0, _scale: 1}}
                      exit={_{ opacity: 0, _y: 10, _scale: 0.95}}
                      transition={_{ duration: 0.2}}
                      className="absolute top-full left-0 mt-2 w-96 bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl shadow-2xl shadow-cyan-500/20 overflow-hidden"
                    >
                      <div className="p-4">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className={_`p-3 rounded-xl bg-gradient-to-br ${item.color} shadow-lg`}>
                            {_item.icon}
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-white">{_item.name}</h3>
                            <p className="text-sm text-gray-400">{_item.description}</p>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          {_item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={_child.href}
                              className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-800/50 transition-all duration-200 group"
                            >
                              <span className="text-2xl">{_child.icon}</span>
                              <div className="flex-1">
                                <div className="font-medium text-white group-hover:text-cyan-300 transition-colors">
                                  {_child.name}
                                </div>
                                <div className="text-sm text-gray-400">{_child.description}</div>
                              </div>
                              <div className="text-right">
                                <div className="text-sm font-medium text-cyan-400">{_child.price}</div>
                                <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

<<<<<<< HEAD
          {/* Right Side */}
          <div className=&quot;flex items-center space-x-4&quot;>
            {/* Contact Info */}
            <div className=&quot;hidden lg:flex items-center space-x-4 text-sm&quot;>
              <a 
                href={`tel:${contactInfo.mobile}`}
                className=&quot;flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors&quot;
              >
                <Phone className=&quot;w-4 h-4&quot; />
                <span>{contactInfo.mobile}</span>
              </a>
              <a 
                href={`mailto:${contactInfo.email}`}
                className=&quot;flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors&quot;
              >
                <Mail className=&quot;w-4 h-4&quot; />
                <span>{contactInfo.email}</span>
=======
          {_/* Right Side */}
          <div className="flex items-center space-x-4">
            {_/* Contact Info */}
            <div className="hidden lg:flex items-center space-x-4 text-sm">
              <a 
                href={_`tel:${contactInfo.mobile}`}
                className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>{_contactInfo.mobile}</span>
              </a>
              <a 
                href={_`mailto:${contactInfo.email}`}
                className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>{_contactInfo.email}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
              </a>
            </div>

            {_/* CTA Button */}
            <motion.div
              whileHover={_{ scale: 1.05}}
              whileTap={_{ scale: 0.95}}
            >
              <Link
                href=&quot;/contact&quot;
                className=&quot;hidden lg:inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-xl shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-300&quot;
              >
                <Rocket className=&quot;w-4 h-4&quot; />
                <span>Get Started</span>
              </a>
            </motion.div>

            {_/* Mobile Menu Button */}
            <button
<<<<<<< HEAD
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className=&quot;xl:hidden p-2 text-gray-300 hover:text-white transition-colors&quot;
            >
              {isMenuOpen ? <X className=&quot;w-6 h-6&quot; /> : <Menu className=&quot;w-6 h-6&quot; />}
=======
              onClick={_() => setIsMenuOpen(!isMenuOpen)}
              className="xl:hidden p-2 text-gray-300 hover:text-white transition-colors"
            >
              {_isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
            </button>
          </div>
        </div>
      </div>

      {_/* Mobile Menu */}
      <AnimatePresence>
<<<<<<< HEAD
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className=&quot;xl:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-700/50&quot;
          >
            <div className=&quot;container mx-auto px-4 py-6&quot;>
              <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-6&quot;>
                {/* Services */}
                <div>
                  <h3 className=&quot;text-lg font-semibold text-white mb-4&quot;>Services</h3>
                  <div className=&quot;space-y-3&quot;>
                    {navigation.map((item) => (
                      <div key={item.name}>
                        <Link
                          href={item.href}
                          className=&quot;flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-800/50 transition-all duration-200&quot;
=======
        {_isMenuOpen && (_<motion.div
            initial={{ opacity: 0, _height: 0}}
            animate={_{ opacity: 1, _height: 'auto'}}
            exit={_{ opacity: 0, _height: 0}}
            transition={_{ duration: 0.3}}
            className="xl:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-700/50"
          >
            <div className="container mx-auto px-4 py-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {_/* Services */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
                  <div className="space-y-3">
                    {_navigation.map((item) => (
                      <div key={item.name}>
                        <Link
                          href={_item.href}
                          className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-800/50 transition-all duration-200"
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                        >
                          <div className={_`p-2 rounded-lg bg-gradient-to-br ${item.color}`}>
                            {_item.icon}
                          </div>
                          <div>
<<<<<<< HEAD
                            <div className=&quot;font-medium text-white&quot;>{item.name}</div>
                            <div className=&quot;text-sm text-gray-400&quot;>{item.description}</div>
=======
                            <div className="font-medium text-white">{_item.name}</div>
                            <div className="text-sm text-gray-400">{_item.description}</div>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                          </div>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>

<<<<<<< HEAD
                {/* Quick Links & Contact */}
                <div className=&quot;space-y-6&quot;>
                  <div>
                    <h3 className=&quot;text-lg font-semibold text-white mb-4&quot;>Quick Links</h3>
                    <div className=&quot;space-y-2&quot;>
                      {quickLinks.map((link) => (
                        <Link
                          key={link.name}
                          href={link.href}
                          className=&quot;flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-800/50 transition-all duration-200&quot;
                        >
                          {link.icon}
                          <span className=&quot;text-white&quot;>{link.name}</span>
                        </a>
=======
                {_/* Quick Links & Contact */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                    <div className="space-y-2">
                      {_quickLinks.map(_(link) => (
                        <Link
                          key={link.name}
                          href={_link.href}
                          className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-800/50 transition-all duration-200"
                        >
                          {_link.icon}
                          <span className="text-white">{_link.name}</span>
                        </Link>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className=&quot;text-lg font-semibold text-white mb-4&quot;>Contact Info</h3>
                    <div className=&quot;space-y-3&quot;>
                      <a 
<<<<<<< HEAD
                        href={`tel:${contactInfo.mobile}`}
                        className=&quot;flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-800/50 transition-all duration-200&quot;
                      >
                        <Phone className=&quot;w-4 h-4 text-cyan-400&quot; />
                        <span className=&quot;text-white&quot;>{contactInfo.mobile}</span>
                      </a>
                      <a 
                        href={`mailto:${contactInfo.email}`}
                        className=&quot;flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-800/50 transition-all duration-200&quot;
                      >
                        <Mail className=&quot;w-4 h-4 text-cyan-400&quot; />
                        <span className=&quot;text-white&quot;>{contactInfo.email}</span>
                      </a>
                      <div className=&quot;flex items-center space-x-3 p-3 rounded-xl&quot;>
                        <MapPin className=&quot;w-4 h-4 text-cyan-400&quot; />
                        <span className=&quot;text-white text-sm&quot;>{contactInfo.address}</span>
=======
                        href={_`tel:${contactInfo.mobile}`}
                        className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-800/50 transition-all duration-200"
                      >
                        <Phone className="w-4 h-4 text-cyan-400" />
                        <span className="text-white">{_contactInfo.mobile}</span>
                      </a>
                      <a 
                        href={_`mailto:${contactInfo.email}`}
                        className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-800/50 transition-all duration-200"
                      >
                        <Mail className="w-4 h-4 text-cyan-400" />
                        <span className="text-white">{_contactInfo.email}</span>
                      </a>
                      <div className="flex items-center space-x-3 p-3 rounded-xl">
                        <MapPin className="w-4 h-4 text-cyan-400" />
                        <span className="text-white text-sm">{_contactInfo.address}</span>
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                      </div>
                    </div>
                  </div>
                </div>
              </div>

<<<<<<< HEAD
              {/* Mobile CTA */}
              <div className=&quot;mt-6 pt-6 border-t border-gray-700/50&quot;>
=======
              {_/* Mobile CTA */}
              <div className="mt-6 pt-6 border-t border-gray-700/50">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
                <Link
                  href=&quot;/contact&quot;
                  className=&quot;inline-flex items-center justify-center w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium rounded-xl shadow-lg shadow-cyan-500/30 transition-all duration-300&quot;
                >
                  <Rocket className=&quot;w-4 h-4 mr-2&quot; />
                  Get Started Today
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
},

export default UltraFuturisticNavigation2027,
