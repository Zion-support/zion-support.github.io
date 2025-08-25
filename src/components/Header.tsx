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
  Layers,
  Code,
  Database,
  Lock,
  Cloud,
  BarChart3,
  Smartphone,
  Server,
  Network,
  ShieldCheck,
  Globe2,
  CpuIcon,
  BrainCircuit,
  Bot,
  SparklesIcon,
  ShoppingBag
} from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
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

  const serviceCategories = [
    {
      title: 'AI & Machine Learning',
      icon: BrainCircuit,
      description: 'Intelligent solutions powered by artificial intelligence',
      services: [
        { name: 'AI Autonomous Systems', path: '/services/ai-autonomous-systems', description: 'Advanced autonomous AI systems' },
        { name: 'AI Research Assistant', path: '/ai-autonomous-research-assistant', description: 'AI-powered research platform' },
        { name: 'Quantum Neural Networks', path: '/quantum-neural-network-platform', description: 'Quantum computing with neural networks' },
        { name: 'Autonomous Business Platform', path: '/autonomous-business-operations-platform', description: 'AI-powered business automation' },
        { name: 'AI Asset Management', path: '/ai-powered-it-asset-management', description: 'Intelligent IT asset management' },
        { name: 'AI Workflow Automation', path: '/ai-workflow-automation', description: 'AI-powered workflow automation' }
      ]
    },
    {
      title: 'Cybersecurity & Security',
      icon: ShieldCheck,
      description: 'Advanced security solutions for modern threats',
      services: [
        { name: 'Cybersecurity Suite', path: '/services/cybersecurity', description: 'Comprehensive security solutions' },
        { name: 'SOC2 Compliance', path: '/soc2-compliance-automation', description: 'Automated compliance automation' },
        { name: 'Threat Intelligence', path: '/services/cybersecurity', description: 'AI-powered threat detection' },
        { name: 'Zero Trust Security', path: '/services/cybersecurity', description: 'Continuous verification platform' },
        { name: 'Incident Response', path: '/services/cybersecurity', description: 'Automated incident response' },
        { name: 'Security Testing', path: '/services/cybersecurity', description: 'Automated security testing' }
      ]
    },
    {
      title: 'Blockchain & Web3',
      icon: Layers,
      description: 'Next-generation blockchain and decentralized solutions',
      services: [
        { name: 'Smart Contracts', path: '/services', description: 'Enterprise blockchain platform' },
        { name: 'DeFi Trading', path: '/services', description: 'AI-powered DeFi optimization' },
        { name: 'NFT Marketplace', path: '/services', description: 'AI-curated NFT platform' },
        { name: 'Decentralized Identity', path: '/services', description: 'Self-sovereign identity' },
        { name: 'Blockchain Governance', path: '/services', description: 'Transparent governance platform' }
      ]
    },
    {
      title: 'Cloud & Infrastructure',
      icon: Cloud,
      description: 'Scalable cloud solutions and infrastructure management',
      services: [
        { name: 'Cloud DevOps', path: '/cloud-devops', description: 'Automated cloud operations' },
        { name: 'IT Infrastructure', path: '/services/it-infrastructure', description: 'Enterprise infrastructure solutions' },
        { name: 'Storage Optimization', path: '/services', description: 'AI-powered storage management' },
        { name: 'Specialized IT', path: '/services/specialized-it-infrastructure', description: 'Custom infrastructure solutions' }
      ]
    },
    {
      title: 'Data & Analytics',
      icon: BarChart3,
      description: 'Data-driven insights and analytics platforms',
      services: [
        { name: 'IoT Analytics', path: '/services', description: 'IoT data management platform' },
        { name: 'Business Intelligence', path: '/services', description: 'Advanced analytics solutions' },
        { name: 'Data Processing', path: '/services', description: 'Real-time data processing' }
      ]
    },
    {
      title: 'Digital Transformation',
      icon: SparklesIcon,
      description: 'Transform your business with cutting-edge technology',
      services: [
        { name: 'Digital Transformation', path: '/digital-transformation', description: 'End-to-end digital transformation' },
        { name: 'Process Automation', path: '/services', description: 'AI-powered workflow automation' },
        { name: 'Enterprise Solutions', path: '/enterprise-solutions', description: 'Comprehensive enterprise solutions' }
      ]
    },
    {
      title: 'Emerging Technologies',
      icon: Rocket,
      description: 'Cutting-edge technology solutions for the future',
      services: [
        { name: 'Quantum Technology', path: '/services/quantum-technology', description: 'Quantum computing solutions' },
        { name: '5G Enterprise Solutions', path: '/5g-enterprise-solutions', description: 'Enterprise 5G infrastructure' },
        { name: 'Blockchain Solutions', path: '/blockchain-enterprise-solutions', description: 'Enterprise blockchain platform' },
        { name: 'IoT Analytics', path: '/iot-data-analytics', description: 'IoT data management platform' }
      ]
    }
  ];

  const solutionCategories = [
    {
      title: 'Enterprise Solutions',
      icon: Building,
      description: 'Comprehensive solutions for large enterprises',
      path: '/solutions/enterprise'
    },
    {
      title: 'Healthcare Solutions',
      icon: Shield,
      description: 'Specialized solutions for healthcare industry',
      path: '/solutions/healthcare'
    },
    {
      title: 'Financial Services',
      icon: BarChart3,
      description: 'Solutions for financial institutions',
      path: '/solutions/financial'
    },
    {
      title: 'Manufacturing',
      icon: Cpu,
      description: 'Industry 4.0 manufacturing solutions',
      path: '/solutions/manufacturing'
    },
    {
      title: 'Retail & E-commerce',
      icon: ShoppingBag,
      description: 'Digital retail transformation solutions',
      path: '/solutions/retail'
    }
  ];

  const toggleDropdown = (category: string) => {
    setActiveDropdown(activeDropdown === category ? null : category);
  };

  const closeDropdowns = () => {
    setActiveDropdown(null);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to search results or services page
      window.location.href = `/services?search=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'futuristic-nav bg-opacity-95 backdrop-blur-xl shadow-2xl' 
        : 'futuristic-nav bg-opacity-90'
    }`}>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-cyan-900/80 to-purple-900/80 border-b border-cyan-500/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 text-sm">
            <div className="flex items-center space-x-4 text-cyan-300">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-cyan-300">
                <MapPin className="w-4 h-4" />
                <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Sparkles className="w-7 h-7 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
                <span className="text-xs text-cyan-300 font-medium">Future Technology Solutions</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.path} className="relative">
                {item.hasDropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => toggleDropdown(item.label.toLowerCase())}
                      onMouseEnter={() => setActiveDropdown(item.label.toLowerCase())}
                      className="flex items-center space-x-2 px-4 py-2 text-white hover:text-cyan-300 transition-colors duration-200 futuristic-nav-item"
                    >
                      <span>{item.icon}</span>
                      <span>{item.label}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.label.toLowerCase() ? 'rotate-180' : ''
                      }`} />
                    </button>
                    
                    {/* Services Dropdown */}
                    {item.label === 'Services' && activeDropdown === 'services' && (
                      <div 
                        className="absolute top-full left-0 mt-2 w-screen max-w-6xl bg-black/95 backdrop-blur-xl border border-cyan-500/30 rounded-xl shadow-2xl p-6"
                        onMouseLeave={closeDropdowns}
                      >
                        <div className="grid grid-cols-2 gap-6">
                          {serviceCategories.map((category, index) => (
                            <div key={index} className="group">
                              <div className="flex items-center space-x-3 mb-3">
                                <category.icon className="w-6 h-6 text-cyan-400" />
                                <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors duration-200">
                                  {category.title}
                                </h3>
                              </div>
                              <p className="text-sm text-gray-300 mb-4">{category.description}</p>
                              <div className="space-y-2">
                                {category.services.slice(0, 4).map((service, serviceIndex) => (
                                  <Link
                                    key={serviceIndex}
                                    to={service.path}
                                    className="block text-sm text-gray-400 hover:text-cyan-300 transition-colors duration-200 py-1"
                                    onClick={closeDropdowns}
                                  >
                                    {service.name}
                                  </Link>
                                ))}
                                {category.services.length > 4 && (
                                  <Link
                                    to="/services"
                                    className="block text-sm text-cyan-400 hover:text-cyan-300 transition-colors duration-200 py-1 font-medium"
                                    onClick={closeDropdowns}
                                  >
                                    View all {category.title} services →
                                  </Link>
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="mt-6 pt-6 border-t border-cyan-500/30">
                          <Link
                            to="/services"
                            className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200 font-medium"
                            onClick={closeDropdowns}
                          >
                            <span>View All Services</span>
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    )}
                    
                    {/* Solutions Dropdown */}
                    {item.label === 'Solutions' && activeDropdown === 'solutions' && (
                      <div 
                        className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-xl border border-cyan-500/30 rounded-xl shadow-2xl p-6"
                        onMouseLeave={closeDropdowns}
                      >
                        <div className="space-y-4">
                          {solutionCategories.map((category, index) => (
                            <Link
                              key={index}
                              to={category.path}
                              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-cyan-500/10 transition-colors duration-200 group"
                              onClick={closeDropdowns}
                            >
                              <category.icon className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300 transition-colors duration-200" />
                              <div>
                                <h3 className="text-white group-hover:text-cyan-300 transition-colors duration-200 font-medium">
                                  {category.title}
                                </h3>
                                <p className="text-sm text-gray-400">{category.description}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className="flex items-center space-x-2 px-4 py-2 text-white hover:text-cyan-300 transition-colors duration-200 futuristic-nav-item"
                  >
                    <span>{item.icon}</span>
                    <span className="font-medium">{item.label}</span>
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/contact"
              className="futuristic-btn neon-glow neon-cyan"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="lg:hidden p-2 text-white hover:text-cyan-300 transition-colors duration-200"
            aria-label="Open mobile menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </header>
  );
}

export default Header;
