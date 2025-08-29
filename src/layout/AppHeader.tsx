import { ArrowRight, Atom, BookOpen, Brain, Building, Building2, ChevronDown, Cloud, Code, Cpu, DollarSign, FileText, Globe, HeartHandshake, Heart, HelpCircle, Leaf, Lock, Mail, MapPin, Menu, MessageCircle, PenTool, Phone, Rocket, Scale, Search, Settings, Shield, ShoppingCart, Star, Target, TrendingUp, Users, X, Zap, Truck, Play, BarChart3, GraduationCap, Factory } from 'lucide-react';
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
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

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

  const closeAllDropdowns = () => {
    setServicesDropdownOpen(false);
    setSolutionsDropdownOpen(false);
    setResourcesDropdownOpen(false);
    setActiveDropdown(null);
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
    { name: 'AI Enterprise Orchestrator', href: '/services/ai-enterprise-orchestrator', icon: Brain, description: 'Multi-agent AI coordination & workflow automation' },
    { name: 'AI & Analytics', href: '/services/ai-business-intelligence', icon: Brain, description: 'Machine Learning & Data Science' },
    { name: 'AI Cybersecurity Suite', href: '/services/ai-cybersecurity-suite', icon: Shield, description: 'AI-Powered Threat Detection & Response' },
    { name: 'Quantum AI Platform', href: '/services/quantum-ai-platform', icon: Zap, description: 'Next-Generation Quantum Computing' },
    { name: 'AI Healthcare Analytics', href: '/services/ai-healthcare-analytics', icon: Heart, description: 'Predictive Diagnostics & Care Optimization' },
    { name: 'Digital Twin', href: '/services/digital-twin', icon: Rocket, description: 'Simulation & Monitoring' },
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
    { name: 'AI Lead Scoring', href: '/services/ai-lead-scoring', icon: TrendingUp, description: 'Prioritize deals with ML' },
    { name: 'Website AI Chatbot', href: '/services/website-ai-chatbot', icon: MessageCircle, description: '24/7 on-site assistant' },
    { name: 'RAG Search', href: '/services/rag-search', icon: BookOpen, description: 'AI answers with citations' },
    { name: 'MLOps Pipeline', href: '/services/mlops-pipeline', icon: Settings, description: 'Train, deploy, monitor' },
    { name: 'eCommerce Personalization', href: '/services/ecommerce-personalization', icon: ShoppingCart, description: 'Recos & search' },
    { name: 'AI Sales Automation', href: '/innovative-services-showcase-2025', icon: TrendingUp, description: 'Complete sales automation suite' },
    { name: 'AI Customer Support', href: '/innovative-services-showcase-2025', icon: MessageCircle, description: 'Intelligent support platform' },
    { name: 'AI Financial Analytics', href: '/innovative-services-showcase-2025', icon: DollarSign, description: 'Advanced financial insights' },
    { name: 'AI Supply Chain', href: '/innovative-services-showcase-2025', icon: Settings, description: 'Supply chain optimization' },
    { name: 'AI HR Platform', href: '/innovative-services-showcase-2025', icon: Users, description: 'HR automation & analytics' },
    { name: 'AI Project Management', href: '/innovative-services-showcase-2025', icon: Target, description: 'Smart project optimization' },
    { name: 'AI Marketing Automation', href: '/innovative-services-showcase-2025', icon: BarChart3, description: 'Marketing campaign optimization' },
    { name: 'AI Learning Management', href: '/innovative-services-showcase-2025', icon: GraduationCap, description: 'Personalized learning platform' },
    { name: 'AI Legal Automation', href: '/innovative-services-showcase-2025', icon: FileText, description: 'Legal document automation' },
    { name: 'AI Healthcare Analytics', href: '/innovative-services-showcase-2025', icon: Heart, description: 'Healthcare insights platform' },
    { name: 'AI Project Management Platform', href: '/services/ai-project-management-platform', icon: Target, description: 'AI-powered project optimization' },
    { name: 'AI Cybersecurity Threat Detection', href: '/services/ai-cybersecurity-threat-detection', icon: Shield, description: 'Advanced threat detection' },
    { name: 'AI Financial Trading Platform', href: '/services/ai-financial-trading-platform', icon: DollarSign, description: 'AI-powered trading' },
    { name: 'AI Healthcare Analytics Platform', href: '/services/ai-healthcare-analytics-platform', icon: Heart, description: 'Healthcare analytics platform' }
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
        { name: 'AI Enterprise Orchestrator', href: '/services/ai-enterprise-orchestrator', description: 'Multi-agent AI coordination & workflow automation' },
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', description: 'Machine Learning & Data Science' },
        { name: 'AI Sales Copilot', href: '/services/ai-sales-copilot', description: 'AI-powered sales automation' },
        { name: 'AI Compliance Assistant', href: '/services/ai-compliance-assistant', description: 'Regulatory compliance automation' },
        { name: 'LLM Content Studio', href: '/services/llm-content-studio', description: 'AI content generation' },
        { name: 'AI Sales Automation Suite', href: '/innovative-services-showcase-2025', description: 'Complete sales automation' },
        { name: 'AI Customer Support Platform', href: '/innovative-services-showcase-2025', description: 'Intelligent support system' },
        { name: 'AI Financial Analytics', href: '/innovative-services-showcase-2025', description: 'Financial insights platform' },
        { name: 'AI Project Management Platform', href: '/services/ai-project-management-platform', description: 'AI-powered project optimization' },
        { name: 'AI Cybersecurity Threat Detection', href: '/services/ai-cybersecurity-threat-detection', description: 'Advanced threat detection' },
        { name: 'AI Financial Trading Platform', href: '/services/ai-financial-trading-platform', description: 'AI-powered trading' },
        { name: 'AI Healthcare Analytics Platform', href: '/services/ai-healthcare-analytics-platform', description: 'Healthcare analytics platform' }
      ]
    },
    {
      name: 'Cybersecurity',
      icon: Shield,
      color: 'from-indigo-600 to-purple-600',
      services: [
        { name: 'AI Cybersecurity Suite', href: '/services/ai-cybersecurity-suite', description: 'AI-Powered Threat Detection & Response' },
        { name: 'AI Compliance Copilot', href: '/services/ai-compliance-copilot', description: 'AI-Powered Security' },
        { name: 'Zero Trust Architecture', href: '/services/zero-trust-network-architecture', description: 'Advanced security' }
      ]
    },
    {
      name: 'Emerging Technologies',
      icon: Zap,
      color: 'from-blue-600 to-cyan-600',
      services: [
        { name: 'Quantum AI Platform', href: '/services/quantum-ai-platform', description: 'Next-Generation Quantum Computing' },
        { name: 'AI Healthcare Analytics', href: '/services/ai-healthcare-analytics', description: 'Predictive Diagnostics & Care' },
        { name: 'Edge Computing Platform', href: '/services/edge-computing-platform', description: 'Distributed computing at the edge' }
      ]
    },
    {
      name: 'Innovative Micro SAAS 2025',
      href: '/innovative-micro-saas-services-2025',
      icon: Rocket,
      description: 'Cutting-edge AI Services',
      featured: true,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'AI Business Intelligence',
      href: '/services/ai-business-intelligence',
      icon: Brain,
      description: 'Machine Learning & Data Science',
      featured: true,
      color: 'from-purple-500 to-cyan-500'
    },
    {
      name: 'AI Healthcare Analytics',
      href: '/services/ai-healthcare-analytics',
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
      name: 'AI Financial Trading',
      href: '/services/ai-financial-trading',
      icon: TrendingUp,
      description: 'AI-Powered Trading Systems',
      featured: true,
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'AI Supply Chain Optimization',
      href: '/services/ai-supply-chain-optimization',
      icon: Truck,
      description: 'Supply Chain AI Solutions',
      featured: true,
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'AI Legal Document Analysis',
      href: '/services/ai-legal-research-platform',
      icon: FileText,
      description: 'Legal Research & Automation',
      featured: true,
      color: 'from-purple-500 to-indigo-500'
    },
    {
      name: 'AI Education Platform',
      href: '/services/ai-education-platform',
      icon: GraduationCap,
      description: 'Personalized Learning & Analytics',
      featured: true,
      color: 'from-blue-500 to-green-500'
    },
    {
      name: 'AI Marketing Automation',
      href: '/services/ai-marketing-automation',
      icon: BarChart3,
      description: 'Marketing Campaign Optimization',
      featured: true,
      color: 'from-pink-500 to-purple-500'
    },
    {
      name: 'AI Autonomous Operations',
      href: '/services/ai-autonomous-business-operations',
      icon: Rocket,
      description: 'Fully Autonomous Business Operations',
      featured: true,
      color: 'from-orange-500 to-yellow-500'
    }
  ];

  const solutions = [
    {
      name: 'Enterprise Solutions',
      icon: Building2,
      color: 'from-blue-600 to-indigo-600',
      solutions: [
        { name: 'Digital Transformation', href: '/services/digital-transformation', description: 'Complete business transformation' },
        { name: 'IT Consulting', href: '/services/it-consulting', description: 'Strategic IT guidance' },
        { name: 'Green IT', href: '/services/green-it', description: 'Sustainable technology solutions' },
        { name: 'Quantum Computing', href: '/services/quantum-computing', description: 'Next-gen computing power' },
        { name: 'Space Tech', href: '/services/space-tech', description: 'Space technology solutions' }
      ]
    },
    {
      name: 'Industry Solutions',
      icon: Factory,
      color: 'from-green-600 to-emerald-600',
      solutions: [
        { name: 'Healthcare Technology', href: '/services/healthcare-tech', description: 'Medical AI & diagnostics' },
        { name: 'Manufacturing Solutions', href: '/services/manufacturing-solutions', description: 'Smart manufacturing' },
        { name: 'Financial Services', href: '/services/financial-services', description: 'FinTech solutions' },
        { name: 'Retail Technology', href: '/services/retail-tech', description: 'E-commerce & retail' },
        { name: 'Education Technology', href: '/services/education-tech', description: 'EdTech solutions' }
      ]
    },
    {
      name: 'Technology Solutions',
      icon: Cpu,
      color: 'from-purple-600 to-pink-600',
      solutions: [
        { name: 'Cloud & DevOps', href: '/services/cloud-devops', description: 'Infrastructure & automation' },
        { name: 'IoT & Edge Computing', href: '/services/iot-edge', description: 'Smart devices & networks' },
        { name: 'Blockchain Solutions', href: '/services/blockchain-enterprise-solutions', description: 'DeFi & smart contracts' },
        { name: 'Data Analytics', href: '/services/data-analytics', description: 'Business intelligence' },
        { name: 'Cybersecurity', href: '/services/cybersecurity', description: 'Security & compliance' }
      ]
    }
  ];

  const resources = [
    {
      name: 'Learning & Development',
      icon: BookOpen,
      color: 'from-blue-600 to-cyan-600',
      resources: [
        { name: 'Blog & Articles', href: '/blog', description: 'Latest insights & trends' },
        { name: 'Webinars', href: '/webinars', description: 'Expert-led sessions' },
        { name: 'Case Studies', href: '/case-studies', description: 'Success stories' },
        { name: 'White Papers', href: '/white-papers', description: 'In-depth research' },
        { name: 'Documentation', href: '/docs', description: 'Technical guides' }
      ]
    },
    {
      name: 'Support & Community',
      icon: Users,
      color: 'from-green-600 to-emerald-600',
      resources: [
        { name: 'Help Center', href: '/help', description: 'Support & troubleshooting' },
        { name: 'FAQ', href: '/faq', description: 'Common questions' },
        { name: 'Community Forum', href: '/community', description: 'User discussions' },
        { name: 'Training Programs', href: '/training', description: 'Skill development' },
        { name: 'Certification', href: '/certification', description: 'Professional credentials' }
      ]
    },
    {
      name: 'Business Resources',
      icon: Building,
      color: 'from-purple-600 to-pink-600',
      resources: [
        { name: 'Pricing Guide', href: '/pricing', description: 'Service pricing & plans' },
        { name: 'Partners', href: '/partners', description: 'Strategic partnerships' },
        { name: 'Careers', href: '/careers', description: 'Job opportunities' },
        { name: 'Press & Media', href: '/press', description: 'Company news' },
        { name: 'Events', href: '/events', description: 'Industry events' }
      ]
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">{contactInfo.phone}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">{contactInfo.email}</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span className="hidden sm:inline">{contactInfo.address}</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <div className="flex items-center space-x-2">
              <a href="https://linkedin.com" className="hover:text-cyan-200 transition-colors">
                <Users className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" className="hover:text-cyan-200 transition-colors">
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-slate-900/90 backdrop-blur-md border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative">
                  {item.hasDropdown ? (
                    <button
                      onClick={() => {
                        if (activeDropdown === item.name) {
                          setActiveDropdown(null);
                        } else {
                          closeAllDropdowns();
                          setActiveDropdown(item.name);
                        }
                      }}
                      className="flex items-center space-x-1 text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      className="text-slate-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex items-center flex-1 max-w-md mx-8">
              <form onSubmit={handleSearch} className="relative w-full">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search services, solutions..."
                  className="w-full bg-slate-800/50 border border-slate-600 rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
                <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                <button
                  type="submit"
                  disabled={isSearching}
                  className="absolute right-2 top-2.5 bg-cyan-500 hover:bg-cyan-600 text-white p-1 rounded-md transition-colors duration-200 disabled:opacity-50"
                >
                  {isSearching ? (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <ArrowRight className="w-4 h-4" />
                  )}
                </button>
              </form>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-slate-300 hover:text-white p-2 rounded-md"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Dropdown Menus */}
      {activeDropdown && (
        <div className="absolute top-full left-0 right-0 bg-slate-800/95 backdrop-blur-md border-b border-slate-700/50 shadow-xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {activeDropdown === 'Services' && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {servicesCategories.slice(0, 3).map((category) => (
                  <div key={category.name} className="space-y-4">
                    <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
                      <category.icon className="w-5 h-5" />
                      <span>{category.name}</span>
                    </h3>
                    <div className="space-y-2">
                      {category.services.map((service) => (
                        <Link
                          key={service.name}
                          to={service.href}
                          className="block text-slate-300 hover:text-white transition-colors duration-200"
                          onClick={closeAllDropdowns}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
                <div className="lg:col-span-3">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-slate-700">
                    {services.slice(0, 8).map((service) => (
                      <Link
                        key={service.name}
                        to={service.href}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-700/50 transition-colors duration-200 group"
                        onClick={closeAllDropdowns}
                      >
                        <service.icon className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300" />
                        <div>
                          <div className="text-sm font-medium text-white group-hover:text-cyan-300">
                            {service.name}
                          </div>
                          <div className="text-xs text-slate-400">{service.description}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeDropdown === 'Solutions' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {solutions.map((solution) => (
                  <Link
                    key={solution.name}
                    to={solution.href}
                    className="group p-4 rounded-lg hover:bg-slate-700/50 transition-all duration-200"
                    onClick={closeAllDropdowns}
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      <solution.icon className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300" />
                      <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300">
                        {solution.name}
                      </h3>
                    </div>
                    <p className="text-slate-300 text-sm">{solution.description}</p>
                  </Link>
                ))}
              </div>
            )}

            {activeDropdown === 'Resources' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {resources.map((resource) => (
                  <Link
                    key={resource.name}
                    to={resource.href}
                    className="group p-4 rounded-lg hover:bg-slate-700/50 transition-all duration-200"
                    onClick={closeAllDropdowns}
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      <resource.icon className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300" />
                      <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300">
                        {resource.name}
                      </h3>
                    </div>
                    <p className="text-slate-300 text-sm">{resource.description}</p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900/95 backdrop-blur-md border-b border-slate-700/50">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {/* Mobile Search */}
            <div className="px-3 py-2">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search services, solutions..."
                  className="w-full bg-slate-800/50 border border-slate-600 rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
                <Search className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                <button
                  type="submit"
                  disabled={isSearching}
                  className="absolute right-2 top-2.5 bg-cyan-500 hover:bg-cyan-600 text-white p-1 rounded-md transition-colors duration-200 disabled:opacity-50"
                >
                  {isSearching ? (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <ArrowRight className="w-4 h-4" />
                  )}
                </button>
              </form>
            </div>

            {/* Mobile Navigation */}
            {navigation.map((item) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <div>
                    <button
                      onClick={() => {
                        if (activeDropdown === item.name) {
                          setActiveDropdown(null);
                        } else {
                          setActiveDropdown(item.name);
                        }
                      }}
                      className="w-full text-left flex items-center justify-between px-3 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-md"
                    >
                      {item.name}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    </button>
                    {activeDropdown === item.name && (
                      <div className="pl-4 space-y-1">
                        {item.name === 'Services' && services.slice(0, 6).map((service) => (
                          <Link
                            key={service.name}
                            to={service.href}
                            className="block px-3 py-2 text-sm text-slate-400 hover:text-white hover:bg-slate-800 rounded-md"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {service.name}
                          </Link>
                        ))}
                        {item.name === 'Solutions' && solutions.map((solution) => (
                          <Link
                            key={solution.name}
                            to={solution.href}
                            className="block px-3 py-2 text-sm text-slate-400 hover:text-white hover:bg-slate-800 rounded-md"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {solution.name}
                          </Link>
                        ))}
                        {item.name === 'Resources' && resources.map((resource) => (
                          <Link
                            key={resource.name}
                            to={resource.href}
                            className="block px-3 py-2 text-sm text-slate-400 hover:text-white hover:bg-slate-800 rounded-md"
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
                    className="block px-3 py-2 text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            {/* Mobile CTA */}
            <div className="px-3 py-2">
              <Link
                to="/contact"
                className="block w-full text-center bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
