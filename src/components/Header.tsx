import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
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
  Bell,
  User,
  Settings,
  Cloud
} from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [notifications, setNotifications] = useState(3); // Example notification count
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as Element).closest('.dropdown-container')) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navigationItems = [
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
        { name: 'Advanced Cybersecurity Suite', href: '/advanced-cybersecurity-suite' },
        { name: 'Accessibility Auditor', href: '/accessibility-auditor' },
        { name: 'Affiliate Attribution Hub', href: '/affiliate-attribution-hub' }
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
    },
    { 
      name: 'Resources', 
      href: '/resources', 
      current: location.pathname.startsWith('/resources') || location.pathname.startsWith('/docs') || location.pathname.startsWith('/help'),
      type: 'dropdown',
      dropdownItems: [
        { name: 'Documentation', href: '/docs' },
        { name: 'Help Center', href: '/help' },
        { name: 'Support', href: '/support' },
        { name: 'FAQ', href: '/faq' },
        { name: 'Webinars', href: '/webinars' },
        { name: 'White Papers', href: '/white-papers' },
        { name: 'Events', href: '/events' },
        { name: 'Marketplace', href: '/marketplace' },
        { name: 'Community', href: '/community' }
      ]
    },
    { 
      name: 'Contact', 
      href: '/contact', 
      current: location.pathname === '/contact',
      type: 'link'
    },
  ];

  const serviceCategories = [
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      description: 'Intelligent solutions powered by artificial intelligence',
      services: [
        { name: 'AI Autonomous Systems', path: '/services/ai-autonomous-systems', description: 'Advanced autonomous AI systems' },
        { name: 'Machine Learning Models', path: '/services/machine-learning', description: 'Custom ML model development' },
        { name: 'AI Research Assistant', path: '/ai-autonomous-research-assistant', description: 'AI-powered research tools' },
        { name: 'Quantum Neural Networks', path: '/quantum-neural-network-platform', description: 'Next-gen neural computing' }
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      description: 'Scalable cloud infrastructure and automation',
      services: [
        { name: 'Cloud Migration', path: '/services/cloud-migration', description: 'Seamless cloud transition' },
        { name: 'DevOps Automation', path: '/services/devops', description: 'CI/CD pipeline optimization' },
        { name: 'Infrastructure as Code', path: '/services/iac', description: 'Automated infrastructure management' },
        { name: 'Container Orchestration', path: '/services/kubernetes', description: 'Kubernetes expertise' }
      ]
    },
    {
      title: 'Cybersecurity',
      icon: Shield,
      description: 'Comprehensive security solutions',
      services: [
        { name: 'SOC2 Compliance', path: '/soc2-compliance-automation', description: 'Automated compliance management' },
        { name: 'Threat Detection', path: '/services/threat-detection', description: 'Advanced threat monitoring' },
        { name: 'Security Audits', path: '/services/security-audits', description: 'Comprehensive security assessments' },
        { name: 'Incident Response', path: '/services/incident-response', description: '24/7 security monitoring' }
      ]
    },
    {
      title: 'Enterprise Solutions',
      icon: Building,
      description: 'Large-scale business transformation',
      services: [
        { name: 'Digital Transformation', path: '/digital-transformation', description: 'End-to-end business modernization' },
        { name: 'IT Asset Management', path: '/ai-powered-it-asset-management', description: 'AI-powered asset tracking' },
        { name: 'Business Operations', path: '/autonomous-business-operations-platform', description: 'Automated business processes' },
        { name: '5G Enterprise', path: '/5g-enterprise-solutions', description: 'Next-gen network solutions' }
      ]
    },
    {
      title: 'Startup Solutions',
      icon: Rocket,
      description: 'Accelerate your startup growth',
      solutions: [
        { name: 'MVP Development', path: '/services/mvp-development', description: 'Rapid prototype development' },
        { name: 'AI Integration', path: '/ai-solutions', description: 'AI-powered features' },
        { name: 'Scalable Architecture', path: '/services/scalable-architecture', description: 'Growth-ready infrastructure' }
      ]
    }
  };

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const isActive = (path: string) => location.pathname === path;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Implement search functionality
      console.log('Searching for:', searchQuery);
      setSearchQuery('');
      setShowSearch(false);
    }
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
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.path} className="relative group dropdown-container">
                {item.hasDropdown ? (
                  <button
                    onClick={() => handleDropdownToggle(item.label.toLowerCase())}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-300 ${
                      isActive(item.path) 
                        ? 'text-zion-cyan bg-zion-cyan/10' 
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                    <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      item.current
                        ? 'text-zion-cyan bg-zion-cyan/10'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}

                {/* Enhanced Dropdown Menus */}
                {item.hasDropdown && activeDropdown === item.label.toLowerCase() && (
                  <div className="absolute top-full left-0 mt-2 w-96 bg-zion-blue-dark/95 backdrop-blur-md border border-zion-cyan/30 rounded-xl shadow-2xl shadow-zion-cyan/10 overflow-hidden">
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
                        <span className="mr-2">{item.icon}</span>
                        {item.label}
                      </h3>
                      <div className="grid grid-cols-1 gap-4">
                        {item.label.toLowerCase() === 'services' && serviceCategories.map((category) => (
                          <div key={category.title} className="group">
                            <div className="flex items-center space-x-3 p-4 rounded-lg hover:bg-zion-cyan/10 transition-colors duration-200">
                              <category.icon className="w-6 h-6 text-zion-cyan" />
                              <div className="flex-1">
                                <h4 className="font-semibold text-white group-hover:text-zion-cyan transition-colors duration-200">
                                  {category.title}
                                </h4>
                                <p className="text-sm text-gray-400 mt-1">{category.description}</p>
                              </div>
                            </div>
                            <div className="ml-9 space-y-2">
                              {category.services?.map((service) => (
                                <Link
                                  key={service.name}
                                  to={service.path}
                                  className="block p-3 rounded-lg hover:bg-zion-cyan/10 transition-colors duration-200"
                                >
                                  <div className="text-sm font-medium text-gray-300 hover:text-zion-cyan transition-colors duration-200">
                                    {service.name}
                                  </div>
                                  <div className="text-xs text-gray-500 mt-1">{service.description}</div>
                                </Link>
                              ))}
                              {category.solutions?.map((solution) => (
                                <Link
                                  key={solution.name}
                                  to={solution.path}
                                  className="block p-3 rounded-lg hover:bg-zion-cyan/10 transition-colors duration-200"
                                >
                                  <div className="text-sm font-medium text-gray-300 hover:text-zion-cyan transition-colors duration-200">
                                    {solution.name}
                                  </div>
                                  <div className="text-xs text-gray-500 mt-1">{solution.description}</div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <button
              onClick={() => setShowSearch(!showSearch)}
              className="p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-200"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Notifications */}
            <button className="relative p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-200">
              <Bell className="w-5 h-5" />
              {notifications > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  {notifications}
                </span>
              )}
            </button>

            {/* User Menu */}
            <button className="p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-200">
              <User className="w-5 h-5" />
            </button>

            {/* Contact Button */}
            <Link
              to="/contact"
              className="hidden sm:flex items-center space-x-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-4 py-2 rounded-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300 transform hover:scale-105"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors duration-200"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Enhanced Search Bar */}
        {showSearch && (
          <div className="pb-4">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search services, solutions, or resources..."
                className="w-full bg-white/10 border border-zion-cyan/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan/50 backdrop-blur-sm"
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 p-2 text-zion-cyan hover:text-white transition-colors duration-200"
              >
                <Search className="w-5 h-5" />
              </button>
            </form>
          </div>
        )}
      </div>

      {/* Mobile Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </header>
  );
}

export default Header;