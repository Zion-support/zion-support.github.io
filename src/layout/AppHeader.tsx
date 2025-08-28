import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, User, Bell, ChevronDown, Zap, Brain, Shield, Cloud, Rocket, Globe, Cpu, Lock, Heart, Users, Code, Truck, Building, ShoppingCart, BookOpen, MessageCircle, HelpCircle, Phone, Mail, MapPin, Star, Award, Target, TrendingUp, Lightbulb, Atom, Leaf, Eye, Scale, Building2, Car, Home, Factory, City, ArrowRight, FileText, DollarSign, Handshake } from 'lucide-react';
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
      subservices: [
        { name: 'AI Business Intelligence', href: '/services', description: 'Advanced analytics platform' },
        { name: 'Data Analytics Solutions', href: '/services', description: 'Real-time data insights' },
        { name: 'Predictive Analytics', href: '/services', description: 'Future trend forecasting' }
      ]
    },
    { 
      name: 'AI & Legal Tech', 
      href: '/services', 
      icon: Scale, 
      description: 'Document Analysis & Compliance',
      featured: false,
      color: 'from-blue-500 to-indigo-500',
      subservices: [
        { name: 'Legal Document Analyzer', href: '/services', description: 'Contract risk assessment' },
        { name: 'Compliance Monitoring', href: '/services', description: 'Regulatory compliance' },
        { name: 'Legal Research AI', href: '/services', description: 'Automated legal research' }
      ]
    },
    { 
      name: 'AI & Healthcare', 
      href: '/services', 
      icon: Heart, 
      description: 'Medical AI & Diagnostics',
      featured: true,
      color: 'from-red-500 to-pink-500',
      subservices: [
        { name: 'Healthcare Diagnostic AI', href: '/services', description: 'Medical image analysis' },
        { name: 'Patient Care Platform', href: '/services', description: 'Healthcare management' },
        { name: 'Medical Research AI', href: '/services', description: 'Clinical decision support' }
      ]
    },
    { 
      name: 'AI & Research', 
      href: '/services', 
      icon: Eye, 
      description: 'Scientific Research & Discovery',
      featured: false,
      color: 'from-purple-500 to-violet-500',
      subservices: [
        { name: 'Research Automation', href: '/services', description: 'Scientific process automation' },
        { name: 'Literature Review AI', href: '/services', description: 'Automated research analysis' },
        { name: 'Experimental Design', href: '/services', description: 'AI-powered research planning' }
      ]
    },
    { 
      name: 'AI & Green Tech', 
      href: '/services', 
      icon: Leaf, 
      description: 'Sustainability Solutions',
      featured: false,
      color: 'from-green-500 to-emerald-500',
      subservices: [
        { name: 'Sustainability Management', href: '/services', description: 'ESG compliance platform' },
        { name: 'Carbon Footprint Tracking', href: '/services', description: 'Environmental impact analysis' },
        { name: 'Green Energy Optimization', href: '/services', description: 'Renewable energy management' }
      ]
    },
    { 
      name: 'AI & Metaverse', 
      href: '/services', 
      icon: Globe, 
      description: 'Virtual Reality & Gaming',
      featured: true,
      color: 'from-purple-500 to-indigo-500',
      subservices: [
        { name: 'Metaverse Development', href: '/services', description: 'Virtual world creation' },
        { name: 'VR/AR Solutions', href: '/services', description: 'Immersive experiences' },
        { name: 'Virtual Events Platform', href: '/services', description: 'Digital event hosting' }
      ]
    },
    { 
      name: 'AI & Blockchain', 
      href: '/services', 
      icon: Lock, 
      description: 'DeFi & Smart Contracts',
      featured: false,
      color: 'from-green-500 to-emerald-500',
      subservices: [
        { name: 'Blockchain Analytics', href: '/services', description: 'Crypto transaction analysis' },
        { name: 'DeFi Security', href: '/services', description: 'Decentralized finance protection' },
        { name: 'Smart Contract AI', href: '/services', description: 'Intelligent contract automation' }
      ]
    },
    { 
      name: 'AI & Edge Computing', 
      href: '/services', 
      icon: Cpu, 
      description: 'Edge AI & IoT Solutions',
      featured: false,
      color: 'from-blue-500 to-cyan-500',
      subservices: [
        { name: 'Edge AI Platform', href: '/services', description: 'Distributed AI processing' },
        { name: 'IoT Optimization', href: '/services', description: 'Smart device management' },
        { name: 'Real-time Analytics', href: '/services', description: 'Low-latency data processing' }
      ]
    },
    { 
      name: 'Quantum Computing', 
      href: '/services', 
      icon: Atom, 
      description: 'Quantum AI & Algorithms',
      featured: true,
      color: 'from-purple-500 to-pink-500',
      subservices: [
        { name: 'Quantum AI Trading', href: '/services', description: 'Financial market optimization' },
        { name: 'Quantum Machine Learning', href: '/services', description: 'Advanced AI algorithms' },
        { name: 'Quantum Security', href: '/services', description: 'Unbreakable encryption' }
      ]
    },
    { 
      name: 'AI & Space Tech', 
      href: '/services', 
      icon: Rocket, 
      description: 'Space Exploration & Satellites',
      featured: false,
      color: 'from-indigo-500 to-purple-500',
      subservices: [
        { name: 'Space Technology Platform', href: '/services', description: 'Satellite management' },
        { name: 'Mission Planning AI', href: '/services', description: 'Space mission optimization' },
        { name: 'Earth Observation', href: '/services', description: 'Satellite data analysis' }
      ]
    },
    { 
      name: 'AI & Content', 
      href: '/services', 
      icon: FileText, 
      description: 'Content Creation & Marketing',
      featured: false,
      color: 'from-orange-500 to-red-500',
      subservices: [
        { name: 'Content Creation Studio', href: '/services', description: 'AI-powered content generation' },
        { name: 'Marketing Automation', href: '/services', description: 'Intelligent marketing campaigns' },
        { name: 'SEO Optimization', href: '/services', description: 'Search engine optimization' }
      ]
    },
    { 
      name: 'Cybersecurity', 
      href: '/services', 
      icon: Shield, 
      description: 'AI-Powered Security',
      featured: true,
      color: 'from-green-500 to-blue-500',
      subservices: [
        { name: 'AI Cybersecurity Platform', href: '/services', description: 'Threat detection & response' },
        { name: 'Zero Trust Security', href: '/services', description: 'Advanced security architecture' },
        { name: 'Incident Response AI', href: '/services', description: 'Automated security management' }
      ]
    },
    { 
      name: 'AI & HR', 
      href: '/services', 
      icon: Users, 
      description: 'Human Resources & Recruitment',
      featured: false,
      color: 'from-purple-500 to-cyan-500',
      subservices: [
        { name: 'AI HR Platform', href: '/services', description: 'Intelligent HR management' },
        { name: 'Recruitment AI', href: '/services', description: 'Smart candidate screening' },
        { name: 'Performance Analytics', href: '/services', description: 'Employee performance insights' }
      ]
    }
  ];

  const solutions = [
    {
      name: 'Enterprise Solutions',
      href: '/solutions',
      icon: Building2,
      description: 'Large-scale business solutions',
      featured: true,
      color: 'from-blue-600 to-indigo-600',
      subsolutions: [
        { name: 'Digital Transformation', href: '/solutions', description: 'Business modernization' },
        { name: 'Cloud Infrastructure', href: '/solutions', description: 'Scalable cloud solutions' },
        { name: 'Enterprise AI', href: '/solutions', description: 'AI-powered business processes' }
      ]
    },
    {
      name: 'Startup Solutions',
      href: '/solutions',
      icon: Rocket,
      description: 'Growth-focused startup solutions',
      featured: false,
      color: 'from-green-600 to-emerald-600',
      subsolutions: [
        { name: 'MVP Development', href: '/solutions', description: 'Rapid prototype development' },
        { name: 'Growth Hacking', href: '/solutions', description: 'Accelerated growth strategies' },
        { name: 'Funding Preparation', href: '/solutions', description: 'Investment readiness' }
      ]
    },
    {
      name: 'Government Solutions',
      href: '/solutions',
      icon: Building,
      description: 'Public sector technology solutions',
      featured: false,
      color: 'from-gray-600 to-slate-600',
      subsolutions: [
        { name: 'Digital Government', href: '/solutions', description: 'Government modernization' },
        { name: 'Smart Cities', href: '/solutions', description: 'Urban technology solutions' },
        { name: 'Public Safety AI', href: '/solutions', description: 'AI-powered public safety' }
      ]
    },
    {
      name: 'Healthcare Solutions',
      href: '/solutions',
      icon: Heart,
      description: 'Healthcare technology solutions',
      featured: true,
      color: 'from-red-600 to-pink-600',
      subsolutions: [
        { name: 'Telemedicine Platform', href: '/solutions', description: 'Remote healthcare delivery' },
        { name: 'Medical AI', href: '/solutions', description: 'AI-powered medical diagnostics' },
        { name: 'Healthcare Analytics', href: '/solutions', description: 'Patient data insights' }
      ]
    }
  ];

  const resources = [
    {
      name: 'Learning Center',
      href: '/resources',
      icon: BookOpen,
      description: 'Educational resources and guides',
      featured: true,
      color: 'from-blue-600 to-cyan-600',
      subresources: [
        { name: 'AI Tutorials', href: '/resources', description: 'Learn AI fundamentals' },
        { name: 'Case Studies', href: '/resources', description: 'Real-world implementations' },
        { name: 'Best Practices', href: '/resources', description: 'Industry best practices' }
      ]
    },
    {
      name: 'Developer Resources',
      href: '/resources',
      icon: Code,
      description: 'Technical documentation and APIs',
      featured: false,
      color: 'from-green-600 to-emerald-600',
      subresources: [
        { name: 'API Documentation', href: '/resources', description: 'Technical API guides' },
        { name: 'SDKs & Libraries', href: '/resources', description: 'Development tools' },
        { name: 'Code Examples', href: '/resources', description: 'Sample code and demos' }
      ]
    },
    {
      name: 'Industry Insights',
      href: '/resources',
      icon: TrendingUp,
      description: 'Market trends and analysis',
      featured: false,
      color: 'from-purple-600 to-violet-600',
      subresources: [
        { name: 'Market Reports', href: '/resources', description: 'Industry analysis' },
        { name: 'Trend Analysis', href: '/resources', description: 'Technology trends' },
        { name: 'Expert Interviews', href: '/resources', description: 'Industry expert insights' }
      ]
    },
    {
      name: 'Support & Community',
      href: '/resources',
      icon: MessageCircle,
      description: 'Help and community support',
      featured: false,
      color: 'from-orange-600 to-red-600',
      subresources: [
        { name: 'Help Center', href: '/help', description: 'Support documentation' },
        { name: 'Community Forum', href: '/community', description: 'User community' },
        { name: 'Contact Support', href: '/contact', description: 'Get help from experts' }
      ]
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

  const renderServicesDropdown = () => (
    <div className="absolute top-full left-0 w-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-50">
      <div className="bg-white dark:bg-gray-900 shadow-2xl rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
          {/* Featured Services */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
              <Star className="w-5 h-5 text-yellow-500 mr-2" />
              Featured Services
            </h3>
            <div className="space-y-4">
              {services.filter(s => s.featured).map((service) => (
                <Link
                  key={service.name}
                  to={service.href}
                  className="group flex items-start p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200"
                >
                  <div className={`flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mr-4`}>
                    <service.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                      {service.name}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{service.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* All Services Grid */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">All Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((service) => (
                <div key={service.name} className="group">
                  <Link
                    to={service.href}
                    className="block p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200"
                  >
                    <div className="flex items-center mb-3">
                      <div className={`flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mr-3`}>
                        <service.icon className="w-4 h-4 text-white" />
                      </div>
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                        {service.name}
                      </h4>
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">{service.description}</p>
                    
                    {/* Subservices */}
                    {service.subservices && (
                      <div className="space-y-2">
                        {service.subservices.slice(0, 2).map((subservice, idx) => (
                          <div key={idx} className="flex items-center text-xs text-gray-400 dark:text-gray-500">
                            <div className="w-1 h-1 bg-gray-300 dark:bg-gray-600 rounded-full mr-2"></div>
                            <span>{subservice.name}</span>
                          </div>
                        ))}
                        {service.subservices.length > 2 && (
                          <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                            +{service.subservices.length - 2} more services
                          </div>
                        )}
                      </div>
                    )}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSolutionsDropdown = () => (
    <div className="absolute top-full left-0 w-screen max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-50">
      <div className="bg-white dark:bg-gray-900 shadow-2xl rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="p-8">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Solutions by Industry</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solutions.map((solution) => (
              <div key={solution.name} className="group">
                <Link
                  to={solution.href}
                  className="block p-6 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 border border-gray-100 dark:border-gray-700"
                >
                  <div className="flex items-center mb-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-r ${solution.color} flex items-center justify-center mr-4`}>
                      <solution.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                        {solution.name}
                      </h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{solution.description}</p>
                    </div>
                  </div>
                  
                  {/* Subsolutions */}
                  {solution.subsolutions && (
                    <div className="space-y-2">
                      {solution.subsolutions.map((subsolution, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                          <ArrowRight className="w-4 h-4 mr-2 text-blue-500" />
                          <span>{subsolution.name}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderResourcesDropdown = () => (
    <div className="absolute top-full left-0 w-screen max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 z-50">
      <div className="bg-white dark:bg-gray-900 shadow-2xl rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="p-8">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Resources & Support</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resources.map((resource) => (
              <div key={resource.name} className="group">
                <Link
                  to={resource.href}
                  className="block p-6 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 border border-gray-100 dark:border-gray-700"
                >
                  <div className="flex items-center mb-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-r ${resource.color} flex items-center justify-center mr-4`}>
                      <resource.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                        {resource.name}
                      </h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{resource.description}</p>
                    </div>
                  </div>
                  
                  {/* Subresources */}
                  {resource.subresources && (
                    <div className="space-y-2">
                      {resource.subresources.map((subresource, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                          <ArrowRight className="w-4 h-4 mr-2 text-blue-500" />
                          <span>{subresource.name}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

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
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                              {/* Featured Services */}
                              <div className="lg:col-span-1">
                                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                                  <Star className="w-5 h-5 text-yellow-400 mr-2" />
                                  Featured Services
                                </h3>
                                <div className="space-y-3">
                                  {services.filter(s => s.featured).map((service) => (
                                    <Link
                                      key={service.name}
                                      to={service.href}
                                      className="group flex items-start p-3 rounded-xl hover:bg-slate-700/50 transition-all duration-200"
                                      onClick={() => setServicesDropdownOpen(false)}
                                    >
                                      <div className={`flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mr-3`}>
                                        <service.icon className="w-4 h-4 text-white" />
                                      </div>
                                      <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-white group-hover:text-cyan-400">
                                          {service.name}
                                        </p>
                                        <p className="text-xs text-gray-400">{service.description}</p>
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              </div>

                              {/* All Services Grid */}
                              <div className="lg:col-span-2">
                                <h3 className="text-lg font-semibold text-white mb-4">All Services</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                  {services.map((service) => (
                                    <div key={service.name} className="group">
                                      <Link
                                        to={service.href}
                                        className="block p-3 rounded-xl hover:bg-slate-700/50 transition-all duration-200"
                                        onClick={() => setServicesDropdownOpen(false)}
                                      >
                                        <div className="flex items-center mb-2">
                                          <div className={`flex-shrink-0 w-6 h-6 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mr-2`}>
                                            <service.icon className="w-3 h-3 text-white" />
                                          </div>
                                          <h4 className="text-sm font-medium text-white group-hover:text-cyan-400">
                                            {service.name}
                                          </h4>
                                        </div>
                                        <p className="text-xs text-gray-400 mb-2">{service.description}</p>
                                        
                                        {/* Subservices */}
                                        {service.subservices && (
                                          <div className="space-y-1">
                                            {service.subservices.slice(0, 2).map((subservice, idx) => (
                                              <div key={idx} className="flex items-center text-xs text-gray-500">
                                                <div className="w-1 h-1 bg-gray-500 rounded-full mr-2"></div>
                                                <span>{subservice.name}</span>
                                              </div>
                                            ))}
                                            {service.subservices.length > 2 && (
                                              <div className="text-xs text-cyan-400 font-medium">
                                                +{service.subservices.length - 2} more
                                              </div>
                                            )}
                                          </div>
                                        )}
                                      </Link>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                            <div className="mt-6 pt-6 border-t border-slate-700/50">
                              <Link
                                to="/services"
                                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                                onClick={() => setServicesDropdownOpen(false)}
                              >
                                View All Services
                                <ArrowRight className="w-4 h-4" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Solutions Dropdown */}
                      {item.name === 'Solutions' && solutionsDropdownOpen && (
                        <div className="absolute top-full left-0 mt-2 w-[700px] bg-slate-800/95 backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-2xl shadow-black/50 overflow-hidden">
                          <div className="p-6">
                            <h3 className="text-lg font-semibold text-white mb-4">Solutions by Industry</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {solutions.map((solution) => (
                                <div key={solution.name} className="group">
                                  <Link
                                    to={solution.href}
                                    className={`block p-4 rounded-xl transition-all duration-300 hover:bg-slate-700/50 border border-slate-600/50 ${
                                      solution.featured ? 'ring-2 ring-cyan-400/50' : ''
                                    }`}
                                    onClick={() => setSolutionsDropdownOpen(false)}
                                  >
                                    <div className="flex items-start gap-3 mb-3">
                                      <div className={`p-2 rounded-lg bg-gradient-to-br ${solution.color}`}>
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
                                    
                                    {/* Subsolutions */}
                                    {solution.subsolutions && (
                                      <div className="space-y-2">
                                        {solution.subsolutions.map((subsolution, idx) => (
                                          <div key={idx} className="flex items-center text-sm text-gray-400">
                                            <ArrowRight className="w-4 h-4 mr-2 text-cyan-500" />
                                            <span>{subsolution.name}</span>
                                          </div>
                                        ))}
                                      </div>
                                    )}
                                  </Link>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Resources Dropdown */}
                      {item.name === 'Resources' && resourcesDropdownOpen && (
                        <div className="absolute top-full left-0 mt-2 w-[700px] bg-slate-800/95 backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-2xl shadow-black/50 overflow-hidden">
                          <div className="p-6">
                            <h3 className="text-lg font-semibold text-white mb-4">Resources & Support</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {resources.map((resource) => (
                                <div key={resource.name} className="group">
                                  <Link
                                    to={resource.href}
                                    className={`block p-4 rounded-xl transition-all duration-300 hover:bg-slate-700/50 border border-slate-600/50 ${
                                      resource.featured ? 'ring-2 ring-cyan-400/50' : ''
                                    }`}
                                    onClick={() => setResourcesDropdownOpen(false)}
                                  >
                                    <div className="flex items-start gap-3 mb-3">
                                      <div className={`p-2 rounded-lg bg-gradient-to-br ${resource.color}`}>
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
                                    
                                    {/* Subresources */}
                                    {resource.subresources && (
                                      <div className="space-y-2">
                                        {resource.subresources.map((subresource, idx) => (
                                          <div key={idx} className="flex items-center text-sm text-gray-400">
                                            <ArrowRight className="w-4 h-4 mr-2 text-cyan-500" />
                                            <span>{subresource.name}</span>
                                          </div>
                                        ))}
                                      </div>
                                    )}
                                  </Link>
                                </div>
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
