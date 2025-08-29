import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, User, Bell, ChevronDown, Zap, Brain, Shield, Cloud, Rocket, Globe, Cpu, Lock, Heart, Users, ShoppingCart, BookOpen, MessageCircle, HelpCircle, DollarSign, Star, TrendingUp, Award, Settings, Phone, Mail, MapPin, Building, Database, Network, Smartphone, Server, Chip, Atom, Blockchain, Leaf, Eye, Code, Palette, ShieldCheck, Globe2, Building2, Car, Factory, Store, Hospital, Banknote, Truck, Wrench, Target, BarChart3, Layers, Activity, FileText, RefreshCw, TrendingDown, PieChart, LineChart, BarChart, Monitor, Settings2, Zap as ZapIcon, Globe as GlobeIcon, Cpu as CpuIcon, Lock as LockIcon, Rocket as RocketIcon, Brain as BrainIcon, Shield as ShieldIcon, Star as StarIcon, TrendingUp as TrendingUpIcon, Award as AwardIcon } from 'lucide-react';
import { ThemeToggle } from '../components/ThemeToggle';
import { ZionLoadingSpinner } from '../components/ui/EnhancedLoadingSpinner';
import { motion, AnimatePresence } from 'framer-motion';

export function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
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

  const mainNavigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'Services', href: '/services-overview', current: false, hasDropdown: true },
    { name: 'Solutions', href: '/ai-services', current: false, hasDropdown: true },
    { name: 'Innovation', href: '/innovative-services-showcase-2025', current: false, hasDropdown: true },
    { name: 'Company', href: '/about', current: false, hasDropdown: true },
    { name: 'Support', href: '/help', current: false, hasDropdown: true },
    { name: 'Contact', href: '/contact', current: false },
  ];

  const services = [
    { name: 'AI & Analytics', href: '/services/ai-business-intelligence', icon: Brain, description: 'Machine Learning & Data Science' },
    { name: 'Digital Twin', href: '/services/digital-twin', icon: Rocket, description: 'Simulation & Monitoring' },
    { name: 'Cybersecurity', href: '/services/ai-compliance-copilot', icon: Shield, description: 'AI-Powered Security' },
    { name: 'Cloud & DevOps', href: '/services/cloud-devops', icon: Cloud, description: 'Infrastructure & Automation' },
    { name: 'IoT & Edge', href: '/services/iot-edge', icon: Cpu, description: 'Smart Devices & Networks' },
    { name: 'Blockchain', href: '/services/blockchain-enterprise-solutions', icon: Lock, description: 'DeFi & Smart Contracts' },
    { name: 'Healthcare Tech', href: '/services/healthcare-tech', icon: Heart, description: 'AI Medicine & Diagnostics' },
    { name: 'Sustainability', href: '/services/sustainability', icon: Globe, description: 'Green IT Solutions' },
    { name: 'Micro SaaS', href: '/services/micro-saas-solutions', icon: ShoppingCart, description: 'Productized SaaS for niches' },
    { name: 'AI Auto Email', href: '/services/ai-auto-email-responder', icon: MessageCircle, description: 'Faster replies, CRM logging' },
    { name: 'Feedback Surveys', href: '/services/mobile-feedback-surveys', icon: Users, description: 'NPS/CSAT with AI insights' },
    { name: 'LLM Content Studio', href: '/services/llm-content-studio', icon: BookOpen, description: 'On-brand AI content' },
    { name: 'FinOps Advisor', href: '/services/finops-advisor', icon: DollarSign, description: 'Cloud cost optimization' },
  ];

  const servicesCategories = [
    {
      name: 'Core Services',
      icon: Settings,
      color: 'from-blue-600 to-cyan-600',
      services: [
        { name: 'Services Overview', href: '/services-overview', description: 'Complete service portfolio' },
        { name: 'AI Services', href: '/ai-services', description: 'AI-powered solutions' },
        { name: 'IT Services', href: '/it-services', description: 'Enterprise IT solutions' },
        { name: 'Micro SaaS', href: '/micro-saas', description: 'Scalable software solutions' }
      ]
    },
    {
      name: 'AI & Analytics',
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
      services: [
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', description: 'Machine Learning & Data Science' },
        { name: 'AI Sales Copilot', href: '/services/ai-sales-copilot', description: 'AI-powered sales automation' },
        { name: 'AI Compliance Assistant', href: '/services/ai-compliance-assistant', description: 'Regulatory compliance automation' },
        { name: 'LLM Content Studio', href: '/services/llm-content-studio', description: 'AI content generation' },
        { name: 'AI Predictive Analytics', href: '/services/ai-predictive-analytics', description: 'Business forecasting & insights' },
        { name: 'AI Healthcare Analytics', href: '/services/ai-healthcare-analytics', description: 'Medical AI & diagnostics' }
      ]
    },
    {
      name: 'Cybersecurity',
      icon: Shield,
      color: 'from-red-600 to-orange-600',
      services: [
        { name: 'AI Compliance Copilot', href: '/services/ai-compliance-copilot', description: 'AI-Powered Security' },
        { name: 'Zero Trust Architecture', href: '/services/zero-trust-network-architecture', description: 'Advanced security' },
        { name: 'AI Cybersecurity Suite', href: '/services/ai-cybersecurity-suite', description: 'Next-gen threat detection' },
        { name: 'AI Cybersecurity Defense', href: '/services/ai-cybersecurity-defense', description: 'Real-time threat response' }
      ]
    },
    {
      name: 'Cloud & DevOps',
      icon: Cloud,
      color: 'from-green-600 to-emerald-600',
      services: [
        { name: 'Cloud DevOps', href: '/services/cloud-devops', description: 'Infrastructure & Automation' },
        { name: 'Cloud FinOps Optimizer', href: '/services/cloud-finops-optimizer', description: 'Cost optimization' },
        { name: 'FinOps Advisor', href: '/services/finops-advisor', description: 'Financial operations' },
        { name: 'Cloud FinOps Platform', href: '/services/cloud-finops-platform', description: 'Cost management & optimization' }
      ]
    },
    {
      name: 'Digital Solutions',
      icon: Rocket,
      color: 'from-orange-600 to-red-600',
      services: [
        { name: 'Digital Twin', href: '/services/digital-twin', description: 'Simulation & Monitoring' },
        { name: 'IT Infrastructure', href: '/services/it-infrastructure', description: 'Enterprise infrastructure' },
        { name: 'Data Analytics', href: '/services/data-analytics', description: 'Business intelligence' },
        { name: 'Digital Transformation', href: '/services/digital-transformation', description: 'Business process modernization' }
      ]
    },
    {
      name: 'Emerging Technology',
      icon: Atom,
      color: 'from-indigo-600 to-purple-600',
      services: [
        { name: 'Quantum Computing', href: '/services/quantum-computing', description: 'Next-gen computing power' },
        { name: 'Quantum AI Platform', href: '/services/quantum-ai-platform', description: 'Quantum machine learning' },
        { name: 'Blockchain Solutions', href: '/services/blockchain-enterprise-solutions', description: 'Distributed ledger technology' },
        { name: 'Blockchain Platform', href: '/services/blockchain-enterprise-platform', description: 'Enterprise blockchain' }
      ]
    },
    {
      name: 'Edge & IoT',
      icon: Cpu,
      color: 'from-teal-600 to-cyan-600',
      services: [
        { name: 'IoT Edge Computing', href: '/services/iot-edge', description: 'Smart device networks' },
        { name: 'Edge Computing Platform', href: '/services/edge-computing-platform', description: 'Distributed computing' },
        { name: 'Edge IoT Platform', href: '/services/edge-computing-iot-platform', description: 'Real-time edge processing' }
      ]
    },
    {
      name: 'Sustainability',
      icon: Leaf,
      color: 'from-emerald-600 to-green-600',
      services: [
        { name: 'Green IT', href: '/services/green-it', description: 'Environmentally conscious IT' },
        { name: 'Sustainability Platform', href: '/services/sustainable-tech-platform', description: 'Environmental impact tracking' }
      ]
    }
  ];

  const solutionsCategories = [
    {
      name: 'AI Solutions',
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
      solutions: [
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', description: 'Machine Learning & Data Science' },
        { name: 'AI Sales Copilot', href: '/services/ai-sales-copilot', description: 'AI-powered sales automation' },
        { name: 'AI Compliance Assistant', href: '/services/ai-compliance-assistant', description: 'Regulatory compliance automation' },
        { name: 'LLM Content Studio', href: '/services/llm-content-studio', description: 'AI content generation' },
        { name: 'AI Predictive Analytics', href: '/services/ai-predictive-analytics', description: 'Business forecasting & insights' },
        { name: 'AI Healthcare Analytics', href: '/services/ai-healthcare-analytics', description: 'Medical AI & diagnostics' },
        { name: 'AI Workflow Orchestrator', href: '/services/ai-workflow-orchestrator', description: 'Process automation' },
        { name: 'AI Data Governance', href: '/services/ai-data-governance', description: 'Data management & compliance' },
        { name: 'AI Customer Success Platform', href: '/services/ai-customer-success-platform', description: 'Customer experience optimization' }
      ]
    },
    {
      name: 'Quantum & Emerging',
      icon: Star,
      color: 'from-indigo-600 to-purple-600',
      solutions: [
        { name: 'Quantum AI Platform', href: '/services/quantum-ai-platform', description: 'Next-gen quantum computing' },
        { name: 'AI Cybersecurity Suite', href: '/services/ai-cybersecurity-suite', description: 'Advanced security solutions' },
        { name: 'AI Healthcare Analytics', href: '/services/ai-healthcare-analytics', description: 'Healthcare data insights' },
        { name: 'Quantum Computing Platform', href: '/services/quantum-computing-optimization-platform', description: 'Quantum optimization' },
        { name: 'Blockchain Enterprise Platform', href: '/services/blockchain-enterprise-platform', description: 'Enterprise blockchain solutions' }
      ]
    },
    {
      name: 'Innovation Showcase',
      icon: TrendingUp,
      color: 'from-green-600 to-emerald-600',
      solutions: [
        { name: 'Innovative Services 2025', href: '/innovative-services-showcase-2025', icon: Star, description: 'Latest cutting-edge solutions' },
        { name: 'Revolutionary Services 2030', href: '/revolutionary-services-showcase-2030', icon: TrendingUp, description: 'Future-ready services' },
        { name: 'Pricing Guide 2030', href: '/pricing-2030', icon: DollarSign, description: 'Advanced pricing strategies' },
        { name: 'Comprehensive Pricing 2025', href: '/pricing', icon: BarChart3, description: 'Market-competitive pricing' }
      ]
    }
  ];

  const innovationCategories = [
    {
      name: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
      innovations: [
        { name: 'AI Predictive Analytics', href: '/services/ai-predictive-analytics-platform', description: 'Enterprise ML platform' },
        { name: 'AI Cybersecurity Defense', href: '/services/ai-cybersecurity-defense-platform', description: 'AI-powered security' },
        { name: 'AI Healthcare Analytics', href: '/services/ai-healthcare-analytics-platform', description: 'Medical AI solutions' },
        { name: 'AI Sales & Marketing', href: '/services/ai-sales-marketing-automation', description: 'Automated sales platform' }
      ]
    },
    {
      name: 'Quantum Computing',
      icon: Atom,
      color: 'from-indigo-600 to-purple-600',
      innovations: [
        { name: 'Quantum Optimization Platform', href: '/services/quantum-computing-optimization-platform', description: 'Quantum problem solving' },
        { name: 'Quantum AI Platform', href: '/services/quantum-ai-platform', description: 'Quantum machine learning' }
      ]
    },
    {
      name: 'Edge & IoT',
      icon: Cpu,
      color: 'from-green-600 to-emerald-600',
      innovations: [
        { name: 'Edge Computing & IoT Platform', href: '/services/edge-computing-iot-platform', description: 'Distributed edge computing' },
        { name: 'Edge Computing Platform', href: '/services/edge-computing-platform', description: 'Advanced edge solutions' }
      ]
    },
    {
      name: 'Blockchain & DLT',
      icon: Blockchain,
      color: 'from-orange-600 to-red-600',
      innovations: [
        { name: 'Blockchain Enterprise Platform', href: '/services/blockchain-enterprise-platform', description: 'Enterprise blockchain' },
        { name: 'Blockchain Solutions', href: '/services/blockchain-enterprise-solutions', description: 'Supply chain & DeFi' }
      ]
    },
    {
      name: 'Sustainability & Green Tech',
      icon: Leaf,
      color: 'from-emerald-600 to-teal-600',
      innovations: [
        { name: 'Sustainable Technology Platform', href: '/services/sustainable-tech-platform', description: 'Environmental impact tracking' },
        { name: 'Green IT Solutions', href: '/services/green-it', description: 'Eco-friendly technology' }
      ]
    },
    {
      name: 'Digital Twin & Simulation',
      icon: Eye,
      color: 'from-blue-600 to-cyan-600',
      innovations: [
        { name: 'Digital Twin Enterprise Platform', href: '/services/digital-twin-enterprise-platform', description: 'Virtual asset simulation' },
        { name: 'Digital Twin Solutions', href: '/services/digital-twin', description: '3D modeling & monitoring' }
      ]
    }
  ];

  const quickLinks = [
    { name: 'Innovative Services 2025', href: '/innovative-services-showcase-2025', icon: Star, description: 'Latest cutting-edge solutions' },
    { name: 'Services Showcase', href: '/revolutionary-services-showcase-2030', icon: TrendingUp, description: 'Future-ready services' },
    { name: 'Pricing Guide 2025', href: '/pricing', icon: DollarSign, description: 'Market-competitive pricing' },
    { name: 'Pricing Guide 2030', href: '/pricing-2030', icon: BarChart3, description: 'Advanced pricing strategies' },
    { name: 'Request Quote', href: '/request-quote', icon: MessageCircle, description: 'Get custom pricing' },
  ];

  const companyCategories = [
    {
      name: 'About Us',
      icon: Building,
      color: 'from-blue-600 to-cyan-600',
      items: [
        { name: 'About Us', href: '/about', description: 'Our story and mission' },
        { name: 'Team', href: '/team', description: 'Meet our experts' },
        { name: 'Careers', href: '/careers', description: 'Join our team' },
        { name: 'Partners', href: '/partners', description: 'Strategic partnerships' }
      ]
    },
    {
      name: 'Resources',
      icon: BookOpen,
      color: 'from-green-600 to-emerald-600',
      items: [
        { name: 'Blog', href: '/blog', description: 'Latest insights and news' },
        { name: 'Press', href: '/press', description: 'Media resources' },
        { name: 'Case Studies', href: '/case-studies', description: 'Success stories' },
        { name: 'White Papers', href: '/white-papers', description: 'In-depth research' }
      ]
    }
  ];

  const supportCategories = [
    {
      name: 'Help & Support',
      icon: HelpCircle,
      color: 'from-blue-600 to-cyan-600',
      items: [
        { name: 'Help Center', href: '/help', description: 'Find answers to questions' },
        { name: 'Support Portal', href: '/support', description: 'Technical assistance' },
        { name: 'FAQ', href: '/faq', description: 'Frequently asked questions' },
        { name: 'Contact Support', href: '/contact', description: 'Get in touch' }
      ]
    },
    {
      name: 'Resources',
      icon: BookOpen,
      color: 'from-green-600 to-emerald-600',
      items: [
        { name: 'Documentation', href: '/docs', description: 'Technical guides' },
        { name: 'Training', href: '/training', description: 'Learning resources' },
        { name: 'Community', href: '/community', description: 'Join our community' },
        { name: 'Onsite Support', href: '/onsite-support', description: 'Field services' }
      ]
    }
  ];

  const contactInfo = {
    phone: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    address: "364 E Main St STE 1008 Middletown DE 19709",
    website: "https://ziontechgroup.com"
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {mainNavigation.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div className="relative group">
                    <button className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-200 py-2">
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    
                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-0 w-96 bg-slate-800 border border-slate-700 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                      <div className="p-6">
                        {item.name === 'Services' && (
                          <div className="grid grid-cols-2 gap-6">
                            {servicesCategories.map((category) => (
                              <div key={category.name}>
                                <h3 className="text-sm font-semibold text-white mb-3 flex items-center">
                                  <category.icon className="w-4 h-4 mr-2" />
                                  {category.name}
                                </h3>
                                <div className="space-y-2">
                                  {category.services.map((service) => (
                                    <Link
                                      key={service.name}
                                      to={service.href}
                                      className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                                    >
                                      {service.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                        
                        {item.name === 'Solutions' && (
                          <div className="grid grid-cols-2 gap-6">
                            {solutionsCategories.map((category) => (
                              <div key={category.name}>
                                <h3 className="text-sm font-semibold text-white mb-3 flex items-center">
                                  <category.icon className="w-4 h-4 mr-2" />
                                  {category.name}
                                </h3>
                                <div className="space-y-2">
                                  {category.solutions.map((solution) => (
                                    <Link
                                      key={solution.name}
                                      to={solution.href}
                                      className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                                    >
                                      {solution.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                        {item.name === 'Innovation' && (
                          <div className="grid grid-cols-2 gap-6">
                            {innovationCategories.map((category) => (
                              <div key={category.name}>
                                <h3 className="text-sm font-semibold text-white mb-3 flex items-center">
                                  <category.icon className="w-4 h-4 mr-2" />
                                  {category.name}
                                </h3>
                                <div className="space-y-2">
                                  {category.innovations.map((innovation) => (
                                    <Link
                                      key={innovation.name}
                                      to={innovation.href}
                                      className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                                    >
                                      {innovation.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                        {item.name === 'Company' && (
                          <div className="grid grid-cols-2 gap-6">
                            {companyCategories.map((category) => (
                              <div key={category.name}>
                                <h3 className="text-sm font-semibold text-white mb-3 flex items-center">
                                  <category.icon className="w-4 h-4 mr-2" />
                                  {category.name}
                                </h3>
                                <div className="space-y-2">
                                  {category.items.map((item) => (
                                    <Link
                                      key={item.name}
                                      to={item.href}
                                      className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                                    >
                                      {item.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                        {item.name === 'Support' && (
                          <div className="grid grid-cols-2 gap-6">
                            {supportCategories.map((category) => (
                              <div key={category.name}>
                                <h3 className="text-sm font-semibold text-white mb-3 flex items-center">
                                  <category.icon className="w-4 h-4 mr-2" />
                                  {category.name}
                                </h3>
                                <div className="space-y-2">
                                  {category.items.map((item) => (
                                    <Link
                                      key={item.name}
                                      to={item.href}
                                      className="block text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                                    >
                                      {item.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 py-2"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Right side - Search, User, Theme Toggle */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <form onSubmit={handleSearch} className="hidden md:block">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                >
                  {isSearching ? <ZionLoadingSpinner size="sm" /> : <Search className="w-5 h-5" />}
                </button>
              </div>
            </form>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* User Menu */}
            <div className="relative">
              <button className="p-2 text-gray-400 hover:text-white transition-colors duration-200">
                <User className="w-5 h-5" />
              </button>
            </div>

            {/* Notifications */}
            <button className="p-2 text-gray-400 hover:text-white transition-colors duration-200 relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors duration-200"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-slate-900 border-t border-slate-700"
          >
            <div className="px-4 py-6 space-y-6">
              {/* Mobile Search */}
              <form onSubmit={handleSearch}>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                  >
                    {isSearching ? <ZionLoadingSpinner size="sm" /> : <Search className="w-5 h-5" />}
                  </button>
                </div>
              </form>

              {/* Mobile Navigation */}
              <nav className="space-y-4">
                {mainNavigation.map((item) => (
                  <div key={item.name}>
                    {item.hasDropdown ? (
                      <div>
                        <button
                          onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                          className="flex items-center justify-between w-full text-left text-gray-300 hover:text-white transition-colors duration-200 py-2"
                        >
                          <span>{item.name}</span>
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>
                        
                        {servicesDropdownOpen && (
                          <div className="ml-4 mt-2 space-y-2">
                            {item.name === 'Services' && servicesCategories.map((category) => (
                              <div key={category.name} className="ml-4">
                                <h4 className="text-sm font-semibold text-cyan-400 mb-2">{category.name}</h4>
                                <div className="space-y-1">
                                  {category.services.map((service) => (
                                    <Link
                                      key={service.name}
                                      to={service.href}
                                      className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-200 py-1"
                                    >
                                      {service.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                            
                            {item.name === 'Solutions' && solutionsCategories.map((category) => (
                              <div key={category.name} className="ml-4">
                                <h4 className="text-sm font-semibold text-cyan-400 mb-2">{category.name}</h4>
                                <div className="space-y-1">
                                  {category.solutions.map((solution) => (
                                    <Link
                                      key={solution.name}
                                      to={solution.href}
                                      className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-200 py-1"
                                    >
                                      {solution.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}

                            {item.name === 'Innovation' && innovationCategories.map((category) => (
                              <div key={category.name} className="ml-4">
                                <h4 className="text-sm font-semibold text-cyan-400 mb-2">{category.name}</h4>
                                <div className="space-y-1">
                                  {category.innovations.map((innovation) => (
                                    <Link
                                      key={innovation.name}
                                      to={innovation.href}
                                      className="block text-sm text-gray-400 hover:text-cyan-400 transition-colors duration-200 py-1"
                                    >
                                      {innovation.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        className="block text-gray-300 hover:text-white transition-colors duration-200 py-2"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              {/* Contact Info */}
              <div className="pt-6 border-t border-slate-700">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Phone className="w-4 h-4 text-cyan-400" />
                    <span>{contactInfo.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Mail className="w-4 h-4 text-cyan-400" />
                    <span>{contactInfo.email}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <MapPin className="w-4 h-4 text-cyan-400" />
                    <span>{contactInfo.address}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
