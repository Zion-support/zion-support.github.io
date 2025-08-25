import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Brain, Users, BarChart3, Code, Palette, Target, Shield, Heart, Database, Search, Building, Cpu, Globe, Rocket, Eye, DollarSign, ShoppingCart, Clock, Cloud, Network, ChevronDown } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
      ]
    },
    {
      title: 'Quantum Technology',
      icon: Brain,
      description: 'Next-generation quantum computing solutions',
      color: 'from-blue-500 to-cyan-500',
      services: [
        { name: 'Quantum Neural Networks', path: '/quantum-neural-network-platform', description: 'Quantum-powered neural networks', icon: Brain },
        { name: 'Quantum Computing', path: '/services/quantum-technology', description: 'Quantum computing platforms', icon: Cpu },
        { name: 'Quantum-Safe Security', path: '/services/quantum-security', description: 'Future-proof quantum security', icon: Shield }
      ]
    },
    {
      title: 'Business Operations',
      icon: Building,
      description: 'Streamlined business process automation',
      color: 'from-green-500 to-emerald-500',
      services: [
        { name: 'Autonomous Business Platform', path: '/autonomous-business-operations-platform', description: 'Self-operating business systems' },
        { name: 'AI Autonomous Business Manager', path: '/ai-autonomous-business-manager', description: 'AI-powered business management' },
        { name: 'AI Autonomous Business Platform', path: '/ai-autonomous-business-platform', description: 'Complete AI business platform' },
        { name: 'AI Asset Management', path: '/ai-powered-it-asset-management', description: 'Intelligent IT asset management' },
        { name: 'Business Intelligence', path: '/services/ai-business-intelligence', description: 'Advanced business analytics' }
      ]
    },
    {
      title: 'Cybersecurity',
      icon: Shield,
      description: 'Comprehensive security and compliance solutions',
      color: 'from-red-500 to-pink-500',
      services: [
        { name: 'Cybersecurity Services', path: '/services/cybersecurity', description: 'Complete security solutions', icon: Shield },
        { name: 'SOC2 Compliance Automation', path: '/soc2-compliance-automation', description: 'Automated compliance management', icon: Lock },
        { name: 'Security Assessment', path: '/services/security-assessment', description: 'Security audit and testing', icon: Shield },
        { name: 'Compliance & Audit', path: '/services/compliance-audit', description: 'Regulatory compliance support', icon: Lock },
        { name: 'Threat Detection', path: '/services/threat-detection', description: 'Real-time security monitoring', icon: Shield }
      ]
    },
    {
      title: 'Cloud & Infrastructure',
      icon: Cpu,
      description: 'Scalable cloud solutions and infrastructure management',
      color: 'from-blue-500 to-indigo-500',
      services: [
        { name: 'Quantum-Secure Cloud', path: '/services/quantum-secure-cloud', description: 'Future-proof cloud security', icon: Shield },
        { name: 'Cloud DevOps', path: '/cloud-devops', description: 'Cloud development and operations', icon: Cpu },
        { name: 'IT Infrastructure', path: '/services/it-infrastructure', description: 'Complete IT infrastructure solutions', icon: Network },
        { name: '5G Enterprise Solutions', path: '/5g-enterprise-solutions', description: 'High-speed 5G connectivity', icon: Network },
        { name: 'Cloud Migration', path: '/services/cloud-migration', description: 'Seamless cloud transition', icon: Cloud },
        { name: 'Network Infrastructure', path: '/services/network-infrastructure', description: 'Robust network solutions', icon: Network },
        { name: 'Managed IT Services', path: '/services/managed-it-services', description: '24/7 IT support', icon: Clock },
        { name: 'DevOps Automation', path: '/services/devops-automation', description: 'Streamlined development', icon: Code }
      ]
    },
    {
      title: 'Emerging Technologies',
      icon: Rocket,
      description: 'Cutting-edge solutions for tomorrow\'s challenges',
      color: 'from-purple-500 to-violet-500',
      services: [
        { name: 'Blockchain Solutions', path: '/services/blockchain-solutions', description: 'Decentralized applications', icon: Code },
        { name: 'IoT Platforms', path: '/services/iot-platforms', description: 'Connected device management', icon: Network },
        { name: 'Quantum Computing', path: '/services/quantum-computing', description: 'Next-generation computing', icon: Cpu },
        { name: 'AR/VR Solutions', path: '/services/ar-vr-solutions', description: 'Immersive experiences', icon: Eye },
        { name: 'Advanced Services 2025', path: '/advanced-innovative-services-2025', description: 'Cutting-edge 2025 solutions', icon: Rocket }
      ]
    },
    {
      title: 'Industry Solutions',
      icon: Building,
      description: 'Tailored solutions for specific industries',
      color: 'from-orange-500 to-yellow-500',
      services: [
        { name: 'Healthcare Technology', path: '/solutions/healthcare', description: 'Medical innovation', icon: Heart },
        { name: 'Financial Services', path: '/services/financial-services', description: 'Fintech solutions', icon: DollarSign },
        { name: 'Manufacturing Intelligence', path: '/services/manufacturing-intelligence', description: 'Smart manufacturing', icon: Cpu },
        { name: 'Retail Technology', path: '/services/retail-technology', description: 'Digital retail transformation', icon: ShoppingCart }
      ]
    },
    {
      title: 'Comprehensive Services 2025',
      icon: Sparkles,
      description: 'Complete portfolio of innovative AI & IT services',
      color: 'from-purple-500 to-cyan-500',
      services: [
        { name: 'All Services Showcase', path: '/comprehensive-services-showcase-2025', description: 'Complete service portfolio', icon: Sparkles },
        { name: 'Pricing & Plans', path: '/comprehensive-pricing-2025', description: 'Transparent pricing information', icon: DollarSign },
        { name: 'AI Financial Advisory', path: '/services/ai-financial-advisory', description: 'AI-powered financial services', icon: Brain },
        { name: 'AI Healthcare Diagnostics', path: '/services/ai-healthcare-diagnostics', description: 'Medical AI solutions', icon: Heart },
        { name: 'Zero Trust Security', path: '/services/zero-trust-security', description: 'Advanced cybersecurity', icon: Shield },
        { name: 'Cloud-Native Development', path: '/services/cloud-native-development', description: 'Modern cloud solutions', icon: Cloud }
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
                        </div>
                      </div>
                    )}
                  </div>
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
              </div>
            ))}
          </nav>

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
      </div>
    </header>
  );
}

export default Header;
