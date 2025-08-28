import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, User, Bell, ChevronDown, Zap, Brain, Shield, Cloud, Rocket, Globe, Cpu, Lock, Heart, Users, Code, Truck, Building, ShoppingCart, BookOpen, MessageCircle, HelpCircle, Star, TrendingUp, Target, Award, Database, Network, Server, Smartphone, FileText, Settings, Key, Globe2, ShieldCheck, Sparkles, Flame, Sun, Moon, Infinity, Atom, BarChart3, PenTool, Eye, GitFork, Gauge, Crown, ArrowRight, Tools, Handshake } from 'lucide-react';
import { ThemeToggle } from '../components/ThemeToggle';
import { ZionLoadingSpinner } from '../components/ui/EnhancedLoadingSpinner';

export function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
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
    { name: 'Services', href: '/services', current: false, hasDropdown: true },
    { name: 'Solutions', href: '/solutions', current: false, hasDropdown: true },
    { name: 'Resources', href: '/resources', current: false, hasDropdown: true },
    { name: 'About', href: '/about', current: false },
    { name: 'Contact', href: '/contact', current: false },
  ];

  const services = [
    {
      category: "AI & Autonomous Systems",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      services: [
        { name: 'AI Autonomous Business Operations', href: '/services/ai-autonomous-operations', description: 'Fully autonomous business platform', featured: true },
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', description: 'Advanced analytics & insights' },
        { name: 'AI Sales Intelligence', href: '/services/ai-sales-intelligence', description: 'Predictive sales optimization' },
        { name: 'AI Customer Support', href: '/services/ai-customer-support', description: '24/7 automated support' }
      ]
    },
    {
      category: "Cybersecurity & Quantum",
      icon: Shield,
      color: "from-green-500 to-emerald-500",
      services: [
        { name: 'Quantum AI Cybersecurity', href: '/services/quantum-ai-cybersecurity', description: 'Unbreakable quantum security', featured: true },
        { name: 'AI Threat Detection', href: '/services/ai-threat-detection', description: 'Advanced security monitoring' },
        { name: 'Zero-Trust Security', href: '/services/zero-trust-security', description: 'Modern security architecture' }
      ]
    },
    {
      category: "Content & Marketing",
      icon: PenTool,
      color: "from-orange-500 to-red-500",
      services: [
        { name: 'AI Content Creation Studio', href: '/services/ai-content-studio', description: 'Multi-format content generation', featured: true },
        { name: 'AI Marketing Automation', href: '/services/ai-marketing', description: 'Intelligent marketing campaigns' },
        { name: 'SEO Optimization AI', href: '/services/ai-seo', description: 'Automated SEO optimization' }
      ]
    },
    {
      category: "Cloud & DevOps",
      icon: Cloud,
      color: "from-blue-500 to-cyan-500",
      services: [
        { name: 'Cloud Infrastructure & DevOps', href: '/services/cloud-devops', description: 'Automated cloud management', featured: true },
        { name: 'Container Orchestration', href: '/services/container-orchestration', description: 'Kubernetes & Docker management' },
        { name: 'Multi-Cloud Management', href: '/services/multi-cloud', description: 'Unified cloud operations' }
      ]
    },
    {
      category: "IoT & Edge Computing",
      icon: Cpu,
      color: "from-indigo-500 to-purple-500",
      services: [
        { name: 'IoT Edge Computing', href: '/services/iot-edge-computing', description: 'Smart device platform', featured: true },
        { name: 'Digital Twin Platform', href: '/services/digital-twin', description: 'Virtual system replicas' },
        { name: 'Smart City Solutions', href: '/services/smart-city', description: 'Urban IoT infrastructure' }
      ]
    },
    {
      category: "Blockchain & Web3",
      icon: Lock,
      color: "from-yellow-500 to-orange-500",
      services: [
        { name: 'Blockchain Web3 Platform', href: '/services/blockchain-web3', description: 'DeFi & DApp development', featured: true },
        { name: 'NFT Marketplace', href: '/services/nft-marketplace', description: 'Digital asset trading' },
        { name: 'Smart Contract Development', href: '/services/smart-contracts', description: 'Blockchain automation' }
      ]
    },
    {
      category: "Healthcare & Life Sciences",
      icon: Heart,
      color: "from-red-500 to-pink-500",
      services: [
        { name: 'AI Healthcare Diagnostics', href: '/services/ai-healthcare', description: 'Medical AI platform', featured: true },
        { name: 'Telemedicine AI', href: '/services/telemedicine-ai', description: 'Remote healthcare' },
        { name: 'Drug Discovery AI', href: '/services/drug-discovery', description: 'Pharmaceutical research' }
      ]
    },
    {
      category: "Financial Technology",
      icon: TrendingUp,
      color: "from-emerald-500 to-green-500",
      services: [
        { name: 'AI Financial Intelligence', href: '/services/ai-financial', description: 'Trading & investment AI', featured: true },
        { name: 'RegTech Solutions', href: '/services/regtech', description: 'Regulatory compliance' },
        { name: 'FinTech Innovation', href: '/services/fintech', description: 'Financial technology' }
      ]
    },
    {
      category: "Education & Training",
      icon: BookOpen,
      color: "from-blue-500 to-indigo-500",
      services: [
        { name: 'AI Education Personalization', href: '/services/ai-education', description: 'Adaptive learning platform', featured: true },
        { name: 'Corporate Training AI', href: '/services/corporate-training', description: 'Employee development' },
        { name: 'Language Learning AI', href: '/services/language-learning', description: 'Multilingual education' }
      ]
    },
    {
      category: "Real Estate & Property",
      icon: Building,
      color: "from-gray-500 to-slate-500",
      services: [
        { name: 'AI Real Estate Intelligence', href: '/services/ai-real-estate', description: 'Market analysis platform', featured: true },
        { name: 'Property Management AI', href: '/services/property-management', description: 'Automated management' },
        { name: 'Investment Analysis AI', href: '/services/investment-analysis', description: 'Real estate investment' }
      ]
    },
    {
      category: "E-commerce & Retail",
      icon: ShoppingCart,
      color: "from-purple-500 to-pink-500",
      services: [
        { name: 'AI E-commerce Optimization', href: '/services/ai-ecommerce', description: 'Sales optimization platform', featured: true },
        { name: 'Retail Analytics AI', href: '/services/retail-analytics', description: 'Store performance insights' },
        { name: 'Inventory Management AI', href: '/services/inventory-management', description: 'Smart inventory control' }
      ]
    },
    {
      category: "Manufacturing & Industry",
      icon: Truck,
      color: "from-orange-500 to-red-500",
      services: [
        { name: 'AI Manufacturing Optimization', href: '/services/ai-manufacturing', description: 'Production optimization', featured: true },
        { name: 'Predictive Maintenance', href: '/services/predictive-maintenance', description: 'Equipment monitoring' },
        { name: 'Quality Control AI', href: '/services/quality-control', description: 'Automated quality assurance' }
      ]
    },
    {
      category: "Logistics & Supply Chain",
      icon: Network,
      color: "from-cyan-500 to-blue-500",
      services: [
        { name: 'AI Logistics Optimization', href: '/services/ai-logistics', description: 'Supply chain optimization', featured: true },
        { name: 'Route Optimization AI', href: '/services/route-optimization', description: 'Transportation efficiency' },
        { name: 'Warehouse Automation', href: '/services/warehouse-automation', description: 'Smart warehouse management' }
      ]
    }
  ];

  const solutions = [
    {
      category: "Enterprise Solutions",
      icon: Building,
      color: "from-slate-500 to-gray-500",
      solutions: [
        { name: 'Digital Transformation', href: '/solutions/digital-transformation', description: 'Complete business modernization' },
        { name: 'Enterprise AI Platform', href: '/solutions/enterprise-ai', description: 'Scalable AI infrastructure' },
        { name: 'Legacy System Migration', href: '/solutions/legacy-migration', description: 'Modern system upgrades' }
      ]
    },
    {
      category: "Startup & SMB Solutions",
      icon: Rocket,
      color: "from-purple-500 to-pink-500",
      solutions: [
        { name: 'Startup Acceleration', href: '/solutions/startup-acceleration', description: 'Rapid business scaling' },
        { name: 'Micro SaaS Products', href: '/solutions/micro-saas', description: 'AI-powered automation tools' },
        { name: 'Growth Hacking AI', href: '/solutions/growth-hacking', description: 'Intelligent growth strategies' }
      ]
    },
    {
      category: "Industry-Specific Solutions",
      icon: Target,
      color: "from-blue-500 to-cyan-500",
      solutions: [
        { name: 'Healthcare Solutions', href: '/solutions/healthcare', description: 'Medical technology innovation' },
        { name: 'Financial Services', href: '/solutions/financial-services', description: 'FinTech transformation' },
        { name: 'Manufacturing 4.0', href: '/solutions/manufacturing-4', description: 'Smart manufacturing' }
      ]
    }
  ];

  const resources = [
    {
      category: "Learning & Development",
      icon: BookOpen,
      color: "from-blue-500 to-indigo-500",
      resources: [
        { name: 'AI Academy', href: '/resources/ai-academy', description: 'AI education & training' },
        { name: 'Webinars', href: '/webinars', description: 'Expert insights & demos' },
        { name: 'White Papers', href: '/white-papers', description: 'Industry research' }
      ]
    },
    {
      category: "Tools & Utilities",
      icon: Tools,
      color: "from-green-500 to-emerald-500",
      resources: [
        { name: 'AI Tools Directory', href: '/resources/ai-tools', description: 'Curated AI solutions' },
        { name: 'API Documentation', href: '/docs/api', description: 'Developer resources' },
        { name: 'Integration Guides', href: '/docs/integrations', description: 'Setup & configuration' }
      ]
    },
    {
      category: "Community & Support",
      icon: Users,
      color: "from-purple-500 to-pink-500",
      resources: [
        { name: 'Developer Community', href: '/community', description: 'Connect with developers' },
        { name: 'Support Center', href: '/support', description: 'Help & troubleshooting' },
        { name: 'FAQ', href: '/faq', description: 'Common questions' }
      ]
    }
  ];

  const quickLinks = [
    { name: 'Marketplace', href: '/marketplace', icon: ShoppingCart },
    { name: 'Blog', href: '/blog', icon: BookOpen },
    { name: 'Request Quote', href: '/request-quote', icon: MessageCircle },
    { name: 'Careers', href: '/careers', icon: Users },
    { name: 'Partners', href: '/partners', icon: Handshake },
    { name: 'Privacy', href: '/privacy', icon: Shield },
    { name: 'Terms', href: '/terms', icon: FileText },
  ];

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
                    <button
                      onClick={() => {
                        if (item.name === 'Services') setServicesDropdownOpen(!servicesDropdownOpen);
                        if (item.name === 'Solutions') setSolutionsDropdownOpen(!solutionsDropdownOpen);
                        if (item.name === 'Resources') setResourcesDropdownOpen(!resourcesDropdownOpen);
                      }}
                      className="text-slate-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-all duration-200 relative group flex items-center space-x-1"
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4 transition-transform duration-200" />
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      className="text-slate-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-all duration-200 relative group"
                    >
                      {item.name}
                    </Link>
                  )}
                  
                  {/* Services Dropdown */}
                  {item.name === 'Services' && servicesDropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-[800px] bg-slate-800/95 backdrop-blur-xl border border-slate-700/50 rounded-xl shadow-2xl shadow-black/50 overflow-hidden">
                      <div className="p-6">
                        <div className="grid grid-cols-2 gap-6">
                          {services.map((category, idx) => (
                            <div key={idx} className="space-y-3">
                              <div className="flex items-center space-x-2">
                                <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                                  <category.icon className="w-4 h-4 text-white" />
                                </div>
                                <h3 className="text-sm font-semibold text-white">{category.category}</h3>
                              </div>
                              <div className="space-y-2">
                                {category.services.map((service, serviceIdx) => (
                                  <Link
                                    key={serviceIdx}
                                    to={service.href}
                                    className={`block p-2 rounded-lg transition-all duration-200 hover:bg-slate-700/50 ${
                                      service.featured ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30' : ''
                                    }`}
                                  >
                                    <div className="flex items-center justify-between">
                                      <div>
                                        <p className={`text-sm font-medium ${service.featured ? 'text-cyan-400' : 'text-slate-300'}`}>
                                          {service.name}
                                        </p>
                                        <p className="text-xs text-slate-400">{service.description}</p>
                                      </div>
                                      {service.featured && <Star className="w-4 h-4 text-cyan-400" />}
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="mt-6 pt-4 border-t border-slate-700/50">
                          <Link
                            to="/services"
                            className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                          >
                            <span>View All Services</span>
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Solutions Dropdown */}
                  {item.name === 'Solutions' && solutionsDropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-[600px] bg-slate-800/95 backdrop-blur-xl border border-slate-700/50 rounded-xl shadow-2xl shadow-black/50 overflow-hidden">
                      <div className="p-6">
                        <div className="space-y-6">
                          {solutions.map((category, idx) => (
                            <div key={idx} className="space-y-3">
                              <div className="flex items-center space-x-2">
                                <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                                  <category.icon className="w-4 h-4 text-white" />
                                </div>
                                <h3 className="text-sm font-semibold text-white">{category.category}</h3>
                              </div>
                              <div className="grid grid-cols-1 gap-2">
                                {category.solutions.map((solution, solutionIdx) => (
                                  <Link
                                    key={solutionIdx}
                                    to={solution.href}
                                    className="block p-3 rounded-lg transition-all duration-200 hover:bg-slate-700/50"
                                  >
                                    <p className="text-sm font-medium text-slate-300">{solution.name}</p>
                                    <p className="text-xs text-slate-400">{solution.description}</p>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="mt-6 pt-4 border-t border-slate-700/50">
                          <Link
                            to="/solutions"
                            className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                          >
                            <span>View All Solutions</span>
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Resources Dropdown */}
                  {item.name === 'Resources' && resourcesDropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-[500px] bg-slate-800/95 backdrop-blur-xl border border-slate-700/50 rounded-xl shadow-2xl shadow-black/50 overflow-hidden">
                      <div className="p-6">
                        <div className="space-y-6">
                          {resources.map((category, idx) => (
                            <div key={idx} className="space-y-3">
                              <div className="flex items-center space-x-2">
                                <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                                  <category.icon className="w-4 h-4 text-white" />
                                </div>
                                <h3 className="text-sm font-semibold text-white">{category.category}</h3>
                              </div>
                              <div className="grid grid-cols-1 gap-2">
                                {category.resources.map((resource, resourceIdx) => (
                                  <Link
                                    key={resourceIdx}
                                    to={resource.href}
                                    className="block p-3 rounded-lg transition-all duration-200 hover:bg-slate-700/50"
                                  >
                                    <p className="text-sm font-medium text-slate-300">{resource.name}</p>
                                    <p className="text-xs text-slate-400">{resource.description}</p>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="mt-6 pt-4 border-t border-slate-700/50">
                          <Link
                            to="/resources"
                            className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                          >
                            <span>View All Resources</span>
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right side - Search, User, Theme */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <form onSubmit={handleSearch} className="hidden md:flex relative">
                <input
                  type="text"
                  placeholder="Search services, solutions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-300 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-200"
                />
                <button
                  type="submit"
                  disabled={isSearching}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 text-slate-400 hover:text-cyan-400 transition-colors duration-200"
                >
                  {isSearching ? <ZionLoadingSpinner size="sm" /> : <Search className="w-4 h-4" />}
                </button>
              </form>

              {/* Quick Actions */}
              <div className="hidden md:flex items-center space-x-2">
                <Link
                  to="/request-quote"
                  className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white text-sm font-medium rounded-lg transition-all duration-200 hover:scale-105"
                >
                  Get Quote
                </Link>
                <Link
                  to="/contact"
                  className="px-4 py-2 border border-slate-600 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 text-sm font-medium rounded-lg transition-all duration-200"
                >
                  Contact
                </Link>
              </div>

              {/* Theme Toggle */}
              <ThemeToggle />

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-slate-400 hover:text-cyan-400 transition-colors duration-200"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-900/95 backdrop-blur-xl border-t border-slate-700/50">
            <div className="container-responsive py-4">
              <div className="space-y-4">
                {/* Mobile Navigation */}
                <div className="space-y-2">
                  {navigation.map((item) => (
                    <div key={item.name}>
                      {item.hasDropdown ? (
                        <div className="space-y-2">
                          <div className="text-sm font-semibold text-slate-400 px-4 py-2">
                            {item.name}
                          </div>
                          {item.name === 'Services' && (
                            <div className="pl-4 space-y-2">
                              {services.slice(0, 6).map((category, idx) => (
                                <div key={idx} className="space-y-1">
                                  <div className="text-xs text-slate-500 px-4 py-1">{category.category}</div>
                                  {category.services.slice(0, 2).map((service, serviceIdx) => (
                                    <Link
                                      key={serviceIdx}
                                      to={service.href}
                                      onClick={() => setMobileMenuOpen(false)}
                                      className="block px-4 py-2 text-sm text-slate-300 hover:text-cyan-400 transition-colors duration-200"
                                    >
                                      {service.name}
                                    </Link>
                                  ))}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <Link
                          to={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-4 py-2 text-sm text-slate-300 hover:text-cyan-400 transition-colors duration-200"
                        >
                          {item.name}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>

                {/* Mobile Quick Links */}
                <div className="pt-4 border-t border-slate-700/50">
                  <div className="grid grid-cols-2 gap-2">
                    {quickLinks.slice(0, 4).map((link) => (
                      <Link
                        key={link.name}
                        to={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center space-x-2 px-4 py-2 text-sm text-slate-300 hover:text-cyan-400 transition-colors duration-200"
                      >
                        <link.icon className="w-4 h-4" />
                        <span>{link.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Mobile Search */}
                <form onSubmit={handleSearch} className="pt-4 border-t border-slate-700/50">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search services, solutions..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg text-slate-300 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-200"
                    />
                    <button
                      type="submit"
                      disabled={isSearching}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 text-slate-400 hover:text-cyan-400 transition-colors duration-200"
                    >
                      {isSearching ? <ZionLoadingSpinner size="sm" /> : <Search className="w-4 h-4" />}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
