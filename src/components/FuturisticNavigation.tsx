import React, { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { MobileSidebarToggle } from "./MobileSidebarToggle"
import {;
  Menu,;
  X,;
  Search,;
  User,;
  Bell,;
  ChevronDown,;
  Brain,;
  Shield,;
  Cloud,;
  Zap,;
  Globe,;
  Cpu,;
  Database,;
  Network,;
  Lock,;
  Code,;
  Rocket,;
  Users,;
  BarChart3,;
  FileImage,;
  TrendingUp,;
  MessageCircle,;
  Video,;
  FileText,;
  Heart,;
  PanelLeft,;
  ShoppingCart,;
  Settings,;
  HelpCircle,;
  BookOpen,;
  Briefcase,;
  Award,;
  Target,;
  Lightbulb,;
  ShieldCheck,;
  Server,;
  Smartphone,;
  Monitor,;
  Wifi,;
  Bluetooth,;
  Satellite,;
  Atom,;
  Dna,;
  Microscope,;
  Flask,;
  TestTube,;
  Syringe,;
  Stethoscope,;
  HeartPulse,;
  BrainCircuit,;
  Eye,;
  Ear,;
  Hand,;
  Foot,;
  Bone,;
  Tooth,;
  Pill,;
  Bandage,;
  Thermometer,;
  Scale,;
  Calculator,;
  ChartBar,;
  PieChart,;
  LineChart,;
  Activity,;
  TrendingDown,;
  Minus,;
  Plus,;
  Equal,;
  Divide,;
  Percent,;
  DollarSign,;
  Euro,;
  Pound,;
  Yen,;
  Bitcoin,;
  Ethereum,;
  CreditCard,;
  Wallet,;
  Banknote,;
  Coins,;
  PiggyBank,;
  Safe,;
  Vault,;
  LockKeyhole,;
  Key,;
  Fingerprint,;
  QrCode,;
  Barcode,;
  Scan,;
  Camera,;
  VideoOff,;
  Mic,;
  MicOff,;
  Volume2,;
  VolumeX,;
  Handshake,;
  Play,;
  Pause,;
  Stop,;
  SkipBack,;
  SkipForward,;
  Rewind,;
  FastForward,;
  Shuffle,;
  Repeat,;
  Repeat1,;
  Shuffle2,;
  SkipBack2,;
  SkipForward2,;
  PlayCircle,;
  PauseCircle,;
  StopCircle,;
  SkipBackCircle,;
  SkipForwardCircle,;
  RewindCircle,;
  FastForwardCircle,;
  ShuffleCircle,;
  RepeatCircle,;
  Repeat1Circle,;
  Shuffle2Circle,;
  SkipBack2Circle,;
  SkipForward2Circle,;
  PlaySquare,;
  PauseSquare,;
  StopSquare,;
  SkipBackSquare,;
  SkipForwardSquare,;
  RewindSquare,;
  FastForwardSquare,;
  ShuffleSquare,;
  RepeatSquare,;
  Repeat1Square,;
  Shuffle2Square,;
  SkipBack2Square,;
  SkipForward2Square,;
  PlayTriangle,;
  PauseTriangle,;
  StopTriangle,;
  SkipBackTriangle,;
  SkipForwardTriangle,;
  RewindTriangle,;
  FastForwardTriangle,;
  ShuffleTriangle,;
  RepeatTriangle,;
  Repeat1Triangle,;
  Shuffle2Triangle,;
  SkipBack2Triangle,;
  SkipForward2Triangle,;
  PlayOctagon,;
  PauseOctagon,;
  StopOctagon,;
  SkipBackOctagon,;
  SkipForwardOctagon,;
  RewindOctagon,;
  FastForwardOctagon,;
  ShuffleOctagon,;
  RepeatOctagon,;
  Repeat1Octagon,;
  Shuffle2Octagon,;
  SkipBack2Octagon,;
  SkipForward2Octagon,;
  PlayDodecagon,;
  PauseDodecagon,;
  StopDodecagon,;
  SkipBackDodecagon,;
  SkipForwardDodecagon,;
  RewindDodecagon,;
  FastForwardDodecagon,;
  ShuffleDodecagon,;
  RepeatDodecagon,;
  Repeat1Dodecagon,;
  Shuffle2Dodecagon,;
  SkipBack2Dodecagon,;
  SkipForward2Dodecagon;
} from "lucide-react"
export const FuturisticNavigation: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState(''),;
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null),;
  const [scrolled, setScrolled] = useState(false),;
  const location = useLocation()
  useEffect(() => {;
    const handleScroll = () => {;
      setScrolled(window.scrollY > 20),;
    },;
    window.addEventListener('scroll', handleScroll),;
    return () => window.removeEventListener('scroll', handleScroll),;
  }, []);
  useEffect(() => {;
    setActiveDropdown(null)
  }, [location.pathname]);
  const handleSearch = (e: React.FormEvent) => {;
    e.preventDefault()
    if (searchQuery.trim()) {;
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`,;
    };
  },;
  const toggleDropdown = (dropdown: string) => {;
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  };
  //[^;]*
  const serviceCategories = [;
    {;
      name: "AI & Machine Learning",icon: Brain,color: 'from-zion-cyan to-zion-blue',dropdown: [;
        { name: 'AI Autonomous Trading', href: '/ai-services/autonomous-trading', icon: DollarSign, description: 'AI-powered financial trading platform' };
        { name: 'AI Consciousness Simulator', href: '/ai-services/consciousness-simulator', icon: Brain, description: 'Quantum AI consciousness research' };
        { name: 'AI Business Operations', href: '/ai-services/business-operations', icon: Building, description: 'Autonomous business management' };
        { name: 'AI Healthcare Diagnosis', href: '/ai-services/healthcare-diagnosis', icon: Heart, description: 'AI-powered medical diagnosis' };
        { name: 'AI Content Creation', href: '/ai-services/content-creation', icon: FileText, description: 'Autonomous content generation' };
        { name: 'AI Supply Chain', href: '/ai-services/supply-chain', icon: Truck, description: 'AI-powered supply chain optimization' };
        { name: 'View All AI Services', href: '/ultimate-services-2027', icon: Sparkles, description: 'Complete AI services showcase' };
        { name: 'Innovative Services 2028', href: '/innovative-services-2028', icon: Crown, description: 'Latest innovative services for 2028' };
      ];
    };
    {;
      name: "Micro SAAS Solutions",icon: Cloud,services: [;
        { name: "Micro SAAS Services", href: "/micro-saas" };
        { name: "Business Tools", href: "/micro-saas/business-tools" };
        { name: "Productivity Apps", href: "/micro-saas/productivity" };
        { name: "Industry Solutions", href: "/micro-saas/industry" };
        { name: "Custom Development", href: "/micro-saas/custom" };
        { name: "Marketplace", href: "/marketplace" };
      ];
    };
    {;
      name: "IT Infrastructure",icon: Server,services: [;
        { name: "IT Services", href: "/it-services" };
        { name: "Cloud Solutions", href: "/it-services/cloud" };
        { name: "Cybersecurity", href: "/it-services/cybersecurity" };
        { name: "DevOps & Automation", href: "/it-services/devops" };
        { name: "Data Management", href: "/it-services/data" };
        { name: "Network Security", href: "/it-services/network-security" };
      ];
    };
    {;
      name: "Emerging Technologies",icon: Rocket,services: [;
        { name: "Quantum Computing", href: "/emerging-tech/quantum" };
        { name: "Blockchain & Web3", href: "/emerging-tech/blockchain" };
        { name: "Edge Computing", href: "/emerging-tech/edge" };
        { name: "IoT Solutions", href: "/emerging-tech/iot" };
        { name: "Green Technology", href: "/green-it" };
        { name: "Space Technology", href: "/emerging-tech/space" };
      ];
    };
    {;
      name: '2028 Services',href: '/innovative-services-2028',icon: Crown,color: 'from-zion-cyan to-zion-purple',dropdown: [;
        { name: 'Innovative Services 2028', href: '/innovative-services-2028', icon: Crown, description: 'Latest innovative services for 2028' };
        { name: 'Micro SAAS 2028', href: '/micro-saas-2028', icon: Zap, description: 'Advanced micro SAAS solutions' };
        { name: 'IT Services 2028', href: '/it-services-2028', icon: Server, description: 'Next-generation IT services' };
        { name: 'Pricing Guide 2028', href: '/comprehensive-pricing-guide-2028', icon: Calculator, description: 'Complete pricing and ROI analysis' };
      ];
    };
  ];
  return (
    <>;
      <header className={`sticky top-0 z-50 w-full transition-all duration-500 ${;
        scrolled;
          ? 'bg-zion-slate-dark/95 backdrop-blur-xl border-b border-zion-cyan/20 shadow-2xl shadow-zion-cyan/10'
          : 'bg-transparent'
      }`}>;
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">;
          <div className="flex h-20 items-center justify-between">;
            {/* Enhanced Logo */};
            <motion.div
              className="[^"]*"
              initial={{ opacity: 0, x: -20 }};
              animate={{ opacity: 1, x: 0 }};
              transition={{ duration: 0.5 }};
            >;
              <Link to="/" className="flex items-center space-x-3 group">;
                <div className="relative">;
                  <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan via-zion-purple to-zion-blue rounded-xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg shadow-zion-cyan/25">;
                    <span className="text-2xl font-bold text-white">Z</[^>]*>
                  </[^>]*>
                  <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan via-zion-purple to-zion-blue rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></[^>]*>
                  <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan via-zion-purple to-zion-blue rounded-xl blur-xl opacity-25 group-hover:opacity-50 transition-opacity duration-300"></[^>]*>
                </[^>]*>
                <div className="hidden sm:block">;
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">;
                    ZION TECH GROUP;
                  </[^>]*>
                  <p className="text-xs text-zion-slate-light font-medium">Innovation • Intelligence • Impact</[^>]*>
                </[^>]*>
              </[^>]*>
            </[^>]*>
            {/* Desktop Navigation */};
            <nav className="hidden lg:flex items-center space-x-1">;
              {/* Main Navigation Links */};
              <motion.div
                initial={{ opacity: 0, y: -20 }};
                animate={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.5, delay: 0.1 }};
              >;
                <Link;
                  to="/about"
                  className="[^"]*"
                >;
                  <[^>]*/>
                  <span className="font-medium">About</[^>]*>
                </[^>]*>
              </[^>]*>
              <motion.div
                initial={{ opacity: 0, y: -20 }};
                animate={{ opacity: 1, y: 0 }};
                transition={{ duration: 0.5, delay: 0.15 }};
              >;
                <Link;
                  to="/partners"
                  className="[^"]*"
                >;
                  <[^>]*/>
                  <span className="font-medium">Partners</[^>]*>
                </[^>]*>
              </[^>]*>
              {/* Service Categories */};
              {serviceCategories.map((category, index) => (;
                <div key={category.name} className="relative">;
                  <motion.button
                    initial={{ opacity: 0, y: -20 }};
                    animate={{ opacity: 1, y: 0 }};
                    transition={{ duration: 0.5, delay: (index + 2) * 0.1 }};
                    onClick={() => toggleDropdown(category.name)};
                    className={`nav-link flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 group ${;
                      activeDropdown === category.name
                        ? 'text-zion-cyan bg-zion-cyan/10 shadow-lg shadow-zion-cyan/20'
                        : 'hover:text-zion-cyan hover:bg-zion-cyan/5 hover:shadow-lg hover:shadow-zion-cyan/10'
                    }`};
                  >;
                    <[^>]*/>
                    <span className="font-medium">{category.name}</[^>]*>
                    <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${;
                      activeDropdown === category.name ? 'rotate-180' : ''
                    }`} />;
                  </[^>]*>
                  {/* Enhanced Dropdown Menu */};
                  <AnimatePresence>;
                    {activeDropdown === category.name && (;&& (; (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }};
                        animate={{ opacity: 1, y: 0, scale: 1 }};
                        exit={{ opacity: 0, y: -10, scale: 0.95 }};
                        transition={{ duration: 0.2 }};
                        className="[^"]*"
                      >;
                        <div className="p-4">;
                          <div className="mb-4">;
                            <h3 className="text-lg font-semibold text-zion-cyan mb-2">{category.name}</[^>]*>
                            <div className="w-16 h-1 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full"></[^>]*>
                          </[^>]*>
                          <div className="space-y-2">;
                            {category.services.map((service, subIndex) => (;
                              <motion.div
                                key={service.name};
                                initial={{ opacity: 0, x: -20 }};
                                animate={{ opacity: 1, x: 0 }};
                                transition={{ duration: 0.3, delay: subIndex * 0.05 }};
                              >;
                                <Link;
                                  to={service.href};
                                  className="[^"]*"
                                >;
                                  <div className="w-8 h-8 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">;
                                    <Brain className="w-4 h-4 text-zion-cyan" /> {/* Using Brain icon for consistency */};
                                  </[^>]*>
                                  <div className="flex-1">;
                                    <h4 className="font-medium text-white group-hover:text-zion-cyan transition-colors duration-300">;
                                      {service.name};
                                    </[^>]*>
                                  </[^>]*>
                                </[^>]*>
                              </[^>]*>
                            ))};
                          </[^>]*>
                        </[^>]*>
                      </[^>]*>
                    )};
                  </[^>]*>
                </[^>]*>
              ))};
            </[^>]*>
            {/* Right side actions */};
            <div className="flex items-center space-x-4">;
              {/* Search */};
              <form onSubmit={handleSearch} className="hidden md:block">;
                <div className="relative">;
                  <input;
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery};
                    onChange={(e) => setSearchQuery(e.target.value)};
                    className="[^"]*"
                  />;
                  <[^>]*/>
                </[^>]*>
              </[^>]*>
              {/* User actions */};
              <div className="flex items-center space-x-2">;
                <motion.button
                  whileHover={{ scale: 1.05 }};
                  whileTap={{ scale: 0.95 }};
                  className="[^"]*"
                >;
                  <[^>]*/>
                </[^>]*>
                <motion.button
                  whileHover={{ scale: 1.05 }};
                  whileTap={{ scale: 0.95 }};
                  className="[^"]*"
                >;
                  <[^>]*/>
                </[^>]*>
                <motion.button
                  whileHover={{ scale: 1.05 }};
                  whileTap={{ scale: 0.95 }};
                  className="[^"]*"
                >;
                  <[^>]*/>
                </[^>]*>
              </[^>]*>
              {/* Mobile Sidebar Toggle */};
              <[^>]*/>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>
    </[^>]*>
  );
};