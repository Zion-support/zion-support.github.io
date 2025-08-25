import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Brain, 
  Shield, 
  Cloud, 
  Zap, 
  Globe, 
  Cpu, 
  Database, 
  Network,
  Building,
  Users,
  Heart,
  Rocket,
  BarChart3,
  Target,
  Lock,
  Code,
  Clock,
  Eye,
  DollarSign,
  ShoppingCart,
  Menu,
  X,
  ChevronDown,
  Search,
  ArrowRight,
  Phone
} from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setActiveDropdown(null);
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const navigationItems = useMemo(() => [
    { 
      path: '/', 
      label: 'Home', 
      icon: '🏠',
      description: 'Welcome to Zion Tech Group'
    },
    { 
      path: '/services', 
      label: 'AI Services', 
      icon: '🤖',
      description: 'Explore our AI service offerings',
      hasDropdown: true
    },
    { 
      path: '/new-services', 
      label: 'New Services', 
      icon: '✨',
      description: 'Latest technology services'
    },
    { 
      path: '/solutions/enterprise', 
      label: 'Solutions', 
      icon: '💼',
      description: 'Industry-specific solutions',
      hasDropdown: true
    },
    { 
      path: '/about', 
      label: 'About', 
      icon: '🏢',
      description: 'Learn about our company'
    },
    { 
      path: '/careers', 
      label: 'Careers', 
      icon: '🚀',
      description: 'Join our team'
    },
    { 
      path: '/contact', 
      label: 'Contact', 
      icon: '📞',
      description: 'Get in touch with us'
    }
  ], []);

  const serviceCategories = useMemo(() => [
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      description: 'Intelligent solutions powered by artificial intelligence',
      color: 'from-purple-500 to-pink-500',
      services: [
        { name: 'AI Autonomous Systems', path: '/services/ai-autonomous-systems', description: 'Advanced autonomous AI systems' },
        { name: 'AI Autonomous Systems Platform', path: '/ai-autonomous-systems-platform', description: 'Complete platform for building AI systems' },
        { name: 'AI Research Assistant', path: '/ai-autonomous-research-assistant', description: 'AI-powered research automation' },
        { name: 'AI Autonomous Research', path: '/ai-autonomous-research', description: 'AI-powered research platform' },
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
      color: 'from-blue-500 to-cyan-500',
      services: [
        { name: 'Quantum Neural Networks', path: '/quantum-neural-network-platform', description: 'Quantum-powered neural networks', icon: Brain },
        { name: 'Quantum Computing', path: '/services/quantum-technology', description: 'Quantum computing platforms', icon: Cpu },
        { name: 'Quantum-Safe Security', path: '/services/quantum-security', description: 'Future-proof quantum security', icon: Shield }
      ]
    },
    {
      title: 'Business Operations',
      icon: Building,
      description: 'Streamlined business process automation',
      color: 'from-green-500 to-emerald-500',
      services: [
        { name: 'Autonomous Business Platform', path: '/autonomous-business-operations-platform', description: 'Self-operating business systems' },
        { name: 'AI Autonomous Business Manager', path: '/ai-autonomous-business-manager', description: 'AI-powered business management' },
        { name: 'AI Autonomous Business Platform', path: '/ai-autonomous-business-platform', description: 'Complete AI business platform' },
        { name: 'AI Asset Management', path: '/ai-powered-it-asset-management', description: 'Intelligent IT asset management' },
        { name: 'Business Intelligence', path: '/services/ai-business-intelligence', description: 'Advanced business analytics' }
      ]
    },
    {
      title: 'Cybersecurity',
      icon: Shield,
      description: 'Comprehensive security and compliance solutions',
      color: 'from-red-500 to-pink-500',
      services: [
        { name: 'Cybersecurity Services', path: '/services/cybersecurity', description: 'Complete security solutions', icon: Shield },
        { name: 'SOC2 Compliance Automation', path: '/soc2-compliance-automation', description: 'Automated compliance management', icon: Lock },
        { name: 'Security Assessment', path: '/services/security-assessment', description: 'Security audit and testing', icon: Shield },
        { name: 'Compliance & Audit', path: '/services/compliance-audit', description: 'Regulatory compliance support', icon: Lock },
        { name: 'Threat Detection', path: '/services/threat-detection', description: 'Real-time security monitoring', icon: Shield }
      ]
    },
    {
      title: 'Cloud & Infrastructure',
      icon: Cpu,
      description: 'Scalable cloud solutions and infrastructure management',
      color: 'from-blue-500 to-indigo-500',
      services: [
        { name: 'Cloud DevOps', path: '/cloud-devops', description: 'Cloud development and operations', icon: Cpu },
        { name: 'IT Infrastructure', path: '/services/it-infrastructure', description: 'Complete IT infrastructure solutions', icon: Network },
        { name: '5G Enterprise Solutions', path: '/5g-enterprise-solutions', description: 'High-speed 5G connectivity', icon: Network },
        { name: 'Cloud Migration', path: '/services/cloud-migration', description: 'Seamless cloud transition', icon: Cloud },
        { name: 'Network Infrastructure', path: '/services/network-infrastructure', description: 'Robust network solutions', icon: Network },
        { name: 'Managed IT Services', path: '/services/managed-it-services', description: '24/7 IT support', icon: Clock },
        { name: 'DevOps Automation', path: '/services/devops-automation', description: 'Streamlined development', icon: Code }
      ]
    },
    {
      title: 'Emerging Technologies',
      icon: Rocket,
      description: 'Cutting-edge solutions for tomorrow\'s challenges',
      color: 'from-purple-500 to-violet-500',
      services: [
        { name: 'Blockchain Solutions', path: '/services/blockchain-solutions', description: 'Decentralized applications', icon: Code },
        { name: 'IoT Platforms', path: '/services/iot-platforms', description: 'Connected device management', icon: Network },
        { name: 'Quantum Computing', path: '/services/quantum-computing', description: 'Next-generation computing', icon: Cpu },
        { name: 'AR/VR Solutions', path: '/services/ar-vr-solutions', description: 'Immersive experiences', icon: Eye }
      ]
    },
    {
      title: 'Industry Solutions',
      icon: Building,
      description: 'Tailored solutions for specific industries',
      color: 'from-orange-500 to-yellow-500',
      services: [
        { name: 'Healthcare Technology', path: '/solutions/healthcare', description: 'Medical innovation', icon: Heart },
        { name: 'Financial Services', path: '/services/financial-services', description: 'Fintech solutions', icon: DollarSign },
        { name: 'Manufacturing Intelligence', path: '/services/manufacturing-intelligence', description: 'Smart manufacturing', icon: Cpu },
        { name: 'Retail Technology', path: '/services/retail-technology', description: 'Digital retail transformation', icon: ShoppingCart }
      ]
    }
  ], []);

  const solutionCategories = useMemo(() => [
    {
      title: 'Enterprise Solutions',
      icon: Building,
      description: 'Large-scale business transformation',
      color: 'from-blue-500 to-indigo-500',
      solutions: [
        { name: 'Digital Transformation', path: '/digital-transformation', description: 'Complete business modernization', icon: Rocket },
        { name: 'Enterprise AI', path: '/solutions/enterprise', description: 'AI-powered enterprise solutions', icon: Brain },
        { name: 'Data Analytics', path: '/services/data-analytics', description: 'Business intelligence platform', icon: BarChart3 }
      ]
    },
    {
      title: 'SMB Solutions',
      icon: Users,
      description: 'Scalable solutions for growing businesses',
      color: 'from-green-500 to-emerald-500',
      solutions: [
        { name: 'Micro SAAS', path: '/services/micro-saas-solutions', description: 'Custom software solutions', icon: Code },
        { name: 'Cloud Migration', path: '/cloud-devops', description: 'Affordable cloud solutions', icon: Cloud },
        { name: 'IT Support', path: '/services/it-support', description: 'Managed IT services', icon: Clock }
      ]
    },
    {
      title: 'Healthcare Solutions',
      icon: Heart,
      description: 'Technology solutions for healthcare',
      color: 'from-red-500 to-pink-500',
      solutions: [
        { name: 'Healthcare AI', path: '/solutions/healthcare', description: 'AI-powered healthcare solutions', icon: Brain },
        { name: 'Patient Management', path: '/services/patient-management', description: 'Comprehensive patient care', icon: Users },
        { name: 'Medical Analytics', path: '/services/medical-analytics', description: 'Healthcare data insights', icon: BarChart3 }
      ]
    }
  ], []);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen(prev => !prev);
  }, []);

  const toggleDropdown = useCallback((dropdown: string) => {
    setActiveDropdown(prev => prev === dropdown ? null : dropdown);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to search results or services page
      window.location.href = `/services?search=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  const isActiveRoute = useCallback((path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  }, [location.pathname]);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-black/95 backdrop-blur-md border-b border-cyan-500/20 shadow-2xl' 
            : 'bg-transparent'
        }`}
        role="banner"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center space-x-3 group focus:outline-none focus:ring-4 focus:ring-cyan-500/50 focus:ring-offset-2 focus:ring-offset-gray-900"
              aria-label="Zion Tech Group - Home"
            >
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">Z</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                  Zion Tech Group
                </h1>
                <p className="text-xs text-gray-400 group-hover:text-cyan-300 transition-colors duration-300">
                  AI-Powered Innovation
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
              {navigationItems.map((item) => (
                <div key={item.path} className="relative group">
                  {item.hasDropdown ? (
                    <div className="relative">
                      <button
                        onClick={() => toggleDropdown(item.label === 'AI Services' ? 'services' : 'solutions')}
                        className={`flex items-center space-x-1 px-4 py-2 rounded-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 ${
                          isActiveRoute(item.path)
                            ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-500/30'
                            : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10'
                        }`}
                        aria-expanded={activeDropdown === (item.label === 'AI Services' ? 'services' : 'solutions')}
                        aria-haspopup="true"
                        aria-label={`${item.label} menu`}
                      >
                        <span>{item.icon}</span>
                        <span>{item.label}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                          activeDropdown === (item.label === 'AI Services' ? 'services' : 'solutions') ? 'rotate-180' : ''
                        }`} aria-hidden="true" />
                      </button>
                      
                      {/* Services Dropdown */}
                      {item.label === 'AI Services' && activeDropdown === 'services' && (
                        <div className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-md border border-cyan-500/30 rounded-xl shadow-2xl p-4 z-50">
                          <div className="grid grid-cols-2 gap-4">
                            {serviceCategories.map((category) => (
                              <div key={category.title} className="space-y-2">
                                <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wide">
                                  {category.title}
                                </h3>
                                <ul className="space-y-1">
                                  {category.services.slice(0, 3).map((service) => (
                                    <li key={service.name}>
                                      <Link
                                        to={service.path}
                                        className="block px-3 py-2 text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                                      >
                                        {service.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                          <div className="mt-4 pt-4 border-t border-cyan-500/30">
                            <Link
                              to="/comprehensive-services-overview"
                              className="block px-3 py-2 text-sm font-medium text-cyan-400 hover:text-white hover:bg-cyan-500/20 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                            >
                              View All Services Overview →
                            </Link>
                            <Link
                              to="/innovative-micro-saas-services"
                              className="block px-3 py-2 text-sm font-medium text-cyan-400 hover:text-white hover:bg-cyan-500/20 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                            >
                              Innovative Micro SAAS Services →
                            </Link>
                          </div>
                        </div>
                      )}

                      {/* Solutions Dropdown */}
                      {item.label === 'Solutions' && activeDropdown === 'solutions' && (
                        <div className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-md border border-cyan-500/30 rounded-xl shadow-2xl p-4 z-50">
                          <div className="space-y-4">
                            {solutionCategories.map((category) => (
                              <div key={category.title} className="space-y-3">
                                <div className="flex items-center space-x-2">
                                  <div className={`p-2 bg-gradient-to-r ${category.color} rounded-lg`}>
                                    <category.icon className="w-5 h-5 text-white" />
                                  </div>
                                  <h3 className="font-semibold text-white text-sm">{category.title}</h3>
                                </div>
                                <p className="text-xs text-gray-400 leading-relaxed">{category.description}</p>
                                <div className="space-y-2">
                                  {category.solutions.map((solution) => (
                                    <Link
                                      key={solution.name}
                                      to={solution.path}
                                      className="block text-xs text-gray-300 hover:text-cyan-400 transition-colors duration-200 hover:bg-gray-800/50 rounded px-2 py-1"
                                    >
                                      {solution.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className={`px-4 py-2 rounded-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 ${
                        isActiveRoute(item.path)
                          ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-500/30'
                          : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10'
                      }`}
                      aria-label={item.description}
                    >
                      <span className="flex items-center space-x-2">
                        <span>{item.icon}</span>
                        <span>{item.label}</span>
                      </span>
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Search Button */}
              <button
                className="p-2 text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
                aria-label="Search"
              >
                <Search className="w-5 h-5" aria-hidden="true" />
              </button>

              {/* Contact Button */}
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 focus:ring-offset-2 focus:ring-offset-gray-900"
                aria-label="Contact us"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                <span>Contact</span>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden py-6 border-t border-gray-700/50">
              <nav className="space-y-4" role="navigation" aria-label="Mobile navigation">
                {navigationItems.map((item) => (
                  <div key={item.path}>
                    {item.hasDropdown ? (
                      <div>
                        <button
                          onClick={() => toggleDropdown(`mobile-${item.label === 'AI Services' ? 'services' : 'solutions'}`)}
                          className={`w-full flex items-center justify-between px-4 py-3 text-left rounded-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 ${
                            isActiveRoute(item.path)
                              ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-500/30'
                              : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10'
                          }`}
                          aria-expanded={activeDropdown === `mobile-${item.label === 'AI Services' ? 'services' : 'solutions'}`}
                          aria-haspopup="true"
                        >
                          <span className="flex items-center space-x-2">
                            <span>{item.icon}</span>
                            <span>{item.label}</span>
                          </span>
                          <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                            activeDropdown === `mobile-${item.label === 'AI Services' ? 'services' : 'solutions'}` ? 'rotate-180' : ''
                          }`} aria-hidden="true" />
                        </button>
                        
                        {activeDropdown === `mobile-${item.label === 'AI Services' ? 'services' : 'solutions'}` && (
                          <div className="mt-2 ml-4 space-y-2">
                            {item.label === 'AI Services' && serviceCategories.map((category) => (
                              <div key={category.title} className="space-y-2">
                                <h4 className="text-sm font-semibold text-cyan-400 uppercase tracking-wide px-4">
                                  {category.title}
                                </h4>
                                <ul className="space-y-1">
                                  {category.services.slice(0, 3).map((service) => (
                                    <li key={service.name}>
                                      <Link
                                        to={service.path}
                                        className="block px-4 py-2 text-sm text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                                      >
                                        {service.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                            
                            {item.label === 'Solutions' && solutionCategories.map((category) => (
                              <div key={category.title} className="space-y-2">
                                <h4 className="text-sm font-semibold text-cyan-400 uppercase tracking-wide px-4">
                                  {category.title}
                                </h4>
                                <ul className="space-y-1">
                                  {category.solutions.map((solution) => (
                                    <li key={solution.name}>
                                      <Link
                                        to={solution.path}
                                        className="block px-4 py-2 text-sm text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                                      >
                                        {solution.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                            
                            {item.label === 'AI Services' && (
                              <div className="pt-4 border-t border-cyan-500/30 mt-4">
                                <Link
                                  to="/comprehensive-services-overview"
                                  className="block px-4 py-2 text-sm font-medium text-cyan-400 hover:text-white hover:bg-cyan-500/20 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                                >
                                  View All Services Overview →
                                </Link>
                                <Link
                                  to="/innovative-micro-saas-services"
                                  className="block px-4 py-2 text-sm font-medium text-cyan-400 hover:text-white hover:bg-cyan-500/20 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
                                >
                                  Innovative Micro SAAS Services →
                                </Link>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        to={item.path}
                        className={`block px-4 py-3 rounded-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-500/50 ${
                          isActiveRoute(item.path)
                            ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-500/30'
                            : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10'
                        }`}
                        aria-label={item.description}
                      >
                        <span className="flex items-center space-x-2">
                          <span>{item.icon}</span>
                          <span>{item.label}</span>
                        </span>
                      </Link>
                    )}
                  </div>
                ))}
                
                {/* Mobile Contact Button */}
                <div className="pt-4 border-t border-gray-700/50">
                  <Link
                    to="/contact"
                    className="block w-full text-center px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-cyan-500/50"
                    aria-label="Contact us"
                  >
                    Contact Us
                  </Link>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Sidebar Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="fixed left-4 top-1/2 transform -translate-y-1/2 z-40 lg:hidden p-2 bg-gray-900/90 backdrop-blur-sm border border-gray-700/50 rounded-lg text-gray-300 hover:text-white transition-all duration-300"
        aria-label="Toggle sidebar"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed left-0 top-0 h-full w-80 bg-gray-900/95 backdrop-blur-md border-r border-gray-700/50 z-50 lg:hidden"
          >
            <div className="flex items-center justify-between p-4 border-b border-gray-700/50">
              <h2 className="text-lg font-semibold text-white">Navigation</h2>
              <button
                onClick={toggleSidebar}
                className="p-1 text-gray-400 hover:text-white transition-colors duration-200"
                aria-label="Close sidebar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-4 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.path}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(`sidebar-${item.label === 'AI Services' ? 'services' : 'solutions'}`)}
                        className="flex items-center justify-between w-full px-3 py-2 text-left text-gray-300 hover:text-white transition-colors duration-200 rounded-lg hover:bg-gray-800/50"
                      >
                        <span className="flex items-center space-x-2">
                          <span>{item.icon}</span>
                          <span>{item.label}</span>
                        </span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === `sidebar-${item.label === 'AI Services' ? 'services' : 'solutions'}` ? 'rotate-180' : ''
                        }`} />
                      </button>
                      
                      {activeDropdown === `sidebar-${item.label === 'AI Services' ? 'services' : 'solutions'}` && (
                        <div className="ml-4 mt-2 space-y-2">
                          {item.label === 'AI Services' && serviceCategories.map((category) => (
                            <div key={category.title} className="space-y-2">
                              <div className="text-sm font-medium text-cyan-400">{category.title}</div>
                              {category.services.slice(0, 3).map((service) => (
                                <Link
                                  key={service.name}
                                  to={service.path}
                                  onClick={() => setIsSidebarOpen(false)}
                                  className="block px-4 py-1 text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                                >
                                  {service.name}
                                </Link>
                              ))}
                            </div>
                          ))}
                          
                          {item.label === 'Solutions' && solutionCategories.map((category) => (
                            <div key={category.title} className="space-y-2">
                              <div className="text-sm font-medium text-cyan-400">{category.title}</div>
                              {category.solutions.map((solution) => (
                                <Link
                                  key={solution.name}
                                  to={solution.path}
                                  onClick={() => setIsSidebarOpen(false)}
                                  className="block px-4 py-1 text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-200"
                                >
                                  {solution.name}
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={() => setIsSidebarOpen(false)}
                      className={`block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200 rounded-lg hover:bg-gray-800/50 ${
                        isActiveRoute(item.path) ? 'text-cyan-400 bg-cyan-500/10' : ''
                      }`}
                    >
                      <span className="flex items-center space-x-2">
                        <span>{item.icon}</span>
                        <span>{item.label}</span>
                      </span>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={toggleSidebar}
          />
        )}
      </AnimatePresence>
    </>
  );
}
