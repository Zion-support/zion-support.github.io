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
        { name: 'AI Business Intelligence', href: '/ai-business-intelligence' },
        { name: 'AI Marketing Automation', href: '/ai-marketing-automation' },
        { name: 'IoT Management Platform', href: '/iot-management-platform' },
        { name: 'Blockchain DeFi Solutions', href: '/blockchain-defi-solutions' }
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
        { name: 'AI Consciousness Evolution Platform', href: '/ai-consciousness-evolution-platform' }
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