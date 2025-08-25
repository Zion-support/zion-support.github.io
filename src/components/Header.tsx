import { useState, useEffect } from 'react';
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
  Sparkles,
  Lock,
  Database,
  Network,
  Code,
  BarChart3,
  Lightbulb,
  Clock,
  Eye,
  Cloud,
  DollarSign,
  ShoppingCart,
  Heart,
  Palette,
  ChevronRight,
  ExternalLink
} from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
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

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeDropdown && !(event.target as Element).closest('.dropdown-container')) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activeDropdown]);

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
        { name: 'AI Autonomous Systems', path: '/services/ai-autonomous-systems', description: 'Advanced autonomous AI systems', icon: Brain, isNew: false },
        { name: 'AI Workflow Automation', path: '/services/ai-workflow-automation', description: 'Intelligent process automation', icon: Brain, isNew: false },
        { name: 'AI Customer Intelligence', path: '/services/ai-customer-intelligence', description: 'Customer behavior insights', icon: Users, isNew: false },
        { name: 'AI Predictive Analytics', path: '/services/ai-predictive-analytics', description: 'Future-focused analytics', icon: BarChart3, isNew: false },
        { name: 'AI Research Assistant', path: '/ai-autonomous-research-assistant', description: 'AI-powered research automation', icon: Brain, isNew: true },
        { name: 'AI Business Manager', path: '/ai-autonomous-business-manager', description: 'Intelligent business management', icon: Brain, isNew: true },
        { name: 'AI Business Manager 2029', path: '/ai-autonomous-business-manager-2029', description: 'Future-ready business management', icon: Brain, isNew: true },
        { name: 'AI Business Platform', path: '/ai-autonomous-business-platform', description: 'Comprehensive business platform', icon: Brain, isNew: true },
        { name: 'AI Business Platform 2026', path: '/ai-autonomous-business-platform-2026', description: 'Next-gen business platform', icon: Brain, isNew: true },
        { name: 'AI Code Review', path: '/ai-autonomous-code-review', description: 'Intelligent code review automation', icon: Code, isNew: true },
        { name: 'AI Creative Director', path: '/ai-autonomous-creative-director', description: 'AI-powered creative content generation', icon: Palette, isNew: true },
        { name: 'AI Business Intelligence', path: '/services/ai-business-intelligence', description: 'Advanced analytics and insights', icon: BarChart3, isNew: false },
        { name: 'AI Marketing Automation', path: '/services/ai-marketing-automation', description: 'Smart marketing optimization', icon: Target, isNew: false },
        { name: 'AI HR & Recruitment', path: '/services/ai-hr-recruitment', description: 'Intelligent talent management', icon: Users, isNew: false },
        { name: 'AI Legal Tech', path: '/services/ai-legal-tech', description: 'Automated legal processes', icon: Shield, isNew: false },
        { name: 'AI Healthcare Analytics', path: '/solutions/healthcare', description: 'Patient care optimization', icon: Heart, isNew: false }
      ]
    },
    {
      title: 'Quantum Technology',
      icon: Brain,
      description: 'Next-generation quantum computing solutions',
      color: 'from-blue-500 to-cyan-500',
      services: [
        { name: 'Quantum Neural Networks', path: '/quantum-neural-network-platform', description: 'Quantum-powered neural networks', icon: Brain, isNew: true },
        { name: 'Quantum Computing', path: '/services/quantum-technology', description: 'Quantum computing platforms', icon: Cpu, isNew: false },
        { name: 'Quantum-Safe Security', path: '/services/quantum-security', description: 'Future-proof quantum security', icon: Shield, isNew: false }
      ]
    },
    {
      title: 'Business Operations',
      icon: Building,
      description: 'Streamlined business process automation',
      color: 'from-green-500 to-emerald-500',
      services: [
        { name: 'Autonomous Business Platform', path: '/autonomous-business-operations-platform', description: 'Self-operating business systems', icon: Building, isNew: true },
        { name: 'AI Asset Management', path: '/ai-powered-it-asset-management', description: 'Intelligent IT asset management', icon: Database, isNew: true },
        { name: 'Business Intelligence', path: '/services/ai-business-intelligence', description: 'Advanced business analytics', icon: BarChart3, isNew: false }
      ]
    },
    {
      title: 'Cybersecurity',
      icon: Shield,
      description: 'Comprehensive security and compliance solutions',
      color: 'from-red-500 to-pink-500',
      services: [
        { name: 'Cybersecurity Services', path: '/services/cybersecurity', description: 'Complete security solutions', icon: Shield, isNew: false },
        { name: 'SOC2 Compliance Automation', path: '/soc2-compliance-automation', description: 'Automated compliance management', icon: Lock, isNew: true },
        { name: 'Security Assessment', path: '/services/security-assessment', description: 'Security audit and testing', icon: Shield, isNew: false },
        { name: 'Compliance & Audit', path: '/services/compliance-audit', description: 'Regulatory compliance support', icon: Lock, isNew: false },
        { name: 'Threat Detection', path: '/services/threat-detection', description: 'Real-time security monitoring', icon: Shield, isNew: false }
      ]
    },
    {
      title: 'Cloud & Infrastructure',
      icon: Cpu,
      description: 'Scalable cloud solutions and infrastructure management',
      color: 'from-blue-500 to-indigo-500',
      services: [
        { name: 'Quantum-Secure Cloud', path: '/services/quantum-secure-cloud', description: 'Future-proof cloud security', icon: Shield, isNew: false },
        { name: 'Cloud DevOps', path: '/cloud-devops', description: 'Cloud development and operations', icon: Cpu, isNew: false },
        { name: 'IT Infrastructure', path: '/services/it-infrastructure', description: 'Complete IT infrastructure solutions', icon: Network, isNew: false },
        { name: '5G Enterprise Solutions', path: '/5g-enterprise-solutions', description: 'High-speed 5G connectivity', icon: Network, isNew: true },
        { name: 'Cloud Migration', path: '/services/cloud-migration', description: 'Seamless cloud transition', icon: Cloud, isNew: false },
        { name: 'Network Infrastructure', path: '/services/network-infrastructure', description: 'Robust network solutions', icon: Network, isNew: false },
        { name: 'Managed IT Services', path: '/services/managed-it-services', description: '24/7 IT support', icon: Clock, isNew: false },
        { name: 'DevOps Automation', path: '/services/devops-automation', description: 'Streamlined development', icon: Code, isNew: false }
      ]
    },
    {
      title: 'Emerging Technologies',
      icon: Rocket,
      description: 'Cutting-edge solutions for tomorrow\'s challenges',
      color: 'from-purple-500 to-violet-500',
      services: [
        { name: 'Blockchain Solutions', path: '/services/blockchain-solutions', description: 'Decentralized applications', icon: Code, isNew: false },
        { name: 'IoT Platforms', path: '/services/iot-platforms', description: 'Connected device management', icon: Network, isNew: false },
        { name: 'Quantum Computing', path: '/services/quantum-computing', description: 'Next-generation computing', icon: Cpu, isNew: false },
        { name: 'AR/VR Solutions', path: '/services/ar-vr-solutions', description: 'Immersive experiences', icon: Eye, isNew: false }
      ]
    },
    {
      title: 'Industry Solutions',
      icon: Building,
      description: 'Tailored solutions for specific industries',
      color: 'from-orange-500 to-yellow-500',
      services: [
        { name: 'Healthcare Technology', path: '/solutions/healthcare', description: 'Medical innovation', icon: Heart, isNew: false },
        { name: 'Financial Services', path: '/services/financial-services', description: 'Fintech solutions', icon: DollarSign, isNew: false },
        { name: 'Manufacturing Intelligence', path: '/services/manufacturing-intelligence', description: 'Smart manufacturing', icon: Cpu, isNew: false },
        { name: 'Retail Technology', path: '/services/retail-technology', description: 'Digital retail transformation', icon: ShoppingCart, isNew: false }
      ]
    }
  ];

  const solutionCategories = [
    {
      title: 'Enterprise Solutions',
      icon: Building,
      description: 'Large-scale business transformation',
      color: 'from-blue-500 to-indigo-500',
      solutions: [
        { name: 'Digital Transformation', path: '/digital-transformation', description: 'Complete business modernization', icon: Rocket, isNew: false },
        { name: 'Enterprise AI', path: '/solutions/enterprise', description: 'AI-powered enterprise solutions', icon: Brain, isNew: false },
        { name: 'Data Analytics', path: '/services/data-analytics', description: 'Business intelligence platform', icon: BarChart3, isNew: false }
      ]
    },
    {
      title: 'SMB Solutions',
      icon: Users,
      description: 'Scalable solutions for growing businesses',
      color: 'from-green-500 to-emerald-500',
      solutions: [
        { name: 'Micro SAAS', path: '/services/micro-saas-solutions', description: 'Custom software solutions', icon: Code, isNew: false },
        { name: 'Cloud Migration', path: '/cloud-devops', description: 'Affordable cloud solutions', icon: Cloud, isNew: false },
        { name: 'IT Support', path: '/services/it-support', description: 'Managed IT services', icon: Clock, isNew: false }
      ]
    },
    {
      title: 'Healthcare Solutions',
      icon: Heart,
      description: 'Technology solutions for healthcare',
      color: 'from-red-500 to-pink-500',
      solutions: [
        { name: 'Healthcare AI', path: '/solutions/healthcare', description: 'AI-powered healthcare solutions', icon: Brain, isNew: false },
        { name: 'Patient Management', path: '/services/patient-management', description: 'Comprehensive patient care', icon: Users, isNew: false },
        { name: 'Medical Analytics', path: '/services/medical-analytics', description: 'Healthcare data insights', icon: BarChart3, isNew: false }
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

  const renderServiceCard = (service: any, categoryColor: string) => (
    <Link
      key={service.path}
      to={service.path}
      className="group p-4 rounded-lg hover:bg-gray-800/50 transition-all duration-200 border border-transparent hover:border-gray-700"
    >
      <div className="flex items-start space-x-3">
        <div className={`p-2 rounded-lg bg-gradient-to-r ${categoryColor} text-white`}>
          <service.icon className="w-4 h-4" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2">
            <h4 className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors">
              {service.name}
            </h4>
            {service.isNew && (
              <span className="px-2 py-1 text-xs bg-green-500/20 text-green-400 rounded-full border border-green-500/30">
                New
              </span>
            )}
          </div>
          <p className="text-xs text-gray-400 mt-1 line-clamp-2">{service.description}</p>
        </div>
        <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors" />
      </div>
    </Link>
  );

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-md border-b border-gray-800/50' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-xl lg:text-2xl">Z</span>
            </div>
            <div className="hidden sm:block">
              <div className="text-xl lg:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                Zion Tech Group
              </div>
              <div className="text-xs lg:text-sm text-gray-400">AI & Technology Solutions</div>
            </div>
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <form onSubmit={handleSearch} className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search services, solutions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                className={`w-full pl-10 pr-4 py-2 bg-gray-800/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-sm transition-all duration-200 ${
                  isSearchFocused ? 'border-cyan-500 bg-gray-800/70' : 'border-gray-700'
                }`}
              />
              {searchQuery && (
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </form>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navigationItems.map((item) => (
              <div key={item.path} className="relative dropdown-container">
                {item.hasDropdown ? (
                  <button
                    onClick={() => handleDropdownToggle(item.path)}
                    className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-200 py-2"
                  >
                    <span>{item.label}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === item.path ? 'rotate-180' : ''
                    }`} />
                  </button>
                ) : (
                  <Link
                    to={item.path}
                    className="text-gray-300 hover:text-white transition-colors duration-200 py-2"
                  >
                    {item.label}
                  </Link>
                )}

                {/* Services Dropdown */}
                {item.path === '/services' && activeDropdown === '/services' && (
                  <div className="absolute top-full left-0 mt-2 w-[800px] bg-gray-900/95 backdrop-blur-xl border border-gray-800 rounded-xl shadow-2xl p-6">
                    <div className="grid grid-cols-2 gap-6">
                      {serviceCategories.map((category) => (
                        <div key={category.title} className="space-y-3">
                          <div className="flex items-center space-x-2">
                            <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color} text-white`}>
                              <category.icon className="w-4 h-4" />
                            </div>
                            <h3 className="text-sm font-semibold text-white">{category.title}</h3>
                          </div>
                          <p className="text-xs text-gray-400">{category.description}</p>
                          <div className="space-y-2">
                            {category.services.slice(0, 4).map((service) => 
                              renderServiceCard(service, category.color)
                            )}
                            {category.services.length > 4 && (
                              <Link
                                to="/services"
                                className="text-xs text-cyan-400 hover:text-cyan-300 transition-colors flex items-center space-x-1"
                              >
                                <span>View all {category.services.length} services</span>
                                <ExternalLink className="w-3 h-3" />
                              </Link>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Solutions Dropdown */}
                {item.path === '/solutions/enterprise' && activeDropdown === '/solutions/enterprise' && (
                  <div className="absolute top-full left-0 mt-2 w-[600px] bg-gray-900/95 backdrop-blur-xl border border-gray-800 rounded-xl shadow-2xl p-6">
                    <div className="space-y-6">
                      {solutionCategories.map((category) => (
                        <div key={category.title} className="space-y-3">
                          <div className="flex items-center space-x-2">
                            <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color} text-white`}>
                              <category.icon className="w-4 h-4" />
                            </div>
                            <h3 className="text-sm font-semibold text-white">{category.title}</h3>
                          </div>
                          <p className="text-xs text-gray-400">{category.description}</p>
                          <div className="space-y-2">
                            {category.solutions.map((solution) => (
                              <Link
                                key={solution.path}
                                to={solution.path}
                                className="group flex items-center justify-between p-3 rounded-lg hover:bg-gray-800/50 transition-all duration-200"
                              >
                                <div className="flex items-center space-x-3">
                                  <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color} text-white`}>
                                    <solution.icon className="w-4 h-4" />
                                  </div>
                                  <div>
                                    <h4 className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors">
                                      {solution.name}
                                    </h4>
                                    <p className="text-xs text-gray-400">{solution.description}</p>
                                  </div>
                                </div>
                                <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors" />
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/contact"
              className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 font-medium text-sm"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-white transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-gray-900/95 backdrop-blur-xl border-t border-gray-800">
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search services, solutions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </form>

              {/* Mobile Navigation */}
              <nav className="space-y-2">
                {navigationItems.map((item) => (
                  <div key={item.path}>
                    {item.hasDropdown ? (
                      <button
                        onClick={() => handleDropdownToggle(item.path)}
                        className="w-full flex items-center justify-between p-3 text-left text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors"
                      >
                        <span>{item.label}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === item.path ? 'rotate-180' : ''
                        }`} />
                      </button>
                    ) : (
                      <Link
                        to={item.path}
                        className="block p-3 text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-colors"
                      >
                        {item.label}
                      </Link>
                    )}

                    {/* Mobile Dropdowns */}
                    {item.path === '/services' && activeDropdown === '/services' && (
                      <div className="ml-4 mt-2 space-y-2">
                        {serviceCategories.map((category) => (
                          <div key={category.title} className="space-y-2">
                            <h4 className="text-sm font-medium text-cyan-400 px-3 py-1">{category.title}</h4>
                            {category.services.slice(0, 3).map((service) => (
                              <Link
                                key={service.path}
                                to={service.path}
                                className="block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800/30 rounded transition-colors"
                              >
                                {service.name}
                                {service.isNew && (
                                  <span className="ml-2 px-2 py-1 text-xs bg-green-500/20 text-green-400 rounded-full">
                                    New
                                  </span>
                                )}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}

                    {item.path === '/solutions/enterprise' && activeDropdown === '/solutions/enterprise' && (
                      <div className="ml-4 mt-2 space-y-2">
                        {solutionCategories.map((category) => (
                          <div key={category.title} className="space-y-2">
                            <h4 className="text-sm font-medium text-cyan-400 px-3 py-1">{category.title}</h4>
                            {category.solutions.map((solution) => (
                              <Link
                                key={solution.path}
                                to={solution.path}
                                className="block px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800/30 rounded transition-colors"
                              >
                                {solution.name}
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </nav>

              {/* Mobile CTA */}
              <div className="pt-4 border-t border-gray-800">
                <Link
                  to="/contact"
                  className="block w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-center rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 font-medium"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </header>
  );
}

export default Header;
