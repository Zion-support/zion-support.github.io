import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, Brain, Users, BarChart3, Code, Palette, Target, Shield, Heart, Database, Building, Cpu, Network, Cloud, Clock, Rocket, Globe, Lock, ArrowRight } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

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

  const navigation = [
    { name: 'Home', href: '/' },
    { 
      name: 'Services', 
      href: '/services',
      dropdown: [
        { name: 'AI Solutions', href: '/ai-solutions', description: 'Advanced AI and machine learning services' },
        { name: 'Cybersecurity', href: '/cybersecurity', description: 'Comprehensive security solutions' },
        { name: 'Cloud & DevOps', href: '/cloud-devops', description: 'Scalable cloud infrastructure' },
        { name: 'Data Analytics', href: '/data-analytics', description: 'Transform data into insights' },
        { name: 'Quantum Technology', href: '/quantum-technology', description: 'Next-generation computing' },
        { name: 'Enterprise Solutions', href: '/enterprise-solutions', description: 'Large-scale business solutions' }
      ]
    },
    { 
      name: 'Solutions', 
  const navigationItems = [
    { 
      path: '/', 
      label: 'Home', 
      icon: '🏠',
      description: 'Welcome to Zion Tech Group'
    },
    { 
      path: '/services', 
      label: 'Services', 
      icon: '🤖',
      description: 'Explore our comprehensive service offerings',
      hasDropdown: true
    },
    { 
      path: '/solutions/enterprise', 
      label: 'Solutions', 
      icon: '💼',
      description: 'Industry-specific solutions',
      hasDropdown: true
    },
    { 
      path: '/pricing', 
      label: 'Pricing', 
      icon: '💰',
      description: 'Transparent pricing plans'
    },
    { 
      path: '/about', 
      label: 'About', 
      icon: 'ℹ️',
      description: 'Learn about our company'
    },
    { 
      path: '/careers', 
      label: 'Careers', 
      icon: '🚀',
      description: 'Join our team'
    },
    { 
      path: '/blog', 
      label: 'Blog', 
      icon: '📝',
      description: 'Latest insights and news'
    },
    { 
      path: '/contact', 
      label: 'Contact', 
      icon: '📞',
      description: 'Get in touch with us'
    }
  ];

=======
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
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-zion-slate-dark/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              ZION
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={closeDropdowns}
                  >
                    <button className="flex items-center space-x-1 text-white hover:text-zion-cyan transition-colors py-2">
                      <span>{item.name}</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {activeDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-zion-slate-dark border border-zion-blue-light/30 rounded-lg shadow-xl backdrop-blur-md">
                        <div className="p-4 space-y-2">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.href}
                              className="block p-3 rounded-lg hover:bg-zion-slate-light/20 transition-colors group"
                            >
                              <div className="font-medium text-white group-hover:text-zion-cyan transition-colors">
                                {dropdownItem.name}
                              </div>
                              <div className="text-sm text-zion-slate-light mt-1">
                                {dropdownItem.description}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                    to={item.path}
                    className="flex items-center space-x-1 text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                  >
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
=======
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
                  >
                    <div className="p-4">
                      <div className="grid grid-cols-1 gap-2">
                        {services.map((service) => (
                          <Link
                            key={service.path}
                            to={service.path}
                            className="flex items-center p-3 rounded-lg hover:bg-white/10 transition-colors duration-200 group"
                          >
                            <span className="text-2xl mr-3 group-hover:scale-110 transition-transform duration-200">
                              {service.icon}
                            </span>
                            <div className="flex-1">
                              <div className="text-white font-medium">{service.name}</div>
                              <div className="text-gray-400 text-sm">{service.description}</div>
                            </div>
                            <svg className="h-4 w-4 text-gray-400 group-hover:text-blue-400 transition-colors duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        ))}
                      </div>
                      <div className="mt-4 pt-4 border-t border-white/20">
                        <Link
                          to="/services"
                          className="block text-center text-blue-400 hover:text-blue-300 font-medium transition-colors duration-200 hover:bg-blue-400/10 py-2 rounded-lg"
                        >
                          View All Services →
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <Link
              to="/about"
              className={`relative px-3 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                isActive('/about')
                  ? 'text-white bg-blue-600/20'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              About
              {isActive('/about') && (
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"
                  layoutId="activeTab"
                />
              )}
            </Link>
            <Link
              to="/blog"
              className={`relative px-3 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                isActive('/blog')
                  ? 'text-white bg-blue-600/20'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              Blog
              {isActive('/blog') && (
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"
                  layoutId="activeTab"
                />
              )}
            </Link>
            <Link
              to="/faq"
              className={`relative px-3 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                isActive('/faq')
                  ? 'text-white bg-blue-600/20'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              FAQ
              {isActive('/faq') && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
              )}
            </Link>
            <Link
              to="/careers"
              className={`relative px-3 py-2 text-sm font-medium rounded-md transition-all duration-300 ${
                isActive('/careers')
                  ? 'text-white bg-blue-600/20'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              Careers
              {isActive('/careers') && (
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"
                  layoutId="activeTab"
                />
              )}
            </div>

            <Link
              to="/pricing"
              className="text-gray-300 hover:text-white transition-colors duration-300 px-4 py-2"
            >
              Pricing
            </Link>

            <Link
              to="/contact"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              Contact
              {isActive('/contact') && (
                <motion.div 
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"
                  layoutId="activeTab"
                />
              )}
            </Link>
          </nav>

          {/* Search and Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 px-4 py-2 bg-zion-slate-light/20 border border-zion-blue-light/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan transition-colors"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 text-zion-slate-light hover:text-zion-cyan transition-colors"
              >
                <Search className="w-5 h-5" />
              </button>
            </form>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* CTA Button */}
            <Link
              to="/contact"
              className="px-6 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-white hover:text-zion-cyan transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-zion-slate-dark border-t border-zion-blue-light/30">
          <div className="container mx-auto px-4 py-6">
            {/* Mobile Navigation */}
            <nav className="space-y-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="flex items-center justify-between w-full text-left text-white hover:text-zion-cyan transition-colors py-2"
                      >
                        <span>{item.name}</span>
                        <svg className={`w-4 h-4 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {activeDropdown === item.name && (
                        <div className="ml-4 mt-2 space-y-2">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.href}
                              onClick={() => setIsMenuOpen(false)}
                              className="block text-zion-slate-light hover:text-zion-cyan transition-colors py-1"
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="block text-white hover:text-zion-cyan transition-colors py-2"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <button className="text-gray-300 hover:text-white p-2 rounded-md transition-colors duration-200">
              <Search className="w-5 h-5" />
            </button>

            {/* Contact Info */}
            <div className="hidden md:flex items-center space-x-4 text-sm">
              <a 
                href="tel:+13024640950" 
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-center space-x-1"
              >
                <Phone className="w-4 h-4" />
                <span>+1 (302) 464-0950</span>
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-center space-x-1"
              >
                <Mail className="w-4 h-4" />
                <span>kleber@ziontechgroup.com</span>
              </a>
            </div>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
            >
              Get Started
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden text-gray-300 hover:text-white p-2 rounded-md transition-colors duration-200"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
=======
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
  );
}

export default Header;
