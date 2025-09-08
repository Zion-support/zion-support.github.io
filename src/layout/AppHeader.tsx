import { ArrowRight, Atom, BookOpen, Brain, Building, Building2, ChevronDown, Cloud, Code, Cpu, DollarSign, FileText, Globe, HeartHandshake, Heart, HelpCircle, Leaf, Lock, Mail, MapPin, Menu, MessageCircle, PenTool, Phone, Rocket, Scale, Search, Settings, Shield, ShoppingCart, Star, Target, TrendingUp, Users, X, Zap, User, Bell, Award, GraduationCap, LifeBuoy } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, User, Bell, ChevronDown, Zap, Brain, Shield, Cloud, Rocket, Globe, Cpu, Lock, Heart, Users, ShoppingCart, BookOpen, MessageCircle, HelpCircle, DollarSign, Star, TrendingUp, Award, Settings, Phone, Mail, MapPin, Building, Sidebar as SidebarIcon } from 'lucide-react';
import { ThemeToggle } from '../components/ThemeToggle';
import { ZionLoadingSpinner } from '../components/ui/EnhancedLoadingSpinner';
import { motion, AnimatePresence } from 'framer-motion';
import { Sidebar } from '../components/Sidebar';

export function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
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
    { name: 'About', href: '/about', current: false },
    { name: 'Services', href: '/services', current: false },
    { name: 'Solutions', href: '/solutions', current: false },
    { name: 'Case Studies', href: '/case-studies', current: false },
    { name: 'Blog', href: '/blog', current: false },
    { name: 'Careers', href: '/careers', current: false },
    { name: 'Contact', href: '/contact', current: false },
  ];

  // Enhanced services by category with better organization and working links
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
      color: 'from-orange-500 to-red-500'
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
      name: 'Comprehensive Services Showcase 2025', 
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
    },
    { 
      name: 'Cloud DevOps', 
      href: '/services/cloud-devops', 
      icon: Cloud, 
      description: 'Infrastructure & Automation',
      featured: false,
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  // Solutions categories
  const solutions = [
    { name: 'Enterprise Solutions', href: '/solutions/enterprise', icon: Building, description: 'Large-scale enterprise solutions', category: 'Enterprise', color: 'from-blue-500 to-indigo-500' },
    { name: 'Healthcare Solutions', href: '/solutions/healthcare', icon: Heart, description: 'Healthcare IT infrastructure', category: 'Healthcare', color: 'from-red-500 to-pink-500' },
    { name: 'Financial Services', href: '/solutions/financial', icon: DollarSign, description: 'Financial technology solutions', category: 'Financial', color: 'from-green-500 to-emerald-500' },
    { name: 'Manufacturing', href: '/solutions/manufacturing', icon: Truck, description: 'Manufacturing IT systems', category: 'Manufacturing', color: 'from-orange-500 to-red-500' },
    { name: 'Retail & E-commerce', href: '/solutions/retail', icon: ShoppingCart, description: 'Retail technology solutions', category: 'Retail', color: 'from-purple-500 to-pink-500' },
    { name: 'Government', href: '/solutions/government', icon: Building, description: 'Public sector IT solutions', category: 'Government', color: 'from-gray-500 to-slate-500' }
  ];

  // Resources categories
  const resources = [
    { name: 'Blog', href: '/blog', icon: BookOpen, description: 'Latest insights and updates', category: 'Content', color: 'from-blue-500 to-cyan-500' },
    { name: 'Case Studies', href: '/case-studies', icon: FileText, description: 'Client success stories', category: 'Content', color: 'from-green-500 to-emerald-500' },
    { name: 'News', href: '/news', icon: Newspaper, description: 'Company news and announcements', category: 'Content', color: 'from-purple-500 to-pink-500' },
    { name: 'FAQ', href: '/faq', icon: HelpCircle, description: 'Frequently asked questions', category: 'Support', color: 'from-orange-500 to-red-500' },
    { name: 'Help Center', href: '/help', icon: LifeBuoy, description: 'Support and documentation', category: 'Support', color: 'from-indigo-500 to-purple-500' },
    { name: 'Pricing', href: '/pricing', icon: DollarSign, description: 'Service pricing and plans', category: 'Business', color: 'from-yellow-500 to-orange-500' },
    { name: 'Partners', href: '/partners', icon: Users, description: 'Partnership opportunities', category: 'Business', color: 'from-green-500 to-teal-500' },
    { name: 'Careers', href: '/careers', icon: Briefcase, description: 'Job opportunities', category: 'Business', color: 'from-blue-500 to-indigo-500' }
  ];

  const quickLinks = [
    { name: 'Marketplace', href: '/marketplace', icon: ShoppingCart },
    { name: 'Request Quote', href: '/request-quote', icon: MessageCircle },
    { name: 'Pricing', href: '/pricing', icon: DollarSign },
    { name: 'Careers', href: '/careers', icon: Users },
    { name: 'Partners', href: '/partners', icon: HeartHandshake },
    { name: 'Schedule Demo', href: '/schedule-demo', icon: Calendar },
    { name: 'Community', href: '/community', icon: Users },
    { name: 'Developers', href: '/developers', icon: Code },
    { name: 'Privacy', href: '/privacy', icon: Shield },
    { name: 'Terms', href: '/terms', icon: BookOpen },
  ];

  const companyCategories = [
    {
      name: 'AI & Analytics',
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
      services: [
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', description: 'Machine Learning & Data Science' },
        { name: 'AI Sales Copilot', href: '/services/ai-sales-copilot', description: 'AI-powered sales automation' },
        { name: 'AI Compliance Assistant', href: '/services/ai-compliance-assistant', description: 'Regulatory compliance automation' },
        { name: 'LLM Content Studio', href: '/services/llm-content-studio', description: 'AI content generation' },
        { name: 'AI Healthcare Analytics', href: '/services/ai-healthcare-analytics', description: 'Healthcare AI solutions' }
      ]
    },
    {
      name: 'Cloud & DevOps',
      icon: Cloud,
      color: 'from-blue-600 to-cyan-600',
      services: [
        { name: 'Cloud DevOps', href: '/services/cloud-devops', description: 'Infrastructure & Automation' },
        { name: 'Cloud FinOps Optimizer', href: '/services/cloud-finops-optimizer', description: 'Cost optimization' },
        { name: 'FinOps Advisor', href: '/services/finops-advisor', description: 'Financial operations' },
        { name: 'IT Infrastructure', href: '/services/it-infrastructure', description: 'Enterprise infrastructure' }
      ]
    },
    {
      name: 'Resources',
      icon: BookOpen,
      color: 'from-green-600 to-emerald-600',
      services: [
        { name: 'Digital Twin', href: '/services/digital-twin', description: 'Simulation & Monitoring' },
        { name: 'Digital Transformation', href: '/services/digital-transformation', description: 'Business transformation' },
        { name: 'Data Analytics', href: '/services/data-analytics', description: 'Business intelligence' },
        { name: 'IT Consulting', href: '/services/it-consulting', description: 'Strategic IT guidance' }
      ]
    },
    {
      name: 'Cybersecurity',
      icon: Shield,
      color: 'from-red-600 to-orange-600',
      services: [
        { name: 'AI Compliance Copilot', href: '/services/ai-compliance-copilot', description: 'AI-Powered Security' },
        { name: 'Zero Trust Architecture', href: '/services/zero-trust-network-architecture', description: 'Advanced security' },
        { name: 'AI Cybersecurity Suite', href: '/services/ai-cybersecurity-suite', description: 'Comprehensive security' }
      ]
    },
    {
      name: 'Emerging Tech',
      icon: Star,
      color: 'from-indigo-600 to-purple-600',
      services: [
        { name: 'Quantum Computing', href: '/services/quantum-computing', description: 'Next-gen computing' },
        { name: 'Space Technology', href: '/services/space-tech', description: 'Space tech solutions' },
        { name: 'Quantum AI Platform', href: '/services/quantum-ai-platform', description: 'Quantum AI integration' }
      ]
    },
    {
      name: 'Business Tools',
      icon: ShoppingCart,
      color: 'from-yellow-600 to-orange-600',
      services: [
        { name: 'Micro SaaS Solutions', href: '/services/micro-saas-solutions', description: 'Productized SaaS for niches' },
        { name: 'AI Auto Email Responder', href: '/services/ai-auto-email-responder', description: 'Faster replies, CRM logging' },
        { name: 'Customer Feedback Surveys', href: '/services/mobile-feedback-surveys', description: 'NPS/CSAT with AI insights' }
      ]
    }
  ];

  const servicesCategories = [
    {
      name: 'AI & Analytics',
      icon: Brain,
      color: 'from-purple-600 to-pink-600',
      description: 'Intelligent data solutions',
      services: [
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', description: 'Machine Learning & Data Science' },
        { name: 'AI Sales Copilot', href: '/services/ai-sales-copilot', description: 'AI-powered sales assistance' },
        { name: 'AI Compliance Assistant', href: '/services/ai-compliance-assistant', description: 'Regulatory compliance automation' },
        { name: 'LLM Content Studio', href: '/services/llm-content-studio', description: 'AI content generation' }
      ]
    },
    {
      name: 'Cloud & DevOps',
      icon: Cloud,
      color: 'from-blue-600 to-cyan-600',
      description: 'Infrastructure & automation',
      services: [
        { name: 'Cloud DevOps', href: '/services/cloud-devops', description: 'Infrastructure & Automation' },
        { name: 'Micro SaaS Solutions', href: '/services/micro-saas-solutions', description: 'Productized SaaS for niches' },
        { name: 'Cloud FinOps Optimizer', href: '/services/cloud-finops-optimizer', description: 'Cloud cost optimization' },
        { name: 'FinOps Advisor', href: '/services/finops-advisor', description: 'Financial operations optimization' }
      ]
    },
    {
      name: 'IoT & Digital Twin',
      icon: Rocket,
      color: 'from-green-600 to-emerald-600',
      description: 'Smart devices & simulation',
      services: [
        { name: 'Digital Twin', href: '/services/digital-twin', description: 'Simulation & Monitoring' },
        { name: 'IoT Edge Computing', href: '/services/iot-edge', description: 'Smart Devices & Networks' },
        { name: 'IT Infrastructure', href: '/services/it-infrastructure', description: 'Enterprise infrastructure' },
        { name: 'Data Analytics', href: '/services/data-analytics', description: 'Business intelligence & insights' }
      ]
    },
    {
      name: 'Cybersecurity',
      icon: Shield,
      color: 'from-red-600 to-orange-600',
      description: 'AI-powered security',
      services: [
        { name: 'AI Compliance Copilot', href: '/services/ai-compliance-copilot', description: 'AI-Powered Security' },
        { name: 'AI Compliance Assistant', href: '/services/ai-compliance-assistant', description: 'Regulatory compliance' },
        { name: 'Zero Trust Architecture', href: '/services/zero-trust-architecture', description: 'Modern security framework' },
        { name: 'Incident Response', href: '/services/incident-response-platform', description: 'Security incident management' }
      ]
    },
    {
      name: 'Emerging Tech',
      icon: Crown,
      color: 'from-indigo-600 to-purple-600',
      description: 'Future-ready solutions',
      services: [
        { name: 'Quantum Computing', href: '/services/quantum-computing', description: 'Next-gen computing' },
        { name: 'Blockchain Solutions', href: '/services/blockchain-enterprise-solutions', description: 'DeFi & Smart Contracts' },
        { name: 'Space Technology', href: '/services/space-tech', description: 'Space industry solutions' },
        { name: 'Sustainability', href: '/services/sustainability', description: 'Green IT Solutions' }
      ]
    }
  ];

  const quickLinks = [
    { name: 'Innovative Services 2025', href: '/innovative-services-showcase-2025', icon: Star, description: 'Latest cutting-edge solutions' },
    { name: 'Services Showcase', href: '/revolutionary-services-showcase-2030', icon: TrendingUp, description: 'Future-ready services' },
    { name: 'Pricing Guide 2030', href: '/pricing-2030', icon: DollarSign, description: 'Advanced pricing strategies' },
    { name: 'Request Quote', href: '/request-quote', icon: MessageCircle, description: 'Get custom pricing' },
    { name: 'Marketplace', href: '/marketplace', icon: ShoppingCart, description: 'Explore our solutions' },
    { name: 'Partners', href: '/partners', icon: Users, description: 'Strategic partnerships' }
  ];

  const supportLinks = [
    { name: 'FAQ', href: '/faq', icon: HelpCircle },
    { name: 'Blog', href: '/blog', icon: BookOpen },
    { name: 'Support', href: '/support', icon: MessageCircle },
    { name: 'Documentation', href: '/docs', icon: BookOpen },
    { name: 'Training', href: '/training', icon: Award },
    { name: 'Help Center', href: '/help', icon: HelpCircle }
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
                        <div className="absolute top-full left-0 mt-2 w-[800px] bg-slate-800/95 backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-2xl shadow-black/50 overflow-hidden">
                          <div className="p-6">
                            <div className="grid grid-cols-2 gap-6">
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
                                      {React.createElement(service.icon, { className: "w-5 h-5 text-white" })}
                                    </div>
                                    <div className="flex-1">
                                      <h3 className="font-semibold text-white group-hover:text-cyan-400 transition-colors">
                                        {service.name}
                                      </h3>
                                      <p className="text-sm text-gray-400 mt-1">
                                        {service.description}
                                      </p>
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
                                <div className="flex items-center gap-4 text-sm text-gray-400">
                                  <span>Quick Access:</span>
                                  <div className="flex gap-2">
                                    <Link
                                      to="/request-quote"
                                      className="px-3 py-1 bg-slate-700/50 rounded-md hover:bg-slate-600/50 hover:text-white transition-colors"
                                      onClick={() => setServicesDropdownOpen(false)}
                                    >
                                      Get Quote
                                    </Link>
                                    <Link
                                      to="/schedule-demo"
                                      className="px-3 py-1 bg-slate-700/50 rounded-md hover:bg-slate-600/50 hover:text-white transition-colors"
                                      onClick={() => setServicesDropdownOpen(false)}
                                    >
                                      Schedule Demo
                                    </Link>
                                  </div>
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
                                      {React.createElement(solution.icon, { className: "w-5 h-5 text-white" })}
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
                            <div className="mt-6 pt-6 border-t border-slate-700/50">
                              <div className="flex items-center justify-between">
                                <Link
                                  to="/solutions"
                                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                                  onClick={() => setSolutionsDropdownOpen(false)}
                                >
                                  View All Solutions
                                  <ArrowRight className="w-4 h-4" />
                                </Link>
                                <div className="flex items-center gap-4 text-sm text-gray-400">
                                  <span>Quick Access:</span>
                                  <div className="flex gap-2">
                                    <Link
                                      to="/contact"
                                      className="px-3 py-1 bg-slate-700/50 rounded-md hover:bg-slate-600/50 hover:text-white transition-colors"
                                      onClick={() => setSolutionsDropdownOpen(false)}
                                    >
                                      Contact Us
                                    </Link>
                                    <Link
                                      to="/schedule-demo"
                                      className="px-3 py-1 bg-slate-700/50 rounded-md hover:bg-slate-600/50 hover:text-white transition-colors"
                                      onClick={() => setSolutionsDropdownOpen(false)}
                                    >
                                      Schedule Demo
                                    </Link>
                                  </div>
                                </div>
                              </div>
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
                                      {React.createElement(resource.icon, { className: "w-5 h-5 text-white" })}
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
                            <div className="mt-6 pt-6 border-t border-slate-700/50">
                              <div className="flex items-center justify-between">
                                <Link
                                  to="/resources"
                                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                                  onClick={() => setResourcesDropdownOpen(false)}
                                >
                                  View All Resources
                                  <ArrowRight className="w-4 h-4" />
                                </Link>
                                <div className="flex items-center gap-4 text-sm text-gray-400">
                                  <span>Quick Access:</span>
                                  <div className="flex gap-2">
                                    <Link
                                      to="/faq"
                                      className="px-3 py-1 bg-slate-700/50 rounded-md hover:bg-slate-600/50 hover:text-white transition-colors"
                                      onClick={() => setResourcesDropdownOpen(false)}
                                    >
                                      FAQ
                                    </Link>
                                    <Link
                                      to="/contact"
                                      className="px-3 py-1 bg-slate-700/50 rounded-md hover:bg-slate-600/50 hover:text-white transition-colors"
                                      onClick={() => setResourcesDropdownOpen(false)}
                                    >
                                      Contact
                                    </Link>
                                  </div>
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

              {/* Contact Info */}
              <div className="hidden lg:flex items-center space-x-4 text-sm text-slate-300">
                <a href="tel:+13024640950" className="flex items-center space-x-1 hover:text-cyan-400 transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>+1 302 464 0950</span>
                </a>
              </div>

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

        {/* Services Dropdown */}
        <AnimatePresence>
          {servicesDropdownOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-slate-900/95 backdrop-blur-xl border-b border-cyan-400/20"
            >
              <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
                  {servicesCategories.map((category) => (
                    <div key={category.name} className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                          <category.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-white">{category.name}</h3>
                          <p className="text-sm text-slate-400">Innovative solutions</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        {category.links.map((link) => (
                          <Link
                            key={link.name}
                            to={link.href}
                            className="block p-3 rounded-lg hover:bg-slate-800/50 transition-colors group"
                          >
                            <div className="font-medium text-white group-hover:text-cyan-400 transition-colors">
                              {link.name}
                            </div>
                            <div className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                              {link.description}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quick Links Section */}
                <div className="mt-8 pt-8 border-t border-slate-700">
                  <h3 className="text-lg font-semibold text-white mb-4">Quick Access</h3>
                  <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
                    {quickLinks.map((link) => (
                      <Link
                        key={link.name}
                        to={link.href}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-800/50 transition-colors group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-cyan-400/20 transition-colors">
                          <link.icon className="w-4 h-4 text-cyan-400" />
                        </div>
                        <div>
                          <div className="font-medium text-white group-hover:text-cyan-400 transition-colors">
                            {link.name}
                          </div>
                          <div className="text-sm text-slate-400">
                            {link.description}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Support Links Section */}
                <div className="mt-6 pt-6 border-t border-slate-700">
                  <h3 className="text-lg font-semibold text-white mb-4">Support & Resources</h3>
                  <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
                    {supportLinks.map((link) => (
                      <Link
                        key={link.name}
                        to={link.href}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-800/50 transition-colors group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center group-hover:bg-cyan-400/20 transition-colors">
                          <link.icon className="w-4 h-4 text-cyan-400" />
                        </div>
                        <div>
                          <div className="font-medium text-white group-hover:text-cyan-400 transition-colors">
                            {link.name}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/50" onClick={() => setMobileMenuOpen(false)} />
            <div className="absolute right-0 top-0 h-full w-80 bg-slate-900 border-l border-slate-700 overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-xl font-semibold text-white">Menu</h2>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Mobile Search */}
                <form onSubmit={handleSearch} className="mb-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Search services..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 rounded-lg bg-slate-800 border border-slate-600 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 outline-none text-white placeholder-slate-400"
                    />
                  </div>
                </form>

                {/* Mobile Navigation */}
                <nav className="space-y-4">
                  {mainNavigation.map((item) => (
                    <div key={item.name}>
                      {item.hasDropdown ? (
                        <div className="space-y-2">
                          <div className="font-medium text-white py-2">{item.name}</div>
                          <div className="pl-4 space-y-2">
                            {servicesCategories.map((category) => (
                              <div key={category.name} className="space-y-2">
                                <div className="text-sm font-medium text-cyan-400">{category.name}</div>
                                <div className="pl-4 space-y-1">
                                  {category.services.slice(0, 3).map((service) => (
                                    <Link
                                      key={service.name}
                                      to={service.href}
                                      onClick={() => setMobileMenuOpen(false)}
                                      className="block text-sm text-slate-300 hover:text-white transition-colors py-1"
                                    >
                                      {service.name}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link
                          to={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block font-medium text-white hover:text-cyan-400 transition-colors py-2"
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </nav>

                {/* Mobile Quick Links */}
                <div className="mt-8 pt-8 border-t border-slate-700">
                  <h3 className="font-medium text-white mb-4">Quick Access</h3>
                  <div className="space-y-2">
                    {quickLinks.map((link) => (
                      <Link
                        key={link.name}
                        to={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center space-x-3 p-2 rounded-lg hover:bg-slate-800 transition-colors"
                      >
                        <link.icon className="w-5 h-5 text-cyan-400" />
                        <span className="text-slate-300">{link.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Mobile Support Links */}
                <div className="mt-6 pt-6 border-t border-slate-700">
                  <h3 className="font-medium text-white mb-4">Support & Resources</h3>
                  <div className="space-y-2">
                    {supportLinks.map((link) => (
                      <Link
                        key={link.name}
                        to={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center space-x-3 p-2 rounded-lg hover:bg-slate-800 transition-colors"
                      >
                        <link.icon className="w-5 h-5 text-cyan-400" />
                        <span className="text-slate-300">{link.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Mobile Contact Info */}
                <div className="mt-8 pt-8 border-t border-slate-700">
                  <h3 className="font-medium text-white mb-4">Contact Us</h3>
                  <div className="space-y-3 text-sm text-slate-300">
                    <a href="tel:+13024640950" className="flex items-center space-x-3 hover:text-cyan-400 transition-colors">
                      <Phone className="w-4 h-4" />
                      <span>+1 302 464 0950</span>
                    </a>
                    <a href="mailto:kleber@ziontechgroup.com" className="flex items-center space-x-3 hover:text-cyan-400 transition-colors">
                      <Mail className="w-4 h-4" />
                      <span>kleber@ziontechgroup.com</span>
                    </a>
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-4 h-4 mt-0.5" />
                      <span>
                        364 E Main St STE 1008<br />
                        Middletown DE 19709
                      </span>
                    </div>
                  </div>
                </div>
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
