
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Search, ChevronDown, Globe, Phone, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
=======
import React, { useState } from 'react';
=======
>>>>>>> origin/cursor/build-project-and-deploy-with-netlify-1c1d
import { Link, useNavigate, useLocation } from 'react-router-dom';
=======
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-445a
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-d816
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-2f34
import { Logo } from './Logo';
import { UserMenu } from './UserMenu';
import { LanguageSelector } from './LanguageSelector';
=======
import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { UserMenu } from './UserMenu';
import { LanguageSelector } from './LanguageSelector';
import { MainNavigation } from '@/layout/MainNavigation';
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2
import { useAuth } from '@/hooks/useAuth';
import { useWhitelabel } from '@/context/WhitelabelContext';
import { EnhancedSearchInput } from "@/components/search/EnhancedSearchInput";
import { generateSearchSuggestions } from "@/data/marketplaceData";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { Menu, X, ChevronDown } from 'lucide-react';
>>>>>>> origin/cursor/resolve-typescript-merge-conflicts-8802
=======
import { Menu, X } from 'lucide-react';
>>>>>>> origin/cursor/build-project-and-deploy-with-netlify-1c1d
=======
import { useNavigate } from "react-router-dom";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { useState } from "react";
<<<<<<< HEAD
import { Button } from '@/components/ui/button';
import { Sparkles, Menu, X } from 'lucide-react';
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-da9e
=======
import { Menu, X, Search, Sparkles } from "lucide-react";
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-681f
=======
import { Button } from "@/components/ui/button";
=======
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-445a
import { 
  Menu, 
  X, 
  Search, 
<<<<<<< HEAD
  ChevronDown, 
  Zap, 
  Brain, 
  Cloud, 
  Shield,
  Users,
  Building,
  Code,
  Globe
} from "lucide-react";
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-2f34
=======
  Sparkles, 
  Zap, 
  Brain, 
  Shield,
  ArrowRight,
  ChevronDown
} from 'lucide-react';
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-445a
=======
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Sparkles, Zap, Brain, Shield } from "lucide-react";
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-d816
=======
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Zap, 
  Cloud, 
  Shield, 
  Code, 
  BarChart3,
  Settings,
  Link as LinkIcon,
  Bot,
  Building,
  Users,
  HardDrive,
  Lightbulb
} from 'lucide-react';
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2

export interface HeaderProps {
  hideLogin?: boolean;
  customLogo?: string;
  customTheme?: {
    primaryColor: string;
    backgroundColor: string;
    textColor: string;
  };
<<<<<<< HEAD
  onMenuToggle?: () => void;
}

export function Header({ onMenuToggle }: HeaderProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [query, setQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
=======
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-da9e
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-681f
=======
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-2f34
=======
  const [isScrolled, setIsScrolled] = useState(false);
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-445a
=======
  const [isScrolled, setIsScrolled] = useState(false);
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-d816
  const searchSuggestions = generateSearchSuggestions();
>>>>>>> origin/cursor/resolve-typescript-merge-conflicts-8802
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsSearchExpanded(false);
  }, [navigate]);

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
=======
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from './Logo';
import { UserMenu } from './UserMenu';
import { LanguageSelector } from './LanguageSelector';
import { Button } from '@/components/ui/Button';
import { Menu, X, Search, Phone, Mail } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
    };
=======
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-2f34
=======
  // Handle scroll effect
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-d816
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

<<<<<<< HEAD
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-445a
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-d816
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-2f34
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-445a
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-d816
=======
}

