
<<<<<<< HEAD
<<<<<<< HEAD
import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Search, ChevronDown, Globe, Phone, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
=======
import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Logo } from './Logo';
import { UserMenu } from './UserMenu';
import { LanguageSelector } from './LanguageSelector';
import { useAuth } from '@/hooks/useAuth';
import { useWhitelabel } from '@/context/WhitelabelContext';
import { EnhancedSearchInput } from "@/components/search/EnhancedSearchInput";
import { generateSearchSuggestions } from "@/data/marketplaceData";
import { Menu, X, ChevronDown } from 'lucide-react';
>>>>>>> origin/cursor/resolve-typescript-merge-conflicts-8802

export interface HeaderProps {
  hideLogin?: boolean;
  customLogo?: string;
  customTheme?: {
    primaryColor: string;
    backgroundColor: string;
    textColor: string;
  };
  onMenuToggle?: () => void;
}

export function Header({ onMenuToggle }: HeaderProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [query, setQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
<<<<<<< HEAD
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
=======
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const searchSuggestions = generateSearchSuggestions();
>>>>>>> origin/cursor/resolve-typescript-merge-conflicts-8802
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsSearchExpanded(false);
  }, [navigate]);

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
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

<<<<<<< HEAD
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
      setQuery("");
      setIsSearchExpanded(false);
    }
  };

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
      className="sticky top-0 z-50 w-full border-b border-zion-purple/20 bg-zion-blue-dark/90 backdrop-blur-md shadow-2xl"
      style={headerStyle}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-1 h-1 bg-zion-cyan rounded-full animate-pulse"></div>
        <div className="absolute top-2 right-1/3 w-1 h-1 bg-zion-purple rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-4 left-1/2 w-1 h-1 bg-zion-blue rounded-full animate-pulse delay-2000"></div>
      </div>
      
      <div className="container flex h-16 items-center px-4 sm:px-6 relative z-10">
        <Logo customLogo={customLogo} customColor={effectiveTheme?.primaryColor} />

        {/* Desktop Navigation */}
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
        
        <form onSubmit={handleSubmit} className="hidden md:block w-64 mx-4">
          <EnhancedSearchInput
            value={query}
            onChange={setQuery}
            onSelectSuggestion={(text) => {
              navigate(`/search?q=${encodeURIComponent(text)}`);
              setQuery("");
            }}
            searchSuggestions={searchSuggestions}
          />
        </form>

        <div className="flex items-center gap-2">
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
        </div>
      </div>

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
            </div>
          </div>
        </div>
      )}
>>>>>>> origin/cursor/install-project-dependencies-and-husky-2974
    </header>
  );
}
