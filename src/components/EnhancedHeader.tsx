import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu,
  X,
  Search,
  User,
  Bell,
  ChevronDown,
  Zap,
  Brain,
  Shield,
  Cloud,
  Rocket,
  Globe,
  Cpu,
  Lock,
  Heart,
  Users,
  ShoppingCart,
  BookOpen,
  MessageCircle,
  HelpCircle,
  DollarSign,
  Gauge,
  Workflow,
  Atom,
  Star,
  Target,
  TrendingUp,
  Award,
  Code,
  Truck,
  Building,
  BarChart3,
  PenTool,
  Eye,
  Server,
  Smartphone,
  Database,
  Network,
  Clock,
  ArrowRight,
  PanelLeft,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Satellite,
  FileText,
  Sparkles as SparklesIcon,
  Leaf,
  Link as LinkIcon,
  Layers,
  Cpu as CpuIcon,
  Database as DatabaseIcon,
  Shield as ShieldIcon,
  Zap as ZapIcon,
  Brain as BrainIcon,
  Atom as AtomIcon,
  Rocket as RocketIcon,
  Leaf as LeafIcon,
  CheckCircle,
  Home,
  Calendar
} from 'lucide-react';

interface EnhancedHeaderProps {
  onMenuClick?: () => void;
}

export function EnhancedHeader({ onMenuClick }: EnhancedHeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsSearching(true);
      // Implement search functionality
      setTimeout(() => {
        setIsSearching(false);
      }, 1000);
    }
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
      icon: Rocket,
      dropdown: [
        {
          title: 'AI & Machine Learning',
          items: [
            { name: 'AI Services', href: '/ai-services', icon: Brain },
            { name: 'AI Solutions', href: '/ai-solutions', icon: Brain },
            { name: 'AI Business Intelligence', href: '/services/ai-business-intelligence', icon: BarChart3 },
            { name: 'AI Content Creation', href: '/services/ai-content-marketing-suite', icon: PenTool },
            { name: 'AI Project Management', href: '/services/ai-project-management', icon: Workflow },
            { name: 'AI Financial Analytics', href: '/services/ai-financial-analytics', icon: DollarSign }
          ]
        },
        {
          title: 'IT & Infrastructure',
          items: [
            { name: 'IT Services', href: '/it-services', icon: Cpu },
            { name: 'Cloud & DevOps', href: '/services/cloud-devops', icon: Cloud },
            { name: 'Cybersecurity', href: '/services/ai-cybersecurity-platform', icon: Shield },
            { name: 'Digital Transformation', href: '/services/digital-transformation', icon: TrendingUp },
            { name: 'IT Infrastructure', href: '/services/it-infrastructure', icon: Server }
          ]
        },
        {
          title: 'Specialized Solutions',
          items: [
            { name: 'Micro SaaS', href: '/micro-saas', icon: ShoppingCart },
            { name: 'Quantum Computing', href: '/services/quantum-computing', icon: Atom },
            { name: 'IoT & Edge Computing', href: '/services/iot-edge-computing', icon: Cpu },
            { name: 'Space Technology', href: '/services/space-tech', icon: Satellite },
            { name: 'Green Technology', href: '/services/sustainable-technology', icon: Leaf }
          ]
        }
      ]
    },
    {
      name: 'Solutions',
      href: '/solutions',
      icon: Target,
      dropdown: [
        {
          title: 'Industry Solutions',
          items: [
            { name: 'Enterprise', href: '/solutions/enterprise', icon: Building },
            { name: 'Healthcare', href: '/solutions/healthcare', icon: Heart },
            { name: 'Financial Services', href: '/solutions/financial', icon: DollarSign },
            { name: 'Manufacturing', href: '/solutions/manufacturing', icon: Truck },
            { name: 'Government', href: '/solutions/government', icon: Building },
            { name: 'Education', href: '/solutions/education', icon: BookOpen }
          ]
        },
        {
          title: 'Technology Solutions',
          items: [
            { name: 'AI & ML Platforms', href: '/solutions/ai-ml', icon: Brain },
            { name: 'Quantum Solutions', href: '/solutions/quantum', icon: Atom },
            { name: 'Blockchain & Web3', href: '/solutions/blockchain', icon: LinkIcon },
            { name: 'Edge Computing', href: '/solutions/edge-computing', icon: CpuIcon },
            { name: 'Data Analytics', href: '/solutions/data-analytics', icon: DatabaseIcon }
          ]
        }
      ]
    },
    {
      name: 'Company',
      href: '/about',
      icon: Users,
      dropdown: [
        {
          title: 'About Us',
          items: [
            { name: 'About Zion Tech', href: '/about', icon: Building },
            { name: 'Our Team', href: '/team', icon: Users },
            { name: 'Careers', href: '/careers', icon: Award },
            { name: 'Partners', href: '/partners', icon: Users },
            { name: 'News & Press', href: '/news', icon: FileText },
            { name: 'Case Studies', href: '/case-studies', icon: BarChart3 }
          ]
        },
        {
          title: 'Resources',
          items: [
            { name: 'Blog', href: '/blog', icon: BookOpen },
            { name: 'White Papers', href: '/white-papers', icon: FileText },
            { name: 'Webinars', href: '/webinars', icon: Users },
            { name: 'Documentation', href: '/documentation', icon: FileText },
            { name: 'Help Center', href: '/help', icon: HelpCircle }
          ]
        }
      ]
    },
    {
      name: 'Support',
      href: '/support',
      icon: HelpCircle,
      dropdown: [
        {
          title: 'Get Help',
          items: [
            { name: 'Contact Us', href: '/contact', icon: MessageCircle },
            { name: 'Support Portal', href: '/support', icon: HelpCircle },
            { name: 'Status Page', href: '/status', icon: CheckCircle },
            { name: 'FAQ', href: '/faq', icon: MessageCircle },
            { name: 'Live Chat', href: '/chat', icon: MessageCircle }
          ]
        },
        {
          title: 'Developer Resources',
          items: [
            { name: 'API Reference', href: '/api', icon: Code },
            { name: 'Developer Portal', href: '/developers', icon: Cpu },
            { name: 'Documentation', href: '/documentation', icon: FileText },
            { name: 'Training', href: '/training', icon: BookOpen }
          ]
        }
      ]
    }
  ];

  const quickActions = [
    { name: 'Request Quote', href: '/request-quote', icon: DollarSign, variant: 'primary' },
    { name: 'Schedule Demo', href: '/schedule-demo', icon: Calendar, variant: 'secondary' },
    { name: 'Contact Sales', href: '/contact', icon: MessageCircle, variant: 'outline' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-slate-900/95 backdrop-blur-xl border-b border-slate-700/50 shadow-xl' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300">
                <Zap className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl lg:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  Zion Tech Group
                </h1>
                <p className="text-xs lg:text-sm text-blue-300">Future of Technology</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <div className="relative">
                    <button className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-200 py-2">
                      <span className="font-medium">{item.name}</span>
                      <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                    </button>
                    
                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-0 mt-2 w-80 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <div className="bg-slate-800/95 backdrop-blur-xl border border-slate-700/50 rounded-xl shadow-2xl p-6">
                        <div className="grid grid-cols-1 gap-6">
                          {item.dropdown.map((section, sectionIndex) => (
                            <div key={sectionIndex}>
                              <h3 className="text-sm font-semibold text-blue-400 mb-3 uppercase tracking-wider">
                                {section.title}
                              </h3>
                              <div className="space-y-2">
                                {section.items.map((link, linkIndex) => (
                                  <Link
                                    key={linkIndex}
                                    to={link.href}
                                    className="flex items-center space-x-3 p-2 rounded-lg text-gray-300 hover:text-white hover:bg-slate-700/50 transition-all duration-200 group/item"
                                  >
                                    <link.icon className="w-4 h-4 text-blue-400 group-hover/item:scale-110 transition-transform" />
                                    <span className="text-sm">{link.name}</span>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    className={`font-medium transition-colors duration-200 py-2 ${
                      location.pathname === item.href
                        ? 'text-blue-400'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="hidden md:block relative">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 px-4 py-2 pl-10 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>

            {/* Quick Actions */}
            <div className="hidden lg:flex items-center space-x-3">
              {quickActions.map((action, index) => (
                <Link
                  key={index}
                  to={action.href}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    action.variant === 'primary'
                      ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-500/25'
                      : action.variant === 'secondary'
                      ? 'bg-slate-700 hover:bg-slate-600 text-white'
                      : 'border border-slate-600 text-gray-300 hover:border-blue-500 hover:text-blue-400'
                  }`}
                >
                  {action.name}
                </Link>
              ))}
            </div>

            {/* User Menu */}
            <div className="hidden lg:flex items-center space-x-3">
              <button className="p-2 text-gray-400 hover:text-white transition-colors">
                <Bell className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-400 hover:text-white transition-colors">
                <User className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Desktop Menu Button */}
            {onMenuClick && (
              <button
                onClick={onMenuClick}
                className="hidden lg:block p-2 text-gray-400 hover:text-white transition-colors"
              >
                <Menu className="w-6 h-6" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-slate-900/95 backdrop-blur-xl border-t border-slate-700/50"
          >
            <div className="px-4 py-6 space-y-6">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 pl-10 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              </form>

              {/* Mobile Navigation */}
              <nav className="space-y-4">
                {navigationItems.map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <div>
                        <button
                          onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                          className="flex items-center justify-between w-full text-left text-gray-300 hover:text-white transition-colors py-2"
                        >
                          <span className="font-medium">{item.name}</span>
                          <ChevronDown className={`w-4 h-4 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {servicesDropdownOpen && (
                          <div className="ml-4 mt-2 space-y-2">
                            {item.dropdown.map((section, sectionIndex) => (
                              <div key={sectionIndex} className="space-y-2">
                                <h4 className="text-sm font-semibold text-blue-400 uppercase tracking-wider">
                                  {section.title}
                                </h4>
                                {section.items.map((link, linkIndex) => (
                                  <Link
                                    key={linkIndex}
                                    to={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block py-2 text-gray-400 hover:text-white transition-colors"
                                  >
                                    {link.name}
                                  </Link>
                                ))}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block py-2 transition-colors ${
                          location.pathname === item.href
                            ? 'text-blue-400'
                            : 'text-gray-300 hover:text-white'
                        }`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </nav>

              {/* Mobile Quick Actions */}
              <div className="space-y-3">
                {quickActions.map((action, index) => (
                  <Link
                    key={index}
                    to={action.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block w-full text-center px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                      action.variant === 'primary'
                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                        : action.variant === 'secondary'
                        ? 'bg-slate-700 hover:bg-slate-600 text-white'
                        : 'border border-slate-600 text-gray-300 hover:border-blue-500 hover:text-blue-400'
                    }`}
                  >
                    {action.name}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default EnhancedHeader;
