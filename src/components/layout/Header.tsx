import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Home,
  Briefcase,
  Users,
  Settings,
  BarChart3,
  FileText,
  MessageSquare,
  HelpCircle,
  Code,
  Smartphone,
  Globe,
  Building,
  Mail,
  Phone,
  MapPin,
  Brain,
  Cpu,
  Shield,
  Rocket,
  Zap,
  ShoppingCart,
  BookOpen,
  MessageCircle,
  DollarSign,
  Star,
  Target,
  TrendingUp,
  Award,
  Heart,
  Lock,
  Database,
  Network,
  Palette,
  Video,
  Audio,
  Document,
  Folder,
  File,
  Archive,
  Backup,
  Restore,
  Sync,
  Share,
  Export,
  Import,
  Download,
  Upload,
  Copy,
  Paste,
  Cut,
  Delete,
  Undo,
  Redo,
  Save,
  Load,
  Open,
  Close,
  Minimize,
  Maximize,
  Restore as RestoreIcon,
  Move,
  Resize,
  Rotate,
  Scale,
  ArrowUpRight,
  ArrowDownRight,
  ArrowLeftRight,
  ArrowUpDown,
  ArrowUpLeft,
  ArrowDownLeft,
  ArrowLeftUp,
  ArrowRightUp,
  ArrowLeftDown,
  ArrowRightDown,
  Search,
  Bell,
  User,
  LogOut,
  Sun,
  Moon,
  Monitor
} from 'lucide-react';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('system');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : theme === 'dark' ? 'system' : 'light';
    setTheme(newTheme);
    // Apply theme logic here
  };

  const navigationItems = [
    {
      name: 'Home',
      href: '/',
      icon: Home
    },
    {
      name: 'Services',
      href: '/services',
      icon: Briefcase,
      dropdown: [
        {
          name: 'AI Services',
          href: '/ai-services',
          icon: Brain,
          description: 'Advanced AI solutions for business transformation'
        },
        {
          name: 'IT Services',
          href: '/it-services',
          icon: Cpu,
          description: 'Comprehensive IT infrastructure and consulting'
        },
        {
          name: 'Micro SaaS',
          href: '/micro-saas',
          icon: Rocket,
          description: 'Scalable software-as-a-service solutions'
        },
        {
          name: 'Cybersecurity',
          href: '/services/cybersecurity',
          icon: Shield,
          description: 'Advanced security and compliance solutions'
        },
        {
          name: 'Cloud & DevOps',
          href: '/services/cloud-devops',
          icon: Cloud,
          description: 'Cloud infrastructure and automation'
        },
        {
          name: 'Digital Transformation',
          href: '/services/digital-transformation',
          icon: ArrowUpRight,
          description: 'End-to-end digital transformation services'
        }
      ]
    },
    {
      name: 'Solutions',
      href: '/solutions',
      icon: Target,
      dropdown: [
        {
          name: 'Healthcare',
          href: '/services/ai-healthcare-platform',
          icon: Heart,
          description: 'AI-powered healthcare solutions'
        },
        {
          name: 'Finance',
          href: '/services/ai-financial-trading-platform',
          icon: DollarSign,
          description: 'Financial technology and trading platforms'
        },
        {
          name: 'Supply Chain',
          href: '/services/ai-supply-chain-optimization',
          icon: Network,
          description: 'Supply chain optimization and analytics'
        },
        {
          name: 'Quantum Computing',
          href: '/services/ai-quantum-hybrid-platform',
          icon: Atom,
          description: 'Quantum computing and hybrid AI solutions'
        }
      ]
    },
    {
      name: 'About',
      href: '/about',
      icon: Users
    },
    {
      name: 'Contact',
      href: '/contact',
      icon: MessageSquare
    }
  ];

  const serviceCategories = [
    {
      name: 'AI & Machine Learning',
      services: [
        { name: 'AI Content Generator', href: '/services/ai-content-generator' },
        { name: 'AI Code Review', href: '/services/ai-code-review-security' },
        { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence' },
        { name: 'AI Customer Support', href: '/services/ai-customer-support-automation' },
        { name: 'AI Marketing Automation', href: '/services/ai-marketing-automation' },
        { name: 'AI Project Management', href: '/services/ai-project-management-platform' }
      ]
    },
    {
      name: 'Cybersecurity',
      services: [
        { name: 'AI Cybersecurity Suite', href: '/services/ai-cybersecurity-suite' },
        { name: 'Zero Trust Architecture', href: '/services/ZeroTrustNetworkArchitecture' },
        { name: 'SOC2 Compliance', href: '/services/SOC2ComplianceTracker' },
        { name: 'Incident Response', href: '/services/incident-response-platform' },
        { name: 'Threat Detection', href: '/services/ai-cybersecurity-threat-detection' }
      ]
    },
    {
      name: 'Cloud & Infrastructure',
      services: [
        { name: 'Cloud DevOps', href: '/services/cloud-devops' },
        { name: 'IoT Edge Computing', href: '/services/iot-edge' },
        { name: 'Digital Twin', href: '/services/digital-twin' },
        { name: 'Green IT Solutions', href: '/services/green-it' },
        { name: '5G Solutions', href: '/services/FiveGSolutions' }
      ]
    },
    {
      name: 'Business Solutions',
      services: [
        { name: 'Micro CRM', href: '/services/micro-crm' },
        { name: 'HR Platform', href: '/services/ai-hr-platform' },
        { name: 'Helpdesk Platform', href: '/services/HelpdeskPlatform' },
        { name: 'Blockchain Solutions', href: '/services/blockchain-enterprise-solutions' },
        { name: 'Financial Solutions', href: '/services/FinancialSolutions' }
      ]
    }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-200/20 dark:border-gray-700/20'
          : 'bg-transparent'
      } ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                Zion Tech Group
              </h1>
              <p className="text-xs text-gray-600 dark:text-gray-400">Innovation & Technology Solutions</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <button
                    className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-200 py-2"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className={`flex items-center space-x-1 transition-colors duration-200 py-2 ${
                      location.pathname === item.href
                        ? 'text-cyan-600 dark:text-cyan-400'
                        : 'text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400'
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.name && (
                  <div
                    className="absolute top-full left-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-xl shadow-xl border border-gray-200 dark:border-gray-700 p-6 opacity-100 translate-y-0 transition-all duration-200"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="grid grid-cols-1 gap-4">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.href}
                          className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                        >
                          <div className="w-8 h-8 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                            <dropdownItem.icon className="w-4 h-4 text-cyan-600" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-medium text-gray-900 dark:text-white group-hover:text-cyan-600 transition-colors duration-200">
                              {dropdownItem.name}
                            </h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                              {dropdownItem.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Sun className="w-5 h-5" />
              ) : theme === 'dark' ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Monitor className="w-5 h-5" />
              )}
            </button>

            {/* Search */}
            <button className="p-2 text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-200">
              <Search className="w-5 h-5" />
            </button>

            {/* Notifications */}
            <button className="p-2 text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-200 relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>

            {/* Contact Info */}
            <div className="hidden lg:flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
              <Phone className="w-4 h-4" />
              <span>+1 302 464 0950</span>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
          >
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-gray-700 dark:text-gray-300 font-medium">
                        <span>{item.name}</span>
                        <ChevronRight className="w-4 h-4" />
                      </div>
                      <div className="pl-4 space-y-2">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.name}
                            to={dropdownItem.href}
                            className="block text-sm text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 py-1"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className="block text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700 space-y-2">
                <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                  <Phone className="w-4 h-4" />
                  <span>+1 302 464 0950</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                  <Mail className="w-4 h-4" />
                  <span>kleber@ziontechgroup.com</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                  <MapPin className="w-4 h-4" />
                  <span>364 E Main St STE 1008, Middletown DE 19709</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;