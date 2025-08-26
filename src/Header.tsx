
import React, { useState } from 'react';
=======
import { Link, useNavigate, useLocation } from 'react-router-dom';
=======
=======
=======
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
import { useAuth } from '@/hooks/useAuth';
import { useWhitelabel } from '@/context/WhitelabelContext';
import { EnhancedSearchInput } from "@/components/search/EnhancedSearchInput";
import { generateSearchSuggestions } from "@/data/marketplaceData";
import { Menu, X } from 'lucide-react';
=======
import { useNavigate } from "react-router-dom";
import { Menu, X, Search, Sparkles } from "lucide-react";
=======
import { Button } from "@/components/ui/button";
=======
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Menu, 
  X, 
  Search, 
  Sparkles, 
  Zap, 
  Brain, 
  Shield,
  ArrowRight,
  ChevronDown
} from 'lucide-react';
=======
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, Sparkles, Zap, Brain, Shield } from "lucide-react";
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

export interface HeaderProps {
  hideLogin?: boolean;
  customLogo?: string;
  customTheme?: {
    primaryColor: string;
    backgroundColor: string;
    textColor: string;
  };
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
=======
=======
=======
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
=======
  const [isScrolled, setIsScrolled] = useState(false);
=======
  const [isScrolled, setIsScrolled] = useState(false);
  const searchSuggestions = generateSearchSuggestions();
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsSearchExpanded(false);
  }, [navigate]);

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from './Logo';
import { UserMenu } from './UserMenu';
import { LanguageSelector } from './LanguageSelector';
import { Button } from '@/components/ui/button';
import { Menu, X, Search, Phone, Mail, ChevronDown } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

