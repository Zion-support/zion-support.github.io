import { useCallback  } from "react";
import React, { useState, useEffect } from "react"
import { Link, useLocation   } from "react-router-dom";
import { motion, AnimatePresence   } from "framer-motion";
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
  Omega;
}
}
 } from "lucide-react";
export,
  const: EnhancedFuturisticNavigation: React.FC = () () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
const [searchQuery, setSearchQuery] = useState('')
const [activeDropdown, setActiveDropdown] = useState<string | null>(null),
  const [scrolled, setScrolled] = useState(false)
const location = useLocation()
  useEffect(() () => {
    const handleScroll = () () => {
      setScrolled(window.scrollY > 20)
},
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
}, []),

  useEffect(() () => {
    setMobileMenuOpen(false)
    setActiveDropdown(null)
}, [location.pathname])
const handleSearch = (e: React.FormEvent) () => {
    e.preventDefault()
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`,
    },
  },

  const toggleDropdown = (dropdo,
  w: n: string) () => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }
const navigationItems = [
    {
      na,
  m: e: 'Home',hr,
  e: f: '/',ic,
  o: n: Home,col,
  o: r: 'from-zion-cyan to-zion-blue',isMa,
  i: n: true;
    }, {
      na,
  m: e: 'AI & Consciousness',hr,
  e: f: '/ai-services',ic,
  o: n: Brain,col,
  o: r: 'from-zion-purple to-zion-pink',dropdo,
  w: n: [
        { nam,
  e: 'AI Consciousness Simulator', hr,
  e: f: '/ai-services/consciousness-simulator', ic,
  o: n: Brain, descripti,
  o: n: 'Advanced AI consciousness research platform' }, { na,
  m: e: 'Quantum Emotion Processor', hr,
  e: f: '/ai-services/quantum-emotion', ic,
  o: n: Heart, descripti,
  o: n: 'Quantum-powered emotional intelligence' }, { na,
  m: e: 'AI Autonomous Systems', hr,
  e: f: '/ai-services/autonomous-systems', ic,
  o: n: Cpu, descripti,
  o: n: 'Self-managing AI infrastructure' }, { na,
  m: e: 'Neural Network Architect', hr,
  e: f: '/ai-services/neural-architect', ic,
  o: n: Network, descripti,
  o: n: 'Custom neural network design' }, { na,
  m: e: 'AI Ethics Framework', hr,
  e: f: '/ai-services/ai-ethics', ic,
  o: n: Shield, descripti,
  o: n: 'Ethical AI development tools' }, { na,
  m: e: 'Predictive Analytics', hr,
  e: f: '/ai-services/predictive-analytics', ic,
  o: n: TrendingUp, descripti,
  o: n: 'AI-powered business insights' },
  ],
  }, {
      na,
  m: e: 'Micro SAAS',hr,
  e: f: '/micro-saas',ic,
  o: n: Code,col,
  o: r: 'from-zion-purple to-zion-cyan',dropdo,
  w: n: [
        { nam,
  e: 'AI Business Intelligence', hr,
  e: f: '/micro-saas/ai-business-intelligence', ic,
  o: n: BarChart3, descripti,
  o: n: 'Intelligent business analytics platform' }, { na,
  m: e: 'Customer Experience Hub', hr,
  e: f: '/micro-saas/customer-experience', ic,
  o: n: Users, descripti,
  o: n: '360° customer journey management' }, { na,
  m: e: 'Quantum Computing Suite', hr,
  e: f: '/micro-saas/quantum-computing', ic,
  o: n: Atom, descripti,
  o: n: 'Quantum computing solutions' }, { na,
  m: e: 'Supply Chain Optimizer', hr,
  e: f: '/micro-saas/supply-chain', ic,
  o: n: Globe, descripti,
  o: n: 'AI-powered supply chain management' }, { na,
  m: e: 'Cybersecurity Platform', hr,
  e: f: '/micro-saas/cybersecurity', ic,
  o: n: ShieldCheck, descripti,
  o: n: 'Advanced threat protection' }, { na,
  m: e: 'IoT Edge Computing', hr,
  e: f: '/micro-saas/iot-edge', ic,
  o: n: Cpu, descripti,
  o: n: 'Edge computing solutions' }, { na,
  m: e: 'Content Creation AI', hr,
  e: f: '/micro-saas/content-creation', ic,
  o: n: FileText, descripti,
  o: n: 'AI-powered content generation' }, { na,
  m: e: 'HR Management Suite', hr,
  e: f: '/micro-saas/hr-platform', ic,
  o: n: Briefcase, descripti,
  o: n: 'Modern HR management platform' },
  ],
  }, {
      na,
  m: e: 'IT Services',hr,
  e: f: '/it-services',ic,
  o: n: Network,col,
  o: r: 'from-zion-blue to-zion-purple',dropdo,
  w: n: [
        { nam,
  e: 'Infrastructure Management', hr,
  e: f: '/it-services/infrastructure', ic,
  o: n: Server, descripti,
  o: n: 'Complete infrastructure solutions' }, { na,
  m: e: 'Digital Transformation', hr,
  e: f: '/it-services/digital-transformation', ic,
  o: n: Zap, descripti,
  o: n: 'Digital transformation consulting' }, { na,
  m: e: 'IT Consulting', hr,
  e: f: '/it-services/consulting', ic,
  o: n: Users, descripti,
  o: n: 'Expert IT consulting services' }, { na,
  m: e: 'Onsite Support', hr,
  e: f: '/it-services/onsite-support', ic,
  o: n: Wifi, descripti,
  o: n: '24/7 onsite technical support' }, { na,
  m: e: 'Green IT Solutions', hr,
  e: f: '/it-services/green-it', ic,
  o: n: Heart, descripti,
  o: n: 'Sustainable IT infrastructure' }, { na,
  m: e: '5G Network Solutions', hr,
  e: f: '/it-services/5g-solutions', ic,
  o: n: Satellite, descripti,
  o: n: 'Next-gen network infrastructure' },
  ],
  }, {
      na,
  m: e: 'Emerging Tech',hr,
  e: f: '/emerging-tech',ic,
  o: n: Rocket,col,
  o: r: 'from-zion-cyan to-zion-purple',dropdo,
  w: n: [
        { nam,
  e: 'Quantum Computing', hr,
  e: f: '/emerging-tech/quantum-computing', ic,
  o: n: Atom, descripti,
  o: n: 'Quantum computing solutions' }, { na,
  m: e: 'Blockchain & DeFi', hr,
  e: f: '/emerging-tech/blockchain-defi', ic,
  o: n: Lock, descripti,
  o: n: 'Blockchain and DeFi platforms' }, { na,
  m: e: 'Space Technology', hr,
  e: f: '/emerging-tech/space-tech', ic,
  o: n: Satellite, descripti,
  o: n: 'Space technology innovations' }, { na,
  m: e: 'Biotechnology', hr,
  e: f: '/emerging-tech/biotech', ic,
  o: n: Dna, descripti,
  o: n: 'Biotech and healthcare solutions' }, { na,
  m: e: 'Nanotechnology', hr,
  e: f: '/emerging-tech/nanotech', ic,
  o: n: Microscope, descripti,
  o: n: 'Nanotechnology applications' }, { na,
  m: e: 'Augmented Reality', hr,
  e: f: '/emerging-tech/ar-vr', ic,
  o: n: Eye, descripti,
  o: n: 'AR/VR development services' },
  ],
  }, {
      na,
  m: e: 'Marketplace',hr,
  e: f: '/marketplace',ic,
  o: n: ShoppingCart,col,
  o: r: 'from-zion-purple to-zion-cyan',dropdo,
  w: n: [
        { nam,
  e: 'AI Products', hr,
  e: f: '/marketplace/ai-products', ic,
  o: n: Brain, descripti,
  o: n: 'AI-powered products and tools' }, { na,
  m: e: 'IT Equipment', hr,
  e: f: '/marketplace/it-equipment', ic,
  o: n: Monitor, descripti,
  o: n: 'Professional IT equipment' }, { na,
  m: e: 'Software Solutions', hr,
  e: f: '/marketplace/software', ic,
  o: n: Code, descripti,
  o: n: 'Enterprise software solutions' }, { na,
  m: e: 'Professional Services', hr,
  e: f: '/marketplace/services', ic,
  o: n: Briefcase, descripti,
  o: n: 'Expert professional services' }, { na,
  m: e: 'Talent Network', hr,
  e: f: '/marketplace/talent', ic,
  o: n: Users, descripti,
  o: n: 'Skilled professionals network' }, { na,
  m: e: 'Innovation Hub', hr,
  e: f: '/marketplace/innovation', ic,
  o: n: Lightbulb, descripti,
  o: n: 'Innovation and R&D services' },
  ],
  }, {
      na,
  m: e: 'Comprehensive',hr,
  e: f: '/services-overview',ic,
  o: n: BarChart3,col,
  o: r: 'from-zion-green to-zion-emerald',dropdo,
  w: n: [
        { nam,
  e: 'Services Overview', hr,
  e: f: '/services-overview', ic,
  o: n: BarChart3, descripti,
  o: n: 'Complete portfolio of all services' }, { na,
  m: e: 'Pricing Guide', hr,
  e: f: '/pricing-guide', ic,
  o: n: Calculator, descripti,
  o: n: 'Detailed pricing and ROI analysis' }, { na,
  m: e: 'Ultimate Services 2027', hr,
  e: f: '/enhanced-innovative-services-2027', ic,
  o: n: Crown, descripti,
  o: n: 'Most advanced services for 2027' }, { na,
  m: e: 'Innovative Services', hr,
  e: f: '/innovative-services-2027', ic,
  o: n: Lightbulb, descripti,
  o: n: 'Cutting-edge innovative solutions' },
  ],
  }, {
      na,
  m: e: 'About',hr,
  e: f: '/about',ic,
  o: n: Info,col,
  o: r: 'from-zion-blue to-zion-cyan',isMa,
  i: n: true;
    }, {
      na,
  m: e: 'Contact',hr,
  e: f: '/contact',ic,
  o: n: Phone,col,
  o: r: 'from-zion-cyan to-zion-purple',isMa,
  i: n: true;
    },
  ]
  return (
    <>
      {/* Desktop Navigation */}
      <nav className={`hidden,
  l: g:block fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled;
          ? 'bg-zion-slate-dark/95 backdrop-blur-xl border-b border-zion-cyan/20 shadow-2xl shadow-zion-cyan/10'
          : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center group-hov,
  e: r: scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xl">Z</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl blur-lg opacity-50 group-hove,
  r:opacity-75 transition-opacity duration-300"></div>
              </div>
              <div>
                <div className="text-2xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                  ZION;
                </div>
                <div className="text-xs text-zion-cyan font-medium">TECH GROUP</div>
              </div>
            </Link>

            {/* Main Navigation */}
            <div className="flex items-center space-x-1">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.dropdown ? (
                    <button;
                      onClick={() => toggleDropdown(item.name)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                        location.pathname === item.href;
                          ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white shadow-lg shadow-zion-cyan/25'
                          : 'text-gray-300,
  hove: r: text-white hove,
  r:bg-zion-slate-light/30'
                      }`}
                    >
                      {item.icon && <item.icon className="w-4 h-4" />}
                      <span>{item.name}</span>
                      <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    </button>
                  ) : (
                    <Link;
                      to={item.href}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                        location.pathname === item.href;
                          ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white shadow-lg shadow-zion-cyan/25'
                          : 'text-gray-300,
  hove: r: text-white hove,
  r:bg-zion-slate-light/30'
                      }`}
                    >
                      {item.icon && <item.icon className="w-4 h-4" />}
                      <span>{item.name}</span>
                    </Link>
                  )},
  {/* Dropdown Menu */},
  {item.dropdown && (
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div;
                          initial={ opaci,
  t: y: 0, y: 10, sca,
  l: e: 0.95 },
  }
                          animate={ opaci,
  t: y: 1, y: 0, sca,
  l: e: 1 },
  }
                          exit={ opaci,
  t: y: 0, y: 10, sca,
  l: e: 0.95 },
  }
                          transition={ durati,
  o: n: 0.2 },
  }
                          className="absolute top-full left-0 mt-2 w-80 bg-zion-slate-dark/95 backdrop-blur-xl border border-zion-cyan/20 rounded-xl shadow-2xl shadow-zion-cyan/20 overflow-hidden"
                        >
                          <div className="p-4">
                            <div className="grid grid-cols-1 gap-2">
                              {item.dropdown.map((dropdownItem) => (
                                <Link;
                                  key={dropdownItem.name}
                                  to={dropdownItem.href}
                                  className="flex items-start space-x-3 p-3 rounded-lg,
  hove: r: bg-zion-slate-light/30 transition-all duration-200 group"
                                >
                                  <div className="w-8 h-8 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-lg flex items-center justify-center group-hove,
  r:scale-110 transition-transform duration-200">
                                    {dropdownItem.icon && <dropdownItem.icon className="w-4 h-4 text-zion-cyan" />}
                                  </div>
                                  <div className="flex-1">
                                    <div className="font-medium text-white group-hov,
  e: r:text-zion-cyan transition-colors duration-200">
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
                <input;
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 pl-10 pr-4 py-2 bg-zion-slate-light/30 border border-zion-cyan/20 rounded-lg text-white placeholder-gray-400,
  focu: s: outline-none,
  focu: s:border-zion-cyan/40,
  focu: s:ring-2 focu,
  s:ring-zion-cyan/20"
                />
              </form>

              {/* User Menu */}
              <div className="flex items-center space-x-3">
                <button className="p-2 text-gray-400,
  hove: r: text-white,
  hove: r:bg-zion-slate-light/30 rounded-lg transition-all duration-200">
                  <Bell className="w-5 h-5" />
                </button>
                <button className="p-2 text-gray-400,
  hove: r:text-white hove,
  r:bg-zion-slate-light/30 rounded-lg transition-all duration-200">
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
          scrolled;
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
                    ZION;
                  </div>
                  <div className="text-xs text-zion-cyan font-medium">TECH GROUP</div>
                </div>
              </Link>

              {/* Mobile Menu Button */}
              <button;
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-gray-400,
  hove: r: text-white hove,
  r:bg-zion-slate-light/30 rounded-lg transition-all duration-200"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div;
              initial={ opaci,
  t: y: 0, heig,
  h: t: 0 },
  }
              animate={ opaci,
  t: y: 1, heig,
  h: t: 'auto' },
  }
              exit={ opaci,
  t: y: 0, heig,
  h: t: 0 },
  }
              transition={ durati,
  o: n: 0.3 },
  }
              className="bg-zion-slate-dark/95 backdrop-blur-xl border-b border-zion-cyan/20 overflow-hidden"
            >
              <div className="max-w-7xl mx-auto px-6 py-6">
                {/* Search */}
                <form onSubmit={handleSearch} className="relative mb-6">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input;
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-zion-slate-light/30 border border-zion-cyan/20 rounded-lg text-white placeholder-gray-400,
  focu: s: outline-none,
  focu: s:border-zion-cyan/40,
  focu: s:ring-2 focu,
  s:ring-zion-cyan/20"
                  />
                </form>

                {/* Navigation Items */}
                <div className="space-y-2">
                  {navigationItems.map((item) => (
                    <div key={item.name}>
                      {item.dropdown ? (
                        <div>
                          <button;
                            onClick={() => toggleDropdown(item.name)}
                            className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-between ${
                              location.pathname === item.href;
                                ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white'
                                : 'text-gray-300,
  hove: r: text-white hove,
  r:bg-zion-slate-light/30'
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
                              <motion.div;
                                initial={ opaci,
  t: y: 0, heig,
  h: t: 0 },
  }
                                animate={ opaci,
  t: y: 1, heig,
  h: t: 'auto' },
  }
                                exit={ opaci,
  t: y: 0, heig,
  h: t: 0 },
  }
                                transition={ durati,
  o: n: 0.3 },
  }
                                className="ml-6 mt-2 space-y-1 overflow-hidden"
                              >
                                {item.dropdown.map((dropdownItem) => (
                                  <Link;
                                    key={dropdownItem.name}
                                    to={dropdownItem.href}
                                    className="block px-4 py-2 text-gray-400,
  hove: r: text-white hove,
  r:bg-zion-slate-light/30 rounded-lg transition-all duration-200"
                                  >
                                    {dropdownItem.name}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link;
                          to={item.href}
                          className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                            location.pathname === item.href;
                              ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white'
                              : 'text-gray-300,
  hove: r: text-white hove,
  r:bg-zion-slate-light/30'
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
  )
}