export function Header({ hideLogin = false, customLogo, customTheme }: HeaderProps) {
  const { user } = useAuth();
  const { isWhitelabel, primaryColor } = useWhitelabel();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const searchSuggestions = generateSearchSuggestions();
  
  // If we have a white-label tenant and no specific customTheme is provided,
  // use the tenant's primary color
  const effectiveTheme = customTheme || (isWhitelabel ? {
    primaryColor,
    backgroundColor: '#000000', // Default dark background
    textColor: '#ffffff', // Default light text
  } : undefined);
  
  const headerStyle = effectiveTheme ? {
    backgroundColor: effectiveTheme.backgroundColor,
    color: effectiveTheme.textColor,
    borderColor: `${effectiveTheme.primaryColor}20`
  } : {};

>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
      setQuery("");
<<<<<<< HEAD
      setIsSearchExpanded(false);
    }
  };

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


  const toggleSearch = () => {
    setIsSearchExpanded(!isSearchExpanded);
    setIsMobileMenuOpen(false);
  };

  const toggleSidebar = () => {
    if (onMenuToggle) {
      onMenuToggle();
    }
  };

  const isActiveRoute = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <header className={`sticky top-0 z-50 w-full border-b transition-all duration-300 ${
      isScrolled 
        ? 'border-zion-cyan/40 bg-zion-blue-dark/98 backdrop-blur-xl shadow-2xl shadow-zion-cyan/10' 
        : 'border-zion-purple/20 bg-zion-blue-dark/95 backdrop-blur-md'
    }`}>
      {/* Top Bar */}
      <div className="bg-zion-blue-dark/80 border-b border-zion-purple/10">
        <div className="container mx-auto px-4 sm:px-6 py-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-4 text-zion-slate-light">
              <div className="flex items-center space-x-2">
                <Phone className="w-3 h-3 text-zion-cyan" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3 h-3 text-zion-cyan" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Globe className="w-3 h-3 text-zion-cyan" />
              <span>Middletown, DE</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="text-3xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan bg-clip-text text-transparent group-hover:animate-neon-pulse transition-all duration-300">
              Zion Tech
            </div>
            <div className="text-xs text-zion-slate-light font-medium">Group</div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-zion-cyan ${
                isActiveRoute('/') ? 'text-zion-cyan' : 'text-zion-slate-light'
              }`}
            >
              Home
              {isActiveRoute('/') && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-zion-cyan to-zion-purple"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
            <Link 
              to="/services" 
              className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-zion-cyan ${
                isActiveRoute('/services') ? 'text-zion-cyan' : 'text-zion-slate-light'
              }`}
            >
              Services
              {isActiveRoute('/services') && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-zion-cyan to-zion-purple"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
            <Link 
              to="/about" 
              className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-zion-cyan ${
                isActiveRoute('/about') ? 'text-zion-cyan' : 'text-zion-slate-light'
              }`}
            >
              About
              {isActiveRoute('/about') && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-zion-cyan to-zion-purple"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
            <Link 
              to="/contact" 
              className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-zion-cyan ${
                isActiveRoute('/contact') ? 'text-zion-cyan' : 'text-zion-slate-light'
              }`}
            >
              Contact
              {isActiveRoute('/contact') && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-zion-cyan to-zion-purple"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          </nav>

          {/* Desktop Search */}
          <div className="hidden md:block w-72 mx-4">
            <form onSubmit={handleSubmit} className="relative group">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search our services..."
                className="w-full px-4 py-2 bg-zion-blue-light/20 border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-zion-cyan/0 via-zion-purple/0 to-zion-cyan/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </form>
          </div>

          {/* Desktop Actions */}
          <div className="flex items-center gap-3 hidden md:flex">
            {!false && (
              <div className="hidden md:flex items-center space-x-4">
                <a
                  href="/login"
                  className="text-zion-slate-light hover:text-white transition-colors"
                >
                  Login
                </a>
                <a
                  href="/signup"
                  className="bg-zion-cyan text-zion-blue-dark px-4 py-2 rounded-lg hover:bg-zion-cyan-light transition-colors"
                >
                  Sign Up
                </a>
              </div>
            )}
            <Link
              to="/contact"
              className="px-6 py-2 border border-zion-cyan text-zion-cyan rounded-lg font-medium hover:bg-zion-cyan hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleSearch}
              className="p-2 text-zion-cyan hover:bg-zion-purple/10 rounded-md transition-colors"
              aria-label="Toggle search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={toggleSidebar}
              className="p-2 text-zion-cyan hover:bg-zion-purple/10 rounded-md transition-colors"
              aria-label="Toggle sidebar menu"
            >
              <ChevronDown className="w-5 h-5" />
            </button>
=======
  const isActive = (path: string) => location.pathname === path;

  const navigationItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services', hasDropdown: true },
    { name: 'Talent', path: '/talent', hasDropdown: true },
    { name: 'Equipment', path: '/equipment' },
    { name: 'About', path: '/about' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
    { name: 'Blog', path: '/blog' },
  ];

  const serviceDropdownItems = [
    { name: 'IT Solutions', path: '/services/it-solutions' },
    { name: 'AI Services', path: '/services/ai-services' },
    { name: 'Cybersecurity', path: '/services/cybersecurity' },
    { name: 'Green IT', path: '/green-it' },
    { name: 'On-Site Support', path: '/it-onsite-services' },
  ];

  const talentDropdownItems = [
    { name: 'Browse Talents', path: '/talents' },
    { name: 'Talent Directory', path: '/talent-directory' },
    { name: 'AI Matcher', path: '/ai-matcher' },
    { name: 'Hire Now', path: '/hire-now' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
        : 'bg-transparent'
    }`}>
      {/* Top bar with contact info */}
      <div className="bg-zion-blue text-white text-sm py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>info@ziontechgroup.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <LanguageSelector />
            <UserMenu />
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
          </div>
        </div>
      </div>

<<<<<<< HEAD
      {/* Mobile Search Bar */}
      <AnimatePresence>
        {isSearchExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="border-t border-zion-purple/20 bg-zion-blue-dark/95"
          >
            <div className="container mx-auto px-4 py-3">
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search our services..."
                  className="flex-1 px-4 py-2 bg-zion-blue-light/20 border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
                >
                  Search
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="border-t border-zion-purple/20 bg-zion-blue-dark/95 lg:hidden overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-1">
                {[
                  { path: '/', label: 'Home', icon: '🏠' },
                  { path: '/services', label: 'Services', icon: '⚡' },
                  { path: '/about', label: 'About', icon: 'ℹ️' },
                  { path: '/contact', label: 'Contact', icon: '📞' }
                ].map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                      isActiveRoute(item.path)
                        ? 'bg-zion-cyan/20 text-zion-cyan border border-zion-cyan/30'
                        : 'text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="font-medium">{item.label}</span>
                  </Link>
                ))}
              </nav>
              <div className="mt-4 pt-4 border-t border-zion-purple/20 space-y-2">
                {!false && (
                  <Link
                    to="/login"
                    className="block w-full px-4 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg font-medium text-center hover:shadow-lg hover:shadow-zion-cyan/25 transition-all duration-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Login
                  </Link>
                )}
                <Link
                  to="/contact"
                  className="block w-full px-4 py-3 border border-zion-cyan text-zion-cyan rounded-lg font-medium text-center hover:bg-zion-cyan hover:text-white transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Get Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
=======
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header 
<<<<<<< HEAD
<<<<<<< HEAD
      className="sticky top-0 z-50 w-full border-b border-zion-purple/20 bg-zion-blue-dark/90 backdrop-blur-md shadow-2xl"
=======
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-681f
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  return (
    <header 
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      className="sticky top-0 z-50 w-full border-b border-zion-purple/20 bg-zion-blue-dark/95 backdrop-blur-md shadow-lg shadow-zion-purple/10"
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-da9e
=======
      className="sticky top-0 z-50 w-full border-b border-zion-purple/20 bg-zion-blue-dark/95 backdrop-blur-xl shadow-2xl shadow-zion-purple/10"
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-a2e5
=======
      className="sticky top-0 z-50 w-full border-b border-zion-purple/20 bg-zion-blue-dark/90 backdrop-blur-md glass-effect-dark"
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-2048
=======
=======
    }
  };

>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
<<<<<<< HEAD
=======
    setActiveDropdown(null);
  };

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2
  };

  const navigationItems = [
    {
<<<<<<< HEAD
      label: "Marketplace",
      href: "/marketplace",
      icon: <Globe className="h-4 w-4" />,
      children: [
        { label: "AI & ML Services", href: "/micro-saas-services", icon: <Brain className="h-4 w-4" /> },
        { label: "IT Services", href: "/services", icon: <Zap className="h-4 w-4" /> },
        { label: "Cloud Solutions", href: "/services", icon: <Cloud className="h-4 w-4" /> },
        { label: "Cybersecurity", href: "/services", icon: <Shield className="h-4 w-4" /> },
=======
      label: "Services",
      href: "/services",
      icon: <Code className="h-4 w-4" />,
      dropdown: [
        { label: "IT Services", href: "/services", icon: <Cloud className="h-4 w-4" /> },
        { label: "AI Services", href: "/micro-saas-services?category=ai", icon: <Bot className="h-4 w-4" /> },
        { label: "Development", href: "/micro-saas-services?category=dev", icon: <Code className="h-4 w-4" /> },
        { label: "Security", href: "/micro-saas-services?category=security", icon: <Shield className="h-4 w-4" /> },
        { label: "Analytics", href: "/micro-saas-services?category=analytics", icon: <BarChart3 className="h-4 w-4" /> },
        { label: "Automation", href: "/micro-saas-services?category=automation", icon: <Settings className="h-4 w-4" /> },
        { label: "Integration", href: "/micro-saas-services?category=integration", icon: <LinkIcon className="h-4 w-4" /> }
      ]
    },
    {
      label: "Micro SAAS",
      href: "/micro-saas-services",
      icon: <Zap className="h-4 w-4" />,
      isNew: true,
      dropdown: [
        { label: "AI Chatbot Builder", href: "/micro-saas-services?service=ai-chatbot-builder", icon: "🤖", price: "$29/month" },
        { label: "Smart CRM System", href: "/micro-saas-services?service=customer-relationship", icon: "👥", price: "$19/month" },
        { label: "Inventory Management", href: "/micro-saas-services?service=inventory-management", icon: "📦", price: "$9/month" },
        { label: "Project Management", href: "/micro-saas-services?service=project-management", icon: "📋", price: "$14/month" },
        { label: "View All Solutions", href: "/micro-saas-services", icon: <Zap className="h-4 w-4" /> }
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2
      ]
    },
    {
      label: "Talent",
      href: "/talent",
      icon: <Users className="h-4 w-4" />,
<<<<<<< HEAD
      children: [
        { label: "AI Engineers", href: "/talent", icon: <Brain className="h-4 w-4" /> },
        { label: "DevOps Specialists", href: "/talent", icon: <Code className="h-4 w-4" /> },
        { label: "Data Scientists", href: "/talent", icon: <Brain className="h-4 w-4" /> },
        { label: "Full-Stack Developers", href: "/talent", icon: <Code className="h-4 w-4" /> },
=======
      dropdown: [
        { label: "AI Experts", href: "/talent?category=ai", icon: <Bot className="h-4 w-4" /> },
        { label: "Developers", href: "/talent?category=development", icon: <Code className="h-4 w-4" /> },
        { label: "Data Scientists", href: "/talent?category=data", icon: <BarChart3 className="h-4 w-4" /> },
        { label: "Security Specialists", href: "/talent?category=security", icon: <Shield className="h-4 w-4" /> },
        { label: "Browse All", href: "/talent", icon: <Users className="h-4 w-4" /> }
      ]
    },
    {
      label: "Equipment",
      href: "/equipment",
      icon: <HardDrive className="h-4 w-4" />,
      dropdown: [
        { label: "AI Workstations", href: "/equipment?category=ai", icon: <Bot className="h-4 w-4" /> },
        { label: "Servers", href: "/equipment?category=servers", icon: <Cloud className="h-4 w-4" /> },
        { label: "Networking", href: "/equipment?category=networking", icon: <LinkIcon className="h-4 w-4" /> },
        { label: "Browse All", href: "/equipment", icon: <HardDrive className="h-4 w-4" /> }
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2
      ]
    },
    {
      label: "Enterprise",
      href: "/enterprise",
      icon: <Building className="h-4 w-4" />,
<<<<<<< HEAD
      children: [
        { label: "Custom Solutions", href: "/enterprise", icon: <Code className="h-4 w-4" /> },
        { label: "White-Label Platform", href: "/enterprise", icon: <Building className="h-4 w-4" /> },
        { label: "Dedicated Support", href: "/enterprise", icon: <Users className="h-4 w-4" /> },
        { label: "API Access", href: "/developers", icon: <Code className="h-4 w-4" /> },
      ]
    },
    {
      label: "Resources",
      href: "/blog",
      icon: <Code className="h-4 w-4" />,
      children: [
        { label: "Blog & Insights", href: "/blog", icon: <Code className="h-4 w-4" /> },
        { label: "Developer Docs", href: "/developers", icon: <Code className="h-4 w-4" /> },
        { label: "Community", href: "/community", icon: <Users className="h-4 w-4" /> },
        { label: "Help Center", href: "/help", icon: <Code className="h-4 w-4" /> },
=======
      dropdown: [
        { label: "White-label Solutions", href: "/enterprise/white-label", icon: <Building className="h-4 w-4" /> },
        { label: "Custom Development", href: "/enterprise/custom", icon: <Code className="h-4 w-4" /> },
        { label: "Consulting", href: "/enterprise/consulting", icon: <Users className="h-4 w-4" /> },
        { label: "Support Plans", href: "/enterprise/support", icon: <Shield className="h-4 w-4" /> }
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2
      ]
    }
  ];
  
  return (
    <header 
<<<<<<< HEAD
=======
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const enhancedNavigationItems = [
    {
      label: 'Services',
      href: '/micro-saas-services',
      icon: <Sparkles className="w-4 h-4" />,
      description: 'AI & IT Solutions',
      badge: 'New'
    },
    {
      label: 'Marketplace',
      href: '/marketplace',
      icon: <Zap className="w-4 h-4" />,
      description: 'Products & Talent'
    },
    {
      label: 'AI Tools',
      href: '/zion-hire-ai',
      icon: <Brain className="w-4 h-4" />,
      description: 'AI Recruiting'
    },
    {
      label: 'Support',
      href: '/it-onsite-services',
      icon: <Shield className="w-4 h-4" />,
      description: 'IT Onsite Services'
    }
  ];
  
  return (
    <header 
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-445a
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-zion-blue-dark/95 backdrop-blur-xl border-b border-zion-purple/30 shadow-2xl shadow-zion-purple/20' 
          : 'bg-zion-blue-dark/90 backdrop-blur-md border-b border-zion-purple/20'
      }`}
<<<<<<< HEAD
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-2f34
=======
      className="sticky top-0 z-50 w-full border-b border-zion-purple/20 bg-gradient-to-r from-zion-blue-dark/95 via-zion-slate/95 to-zion-purple-dark/95 backdrop-blur-xl shadow-2xl shadow-zion-purple/10"
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-dfab
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-445a
      style={headerStyle}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-1 h-1 bg-zion-cyan rounded-full animate-pulse"></div>
        <div className="absolute top-2 right-1/3 w-1 h-1 bg-zion-purple rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-4 left-1/2 w-1 h-1 bg-zion-blue rounded-full animate-pulse delay-2000"></div>
      </div>
=======
      className="sticky top-0 z-50 w-full border-b border-zion-purple/20 bg-zion-blue-dark/95 backdrop-blur-xl relative overflow-hidden"
      style={headerStyle}
    >
      {/* Futuristic Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-30"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-zion-blue-dark/80 via-zion-slate/60 to-zion-purple-dark/80"></div>
      
      {/* Animated Border Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zion-cyan to-transparent opacity-60"></div>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-73d5
      
=======
      className="sticky top-0 z-50 w-full border-b border-zion-purple/20 bg-zion-blue-dark/90 backdrop-blur-md relative overflow-hidden"
      style={headerStyle}
    >
      {/* Futuristic animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/5 via-zion-cyan/5 to-zion-purple/5"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zion-purple/10 to-transparent"></div>
      
      {/* Animated border glow */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zion-cyan to-transparent opacity-60"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-4 left-1/4 w-1 h-1 bg-zion-cyan rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-8 right-1/3 w-1 h-1 bg-zion-purple rounded-full animate-pulse opacity-40 delay-1000"></div>
        <div className="absolute top-12 left-1/2 w-1 h-1 bg-zion-cyan rounded-full animate-pulse opacity-50 delay-2000"></div>
      </div>

>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-eb69
      <div className="container flex h-16 items-center px-4 sm:px-6 relative z-10">
=======
      className="sticky top-0 z-50 w-full border-b border-zion-purple/20 bg-gradient-to-r from-zion-blue-dark/95 via-zion-blue-dark/90 to-zion-slate-dark/95 backdrop-blur-xl"
      style={headerStyle}
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/5 via-zion-cyan/5 to-zion-purple/5 animate-pulse"></div>
      
      <div className="relative container flex h-16 items-center px-4 sm:px-6">
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-de94
        <Logo customLogo={customLogo} customColor={effectiveTheme?.primaryColor} />

        {/* Desktop Navigation */}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        <nav className="hidden lg:flex ml-8 space-x-6">
          <Link 
            to="/" 
            className={`text-sm font-medium transition-colors hover:text-zion-cyan ${
              isActive('/') ? 'text-zion-cyan' : 'text-zion-slate-light'
            }`}
          >
            Home
          </Link>
          
          {/* Services Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
              className={`flex items-center text-sm font-medium transition-colors hover:text-zion-cyan ${
                location.pathname.startsWith('/services') || location.pathname.startsWith('/ai-solutions') || 
                location.pathname.startsWith('/it-services') || location.pathname.startsWith('/enterprise') 
                  ? 'text-zion-cyan' 
                  : 'text-zion-slate-light'
              }`}
            >
              Services
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            
            {isServicesDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-zion-blue-dark border border-zion-purple/20 rounded-lg shadow-xl backdrop-blur-md">
                <div className="py-2">
                  <Link 
                    to="/services" 
                    className="block px-4 py-2 text-sm text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10"
                    onClick={() => setIsServicesDropdownOpen(false)}
                  >
                    All Services
                  </Link>
                  <Link 
                    to="/ai-solutions" 
                    className="block px-4 py-2 text-sm text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10"
                    onClick={() => setIsServicesDropdownOpen(false)}
                  >
                    AI Solutions
                  </Link>
                  <Link 
                    to="/it-services" 
                    className="block px-4 py-2 text-sm text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10"
                    onClick={() => setIsServicesDropdownOpen(false)}
                  >
                    IT Services
                  </Link>
                  <Link 
                    to="/enterprise" 
                    className="block px-4 py-2 text-sm text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10"
                    onClick={() => setIsServicesDropdownOpen(false)}
                  >
                    Enterprise Solutions
                  </Link>
                  <Link 
                    to="/comprehensive-services" 
                    className="block px-4 py-2 text-sm text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10"
                    onClick={() => setIsServicesDropdownOpen(false)}
                  >
                    Comprehensive Services
                  </Link>
                </div>
              </div>
            )}
          </div>
          
          <Link 
            to="/developers" 
            className={`text-sm font-medium transition-colors hover:text-zion-cyan ${
              isActive('/developers') ? 'text-zion-cyan' : 'text-zion-slate-light'
            }`}
          >
            Developer Portal
          </Link>
          
          <Link 
            to="/help-center" 
            className={`text-sm font-medium transition-colors hover:text-zion-cyan ${
              isActive('/help-center') ? 'text-zion-cyan' : 'text-zion-slate-light'
            }`}
          >
            Help Center
          </Link>
          
          <Link 
            to="/sitemap" 
            className={`text-sm font-medium transition-colors hover:text-zion-cyan ${
              isActive('/sitemap') ? 'text-zion-cyan' : 'text-zion-slate-light'
            }`}
          >
            Sitemap
          </Link>
        </nav>

        <div className="ml-6 flex-1">
          {/* Search bar */}
        </div>
        
=======
=======
      className="sticky top-0 z-50 w-full border-b border-zion-purple/20 bg-zion-blue-dark/95 backdrop-blur-xl shadow-2xl shadow-zion-purple/10"
      style={headerStyle}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-zion-blue-dark via-zion-slate to-zion-blue-dark opacity-50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(140,21,233,0.1),transparent_50%)]"></div>
      
      <div className="relative container flex h-16 items-center px-4 sm:px-6">
        <Logo customLogo={customLogo} customColor={effectiveTheme?.primaryColor} />

        {/* Desktop Navigation */}
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-681f
        <div className="ml-6 flex-1 hidden lg:block">
          <MainNavigation />
        </div>
