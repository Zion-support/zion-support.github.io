import React, { useState, useEffect, useCallback } from 'react';
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
  Volume1,
  Volume,
  VolumeX,
  Play,
  Pause,
  Stop,
  SkipBack,
  SkipForward,
  Rewind,
  FastForward,
  RotateCcw,
  RotateCw,
  Repeat,
  Shuffle,
  SkipBack,
  SkipForward,
  PlayCircle,
  PauseCircle,
  StopCircle,
  SkipBackCircle,
  SkipForwardCircle,
  RewindCircle,
  FastForwardCircle,
  RotateCcwCircle,
  RotateCwCircle,
  RepeatCircle,
  ShuffleCircle,
  SkipBackCircle,
  SkipForwardCircle,
  PlaySquare,
  PauseSquare,
  StopSquare,
  SkipBackSquare,
  SkipForwardSquare,
  RewindSquare,
  FastForwardSquare,
  RotateCcwSquare,
  RotateCwSquare,
  RepeatSquare,
  ShuffleSquare,
  SkipBackSquare,
  SkipForwardSquare
} from 'lucide-react';

interface NavigationItem {
  name: string;
  href: string;
  icon?: React.ComponentType<any>;
  description?: string;
  children?: NavigationItem[];
  badge?: string;
  isNew?: boolean;
  isHot?: boolean;
}

export function EnhancedNavigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigationItems: NavigationItem[] = [
    {
      name: "AI Solutions",
      href: "/ai-services",
      icon: Brain,
      description: "Cutting-edge artificial intelligence services",
      children: [
        { name: "AI Business Intelligence", href: "/services/ai-business-intelligence", icon: BarChart3 },
        { name: "AI Sales Copilot", href: "/services/ai-sales-copilot", icon: MessageCircle },
        { name: "AI Compliance Assistant", href: "/services/ai-compliance-assistant", icon: ShieldCheck },
        { name: "AI Workflow Automation", href: "/services/ai-workflow-automation", icon: Workflow },
        { name: "AI Customer Experience", href: "/services/ai-customer-experience-platform", icon: Heart },
        { name: "AI Data Governance", href: "/services/ai-data-governance", icon: Database }
      ]
    },
    {
      name: "IT Services",
      href: "/it-services",
      icon: Server,
      description: "Comprehensive technology solutions",
      children: [
        { name: "Cloud & DevOps", href: "/services/cloud-devops", icon: Cloud },
        { name: "Cybersecurity", href: "/services/ai-cybersecurity-suite", icon: Shield },
        { name: "IT Infrastructure", href: "/services/it-infrastructure", icon: Network },
        { name: "Digital Transformation", href: "/services/digital-transformation", icon: Rocket },
        { name: "Edge Computing", href: "/services/edge-computing-platform", icon: Zap },
        { name: "Green IT", href: "/services/green-it", icon: Globe }
      ]
    },
    {
      name: "Micro SaaS",
      href: "/micro-saas",
      icon: Code,
      description: "Scalable software solutions",
      children: [
        { name: "Micro SaaS Solutions", href: "/services/micro-saas-solutions", icon: Code },
        { name: "LLM Content Studio", href: "/services/llm-content-studio", icon: FileText },
        { name: "FinOps Advisor", href: "/services/finops-advisor", icon: Calculator },
        { name: "Customer Feedback Surveys", href: "/services/mobile-feedback-surveys", icon: MessageCircle }
      ]
    },
    {
      name: "Industries",
      href: "/industries",
      icon: Building,
      description: "Industry-specific solutions",
      children: [
        { name: "Healthcare Tech", href: "/services/healthcare-tech", icon: Stethoscope },
        { name: "Manufacturing", href: "/manufacturing-solutions", icon: Factory },
        { name: "Retail Solutions", href: "/retail-solutions", icon: ShoppingCart },
        { name: "Financial Services", href: "/financial-solutions", icon: DollarSign }
      ]
    },
    {
      name: "Company",
      href: "/about",
      icon: Users,
      description: "Learn about Zion Tech Group",
      children: [
        { name: "About Us", href: "/about", icon: Users },
        { name: "Team", href: "/team", icon: Users },
        { name: "Careers", href: "/careers", icon: Briefcase },
        { name: "Partners", href: "/partners", icon: Handshake },
        { name: "News", href: "/news", icon: FileText }
      ]
    }
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
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

  const toggleDropdown = useCallback((name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  }, [activeDropdown]);

  const closeAllDropdowns = useCallback(() => {
    setActiveDropdown(null);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/95 backdrop-blur-md border-b border-white/10 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Rocket className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
              </div>
              <div className="hidden sm:block">
                <div className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Zion Tech Group
                </div>
                <div className="text-xs text-gray-400">Innovation • Technology • Future</div>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative dropdown-container">
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className="flex items-center space-x-2 px-4 py-2 text-white/90 hover:text-white transition-colors duration-200 group"
                >
                  {item.icon && <item.icon className="w-4 h-4" />}
                  <span className="font-medium">{item.name}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === item.name ? 'rotate-180' : ''
                  }`} />
                </button>

                <AnimatePresence>
                  {activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 backdrop-blur-md border border-white/10 rounded-xl shadow-2xl overflow-hidden"
                    >
                      <div className="p-4">
                        <div className="mb-4">
                          <h3 className="text-lg font-semibold text-white mb-1">{item.name}</h3>
                          <p className="text-sm text-gray-400">{item.description}</p>
                        </div>
                        <div className="grid grid-cols-1 gap-2">
                          {item.children?.map((child) => (
                            <Link
                              key={child.name}
                              to={child.href}
                              onClick={closeAllDropdowns}
                              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors duration-200 group"
                            >
                              {child.icon && (
                                <div className="w-8 h-8 bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                                  <child.icon className="w-4 h-4 text-zion-cyan" />
                                </div>
                              )}
                              <div>
                                <div className="font-medium text-white group-hover:text-zion-cyan transition-colors duration-200">
                                  {child.name}
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-white/90 hover:text-white transition-colors duration-200"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </motion.button>

            {/* Notifications */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 text-white/90 hover:text-white transition-colors duration-200 relative"
              aria-label="Notifications"
            >
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </motion.button>

            {/* User menu */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 text-white/90 hover:text-white transition-colors duration-200"
              aria-label="User menu"
            >
              <User className="w-5 h-5" />
            </motion.button>

            {/* CTA Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden sm:block"
            >
              <Link
                to="/request-quote"
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-medium rounded-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
              >
                Get Quote
              </Link>
            </motion.div>

            {/* Mobile menu button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white/90 hover:text-white transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Search overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-slate-900/95 backdrop-blur-md z-50"
          >
            <div className="max-w-2xl mx-auto pt-20 px-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for services, solutions, or information..."
                  className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                  autoFocus
                />
                <button
                  onClick={() => setIsSearchOpen(false)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-slate-800/95 backdrop-blur-md border-t border-white/10"
          >
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className="block px-4 py-3 text-white hover:bg-white/5 rounded-lg transition-colors duration-200"
                  >
                    <div className="flex items-center space-x-3">
                      {item.icon && <item.icon className="w-5 h-5" />}
                      <span className="font-medium">{item.name}</span>
                    </div>
                  </Link>
                  {item.children && (
                    <div className="ml-8 mt-2 space-y-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.href}
                          className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors duration-200 text-sm"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Mobile CTA */}
              <div className="pt-4 border-t border-white/10">
                <Link
                  to="/request-quote"
                  className="block w-full text-center px-4 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-medium rounded-lg hover:shadow-lg transition-all duration-300"
                >
                  Get Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}