import { ArrowRight, Atom, BookOpen, Brain, Building, Building2, ChevronDown, Cloud, Code, Cpu, DollarSign, FileText, Globe, HeartHandshake, Heart, HelpCircle, Leaf, Lock, Mail, MapPin, Menu, MessageCircle, PenTool, Phone, Rocket, Scale, Search, Settings, Shield, ShoppingCart, Star, Target, TrendingUp, Users, X, Zap, Server, Truck, BarChart3, Video, Factory, GraduationCap } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ThemeToggle } from '../components/ThemeToggle';
import { ZionLoadingSpinner } from '../components/ui/EnhancedLoadingSpinner';
import { motion, AnimatePresence } from 'framer-motion';

interface AppHeaderProps {
  // Add your props here


  onSidebarToggle?: : unknown void;
  isSidebarOpen?: boolean;

}
;
export function AppHeader(...args: unknown[]): unknown {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<typeof false>(false);
  const [searchQuery, setSearchQuery] = useState<typeof ''>('');
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState<typeof false>(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState<typeof false>(false);
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState<typeof false>(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState<typeof false>(false);
  const [scrolled, setScrolled] = useState<typeof false>(false);
  const [isSearching, setIsSearching] = useState<typeof false>(false);
  const [activeNav, setActiveNav] = useState<any>(null);

  useEffect(: unknown {
    const handleScroll = (...args: unknown[]): unknown => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return : unknown window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = async e: React.FormEvent {
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
    { name: 'Services', href: '/services', current: false, hasDropdown: true },
    { name: 'Solutions', href: '/solutions', current: false, hasDropdown: true },
    { name: 'Pricing', href: '/pricing', current: false, hasDropdown: true },
    { name: 'Company', href: '/about', current: false, hasDropdown: true },
    { name: 'Resources', href: '/resources', current: false, hasDropdown: true },
    { name: 'Contact', href: '/contact', current: false },
    { name: 'Get Quote', href: '/request-quote', current: false }
  ];

  const services = [
    { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', icon: Brain, description: 'Machine Learning & Data Science' },
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
    { name: 'AI Workflow Automation', href: '/services/ai-workflow-automation', icon: Workflow, description: 'Intelligent process automation' },
    { name: 'AI Customer Success Platform', href: '/services/ai-customer-success-platform', icon: Heart, description: 'Proactive customer success' },
    { name: 'AI Financial Fraud Detection', href: '/services/ai-financial-fraud-detection', icon: Shield, description: '99.9% fraud detection accuracy' },
    { name: 'AI Project Management Platform', href: '/services/ai-project-management-platform', icon: Target, description: 'AI-powered project optimization' },
    { name: 'AI Cybersecurity Threat Detection', href: '/services/ai-cybersecurity-threat-detection', icon: Shield, description: 'Advanced threat detection' },
    { name: 'AI Financial Trading Platform', href: '/services/ai-financial-trading-platform', icon: DollarSign, description: 'AI-powered trading' },
    { name: 'AI Healthcare Analytics Platform', href: '/services/ai-healthcare-analytics-platform', icon: Heart, description: 'Healthcare analytics platform' },
    { name: 'Innovative Services 2028', href: '/innovative-services-2028', icon: Rocket, description: 'Latest AI innovations' }
  ];

  const servicesCategories = [
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-purple-500 to-cyan-500',
      services: [
        { 
          name: 'AI Business Intelligence', 
          href: '/services/ai-business-intelligence', 
          icon: Brain, 
          description: 'Machine Learning & Data Science',
          featured: true
        },
        { 
          name: 'AI Workflow Orchestrator', 
          href: '/services/ai-workflow-orchestrator', 
          icon: Workflow, 
          description: 'Intelligent Process Automation',
          featured: true
        },
        { 
          name: 'AI Data Governance Platform', 
          href: '/services/ai-data-governance-platform', 
          icon: Shield, 
          description: 'Data Protection & Compliance',
          featured: true
        },
        { 
          name: 'AI Customer Experience Analytics', 
          href: '/services/ai-customer-experience-analytics', 
          icon: Users, 
          description: 'Customer Insights & Analytics',
          featured: true
        },
        { 
          name: 'AI Healthcare Analytics', 
          href: '/services/ai-healthcare-analytics', 
          icon: Heart, 
          description: 'Medical AI & Diagnostics',
          featured: true
        },
        { 
          name: 'AI Financial Trading', 
          href: '/services/ai-financial-trading', 
          icon: TrendingUp, 
          description: 'FinTech AI Solutions',
          featured: true
        },
        { 
          name: 'AI Supply Chain Optimization', 
          href: '/services/ai-supply-chain-optimization', 
          icon: Workflow, 
          description: 'Supply Chain AI',
          featured: true
        },
        { 
          name: 'AI Content Creation', 
          href: '/services/ai-content-creation', 
          icon: PenTool, 
          description: 'AI-Powered Content Generation',
          featured: true
        },
        { 
          name: 'AI HR Platform', 
          href: '/services/ai-hr-platform', 
          icon: Users, 
          description: 'Human Resources Automation',
          featured: true
        },
        { 
          name: 'AI Marketing Automation', 
          href: '/services/ai-marketing-automation', 
          icon: Target, 
          description: 'Intelligent Marketing Solutions',
          featured: true
        },
        { 
          name: 'AI Quantum Hybrid Platform', 
          href: '/services/ai-quantum-hybrid-platform', 
          icon: Atom, 
          description: 'Quantum-AI Integration',
          featured: true
        },
        { 
          name: 'AI Autonomous Research Assistant', 
          href: '/services/ai-autonomous-research-assistant', 
          icon: Search, 
          description: 'Research Automation',
          featured: true
        },
        { 
          name: 'AI Cybersecurity Threat Intelligence', 
          href: '/services/ai-cybersecurity-threat-intelligence', 
          icon: Shield, 
          description: 'AI-Powered Security',
          featured: true
        }
      ]
    },
    { 
      name: 'Revolutionary Services 2030', 
      href: '/comprehensive-services-showcase-2030', 
      icon: Rocket, 
      description: 'Future Technology Solutions',
      featured: true,
      color: 'from-indigo-500 to-purple-500'
    },
    { 
      name: 'Innovative Micro SAAS 2026', 
      href: '/innovative-micro-saas-services-2026', 
      icon: Rocket, 
      description: 'Cutting-edge AI Services',
      featured: true,
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      name: 'AI Services 2026', 
      href: '/ai-services-2026', 
      icon: Brain, 
      description: 'Advanced AI Solutions',
      featured: true,
      color: 'from-indigo-500 to-purple-500'
    },
    { 
      name: 'IT Infrastructure 2026', 
      href: '/it-infrastructure-2026', 
      icon: Server, 
      description: 'Modern Infrastructure',
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
      href: '/services/ai-cybersecurity-threat-detection', 
      icon: Shield, 
      description: 'AI-Powered Security',
      featured: true,
      color: 'from-green-500 to-blue-500'
    },
    { 
      name: 'AI Real Estate Analytics', 
      href: '/services/ai-real-estate-analytics', 
      icon: Home, 
      description: 'Property Investment AI',
      featured: true,
      color: 'from-blue-500 to-green-500'
    },
    { 
      name: 'AI Logistics Optimization', 
      href: '/services/ai-logistics-optimization', 
      icon: Truck, 
      description: 'Supply Chain AI',
      featured: true,
      color: 'from-orange-500 to-red-500'
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
      name: 'AI Legal Document Analysis', 
      href: '/services/ai-legal-document-analysis', 
      icon: FileText, 
      description: 'Legal AI & Compliance',
      featured: false,
      color: 'from-blue-500 to-indigo-500'
    },
    { 
      name: 'AI Supply Chain Optimization', 
      href: '/services/ai-supply-chain-optimization', 
      icon: Truck, 
      description: 'Supply Chain AI',
      featured: false,
      color: 'from-green-500 to-blue-500'
    },
    { 
      name: 'AI Financial Trading', 
      href: '/services/ai-financial-trading-platform', 
      icon: DollarSign, 
      description: 'Financial AI Platform',
      featured: false,
      color: 'from-yellow-500 to-orange-500'
    },
    { 
      name: 'Data Analytics', 
      href: '/services/data-analytics', 
      icon: BarChart3, 
      description: 'Advanced Analytics',
      featured: false,
      color: 'from-purple-500 to-pink-500'
    },
    { 
      name: 'IT Infrastructure', 
      href: '/services/it-infrastructure', 
      icon: Server, 
      description: 'Infrastructure Solutions',
      featured: false,
      color: 'from-gray-500 to-blue-500'
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
      description: 'Public sector digital transformation',
      featured: false
    },
    {
      name: 'Healthcare Solutions',
      href: '/solutions',
      icon: Heart,
      description: 'Healthcare technology innovation',
      featured: false
    },
    {
      name: 'Financial Solutions',
      href: '/solutions',
      icon: DollarSign,
      description: 'FinTech and banking solutions',
      featured: false
    },
    {
      name: 'Manufacturing Solutions',
      href: '/solutions',
      icon: Factory,
      description: 'Industry 4.0 and smart manufacturing',
      featured: false
    },
    {
      name: 'Retail Solutions',
      href: '/solutions',
      icon: ShoppingCart,
      description: 'E-commerce and retail technology',
      featured: false
    }
  ];

  const resources = [
    { name: 'Help Center', href: '/help', icon: HelpCircle, description: 'Support documentation' },
    { name: 'Blog', href: '/blog', icon: BookOpen, description: 'Industry insights & updates' },
    { name: 'Case Studies', href: '/case-studies', icon: FileText, description: 'Success stories' },
    { name: 'White Papers', href: '/white-papers', icon: FileText, description: 'Technical resources' },
    { name: 'Webinars', href: '/webinars', icon: Video, description: 'Educational content' },
    { name: 'Documentation', href: '/documentation', icon: Code, description: 'Developer resources' }
  ];

  const featuredServices = [
    { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', icon: Brain, description: 'AI-powered analytics & insights' },
    { name: 'AI Cybersecurity Suite', href: '/services/ai-cybersecurity-suite', icon: Shield, description: 'AI-Powered Threat Detection & Response' },
    { name: 'Quantum AI Platform', href: '/services/quantum-ai-platform', icon: Zap, description: 'Next-Generation Quantum Computing' },
    { name: 'AI Healthcare Analytics', href: '/services/ai-healthcare-analytics', icon: Heart, description: 'Predictive Diagnostics & Care Optimization' }
  ];

  const serviceCategories = [
    { name: 'AI & Analytics', href: '/services/ai-business-intelligence', icon: Brain, description: 'Machine Learning & Data Science' },
    { name: 'Cybersecurity', href: '/services/ai-cybersecurity-suite', icon: Shield, description: 'Security & Compliance' },
    { name: 'Cloud & DevOps', href: '/services/cloud-devops', icon: Cloud, description: 'Infrastructure & Automation' },
    { name: 'IoT & Edge', href: '/services/iot-edge', icon: Cpu, description: 'Smart Devices & Networks' },
    { name: 'Blockchain', href: '/services/blockchain-enterprise-solutions', icon: Lock, description: 'DeFi & Smart Contracts' },
    { name: 'Healthcare Tech', href: '/services/healthcare-tech', icon: Heart, description: 'AI Medicine & Diagnostics' }
  ];

  const pricingDropdown = [
    {
      name: 'Blog & Insights',
      href: '/blog',
      icon: BookOpen,
      description: 'Latest industry insights and trends',
      featured: true
    },
    {
      name: 'Case Studies',
      href: '/case-studies',
      icon: FileText,
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
      icon: Video,
      description: 'Expert-led educational sessions',
      featured: false
    },
    {
      name: 'Documentation',
      href: '/docs',
      icon: BookOpen,
      description: 'Technical guides and API docs',
      featured: false
    },
    {
      name: 'Training',
      href: '/training',
      icon: GraduationCap,
      description: 'Professional development courses',
      featured: false
    },
    {
      name: 'Community',
      href: '/community',
      icon: Users,
      description: 'Connect with peers and experts',
      featured: false
    },
    {
      name: 'Developer Hub',
      href: '/developers',
      icon: Code,
      description: 'Tools and resources for developers',
      featured: false
    }
  ];

  const companyLinks = [
    { name: 'About Us', href: '/about', description: 'Our story and mission', icon: Building },
    { name: 'Our Team', href: '/team', description: 'Meet our experts', icon: Users },
    { name: 'Careers', href: '/careers', description: 'Join our team', icon: Briefcase },
    { name: 'Partners', href: '/partners', description: 'Strategic partnerships', icon: Building },
    { name: 'News & Press', href: '/news', description: 'Latest updates', icon: FileText },
    { name: 'Events', href: '/events', description: 'Upcoming events', icon: Calendar },
    { name: 'Case Studies', href: '/case-studies', description: 'Success stories', icon: Award },
    { name: 'Marketplace', href: '/marketplace', description: 'Service marketplace', icon: ShoppingCart }
  ];

  const resourceLinks = [
    { name: 'Help Center', href: '/help', description: 'Support and documentation', icon: HelpCircle },
    { name: 'Documentation', href: '/documentation', description: 'Technical docs', icon: FileText },
    { name: 'Training', href: '/training', description: 'Learning resources', icon: GraduationCap },
    { name: 'Blog', href: '/blog', description: 'Latest insights', icon: BookOpen },
    { name: 'Webinars', href: '/webinars', description: 'Educational events', icon: Calendar },
    { name: 'White Papers', href: '/white-papers', description: 'Research papers', icon: FileText },
    { name: 'FAQ', href: '/faq', description: 'Common questions', icon: HelpCircle },
    { name: 'Support Center', href: '/support', description: 'Technical support', icon: HelpCircle },
    { name: 'Community', href: '/community', description: 'User community', icon: Users }
  ];

  const handleNavClick = (nav: any) => {
    if (nav.hasDropdown) {
      setActiveNav(nav);
      // Close other dropdowns
      if (nav.name === 'Services') {
        setServicesDropdownOpen(true);
        setSolutionsDropdownOpen(false);
        setCompanyDropdownOpen(false);
        setResourcesDropdownOpen(false);
      } else if (nav.name === 'Solutions') {
        setSolutionsDropdownOpen(true);
        setServicesDropdownOpen(false);
        setCompanyDropdownOpen(false);
        setResourcesDropdownOpen(false);
      } else if (nav.name === 'Pricing') {
        // Use the same dropdown state as solutions for pricing
        setSolutionsDropdownOpen(true);
        setServicesDropdownOpen(false);
        setCompanyDropdownOpen(false);
        setResourcesDropdownOpen(false);
      } else if (nav.name === 'Company') {
        setCompanyDropdownOpen(true);
        setServicesDropdownOpen(false);
        setSolutionsDropdownOpen(false);
        setResourcesDropdownOpen(false);
      } else if (nav.name === 'Resources') {
        setResourcesDropdownOpen(true);
        setServicesDropdownOpen(false);
        setSolutionsDropdownOpen(false);
        setCompanyDropdownOpen(false);
      }
    } else {
      setActiveNav(null);
      setServicesDropdownOpen(false);
      setSolutionsDropdownOpen(false);
      setCompanyDropdownOpen(false);
      setResourcesDropdownOpen(false);
    }
  };

  const closeAllDropdowns = () => {
    setServicesDropdownOpen(false);
    setSolutionsDropdownOpen(false);
    setCompanyDropdownOpen(false);
    setResourcesDropdownOpen(false);
    setActiveNav(null);
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
