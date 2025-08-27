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
  LogOut,
  HelpCircle,
  BookOpen,
  Factory,
  Home,
  Truck,
  Building,
  Target,
  Eye,
  TestTube,
  Dna,
  ShoppingCart as Cart,
  Home as House,
  Truck as Transport,
  Building as Government,
  Target as Optimization,
  Eye as Vision,
  TestTube as Research,
  Dna as Biotech,
  Phone,
  Mail,
  Handshake,
  Server,
  Smartphone,
  Radio
} from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

export function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);
  const location = useLocation();
  const { user, logout } = useAuth();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeDropdown && !(event.target as Element).closest('.dropdown-container')) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [activeDropdown]);

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
      name: 'Services',
      href: '/services',
      icon: Zap,
      dropdown: [
        { name: 'AI & Analytics', href: '/services/ai-analytics', icon: Brain, description: 'Machine learning and data insights' },
        { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield, description: 'Protect your digital assets' },
        { name: 'Cloud & DevOps', href: '/services/cloud-devops', icon: Cloud, description: 'Scalable infrastructure solutions' },
        { name: 'IoT & Edge', href: '/services/iot-edge', icon: Cpu, description: 'Connected device management' },
        { name: 'Quantum Computing', href: '/services/quantum-computing', icon: Rocket, description: 'Next-generation computing' },
        { name: 'Blockchain', href: '/services/blockchain', icon: Lock, description: 'Decentralized solutions' },
        { name: 'Digital Twin', href: '/services/digital-twin', icon: Globe, description: 'Virtual replica technology' },
        { name: 'Sustainability', href: '/services/sustainability', icon: Heart, description: 'Green IT solutions' }
      ]
    },
    {
      name: 'Micro SAAS',
      href: '/micro-saas',
      icon: Code,
      dropdown: [
        { name: 'AI Business Intelligence', href: '/micro-saas/ai-business-intelligence', icon: Brain, description: 'Smart analytics platform' },
        { name: 'Customer Experience', href: '/micro-saas/customer-experience', icon: Users, description: 'Enhanced customer engagement' },
        { name: 'Quantum Computing', href: '/micro-saas/quantum-computing', icon: Rocket, description: 'Quantum-powered solutions' },
        { name: 'Supply Chain', href: '/micro-saas/supply-chain', icon: Truck, description: 'Optimized logistics management' },
        { name: 'Cybersecurity', href: '/micro-saas/cybersecurity', icon: Shield, description: 'Advanced security tools' },
        { name: 'IoT Edge Computing', href: '/micro-saas/iot-edge', icon: Cpu, description: 'Edge device solutions' },
        { name: 'Content Creation', href: '/micro-saas/content-creation', icon: FileText, description: 'AI-powered content tools' },
        { name: 'HR Platform', href: '/micro-saas/hr-platform', icon: Users, description: 'Human resources automation' }
      ]
    },
    {
      name: 'Enterprise Solutions',
      href: '/enterprise-solutions',
      icon: Building,
      dropdown: [
        { name: 'Cloud Migration', href: '/enterprise-solutions/cloud-migration', icon: Cloud, description: 'Enterprise cloud transformation' },
        { name: 'Digital Transformation', href: '/enterprise-solutions/digital-transformation', icon: Rocket, description: 'End-to-end transformation' },
        { name: 'Cybersecurity Framework', href: '/enterprise-solutions/cybersecurity', icon: Shield, description: 'Enterprise security solutions' },
        { name: 'Data Analytics', href: '/enterprise-solutions/data-analytics', icon: BarChart3, description: 'Enterprise data insights' },
        { name: 'Process Automation', href: '/enterprise-solutions/automation', icon: Zap, description: 'Intelligent automation' },
        { name: 'System Integration', href: '/enterprise-solutions/integration', icon: Network, description: 'Seamless integration' },
        { name: 'Infrastructure Modernization', href: '/enterprise-solutions/infrastructure', icon: Server, description: 'Modern infrastructure' },
        { name: 'Strategic Consulting', href: '/enterprise-solutions/consulting', icon: Users, description: 'Technology advisory' }
      ]
    },
    {
      name: 'Next-Gen AI',
      href: '/next-gen-ai',
      icon: Brain,
      dropdown: [
        { name: 'Autonomous AI Systems', href: '/next-gen-ai/autonomous-systems', icon: Brain, description: 'Self-learning AI systems' },
        { name: 'Advanced NLP', href: '/next-gen-ai/nlp', icon: MessageCircle, description: 'Natural language processing' },
        { name: 'Computer Vision AI', href: '/next-gen-ai/computer-vision', icon: Eye, description: 'Advanced visual AI' },
        { name: 'AI Ethics Platform', href: '/next-gen-ai/ethics', icon: Shield, description: 'Responsible AI development' },
        { name: 'Quantum-Classical AI', href: '/next-gen-ai/quantum-ai', icon: Rocket, description: 'Hybrid quantum AI' },
        { name: 'Federated Learning', href: '/next-gen-ai/federated-learning', icon: Network, description: 'Privacy-preserving AI' },
        { name: 'AI Research Platform', href: '/next-gen-ai/research', icon: TestTube, description: 'AI research tools' },
        { name: 'AI Optimization Engine', href: '/next-gen-ai/optimization', icon: Target, description: 'Advanced optimization' }
      ]
    },
    {
      name: 'Industry Solutions',
      href: '/industry-solutions',
      icon: Factory,
      dropdown: [
        { name: 'Healthcare AI', href: '/industry-solutions/healthcare', icon: Heart, description: 'AI-powered healthcare' },
        { name: 'FinTech Solutions', href: '/industry-solutions/fintech', icon: TrendingUp, description: 'Financial technology' },
        { name: 'Smart Manufacturing', href: '/industry-solutions/manufacturing', icon: Factory, description: 'IoT manufacturing' },
        { name: 'Retail AI Platform', href: '/industry-solutions/retail', icon: Cart, description: 'AI retail solutions' },
        { name: 'Education Technology', href: '/industry-solutions/education', icon: BookOpen, description: 'EdTech platform' },
        { name: 'Government Solutions', href: '/industry-solutions/government', icon: Government, description: 'Government tech' },
        { name: 'Energy Optimization', href: '/industry-solutions/energy', icon: Zap, description: 'Energy management' },
        { name: 'Transportation & Logistics', href: '/industry-solutions/transportation', icon: Transport, description: 'Smart logistics' }
      ]
    },
    {
      name: 'IoT & Edge',
      href: '/iot-edge',
      icon: Cpu,
      dropdown: [
        { name: 'Smart City Platform', href: '/iot-edge/smart-city', icon: Building, description: 'Smart city solutions' },
        { name: 'Industrial IoT Suite', href: '/iot-edge/industrial-iot', icon: Factory, description: 'Industrial IoT' },
        { name: 'Edge AI Platform', href: '/iot-edge/edge-ai', icon: Cpu, description: 'Edge AI computing' },
        { name: 'Connected Device Management', href: '/iot-edge/device-management', icon: Smartphone, description: 'IoT device management' },
        { name: 'Sensor Network Platform', href: '/iot-edge/sensor-networks', icon: Radio, description: 'Sensor networks' },
        { name: 'Edge Computing Infrastructure', href: '/iot-edge/edge-infrastructure', icon: Server, description: 'Edge infrastructure' },
        { name: 'IoT Security Platform', href: '/iot-edge/iot-security', icon: Shield, description: 'IoT security' },
        { name: 'IoT Data Analytics', href: '/iot-edge/iot-analytics', icon: BarChart3, description: 'IoT analytics' }
      ]
    }
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about', icon: Users },
    { name: 'Contact', href: '/contact', icon: MessageCircle },
    { name: 'Blog', href: '/blog', icon: FileText },
    { name: 'Partners', href: '/partners', icon: Handshake },
    { name: 'Green IT', href: '/green-it', icon: Heart },
    { name: 'Research & Development', href: '/research-development', icon: TestTube },
    { name: 'News', href: '/news', icon: TrendingUp },
    { name: 'Help Center', href: '/help-center', icon: HelpCircle }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-black/90 backdrop-blur-xl border-b border-zion-cyan/20 shadow-2xl' 
        : 'bg-transparent'
    }`}>
      {/* Top bar with contact info */}
      <div className="bg-gradient-to-r from-zion-slate to-zion-purple text-white py-2 px-4 text-sm">
        <div className="container-responsive flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-zion-cyan" />
              <span>+1 302 464 0950</span>
            </span>
            <span className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-zion-cyan" />
              <span>kleber@ziontechgroup.com</span>
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <span className="text-zion-cyan">Visit us at: </span>
            <a 
              href="https://ziontechgroup.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-zion-cyan transition-colors"
            >
              ziontechgroup.com
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-black/80 backdrop-blur-xl border-b border-zion-cyan/10">
        <div className="container-responsive">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white group-hover:text-zion-cyan transition-colors duration-300">
                  Zion Tech Group
                </h1>
                <p className="text-xs text-zion-cyan font-mono">Innovating Tomorrow</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative dropdown-container">
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="flex items-center space-x-2 text-white hover:text-zion-cyan transition-colors duration-300 py-2 px-3 rounded-lg hover:bg-white/5"
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.name}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  </button>

                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-80 bg-black/95 backdrop-blur-xl border border-zion-cyan/20 rounded-xl shadow-2xl overflow-hidden"
                      >
                        <div className="p-4">
                          <div className="grid grid-cols-1 gap-2">
                            {item.dropdown.map((subItem) => (
                              <Link
                                key={subItem.name}
                                to={subItem.href}
                                className="flex items-start space-x-3 p-3 rounded-lg hover:bg-zion-cyan/10 transition-colors duration-200 group"
                              >
                                <div className="w-10 h-10 bg-gradient-to-br from-zion-cyan/20 to-zion-blue/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                                  <subItem.icon className="w-5 h-5 text-zion-cyan" />
                                </div>
                                <div className="flex-1">
                                  <h3 className="text-white font-medium group-hover:text-zion-cyan transition-colors duration-200">
                                    {subItem.name}
                                  </h3>
                                  <p className="text-sm text-gray-400 mt-1">
                                    {subItem.description}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Right side actions */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="relative">
                <form onSubmit={handleSearch} className="relative">
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setSearchFocused(true)}
                    onBlur={() => setSearchFocused(false)}
                    className="w-64 px-4 py-2 bg-white/10 border border-zion-cyan/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-zion-cyan focus:bg-white/20 transition-all duration-300"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-zion-cyan hover:text-white transition-colors duration-200"
                  >
                    <Search className="w-5 h-5" />
                  </button>
                </form>
              </div>

              {/* User menu */}
              {user ? (
                <div className="relative dropdown-container">
                  <button
                    onClick={() => toggleDropdown('user')}
                    className="flex items-center space-x-2 text-white hover:text-zion-cyan transition-colors duration-300"
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-white" />
                    </div>
                    <span className="hidden md:block">{user.name}</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>

                  <AnimatePresence>
                    {activeDropdown === 'user' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full right-0 mt-2 w-48 bg-black/95 backdrop-blur-xl border border-zion-cyan/20 rounded-xl shadow-2xl"
                      >
                        <div className="p-2">
                          <Link
                            to="/dashboard"
                            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-zion-cyan/10 transition-colors duration-200"
                          >
                            <PanelLeft className="w-5 h-5 text-zion-cyan" />
                            <span className="text-white">Dashboard</span>
                          </Link>
                          <Link
                            to="/settings"
                            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-zion-cyan/10 transition-colors duration-200"
                          >
                            <Settings className="w-5 h-5 text-zion-cyan" />
                            <span className="text-white">Settings</span>
                          </Link>
                          <button
                            onClick={logout}
                            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-zion-cyan/10 transition-colors duration-200 w-full text-left"
                          >
                            <LogOut className="w-5 h-5 text-zion-cyan" />
                            <span className="text-white">Logout</span>
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <div className="flex items-center space-x-3">
                  <Link
                    to="/login"
                    className="text-white hover:text-zion-cyan transition-colors duration-300 font-medium"
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="futuristic-btn"
                  >
                    Get Started
                  </Link>
                </div>
              )}

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden text-white hover:text-zion-cyan transition-colors duration-300 p-2"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-black/95 backdrop-blur-xl border-b border-zion-cyan/20 overflow-hidden"
          >
            <div className="container-responsive py-6">
              <div className="space-y-6">
                {/* Main navigation items */}
                {navigationItems.map((item) => (
                  <div key={item.name} className="space-y-3">
                    <h3 className="text-zion-cyan font-semibold text-lg flex items-center space-x-2">
                      <item.icon className="w-5 h-5" />
                      <span>{item.name}</span>
                    </h3>
                    <div className="grid grid-cols-1 gap-2 pl-6">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-zion-cyan/10 transition-colors duration-200"
                        >
                          <subItem.icon className="w-5 h-5 text-zion-cyan" />
                          <div>
                            <h4 className="text-white font-medium">{subItem.name}</h4>
                            <p className="text-sm text-gray-400">{subItem.description}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}

                {/* Quick links */}
                <div className="pt-6 border-t border-zion-cyan/20">
                  <h3 className="text-zion-cyan font-semibold text-lg mb-3">Quick Links</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {quickLinks.map((link) => (
                      <Link
                        key={link.name}
                        to={link.href}
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-zion-cyan/10 transition-colors duration-200"
                      >
                        <link.icon className="w-5 h-5 text-zion-cyan" />
                        <span className="text-white text-sm">{link.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Contact info */}
                <div className="pt-6 border-t border-zion-cyan/20">
                  <h3 className="text-zion-cyan font-semibold text-lg mb-3">Contact Us</h3>
                  <div className="space-y-2 text-sm text-gray-300">
                    <p>Mobile: +1 302 464 0950</p>
                    <p>Email: kleber@ziontechgroup.com</p>
                    <p>Address: 364 E Main St STE 1008 Middletown DE 19709</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
