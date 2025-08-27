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
  LogOut,
  Building,
  Atom,
  Blockchain,
  Factory,
  Satellite,
  Dna,
  Microscope,
  Flask,
  TestTube,
  Syringe,
  Stethoscope,
  HeartPulse,
  BrainCircuit,
  Scale,
  ShoppingCart,
  Truck,
  Wifi,
  Bluetooth,
  Smartphone,
  Monitor,
  Server,
  Settings,
  HelpCircle,
  BookOpen,
  Briefcase,
  Target,
  Lightbulb,
  ShieldCheck,
  Smartphone as PhoneIcon
} from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

export function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { user, logout } = useAuth();
  const location = useLocation();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to search results
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
        { name: 'AI & Analytics', href: '/services/ai-analytics', icon: Brain, description: 'AI-powered business intelligence and analytics' },
        { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield, description: 'Advanced threat detection and security' },
        { name: 'Cloud & DevOps', href: '/services/cloud-devops', icon: Cloud, description: 'Cloud infrastructure and automation' },
        { name: 'IoT & Edge', href: '/services/iot-edge', icon: Cpu, description: 'Edge computing and IoT solutions' },
        { name: 'Quantum Computing', href: '/services/quantum-computing', icon: Rocket, description: 'Quantum algorithms and computing' },
        { name: 'Blockchain', href: '/services/blockchain', icon: Lock, description: 'Distributed ledger and smart contracts' },
        { name: 'Digital Twin', href: '/services/digital-twin', icon: Globe, description: 'Virtual replicas and simulation' },
        { name: 'Sustainability', href: '/services/sustainability', icon: Heart, description: 'Green IT and ESG solutions' },
        { name: 'Neuromorphic Computing', href: '/services/neuromorphic', icon: BrainCircuit, description: 'Brain-inspired AI computing' },
        { name: 'Synthetic Biology', href: '/services/synthetic-biology', icon: Dna, description: 'AI-powered genetic engineering' },
        { name: 'Space Technology', href: '/services/space-tech', icon: Satellite, description: 'Satellite and space operations' },
        { name: 'Brain-Computer Interface', href: '/services/bci', icon: Brain, description: 'Neural interface technology' }
      ]
    },
    {
      name: 'Micro SAAS',
      href: '/micro-saas-services',
      icon: Code,
      color: 'from-zion-purple to-zion-pink',
      dropdown: [
        { name: 'AI Business Intelligence', href: '/micro-saas/ai-business-intelligence', icon: Brain, description: 'AI analytics platform' },
        { name: 'Customer Experience', href: '/micro-saas/customer-experience', icon: Users, description: 'Customer journey optimization' },
        { name: 'Quantum Computing', href: '/micro-saas/quantum-computing', icon: Rocket, description: 'Quantum algorithms as service' },
        { name: 'Supply Chain', href: '/micro-saas/supply-chain', icon: Network, description: 'Blockchain transparency' },
        { name: 'Cybersecurity', href: '/micro-saas/cybersecurity', icon: Shield, description: 'AI threat detection' },
        { name: 'IoT Edge Computing', href: '/micro-saas/iot-edge', icon: Cpu, description: 'Edge processing platform' },
        { name: 'Content Creation', href: '/micro-saas/content-creation', icon: FileText, description: 'AI content generation' },
        { name: 'HR Platform', href: '/micro-saas/hr-platform', icon: Users, description: 'Intelligent HR management' },
        { name: 'Autonomous Drones', href: '/micro-saas/autonomous-drones', icon: Satellite, description: 'Drone fleet management' },
        { name: 'Advanced Robotics', href: '/micro-saas/advanced-robotics', icon: Cpu, description: 'AI-powered robotics' },
        { name: 'Materials Discovery', href: '/micro-saas/materials-discovery', icon: Flask, description: 'AI materials research' },
        { name: 'Quantum Internet', href: '/micro-saas/quantum-internet', icon: Wifi, description: 'Quantum-secure networks' }
      ]
    },
    {
      name: 'Solutions',
      href: '/solutions',
      icon: Building,
      color: 'from-zion-blue to-zion-cyan',
      dropdown: [
        { name: 'Enterprise Solutions', href: '/solutions/enterprise', icon: Building, description: 'Large-scale deployments' },
        { name: 'Healthcare Solutions', href: '/solutions/healthcare', icon: Heart, description: 'Medical technology solutions' },
        { name: 'Financial Solutions', href: '/solutions/financial', icon: TrendingUp, description: 'Fintech and banking solutions' },
        { name: 'Manufacturing Solutions', href: '/solutions/manufacturing', icon: Factory, description: 'Smart manufacturing' },
        { name: 'Government Solutions', href: '/solutions/government', icon: Shield, description: 'Public sector technology' },
        { name: 'Retail Solutions', href: '/solutions/retail', icon: ShoppingCart, description: 'E-commerce and retail tech' },
        { name: 'Education Solutions', href: '/solutions/education', icon: BookOpen, description: 'EdTech and learning platforms' },
        { name: 'Transportation Solutions', href: '/solutions/transportation', icon: Truck, description: 'Smart mobility and logistics' }
      ]
    },
    {
      name: 'Innovation Lab',
      href: '/innovation-lab',
      icon: Sparkles,
      color: 'from-zion-pink to-zion-purple',
      dropdown: [
        { name: 'Research & Development', href: '/innovation-lab/research', icon: Microscope, description: 'Cutting-edge research' },
        { name: 'Prototype Development', href: '/innovation-lab/prototypes', icon: Flask, description: 'Rapid prototyping' },
        { name: 'Technology Incubator', href: '/innovation-lab/incubator', icon: Rocket, description: 'Startup incubation' },
        { name: 'Future Technologies', href: '/innovation-lab/future-tech', icon: Eye, description: 'Emerging tech exploration' },
        { name: 'Collaborative Projects', href: '/innovation-lab/collaborations', icon: Handshake, description: 'Partnership opportunities' }
      ]
    }
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-zion-slate-dark/95 backdrop-blur-xl border-b border-zion-cyan/20">
      {/* Futuristic animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-zion-slate-dark via-zion-slate to-zion-slate-dark opacity-50"></div>
      <div className="absolute inset-0 cyber-grid opacity-20"></div>
      
      <div className="relative container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center group-hover:from-zion-blue group-hover:to-zion-purple transition-all duration-300 glow-cyan">
                  <span className="text-white font-bold text-xl font-orbitron">Z</span>
                </div>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-zion-cyan to-zion-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-zion-cyan to-zion-blue bg-clip-text text-transparent font-orbitron">
                  Zion Tech Group
                </h1>
                <p className="text-xs text-zion-slate-light font-rajdhani">Future Technology Solutions</p>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    isActive(item.href)
                      ? 'text-zion-cyan bg-zion-cyan/10 border border-zion-cyan/20'
                      : 'text-zion-slate-light hover:text-zion-cyan hover:bg-zion-slate/50'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === item.name ? 'rotate-180' : ''
                  }`} />
                </button>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-zion-slate-dark/95 backdrop-blur-xl border border-zion-cyan/20 rounded-2xl shadow-2xl overflow-hidden"
                    >
                      <div className="p-4">
                        <div className="grid grid-cols-1 gap-3">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="flex items-start space-x-3 p-3 rounded-xl hover:bg-zion-slate/50 transition-all duration-200 group/item"
                            >
                              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 rounded-lg flex items-center justify-center group-hover/item:from-zion-cyan/40 group-hover/item:to-zion-blue/40 transition-all duration-200">
                                <subItem.icon className="w-5 h-5 text-zion-cyan" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-white group-hover/item:text-zion-cyan transition-colors duration-200">
                                  {subItem.name}
                                </p>
                                <p className="text-xs text-zion-slate-light mt-1">
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
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <form onSubmit={handleSearch} className="hidden md:flex items-center">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zion-slate-light" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 pl-10 pr-4 py-2 bg-zion-slate/50 border border-zion-cyan/20 rounded-xl text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan/50 focus:bg-zion-slate/70 transition-all duration-300"
                />
              </div>
            </form>

            {/* User menu */}
            {user ? (
              <div className="flex items-center space-x-3">
                <button className="relative p-2 text-zion-slate-light hover:text-zion-cyan transition-colors duration-200">
                  <Bell className="w-5 h-5" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-zion-cyan rounded-full animate-pulse"></span>
                </button>
                <div className="relative group">
                  <button className="flex items-center space-x-2 p-2 rounded-lg hover:bg-zion-slate/50 transition-all duration-200">
                    <div className="w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full flex items-center justify-center">
                      <User className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-zion-slate-light group-hover:text-zion-cyan transition-colors duration-200">
                      {user.name || 'User'}
                    </span>
                  </button>
                </div>
                <button
                  onClick={logout}
                  className="p-2 text-zion-slate-light hover:text-zion-red transition-colors duration-200"
                >
                  <LogOut className="w-5 h-5" />
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Link
                  to="/login"
                  className="px-4 py-2 text-zion-cyan border border-zion-cyan/30 rounded-xl hover:bg-zion-cyan/10 hover:border-zion-cyan/50 transition-all duration-300 font-medium"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-xl hover:from-zion-blue hover:to-zion-purple transition-all duration-300 font-medium glow-cyan"
                >
                  Get Started
                </Link>
              </div>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-zion-slate-light hover:text-zion-cyan transition-colors duration-200"
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

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-zion-slate-dark/95 backdrop-blur-xl border-t border-zion-cyan/20 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-6">
              <div className="space-y-6">
                {/* Mobile Search */}
                <form onSubmit={handleSearch} className="w-full">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zion-slate-light" />
                    <input
                      type="text"
                      placeholder="Search services..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-zion-slate/50 border border-zion-cyan/20 rounded-xl text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan/50 focus:bg-zion-slate/70 transition-all duration-300"
                    />
                  </div>
                </form>

                {/* Mobile Navigation Items */}
                {navigationItems.map((item) => (
                  <div key={item.name} className="space-y-3">
                    <Link
                      to={item.href}
                      className="flex items-center justify-between p-3 rounded-xl hover:bg-zion-slate/50 transition-all duration-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-zion-cyan/20 to-zion-blue/20 rounded-lg flex items-center justify-center">
                          <item.icon className="w-5 h-5 text-zion-cyan" />
                        </div>
                        <span className="text-white font-medium">{item.name}</span>
                      </div>
                      <ChevronDown className="w-5 h-5 text-zion-slate-light" />
                    </Link>
                    
                    {/* Mobile Dropdown */}
                    <div className="ml-8 space-y-2">
                      {item.dropdown.slice(0, 4).map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="flex items-center space-x-3 p-2 rounded-lg hover:bg-zion-slate/30 transition-all duration-200"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <subItem.icon className="w-4 h-4 text-zion-cyan" />
                          <span className="text-sm text-zion-slate-light">{subItem.name}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}

                {/* Mobile Auth */}
                {!user && (
                  <div className="flex flex-col space-y-3 pt-4 border-t border-zion-cyan/20">
                    <Link
                      to="/login"
                      className="w-full px-4 py-3 text-zion-cyan border border-zion-cyan/30 rounded-xl hover:bg-zion-cyan/10 hover:border-zion-cyan/50 transition-all duration-300 font-medium text-center"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Sign In
                    </Link>
                    <Link
                      to="/signup"
                      className="w-full px-4 py-3 bg-gradient-to-r from-zion-cyan to-zion-blue text-white rounded-xl hover:from-zion-blue hover:to-zion-purple transition-all duration-300 font-medium text-center"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Get Started
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
