import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MobileSidebarToggle } from './MobileSidebarToggle';
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
  Sun,
  Moon,
  Search as SearchIcon,
  Close
} from 'lucide-react';

interface NavigationItem {
  name: string;
  href: string;
  icon?: React.ComponentType<any>;
  description?: string;
  children?: NavigationItem[];
}

interface ServiceCategory {
  name: string;
  description: string;
  icon: React.ComponentType<any>;
  href: string;
  color: string;
}

export const FuturisticNavigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Service categories for the mega menu
  const serviceCategories: ServiceCategory[] = [
    {
      name: "AI & Machine Learning",
      description: "Cutting-edge artificial intelligence solutions",
      icon: Brain,
      href: "/ai-services",
      color: "from-purple-600 to-pink-600"
    },
    {
      name: "Cloud & DevOps",
      description: "Scalable cloud infrastructure and automation",
      icon: Cloud,
      href: "/services/cloud-devops",
      color: "from-blue-600 to-cyan-600"
    },
    {
      name: "Cybersecurity",
      description: "Advanced security and compliance solutions",
      icon: Shield,
      href: "/services/ai-compliance-copilot",
      color: "from-red-600 to-orange-600"
    },
    {
      name: "Digital Transformation",
      description: "End-to-end business modernization",
      icon: Rocket,
      href: "/services/digital-transformation",
      color: "from-green-600 to-emerald-600"
    },
    {
      name: "IoT & Edge Computing",
      description: "Connected devices and edge solutions",
      icon: Cpu,
      href: "/services/iot-edge",
      color: "from-indigo-600 to-purple-600"
    },
    {
      name: "Data Analytics",
      description: "Business intelligence and insights",
      icon: BarChart3,
      href: "/services/data-analytics",
      color: "from-teal-600 to-blue-600"
    }
  ];

  // Navigation items
  const navigationItems: NavigationItem[] = [
    { name: 'Home', href: '/' },
    { 
      name: 'Services', 
      href: '/services',
      children: [
        { name: 'AI Services', href: '/ai-services', icon: Brain },
        { name: 'IT Services', href: '/it-services', icon: Server },
        { name: 'Cloud DevOps', href: '/services/cloud-devops', icon: Cloud },
        { name: 'Cybersecurity', href: '/services/ai-compliance-copilot', icon: Shield },
        { name: 'Digital Transformation', href: '/services/digital-transformation', icon: Rocket },
        { name: 'Micro SaaS', href: '/micro-saas', icon: Code }
      ]
    },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle search click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle escape key for search
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsSearchOpen(false);
        setSearchQuery('');
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const toggleDarkMode = useCallback(() => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  }, [isDarkMode]);

  const handleSearch = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Implement search functionality
      console.log('Searching for:', searchQuery);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  }, [searchQuery]);

  const toggleDropdown = useCallback((name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  }, [activeDropdown]);

  return (
    <>
      {/* Search Overlay */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-start justify-center pt-20"
          >
            <motion.div
              ref={searchRef}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-2xl mx-4"
            >
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for services, solutions, or information..."
                  className="w-full px-6 py-4 text-lg bg-zion-slate/90 backdrop-blur-sm border border-zion-cyan/30 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan/50"
                  autoFocus
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 text-zion-cyan hover:text-zion-cyan/80 transition-colors"
                >
                  <SearchIcon size={24} />
                </button>
              </form>
              
              {/* Quick Search Suggestions */}
              <div className="mt-6 grid grid-cols-2 gap-4">
                {serviceCategories.slice(0, 4).map((category) => (
                  <Link
                    key={category.name}
                    to={category.href}
                    onClick={() => setIsSearchOpen(false)}
                    className="p-4 bg-zion-slate/50 backdrop-blur-sm border border-zion-cyan/20 rounded-xl hover:bg-zion-cyan/10 transition-all duration-300 group"
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${category.color}`}>
                        <category.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-medium group-hover:text-zion-cyan transition-colors">
                          {category.name}
                        </h3>
                        <p className="text-sm text-gray-400">{category.description}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation Bar */}
      <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-zion-slate/95 backdrop-blur-md border-b border-zion-cyan/20' 
          : 'bg-transparent'
      }`}>
        <div className="container-responsive">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl lg:text-2xl font-orbitron font-bold text-white">
                  Zion Tech Group
                </h1>
                <p className="text-xs text-zion-cyan font-rajdhani">Innovation • Technology • Future</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.children ? (
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                      className="flex items-center space-x-1 px-4 py-2 text-white hover:text-zion-cyan transition-colors duration-300 font-rajdhani"
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      className="px-4 py-2 text-white hover:text-zion-cyan transition-colors duration-300 font-rajdhani"
                    >
                      {item.name}
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  {item.children && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      onMouseEnter={() => setActiveDropdown(item.name)}
                      onMouseLeave={() => setActiveDropdown(null)}
                      className="absolute top-full left-0 mt-2 w-64 bg-zion-slate/95 backdrop-blur-md border border-zion-cyan/20 rounded-xl shadow-2xl shadow-zion-cyan/10"
                    >
                      <div className="p-4 space-y-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.href}
                            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-zion-cyan/10 transition-all duration-300 group"
                          >
                            {child.icon && (
                              <child.icon className="w-5 h-5 text-zion-cyan group-hover:scale-110 transition-transform duration-300" />
                            )}
                            <div>
                              <span className="text-white group-hover:text-zion-cyan transition-colors duration-300 font-medium">
                                {child.name}
                              </span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* Search Button */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-zion-cyan hover:text-zion-cyan/80 transition-colors duration-300"
                aria-label="Search"
              >
                <Search size={20} />
              </button>

              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className="p-2 text-zion-cyan hover:text-zion-cyan/80 transition-colors duration-300"
                aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              {/* CTA Button */}
              <Link
                to="/request-quote"
                className="hidden sm:inline-flex items-center px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-rajdhani font-semibold rounded-lg hover:from-zion-cyan/90 hover:to-zion-purple/90 transition-all duration-300 transform hover:scale-105"
              >
                Get Quote
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 text-zion-cyan hover:text-zion-cyan/80 transition-colors duration-300"
                aria-label="Toggle mobile menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Services Mega Menu */}
        <AnimatePresence>
          {activeDropdown === 'Services' && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              onMouseEnter={() => setActiveDropdown('Services')}
              onMouseLeave={() => setActiveDropdown(null)}
              className="bg-zion-slate/95 backdrop-blur-md border-t border-zion-cyan/20 overflow-hidden"
            >
              <div className="container-responsive py-8">
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
                  {serviceCategories.map((category) => (
                    <Link
                      key={category.name}
                      to={category.href}
                      className="group p-6 rounded-xl hover:bg-zion-cyan/10 transition-all duration-300 border border-transparent hover:border-zion-cyan/20"
                    >
                      <div className="flex items-start space-x-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                          <category.icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-white group-hover:text-zion-cyan transition-colors duration-300 mb-2">
                            {category.name}
                          </h3>
                          <p className="text-gray-400 text-sm leading-relaxed">
                            {category.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Mobile Sidebar */}
      <MobileSidebarToggle isOpen={isOpen} onClose={() => setIsOpen(false)} navigationItems={navigationItems} />
    </>
  );
};