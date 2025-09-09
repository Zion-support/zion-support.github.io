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
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  ChevronRight,
  ArrowRight,
  Search as SearchIcon,
  Grid,
  Layers,
  Settings,
  HelpCircle,
  BookOpen,
  Calendar,
  Target,
  Lightbulb,
  Cpu as CpuIcon,
  Server,
  Smartphone,
  Monitor,
  Wifi,
  Satellite,
  Atom,
  Dna,
  Microscope,
  Telescope,
  Car,
  Robot,
  Gamepad2,
  Vr,
  Brain as BrainIcon,
  Flask,
  Rocket as RocketIcon,
  Leaf,
  Wind,
  Sun,
  Battery,
  Zap as ZapIcon,
  Building,
  DollarSign,
  Play
} from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

export function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
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

  const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'About', href: '/about', current: false },
    { name: 'Services', href: '/services', current: false },
    { name: 'Case Studies', href: '/case-studies', current: false },
    { name: 'News', href: '/news', current: false },
    { name: 'Careers', href: '/careers', current: false },
    { name: 'Contact', href: '/contact', current: false },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-zion-slate-dark/95 backdrop-blur-md border-b border-zion-cyan/20 shadow-2xl' 
        : 'bg-transparent'
    }`}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-zion-cyan rounded-full opacity-10"
              animate={{
                x: [0, Math.random() * 100],
                y: [0, Math.random() * 100],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 20 + 20,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center"
            >
              <Link to="/" className="flex items-center space-x-3 group">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                    Zion Tech Group
                  </h1>
                  <p className="text-xs text-zion-slate-light">Innovating Tomorrow</p>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigationItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  <button
                    onClick={() => toggleDropdown(item.name)}
                    className="flex items-center space-x-2 px-4 py-2 text-white hover:text-zion-cyan transition-colors duration-200 rounded-lg hover:bg-zion-slate-dark/50"
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === item.name ? 'rotate-180' : ''
                    }`} />
                  </button>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-80 bg-zion-slate-dark/95 backdrop-blur-md border border-zion-cyan/20 rounded-xl shadow-2xl overflow-hidden"
                      >
                        <div className="p-4">
                          <div className="grid grid-cols-1 gap-2">
                            {item.dropdown.map((subItem) => (
                              <Link
                                key={subItem.name}
                                to={subItem.href}
                                className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-zion-slate-dark/50 transition-all duration-200"
                              >
                                <div className={`p-2 rounded-lg bg-gradient-to-r ${subItem.color} group-hover:scale-110 transition-transform duration-200`}>
                                  <subItem.icon className="w-4 h-4 text-white" />
                                </div>
                                <div className="flex-1">
                                  <h4 className="text-white font-medium group-hover:text-zion-cyan transition-colors duration-200">
                                    {subItem.name}
                                  </h4>
                                  <p className="text-xs text-zion-slate-light mt-1">
                                    {subItem.description}
                                  </p>
                                </div>
                                <ChevronRight className="w-4 h-4 text-zion-slate-light group-hover:text-zion-cyan transition-colors duration-200" />
                              </Link>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 text-zion-slate-light hover:text-zion-cyan transition-colors duration-200"
              >
                <SearchIcon className="w-5 h-5" />
              </motion.button>

              {/* User Menu */}
              {user ? (
                <div className="relative">
                  <button className="flex items-center space-x-2 p-2 text-zion-slate-light hover:text-zion-cyan transition-colors duration-200 rounded-lg hover:bg-zion-slate-dark/50">
                    <User className="w-5 h-5" />
                    <span className="hidden sm:block">{user.name}</span>
                  </button>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center space-x-3"
                >
                  <Link
                    to="/login"
                    className="px-4 py-2 text-zion-cyan hover:text-white transition-colors duration-200 border border-zion-cyan/50 hover:border-zion-cyan rounded-lg hover:bg-zion-cyan/10"
                  >
                    Login
                  </Link>
                  <Link
                    to="/contact"
                    className="px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg hover:shadow-lg transition-all duration-200 hover:scale-105"
                  >
                    Get Started
                  </Link>
                </motion.div>
              )}

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-zion-slate-light hover:text-zion-cyan transition-colors duration-200"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="border-t border-zion-cyan/20 bg-zion-slate-dark/95 backdrop-blur-md"
            >
              <div className="container mx-auto px-4 py-4">
                <form onSubmit={handleSearch} className="relative max-w-2xl mx-auto">
                  <SearchIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search for services, solutions, or technologies..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-zion-slate-dark/80 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-1 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-md hover:shadow-lg transition-all duration-200"
                  >
                    Search
                  </button>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-t border-zion-cyan/20 bg-zion-slate-dark/95 backdrop-blur-md"
          >
            <div className="container mx-auto px-4 py-6">
              <nav className="space-y-4">
                {navigationItems.map((item) => (
                  <div key={item.name} className="space-y-2">
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="flex items-center justify-between w-full p-3 text-left text-white hover:text-zion-cyan transition-colors duration-200 rounded-lg hover:bg-zion-slate-dark/50"
                    >
                      <div className="flex items-center space-x-3">
                        <item.icon className="w-5 h-5" />
                        <span>{item.name}</span>
                      </div>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.name ? 'rotate-180' : ''
                      }`} />
                    </button>
                    
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="ml-8 space-y-2"
                        >
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="flex items-center space-x-3 p-3 text-zion-slate-light hover:text-zion-cyan transition-colors duration-200 rounded-lg hover:bg-zion-slate-dark/50"
                            >
                              <div className={`p-2 rounded-lg bg-gradient-to-r ${subItem.color}`}>
                                <subItem.icon className="w-4 h-4 text-white" />
                              </div>
                              <span>{subItem.name}</span>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
                
                <div className="pt-4 border-t border-zion-cyan/20">
                  <div className="grid grid-cols-2 gap-4">
                    <Link
                      to="/contact"
                      className="p-3 text-center bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg hover:shadow-lg transition-all duration-200"
                    >
                      Contact Us
                    </Link>
                    <Link
                      to="/about"
                      className="p-3 text-center border border-zion-cyan text-zion-cyan rounded-lg hover:bg-zion-cyan hover:text-white transition-all duration-200"
                    >
                      About Us
                    </Link>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={mobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)}
        navigationItems={navigationItems}
      />

      {/* Mobile Bottom Navigation */}
      {isMobile && <MobileBottomNav />}
    </>
  );
}
