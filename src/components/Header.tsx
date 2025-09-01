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
  Cloud,
  DollarSign,
  Briefcase,
  Newspaper,
  Building,
  Heart,
  Truck,
  ShoppingCart,
  Camera,
  Video,
  Headphones,
  Monitor,
  Laptop,
  Tablet,
  Watch,
  Car,
  Plane,
  Ship,
  Train,
  Bus,
  Bicycle,
  Motorcycle,
  Scooter,
  Skateboard,
  Rollerblade,
  Snowboard,
  Surfboard,
  Tent,
  Umbrella,
  Sunglasses,
  Hat
} from 'lucide-react';

interface HeaderProps {
  onMenuClick?: () => void;
  className?: string;
}

function Header({ onMenuClick, className }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [searchQuery, setSearchQuery] = useState('');

  const navigation = [
    {
      name: 'Services',
      href: '/services',
      icon: Zap,
      dropdown: [
        // AI & Analytics Services
        { name: 'AI Customer Experience Platform', href: '/services/ai-customer-experience-platform', icon: Brain, price: '$2,499/month' },
        { name: 'AI Cybersecurity Threat Detection', href: '/services/ai-cybersecurity-threat-detection', icon: Shield, price: '$3,999/month' },
        { name: 'Autonomous Business Operations', href: '/services/autonomous-business-operations', icon: Bot, price: '$5,999/month' },
        { name: 'AI Content Generation Platform', href: '/services/ai-content-generation-platform', icon: FileText, price: '$1,999/month' },
        { name: 'AI Healthcare Diagnostics', href: '/services/ai-healthcare-diagnostics', icon: Heart, price: '$4,999/month' },
        
        // Quantum Computing Services
        { name: 'Quantum AI Trading Platform', href: '/services/quantum-ai-trading-platform', icon: Atom, price: '$8,999/month' },
        { name: 'Quantum Neural Network Platform', href: '/services/quantum-neural-network-platform', icon: Sparkles, price: '$12,999/month' },
        
        // Blockchain & IoT Services
        { name: 'Blockchain Enterprise Solutions', href: '/services/blockchain-enterprise-solutions', icon: Lock, price: '$3,999/month' },
        { name: 'IoT Edge Computing Platform', href: '/services/iot-edge-computing-platform', icon: Activity, price: '$2,499/month' },
        
        // Supply Chain & Logistics
        { name: 'AI Supply Chain Optimization', href: '/services/ai-supply-chain-optimization', icon: Truck, price: '$3,499/month' },
        
        // Comprehensive Service Pages
        { name: 'All AI Services', href: '/services/ai-solutions', icon: Brain },
        { name: 'All Cybersecurity Services', href: '/services/cybersecurity', icon: Shield },
        { name: 'All Quantum Services', href: '/services/quantum-computing', icon: Atom },
        { name: 'Comprehensive Services', href: '/comprehensive-services', icon: Globe },
        { name: 'Revolutionary Services', href: '/revolutionary-services', icon: Sparkles },
        { name: 'New Services 2025', href: '/new-services-2025', icon: Star },
        { name: 'Enhanced Services 2025', href: '/enhanced-new-services-2025', icon: Star },
        { name: 'Pricing', href: '/pricing', icon: DollarSign }
      ]
    },
    {
      name: 'Solutions',
      href: '/solutions',
      icon: Target,
      dropdown: [
        { name: 'Enterprise Solutions', href: '/solutions/enterprise', icon: Building },
        { name: 'AI Business Intelligence', href: '/solutions/ai-business-intelligence', icon: Brain },
        { name: 'Quantum AI Platform', href: '/solutions/quantum-ai-platform', icon: Atom },
        { name: 'Digital Twin Solutions', href: '/solutions/digital-twin', icon: Eye },
        { name: 'Zero Trust Security', href: '/solutions/zero-trust-security', icon: Shield },
        { name: 'Smart City Solutions', href: '/solutions/smart-cities', icon: Building2 },
        { name: 'Healthcare Solutions', href: '/solutions/healthcare', icon: Heart },
        { name: 'Financial Solutions', href: '/solutions/financial', icon: DollarSign },
        { name: 'Manufacturing Solutions', href: '/solutions/manufacturing', icon: Cpu },
        { name: 'Retail Solutions', href: '/solutions/retail', icon: ShoppingCart }
      ]
    },
    {
      name: 'Industries',
      href: '/industries',
      icon: Building2,
      dropdown: [
        { name: 'Healthcare & Life Sciences', href: '/industries/healthcare', icon: Heart },
        { name: 'Financial Services', href: '/industries/financial', icon: DollarSign },
        { name: 'Manufacturing', href: '/industries/manufacturing', icon: Cpu },
        { name: 'Retail & E-commerce', href: '/industries/retail', icon: ShoppingCart },
        { name: 'Energy & Utilities', href: '/industries/energy', icon: Zap },
        { name: 'Transportation & Logistics', href: '/industries/transportation', icon: Truck },
        { name: 'Government & Public Sector', href: '/industries/government', icon: Building },
        { name: 'Education', href: '/industries/education', icon: GraduationCap },
        { name: 'Media & Entertainment', href: '/industries/media', icon: Video },
        { name: 'Real Estate', href: '/industries/real-estate', icon: Building2 }
      ]
    },
    {
      name: 'About',
      href: '/about',
      icon: Users,
      dropdown: [
        { name: 'Our Story', href: '/about/story', icon: FileText },
        { name: 'Team', href: '/about/team', icon: Users },
        { name: 'Careers', href: '/careers', icon: Briefcase },
        { name: 'Partners', href: '/partners', icon: Network },
        { name: 'Press', href: '/press', icon: Newspaper },
        { name: 'Awards & Recognition', href: '/about/awards', icon: Award },
        { name: 'Leadership', href: '/about/leadership', icon: Users2 },
        { name: 'Culture', href: '/about/culture', icon: Heart }
      ]
    },
    {
      name: 'Resources',
      href: '/resources',
      icon: FileText,
      dropdown: [
        { name: 'Blog', href: '/blog', icon: Newspaper },
        { name: 'Case Studies', href: '/case-studies', icon: FileText },
        { name: 'Research & Development', href: '/research-development', icon: Activity },
        { name: 'White Papers', href: '/white-papers', icon: FileText },
        { name: 'Webinars', href: '/webinars', icon: Video },
        { name: 'Events', href: '/events', icon: Calendar },
        { name: 'Documentation', href: '/docs', icon: FileText },
        { name: 'API Reference', href: '/api', icon: Cpu },
        { name: 'Sitemap', href: '/sitemap', icon: FileText },
        { name: 'Support', href: '/support', icon: HelpCircle },
        { name: 'Training', href: '/training', icon: GraduationCap },
        { name: 'Helpdesk', href: '/help', icon: HelpCircle },
        { name: 'FAQ', href: '/faq', icon: HelpCircle }
      ]
    },
    {
      name: 'Contact',
      href: '/contact',
      icon: Phone
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  const quickLinks = [
    { name: 'AI Services', href: '/services/ai-solutions', icon: Brain },
    { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield },
    { name: 'Quantum Computing', href: '/services/quantum-computing', icon: Atom },
    { name: 'Blockchain', href: '/services/blockchain-enterprise-solutions', icon: Lock },
    { name: 'IoT & Edge', href: '/services/iot-edge-computing-platform', icon: Activity },
    { name: 'Healthcare AI', href: '/services/ai-healthcare-diagnostics', icon: Heart },
    { name: 'Contact', href: '/contact', icon: Phone }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-md border-b border-gray-800/50 shadow-lg' : 'bg-transparent'
      } ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
              </div>
              <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Zion Tech Group
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.href}
                  className="flex items-center space-x-1 text-gray-300 hover:text-white transition-colors duration-200 font-medium"
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                  {item.dropdown && <ChevronDown className="w-3 h-3" />}
                </Link>
                
                {/* Dropdown Menu */}
                {item.dropdown && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-gray-900/95 backdrop-blur-md border border-gray-700 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="p-4">
                      <div className="grid gap-2">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-200 group/item"
                          >
                            <div className="flex items-center space-x-3">
                              <subItem.icon className="w-4 h-4 text-blue-400" />
                              <span className="text-gray-300 group-hover/item:text-white transition-colors duration-200">
                                {subItem.name}
                              </span>
                            </div>
                            {subItem.price && (
                              <span className="text-sm text-green-400 font-medium">
                                {subItem.price}
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  item.current
                    ? 'text-cyan-400 bg-gray-800/50'
                    : 'text-gray-300 hover:text-cyan-400 hover:bg-gray-800/30'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-gray-400 hover:text-white transition-colors duration-200"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-400 hover:text-white transition-colors duration-200"
            >
              {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            </button>

            {/* Contact Button */}
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
            >
              <Phone className="w-4 h-4 mr-2" />
              Contact Us
            </Link>

            {/* CTA Button */}
            <Link
              to="/request-quote"
              className="hidden sm:inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Get Quote
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors duration-200"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="py-4 border-t border-gray-700">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search services, solutions, or resources..."
                className="w-full px-4 py-3 pl-12 bg-gray-800/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            </form>
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-700">
          <div className="px-4 py-6 space-y-6">
            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
                Quick Links
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {quickLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center space-x-3 p-3 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors duration-200"
                  >
                    <link.icon className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300">{link.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Main Navigation */}
            <div className="space-y-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-800/50 transition-colors duration-200"
                  >
                    <div className="flex items-center space-x-3">
                      <item.icon className="w-5 h-5 text-blue-400" />
                      <span className="text-gray-300 font-medium">{item.name}</span>
                    </div>
                    {item.dropdown && <ChevronRight className="w-4 h-4 text-gray-400" />}
                  </Link>
                  
                  {/* Mobile Dropdown */}
                  {item.dropdown && (
                    <div className="ml-8 mt-2 space-y-1">
                      {item.dropdown.slice(0, 5).map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="flex items-center justify-between p-2 rounded hover:bg-gray-800/30 transition-colors duration-200"
                        >
                          <span className="text-sm text-gray-400">{subItem.name}</span>
                          {subItem.price && (
                            <span className="text-xs text-green-400">{subItem.price}</span>
                          )}
                        </Link>
                      ))}
                      {item.dropdown.length > 5 && (
                        <Link
                          to={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="text-sm text-blue-400 hover:text-blue-300 transition-colors duration-200"
                        >
                          View all {item.name.toLowerCase()} →
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Contact Information */}
            <div className="pt-6 border-t border-gray-700">
              <div className="space-y-3">
                <a
                  href="tel:+13024640950"
                  className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200"
                >
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span>+1 302 464 0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200"
                >
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span>kleber@ziontechgroup.com</span>
                </a>
                <div className="flex items-start space-x-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-blue-400 mt-0.5" />
                  <span className="text-sm">
                    364 E Main St STE 1008<br />
                    Middletown DE 19709
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
