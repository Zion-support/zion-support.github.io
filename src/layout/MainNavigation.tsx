
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/useAuth";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { MessageSquare, Sparkles } from "lucide-react";
=======
import { MessageSquare, ChevronDown, Users, Briefcase, Settings, BarChart3 } from "lucide-react";
>>>>>>> origin/cursor/website-audit-and-enhancement-39b5
=======
import { MessageSquare, ChevronDown, Brain, Shield, Cloud, Zap } from "lucide-react";
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-4af2
import { useTranslation } from "react-i18next";
import { useState, useRef, useEffect } from "react";
=======
import { MessageSquare, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState } from "react";
>>>>>>> origin/cursor/website-audit-and-enhancement-915d

interface MainNavigationProps {
  isAdmin?: boolean;
  unreadCount?: number;
  className?: string;
}

interface DropdownItem {
  key: string;
  href: string;
  icon?: React.ReactNode;
  description?: string;
}

export function MainNavigation({ isAdmin = false, unreadCount = 0, className }: MainNavigationProps) {
  const { user } = useAuth();
  const isAuthenticated = !!user;
  const location = useLocation();
  const { t } = useTranslation();
<<<<<<< HEAD
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

<<<<<<< HEAD
=======
  // Close dropdown when clicking outside
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-4af2
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
=======
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
>>>>>>> origin/cursor/website-audit-and-enhancement-915d

  const baseLinks = [
    {
      key: 'home',
      href: '/',
      matches: (path: string) => path === '/'
    },
    {
<<<<<<< HEAD
<<<<<<< HEAD
      key: 'services',
      href: '/services',
<<<<<<< HEAD
      matches: (path: string) => path.startsWith('/services') || path.startsWith('/micro-saas-services')
    },
    {
      key: 'ai-services',
      href: '/micro-saas-services',
      matches: (path: string) => path.startsWith('/micro-saas-services')
=======
      matches: (path: string) => path.startsWith('/services') || path.startsWith('/it-onsite-services') || path.startsWith('/green-it')
>>>>>>> origin/cursor/website-audit-and-enhancement-50d5
=======
      key: 'about',
      href: '/about',
      matches: (path: string) => path.startsWith('/about')
=======
      key: 'about',
      href: '/about',
      matches: (path: string) => path === '/about'
>>>>>>> origin/cursor/website-audit-and-enhancement-ac60
    },
    {
      key: 'services',
      href: '/services',
      matches: (path: string) => path.startsWith('/services')
<<<<<<< HEAD
>>>>>>> origin/cursor/website-audit-and-enhancement-35e5
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-ac60
    },
    {
      key: 'marketplace',
      href: '/marketplace',
      matches: (path: string) => path.startsWith('/marketplace')
    },
    {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
      key: 'micro-saas',
      href: '/micro-saas-services',
      matches: (path: string) => path.startsWith('/micro-saas-services')
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-32be
    },
    {
      key: 'categories',
      href: '/categories',
      matches: (path: string) => path.startsWith('/categories')
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-8757
=======
      key: 'services',
      href: '/services',
      matches: (path: string) => path.startsWith('/services')
>>>>>>> origin/cursor/website-audit-and-enhancement-39b5
    },
    {
>>>>>>> origin/cursor/website-audit-and-enhancement-6726
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-35e5
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-ac60
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
      key: 'blog',
      href: '/blog',
      matches: (path: string) => path.startsWith('/blog')
    },
    {
      key: 'community',
      href: '/community',
      matches: (path: string) => path.startsWith('/community') || path.startsWith('/forum')
    },
    {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      key: 'about',
      href: '/about',
      matches: (path: string) => path === '/about'
=======
      key: 'pricing',
      href: '/pricing',
      matches: (path: string) => path === '/pricing'
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-8757
=======
      key: 'about',
      href: '/about',
      matches: (path: string) => path === '/about'
>>>>>>> origin/cursor/website-audit-and-enhancement-50d5
=======
      key: 'company',
      href: '/about',
      matches: (path: string) => path.startsWith('/about') || path.startsWith('/careers') || path.startsWith('/partners') || path.startsWith('/contact')
    },
    {
      key: 'blog',
      href: '/blog',
      matches: (path: string) => path.startsWith('/blog')
>>>>>>> origin/cursor/website-audit-and-enhancement-39b5
=======
      key: 'blog',
      href: '/blog',
      matches: (path: string) => path.startsWith('/blog')
>>>>>>> origin/cursor/website-audit-and-enhancement-35e5
=======
      key: 'contact',
      href: '/contact',
      matches: (path: string) => path === '/contact'
>>>>>>> origin/cursor/website-audit-and-enhancement-ac60
    }
  ];

<<<<<<< HEAD
  const marketplaceDropdown: DropdownItem[] = [
    { key: 'products', href: '/marketplace', icon: <Briefcase className="w-4 h-4" />, description: 'Browse products' },
    { key: 'services', href: '/services', icon: <Settings className="w-4 h-4" />, description: 'IT services' },
    { key: 'equipment', href: '/equipment', icon: <BarChart3 className="w-4 h-4" />, description: 'Tech equipment' },
    { key: 'green-it', href: '/green-it', icon: <Users className="w-4 h-4" />, description: 'Sustainable solutions' },
  ];

  const companyDropdown: DropdownItem[] = [
    { key: 'about', href: '/about', icon: <Users className="w-4 h-4" />, description: 'Learn about Zion' },
    { key: 'careers', href: '/careers', icon: <Briefcase className="w-4 h-4" />, description: 'Join our team' },
    { key: 'partners', href: '/partners', icon: <Users className="w-4 h-4" />, description: 'Partnership opportunities' },
    { key: 'contact', href: '/contact', icon: <MessageSquare className="w-4 h-4" />, description: 'Get in touch' },
=======
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
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-4af2
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
  const renderDropdown = (items: DropdownItem[], dropdownKey: string) => (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setActiveDropdown(activeDropdown === dropdownKey ? null : dropdownKey)}
        className={cn(
          "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors",
          location.pathname.startsWith(`/${dropdownKey}`)
            ? "bg-zion-purple/20 text-zion-cyan"
            : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
        )}
      >
        {t(`nav.${dropdownKey}`)}
        <ChevronDown className="ml-1 h-4 w-4" />
      </button>
      
      {activeDropdown === dropdownKey && (
        <div className="absolute top-full left-0 mt-2 w-64 rounded-md bg-zion-blue-dark border border-zion-purple/20 shadow-lg z-50">
          <div className="p-2">
            {items.map((item) => (
              <Link
                key={item.key}
                to={item.href}
                onClick={() => setActiveDropdown(null)}
                className="flex items-center p-3 rounded-md text-zion-slate-light hover:bg-zion-purple/10 hover:text-zion-cyan transition-colors"
              >
                {item.icon && <span className="mr-3">{item.icon}</span>}
                <div>
                  <div className="font-medium">{t(`nav.${item.key}`)}</div>
                  {item.description && (
                    <div className="text-sm text-zion-slate-light">{item.description}</div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
  
  return (
    <nav className={cn("navbar ml-6 hidden lg:flex", className)}>
=======
  const toggleDropdown = (key: string) => {
    setActiveDropdown(activeDropdown === key ? null : key);
  };

  const isDropdownActive = (key: string) => activeDropdown === key;
  
  return (
    <nav className={cn("navbar ml-6 hidden lg:flex", className)} ref={dropdownRef}>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-4af2
      <ul className="flex items-center gap-1">
<<<<<<< HEAD
        {links.map((link) => (
          <li key={link.name}>
            <Link
              to={link.href}
              className={cn(
<<<<<<< HEAD
                "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-all duration-300",
                link.matches(location.pathname)
                  ? "bg-zion-purple/20 text-zion-cyan border border-zion-purple/30 shadow-lg shadow-zion-purple/20"
                  : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan hover:border hover:border-zion-purple/20"
              )}
            >
              {link.key === 'pricing' && <Sparkles className="h-4 w-4 mr-2" />}
              {link.name}
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
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-32be
            </Link>
          </li>
        ))}
<<<<<<< HEAD
=======
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
>>>>>>> origin/cursor/website-audit-and-enhancement-39b5
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
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-4af2
        
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
        
        {/* Messages link with unread counter */}
        {isAuthenticated && (
          <li>
            <Link
              to="/messages"
              className={cn(
                "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-all duration-300 relative",
                location.pathname === "/messages" || location.pathname === "/inbox"
                  ? "bg-zion-purple/20 text-zion-cyan border border-zion-purple/30 shadow-lg shadow-zion-purple/20"
                  : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan hover:border hover:border-zion-purple/20"
              )}
            >
              <MessageSquare className="w-4 h-4 mr-1" />
              {t('nav.messages')}
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-zion-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
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
