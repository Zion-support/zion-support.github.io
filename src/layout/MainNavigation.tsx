
<<<<<<< HEAD
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/useAuth";
import { MessageSquare, ChevronDown, Users, Briefcase, Settings, BarChart3 } from "lucide-react";
import { MessageSquare, ChevronDown, Brain, Shield, Cloud, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState, useRef, useEffect } from "react";
import { MessageSquare, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { MessageSquare, ChevronDown, Users, Settings, HelpCircle, FileText } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState, useRef, useEffect } from "react";
import { MessageSquare, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState, useEffect, useRef } from "react";
import { MessageSquare, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { MessageSquare, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { MessageSquare, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
=======
import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { useAuth } from '@/hooks/useAuth';
import { 
  MessageSquare, 
  ChevronDown, 
  Users, 
  Briefcase, 
  Settings, 
  BarChart3, 
  Brain, 
  Shield, 
  Cloud, 
  Zap,
  BookOpen,
  HelpCircle,
  DollarSign,
  Newspaper,
  FileText,
  Video,
  Beaker,
  Users2
} from 'lucide-react';
>>>>>>> 2bf5372f7382c686e4764d0c383c85abea9dafdc

interface MainNavigationProps {
  isAdmin?: boolean;
  unreadCount?: number;
  className?: string;
}

export function MainNavigation({ isAdmin = false, unreadCount = 0, className }: MainNavigationProps) {
  const { user } = useAuth();
  const isAuthenticated = !!user;
  const location = useLocation();
<<<<<<< HEAD
  const { t } = useTranslation();
=======
>>>>>>> 2bf5372f7382c686e4764d0c383c85abea9dafdc
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
<<<<<<< HEAD
=======
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const resourcesDropdownRef = useRef<HTMLDivElement>(null);
>>>>>>> 2bf5372f7382c686e4764d0c383c85abea9dafdc

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
<<<<<<< HEAD
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
=======
>>>>>>> 2bf5372f7382c686e4764d0c383c85abea9dafdc
        setDropdownOpen(false);
      }
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
      if (resourcesDropdownRef.current && !resourcesDropdownRef.current.contains(event.target as Node)) {
        setResourcesDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
<<<<<<< HEAD
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const baseLinks: NavigationLink[] = [
    {
      key: 'home',
      href: '/',
      matches: (path: string) => path.startsWith('/services') || path.startsWith('/it-onsite-services') || path.startsWith('/green-it')
      key: 'about',
      href: '/about',
      matches: (path: string) => path.startsWith('/about')
      key: 'about',
      href: '/about',
      matches: (path: string) => path === '/about'
    },
    {
      key: 'services',
      href: '/services',
      matches: (path: string) => path.startsWith('/services')
      key: 'services',
      href: '/services',
      matches: (path: string) => path.startsWith('/services')
    },
    {
      key: 'ai-services',
      href: '/ai-services',
      matches: (path: string) => path.startsWith('/ai-services')
    },
    {
      key: 'it-services',
      href: '/it-services',
      matches: (path: string) => path.startsWith('/it-services')
    },
    {
      key: 'micro-saas',
      href: '/micro-saas',
      matches: (path: string) => path.startsWith('/micro-saas')
    },
    {
      key: 'about',
      href: '/about',
      matches: (path: string) => path.startsWith('/about')
    },
    {
      key: 'services',
      href: '/services',
      matches: (path: string) => path.startsWith('/services') || path.startsWith('/it-onsite-services')
      name: 'Home',
      matches: (path: string) => path === '/'
    },
    {
      key: 'services',
      href: '/services',
      name: 'Services',
      matches: (path: string) => path.startsWith('/services')
    },
    {
      key: 'services',
      href: '/comprehensive-services',
      matches: (path: string) => path.startsWith('/comprehensive-services') || path.startsWith('/services')
    },
    {
      key: 'marketplace',
      href: '/marketplace',
      key: 'services',
      href: '/services',
      matches: (path: string) => path.startsWith('/services')
      key: 'services',
      href: '/services',
      matches: (path: string) => path.startsWith('/services')
      key: 'services',
      href: '/services',
      matches: (path: string) => path.startsWith('/services') || path.startsWith('/it-onsite-services')
    },
    {
      key: 'micro-saas',
      href: '/micro-saas-services',
      matches: (path: string) => path.startsWith('/micro-saas-services')
      matches: (path: string) => path === '/'
    },
    {
      key: 'marketplace',
      href: '/marketplace',
      matches: (path: string) => path.startsWith('/marketplace')
    },
    {
      key: 'services',
      href: '/services',
      matches: (path: string) => path.startsWith('/services')
    },
    {
      key: 'categories',
      href: '/categories',
      matches: (path: string) => path.startsWith('/categories')
      key: 'services',
      href: '/services',
      matches: (path: string) => path.startsWith('/services')
      key: 'services',
      href: '/services',
      matches: (path: string) => path.startsWith('/services')
      matches: (path: string) => path.startsWith('/marketplace'),
      name: t('nav.marketplace')
      name: 'Marketplace',
      matches: (path: string) => path.startsWith('/marketplace'),
      dropdown: [
        { href: '/marketplace', label: 'All Products' },
        { href: '/categories', label: 'Categories' },
        { href: '/equipment', label: 'Equipment' },
        { href: '/green-it', label: 'Green IT' }
      ]
      key: 'services',
      href: '/services',
      matches: (path: string) => path.startsWith('/services')
      name: 'Marketplace',
      matches: (path: string) => path.startsWith('/marketplace'),
      dropdown: [
        { href: '/services', name: 'Services' },
        { href: '/equipment', name: 'Equipment' },
        { href: '/categories', name: 'Categories' },
        { href: '/green-it', name: 'Green IT' }
      ]
    },
    {
      key: 'talent',
      href: '/talent',
      key: 'ai-hiring',
      href: '/zion-hire-ai',
      matches: (path: string) => path.startsWith('/zion-hire-ai') || path.startsWith('/hire-ai')
    }
  ];

  const moreLinks = [
    {
      key: 'categories',
      href: '/categories',
      icon: <FileText className="w-4 h-4" />,
      description: 'Browse service categories'
      matches: (path: string) => path.startsWith('/equipment'),
      name: t('nav.equipment')
    },
    {
      key: 'partners',
      href: '/partners',
      matches: (path: string) => path.startsWith('/partners')
      name: 'Talent',
      matches: (path: string) => path.startsWith('/talent') && !path.includes('/talent-dashboard'),
      dropdown: [
        { href: '/talent', label: 'Find Talent' },
        { href: '/talent/apply', label: 'Apply as Talent' },
        { href: '/zion-hire-ai', label: 'AI Hiring' }
      ]
    },
    {
      key: 'enterprise',
      href: '/enterprise',
      matches: (path: string) => path.startsWith('/enterprise')
      name: 'Talent',
      matches: (path: string) => path.startsWith('/talent') && !path.includes('/talent-dashboard'),
      dropdown: [
        { href: '/talent', name: 'Browse Talent' },
        { href: '/talents', name: 'Talent Directory' },
        { href: '/hire-ai', name: 'Hire AI' }
      ]
      key: 'equipment',
      href: '/equipment',
      matches: (path: string) => path.startsWith('/equipment')
    },
    {
      key: 'community',
      href: '/community',
      key: 'pricing',
      href: '/pricing',
      matches: (path: string) => path === '/pricing'
      key: 'about',
      href: '/about',
      matches: (path: string) => path === '/about'
      key: 'company',
      href: '/about',
      matches: (path: string) => path.startsWith('/about') || path.startsWith('/careers') || path.startsWith('/partners') || path.startsWith('/contact')
      matches: (path: string) => path.startsWith('/community') || path.startsWith('/forum'),
      name: t('nav.community')
      key: 'about',
      href: '/about',
      matches: (path: string) => path === '/about'
      matches: (path: string) => path.startsWith('/community') || path.startsWith('/forum')
      matches: (path: string) => path.startsWith('/community') || path.startsWith('/forum')
    },
    {
      key: 'blog',
      href: '/blog',
      key: 'blog',
      href: '/blog',
      matches: (path: string) => path.startsWith('/blog')
      key: 'contact',
      href: '/contact',
      matches: (path: string) => path === '/contact'
      icon: <Users className="w-4 h-4" />,
      description: 'Join our community'
    },
    {
      key: 'help',
      href: '/help-center',
      icon: <HelpCircle className="w-4 h-4" />,
      description: 'Get help and support'
    },
    {
      key: 'faq',
      href: '/faq',
      icon: <HelpCircle className="w-4 h-4" />,
      description: 'Frequently asked questions'
      name: 'Community',
      matches: (path: string) => path.startsWith('/community') || path.startsWith('/forum'),
      dropdown: [
        { href: '/community', label: 'Forums' },
        { href: '/blog', label: 'Blog' },
        { href: '/partners', label: 'Partners' }
      ]
    },
    {
      key: 'about',
      href: '/about',
      key: 'blog',
      href: '/blog',
      matches: (path: string) => path.startsWith('/blog')
      matches: (path: string) => path.startsWith('/blog')
    }
  ];

  const serviceDropdowns = [
    {
      key: 'ai-services',
      label: 'AI Services',
      icon: <Brain className="h-4 w-4" />,
      items: [
        { name: 'AI Content Generator', href: '/ai-content-generator' },
        { name: 'AI Talent Matching', href: '/match' },
        { name: 'AI Model Training', href: '/ai-training' },
        { name: 'AI Chatbot Builder', href: '/chatbot-builder' },
        { name: 'AI-Powered Testing', href: '/ai-testing' },
        { name: 'AI Legal Assistant', href: '/legal-ai' },
        { name: 'AI Translation', href: '/ai-translation' },
        { name: 'AI Financial Advisor', href: '/financial-ai' },
        { name: 'AI Design Assistant', href: '/design-ai' }
      ]
    },
    {
      key: 'security',
      label: 'Security',
      icon: <Shield className="h-4 w-4" />,
      items: [
        { name: 'Cybersecurity Suite', href: '/cybersecurity-suite' },
        { name: 'Data Privacy Compliance', href: '/privacy-compliance' },
        { name: 'Security Audits', href: '/security-audits' },
        { name: 'Penetration Testing', href: '/penetration-testing' },
        { name: 'Compliance Reporting', href: '/compliance' }
      ]
    },
    {
      key: 'cloud-devops',
      label: 'Cloud & DevOps',
      icon: <Cloud className="h-4 w-4" />,
      items: [
        { name: 'Cloud Cost Optimizer', href: '/cloud-optimizer' },
        { name: 'DevOps Automation', href: '/devops-platform' },
        { name: 'API Gateway', href: '/api-gateway' },
        { name: 'Infrastructure as Code', href: '/infrastructure' },
        { name: 'Container Management', href: '/containers' }
      ]
    },
    {
      key: 'business-solutions',
      label: 'Business',
      icon: <Zap className="h-4 w-4" />,
      items: [
        { name: 'Data Analytics Platform', href: '/analytics-platform' },
        { name: 'Customer Success Platform', href: '/customer-success' },
        { name: 'AI-Powered HR Suite', href: '/hr-suite' },
        { name: 'Project Management', href: '/dashboard/projects' },
        { name: 'Enterprise Solutions', href: '/enterprise' }
      ]
    }
  const serviceLinks = [
    { key: 'ai-analytics', href: '/ai-analytics-dashboard', name: 'AI Analytics' },
    { key: 'ai-content', href: '/ai-content-generator', name: 'AI Content Generator' },
    { key: 'cybersecurity', href: '/cybersecurity-services', name: 'Cybersecurity' },
    { key: 'cloud-migration', href: '/cloud-migration-services', name: 'Cloud Migration' },
    { key: 'it-onsite', href: '/it-onsite-services', name: 'IT Onsite Services' }
  ];

  let links = baseLinks.map(link => ({ ...link, name: t(`nav.${link.key}`) }));
      matches: (path: string) => path.startsWith('/blog'),
      name: t('nav.blog')
    }
  ];

  let links = baseLinks;
  
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
      name: 'About',
      matches: (path: string) => path.startsWith('/about') || path === '/careers' || path === '/contact'
    }
  ];

  let links = baseLinks;
      name: 'Community',
      matches: (path: string) => path.startsWith('/community') || path.startsWith('/forum'),
      dropdown: [
        { href: '/community', name: 'Community Hub' },
        { href: '/blog', name: 'Blog' },
        { href: '/partners', name: 'Partners' }
      ]
    },
    {
      key: 'company',
      href: '/about',
      name: 'Company',
      matches: (path: string) => path.startsWith('/about') || path.startsWith('/careers'),
      dropdown: [
        { href: '/about', name: 'About Us' },
        { href: '/careers', name: 'Careers' },
        { href: '/contact', name: 'Contact' }
      ]
    }
  ];

  let links: NavigationLink[] = baseLinks;
  
  // Add authenticated-only links
  if (isAuthenticated) {
    links.push({
      key: 'dashboard',
      name: 'Dashboard',
      href: '/dashboard',
      matches: (path: string) => path === '/dashboard' || path === '/client-dashboard' || path === '/talent-dashboard'
    });
  }
  
  // Add admin-only links
  if (isAdmin) {
    links.push({
      key: 'analytics',
      name: 'Analytics',
      href: '/analytics',
      matches: (path: string) => path.startsWith('/analytics')
    });
  }

  const handleDropdownToggle = (key: string) => {
    setActiveDropdown(activeDropdown === key ? null : key);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };
  
  const handleDropdownToggle = (key: string) => {
    setActiveDropdown(activeDropdown === key ? null : key);
  };

  const handleDropdownClose = () => {
    setActiveDropdown(null);
  };
  
  const handleDropdownToggle = (key: string) => {
    setActiveDropdown(activeDropdown === key ? null : key);
  };

  const closeDropdowns = () => {
    setActiveDropdown(null);
  };
  
  return (
    <nav className={cn("navbar ml-6 hidden lg:flex", className)}>
  const toggleDropdown = (key: string) => {
    setActiveDropdown(activeDropdown === key ? null : key);
  };

  const isDropdownActive = (key: string) => activeDropdown === key;
  
  return (
    <nav className={cn("navbar ml-6 hidden lg:flex", className)} ref={dropdownRef}>
      <ul className="flex items-center gap-1">
                "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-all duration-300 relative overflow-hidden group",
                link.matches(location.pathname)
                  ? "bg-gradient-to-r from-zion-purple/30 to-zion-cyan/30 text-zion-cyan shadow-lg shadow-zion-purple/20"
                  : "text-white hover:text-zion-cyan"
              )}
            >
              {/* Hover background effect */}
              <div className={cn(
                "absolute inset-0 bg-gradient-to-r from-zion-purple/10 to-zion-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md",
                link.matches(location.pathname) && "opacity-100"
              )} />
              
              {/* Glowing border effect */}
              <div className={cn(
                "absolute inset-0 rounded-md border border-transparent group-hover:border-zion-purple/30 transition-all duration-300",
                link.matches(location.pathname) && "border-zion-cyan/50"
              )} />
              
              <span className="relative z-10">{link.name}</span>
            </Link>
          <li key={link.key} className="relative" onMouseLeave={handleDropdownClose}>
          <li key={link.name} className="relative">
            {link.dropdown ? (
              <div className="relative">
                <button
                  onClick={() => handleDropdownToggle(link.key)}
                  onBlur={() => setTimeout(closeDropdowns, 150)}
                  className={cn(
                    "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors",
                    link.matches(location.pathname)
                      ? "bg-zion-purple/20 text-zion-cyan"
                      : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
                  )}
                >
                  {link.name}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                
                {activeDropdown === link.key && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-zion-blue-dark border border-zion-blue-light rounded-md shadow-lg z-50">
                    <div className="py-2">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.href}
                          to={item.href}
                          onClick={closeDropdowns}
                          className="block px-4 py-2 text-sm text-zion-slate-light hover:bg-zion-purple/10 hover:text-zion-cyan transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
=======

  const isActive = (path: string) => location.pathname === path;

  const navigationItems = [
    { name: 'Home', href: '/', icon: null },
    { name: 'About', href: '/about', icon: null },
    { name: 'Team', href: '/team', icon: Users },
    { name: 'Careers', href: '/careers', icon: Briefcase },
    { name: 'Contact', href: '/contact', icon: MessageSquare },
  ];

  const serviceItems = [
    { name: 'AI Services', href: '/services/ai', icon: Brain, description: 'Artificial Intelligence Solutions' },
    { name: 'Cybersecurity', href: '/services/cybersecurity', icon: Shield, description: 'Security & Protection' },
    { name: 'Cloud Solutions', href: '/services/cloud', icon: Cloud, description: 'Cloud & DevOps Services' },
    { name: 'IT Consulting', href: '/services/consulting', icon: Briefcase, description: 'Strategic IT Consulting' },
    { name: 'Infrastructure', href: '/services/infrastructure', icon: BarChart3, description: 'IT Infrastructure' },
    { name: 'Digital Transformation', href: '/services/digital-transformation', icon: Zap, description: 'Digital Innovation' },
    { name: 'Quantum AI', href: '/services/quantum-ai', icon: Brain, description: 'Quantum Computing & AI' },
  ];

  const resourceItems = [
    { name: 'Blog', href: '/blog', icon: Newspaper, description: 'Latest insights and news' },
    { name: 'Documentation', href: '/docs', icon: BookOpen, description: 'Technical documentation' },
    { name: 'White Papers', href: '/white-papers', icon: FileText, description: 'Research and insights' },
    { name: 'Webinars', href: '/webinars', icon: Video, description: 'Educational content' },
    { name: 'Research & Development', href: '/research-development', icon: Beaker, description: 'Innovation projects' },
    { name: 'Case Studies', href: '/case-studies', icon: BarChart3, description: 'Success stories' },
  ];

  const supportItems = [
    { name: 'Help Center', href: '/help', icon: HelpCircle, description: 'Get help and support' },
    { name: 'Training', href: '/training', icon: BookOpen, description: 'Training programs' },
    { name: 'Community', href: '/community', icon: Users2, description: 'Join our community' },
    { name: 'Status', href: '/status', icon: BarChart3, description: 'Service status' },
  ];

  return (
    <nav className={cn('flex items-center space-x-6', className)}>
      {/* Main Navigation Items */}
      {navigationItems.map((item) => (
        <Link
          key={item.name}
          to={item.href}
          className={cn(
            'flex items-center space-x-2 text-sm font-medium transition-colors hover:text-zion-cyan',
            isActive(item.href)
              ? 'text-zion-cyan'
              : 'text-gray-700'
          )}
        >
          {item.icon && <item.icon className="w-4 h-4" />}
          <span>{item.name}</span>
        </Link>
      ))}

      {/* Services Dropdown */}
      <div className="relative" ref={servicesDropdownRef}>
        <button
          onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
          className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-zion-cyan transition-colors"
        >
          <span>Services</span>
          <ChevronDown className="w-4 h-4" />
        </button>

        {servicesDropdownOpen && (
          <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
            <div className="px-4 py-2 border-b border-gray-100">
              <h3 className="text-sm font-semibold text-gray-900">Our Services</h3>
              <p className="text-xs text-gray-500">Comprehensive technology solutions</p>
            </div>
            {serviceItems.map((service) => (
>>>>>>> 2bf5372f7382c686e4764d0c383c85abea9dafdc
              <Link
                key={service.name}
                to={service.href}
                className="flex items-start space-x-3 px-4 py-3 text-sm text-gray-700 hover:text-zion-cyan hover:bg-gray-50 transition-colors"
                onClick={() => setServicesDropdownOpen(false)}
              >
<<<<<<< HEAD
                {link.name}
              </Link>
            )}
        {links.map((link) => {
          if (link.key === 'marketplace') {
            return (
              <li key={link.key}>
                {renderDropdown(marketplaceDropdown, 'marketplace')}
              </li>
            );
          }
          
          if (link.key === 'company') {
            return (
              <li key={link.key}>
                {renderDropdown(companyDropdown, 'company')}
              </li>
            );
          }
          
          return (
            <li key={link.name}>
              <Link
                to={link.href}
                className={cn(
                  "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors",
                  link.matches(location.pathname)
                    ? "bg-zion-purple/20 text-zion-cyan"
                    : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
                )}
              >
                {link.name}
              </Link>
            </li>
          );
        })}

        {/* Service Dropdowns */}
        {serviceDropdowns.map((dropdown) => (
          <li key={dropdown.key} className="relative">
            <button
              onClick={() => toggleDropdown(dropdown.key)}
              className={cn(
                "inline-flex h-9 items-center gap-2 rounded-md px-4 text-sm font-medium transition-colors",
                isDropdownActive(dropdown.key)
                  ? "bg-zion-purple/20 text-zion-cyan"
                  : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
              )}
              onClick={closeDropdown}
            >
              {dropdown.icon}
              {dropdown.label}
              <ChevronDown className={cn(
                "h-3 w-3 transition-transform duration-200",
                isDropdownActive(dropdown.key) ? "rotate-180" : ""
              )} />
            </button>

            {/* Dropdown Menu */}
            {isDropdownActive(dropdown.key) && (
              <div className="absolute top-full left-0 mt-1 w-64 bg-zion-slate border border-zion-purple/30 rounded-lg shadow-2xl shadow-zion-purple/20 backdrop-blur-xl z-50">
                <div className="p-2">
                  {dropdown.items.map((item, index) => (
                    <Link
                      key={index}
                      to={item.href}
                      onClick={() => setActiveDropdown(null)}
                      className="flex items-center gap-3 px-3 py-2 text-sm text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10 rounded-md transition-colors"
                    >
                      {dropdown.icon}
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </li>
        ))}
        
        {/* Services Dropdown */}
        <li className="relative">
          <button
            onClick={() => setIsServicesOpen(!isServicesOpen)}
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
            className={cn(
              "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors",
              location.pathname.startsWith('/services') || location.pathname.startsWith('/it-onsite-services') || location.pathname.startsWith('/green-it')
                ? "bg-zion-purple/20 text-zion-cyan"
                : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
            )}
          >
            Services
            <ChevronDown className="ml-1 h-4 w-4" />
          </button>
          
          {isServicesOpen && (
            <div
              className="absolute top-full left-0 mt-1 w-48 bg-zion-blue-dark border border-zion-purple/20 rounded-md shadow-lg py-2 z-50"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
=======
                <service.icon className="w-5 h-5 mt-0.5 text-zion-cyan" />
                <div>
                  <div className="font-medium">{service.name}</div>
                  <div className="text-xs text-gray-500">{service.description}</div>
                </div>
              </Link>
            ))}
            <div className="px-4 py-2 border-t border-gray-100">
>>>>>>> 2bf5372f7382c686e4764d0c383c85abea9dafdc
              <Link
                to="/services"
                className="text-sm text-zion-cyan hover:text-zion-cyan-dark font-medium"
                onClick={() => setServicesDropdownOpen(false)}
              >
                View All Services →
              </Link>
            </div>
          </div>
<<<<<<< HEAD
        </li>
        
        {/* Services Dropdown */}
        <li className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsServicesOpen(!isServicesOpen)}
            className={cn(
              "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors",
              location.pathname.includes('/ai-') || location.pathname.includes('/cybersecurity') || location.pathname.includes('/cloud-migration')
                ? "bg-zion-purple/20 text-zion-cyan"
                : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
            )}
          >
            Services
            <ChevronDown className="ml-1 h-4 w-4" />
          </button>
          
          {isServicesOpen && (
            <div className="absolute top-full left-0 mt-1 w-64 bg-zion-slate-dark border border-zion-purple/20 rounded-md shadow-lg z-50">
              <div className="py-2">
                {serviceLinks.map((service) => (
                  <Link
                    key={service.key}
                    to={service.href}
                    onClick={() => setIsServicesOpen(false)}
                    className={cn(
                      "block px-4 py-2 text-sm text-zion-slate-light hover:bg-zion-purple/10 hover:text-zion-cyan transition-colors",
                      location.pathname === service.href && "bg-zion-purple/20 text-zion-cyan"
                    )}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </li>
        
        {/* Company dropdown */}
        <li className="relative">
          <button
            onClick={() => handleDropdownToggle('company')}
            className={cn(
              "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors",
              activeDropdown === 'company'
                ? "bg-zion-purple/20 text-zion-cyan"
                : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
            )}
          >
            Company
            <ChevronDown className="ml-1 h-4 w-4" />
          </button>
          {activeDropdown === 'company' && (
            <div className="absolute top-full left-0 mt-1 w-48 bg-zion-blue-dark border border-zion-purple/20 rounded-md shadow-lg z-50">
              <div className="py-2">
                <Link
                  to="/about"
                  className="block px-4 py-2 text-sm text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
                  onClick={closeDropdown}
                >
                  About Us
                </Link>
                <Link
                  to="/careers"
                  className="block px-4 py-2 text-sm text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
                  onClick={closeDropdown}
                >
                  Careers
                </Link>
                <Link
                  to="/partners"
                  className="block px-4 py-2 text-sm text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
                  onClick={closeDropdown}
                >
                  Partners
                </Link>
                <Link
                  to="/contact"
                  className="block px-4 py-2 text-sm text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
                  onClick={closeDropdown}
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </li>

        {/* Support dropdown */}
        <li className="relative">
          <button
            onClick={() => handleDropdownToggle('support')}
            className={cn(
              "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors",
              activeDropdown === 'support'
                ? "bg-zion-purple/20 text-zion-cyan"
                : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
            )}
          >
            Support
            <ChevronDown className="ml-1 h-4 w-4" />
          </button>
          {activeDropdown === 'support' && (
            <div className="absolute top-full left-0 mt-1 w-48 bg-zion-blue-dark border border-zion-purple/20 rounded-md shadow-lg z-50">
              <div className="py-2">
                <Link
                  to="/help"
                  className="block px-4 py-2 text-sm text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
                  onClick={closeDropdown}
                >
                  Help Center
                </Link>
                <Link
                  to="/request-quote"
                  className="block px-4 py-2 text-sm text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
                  onClick={closeDropdown}
                >
                  Request Quote
                </Link>
                <Link
                  to="/it-onsite-services"
                  className="block px-4 py-2 text-sm text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
                  onClick={closeDropdown}
                >
                  IT Services
                </Link>
              </div>
            </div>
          )}
        {links.map((link) => (
          <li key={link.name}>
            <Link
              to={link.href}
              className={cn(
                "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors",
                link.matches(location.pathname)
                  ? "bg-zion-purple/20 text-zion-cyan"
                  : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
              )}
            >
              {link.name}
            </Link>
          </li>
        ))}
        
        {/* Resources Dropdown */}
        <li>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors text-white hover:bg-zion-purple/10 hover:text-zion-cyan">
                Resources
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48 bg-zion-blue-dark border-zion-blue-light">
              <DropdownMenuItem asChild>
                <Link to="/help" className="flex items-center gap-2 text-white hover:bg-zion-purple/10">
                  <Settings className="h-4 w-4" />
                  Help Center
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/faq" className="flex items-center gap-2 text-white hover:bg-zion-purple/10">
                  <Briefcase className="h-4 w-4" />
                  FAQ
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/sitemap" className="flex items-center gap-2 text-white hover:bg-zion-purple/10">
                  <BarChart3 className="h-4 w-4" />
                  Sitemap
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </li>
        
        {/* Company Dropdown */}
        <li>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors text-white hover:bg-zion-purple/10 hover:text-zion-cyan">
                Company
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48 bg-zion-blue-dark border-zion-blue-light">
              <DropdownMenuItem asChild>
                <Link to="/about" className="flex items-center gap-2 text-white hover:bg-zion-purple/10">
                  <Users className="h-4 w-4" />
                  About Us
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/careers" className="flex items-center gap-2 text-white hover:bg-zion-purple/10">
                  <Briefcase className="h-4 w-4" />
                  Careers
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/partners" className="flex items-center gap-2 text-white hover:bg-zion-purple/10">
                  <Users className="h-4 w-4" />
                  Partners
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/contact" className="flex items-center gap-2 text-white hover:bg-zion-purple/10">
                  <Settings className="h-4 w-4" />
                  Contact
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </li>
        
        {/* Messages link with unread counter */}
        {isAuthenticated && (
          <li>
            <Link
              to="/messages"
              className={cn(
                "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors relative",
                location.pathname === "/messages" || location.pathname === "/inbox"
                  ? "bg-zion-purple/20 text-zion-cyan"
                  : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
                "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-all duration-300 relative",
                location.pathname === "/messages" || location.pathname === "/inbox"
                  ? "bg-zion-purple/20 text-zion-cyan border border-zion-purple/30 shadow-lg shadow-zion-purple/20"
                  : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan hover:border hover:border-zion-purple/20"
              )}
              onClick={closeDropdown}
            >
              <MessageSquare className="w-4 h-4 mr-1" />
              Messages
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-zion-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                <span className="absolute -top-1 -right-1 bg-zion-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {unreadCount}
                </span>
              )}
            </Link>
          </li>
=======
>>>>>>> 2bf5372f7382c686e4764d0c383c85abea9dafdc
        )}
      </div>

      {/* Resources Dropdown */}
      <div className="relative" ref={resourcesDropdownRef}>
        <button
          onClick={() => setResourcesDropdownOpen(!resourcesDropdownOpen)}
          className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-zion-cyan transition-colors"
        >
          <span>Resources</span>
          <ChevronDown className="w-4 h-4" />
        </button>

        {resourcesDropdownOpen && (
          <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
            <div className="px-4 py-2 border-b border-gray-100">
              <h3 className="text-sm font-semibold text-gray-900">Resources & Support</h3>
              <p className="text-xs text-gray-500">Knowledge and assistance</p>
            </div>
            {resourceItems.map((resource) => (
              <Link
                key={resource.name}
                to={resource.href}
                className="flex items-start space-x-3 px-4 py-3 text-sm text-gray-700 hover:text-zion-cyan hover:bg-gray-50 transition-colors"
                onClick={() => setResourcesDropdownOpen(false)}
              >
                <resource.icon className="w-5 h-5 mt-0.5 text-zion-cyan" />
                <div>
                  <div className="font-medium">{resource.name}</div>
                  <div className="text-xs text-gray-500">{resource.description}</div>
                </div>
              </Link>
            ))}
            <div className="px-4 py-2 border-t border-gray-100">
              <Link
                to="/help"
                className="text-sm text-zion-cyan hover:text-zion-cyan-dark font-medium"
                onClick={() => setResourcesDropdownOpen(false)}
              >
                Get Help →
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Additional Navigation Items */}
      <Link
        to="/pricing"
        className={cn(
          'flex items-center space-x-2 text-sm font-medium transition-colors hover:text-zion-cyan',
          isActive('/pricing')
            ? 'text-zion-cyan'
            : 'text-gray-700'
        )}
      >
        <DollarSign className="w-4 h-4" />
        <span>Pricing</span>
      </Link>

      {/* User Menu */}
      {isAuthenticated ? (
        <div className="flex items-center space-x-4">
          <Link
            to="/dashboard"
            className="text-sm font-medium text-gray-700 hover:text-zion-cyan transition-colors"
          >
            Dashboard
          </Link>
          <Link
            to="/profile"
            className="text-sm font-medium text-gray-700 hover:text-zion-cyan transition-colors"
          >
            Profile
          </Link>
        </div>
      ) : (
        <div className="flex items-center space-x-4">
          <Link
            to="/login"
            className="text-sm font-medium text-gray-700 hover:text-zion-cyan transition-colors"
          >
            Sign In
          </Link>
          <Link
            to="/signup"
            className="bg-zion-cyan text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-zion-cyan-dark transition-colors"
          >
            Sign Up
          </Link>
        </div>
      )}

      {/* Admin Panel Link */}
      {isAdmin && (
        <Link
          to="/admin"
          className="text-sm font-medium text-red-600 hover:text-red-700 transition-colors"
        >
          Admin Panel
        </Link>
      )}
    </nav>
  );
}
