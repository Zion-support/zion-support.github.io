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
  SkipForward2Dodecagon,
  Home,
  Info,
  Phone,
  Mail,
  MapPin,
  Star,
  Crown,
  Gem,
  Sparkles,
  Flame,
  Thunder,
  Lightning,
  Sun,
  Moon,
  Planet,
  Galaxy,
  Universe,
  Infinity,
  Alpha,
  Beta,
  Gamma,
  Delta,
  Epsilon,
  Zeta,
  Eta,
  Theta,
  Iota,
  Kappa,
  Lambda,
  Mu,
  Nu,
  Xi,
  Omicron,
  Pi,
  Rho,
  Sigma,
  Tau,
  Upsilon,
  Phi,
  Chi,
  Psi,
  Omega
} from 'lucide-react';

export const EnhancedFuturisticNavigation: React.FC = () => {
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
      name: 'Home',
      href: '/',
      icon: Home,
      color: 'from-zion-cyan to-zion-blue',
      isMain: true
    },
    {
      name: 'AI & Consciousness',
      href: '/ai-services',
      icon: Brain,
      color: 'from-zion-purple to-zion-pink',
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
    },
    {
      name: 'About',
      href: '/about',
      icon: Info,
      color: 'from-zion-blue to-zion-cyan',
      isMain: true
    },
    {
      name: 'Contact',
      href: '/contact',
      icon: Phone,
      color: 'from-zion-cyan to-zion-purple',
      isMain: true
    }
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={`hidden lg:block fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-zion-slate-dark/95 backdrop-blur-xl border-b border-zion-cyan/20 shadow-2xl shadow-zion-cyan/10' 
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xl">Z</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              </div>
              <div>
                <div className="text-2xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                  ZION
                </div>
                <div className="text-xs text-zion-cyan font-medium">TECH GROUP</div>
              </div>
            </Link>

            {/* Main Navigation */}
            <div className="flex items-center space-x-1">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.dropdown ? (
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                        location.pathname === item.href
                          ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white shadow-lg shadow-zion-cyan/25'
                          : 'text-gray-300 hover:text-white hover:bg-zion-slate-light/30'
                      }`}
                    >
                      {item.icon && <item.icon className="w-4 h-4" />}
                      <span>{item.name}</span>
                      <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                        location.pathname === item.href
                          ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white shadow-lg shadow-zion-cyan/25'
                          : 'text-gray-300 hover:text-white hover:bg-zion-slate-light/30'
                      }`}
                    >
                      {item.icon && <item.icon className="w-4 h-4" />}
                      <span>{item.name}</span>
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  {item.dropdown && (
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-80 bg-zion-slate-dark/95 backdrop-blur-xl border border-zion-cyan/20 rounded-xl shadow-2xl shadow-zion-cyan/20 overflow-hidden"
                        >
                          <div className="p-4">
                            <div className="grid grid-cols-1 gap-2">
                              {item.dropdown.map((dropdownItem) => (
                                <Link
                                  key={dropdownItem.name}
                                  to={dropdownItem.href}
                                  className="flex items-start space-x-3 p-3 rounded-lg hover:bg-zion-slate-light/30 transition-all duration-200 group"
                                >
                                  <div className="w-8 h-8 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                                    {dropdownItem.icon && <dropdownItem.icon className="w-4 h-4 text-zion-cyan" />}
                                  </div>
                                  <div className="flex-1">
                                    <div className="font-medium text-white group-hover:text-zion-cyan transition-colors duration-200">
                                      {dropdownItem.name}
                                    </div>
                                    <div className="text-sm text-gray-400 mt-1">
                                      {dropdownItem.description}
                                    </div>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 pl-10 pr-4 py-2 bg-zion-slate-light/30 border border-zion-cyan/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-zion-cyan/40 focus:ring-2 focus:ring-zion-cyan/20"
                />
              </form>

              {/* User Menu */}
              <div className="flex items-center space-x-3">
                <button className="p-2 text-gray-400 hover:text-white hover:bg-zion-slate-light/30 rounded-lg transition-all duration-200">
                  <Bell className="w-5 h-5" />
                </button>
                <button className="p-2 text-gray-400 hover:text-white hover:bg-zion-slate-light/30 rounded-lg transition-all duration-200">
                  <User className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="lg:hidden fixed top-0 left-0 right-0 z-50">
        <div className={`transition-all duration-500 ${
          scrolled 
            ? 'bg-zion-slate-dark/95 backdrop-blur-xl border-b border-zion-cyan/20 shadow-2xl shadow-zion-cyan/10' 
            : 'bg-transparent'
        }`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center justify-between h-20">
              {/* Logo */}
              <Link to="/" className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">Z</span>
                </div>
                <div>
                  <div className="text-xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                    ZION
                  </div>
                  <div className="text-xs text-zion-cyan font-medium">TECH GROUP</div>
                </div>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-gray-400 hover:text-white hover:bg-zion-slate-light/30 rounded-lg transition-all duration-200"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
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
              transition={{ duration: 0.3 }}
              className="bg-zion-slate-dark/95 backdrop-blur-xl border-b border-zion-cyan/20 overflow-hidden"
            >
              <div className="max-w-7xl mx-auto px-6 py-6">
                {/* Search */}
                <form onSubmit={handleSearch} className="relative mb-6">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-zion-slate-light/30 border border-zion-cyan/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-zion-cyan/40 focus:ring-2 focus:ring-zion-cyan/20"
                  />
                </form>

                {/* Navigation Items */}
                <div className="space-y-2">
                  {navigationItems.map((item) => (
                    <div key={item.name}>
                      {item.dropdown ? (
                        <div>
                          <button
                            onClick={() => toggleDropdown(item.name)}
                            className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-between ${
                              location.pathname === item.href
                                ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white'
                                : 'text-gray-300 hover:text-white hover:bg-zion-slate-light/30'
                            }`}
                          >
                            <div className="flex items-center space-x-3">
                              {item.icon && <item.icon className="w-4 h-4" />}
                              <span>{item.name}</span>
                            </div>
                            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                              activeDropdown === item.name ? 'rotate-180' : ''
                            }`} />
                          </button>
                          
                          {/* Mobile Dropdown */}
                          <AnimatePresence>
                            {activeDropdown === item.name && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="ml-6 mt-2 space-y-1 overflow-hidden"
                              >
                                {item.dropdown.map((dropdownItem) => (
                                  <Link
                                    key={dropdownItem.name}
                                    to={dropdownItem.href}
                                    className="block px-4 py-2 text-gray-400 hover:text-white hover:bg-zion-slate-light/30 rounded-lg transition-all duration-200"
                                  >
                                    {dropdownItem.name}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          to={item.href}
                          className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                            location.pathname === item.href
                              ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white'
                              : 'text-gray-300 hover:text-white hover:bg-zion-slate-light/30'
                          }`}
                        >
                          <div className="flex items-center space-x-3">
                            {item.icon && <item.icon className="w-4 h-4" />}
                            <span>{item.name}</span>
                          </div>
                        </Link>
                      )}
                    </div>
                  ))}
                </div>

                {/* Contact Info */}
                <div className="mt-8 pt-6 border-t border-zion-cyan/20">
                  <div className="text-center">
                    <div className="text-zion-cyan font-semibold mb-2">Contact Us</div>
                    <div className="text-sm text-gray-400 space-y-1">
                      <div>+1 302 464 0950</div>
                      <div>kleber@ziontechgroup.com</div>
                      <div>364 E Main St STE 1008</div>
                      <div>Middletown DE 19709</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Spacer for fixed navigation */}
      <div className="h-20"></div>
    </>
  );
};