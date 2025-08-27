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
  Building,
  Leaf,
  Space,
  Handshake,
  Calendar
} from 'lucide-react';

export const FuturisticNavigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const navigationItems = [
    {
      name: 'Cutting-Edge Innovations',
      href: '/innovative-services',
      icon: Zap,
      color: 'from-zion-cyan to-zion-purple',
      dropdown: [
        { name: 'AI Business Automation', href: '/innovative-services#ai-automation', icon: Brain, description: 'AI-powered business process automation' },
        { name: 'Quantum Computing Services', href: '/innovative-services#quantum-computing', icon: Atom, description: 'Quantum computing as a service' },
        { name: 'Enterprise Blockchain', href: '/innovative-services#blockchain', icon: Lock, description: 'Enterprise blockchain solutions' },
        { name: 'IoT Edge Computing', href: '/innovative-services#iot-edge', icon: Wifi, description: 'IoT and edge computing platform' },
        { name: 'Zero Trust Security', href: '/innovative-services#cybersecurity', icon: Shield, description: 'Advanced cybersecurity platform' },
        { name: 'Digital Twin Technology', href: '/innovative-services#digital-twin', icon: Eye, description: 'Digital twin and simulation platform' },
        { name: 'Metaverse & VR', href: '/innovative-services#metaverse', icon: Globe2, description: 'Metaverse and virtual reality platform' },
        { name: 'Green Tech Solutions', href: '/innovative-services#green-tech', icon: Leaf, description: 'Sustainability and green technology' }
      ]
    },
    {
      name: 'AI Services',
      href: '/ai-services',
      icon: Brain,
      color: 'from-zion-cyan to-zion-blue',
      dropdown: [
        { name: 'AI Consciousness Simulator', href: '/ai-services/consciousness-simulator', icon: Brain, description: 'Advanced AI consciousness research platform' },
        { name: 'Quantum Emotion Processor', href: '/ai-services/quantum-emotion', icon: Heart, description: 'Quantum-powered emotional intelligence' },
        { name: 'AI Autonomous Systems', href: '/ai-services/autonomous-systems', icon: Cpu, description: 'Self-managing AI infrastructure' },
        { name: 'Neural Network Architect', href: '/ai-services/neural-architect', icon: Network, description: 'Custom neural network design' },
        { name: 'AI Ethics Framework', href: '/ai-services/ai-ethics', icon: Shield, description: 'Ethical AI development tools' },
        { name: 'Predictive Analytics', href: '/ai-services/predictive-analytics', icon: TrendingUp, description: 'AI-powered business insights' }
      ]
    },
    {
      name: 'IT Services',
      href: '/it-services',
      icon: Network,
      color: 'from-zion-blue to-zion-purple',
      dropdown: [
        { name: 'Infrastructure Management', href: '/services/infrastructure', icon: Server, description: 'Complete infrastructure solutions' },
        { name: 'Digital Transformation', href: '/services/digital-transformation', icon: Zap, description: 'Digital transformation consulting' },
        { name: 'IT Consulting', href: '/services/consulting', icon: Users, description: 'Expert IT consulting services' },
        { name: 'Enterprise IT', href: '/services/enterprise-it', icon: Building, description: 'Enterprise-grade IT solutions' },
        { name: 'Green IT Solutions', href: '/services/green-it', icon: Leaf, description: 'Sustainable IT infrastructure' },
        { name: 'Space Technology', href: '/services/space-technology', icon: Space, description: 'Space tech solutions' }
      ]
    },
    {
      name: 'Solutions',
      href: '/solutions',
      icon: Target,
      color: 'from-zion-purple to-zion-cyan',
      dropdown: [
        { name: 'Business Solutions', href: '/solutions/business', icon: Briefcase, description: 'Comprehensive business solutions' },
        { name: 'Technology Solutions', href: '/solutions/technology', icon: Cpu, description: 'Advanced technology solutions' },
        { name: 'Industry Solutions', href: '/solutions/industry', icon: Building, description: 'Industry-specific solutions' },
        { name: 'Innovation Hub', href: '/solutions/innovation', icon: Lightbulb, description: 'Innovation and R&D services' }
      ]
    },
    {
      name: 'Company',
      href: '/about',
      icon: Building,
      color: 'from-zion-cyan to-zion-purple',
      dropdown: [
        { name: 'About Us', href: '/about', icon: Building, description: 'Learn about our mission and values' },
        { name: 'Team', href: '/team', icon: Users, description: 'Meet our expert team' },
        { name: 'Careers', href: '/careers', icon: Briefcase, description: 'Join our team' },
        { name: 'Partners', href: '/partners', icon: Handshake, description: 'Strategic partnerships' },
        { name: 'News', href: '/news', icon: FileText, description: 'Latest company updates' },
        { name: 'Events', href: '/events', icon: Calendar, description: 'Upcoming events' }
      ]
    },
    {
      name: 'Resources',
      href: '/resources',
      icon: BookOpen,
      color: 'from-zion-purple to-zion-cyan',
      dropdown: [
        { name: 'Blog', href: '/blog', icon: FileText, description: 'Industry insights and articles' },
        { name: 'Case Studies', href: '/case-studies', icon: BarChart3, description: 'Success stories and results' },
        { name: 'White Papers', href: '/white-papers', icon: FileText, description: 'In-depth research and analysis' },
        { name: 'Webinars', href: '/webinars', icon: Video, description: 'Educational webinars' },
        { name: 'FAQ', href: '/faq', icon: HelpCircle, description: 'Frequently asked questions' },
        { name: 'Support', href: '/support', icon: HelpCircle, description: 'Technical support and help' }
      ]
    },
    {
      name: 'Comprehensive',
      href: '/services-overview',
      icon: BarChart3,
      color: 'from-zion-green to-zion-emerald',
      dropdown: [
        { name: 'Services Overview', href: '/services-overview', icon: BarChart3, description: 'Complete portfolio of all services' },
        { name: 'Pricing Guide', href: '/pricing-guide', icon: Calculator, description: 'Detailed pricing and ROI analysis' },
        { name: 'Ultimate Services 2027', href: '/enhanced-innovative-services-2027', icon: Crown, description: 'Most advanced services for 2027' },
        { name: 'Innovative Services', href: '/innovative-services-2027', icon: Lightbulb, description: 'Cutting-edge innovative solutions' }
      ]
    }
  ];

  return (
    <>
      <header className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        scrolled 
          ? 'bg-zion-slate-dark/95 backdrop-blur-xl border-b border-zion-cyan/20 shadow-2xl shadow-zion-cyan/10' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Enhanced Logo */}
            <motion.div 
              className="flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link to="/" className="flex items-center space-x-3 group">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan via-zion-purple to-zion-blue rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg shadow-zion-cyan/25">
                    <span className="text-2xl font-bold text-white">Z</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan via-zion-purple to-zion-blue rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan via-zion-purple to-zion-blue rounded-xl blur-xl opacity-25 group-hover:opacity-50 transition-opacity duration-300"></div>
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
                    ZION TECH GROUP
                  </h1>
                  <p className="text-xs text-zion-slate-light font-medium">Innovation • Intelligence • Impact</p>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigationItems.map((item, index) => (
                <div key={item.name} className="relative">
                  <motion.button
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    onClick={() => toggleDropdown(item.name)}
                    className={`nav-link flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 group ${
                      activeDropdown === item.name 
                        ? 'text-zion-cyan bg-zion-cyan/10 shadow-lg shadow-zion-cyan/20' 
                        : 'hover:text-zion-cyan hover:bg-zion-cyan/5 hover:shadow-lg hover:shadow-zion-cyan/10'
                    }`}
                  >
                    <item.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                    <span className="font-medium">{item.name}</span>
                    <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  </motion.button>

                  {/* Enhanced Dropdown Menu */}
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-80 bg-zion-slate-dark/95 backdrop-blur-xl border border-zion-cyan/20 rounded-xl shadow-2xl shadow-zion-cyan/20 overflow-hidden"
                      >
                        <div className="p-4">
                          <div className="mb-4">
                            <h3 className="text-lg font-semibold text-zion-cyan mb-2">{item.name}</h3>
                            <div className="w-16 h-1 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full"></div>
                          </div>
                          <div className="space-y-2">
                            {item.dropdown.map((subItem, subIndex) => (
                              <motion.div
                                key={subItem.name}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: subIndex * 0.05 }}
                              >
                                <Link
                                  to={subItem.href}
                                  className="flex items-start space-x-3 p-3 rounded-lg hover:bg-zion-cyan/10 transition-all duration-300 group"
                                >
                                  <div className="w-8 h-8 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <subItem.icon className="w-4 h-4 text-zion-cyan" />
                                  </div>
                                  <div className="flex-1">
                                    <h4 className="font-medium text-white group-hover:text-zion-cyan transition-colors duration-300">
                                      {subItem.name}
                                    </h4>
                                    <p className="text-sm text-zion-slate-light mt-1">
                                      {subItem.description}
                                    </p>
                                  </div>
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </nav>

            {/* Right side actions */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <form onSubmit={handleSearch} className="hidden md:block">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-64 px-4 py-2 pl-10 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan/50 transition-all duration-300"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zion-slate-light" />
                </div>
              </form>

              {/* User actions */}
              <div className="flex items-center space-x-2">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-all duration-300"
                >
                  <Bell className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-all duration-300"
                >
                  <User className="w-5 h-5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-all duration-300"
                >
                  <ShoppingCart className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Mobile menu button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-all duration-300"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-zion-slate-dark/95 backdrop-blur-xl border-t border-zion-cyan/20"
            >
              <div className="container mx-auto px-4 py-6 space-y-4">
                {/* Mobile Search */}
                <form onSubmit={handleSearch}>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search services..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full px-4 py-3 pl-10 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan/50"
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zion-slate-light" />
                  </div>
                </form>

                {/* Mobile Navigation Items */}
                <div className="space-y-2">
                  {navigationItems.map((item) => (
                    <div key={item.name} className="border-b border-zion-cyan/10 pb-2">
                      <Link
                        to={item.href}
                        className="flex items-center space-x-3 p-3 text-white hover:text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-all duration-300"
                      >
                        <item.icon className="w-5 h-5" />
                        <span className="font-medium">{item.name}</span>
                      </Link>
                      <div className="ml-8 mt-2 space-y-1">
                        {item.dropdown.slice(0, 3).map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="block p-2 text-sm text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/5 rounded transition-all duration-300"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};