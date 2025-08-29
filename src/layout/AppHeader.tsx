import { ArrowRight, Atom, BookOpen, Brain, Building, Building2, ChevronDown, Cloud, Code, Cpu, DollarSign, FileText, Globe, HeartHandshake, Heart, HelpCircle, Leaf, Lock, Mail, MapPin, Menu, MessageCircle, PenTool, Phone, Rocket, Scale, Search, Settings, Shield, ShoppingCart, Star, Target, TrendingUp, Users, X, Zap, Sparkles, Flame, Crown, Infinity, Sun, Moon, Truck, Key, Globe2, ShieldCheck, Scale as ScaleIcon, Building2 as Building2Icon, Home, Gauge, GitFork, MessageCircle as MessageCircleIcon, HelpCircle as HelpCircleIcon, FileText as FileTextIcon, Settings as SettingsIcon, BarChart3, Database, Network, Eye, Car, Factory, City, CheckCircle, ArrowUpRight, Play, Linkedin, Twitter, Facebook, Instagram, Youtube, Github } from 'lucide-react';
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
      name: 'Comprehensive Services 2026', 
      href: '/comprehensive-services-showcase-2026', 
      icon: Rocket, 
      description: 'All Services & Pricing',
      featured: true,
      color: 'from-cyan-500 to-blue-500'
    },
    { 
      name: 'Micro SaaS Solutions', 
      href: '/services/micro-saas', 
      icon: ShoppingCart, 
      description: 'Innovative SaaS Platforms',
      featured: true,
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      name: 'AI Business Intelligence', 
      href: '/services/ai-business-intelligence', 
      icon: Brain, 
      description: 'Machine Learning & Data Science',
      featured: true,
      color: 'from-purple-500 to-pink-500'
    },
    { 
      name: 'AI Healthcare Platform', 
      href: '/services/ai-healthcare-platform', 
      icon: Heart, 
      description: 'Medical AI & Diagnostics',
      featured: true,
      color: 'from-red-500 to-pink-500'
    },
    { 
      name: 'AI Content Creation', 
      href: '/services/ai-content-creation', 
      icon: PenTool, 
      description: 'Content Generation & Optimization',
      featured: true,
      color: 'from-blue-500 to-indigo-500'
    },
    { 
      name: 'AI Cybersecurity', 
      href: '/services/ai-cybersecurity', 
      icon: Shield, 
      description: 'AI-Powered Security',
      featured: true,
      color: 'from-green-500 to-blue-500'
    },
    { 
      name: 'Quantum Computing', 
      href: '/services/quantum-computing', 
      icon: Atom, 
      description: 'Quantum AI & Optimization',
      featured: true,
      color: 'from-violet-500 to-purple-500'
    },
    { 
      name: 'Blockchain & Web3', 
      href: '/services/blockchain-web3', 
      icon: Code, 
      description: 'Decentralized Solutions',
      featured: true,
      color: 'from-yellow-500 to-orange-500'
    },
    { 
      name: 'IoT Edge Computing', 
      href: '/services/iot-edge-computing', 
      icon: Network, 
      description: 'Smart IoT Solutions',
      featured: true,
      color: 'from-teal-500 to-green-500'
    },
    { 
      name: 'Digital Twin Platform', 
      href: '/services/digital-twin', 
      icon: Eye, 
      description: 'Virtual Replicas & Simulation',
      featured: true,
      color: 'from-indigo-500 to-purple-500'
    },
    { 
      name: 'Space Tech Solutions', 
      href: '/services/space-tech', 
      icon: Rocket, 
      description: 'Satellite & Space Operations',
      featured: true,
      color: 'from-blue-500 to-indigo-500'
    },
    { 
      name: 'Biotech AI Platform', 
      href: '/services/biotech-ai', 
      icon: Heart, 
      description: 'Drug Discovery & Healthcare AI',
      featured: true,
      color: 'from-pink-500 to-red-500'
    }
  ];

  const solutions = [
    {
      name: 'Enterprise Solutions',
      href: '/solutions/enterprise',
      icon: Building,
      description: 'Large-scale business transformation',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      name: 'Startup Solutions',
      href: '/solutions/startup',
      icon: Rocket,
      description: 'Rapid growth and scaling',
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'SMB Solutions',
      href: '/solutions/smb',
      icon: Building2,
      description: 'Small business optimization',
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'Industry Solutions',
      href: '/solutions/industry',
      icon: Factory,
      description: 'Sector-specific solutions',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Digital Transformation',
      href: '/solutions/digital-transformation',
      icon: Zap,
      description: 'Complete business modernization',
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  const resources = [
    {
      name: 'Case Studies',
      href: '/case-studies',
      icon: FileText,
      description: 'Success stories and implementations',
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'White Papers',
      href: '/white-papers',
      icon: BookOpen,
      description: 'In-depth research and insights',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      name: 'Webinars',
      href: '/webinars',
      icon: Play,
      description: 'Educational sessions and demos',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Blog',
      href: '/blog',
      icon: PenTool,
      description: 'Latest insights and updates',
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'Documentation',
      href: '/docs',
      icon: HelpCircle,
      description: 'Technical guides and APIs',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      name: 'FAQ',
      href: '/faq',
      icon: MessageCircle,
      description: 'Common questions and answers',
      color: 'from-teal-500 to-green-500'
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                <Rocket className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
              </div>
              <div className="hidden sm:block">
                <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <button
                    onClick={() => {
                      if (item.name === 'Services') setServicesDropdownOpen(!servicesDropdownOpen);
                      if (item.name === 'Solutions') setSolutionsDropdownOpen(!solutionsDropdownOpen);
                      if (item.name === 'Resources') setResourcesDropdownOpen(!resourcesDropdownOpen);
                    }}
                    className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors py-2"
                  >
                    <span>{item.name}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className="text-gray-300 hover:text-white transition-colors py-2"
                  >
                    {item.name}
                  </Link>
                )}

                {/* Services Dropdown */}
                {item.name === 'Services' && servicesDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-96 bg-slate-800/95 backdrop-blur-md rounded-2xl border border-slate-700/50 shadow-2xl">
                    <div className="p-6">
                      <div className="grid grid-cols-1 gap-4">
                        {services.map((service) => (
                          <Link
                            key={service.name}
                            to={service.href}
                            className="group flex items-start space-x-4 p-4 rounded-xl hover:bg-slate-700/50 transition-all duration-300"
                            onClick={() => setServicesDropdownOpen(false)}
                          >
                            <div className={`p-3 rounded-xl bg-gradient-to-r ${service.color}`}>
                              <service.icon className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <h3 className="font-semibold text-white group-hover:text-cyan-400 transition-colors">
                                  {service.name}
                                </h3>
                                {service.featured && (
                                  <Star className="w-4 h-4 text-yellow-400" />
                                )}
                              </div>
                              <p className="text-sm text-gray-400">{service.description}</p>
                            </div>
                            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                          </Link>
                        ))}
                      </div>
                      <div className="mt-6 pt-4 border-t border-slate-700/50">
                        <Link
                          to="/comprehensive-services-showcase-2026"
                          className="block w-full text-center py-3 px-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold rounded-xl transition-all duration-300"
                          onClick={() => setServicesDropdownOpen(false)}
                        >
                          View All Services
                        </Link>
                      </div>
                    </div>
                  </div>
                )}

                {/* Solutions Dropdown */}
                {item.name === 'Solutions' && solutionsDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md rounded-2xl border border-slate-700/50 shadow-2xl">
                    <div className="p-6">
                      <div className="space-y-4">
                        {solutions.map((solution) => (
                          <Link
                            key={solution.name}
                            to={solution.href}
                            className="group flex items-center space-x-4 p-4 rounded-xl hover:bg-slate-700/50 transition-all duration-300"
                            onClick={() => setSolutionsDropdownOpen(false)}
                          >
                            <div className={`p-3 rounded-xl bg-gradient-to-r ${solution.color}`}>
                              <solution.icon className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold text-white group-hover:text-cyan-400 transition-colors">
                                {solution.name}
                              </h3>
                              <p className="text-sm text-gray-400">{solution.description}</p>
                            </div>
                            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Resources Dropdown */}
                {item.name === 'Resources' && resourcesDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md rounded-2xl border border-slate-700/50 shadow-2xl">
                    <div className="p-6">
                      <div className="space-y-4">
                        {resources.map((resource) => (
                          <Link
                            key={resource.name}
                            to={resource.href}
                            className="group flex items-center space-x-4 p-4 rounded-xl hover:bg-slate-700/50 transition-all duration-300"
                            onClick={() => setResourcesDropdownOpen(false)}
                          >
                            <div className={`p-3 rounded-xl bg-gradient-to-r ${resource.color}`}>
                              <resource.icon className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold text-white group-hover:text-cyan-400 transition-colors">
                                {resource.name}
                              </h3>
                              <p className="text-sm text-gray-400">{resource.description}</p>
                            </div>
                            <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="hidden md:block relative">
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 pl-10 pr-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </form>
            </div>

            {/* Contact Info */}
            <div className="hidden lg:flex items-center space-x-4 text-sm text-gray-300">
              <a href={`tel:${contactInfo.phone}`} className="flex items-center space-x-1 hover:text-cyan-400 transition-colors">
                <Phone className="w-4 h-4" />
                <span className="hidden xl:inline">{contactInfo.phone}</span>
              </a>
              <a href={`mailto:${contactInfo.email}`} className="flex items-center space-x-1 hover:text-cyan-400 transition-colors">
                <Mail className="w-4 h-4" />
                <span className="hidden xl:inline">Contact</span>
              </a>
            </div>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-gray-400 hover:text-white hover:bg-slate-700/50 transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-700/50">
          <div className="px-4 py-6 space-y-6">
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </form>

            {/* Mobile Navigation */}
            <nav className="space-y-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div className="space-y-2">
                      <div className="text-lg font-semibold text-white">{item.name}</div>
                      {item.name === 'Services' && (
                        <div className="pl-4 space-y-2">
                          {services.slice(0, 6).map((service) => (
                            <Link
                              key={service.name}
                              to={service.href}
                              className="block py-2 text-gray-300 hover:text-cyan-400 transition-colors"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {service.name}
                            </Link>
                          ))}
                          <Link
                            to="/comprehensive-services-showcase-2026"
                            className="block py-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            View All Services →
                          </Link>
                        </div>
                      )}
                      {item.name === 'Solutions' && (
                        <div className="pl-4 space-y-2">
                          {solutions.map((solution) => (
                            <Link
                              key={solution.name}
                              to={solution.href}
                              className="block py-2 text-gray-300 hover:text-cyan-400 transition-colors"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {solution.name}
                            </Link>
                          ))}
                        </div>
                      )}
                      {item.name === 'Resources' && (
                        <div className="pl-4 space-y-2">
                          {resources.map((resource) => (
                            <Link
                              key={resource.name}
                              to={resource.href}
                              className="block py-2 text-gray-300 hover:text-cyan-400 transition-colors"
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
                      className="block text-lg font-semibold text-white hover:text-cyan-400 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile Contact Info */}
            <div className="pt-6 border-t border-slate-700/50 space-y-3">
              <a
                href={`tel:${contactInfo.phone}`}
                className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>{contactInfo.phone}</span>
              </a>
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>{contactInfo.email}</span>
              </a>
              <div className="flex items-start space-x-3 text-gray-300">
                <MapPin className="w-5 h-5 mt-0.5" />
                <span className="text-sm">{contactInfo.address}</span>
              </div>
            </div>
          </div>
        </div>
      )}

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
    </header>
  );
}
