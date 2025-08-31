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
  Zap,
  Brain,
  Shield,
  Cloud,
  Rocket,
  Globe,
  Cpu,
  Lock,
  Heart,
  Users,
  ShoppingCart,
  BookOpen,
  MessageCircle,
  HelpCircle,
  DollarSign,
  Gauge,
  Workflow,
  Atom,
  Star,
  Target,
  TrendingUp,
  Award,
  Code,
  Truck,
  Building,
  PenTool,
  Eye,
  Server,
  Smartphone,
  Database,
  Network,
  Clock,
  ArrowRight,
  PanelLeft,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Satellite,
  FileText,
  Sparkles as SparklesIcon,
  Leaf,
  Link as LinkIcon,
  Layers,
  Cpu as CpuIcon,
  Database as DatabaseIcon,
  Shield as ShieldIcon,
  Zap as ZapIcon,
  Brain as BrainIcon,
  Atom as AtomIcon,
  Rocket as RocketIcon,
  Leaf as LeafIcon,
  ExternalLink,
  ChevronRight,
  BarChart3,
  Palette,
  Camera,
  Music,
  Gamepad2,
  Car,
  Plane,
  Ship,
  Train,
  Bus,
  Bicycle,
  Motorcycle,
  Truck as TruckIcon,
  Building2,
  Factory,
  Warehouse,
  Store,
  Bank,
  Hospital,
  School,
  University,
  Library,
  Museum,
  Theater,
  Stadium,
  Park,
  Beach,
  Mountain,
  Forest,
  Desert,
  Island,
  Ocean,
  River,
  Lake,
  Stream,
  Waterfall,
  Home,
  Volcano,
  Cave,
  Canyon,
  Valley,
  Hill,
  Cliff,
  Rock,
  Sand,
  Soil,
  Grass,
  Tree,
  Flower,
  Bush,
  Vine,
  Moss,
  Algae,
  Coral,
  Shell,
  Fish,
  Bird,
  Mammal,
  Reptile,
  Amphibian,
  Insect,
  Arachnid,
  Crustacean,
  Mollusk,
  Worm,
  Bacteria,
  Virus,
  Fungus,
  Protozoa,
  Algae as AlgaeIcon,
  Coral as CoralIcon,
  Shell as ShellIcon,
  Fish as FishIcon,
  Bird as BirdIcon,
  Mammal as MammalIcon,
  Reptile as ReptileIcon,
  Amphibian as AmphibianIcon,
  Insect as InsectIcon,
  Arachnid as ArachnidIcon,
  Crustacean as CrustaceanIcon,
  Mollusk as MolluskIcon,
  Worm as WormIcon,
  Bacteria as BacteriaIcon,
  Virus as VirusIcon,
  Fungus as FungusIcon,
  Protozoa as ProtozoaIcon
} from 'lucide-react';

