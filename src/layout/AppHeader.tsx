import { ArrowRight, Atom, BookOpen, Brain, Building, Building2, ChevronDown, Cloud, Code, Cpu, DollarSign, Eye, FileText, Globe, Handshake, Heart, HelpCircle, Leaf, Lock, Mail, MapPin, Menu, MessageCircle, Phone, Rocket, Scale, Search, Settings, Shield, ShoppingCart, Star, Target, TrendingUp, Users, X, Zap, PenTool, Truck, Play, ShieldCheck, HeartHandshake, BarChart3 } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ThemeToggle } from '../components/ThemeToggle';

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
      name: 'AI Autonomous Operations', 
      href: '/services/ai-autonomous-business-operations-platform', 
      icon: Brain, 
      description: 'Autonomous Business Management',
      featured: true,
      color: 'from-purple-500 to-cyan-500'
    },
    { 
      name: 'Quantum AI Cybersecurity', 
      href: '/services/quantum-ai-cybersecurity-platform', 
      icon: Shield, 
      description: 'Quantum Security & AI',
      featured: true,
      color: 'from-indigo-500 to-purple-500'
    },
    { 
      name: 'AI Content Creation Studio', 
      href: '/services/ai-content-creation-studio', 
      icon: PenTool, 
      description: 'AI Content Generation',
      featured: true,
      color: 'from-blue-500 to-indigo-500'
    },
    { 
      name: 'AI Sales Intelligence', 
      href: '/services/ai-sales-intelligence-platform', 
      icon: TrendingUp, 
      description: 'Sales AI & Analytics',
      featured: true,
      color: 'from-blue-500 to-indigo-500'
    },
    // NEW INNOVATIVE SERVICES
    { 
      name: 'AI Customer Support', 
      href: '/services/ai-customer-support-automation', 
      icon: MessageCircle, 
      description: 'AI Support Automation',
      featured: true,
      color: 'from-blue-500 to-purple-500'
    },
    { 
      name: 'AI Data Analytics & BI', 
      href: '/services/ai-data-analytics-bi', 
      icon: BarChart3, 
      description: 'Business Intelligence',
      featured: true,
      color: 'from-cyan-500 to-blue-500'
    },
    { 
      name: 'Cloud Infrastructure & DevOps', 
      href: '/services/cloud-infrastructure-devops', 
      icon: Cloud, 
      description: 'Cloud & DevOps Solutions',
      featured: true,
      color: 'from-indigo-500 to-purple-500'
    },
    { 
      name: 'AI Legal Document Analyzer', 
      href: '/services/ai-legal-document-analyzer', 
      icon: Scale, 
      description: 'Legal AI & Contract Analysis',
      featured: true,
      color: 'from-indigo-500 to-purple-500'
    },
    { 
      name: 'IoT Edge Computing', 
      href: '/services/iot-edge-computing-platform', 
      icon: Cpu, 
      description: 'IoT & Edge Solutions',
      featured: true,
      color: 'from-teal-500 to-cyan-500'
    },
    { 
      name: 'Digital Twin Platform', 
      href: '/services/digital-twin-platform', 
      icon: Globe, 
      description: 'Digital Twin Solutions',
      featured: true,
      color: 'from-blue-500 to-indigo-500'
    },
    { 
      name: 'Blockchain Web3 Platform', 
      href: '/services/blockchain-web3-platform', 
      icon: Globe2, 
      description: 'Blockchain & Web3',
      featured: true,
      color: 'from-yellow-500 to-orange-500'
    },
    { 
      name: 'AI Healthcare Diagnostics', 
      href: '/services/ai-healthcare-diagnostics-platform', 
      icon: Heart, 
      description: 'AI Medical Diagnostics',
      featured: true,
      color: 'from-pink-500 to-red-500'
    },
    { 
      name: 'AI Education Platform', 
      href: '/services/ai-education-platform', 
      icon: BookOpen, 
      description: 'AI-Powered Learning',
      featured: true,
      color: 'from-blue-500 to-indigo-500'
    },
    { 
      name: 'AI Metaverse Platform', 
      href: '/services/ai-metaverse-platform', 
      icon: Globe, 
      description: 'AI Metaverse Solutions',
      featured: true,
      color: 'from-purple-500 to-indigo-500'
    },
    { 
      name: 'AI Space Technology', 
      href: '/services/ai-space-technology-platform', 
      icon: Rocket, 
      description: 'AI Space Solutions',
      featured: true,
      color: 'from-indigo-500 to-purple-500'
    },
    { 
      name: 'AI Green Technology', 
      href: '/services/ai-green-technology-platform', 
      icon: Leaf, 
      description: 'Sustainable AI Solutions',
      featured: true,
      color: 'from-green-500 to-emerald-500'
    },
    { 
      name: 'AI Development Platform', 
      href: '/services/ai-development-platform', 
      icon: Code, 
      description: 'AI Code Generation',
      featured: true,
      color: 'from-cyan-500 to-blue-500'
    },
    { 
      name: 'Micro SaaS Products', 
      href: '/services/micro-saas', 
      icon: ShoppingCart, 
      description: 'Micro SaaS Solutions',
      featured: true,
      color: 'from-orange-500 to-red-500'
    },
    { 
      name: 'AI Real Estate Analyzer', 
      href: '/services/ai-real-estate-investment-analyzer', 
      icon: Building, 
      description: 'Real Estate Investment AI',
      featured: true,
      color: 'from-emerald-500 to-green-500'
    },
    { 
      name: 'AI Restaurant Management', 
      href: '/services/ai-restaurant-management-system', 
      icon: ShoppingCart, 
      description: 'Hospitality AI & Analytics',
      featured: true,
      color: 'from-orange-500 to-red-500'
    },
    { 
      name: 'AI Fitness Coaching', 
      href: '/services/ai-fitness-coaching-platform', 
      icon: Heart, 
      description: 'Health & Fitness AI',
      featured: true,
      color: 'from-pink-500 to-rose-500'
    },
    { 
      name: 'Comprehensive Services Showcase', 
      href: '/comprehensive-services-showcase-2030', 
      icon: Star, 
      description: 'Complete Service Portfolio',
      featured: true,
      color: 'from-yellow-500 to-orange-500'
    },
    { 
      name: 'AI E-commerce Personalization', 
      href: '/services/ai-ecommerce-personalization-engine', 
      icon: ShoppingCart, 
      description: 'E-commerce AI & Optimization',
      featured: true,
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      name: 'AI Supply Chain Optimization', 
      href: '/services/ai-supply-chain-optimization', 
      icon: Truck, 
      description: 'Logistics & Supply Chain AI',
      featured: true,
      color: 'from-teal-500 to-emerald-500'
    },
    { 
      name: 'AI Video Creation Studio', 
      href: '/services/ai-video-content-creation-studio', 
      icon: Play, 
      description: 'Video AI & Content Creation',
      featured: true,
      color: 'from-purple-500 to-pink-500'
    },
    { 
      name: 'AI Churn Prediction', 
      href: '/services/ai-customer-churn-prediction', 
      icon: TrendingUp, 
      description: 'Customer Retention AI',
      featured: true,
      color: 'from-green-500 to-emerald-500'
    },
    { 
      name: 'AI Fraud Detection', 
      href: '/services/ai-financial-fraud-detection', 
      icon: ShieldCheck, 
      description: 'Financial Security AI',
      featured: true,
      color: 'from-red-500 to-orange-500'
    },
    { 
      name: 'AI Energy Management', 
      href: '/services/ai-energy-management-system', 
      icon: Leaf, 
      description: 'Green Tech & Energy AI',
      featured: true,
      color: 'from-green-500 to-teal-500'
    }
  ];

  const solutions = [
    { 
      name: 'Enterprise AI Solutions', 
      href: '/solutions/enterprise-ai', 
      icon: Building2, 
      description: 'Large-scale AI implementations',
      featured: true,
      color: 'from-blue-500 to-indigo-500'
    },
    { 
      name: 'SMB AI Solutions', 
      href: '/solutions/smb-ai', 
      icon: Building, 
      description: 'AI for small & medium businesses',
      featured: true,
      color: 'from-green-500 to-emerald-500'
    },
    { 
      name: 'Startup AI Solutions', 
      href: '/solutions/startup-ai', 
      icon: Rocket, 
      description: 'AI solutions for startups',
      featured: true,
      color: 'from-purple-500 to-pink-500'
    },
    { 
      name: 'Government AI Solutions', 
      href: '/solutions/government-ai', 
      icon: Shield, 
      description: 'AI for government agencies',
      featured: true,
      color: 'from-indigo-500 to-blue-500'
    },
    { 
      name: 'Healthcare AI Solutions', 
      href: '/solutions/healthcare-ai', 
      icon: Heart, 
      description: 'AI solutions for healthcare',
      featured: true,
      color: 'from-red-500 to-pink-500'
    },
    { 
      name: 'Financial AI Solutions', 
      href: '/solutions/financial-ai', 
      icon: DollarSign, 
      description: 'AI for financial services',
      featured: true,
      color: 'from-emerald-500 to-green-500'
    }
  ];

  const resources = [
    { 
      name: 'AI Research Papers', 
      href: '/resources/research-papers', 
      icon: FileText, 
      description: 'Latest AI research & insights',
      featured: true,
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      name: 'AI Case Studies', 
      href: '/case-studies', 
      icon: BookOpen, 
      description: 'Real-world AI implementations',
      featured: true,
      color: 'from-purple-500 to-indigo-500'
    },
    { 
      name: 'AI Webinars', 
      href: '/webinars', 
      icon: Users, 
      description: 'Live AI learning sessions',
      featured: true,
      color: 'from-green-500 to-emerald-500'
    },
    { 
      name: 'AI White Papers', 
      href: '/white-papers', 
      icon: FileText, 
      description: 'In-depth AI analysis',
      featured: true,
      color: 'from-orange-500 to-red-500'
    },
    { 
      name: 'AI Documentation', 
      href: '/docs', 
      icon: BookOpen, 
      description: 'Technical AI documentation',
      featured: true,
      color: 'from-teal-500 to-cyan-500'
    },
    { 
      name: 'AI FAQ', 
      href: '/faq', 
      icon: HelpCircle, 
      description: 'Common AI questions',
      featured: true,
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const quickLinks = [
    { name: 'Marketplace', href: '/marketplace', icon: ShoppingCart },
    { name: 'Request Quote', href: '/request-quote', icon: MessageCircle },
    { name: 'Pricing', href: '/pricing', icon: DollarSign },
    { name: 'Careers', href: '/careers', icon: Users },
                  { name: 'Partners', href: '/partners', icon: HeartHandshake },
    { name: 'Privacy', href: '/privacy', icon: Shield },
    { name: 'Terms', href: '/terms', icon: BookOpen },
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Rocket className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
              </div>
              <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                {item.hasDropdown ? (
                  <button
                    onClick={() => {
                      if (item.name === 'Services') setServicesDropdownOpen(!servicesDropdownOpen);
                      if (item.name === 'Solutions') setSolutionsDropdownOpen(!solutionsDropdownOpen);
                      if (item.name === 'Resources') setResourcesDropdownOpen(!resourcesDropdownOpen);
                    }}
                    className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200"
                  >
                    <span>{item.name}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                )}

                {/* Services Dropdown */}
                {item.name === 'Services' && servicesDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-xl shadow-2xl border border-gray-200/20 backdrop-blur-xl opacity-100 scale-100 transition-all duration-200">
                    <div className="p-6">
                      <div className="grid grid-cols-1 gap-4">
                        {services.map((service) => (
                          <Link
                            key={service.name}
                            to={service.href}
                            className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-all duration-200"
                            onClick={() => setServicesDropdownOpen(false)}
                          >
                            <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center flex-shrink-0`}>
                              <service.icon className="w-5 h-5 text-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                                {service.name}
                              </p>
                              <p className="text-xs text-gray-500 mt-1">
                                {service.description}
                              </p>
                            </div>
                            {service.featured && (
                              <Star className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                            )}
                          </Link>
                        ))}
                      </div>
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <Link
                          to="/services"
                          className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200"
                          onClick={() => setServicesDropdownOpen(false)}
                        >
                          View All Services
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}

                {/* Solutions Dropdown */}
                {item.name === 'Solutions' && solutionsDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-200/20 backdrop-blur-xl opacity-100 scale-100 transition-all duration-200">
                    <div className="p-6">
                      <div className="grid grid-cols-1 gap-4">
                        {solutions.map((solution) => (
                          <Link
                            key={solution.name}
                            to={solution.href}
                            className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-all duration-200"
                            onClick={() => setSolutionsDropdownOpen(false)}
                          >
                            <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${solution.color} flex items-center justify-center flex-shrink-0`}>
                              <solution.icon className="w-5 h-5 text-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                                {solution.name}
                              </p>
                              <p className="text-xs text-gray-500 mt-1">
                                {solution.description}
                              </p>
                            </div>
                            {solution.featured && (
                              <Star className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                            )}
                          </Link>
                        ))}
                      </div>
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <Link
                          to="/solutions"
                          className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200"
                          onClick={() => setSolutionsDropdownOpen(false)}
                        >
                          View All Solutions
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}

                {/* Resources Dropdown */}
                {item.name === 'Resources' && resourcesDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-200/20 backdrop-blur-xl opacity-100 scale-100 transition-all duration-200">
                    <div className="p-6">
                      <div className="grid grid-cols-1 gap-4">
                        {resources.map((resource) => (
                          <Link
                            key={resource.name}
                            to={resource.href}
                            className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-all duration-200"
                            onClick={() => setResourcesDropdownOpen(false)}
                          >
                            <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${resource.color} flex items-center justify-center flex-shrink-0`}>
                              <resource.icon className="w-5 h-5 text-white" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                                {resource.name}
                              </p>
                              <p className="text-xs text-gray-500 mt-1">
                                {resource.description}
                              </p>
                            </div>
                            {resource.featured && (
                              <Star className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                            )}
                          </Link>
                        ))}
                      </div>
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <Link
                          to="/resources"
                          className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200"
                          onClick={() => setResourcesDropdownOpen(false)}
                        >
                          View All Resources
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right side - Search, Contact, Mobile menu */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="hidden md:block relative">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 pl-10 pr-4 py-2 text-sm bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <button
                  type="submit"
                  disabled={isSearching}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                >
                  {isSearching ? (
                    <div className="w-4 h-4 border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin" />
                  ) : (
                    <ArrowRight className="w-4 h-4" />
                  )}
                </button>
              </form>
            </div>

            {/* Contact Button */}
            <div className="hidden md:block">
              <Link
                to="/contact"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <Phone className="w-4 h-4 mr-2" />
                Get Started
              </Link>
            </div>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-all duration-200"
              >
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? (
                  <X className="block h-6 w-6" />
                ) : (
                  <Menu className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${
        mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
          {/* Mobile Search */}
          <div className="px-3 py-2">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-sm bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            </form>
          </div>

          {/* Mobile Navigation Links */}
          {navigation.map((item) => (
            <div key={item.name}>
              {item.hasDropdown ? (
                <div>
                  <button
                    onClick={() => {
                      if (item.name === 'Services') setServicesDropdownOpen(!servicesDropdownOpen);
                      if (item.name === 'Solutions') setSolutionsDropdownOpen(!solutionsDropdownOpen);
                      if (item.name === 'Resources') setResourcesDropdownOpen(!resourcesDropdownOpen);
                    }}
                    className="w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200 flex items-center justify-between"
                  >
                    {item.name}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
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
                          className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                      <Link
                        to="/services"
                        className="block px-3 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-200"
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
                          className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
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
                          className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
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
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}

          {/* Mobile Contact Button */}
          <div className="px-3 py-2">
            <Link
              to="/contact"
              className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Phone className="w-4 h-4 mr-2" />
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
