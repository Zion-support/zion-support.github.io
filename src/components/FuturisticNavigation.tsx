import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Search, 
  User, 
  Bell, 
  ChevronDown,
  Brain,
  Shield,
  Cloud,
  Zap,
  Globe,
  Cpu,
  Database,
  Network,
  Lock,
  Code,
  Rocket,
  Users,
  BarChart3,
  FileImage,
  TrendingUp,
  MessageCircle,
  Video,
  FileText,
  Heart,
  PanelLeft,
  ShoppingCart,
  Settings,
  HelpCircle,
  BookOpen,
  Briefcase,
  Award,
  Target,
  Lightbulb,
  ShieldCheck,
  Server,
  Smartphone,
  Monitor,
  Wifi,
  Bluetooth,
  Satellite,
  Atom,
  Dna,
  Microscope,
  Flask,
  TestTube,
  Syringe,
  Stethoscope,
  HeartPulse,
  BrainCircuit,
  Eye,
  Ear,
  Hand,
  Foot,
  Bone,
  Tooth,
  Pill,
  Bandage,
  Thermometer,
  Scale,
  Calculator,
  ChartBar,
  PieChart,
  LineChart,
  Activity,
  TrendingDown,
  Minus,
  Plus,
  Equal,
  Divide,
  Percent,
  DollarSign,
  Euro,
  Pound,
  Yen,
  Bitcoin,
  Ethereum,
  CreditCard,
  Wallet,
  Banknote,
  Coins,
  PiggyBank,
  Safe,
  Vault,
  LockKeyhole,
  Key,
  Fingerprint,
  QrCode,
  Barcode,
  Scan,
  Camera,
  VideoOff,
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  CheckCircle,
  AlertCircle,
  Info,
  ExternalLink,
  ArrowRight,
  ArrowLeft,
  ChevronUp,
  ChevronRight,
  Menu as MenuIcon,
  X as CloseIcon,
  Store,
  Factory,
  ShoppingBag
} from 'lucide-react';

interface NavigationProps {
  className?: string;
}

