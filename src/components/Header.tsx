import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Search, 
  User, 
  Bell, 
  Settings, 
  LogOut, 
  ChevronDown,
  Globe,
  Sun,
  Moon,
  Zap,
  Brain,
  Shield,
  Users,
  HardDrive,
  TrendingUp,
  Building2,
  FileText,
  HelpCircle,
  BarChart3,
  ArrowRight,
  CheckCircle,
  Star,
  Play,
  ChevronLeft,
  ChevronRight,
  Rocket,
  Target,
  Handshake,
  Lightbulb,
  Cpu,
  Database,
  Network,
  Smartphone,
  Lock,
  Code,
  Server,
  Chip,
  Wifi,
  ShieldCheck,
  Bot,
  Workflow,
  Eye,
  Sparkles,
  Atom,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  MessageCircle,
  BarChart,
  Users2,
  Settings as SettingsIcon,
  Palette
} from 'lucide-react';
import { MainNavigation } from './header/MainNavigation';
import { cn } from '@/lib/utils';

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
    // You can add theme switching logic here
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-zion-blue-dark/95 backdrop-blur-md border-b border-zion-purple/30 shadow-lg" 
          : "bg-transparent",
        className
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Zap className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl lg:text-2xl font-bold text-white group-hover:text-zion-cyan transition-colors">
                Zion Tech Group
              </h1>
              <p className="text-xs lg:text-sm text-zion-slate-light group-hover:text-zion-cyan transition-colors">
                Innovation Group
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <nav className="flex items-center space-x-8">
              {/* Main Services */}
              <div className="relative group">
                <button className="flex items-center space-x-2 text-zion-slate-light hover:text-zion-cyan transition-colors py-2">
                  <span>Services</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-80 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-xl shadow-zion-purple/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="p-4 grid grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-zion-cyan font-semibold mb-2">AI & ML</h3>
                      <div className="space-y-1">
                        <Link to="/ai-services" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors">AI Services</Link>
                        <Link to="/ai-solutions" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors">AI Solutions</Link>
                        <Link to="/services/ai-business-intelligence" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors">Business Intelligence</Link>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-zion-cyan font-semibold mb-2">Micro SAAS</h3>
                      <div className="space-y-1">
                        <Link to="/micro-saas" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors">Micro SAAS</Link>
                        <Link to="/services/project-management-saas" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors">Project Management</Link>
                        <Link to="/services/hr-management-saas" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors">HR Management</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Solutions */}
              <div className="relative group">
                <button className="flex items-center space-x-2 text-zion-slate-light hover:text-zion-cyan transition-colors py-2">
                  <span>Solutions</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-80 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-xl shadow-zion-purple/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="p-4 grid grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-zion-cyan font-semibold mb-2">IT Infrastructure</h3>
                      <div className="space-y-1">
                        <Link to="/it-services" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors">IT Services</Link>
                        <Link to="/services/cloud-migration" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors">Cloud Migration</Link>
                        <Link to="/services/cybersecurity-audit" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors">Cybersecurity</Link>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-zion-cyan font-semibold mb-2">Emerging Tech</h3>
                      <div className="space-y-1">
                        <Link to="/services/blockchain-solutions" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors">Blockchain</Link>
                        <Link to="/services/quantum-computing" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors">Quantum Computing</Link>
                        <Link to="/services/iot-platform" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors">IoT Platform</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Company */}
              <div className="relative group">
                <button className="flex items-center space-x-2 text-zion-slate-light hover:text-zion-cyan transition-colors py-2">
                  <span>Company</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-xl shadow-zion-purple/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="p-4 space-y-2">
                    <Link to="/about" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors">About Us</Link>
                    <Link to="/team" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors">Our Team</Link>
                    <Link to="/careers" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors">Careers</Link>
                    <Link to="/contact" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors">Contact</Link>
                  </div>
                </div>
              </div>

              {/* Resources */}
              <div className="relative group">
                <button className="flex items-center space-x-2 text-zion-slate-light hover:text-zion-cyan transition-colors py-2">
                  <span>Resources</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-xl shadow-zion-purple/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="p-4 space-y-2">
                    <Link to="/blog" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors">Blog</Link>
                    <Link to="/case-studies" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors">Case Studies</Link>
                    <Link to="/white-papers" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors">White Papers</Link>
                    <Link to="/webinars" className="block text-sm text-zion-slate-light hover:text-zion-cyan transition-colors">Webinars</Link>
                  </div>
                </div>
              </div>

              {/* Pricing */}
              <Link to="/pricing" className="text-zion-slate-light hover:text-zion-cyan transition-colors py-2">
                Pricing
              </Link>

              {/* Support */}
              <Link to="/support" className="text-zion-slate-light hover:text-zion-cyan transition-colors py-2">
                Support
              </Link>
            </nav>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            
            {/* Search Button */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 text-zion-slate-light hover:text-zion-cyan transition-colors"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 text-zion-slate-light hover:text-zion-cyan transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Notifications */}
            <button className="p-2 text-zion-slate-light hover:text-zion-cyan transition-colors relative">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            </button>

            {/* User Menu */}
            <div className="relative">
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center space-x-2 p-2 text-zion-slate-light hover:text-zion-cyan transition-colors rounded-lg hover:bg-zion-purple/20"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                <ChevronDown className="w-4 h-4" />
              </button>

              <AnimatePresence>
                {isUserMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 mt-2 w-48 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-xl shadow-zion-purple/20 z-50"
                  >
                    <div className="py-2">
                      <Link
                        to="/profile"
                        className="flex items-center space-x-3 px-4 py-2 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/20 transition-colors"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        <User className="w-4 h-4" />
                        <span>Profile</span>
                      </Link>
                      <Link
                        to="/settings"
                        className="flex items-center space-x-3 px-4 py-2 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/20 transition-colors"
                        onClick={() => setIsUserMenuOpen(false)}
                      >
                        <Settings className="w-4 h-4" />
                        <span>Settings</span>
                      </Link>
                      <div className="border-t border-zion-purple/20 my-2"></div>
                      <button
                        className="flex items-center space-x-3 px-4 py-2 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/20 transition-colors w-full text-left"
                        onClick={() => {
                          // Add logout logic here
                          setIsUserMenuOpen(false);
                        }}
                      >
                        <LogOut className="w-4 h-4" />
                        <span>Logout</span>
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 text-zion-slate-light hover:text-zion-cyan transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-zion-blue-dark border-t border-zion-purple/30"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zion-slate-light" />
                <input
                  type="text"
                  placeholder="Search services, solutions, or resources..."
                  className="w-full pl-10 pr-4 py-3 bg-zion-blue-darker border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-zion-blue-dark border-t border-zion-purple/30"
          >
            <div className="px-4 py-6 space-y-6">
              
              {/* Mobile Navigation Links */}
              <div className="space-y-4">
                <Link
                  to="/"
                  className="block text-white hover:text-zion-cyan transition-colors text-lg font-medium"
                  onClick={closeMobileMenu}
                >
                  Home
                </Link>
                
                <div className="space-y-2">
                  <h3 className="text-zion-cyan font-semibold text-sm uppercase tracking-wider">Services</h3>
                  <div className="pl-4 space-y-2">
                    <Link
                      to="/ai-services"
                      className="block text-zion-slate-light hover:text-zion-cyan transition-colors"
                      onClick={closeMobileMenu}
                    >
                      AI Services
                    </Link>
                    <Link
                      to="/it-services"
                      className="block text-zion-slate-light hover:text-zion-cyan transition-colors"
                      onClick={closeMobileMenu}
                    >
                      IT Services
                    </Link>
                    <Link
                      to="/micro-saas"
                      className="block text-zion-slate-light hover:text-zion-cyan transition-colors"
                      onClick={closeMobileMenu}
                    >
                      Micro SAAS
                    </Link>
                    <Link
                      to="/cloud-devops"
                      className="block text-zion-slate-light hover:text-zion-cyan transition-colors"
                      onClick={closeMobileMenu}
                    >
                      Cloud & DevOps
                    </Link>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-zion-cyan font-semibold text-sm uppercase tracking-wider">Solutions</h3>
                  <div className="pl-4 space-y-2">
                    <Link
                      to="/enterprise"
                      className="block text-zion-slate-light hover:text-zion-cyan transition-colors"
                      onClick={closeMobileMenu}
                    >
                      Enterprise
                    </Link>
                    <Link
                      to="/healthcare"
                      className="block text-zion-slate-light hover:text-zion-cyan transition-colors"
                      onClick={closeMobileMenu}
                    >
                      Healthcare
                    </Link>
                    <Link
                      to="/financial"
                      className="block text-zion-slate-light hover:text-zion-cyan transition-colors"
                      onClick={closeMobileMenu}
                    >
                      Financial
                    </Link>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-zion-cyan font-semibold text-sm uppercase tracking-wider">Company</h3>
                  <div className="pl-4 space-y-2">
                    <Link
                      to="/about"
                      className="block text-zion-slate-light hover:text-zion-cyan transition-colors"
                      onClick={closeMobileMenu}
                    >
                      About Us
                    </Link>
                    <Link
                      to="/contact"
                      className="block text-zion-slate-light hover:text-zion-cyan transition-colors"
                      onClick={closeMobileMenu}
                    >
                      Contact
                    </Link>
                    <Link
                      to="/careers"
                      className="block text-zion-slate-light hover:text-zion-cyan transition-colors"
                      onClick={closeMobileMenu}
                    >
                      Careers
                    </Link>
                  </div>
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="pt-4 border-t border-zion-purple/20">
                <Link
                  to="/signup"
                  className="block w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white text-center py-3 px-6 rounded-lg font-medium hover:from-zion-purple-light hover:to-zion-purple transition-all duration-300"
                  onClick={closeMobileMenu}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
