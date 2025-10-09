'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  Brain, 
  Cloud, 
  Shield, 
  Code, 
  BarChart, 
  Users, 
  Zap, 
  ArrowRight, 
  Sparkles, 
  Cpu, 
  Target, 
  Globe, 
  Database, 
  Smartphone, 
  Lock, 
  TrendingUp, 
  Star, 
  Settings, 
  Calendar, 
  CheckSquare, 
  FileText,
  Mic,
  Video,
  DollarSign,
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
  Youtube,
  Hash
} from 'lucide-react';

const EnhancedNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aiServicesOpen, setAiServicesOpen] = useState(false);
  const [itServicesOpen, setItServicesOpen] = useState(false);
  const [microSaasOpen, setMicroSaasOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const closeAllMenus = () => {
    setServicesOpen(false);
    setAiServicesOpen(false);
    setItServicesOpen(false);
    setMicroSaasOpen(false);
    setIsOpen(false);
    setSidebarOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      closeAllMenus();
    }
  };

  const aiServices = [
    { name: 'AI Voice Assistant', href: '/ai-voice-assistant', icon: Mic, description: 'Intelligent voice solutions', price: '$199/mo' },
    { name: 'AI Social Media Manager', href: '/ai-social-media-manager', icon: Instagram, description: 'Automated social media', price: '$99/mo' },
    { name: 'AI Financial Planner', href: '/ai-financial-planner', icon: DollarSign, description: 'Smart financial planning', price: '$49/mo' },
    { name: 'AI Code Generator', href: '/ai-code-generator', icon: Code, description: 'Generate code 10x faster', price: '$79/mo' },
    { name: 'AI Video Creator', href: '/ai-video-creator', icon: Video, description: 'Create videos with AI', price: '$99/mo' },
    { name: 'AI Writing Assistant', href: '/ai-writing-assistant', icon: FileText, description: 'AI content creation', price: '$29/mo' },
    { name: 'AI Marketing', href: '/ai-marketing', icon: Target, description: 'AI-powered marketing', price: '$199/mo' },
    { name: 'AI Healthcare', href: '/ai-healthcare', icon: Shield, description: 'Medical AI solutions', price: '$1,999/mo' },
    { name: 'AI Fintech', href: '/ai-fintech', icon: TrendingUp, description: 'Financial AI', price: '$1,499/mo' },
    { name: 'AI Automation', href: '/ai-automation', icon: Zap, description: 'Process automation', price: '$399/mo' }
  ];

  const itServices = [
    { name: 'IT Infrastructure', href: '/it-infrastructure', icon: Cloud, description: 'Cloud & Infrastructure', price: 'Custom' },
    { name: 'DevOps & CI/CD', href: '/devops', icon: Settings, description: 'Development Operations', price: 'Custom' },
    { name: 'Database Services', href: '/database', icon: Database, description: 'Data Management', price: 'Custom' },
    { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield, description: 'Security Solutions', price: 'Custom' },
    { name: 'Cloud Services', href: '/cloud-services', icon: Cloud, description: 'Cloud Solutions', price: 'Custom' },
    { name: 'Networking', href: '/networking', icon: Globe, description: 'Network Solutions', price: 'Custom' },
    { name: 'IT Consulting', href: '/it-consulting', icon: Users, description: 'IT Strategy', price: 'Custom' },
    { name: 'Managed IT Services', href: '/managed-it', icon: Settings, description: '24/7 IT Support', price: 'Custom' }
  ];

  const microSaasServices = [
    { name: 'AI Voice Assistant', href: '/ai-voice-assistant', icon: Mic, description: 'Voice solutions', price: '$199/mo' },
    { name: 'AI Social Media Manager', href: '/ai-social-media-manager', icon: Instagram, description: 'Social media automation', price: '$99/mo' },
    { name: 'AI Financial Planner', href: '/ai-financial-planner', icon: DollarSign, description: 'Financial planning', price: '$49/mo' },
    { name: 'AI Code Generator', href: '/ai-code-generator', icon: Code, description: 'Code generation', price: '$79/mo' },
    { name: 'AI Video Creator', href: '/ai-video-creator', icon: Video, description: 'Video creation', price: '$99/mo' },
    { name: 'AI Writing Assistant', href: '/ai-writing-assistant', icon: FileText, description: 'Content creation', price: '$29/mo' },
    { name: 'Smart Analytics', href: '/smart-analytics', icon: BarChart, description: 'Business analytics', price: '$49/mo' },
    { name: 'AI Scheduler', href: '/ai-scheduler', icon: Calendar, description: 'Smart scheduling', price: '$39/mo' },
    { name: 'Expense Tracker', href: '/expense-tracker', icon: DollarSign, description: 'Financial tracking', price: '$19/mo' },
    { name: 'Task Manager Pro', href: '/task-manager-pro', icon: CheckSquare, description: 'Task management', price: '$29/mo' }
  ];

  const emergingTech = [
    { name: 'Quantum Computing', href: '/quantum-computing', icon: Cpu, description: 'Quantum solutions', price: 'Custom' },
    { name: 'Robotics', href: '/robotics', icon: Brain, description: 'Intelligent robotics', price: 'Custom' },
    { name: 'IoT & Edge Computing', href: '/iot-edge-computing', icon: Globe, description: 'Connected devices', price: 'Custom' },
    { name: 'Blockchain & Web3', href: '/blockchain-web3', icon: Hash, description: 'Decentralized solutions', price: 'Custom' },
    { name: 'Business Intelligence', href: '/business-intelligence', icon: BarChart, description: 'Data insights', price: 'Custom' },
    { name: 'Autonomous Systems', href: '/autonomous-systems', icon: Zap, description: 'Self-managing systems', price: 'Custom' }
  ];

  const contactInfo = {
    phone: '+1 (302) 464-0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008, Middletown, DE 19709'
  };

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg cyber-glow-effect' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2" onClick={closeAllMenus}>
            <motion.div 
              className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center cyber-pulse"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.2 }}
            >
              <Zap className="w-5 h-5 text-white" />
            </motion.div>
            <span className="text-white font-bold text-xl neon-text holographic-text-enhanced">Zion Tech Group</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Home
            </Link>
            
            {/* AI Services Dropdown */}
            <div className="relative group">
              <button
                onClick={() => setAiServicesOpen(!aiServicesOpen)}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
              >
                <Brain className="w-4 h-4" />
                <span>AI Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${aiServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {aiServicesOpen && (
                  <motion.div
                    className="absolute top-full left-0 mt-2 w-96 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-cyan-500/20 p-4 cyber-card"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="grid grid-cols-1 gap-2">
                      {aiServices.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-colors duration-300 group"
                          onClick={closeAllMenus}
                        >
                          <service.icon className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300" />
                          <div className="flex-1">
                            <div className="font-medium text-white group-hover:text-cyan-300">{service.name}</div>
                            <div className="text-xs text-gray-400">{service.description}</div>
                          </div>
                          <div className="text-cyan-400 text-sm font-semibold">{service.price}</div>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 ml-auto" />
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* IT Services Dropdown */}
            <div className="relative group">
              <button
                onClick={() => setItServicesOpen(!itServicesOpen)}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
              >
                <Cloud className="w-4 h-4" />
                <span>IT Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${itServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {itServicesOpen && (
                  <motion.div
                    className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-cyan-500/20 p-4 cyber-card"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="grid grid-cols-1 gap-2">
                      {itServices.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-colors duration-300 group"
                          onClick={closeAllMenus}
                        >
                          <service.icon className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300" />
                          <div className="flex-1">
                            <div className="font-medium text-white group-hover:text-cyan-300">{service.name}</div>
                            <div className="text-xs text-gray-400">{service.description}</div>
                          </div>
                          <div className="text-cyan-400 text-sm font-semibold">{service.price}</div>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 ml-auto" />
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Micro SAAS Dropdown */}
            <div className="relative group">
              <button
                onClick={() => setMicroSaasOpen(!microSaasOpen)}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
              >
                <Code className="w-4 h-4" />
                <span>Micro SAAS</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${microSaasOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {microSaasOpen && (
                  <motion.div
                    className="absolute top-full left-0 mt-2 w-96 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-cyan-500/20 p-4 cyber-card"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="grid grid-cols-1 gap-2">
                      {microSaasServices.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-colors duration-300 group"
                          onClick={closeAllMenus}
                        >
                          <service.icon className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300" />
                          <div className="flex-1">
                            <div className="font-medium text-white group-hover:text-cyan-300">{service.name}</div>
                            <div className="text-xs text-gray-400">{service.description}</div>
                          </div>
                          <div className="text-cyan-400 text-sm font-semibold">{service.price}</div>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 ml-auto" />
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Emerging Technologies Dropdown */}
            <div className="relative group">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
              >
                <Sparkles className="w-4 h-4" />
                <span>Emerging Tech</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md rounded-lg shadow-xl border border-cyan-500/20 p-4 cyber-card"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="grid grid-cols-1 gap-2">
                      {emergingTech.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-colors duration-300 group"
                          onClick={closeAllMenus}
                        >
                          <service.icon className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300" />
                          <div className="flex-1">
                            <div className="font-medium text-white group-hover:text-cyan-300">{service.name}</div>
                            <div className="text-xs text-gray-400">{service.description}</div>
                          </div>
                          <div className="text-cyan-400 text-sm font-semibold">{service.price}</div>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 ml-auto" />
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/about" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              About
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Contact
            </Link>
            <Link href="/blog" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium">
              Blog
            </Link>
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <motion.a
              href="tel:+13024640950"
              className="cyber-button inline-flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-4 h-4" />
              <span>(302) 464-0950</span>
            </motion.a>
          </div>

          {/* Mobile Menu Buttons */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={() => setSidebarOpen(true)}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 p-2"
              aria-label="Open sidebar"
            >
              <Menu className="w-5 h-5" />
            </button>
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="lg:hidden mt-4 pb-4 border-t border-cyan-500/20"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="pt-4 space-y-4">
                <Link href="/" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
                  Home
                </Link>
                
                {/* Mobile AI Services */}
                <div>
                  <button
                    onClick={() => setAiServicesOpen(!aiServicesOpen)}
                    className="flex items-center justify-between w-full text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                  >
                    <span className="flex items-center space-x-2">
                      <Brain className="w-4 h-4" />
                      <span>AI Services</span>
                    </span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${aiServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {aiServicesOpen && (
                      <motion.div
                        className="mt-2 ml-4 space-y-2"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                      >
                        {aiServices.slice(0, 6).map((service) => (
                          <Link
                            key={service.name}
                            href={service.href}
                            className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                            onClick={closeAllMenus}
                          >
                            {service.name} - {service.price}
                          </Link>
                        ))}
                        <Link
                          href="/ai-services"
                          className="block text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
                          onClick={closeAllMenus}
                        >
                          View All AI Services →
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mobile IT Services */}
                <div>
                  <button
                    onClick={() => setItServicesOpen(!itServicesOpen)}
                    className="flex items-center justify-between w-full text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                  >
                    <span className="flex items-center space-x-2">
                      <Cloud className="w-4 h-4" />
                      <span>IT Services</span>
                    </span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${itServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {itServicesOpen && (
                      <motion.div
                        className="ml-4 mt-2 space-y-2"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                      >
                        {itServices.map((service) => (
                          <Link
                            key={service.name}
                            href={service.href}
                            className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                            onClick={closeAllMenus}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mobile Micro SAAS */}
                <div>
                  <button
                    onClick={() => setMicroSaasOpen(!microSaasOpen)}
                    className="flex items-center justify-between w-full text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium"
                  >
                    <span className="flex items-center space-x-2">
                      <Code className="w-4 h-4" />
                      <span>Micro SAAS</span>
                    </span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${microSaasOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {microSaasOpen && (
                      <motion.div
                        className="mt-2 ml-4 space-y-2"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                      >
                        {microSaasServices.slice(0, 6).map((service) => (
                          <Link
                            key={service.name}
                            href={service.href}
                            className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                            onClick={closeAllMenus}
                          >
                            {service.name} - {service.price}
                          </Link>
                        ))}
                        <Link
                          href="/micro-saas"
                          className="block text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
                          onClick={closeAllMenus}
                        >
                          View All Micro SAAS →
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link href="/about" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
                  About
                </Link>
                <Link href="/contact" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
                  Contact
                </Link>
                <Link href="/blog" className="block text-gray-300 hover:text-cyan-400 transition-colors duration-300 font-medium" onClick={closeAllMenus}>
                  Blog
                </Link>

                {/* Mobile Contact Info */}
                <div className="pt-4 border-t border-cyan-500/20 space-y-2">
                  <a
                    href="tel:+13024640950"
                    className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
                  >
                    <Phone className="w-4 h-4" />
                    <span>(302) 464-0950</span>
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium"
                  >
                    <Mail className="w-4 h-4" />
                    <span>kleber@ziontechgroup.com</span>
                  </a>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">364 E Main St STE 1008, Middletown DE 19709</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default EnhancedNavigation;