export const FuturisticNavigation: React.FC<NavigationProps> = ({ className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

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

  // Handle keyboard navigation
  const handleKeyDown = (event: React.KeyboardEvent, action: () => void) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      action();
    }
  };

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navigationItems = [
    {
      label: 'Services',
      href: '/services',
      icon: Rocket,
      dropdown: [
        {
          title: 'AI & Machine Learning',
          description: 'Advanced AI solutions for business transformation',
          href: '/ai-services',
          icon: Brain,
          color: 'from-purple-500 to-pink-500'
        },
        {
          title: 'Quantum Computing',
          description: 'Next-generation quantum solutions',
          href: '/quantum-services',
          icon: Atom,
          color: 'from-blue-500 to-cyan-500'
        },
        {
          title: 'Cybersecurity',
          description: 'Advanced threat protection & compliance',
          href: '/cybersecurity',
          icon: Shield,
          color: 'from-red-500 to-orange-500'
        },
        {
          title: 'Cloud Infrastructure',
          description: 'Scalable cloud solutions & migration',
          href: '/cloud-services',
          icon: Cloud,
          color: 'from-indigo-500 to-blue-500'
        },
        {
          title: 'Digital Transformation',
          description: 'End-to-end business transformation',
          href: '/digital-transformation',
          icon: Zap,
          color: 'from-green-500 to-emerald-500'
        }
      ]
    },
    {
      label: 'Solutions',
      href: '/solutions',
      icon: Target,
      dropdown: [
        {
          title: 'Enterprise Solutions',
          description: 'Large-scale business solutions',
          href: '/enterprise',
          icon: Building,
          color: 'from-gray-500 to-slate-500'
        },
        {
          title: 'SMB Solutions',
          description: 'Solutions for small & medium businesses',
          href: '/smb',
          icon: Store,
          color: 'from-blue-500 to-indigo-500'
        },
        {
          title: 'Startup Solutions',
          description: 'Innovation-focused startup support',
          href: '/startups',
          icon: Rocket,
          color: 'from-purple-500 to-pink-500'
        }
      ]
    },
    {
      label: 'Industries',
      href: '/industries',
      icon: Building,
      dropdown: [
        {
          title: 'Healthcare',
          description: 'AI-powered healthcare solutions',
          href: '/industries/healthcare',
          icon: HeartPulse,
          color: 'from-red-500 to-pink-500'
        },
        {
          title: 'Finance',
          description: 'Fintech & financial services',
          href: '/industries/finance',
          icon: DollarSign,
          color: 'from-green-500 to-emerald-500'
        },
        {
          title: 'Manufacturing',
          description: 'Smart manufacturing & Industry 4.0',
          href: '/industries/manufacturing',
          icon: Factory,
          color: 'from-blue-500 to-cyan-500'
        },
        {
          title: 'Retail',
          description: 'E-commerce & retail solutions',
          href: '/industries/retail',
          icon: ShoppingBag,
          color: 'from-purple-500 to-indigo-500'
        }
      ]
    },
    {
      label: 'About',
      href: '/about',
      icon: Users
    },
    {
      label: 'Contact',
      href: '/contact',
      icon: MessageCircle
    }
  ];

  const quickActions = [
    { label: 'Get Quote', href: '/quote', icon: Calculator, variant: 'primary' },
    { label: 'Book Demo', href: '/demo', icon: Video, variant: 'secondary' },
    { label: 'Support', href: '/support', icon: HelpCircle, variant: 'outline' }
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-xl border-b border-zion-cyan/20' 
          : 'bg-transparent'
      } ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2 group"
            onClick={closeMenu}
          >
            <div className="relative">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-white font-bold text-lg lg:text-xl">Z</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-lg blur opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="hidden sm:block">
              <div className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent">
                Zion Tech Group
              </div>
              <div className="text-xs text-zion-cyan/70">Innovating Tomorrow</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.label} className="relative dropdown-container">
                {item.dropdown ? (
                  <button
                    className="flex items-center space-x-1 text-white hover:text-zion-cyan transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-white/10"
                    onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                    onKeyDown={(e) => handleKeyDown(e, () => setActiveDropdown(activeDropdown === item.label ? null : item.label))}
                    aria-expanded={activeDropdown === item.label}
                    aria-haspopup="true"
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.label}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className="flex items-center space-x-1 text-white hover:text-zion-cyan transition-colors duration-200 py-2 px-3 rounded-lg hover:bg-white/10"
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-black/90 backdrop-blur-xl border border-zion-cyan/20 rounded-xl shadow-2xl overflow-hidden"
                  >
                    <div className="p-4">
                      {item.dropdown.map((dropdownItem, index) => (
                        <Link
                          key={index}
                          to={dropdownItem.href}
                          className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white/10 transition-colors duration-200 group"
                          onClick={() => setActiveDropdown(null)}
                        >
                          <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${dropdownItem.color} flex items-center justify-center flex-shrink-0`}>
                            <dropdownItem.icon className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-white font-semibold group-hover:text-zion-cyan transition-colors duration-200">
                              {dropdownItem.title}
                            </div>
                            <div className="text-sm text-gray-400 mt-1">
                              {dropdownItem.description}
                            </div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-zion-cyan transition-colors duration-200" />
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search */}
            <button
              onClick={() => setShowSearch(!showSearch)}
              className="p-2 text-white hover:text-zion-cyan transition-colors duration-200 rounded-lg hover:bg-white/10"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Quick Actions */}
            {quickActions.map((action, index) => (
              <Link
                key={index}
                to={action.href}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  action.variant === 'primary'
                    ? 'bg-gradient-to-r from-zion-cyan to-zion-blue text-white hover:shadow-lg hover:shadow-zion-cyan/25'
                    : action.variant === 'secondary'
                    ? 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                    : 'text-zion-cyan hover:text-white border border-zion-cyan hover:bg-zion-cyan'
                }`}
              >
                {action.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-white hover:text-zion-cyan transition-colors duration-200 rounded-lg hover:bg-white/10"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>

        {/* Search Bar */}
        <AnimatePresence>
          {showSearch && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="pb-4"
            >
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search services, solutions, or industries..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-zion-cyan/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan/50"
                />
                <button
                  onClick={() => setShowSearch(false)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-zion-cyan/20"
          >
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Navigation Items */}
              {navigationItems.map((item) => (
                <div key={item.label}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                        className="flex items-center justify-between w-full text-left text-white hover:text-zion-cyan transition-colors duration-200 py-3 px-4 rounded-lg hover:bg-white/10"
                      >
                        <div className="flex items-center space-x-3">
                          <item.icon className="w-5 h-5" />
                          <span>{item.label}</span>
                        </div>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {activeDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="ml-6 mt-2 space-y-2"
                        >
                          {item.dropdown.map((dropdownItem, index) => (
                            <Link
                              key={index}
                              to={dropdownItem.href}
                              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 transition-colors duration-200"
                              onClick={closeMenu}
                            >
                              <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${dropdownItem.color} flex items-center justify-center`}>
                                <dropdownItem.icon className="w-4 h-4 text-white" />
                              </div>
                              <div>
                                <div className="text-white font-medium">{dropdownItem.title}</div>
                                <div className="text-sm text-gray-400">{dropdownItem.description}</div>
                              </div>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className="flex items-center space-x-3 text-white hover:text-zion-cyan transition-colors duration-200 py-3 px-4 rounded-lg hover:bg-white/10"
                      onClick={closeMenu}
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.label}</span>
                    </Link>
                  )}
                </div>
              ))}

              {/* Mobile Quick Actions */}
              <div className="pt-4 border-t border-zion-cyan/20">
                <div className="grid grid-cols-1 gap-3">
                  {quickActions.map((action, index) => (
                    <Link
                      key={index}
                      to={action.href}
                      className={`flex items-center justify-center space-x-2 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                        action.variant === 'primary'
                          ? 'bg-gradient-to-r from-zion-cyan to-zion-blue text-white'
                          : action.variant === 'secondary'
                          ? 'bg-white/10 text-white border border-white/20'
                          : 'text-zion-cyan border border-zion-cyan'
                      }`}
                      onClick={closeMenu}
                    >
                      <action.icon className="w-5 h-5" />
                      <span>{action.label}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="pt-4 border-t border-zion-cyan/20">
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-3 text-gray-400">
                    <Phone className="w-4 h-4" />
                    <span>+1 302 464 0950</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-400">
                    <Mail className="w-4 h-4" />
                    <span>kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-400">
                    <MapPin className="w-4 h-4" />
                    <span>364 E Main St STE 1008, Middletown DE 19709</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};