=======
=======
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
      setQuery("");
  const isActive = (path: string) => location.pathname === path;

  const navigationItems = [
    { 
      name: 'Home', 
      path: '/',
      hasDropdown: false
    },
    { 
      name: 'Services', 
      path: '/services',
      hasDropdown: true,
      dropdownItems: [
        { name: 'AI Services', path: '/services/ai', description: 'Advanced AI solutions and platforms' },
        { name: 'Cloud & DevOps', path: '/services/cloud', description: 'Cloud infrastructure and automation' },
        { name: 'Cybersecurity', path: '/services/cybersecurity', description: 'Comprehensive security solutions' },
        { name: 'IT Infrastructure', path: '/services/infrastructure', description: 'Enterprise IT infrastructure' },
        { name: 'Digital Transformation', path: '/services/transformation', description: 'Business transformation services' },
        { name: 'Consulting', path: '/services/consulting', description: 'Strategic technology consulting' },
        { name: 'Green IT', path: '/green-it', description: 'Sustainable technology solutions' },
        { name: 'Quantum Technology', path: '/quantum-technology', description: 'Quantum computing solutions' },
        { name: 'Space Tech', path: '/space-tech', description: 'Space technology innovations' }
      ]
    },
    { 
      name: 'Solutions', 
      path: '/solutions',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Enterprise Solutions', path: '/solutions/enterprise', description: 'Large-scale enterprise solutions' },
        { name: 'Healthcare Solutions', path: '/solutions/healthcare', description: 'Healthcare technology solutions' },
        { name: 'Financial Solutions', path: '/financial-solutions', description: 'Financial technology services' },
        { name: 'Manufacturing Solutions', path: '/manufacturing-solutions', description: 'Manufacturing technology' },
        { name: 'Retail Solutions', path: '/solutions/retail', description: 'Retail technology solutions' },
        { name: 'Government Solutions', path: '/solutions/government', description: 'Government technology services' }
      ]
    },
    { 
      name: 'Talent', 
      path: '/talent',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Browse Talents', path: '/talents', description: 'Find skilled professionals' },
        { name: 'Talent Directory', path: '/talent', description: 'Comprehensive talent database' },
        { name: 'AI Matcher', path: '/match', description: 'AI-powered talent matching' },
        { name: 'Hire Now', path: '/contact', description: 'Get in touch to hire' }
      ]
    },
    { 
      name: 'About', 
      path: '/about',
      hasDropdown: false
    },
    { 
      name: 'Resources', 
      path: '/resources',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Blog', path: '/blog', description: 'Latest insights and updates' },
        { name: 'Documentation', path: '/docs', description: 'Technical documentation' },
        { name: 'White Papers', path: '/white-papers', description: 'Research and insights' },
        { name: 'Webinars', path: '/webinars', description: 'Educational webinars' },
        { name: 'Training', path: '/training', description: 'Professional training programs' },
        { name: 'Events', path: '/events', description: 'Industry events and conferences' },
        { name: 'Case Studies', path: '/case-studies', description: 'Success stories and examples' },
        { name: 'Press', path: '/press', description: 'Press releases and media' }
      ]
    },
    { 
      name: 'Support', 
      path: '/support',
      hasDropdown: true,
      dropdownItems: [
        { name: 'Help Center', path: '/help', description: 'Self-service help and guides' },
        { name: 'Contact Support', path: '/support', description: 'Get help from our team' },
        { name: 'FAQ', path: '/faq', description: 'Frequently asked questions' },
        { name: 'Request Quote', path: '/request-quote', description: 'Get a custom quote' }
      ]
    },
    { 
      name: 'Contact', 
      path: '/contact',
      hasDropdown: false
    }
  ];

  const handleDropdownToggle = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const closeDropdowns = () => {
    setActiveDropdown(null);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200'
        : 'bg-transparent'
    }`}>
      {/* Top bar with contact info */}
      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-sm py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+1 (302) 464-0950</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>info@ziontechgroup.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <LanguageSelector />
            <UserMenu />
          </div>
        </div>
      </div>

  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header 
=======
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  return (
    <header 
      className="sticky top-0 z-50 w-full border-b border-zion-purple/20 bg-zion-blue-dark/95 backdrop-blur-xl shadow-2xl shadow-zion-purple/10"
=======
      className="sticky top-0 z-50 w-full border-b border-zion-purple/20 bg-zion-blue-dark/90 backdrop-blur-md glass-effect-dark"
=======
=======
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const navigationItems = [
    {
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
      ]
    },
    {
      label: "Talent",
      href: "/talent",
      icon: <Users className="h-4 w-4" />,
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
      ]
    },
    {
      label: "Enterprise",
      href: "/enterprise",
      icon: <Building className="h-4 w-4" />,
      dropdown: [
        { label: "White-label Solutions", href: "/enterprise/white-label", icon: <Building className="h-4 w-4" /> },
        { label: "Custom Development", href: "/enterprise/custom", icon: <Code className="h-4 w-4" /> },
        { label: "Consulting", href: "/enterprise/consulting", icon: <Users className="h-4 w-4" /> },
        { label: "Support Plans", href: "/enterprise/support", icon: <Shield className="h-4 w-4" /> }
      ]
    }
  ];
  
  return (
    <header 
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
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? 'bg-zion-blue-dark/95 backdrop-blur-xl border-b border-zion-purple/30 shadow-2xl shadow-zion-purple/20' 
          : 'bg-zion-blue-dark/90 backdrop-blur-md border-b border-zion-purple/20'
      }`}
      className="sticky top-0 z-50 w-full border-b border-zion-purple/20 bg-gradient-to-r from-zion-blue-dark/95 via-zion-slate/95 to-zion-purple-dark/95 backdrop-blur-xl shadow-2xl shadow-zion-purple/10"
=======
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

      <div className="container flex h-16 items-center px-4 sm:px-6 relative z-10">