<<<<<<< HEAD

        {/* Search Bar */}
<<<<<<< HEAD
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-da9e
=======
        
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-de94
        <form onSubmit={handleSubmit} className="hidden md:block w-64 mx-4">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <EnhancedSearchInput
              value={query}
              onChange={setQuery}
              onSelectSuggestion={(text) => {
                navigate(`/search?q=${encodeURIComponent(text)}`);
                setQuery("");
              }}
              searchSuggestions={searchSuggestions}
            />
          </div>
=======
        <div className="ml-6 flex-1 hidden lg:block">
          <MainNavigation />
        </div>

        {/* Enhanced Search */}
        <form onSubmit={handleSubmit} className="hidden md:block w-80 mx-4">
=======
      className="sticky top-0 z-50 w-full border-b border-zion-purple/20 bg-zion-blue-dark/95 backdrop-blur-md shadow-lg"
=======
      className="sticky top-0 z-50 w-full border-b border-zion-purple/30 bg-zion-blue-dark/95 backdrop-blur-xl shadow-2xl shadow-zion-purple/10"
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-099c
      style={headerStyle}
    >
      <div className="container flex h-20 items-center px-4 sm:px-6">
        <Logo customLogo={customLogo} customColor={effectiveTheme?.primaryColor} />

<<<<<<< HEAD
        {/* Desktop Navigation */}
        <nav className="ml-6 flex-1 hidden lg:flex">
          <ul className="flex space-x-8">
            {navigationItems.map((item) => (
              <li key={item.label} className="relative group">
                <button
                  onClick={() => toggleDropdown(item.label)}
                  className="flex items-center space-x-1 px-3 py-2 text-zion-slate-light hover:text-zion-cyan transition-colors font-medium"
                >
                  {item.icon}
                  <span>{item.label}</span>
                  {item.isNew && (
                    <Badge variant="secondary" className="ml-1 bg-green-500/20 text-green-400 text-xs">
                      New
                    </Badge>
                  )}
                  <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                </button>
                
                {/* Dropdown Menu */}
                {activeDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-zion-blue-dark border border-zion-purple/20 rounded-lg shadow-2xl z-50">
                    <div className="p-4">
                      <div className="grid grid-cols-1 gap-2">
                        {item.dropdown?.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.label}
                            to={dropdownItem.href}
                            onClick={closeMobileMenu}
                            className="flex items-center justify-between p-3 rounded-lg hover:bg-zion-purple/10 transition-colors group"
                          >
                            <div className="flex items-center space-x-3">
                              <div className="text-lg">{dropdownItem.icon}</div>
                              <span className="text-white group-hover:text-zion-cyan transition-colors">
                                {dropdownItem.label}
                              </span>
                            </div>
                            {dropdownItem.price && (
                              <span className="text-zion-cyan font-medium text-sm">
                                {dropdownItem.price}
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Search Bar */}
        <form onSubmit={handleSubmit} className="hidden md:block w-64 mx-4">
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2
=======
        <div className="ml-8 flex-1">
          <MainNavigation />
        </div>
        
        <form onSubmit={handleSubmit} className="hidden lg:block w-72 mx-6">
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-099c
          <EnhancedSearchInput
            value={query}
            onChange={setQuery}
            onSelectSuggestion={(text) => {
              navigate(`/search?q=${encodeURIComponent(text)}`);
              setQuery("");
            }}
            searchSuggestions={searchSuggestions}
          />
<<<<<<< HEAD
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-445a
        </form>

<<<<<<< HEAD
        {/* Desktop Actions */}
        <div className="flex items-center gap-3 hidden md:flex">
=======
        <div className="flex items-center gap-4">
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-099c
          <LanguageSelector />
          {!hideLogin && <UserMenu />}
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-zion-slate-light hover:text-zion-cyan"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
=======
      {/* Main navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Logo />

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.hasDropdown ? (
                    <div className="relative">
                      <button className={`flex items-center space-x-1 py-2 px-3 rounded-lg transition-colors ${
                        isActive(item.path) 
                          ? 'text-zion-blue bg-zion-blue/10' 
                          : 'text-gray-700 hover:text-zion-blue hover:bg-gray-50'
                      }`}>
                        <span>{item.name}</span>
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      {/* Dropdown Menu */}
                      <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                        <div className="py-2">
                          {item.name === 'Services' && serviceDropdownItems.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              className="block px-4 py-3 text-gray-700 hover:text-zion-blue hover:bg-zion-blue/5 transition-colors"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                          {item.name === 'Talent' && talentDropdownItems.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              className="block px-4 py-3 text-gray-700 hover:text-zion-blue hover:bg-zion-blue/5 transition-colors"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className={`py-2 px-3 rounded-lg transition-colors ${
                        isActive(item.path) 
                          ? 'text-zion-blue bg-zion-blue/10' 
                          : 'text-gray-700 hover:text-zion-blue hover:bg-gray-50'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
              <Button size="sm">
                Get Started
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:text-zion-blue hover:bg-gray-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
=======
        <form onSubmit={handleSubmit} className="hidden md:block w-80 mx-6 relative">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />
=======
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };
  
  return (
    <>
      <header 
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-zion-blue-dark/95 backdrop-blur-xl border-b border-zion-purple/30 shadow-2xl shadow-zion-purple/20' 
            : 'bg-zion-blue-dark/90 backdrop-blur-md border-b border-zion-purple/20'
        }`}
        style={headerStyle}
      >
        <div className="container flex h-16 items-center px-4 sm:px-6">
          <Logo customLogo={customLogo} customColor={effectiveTheme?.primaryColor} />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex ml-8 flex-1 items-center space-x-8">
            <div className="flex items-center space-x-6">
              <Link 
                to="/" 
                className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-200 font-medium"
              >
                Home
              </Link>
              
              <div className="relative group">
                <button className="flex items-center space-x-1 text-zion-slate-light hover:text-zion-cyan transition-colors duration-200 font-medium">
                  <span>Services</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-80 bg-zion-blue-dark/95 backdrop-blur-xl border border-zion-purple/30 rounded-xl shadow-2xl shadow-zion-purple/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="p-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h3 className="text-zion-cyan font-semibold mb-3 flex items-center">
                          <Zap className="h-4 w-4 mr-2" />
                          Core Services
                        </h3>
                        <div className="space-y-2">
                          <Link to="/services" className="block text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">
                            IT & AI Services
                          </Link>
                          <Link to="/it-onsite-services" className="block text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">
                            Onsite Services
                          </Link>
                          <Link to="/equipment" className="block text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">
                            Equipment
                          </Link>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-zion-purple font-semibold mb-3 flex items-center">
                          <Sparkles className="h-4 w-4 mr-2" />
                          Micro SAAS
                        </h3>
                        <div className="space-y-2">
                          <Link to="/micro-saas-services" className="block text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">
                            All Services
                          </Link>
                          <Link to="/micro-saas-services?category=AI" className="block text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">
                            AI Solutions
                          </Link>
                          <Link to="/micro-saas-services?category=IT" className="block text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">
                            IT Solutions
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative group">
                <button className="flex items-center space-x-1 text-zion-slate-light hover:text-zion-cyan transition-colors duration-200 font-medium">
                  <span>Solutions</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-80 bg-zion-blue-dark/95 backdrop-blur-xl border border-zion-purple/30 rounded-xl shadow-2xl shadow-zion-purple/20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="p-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h3 className="text-zion-cyan font-semibold mb-3 flex items-center">
                          <Brain className="h-4 w-4 mr-2" />
                          AI & Tech
                        </h3>
                        <div className="space-y-2">
                          <Link to="/zion-hire-ai" className="block text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">
                            Zion Hire AI
                          </Link>
                          <Link to="/match" className="block text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">
                            AI Matcher
                          </Link>
                          <Link to="/talent" className="block text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">
                            Talent Directory
                          </Link>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-zion-purple font-semibold mb-3 flex items-center">
                          <Shield className="h-4 w-4 mr-2" />
                          Enterprise
                        </h3>
                        <div className="space-y-2">
                          <Link to="/enterprise" className="block text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">
                            Enterprise Solutions
                          </Link>
                          <Link to="/partners" className="block text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">
                            Partnerships
                          </Link>
                          <Link to="/request-quote" className="block text-zion-slate-light hover:text-zion-cyan transition-colors text-sm">
                            Get Quote
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Link 
                to="/community" 
                className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-200 font-medium"
              >
                Community
              </Link>
              
              <Link 
                to="/blog" 
                className="text-zion-slate-light hover:text-zion-cyan transition-colors duration-200 font-medium"
              >
                Blog
              </Link>
            </div>
          </nav>

          {/* Search Bar */}
          <form onSubmit={handleSubmit} className="hidden md:block w-80 mx-6">
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-d816
            <EnhancedSearchInput
              value={query}
              onChange={setQuery}
              onSelectSuggestion={(text) => {
                navigate(`/search?q=${encodeURIComponent(text)}`);
                setQuery("");
              }}
              searchSuggestions={searchSuggestions}
<<<<<<< HEAD
              placeholder="Search AI services, talent, equipment..."
            />
          </div>
        </form>

        {/* Right side actions */}
        <div className="flex items-center gap-3">
          {/* AI Assistant Button */}
          <Link 
            to="/zion-hire-ai"
            className="hidden sm:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white rounded-full text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-zion-purple/30 hover:scale-105"
          >
            <Sparkles className="h-4 w-4" />
            <span className="hidden md:inline">AI Assistant</span>
          </Link>

          <LanguageSelector />
          {!hideLogin && <UserMenu />}

          {/* Mobile menu button */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 text-white hover:text-zion-cyan transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-681f
=======
        <nav className="hidden lg:flex ml-8 space-x-1">
          {navigationItems.map((item) => (
            <div key={item.label} className="relative group">
              <Link
                to={item.href}
                className="flex items-center gap-2 px-4 py-2 text-zion-slate-light hover:text-zion-cyan transition-colors duration-200 rounded-lg hover:bg-zion-purple/10"
              >
                {item.icon}
                <span>{item.label}</span>
                <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
              </Link>
              
              {/* Dropdown Menu */}
              {item.children && (
                <div className="absolute top-full left-0 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                  <div className="bg-zion-slate/95 backdrop-blur-xl border border-zion-purple/30 rounded-xl p-4 shadow-2xl shadow-zion-purple/20">
                    <div className="grid gap-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.href}
                          className="flex items-center gap-3 p-3 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10 rounded-lg transition-all duration-200"
                          onClick={closeMobileMenu}
                        >
                          <div className="text-zion-purple-light">{child.icon}</div>
                          <span>{child.label}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Search Bar */}
        <div className="hidden md:block flex-1 max-w-md mx-8">
          <form onSubmit={handleSubmit} className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light h-4 w-4" />
            <input
              type="text"
              placeholder="Search AI services, talent, equipment..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-zion-slate/30 border border-zion-purple/30 rounded-lg text-white placeholder:text-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-purple/50 focus:border-zion-purple transition-all duration-200"
            />
          </form>
        </div>

<<<<<<< HEAD
        {/* Mobile Search Toggle */}
        <div className="md:hidden ml-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsSearchExpanded(!isSearchExpanded)}
            className="text-zion-slate-light hover:text-zion-cyan"
          >
            <Search className="h-5 w-5" />
          </Button>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-2 ml-auto">
=======
        </form>

        {/* Right Side Actions */}
        <div className="flex items-center gap-2">
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2
          <LanguageSelector />
          {!hideLogin && <UserMenu />}
          
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
<<<<<<< HEAD
            size="sm"
            onClick={toggleMobileMenu}
            className="lg:hidden text-zion-slate-light hover:text-zion-cyan"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-2f34
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden p-2 text-white hover:bg-zion-purple/10 rounded-md transition-colors"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
=======
        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="lg:hidden p-2 text-white hover:text-zion-cyan transition-colors"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
=======
            size="icon"
            className="lg:hidden text-zion-slate-light hover:text-zion-cyan"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2
      </div>
<<<<<<< HEAD

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
<<<<<<< HEAD
        <div className="lg:hidden bg-zion-blue-dark/95 backdrop-blur-xl border-t border-zion-purple/20">
          <div className="container px-4 py-6">
            {/* Mobile Search */}
            <form onSubmit={handleSubmit} className="mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search services, products..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-zion-blue-dark border border-zion-blue-light rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none"
                />
              </div>
            </form>

            {/* Mobile Navigation */}
            <nav className="space-y-4 mb-6">
              {enhancedNavigationItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={closeMobileMenu}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-zion-purple/10 transition-colors group"
                >
                  <div className="text-zion-cyan group-hover:text-zion-purple transition-colors">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-white font-medium">{item.label}</span>
                      {item.badge && (
                        <Badge className="bg-zion-purple/20 text-zion-cyan border-zion-purple/30 text-xs">
                          {item.badge}
                        </Badge>
                      )}
                    </div>
                    <p className="text-zion-slate-light text-sm">{item.description}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-zion-slate-light group-hover:text-zion-cyan transition-colors" />
                </Link>
              ))}
            </nav>

            {/* Mobile Actions */}
            <div className="pt-4 border-t border-zion-blue-light">
              <LanguageSelector />
              {!hideLogin && <UserMenu />}
            </div>
          </div>
        </div>
      )}

      {/* Enhanced Navigation Bar for Larger Screens */}
      <div className="hidden xl:block border-t border-zion-purple/10 bg-zion-blue-dark/50">
        <div className="container px-4">
          <div className="flex items-center justify-center py-3 space-x-8">
            {enhancedNavigationItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="group flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-zion-purple/10 transition-all duration-300"
              >
                <div className="text-zion-cyan group-hover:text-zion-purple transition-colors">
                  {item.icon}
                </div>
                <div className="text-center">
                  <div className="flex items-center gap-2">
                    <span className="text-white font-medium group-hover:text-zion-cyan transition-colors">
                      {item.label}
                    </span>
                    {item.badge && (
                      <Badge className="bg-zion-purple/20 text-zion-cyan border-zion-purple/30 text-xs">
                        {item.badge}
                      </Badge>
                    )}
                  </div>
                  <p className="text-zion-slate-light text-xs group-hover:text-zion-slate-light/80 transition-colors">
                    {item.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-445a
      </div>
<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
      {/* Mobile Navigation */}
<<<<<<< HEAD
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-zion-purple/20 bg-zion-blue-dark/95 backdrop-blur-md">
          <div className="px-4 py-4 space-y-3">
            <Link 
              to="/" 
              className="block text-sm font-medium text-zion-slate-light hover:text-zion-cyan"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className="block text-sm font-medium text-zion-slate-light hover:text-zion-cyan"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              All Services
            </Link>
            <Link 
              to="/ai-solutions" 
              className="block text-sm font-medium text-zion-slate-light hover:text-zion-cyan"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              AI Solutions
            </Link>
            <Link 
              to="/it-services" 
              className="block text-sm font-medium text-zion-slate-light hover:text-zion-cyan"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              IT Services
            </Link>
            <Link 
              to="/enterprise" 
              className="block text-sm font-medium text-zion-slate-light hover:text-zion-cyan"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Enterprise Solutions
            </Link>
            <Link 
              to="/developers" 
              className="block text-sm font-medium text-zion-slate-light hover:text-zion-cyan"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Developer Portal
            </Link>
            <Link 
              to="/help-center" 
              className="block text-sm font-medium text-zion-slate-light hover:text-zion-cyan"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Help Center
            </Link>
            <Link 
              to="/sitemap" 
              className="block text-sm font-medium text-zion-slate-light hover:text-zion-cyan"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Sitemap
            </Link>
          </div>
        </div>
      )}
>>>>>>> origin/cursor/resolve-typescript-merge-conflicts-8802
=======
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <nav className="space-y-2">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.path}
                    className={`block py-3 px-4 rounded-lg transition-colors ${
                      isActive(item.path) 
                        ? 'text-zion-blue bg-zion-blue/10' 
                        : 'text-gray-700 hover:text-zion-blue hover:bg-gray-50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.hasDropdown && item.name === 'Services' && (
                    <div className="ml-4 mt-2 space-y-1">
                      {serviceDropdownItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="block py-2 px-4 text-gray-600 hover:text-zion-blue transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          • {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                  {item.hasDropdown && item.name === 'Talent' && (
                    <div className="ml-4 mt-2 space-y-1">
                      {talentDropdownItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="block py-2 px-4 text-gray-600 hover:text-zion-blue transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          • {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
            
            <div className="mt-6 pt-6 border-t border-gray-200 space-y-3">
              <Button variant="outline" className="w-full">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
              <Button className="w-full">
                Get Started
              </Button>
=======
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-zion-blue-dark/98 border-t border-zion-purple/20 backdrop-blur-md">
          <div className="container px-4 py-6 space-y-4">
            {/* Mobile Search */}
            <form onSubmit={handleSubmit} className="w-full">
=======
            />
          </form>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            <LanguageSelector />
            {!hideLogin && <UserMenu />}
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden p-2 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="lg:hidden border-t border-zion-purple/20 bg-zion-blue-dark/50">
          <div className="container px-4 py-3">
            <form onSubmit={handleSubmit}>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-d816
=======
        <div className="lg:hidden bg-zion-blue-dark border-t border-zion-purple/20">
          <div className="container px-4 py-4">
            {/* Mobile Search */}
            <form onSubmit={handleSubmit} className="mb-6">
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2
              <EnhancedSearchInput
                value={query}
                onChange={setQuery}
                onSelectSuggestion={(text) => {
                  navigate(`/search?q=${encodeURIComponent(text)}`);
                  setQuery("");
<<<<<<< HEAD
<<<<<<< HEAD
                  setIsMobileMenuOpen(false);
                }}
                searchSuggestions={searchSuggestions}
=======
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-zion-blue-dark/98 border-t border-zion-purple/20 backdrop-blur-xl">
          <div className="container px-4 py-6 space-y-4">
            {/* Mobile Search */}
            <form onSubmit={handleSubmit} className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search services, talent, equipment..."
                className="w-full pl-10 pr-4 py-3 bg-zion-blue-light/20 border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-purple focus:ring-2 focus:ring-zion-purple/20 transition-all duration-300"
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-681f
              />
            </form>

            {/* Mobile Navigation */}
            <nav className="space-y-2">
<<<<<<< HEAD
              <Link
                to="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-white hover:bg-zion-purple/10 rounded-lg transition-colors"
              >
                Home
              </Link>
              <Link
                to="/micro-saas-services"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-white hover:bg-zion-purple/10 rounded-lg transition-colors"
              >
                <div className="flex items-center">
                  <Sparkles className="w-4 h-4 mr-2 text-zion-cyan" />
                  Micro SAAS Services
                </div>
              </Link>
              <Link
                to="/marketplace"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-white hover:bg-zion-purple/10 rounded-lg transition-colors"
              >
                Marketplace
              </Link>
              <Link
                to="/talent"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-white hover:bg-zion-purple/10 rounded-lg transition-colors"
              >
                Talent
              </Link>
              <Link
                to="/services"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-white hover:bg-zion-purple/10 rounded-lg transition-colors"
              >
                Services
              </Link>
              <Link
                to="/equipment"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-white hover:bg-zion-purple/10 rounded-lg transition-colors"
              >
                Equipment
              </Link>
              <Link
                to="/community"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-white hover:bg-zion-purple/10 rounded-lg transition-colors"
              >
                Community
              </Link>
              {user && (
                <Link
                  to="/dashboard"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 text-white hover:bg-zion-purple/10 rounded-lg transition-colors"
                >
                  Dashboard
                </Link>
              )}
            </nav>

            {/* Mobile Actions */}
            <div className="pt-4 border-t border-zion-purple/20">
              <div className="flex items-center gap-3">
                <LanguageSelector />
                {!hideLogin && <UserMenu />}
              </div>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-da9e
=======
              <Link 
                to="/" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-white hover:bg-zion-purple/20 rounded-lg transition-colors"
              >
                Home
              </Link>
              <Link 
                to="/marketplace" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-white hover:bg-zion-purple/20 rounded-lg transition-colors"
              >
                Marketplace
              </Link>
              <Link 
                to="/services" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-white hover:bg-zion-purple/20 rounded-lg transition-colors"
              >
                Services
              </Link>
              <Link 
                to="/talent" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-white hover:bg-zion-purple/20 rounded-lg transition-colors"
              >
                Talent
              </Link>
              <Link 
                to="/equipment" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-white hover:bg-zion-purple/20 rounded-lg transition-colors"
              >
                Equipment
              </Link>
              <Link 
                to="/zion-hire-ai" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-white hover:bg-zion-purple/20 rounded-lg transition-colors"
              >
                AI Assistant
              </Link>
              <Link 
                to="/contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-white hover:bg-zion-purple/20 rounded-lg transition-colors"
              >
                Contact
              </Link>
            </nav>

            {/* Mobile CTA */}
            <div className="pt-4 border-t border-zion-purple/20">
              <Link 
                to="/request-quote"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-center px-6 py-3 bg-gradient-to-r from-zion-purple to-zion-purple-dark text-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-zion-purple/30"
              >
                Request Quote
              </Link>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-681f
=======
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2
                  closeMobileMenu();
                }}
                searchSuggestions={searchSuggestions}
              />
            </form>
<<<<<<< HEAD
          </div>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm">
          <div className="fixed inset-y-0 right-0 w-80 bg-zion-blue-dark/95 backdrop-blur-xl border-l border-zion-purple/30 shadow-2xl shadow-zion-purple/20">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-4 border-b border-zion-purple/20">
                <h2 className="text-xl font-semibold text-white">Menu</h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={closeMobileMenu}
                  className="text-zion-slate-light hover:text-zion-cyan"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              
              <nav className="flex-1 p-4 space-y-6">
                <div>
                  <h3 className="text-zion-cyan font-semibold mb-3">Services</h3>
                  <div className="space-y-2 ml-4">
                    <Link to="/services" onClick={closeMobileMenu} className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                      IT & AI Services
                    </Link>
                    <Link to="/micro-saas-services" onClick={closeMobileMenu} className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                      Micro SAAS Services
                    </Link>
                    <Link to="/it-onsite-services" onClick={closeMobileMenu} className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                      Onsite Services
                    </Link>
                    <Link to="/equipment" onClick={closeMobileMenu} className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                      Equipment
                    </Link>
                  </div>
                </div>

                <div>
                  <h3 className="text-zion-purple font-semibold mb-3">Solutions</h3>
                  <div className="space-y-2 ml-4">
                    <Link to="/zion-hire-ai" onClick={closeMobileMenu} className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                      Zion Hire AI
                    </Link>
                    <Link to="/match" onClick={closeMobileMenu} className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                      AI Matcher
                    </Link>
                    <Link to="/talent" onClick={closeMobileMenu} className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                      Talent Directory
                    </Link>
                    <Link to="/enterprise" onClick={closeMobileMenu} className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                      Enterprise
                    </Link>
                  </div>
                </div>

                <div>
                  <h3 className="text-zion-cyan font-semibold mb-3">Company</h3>
                  <div className="space-y-2 ml-4">
                    <Link to="/community" onClick={closeMobileMenu} className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                      Community
                    </Link>
                    <Link to="/blog" onClick={closeMobileMenu} className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                      Blog
                    </Link>
                    <Link to="/partners" onClick={closeMobileMenu} className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                      Partners
                    </Link>
                    <Link to="/contact" onClick={closeMobileMenu} className="block text-zion-slate-light hover:text-zion-cyan transition-colors">
                      Contact
                    </Link>
                  </div>
                </div>
              </nav>

              <div className="p-4 border-t border-zion-purple/20">
                <Button className="w-full bg-zion-cyan text-zion-slate hover:bg-zion-cyan/90">
                  Get Started
                </Button>
              </div>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-d816
            </div>
          </div>
        </div>
      )}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-da9e
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-681f
=======
      
      {/* Glowing border effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zion-cyan to-transparent opacity-60"></div>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-de94
=======

      {/* Mobile Search Bar */}
      {isSearchExpanded && (
        <div className="md:hidden border-t border-zion-purple/20 bg-zion-blue-dark/95 backdrop-blur-xl p-4">
          <form onSubmit={handleSubmit} className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light h-4 w-4" />
            <input
              type="text"
              placeholder="Search AI services, talent, equipment..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-zion-slate/30 border border-zion-purple/30 rounded-lg text-white placeholder:text-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-purple/50 focus:border-zion-purple"
            />
          </form>
        </div>
      )}

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-zion-purple/20 bg-zion-blue-dark/95 backdrop-blur-xl">
          <nav className="p-4 space-y-2">
            {navigationItems.map((item) => (
              <div key={item.label}>
                <Link
                  to={item.href}
                  className="flex items-center gap-3 p-3 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10 rounded-lg transition-colors"
                  onClick={closeMobileMenu}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
                
                {/* Mobile Submenu */}
                {item.children && (
                  <div className="ml-6 space-y-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.href}
                        className="flex items-center gap-3 p-2 text-zion-slate-light/80 hover:text-zion-cyan rounded-lg transition-colors"
                        onClick={closeMobileMenu}
                      >
                        <div className="text-zion-purple-light">{child.icon}</div>
                        <span className="text-sm">{child.label}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-2f34
=======
      
      {/* Animated bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zion-purple to-transparent opacity-60"></div>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-099c
    </header>
=======
    </>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-d816
=======

            {/* Mobile Navigation */}
            <nav className="space-y-4">
              {navigationItems.map((item) => (
                <div key={item.label}>
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className="flex items-center justify-between w-full p-3 text-left text-zion-slate-light hover:text-zion-cyan transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      {item.icon}
                      <span className="font-medium">{item.label}</span>
                      {item.isNew && (
                        <Badge variant="secondary" className="bg-green-500/20 text-green-400 text-xs">
                          New
                        </Badge>
                      )}
                    </div>
                    <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {activeDropdown === item.label && (
                    <div className="ml-6 mt-2 space-y-2">
                      {item.dropdown?.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.label}
                          to={dropdownItem.href}
                          onClick={closeMobileMenu}
                          className="flex items-center justify-between p-2 rounded-lg hover:bg-zion-purple/10 transition-colors"
                        >
                          <div className="flex items-center space-x-3">
                            <div className="text-lg">{dropdownItem.icon}</div>
                            <span className="text-zion-slate-light">
                              {dropdownItem.label}
                            </span>
                          </div>
                          {dropdownItem.price && (
                            <span className="text-zion-cyan font-medium text-sm">
                              {dropdownItem.price}
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2
  );
}