export function EnhancedHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsSearching(true);
      // Implement search functionality
      setTimeout(() => setIsSearching(false), 2000);
    }
  };

  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Services', href: '/services', icon: Code, hasDropdown: true },
    { name: 'Innovative Services 2026', href: '/innovative-services-showcase-2026', icon: SparklesIcon, hasDropdown: false },
    { name: 'Pricing Guide', href: '/comprehensive-pricing-guide-2026', icon: DollarSign, hasDropdown: false },
    { name: 'AI Solutions', href: '/ai-solutions', icon: Brain },
    { name: 'IT Services', href: '/it-services', icon: Server },
    { name: 'Micro SAAS', href: '/micro-saas', icon: Rocket },
    { name: 'Quantum Computing', href: '/services/quantum-computing', icon: Atom },
    { name: 'About', href: '/about', icon: Users },
    { name: 'Contact', href: '/contact', icon: MessageCircle }
  ];

  const serviceCategories = [
    {
      name: 'AI-Powered Micro SAAS',
      description: 'Revolutionary AI-powered software solutions',
      href: '/zion-cutting-edge-services-2029',
      icon: Brain,
      color: 'from-blue-500 to-cyan-500',
      featured: true
    },
    {
      name: 'AI Content Creation Studio Pro',
      description: 'Advanced AI content creation platform',
      href: '/services/AI-Content-Creation-Studio-Pro',
      icon: PenTool,
      color: 'from-purple-500 to-pink-500',
      featured: true
    },
    {
      name: 'Quantum AI Trading Platform',
      description: 'Next-generation quantum trading platform',
      href: '/services/Quantum-AI-Trading-Platform',
      icon: Atom,
      color: 'from-orange-500 to-red-500',
      featured: true
    },
    {
      name: 'Micro SAAS Solutions',
      description: 'Innovative software-as-a-service solutions',
      href: '/services/micro-saas-solutions',
      icon: Rocket,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'AI Services',
      description: 'Cutting-edge artificial intelligence solutions',
      href: '/ai-services',
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'IT Infrastructure',
      description: 'Enterprise-grade IT solutions',
      href: '/it-services',
      icon: Server,
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Quantum Computing',
      description: 'Next-generation quantum solutions',
      href: '/services/quantum-computing',
      icon: Atom,
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'Blockchain Solutions',
      description: 'Secure blockchain and Web3 services',
      href: '/services/blockchain-enterprise-solutions',
      icon: Shield,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      name: '2025 Innovative Services',
      description: 'Latest cutting-edge services',
      href: '/zion-innovative-services-2025',
      icon: SparklesIcon,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      name: '2029 Cutting-Edge Services',
      description: 'Future-ready innovative services',
      href: '/zion-cutting-edge-services-2029',
      icon: SparklesIcon,
      color: 'from-indigo-500 to-purple-500',
      featured: true
    }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-zion-slate-dark/95 backdrop-blur-lg border-b border-white/20' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl lg:text-2xl font-bold text-white">
                Zion Tech Group
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <button
                    onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-lg font-medium transition-colors ${
                      isActive(item.href)
                        ? 'text-blue-400 bg-blue-500/20'
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-lg font-medium transition-colors ${
                      isActive(item.href)
                        ? 'text-blue-400 bg-blue-500/20'
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search */}
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-64 pl-10 pr-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </form>

            {/* Contact Button */}
            <Link
              to="/contact"
              className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/10"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Services Dropdown */}
      <AnimatePresence>
        {servicesDropdownOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-zion-slate-dark/95 backdrop-blur-lg border-b border-white/20"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {/* Featured Services */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-white mb-4">Featured Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {serviceCategories.filter(cat => cat.featured).map((category) => (
                    <Link
                      key={category.name}
                      to={category.href}
                      className="group p-6 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-300 hover:bg-white/10 relative overflow-hidden"
                      onClick={() => setServicesDropdownOpen(false)}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform relative z-10`}>
                        <category.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors relative z-10">
                        {category.name}
                      </h3>
                      <p className="text-gray-400 text-sm relative z-10">
                        {category.description}
                      </p>
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ChevronRight className="w-5 h-5 text-blue-400" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* All Services */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">All Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {serviceCategories.map((category) => (
                    <Link
                      key={category.name}
                      to={category.href}
                      className="group p-4 rounded-lg bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-300 hover:bg-white/10"
                      onClick={() => setServicesDropdownOpen(false)}
                    >
                      <div className={`w-10 h-10 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                        <category.icon className="w-5 h-5 text-white" />
                      </div>
                      <h4 className="text-sm font-semibold text-white mb-1 group-hover:text-blue-400 transition-colors">
                        {category.name}
                      </h4>
                      <p className="text-gray-400 text-xs">
                        {category.description}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>

              {/* View All Services CTA */}
              <div className="mt-8 text-center">
                <Link
                  to="/zion-cutting-edge-services-2029"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                  onClick={() => setServicesDropdownOpen(false)}
                >
                  <span>View All Services</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-zion-slate-dark/95 backdrop-blur-lg border-b border-white/20"
          >
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </form>

              {/* Mobile Navigation Links */}
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-blue-400 bg-blue-500/20'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              ))}

              {/* Mobile Services Dropdown */}
              <div className="border-t border-white/20 pt-4">
                <h4 className="text-sm font-semibold text-white mb-3 px-4">Featured Services</h4>
                <div className="space-y-2">
                  {serviceCategories.filter(cat => cat.featured).map((category) => (
                    <Link
                      key={category.name}
                      to={category.href}
                      className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div className={`w-8 h-8 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center`}>
                        <category.icon className="w-4 h-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">{category.name}</div>
                        <div className="text-xs text-gray-400">{category.description}</div>
                      </div>
                      <ChevronRight className="w-4 h-4 text-gray-400" />
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Contact Button */}
              <Link
                to="/contact"
                className="flex items-center justify-center w-full px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <Phone className="w-5 h-5 mr-2" />
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

// Placeholder Home icon component
const Home = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);
