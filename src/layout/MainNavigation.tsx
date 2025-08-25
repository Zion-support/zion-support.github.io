
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/useAuth";
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
=======
import { MessageSquare, Sparkles, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState, useRef, useEffect } from "react";
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-da9e
=======
import { MessageSquare, ChevronDown, Sparkles, Zap, Shield, Database, Cloud, Code, Users, HardDrive, Lightbulb } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState, useRef, useEffect } from "react";
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-681f
=======
import { MessageSquare, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState, useEffect, useRef } from "react";
>>>>>>> origin/cursor/website-audit-and-enhancement-76ca

interface MainNavigationProps {
  isAdmin?: boolean;
  unreadCount?: number;
  className?: string;
}

interface DropdownItem {
  key: string;
  name: string;
  href: string;
  description: string;
  icon: React.ReactNode;
}

export function MainNavigation({ isAdmin = false, unreadCount = 0, className }: MainNavigationProps) {
  const { user } = useAuth();
  const isAuthenticated = !!user;
  const location = useLocation();
  const { t } = useTranslation();
<<<<<<< HEAD
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  const dropdownRef = useRef<HTMLDivElement>(null);

=======
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-681f
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
>>>>>>> origin/cursor/website-audit-and-enhancement-76ca
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
<<<<<<< HEAD
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-3805
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-ba38
=======
  const dropdownRef = useRef<HTMLDivElement>(null);
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-da9e
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-681f
=======
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
>>>>>>> origin/cursor/website-audit-and-enhancement-76ca

  const baseLinks = [
    {
      key: 'home',
      href: '/',
<<<<<<< HEAD
      name: 'Home',
      matches: (path: string) => path === '/'
    },
    {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      key: 'services',
<<<<<<< HEAD
      href: '/services',
      matches: (path: string) => path.startsWith('/services') || path.includes('quantum') || path.includes('ai-autonomous'),
      hasDropdown: true,
      dropdownItems: [
        { name: 'All Services', href: '/services' },
        { name: 'AI & Autonomous Systems', href: '/services#ai-autonomous' },
        { name: 'Quantum Technology', href: '/services#quantum' },
        { name: 'IT Infrastructure', href: '/services#it-infrastructure' },
        { name: 'Cybersecurity', href: '/services#cybersecurity' },
        { name: 'Industry Solutions', href: '/services#industry-solutions' }
      ]
    },
    {
      key: 'solutions',
      href: '/solutions',
      matches: (path: string) => path.startsWith('/solutions'),
      hasDropdown: true,
      dropdownItems: [
        { name: 'Enterprise Solutions', href: '/solutions/enterprise' },
        { name: 'Healthcare Solutions', href: '/solutions/healthcare' },
        { name: 'Financial Solutions', href: '/solutions/financial' },
        { name: 'Manufacturing Solutions', href: '/solutions/manufacturing' },
        { name: 'Government Solutions', href: '/government-technology-solutions' }
      ]
=======
      href: '/services-hub',
      matches: (path: string) => path.startsWith('/services') || path.startsWith('/ai-services') || path.startsWith('/it-services') || path.startsWith('/digital-transformation')
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-4df9
=======
      key: 'about',
      href: '/about',
      matches: (path: string) => path === '/about'
>>>>>>> origin/cursor/website-audit-and-enhancement-a0eb
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
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-da9e
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
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-de94
      key: 'micro-saas',
      href: '/micro-saas-services',
      matches: (path: string) => path.startsWith('/micro-saas-services')
    },
    {
<<<<<<< HEAD
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-2048
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-de94
      key: 'marketplace',
      href: '/marketplace',
      name: 'Marketplace',
      matches: (path: string) => path.startsWith('/marketplace')
    },
    {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      key: 'services',
      href: '/services',
=======
      key: 'services',
      href: '/services',
      name: 'Services',
>>>>>>> origin/cursor/website-audit-and-enhancement-3805
=======
      key: 'services',
      href: '/services',
>>>>>>> origin/cursor/website-audit-and-enhancement-ba38
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
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-681f
=======
      key: 'services',
      href: '/services',
      matches: (path: string) => path.startsWith('/services')
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-de94
    },
    {
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-cbd5
      key: 'talent',
      href: '/talent',
      name: 'Talent',
      matches: (path: string) => path.startsWith('/talent') && !path.includes('/talent-dashboard')
    },
    {
      key: 'equipment',
      href: '/equipment',
      name: 'Equipment',
      matches: (path: string) => path.startsWith('/equipment')
=======
      key: 'services',
      href: '/services',
      matches: (path: string) => path.startsWith('/services') || path.startsWith('/ai-services') || path.startsWith('/it-services') || path.startsWith('/digital-marketing') || path.startsWith('/business-solutions')
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-7053
=======
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-a0eb
      key: 'services',
      href: '/services',
      matches: (path: string) => path.startsWith('/services')
    },
    {
<<<<<<< HEAD
      key: 'micro-saas',
      href: '/micro-saas-services',
      matches: (path: string) => path.startsWith('/micro-saas-services')
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-73d5
    },
    {
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-a0eb
=======
      key: 'micro-saas',
      href: '/micro-saas-services',
      matches: (path: string) => path.startsWith('/micro-saas-services')
    },
    {
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-eb69
      key: 'categories',
      href: '/categories',
      matches: (path: string) => path.startsWith('/categories')
=======
      key: 'services',
      href: '/services',
      matches: (path: string) => path.startsWith('/services')
>>>>>>> origin/cursor/website-audit-and-enhancement-5083
=======
      key: 'services',
      href: '/services',
      matches: (path: string) => path.startsWith('/services')
>>>>>>> origin/cursor/website-audit-and-enhancement-6664
=======
      key: 'services',
      href: '/services',
      matches: (path: string) => path.startsWith('/services') || path.startsWith('/it-onsite-services')
>>>>>>> origin/cursor/website-audit-and-enhancement-ab27
    },
    {
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-da9e
=======
      matches: (path: string) => path === '/'
    },
    {
      key: 'marketplace',
      href: '/marketplace',
<<<<<<< HEAD
      matches: (path: string) => path.startsWith('/marketplace')
    },
    {
      key: 'services',
      href: '/services',
      matches: (path: string) => path.startsWith('/services')
=======
      matches: (path: string) => path.startsWith('/marketplace') || path.startsWith('/categories') || path.startsWith('/equipment') || path.startsWith('/services')
>>>>>>> origin/cursor/website-audit-and-enhancement-7286
    },
    {
>>>>>>> origin/cursor/expand-services-and-deploy-updates-6b7b
      key: 'talent',
      href: '/talent',
      matches: (path: string) => path.startsWith('/talent') && !path.includes('/talent-dashboard')
    },
    {
<<<<<<< HEAD
<<<<<<< HEAD
      key: 'services',
      href: '/services',
      matches: (path: string) => path.startsWith('/services')
    },
    {
=======
>>>>>>> origin/cursor/expand-services-and-deploy-updates-6b7b
      key: 'equipment',
      href: '/equipment',
      matches: (path: string) => path.startsWith('/equipment')
    },
    {
<<<<<<< HEAD
<<<<<<< HEAD
      key: 'blog',
      href: '/blog',
      matches: (path: string) => path.startsWith('/blog')
    },
    {
>>>>>>> origin/cursor/website-audit-and-enhancement-a0eb
      key: 'community',
      href: '/community',
      name: 'Community',
      matches: (path: string) => path.startsWith('/community') || path.startsWith('/forum')
    },
    {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      key: 'about',
      href: '/about',
      matches: (path: string) => path === '/about'
=======
      key: 'about',
      href: '/about',
      matches: (path: string) => path.startsWith('/about')
>>>>>>> origin/cursor/website-audit-and-enhancement-5083
    },
    {
      key: 'contact',
      href: '/contact',
<<<<<<< HEAD
      matches: (path: string) => path === '/contact'
=======
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
>>>>>>> origin/cursor/website-audit-and-enhancement-cbd5
=======
      key: 'blog',
      href: '/blog',
      name: 'Blog',
      matches: (path: string) => path.startsWith('/blog')
>>>>>>> origin/cursor/website-audit-and-enhancement-3805
=======
      key: 'blog',
      href: '/blog',
      matches: (path: string) => path.startsWith('/blog')
>>>>>>> origin/cursor/website-audit-and-enhancement-ba38
=======
      matches: (path: string) => path.startsWith('/contact')
>>>>>>> origin/cursor/website-audit-and-enhancement-5083
=======
      key: 'blog',
      href: '/blog',
      matches: (path: string) => path.startsWith('/blog')
>>>>>>> origin/cursor/website-audit-and-enhancement-6664
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
>>>>>>> origin/cursor/website-audit-and-enhancement-b7ac
=======
      key: 'about',
      href: '/about',
      matches: (path: string) => path.startsWith('/about') || path.startsWith('/careers') || path.startsWith('/partners')
>>>>>>> origin/cursor/website-audit-and-enhancement-ab27
=======
=======
      key: 'ai-assistant',
      href: '/zion-hire-ai',
      matches: (path: string) => path.startsWith('/zion-hire-ai') || path.startsWith('/hire-ai')
    },
    {
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-681f
      key: 'community',
      href: '/community',
      matches: (path: string) => path.startsWith('/community') || path.startsWith('/forum')
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-and-deploy-updates-6b7b
=======
=======
      key: 'community',
      href: '/community',
      matches: (path: string) => path.startsWith('/community') || path.startsWith('/forum')
>>>>>>> origin/cursor/website-audit-and-enhancement-7286
    },
    {
      key: 'about',
      href: '/about',
      matches: (path: string) => path.startsWith('/about')
    },
    {
      key: 'contact',
      href: '/contact',
      matches: (path: string) => path.startsWith('/contact')
<<<<<<< HEAD
>>>>>>> origin/cursor/website-audit-and-enhancement-050f
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-7286
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
>>>>>>> origin/cursor/website-audit-and-enhancement-76ca
    }
  ];

  const companyLinks = [
<<<<<<< HEAD
    { key: 'about', href: '/about', name: 'About' },
=======
    { key: 'about', href: '/about', name: 'About Us' },
>>>>>>> origin/cursor/website-audit-and-enhancement-ba38
    { key: 'careers', href: '/careers', name: 'Careers' },
    { key: 'partners', href: '/partners', name: 'Partners' },
    { key: 'contact', href: '/contact', name: 'Contact' }
  ];

<<<<<<< HEAD
  const resourceLinks = [
    { key: 'help', href: '/help', name: 'Help Center' },
    { key: 'sitemap', href: '/sitemap', name: 'Sitemap' },
=======
  const supportLinks = [
    { key: 'faq', href: '/faq', name: 'FAQ' },
    { key: 'help', href: '/help', name: 'Help Center' },
>>>>>>> origin/cursor/website-audit-and-enhancement-ba38
    { key: 'green-it', href: '/green-it', name: 'Green IT' }
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

<<<<<<< HEAD
<<<<<<< HEAD
  const toggleDropdown = (key: string) => {
    setActiveDropdown(activeDropdown === key ? null : key);
  };
=======
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
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-da9e
=======
  const toggleDropdown = (key: string) => {
    setActiveDropdown(activeDropdown === key ? null : key);
  };
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-681f
  
  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path + '/');
  };

  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <nav className={cn("navbar ml-6 hidden md:flex", className)} ref={dropdownRef}>
=======
    <nav className={cn("navbar ml-6 hidden lg:flex", className)} ref={dropdownRef}>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-da9e
      <ul className="flex items-center gap-1">
        {links.map((link) => (
<<<<<<< HEAD
=======
    <nav className={cn("navbar ml-6 hidden lg:flex", className)} ref={dropdownRef}>
      <ul className="flex items-center gap-1">
        {links.map((link) => (
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-681f
          <li key={link.name} className="relative">
            {link.hasDropdown ? (
              <div className="relative">
                <button
                  onClick={() => toggleDropdown(link.key)}
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
                  <ChevronDown className={cn("ml-1 w-3 h-3 transition-transform", activeDropdown === link.key && "rotate-180")} />
                </button>
                
                {activeDropdown === link.key && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-zion-blue-dark border border-zion-purple/20 rounded-lg shadow-xl z-50">
                    <div className="py-2">
=======
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
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-681f
                    activeDropdown === link.key ? "rotate-180" : ""
                  )} />
                </button>
                
<<<<<<< HEAD
                {activeDropdown === link.key && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-zion-blue-dark border border-zion-purple/30 rounded-lg shadow-xl shadow-zion-purple/20 backdrop-blur-md z-50">
                    <div className="p-2">
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-da9e
                      {link.dropdownItems?.map((item, index) => (
                        <Link
                          key={index}
                          to={item.href}
<<<<<<< HEAD
                          className="block px-4 py-2 text-sm text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10 transition-colors"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {item.name}
=======
                          className="block px-4 py-3 text-sm text-white hover:bg-zion-purple/20 hover:text-zion-cyan rounded-md transition-colors"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {item.label}
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-da9e
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
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-681f
                    </div>
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
<<<<<<< HEAD
=======
          <li key={link.name}>
            <Link
              to={link.href}
              className={cn(
                "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-all duration-300 hover:scale-105",
                link.matches(location.pathname)
                  ? "bg-zion-purple/20 text-zion-cyan neon-glow"
                  : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan hover-glow"
              )}
            >
              {link.name}
            </Link>
>>>>>>> origin/cursor/expand-services-and-deploy-updates-6b7b
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-681f
          </li>
        ))}
        
<<<<<<< HEAD
        {/* Company Dropdown */}
        <li className="relative">
          <button
<<<<<<< HEAD
            onClick={() => setActiveDropdown(activeDropdown === 'company' ? null : 'company')}
            className={cn(
              "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors",
              isActive('/about') || isActive('/careers') || isActive('/partners') || isActive('/contact')
                ? "bg-zion-purple/20 text-zion-cyan"
                : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
            )}
=======
            onMouseEnter={() => setActiveDropdown('company')}
            onMouseLeave={() => setActiveDropdown(null)}
            className="inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
>>>>>>> origin/cursor/website-audit-and-enhancement-ba38
          >
            Company
            <ChevronDown className="ml-1 h-4 w-4" />
          </button>
<<<<<<< HEAD
          
          {activeDropdown === 'company' && (
            <div className="absolute top-full left-0 mt-1 w-48 bg-zion-blue-dark border border-zion-purple/20 rounded-md shadow-lg py-2 z-50">
=======
          {activeDropdown === 'company' && (
            <div
              onMouseEnter={() => setActiveDropdown('company')}
              onMouseLeave={() => setActiveDropdown(null)}
              className="absolute top-full left-0 mt-1 w-48 bg-zion-blue-dark border border-zion-blue-light rounded-lg shadow-lg py-2 z-50"
            >
>>>>>>> origin/cursor/website-audit-and-enhancement-ba38
              {companyLinks.map((link) => (
                <Link
                  key={link.key}
                  to={link.href}
<<<<<<< HEAD
                  className={cn(
                    "block px-4 py-2 text-sm text-white hover:bg-zion-purple/10 hover:text-zion-cyan transition-colors",
                    isActive(link.href) && "bg-zion-purple/20 text-zion-cyan"
                  )}
                  onClick={() => setActiveDropdown(null)}
=======
                  className="block px-4 py-2 text-sm text-zion-slate-light hover:bg-zion-purple/10 hover:text-zion-cyan transition-colors"
>>>>>>> origin/cursor/website-audit-and-enhancement-ba38
                >
                  {link.name}
                </Link>
              ))}
            </div>
          )}
        </li>

<<<<<<< HEAD
        {/* Resources Dropdown */}
        <li className="relative">
          <button
            onClick={() => setActiveDropdown(activeDropdown === 'resources' ? null : 'resources')}
            className={cn(
              "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors",
              isActive('/help') || isActive('/sitemap') || isActive('/green-it')
=======
        {/* Tools dropdown */}
        <li className="relative" ref={toolsRef}>
          <button
            onClick={() => setToolsOpen(!toolsOpen)}
            className={cn(
              "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors",
              toolsOpen
>>>>>>> origin/cursor/website-audit-and-enhancement-76ca
                ? "bg-zion-purple/20 text-zion-cyan"
                : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
            )}
          >
<<<<<<< HEAD
            Resources
            <ChevronDown className="ml-1 h-4 w-4" />
          </button>
          
          {activeDropdown === 'resources' && (
            <div className="absolute top-full left-0 mt-1 w-48 bg-zion-blue-dark border border-zion-purple/20 rounded-md shadow-lg py-2 z-50">
              {resourceLinks.map((link) => (
                <Link
                  key={link.key}
                  to={link.href}
                  className={cn(
                    "block px-4 py-2 text-sm text-white hover:bg-zion-purple/10 hover:text-zion-cyan transition-colors",
                    isActive(link.href) && "bg-zion-purple/20 text-zion-cyan"
                  )}
                  onClick={() => setActiveDropdown(null)}
=======
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
>>>>>>> origin/cursor/website-audit-and-enhancement-ba38
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
>>>>>>> origin/cursor/website-audit-and-enhancement-76ca
            </div>
          )}
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
              )}
            >
              <MessageSquare className="w-4 h-4 mr-1" />
              {t('nav.messages')}
              {unreadCount > 0 && (
<<<<<<< HEAD
                <span className="absolute -top-1 -right-1 bg-zion-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
=======
                <span className="absolute -top-1 -right-1 bg-zion-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
>>>>>>> origin/cursor/expand-services-and-deploy-updates-6b7b
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
