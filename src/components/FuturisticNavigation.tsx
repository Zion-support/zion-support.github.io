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

  // Enhanced service categories with better organization
  const serviceCategories = [
    {
      name: "AI & Machine Learning",
      icon: Brain,
      services: [
        { name: "AI Services", href: "/ai-services" },
        { name: "Machine Learning", href: "/ai-services/machine-learning" },
        { name: "Computer Vision", href: "/ai-services/computer-vision" },
        { name: "Natural Language Processing", href: "/ai-services/nlp" },
        { name: "Autonomous AI Agents", href: "/ai-services/autonomous-agents" }
      ]
    },
    {
      name: "Micro SAAS Solutions",
      icon: Cloud,
      services: [
        { name: "Micro SAAS Services", href: "/micro-saas" },
        { name: "Business Tools", href: "/micro-saas/business-tools" },
        { name: "Productivity Apps", href: "/micro-saas/productivity" },
        { name: "Industry Solutions", href: "/micro-saas/industry" },
        { name: "Custom Development", href: "/micro-saas/custom" }
      ]
    },
    {
      name: "IT Infrastructure",
      icon: Server,
      services: [
        { name: "IT Services", href: "/it-services" },
        { name: "Cloud Solutions", href: "/it-services/cloud" },
        { name: "Cybersecurity", href: "/it-services/cybersecurity" },
        { name: "DevOps & Automation", href: "/it-services/devops" },
        { name: "Data Management", href: "/it-services/data" }
      ]
    },
    {
      name: "Emerging Technologies",
      icon: Rocket,
      services: [
        { name: "Quantum Computing", href: "/emerging-tech/quantum" },
        { name: "Blockchain & Web3", href: "/emerging-tech/blockchain" },
        { name: "Edge Computing", href: "/emerging-tech/edge" },
        { name: "IoT Solutions", href: "/emerging-tech/iot" },
        { name: "Green Technology", href: "/green-it" }
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
              {serviceCategories.map((category, index) => (
                <div key={category.name} className="relative">
                  <motion.button
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    onClick={() => toggleDropdown(category.name)}
                    className={`nav-link flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 group ${
                      activeDropdown === category.name 
                        ? 'text-zion-cyan bg-zion-cyan/10 shadow-lg shadow-zion-cyan/20' 
                        : 'hover:text-zion-cyan hover:bg-zion-cyan/5 hover:shadow-lg hover:shadow-zion-cyan/10'
                    }`}
                  >
                    <category.icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                    <span className="font-medium">{category.name}</span>
                    <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${
                      activeDropdown === category.name ? 'rotate-180' : ''
                    }`} />
                  </motion.button>

                  {/* Enhanced Dropdown Menu */}
                  <AnimatePresence>
                    {activeDropdown === category.name && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-80 bg-zion-slate-dark/95 backdrop-blur-xl border border-zion-cyan/20 rounded-xl shadow-2xl shadow-zion-cyan/20 overflow-hidden"
                      >
                        <div className="p-4">
                          <div className="mb-4">
                            <h3 className="text-lg font-semibold text-zion-cyan mb-2">{category.name}</h3>
                            <div className="w-16 h-1 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full"></div>
                          </div>
                          <div className="space-y-2">
                            {category.services.map((service, subIndex) => (
                              <motion.div
                                key={service.name}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: subIndex * 0.05 }}
                              >
                                <Link
                                  to={service.href}
                                  className="flex items-start space-x-3 p-3 rounded-lg hover:bg-zion-cyan/10 transition-all duration-300 group"
                                >
                                  <div className="w-8 h-8 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                    <Brain className="w-4 h-4 text-zion-cyan" /> {/* Using Brain icon for consistency */}
                                  </div>
                                  <div className="flex-1">
                                    <h4 className="font-medium text-white group-hover:text-zion-cyan transition-colors duration-300">
                                      {service.name}
                                    </h4>
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
                  {serviceCategories.map((category) => (
                    <div key={category.name} className="border-b border-zion-cyan/10 pb-2">
                      <Link
                        to={category.services[0].href} // Link to the first service in the category
                        className="flex items-center space-x-3 p-3 text-white hover:text-zion-cyan hover:bg-zion-cyan/10 rounded-lg transition-all duration-300"
                      >
                        <category.icon className="w-5 h-5" />
                        <span className="font-medium">{category.name}</span>
                      </Link>
                      <div className="ml-8 mt-2 space-y-1">
                        {category.services.slice(0, 3).map((service) => (
                          <Link
                            key={service.name}
                            to={service.href}
                            className="block p-2 text-sm text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/5 rounded transition-all duration-300"
                          >
                            {service.name}
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