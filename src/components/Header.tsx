import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  Search,
  User,
  Bell,
  Settings,
  LogOut,
  ChevronDown,
  Globe,
  Sun,
  Moon,
  Zap,
  Brain,
  Shield,
  Users,
  HardDrive,
  TrendingUp,
  Building2,
  FileText,
  HelpCircle,
  BarChart3,
  ArrowRight,
  CheckCircle,
  Star,
  Play,
  ChevronLeft,
  ChevronRight,
  Rocket,
  Target,
  Handshake,
  Lightbulb,
  Cpu,
  Database,
  Network,
  Smartphone,
  Lock,
  Code,
  Server,
  Chip,
  Wifi,
  ShieldCheck,
  Bot,
  Workflow,
  Eye,
  Sparkles,
  Atom,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  MessageCircle,
  BarChart,
  Users2,
  Settings as SettingsIcon,
  Palette,
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  Cloud
} from 'lucide-react';

interface HeaderProps {
  className?: string;
}

export default function Header({ className }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const handleSearch = () => {
    // Add search logic here
    console.log('Searching for:', searchQuery);
  };

  const navigationItems = [
    {
      label: 'Home',
      href: '/',
      icon: Building2
    },
    {
      label: 'Services',
      href: '/services',
      icon: Zap,
      subItems: [
        { label: 'AI Services', href: '/services/ai', icon: Brain },
        { label: 'Micro SaaS', href: '/services/micro-saas', icon: Rocket },
        { label: 'IT Infrastructure', href: '/services/it-infrastructure', icon: Server },
        { label: 'Enterprise Solutions', href: '/services/enterprise', icon: Building2 },
        { label: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield },
        { label: 'Cloud Computing', href: '/services/cloud', icon: Cloud }
      ]
    },
    {
      label: 'Solutions',
      href: '/solutions',
      icon: Lightbulb,
      subItems: [
        { label: 'Digital Transformation', href: '/solutions/digital-transformation', icon: Sparkles },
        { label: 'Business Automation', href: '/solutions/automation', icon: Bot },
        { label: 'Data Analytics', href: '/solutions/analytics', icon: BarChart3 },
        { label: 'Custom Development', href: '/solutions/development', icon: Code }
      ]
    },
    {
      label: 'Pricing',
      href: '/pricing',
      icon: DollarSign
    },
    {
      label: 'About',
      href: '/about',
      icon: Users,
      subItems: [
        { label: 'Our Team', href: '/about/team', icon: Users2 },
        { label: 'Careers', href: '/careers', icon: Target },
        { label: 'Partners', href: '/partners', icon: Handshake }
      ]
    },
    {
      label: 'Contact',
      href: '/contact',
      icon: MessageCircle
    }
  ];

  const DollarSign = () => <span>$</span>;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-black/95 backdrop-blur-md border-b border-gray-800/50 shadow-lg"
          : "bg-transparent"
      } ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl lg:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                Zion Tech Group
              </h1>
              <p className="text-xs lg:text-sm text-gray-400 group-hover:text-cyan-400 transition-colors">
                Innovation & Technology
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.label} className="relative group">
                <Link
                  to={item.href}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    location.pathname === item.href || location.pathname.startsWith(item.href + '/')
                      ? 'text-cyan-400 bg-cyan-500/10'
                      : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                  {item.subItems && <ChevronDown className="w-3 h-3" />}
                </Link>

                {/* Dropdown Menu */}
                {item.subItems && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-slate-800/95 backdrop-blur-sm rounded-xl border border-slate-700 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="p-2">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.label}
                          to={subItem.href}
                          className="flex items-center space-x-3 px-3 py-2 rounded-lg text-sm text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors duration-200"
                        >
                          <subItem.icon className="w-4 h-4" />
                          <span>{subItem.label}</span>
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
            
            {/* Search Button */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-gray-300 hover:text-cyan-400 transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-300 hover:text-cyan-400 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Contact Info */}
            <div className="hidden xl:flex items-center space-x-4 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center px-6 py-2 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-colors duration-300"
            >
              Get Started
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-300 hover:text-cyan-400 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700">
            <div className="p-4 space-y-2">
              {navigationItems.map((item) => (
                <div key={item.label}>
                  <Link
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center space-x-3 px-3 py-3 rounded-lg text-sm font-medium transition-colors ${
                      location.pathname === item.href
                        ? 'text-cyan-400 bg-cyan-500/10'
                        : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10'
                    }`}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </Link>
                  
                  {/* Mobile Submenu */}
                  {item.subItems && (
                    <div className="ml-8 mt-2 space-y-1">
                      {item.subItems.map((subItem) => (
                        <Link
                          key={subItem.label}
                          to={subItem.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="flex items-center space-x-3 px-3 py-2 rounded-lg text-sm text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10 transition-colors"
                        >
                          <subItem.icon className="w-4 h-4" />
                          <span>{subItem.label}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-slate-700">
                <div className="space-y-2 text-sm text-gray-300">
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-cyan-400" />
                    <span>+1 302 464 0950</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-cyan-400" />
                    <span>kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-cyan-400" />
                    <span>364 E Main St STE 1008, Middletown, DE 19709</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Search Overlay */}
        {isSearchOpen && (
          <div className="absolute top-full left-0 right-0 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 p-4">
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search services, solutions, or documentation..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500"
                  autoFocus
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}