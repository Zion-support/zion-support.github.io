import { ArrowRight, Atom, BookOpen, Brain, Building, Building2, ChevronDown, Cloud, Code, Cpu, DollarSign, FileText, Globe, HeartHandshake, Heart, HelpCircle, Leaf, Lock, Mail, MapPin, Menu, MessageCircle, PenTool, Phone, Rocket, Scale, Search, Settings, Shield, ShoppingCart, Star, Target, TrendingUp, Users, X, Zap, Workflow, Calendar, Database, Network, BarChart3, Wifi, HeartPulse, Leaf, User, Award, Lightbulb, Handshake, BookOpen as BookOpenIcon, FileText as FileTextIcon, Users as UsersIcon, Code as CodeIcon, HelpCircle as HelpCircleIcon, DollarSign as DollarSignIcon, Users as UsersIcon2, Calendar as CalendarIcon, Shield as ShieldIcon, BookOpen as BookOpenIcon2, Factory } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ThemeToggle } from '../components/ThemeToggle';
import { ZionLoadingSpinner } from '../components/ui/EnhancedLoadingSpinner';
import { motion, AnimatePresence } from 'framer-motion';

interface AppHeaderProps {
  onSidebarToggle?: () => void;
  isSidebarOpen?: boolean;
}

export function AppHeader({ onSidebarToggle, isSidebarOpen }: AppHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [activeNav, setActiveNav] = useState<any>(null);

  useEffect(() => {
    const handleScroll: React.FC = ($2) => {
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
    { name: 'Pricing', href: '/pricing', current: false, hasDropdown: true },
    { name: 'Company', href: '/about', current: false, hasDropdown: true },
    { name: 'Resources', href: '/help', current: false, hasDropdown: true },
    { name: 'Contact', href: '/contact', current: false },
    { name: 'Get Quote', href: '/request-quote', current: false },
  ];

  // Organized Services Categories
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
      title: 'Cloud & Infrastructure',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500',
      services: [
        { 
          name: 'Cloud & DevOps', 
          href: '/services/cloud-devops', 
          icon: Cloud, 
          description: 'DevOps & Infrastructure',
          featured: true
        },
        { 
          name: 'IT Infrastructure', 
          href: '/services/it-infrastructure', 
          icon: Building, 
          description: 'Enterprise Infrastructure',
          featured: true
        },
        { 
          name: 'Digital Twin Platform', 
          href: '/services/digital-twin', 
          icon: Globe, 
          description: 'Virtual Replicas & Simulation',
          featured: true
        },
        { 
          name: 'IoT Edge Computing', 
          href: '/services/iot-edge-computing', 
          icon: Wifi, 
          description: 'Smart Device Networks',
          featured: true
        },
        { 
          name: 'Data Analytics', 
          href: '/services/data-analytics', 
          icon: BarChart3, 
          description: 'Business Intelligence & Insights',
          featured: true
        }
      ]
    },
    {
      title: 'Security & Compliance',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      services: [
        { 
          name: 'AI Cybersecurity Suite', 
          href: '/services/ai-cybersecurity-suite', 
          icon: Shield, 
          description: 'Advanced AI Security',
          featured: true
        },
        { 
          name: 'Zero Trust Network Access', 
          href: '/services/zero-trust-network-access', 
          icon: Lock, 
          description: 'Modern Security Architecture',
          featured: true
        },
        { 
          name: 'Security Headers & CSP', 
          href: '/services/security-headers-csp', 
          icon: Shield, 
          description: 'Web Security Hardening',
          featured: true
        },
        { 
          name: 'DSR Privacy Portal', 
          href: '/services/dsr-portal', 
          icon: Lock, 
          description: 'GDPR/CCPA Compliance',
          featured: true
        }
      ]
    },
    {
      title: 'Emerging Technologies',
      icon: Atom,
      color: 'from-indigo-500 to-purple-500',
      services: [
        { 
          name: 'Quantum Computing', 
          href: '/services/quantum-computing', 
          icon: Atom, 
          description: 'Next-Gen Computational Power',
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
          name: 'Space Technology', 
          href: '/services/space-tech', 
          icon: Rocket, 
          description: 'Space-Based Solutions',
          featured: true
        },
        { 
          name: 'Sustainable Technology', 
          href: '/services/sustainable-technology', 
          icon: Leaf, 
          description: 'Green Technology Solutions',
          featured: true
        }
      ]
    },
    {
      title: 'Micro SaaS Solutions',
      icon: ShoppingCart,
      color: 'from-orange-500 to-red-500',
      services: [
        { 
          name: 'Micro SaaS Products', 
          href: '/services/micro-saas', 
          icon: ShoppingCart, 
          description: 'AI automations with transparent pricing',
          featured: true
        },
        { 
          name: 'Micro CRM', 
          href: '/services/micro-crm', 
          icon: Users, 
          description: 'Customer Relationship Management',
          featured: true
        },
        { 
          name: 'Helpdesk Platform', 
          href: '/services/helpdesk', 
          icon: HelpCircle, 
          description: 'Customer Support System',
          featured: true
        },
        { 
          name: 'Website Analytics', 
          href: '/services/website-analytics', 
          icon: BarChart3, 
          description: 'Performance Tracking & Insights',
          featured: true
        }
      ]
    }
  ];

  const solutions = [
    { name: 'AI Solutions', href: '/ai-services', icon: Brain, description: 'Artificial Intelligence & Machine Learning' },
    { name: 'Cloud Solutions', href: '/cloud-solutions', icon: Cloud, description: 'Cloud Infrastructure & Services' },
    { name: 'Cybersecurity', href: '/cybersecurity', icon: Shield, description: 'Security & Compliance' },
    { name: 'Digital Transformation', href: '/digital-transformation', icon: Rocket, description: 'Business Process Modernization' },
    { name: 'IoT Solutions', href: '/iot-solutions', icon: Cpu, description: 'Internet of Things & Edge Computing' },
    { name: 'Blockchain Solutions', href: '/blockchain-solutions', icon: Lock, description: 'Distributed Ledger Technology' },
    { name: 'Healthcare Technology', href: '/healthcare-tech', icon: Heart, description: 'Medical Technology Solutions' },
    { name: 'Sustainability Tech', href: '/sustainability-tech', icon: Globe, description: 'Green Technology Solutions' }
  ];

  const company = [
    { name: 'About Us', href: '/about', icon: Building, description: 'Company overview & mission' },
    { name: 'Leadership', href: '/leadership', icon: Users, description: 'Executive team profiles' },
    { name: 'Careers', href: '/careers', icon: Briefcase, description: 'Job opportunities' },
    { name: 'News & Media', href: '/news', icon: FileText, description: 'Press releases & updates' },
    { name: 'Partners', href: '/partners', icon: HeartHandshake, description: 'Strategic partnerships' },
    { name: 'Investors', href: '/investors', icon: DollarSign, description: 'Investment information' }
  ];

  const resources = [
    { name: 'Help Center', href: '/help', icon: HelpCircle, description: 'Support documentation' },
    { name: 'Blog', href: '/blog', icon: BookOpen, description: 'Industry insights & updates' },
    { name: 'Case Studies', href: '/case-studies', icon: FileText, description: 'Success stories' },
    { name: 'Whitepapers', href: '/whitepapers', icon: FileText, description: 'Technical resources' },
    { name: 'Webinars', href: '/webinars', icon: Video, description: 'Educational content' },
    { name: 'API Documentation', href: '/api-docs', icon: Code, description: 'Developer resources' }
  ];

  const featuredServices = [
    { name: 'AI Enterprise Orchestrator', href: '/services/ai-enterprise-orchestrator', icon: Brain, description: 'Multi-agent AI coordination & workflow automation' },
    { name: 'AI Cybersecurity Suite', href: '/services/ai-cybersecurity-suite', icon: Shield, description: 'AI-Powered Threat Detection & Response' },
    { name: 'Quantum AI Platform', href: '/services/quantum-ai-platform', icon: Zap, description: 'Next-Generation Quantum Computing' },
    { name: 'AI Healthcare Analytics', href: '/services/ai-healthcare-analytics', icon: Heart, description: 'Predictive Diagnostics & Care Optimization' }
  ];

  const serviceCategories = [
    { name: 'AI & Analytics', href: '/services/ai-analytics', icon: Brain, description: 'Machine Learning & Data Science' },
    { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield, description: 'Security & Compliance' },
    { name: 'Cloud & DevOps', href: '/services/cloud-devops', icon: Cloud, description: 'Infrastructure & Automation' },
    { name: 'IoT & Edge', href: '/services/iot-edge', icon: Cpu, description: 'Smart Devices & Networks' },
    { name: 'Blockchain', href: '/services/blockchain', icon: Lock, description: 'DeFi & Smart Contracts' },
    { name: 'Healthcare Tech', href: '/services/healthcare-tech', icon: Heart, description: 'AI Medicine & Diagnostics' }
  ];

  const pricingDropdown = [
    {
      name: 'Pricing Plans',
      icon: DollarSign,
      color: 'from-emerald-600 to-teal-600',
      services: [
        { name: 'Pricing Overview', href: '/pricing', description: 'Service pricing', icon: DollarSign },
        { name: 'Pricing Guide', href: '/pricing-guide', description: 'Detailed pricing info', icon: FileText },
        { name: 'Comprehensive Pricing 2026', href: '/comprehensive-pricing-guide-2026', description: 'Future pricing', icon: BarChart3 },
        { name: 'Pricing Guide 2025', href: '/pricing-guide-2025', description: 'Current pricing', icon: TrendingUp }
      ]
    },
    {
      name: 'Get Started',
      icon: Star,
      color: 'from-cyan-600 to-blue-600',
      services: [
        { name: 'Request Quote', href: '/request-quote', description: 'Get custom pricing', icon: DollarSign },
        { name: 'Schedule Demo', href: '/schedule-demo', description: 'Book a demo', icon: CalendarIcon },
        { name: 'Contact Sales', href: '/contact', description: 'Speak with sales', icon: PhoneCall },
        { name: 'Free Trial', href: '/signup', description: 'Start free trial', icon: Star }
      ]
    }
  ];

  const companyLinks = [
    { name: 'About Us', href: '/about', description: 'Our story and mission', icon: Building },
    { name: 'Our Team', href: '/team', description: 'Meet our experts', icon: Users },
    { name: 'Careers', href: '/careers', description: 'Join our team', icon: Briefcase },
    { name: 'Partners', href: '/partners', description: 'Strategic partnerships', icon: Building },
    { name: 'News & Press', href: '/news', description: 'Latest updates', icon: FileText },
    { name: 'Events', href: '/events', description: 'Upcoming events', icon: CalendarIcon },
    { name: 'Case Studies', href: '/case-studies', description: 'Success stories', icon: Award },
    { name: 'Marketplace', href: '/marketplace', description: 'Service marketplace', icon: ShoppingCart }
  ];

  const resourceLinks = [
    { name: 'Help Center', href: '/help', description: 'Support and documentation', icon: HelpCircle },
    { name: 'Documentation', href: '/documentation', description: 'Technical docs', icon: FileText },
    { name: 'Training', href: '/training', description: 'Learning resources', icon: GraduationCap },
    { name: 'Blog', href: '/blog', description: 'Latest insights', icon: BookOpen },
    { name: 'Webinars', href: '/webinars', description: 'Educational events', icon: CalendarIcon },
    { name: 'White Papers', href: '/white-papers', description: 'Research papers', icon: FileText },
    { name: 'FAQ', href: '/faq', description: 'Common questions', icon: HelpCircle },
    { name: 'Support Center', href: '/support', description: 'Technical support', icon: HelpCircle },
    { name: 'Community', href: '/community', description: 'User community', icon: Users }
  ];

  const handleNavClick: React.FC = ($2) => {
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

  const closeAllDropdowns: React.FC = ($2) => {
    setServicesDropdownOpen(false);
    setSolutionsDropdownOpen(false);
    setCompanyDropdownOpen(false);
    setResourcesDropdownOpen(false);
    setActiveNav(null);
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
                        className="flex items-center space-x-1 text-slate-300 hover:text-cyan-400 transition-colors duration-200 group"
                      >
                        <span className="font-medium">{item.name}</span>
                        <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
                      </button>

                      {/* Services Dropdown */}
                      {item.name === 'Services' && servicesDropdownOpen && (
                        <div className="absolute top-full left-0 mt-2 w-screen max-w-6xl bg-slate-900/95 backdrop-blur-xl border border-cyan-400/20 rounded-2xl shadow-2xl shadow-cyan-400/10 p-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {servicesCategories.map((category) => (
                              <div key={category.title} className="space-y-4">
                                <div className="flex items-center space-x-2">
                                  <div className={`w-8 h-8 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}>
                                    <category.icon className="w-4 h-4 text-white" />
                                  </div>
                                  <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                                </div>
                                <div className="space-y-2">
                                  {category.services.map((service) => (
                                    <Link
                                      key={service.name}
                                      to={service.href}
                                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-800/50 transition-colors duration-200 group"
                                    >
                                      <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-slate-700 transition-colors">
                                        <service.icon className="w-4 h-4 text-cyan-400" />
                                      </div>
                                      <div className="flex-1">
                                        <h4 className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors">
                                          {service.name}
                                        </h4>
                                        <p className="text-xs text-slate-400">{service.description}</p>
                                      </div>
                                      {service.featured && (
                                        <Star className="w-3 h-3 text-yellow-400" />
                                      )}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                          <div className="mt-6 pt-6 border-t border-slate-700">
                            <div className="flex items-center justify-between">
                              <Link
                                to="/services"
                                className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                              >
                                <span>View All Services</span>
                                <ArrowRight className="w-4 h-4" />
                              </Link>
                              <Link
                                to="/pricing"
                                className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200"
                              >
                                View Pricing
                              </Link>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Solutions Dropdown */}
                      {item.name === 'Solutions' && solutionsDropdownOpen && (
                        <div className="absolute top-full left-0 mt-2 w-80 bg-slate-900/95 backdrop-blur-xl border border-cyan-400/20 rounded-2xl shadow-2xl shadow-cyan-400/10 p-6">
                          <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-white mb-4">Industry Solutions</h3>
                            {solutions.map((solution) => (
                              <Link
                                key={solution.name}
                                to={solution.href}
                                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-800/50 transition-colors duration-200 group"
                              >
                                <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-slate-700 transition-colors">
                                  <solution.icon className="w-4 h-4 text-cyan-400" />
                                </div>
                                <div className="flex-1">
                                  <h4 className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors">
                                    {solution.name}
                                  </h4>
                                  <p className="text-xs text-slate-400">{solution.description}</p>
                                </div>
                                {solution.featured && (
                                  <Star className="w-3 h-3 text-yellow-400" />
                                )}
                              </Link>
                            ))}
                          </div>
                          <div className="mt-6 pt-6 border-t border-slate-700">
                            <Link
                              to="/solutions"
                              className="flex items-center justify-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                            >
                              <span>View All Solutions</span>
                              <ArrowRight className="w-4 h-4" />
                            </Link>
                          </div>
                        </div>
                      )}

                      {/* Resources Dropdown */}
                      {item.name === 'Resources' && resourcesDropdownOpen && (
                        <div className="absolute top-full left-0 mt-2 w-80 bg-slate-900/95 backdrop-blur-xl border border-cyan-400/20 rounded-2xl shadow-2xl shadow-cyan-400/10 p-6">
                          <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-white mb-4">Resources & Support</h3>
                            {resources.map((resource) => (
                              <Link
                                key={resource.name}
                                to={resource.href}
                                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-800/50 transition-colors duration-200 group"
                              >
                                <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-slate-700 transition-colors">
                                  <resource.icon className="w-4 h-4 text-cyan-400" />
                                </div>
                                <div className="flex-1">
                                  <h4 className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors">
                                    {resource.name}
                                  </h4>
                                  <p className="text-xs text-slate-400">{resource.description}</p>
                                </div>
                                {resource.featured && (
                                  <Star className="w-3 h-3 text-yellow-400" />
                                )}
                              </Link>
                            ))}
                          </div>
                          <div className="mt-6 pt-6 border-t border-slate-700">
                            <Link
                              to="/resources"
                              className="flex items-center justify-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                            >
                              <span>View All Resources</span>
                              <ArrowRight className="w-4 h-4" />
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className="text-slate-300 hover:text-cyan-400 transition-colors duration-200 font-medium"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Search and Actions */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Search */}
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search services..."
                  className="w-64 px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition-colors"
                />
                <button
                  type="submit"
                  disabled={isSearching}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  {isSearching ? (
                    <div className="w-4 h-4 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <Search className="w-4 h-4" />
                  )}
                </button>
              </form>

              {/* Theme Toggle */}
              <ThemeToggle />

              {/* CTA Button */}
              <Link
                to="/contact"
                className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 font-medium"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-xl border-t border-slate-700">
            <div className="container-responsive py-6">
              <div className="space-y-6">
                {/* Mobile Search */}
                <form onSubmit={handleSearch} className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search services..."
                    className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                  <button
                    type="submit"
                    disabled={isSearching}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 text-slate-400 hover:text-cyan-400 transition-colors"
                  >
                    {isSearching ? (
                      <div className="w-4 h-4 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <Search className="w-4 h-4" />
                    )}
                  </button>
                </form>

                {/* Mobile Navigation */}
                <nav className="space-y-4">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      <Link
                        to={item.href}
                        className="block text-slate-300 hover:text-cyan-400 transition-colors duration-200 font-medium"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </div>
                  ))}
                </nav>

                {/* Mobile Quick Links */}
                <div className="space-y-4">
                  <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Quick Links</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {quickLinks.slice(0, 6).map((link) => (
                      <Link
                        key={link.name}
                        to={link.href}
                        className="flex items-center space-x-2 text-slate-300 hover:text-cyan-400 transition-colors duration-200"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <link.icon className="w-4 h-4" />
                        <span className="text-sm">{link.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Mobile Contact Info */}
                <div className="space-y-4">
                  <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Contact</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 text-slate-300">
                      <Phone className="w-4 h-4" />
                      <span className="text-sm">{contactInfo.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-slate-300">
                      <Mail className="w-4 h-4" />
                      <span className="text-sm">{contactInfo.email}</span>
                    </div>
                  </div>
                </div>

                {/* Mobile CTA */}
                <Link
                  to="/contact"
                  className="block w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-200 font-medium text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>;
    </>
  );
}
