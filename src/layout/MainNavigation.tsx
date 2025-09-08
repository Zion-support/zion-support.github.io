
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/useAuth";
import { MessageSquare, ChevronDown, Users, Briefcase, Settings, BarChart3 } from "lucide-react";
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
=======
>>>>>>> origin/cursor/expand-services-and-deploy-updates-f53f
import { MessageSquare, ChevronDown, Brain, Shield, Cloud, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState, useRef, useEffect } from "react";
=======
import { MessageSquare, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState } from "react";
=======
import { MessageSquare, ChevronDown, Users, Settings, HelpCircle, FileText } from "lucide-react";
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
import { MessageSquare, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState } from "react";
=======
import { MessageSquare, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState } from "react";
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-and-deploy-updates-f53f
=======
import { useTranslation } from "react-i18next";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
=======
>>>>>>> origin/cursor/expand-services-and-deploy-updates-f53f

interface MainNavigationProps {
  isAdmin?: boolean;
  unreadCount?: number;
  className?: string;
}

interface NavigationLink {
  key: string;
  href: string;
  name: string;
  matches: (path: string) => boolean;
  dropdown?: { href: string; name: string; }[];
}

export function MainNavigation({ isAdmin = false, unreadCount = 0, className }: MainNavigationProps) {
  const { user } = useAuth();
  const isAuthenticated = !!user;
  const location = useLocation();
  const { t } = useTranslation();
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
=======

>>>>>>> origin/cursor/expand-services-and-deploy-updates-f53f
  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
<<<<<<< HEAD
        setActiveDropdown(null);
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
=======

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
=======
>>>>>>> origin/cursor/expand-services-and-deploy-updates-f53f
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
=======
=======
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
=======
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
=======
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
=======
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (dropdownName: string) => {
    if (activeDropdown === dropdownName) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdownName);
    }
  };

  const isActive = (path: string) => location.pathname === path;

  // Align to live site routes discovered in sitemap
  const navigationItems = [
    { key: 'home', href: '/', label: t('nav.home'), icon: null },
    { key: 'about', href: '/about', label: t('nav.about'), icon: null },
    { key: 'solutions', href: '/solutions', label: t('nav.solutions') ?? 'Solutions', icon: null },
    { key: 'services', href: '/services', label: t('nav.services'), icon: <ChevronDown className="w-4 h-4 ml-1" />, hasDropdown: true, dropdownItems: [
      { key: 'ai', href: '/services/ai', label: t('nav.aiServices') ?? 'AI', icon: <Brain className="w-4 h-4" />, description: t('nav.aiServicesDesc') },
      { key: 'cloud', href: '/services/cloud', label: t('nav.cloud') ?? 'Cloud', icon: <Cloud className="w-4 h-4" />, description: t('nav.cloudDesc') },
      { key: 'cybersecurity', href: '/services/cybersecurity', label: t('nav.cybersecurity') ?? 'Cybersecurity', icon: <Shield className="w-4 h-4" />, description: t('nav.cybersecurityDesc') },
      { key: 'infrastructure', href: '/services/infrastructure', label: t('nav.infrastructure') ?? 'Infrastructure', icon: <Zap className="w-4 h-4" />, description: t('nav.infrastructureDesc') },
      { key: 'transformation', href: '/services/transformation', label: t('nav.transformation') ?? 'Transformation', icon: <FileText className="w-4 h-4" />, description: t('nav.transformationDesc') },
      { key: 'consulting', href: '/services/consulting', label: t('nav.consulting') ?? 'Consulting', icon: <FileText className="w-4 h-4" />, description: t('nav.consultingDesc') }
    ]},
    { key: 'research', href: '/research-development', label: t('nav.research') ?? 'R&D', icon: null },
    { key: 'case-studies', href: '/case-studies', label: t('nav.caseStudies') ?? 'Case Studies', icon: null },
    { key: 'news', href: '/news', label: t('nav.news') ?? 'News', icon: null },
    { key: 'events', href: '/events', label: t('nav.events') ?? 'Events', icon: null },
    { key: 'careers', href: '/careers', label: t('nav.careers') ?? 'Careers', icon: null },
    { key: 'contact', href: '/contact', label: t('nav.contact'), icon: null }
  ];

  const adminItems = [
    { key: 'dashboard', href: '/dashboard', label: t('nav.dashboard'), icon: <BarChart3 className="w-4 h-4" /> },
    { key: 'admin', href: '/admin', label: t('nav.admin'), icon: <Settings className="w-4 h-4" /> }
  ];

  const userItems = [
    { key: 'profile', href: '/dashboard/profile', label: t('nav.profile'), icon: <Users className="w-4 h-4" /> },
    { key: 'projects', href: '/dashboard/projects', label: t('nav.projects'), icon: <Briefcase className="w-4 h-4" /> },
    { key: 'help', href: '/help', label: t('nav.help'), icon: <HelpCircle className="w-4 h-4" /> }
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
=======
  const serviceLinks = [
    { key: 'ai-analytics', href: '/ai-analytics-dashboard', name: 'AI Analytics' },
    { key: 'ai-content', href: '/ai-content-generator', name: 'AI Content Generator' },
    { key: 'cybersecurity', href: '/cybersecurity-services', name: 'Cybersecurity' },
    { key: 'cloud-migration', href: '/cloud-migration-services', name: 'Cloud Migration' },
    { key: 'it-onsite', href: '/it-onsite-services', name: 'IT Onsite Services' }
  ];

  let links = baseLinks.map(link => ({ ...link, name: t(`nav.${link.key}`) }));
=======
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
=======
      name: 'About',
      matches: (path: string) => path.startsWith('/about') || path === '/careers' || path === '/contact'
    }
  ];

  let links = baseLinks;
