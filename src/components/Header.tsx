import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
import Sidebar from './Sidebar';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Search, 
  Phone, 
  Mail, 
  MapPin,
  Brain,
  Users,
  Target,
  Shield,
  Zap,
  Building,
  Cpu,
  Globe,
  Rocket,
  Star,
  ArrowRight,
  Briefcase,
  Code,
  Database,
  Network,
  Cloud,
  Lock,
  BarChart3,
  Palette,
  Smartphone,
  Server
} from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
=======
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

      href: '/solutions',
      dropdown: [
        { name: 'Healthcare', href: '/solutions/healthcare', description: 'AI-powered healthcare solutions' },
        { name: 'Finance', href: '/solutions/finance', description: 'Financial technology innovations' },
        { name: 'Manufacturing', href: '/solutions/manufacturing', description: 'Smart manufacturing systems' },
        { name: 'Retail', href: '/solutions/retail', description: 'Digital retail transformation' }
      ]
    },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  const serviceCategories = [
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      description: 'Intelligent solutions powered by artificial intelligence',
      color: 'from-purple-500 to-pink-500',
      services: [
        { name: 'AI Autonomous Systems', path: '/services/ai-autonomous-systems', description: 'Advanced autonomous AI systems', icon: Brain },
        { name: 'AI Workflow Automation', path: '/services/ai-workflow-automation', description: 'Intelligent process automation', icon: Brain },
        { name: 'AI Customer Intelligence', path: '/services/ai-customer-intelligence', description: 'Customer behavior insights', icon: Users },
        { name: 'AI Predictive Analytics', path: '/services/ai-predictive-analytics', description: 'Future-focused analytics', icon: BarChart3 },
        { name: 'AI Research Assistant', path: '/ai-autonomous-research-assistant', description: 'AI-powered research automation', icon: Brain },
        { name: 'AI Business Manager', path: '/ai-autonomous-business-manager', description: 'Intelligent business management', icon: Brain },
        { name: 'AI Business Manager 2029', path: '/ai-autonomous-business-manager-2029', description: 'Future-ready business management', icon: Brain },
        { name: 'AI Business Platform', path: '/ai-autonomous-business-platform', description: 'Comprehensive business platform', icon: Brain },
        { name: 'AI Business Platform 2026', path: '/ai-autonomous-business-platform-2026', description: 'Next-gen business platform', icon: Brain },
        { name: 'AI Code Review', path: '/ai-autonomous-code-review', description: 'Intelligent code review automation', icon: Code },
        { name: 'AI Creative Director', path: '/ai-autonomous-creative-director', description: 'AI-powered creative content generation', icon: Palette },
        { name: 'AI Business Intelligence', path: '/services/ai-business-intelligence', description: 'Advanced analytics and insights', icon: BarChart3 },
        { name: 'AI Marketing Automation', path: '/services/ai-marketing-automation', description: 'Smart marketing optimization', icon: Target },
        { name: 'AI HR & Recruitment', path: '/services/ai-hr-recruitment', description: 'Intelligent talent management', icon: Users },
        { name: 'AI Legal Tech', path: '/services/ai-legal-tech', description: 'Automated legal processes', icon: Shield },
        { name: 'AI Healthcare Analytics', path: '/solutions/healthcare', description: 'Patient care optimization', icon: Heart }
        { name: 'AI Autonomous Systems', path: '/services/ai-autonomous-systems', description: 'Advanced autonomous AI systems' },
        { name: 'AI Research Assistant', path: '/ai-autonomous-research-assistant', description: 'AI-powered research automation' },
        { name: 'AI Business Intelligence', path: '/services/ai-business-intelligence', description: 'Advanced analytics and insights' },
        { name: 'AI Marketing Automation', path: '/services/ai-marketing-automation', description: 'Smart marketing optimization' },
        { name: 'AI HR & Recruitment', path: '/services/ai-hr-recruitment', description: 'Intelligent talent management' },
        { name: 'AI Legal Tech', path: '/services/ai-legal-tech', description: 'Automated legal processes' },
        { name: 'AI Healthcare Analytics', path: '/services/ai-healthcare-analytics', description: 'Patient care optimization' }
      ]
    },
    {
      title: 'Quantum Technology',
      icon: Brain,
      description: 'Next-generation quantum computing solutions',
      services: [
        { name: 'Quantum Neural Networks', path: '/quantum-neural-network-platform', description: 'Quantum-powered neural networks' },
        { name: 'Quantum Computing', path: '/services/quantum-technology', description: 'Quantum computing platforms' },
        { name: 'Quantum-Safe Security', path: '/services/quantum-security', description: 'Future-proof quantum security' }
      ]
    },
    {
      title: 'Business Operations',
      icon: Building,
      description: 'Streamlined business process automation',
      services: [
        { name: 'Autonomous Business Platform', path: '/autonomous-business-operations-platform', description: 'Self-operating business systems' },
        { name: 'AI Asset Management', path: '/ai-powered-it-asset-management', description: 'Intelligent IT asset management' },
        { name: 'Business Intelligence', path: '/services/ai-business-intelligence', description: 'Advanced business analytics' }
      ]
    },
    {
      title: 'Cybersecurity',
      icon: Shield,
      description: 'Comprehensive security and compliance solutions',
      services: [
        { name: 'Cybersecurity Services', path: '/services/cybersecurity', description: 'Complete security solutions' },
        { name: 'SOC2 Compliance Automation', path: '/soc2-compliance-automation', description: 'Automated compliance management' },
        { name: 'Security Assessment', path: '/services/security-assessment', description: 'Security audit and testing' },
        { name: 'Compliance & Audit', path: '/services/compliance-audit', description: 'Regulatory compliance support' },
        { name: 'Threat Detection', path: '/services/threat-detection', description: 'Real-time security monitoring' }
      ]
    },
    {
      title: 'Cloud & Infrastructure',
      icon: Cpu,
      description: 'Scalable cloud solutions and infrastructure management',
      services: [
        { name: 'Cloud DevOps', path: '/cloud-devops', description: 'Cloud development and operations' },
        { name: 'IT Infrastructure', path: '/services/it-infrastructure', description: 'Complete IT infrastructure solutions' },
        { name: '5G Enterprise Solutions', path: '/5g-enterprise-solutions', description: 'High-speed 5G connectivity' },
        { name: 'Cloud Migration', path: '/services/cloud-migration', description: 'Seamless cloud transition' },
        { name: 'Network Infrastructure', path: '/services/network-infrastructure', description: 'Robust network solutions' },
        { name: 'Managed IT Services', path: '/services/managed-it-services', description: '24/7 IT support' },
        { name: 'DevOps Automation', path: '/services/devops-automation', description: 'Streamlined development' }
      ]
    },
    {
      title: 'Emerging Technologies',
      icon: Rocket,
      description: 'Cutting-edge solutions for tomorrow\'s challenges',
      services: [
        { name: 'Blockchain Solutions', path: '/services/blockchain-solutions', description: 'Decentralized applications' },
        { name: 'IoT Platforms', path: '/services/iot-platforms', description: 'Connected device management' },
        { name: 'Quantum Computing', path: '/services/quantum-computing', description: 'Next-generation computing' },
        { name: 'AR/VR Solutions', path: '/services/ar-vr-solutions', description: 'Immersive experiences' }
      ]
    },
    {
      title: 'Industry Solutions',
      icon: Building,
      description: 'Tailored solutions for specific industries',
      services: [
      ]
    },
    {
      title: 'AI Autonomous Systems',
      icon: Brain,
      description: 'Self-operating AI systems for business automation',
      color: 'from-purple-500 to-pink-500',
      services: [
        { name: 'AI Autonomous Data', path: '/ai-autonomous-data', description: 'Intelligent data management', icon: Database },
        { name: 'AI Autonomous Decision Engine', path: '/ai-autonomous-decision-engine', description: 'Autonomous decision making', icon: Target },
        { name: 'AI Autonomous Research', path: '/ai-autonomous-research-assistant', description: 'AI-powered research automation', icon: Search },
        { name: 'AI Autonomous Business Manager', path: '/ai-autonomous-business-manager', description: 'Intelligent business management', icon: Building },
        { name: 'AI Autonomous Business Platform', path: '/ai-autonomous-business-platform', description: 'Comprehensive business platform', icon: Building },
        { name: 'AI Autonomous Code Review', path: '/ai-autonomous-code-review', description: 'Intelligent code review automation', icon: Code },
        { name: 'AI Autonomous Creative Director', path: '/ai-autonomous-creative-director', description: 'AI-powered creative content generation', icon: Palette }
      ]
    },
    {
      title: 'Infrastructure & Cloud',
      icon: Cloud,
      description: 'Scalable and secure infrastructure solutions',
      color: 'from-blue-500 to-cyan-500',
      services: [
        { name: 'Cloud Infrastructure', path: '/services/cloud-infrastructure', description: 'Scalable cloud solutions', icon: Cloud },
        { name: 'DevOps & Automation', path: '/services/devops-automation', description: 'Streamlined development processes', icon: Cpu },
        { name: 'Network Security', path: '/services/network-security', description: 'Comprehensive network protection', icon: Shield },
        { name: 'Data Center Solutions', path: '/services/data-center', description: 'Enterprise data center services', icon: Database },
        { name: 'Edge Computing', path: '/services/edge-computing', description: 'Distributed computing solutions', icon: Network }
      ]
    },
    {
      title: 'Cybersecurity & Compliance',
      icon: Shield,
      description: 'Advanced security and compliance solutions',
      color: 'from-red-500 to-orange-500',
      services: [
        { name: 'Threat Detection', path: '/services/threat-detection', description: 'Advanced threat intelligence', icon: Shield },
        { name: 'Compliance Automation', path: '/soc2-compliance-automation', description: 'Automated compliance management', icon: Lock },
        { name: 'Zero Trust Security', path: '/zero-trust-network-architecture', description: 'Modern security architecture', icon: Shield },
        { name: 'Security Analytics', path: '/services/security-analytics', description: 'Security intelligence platform', icon: BarChart3 }
      ]
    }
  ];

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

        { name: 'Healthcare Technology', path: '/solutions/healthcare', description: 'Medical innovation' },
        { name: 'Financial Services', path: '/solutions/financial', description: 'Fintech solutions' },
        { name: 'Manufacturing Intelligence', path: '/solutions/manufacturing', description: 'Smart manufacturing' },
        { name: 'Retail Technology', path: '/solutions/retail', description: 'Digital retail transformation' }
      ]
    }
  ];

  const solutionCategories = [
    {
      title: 'Enterprise Solutions',
      icon: Building,
      description: 'Large-scale business transformation',
      solutions: [
        { name: 'Digital Transformation', path: '/digital-transformation', description: 'Complete business modernization' },
        { name: 'Enterprise AI', path: '/solutions/enterprise', description: 'AI-powered enterprise solutions' },
        { name: 'Data Analytics', path: '/services/data-analytics', description: 'Business intelligence platform' }
      ]
    },
    {
      title: 'SMB Solutions',
      icon: Users,
      description: 'Scalable solutions for growing businesses',
      solutions: [
        { name: 'Micro SAAS', path: '/services/micro-saas-solutions', description: 'Custom software solutions' },
        { name: 'Cloud Migration', path: '/cloud-devops', description: 'Affordable cloud solutions' },
        { name: 'IT Support', path: '/services/it-support', description: 'Managed IT services' }
      ]
    },
    {
      title: 'Specialized Solutions',
      icon: Target,
      description: 'Industry-specific expertise',
      solutions: [
        { name: 'Healthcare Solutions', path: '/solutions/healthcare', description: 'Medical technology innovation' },
        { name: 'Financial Solutions', path: '/solutions/financial', description: 'Fintech and banking solutions' },
        { name: 'Manufacturing Solutions', path: '/solutions/manufacturing', description: 'Industry 4.0 transformation' },
        { name: 'Retail Solutions', path: '/solutions/retail', description: 'Digital commerce solutions' },
        { name: 'Government Solutions', path: '/solutions/government', description: 'Public sector technology' }
      ]
    }
  ];

  const toggleDropdown = (category: string) => {
    setActiveDropdown(activeDropdown === category ? null : category);
  };

