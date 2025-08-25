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
  Linkedin,
  Twitter,
  Github,
  Youtube,
  Cloud
} from 'lucide-react';

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
        { name: 'Advanced Cybersecurity Suite', href: '/advanced-cybersecurity-suite' },
        { name: 'Accessibility Auditor', href: '/accessibility-auditor' },
        { name: 'Affiliate Attribution Hub', href: '/affiliate-attribution-hub' }
      ]
    },
    { 
      path: '/ai-solutions', 
      label: 'AI Solutions', 
      icon: '🧠',
      description: 'AI-powered business solutions',
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
      path: '/about', 
      label: 'About', 
      icon: 'ℹ️',
      description: 'Learn about our company'
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
      services: [
        { name: 'AI Autonomous Systems', path: '/services/ai-autonomous-systems', description: 'Advanced autonomous AI systems' },
        { name: 'AI Business Intelligence', path: '/ai-solutions', description: 'Data-driven insights and analytics' },
        { name: 'Machine Learning Solutions', path: '/services/ai-autonomous-systems', description: 'Custom ML models and algorithms' }
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      description: 'Scalable cloud infrastructure and development operations',
      services: [
        { name: 'Cloud Infrastructure', path: '/services/it-infrastructure', description: 'Scalable cloud solutions' },
        { name: 'DevOps Automation', path: '/services/ai-autonomous-systems', description: 'Streamlined development workflows' },
        { name: 'Micro-SaaS Solutions', path: '/services/micro-saas-solutions', description: 'Custom SaaS applications' }
      ]
    },
    {
      title: 'Cybersecurity',
      icon: Shield,
      description: 'Comprehensive security and compliance solutions',
      services: [
        { name: 'Security Audits', path: '/services/cybersecurity', description: 'Comprehensive security assessments' },
        { name: 'SOC2 Compliance', path: '/soc2-compliance-automation', description: 'Automated compliance management' },
        { name: 'Threat Detection', path: '/services/cybersecurity', description: 'Advanced threat monitoring' }
      ]
    },
    {
      title: 'Enterprise Solutions',
      icon: Building,
      description: 'Large-scale business transformation and optimization',
      services: [
        { name: 'Digital Transformation', path: '/digital-transformation', description: 'End-to-end business transformation' },
        { name: 'IT Infrastructure', path: '/services/it-infrastructure', description: 'Modern infrastructure solutions' },
        { name: 'Process Automation', path: '/services/ai-autonomous-systems', description: 'Workflow automation' }
      ]
    }
  ];

  const solutionCategories = [
    {
      title: 'Healthcare',
      icon: Users,
      description: 'Technology solutions for healthcare organizations',
      services: [
        { name: 'Healthcare IT', path: '/solutions/healthcare', description: 'Specialized healthcare solutions' },
        { name: 'Medical AI', path: '/services/ai-autonomous-systems', description: 'AI-powered medical tools' },
        { name: 'Compliance Management', path: '/soc2-compliance-automation', description: 'Healthcare compliance automation' }
      ]
    },
    {
      title: 'Financial Services',
      icon: Target,
      description: 'Fintech and financial technology solutions',
      services: [
        { name: 'Trading Platforms', path: '/quantum-financial-trading', description: 'Advanced trading solutions' },
        { name: 'Risk Management', path: '/services/ai-autonomous-systems', description: 'AI-powered risk assessment' },
        { name: 'Blockchain Solutions', path: '/services/blockchain-supply-chain-transparency', description: 'Distributed ledger technology' }
      ]
    },
    {
      title: 'Manufacturing',
      icon: Cpu,
      description: 'Industry 4.0 and smart manufacturing solutions',
      services: [
        { name: 'IoT Integration', path: '/services/it-infrastructure', description: 'Connected manufacturing systems' },
        { name: 'Predictive Maintenance', path: '/services/ai-autonomous-systems', description: 'AI-powered maintenance' },
        { name: 'Supply Chain Optimization', path: '/services/blockchain-supply-chain-transparency', description: 'Transparent supply chains' }
      ]
    }
  ];

  const socialLinks = [
    { 
      name: 'LinkedIn', 
      url: 'https://www.linkedin.com/company/ziontechgroup', 
      icon: Linkedin,
      color: 'hover:text-blue-600'
    },
    { 
      name: 'Twitter', 
      url: 'https://twitter.com/ziontechgroup', 
      icon: Twitter,
      color: 'hover:text-blue-400'
    },
    { 
      name: 'GitHub', 
      url: 'https://github.com/ziontechgroup', 
      icon: Github,
      color: 'hover:text-gray-600'
    },
    { 
      name: 'YouTube', 
      url: 'https://www.youtube.com/@ziontechgroup', 
      icon: Youtube,
      color: 'hover:text-red-600'
    }
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  const handleDropdownToggle = (item: string) => {
    setActiveDropdown(activeDropdown === item ? null : item);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/95 backdrop-blur-md border-b border-gray-800' 
        : 'bg-gradient-to-r from-black/90 via-gray-900/90 to-blue-900/90 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Zion Tech Group
                </h1>
                <p className="text-xs text-gray-400 hidden lg:block">AI-Powered Technology Solutions</p>
              </div>
            </Link>
          </div>

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
              <div key={item.path} className="relative">
                {item.hasDropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => handleDropdownToggle(item.label)}
                      className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-200 ${
                        isActive(item.path)
                          ? 'text-cyan-400 bg-cyan-400/10 border border-cyan-400/20'
                          : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                      }`}
                    >
                      <span>{item.icon}</span>
                      <span className="font-medium">{item.label}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.label ? 'rotate-180' : ''
                      }`} />
                    </button>
                    
                    {activeDropdown === item.label && (
                      <div className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-md border border-gray-700 rounded-xl shadow-2xl p-4">
                        <div className="grid grid-cols-1 gap-4">
                          {item.label === 'Services' && serviceCategories.map((category) => (
                            <div key={category.title} className="group">
                              <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-200">
                                <category.icon className="w-6 h-6 text-cyan-400" />
                                <div className="flex-1">
                                  <h3 className="font-semibold text-white group-hover:text-cyan-400 transition-colors duration-200">
                                    {category.title}
                                  </h3>
                                  <p className="text-sm text-gray-400">{category.description}</p>
                                </div>
                              </div>
                              <div className="ml-9 space-y-2">
                                {category.services.map((service) => (
                                  <Link
                                    key={service.name}
                                    to={service.path}
                                    className="block p-2 rounded-lg hover:bg-gray-800/30 transition-colors duration-200 group"
                                    onClick={() => setActiveDropdown(null)}
                                  >
                                    <div className="flex items-center justify-between">
                                      <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-200">
                                        {service.name}
                                      </span>
                                      <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors duration-200" />
                                    </div>
                                    <p className="text-xs text-gray-500 mt-1">{service.description}</p>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                          
                          {item.label === 'Solutions' && solutionCategories.map((category) => (
                            <div key={category.title} className="group">
                              <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-200">
                                <category.icon className="w-6 h-6 text-cyan-400" />
                                <div className="flex-1">
                                  <h3 className="font-semibold text-white group-hover:text-cyan-400 transition-colors duration-200">
                                    {category.title}
                                  </h3>
                                  <p className="text-sm text-gray-400">{category.description}</p>
                                </div>
                              </div>
                              <div className="ml-9 space-y-2">
                                {category.services.map((service) => (
                                  <Link
                                    key={service.name}
                                    to={service.path}
                                    className="block p-2 rounded-lg hover:bg-gray-800/30 transition-colors duration-200 group"
                                    onClick={() => setActiveDropdown(null)}
                                  >
                                    <div className="flex items-center justify-between">
                                      <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-200">
                                        {service.name}
                                      </span>
                                      <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors duration-200" />
                                    </div>
                                    <p className="text-xs text-gray-500 mt-1">{service.description}</p>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                          
                          {item.label === 'AI Solutions' && (
                            <div className="space-y-3">
                              <Link
                                to="/ai-solutions"
                                className="block p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-200 group"
                                onClick={() => setActiveDropdown(null)}
                              >
                                <div className="flex items-center space-x-3">
                                  <Brain className="w-6 h-6 text-cyan-400" />
                                  <div>
                                    <h3 className="font-semibold text-white group-hover:text-cyan-400 transition-colors duration-200">
                                      AI Solutions Overview
                                    </h3>
                                    <p className="text-sm text-gray-400">Comprehensive AI capabilities</p>
                                  </div>
                                </div>
                              </Link>
                              <Link
                                to="/ai-matcher"
                                className="block p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-200 group"
                                onClick={() => setActiveDropdown(null)}
                              >
                                <div className="flex items-center space-x-3">
                                  <Target className="w-6 h-6 text-purple-400" />
                                  <div>
                                    <h3 className="font-semibold text-white group-hover:text-purple-400 transition-colors duration-200">
                                      AI Solution Matcher
                                    </h3>
                                    <p className="text-sm text-gray-400">Find the perfect AI solution</p>
                                  </div>
                                </div>
                              </Link>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 ${
                      isActive(item.path)
                        ? 'text-cyan-400 bg-cyan-400/10 border border-cyan-400/20'
                        : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                    }`}
                  >
                    <span>{item.icon}</span>
                    <span className="font-medium">{item.label}</span>
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Right side - Contact & Social */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Contact Info */}
            <div className="flex items-center space-x-4 text-sm text-gray-300">
              <a 
                href="tel:+13024640950" 
                className="flex items-center space-x-1 hover:text-cyan-400 transition-colors duration-200"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden xl:inline">+1 (302) 464-0950</span>
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com" 
                className="flex items-center space-x-1 hover:text-cyan-400 transition-colors duration-200"
              >
                <Mail className="w-4 h-4" />
                <span className="hidden xl:inline">kleber@ziontechgroup.com</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/70 transition-all duration-200 ${social.color}`}
                  aria-label={`Visit our ${social.name} page`}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors duration-200"
              aria-label="Open navigation menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </header>
  );
}

export default Header;