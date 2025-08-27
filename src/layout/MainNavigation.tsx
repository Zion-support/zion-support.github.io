
import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/useAuth";
import { MessageSquare, ChevronDown, Users, Briefcase, Settings, BarChart3, Brain, Shield, Cloud, Zap, HelpCircle, FileText } from "lucide-react";
import { useTranslation } from "react-i18next";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function MainNavigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const { t } = useTranslation();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const baseLinks: NavigationLink[] = [
    {
      key: 'home',
      href: '/',
      name: t('nav.home', 'Home'),
      matches: (path: string) => path === '/'
    },
    {
      key: 'about',
      href: '/about',
      name: t('nav.about', 'About'),
      matches: (path: string) => path.startsWith('/about')
    },
    {
      key: 'services',
      href: '/services',
      name: t('nav.services', 'Services'),
      matches: (path: string) => path.startsWith('/services'),
      dropdown: [
        { href: '/services/ai', name: 'AI Solutions' },
        { href: '/services/cloud', name: 'Cloud & DevOps' },
        { href: '/services/cybersecurity', name: 'Cybersecurity' },
        { href: '/services/infrastructure', name: 'IT Infrastructure' },
        { href: '/services/transformation', name: 'Digital Transformation' },
        { href: '/services/consulting', name: 'Consulting' },
        { href: '/services/quantum-ai', name: 'Quantum AI' }
      ]
    },
    {
      key: 'solutions',
      href: '/ai-solutions',
      name: t('nav.solutions', 'Solutions'),
      matches: (path: string) => path.startsWith('/ai-solutions') || path.startsWith('/quantum-') || path.startsWith('/autonomous-'),
      dropdown: [
        { href: '/ai-solutions', name: 'AI Solutions' },
        { href: '/quantum-neural-network-platform', name: 'Quantum Neural Network' },
        { href: '/autonomous-business-operations-platform', name: 'Autonomous Operations' },
        { href: '/ai-powered-it-asset-management', name: 'IT Asset Management' },
        { href: '/soc2-compliance-automation', name: 'SOC2 Compliance' },
        { href: '/ai-autonomous-research-assistant', name: 'AI Research Assistant' },
        { href: '/5g-enterprise-solutions', name: '5G Enterprise' }
      ]
    },
    {
      key: 'company',
      href: '/about',
      name: t('nav.company', 'Company'),
      matches: (path: string) => path.startsWith('/about') || path.startsWith('/team') || path.startsWith('/careers') || path.startsWith('/partners'),
      dropdown: [
        { href: '/about', name: 'About Us' },
        { href: '/team', name: 'Our Team' },
        { href: '/careers', name: 'Careers' },
        { href: '/partners', name: 'Partners' },
        { href: '/case-studies', name: 'Case Studies' },
        { href: '/news', name: 'News & Updates' }
      ]
    },
    {
      key: 'resources',
      href: '/blog',
      name: t('nav.resources', 'Resources'),
      matches: (path: string) => path.startsWith('/blog') || path.startsWith('/docs') || path.startsWith('/white-papers') || path.startsWith('/webinars'),
      dropdown: [
        { href: '/blog', name: 'Blog' },
        { href: '/docs', name: 'Documentation' },
        { href: '/white-papers', name: 'White Papers' },
        { href: '/webinars', name: 'Webinars' },
        { href: '/events', name: 'Events' },
        { href: '/training', name: 'Training' }
      ]
    },
    {
      key: 'pricing',
      href: '/pricing',
      name: t('nav.pricing', 'Pricing'),
      matches: (path: string) => path.startsWith('/pricing')
    },
    {
      key: 'contact',
      href: '/contact',
      name: t('nav.contact', 'Contact'),
      matches: (path: string) => path.startsWith('/contact') || path.startsWith('/support') || path.startsWith('/help')
    }
  ];

  const adminLinks: NavigationLink[] = [
    {
      key: 'dashboard',
      href: '/admin/dashboard',
      name: 'Dashboard',
      matches: (path: string) => path.startsWith('/admin')
    },
    {
      key: 'analytics',
      href: '/admin/analytics',
      name: 'Analytics',
      matches: (path: string) => path.startsWith('/admin/analytics')
    },
    {
      key: 'users',
      href: '/admin/users',
      name: 'Users',
      matches: (path: string) => path.startsWith('/admin/users')
    }
  ];

  const links = isAdmin ? [...adminLinks, ...baseLinks] : baseLinks;

  const toggleDropdown = (key: string) => {
    setActiveDropdown(activeDropdown === key ? null : key);
  };

  return (
    <nav className={cn("flex items-center space-x-8", className)}>
      {links.map((link) => (
        <div key={link.key} className="relative" ref={dropdownRef}>
          {link.dropdown ? (
            <div className="relative">
              <button
                onClick={() => toggleDropdown(link.key)}
                className={cn(
                  "flex items-center space-x-1 px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  link.matches(location.pathname)
                    ? "text-zion-cyan bg-zion-purple/10"
                    : "text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10"
                )}
              >
                <span>{link.name}</span>
                <ChevronDown className={cn(
                  "h-4 w-4 transition-transform",
                  activeDropdown === link.key ? "rotate-180" : ""
                )} />
              </button>

              {activeDropdown === link.key && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-zion-blue-dark border border-zion-purple/20 rounded-md shadow-lg z-50">
                  <div className="py-2">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        className="block px-4 py-2 text-sm text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10 transition-colors"
                        onClick={() => setActiveDropdown(null)}
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
                "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                link.matches(location.pathname)
                  ? "text-zion-cyan bg-zion-purple/10"
                  : "text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10"
              )}
            >
              {link.name}
            </Link>
          )}
        </div>
      ))}

      {/* Quick Actions */}
      <div className="flex items-center space-x-4 ml-8">
        {isAuthenticated && (
          <>
            <Link
              to="/messages"
              className="relative p-2 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10 rounded-lg transition-colors"
            >
              <MessageSquare className="h-5 w-5" />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-zion-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {unreadCount}
                </span>
              )}
            </Link>
            <Link
              to="/dashboard"
              className="p-2 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10 rounded-lg transition-colors"
            >
              <BarChart3 className="h-5 w-5" />
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
