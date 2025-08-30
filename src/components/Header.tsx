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
import { AdvancedSearch } from './AdvancedSearch';
import { ThemeToggle } from './ThemeProvider';
import { cn } from '@/lib/utils';

interface HeaderProps {
  className?: string;
  onMenuClick?: () => void;
}

export function Header({ className, onMenuClick }: HeaderProps) {
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
    if (onMenuClick) onMenuClick();
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
            <MainNavigation />
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            
            {/* Advanced Search */}
            <AdvancedSearch />
            
            {/* Theme Toggle */}
            <ThemeToggle />

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
              {isMobileMenuOpen ? (
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
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-zion-blue-dark border-t border-zion-purple/30"
          >
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Navigation Links */}
              <div className="space-y-2">
                <Link
                  to="/"
                  className="block px-4 py-3 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/20 rounded-lg transition-colors"
                  onClick={closeMobileMenu}
                >
                  Home
                </Link>
                <Link
                  to="/services"
                  className="block px-4 py-3 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/20 rounded-lg transition-colors"
                  onClick={closeMobileMenu}
                >
                  Services
                </Link>
                <Link
                  to="/about"
                  className="block px-4 py-3 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/20 rounded-lg transition-colors"
                  onClick={closeMobileMenu}
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="block px-4 py-3 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/20 rounded-lg transition-colors"
                  onClick={closeMobileMenu}
                >
                  Contact
                </Link>
              </div>

              {/* Mobile Quick Actions */}
              <div className="pt-4 border-t border-zion-purple/20">
                <div className="grid grid-cols-2 gap-3">
                  <Link
                    to="/ai-services"
                    className="flex items-center space-x-3 p-4 bg-zion-blue/10 border border-zion-purple/30 rounded-lg hover:bg-zion-blue/20 transition-colors"
                    onClick={closeMobileMenu}
                  >
                    <Brain className="w-5 h-5 text-zion-cyan" />
                    <span className="text-zion-slate-light font-medium">AI Services</span>
                  </Link>
                  <Link
                    to="/cybersecurity"
                    className="flex items-center space-x-3 p-4 bg-zion-blue/10 border border-zion-purple/30 rounded-lg hover:bg-zion-blue/20 transition-colors"
                    onClick={closeMobileMenu}
                  >
                    <Shield className="w-5 h-5 text-zion-cyan" />
                    <span className="text-zion-slate-light font-medium">Security</span>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
