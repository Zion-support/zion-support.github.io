import { ArrowRight, Atom, BarChart3, BookOpen, Brain, Building, Building2, ChevronDown, Cloud, Code, Cpu, DollarSign, FileText, Globe, Globe2, HeartHandshake, Heart, HelpCircle, Leaf, Lock, Mail, MapPin, Menu, MessageCircle, PenTool, Phone, Rocket, Scale, Search, Server, Settings, Shield, ShoppingCart, Star, Target, TrendingUp, Users, X, Zap, Truck, Calendar, Video } from 'lucide-react';
import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeToggle } from '../components/ThemeToggle';

interface AppHeaderProps {
  onSidebarToggle?: () => void;
}

export function AppHeader({ onSidebarToggle }: AppHeaderProps) {
  const [theme, setTheme] = useState<'light' | 'dark' | 'system'>('system');

  const location = useLocation();
  const searchInputRef = useRef<HTMLInputElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Performance optimization: Use useCallback for event handlers
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 10);
  }, []);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Tab') {
      setIsKeyboardUser(true);
    }
  }, []);

  const handleEscapeKey = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setMobileMenuOpen(false);
      setServicesDropdownOpen(false);
      setSolutionsDropdownOpen(false);
      setResourcesDropdownOpen(false);
      setActiveDropdown(null);
    }
  }, []);

  const handleClickOutside = useCallback((e: MouseEvent) => {
    if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target as Node)) {
      setMobileMenuOpen(false);
    }
    
    // Close dropdowns when clicking outside
    Object.keys(dropdownRefs.current).forEach(key => {
      if (dropdownRefs.current[key] && !dropdownRefs.current[key]?.contains(e.target as Node)) {
        if (key === 'services') setServicesDropdownOpen(false);
        if (key === 'solutions') setSolutionsDropdownOpen(false);
        if (key === 'resources') setResourcesDropdownOpen(false);
        setActiveDropdown(null);
      }
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keydown', handleEscapeKey);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keydown', handleEscapeKey);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleScroll, handleKeyDown, handleEscapeKey, handleClickOutside]);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setSolutionsDropdownOpen(false);
    setResourcesDropdownOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsSearching(true);
      try {
        await new Promise(resolve => setTimeout(resolve, 800)); // Reduced search time
        window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
      } finally {
        setIsSearching(false);
      }
    }
  };

  const toggleDropdown = (dropdown: string) => {
    const newState = !(dropdown === 'services' ? servicesDropdownOpen : 
                       dropdown === 'solutions' ? solutionsDropdownOpen : 
                       resourcesDropdownOpen);
    
    // Close other dropdowns
    if (dropdown !== 'services') setServicesDropdownOpen(false);
    if (dropdown !== 'solutions') setSolutionsDropdownOpen(false);
    if (dropdown !== 'resources') setResourcesDropdownOpen(false);
    
    if (dropdown === 'services') setServicesDropdownOpen(newState);
    if (dropdown === 'solutions') setSolutionsDropdownOpen(newState);
    if (dropdown === 'resources') setResourcesDropdownOpen(newState);
    
    setActiveDropdown(newState ? dropdown : null);
  };

  const navigation = [
    { name: 'Home', href: '/', current: location.pathname === '/' },
    { name: 'Services', href: '/services', current: location.pathname.startsWith('/services'), hasDropdown: true },
    { name: 'Solutions', href: '/solutions', current: location.pathname.startsWith('/solutions'), hasDropdown: true },
    { name: 'Resources', href: '/resources', current: location.pathname.startsWith('/resources'), hasDropdown: true },
    { name: 'About', href: '/about', current: location.pathname === '/about' },
    { name: 'Contact', href: '/contact', current: location.pathname === '/contact' },
  ];

  const services = [
    { 
      name: '🚀 Innovative Services 2025', 
      href: '/innovative-services-2025', 
      icon: Rocket, 
      description: 'Cutting-edge AI Micro SAAS Solutions',
      featured: true,
      color: 'from-purple-500 to-pink-500',
      badge: 'NEW',
      highlight: true
    },
    { 
      name: '🎯 2025 Services Showcase', 
      href: '/services/showcase-2025', 
      icon: Star, 
      description: 'Complete 2025 Portfolio',
      featured: true,
      color: 'from-cyan-500 to-blue-500'
    },
    { 
      name: '📊 All Services', 
      href: '/services', 
      icon: Brain, 
      description: 'Complete Service Catalog',
      featured: true,
      color: 'from-cyan-500 to-blue-500'
    },
    { 
      name: '🤖 AI Business Intelligence', 
      href: '/services/ai-business-intelligence', 
      icon: Brain, 
      description: 'Machine Learning & Data Science',
      featured: true,
      color: 'from-purple-500 to-cyan-500',
      badge: 'Popular'
    },
    { 
      name: '💊 AI Healthcare Platform', 
      href: '/services/ai-healthcare-platform', 
      icon: Heart, 
      description: 'Medical AI & Diagnostics',
      featured: true,
      color: 'from-red-500 to-pink-500',
      badge: 'New'
    },
    { 
      name: '✍️ AI Content Creation', 
      href: '/services/ai-content-creation', 
      icon: PenTool, 
      description: 'Content Generation & Optimization',
      featured: true,
      color: 'from-blue-500 to-indigo-500'
    },
    { 
      name: '🛡️ AI Cybersecurity', 
      href: '/services/ai-cybersecurity', 
      icon: Shield, 
      description: 'AI-Powered Security',
      featured: true,
      color: 'from-green-500 to-blue-500'
    },
    { 
      name: '⚛️ Quantum Computing', 
      href: '/services/quantum-computing', 
      icon: Atom, 
      description: 'Quantum AI & Optimization',
      featured: true,
      color: 'from-purple-500 to-pink-500',
      badge: 'Cutting Edge'
    },
    { 
      name: '🔌 IoT Edge Computing', 
      href: '/services/iot-edge-computing', 
      icon: Cpu, 
      description: 'IoT & Real-time Processing',
      featured: true,
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      name: '🏗️ Digital Twin Platform', 
      href: '/services/digital-twin', 
      icon: Building2, 
      description: 'Digital Twin Solutions',
      featured: true,
      color: 'from-blue-500 to-indigo-500'
    },
    { 
      name: '🌐 Blockchain Web3 Platform', 
      href: '/services/blockchain-web3-platform', 
      icon: Globe2, 
      description: 'Blockchain & Web3',
      featured: true,
      color: 'from-yellow-500 to-orange-500'
    },
    { 
      name: '🏥 AI Healthcare Diagnostics Platform', 
      href: '/services/ai-healthcare-diagnostics-platform', 
      icon: Heart, 
      description: 'AI Medical Diagnostics',
      featured: true,
      color: 'from-pink-500 to-red-500'
    },
    { 
      name: '📚 AI Education Platform', 
      href: '/services/ai-education-platform', 
      icon: BookOpen, 
      description: 'AI-Powered Learning',
      featured: true,
      color: 'from-blue-500 to-indigo-500'
    },
    { 
      name: '🌍 AI Metaverse Platform', 
      href: '/services/ai-metaverse-platform', 
      icon: Globe, 
      description: 'AI Metaverse Solutions',
      featured: true,
      color: 'from-purple-500 to-indigo-500'
    },
    { 
      name: '🚀 AI Space Technology Platform', 
      href: '/services/ai-space-technology-platform', 
      icon: Rocket, 
      description: 'AI Space Solutions',
      featured: true,
      color: 'from-indigo-500 to-purple-500'
    },
    { 
      name: '🌱 AI Green Technology Platform', 
      href: '/services/ai-green-technology-platform', 
      icon: Leaf, 
      description: 'Sustainable AI Solutions',
      featured: true,
      color: 'from-green-500 to-emerald-500'
    },
    { 
      name: '💻 AI Development Platform', 
      href: '/services/ai-development-platform', 
      icon: Code, 
      description: 'AI Code Generation',
      featured: true,
      color: 'from-cyan-500 to-blue-500'
    },
    { 
      name: '🛒 Micro SAAS Products', 
      href: '/services/micro-saas', 
      icon: ShoppingCart, 
      description: 'AI automations with transparent pricing',
      featured: true,
      color: 'from-orange-500 to-red-500',
      price: 'Starting at $99/month',
      category: 'Micro SaaS'
    },
    { 
      name: '🔮 Revolutionary Services 2030', 
      href: '/revolutionary-services-2030', 
      icon: Rocket, 
      description: 'Future Technology Solutions',
      featured: true,
      color: 'from-indigo-500 to-purple-500'
    },
    { 
      name: '🧠 Comprehensive Services 2030', 
      href: '/comprehensive-services-2030', 
      icon: Brain, 
      description: 'Complete AI & Tech Solutions',
      featured: true,
      color: 'from-cyan-500 to-purple-500'
    }
  ];

  const solutions = [
    { 
      name: 'Enterprise Solutions', 
      href: '/solutions/enterprise', 
      icon: Building, 
      description: 'Large-scale business solutions',
      featured: true,
      color: 'from-blue-500 to-indigo-500'
    },
    { 
      name: 'SMB Solutions', 
      href: '/solutions/smb', 
      icon: Building2, 
      icon: Building2, 
      description: 'Small & medium business solutions',
      featured: true,
      color: 'from-green-500 to-emerald-500'
    },
    { 
      name: 'Startup Solutions', 
      href: '/solutions/startup', 
      icon: Rocket, 
      description: 'Startup & growth solutions',
      featured: true,
      color: 'from-purple-500 to-pink-500'
    },
    { 
      name: 'Government Solutions', 
      href: '/solutions/government', 
      icon: Shield, 
      description: 'Public sector solutions',
      featured: true,
      color: 'from-gray-500 to-slate-500'
    },
    { 
      name: 'Healthcare Solutions', 
      href: '/solutions/healthcare', 
      icon: Heart, 
      description: 'Healthcare & medical solutions',
      featured: true,
      color: 'from-red-500 to-pink-500'
    },
    { 
      name: 'Financial Solutions', 
      href: '/solutions/financial', 
      icon: DollarSign, 
      description: 'Fintech & banking solutions',
      featured: true,
      color: 'from-green-500 to-emerald-500'
    },
    { 
      name: 'Education Solutions', 
      href: '/solutions/education', 
      icon: BookOpen, 
      description: 'Educational technology solutions',
      featured: true,
      color: 'from-blue-500 to-indigo-500'
    },
    { 
      name: 'Manufacturing Solutions', 
      href: '/solutions/manufacturing', 
      icon: Settings, 
      description: 'Industrial & manufacturing solutions',
      featured: true,
      color: 'from-orange-500 to-red-500'
    },
    { 
      name: 'Retail Solutions', 
      href: '/solutions/retail', 
      icon: ShoppingCart, 
      description: 'E-commerce & retail solutions',
      featured: true,
      color: 'from-purple-500 to-pink-500'
    },
    { 
      name: 'Transportation Solutions', 
      href: '/solutions/transportation', 
      icon: Truck, 
      description: 'Logistics & transportation solutions',
      featured: true,
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  const resources = [
    { 
      name: 'Case Studies', 
      href: '/case-studies', 
      icon: FileText, 
      description: 'Success stories & implementations',
      featured: true,
      color: 'from-blue-500 to-indigo-500'
    },
    { 
      name: 'White Papers', 
      href: '/white-papers', 
      icon: BookOpen, 
      description: 'Research & insights',
      featured: true,
      color: 'from-purple-500 to-pink-500'
    },
    { 
      name: 'Webinars', 
      href: '/webinars', 
      icon: Video, 
      description: 'Live & recorded sessions',
      featured: true,
      color: 'from-green-500 to-emerald-500'
    },
    { 
      name: 'Documentation', 
      href: '/docs', 
      icon: FileText, 
      description: 'Technical documentation',
      featured: true,
      color: 'from-gray-500 to-slate-500'
    },
    { 
      name: 'API Documentation', 
      href: '/api-docs', 
      icon: Code, 
      description: 'Developer resources',
      featured: true,
      color: 'from-orange-500 to-red-500'
    },
    { 
      name: 'Training', 
      href: '/training', 
      icon: Users, 
      description: 'Learning & certification',
      featured: true,
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      name: 'Community', 
      href: '/community', 
      icon: MessageCircle, 
      description: 'User community & forums',
      featured: true,
      color: 'from-purple-500 to-indigo-500'
    },
    { 
      name: 'Support', 
      href: '/support', 
      icon: HelpCircle, 
      description: 'Help & support center',
      featured: true,
      color: 'from-green-500 to-blue-500'
    },
    { 
      name: 'Blog', 
      href: '/blog', 
      icon: PenTool, 
      description: 'Latest news & insights',
      featured: true,
      color: 'from-yellow-500 to-orange-500'
    },
    { 
      name: 'Pricing Guide 2027', 
      href: '/pricing-guide-2027', 
      icon: DollarSign, 
      description: 'Comprehensive pricing information',
      featured: true,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const quickActions = [
    { name: 'Request Quote', href: '/request-quote', icon: MessageCircle, color: 'from-blue-500 to-indigo-500' },
    { name: 'Schedule Demo', href: '/demo', icon: Calendar, color: 'from-green-500 to-emerald-500' },
    { name: 'Contact Sales', href: '/contact', icon: Phone, color: 'from-purple-500 to-pink-500' },
    { name: 'Support', href: '/support', icon: HelpCircle, color: 'from-orange-500 to-red-500' }
  ];

  return (
    <EnhancedNavigation 
      onThemeChange={handleThemeChange}
      onSidebarToggle={onSidebarToggle}
      className=""
    />
  );
}
