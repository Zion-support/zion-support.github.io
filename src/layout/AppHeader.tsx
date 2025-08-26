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
  Sparkles,
  Star,
  Crown,
  Award,
  Eye,
  Handshake,
  LogOut
} from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

export function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
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
      color: 'from-zion-cyan to-zion-blue',
      dropdown: [
        { name: 'AI & Analytics', href: '/services/ai-analytics', icon: Brain, color: 'from-zion-cyan to-zion-purple' },
        { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield, color: 'from-zion-purple to-zion-red' },
        { name: 'Cloud & DevOps', href: '/services/cloud-devops', icon: Cloud, color: 'from-zion-blue to-zion-cyan' },
        { name: 'IoT & Edge', href: '/services/iot-edge', icon: Cpu, color: 'from-zion-green to-zion-cyan' },
        { name: 'Quantum Computing', href: '/services/quantum-computing', icon: Rocket, color: 'from-zion-purple to-zion-cyan' },
        { name: 'Blockchain', href: '/services/blockchain', icon: Lock, color: 'from-zion-orange to-zion-purple' },
        { name: 'Digital Twin', href: '/services/digital-twin', icon: Globe, color: 'from-zion-blue to-zion-purple' },
        { name: 'Sustainability', href: '/services/sustainability', icon: Heart, color: 'from-zion-green to-zion-blue' }
      ]
    },
    {
      name: 'Micro SAAS',
      href: '/micro-saas-services',
      icon: Code,
      color: 'from-zion-purple to-zion-pink',
      dropdown: [
        { name: 'AI Business Intelligence', href: '/micro-saas/ai-business-intelligence', icon: Brain, color: 'from-zion-cyan to-zion-blue' },
        { name: 'Customer Experience', href: '/micro-saas/customer-experience', icon: Users, color: 'from-zion-purple to-zion-pink' },
        { name: 'Quantum Computing', href: '/micro-saas/quantum-computing', icon: Rocket, color: 'from-zion-purple to-zion-cyan' },
        { name: 'Supply Chain', href: '/micro-saas/supply-chain', icon: Network, color: 'from-zion-green to-zion-cyan' },
        { name: 'Cybersecurity', href: '/micro-saas/cybersecurity', icon: Shield, color: 'from-zion-purple to-zion-red' },
        { name: 'IoT Edge Computing', href: '/micro-saas/iot-edge', icon: Cpu, color: 'from-zion-green to-zion-cyan' },
        { name: 'Content Creation', href: '/micro-saas/content-creation', icon: FileText, color: 'from-zion-orange to-zion-purple' },
        { name: 'HR Platform', href: '/micro-saas/hr-platform', icon: Users, color: 'from-zion-pink to-zion-purple' }
      ]
    },
    {
      name: 'IT Services',
      href: '/it-services',
      icon: Network,
      color: 'from-zion-blue to-zion-cyan',
      dropdown: [
        { name: 'Infrastructure', href: '/it-services/infrastructure', icon: Network, color: 'from-zion-blue to-zion-cyan' },
        { name: 'Cloud Migration', href: '/it-services/cloud-migration', icon: Cloud, color: 'from-zion-blue to-zion-purple' },
        { name: 'DevOps', href: '/it-services/devops', icon: Code, color: 'from-zion-green to-zion-cyan' },
        { name: 'Data Center', href: '/it-services/data-center', icon: Database, color: 'from-zion-blue to-zion-green' },
        { name: 'Network Security', href: '/it-services/network-security', icon: Shield, color: 'from-zion-purple to-zion-red' },
        { name: '24/7 Support', href: '/it-services/support', icon: MessageCircle, color: 'from-zion-green to-zion-blue' }
      ]
    },
    {
      name: 'AI Solutions',
      href: '/ai-solutions',
      icon: Brain,
      color: 'from-zion-cyan to-zion-purple',
      dropdown: [
        { name: 'Machine Learning', href: '/ai-solutions/machine-learning', icon: Brain, color: 'from-zion-cyan to-zion-purple' },
        { name: 'Computer Vision', href: '/ai-solutions/computer-vision', icon: Eye, color: 'from-zion-purple to-zion-pink' },
        { name: 'NLP & Chatbots', href: '/ai-solutions/nlp-chatbots', icon: MessageCircle, color: 'from-zion-green to-zion-cyan' },
        { name: 'Predictive Analytics', href: '/ai-solutions/predictive-analytics', icon: TrendingUp, color: 'from-zion-blue to-zion-green' },
        { name: 'AI Consulting', href: '/ai-solutions/consulting', icon: Users, color: 'from-zion-pink to-zion-purple' },
        { name: 'Custom AI Models', href: '/ai-solutions/custom-models', icon: Code, color: 'from-zion-orange to-zion-purple' }
      ]
    },
    {
      name: 'Innovation Lab',
      href: '/innovation-lab',
      icon: Sparkles,
      color: 'from-zion-purple to-zion-pink',
      dropdown: [
        { name: 'Research & Development', href: '/innovation-lab/research', icon: Sparkles, color: 'from-zion-purple to-zion-pink' },
        { name: 'Emerging Tech', href: '/innovation-lab/emerging-tech', icon: Rocket, color: 'from-zion-purple to-zion-cyan' },
        { name: 'Prototyping', href: '/innovation-lab/prototyping', icon: Code, color: 'from-zion-green to-zion-cyan' },
        { name: 'Innovation Consulting', href: '/innovation-lab/consulting', icon: Users, color: 'from-zion-pink to-zion-purple' },
        { name: 'Tech Partnerships', href: '/innovation-lab/partnerships', icon: Handshake, color: 'from-zion-blue to-zion-green' }
      ]
    }
  ];

  const quickActions = [
    { name: 'Get Quote', href: '/contact', icon: MessageCircle, color: 'from-zion-cyan to-zion-blue' },
    { name: 'Book Demo', href: '/demo', icon: Video, color: 'from-zion-purple to-zion-pink' },
    { name: 'Support', href: '/support', icon: MessageCircle, color: 'from-zion-green to-zion-cyan' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-black/80 backdrop-blur-xl border-b border-zinc-800/50' 
        : 'bg-transparent'
    }`}>
      {/* Animated background particles */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold neon-cyan">ZION</span>
              <span className="text-xs text-zinc-400 -mt-1">TECH GROUP</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className="nav-item flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 group-hover:bg-zinc-800/50"
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                  <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-zinc-900/95 backdrop-blur-xl border border-zinc-800 rounded-xl shadow-2xl overflow-hidden"
                    >
                      <div className="p-4">
                        <div className="grid grid-cols-1 gap-2">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-zinc-800/50 transition-all duration-200 group"
                            >
                              <div className={`w-8 h-8 bg-gradient-to-br ${subItem.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                                <subItem.icon className="w-4 h-4 text-white" />
                              </div>
                              <span className="text-sm font-medium text-zinc-300 group-hover:text-white transition-colors duration-200">
                                {subItem.name}
                              </span>
                            </Link>
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
            <form onSubmit={handleSearch} className="hidden md:flex relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search services..."
                className="input-futuristic w-64 pr-10"
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-400 hover:text-zion-cyan transition-colors duration-200"
              >
                <Search className="w-4 h-4" />
              </button>
            </form>

            {/* Quick Actions */}
            <div className="hidden lg:flex items-center space-x-2">
              {quickActions.map((action) => (
                <Link
                  key={action.name}
                  to={action.href}
                  className="btn-futuristic text-sm px-4 py-2"
                >
                  {action.name}
                </Link>
              ))}
            </div>

            {/* User Menu */}
            {user ? (
              <div className="relative group">
                <button className="flex items-center space-x-2 p-2 rounded-lg hover:bg-zinc-800/50 transition-all duration-200">
                  <div className="w-8 h-8 bg-gradient-to-br from-zion-cyan to-zion-blue rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-medium text-zinc-300">{user.name}</span>
                  <ChevronDown className="w-4 h-4 text-zinc-400" />
                </button>
                
                <div className="absolute top-full right-0 mt-2 w-48 bg-zinc-900/95 backdrop-blur-xl border border-zinc-800 rounded-xl shadow-2xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="p-2">
                    <Link to="/dashboard" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-zinc-800/50 transition-all duration-200">
                      <BarChart3 className="w-4 h-4 text-zinc-400" />
                      <span className="text-sm text-zinc-300">Dashboard</span>
                    </Link>
                    <Link to="/profile" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-zinc-800/50 transition-all duration-200">
                      <User className="w-4 h-4 text-zinc-400" />
                      <span className="text-sm text-zinc-300">Profile</span>
                    </Link>
                    <button
                      onClick={logout}
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-zinc-800/50 transition-all duration-200 w-full text-left"
                    >
                      <LogOut className="w-4 h-4 text-zinc-400" />
                      <span className="text-sm text-zinc-300">Logout</span>
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link to="/login" className="nav-item">
                  Sign In
                </Link>
                <Link to="/signup" className="btn-futuristic">
                  Get Started
                </Link>
              </div>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-zinc-800/50 transition-all duration-200"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-zinc-400" />
              ) : (
                <Menu className="w-6 h-6 text-zinc-400" />
              )}
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
            className="lg:hidden bg-zinc-900/95 backdrop-blur-xl border-t border-zinc-800/50 overflow-hidden"
          >
            <div className="container mx-auto px-6 py-6">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="mb-6">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search services..."
                  className="input-futuristic w-full"
                />
              </form>

              {/* Mobile Navigation */}
              <nav className="space-y-4">
                {navigationItems.map((item) => (
                  <div key={item.name}>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center justify-between w-full p-3 rounded-lg hover:bg-zinc-800/50 transition-all duration-200"
                    >
                      <div className="flex items-center space-x-3">
                        <item.icon className="w-5 h-5 text-zinc-400" />
                        <span className="font-medium text-zinc-300">{item.name}</span>
                      </div>
                      <ChevronDown className={`w-4 h-4 text-zinc-400 transition-transform duration-200 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    </button>

                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="ml-6 mt-2 space-y-2"
                      >
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-zinc-800/50 transition-all duration-200"
                          >
                            <div className={`w-6 h-6 bg-gradient-to-br ${subItem.color} rounded-lg flex items-center justify-center`}>
                              <subItem.icon className="w-3 h-3 text-white" />
                            </div>
                            <span className="text-sm text-zinc-400">{subItem.name}</span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ))}
              </nav>

              {/* Mobile Quick Actions */}
              <div className="mt-6 pt-6 border-t border-zinc-800/50">
                <div className="grid grid-cols-1 gap-3">
                  {quickActions.map((action) => (
                    <Link
                      key={action.name}
                      to={action.href}
                      className="btn-futuristic text-center"
                    >
                      {action.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
