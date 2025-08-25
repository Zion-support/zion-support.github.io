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
  Sparkles as SparklesIcon,
  Cpu as CpuIcon,
  Shield as ShieldIcon,
  Zap as ZapIcon,
  Brain as BrainIcon,
  Cloud as CloudIcon,
  Lock as LockIcon,
  Database as DatabaseIcon,
  Network as NetworkIcon,
  Code as CodeIcon,
  BarChart3 as BarChart3Icon,
  Target as TargetIcon,
  Lightbulb as LightbulbIcon,
  Rocket as RocketIcon,
  Clock as ClockIcon,
  Eye as EyeIcon,
  Heart as HeartIcon
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
      hasDropdown: true,
      dropdownItems: [
        {
          title: 'AI & Machine Learning',
          icon: BrainIcon,
          description: 'Cutting-edge AI solutions',
          items: [
            { label: 'AI Autonomous Systems', path: '/services/ai-autonomous-systems' },
            { label: 'AI Research Assistant', path: '/ai-autonomous-research-assistant' },
            { label: 'AI-Powered Analytics', path: '/services#ai-analytics' },
            { label: 'Machine Learning Platform', path: '/services#ml-platform' }
          ]
        },
        {
          title: 'Quantum Technology',
          icon: CpuIcon,
          description: 'Next-generation quantum solutions',
          items: [
            { label: 'Quantum Neural Networks', path: '/quantum-neural-network-platform' },
            { label: 'Quantum Computing', path: '/services/quantum-technology' },
            { label: 'Quantum Security', path: '/services#quantum-security' },
            { label: 'Quantum Optimization', path: '/services#quantum-optimization' }
          ]
        },
        {
          title: 'Cybersecurity',
          icon: ShieldIcon,
          description: 'Advanced security solutions',
          items: [
            { label: 'Cybersecurity Services', path: '/services/cybersecurity' },
            { label: 'SOC2 Compliance', path: '/soc2-compliance-automation' },
            { label: 'AI Security Operations', path: '/services#ai-security' },
            { label: 'Threat Detection', path: '/services#threat-detection' }
          ]
        },
        {
          title: 'IT Infrastructure',
          icon: CloudIcon,
          description: 'Robust infrastructure solutions',
          items: [
            { label: 'Cloud & DevOps', path: '/cloud-devops' },
            { label: 'IT Infrastructure', path: '/services/it-infrastructure' },
            { label: '5G Enterprise Solutions', path: '/5g-enterprise-solutions' },
            { label: 'Edge Computing', path: '/services#edge-computing' }
          ]
        },
        {
          title: 'Micro SAAS',
          icon: CodeIcon,
          description: 'Scalable software solutions',
          items: [
            { label: 'Micro SAAS Solutions', path: '/services/micro-saas-solutions' },
            { label: 'Innovative Micro Services', path: '/innovative-micro-saas-services' },
            { label: 'Custom Development', path: '/services#custom-development' },
            { label: 'API Integration', path: '/services#api-integration' }
          ]
        }
      ]
    },
    { 
      path: '/solutions/enterprise', 
      label: 'Solutions', 
      icon: '💼',
      description: 'Industry-specific solutions',
      hasDropdown: true,
      dropdownItems: [
        {
          title: 'Enterprise Solutions',
          icon: Building,
          description: 'Large-scale enterprise solutions',
          items: [
            { label: 'Enterprise Solutions', path: '/solutions/enterprise' },
            { label: 'Digital Transformation', path: '/digital-transformation' },
            { label: 'Business Intelligence', path: '/services#business-intelligence' },
            { label: 'Process Automation', path: '/services#process-automation' }
          ]
        },
        {
          title: 'Industry Solutions',
          icon: TargetIcon,
          description: 'Sector-specific solutions',
          items: [
            { label: 'Healthcare Solutions', path: '/solutions/healthcare' },
            { label: 'Financial Solutions', path: '/solutions/financial' },
            { label: 'Manufacturing Solutions', path: '/solutions/manufacturing' },
            { label: 'Retail Solutions', path: '/solutions/retail' }
          ]
        },
        {
          title: 'Emerging Technology',
          icon: RocketIcon,
          description: 'Cutting-edge technology solutions',
          items: [
            { label: 'Emerging Tech', path: '/emerging-tech' },
            { label: 'Blockchain Solutions', path: '/services#blockchain' },
            { label: 'IoT Solutions', path: '/services#iot' },
            { label: 'Extended Reality', path: '/services#xr' }
          ]
        }
      ]
    },
    { 
      path: '/ai-solutions', 
      label: 'AI Solutions', 
      icon: '🧠',
      description: 'Advanced AI and machine learning solutions'
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
      path: '/contact', 
      label: 'Contact', 
      icon: '📞',
      description: 'Get in touch with us'
    }
  ];

  const handleDropdownToggle = (label: string) => {
    setActiveDropdown(activeDropdown === label ? null : label);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement search functionality
    console.log('Searching for:', searchQuery);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-md border-b border-cyan-500/20 shadow-2xl shadow-cyan-500/10' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <SparklesIcon className="w-6 h-6 text-white" />
                </div>
                <div className="absolute inset-0 w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg opacity-75 blur-sm group-hover:blur-md transition-all duration-300"></div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent neon-text">
                  Zion Tech Group
                </h1>
                <p className="text-xs text-gray-400 font-medium">Innovation • Technology • Future</p>
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
                      onClick={() => handleDropdownToggle(item.label)}
                      className="flex items-center space-x-1 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group"
                    >
                      <span className="text-lg">{item.icon}</span>
                      <span className="font-medium">{item.label}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.label ? 'rotate-180' : ''
                      }`} />
                    </button>
                    
                    {activeDropdown === item.label && (
                      <div className="absolute top-full left-0 mt-2 w-96 bg-black/95 backdrop-blur-xl border border-cyan-500/20 rounded-xl shadow-2xl shadow-cyan-500/20 overflow-hidden">
                        <div className="p-4">
                          {item.dropdownItems?.map((dropdown, index) => (
                            <div key={index} className="mb-4 last:mb-0">
                              <div className="flex items-center space-x-3 mb-2">
                                <dropdown.icon className="w-5 h-5 text-cyan-400" />
                                <h3 className="font-semibold text-white">{dropdown.title}</h3>
                              </div>
                              <p className="text-sm text-gray-400 mb-3">{dropdown.description}</p>
                              <div className="grid grid-cols-1 gap-2">
                                {dropdown.items.map((subItem, subIndex) => (
                                  <Link
                                    key={subIndex}
                                    to={subItem.path}
                                    className="flex items-center space-x-2 p-2 rounded-lg hover:bg-cyan-500/10 transition-colors duration-200 group"
                                  >
                                    <ArrowRight className="w-3 h-3 text-cyan-400 group-hover:translate-x-1 transition-transform duration-200" />
                                    <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-200">
                                      {subItem.label}
                                    </span>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group"
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="font-medium">{item.label}</span>
                  </Link>
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
                className="w-64 px-4 py-2 bg-black/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-200"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
              >
                <Search className="w-5 h-5" />
              </button>
            </form>

            {/* Contact Info */}
            <div className="flex items-center space-x-3">
              <a
                href="tel:+13024640950"
                className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group"
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm font-medium">+1 302 464 0950</span>
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-200 group"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm font-medium">kleber@ziontechgroup.com</span>
              </a>
            </div>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="btn-futuristic"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
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
