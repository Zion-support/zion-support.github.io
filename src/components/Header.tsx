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
  Atom,
  Network,
  Code,
  Database,
  Lock,
  Cloud,
  BarChart3
} from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
      path: '/ai-solutions', 
      label: 'AI Solutions', 
      icon: '🧠',
      description: 'Cutting-edge artificial intelligence solutions',
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
        { name: 'Quantum Machine Learning', path: '/quantum-machine-learning-platform', description: 'Quantum-powered ML solutions' },
        { name: 'AI Content Generation', path: '/ai-powered-content-generator', description: 'AI-powered content creation' },
        { name: 'Predictive Analytics', path: '/ai-powered-predictive-maintenance', description: 'Predictive maintenance systems' }
      ]
    },
    {
      title: 'Cybersecurity',
      icon: Shield,
      description: 'Advanced security solutions for modern threats',
      services: [
        { name: 'Quantum Encryption', path: '/quantum-encryption-platform', description: 'Quantum-safe encryption' },
        { name: 'Autonomous Response', path: '/cybersecurity-autonomous-response', description: 'AI-powered threat response' },
        { name: 'Threat Intelligence', path: '/cybersecurity-threat-intelligence', description: 'Advanced threat detection' }
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      description: 'Scalable cloud infrastructure and automation',
      services: [
        { name: 'Autonomous DevOps', path: '/autonomous-devops-orchestrator', description: 'AI-powered DevOps automation' },
        { name: 'Edge Computing', path: '/edge-computing-orchestrator', description: 'Edge computing orchestration' },
        { name: 'Digital Twins', path: '/digital-twin-platform', description: 'Digital twin management' }
      ]
    },
    {
      title: 'Emerging Technology',
      icon: Atom,
      description: 'Cutting-edge technology solutions',
      services: [
        { name: 'Metaverse Platform', path: '/metaverse-development-platform', description: '3D virtual world creation' },
        { name: 'Quantum Internet', path: '/quantum-internet-protocol', description: 'Quantum communication network' },
        { name: 'Neuromorphic Computing', path: '/neuromorphic-computing-platform', description: 'Brain-like computing' }
      ]
    },
    {
      title: 'Business Solutions',
      icon: Building,
      description: 'Enterprise-grade business solutions',
      services: [
        { name: 'Financial Advisory', path: '/autonomous-financial-advisor', description: 'AI-powered financial advice' },
        { name: 'HR Automation', path: '/ai-powered-hr-automation', description: 'Intelligent HR management' },
        { name: 'Legal Assistant', path: '/ai-powered-legal-assistant', description: 'AI legal research tools' },
        { name: 'Customer Support', path: '/ai-powered-customer-support', description: 'Automated customer service' }
      ]
    }
  ];

  const toggleDropdown = (category: string) => {
    setActiveDropdown(activeDropdown === category ? null : category);
  };

  const closeDropdowns = () => {
    setActiveDropdown(null);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'futuristic-nav shadow-lg' 
        : 'bg-transparent'
    }`}>
      {/* Animated Background */}
      <div className="absolute inset-0 bg-quantum-gradient opacity-30"></div>
      <div className="absolute inset-0 cyber-mesh"></div>
      
      {/* Matrix Rain Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-cyan-400 text-xs matrix-rain"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${20 + Math.random() * 10}s`
            }}
          >
            {Math.random() > 0.5 ? '1' : '0'}
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center quantum-float">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-2xl font-bold text-white neon-text">
                Zion Tech Group
              </h1>
              <p className="text-xs text-cyan-400">Revolutionary Technology Solutions</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <div key={item.path} className="relative">
                {item.hasDropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => toggleDropdown(item.label)}
                      onMouseEnter={() => setActiveDropdown(item.label)}
                      onMouseLeave={closeDropdowns}
                      className="futuristic-nav-link flex items-center space-x-1 px-4 py-2 rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
                    >
                      <span>{item.icon}</span>
                      <span>{item.label}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                        activeDropdown === item.label ? 'rotate-180' : ''
                      }`} />
                    </button>
                    
                    {activeDropdown === item.label && (
                      <div 
                        className="absolute top-full left-0 mt-2 w-80 bg-black/90 backdrop-blur-xl border border-cyan-500/30 rounded-xl shadow-2xl overflow-hidden"
                        onMouseEnter={() => setActiveDropdown(item.label)}
                        onMouseLeave={closeDropdowns}
                      >
                        <div className="p-4">
                          <h3 className="text-lg font-semibold text-white mb-3 flex items-center space-x-2">
                            <span className="text-2xl">{item.icon}</span>
                            <span>{item.label}</span>
                          </h3>
                          <p className="text-gray-300 text-sm mb-4">{item.description}</p>
                          
                          <div className="space-y-2">
                            {serviceCategories.find(cat => cat.title === item.label)?.services?.map((service) => (
                              <Link
                                key={service.path}
                                to={service.path}
                                className="block p-3 rounded-lg hover:bg-cyan-500/10 transition-all duration-300 group"
                                onClick={closeDropdowns}
                              >
                                <div className="flex items-center justify-between">
                                  <div>
                                    <h4 className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                                      {service.name}
                                    </h4>
                                    <p className="text-gray-400 text-sm">{service.description}</p>
                                  </div>
                                  <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors" />
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className="futuristic-nav-link flex items-center space-x-1 px-4 py-2 rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
                  >
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors">
              <Phone className="w-4 h-4" />
              <span className="text-sm">+1 302 464 0950</span>
            </div>
            <Link
              to="/contact"
              className="futuristic-button text-sm"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-white hover:bg-cyan-500/20 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-t border-cyan-500/30">
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="block p-3 rounded-lg text-white hover:bg-cyan-500/10 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-xl">{item.icon}</span>
                    <div>
                      <div className="font-medium">{item.label}</div>
                      <div className="text-sm text-gray-400">{item.description}</div>
                    </div>
                  </div>
                </Link>
              ))}
              
              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-cyan-500/30">
                <div className="flex items-center space-x-2 text-cyan-400 mb-3">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">+1 302 464 0950</span>
                </div>
                <div className="flex items-center space-x-2 text-cyan-400 mb-4">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">kleber@ziontechgroup.com</span>
                </div>
                <Link
                  to="/contact"
                  className="futuristic-button w-full text-center"
                  onClick={() => setIsMenuOpen(false)}
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
