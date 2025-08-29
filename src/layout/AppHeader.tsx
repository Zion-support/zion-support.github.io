import { ArrowRight, Atom, BarChart3, BookOpen, Brain, Building, Building2, ChevronDown, Cloud, Code, Cpu, DollarSign, FileText, Globe, Globe2, HeartHandshake, Heart, HelpCircle, Leaf, Lock, Mail, MapPin, Menu, MessageCircle, PenTool, Phone, Rocket, Scale, Search, Server, Settings, Shield, ShoppingCart, Star, Target, TrendingUp, Users, X, Zap, Truck, Calendar, Video } from 'lucide-react';
import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeToggle } from '../components/ThemeToggle';

export function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const [innovativeServicesOpen, setInnovativeServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isKeyboardUser, setIsKeyboardUser] = useState(false);

  const location = useLocation();
  const searchInputRef = useRef<HTMLInputElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Performance optimization: Use useCallback for event handlers
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 10);
  }, []);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Tab') {
      setIsKeyboardUser(true);
    }
  }, []);

  const handleEscapeKey = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setMobileMenuOpen(false);
      setServicesDropdownOpen(false);
      setSolutionsDropdownOpen(false);
      setResourcesDropdownOpen(false);
      setActiveDropdown(null);
    }
  }, []);

  const handleClickOutside = useCallback((e: MouseEvent) => {
    if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target as Node)) {
      setMobileMenuOpen(false);
    }
    
    // Close dropdowns when clicking outside
    Object.keys(dropdownRefs.current).forEach(key => {
      if (dropdownRefs.current[key] && !dropdownRefs.current[key]?.contains(e.target as Node)) {
        if (key === 'services') setServicesDropdownOpen(false);
        if (key === 'solutions') setSolutionsDropdownOpen(false);
        if (key === 'resources') setResourcesDropdownOpen(false);
        setActiveDropdown(null);
      }
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keydown', handleEscapeKey);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keydown', handleEscapeKey);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleScroll, handleKeyDown, handleEscapeKey, handleClickOutside]);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setSolutionsDropdownOpen(false);
    setResourcesDropdownOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsSearching(true);
      try {
        await new Promise(resolve => setTimeout(resolve, 800)); // Reduced search time
        window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
      } finally {
        setIsSearching(false);
      }
    }
  };

  const toggleDropdown = (dropdown: string) => {
    const newState = !(dropdown === 'services' ? servicesDropdownOpen : 
                       dropdown === 'innovative services' ? innovativeServicesOpen :
                       dropdown === 'solutions' ? solutionsDropdownOpen : 
                       dropdown === 'resources' ? resourcesDropdownOpen : false);
    
    // Close other dropdowns
    if (dropdown !== 'services') setServicesDropdownOpen(false);
    if (dropdown !== 'innovative services') setInnovativeServicesOpen(false);
    if (dropdown !== 'solutions') setSolutionsDropdownOpen(false);
    if (dropdown !== 'resources') setResourcesDropdownOpen(false);
    
    if (dropdown === 'services') setServicesDropdownOpen(newState);
    if (dropdown === 'innovative services') setInnovativeServicesOpen(newState);
    if (dropdown === 'solutions') setSolutionsDropdownOpen(newState);
    if (dropdown === 'resources') setResourcesDropdownOpen(newState);
    
    setActiveDropdown(newState ? dropdown : null);
  };

  const navigation = [
    { name: 'Home', href: '/', current: location.pathname === '/' },
    { name: 'Services', href: '/services', current: location.pathname.startsWith('/services'), hasDropdown: true },
    { name: 'Innovative Services', href: '/innovative-services-2027', current: location.pathname.startsWith('/innovative-services'), hasDropdown: true },
    { name: 'Solutions', href: '/solutions', current: location.pathname.startsWith('/solutions'), hasDropdown: true },
    { name: 'Resources', href: '/resources', current: location.pathname.startsWith('/resources'), hasDropdown: true },
    { name: 'About', href: '/about', current: location.pathname === '/about' },
    { name: 'Contact', href: '/contact', current: location.pathname === '/contact' },
  ];

  const services = [
    { 
      name: '2025 Services Showcase', 
      href: '/services/showcase-2025', 
      icon: Rocket, 
      description: 'Complete 2025 Portfolio',
      featured: true,
      color: 'from-cyan-500 to-blue-500'
    },
    { 
      name: 'All Services', 
      href: '/services', 
      icon: Brain, 
      description: 'Complete Service Catalog',
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
      badge: 'Popular'
    },
    { 
      name: 'Innovative Services 2025', 
      href: '/services/innovative-2025', 
      icon: Rocket, 
      description: 'Cutting-edge Micro SAAS',
      featured: true,
      color: 'from-purple-500 to-pink-500'
    },
    { 
      name: 'AI Healthcare Platform', 
      href: '/services/ai-healthcare-platform', 
      icon: Heart, 
      description: 'Medical AI & Diagnostics',
      featured: true,
      color: 'from-red-500 to-pink-500',
      badge: 'New'
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
      color: 'from-purple-500 to-pink-500',
      badge: 'Cutting Edge'
    },
    { 
      name: 'IoT Edge Computing', 
      href: '/services/iot-edge-computing', 
      icon: Cpu, 
      description: 'IoT & Real-time Processing',
      featured: true,
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      name: 'Digital Twin Platform', 
      href: '/services/digital-twin', 
      icon: Building2, 
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
      name: 'AI Healthcare Diagnostics Platform', 
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
      name: 'AI Space Technology Platform', 
      href: '/services/ai-space-technology-platform', 
      icon: Rocket, 
      description: 'AI Space Solutions',
      featured: true,
      color: 'from-indigo-500 to-purple-500'
    },
    { 
      name: 'AI Green Technology Platform', 
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
      name: 'Micro SAAS Products', 
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
      color: 'from-indigo-500 to-purple-500'
    },
    { 
      name: 'Comprehensive Services 2030', 
      href: '/comprehensive-services-2030', 
      icon: Brain, 
      description: 'Complete AI & Tech Solutions',
      featured: true,
      color: 'from-cyan-500 to-purple-500'
    }
  ];

  const innovativeServices = [
    { 
      name: '2027 Services Showcase', 
      href: '/innovative-services-2027', 
      icon: Rocket, 
      description: 'Cutting-edge AI solutions for 2027',
      featured: true,
      color: 'from-purple-500 to-pink-500',
      badge: 'New'
    },
    { 
      name: 'AI Predictive Analytics', 
      href: '/services/ai-predictive-analytics-platform', 
      icon: Brain, 
      description: 'Advanced ML forecasting & insights',
      featured: true,
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      name: 'AI Contract Analysis', 
      href: '/services/ai-contract-analysis', 
      icon: FileText, 
      description: 'Legal document AI processing',
      featured: true,
      color: 'from-green-500 to-blue-500'
    },
    { 
      name: 'AI Supply Chain', 
      href: '/services/ai-supply-chain-optimization', 
      icon: Truck, 
      description: 'Supply chain optimization & forecasting',
      featured: true,
      color: 'from-orange-500 to-red-500'
    },
    { 
      name: 'AI Cybersecurity', 
      href: '/services/ai-cybersecurity-threat-intelligence', 
      icon: Shield, 
      description: 'Threat intelligence & response',
      featured: true,
      color: 'from-red-500 to-pink-500'
    },
    { 
      name: 'AI Healthcare Diagnostics', 
      href: '/services/ai-healthcare-diagnostics', 
      icon: Heart, 
      description: 'Medical AI diagnostics platform',
      featured: true,
      color: 'from-pink-500 to-purple-500'
    },
    { 
      name: 'Quantum AI Hybrid', 
      href: '/services/quantum-ai-hybrid-platform', 
      icon: Atom, 
      description: 'Quantum computing + AI platform',
      featured: true,
      color: 'from-indigo-500 to-purple-500',
      badge: 'Cutting Edge'
    },
    { 
      name: 'Comprehensive Pricing 2027', 
      href: '/comprehensive-pricing-2027', 
      icon: DollarSign, 
      description: 'Complete pricing guide & ROI calculator',
      featured: true,
      color: 'from-green-500 to-emerald-500',
      badge: 'New'
    }
  ];

  const solutions = [
    { 
      name: 'Enterprise Solutions', 
      href: '/solutions/enterprise', 
      icon: Building, 
      description: 'Large-scale business solutions',
      featured: true,
      color: 'from-blue-500 to-indigo-500'
    },
    { 
      name: 'SMB Solutions', 
      href: '/solutions/smb', 
      icon: Building2, 
      icon: Building2, 
      description: 'Small & medium business solutions',
      featured: true,
      color: 'from-green-500 to-emerald-500'
    },
    { 
      name: 'Startup Solutions', 
      href: '/solutions/startup', 
      icon: Rocket, 
      description: 'Startup & growth solutions',
      featured: true,
      color: 'from-purple-500 to-pink-500'
    },
    { 
      name: 'Government Solutions', 
      href: '/solutions/government', 
      icon: Shield, 
      description: 'Public sector solutions',
      featured: true,
      color: 'from-gray-500 to-slate-500'
    },
    { 
      name: 'Healthcare Solutions', 
      href: '/solutions/healthcare', 
      icon: Heart, 
      description: 'Healthcare & medical solutions',
      featured: true,
      color: 'from-red-500 to-pink-500'
    },
    { 
      name: 'Financial Solutions', 
      href: '/solutions/financial', 
      icon: DollarSign, 
      description: 'Fintech & banking solutions',
      featured: true,
      color: 'from-green-500 to-emerald-500'
    },
    { 
      name: 'Education Solutions', 
      href: '/solutions/education', 
      icon: BookOpen, 
      description: 'Educational technology solutions',
      featured: true,
      color: 'from-blue-500 to-indigo-500'
    },
    { 
      name: 'Manufacturing Solutions', 
      href: '/solutions/manufacturing', 
      icon: Settings, 
      description: 'Industrial & manufacturing solutions',
      featured: true,
      color: 'from-orange-500 to-red-500'
    },
    { 
      name: 'Retail Solutions', 
      href: '/solutions/retail', 
      icon: ShoppingCart, 
      description: 'E-commerce & retail solutions',
      featured: true,
      color: 'from-purple-500 to-pink-500'
    },
    { 
      name: 'Transportation Solutions', 
      href: '/solutions/transportation', 
      icon: Truck, 
      description: 'Logistics & transportation solutions',
      featured: true,
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  const resources = [
    { 
      name: 'Case Studies', 
      href: '/case-studies', 
      icon: FileText, 
      description: 'Success stories & implementations',
      featured: true,
      color: 'from-blue-500 to-indigo-500'
    },
    { 
      name: 'White Papers', 
      href: '/white-papers', 
      icon: BookOpen, 
      description: 'Research & insights',
      featured: true,
      color: 'from-purple-500 to-pink-500'
    },
    { 
      name: 'Webinars', 
      href: '/webinars', 
      icon: Video, 
      description: 'Live & recorded sessions',
      featured: true,
      color: 'from-green-500 to-emerald-500'
    },
    { 
      name: 'Documentation', 
      href: '/docs', 
      icon: FileText, 
      description: 'Technical documentation',
      featured: true,
      color: 'from-gray-500 to-slate-500'
    },
    { 
      name: 'API Documentation', 
      href: '/api-docs', 
      icon: Code, 
      description: 'Developer resources',
      featured: true,
      color: 'from-orange-500 to-red-500'
    },
    { 
      name: 'Training', 
      href: '/training', 
      icon: Users, 
      description: 'Learning & certification',
      featured: true,
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      name: 'Community', 
      href: '/community', 
      icon: MessageCircle, 
      description: 'User community & forums',
      featured: true,
      color: 'from-purple-500 to-indigo-500'
    },
    { 
      name: 'Support', 
      href: '/support', 
      icon: HelpCircle, 
      description: 'Help & support center',
      featured: true,
      color: 'from-green-500 to-blue-500'
    },
    { 
      name: 'Blog', 
      href: '/blog', 
      icon: PenTool, 
      description: 'Latest news & insights',
      featured: true,
      color: 'from-yellow-500 to-orange-500'
    },
    { 
      name: 'Pricing Guide 2027', 
      href: '/pricing-guide-2027', 
      icon: DollarSign, 
      description: 'Comprehensive pricing information',
      featured: true,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const quickActions = [
    { name: 'Request Quote', href: '/request-quote', icon: MessageCircle, color: 'from-blue-500 to-indigo-500' },
    { name: 'Schedule Demo', href: '/demo', icon: Calendar, color: 'from-green-500 to-emerald-500' },
    { name: 'Contact Sales', href: '/contact', icon: Phone, color: 'from-purple-500 to-pink-500' },
    { name: 'Support', href: '/support', icon: HelpCircle, color: 'from-orange-500 to-red-500' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                <Rocket className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
              </div>
              <div className="hidden sm:block">
                <div className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Zion Tech Group
                </div>
                <div className="text-xs text-gray-500 hidden lg:block">
                  AI-Powered Business Solutions
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <button
                    onClick={() => toggleDropdown(item.name.toLowerCase())}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                      item.current
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                  >
                    <span>{item.name}</span>
                    <ChevronDown className="w-4 h-4 transition-transform duration-200" />
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                      item.current
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}

                {/* Dropdown Menus */}
                {item.name === 'Services' && servicesDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-xl border border-gray-200 py-4 z-50">
                    <div className="px-4 pb-3 border-b border-gray-200">
                      <h3 className="text-lg font-semibold text-gray-900">Our Services</h3>
                      <p className="text-sm text-gray-600 mt-1">Comprehensive AI-powered solutions</p>
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          to={service.href}
                          className="flex items-start space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors duration-200 group"
                        >
                          <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0`}>
                            <service.icon className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center space-x-2">
                              <p className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                                {service.name}
                              </p>
                              {service.badge && (
                                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                  {service.badge}
                                </span>
                              )}
                            </div>
                            <p className="text-sm text-gray-600 mt-1">{service.description}</p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors duration-200" />
                        </Link>
                      ))}
                    </div>
                    <div className="px-4 pt-3 border-t border-gray-200">
                      <Link
                        to="/services"
                        className="flex items-center justify-center w-full px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors duration-200"
                      >
                        View All Services
                      </Link>
                    </div>
                  </div>
                )}

                {item.name === 'Innovative Services' && innovativeServicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-xl border border-gray-200 py-4 z-50">
                    <div className="px-4 pb-3 border-b border-gray-200">
                      <h3 className="text-lg font-semibold text-gray-900">Innovative Services 2027</h3>
                      <p className="text-sm text-gray-600 mt-1">Cutting-edge AI & emerging tech solutions</p>
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                      {innovativeServices.map((service) => (
                        <Link
                          key={service.name}
                          to={service.href}
                          className="flex items-start space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors duration-200 group"
                        >
                          <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0`}>
                            <service.icon className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center space-x-2">
                              <p className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                                {service.name}
                              </p>
                              {service.badge && (
                                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                  {service.badge}
                                </span>
                              )}
                            </div>
                            <p className="text-sm text-gray-600 mt-1">{service.description}</p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors duration-200" />
                        </Link>
                      ))}
                    </div>
                    <div className="px-4 pt-3 border-t border-gray-200">
                      <Link
                        to="/innovative-services-2027"
                        className="flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white text-sm font-medium rounded-md hover:from-purple-600 hover:to-pink-700 transition-colors duration-200"
                      >
                        View All Innovative Services
                      </Link>
                    </div>
                  </div>
                )}

                {item.name === 'Solutions' && solutionsDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-xl border border-gray-200 py-4 z-50">
                    <div className="px-4 pb-3 border-b border-gray-200">
                      <h3 className="text-lg font-semibold text-gray-900">Industry Solutions</h3>
                      <p className="text-sm text-gray-600 mt-1">Tailored for your business needs</p>
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                      {solutions.map((solution) => (
                        <Link
                          key={solution.name}
                          to={solution.href}
                          className="flex items-start space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors duration-200 group"
                        >
                          <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${solution.color} flex items-center justify-center flex-shrink-0`}>
                            <solution.icon className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                              {solution.name}
                            </p>
                            <p className="text-sm text-gray-600 mt-1">{solution.description}</p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors duration-200" />
                        </Link>
                      ))}
                    </div>
                    <div className="px-4 pt-3 border-t border-gray-200">
                      <Link
                        to="/solutions"
                        className="flex items-center justify-center w-full px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors duration-200"
                      >
                        View All Solutions
                      </Link>
                    </div>
                  </div>
                )}

                {item.name === 'Resources' && resourcesDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-xl border border-gray-200 py-4 z-50">
                    <div className="px-4 pb-3 border-b border-gray-200">
                      <h3 className="text-lg font-semibold text-gray-900">Resources & Learning</h3>
                      <p className="text-sm text-gray-600 mt-1">Knowledge and support materials</p>
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                      {resources.map((resource) => (
                        <Link
                          key={resource.name}
                          to={resource.href}
                          className="flex items-start space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors duration-200 group"
                        >
                          <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${resource.color} flex items-center justify-center flex-shrink-0`}>
                            <resource.icon className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                              {resource.name}
                            </p>
                            <p className="text-sm text-gray-600 mt-1">{resource.description}</p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors duration-200" />
                        </Link>
                      ))}
                    </div>
                    <div className="px-4 pt-3 border-t border-gray-200">
                      <Link
                        to="/resources"
                        className="flex items-center justify-center w-full px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors duration-200"
                      >
                        View All Resources
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="relative">
              <form onSubmit={handleSearch} className="relative">
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <button
                  type="submit"
                  disabled={isSearching}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 text-gray-400 hover:text-blue-600 transition-colors duration-200"
                >
                  {isSearching ? (
                    <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <ArrowRight className="w-4 h-4" />
                  )}
                </button>
              </form>
            </div>

            {/* Quick Actions */}
            <div className="hidden xl:flex items-center space-x-2">
              {quickActions.map((action) => (
                <Link
                  key={action.name}
                  to={action.href}
                  className={`px-3 py-2 text-sm font-medium text-white bg-gradient-to-r ${action.color} rounded-md hover:shadow-lg transition-all duration-200 hover:scale-105`}
                >
                  {action.name}
                </Link>
              ))}
            </div>

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

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div ref={mobileMenuRef} className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-6 space-y-4">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(item.name.toLowerCase())}
                      className="flex items-center justify-between w-full px-3 py-2 text-left text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4 transition-transform duration-200" />
                    </button>
                    
                    {/* Mobile Dropdown */}
                    {item.name === 'Services' && servicesDropdownOpen && (
                      <div className="ml-4 mt-2 space-y-2">
                        {services.slice(0, 6).map((service) => (
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

                    {item.name === 'Solutions' && solutionsDropdownOpen && (
                      <div className="ml-4 mt-2 space-y-2">
                        {solutions.slice(0, 6).map((solution) => (
                          <Link
                            key={solution.name}
                            to={solution.href}
                            className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                          >
                            {solution.name}
                          </Link>
                        ))}
                        <Link
                          to="/solutions"
                          className="block px-3 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-200"
                        >
                          View All Solutions →
                        </Link>
                      </div>
                    )}

                    {item.name === 'Resources' && resourcesDropdownOpen && (
                      <div className="ml-4 mt-2 space-y-2">
                        {resources.slice(0, 6).map((resource) => (
                          <Link
                            key={resource.name}
                            to={resource.href}
                            className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                          >
                            {resource.name}
                          </Link>
                        ))}
                        <Link
                          to="/resources"
                          className="block px-3 py-2 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-200"
                        >
                          View All Resources →
                        </Link>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            {/* Mobile Quick Actions */}
            <div className="pt-4 border-t border-gray-200">
              <div className="grid grid-cols-2 gap-2">
                {quickActions.map((action) => (
                  <Link
                    key={action.name}
                    to={action.href}
                    className={`px-4 py-2 text-sm font-medium text-white bg-gradient-to-r ${action.color} rounded-md text-center hover:shadow-lg transition-all duration-200`}
                  >
                    {action.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
