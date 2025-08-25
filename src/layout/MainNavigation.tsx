
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";
=======
import { useState } from "react";
=======
import { MessageSquare, Sparkles, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState, useRef, useEffect } from "react";
=======
import { MessageSquare, ChevronDown, Sparkles, Zap, Shield, Database, Cloud, Code, Users, HardDrive, Lightbulb } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState, useRef, useEffect } from "react";
=======
import { MessageSquare, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState, useEffect, useRef } from "react";
=======
import { MessageSquare, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState } from "react";
=======
import { MessageSquare } from "lucide-react";
import { useTranslation } from "react-i18next";

interface MainNavigationProps {
  isAdmin?: boolean;
  unreadCount?: number;
  className?: string;
}

export function MainNavigation({ isAdmin = false, unreadCount = 0, className }: MainNavigationProps) {
  const { user } = useAuth();
  const isAuthenticated = !!user;
  const location = useLocation();
  const { t } = useTranslation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
=======
  const [toolsOpen, setToolsOpen] = useState(false);
  const toolsRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (toolsRef.current && !toolsRef.current.contains(event.target as Node)) {
        setToolsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
=======
=======
  const dropdownRef = useRef<HTMLDivElement>(null);
=======
=======
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
=======
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

=======

  const baseLinks = [
    {
      key: 'home',
      href: '/',
      href: '/services-hub',
      matches: (path: string) => path.startsWith('/services') || path.startsWith('/ai-services') || path.startsWith('/it-services') || path.startsWith('/digital-transformation')
=======
      key: 'about',
      href: '/about',
      matches: (path: string) => path === '/about'
    },
    {
=======
      key: 'micro-saas',
      href: '/micro-saas-services',
      matches: (path: string) => path.startsWith('/micro-saas-services'),
      hasDropdown: true,
      dropdownItems: [
        { label: 'AI Services', href: '/micro-saas-services?category=AI' },
        { label: 'IT Solutions', href: '/micro-saas-services?category=IT' },
        { label: 'Development', href: '/micro-saas-services?category=Development' },
        { label: 'Analytics & BI', href: '/micro-saas-services?category=Analytics' },
        { label: 'Security', href: '/micro-saas-services?category=Security' },
        { label: 'Automation', href: '/micro-saas-services?category=Automation' },
        { label: 'Integration', href: '/micro-saas-services?category=Integration' },
        { label: 'Consulting', href: '/micro-saas-services?category=Consulting' }
      ]
    },
    {
=======
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
=======
      key: 'micro-saas',
      href: '/micro-saas-services',
      matches: (path: string) => path.startsWith('/micro-saas-services')
    },
    {
=======
      key: 'about',
      href: '/about',
      matches: (path: string) => path === '/about'
    },
    {
      key: 'marketplace',
      href: '/marketplace',
      name: 'Marketplace',
      matches: (path: string) => path.startsWith('/marketplace')
    },
    {
      key: 'services',
      href: '/services',
      name: 'Services',
=======
      key: 'services',
      href: '/services',
      matches: (path: string) => path.startsWith('/services')
=======
      key: 'services',
      href: '/services',
      matches: (path: string) => path.startsWith('/services') || path.startsWith('/category'),
      hasDropdown: true,
      dropdownItems: [
        {
          key: 'ai-services',
          name: 'AI & Machine Learning',
          href: '/category/ai-services',
          description: 'Custom AI development and ML solutions',
          icon: <Sparkles className="h-4 w-4" />
        },
        {
          key: 'cloud-services',
          name: 'Cloud & Infrastructure',
          href: '/category/cloud-services',
          description: 'Cloud migration and DevOps automation',
          icon: <Cloud className="h-4 w-4" />
        },
        {
          key: 'security-services',
          name: 'Cybersecurity',
          href: '/category/security-services',
          description: 'Security audits and compliance',
          icon: <Shield className="h-4 w-4" />
        },
        {
          key: 'data-services',
          name: 'Data & Analytics',
          href: '/category/data-services',
          description: 'Big data engineering and BI',
          icon: <Database className="h-4 w-4" />
        },
        {
          key: 'development-services',
          name: 'Development Services',
          href: '/category/development-services',
          description: 'Web, mobile, and API development',
          icon: <Code className="h-4 w-4" />
        },
        {
          key: 'it-services',
          name: 'IT Support & Management',
          href: '/category/it-services',
          description: 'IT consulting and managed services',
          icon: <Zap className="h-4 w-4" />
        }
      ]
=======
      key: 'services',
      href: '/services',
      matches: (path: string) => path.startsWith('/services')
=======
      key: 'services',
      href: '/services',
      matches: (path: string) => path.startsWith('/services') || path === '/it-onsite-services' || path === '/green-it'
    },
    {
=======
      key: 'talent',
      href: '/talent',
      name: 'Talent',
      matches: (path: string) => path.startsWith('/talent') && !path.includes('/talent-dashboard')
    },
    {
      key: 'services',
      href: '/services',
      matches: (path: string) => path.startsWith('/services') || path.startsWith('/ai-services') || path.startsWith('/it-services') || path.startsWith('/digital-marketing') || path.startsWith('/business-solutions')
=======
=======
      key: 'services',
      href: '/services',
      matches: (path: string) => path.startsWith('/services')
    },
    {
=======
      key: 'micro-saas',
      href: '/micro-saas-services',
      matches: (path: string) => path.startsWith('/micro-saas-services')
    },
    {
      key: 'categories',
      href: '/categories',
      matches: (path: string) => path.startsWith('/categories')
=======
      key: 'services',
      href: '/services',
      matches: (path: string) => path.startsWith('/services')
=======
      key: 'services',
      href: '/services',
      matches: (path: string) => path.startsWith('/services')
=======
      key: 'services',
      href: '/services',
      matches: (path: string) => path.startsWith('/services') || path.startsWith('/it-onsite-services')
    },
    {
=======
=======
      matches: (path: string) => path === '/'
    },
    {
      key: 'services',
      href: '/services',
      matches: (path: string) => path.startsWith('/services') || path.startsWith('/ai-services') || path.startsWith('/it-services') || path.startsWith('/digital-transformation') || path.startsWith('/cloud-services')
=======
      key: 'services',
      href: '/micro-saas-services',
      matches: (path: string) => path.startsWith('/micro-saas-services') || path.startsWith('/services') || path.startsWith('/it-onsite-services')
    },
    {
      key: 'marketplace',
      href: '/marketplace',
      matches: (path: string) => path.startsWith('/marketplace') || path.startsWith('/categories') || path.startsWith('/equipment') || path.startsWith('/services')
=======
      matches: (path: string) => path.startsWith('/marketplace'),
      hasDropdown: true,
      dropdownItems: [
        { href: '/marketplace', label: 'All Products' },
        { href: '/categories', label: 'Categories' },
        { href: '/services', label: 'Services' },
        { href: '/equipment', label: 'Equipment' },
        { href: '/featured', label: 'Featured' }
      ]
=======
    },
    {
      key: 'talent',
      href: '/talent',
      key: 'equipment',
      href: '/equipment',
      matches: (path: string) => path.startsWith('/equipment')
=======
      matches: (path: string) => path.startsWith('/talent') && !path.includes('/talent-dashboard'),
      hasDropdown: true,
      dropdownItems: [
        { href: '/talent', label: 'Browse Talent' },
        { href: '/post-job', label: 'Post a Job' },
        { href: '/ai-matcher', label: 'AI Matcher' }
      ]
    },
    {
      key: 'about',
      href: '/about',
      matches: (path: string) => path.startsWith('/about')
    },
    {
      key: 'contact',
      href: '/contact',
      key: 'company',
      href: '/about',
      matches: (path: string) => path.startsWith('/about') || path.startsWith('/careers') || path.startsWith('/team'),
      hasDropdown: true,
      dropdownItems: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Team', href: '/team' },
        { name: 'Careers', href: '/careers' },
        { name: 'Partners', href: '/partners' },
        { name: 'Contact', href: '/contact' }
      ]
=======
      key: 'blog',
      href: '/blog',
      name: 'Blog',
      matches: (path: string) => path.startsWith('/blog')
=======
      key: 'blog',
      href: '/blog',
      matches: (path: string) => path.startsWith('/blog')
=======
      matches: (path: string) => path.startsWith('/contact')
=======
      key: 'blog',
      href: '/blog',
      matches: (path: string) => path.startsWith('/blog')
=======
      key: 'services',
      href: '/services',
      matches: (path: string) => path.startsWith('/services')
    },
    {
      key: 'about',
      href: '/about',
      matches: (path: string) => path.startsWith('/about') || path === '/mission' || path === '/team'
    },
    {
      key: 'case-studies',
      href: '/case-studies',
      matches: (path: string) => path.startsWith('/case-studies')
    },
    {
      key: 'news',
      href: '/news',
      matches: (path: string) => path.startsWith('/news') || path.startsWith('/blog')
    },
    {
      key: 'contact',
      href: '/contact',
      matches: (path: string) => path === '/contact'
=======
      key: 'about',
      href: '/about',
      matches: (path: string) => path.startsWith('/about') || path.startsWith('/careers') || path.startsWith('/partners')
=======
=======
      key: 'ai-assistant',
      href: '/zion-hire-ai',
      matches: (path: string) => path.startsWith('/zion-hire-ai') || path.startsWith('/hire-ai')
    },
    {
      key: 'community',
      href: '/community',
      matches: (path: string) => path.startsWith('/community') || path.startsWith('/forum')
=======
      key: 'community',
      href: '/community',
      matches: (path: string) => path.startsWith('/community') || path.startsWith('/forum')
=======
    },
    {
      key: 'about',
      href: '/about',
      key: 'community',
      href: '/community',
      matches: (path: string) => path.startsWith('/community') || path.startsWith('/forum')
    },
    {
      key: 'contact',
      href: '/contact',
=======
    },
    {
      key: 'faq',
      href: '/faq',
      matches: (path: string) => path === '/faq'
    },
    {
      key: 'help',
      href: '/help',
      matches: (path: string) => path === '/help'
=======
      matches: (path: string) => path === '/contact'
=======
      matches: (path: string) => path === '/about'
=======
    },
    {
      key: 'blog',
      href: '/blog',
      matches: (path: string) => path.startsWith('/blog')
    },
    {
      key: 'about',
      href: '/about',
      matches: (path: string) => path === '/about'
    }
  ];

  const companyLinks = [
    { key: 'about', href: '/about', name: 'About Us' },
    { key: 'careers', href: '/careers', name: 'Careers' },
    { key: 'partners', href: '/partners', name: 'Partners' },
    { key: 'contact', href: '/contact', name: 'Contact' }
  ];

  const supportLinks = [
    { key: 'faq', href: '/faq', name: 'FAQ' },
    { key: 'help', href: '/help', name: 'Help Center' },
    { key: 'green-it', href: '/green-it', name: 'Green IT' }
  ];

=======
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
      matches: (path: string) => path.startsWith('/services') || path.startsWith('/ai-services') || path.startsWith('/it-services') || path.startsWith('/digital-marketing') || path.startsWith('/business-solutions')
    },
    {
      key: 'categories',
      href: '/categories',
      matches: (path: string) => path.startsWith('/categories')
    },
    {
      key: 'talent',
      href: '/talent',
      matches: (path: string) => path.startsWith('/talent') && !path.includes('/talent-dashboard')
    },
    {
      key: 'equipment',
      href: '/equipment',
      matches: (path: string) => path.startsWith('/equipment')
    },
    {
      key: 'community',
      href: '/community',
      matches: (path: string) => path.startsWith('/community') || path.startsWith('/forum')
    }
  ];

  let links = baseLinks.map(link => ({ ...link, name: t(`nav.${link.key}`) }));
  
  // Add authenticated-only links
  if (isAuthenticated) {
    links.push({
      key: 'dashboard',
      name: t('nav.dashboard'),
      href: '/dashboard',
      matches: (path: string) => path === '/dashboard' || path === '/client-dashboard' || path === '/talent-dashboard'
    });
  }
  
  // Add admin-only links
  if (isAdmin) {
    links.push({
      key: 'analytics',
      name: t('nav.analytics'),
      href: '/analytics',
      matches: (path: string) => path.startsWith('/analytics')
    });
  }
  // Handle dropdown toggle
  const toggleDropdown = (key: string) => {
    setActiveDropdown(activeDropdown === key ? null : key);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
=======
  const toggleDropdown = (key: string) => {
    setActiveDropdown(activeDropdown === key ? null : key);
  };
  
  const handleDropdownToggle = (key: string) => {
    setActiveDropdown(activeDropdown === key ? null : key);
  };

  return (
    <nav className={cn("navbar ml-6 hidden lg:flex", className)} ref={dropdownRef}>
      <ul className="flex items-center gap-1">
        {links.map((link) => (
    <nav className={cn("navbar ml-6 hidden lg:flex", className)} ref={dropdownRef}>
      <ul className="flex items-center gap-1">
        {links.map((link) => (
=======
          <li key={link.name} className="relative">
            {link.hasDropdown ? (
              <div className="relative">
                <button
                  onClick={() => handleDropdownToggle(link.key)}
                  className={cn(
                    "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors",
                    link.matches(location.pathname)
                      ? "bg-zion-purple/20 text-zion-cyan"
                      : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
                  )}
                >
                  {link.name === 'Micro SAAS' ? (
                    <>
                      <Sparkles className="w-4 h-4 mr-2 text-zion-cyan" />
                      Micro SAAS
                    </>
                  ) : (
                    link.name
                  )}
                  <ChevronDown className={cn(
                    "w-4 h-4 ml-1 transition-transform duration-200",
=======
                  {link.name}
                  <ChevronDown className={cn(
                    "ml-1 h-4 w-4 transition-transform",
                    activeDropdown === link.key ? "rotate-180" : ""
                  )} />
                </button>
                
                          className="block px-4 py-3 text-sm text-white hover:bg-zion-purple/20 hover:text-zion-cyan rounded-md transition-colors"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {item.label}
                        </Link>
                      ))}
=======
                {/* Dropdown Menu */}
                {activeDropdown === link.key && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-zion-blue-dark/95 border border-zion-purple/30 rounded-xl shadow-2xl shadow-zion-purple/20 backdrop-blur-xl z-50">
                    <div className="p-4">
                      <div className="grid grid-cols-1 gap-2">
                        {link.dropdownItems?.map((item: DropdownItem) => (
                          <Link
                            key={item.key}
                            to={item.href}
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-start gap-3 p-3 rounded-lg hover:bg-zion-purple/20 transition-colors group"
                          >
                            <div className="flex-shrink-0 w-8 h-8 bg-zion-purple/20 rounded-lg flex items-center justify-center group-hover:bg-zion-purple/30 transition-colors">
                              {item.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="text-white font-medium text-sm group-hover:text-zion-cyan transition-colors">
                                {item.name}
                              </h4>
                              <p className="text-zion-slate-light text-xs mt-1 leading-relaxed">
                                {item.description}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                      
                      {/* View All Services Link */}
                      <div className="mt-4 pt-4 border-t border-zion-purple/20">
                        <Link
                          to="/services"
                          onClick={() => setActiveDropdown(null)}
                          className="flex items-center justify-center gap-2 w-full px-4 py-2 bg-zion-purple/20 hover:bg-zion-purple/30 text-zion-cyan hover:text-white rounded-lg transition-colors text-sm font-medium"
                        >
                          View All Services
                          <ChevronDown className="h-4 w-4 rotate-[-90deg]" />
                        </Link>
                      </div>
                    </div>
=======
                  {link.name}
                  <ChevronDown className="ml-1 h-3 w-3" />
                </button>
                
                {activeDropdown === link.key && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-zion-blue-dark border border-zion-purple/20 rounded-md shadow-lg py-2 z-50">
                    {link.dropdownItems?.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        className="block px-4 py-2 text-sm text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10 transition-colors"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
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
            )}
=======
  
  return (
    <nav className={cn("navbar ml-6 hidden md:flex", className)}>
      <ul className="flex items-center gap-1">
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
=======
          </li>
        ))}
        
            onMouseEnter={() => setActiveDropdown('company')}
            onMouseLeave={() => setActiveDropdown(null)}
            className="inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
          >
            Company
            <ChevronDown className="ml-1 h-4 w-4" />
          </button>
          {activeDropdown === 'company' && (
            <div
              onMouseEnter={() => setActiveDropdown('company')}
              onMouseLeave={() => setActiveDropdown(null)}
              className="absolute top-full left-0 mt-1 w-48 bg-zion-blue-dark border border-zion-blue-light rounded-lg shadow-lg py-2 z-50"
            >
              {companyLinks.map((link) => (
                <Link
                  key={link.key}
                  to={link.href}
                  className="block px-4 py-2 text-sm text-zion-slate-light hover:bg-zion-purple/10 hover:text-zion-cyan transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          )}
        </li>

        {/* Tools dropdown */}
        <li className="relative" ref={toolsRef}>
          <button
            onClick={() => setToolsOpen(!toolsOpen)}
            className={cn(
              "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors",
              toolsOpen
                ? "bg-zion-purple/20 text-zion-cyan"
                : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
            )}
          >
        {/* Support Dropdown */}
        <li className="relative">
          <button
            onMouseEnter={() => setActiveDropdown('support')}
            onMouseLeave={() => setActiveDropdown(null)}
            className="inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
          >
            Support
            <ChevronDown className="ml-1 h-4 w-4" />
          </button>
          {activeDropdown === 'support' && (
            <div
              onMouseEnter={() => setActiveDropdown('support')}
              onMouseLeave={() => setActiveDropdown(null)}
              className="absolute top-full left-0 mt-1 w-48 bg-zion-blue-dark border border-zion-blue-light rounded-lg shadow-lg py-2 z-50"
            >
              {supportLinks.map((link) => (
                <Link
                  key={link.key}
                  to={link.href}
                  className="block px-4 py-2 text-sm text-zion-slate-light hover:bg-zion-purple/10 hover:text-zion-cyan transition-colors"
                >
                  {link.name}
                </Link>
              ))}
=======
            Tools
            <ChevronDown className={cn("ml-1 h-4 w-4 transition-transform", toolsOpen && "rotate-180")} />
          </button>
          
          {toolsOpen && (
            <div className="absolute top-full left-0 mt-1 w-48 bg-zion-blue-dark border border-zion-blue-light rounded-md shadow-lg py-2 z-50">
              <Link
                to="/ai-matcher"
                className="block px-4 py-2 text-sm text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10"
                onClick={() => setToolsOpen(false)}
              >
                AI Matcher
              </Link>
              <Link
                to="/content-generator"
                className="block px-4 py-2 text-sm text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10"
                onClick={() => setToolsOpen(false)}
              >
                Content Generator
              </Link>
              <Link
                to="/portfolio-builder"
                className="block px-4 py-2 text-sm text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10"
                onClick={() => setToolsOpen(false)}
              >
                Portfolio Builder
              </Link>
              <Link
                to="/service-description-generator"
                className="block px-4 py-2 text-sm text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10"
                onClick={() => setToolsOpen(false)}
              >
                Service Generator
              </Link>
            </div>
          )}
        </li>
        
=======
          </li>
        ))}
        
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
              )}
            >
              <MessageSquare className="w-4 h-4 mr-1" />
              {t('nav.messages')}
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-zion-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
=======
                <span className="absolute -top-1 -right-1 bg-zion-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {unreadCount}
                </span>
              )}
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
