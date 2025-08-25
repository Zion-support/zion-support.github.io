import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
<<<<<<< HEAD
import { Menu, X, Brain, Users, BarChart3, Code, Palette, Target, Shield, Heart, Database, Search, Building, Cpu, Globe, Rocket, Eye, DollarSign, ShoppingCart, Clock, Cloud, Network, ChevronDown } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
=======
import Sidebar from './Sidebar';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Search, 
  Phone, 
  Mail, 
  MapPin,
  Brain,
  Users,
  Target,
  Shield,
  Zap,
  Building,
  Cpu,
  Globe,
  Rocket,
  Star,
  ArrowRight,
  Briefcase,
  Code,
  Database,
  Network,
  Cloud,
  Lock,
  BarChart3,
  Palette,
  Smartphone,
  Server
} from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

<<<<<<< HEAD
  useEffect(() => {
    // Close mobile menu when route changes
    setIsMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const navigation = [
    { 
      name: 'Home', 
      href: '/', 
      current: location.pathname === '/',
      type: 'link'
    },
    { 
      name: 'Services', 
      href: '/services', 
      current: location.pathname === '/services',
      type: 'dropdown',
      dropdownItems: [
        { name: 'AI & Autonomous Systems', href: '/services/ai-autonomous-systems' },
        { name: 'Cybersecurity', href: '/services/cybersecurity' },
        { name: 'IT Infrastructure', href: '/services/it-infrastructure' },
        { name: 'Quantum Technology', href: '/services/quantum-technology' },
        { name: 'Micro SAAS Solutions', href: '/services/micro-saas-solutions' },
        { name: 'Industry Solutions', href: '/services/industry-solutions' },
        { name: 'Digital Transformation', href: '/digital-transformation' },
        { name: 'Advanced Services 2025', href: '/advanced-innovative-services-2025', highlight: true },
        { name: 'View All Services', href: '/services' }
      ]
    },
    { 
      name: 'AI Solutions', 
      href: '/ai-solutions', 
      current: location.pathname === '/ai-solutions',
      type: 'dropdown',
      dropdownItems: [
        { name: 'AI Autonomous Business Manager', href: '/ai-autonomous-business-manager' },
        { name: 'AI Autonomous Research Assistant', href: '/ai-autonomous-research-assistant' },
        { name: 'AI Autonomous Decision Engine', href: '/ai-autonomous-decision-engine' },
        { name: 'AI Autonomous Code Review', href: '/ai-autonomous-code-review' },
        { name: 'AI Autonomous Creative Director', href: '/ai-autonomous-creative-director' },
        { name: 'AI Autonomous Data', href: '/ai-autonomous-data' },
        { name: 'AI Autonomous Research', href: '/ai-autonomous-research' },
        { name: 'AI Autonomous Systems Platform', href: '/ai-autonomous-systems-platform' },
        { name: 'AI Autonomous DevOps', href: '/ai-autonomous-devops' },
        { name: 'AI Autonomous Education Professor', href: '/ai-autonomous-education-professor' },
        { name: 'AI Autonomous Healthcare Physician', href: '/ai-autonomous-healthcare-physician' },
        { name: 'AI Autonomous Learning System', href: '/ai-autonomous-learning-system' },
        { name: 'AI Autonomous Legal Counsel', href: '/ai-autonomous-legal-counsel' },
        { name: 'AI Autonomous Logistics', href: '/ai-autonomous-logistics' },
        { name: 'AI Autonomous Manufacturing', href: '/ai-autonomous-manufacturing' },
        { name: 'AI Autonomous Robotics', href: '/ai-autonomous-robotics' },
        { name: 'AI Autonomous Scientific Researcher', href: '/ai-autonomous-scientific-researcher' },
        { name: 'AI Autonomous Security', href: '/ai-autonomous-security' },
        { name: 'AI Autonomous Testing', href: '/ai-autonomous-testing' },
        { name: 'AI Autonomous Vehicle Platform', href: '/ai-autonomous-vehicle-platform' },
        { name: 'AI Autonomous Vehicles', href: '/ai-autonomous-vehicles' },
        { name: 'AI Autonomous Venture Capitalist', href: '/ai-autonomous-venture-capitalist' },
        { name: 'AI Biomedical Research', href: '/ai-biomedical-research' },
        { name: 'AI Biotech Drug Discovery', href: '/ai-biotech-drug-discovery' },
        { name: 'AI Blockchain Analytics', href: '/ai-blockchain-analytics' },
        { name: 'AI Blockchain Governance', href: '/ai-blockchain-governance' },
        { name: 'AI Brain Computer Interface', href: '/ai-brain-computer-interface' },
        { name: 'AI Brain Interface', href: '/ai-brain-interface' },
        { name: 'AI Brand Personality Generator', href: '/ai-brand-personality-generator' },
        { name: 'AI Business Intelligence Elite', href: '/ai-business-intelligence-elite' },
        { name: 'AI Business Intelligence Pro', href: '/ai-business-intelligence-pro' },
        { name: 'AI Business Intelligence Suite', href: '/ai-business-intelligence-suite' },
        { name: 'AI Business Intelligence', href: '/ai-business-intelligence' },
        { name: 'AI Climate Prediction Engine', href: '/ai-climate-prediction-engine' },
        { name: 'AI Climate Prediction Platform', href: '/ai-climate-prediction-platform' },
        { name: 'AI Climate Prediction', href: '/ai-climate-prediction' },
        { name: 'AI Code Generation Enterprise', href: '/ai-code-generation-enterprise' },
        { name: 'AI Code Review Copilot', href: '/ai-code-review-copilot' },
        { name: 'AI Code Review', href: '/ai-code-review' },
        { name: 'AI Compliance Automation', href: '/ai-compliance-automation' },
        { name: 'AI Computer Vision Platform', href: '/ai-computer-vision-platform' },
        { name: 'AI Consciousness Evolution', href: '/ai-consciousness-evolution' },
        { name: 'AI Consciousness Evolution Platform', href: '/ai-consciousness-evolution-platform' },
        { name: 'AI Consciousness Simulation Platform', href: '/ai-consciousness-simulation-platform' },
        { name: 'AI Consciousness Simulation', href: '/ai-consciousness-simulation' },
        { name: 'AI Consciousness Simulator', href: '/ai-consciousness-simulator' },
        { name: 'AI Content Creation Revolution', href: '/ai-content-creation-revolution' },
        { name: 'AI Content Creation', href: '/ai-content-creation' },
        { name: 'AI Content Factory', href: '/ai-content-factory' },
        { name: 'AI Content Generation Automation', href: '/ai-content-generation-automation' },
        { name: 'AI Content Generation Pro', href: '/ai-content-generation-pro' },
        { name: 'AI Content Generator', href: '/ai-content-generator' },
        { name: 'AI Content Marketing Automation', href: '/ai-content-marketing-automation' },
        { name: 'AI Content Personalization Engine', href: '/ai-content-personalization-engine' },
        { name: 'AI Creativity Studio', href: '/ai-creativity-studio' },
        { name: 'AI Market Research', href: '/ai-market-research' },
        { name: 'AI Powered Enterprise Security', href: '/ai-powered-enterprise-security' },
        { name: 'AI Workflow Automation', href: '/ai-workflow-automation' }
      ]
    },
    { 
      name: 'Solutions', 
      href: '/solutions/enterprise', 
      current: location.pathname.startsWith('/solutions'),
      type: 'dropdown',
      dropdownItems: [
        { name: 'Enterprise Solutions', href: '/solutions/enterprise' },
        { name: 'Healthcare Solutions', href: '/solutions/healthcare' },
        { name: 'Financial Solutions', href: '/solutions/financial' },
        { name: 'Manufacturing Solutions', href: '/solutions/manufacturing' },
        { name: 'Retail Solutions', href: '/solutions/retail' },
        { name: 'Government Solutions', href: '/solutions/government' },
        { name: '5G Enterprise Solutions', href: '/5g-enterprise-solutions' },
        { name: 'Quantum Neural Network Platform', href: '/quantum-neural-network-platform' },
        { name: 'Autonomous Business Operations Platform', href: '/autonomous-business-operations-platform' },
        { name: 'AI Powered IT Asset Management', href: '/ai-powered-it-asset-management' },
        { name: 'SOC2 Compliance Automation', href: '/soc2-compliance-automation' }
      ]
    },
    { 
      name: 'Company', 
      href: '/about', 
      current: location.pathname.startsWith('/about') || location.pathname.startsWith('/team') || location.pathname.startsWith('/mission'),
      type: 'dropdown',
      dropdownItems: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Mission', href: '/mission' },
        { name: 'Team', href: '/team' },
        { name: 'Partners', href: '/partners' },
        { name: 'Careers', href: '/careers' },
        { name: 'Case Studies', href: '/case-studies' },
        { name: 'Testimonials', href: '/testimonials' },
        { name: 'News', href: '/news' },
        { name: 'Blog', href: '/blog' }
      ]
=======
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
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2
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
<<<<<<< HEAD
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to search results or services page
      window.location.href = `/services?search=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  const contactInfo = [
    { icon: Phone, text: '+1 302 464 0950', href: 'tel:+13024640950' },
    { icon: Mail, text: 'kleber@ziontechgroup.com', href: 'mailto:kleber@ziontechgroup.com' },
    { icon: MapPin, text: '364 E Main St STE 1008 Middletown DE 19709', href: '#' }
  ];

=======
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

>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2
  const serviceCategories = [
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      description: 'Intelligent solutions powered by artificial intelligence',
      services: [
<<<<<<< HEAD
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
=======
        { name: 'AI Autonomous Systems', path: '/services/ai-autonomous-systems', description: 'Advanced autonomous AI systems' },
        { name: 'AI Research Assistant', path: '/ai-autonomous-research-assistant', description: 'AI-powered research automation' },
        { name: 'AI Business Intelligence', path: '/services/ai-business-intelligence', description: 'Advanced analytics and insights' },
        { name: 'AI Marketing Automation', path: '/services/ai-marketing-automation', description: 'Smart marketing optimization' },
        { name: 'AI HR & Recruitment', path: '/services/ai-hr-recruitment', description: 'Intelligent talent management' },
        { name: 'AI Legal Tech', path: '/services/ai-legal-tech', description: 'Automated legal processes' },
        { name: 'AI Healthcare Analytics', path: '/services/ai-healthcare-analytics', description: 'Patient care optimization' }
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2
      ]
    },
    {
      title: 'Quantum Technology',
      icon: Brain,
      description: 'Next-generation quantum computing solutions',
      services: [
<<<<<<< HEAD
        { name: 'Quantum Neural Networks', path: '/quantum-neural-network-platform', description: 'Quantum-powered neural networks', icon: Brain },
        { name: 'Quantum Computing', path: '/services/quantum-technology', description: 'Quantum computing platforms', icon: Cpu },
        { name: 'Quantum-Safe Security', path: '/services/quantum-security', description: 'Future-proof quantum security', icon: Shield }
=======
        { name: 'Quantum Neural Networks', path: '/quantum-neural-network-platform', description: 'Quantum-powered neural networks' },
        { name: 'Quantum Computing', path: '/services/quantum-technology', description: 'Quantum computing platforms' },
        { name: 'Quantum-Safe Security', path: '/services/quantum-security', description: 'Future-proof quantum security' }
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2
      ]
    },
    {
      title: 'Business Operations',
      icon: Building,
      description: 'Streamlined business process automation',
      services: [
        { name: 'Autonomous Business Platform', path: '/autonomous-business-operations-platform', description: 'Self-operating business systems' },
<<<<<<< HEAD
        { name: 'AI Autonomous Business Manager', path: '/ai-autonomous-business-manager', description: 'AI-powered business management' },
        { name: 'AI Autonomous Business Platform', path: '/ai-autonomous-business-platform', description: 'Complete AI business platform' },
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2
        { name: 'AI Asset Management', path: '/ai-powered-it-asset-management', description: 'Intelligent IT asset management' },
        { name: 'Business Intelligence', path: '/services/ai-business-intelligence', description: 'Advanced business analytics' }
      ]
    },
    {
      title: 'Cybersecurity',
      icon: Shield,
      description: 'Comprehensive security and compliance solutions',
      services: [
<<<<<<< HEAD
        { name: 'Cybersecurity Services', path: '/services/cybersecurity', description: 'Complete security solutions', icon: Shield },
        { name: 'SOC2 Compliance Automation', path: '/soc2-compliance-automation', description: 'Automated compliance management', icon: Lock },
        { name: 'Security Assessment', path: '/services/security-assessment', description: 'Security audit and testing', icon: Shield },
        { name: 'Compliance & Audit', path: '/services/compliance-audit', description: 'Regulatory compliance support', icon: Lock },
        { name: 'Threat Detection', path: '/services/threat-detection', description: 'Real-time security monitoring', icon: Shield }
=======
        { name: 'Cybersecurity Services', path: '/services/cybersecurity', description: 'Complete security solutions' },
        { name: 'SOC2 Compliance Automation', path: '/soc2-compliance-automation', description: 'Automated compliance management' },
        { name: 'Security Assessment', path: '/services/security-assessment', description: 'Security audit and testing' },
        { name: 'Compliance & Audit', path: '/services/compliance-audit', description: 'Regulatory compliance support' },
        { name: 'Threat Detection', path: '/services/threat-detection', description: 'Real-time security monitoring' }
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2
      ]
    },
    {
      title: 'Cloud & Infrastructure',
      icon: Cpu,
      description: 'Scalable cloud solutions and infrastructure management',
      services: [
<<<<<<< HEAD
        { name: 'Quantum-Secure Cloud', path: '/services/quantum-secure-cloud', description: 'Future-proof cloud security', icon: Shield },
        { name: 'Cloud DevOps', path: '/cloud-devops', description: 'Cloud development and operations', icon: Cpu },
        { name: 'IT Infrastructure', path: '/services/it-infrastructure', description: 'Complete IT infrastructure solutions', icon: Network },
        { name: '5G Enterprise Solutions', path: '/5g-enterprise-solutions', description: 'High-speed 5G connectivity', icon: Network },
        { name: 'Cloud Migration', path: '/services/cloud-migration', description: 'Seamless cloud transition', icon: Cloud },
        { name: 'Network Infrastructure', path: '/services/network-infrastructure', description: 'Robust network solutions', icon: Network },
        { name: 'Managed IT Services', path: '/services/managed-it-services', description: '24/7 IT support', icon: Clock },
        { name: 'DevOps Automation', path: '/services/devops-automation', description: 'Streamlined development', icon: Code }
=======
        { name: 'Cloud DevOps', path: '/cloud-devops', description: 'Cloud development and operations' },
        { name: 'IT Infrastructure', path: '/services/it-infrastructure', description: 'Complete IT infrastructure solutions' },
        { name: '5G Enterprise Solutions', path: '/5g-enterprise-solutions', description: 'High-speed 5G connectivity' },
        { name: 'Cloud Migration', path: '/services/cloud-migration', description: 'Seamless cloud transition' },
        { name: 'Network Infrastructure', path: '/services/network-infrastructure', description: 'Robust network solutions' },
        { name: 'Managed IT Services', path: '/services/managed-it-services', description: '24/7 IT support' },
        { name: 'DevOps Automation', path: '/services/devops-automation', description: 'Streamlined development' }
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2
      ]
    },
    {
      title: 'Emerging Technologies',
      icon: Rocket,
      description: 'Cutting-edge solutions for tomorrow\'s challenges',
      services: [
<<<<<<< HEAD
        { name: 'Blockchain Solutions', path: '/services/blockchain-solutions', description: 'Decentralized applications', icon: Code },
        { name: 'IoT Platforms', path: '/services/iot-platforms', description: 'Connected device management', icon: Network },
        { name: 'Quantum Computing', path: '/services/quantum-computing', description: 'Next-generation computing', icon: Cpu },
        { name: 'AR/VR Solutions', path: '/services/ar-vr-solutions', description: 'Immersive experiences', icon: Eye },
        { name: 'Advanced Services 2025', path: '/advanced-innovative-services-2025', description: 'Cutting-edge 2025 solutions', icon: Rocket }
=======
        { name: 'Blockchain Solutions', path: '/services/blockchain-solutions', description: 'Decentralized applications' },
        { name: 'IoT Platforms', path: '/services/iot-platforms', description: 'Connected device management' },
        { name: 'Quantum Computing', path: '/services/quantum-computing', description: 'Next-generation computing' },
        { name: 'AR/VR Solutions', path: '/services/ar-vr-solutions', description: 'Immersive experiences' }
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2
      ]
    },
    {
      title: 'Industry Solutions',
      icon: Building,
      description: 'Tailored solutions for specific industries',
      services: [
<<<<<<< HEAD
        { name: 'Healthcare Technology', path: '/solutions/healthcare', description: 'Medical innovation', icon: Heart },
        { name: 'Financial Services', path: '/services/financial-services', description: 'Fintech solutions', icon: DollarSign },
        { name: 'Manufacturing Intelligence', path: '/services/manufacturing-intelligence', description: 'Smart manufacturing', icon: Cpu },
        { name: 'Retail Technology', path: '/services/retail-technology', description: 'Digital retail transformation', icon: ShoppingCart }
      ]
    }
  ];
>>>>>>> origin/cursor/expand-services-and-deploy-updates-7834

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <header className={`bg-background/80 backdrop-blur-md border-b border-border sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'shadow-lg' : ''
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-zion-blue to-zion-purple rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <span className="text-xl font-bold text-gradient">Zion Tech Group</span>
          </Link>

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

  const closeDropdowns = () => {
    setActiveDropdown(null);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/95 backdrop-blur-md border-b border-gray-800' 
        : 'bg-black/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <span className="text-white font-bold text-xl hidden sm:block">Zion Tech Group</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navigationItems.map((item) => (
              <div key={item.path} className="relative">
                {item.hasDropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => toggleDropdown(item.label.toLowerCase())}
                      onMouseEnter={() => setActiveDropdown(item.label.toLowerCase())}
                      className="flex items-center space-x-1 text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                    >
                      <span>{item.icon}</span>
                      <span>{item.label}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    
                    {/* Services Dropdown */}
                    {activeDropdown === 'services' && item.label === 'Services' && (
                      <div 
                        className="absolute top-full left-0 mt-2 w-screen max-w-6xl bg-black/95 backdrop-blur-md border border-gray-800 rounded-lg shadow-2xl p-6"
                        onMouseLeave={closeDropdowns}
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {serviceCategories.map((category) => (
                            <div key={category.title} className="space-y-3">
                              <div className="flex items-center space-x-2">
                                <category.icon className="w-5 h-5 text-cyan-500" />
                                <h3 className="text-white font-semibold text-sm">{category.title}</h3>
                              </div>
                              <p className="text-gray-400 text-xs">{category.description}</p>
                              <div className="space-y-2">
                                {category.services.map((service) => (
                                  <Link
                                    key={service.name}
                                    to={service.path}
                                    className="block text-gray-300 hover:text-cyan-400 text-xs transition-colors duration-200"
                                  >
                                    {service.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Solutions Dropdown */}
                    {activeDropdown === 'solutions' && item.label === 'Solutions' && (
                      <div 
                        className="absolute top-full left-0 mt-2 w-screen max-w-4xl bg-black/95 backdrop-blur-md border border-gray-800 rounded-lg shadow-2xl p-6"
                        onMouseLeave={closeDropdowns}
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {solutionCategories.map((category) => (
                            <div key={category.title} className="space-y-3">
                              <div className="flex items-center space-x-2">
                                <category.icon className="w-5 h-5 text-cyan-500" />
                                <h3 className="text-white font-semibold text-sm">{category.title}</h3>
                              </div>
                              <p className="text-gray-400 text-xs">{category.description}</p>
                              <div className="space-y-2">
                                {category.solutions.map((solution) => (
                                  <Link
                                    key={solution.name}
                                    to={solution.path}
                                    className="block text-gray-300 hover:text-cyan-400 text-xs transition-colors duration-200"
                                  >
                                    {solution.name}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
<<<<<<< HEAD
                    to={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      item.current
                        ? 'text-zion-cyan bg-zion-cyan/10'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    }`}
                  >
                    {item.name}
=======
                    to={item.path}
                    className="flex items-center space-x-1 text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                  >
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2
                  </Link>
                )}
              </div>
            ))}
          </nav>

<<<<<<< HEAD
          {/* Right side - Theme Toggle and CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Link
              to="/contact"
              className="bg-gradient-to-r from-zion-purple to-zion-cyan hover:from-zion-purple-light hover:to-zion-cyan-light text-white px-4 py-2 rounded-md font-medium transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/30"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-md border-t border-border">
              {/* Mobile Search */}
              <div className="px-3 py-2">
                <form onSubmit={handleSearch} className="relative">
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
              
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.type === 'dropdown' ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className={`w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors flex items-center justify-between ${
                          item.current
                            ? 'text-zion-cyan bg-zion-cyan/10'
                            : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                        }`}
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {/* Mobile Dropdown */}
                      {activeDropdown === item.name && (
                        <div className="ml-4 mt-2 space-y-1">
                          {item.dropdownItems?.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.name}
                              to={dropdownItem.href}
                              className="block px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                              onClick={() => {
                                setIsMenuOpen(false);
                                setActiveDropdown(null);
                              }}
                            >
                              {dropdownItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                        item.current
                          ? 'text-zion-cyan bg-zion-cyan/10'
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              <div className="pt-4 flex items-center justify-between">
                <ThemeToggle />
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-zion-purple to-zion-cyan hover:from-zion-purple-light hover:to-zion-cyan-light text-white px-4 py-2 rounded-md font-medium transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/30"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
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
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2
      </div>
    </header>
  );
}

export default Header;
