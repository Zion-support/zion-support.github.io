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
  Play,
  Pause,
  Stop,
  SkipBack,
  SkipForward,
  Rewind,
  FastForward,
  Shuffle,
  Repeat,
  Repeat1,
  Shuffle2,
  SkipBack2,
  SkipForward2,
  PlayCircle,
  PauseCircle,
  StopCircle,
  SkipBackCircle,
  SkipForwardCircle,
  RewindCircle,
  FastForwardCircle,
  ShuffleCircle,
  RepeatCircle,
  Repeat1Circle,
  Shuffle2Circle,
  SkipBack2Circle,
  SkipForward2Circle,
  PlaySquare,
  PauseSquare,
  StopSquare,
  SkipBackSquare,
  SkipForwardSquare,
  RewindSquare,
  FastForwardSquare,
  ShuffleSquare,
  RepeatSquare,
  Repeat1Square,
  Shuffle2Square,
  SkipBack2Square,
  SkipForward2Square,
  PlayTriangle,
  PauseTriangle,
  StopTriangle,
  SkipBackTriangle,
  SkipForwardTriangle,
  RewindTriangle,
  FastForwardTriangle,
  ShuffleTriangle,
  RepeatTriangle,
  Repeat1Triangle,
  Shuffle2Triangle,
  SkipBack2Triangle,
  SkipForward2Triangle,
  PlayOctagon,
  PauseOctagon,
  StopOctagon,
  SkipBackOctagon,
  SkipForwardOctagon,
  RewindOctagon,
  FastForwardOctagon,
  ShuffleOctagon,
  RepeatOctagon,
  Repeat1Octagon,
  Shuffle2Octagon,
  SkipBack2Octagon,
  SkipForward2Octagon,
  PlayDodecagon,
  PauseDodecagon,
  StopDodecagon,
  SkipBackDodecagon,
  SkipForwardDodecagon,
  RewindDodecagon,
  FastForwardDodecagon,
  ShuffleDodecagon,
  RepeatDodecagon,
  Repeat1Dodecagon,
  Shuffle2Dodecagon,
  SkipBack2Dodecagon,
  SkipForward2Dodecagon
} from 'lucide-react';

export const FuturisticNavigation: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
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
  }, [location.pathname]);

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
      name: 'Micro SAAS',
      href: '/micro-saas',
      icon: Code,
      color: 'from-zion-purple to-zion-cyan',
      dropdown: [
        { name: 'AI Business Intelligence', href: '/micro-saas/ai-business-intelligence', icon: BarChart3, description: 'Intelligent business analytics platform' },
        { name: 'Customer Experience Hub', href: '/micro-saas/customer-experience', icon: Users, description: '360° customer journey management' },
        { name: 'Quantum Computing Suite', href: '/micro-saas/quantum-computing', icon: Atom, description: 'Quantum computing solutions' },
        { name: 'Supply Chain Optimizer', href: '/micro-saas/supply-chain', icon: Globe, description: 'AI-powered supply chain management' },
        { name: 'Cybersecurity Platform', href: '/micro-saas/cybersecurity', icon: ShieldCheck, description: 'Advanced threat protection' },
        { name: 'IoT Edge Computing', href: '/micro-saas/iot-edge', icon: Cpu, description: 'Edge computing solutions' },
        { name: 'Content Creation AI', href: '/micro-saas/content-creation', icon: FileText, description: 'AI-powered content generation' },
        { name: 'HR Management Suite', href: '/micro-saas/hr-platform', icon: Briefcase, description: 'Modern HR management platform' }
      ]
    },
    {
      name: 'IT Services',
      href: '/it-services',
      icon: Network,
      color: 'from-zion-blue to-zion-purple',
      dropdown: [
        { name: 'Infrastructure Management', href: '/it-services/infrastructure', icon: Server, description: 'Complete infrastructure solutions' },
        { name: 'Digital Transformation', href: '/it-services/digital-transformation', icon: Zap, description: 'Digital transformation consulting' },
        { name: 'IT Consulting', href: '/it-services/consulting', icon: Users, description: 'Expert IT consulting services' },
        { name: 'Onsite Support', href: '/it-services/onsite-support', icon: Wifi, description: '24/7 onsite technical support' },
        { name: 'Green IT Solutions', href: '/it-services/green-it', icon: Heart, description: 'Sustainable IT infrastructure' },
        { name: '5G Network Solutions', href: '/it-services/5g-solutions', icon: Satellite, description: 'Next-gen network infrastructure' }
      ]
    },
    {
      name: 'Emerging Tech',
      href: '/emerging-tech',
      icon: Rocket,
      color: 'from-zion-cyan to-zion-purple',
      dropdown: [
        { name: 'Quantum Computing', href: '/emerging-tech/quantum-computing', icon: Atom, description: 'Quantum computing solutions' },
        { name: 'Blockchain & DeFi', href: '/emerging-tech/blockchain-defi', icon: Lock, description: 'Blockchain and DeFi platforms' },
        { name: 'Space Technology', href: '/emerging-tech/space-tech', icon: Satellite, description: 'Space technology innovations' },
        { name: 'Biotechnology', href: '/emerging-tech/biotech', icon: Dna, description: 'Biotech and healthcare solutions' },
        { name: 'Nanotechnology', href: '/emerging-tech/nanotech', icon: Microscope, description: 'Nanotechnology applications' },
        { name: 'Augmented Reality', href: '/emerging-tech/ar-vr', icon: Eye, description: 'AR/VR development services' }
      ]
    },
    {
      name: 'Marketplace',
      href: '/marketplace',
      icon: ShoppingCart,
      color: 'from-zion-purple to-zion-cyan',
      dropdown: [
        { name: 'AI Products', href: '/marketplace/ai-products', icon: Brain, description: 'AI-powered products and tools' },
        { name: 'IT Equipment', href: '/marketplace/it-equipment', icon: Monitor, description: 'Professional IT equipment' },
        { name: 'Software Solutions', href: '/marketplace/software', icon: Code, description: 'Enterprise software solutions' },
        { name: 'Professional Services', href: '/marketplace/services', icon: Briefcase, description: 'Expert professional services' },
        { name: 'Talent Network', href: '/marketplace/talent', icon: Users, description: 'Skilled professionals network' },
        { name: 'Innovation Hub', href: '/marketplace/innovation', icon: Lightbulb, description: 'Innovation and R&D services' }
      ]
    },
    {
      name: 'Services Portfolio',
      href: '/expanded-services-showcase-2027',
      icon: Award,
      color: 'from-zion-cyan to-zion-blue',
      dropdown: [
        { name: 'Expanded Services 2027', href: '/expanded-services-showcase-2027', icon: Award, description: 'Complete portfolio of innovative services' },
        { name: 'AI Services', href: '/ai-services', icon: Brain, description: 'Advanced AI and machine learning solutions' },
        { name: 'Micro SAAS', href: '/micro-saas', icon: Code, description: 'Specialized micro SAAS platforms' },
        { name: 'IT Services', href: '/it-services', icon: Network, description: 'Comprehensive IT infrastructure solutions' },
        { name: 'Emerging Tech', href: '/emerging-tech', icon: Rocket, description: 'Cutting-edge technology solutions' },
        { name: 'Enterprise Solutions', href: '/enhanced-innovative-services-2027', icon: Building, description: 'Enterprise-grade innovative solutions' },
        { name: 'Expanded Pricing Guide', href: '/expanded-pricing-guide-2027', icon: DollarSign, description: 'Complete pricing information for all services' }
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