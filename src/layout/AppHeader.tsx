import { ArrowRight, Atom, BookOpen, Brain, Building, Building2, ChevronDown, Cloud, Code, Cpu, DollarSign, FileText, Globe, HeartHandshake, Heart, HelpCircle, Leaf, Lock, Mail, MapPin, Menu, MessageSquare, PenTool, Phone, Rocket, Scale, Search, Settings, Shield, ShoppingCart, Star, Target, TrendingUp, Users, X, Zap, Database, BarChart3, Bot, Smartphone, Eye, Target, Server, HardDrive, Monitor, FileText as FileTextIcon, CheckCircle, GitBranch, Video } from 'lucide-react';
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
    { name: 'Pricing', href: '/pricing', current: false },
    { name: 'Partners', href: '/partners', current: false },
  ];

  // Enhanced services with better categorization
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
      category: 'AI & ML',
      featured: true,
      color: 'from-purple-500 to-cyan-500'
    },
    { 
      name: 'AI Content Creation', 
      href: '/services/ai-content-creation', 
      icon: PenTool, 
      description: 'Content Generation & Optimization',
      category: 'AI & ML',
      featured: true,
      color: 'from-blue-500 to-indigo-500'
    },
    { 
      name: 'AI Healthcare Platform', 
      href: '/services/ai-healthcare-platform', 
      icon: Heart, 
      description: 'Medical AI & Diagnostics',
      category: 'AI & ML',
      featured: true,
      color: 'from-red-500 to-pink-500'
    },
    { 
      name: 'AI Cybersecurity', 
      href: '/services/ai-cybersecurity', 
      icon: Shield, 
      description: 'AI-Powered Security',
      category: 'AI & ML',
      featured: true,
      color: 'from-green-500 to-blue-500'
    },
    
    // Cloud & Infrastructure Services
    { 
      name: 'Cloud DevOps', 
      href: '/services/cloud-devops', 
      icon: Cloud, 
      description: 'DevOps & Infrastructure',
      category: 'Cloud & Infrastructure',
      featured: true,
      color: 'from-indigo-500 to-purple-500'
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
      name: 'Quantum AI Cybersecurity', 
      href: '/services/quantum-ai-cybersecurity-platform', 
      icon: Shield, 
      description: 'Quantum Security & AI',
      featured: true,
      color: 'from-indigo-500 to-purple-500'
    },
    { 
      name: 'Digital Twin Platform', 
      href: '/services/digital-twin', 
      icon: Globe, 
      description: 'Virtual Replicas & Simulation',
      category: 'Cloud & Infrastructure',
      featured: true,
      color: 'from-green-500 to-emerald-500'
    },
    { 
      name: 'IT Infrastructure', 
      href: '/services/it-infrastructure', 
      icon: Server, 
      description: 'Enterprise IT Solutions',
      category: 'Cloud & Infrastructure',
      featured: true,
      color: 'from-indigo-500 to-purple-500'
    },
    
    // Data & Analytics Services
    { 
      name: 'Data Analytics', 
      href: '/services/data-analytics', 
      icon: BarChart3, 
      description: 'Big Data & Analytics',
      category: 'Data & Analytics',
      featured: true,
      color: 'from-orange-500 to-red-500'
    },
    { 
      name: 'Database Management', 
      href: '/services/database-management', 
      icon: Database, 
      description: 'Database Solutions & Optimization',
      category: 'Data & Analytics',
      featured: true,
      color: 'from-teal-500 to-green-500'
    },
    
    // Emerging Technology Services
    { 
      name: 'Quantum Computing', 
      href: '/services/quantum-computing', 
      icon: Atom, 
      description: 'Quantum AI & Optimization',
      category: 'Emerging Tech',
      featured: true,
      color: 'from-purple-500 to-pink-500'
    },
    { 
      name: 'IoT Edge Computing', 
      href: '/services/iot-edge-computing', 
      icon: Cpu, 
      description: 'IoT & Real-time Processing',
      category: 'Emerging Tech',
      featured: true,
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      name: 'Blockchain Solutions', 
      href: '/services/blockchain', 
      icon: Lock, 
      description: 'Decentralized Applications',
      category: 'Emerging Tech',
      featured: true,
      color: 'from-yellow-500 to-orange-500'
    },
    
    // Business Solutions
    { 
      name: 'FinTech Solutions', 
      href: '/services/fintech', 
      icon: DollarSign, 
      description: 'AI-Powered Financial Services',
      category: 'Business Solutions',
      featured: true,
      color: 'from-emerald-500 to-green-500'
    },
    { 
      name: 'AI Marketing Automation', 
      href: '/services/ai-marketing', 
      icon: TrendingUp, 
      description: 'Automated Marketing & Analytics',
      category: 'Business Solutions',
      featured: true,
      color: 'from-emerald-500 to-green-500'
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
      color: 'from-green-500 to-emerald-500'
    },
    { 
      name: 'AI Customer Support', 
      href: '/services/ai-customer-support-automation', 
      icon: MessageSquare, 
      description: 'AI Support Automation',
      featured: true,
      color: 'from-blue-500 to-purple-500'
    },
    { 
      name: 'AI HR Solutions', 
      href: '/services/ai-hr', 
      icon: Users, 
      description: 'HR Automation & Analytics',
      featured: true,
      color: 'from-indigo-500 to-blue-500'
    },
    
    // Specialized Services
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
      color: 'from-blue-500 to-cyan-500'
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
      icon: Globe, 
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
>>>>>>> a8ca0a63f8b31b50348a6bcdc38417fb1943354c
    { 
      name: 'Micro SaaS Products', 
      href: '/services/micro-saas', 
      icon: ShoppingCart, 
      description: 'AI automations with transparent pricing',
      category: 'Specialized',
      featured: true,
      color: 'from-orange-500 to-red-500'
    },
    { 
      name: 'Sustainable Tech', 
      href: '/services/sustainable-tech', 
      icon: Leaf, 
      description: 'Green Technology Solutions',
      category: 'Specialized',
      featured: true,
      color: 'from-green-500 to-teal-500'
    },
    { 
      name: 'Innovative Services 2025', 
      href: '/innovative-services-2025', 
      icon: Rocket, 
      description: 'Cutting-edge AI Services',
      category: 'Specialized',
      featured: true,
      color: 'from-purple-500 to-pink-500'
    },
    { 
      name: 'Revolutionary Services 2030', 
      href: '/revolutionary-services-2030', 
      icon: Rocket, 
      description: 'Future Technology Solutions',
      category: 'Specialized',
      featured: true,
      color: 'from-indigo-500 to-purple-500'
    },
    { 
      name: 'Comprehensive Services 2025', 
      href: '/comprehensive-services-showcase-2025', 
      icon: Star, 
      description: 'Complete Service Portfolio',
      featured: true,
      color: 'from-yellow-500 to-orange-500'
    },
    { 
      name: 'Innovative AI Services 2025', 
      href: '/innovative-ai-services-2025', 
      icon: Brain, 
      description: 'Cutting-edge AI Solutions',
      featured: true,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  // Enhanced solutions with better categorization
  const solutions = [
    {
      name: 'Enterprise Solutions',
      href: '/solutions/enterprise',
      icon: Building2,
      description: 'Large-scale business transformations',
      category: 'Enterprise',
      featured: true
    },
    {
      name: 'SME Solutions',
      href: '/solutions/sme',
      icon: Building,
      description: 'Small and medium business solutions',
      category: 'SME',
      featured: true
    },
    {
      name: 'Startup Solutions',
      href: '/solutions/startup',
      icon: Rocket,
      description: 'Innovation and growth solutions',
      category: 'Startup',
      featured: true
    },
    {
      name: 'Government Solutions',
      href: '/solutions/government',
      icon: Shield,
      description: 'Public sector digital transformation',
      category: 'Government',
      featured: true
    },
    {
      name: 'Healthcare Solutions',
      href: '/solutions/healthcare',
      icon: Heart,
      description: 'Medical technology and AI solutions',
      category: 'Healthcare',
      featured: true
    },
    {
      name: 'Financial Solutions',
      href: '/solutions/financial',
      icon: DollarSign,
      description: 'FinTech and banking solutions',
      category: 'Financial',
      featured: true
    },
    {
      name: 'Manufacturing Solutions',
      href: '/solutions/manufacturing',
      icon: Cpu,
      description: 'Industry 4.0 and smart manufacturing',
      category: 'Manufacturing',
      featured: true
    },
    {
      name: 'Retail Solutions',
      href: '/solutions/retail',
      icon: ShoppingCart,
      description: 'E-commerce and retail technology',
      category: 'Retail',
      featured: true
    }
  ];

  // Enhanced resources with better categorization
  const resources = [
    {
      name: 'Documentation',
      href: '/docs',
      icon: BookOpen,
      description: 'Technical documentation and guides',
      category: 'Technical',
      featured: true
    },
    {
      name: 'API Reference',
      href: '/api-docs',
      icon: Code,
      description: 'API documentation and examples',
      category: 'Technical',
      featured: true
    },
    {
      name: 'Case Studies',
      href: '/case-studies',
      icon: Target,
      description: 'Success stories and implementations',
      category: 'Business',
      featured: true
    },
    {
      name: 'White Papers',
      href: '/white-papers',
      icon: FileTextIcon,
      description: 'Industry insights and research',
      category: 'Business',
      featured: true
    },
    {
      name: 'Webinars',
      href: '/webinars',
      icon: Video,
      description: 'Educational sessions and training',
      category: 'Educational',
      featured: true
    },
    {
      name: 'Blog',
      href: '/blog',
      icon: PenTool,
      description: 'Latest insights and updates',
      category: 'Educational',
      featured: true
    },
    {
      name: 'Help Center',
      href: '/help',
      icon: HelpCircle,
      description: 'Support and troubleshooting',
      category: 'Support',
      featured: true
    },
    {
      name: 'Community',
      href: '/community',
      icon: Users,
      description: 'Developer community and forums',
      category: 'Support',
      featured: true
    }
  ];

  const quickLinks = [
    { name: 'Marketplace', href: '/marketplace', icon: ShoppingCart },
    { name: 'Request Quote', href: '/request-quote', icon: MessageSquare },
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
                            {/* Category Tabs */}
                            <div className="flex space-x-1 mb-6 bg-slate-700/50 rounded-lg p-1">
                              {['All', 'AI & ML', 'Cloud & Infrastructure', 'Data & Analytics', 'Emerging Tech', 'Business Solutions', 'Specialized'].map((category) => (
                                <button
                                  key={category}
                                  className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                                    category === 'All' 
                                      ? 'bg-cyan-500 text-white shadow-lg' 
                                      : 'text-slate-300 hover:text-white hover:bg-slate-600/50'
                                  }`}
                                >
                                  {category}
                                </button>
                              ))}
                            </div>
                            
                            {/* Services Grid by Category */}
                            <div className="space-y-6">
                              {/* AI & ML Services */}
                              <div>
                                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                                  <Brain className="w-5 h-5 text-purple-400" />
                                  AI & Machine Learning
                                </h3>
                                <div className="grid grid-cols-2 gap-3">
                                  {services.filter(s => s.category === 'AI & ML').map((service) => (
                                    <Link
                                      key={service.name}
                                      to={service.href}
                                      className="group p-3 rounded-lg transition-all duration-300 hover:bg-slate-700/50 border border-slate-700/30 hover:border-cyan-400/50"
                                      onClick={() => setServicesDropdownOpen(false)}
                                    >
                                      <div className="flex items-start gap-3">
                                        <div className={`p-2 rounded-lg bg-gradient-to-br ${service.color}`}>
                                          {React.createElement(service.icon, { className: "w-4 h-4 text-white" })}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                          <h4 className="font-medium text-white group-hover:text-cyan-400 transition-colors text-sm">
                                            {service.name}
                                          </h4>
                                          <p className="text-xs text-gray-400 mt-1 line-clamp-2">
                                            {service.description}
                                          </p>
                                        </div>
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              </div>

                              {/* Cloud & Infrastructure Services */}
                              <div>
                                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                                  <Cloud className="w-5 h-5 text-blue-400" />
                                  Cloud & Infrastructure
                                </h3>
                                <div className="grid grid-cols-2 gap-3">
                                  {services.filter(s => s.category === 'Cloud & Infrastructure').map((service) => (
                                    <Link
                                      key={service.name}
                                      to={service.href}
                                      className="group p-3 rounded-lg transition-all duration-300 hover:bg-slate-700/50 border border-slate-700/30 hover:border-blue-400/50"
                                      onClick={() => setServicesDropdownOpen(false)}
                                    >
                                      <div className="flex items-start gap-3">
                                        <div className={`p-2 rounded-lg bg-gradient-to-br ${service.color}`}>
                                          {React.createElement(service.icon, { className: "w-4 h-4 text-white" })}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                          <h4 className="font-medium text-white group-hover:text-blue-400 transition-colors text-sm">
                                            {service.name}
                                          </h4>
                                          <p className="text-xs text-gray-400 mt-1 line-clamp-2">
                                            {service.description}
                                          </p>
                                        </div>
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              </div>

                              {/* Data & Analytics Services */}
                              <div>
                                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                                  <BarChart3 className="w-5 h-5 text-orange-400" />
                                  Data & Analytics
                                </h3>
                                <div className="grid grid-cols-2 gap-3">
                                  {services.filter(s => s.category === 'Data & Analytics').map((service) => (
                                    <Link
                                      key={service.name}
                                      to={service.href}
                                      className="group p-3 rounded-lg transition-all duration-300 hover:bg-slate-700/50 border border-slate-700/30 hover:border-orange-400/50"
                                      onClick={() => setServicesDropdownOpen(false)}
                                    >
                                      <div className="flex items-start gap-3">
                                        <div className={`p-2 rounded-lg bg-gradient-to-br ${service.color}`}>
                                          {React.createElement(service.icon, { className: "w-4 h-4 text-white" })}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                          <h4 className="font-medium text-white group-hover:text-orange-400 transition-colors text-sm">
                                            {service.name}
                                          </h4>
                                          <p className="text-xs text-gray-400 mt-1 line-clamp-2">
                                            {service.description}
                                          </p>
                                        </div>
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              </div>

                              {/* Featured Services Row */}
                              <div className="pt-4 border-t border-slate-700/50">
                                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                                  <Star className="w-5 h-5 text-yellow-400" />
                                  Featured Services
                                </h3>
                                <div className="grid grid-cols-3 gap-3">
                                  {services.filter(s => s.featured).slice(0, 3).map((service) => (
                                    <Link
                                      key={service.name}
                                      to={service.href}
                                      className="group p-3 rounded-lg transition-all duration-300 hover:bg-slate-700/50 border-2 border-cyan-400/30 hover:border-cyan-400/60 bg-gradient-to-br from-slate-700/30 to-slate-800/30"
                                      onClick={() => setServicesDropdownOpen(false)}
                                    >
                                      <div className="text-center">
                                        <div className={`p-3 rounded-lg bg-gradient-to-br ${service.color} mx-auto mb-2 w-fit`}>
                                          {React.createElement(service.icon, { className: "w-5 h-5 text-white" })}
                                        </div>
                                        <h4 className="font-medium text-white group-hover:text-cyan-400 transition-colors text-sm">
                                          {service.name}
                                        </h4>
                                        <p className="text-xs text-gray-400 mt-1 line-clamp-2">
                                          {service.description}
                                        </p>
                                        <span className="inline-flex items-center gap-1 mt-2 text-xs text-cyan-400">
                                          <Star className="w-3 h-3" />
                                          Featured
                                        </span>
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            </div>

                            <div className="mt-6 pt-6 border-t border-slate-700/50">
                              <div className="flex items-center justify-between">
                                <Link
                                  to="/services"
                                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                                  onClick={() => setServicesDropdownOpen(false)}
                                >
                                  View All Services
                                  <ArrowRight className="w-4 h-4" />
                                </Link>
                                <div className="text-sm text-gray-400">
                                  {services.length} services available
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Solutions Dropdown */}
                      {item.name === 'Solutions' && solutionsDropdownOpen && (
                        <div className="absolute top-full left-0 mt-2 w-[700px] bg-slate-800/95 backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-2xl shadow-black/50 overflow-hidden">
                          <div className="p-6">
                            {/* Category Tabs */}
                            <div className="flex space-x-1 mb-6 bg-slate-700/50 rounded-lg p-1">
                              {['All', 'Enterprise', 'SME', 'Startup', 'Government', 'Healthcare', 'Financial', 'Manufacturing', 'Retail'].map((category) => (
                                <button
                                  key={category}
                                  className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                                    category === 'All' 
                                      ? 'bg-blue-500 text-white shadow-lg' 
                                      : 'text-slate-300 hover:text-white hover:bg-slate-600/50'
                                  }`}
                                >
                                  {category}
                                </button>
                              ))}
                            </div>
                            
                            {/* Solutions Grid by Category */}
                            <div className="space-y-6">
                              {/* Enterprise Solutions */}
                              <div>
                                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                                  <Building2 className="w-5 h-5 text-blue-400" />
                                  Enterprise Solutions
                                </h3>
                                <div className="grid grid-cols-2 gap-3">
                                  {solutions.filter(s => s.category === 'Enterprise').map((solution) => (
                                    <Link
                                      key={solution.name}
                                      to={solution.href}
                                      className="group p-3 rounded-lg transition-all duration-300 hover:bg-slate-700/50 border border-slate-700/30 hover:border-blue-400/50"
                                      onClick={() => setSolutionsDropdownOpen(false)}
                                    >
                                      <div className="flex items-start gap-3">
                                        <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500">
                                          {React.createElement(solution.icon, { className: "w-4 h-4 text-white" })}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                          <h4 className="font-medium text-white group-hover:text-blue-400 transition-colors text-sm">
                                            {solution.name}
                                          </h4>
                                          <p className="text-xs text-gray-400 mt-1 line-clamp-2">
                                            {solution.description}
                                          </p>
                                        </div>
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              </div>

                              {/* SME Solutions */}
                              <div>
                                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                                  <Building className="w-5 h-5 text-green-400" />
                                  SME Solutions
                                </h3>
                                <div className="grid grid-cols-2 gap-3">
                                  {solutions.filter(s => s.category === 'SME').map((solution) => (
                                    <Link
                                      key={solution.name}
                                      to={solution.href}
                                      className="group p-3 rounded-lg transition-all duration-300 hover:bg-slate-700/50 border border-slate-700/30 hover:border-green-400/50"
                                      onClick={() => setSolutionsDropdownOpen(false)}
                                    >
                                      <div className="flex items-start gap-3">
                                        <div className="p-2 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500">
                                          {React.createElement(solution.icon, { className: "w-4 h-4 text-white" })}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                          <h4 className="font-medium text-white group-hover:text-green-400 transition-colors text-sm">
                                            {solution.name}
                                          </h4>
                                          <p className="text-xs text-gray-400 mt-1 line-clamp-2">
                                            {solution.description}
                                          </p>
                                        </div>
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              </div>

                              {/* Featured Solutions Row */}
                              <div className="pt-4 border-t border-slate-700/50">
                                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                                  <Star className="w-5 h-5 text-yellow-400" />
                                  Featured Solutions
                                </h3>
                                <div className="grid grid-cols-3 gap-3">
                                  {solutions.filter(s => s.featured).slice(0, 3).map((solution) => (
                                    <Link
                                      key={solution.name}
                                      to={solution.href}
                                      className="group p-3 rounded-lg transition-all duration-300 hover:bg-slate-700/50 border-2 border-blue-400/30 hover:border-blue-400/60 bg-gradient-to-br from-slate-700/30 to-slate-800/30"
                                      onClick={() => setSolutionsDropdownOpen(false)}
                                    >
                                      <div className="text-center">
                                        <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 mx-auto mb-2 w-fit">
                                          {React.createElement(solution.icon, { className: "w-5 h-5 text-white" })}
                                        </div>
                                        <h4 className="font-medium text-white group-hover:text-blue-400 transition-colors text-sm">
                                          {solution.name}
                                        </h4>
                                        <p className="text-xs text-gray-400 mt-1 line-clamp-2">
                                          {solution.description}
                                        </p>
                                        <span className="inline-flex items-center gap-1 mt-2 text-xs text-blue-400">
                                          <Star className="w-3 h-3" />
                                          Featured
                                        </span>
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            </div>

                            <div className="mt-6 pt-6 border-t border-slate-700/50">
                              <div className="flex items-center justify-between">
                                <Link
                                  to="/solutions"
                                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-medium"
                                  onClick={() => setSolutionsDropdownOpen(false)}
                                >
                                  View All Solutions
                                  <ArrowRight className="w-4 h-4" />
                                </Link>
                                <div className="text-sm text-gray-400">
                                  {solutions.length} solutions available
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Resources Dropdown */}
                      {item.name === 'Resources' && resourcesDropdownOpen && (
                        <div className="absolute top-full left-0 mt-2 w-[700px] bg-slate-800/95 backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-2xl shadow-black/50 overflow-hidden">
                          <div className="p-6">
                            {/* Category Tabs */}
                            <div className="flex space-x-1 mb-6 bg-slate-700/50 rounded-lg p-1">
                              {['All', 'Technical', 'Business', 'Educational', 'Support'].map((category) => (
                                <button
                                  key={category}
                                  className={`px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                                    category === 'All' 
                                      ? 'bg-purple-500 text-white shadow-lg' 
                                      : 'text-slate-300 hover:text-white hover:bg-slate-600/50'
                                  }`}
                                >
                                  {category}
                                </button>
                              ))}
                            </div>
                            
                            {/* Resources Grid by Category */}
                            <div className="space-y-6">
                              {/* Technical Resources */}
                              <div>
                                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                                  <Code className="w-5 h-5 text-purple-400" />
                                  Technical Resources
                                </h3>
                                <div className="grid grid-cols-2 gap-3">
                                  {resources.filter(r => r.category === 'Technical').map((resource) => (
                                    <Link
                                      key={resource.name}
                                      to={resource.href}
                                      className="group p-3 rounded-lg transition-all duration-300 hover:bg-slate-700/50 border border-slate-700/30 hover:border-purple-400/50"
                                      onClick={() => setResourcesDropdownOpen(false)}
                                    >
                                      <div className="flex items-start gap-3">
                                        <div className="p-2 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500">
                                          {React.createElement(resource.icon, { className: "w-4 h-4 text-white" })}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                          <h4 className="font-medium text-white group-hover:text-purple-400 transition-colors text-sm">
                                            {resource.name}
                                          </h4>
                                          <p className="text-xs text-gray-400 mt-1 line-clamp-2">
                                            {resource.description}
                                          </p>
                                        </div>
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              </div>

                              {/* Business Resources */}
                              <div>
                                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                                  <Target className="w-5 h-5 text-green-400" />
                                  Business Resources
                                </h3>
                                <div className="grid grid-cols-2 gap-3">
                                  {resources.filter(r => r.category === 'Business').map((resource) => (
                                    <Link
                                      key={resource.name}
                                      to={resource.href}
                                      className="group p-3 rounded-lg transition-all duration-300 hover:bg-slate-700/50 border border-slate-700/30 hover:border-green-400/50"
                                      onClick={() => setResourcesDropdownOpen(false)}
                                    >
                                      <div className="flex items-start gap-3">
                                        <div className="p-2 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500">
                                          {React.createElement(resource.icon, { className: "w-4 h-4 text-white" })}
                                        </div>
                                        <div className="flex-1 min-w-0">
                                          <h4 className="font-medium text-white group-hover:text-green-400 transition-colors text-sm">
                                            {resource.name}
                                          </h4>
                                          <p className="text-xs text-gray-400 mt-1 line-clamp-2">
                                            {resource.description}
                                          </p>
                                        </div>
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              </div>

                              {/* Featured Resources Row */}
                              <div className="pt-4 border-t border-slate-700/50">
                                <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                                  <Star className="w-5 h-5 text-yellow-400" />
                                  Featured Resources
                                </h3>
                                <div className="grid grid-cols-3 gap-3">
                                  {resources.filter(r => r.featured).slice(0, 3).map((resource) => (
                                    <Link
                                      key={resource.name}
                                      to={resource.href}
                                      className="group p-3 rounded-lg transition-all duration-300 hover:bg-slate-700/50 border-2 border-purple-400/30 hover:border-purple-400/60 bg-gradient-to-br from-slate-700/30 to-slate-800/30"
                                      onClick={() => setResourcesDropdownOpen(false)}
                                    >
                                      <div className="text-center">
                                        <div className="p-3 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 mx-auto mb-2 w-fit">
                                          {React.createElement(resource.icon, { className: "w-5 h-5 text-white" })}
                                        </div>
                                        <h4 className="font-medium text-white group-hover:text-purple-400 transition-colors text-sm">
                                          {resource.name}
                                        </h4>
                                        <p className="text-xs text-gray-400 mt-1 line-clamp-2">
                                          {resource.description}
                                        </p>
                                        <span className="inline-flex items-center gap-1 mt-2 text-xs text-purple-400">
                                          <Star className="w-3 h-3" />
                                          Featured
                                        </span>
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            </div>

                            <div className="mt-6 pt-6 border-t border-slate-700/50">
                              <div className="flex items-center justify-between">
                                <Link
                                  to="/resources"
                                  className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors font-medium"
                                  onClick={() => setResourcesDropdownOpen(false)}
                                >
                                  View All Resources
                                  <ArrowRight className="w-4 h-4" />
                                </Link>
                                <div className="text-sm text-gray-400">
                                  {resources.length} resources available
                                </div>
                              </div>
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
