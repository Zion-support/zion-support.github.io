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
  Briefcase,
  TrendingUp,
  Server,
  Smartphone,
  ShieldCheck,
  Globe2,
  DatabaseIcon,
  Workflow,
  Palette as PaletteIcon,
  Cpu as CpuIcon,
  Brain as BrainIcon,
  Cloud as CloudIcon,
  Shield as ShieldIcon,
  Building as BuildingIcon,
  Users as UsersIcon,
  Code as CodeIcon,
  BarChart3 as BarChart3Icon,
  Target as TargetIcon,
  Heart as HeartIcon,
  Rocket as RocketIcon,
  Lock as LockIcon,
  Network as NetworkIcon,
  Eye as EyeIcon,
  Clock as ClockIcon
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
      icon: BrainIcon,
      description: 'Intelligent solutions powered by artificial intelligence',
      color: 'from-purple-500 to-pink-500',
      services: [
        { name: 'AI Autonomous Systems', path: '/services/ai-autonomous-systems', description: 'Advanced autonomous AI systems', icon: BrainIcon },
        { name: 'AI Workflow Automation', path: '/services/ai-workflow-automation', description: 'Intelligent process automation', icon: Workflow },
        { name: 'AI Business Intelligence', path: '/services/ai-business-intelligence', description: 'Advanced analytics and insights', icon: BarChart3Icon },
        { name: 'AI Marketing Automation', path: '/services/ai-marketing-automation', description: 'Smart marketing optimization', icon: TargetIcon },
        { name: 'AI Research Assistant', path: '/ai-autonomous-research-assistant', description: 'AI-powered research automation', icon: BrainIcon },
        { name: 'AI Business Manager', path: '/services/ai-autonomous-business-manager', description: 'Intelligent business management', icon: BrainIcon },
        { name: 'AI Business Platform', path: '/services/ai-autonomous-business-platform', description: 'Comprehensive business platform', icon: BrainIcon },
        { name: 'AI Code Review', path: '/services/ai-autonomous-code-review', description: 'Intelligent code review automation', icon: CodeIcon },
        { name: 'AI Creative Director', path: '/services/ai-autonomous-creative-director', description: 'AI-powered creative content generation', icon: PaletteIcon },
        { name: 'AI Content Generation', path: '/services/ai-content-generation-automation', description: 'Automated content creation', icon: CodeIcon },
        { name: 'AI Consciousness Evolution', path: '/services/ai-consciousness-evolution', description: 'Advanced AI consciousness research', icon: BrainIcon }
      ]
    },
    {
      title: 'Quantum Technology',
      icon: BrainIcon,
      description: 'Next-generation quantum computing solutions',
      color: 'from-blue-500 to-cyan-500',
      services: [
        { name: 'Quantum Neural Networks', path: '/quantum-neural-network-platform', description: 'Quantum-powered neural networks', icon: BrainIcon },
        { name: 'Quantum Computing', path: '/services/quantum-technology', description: 'Quantum computing platforms', icon: CpuIcon },
        { name: 'Quantum-Secure Cloud', path: '/services/quantum-secure-cloud', description: 'Future-proof cloud security', icon: CloudIcon }
      ]
    },
    {
      title: 'Cybersecurity & Compliance',
      icon: ShieldIcon,
      description: 'Comprehensive security and compliance solutions',
      color: 'from-red-500 to-pink-500',
      services: [
        { name: 'Cybersecurity Services', path: '/services/cybersecurity', description: 'Complete security solutions', icon: ShieldIcon },
        { name: 'SOC2 Compliance Automation', path: '/soc2-compliance-automation', description: 'Automated compliance management', icon: LockIcon },
        { name: 'Security Assessment', path: '/services/security-assessment', description: 'Security audit and testing', icon: ShieldCheck },
        { name: 'Threat Detection', path: '/services/threat-detection', description: 'Real-time security monitoring', icon: ShieldIcon }
      ]
    },
    {
      title: 'Cloud & Infrastructure',
      icon: CloudIcon,
      description: 'Scalable cloud solutions and infrastructure management',
      color: 'from-blue-500 to-indigo-500',
      services: [
        { name: 'Cloud DevOps', path: '/cloud-devops', description: 'Cloud development and operations', icon: CpuIcon },
        { name: 'IT Infrastructure', path: '/services/it-infrastructure', description: 'Complete IT infrastructure solutions', icon: Server },
        { name: '5G Enterprise Solutions', path: '/5g-enterprise-solutions', description: 'High-speed 5G connectivity', icon: NetworkIcon },
        { name: 'Network Infrastructure', path: '/services/network-infrastructure', description: 'Robust network solutions', icon: NetworkIcon },
        { name: 'Managed IT Services', path: '/services/managed-it-services', description: '24/7 IT support', icon: ClockIcon }
      ]
    },
    {
      title: 'Emerging Technologies',
      icon: RocketIcon,
      description: 'Cutting-edge solutions for tomorrow\'s challenges',
      color: 'from-purple-500 to-violet-500',
      services: [
        { name: 'Blockchain Solutions', path: '/services/blockchain-enterprise-solutions', description: 'Decentralized applications', icon: CodeIcon },
        { name: 'IoT Data Analytics', path: '/services/iot-data-analytics', description: 'Connected device management', icon: NetworkIcon },
        { name: 'AR/VR Solutions', path: '/services/ar-vr-solutions', description: 'Immersive experiences', icon: EyeIcon }
      ]
    },
    {
      title: 'Industry Solutions',
      icon: BuildingIcon,
      description: 'Tailored solutions for specific industries',
      color: 'from-orange-500 to-yellow-500',
      services: [
        { name: 'Healthcare Technology', path: '/solutions/healthcare', description: 'Medical innovation', icon: HeartIcon },
        { name: 'Financial Services', path: '/services/financial-services', description: 'Fintech solutions', icon: DollarSign },
        { name: 'Manufacturing Intelligence', path: '/services/manufacturing-intelligence', description: 'Smart manufacturing', icon: CpuIcon },
        { name: 'Retail Technology', path: '/services/retail-technology', description: 'Digital retail transformation', icon: ShoppingCart }
      ]
    }
  ];

  const solutionCategories = [
    {
      title: 'Enterprise Solutions',
      icon: BuildingIcon,
      description: 'Large-scale business transformation',
      color: 'from-blue-500 to-indigo-500',
      solutions: [
        { name: 'Digital Transformation', path: '/digital-transformation', description: 'Complete business modernization', icon: RocketIcon },
        { name: 'Enterprise AI', path: '/solutions/enterprise', description: 'AI-powered enterprise solutions', icon: BrainIcon },
        { name: 'Data Analytics', path: '/services/data-analytics', description: 'Business intelligence platform', icon: BarChart3Icon }
      ]
    },
    {
      title: 'SMB Solutions',
      icon: UsersIcon,
      description: 'Scalable solutions for growing businesses',
      color: 'from-green-500 to-emerald-500',
      solutions: [
        { name: 'Micro SAAS', path: '/services/micro-saas-solutions', description: 'Custom software solutions', icon: CodeIcon },
        { name: 'Cloud Migration', path: '/cloud-devops', description: 'Affordable cloud solutions', icon: CloudIcon },
        { name: 'IT Support', path: '/services/it-support', description: 'Managed IT services', icon: ClockIcon }
      ]
    },
    {
      title: 'Healthcare Solutions',
      icon: HeartIcon,
      description: 'Technology solutions for healthcare',
      color: 'from-red-500 to-pink-500',
      solutions: [
        { name: 'Healthcare AI', path: '/solutions/healthcare', description: 'AI-powered healthcare solutions', icon: BrainIcon },
        { name: 'Patient Management', path: '/services/patient-management', description: 'Comprehensive patient care', icon: UsersIcon },
        { name: 'Medical Analytics', path: '/services/medical-analytics', description: 'Healthcare data insights', icon: BarChart3Icon }
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

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navigationItems.map((item) => (
              <div key={item.path} className="relative">
                {item.hasDropdown ? (
                  <button
                    onClick={() => handleDropdownToggle(item.label)}
                    className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-200 group"
                  >
                    <span>{item.icon}</span>
                    <span className="font-medium">{item.label}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === item.label ? 'rotate-180' : ''
                    }`} />
                  </button>
                ) : (
                  <Link
                    to={item.path}
                    className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-200 group"
                  >
                    <span>{item.icon}</span>
                    <span className="font-medium">{item.label}</span>
                  </Link>
                )}

                {/* Services Dropdown */}
                {item.label === 'Services' && activeDropdown === 'Services' && (
                  <div className="absolute top-full left-0 mt-2 w-[800px] bg-black/95 backdrop-blur-md border border-gray-800 rounded-xl shadow-2xl p-6 z-50">
                    <div className="grid grid-cols-2 gap-6">
                      {serviceCategories.map((category, idx) => (
                        <div key={idx} className="group">
                          <div className="flex items-center space-x-3 mb-3">
                            <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                              <category.icon className="w-4 h-4 text-white" />
                            </div>
                            <h3 className="text-white font-semibold text-sm">{category.title}</h3>
                          </div>
                          <p className="text-gray-400 text-xs mb-3">{category.description}</p>
                          <div className="space-y-2">
                            {category.services.map((service, serviceIdx) => (
                              <Link
                                key={serviceIdx}
                                to={service.path}
                                className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-800/50 transition-colors duration-200 group"
                              >
                                <service.icon className="w-4 h-4 text-gray-400 group-hover:text-cyan-400" />
                                <span className="text-gray-300 text-sm group-hover:text-white">{service.name}</span>
                                <span className="text-gray-600 text-xs ml-auto">{service.description}</span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 pt-4 border-t border-gray-800">
                      <Link
                        to="/services"
                        className="flex items-center justify-center space-x-2 w-full py-2 px-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
                      >
                        <span>View All Services</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                )}

                {/* Solutions Dropdown */}
                {item.label === 'Solutions' && activeDropdown === 'Solutions' && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-md border border-gray-800 rounded-xl shadow-2xl p-6 z-50">
                    <div className="space-y-6">
                      {solutionCategories.map((category, idx) => (
                        <div key={idx} className="group">
                          <div className="flex items-center space-x-3 mb-3">
                            <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center`}>
                              <category.icon className="w-4 h-4 text-white" />
                            </div>
                            <h3 className="text-white font-semibold text-sm">{category.title}</h3>
                          </div>
                          <p className="text-gray-400 text-xs mb-3">{category.description}</p>
                          <div className="space-y-2">
                            {category.solutions.map((solution, solutionIdx) => (
                              <Link
                                key={solutionIdx}
                                to={solution.path}
                                className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-800/50 transition-colors duration-200 group"
                              >
                                <solution.icon className="w-4 h-4 text-gray-400 group-hover:text-cyan-400" />
                                <span className="text-gray-300 text-sm group-hover:text-white">{solution.name}</span>
                                <span className="text-gray-600 text-xs ml-auto">{solution.description}</span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 pt-4 border-t border-gray-800">
                      <Link
                        to="/solutions/enterprise"
                        className="flex items-center justify-center space-x-2 w-full py-2 px-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
                      >
                        <span>Explore Solutions</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Search and Contact */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search */}
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Search className="w-5 h-5" />
              </button>
            </form>

            {/* Contact Button */}
            <Link
              to="/contact"
              className="flex items-center space-x-2 px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors duration-200"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Search */}
      <div className="lg:hidden border-t border-gray-800/50 bg-black/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Search services..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-200"
            >
              <Search className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>

      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </header>
  );
}

export default Header;
