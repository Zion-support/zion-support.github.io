import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, User, Bell, ChevronDown, Zap, Brain, Shield, Cloud, Rocket, Globe, Cpu, Lock, Heart, Users, Code, Truck, Building, ShoppingCart, BookOpen, MessageCircle, HelpCircle, Phone, Mail, MapPin, Star, Award, Target, TrendingUp, Lightbulb, Atom, Leaf, Eye, Scale, Building2, Car, Home, Factory, City, ArrowRight, FileText, DollarSign, Handshake, Settings, RefreshCw } from 'lucide-react';
import { ThemeToggle } from '../components/ThemeToggle';
import { ZionLoadingSpinner } from '../components/ui/EnhancedLoadingSpinner';

export function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsSearching(true);
      try {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate search
        window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
      } finally {
        setIsSearching(false);
      }
    }
  };

  const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'Services', href: '/services', current: false, hasDropdown: true },
    { name: 'Solutions', href: '/solutions', current: false, hasDropdown: true },
    { name: 'Resources', href: '/resources', current: false, hasDropdown: true },
    { name: 'About', href: '/about', current: false },
    { name: 'Contact', href: '/contact', current: false },
  ];

  const services = [
    { 
      name: 'AI & Analytics', 
      href: '/services', 
      icon: Brain, 
      description: 'Machine Learning & Data Science',
      featured: true,
      color: 'from-purple-500 to-cyan-500',
      subcategories: [
        { name: 'Business Intelligence', href: '/services#ai-business-intelligence' },
        { name: 'Predictive Analytics', href: '/services#ai-predictive-analytics' },
        { name: 'Data Visualization', href: '/services#ai-data-visualization' },
        { name: 'Market Research', href: '/services#ai-research' }
      ]
    },
    { 
      name: 'AI & Legal Tech', 
      href: '/services', 
      icon: Scale, 
      description: 'Document Analysis & Compliance',
      featured: true,
      color: 'from-blue-500 to-indigo-500',
      subcategories: [
        { name: 'Contract Analysis', href: '/services#ai-legal-tech' },
        { name: 'Legal Research', href: '/services#ai-legal-research' },
        { name: 'Compliance Monitoring', href: '/services#ai-compliance' },
        { name: 'Document Review', href: '/services#ai-document-review' }
      ]
    },
    { 
      name: 'AI & Healthcare', 
      href: '/services', 
      icon: Heart, 
      description: 'Medical AI & Diagnostics',
      featured: true,
      color: 'from-red-500 to-pink-500',
      subcategories: [
        { name: 'Diagnostic Assistance', href: '/services#ai-healthcare' },
        { name: 'Patient Monitoring', href: '/services#ai-patient-monitoring' },
        { name: 'Treatment Optimization', href: '/services#ai-treatment' },
        { name: 'Medical Imaging', href: '/services#ai-medical-imaging' }
      ]
    },
    { 
      name: 'AI & Research', 
      href: '/services', 
      icon: Eye, 
      description: 'Scientific Research & Discovery',
      featured: true,
      color: 'from-purple-500 to-violet-500',
      subcategories: [
        { name: 'Autonomous Research', href: '/services#ai-autonomous-research' },
        { name: 'Market Analysis', href: '/services#ai-market-analysis' },
        { name: 'Trend Forecasting', href: '/services#ai-trend-forecasting' },
        { name: 'Competitive Intelligence', href: '/services#ai-competitive-intelligence' }
      ]
    },
    { 
      name: 'AI & Green Tech', 
      href: '/services', 
      icon: Leaf, 
      description: 'Sustainability Solutions',
      featured: true,
      color: 'from-green-500 to-emerald-500',
      subcategories: [
        { name: 'Energy Optimization', href: '/services#ai-green-tech' },
        { name: 'Carbon Tracking', href: '/services#ai-carbon-tracking' },
        { name: 'Environmental Monitoring', href: '/services#ai-environmental' },
        { name: 'Sustainability Analytics', href: '/services#ai-sustainability' }
      ]
    },
    { 
      name: 'AI & Metaverse', 
      href: '/services', 
      icon: Globe, 
      description: 'Virtual Reality & Gaming',
      featured: true,
      color: 'from-purple-500 to-indigo-500',
      subcategories: [
        { name: '3D Development', href: '/services#ai-metaverse' },
        { name: 'Virtual World Building', href: '/services#ai-virtual-worlds' },
        { name: 'Immersive Experiences', href: '/services#ai-immersive' },
        { name: 'Content Generation', href: '/services#ai-content-gen' }
      ]
    },
    { 
      name: 'AI & Blockchain', 
      href: '/services', 
      icon: Lock, 
      description: 'DeFi & Smart Contracts',
      featured: true,
      color: 'from-yellow-500 to-orange-500',
      subcategories: [
        { name: 'Smart Contracts', href: '/services#ai-blockchain' },
        { name: 'DeFi Solutions', href: '/services#ai-defi' },
        { name: 'NFT Marketplace', href: '/services#ai-nft' },
        { name: 'Web3 Development', href: '/services#ai-web3' }
      ]
    },
    { 
      name: 'AI & Space Tech', 
      href: '/services', 
      icon: Rocket, 
      description: 'Satellite & Space Operations',
      featured: true,
      color: 'from-indigo-500 to-purple-500',
      subcategories: [
        { name: 'Satellite Operations', href: '/services#ai-space-tech' },
        { name: 'Space Debris Tracking', href: '/services#ai-space-debris' },
        { name: 'Orbital Mechanics', href: '/services#ai-orbital' },
        { name: 'Mission Control', href: '/services#ai-mission-control' }
      ]
    },
    { 
      name: 'AI & Operations', 
      href: '/services', 
      icon: Settings, 
      description: 'Business Process Automation',
      featured: true,
      color: 'from-gray-500 to-slate-500',
      subcategories: [
        { name: 'Supply Chain Optimization', href: '/services#ai-supply-chain' },
        { name: 'Quality Assurance', href: '/services#ai-quality-assurance' },
        { name: 'Process Automation', href: '/services#ai-process-automation' },
        { name: 'Workflow Optimization', href: '/services#ai-workflow' }
      ]
    },
    { 
      name: 'AI & Development', 
      href: '/services', 
      icon: Code, 
      description: 'Software Development & DevOps',
      featured: true,
      color: 'from-cyan-500 to-blue-500',
      subcategories: [
        { name: 'Code Generation', href: '/services#ai-development' },
        { name: 'Automated Testing', href: '/services#ai-testing' },
        { name: 'Deployment Optimization', href: '/services#ai-deployment' },
        { name: 'DevOps Automation', href: '/services#ai-devops' }
      ]
    },
    { 
      name: 'Quantum Computing', 
      href: '/services', 
      icon: Atom, 
      description: 'Quantum Solutions & AI',
      featured: true,
      color: 'from-violet-500 to-purple-500',
      subcategories: [
        { name: 'Quantum AI Trading', href: '/services#quantum-ai-trading' },
        { name: 'Quantum Machine Learning', href: '/services#quantum-ml' },
        { name: 'Quantum Cryptography', href: '/services#quantum-crypto' },
        { name: 'Quantum Simulation', href: '/services#quantum-simulation' }
      ]
    },
    { 
      name: 'Cybersecurity', 
      href: '/services', 
      icon: Shield, 
      description: 'Advanced Security Solutions',
      featured: true,
      color: 'from-red-500 to-orange-500',
      subcategories: [
        { name: 'Zero Trust Security', href: '/services#zero-trust' },
        { name: 'Threat Detection', href: '/services#threat-detection' },
        { name: 'Incident Response', href: '/services#incident-response' },
        { name: 'Security Headers', href: '/services#security-headers' }
      ]
    },
    { 
      name: 'Cloud & DevOps', 
      href: '/services', 
      icon: Cloud, 
      description: 'Infrastructure & Automation',
      featured: true,
      color: 'from-blue-500 to-cyan-500',
      subcategories: [
        { name: 'Cloud Infrastructure', href: '/services#cloud-infrastructure' },
        { name: 'DevOps Automation', href: '/services#devops-automation' },
        { name: 'Container Orchestration', href: '/services#container-orchestration' },
        { name: 'Infrastructure as Code', href: '/services#infrastructure-code' }
      ]
    },
    { 
      name: 'IoT & Edge', 
      href: '/services', 
      icon: Cpu, 
      description: 'Internet of Things & Edge Computing',
      featured: true,
      color: 'from-teal-500 to-cyan-500',
      subcategories: [
        { name: 'IoT Platform', href: '/services#iot-platform' },
        { name: 'Edge Computing', href: '/services#edge-computing' },
        { name: 'Device Management', href: '/services#device-management' },
        { name: 'Real-time Processing', href: '/services#real-time-processing' }
      ]
    },
    { 
      name: 'Digital Twin', 
      href: '/services', 
      icon: RefreshCw, 
      description: 'Virtual Simulation & Monitoring',
      featured: true,
      color: 'from-blue-500 to-indigo-500',
      subcategories: [
        { name: '3D Visualization', href: '/services#digital-twin' },
        { name: 'Predictive Maintenance', href: '/services#predictive-maintenance' },
        { name: 'Real-time Monitoring', href: '/services#real-time-monitoring' },
        { name: 'Virtual Simulation', href: '/services#virtual-simulation' }
      ]
    },
    { 
      name: 'FinTech', 
      href: '/services', 
      icon: DollarSign, 
      description: 'Financial Technology & AI',
      featured: true,
      color: 'from-emerald-500 to-green-500',
      subcategories: [
        { name: 'AI Trading', href: '/services#ai-fintech' },
        { name: 'Risk Assessment', href: '/services#risk-assessment' },
        { name: 'Fraud Detection', href: '/services#fraud-detection' },
        { name: 'Financial Analytics', href: '/services#financial-analytics' }
      ]
    }
  ];

  const solutions = [
    {
      name: 'Enterprise Solutions',
      href: '/solutions',
      icon: Building2,
      description: 'Large-scale business transformations',
      featured: true
    },
    {
      name: 'SMB Solutions',
      href: '/solutions',
      icon: Building,
      description: 'Small to medium business growth',
      featured: false
    },
    {
      name: 'Startup Solutions',
      href: '/solutions',
      icon: Rocket,
      description: 'Accelerate your startup growth',
      featured: false
    },
    {
      name: 'Government Solutions',
      href: '/solutions',
      icon: Shield,
      description: 'Public sector innovation',
      featured: false
    },
    {
      name: 'Healthcare Solutions',
      href: '/solutions',
      icon: Heart,
      description: 'Digital health transformation',
      featured: true
    },
    {
      name: 'Financial Solutions',
      href: '/solutions',
      icon: TrendingUp,
      description: 'Fintech innovation & compliance',
      featured: true
    }
  ];

  const resources = [
    {
      name: 'Blog & Insights',
      href: '/blog',
      icon: BookOpen,
      description: 'Latest industry trends and insights',
      featured: true
    },
    {
      name: 'Case Studies',
      href: '/case-studies',
      icon: Target,
      description: 'Real-world success stories',
      featured: true
    },
    {
      name: 'White Papers',
      href: '/white-papers',
      icon: FileText,
      description: 'In-depth research and analysis',
      featured: false
    },
    {
      name: 'Webinars',
      href: '/webinars',
      icon: Users,
      description: 'Expert-led learning sessions',
      featured: false
    },
    {
      name: 'Documentation',
      href: '/docs',
      icon: Code,
      description: 'Technical guides and APIs',
      featured: false
    },
    {
      name: 'FAQ & Support',
      href: '/faq',
      icon: HelpCircle,
      description: 'Get help and answers',
      featured: false
    }
  ];

  const quickLinks = [
    { name: 'Marketplace', href: '/marketplace', icon: ShoppingCart },
    { name: 'Request Quote', href: '/request-quote', icon: MessageCircle },
    { name: 'Pricing', href: '/pricing', icon: DollarSign },
    { name: 'Careers', href: '/careers', icon: Users },
    { name: 'Partners', href: '/partners', icon: Handshake },
    { name: 'Privacy', href: '/privacy', icon: Shield },
    { name: 'Terms', href: '/terms', icon: BookOpen },
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  return (
    <>
      <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-900/95 backdrop-blur-xl border-b border-cyan-400/20 shadow-2xl shadow-cyan-400/10' 
          : 'bg-slate-900/80 backdrop-blur-md border-b border-slate-700/20'
      }`}>
        <div className="container-responsive">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 group">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                  </div>
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                    Zion Tech Group
                  </h1>
                </div>
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.hasDropdown ? (
                    <div className="relative">
                      <button
                        onClick={() => {
                          if (item.name === 'Services') {
                            setServicesDropdownOpen(!servicesDropdownOpen);
                            setSolutionsDropdownOpen(false);
                            setResourcesDropdownOpen(false);
                          } else if (item.name === 'Solutions') {
                            setSolutionsDropdownOpen(!solutionsDropdownOpen);
                            setServicesDropdownOpen(false);
                            setResourcesDropdownOpen(false);
                          } else if (item.name === 'Resources') {
                            setResourcesDropdownOpen(!resourcesDropdownOpen);
                            setServicesDropdownOpen(false);
                            setSolutionsDropdownOpen(false);
                          }
                        }}
                        className="flex items-center text-slate-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-all duration-200 relative group"
                      >
                        {item.name}
                        <ChevronDown className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                          (item.name === 'Services' && servicesDropdownOpen) ||
                          (item.name === 'Solutions' && solutionsDropdownOpen) ||
                          (item.name === 'Resources' && resourcesDropdownOpen)
                            ? 'rotate-180' : ''
                        }`} />
                      </button>

                      {/* Services Dropdown */}
                      {item.name === 'Services' && servicesDropdownOpen && (
                        <div className="absolute top-full left-0 mt-2 w-[900px] bg-slate-800/95 backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-2xl shadow-black/50 overflow-hidden">
                          <div className="p-6">
                            <div className="grid grid-cols-3 gap-6">
                              {services.map((service) => (
                                <Link
                                  key={service.name}
                                  to={service.href}
                                  className={`group p-4 rounded-xl transition-all duration-300 hover:bg-slate-700/50 ${
                                    service.featured ? 'ring-2 ring-cyan-400/50' : ''
                                  }`}
                                  onClick={() => setServicesDropdownOpen(false)}
                                >
                                  <div className="flex items-start gap-3">
                                    <div className={`p-2 rounded-lg bg-gradient-to-br ${service.color}`}>
                                      <service.icon className="w-5 h-5 text-white" />
                                    </div>
                                    <div className="flex-1">
                                      <h3 className="font-semibold text-white group-hover:text-cyan-400 transition-colors">
                                        {service.name}
                                      </h3>
                                      <p className="text-sm text-gray-400 mt-1">
                                        {service.description}
                                      </p>
                                      
                                      {/* Subcategories */}
                                      {service.subcategories && (
                                        <div className="mt-3 space-y-1">
                                          {service.subcategories.slice(0, 3).map((sub, index) => (
                                            <div key={index} className="text-xs text-slate-500 group-hover:text-slate-300 transition-colors">
                                              • {sub.name}
                                            </div>
                                          ))}
                                          {service.subcategories.length > 3 && (
                                            <div className="text-xs text-cyan-400">
                                              +{service.subcategories.length - 3} more
                                            </div>
                                          )}
                                        </div>
                                      )}
                                      
                                      {service.featured && (
                                        <span className="inline-flex items-center gap-1 mt-2 text-xs text-cyan-400">
                                          <Star className="w-3 h-3" />
                                          Featured
                                        </span>
                                      )}
                                    </div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                            
                            {/* Quick Actions */}
                            <div className="mt-6 pt-6 border-t border-slate-700/50">
                              <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
                                <div className="flex items-center gap-4 text-sm text-slate-400">
                                  <span>Need help choosing?</span>
                                  <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                                    Call +1 302 464 0950
                                  </a>
                                </div>
                                <div className="flex gap-3">
                                  <Link
                                    to="/services"
                                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                                    onClick={() => setServicesDropdownOpen(false)}
                                  >
                                    View All Services
                                    <ArrowRight className="w-4 h-4" />
                                  </Link>
                                  <Link
                                    to="/request-quote"
                                    className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-sm font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200"
                                    onClick={() => setServicesDropdownOpen(false)}
                                  >
                                    Get Quote
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Solutions Dropdown */}
                      {item.name === 'Solutions' && solutionsDropdownOpen && (
                        <div className="absolute top-full left-0 mt-2 w-[600px] bg-slate-800/95 backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-2xl shadow-black/50 overflow-hidden">
                          <div className="p-6">
                            <div className="grid grid-cols-2 gap-4">
                              {solutions.map((solution) => (
                                <Link
                                  key={solution.name}
                                  to={solution.href}
                                  className={`group p-4 rounded-xl transition-all duration-300 hover:bg-slate-700/50 ${
                                    solution.featured ? 'ring-2 ring-cyan-400/50' : ''
                                  }`}
                                  onClick={() => setSolutionsDropdownOpen(false)}
                                >
                                  <div className="flex items-start gap-3">
                                    <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500">
                                      <solution.icon className="w-5 h-5 text-white" />
                                    </div>
                                    <div className="flex-1">
                                      <h3 className="font-semibold text-white group-hover:text-cyan-400 transition-colors">
                                        {solution.name}
                                      </h3>
                                      <p className="text-sm text-gray-400 mt-1">
                                        {solution.description}
                                      </p>
                                      {solution.featured && (
                                        <span className="inline-flex items-center gap-1 mt-2 text-xs text-cyan-400">
                                          <Star className="w-3 h-3" />
                                          Featured
                                        </span>
                                      )}
                                    </div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Resources Dropdown */}
                      {item.name === 'Resources' && resourcesDropdownOpen && (
                        <div className="absolute top-full left-0 mt-2 w-[600px] bg-slate-800/95 backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-2xl shadow-black/50 overflow-hidden">
                          <div className="p-6">
                            <div className="grid grid-cols-2 gap-4">
                              {resources.map((resource) => (
                                <Link
                                  key={resource.name}
                                  to={resource.href}
                                  className={`group p-4 rounded-xl transition-all duration-300 hover:bg-slate-700/50 ${
                                    resource.featured ? 'ring-2 ring-cyan-400/50' : ''
                                  }`}
                                  onClick={() => setResourcesDropdownOpen(false)}
                                >
                                  <div className="flex items-start gap-3">
                                    <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500">
                                      <resource.icon className="w-5 h-5 text-white" />
                                    </div>
                                    <div className="flex-1">
                                      <h3 className="font-semibold text-white group-hover:text-cyan-400 transition-colors">
                                        {resource.name}
                                      </h3>
                                      <p className="text-sm text-gray-400 mt-1">
                                        {resource.description}
                                      </p>
                                      {resource.featured && (
                                        <span className="inline-flex items-center gap-1 mt-2 text-xs text-cyan-400">
                                          <Star className="w-3 h-3" />
                                          Featured
                                        </span>
                                      )}
                                    </div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className="text-slate-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-all duration-200 relative group"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Right side - Search, Actions, Mobile menu */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <form onSubmit={handleSearch} className="hidden md:block">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-64 pl-10 pr-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-sm"
                  />
                </div>
              </form>

              {/* Contact Info */}
              <div className="hidden lg:flex items-center space-x-4">
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span className="hidden xl:inline">{contactInfo.phone}</span>
                </a>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  <span className="hidden xl:inline">{contactInfo.email}</span>
                </a>
              </div>

              {/* CTA Button */}
              <Link
                to="/request-quote"
                className="hidden md:inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white text-sm font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Get Quote
              </Link>

              {/* Theme Toggle */}
              <ThemeToggle />

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-700/50 transition-colors"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-800/95 backdrop-blur-xl border-t border-slate-700/50">
            <div className="container-responsive py-6">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="mb-6">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search services, solutions..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                </div>
              </form>

              {/* Mobile Navigation */}
              <nav className="space-y-4">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.hasDropdown ? (
                      <div>
                        <button
                          onClick={() => {
                            if (item.name === 'Services') setServicesDropdownOpen(!servicesDropdownOpen);
                            else if (item.name === 'Solutions') setSolutionsDropdownOpen(!solutionsDropdownOpen);
                            else if (item.name === 'Resources') setResourcesDropdownOpen(!resourcesDropdownOpen);
                          }}
                          className="flex items-center justify-between w-full text-left text-slate-300 hover:text-cyan-400 py-2 text-lg font-medium transition-colors"
                        >
                          {item.name}
                          <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${
                            (item.name === 'Services' && servicesDropdownOpen) ||
                            (item.name === 'Solutions' && solutionsDropdownOpen) ||
                            (item.name === 'Resources' && resourcesDropdownOpen)
                              ? 'rotate-180' : ''
                          }`} />
                        </button>
                        
                        {/* Mobile Services Dropdown */}
                        {item.name === 'Services' && servicesDropdownOpen && (
                          <div className="ml-4 mt-2 space-y-2">
                            {services.slice(0, 6).map((service) => (
                              <Link
                                key={service.name}
                                to={service.href}
                                className="block text-slate-400 hover:text-cyan-400 py-1 transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {service.name}
                              </Link>
                            ))}
                            <Link
                              to="/services"
                              className="block text-cyan-400 hover:text-cyan-300 py-1 font-medium"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              View All Services →
                            </Link>
                          </div>
                        )}

                        {/* Mobile Solutions Dropdown */}
                        {item.name === 'Solutions' && solutionsDropdownOpen && (
                          <div className="ml-4 mt-2 space-y-2">
                            {solutions.map((solution) => (
                              <Link
                                key={solution.name}
                                to={solution.href}
                                className="block text-slate-400 hover:text-cyan-400 py-1 transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {solution.name}
                              </Link>
                            ))}
                          </div>
                        )}

                        {/* Mobile Resources Dropdown */}
                        {item.name === 'Resources' && resourcesDropdownOpen && (
                          <div className="ml-4 mt-2 space-y-2">
                            {resources.map((resource) => (
                              <Link
                                key={resource.name}
                                to={resource.href}
                                className="block text-slate-400 hover:text-cyan-400 py-1 transition-colors"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {resource.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        className="block text-slate-300 hover:text-cyan-400 py-2 text-lg font-medium transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              {/* Mobile Contact Info */}
              <div className="mt-8 pt-6 border-t border-slate-700/50 space-y-3">
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  {contactInfo.phone}
                </a>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  {contactInfo.email}
                </a>
                <div className="flex items-start gap-3 text-slate-300">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{contactInfo.address}</span>
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="mt-6">
                <Link
                  to="/request-quote"
                  className="block w-full text-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Your Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Click outside to close dropdowns */}
      {(servicesDropdownOpen || solutionsDropdownOpen || resourcesDropdownOpen) && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => {
            setServicesDropdownOpen(false);
            setSolutionsDropdownOpen(false);
            setResourcesDropdownOpen(false);
          }}
        />
      )}
    </>
  );
}
