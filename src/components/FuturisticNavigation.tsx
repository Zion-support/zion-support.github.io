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
  Home
} from 'lucide-react';

export function FuturisticNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    {
      title: "Home",
      path: "/",
      icon: Home
    },
    {
      title: "Services",
      path: "/services",
      icon: Settings,
      dropdown: [
        {
          title: "AI Services",
          path: "/ai-services",
          icon: Brain,
          description: "Cutting-edge AI solutions",
          services: [
            { name: "Quantum-Classical Hybrid AI", path: "/ai-services/quantum-classical-hybrid-ai" },
            { name: "Multimodal AI Platform", path: "/ai-services/multimodal-ai-platform" },
            { name: "Autonomous AI Agents", path: "/ai-services/autonomous-ai-agents" },
            { name: "AI Drug Discovery", path: "/ai-services/ai-drug-discovery" },
            { name: "AI Financial Trading", path: "/ai-services/ai-financial-trading" }
          ]
        },
        {
          title: "Micro SAAS",
          path: "/micro-saas",
          icon: Code,
          description: "Innovative micro SAAS solutions",
          services: [
            { name: "AI Business Intelligence", path: "/micro-saas/ai-business-intelligence" },
            { name: "Customer Experience Hub", path: "/micro-saas/customer-experience-hub" },
            { name: "Supply Chain Optimizer", path: "/micro-saas/supply-chain-optimizer" },
            { name: "Cybersecurity Platform", path: "/micro-saas/cybersecurity-platform" }
          ]
        },
        {
          title: "IT Services",
          path: "/it-services",
          icon: Server,
          description: "Advanced IT infrastructure",
          services: [
            { name: "6G Network Infrastructure", path: "/it-services/6g-network-infrastructure" },
            { name: "Quantum-Secure Cloud", path: "/it-services/quantum-secure-cloud" },
            { name: "AI Edge Computing", path: "/it-services/ai-edge-computing" },
            { name: "Zero-Trust Security", path: "/it-services/zero-trust-security" }
          ]
        },
        {
          title: "Emerging Tech",
          path: "/emerging-tech",
          icon: Rocket,
          description: "Breakthrough technologies",
          services: [
            { name: "Synthetic Biology AI", path: "/emerging-tech/synthetic-biology-ai" },
            { name: "Holographic AR/VR", path: "/emerging-tech/holographic-ar-vr" },
            { name: "Brain-Computer Interfaces", path: "/emerging-tech/brain-computer-interfaces" },
            { name: "Space Technology", path: "/emerging-tech/space-technology" }
          ]
        }
      ]
    },
    {
      title: "About",
      path: "/about",
      icon: Users
    },
    {
      title: "Blog",
      path: "/blog",
      icon: FileText
    },
    {
      title: "Careers",
      path: "/careers",
      icon: Briefcase
    },
    {
      title: "Contact",
      path: "/contact",
      icon: MessageCircle
    }
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  const toggleDropdown = (title: string) => {
    setActiveDropdown(activeDropdown === title ? null : title);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-zion-slate-dark/95 backdrop-blur-xl border-b border-zion-cyan/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-xl">Z</span>
            </div>
            <div className="hidden sm:block">
              <div className="text-xl font-bold text-white">Zion Tech Group</div>
              <div className="text-xs text-zion-cyan">Innovating Tomorrow</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.title} className="relative">
                {item.dropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => toggleDropdown(item.title)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                        isActive(item.path)
                          ? 'text-zion-cyan bg-zion-cyan/10'
                          : 'text-zion-slate-light hover:text-white hover:bg-zion-slate/20'
                      }`}
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                      <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${
                        activeDropdown === item.title ? 'rotate-180' : ''
                      }`} />
                    </button>

                    <AnimatePresence>
                      {activeDropdown === item.title && (
                        <motion.div
                          initial={{ opacity: 0, y: -10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-96 bg-zion-slate-dark/95 backdrop-blur-xl border border-zion-cyan/20 rounded-xl shadow-2xl overflow-hidden"
                        >
                          <div className="p-4">
                            <div className="grid grid-cols-1 gap-4">
                              {item.dropdown.map((dropdownItem) => (
                                <div key={dropdownItem.title} className="group">
                                  <Link
                                    to={dropdownItem.path}
                                    className="block p-4 rounded-lg hover:bg-zion-slate/20 transition-all duration-300"
                                  >
                                    <div className="flex items-start space-x-3">
                                      <div className="w-10 h-10 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center flex-shrink-0">
                                        <dropdownItem.icon className="h-5 w-5 text-white" />
                                      </div>
                                      <div className="flex-1 min-w-0">
                                        <h3 className="text-white font-semibold group-hover:text-zion-cyan transition-colors">
                                          {dropdownItem.title}
                                        </h3>
                                        <p className="text-zion-slate-light text-sm mt-1">
                                          {dropdownItem.description}
                                        </p>
                                        {dropdownItem.services && (
                                          <div className="mt-3 space-y-1">
                                            {dropdownItem.services.slice(0, 3).map((service) => (
                                              <div key={service.name} className="text-xs text-zion-cyan/80">
                                                • {service.name}
                                              </div>
                                            ))}
                                            {dropdownItem.services.length > 3 && (
                                              <div className="text-xs text-zion-slate-light">
                                                +{dropdownItem.services.length - 3} more services
                                              </div>
                                            )}
                                          </div>
                                        )}
                                      </div>
                                    </div>
                                  </Link>
                                </div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                      isActive(item.path)
                        ? 'text-zion-cyan bg-zion-cyan/10'
                        : 'text-zion-slate-light hover:text-white hover:bg-zion-slate/20'
                    }`}
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.title}</span>
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Right side actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="p-2 text-zion-slate-light hover:text-white hover:bg-zion-slate/20 rounded-lg transition-all duration-300">
              <Search className="h-5 w-5" />
            </button>
            <button className="p-2 text-zion-slate-light hover:text-white hover:bg-zion-slate/20 rounded-lg transition-all duration-300">
              <Bell className="h-5 w-5" />
            </button>
            <Link
              to="/contact"
              className="px-6 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-lg hover:from-zion-purple hover:to-zion-cyan transition-all duration-300 transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-zion-slate-light hover:text-white hover:bg-zion-slate/20 rounded-lg transition-all duration-300"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-zion-slate-dark/95 backdrop-blur-xl border-t border-zion-cyan/20"
          >
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <div key={item.title}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.title)}
                        className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-300 ${
                          isActive(item.path)
                            ? 'text-zion-cyan bg-zion-cyan/10'
                            : 'text-zion-slate-light hover:text-white hover:bg-zion-slate/20'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <item.icon className="h-5 w-5" />
                          <span>{item.title}</span>
                        </div>
                        <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${
                          activeDropdown === item.title ? 'rotate-180' : ''
                        }`} />
                      </button>

                      <AnimatePresence>
                        {activeDropdown === item.title && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-2 ml-8 space-y-2"
                          >
                            {item.dropdown.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.title}
                                to={dropdownItem.path}
                                className="block px-4 py-2 text-zion-slate-light hover:text-white rounded-lg transition-all duration-300"
                                onClick={() => setIsOpen(false)}
                              >
                                {dropdownItem.title}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className={`block px-4 py-3 rounded-lg transition-all duration-300 ${
                        isActive(item.path)
                          ? 'text-zion-cyan bg-zion-cyan/10'
                          : 'text-zion-slate-light hover:text-white hover:bg-zion-slate/20'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="flex items-center space-x-3">
                        <item.icon className="h-5 w-5" />
                        <span>{item.title}</span>
                      </div>
                    </Link>
                  )}
                </div>
              ))}

              <div className="pt-4 border-t border-zion-cyan/20">
                <Link
                  to="/contact"
                  className="block w-full px-4 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold text-center rounded-lg hover:from-zion-purple hover:to-zion-cyan transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}