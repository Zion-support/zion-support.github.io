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
  Bell,
  User,
  Settings,
  Cloud
} from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
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
  ];

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeDropdowns = () => {
    setActiveDropdown(null);
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-zion-blue-dark/95 backdrop-blur-md border-b border-zion-cyan/20 shadow-2xl shadow-zion-cyan/10' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-white">Zion Tech Group</h1>
              <p className="text-xs text-zion-cyan">AI-Powered Innovation</p>
            </div>
          </Link>

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
                    to={item.path}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-300 ${
                      isActive(item.path) 
                        ? 'text-zion-cyan bg-zion-cyan/10' 
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
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