=======
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
=======
  const toggleDropdown = (key: string) => {
    setActiveDropdown(activeDropdown === key ? null : key);
  };

  const isDropdownActive = (key: string) => activeDropdown === key;
  
  return (
    <nav className={cn("navbar ml-6 hidden lg:flex", className)} ref={dropdownRef}>
      <ul className="flex items-center gap-1">
<<<<<<< HEAD
<<<<<<< HEAD
=======
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
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
=======
>>>>>>> origin/cursor/expand-services-and-deploy-updates-f53f
          <li key={link.key} className="relative" onMouseLeave={handleDropdownClose}>
=======
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
=======

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
=======
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
              <Link
                to="/services"
                className="block px-4 py-2 text-sm text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10 transition-colors"
              >
                All Services
              </Link>
              <Link
                to="/it-onsite-services"
                className="block px-4 py-2 text-sm text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10 transition-colors"
              >
                IT Onsite Services
              </Link>
              <Link
                to="/green-it"
                className="block px-4 py-2 text-sm text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10 transition-colors"
              >
                Green IT Solutions
              </Link>
              <Link
                to="/zion-hire-ai"
                className="block px-4 py-2 text-sm text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10 transition-colors"
              >
                AI Hiring Solutions
              </Link>
            </div>
          )}
        </li>
        
        {/* Company Dropdown */}
        <li className="relative">
          <button
            onClick={() => setIsCompanyOpen(!isCompanyOpen)}
            onMouseEnter={() => setIsCompanyOpen(true)}
            onMouseLeave={() => setIsCompanyOpen(false)}
            className={cn(
              "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors",
              location.pathname === '/about' || location.pathname === '/careers' || location.pathname === '/partners' || location.pathname === '/contact'
                ? "bg-zion-purple/20 text-zion-cyan"
                : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
            )}
          >
            Company
            <ChevronDown className="ml-1 h-4 w-4" />
          </button>
          
          {isCompanyOpen && (
            <div
              className="absolute top-full left-0 mt-1 w-48 bg-zion-blue-dark border border-zion-purple/20 rounded-md shadow-lg py-2 z-50"
              onMouseEnter={() => setIsCompanyOpen(true)}
              onMouseLeave={() => setIsCompanyOpen(false)}
            >
              <Link
                to="/about"
                className="block px-4 py-2 text-sm text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10 transition-colors"
              >
                About Us
              </Link>
              <Link
                to="/careers"
                className="block px-4 py-2 text-sm text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10 transition-colors"
              >
                Careers
              </Link>
              <Link
                to="/partners"
                className="block px-4 py-2 text-sm text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10 transition-colors"
              >
                Partners
              </Link>
              <Link
                to="/contact"
                className="block px-4 py-2 text-sm text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10 transition-colors"
              >
                Contact
              </Link>
              <Link
                to="/blog"
                className="block px-4 py-2 text-sm text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10 transition-colors"
              >
                Blog
              </Link>
            </div>
          )}
        </li>
        
        {/* More dropdown */}
        <li className="relative">
          <div ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className={cn(
              "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors",
              dropdownOpen
                ? "bg-zion-purple/20 text-zion-cyan"
                : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
            )}
          >
            More
            <ChevronDown className={cn("ml-1 w-4 h-4 transition-transform", dropdownOpen && "rotate-180")} />
          </button>
          
          {dropdownOpen && (
            <div className="absolute top-full left-0 mt-1 w-64 bg-zion-blue-dark border border-zion-purple/20 rounded-lg shadow-xl z-50">
              <div className="p-2">
                {moreLinks.map((link) => (
                  <Link
                    key={link.key}
                    to={link.href}
                    onClick={() => setDropdownOpen(false)}
                    className="flex items-start gap-3 p-3 rounded-md text-white hover:bg-zion-purple/10 transition-colors"
                  >
                    <div className="text-zion-cyan mt-0.5">
                      {link.icon}
                    </div>
                    <div>
                      <div className="font-medium text-sm">{t(`nav.${link.key}`)}</div>
                      <div className="text-xs text-zion-slate-light">{link.description}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
          </div>
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-and-deploy-updates-f53f
=======
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
=======
>>>>>>> origin/cursor/expand-services-and-deploy-updates-f53f
        </li>
        
        {/* Messages link with unread counter */}
        {isAuthenticated && (
          <li>
            <Link
              to="/messages"
              className={cn(
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-and-deploy-updates-f53f
                "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors relative",
                location.pathname === "/messages" || location.pathname === "/inbox"
                  ? "bg-zion-purple/20 text-zion-cyan"
                  : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
<<<<<<< HEAD
=======
                "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-all duration-300 relative",
                location.pathname === "/messages" || location.pathname === "/inbox"
                  ? "bg-zion-purple/20 text-zion-cyan border border-zion-purple/30 shadow-lg shadow-zion-purple/20"
                  : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan hover:border hover:border-zion-purple/20"
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
=======
>>>>>>> origin/cursor/expand-services-and-deploy-updates-f53f
              )}
              onClick={closeDropdown}
            >
              <MessageSquare className="w-4 h-4 mr-1" />
              Messages
              {unreadCount > 0 && (
<<<<<<< HEAD
<<<<<<< HEAD
                <span className="absolute -top-1 -right-1 bg-zion-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
=======
                <span className="absolute -top-1 -right-1 bg-zion-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-ace4
=======
                <span className="absolute -top-1 -right-1 bg-zion-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
>>>>>>> origin/cursor/expand-services-and-deploy-updates-f53f
                  {unreadCount}
                </span>
              )}
            </Link>
          </li>
        )}

        {/* Request Quote CTA */}
        <li>
          <Link
            to="/request-quote"
            className="inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium bg-zion-purple hover:bg-zion-purple/80 text-white transition-colors"
          >
            Get Quote
          </Link>
        </li>
      </ul>
    </nav>
  );
}
