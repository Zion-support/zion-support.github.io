
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/useAuth";
<<<<<<< HEAD
import { useState } from "react";
=======
import { useState } from "react";
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { MessageSquare, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
<<<<<<< HEAD
<<<<<<< HEAD
import { useState, useRef, useEffect } from "react";
=======
import { useState } from "react";
>>>>>>> origin/cursor/website-audit-and-enhancement-3805
=======
import { useState } from "react";
>>>>>>> origin/cursor/website-audit-and-enhancement-ba38
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
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
<<<<<<< HEAD
=======
import { MessageSquare } from "lucide-react";
import { useTranslation } from "react-i18next";
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-3b60
=======
import { MessageSquare } from "lucide-react";
=======
import { MessageSquare, Briefcase, Users, Settings, BarChart3 } from "lucide-react";
>>>>>>> origin/cursor/website-audit-and-enhancement-de4e
import { useTranslation } from "react-i18next";
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2
=======
import { MessageSquare, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState, useRef, useEffect } from "react";
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-b8ff
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7

interface MainNavigationProps {
  isAdmin?: boolean;
  unreadCount?: number;
  className?: string;
}

<<<<<<< HEAD
=======
<<<<<<< HEAD
interface DropdownItem {
  key: string;
  name: string;
  href: string;
  description: string;
  icon: React.ReactNode;
}

=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
export function MainNavigation({ isAdmin = false, unreadCount = 0, className }: MainNavigationProps) {
  const { user } = useAuth();
  const isAuthenticated = !!user;
  const location = useLocation();
  const { t } = useTranslation();
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  const dropdownRef = useRef<HTMLDivElement>(null);
=======
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-b8ff

=======
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-3805
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-ba38
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
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
<<<<<<< HEAD

=======
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-3b60
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7

=======

>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2
  const baseLinks = [
    {
      key: 'home',
      href: '/',
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      name: 'Home',
      matches: (path: string) => path === '/'
    },
    {
      key: 'micro-saas',
      href: '/micro-saas-services',
      matches: (path: string) => path.startsWith('/micro-saas-services')
    },
    {
      key: 'services',
      href: '/services',
      matches: (path: string) => path.startsWith('/services')
    },
    {
      key: 'talent',
      href: '/talent',
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
<<<<<<< HEAD
=======
=======
      name: 'Home',
      icon: null,
>>>>>>> origin/cursor/website-audit-and-enhancement-de4e
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
      matches: (path: string) => path === '/'
    },
    {
      key: 'marketplace',
      href: '/marketplace',
<<<<<<< HEAD
=======
      name: 'Marketplace',
      icon: Briefcase,
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
      matches: (path: string) => path.startsWith('/marketplace')
    },
    {
      key: 'services',
<<<<<<< HEAD
      href: '/services',
      matches: (path: string) => path.startsWith('/services') || path.startsWith('/ai-services') || path.startsWith('/it-services') || path.startsWith('/digital-marketing') || path.startsWith('/business-solutions')
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      href: '/services',
      matches: (path: string) => path.startsWith('/services') || path.startsWith('/ai-services') || path.startsWith('/it-services') || path.startsWith('/digital-marketing') || path.startsWith('/business-solutions')
=======
      href: '/enhanced-services',
      matches: (path: string) => path.startsWith('/services') || path.startsWith('/enhanced-services')
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-099c
=======
      href: '/services',
      matches: (path: string) => path.startsWith('/services') || path.startsWith('/micro-saas-services'),
      hasDropdown: true,
      dropdownItems: [
        { href: '/services', label: 'IT Services' },
        { href: '/micro-saas-services', label: 'Micro SAAS' },
        { href: '/it-onsite-services', label: 'Onsite Support' },
        { href: '/zion-hire-ai', label: 'AI Hiring' }
      ]
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-b8ff
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
    },
    {
      key: 'categories',
      href: '/categories',
      matches: (path: string) => path.startsWith('/categories')
<<<<<<< HEAD
=======
=======
      href: '/services',
      name: 'Services',
      icon: null,
      matches: (path: string) => path.startsWith('/services')
>>>>>>> origin/cursor/website-audit-and-enhancement-de4e
=======
      href: '/services',
      matches: (path: string) => path.startsWith('/services')
>>>>>>> origin/cursor/website-audit-and-enhancement-bbee
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
    },
    {
      key: 'talent',
      href: '/talent',
<<<<<<< HEAD
=======
      name: 'Talent',
      icon: Users,
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
      matches: (path: string) => path.startsWith('/talent') && !path.includes('/talent-dashboard')
    },
    {
      key: 'equipment',
      href: '/equipment',
<<<<<<< HEAD
=======
      name: 'Equipment',
      icon: null,
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
      matches: (path: string) => path.startsWith('/equipment')
    },
    {
      key: 'community',
      href: '/community',
<<<<<<< HEAD
=======
      name: 'Community',
      icon: null,
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
      matches: (path: string) => path.startsWith('/community') || path.startsWith('/forum')
    },
    {
<<<<<<< HEAD
      key: 'blog',
      href: '/blog',
      name: 'Blog',
      icon: null,
      matches: (path: string) => path.startsWith('/blog')
    },
    {
      key: 'about',
      href: '/about',
      name: 'About',
      icon: null,
=======
      key: 'about',
      href: '/about',
>>>>>>> origin/cursor/website-audit-and-enhancement-bbee
      matches: (path: string) => path.startsWith('/about')
    },
    {
      key: 'contact',
      href: '/contact',
<<<<<<< HEAD
      name: 'Contact',
      icon: null,
      matches: (path: string) => path === '/contact'
=======
      matches: (path: string) => path.startsWith('/contact')
>>>>>>> origin/cursor/website-audit-and-enhancement-bbee
    }
  ];

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
  let links = baseLinks.map(link => ({ ...link, name: t(`nav.${link.key}`) }));
=======
  let links = baseLinks;
>>>>>>> origin/cursor/website-audit-and-enhancement-de4e
  
  // Add authenticated-only links
  if (isAuthenticated) {
    links.push({
      key: 'dashboard',
      name: 'Dashboard',
      href: '/dashboard',
      icon: BarChart3,
      matches: (path: string) => path === '/dashboard' || path === '/client-dashboard' || path === '/talent-dashboard'
    });
  }
  
  // Add admin-only links
  if (isAdmin) {
    links.push({
      key: 'analytics',
      name: 'Analytics',
      href: '/analytics',
      icon: BarChart3,
      matches: (path: string) => path.startsWith('/analytics')
    });
  }
<<<<<<< HEAD
=======
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
  const toggleDropdown = (key: string) => {
    setActiveDropdown(activeDropdown === key ? null : key);
  };
=======
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
    <nav className={cn("navbar ml-6 hidden md:flex", className)} ref={dropdownRef}>
=======
    <nav className={cn("navbar ml-6 hidden lg:flex", className)} ref={dropdownRef}>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-da9e
      <ul className="flex items-center gap-1">
<<<<<<< HEAD
        {links.map((link) => (
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
    <nav className={cn("navbar ml-6 hidden lg:flex", className)} ref={dropdownRef}>
      <ul className="flex items-center gap-1">
        {links.map((link) => (
    <nav className={cn("navbar ml-6 hidden lg:flex", className)} ref={dropdownRef}>
      <ul className="flex items-center gap-1">
        {links.map((link) => (
=======
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-3b60
=======
    <nav className={cn("navbar ml-6 hidden md:flex", className)} ref={dropdownRef}>
      <ul className="flex items-center gap-1">
        {links.map((link) => (
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-b8ff
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
          <li key={link.name} className="relative">
            {link.hasDropdown ? (
              <div className="relative">
                <button
<<<<<<< HEAD
                  onClick={() => handleDropdownToggle(link.key)}
=======
<<<<<<< HEAD
<<<<<<< HEAD
                  onClick={() => toggleDropdown(link.key)}
=======
                  onClick={() => handleDropdownToggle(link.key)}
>>>>>>> origin/cursor/website-audit-and-enhancement-3b60
=======
                  onClick={() => setActiveDropdown(activeDropdown === link.key ? null : link.key)}
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-b8ff
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
                  className={cn(
                    "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors",
                    link.matches(location.pathname)
                      ? "bg-zion-purple/20 text-zion-cyan"
                      : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
                  )}
                >
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                  {link.name}
                  <ChevronDown className={cn("ml-1 w-3 h-3 transition-transform", activeDropdown === link.key && "rotate-180")} />
                </button>
                
                {activeDropdown === link.key && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-zion-blue-dark border border-zion-purple/20 rounded-lg shadow-xl z-50">
                    <div className="py-2">
=======
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-3b60
=======
                  {link.name}
                  <ChevronDown className="ml-1 w-3 h-3" />
                </button>
                
                {activeDropdown === link.key && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-zion-blue-dark border border-zion-blue-light rounded-lg shadow-xl z-50">
                    <div className="py-2">
                      {link.dropdownItems?.map((item) => (
                        <Link
                          key={item.href}
                          to={item.href}
                          className="block px-4 py-2 text-sm text-zion-slate-light hover:bg-zion-purple/10 hover:text-zion-cyan transition-colors"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-b8ff
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
                  </div>
                )}
              </div>
            ) : (
<<<<<<< HEAD
=======
        {links.map((link) => {
          const IconComponent = link.icon;
          return (
            <li key={link.name}>
>>>>>>> origin/cursor/website-audit-and-enhancement-de4e
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-b8ff
              <Link
                to={link.href}
                className={cn(
                  "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors",
                  link.matches(location.pathname)
                    ? "bg-zion-purple/20 text-zion-cyan"
                    : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
                )}
              >
<<<<<<< HEAD
<<<<<<< HEAD
                {link.name}
              </Link>
            )}
=======
<<<<<<< HEAD
  
  return (
    <nav className={cn("navbar ml-6 hidden md:flex", className)}>
      <ul className="flex items-center gap-1">
        {links.map((link) => (
=======
=======
  
  return (
    <nav className={cn("navbar hidden lg:flex", className)}>
      <ul className="flex items-center gap-2">
        {links.map((link) => (
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
          <li key={link.name}>
            <Link
              to={link.href}
              className={cn(
<<<<<<< HEAD
                "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors",
                link.matches(location.pathname)
                  ? "bg-zion-purple/20 text-zion-cyan"
                  : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
=======
<<<<<<< HEAD
<<<<<<< HEAD
                "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-all duration-300 hover:scale-105",
                link.matches(location.pathname)
                  ? "bg-zion-purple/20 text-zion-cyan neon-glow"
                  : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan hover-glow"
=======
                "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors",
                link.matches(location.pathname)
                  ? "bg-zion-purple/20 text-zion-cyan"
                  : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2
=======
                "inline-flex h-12 items-center justify-center rounded-xl px-6 text-sm font-medium transition-all duration-300 relative group",
                link.matches(location.pathname)
                  ? "bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 text-zion-cyan border border-zion-purple/30 shadow-lg shadow-zion-purple/20"
                  : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan hover:scale-105"
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-099c
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
              )}
            >
              {link.name}
              {link.matches(location.pathname) && (
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full"></div>
              )}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-zion-purple/5 to-zion-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-and-deploy-updates-6b7b
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
=======
          </li>
        ))}
=======
                {IconComponent && <IconComponent className="w-4 h-4 mr-2" />}
                {link.name}
              </Link>
            </li>
          );
        })}
>>>>>>> origin/cursor/website-audit-and-enhancement-de4e
        
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
<<<<<<< HEAD
          </li>
        ))}
        
=======
=======
                {link.name}
              </Link>
            )}
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-b8ff
          </li>
        ))}
        
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
        {/* Messages link with unread counter */}
        {isAuthenticated && (
          <li>
            <Link
              to="/messages"
              className={cn(
                "inline-flex h-12 items-center justify-center rounded-xl px-6 text-sm font-medium transition-all duration-300 relative group",
                location.pathname === "/messages" || location.pathname === "/inbox"
                  ? "bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 text-zion-cyan border border-zion-purple/30 shadow-lg shadow-zion-purple/20"
                  : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan hover:scale-105"
              )}
            >
<<<<<<< HEAD
              <MessageSquare className="w-4 h-4 mr-2" />
              {t('nav.messages')}
=======
              <MessageSquare className="w-4 h-4 mr-1" />
              Messages
>>>>>>> origin/cursor/website-audit-and-enhancement-de4e
              {unreadCount > 0 && (
<<<<<<< HEAD
                <span className="absolute -top-1 -right-1 bg-zion-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
=======
                <span className="absolute -top-1 -right-1 bg-zion-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                <span className="absolute -top-1 -right-1 bg-zion-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
=======
                <span className="absolute -top-1 -right-1 bg-zion-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
>>>>>>> origin/cursor/expand-services-and-deploy-updates-6b7b
=======
                <span className="absolute -top-1 -right-1 bg-zion-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2
=======
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center animate-pulse">
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-099c
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
                  {unreadCount}
                </span>
              )}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-zion-purple/5 to-zion-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
