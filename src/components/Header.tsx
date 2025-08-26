import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, Brain, Users, BarChart3, Code, Palette, Target, Shield, Heart, Database, Building, Cpu, Network, Cloud, Clock, Rocket, Globe, Lock, ArrowRight } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
import Sidebar from './Sidebar';
=======
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Search, 
  Phone, 
  Mail, 
  MapPin,
  ChevronDown,
  Brain,
  Shield,
  Cpu,
  Database,
  Network,
  Code,
  BarChart3,
  Target,
  Lightbulb,
  Rocket,
  Clock,
  Users,
  TrendingUp,
  Award,
  Globe,
  Zap,
  Cloud,
  Lock,
  Workflow,
  Eye,
  Key,
  Sparkles,
  Heart,
  Target as TargetIcon,
  ArrowUpRight,
  CheckCircle2,
  Star as StarIcon,
  ShoppingBag,
  Building
} from 'lucide-react';

interface NavigationItem {
  label: string;
  path: string;
  hasDropdown?: boolean;
  dropdownItems?: {
    category: string;
    items: {
      label: string;
      path: string;
      description: string;
      icon: React.ComponentType<any>;
    }[];
  }[];
}

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
=======
  const location = useLocation();

  const navigationItems: NavigationItem[] = [
    {
      label: 'Home',
      path: '/'
    },
    {
      label: 'Services',
      path: '/services',
      hasDropdown: true,
      dropdownItems: [
        {
          category: 'AI & Machine Learning',
          items: [
            { label: 'AI Solutions', path: '/services/ai-solutions', description: 'Cutting-edge AI services', icon: Brain },
            { label: 'AI Autonomous Systems', path: '/services/ai-autonomous-systems', description: 'Self-operating AI platforms', icon: Workflow },
            { label: 'AI Business Intelligence', path: '/services/ai-business-intelligence', description: 'Data-driven insights', icon: BarChart3 },
            { label: 'AI Customer Intelligence', path: '/services/ai-customer-intelligence', description: 'Customer behavior analysis', icon: Users }
          ]
        },
        {
          category: 'Cybersecurity',
          items: [
            { label: 'Cybersecurity', path: '/services/cybersecurity', description: 'Advanced security solutions', icon: Shield },
            { label: 'SOC2 Compliance', path: '/services/soc2-compliance', description: 'Compliance automation', icon: CheckCircle2 },
            { label: 'Quantum Secure Cloud', path: '/services/quantum-secure-cloud', description: 'Future-proof security', icon: Lock }
          ]
        },
        {
          category: 'Infrastructure',
          items: [
            { label: 'IT Infrastructure', path: '/services/it-infrastructure', description: 'Enterprise infrastructure', icon: Cpu },
            { label: 'Cloud & DevOps', path: '/services/cloud-devops', description: 'Cloud solutions & automation', icon: Cloud },
            { label: '5G Enterprise Solutions', path: '/services/5g-enterprise-solutions', description: 'Next-gen connectivity', icon: Network }
          ]
        },
        {
          category: 'Emerging Tech',
          items: [
            { label: 'Quantum Technology', path: '/services/quantum-technology', description: 'Quantum computing solutions', icon: Zap },
            { label: 'Blockchain Solutions', path: '/services/blockchain-solutions', description: 'Distributed ledger technology', icon: Key },
            { label: 'IoT & Data Analytics', path: '/services/iot-data-analytics', description: 'Connected intelligence', icon: Database }
          ]
        }
      ]
    },
    {
      label: 'Solutions',
      path: '/solutions',
      hasDropdown: true,
      dropdownItems: [
        {
          category: 'Industry Solutions',
          items: [
            { label: 'Healthcare', path: '/solutions/healthcare', description: 'Digital health transformation', icon: Heart },
            { label: 'Financial Services', path: '/solutions/financial-services', description: 'Fintech innovation', icon: TrendingUp },
            { label: 'Manufacturing', path: '/solutions/manufacturing', description: 'Smart manufacturing', icon: Target },
            { label: 'Retail & E-commerce', path: '/solutions/retail-ecommerce', description: 'Digital commerce', icon: ShoppingBag }
          ]
        },
        {
          category: 'Business Solutions',
          items: [
            { label: 'Digital Transformation', path: '/solutions/digital-transformation', description: 'Business modernization', icon: Rocket },
            { label: 'Enterprise Solutions', path: '/solutions/enterprise', description: 'Enterprise-grade platforms', icon: Building },
            { label: 'Micro SAAS Solutions', path: '/solutions/micro-saas', description: 'Scalable software solutions', icon: Code }
          ]
        }
      ]
    },
    {
      label: 'About',
      path: '/about'
    },
    {
      label: 'Contact',
      path: '/contact'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
=======
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

=======
  const navigation = [
    { name: 'Home', href: '/' },
    { 
      name: 'Services', 
      href: '/services',
      dropdown: [
        { name: 'AI Solutions', href: '/ai-solutions', description: 'Advanced AI and machine learning services' },
        { name: 'Cybersecurity', href: '/cybersecurity', description: 'Comprehensive security solutions' },
        { name: 'Cloud & DevOps', href: '/cloud-devops', description: 'Scalable cloud infrastructure' },
        { name: 'Data Analytics', href: '/data-analytics', description: 'Transform data into insights' },
        { name: 'Quantum Technology', href: '/quantum-technology', description: 'Next-generation computing' },
        { name: 'Enterprise Solutions', href: '/enterprise-solutions', description: 'Large-scale business solutions' }
      ]
    },
    { 
      name: 'Solutions', 
  const navigationItems = [
    { 
      path: '/', 
      label: 'Home', 
      icon: '🏠',
      description: 'Welcome to Zion Tech Group'
    },
    { 
      path: '/services', 
      label: 'Services', 
      icon: '🤖',
      description: 'Explore our comprehensive service offerings',
      hasDropdown: true
    },
    { 
      path: '/solutions/enterprise', 
      label: 'Solutions', 
      icon: '💼',
      description: 'Industry-specific solutions',
      hasDropdown: true
    },
    { 
      path: '/pricing', 
      label: 'Pricing', 
      icon: '💰',
      description: 'Transparent pricing plans'
    },
    { 
      path: '/about', 
      label: 'About', 
      icon: 'ℹ️',
      description: 'Learn about our company'
    },
    { 
      path: '/careers', 
      label: 'Careers', 
      icon: '🚀',
      description: 'Join our team'
    },
    { 
      path: '/blog', 
      label: 'Blog', 
      icon: '📝',
      description: 'Latest insights and news'
    },
    { 
      path: '/contact', 
      label: 'Contact', 
      icon: '📞',
      description: 'Get in touch with us'
    }
  ];

=======
      href: '/solutions',
      dropdown: [
        { name: 'Healthcare', href: '/solutions/healthcare', description: 'AI-powered healthcare solutions' },
        { name: 'Finance', href: '/solutions/finance', description: 'Financial technology innovations' },
        { name: 'Manufacturing', href: '/solutions/manufacturing', description: 'Smart manufacturing systems' },
        { name: 'Retail', href: '/solutions/retail', description: 'Digital retail transformation' }
      ]
    },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  const serviceCategories = [
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      description: 'Intelligent solutions powered by artificial intelligence',
      color: 'from-purple-500 to-pink-500',
      services: [
        { name: 'AI Autonomous Systems', path: '/services/ai-autonomous-systems', description: 'Advanced autonomous AI systems', icon: Brain },
        { name: 'AI Workflow Automation', path: '/services/ai-workflow-automation', description: 'Intelligent process automation', icon: Brain },
        { name: 'AI Customer Intelligence', path: '/services/ai-customer-intelligence', description: 'Customer behavior insights', icon: Users },
        { name: 'AI Predictive Analytics', path: '/services/ai-predictive-analytics', description: 'Future-focused analytics', icon: BarChart3 },
        { name: 'AI Research Assistant', path: '/ai-autonomous-research-assistant', description: 'AI-powered research automation', icon: Brain },
        { name: 'AI Business Manager', path: '/ai-autonomous-business-manager', description: 'Intelligent business management', icon: Brain },
        { name: 'AI Business Manager 2029', path: '/ai-autonomous-business-manager-2029', description: 'Future-ready business management', icon: Brain },
        { name: 'AI Business Platform', path: '/ai-autonomous-business-platform', description: 'Comprehensive business platform', icon: Brain },
        { name: 'AI Business Platform 2026', path: '/ai-autonomous-business-platform-2026', description: 'Next-gen business platform', icon: Brain },
        { name: 'AI Code Review', path: '/ai-autonomous-code-review', description: 'Intelligent code review automation', icon: Code },
        { name: 'AI Creative Director', path: '/ai-autonomous-creative-director', description: 'AI-powered creative content generation', icon: Palette },
        { name: 'AI Business Intelligence', path: '/services/ai-business-intelligence', description: 'Advanced analytics and insights', icon: BarChart3 },
        { name: 'AI Marketing Automation', path: '/services/ai-marketing-automation', description: 'Smart marketing optimization', icon: Target },
        { name: 'AI HR & Recruitment', path: '/services/ai-hr-recruitment', description: 'Intelligent talent management', icon: Users },
        { name: 'AI Legal Tech', path: '/services/ai-legal-tech', description: 'Automated legal processes', icon: Shield },
        { name: 'AI Healthcare Analytics', path: '/solutions/healthcare', description: 'Patient care optimization', icon: Heart }
        { name: 'AI Autonomous Systems', path: '/services/ai-autonomous-systems', description: 'Advanced autonomous AI systems' },
        { name: 'AI Research Assistant', path: '/ai-autonomous-research-assistant', description: 'AI-powered research automation' },
        { name: 'AI Business Intelligence', path: '/services/ai-business-intelligence', description: 'Advanced analytics and insights' },
        { name: 'AI Marketing Automation', path: '/services/ai-marketing-automation', description: 'Smart marketing optimization' },
        { name: 'AI HR & Recruitment', path: '/services/ai-hr-recruitment', description: 'Intelligent talent management' },
        { name: 'AI Legal Tech', path: '/services/ai-legal-tech', description: 'Automated legal processes' },
        { name: 'AI Healthcare Analytics', path: '/services/ai-healthcare-analytics', description: 'Patient care optimization' }
      ]
    },
    {
      title: 'Quantum Technology',
      icon: Brain,
      description: 'Next-generation quantum computing solutions',
      services: [
        { name: 'Quantum Neural Networks', path: '/quantum-neural-network-platform', description: 'Quantum-powered neural networks' },
        { name: 'Quantum Computing', path: '/services/quantum-technology', description: 'Quantum computing platforms' },
        { name: 'Quantum-Safe Security', path: '/services/quantum-security', description: 'Future-proof quantum security' }
      ]
    },
    {
      title: 'Business Operations',
      icon: Building,
      description: 'Streamlined business process automation',
      services: [
        { name: 'Autonomous Business Platform', path: '/autonomous-business-operations-platform', description: 'Self-operating business systems' },
        { name: 'AI Asset Management', path: '/ai-powered-it-asset-management', description: 'Intelligent IT asset management' },
        { name: 'Business Intelligence', path: '/services/ai-business-intelligence', description: 'Advanced business analytics' }
      ]
    },
    {
      title: 'Cybersecurity',
      icon: Shield,
      description: 'Comprehensive security and compliance solutions',
      services: [
=======
        { name: 'Cybersecurity Services', path: '/services/cybersecurity', description: 'Complete security solutions' },
        { name: 'SOC2 Compliance Automation', path: '/soc2-compliance-automation', description: 'Automated compliance management' },
        { name: 'Security Assessment', path: '/services/security-assessment', description: 'Security audit and testing' },
        { name: 'Compliance & Audit', path: '/services/compliance-audit', description: 'Regulatory compliance support' },
        { name: 'Threat Detection', path: '/services/threat-detection', description: 'Real-time security monitoring' }
      ]
    },
    {
      title: 'Cloud & Infrastructure',
      icon: Cpu,
      description: 'Scalable cloud solutions and infrastructure management',
      services: [
=======
        { name: 'Cloud DevOps', path: '/cloud-devops', description: 'Cloud development and operations' },
        { name: 'IT Infrastructure', path: '/services/it-infrastructure', description: 'Complete IT infrastructure solutions' },
        { name: '5G Enterprise Solutions', path: '/5g-enterprise-solutions', description: 'High-speed 5G connectivity' },
        { name: 'Cloud Migration', path: '/services/cloud-migration', description: 'Seamless cloud transition' },
        { name: 'Network Infrastructure', path: '/services/network-infrastructure', description: 'Robust network solutions' },
        { name: 'Managed IT Services', path: '/services/managed-it-services', description: '24/7 IT support' },
        { name: 'DevOps Automation', path: '/services/devops-automation', description: 'Streamlined development' }
      ]
    },
    {
      title: 'Emerging Technologies',
      icon: Rocket,
      description: 'Cutting-edge solutions for tomorrow\'s challenges',
      services: [
=======
        { name: 'Blockchain Solutions', path: '/services/blockchain-solutions', description: 'Decentralized applications' },
        { name: 'IoT Platforms', path: '/services/iot-platforms', description: 'Connected device management' },
        { name: 'Quantum Computing', path: '/services/quantum-computing', description: 'Next-generation computing' },
        { name: 'AR/VR Solutions', path: '/services/ar-vr-solutions', description: 'Immersive experiences' }
      ]
    },
    {
      title: 'Industry Solutions',
      icon: Building,
      description: 'Tailored solutions for specific industries',
      services: [
=======
      ]
    },
    {
      title: 'AI Autonomous Systems',
      icon: Brain,
      description: 'Self-operating AI systems for business automation',
      color: 'from-purple-500 to-pink-500',
      services: [
        { name: 'AI Autonomous Data', path: '/ai-autonomous-data', description: 'Intelligent data management', icon: Database },
        { name: 'AI Autonomous Decision Engine', path: '/ai-autonomous-decision-engine', description: 'Autonomous decision making', icon: Target },
        { name: 'AI Autonomous Research', path: '/ai-autonomous-research-assistant', description: 'AI-powered research automation', icon: Search },
        { name: 'AI Autonomous Business Manager', path: '/ai-autonomous-business-manager', description: 'Intelligent business management', icon: Building },
        { name: 'AI Autonomous Business Platform', path: '/ai-autonomous-business-platform', description: 'Comprehensive business platform', icon: Building },
        { name: 'AI Autonomous Code Review', path: '/ai-autonomous-code-review', description: 'Intelligent code review automation', icon: Code },
        { name: 'AI Autonomous Creative Director', path: '/ai-autonomous-creative-director', description: 'AI-powered creative content generation', icon: Palette }
      ]
    },
    {
      title: 'Infrastructure & Cloud',
      icon: Cloud,
      description: 'Scalable and secure infrastructure solutions',
      color: 'from-blue-500 to-cyan-500',
      services: [
        { name: 'Cloud Infrastructure', path: '/services/cloud-infrastructure', description: 'Scalable cloud solutions', icon: Cloud },
        { name: 'DevOps & Automation', path: '/services/devops-automation', description: 'Streamlined development processes', icon: Cpu },
        { name: 'Network Security', path: '/services/network-security', description: 'Comprehensive network protection', icon: Shield },
        { name: 'Data Center Solutions', path: '/services/data-center', description: 'Enterprise data center services', icon: Database },
        { name: 'Edge Computing', path: '/services/edge-computing', description: 'Distributed computing solutions', icon: Network }
      ]
    },
    {
      title: 'Cybersecurity & Compliance',
      icon: Shield,
      description: 'Advanced security and compliance solutions',
      color: 'from-red-500 to-orange-500',
      services: [
        { name: 'Threat Detection', path: '/services/threat-detection', description: 'Advanced threat intelligence', icon: Shield },
        { name: 'Compliance Automation', path: '/soc2-compliance-automation', description: 'Automated compliance management', icon: Lock },
        { name: 'Zero Trust Security', path: '/zero-trust-network-architecture', description: 'Modern security architecture', icon: Shield },
        { name: 'Security Analytics', path: '/services/security-analytics', description: 'Security intelligence platform', icon: BarChart3 }
      ]
    }
  ];
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleDropdownToggle = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const closeDropdowns = () => {
    setActiveDropdown(null);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Handle search logic here
      console.log('Searching for:', searchQuery);
    }
=======

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-md border-b border-cyan-500/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white neon-text-cyan">Zion Tech Group</span>
              <span className="text-xs text-cyan-400 font-medium">Innovation • Intelligence • Impact</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <form onSubmit={handleSearch} className="relative w-full">
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pl-10 pr-4 text-sm bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            </form>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.type === 'dropdown' ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center space-x-1 ${
                        item.current
                          ? 'text-zion-cyan bg-zion-cyan/10'
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                      }`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    
                    {/* Dropdown Menu */}
                    {activeDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-1 w-80 bg-background border border-border rounded-lg shadow-lg z-50">
                        <div className="p-4">
                          <div className="grid grid-cols-1 gap-2">
                            {item.dropdownItems?.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.name}
                                to={dropdownItem.href}
                                className="px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                                onClick={() => setActiveDropdown(null)}
                              >
                                {dropdownItem.name}
                              </Link>
                            ))}
                          </div>
=======
        { name: 'Healthcare Technology', path: '/solutions/healthcare', description: 'Medical innovation' },
        { name: 'Financial Services', path: '/solutions/financial', description: 'Fintech solutions' },
        { name: 'Manufacturing Intelligence', path: '/solutions/manufacturing', description: 'Smart manufacturing' },
        { name: 'Retail Technology', path: '/solutions/retail', description: 'Digital retail transformation' }
      ]
    }
  ];

  const solutionCategories = [
    {
      title: 'Enterprise Solutions',
      icon: Building,
      description: 'Large-scale business transformation',
      solutions: [
        { name: 'Digital Transformation', path: '/digital-transformation', description: 'Complete business modernization' },
        { name: 'Enterprise AI', path: '/solutions/enterprise', description: 'AI-powered enterprise solutions' },
        { name: 'Data Analytics', path: '/services/data-analytics', description: 'Business intelligence platform' }
      ]
    },
    {
      title: 'SMB Solutions',
      icon: Users,
      description: 'Scalable solutions for growing businesses',
      solutions: [
        { name: 'Micro SAAS', path: '/services/micro-saas-solutions', description: 'Custom software solutions' },
        { name: 'Cloud Migration', path: '/cloud-devops', description: 'Affordable cloud solutions' },
        { name: 'IT Support', path: '/services/it-support', description: 'Managed IT services' }
      ]
    },
    {
      title: 'Specialized Solutions',
      icon: Target,
      description: 'Industry-specific expertise',
      solutions: [
        { name: 'Healthcare Solutions', path: '/solutions/healthcare', description: 'Medical technology innovation' },
        { name: 'Financial Solutions', path: '/solutions/financial', description: 'Fintech and banking solutions' },
        { name: 'Manufacturing Solutions', path: '/solutions/manufacturing', description: 'Industry 4.0 transformation' },
        { name: 'Retail Solutions', path: '/solutions/retail', description: 'Digital commerce solutions' },
        { name: 'Government Solutions', path: '/solutions/government', description: 'Public sector technology' }
      ]
    }
  ];

  const toggleDropdown = (category: string) => {
    setActiveDropdown(activeDropdown === category ? null : category);
  };

=======
  const closeDropdowns = () => {
    setActiveDropdown(null);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Handle search logic here
      console.log('Searching for:', searchQuery);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-zion-slate-dark/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
              ZION
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={closeDropdowns}
                  >
                    <button className="flex items-center space-x-1 text-white hover:text-zion-cyan transition-colors py-2">
                      <span>{item.name}</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {activeDropdown === item.name && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-zion-slate-dark border border-zion-blue-light/30 rounded-lg shadow-xl backdrop-blur-md">
                        <div className="p-4 space-y-2">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.href}
                              className="block p-3 rounded-lg hover:bg-zion-slate-light/20 transition-colors group"
                            >
                              <div className="font-medium text-white group-hover:text-zion-cyan transition-colors">
                                {dropdownItem.name}
                              </div>
                              <div className="text-sm text-zion-slate-light mt-1">
                                {dropdownItem.description}
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
            {navigationItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.hasDropdown ? (
                  <button
                    onClick={() => handleDropdownToggle(item.label)}
                    className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-200 py-2"
                  >
                    <span>{item.label}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                ) : (
                  <Link
                    to={item.path}
                    className={`text-gray-300 hover:text-cyan-400 transition-colors duration-200 py-2 ${
                      location.pathname === item.path ? 'text-cyan-400' : ''
                    }`}
                  >
                    {item.label}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.hasDropdown && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-2 w-96 bg-black/95 backdrop-blur-xl border border-cyan-500/20 rounded-xl shadow-2xl shadow-cyan-500/10">
                    <div className="p-6 space-y-6">
                      {item.dropdownItems?.map((category, idx) => (
                        <div key={idx}>
                          <h3 className="text-cyan-400 font-semibold text-sm uppercase tracking-wider mb-3">
                            {category.category}
                          </h3>
                          <div className="space-y-2">
                            {category.items.map((subItem, subIdx) => (
                              <Link
                                key={subIdx}
                                to={subItem.path}
                                onClick={closeDropdowns}
                                className="flex items-start space-x-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-colors duration-200 group"
                              >
                                <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center group-hover:bg-cyan-500/30 transition-colors duration-200">
                                  <subItem.icon className="w-4 h-4 text-cyan-400" />
                                </div>
                                <div className="flex-1">
                                  <div className="text-white font-medium group-hover:text-cyan-400 transition-colors duration-200">
                                    {subItem.label}
                                  </div>
                                  <div className="text-gray-400 text-sm">
                                    {subItem.description}
                                  </div>
                                </div>
                                <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors duration-200" />
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
=======
                    to={item.path}
                    className="flex items-center space-x-1 text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                  >
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
=======
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`text-white hover:text-zion-cyan transition-colors py-2 ${
                      location.pathname === item.href ? 'text-zion-cyan' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Right side - Theme Toggle and CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Link
              to="/contact"
              className="bg-gradient-to-r from-zion-purple to-zion-cyan hover:from-zion-purple-light hover:to-zion-cyan-light text-white px-4 py-2 rounded-md font-medium transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/30"
=======
          {/* Search and Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="relative">
=======
          {/* Right Section */}
          <div className="hidden lg:flex items-center space-x-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search services..."
                className="w-64 pl-10 pr-4 py-2 bg-black/50 border border-cyan-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all duration-200"
              />
            </div>

            {/* Contact Info */}
            <div className="flex items-center space-x-4 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="btn-futuristic"
            >
              Get Started
            </Link>
          </div>

=======
          {/* Mobile Menu Button */}
          <button
            onClick={toggleSidebar}
            className="lg:hidden p-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200"
          >
            {isSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

=======
                      onClick={() => setIsMenuOpen(false)}
                      className="block text-white hover:text-zion-cyan transition-colors py-2"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
=======
          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <button className="text-gray-300 hover:text-white p-2 rounded-md transition-colors duration-200">
              <Search className="w-5 h-5" />
            </button>

            {/* Contact Info */}
            <div className="hidden md:flex items-center space-x-4 text-sm">
              <a 
                href="tel:+13024640950" 
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-center space-x-1"
              >
                <Phone className="w-4 h-4" />
                <span>+1 (302) 464-0950</span>
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 flex items-center space-x-1"
              >
                <Mail className="w-4 h-4" />
                <span>kleber@ziontechgroup.com</span>
              </a>
            </div>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-cyan-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
            >
              Get Started
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden text-gray-300 hover:text-white p-2 rounded-md transition-colors duration-200"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
=======
            </nav>

            {/* Mobile Search */}
            <form onSubmit={handleSearch} className="mt-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 bg-zion-slate-light/20 border border-zion-blue-light/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan transition-colors"
                />
=======
      {/* Mobile Sidebar */}
      {isSidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={toggleSidebar} />
          <div className="fixed right-0 top-0 h-full w-80 bg-black/95 backdrop-blur-xl border-l border-cyan-500/20">
            <div className="p-6">
              <div className="flex justify-between items-center mb-8">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
                    <Brain className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-lg font-bold text-white">Zion Tech</span>
                </div>
                <button
                  onClick={toggleSidebar}
                  className="p-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Mobile Navigation */}
              <nav className="space-y-4">
                {navigationItems.map((item) => (
                  <div key={item.label}>
                    {item.hasDropdown ? (
                      <div>
                        <button
                          onClick={() => handleDropdownToggle(item.label)}
                          className="flex items-center justify-between w-full text-left text-gray-300 hover:text-cyan-400 transition-colors duration-200 py-3"
                        >
                          <span>{item.label}</span>
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                            activeDropdown === item.label ? 'rotate-180' : ''
                          }`} />
                        </button>
                        {activeDropdown === item.label && (
                          <div className="ml-4 mt-2 space-y-2">
                            {item.dropdownItems?.map((category, idx) => (
                              <div key={idx} className="space-y-2">
                                <h4 className="text-cyan-400 font-medium text-sm uppercase tracking-wider">
                                  {category.category}
                                </h4>
                                {category.items.map((subItem, subIdx) => (
                                  <Link
                                    key={subIdx}
                                    to={subItem.path}
                                    onClick={toggleSidebar}
                                    className="block text-gray-400 hover:text-cyan-400 transition-colors duration-200 py-2 pl-4"
                                  >
                                    {subItem.label}
                                  </Link>
                                ))}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        to={item.path}
                        onClick={toggleSidebar}
                        className={`block text-gray-300 hover:text-cyan-400 transition-colors duration-200 py-3 ${
                          location.pathname === item.path ? 'text-cyan-400' : ''
                        }`}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              {/* Mobile Contact Info */}
              <div className="mt-8 pt-8 border-t border-cyan-500/20 space-y-4">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="mt-8">
                <Link
                  to="/contact"
                  onClick={toggleSidebar}
                  className="btn-futuristic w-full text-center"
                >
                  Get Started Today
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
=======
    </header>
  );
};

export default Header;