=======
  const closeDropdowns = () => {
    setActiveDropdown(null);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Handle search logic here
      console.log('Searching for:', searchQuery);
=======
  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  const services = [
    { name: 'AI Solutions', path: '/services/ai', description: 'Machine learning and AI solutions' },
    { name: 'Cloud & DevOps', path: '/services/cloud', description: 'Cloud infrastructure and automation' },
    { name: 'Cybersecurity', path: '/services/cybersecurity', description: 'Security and threat protection' },
    { name: 'IT Infrastructure', path: '/services/infrastructure', description: 'Infrastructure management' },
    { name: 'Digital Transformation', path: '/services/transformation', description: 'Business transformation' },
    { name: 'Consulting', path: '/services/consulting', description: 'Technology consulting' }
  ];

  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1
    }
  };

  const menuVariants = {
    hidden: { opacity: 0, x: -300 },
    visible: { 
      opacity: 1, 
      x: 0
    },
    exit: { 
      opacity: 0, 
      x: -300
    }
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -20, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1
    },
    exit: { 
      opacity: 0, 
      y: -20, 
      scale: 0.95
    }
  };

  return (
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`text-white hover:text-zion-cyan transition-colors py-2 ${
                      location.pathname === item.href ? 'text-zion-cyan' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </button>
              
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-lg border border-white/20 rounded-lg shadow-xl"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
=======
    <motion.header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-900/95 backdrop-blur-lg border-b border-white/10 shadow-lg' 
          : 'bg-slate-900/80 backdrop-blur-md'
      }`}
      role="banner"
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              to="/" 
              className="flex items-center group"
              aria-label="Zion Tech Group - Home"
            >
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">ZT</span>
              </div>
              <span className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                Zion Tech Group
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav 
            className="hidden lg:flex items-center space-x-8"
            role="navigation"
            aria-label="Main navigation"
          >
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                to="/"
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                  isActive('/')
                    ? 'text-blue-400'
                    : 'text-gray-300 hover:text-white'
                }`}
                aria-current={isActive('/') ? 'page' : undefined}
              >
                Home
                {isActive('/') && (
                  <motion.span 
                    className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-blue-400 to-cyan-400"
                    layoutId="activeIndicator"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            </motion.div>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <motion.button
                className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center px-3 py-2 text-sm font-medium"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                Services
                <motion.svg 
                  className="ml-1 h-4 w-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  animate={{ rotate: isServicesOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </motion.button>
              
              {/* Services Dropdown Menu */}
              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-lg rounded-lg border border-white/20 shadow-xl"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <div className="p-4">
                      <div className="grid grid-cols-1 gap-2">
                        {services.map((service) => (
                          <motion.div
                            key={service.path}
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <Link
                              to={service.path}
                              className="flex items-start p-3 rounded-lg hover:bg-white/10 transition-colors duration-200"
                            >
                              <div className="flex-1">
                                <div className="text-white font-medium">{service.name}</div>
                                <div className="text-sm text-gray-400">{service.description}</div>
                              </div>
                              <svg className="h-4 w-4 text-gray-400 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                      <div className="mt-4 pt-4 border-t border-white/20">
                        <Link
                          to="/services"
                          className="block text-center text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200"
                        >
                          View All Services →
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                to="/about"
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                  isActive('/about')
                    ? 'text-blue-400'
                    : 'text-gray-300 hover:text-white'
                }`}
                aria-current={isActive('/about') ? 'page' : undefined}
              >
                About
                {isActive('/about') && (
                  <motion.span 
                    className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-blue-400 to-cyan-400"
                    layoutId="activeIndicator"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                to="/blog"
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                  isActive('/blog')
                    ? 'text-blue-400'
                    : 'text-gray-300 hover:text-white'
                }`}
                aria-current={isActive('/blog') ? 'page' : undefined}
              >
                Blog
                {isActive('/blog') && (
                  <motion.span 
                    className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-blue-400 to-cyan-400"
                    layoutId="activeIndicator"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                to="/careers"
                className="text-gray-300 hover:text-white transition-colors duration-300 px-3 py-2 text-sm font-medium"
              >
                Careers
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                to="/contact"
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                  isActive('/contact')
                    ? 'text-blue-400'
                    : 'text-blue-400'
                }`}
                aria-current={isActive('/contact') ? 'page' : undefined}
              >
                Contact
                {isActive('/contact') && (
                  <motion.span 
                    className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-blue-400 to-cyan-400"
                    layoutId="activeIndicator"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            </motion.div>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:shadow-lg hover:shadow-blue-500/25"
                aria-label="Get started with our services"
              >
                Get Started
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-controls="mobile-menu"
            whileTap={{ scale: 0.95 }}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
            </nav>

            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="mt-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 bg-zion-slate-light/20 border border-zion-blue-light/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan transition-colors"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 text-zion-slate-light hover:text-zion-cyan transition-colors"
                >
                  Home
                </Link>
                
                {/* Mobile Services */}
                <div className="px-3 py-2">
                  <div className="text-gray-300 font-medium mb-2">Services</div>
                  <div className="ml-4 space-y-1">
                    {services.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className="block px-3 py-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-md text-sm flex items-center"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span className="mr-2">{service.icon}</span>
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
                
                <Link
                  to="/about"
                  className={`block px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    isActive('/about')
                      ? 'text-white bg-blue-600/20 border-l-4 border-blue-400'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                  onClick={closeMenu}
                >
                  About
                </Link>
                <Link
                  to="/blog"
                  className={`block px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    isActive('/blog')
                      ? 'text-white bg-blue-600/20 border-l-4 border-blue-400'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                  onClick={closeMenu}
                >
                  Blog
                </Link>
                
                <div className="pt-4 border-t border-white/10">
                  <Link
                    to="/careers"
                    className="block px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Careers
                  </Link>
                  <Link
                    to="/contact"
                    className="block w-full text-center bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg"
                    onClick={closeMenu}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </form>

            {/* Mobile CTA */}
            <div className="mt-6">
              <Link
                to="/contact"
                className="block w-full text-center bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg"
                onClick={closeMenu}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Mega Menu for Services */}
      {activeDropdown === 'Services' && (
        <div
          className="absolute top-full left-0 right-0 bg-zion-slate-dark border-t border-zion-blue-light/30 shadow-xl backdrop-blur-md"
          onMouseEnter={() => setActiveDropdown('Services')}
          onMouseLeave={closeDropdowns}
        >
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
              {serviceCategories.map((category, index) => (
                <div key={index} className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}>
                      <category.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold text-lg">{category.title}</h3>
                      <p className="text-zion-slate-light text-sm">{category.description}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {category.services.slice(0, 4).map((service, serviceIndex) => (
                      <Link
                        key={serviceIndex}
                        to={service.path}
                        className="flex items-center space-x-3 p-2 rounded-lg hover:bg-zion-slate-light/20 transition-colors group"
                      >
                        <service.icon className="w-4 h-4 text-zion-cyan group-hover:text-zion-cyan-light transition-colors" />
                        <span className="text-zion-slate-light group-hover:text-white transition-colors text-sm">
                          {service.name}
                        </span>
                      </Link>
                    ))}
                    {category.services.length > 4 && (
                      <Link
                        to="/services"
                        className="flex items-center space-x-2 text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm font-medium"
                      >
                        <span>View all {category.title}</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
=======
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="lg:hidden bg-slate-800/95 backdrop-blur-lg border-t border-white/10"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive('/') ? 'text-blue-400 bg-blue-900/20' : 'text-gray-300 hover:text-white hover:bg-gray-700'
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive('/about') ? 'text-blue-400 bg-blue-900/20' : 'text-gray-300 hover:text-white hover:bg-gray-700'
                }`}
              >
                About
              </Link>
              <Link
                to="/services"
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive('/services') ? 'text-blue-400 bg-blue-900/20' : 'text-gray-300 hover:text-white hover:bg-gray-700'
                }`}
              >
                Services
              </Link>
              <Link
                to="/blog"
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive('/blog') ? 'text-blue-400 bg-blue-900/20' : 'text-gray-300 hover:text-white hover:bg-gray-700'
                }`}
              >
                Blog
              </Link>
              <Link
                to="/careers"
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive('/careers') ? 'text-blue-400 bg-blue-900/20' : 'text-gray-300 hover:text-white hover:bg-gray-700'
                }`}
              >
                Careers
              </Link>
              <Link
                to="/contact"
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive('/contact') ? 'text-blue-400 bg-blue-900/20' : 'text-gray-300 hover:text-white hover:bg-gray-700'
                }`}
              >
                Contact
              </Link>
              
              {/* Mobile CTA */}
              <div className="pt-4 border-t border-white/20">
                <Link
                  to="/contact"
                  className="block w-full text-center bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Header;
