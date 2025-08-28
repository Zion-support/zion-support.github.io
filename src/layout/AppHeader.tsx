import { ArrowRight, Atom, BookOpen, Brain, Building, Building2, ChevronDown, Cloud, Code, Cpu, DollarSign, FileText, Globe, HeartHandshake, Heart, HelpCircle, Leaf, Lock, Mail, MapPin, Menu, MessageCircle, PenTool, Phone, Rocket, Scale, Search, Settings, Shield, ShoppingCart, Star, Target, TrendingUp, Users, X, Zap, MessageSquare, BarChart3, Smartphone, Database, Network, Clock, ShoppingCart as ShoppingCartIcon, FileText as FileTextIcon, Settings as SettingsIcon, Key, Globe2, ShieldCheck, Car, Home, Factory, City, CheckCircle, ArrowUpRight, Play, MailIcon, Gauge, GitFork, Award, Truck, BarChart3 as BarChart3Icon, Eye, Server, Database as DatabaseIcon, Network as NetworkIcon, Clock as ClockIcon, Lock as LockIcon, FileText as FileTextIcon2, Settings as SettingsIcon2, Key as KeyIcon, Globe2 as Globe2Icon, ShieldCheck as ShieldCheckIcon, Leaf as LeafIcon, Scale as ScaleIcon, Building2 as Building2Icon, Car as CarIcon, Home as HomeIcon, Factory as FactoryIcon, City as CityIcon, CheckCircle as CheckCircleIcon, ArrowUpRight as ArrowUpRightIcon, Play as PlayIcon, MailIcon as MailIcon2 } from 'lucide-react';
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
    { name: 'Pricing', href: '/pricing-guide-2030', current: false },
    { name: 'Resources', href: '/resources', current: false, hasDropdown: true },
    { name: 'About', href: '/about', current: false },
    { name: 'Contact', href: '/contact', current: false },
  ];

  const services = [
    // Featured AI Services
    { 
      name: 'AI Legal Document Analyzer Pro', 
      href: '/services/ai-legal-document-analysis', 
      icon: FileText, 
      description: 'Advanced legal document analysis with AI',
      featured: true,
      color: 'from-blue-500 to-indigo-500',
      price: '$299/month',
      category: 'AI & Legal Tech'
    },
    { 
      name: 'AI Healthcare Analytics Suite', 
      href: '/services/ai-healthcare-analytics', 
      icon: Heart, 
      description: 'Comprehensive healthcare AI platform',
      featured: true,
      color: 'from-red-500 to-pink-500',
      price: '$799/month',
      category: 'AI & Healthcare'
    },
    { 
      name: 'AI Financial Trading Platform', 
      href: '/services/ai-financial-trading', 
      icon: DollarSign, 
      description: 'AI-powered financial trading solutions',
      featured: true,
      color: 'from-emerald-500 to-green-500',
      price: '$1,299/month',
      category: 'FinTech'
    },
    { 
      name: 'AI Marketing Automation Suite', 
      href: '/services/ai-marketing-automation', 
      icon: TrendingUp, 
      description: 'Intelligent marketing automation',
      featured: true,
      color: 'from-green-500 to-emerald-500',
      price: '$399/month',
      category: 'AI & Marketing'
    },
    { 
      name: 'AI Customer Support Automation', 
      href: '/services/ai-customer-support-automation', 
      icon: MessageSquare, 
      description: '24/7 AI customer support',
      featured: true,
      color: 'from-blue-500 to-purple-500',
      price: '$299/month',
      category: 'AI & Customer Support'
    },
    { 
      name: 'AI HR Platform', 
      href: '/services/ai-hr-platform', 
      icon: Users, 
      description: 'Comprehensive HR automation',
      featured: true,
      color: 'from-indigo-500 to-blue-500',
      price: '$599/month',
      category: 'AI & HR'
    },
    { 
      name: 'AI Content Creation Studio', 
      href: '/services/ai-content-creation', 
      icon: PenTool, 
      description: 'AI-powered content generation',
      featured: true,
      color: 'from-orange-500 to-red-500',
      price: '$199/month',
      category: 'AI & Content'
    },
    { 
      name: 'AI Project Management Platform', 
      href: '/services/ai-project-management', 
      icon: Target, 
      description: 'Intelligent project management',
      featured: true,
      color: 'from-purple-500 to-pink-500',
      price: '$399/month',
      category: 'AI & Operations'
    },
    { 
      name: 'AI Workflow Automation', 
      href: '/services/ai-workflow-automation', 
      icon: Settings, 
      description: 'Smart workflow optimization',
      featured: true,
      color: 'from-cyan-500 to-blue-500',
      price: '$349/month',
      category: 'AI & Operations'
    },
    { 
      name: 'AI Predictive Maintenance', 
      href: '/services/ai-predictive-maintenance', 
      icon: Gauge, 
      description: 'IoT-powered maintenance prediction',
      featured: true,
      color: 'from-yellow-500 to-orange-500',
      price: '$899/month',
      category: 'AI & Operations'
    },
    { 
      name: 'AI Supply Chain Optimizer', 
      href: '/services/ai-supply-chain-optimization', 
      icon: Truck, 
      description: 'Intelligent supply chain management',
      featured: true,
      color: 'from-teal-500 to-cyan-500',
      price: '$499/month',
      category: 'AI & Operations'
    },
    { 
      name: 'AI Autonomous Research Assistant', 
      href: '/services/ai-autonomous-research-assistant', 
      icon: BookOpen, 
      description: 'Autonomous research and analysis',
      featured: true,
      color: 'from-violet-500 to-purple-500',
      price: '$599/month',
      category: 'AI & Research'
    },
    { 
      name: 'AI Quantum Hybrid Platform', 
      href: '/services/ai-quantum-hybrid-platform', 
      icon: Atom, 
      description: 'Quantum AI hybrid computing',
      featured: true,
      color: 'from-purple-500 to-pink-500',
      price: '$2,499/month',
      category: 'Quantum Computing'
    },
    { 
      name: 'AI Space Technology Platform', 
      href: '/services/ai-space-technology', 
      icon: Rocket, 
      description: 'Space AI and satellite operations',
      featured: true,
      color: 'from-indigo-500 to-purple-500',
      price: '$3,999/month',
      category: 'Space Technology'
    },
    { 
      name: 'AI Sustainable Technology Platform', 
      href: '/services/ai-sustainable-technology', 
      icon: Leaf, 
      description: 'Green tech and sustainability AI',
      featured: true,
      color: 'from-green-500 to-teal-500',
      price: '$799/month',
      category: 'Sustainable Technology'
    },
    { 
      name: 'AI Metaverse Platform', 
      href: '/services/ai-metaverse', 
      icon: Globe, 
      description: 'Next-gen metaverse experiences',
      featured: true,
      color: 'from-purple-500 to-indigo-500',
      price: '$1,499/month',
      category: 'AI & Metaverse'
    },
    { 
      name: 'AI Education Platform', 
      href: '/services/ai-education', 
      icon: BookOpen, 
      description: 'Personalized AI learning',
      featured: true,
      color: 'from-blue-500 to-indigo-500',
      price: '$399/month',
      category: 'AI & Education'
    },
    { 
      name: 'AI Entertainment Platform', 
      href: '/services/ai-entertainment', 
      icon: Play, 
      description: 'AI-powered entertainment',
      featured: true,
      color: 'from-purple-500 to-pink-500',
      price: '$299/month',
      category: 'AI & Entertainment'
    },
    { 
      name: 'AI Development Platform', 
      href: '/services/ai-development', 
      icon: Code, 
      description: 'AI-powered development tools',
      featured: true,
      color: 'from-cyan-500 to-blue-500',
      price: '$599/month',
      category: 'AI & Development'
    },
    { 
      name: 'AI Green Technology Platform', 
      href: '/services/ai-green-technology', 
      icon: Leaf, 
      description: 'Sustainable AI solutions',
      featured: true,
      color: 'from-green-500 to-emerald-500',
      price: '$699/month',
      category: 'AI & Green Tech'
    },
    // Legacy Services
    { 
      name: '2025 Services Showcase', 
      href: '/services/showcase-2025', 
      icon: Rocket, 
      description: 'Complete 2025 Portfolio',
      featured: true,
      color: 'from-cyan-500 to-blue-500'
    },
    { 
      name: 'AI Business Intelligence', 
      href: '/services/ai-business-intelligence', 
      icon: Brain, 
      description: 'Machine Learning & Data Science',
      featured: true,
      color: 'from-purple-500 to-cyan-500',
      price: 'Custom Pricing',
      category: 'AI & Business Intelligence'
    },
    { 
      name: 'Quantum Computing', 
      href: '/services/quantum-computing', 
      icon: Atom, 
      description: 'Quantum AI & Optimization',
      featured: true,
      color: 'from-purple-500 to-pink-500',
      price: 'Custom Pricing',
      category: 'Quantum Computing'
    },
    { 
      name: 'IoT Edge Computing', 
      href: '/services/iot-edge-computing', 
      icon: Cpu, 
      description: 'IoT & Real-time Processing',
      featured: true,
      color: 'from-blue-500 to-cyan-500',
      price: 'Custom Pricing',
      category: 'IoT & Edge Computing'
    },
    { 
      name: 'Digital Twin Platform', 
      href: '/services/digital-twin', 
      icon: Globe, 
      description: 'Virtual Replicas & Simulation',
      featured: true,
      color: 'from-green-500 to-emerald-500',
      price: 'Custom Pricing',
      category: 'Digital Twin'
    },
    { 
      name: 'Cloud DevOps', 
      href: '/services/cloud-devops', 
      icon: Cloud, 
      description: 'DevOps & Infrastructure',
      featured: true,
      color: 'from-blue-500 to-cyan-500',
      price: 'Custom Pricing',
      category: 'Cloud & DevOps'
    },
    { 
      name: 'Micro SaaS Products', 
      href: '/services/micro-saas', 
      icon: ShoppingCart, 
      description: 'AI automations with transparent pricing',
      featured: true,
      color: 'from-orange-500 to-red-500',
      price: 'Starting at $99/month',
      category: 'Micro SaaS'
    },
    { 
      name: 'Revolutionary Services 2030', 
      href: '/revolutionary-services-2030', 
      icon: Rocket, 
      description: 'Future Technology Solutions',
      featured: true,
      color: 'from-indigo-500 to-purple-500',
      price: 'Custom Enterprise Pricing',
      category: 'Enterprise Solutions'
    }
  ];

  const solutions = [
    {
      name: 'Enterprise AI Transformation',
      href: '/solutions',
      icon: Building2,
      description: 'Large-scale business transformations',
      featured: true,
      price: 'Starting at $25,000',
      category: 'Enterprise Solutions'
    },
    {
      name: 'AI-Powered Cybersecurity',
      href: '/services/ai-cybersecurity',
      icon: Shield,
      description: 'Advanced security with AI',
      featured: true,
      price: 'Starting at $1,500/month',
      category: 'Cybersecurity'
    },
    {
      name: 'Data Analytics & BI',
      href: '/services/data-analytics',
      icon: BarChart3,
      description: 'Intelligent data insights',
      featured: true,
      price: 'Starting at $799/month',
      category: 'Data Analytics'
    },
    {
      name: 'IT Infrastructure',
      href: '/services/it-infrastructure',
      icon: Server,
      description: 'Scalable infrastructure solutions',
      featured: true,
      price: 'Custom Pricing',
      category: 'IT Infrastructure'
    }
  ];

  const resources = [
    {
      name: 'Blog & Insights',
      href: '/blog',
      icon: FileText,
      description: 'Latest industry insights',
      featured: true
    },
    {
      name: 'Case Studies',
      href: '/case-studies',
      icon: Target,
      description: 'Success stories and results',
      featured: true
    },
    {
      name: 'White Papers',
      href: '/white-papers',
      icon: BookOpen,
      description: 'In-depth research and analysis',
      featured: true
    },
    {
      name: 'Webinars',
      href: '/webinars',
      icon: Play,
      description: 'Educational content and demos',
      featured: true
    },
    {
      name: 'Documentation',
      href: '/docs',
      icon: HelpCircle,
      description: 'Technical guides and API docs',
      featured: true
    },
    {
      name: 'FAQ',
      href: '/faq',
      icon: HelpCircle,
      description: 'Frequently asked questions',
      featured: true
    }
  ];

  const serviceCategories = [
    { name: 'AI & Business Intelligence', count: services.filter(s => s.category?.includes('AI & Business Intelligence') || s.category?.includes('AI & Development')).length },
    { name: 'AI & Marketing', count: services.filter(s => s.category?.includes('AI & Marketing')).length },
    { name: 'AI & Healthcare', count: services.filter(s => s.category?.includes('AI & Healthcare')).length },
    { name: 'AI & Legal Tech', count: services.filter(s => s.category?.includes('AI & Legal Tech')).length },
    { name: 'AI & Operations', count: services.filter(s => s.category?.includes('AI & Operations')).length },
    { name: 'AI & Content', count: services.filter(s => s.category?.includes('AI & Content')).length },
    { name: 'AI & Customer Support', count: services.filter(s => s.category?.includes('AI & Customer Support')).length },
    { name: 'AI & HR', count: services.filter(s => s.category?.includes('AI & HR')).length },
    { name: 'FinTech', count: services.filter(s => s.category?.includes('FinTech')).length },
    { name: 'Quantum Computing', count: services.filter(s => s.category?.includes('Quantum Computing')).length },
    { name: 'Space Technology', count: services.filter(s => s.category?.includes('Space Technology')).length },
    { name: 'Sustainable Technology', count: services.filter(s => s.category?.includes('Sustainable Technology') || s.category?.includes('AI & Green Tech')).length },
    { name: 'AI & Metaverse', count: services.filter(s => s.category?.includes('AI & Metaverse')).length },
    { name: 'AI & Education', count: services.filter(s => s.category?.includes('AI & Education')).length },
    { name: 'AI & Entertainment', count: services.filter(s => s.category?.includes('AI & Entertainment')).length },
    { name: 'Micro SaaS', count: services.filter(s => s.category?.includes('Micro SaaS')).length },
    { name: 'Enterprise Solutions', count: services.filter(s => s.category?.includes('Enterprise Solutions')).length }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Rocket className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Zion Tech Group
                </h1>
                <p className="text-xs text-gray-600">Innovation • Intelligence • Impact</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => {
                        if (item.name === 'Services') setServicesDropdownOpen(!servicesDropdownOpen);
                        if (item.name === 'Solutions') setSolutionsDropdownOpen(!solutionsDropdownOpen);
                        if (item.name === 'Resources') setResourcesDropdownOpen(!resourcesDropdownOpen);
                      }}
                      className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    
                    {/* Services Dropdown */}
                    {item.name === 'Services' && servicesDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-screen max-w-7xl transform -translate-x-1/2 left-1/2">
                        <div className="bg-white rounded-xl shadow-2xl border border-gray-200 p-6">
                          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                            {/* Featured Services */}
                            <div className="lg:col-span-2 xl:col-span-3">
                              <h3 className="text-lg font-semibold text-gray-900 mb-4">Featured AI Services</h3>
                              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                                {services.filter(s => s.featured).slice(0, 6).map((service) => (
                                  <Link
                                    key={service.name}
                                    to={service.href}
                                    className="group p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-200"
                                  >
                                    <div className="flex items-start space-x-3">
                                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center flex-shrink-0`}>
                                        <service.icon className="w-5 h-5 text-white" />
                                      </div>
                                      <div className="flex-1 min-w-0">
                                        <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                                          {service.name}
                                        </h4>
                                        <p className="text-xs text-gray-600 mt-1">{service.description}</p>
                                        <div className="flex items-center justify-between mt-2">
                                          <span className="text-xs font-medium text-blue-600">{service.price}</span>
                                          <span className="text-xs text-gray-500">{service.category}</span>
                                        </div>
                                      </div>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>

                            {/* Service Categories */}
                            <div className="lg:col-span-2 xl:col-span-3">
                              <h3 className="text-lg font-semibold text-gray-900 mb-4">Service Categories</h3>
                              <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-3">
                                {serviceCategories.map((category) => (
                                  <Link
                                    key={category.name}
                                    to={`/services?category=${encodeURIComponent(category.name)}`}
                                    className="text-center p-3 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200"
                                  >
                                    <div className="text-sm font-medium text-gray-900">{category.name}</div>
                                    <div className="text-xs text-gray-500 mt-1">{category.count} services</div>
                                  </Link>
                                ))}
                              </div>
                            </div>

                            {/* View All Services */}
                            <div className="lg:col-span-2 xl:col-span-3 text-center">
                              <Link
                                to="/services"
                                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
                              >
                                View All Services
                                <ArrowRight className="ml-2 w-4 h-4" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Solutions Dropdown */}
                    {item.name === 'Solutions' && solutionsDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-200 p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Enterprise Solutions</h3>
                        <div className="space-y-3">
                          {solutions.map((solution) => (
                            <Link
                              key={solution.name}
                              to={solution.href}
                              className="group p-3 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-200"
                            >
                              <div className="flex items-start space-x-3">
                                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                                  <solution.icon className="w-4 h-4 text-white" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <h4 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                                    {solution.name}
                                  </h4>
                                  <p className="text-xs text-gray-600 mt-1">{solution.description}</p>
                                  <div className="flex items-center justify-between mt-2">
                                    <span className="text-xs font-medium text-blue-600">{solution.price}</span>
                                    <span className="text-xs text-gray-500">{solution.category}</span>
                                  </div>
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Resources Dropdown */}
                    {item.name === 'Resources' && resourcesDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-200 p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">Resources & Insights</h3>
                        <div className="space-y-3">
                          {resources.map((resource) => (
                            <Link
                              key={resource.name}
                              to={resource.href}
                              className="group p-3 rounded-lg border border-gray-200 hover:border-blue-300 hover:shadow-md transition-all duration-200"
                            >
                              <div className="flex items-start space-x-3">
                                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
                                  <resource.icon className="w-4 h-4 text-white" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <h4 className="text-sm font-medium text-gray-900 group-hover:text-green-600 transition-colors">
                                    {resource.name}
                                  </h4>
                                  <p className="text-xs text-gray-600 mt-1">{resource.description}</p>
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Right side - Search, Contact, Theme Toggle */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <form onSubmit={handleSearch} className="hidden md:block">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search services..."
                  className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
                <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
                {isSearching && (
                  <div className="absolute right-3 top-2.5">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
                  </div>
                )}
              </div>
            </form>

            {/* Contact Button */}
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
            >
              <Phone className="w-4 h-4 mr-2" />
              Contact Us
            </Link>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-200"
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
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="px-3 py-2">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search services..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
              </div>
            </form>

            {/* Mobile Navigation */}
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
                      className="w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-md transition-colors duration-200"
                    >
                      {item.name}
                    </button>
                    
                    {/* Mobile Services Dropdown */}
                    {item.name === 'Services' && servicesDropdownOpen && (
                      <div className="pl-4 space-y-2">
                        {services.slice(0, 8).map((service) => (
                          <Link
                            key={service.name}
                            to={service.href}
                            className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                          >
                            {service.name}
                          </Link>
                        ))}
                        <Link
                          to="/services"
                          className="block px-3 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-200"
                        >
                          View All Services →
                        </Link>
                      </div>
                    )}

                    {/* Mobile Solutions Dropdown */}
                    {item.name === 'Solutions' && solutionsDropdownOpen && (
                      <div className="pl-4 space-y-2">
                        {solutions.map((solution) => (
                          <Link
                            key={solution.name}
                            to={solution.href}
                            className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                          >
                            {solution.name}
                          </Link>
                        ))}
                      </div>
                    )}

                    {/* Mobile Resources Dropdown */}
                    {item.name === 'Resources' && resourcesDropdownOpen && (
                      <div className="pl-4 space-y-2">
                        {resources.map((resource) => (
                          <Link
                            key={resource.name}
                            to={resource.href}
                            className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
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
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-100 rounded-md transition-colors duration-200"
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
                className="w-full inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
              >
                <Phone className="w-4 h-4 mr-2" />
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