=======
      className="sticky top-0 z-50 w-full border-b border-zion-purple/20 bg-gradient-to-r from-zion-blue-dark/95 via-zion-blue-dark/90 to-zion-slate-dark/95 backdrop-blur-xl"
      style={headerStyle}
    >
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/5 via-zion-cyan/5 to-zion-purple/5 animate-pulse"></div>
      
      <div className="relative container flex h-16 items-center px-4 sm:px-6">
        <Logo customLogo={customLogo} customColor={effectiveTheme?.primaryColor} />

        {/* Desktop Navigation */}
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
        <div className="ml-6 flex-1 hidden lg:block">
          <MainNavigation />
        </div>
        
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
      style={headerStyle}
    >
      <div className="container flex h-20 items-center px-4 sm:px-6">
        <Logo customLogo={customLogo} customColor={effectiveTheme?.primaryColor} />

        <div className="ml-8 flex-1">
          <MainNavigation />
        </div>
        
        <form onSubmit={handleSubmit} className="hidden lg:block w-72 mx-6">
          <EnhancedSearchInput
            value={query}
            onChange={setQuery}
            onSelectSuggestion={(text) => {
              navigate(`/search?q=${encodeURIComponent(text)}`);
              setQuery("");
            }}
            searchSuggestions={searchSuggestions}
          />
        <div className="flex items-center gap-4">
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
            <Logo />
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <div key={item.name} className="relative group">
                  {item.hasDropdown ? (
                    <div className="relative">
                      <button
                        className={`flex items-center space-x-1 py-2 px-3 rounded-lg transition-colors ${
                          isActive(item.path)
                            ? 'text-blue-600 bg-blue-50'
                            : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                        }`}
                        onClick={() => handleDropdownToggle(item.name)}
                        onMouseEnter={() => setActiveDropdown(item.name)}
                      >
                        <span>{item.name}</span>
                        <ChevronDown className="w-4 h-4 ml-1" />
                      </button>
                      
                      {/* Dropdown Menu */}
                      <div
                        className={`absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 transition-all duration-200 ${
                          activeDropdown === item.name
                            ? 'opacity-100 visible translate-y-0'
                            : 'opacity-0 invisible translate-y-2'
                        }`}
                        onMouseLeave={() => setActiveDropdown(null)}
                      >
                        <div className="py-2">
                          {item.dropdownItems?.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                              onClick={closeDropdowns}
                            >
                              <div className="font-medium">{subItem.name}</div>
                              <div className="text-sm text-gray-500">{subItem.description}</div>
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
                          ? 'text-blue-600 bg-blue-50'
                          : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Action Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        </form>

        {/* Right Side Actions */}
        <div className="flex items-center gap-2">
          <LanguageSelector />
          {!hideLogin && <UserMenu />}
          
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
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
      </div>
      {isMobileMenuOpen && (
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg max-h-screen overflow-y-auto">
          <div className="container mx-auto px-4 py-4">
            <nav className="space-y-2">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.path}
                    className={`block py-3 px-4 rounded-lg transition-colors ${
                      isActive(item.path)
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  
                  {/* Mobile Dropdown Items */}
                  {item.hasDropdown && item.dropdownItems && (
                    <div className="ml-4 mt-2 space-y-1">
                      {item.dropdownItems.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="block py-2 px-4 text-gray-600 hover:text-blue-600 transition-colors"
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
            
            {/* Mobile Action Buttons */}
            <div className="mt-6 pt-6 border-t border-gray-200 space-y-3">
              <Button variant="outline" className="w-full">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">
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
=======
        <div className="lg:hidden bg-zion-blue-dark border-t border-zion-purple/20">
          <div className="container px-4 py-4">
            {/* Mobile Search */}
            <form onSubmit={handleSubmit} className="mb-6">
              <EnhancedSearchInput
                value={query}
                onChange={setQuery}
                onSelectSuggestion={(text) => {
                  navigate(`/search?q=${encodeURIComponent(text)}`);
                  setQuery("");
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
              />
            </form>

            {/* Mobile Navigation */}
            <nav className="space-y-2">
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
=======
=======
                  closeMobileMenu();
                }}
                searchSuggestions={searchSuggestions}
              />
            </form>
=======
=======
      
      {/* Glowing border effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zion-cyan to-transparent opacity-60"></div>
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
=======
      
      {/* Animated bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zion-purple to-transparent opacity-60"></div>
    </header>
=======
    </>
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
  );
}