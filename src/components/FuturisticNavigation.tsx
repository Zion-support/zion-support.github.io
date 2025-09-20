import { useCallback  } from "react";
import React, { useState, useEffect } from "react"
import { Link, useLocation   } from "react-router-dom";
import { motion, AnimatePresence   } from "framer-motion";
import { MobileSidebarToggle   } from "./MobileSidebarToggle";
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
  Handshake,
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
  SkipForward2Dodecagon;
}
}
 } from "lucide-react";
export,
  const: FuturisticNavigation: React.FC = () () => {
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
}, [])
  useEffect(() () => {
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
  // Enhanced service categories with better organization;
  const serviceCategories = [
    {
      na,
  m: e: "AI & Machine Learning",ic,
  o: n: Brain,col,
  o: r: 'from-zion-cyan to-zion-blue',dropdo,
  w: n: [
        { nam,
  e: 'AI Autonomous Trading', hr,
  e: f: '/ai-services/autonomous-trading', ic,
  o: n: DollarSign, descripti,
  o: n: 'AI-powered financial trading platform' }, { na,
  m: e: 'AI Consciousness Simulator', hr,
  e: f: '/ai-services/consciousness-simulator', ic,
  o: n: Brain, descripti,
  o: n: 'Quantum AI consciousness research' }, { na,
  m: e: 'AI Business Operations', hr,
  e: f: '/ai-services/business-operations', ic,
  o: n: Building, descripti,
  o: n: 'Autonomous business management' }, { na,
  m: e: 'AI Healthcare Diagnosis', hr,
  e: f: '/ai-services/healthcare-diagnosis', ic,
  o: n: Heart, descripti,
  o: n: 'AI-powered medical diagnosis' }, { na,
  m: e: 'AI Content Creation', hr,
  e: f: '/ai-services/content-creation', ic,
  o: n: FileText, descripti,
  o: n: 'Autonomous content generation' }, { na,
  m: e: 'AI Supply Chain', hr,
  e: f: '/ai-services/supply-chain', ic,
  o: n: Truck, descripti,
  o: n: 'AI-powered supply chain optimization' }, { na,
  m: e: 'View All AI Services', hr,
  e: f: '/ultimate-services-2027', ic,
  o: n: Sparkles, descripti,
  o: n: 'Complete AI services showcase' }, { na,
  m: e: 'Innovative Services 2028', hr,
  e: f: '/innovative-services-2028', ic,
  o: n: Crown, descripti,
  o: n: 'Latest innovative services for 2028' },
  ],
  }, {
      na,
  m: e: "Micro SAAS Solutions",ic,
  o: n: Cloud,servic,
  e: s: [
        { nam,
  e: "Micro SAAS Services", hr,
  e: f: "/micro-saas" }, { na,
  m: e: "Business Tools", hr,
  e: f: "/micro-saas/business-tools" }, { na,
  m: e: "Productivity Apps", hr,
  e: f: "/micro-saas/productivity" }, { na,
  m: e: "Industry Solutions", hr,
  e: f: "/micro-saas/industry" }, { na,
  m: e: "Custom Development", hr,
  e: f: "/micro-saas/custom" }, { na,
  m: e: "Marketplace", hr,
  e: f: "/marketplace" },
  ],
  }, {
      na,
  m: e: "IT Infrastructure",ic,
  o: n: Server,servic,
  e: s: [
        { nam,
  e: "IT Services", hr,
  e: f: "/it-services" }, { na,
  m: e: "Cloud Solutions", hr,
  e: f: "/it-services/cloud" }, { na,
  m: e: "Cybersecurity", hr,
  e: f: "/it-services/cybersecurity" }, { na,
  m: e: "DevOps & Automation", hr,
  e: f: "/it-services/devops" }, { na,
  m: e: "Data Management", hr,
  e: f: "/it-services/data" }, { na,
  m: e: "Network Security", hr,
  e: f: "/it-services/network-security" },
  ],
  }, {
      na,
  m: e: "Emerging Technologies",ic,
  o: n: Rocket,servic,
  e: s: [
        { nam,
  e: "Quantum Computing", hr,
  e: f: "/emerging-tech/quantum" }, { na,
  m: e: "Blockchain & Web3", hr,
  e: f: "/emerging-tech/blockchain" }, { na,
  m: e: "Edge Computing", hr,
  e: f: "/emerging-tech/edge" }, { na,
  m: e: "IoT Solutions", hr,
  e: f: "/emerging-tech/iot" }, { na,
  m: e: "Green Technology", hr,
  e: f: "/green-it" }, { na,
  m: e: "Space Technology", hr,
  e: f: "/emerging-tech/space" },
  ],
  }, {
      na,
  m: e: '2028 Services',hr,
  e: f: '/innovative-services-2028',ic,
  o: n: Crown,col,
  o: r: 'from-zion-cyan to-zion-purple',dropdo,
  w: n: [
        { nam,
  e: 'Innovative Services 2028', hr,
  e: f: '/innovative-services-2028', ic,
  o: n: Crown, descripti,
  o: n: 'Latest innovative services for 2028' }, { na,
  m: e: 'Micro SAAS 2028', hr,
  e: f: '/micro-saas-2028', ic,
  o: n: Zap, descripti,
  o: n: 'Advanced micro SAAS solutions' }, { na,
  m: e: 'IT Services 2028', hr,
  e: f: '/it-services-2028', ic,
  o: n: Server, descripti,
  o: n: 'Next-generation IT services' }, { na,
  m: e: 'Pricing Guide 2028', hr,
  e: f: '/comprehensive-pricing-guide-2028', ic,
  o: n: Calculator, descripti,
  o: n: 'Complete pricing and ROI analysis' },
  ],
  },
  ]
  return (
    <>
      <header className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        scrolled;
          ? 'bg-zion-slate-dark/95 backdrop-blur-xl border-b border-zion-cyan/20 shadow-2xl shadow-zion-cyan/10'
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4,
  s: m: px-6 l,
  g:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Enhanced Logo */}
            <motion.div;
              className="flex items-center"
              initial={ opaci,
  t: y: 0, x: -20 },
  }
              animate={ opaci,
  t: y: 1, x: 0 },
  }
              transition={ durati,
  o: n: 0.5 },
  }
            >
              <Link to="/" className="flex items-center space-x-3 group">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan via-zion-purple to-zion-blue rounded-xl flex items-center justify-center group-hov,
  e: r: scale-110 transition-all duration-300 shadow-lg shadow-zion-cyan/25">
                    <span className="text-2xl font-bold text-white">Z</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan via-zion-purple to-zion-blue rounded-xl blur-lg opacity-50 group-hov,
  e: r:opacity-75 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan via-zion-purple to-zion-blue rounded-xl blur-xl opacity-25 group-hov,
  e: r:opacity-50 transition-opacity duration-300"></div>
                </div>
                <div className="hidden s,
  m:block">
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent">
                    ZION TECH GROUP;
                  </h1>
                  <p className="text-xs text-zion-slate-light font-medium">Innovation • Intelligence • Impact</p>
                </div>
              </Link>
            </motion.div>
            {/* Desktop Navigation */}
            <nav className="hidden,
  l: g:flex items-center space-x-1">
              {/* Main Navigation Links */}
              <motion.div;
                initial={ opaci,
  t: y: 0, y: -20 },
  }
                animate={ opaci,
  t: y: 1, y: 0 },
  }
                transition={ durati,
  o: n: 0.5, del,
  a: y: 0.1 },
  }
              >
                <Link;
                  to="/about"
                  className="nav-link flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300,
  group: hover: text-zion-cyan,
  hove: r:bg-zion-cyan/5,
  hove: r:shadow-lg,
  hove: r:shadow-zion-cyan/10"
                >
                  <Users className="w-4 h-4 group-hov,
  e: r:scale-110 transition-transform duration-300" />
                  <span className="font-medium">About</span>
                </Link>
              </motion.div>
              <motion.div;
                initial={ opacit,
  y: 0, y: -20 },
  }
                animate={ opaci,
  t: y: 1, y: 0 },
  }
                transition={ durati,
  o: n: 0.5, del,
  a: y: 0.15 },
  }
              >
                <Link;
                  to="/partners"
                  className="nav-link flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300,
  group: hover: text-zion-cyan,
  hove: r:bg-zion-cyan/5,
  hove: r:shadow-lg,
  hove: r:shadow-zion-cyan/10"
                >
                  <Handshake className="w-4 h-4 group-hove,
  r:scale-110 transition-transform duration-300" />
                  <span className="font-medium">Partners</span>
                </Link>
              </motion.div>
              {/* Service Categories */},
  {serviceCategories.map((category, index) => (
                <div key={category.name} className="relative">
                  <motion.button;
                    initial={ opaci,
  t: y: 0, y: -20 },
  }
                    animate={ opaci,
  t: y: 1, y: 0 },
  }
                    transition={ durati,
  o: n: 0.5, del,
  a: y: (index + 2) * 0.1 },
  }
                    onClick={() => toggleDropdown(category.name)}
                    className={`nav-link flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 group ${
                      activeDropdown === category.name;
                        ? 'text-zion-cyan bg-zion-cyan/10 shadow-lg shadow-zion-cyan/20'
                        : 'hov,
  e: r: text-zion-cyan,
  hove: r:bg-zion-cyan/5,
  hove: r:shadow-lg hove,
  r:shadow-zion-cyan/10'
                    }`}
                  >
                    <category.icon className="w-4 h-4 group-hov,
  e: r:scale-110 transition-transform duration-300" />
                    <span className="font-medium">{category.name}</span>
                    <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${
                      activeDropdown === category.name ? 'rotate-180' : ''
                    }`} />
                  </motion.button>
                  {/* Enhanced Dropdown Menu */}
                  <AnimatePresence>
                    {activeDropdown === category.name && (
                      <motion.div;
                        initial={ opaci,
  t: y: 0, y: -10, sca,
  l: e: 0.95 },
  }
                        animate={ opaci,
  t: y: 1, y: 0, sca,
  l: e: 1 },
  }
                        exit={ opaci,
  t: y: 0, y: -10, sca,
  l: e: 0.95 },
  }
                        transition={ durati,
  o: n: 0.2 },
  }
                        className="absolute top-full left-0 mt-2 w-80 bg-zion-slate-dark/95 backdrop-blur-xl border border-zion-cyan/20 rounded-xl shadow-2xl shadow-zion-cyan/20 overflow-hidden"
                      >
                        <div className="p-4">
                          <div className="mb-4">
                            <h3 className="text-lg font-semibold text-zion-cyan mb-2">{category.name}</h3>
                            <div className="w-16 h-1 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full"></div>
                          </div>
                          <div className="space-y-2">
                            {category.services.map((service, subIndex) => (
                              <motion.div;
                                key={service.name}
                                initial={ opaci,
  t: y: 0, x: -20 },
  }
                                animate={ opaci,
  t: y: 1, x: 0 },
  }
                                transition={ durati,
  o: n: 0.3, del,
  a: y: subIndex * 0.05 },
  }
                              >
                                <Link;
                                  to={service.href}
                                  className="flex items-start space-x-3 p-3 rounded-lg,
  hove: r: bg-zion-cyan/10 transition-all duration-300 group"
                                >
                                  <div className="w-8 h-8 bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 rounded-lg flex items-center justify-center group-hove,
  r:scale-110 transition-transform duration-300">
                                    <Brain className="w-4 h-4 text-zion-cyan" /> {/* Using Brain icon for consistency */}
                                  </div>
                                  <div className="flex-1">
                                    <h4 className="font-medium text-white group-hov,
  e: r:text-zion-cyan transition-colors duration-300">
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
              <form onSubmit={handleSearch} className="hidden,
  m: d:block">
                <div className="relative">
                  <input;
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-64 px-4 py-2 pl-10 bg-zion-slate-dark/50 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light,
  focu: s: outline-none,
  focu: s:ring-2,
  focu: s:ring-zion-cyan/50 focu,
  s:border-zion-cyan/50 transition-all duration-300"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zion-slate-light" />
                </div>
              </form>
              {/* User actions */}
              <div className="flex items-center space-x-2">
                <motion.button;
                  whileHover={ sca,
  l: e: 1.05 },
  }
                  whileTap={ sca,
  l: e: 0.95 },
  }
                  className="p-2 text-zion-slate-light,
  hove: r: text-zion-cyan,
  hove: r:bg-zion-cyan/10 rounded-lg transition-all duration-300"
                >
                  <Bell className="w-5 h-5" />
                </motion.button>
                <motion.button;
                  whileHover={ scal,
  e: 1.05 },
  }
                  whileTap={ sca,
  l: e: 0.95 },
  }
                  className="p-2 text-zion-slate-light,
  hove: r: text-zion-cyan,
  hove: r:bg-zion-cyan/10 rounded-lg transition-all duration-300"
                >
                  <User className="w-5 h-5" />
                </motion.button>
                <motion.button;
                  whileHover={ scal,
  e: 1.05 },
  }
                  whileTap={ sca,
  l: e: 0.95 },
  }
                  className="p-2 text-zion-slate-light,
  hove: r: text-zion-cyan hove,
  r:bg-zion-cyan/10 rounded-lg transition-all duration-300"
                >
                  <ShoppingCart className="w-5 h-5" />
                </motion.button>
              </div>
              {/* Mobile Sidebar Toggle */}
              <MobileSidebarToggle />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}