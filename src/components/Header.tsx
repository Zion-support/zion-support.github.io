import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, Brain, Users, BarChart3, Code, Palette, Target, Shield, Heart, Database, Building, Cpu, Network, Cloud, Clock, Rocket, Globe, Lock } from 'lucide-react';
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
      path: '/ai-solutions', 
      label: 'AI Solutions', 
      icon: '🧠',
      description: 'Advanced AI and autonomous systems',
      hasDropdown: true
    },
    { 
      path: '/case-studies', 
      label: 'Case Studies', 
      icon: '📊',
      description: 'Success stories and results'
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
      path: '/help', 
      label: 'Help', 
      icon: '❓',
      description: 'Support and documentation'
    },
    { 
      path: '/contact', 
      label: 'Contact', 
      icon: '📞',
      description: 'Get in touch with us'
    }
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
      title: 'AI Autonomous Systems',
      icon: Brain,
      description: 'Self-operating AI systems for business automation',
      color: 'from-purple-500 to-pink-500',
      services: [
        { name: 'AI Autonomous Data', path: '/ai-autonomous-data', description: 'Intelligent data management', icon: Database },
        { name: 'AI Autonomous Decision Engine', path: '/ai-autonomous-decision-engine', description: 'Autonomous decision making', icon: Target },
        { name: 'AI Autonomous Research', path: '/ai-autonomous-research-assistant', description: 'AI-powered research automation', icon: Search },
        { name: 'AI Autonomous Business Platform', path: '/ai-autonomous-business-platform', description: 'Complete business automation', icon: Building },
        { name: 'AI Autonomous Code Review', path: '/ai-autonomous-code-review', description: 'Automated code analysis', icon: Code },
        { name: 'AI Autonomous Creative Director', path: '/ai-autonomous-creative-director', description: 'AI content creation', icon: Palette }
      ]
    },
    {
      title: 'AI Business Intelligence',
      icon: BarChart3,
      description: 'Advanced analytics and business insights',
      color: 'from-blue-500 to-cyan-500',
      services: [
        { name: 'AI Business Intelligence Elite 2026', path: '/ai-business-intelligence-elite-2026', description: 'Premium BI solutions', icon: BarChart3 },
        { name: 'AI Business Intelligence Suite 2029', path: '/ai-business-intelligence-suite-2029', description: 'Comprehensive BI platform', icon: BarChart3 },
        { name: 'AI Predictive Analytics', path: '/services/ai-predictive-analytics', description: 'Future-focused insights', icon: BarChart3 },
        { name: 'AI Market Intelligence', path: '/services/ai-market-intelligence', description: 'Market trend analysis', icon: Globe }
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
        { name: 'Autonomous Business Platform', path: '/autonomous-business-operations-platform', description: 'Self-operating business systems', icon: Building },
        { name: 'AI Asset Management', path: '/ai-powered-it-asset-management', description: 'Intelligent IT asset management', icon: Database },
        { name: 'Business Intelligence', path: '/services/ai-business-intelligence', description: 'Advanced business analytics', icon: BarChart3 }
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
      color: 'from-orange-500 to-red-500',
      services: [
        { name: 'Blockchain Solutions', path: '/services/blockchain', description: 'Decentralized technology solutions', icon: Shield },
        { name: 'IoT & Edge Computing', path: '/services/iot-edge', description: 'Connected device ecosystems', icon: Network },
        { name: 'Extended Reality (XR)', path: '/services/extended-reality', description: 'Immersive technology solutions', icon: Palette },
        { name: 'Green Technology', path: '/services/green-tech', description: 'Sustainable technology solutions', icon: Rocket },
        { name: 'Digital Twins', path: '/services/digital-twins', description: 'Virtual replica technology', icon: Building }
      ]
    }
  ];

  const solutionCategories = [
    {
      title: 'Enterprise Solutions',
      icon: Building,
      description: 'Large-scale business transformation',
      color: 'from-blue-600 to-indigo-600',
      solutions: [
        { name: 'Enterprise AI Platform', path: '/solutions/enterprise/ai-platform', description: 'Comprehensive AI solutions for enterprises' },
        { name: 'Digital Transformation', path: '/solutions/enterprise/digital-transformation', description: 'End-to-end digital modernization' },
        { name: 'Enterprise Security', path: '/solutions/enterprise/security', description: 'Enterprise-grade security solutions' }
      ]
    },
    {
      title: 'Healthcare Solutions',
      icon: Heart,
      description: 'AI-powered healthcare innovation',
      color: 'from-green-600 to-emerald-600',
      solutions: [
        { name: 'AI Healthcare Analytics', path: '/solutions/healthcare/analytics', description: 'Patient care optimization' },
        { name: 'Healthcare Automation', path: '/solutions/healthcare/automation', description: 'Streamlined healthcare processes' },
        { name: 'Medical AI', path: '/solutions/healthcare/medical-ai', description: 'AI-powered medical diagnostics' }
      ]
    },
    {
      title: 'Financial Solutions',
      icon: BarChart3,
      description: 'Fintech and financial services',
      color: 'from-yellow-600 to-orange-600',
      solutions: [
        { name: 'AI Trading Systems', path: '/solutions/financial/trading', description: 'Intelligent trading automation' },
        { name: 'Risk Management', path: '/solutions/financial/risk', description: 'AI-powered risk assessment' },
        { name: 'Financial Analytics', path: '/solutions/financial/analytics', description: 'Advanced financial insights' }
      ]
    },
    {
      title: 'Manufacturing Solutions',
      icon: Cpu,
      description: 'Industry 4.0 and smart manufacturing',
      color: 'from-gray-600 to-slate-600',
      solutions: [
        { name: 'Smart Factory', path: '/solutions/manufacturing/smart-factory', description: 'Connected manufacturing systems' },
        { name: 'Predictive Maintenance', path: '/solutions/manufacturing/maintenance', description: 'AI-powered equipment monitoring' },
        { name: 'Quality Control', path: '/solutions/manufacturing/quality', description: 'Automated quality assurance' }
      ]
    },
    {
      title: 'Retail Solutions',
      icon: Target,
      description: 'E-commerce and retail innovation',
      color: 'from-pink-600 to-rose-600',
      solutions: [
        { name: 'AI Customer Intelligence', path: '/solutions/retail/customer-intelligence', description: 'Customer behavior insights' },
        { name: 'Retail Automation', path: '/solutions/retail/automation', description: 'Streamlined retail operations' },
        { name: 'E-commerce AI', path: '/solutions/retail/ecommerce-ai', description: 'AI-powered online shopping' }
      ]
    },
    {
      title: 'Government Solutions',
      icon: Shield,
      description: 'Public sector digital transformation',
      color: 'from-indigo-600 to-purple-600',
      solutions: [
        { name: 'Digital Government', path: '/solutions/government/digital', description: 'Modern government services' },
        { name: 'Public Safety AI', path: '/solutions/government/safety', description: 'AI-powered public safety' },
        { name: 'Government Analytics', path: '/solutions/government/analytics', description: 'Data-driven governance' }
      ]
    }
  ];

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to search results or services page
      window.location.href = `/services?search=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  return (
    <header className={`bg-background/80 backdrop-blur-md border-b border-border sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'shadow-lg bg-background/95' : ''
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-zion-blue to-zion-purple rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-zion-blue to-zion-purple bg-clip-text text-transparent">
              Zion Tech Group
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <div key={item.path} className="relative">
                {item.hasDropdown ? (
                  <button
                    onClick={() => handleDropdownToggle(item.path)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-2 ${
                      location.pathname === item.path
                        ? 'text-zion-cyan bg-zion-cyan/10'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    }`}
                  >
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </button>
                ) : (
                  <Link
                    to={item.path}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-2 ${
                      location.pathname === item.path
                        ? 'text-zion-cyan bg-zion-cyan/10'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    }`}
                  >
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </Link>
                )}

                {/* Services Dropdown */}
                {item.hasDropdown && activeDropdown === item.path && item.path === '/services' && (
                  <div className="absolute top-full left-0 mt-2 w-96 bg-background/95 backdrop-blur-md border border-border rounded-xl shadow-2xl p-6 z-50">
                    <div className="grid grid-cols-1 gap-4">
                      {serviceCategories.map((category, index) => (
                        <div key={index} className="group">
                          <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                            <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color}`}>
                              <category.icon className="h-5 w-5 text-white" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-foreground group-hover:text-zion-cyan transition-colors">
                                {category.title}
                              </h4>
                              <p className="text-sm text-muted-foreground">{category.description}</p>
                            </div>
                          </div>
                          <div className="ml-11 space-y-1">
                            {category.services.slice(0, 3).map((service, serviceIndex) => (
                              <Link
                                key={serviceIndex}
                                to={service.path}
                                className="block p-2 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-muted/30 transition-colors"
                                onClick={() => setActiveDropdown(null)}
                              >
                                {service.name}
                              </Link>
                            ))}
                            {category.services.length > 3 && (
                              <Link
                                to={category.services[0].path.replace('/services/', '/services')}
                                className="block p-2 rounded-md text-sm text-zion-cyan hover:text-zion-cyan-light transition-colors font-medium"
                                onClick={() => setActiveDropdown(null)}
                              >
                                View all {category.title} services →
                              </Link>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Solutions Dropdown */}
                {item.hasDropdown && activeDropdown === item.path && item.path === '/solutions/enterprise' && (
                  <div className="absolute top-full left-0 mt-2 w-96 bg-background/95 backdrop-blur-md border border-border rounded-xl shadow-2xl p-6 z-50">
                    <div className="grid grid-cols-1 gap-4">
                      {solutionCategories.map((category, index) => (
                        <div key={index} className="group">
                          <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                            <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color}`}>
                              <category.icon className="h-5 w-5 text-white" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-foreground group-hover:text-zion-cyan transition-colors">
                                {category.title}
                              </h4>
                              <p className="text-sm text-muted-foreground">{category.description}</p>
                            </div>
                          </div>
                          <div className="ml-11 space-y-1">
                            {category.solutions.map((solution, solutionIndex) => (
                              <Link
                                key={solutionIndex}
                                to={solution.path}
                                className="block p-2 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-muted/30 transition-colors"
                                onClick={() => setActiveDropdown(null)}
                              >
                                {solution.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* AI Solutions Dropdown */}
                {item.hasDropdown && activeDropdown === item.path && item.path === '/ai-solutions' && (
                  <div className="absolute top-full left-0 mt-2 w-96 bg-background/95 backdrop-blur-md border border-border rounded-xl shadow-2xl p-6 z-50">
                    <div className="space-y-4">
                      <div className="text-center">
                        <h3 className="text-lg font-bold text-foreground mb-2">AI & Autonomous Systems</h3>
                        <p className="text-sm text-muted-foreground">Transform your business with intelligent automation</p>
                      </div>
                      <div className="grid grid-cols-1 gap-3">
                        {serviceCategories.slice(0, 3).map((category, index) => (
                          <Link
                            key={index}
                            to={category.services[0].path}
                            className="p-3 rounded-lg border border-border hover:border-zion-cyan/50 hover:bg-muted/30 transition-all duration-200 group"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <div className="flex items-center space-x-3">
                              <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color}`}>
                                <category.icon className="h-5 w-5 text-white" />
                              </div>
                              <div>
                                <h4 className="font-semibold text-foreground group-hover:text-zion-cyan transition-colors">
                                  {category.title}
                                </h4>
                                <p className="text-sm text-muted-foreground">{category.description}</p>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                      <div className="text-center pt-2">
                        <Link
                          to="/services"
                          className="text-zion-cyan hover:text-zion-cyan-light font-medium transition-colors"
                          onClick={() => setActiveDropdown(null)}
                        >
                          Explore all AI solutions →
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right side - Search, Theme Toggle and CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search Bar */}
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 pl-10 pr-4 py-2 bg-muted/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan transition-all duration-200"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </form>

            <ThemeToggle />
            <Link
              to="/contact"
              className="bg-gradient-to-r from-zion-purple to-zion-cyan hover:from-zion-purple-light hover:to-zion-cyan-light text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/30 hover:scale-105"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95 backdrop-blur-md border-t border-border">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="relative mb-4">
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-muted/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan transition-all duration-200"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              </form>

              {navigationItems.map((item) => (
                <div key={item.path}>
                  {item.hasDropdown ? (
                    <button
                      onClick={() => handleDropdownToggle(item.path)}
                      className={`w-full text-left px-3 py-3 rounded-lg text-base font-medium transition-colors flex items-center justify-between ${
                        location.pathname === item.path
                          ? 'text-zion-cyan bg-zion-cyan/10'
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <span>{item.icon}</span>
                        <span>{item.label}</span>
                      </div>
                      <span className="text-muted-foreground">
                        {activeDropdown === item.path ? '−' : '+'}
                      </span>
                    </button>
                  ) : (
                    <Link
                      to={item.path}
                      className={`block px-3 py-3 rounded-lg text-base font-medium transition-colors flex items-center space-x-3 ${
                        location.pathname === item.path
                          ? 'text-zion-cyan bg-zion-cyan/10'
                          : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span>{item.icon}</span>
                      <span>{item.label}</span>
                    </Link>
                  )}

                  {/* Mobile Dropdown Content */}
                  {item.hasDropdown && activeDropdown === item.path && (
                    <div className="ml-6 mt-2 space-y-1">
                      {item.path === '/services' && serviceCategories.slice(0, 3).map((category, index) => (
                        <Link
                          key={index}
                          to={category.services[0].path}
                          className="block px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-muted/30 transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {category.title}
                        </Link>
                      ))}
                      {item.path === '/solutions/enterprise' && solutionCategories.slice(0, 3).map((category, index) => (
                        <Link
                          key={index}
                          to={category.solutions[0].path}
                          className="block px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-muted/30 transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {category.title}
                        </Link>
                      ))}
                      {item.path === '/ai-solutions' && serviceCategories.slice(0, 3).map((category, index) => (
                        <Link
                          key={index}
                          to={category.services[0].path}
                          className="block px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-muted/30 transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {category.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="pt-4 flex items-center justify-between">
                <ThemeToggle />
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-zion-purple to-zion-cyan hover:from-zion-purple-light hover:to-zion-cyan-light text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/30"
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