
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/useAuth";
import { MessageSquare, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState, useRef, useEffect } from "react";

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

  const baseLinks = [
    {
      key: 'home',
      href: '/',
      name: 'Home',
      matches: (path: string) => path === '/'
    },
    {
      key: 'services',
      href: '/services',
      name: 'Services',
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
      name: 'Solutions',
      matches: (path: string) => path.startsWith('/solutions'),
      hasDropdown: true,
      dropdownItems: [
        { name: 'Enterprise Solutions', href: '/solutions/enterprise' },
        { name: 'Healthcare Solutions', href: '/solutions/healthcare' },
        { name: 'Financial Solutions', href: '/solutions/financial' },
        { name: 'Manufacturing Solutions', href: '/solutions/manufacturing' },
        { name: 'Government Solutions', href: '/government-technology-solutions' }
      ]
    },
    {
      key: 'marketplace',
      href: '/marketplace',
      name: 'Marketplace',
      matches: (path: string) => path.startsWith('/marketplace')
    },
    {
      key: 'talent',
      href: '/talent',
      name: 'Talent',
      matches: (path: string) => path.startsWith('/talent') && !path.includes('/talent-dashboard')
    },
    {
      key: 'about',
      href: '/about',
      name: 'About',
      matches: (path: string) => path.startsWith('/about') || path === '/mission' || path === '/team'
    },
    {
      key: 'contact',
      href: '/contact',
      name: 'Contact',
      matches: (path: string) => path.startsWith('/contact') || path === '/request-quote'
    }
  ];

  const adminLinks = [
    {
      key: 'admin-dashboard',
      href: '/admin/dashboard',
      name: 'Admin Dashboard',
      matches: (path: string) => path.startsWith('/admin')
    },
    {
      key: 'user-management',
      href: '/admin/users',
      name: 'User Management',
      matches: (path: string) => path.startsWith('/admin/users')
    },
    {
      key: 'analytics',
      href: '/admin/analytics',
      name: 'Analytics',
      matches: (path: string) => path.startsWith('/admin/analytics')
    }
  ];

  const links = isAdmin ? [...baseLinks, ...adminLinks] : baseLinks;

  const isActive = (link: any) => link.matches(location.pathname);

  return (
    <nav className={cn("flex items-center space-x-6", className)} ref={dropdownRef}>
      {links.map((link) => (
        <div key={link.key} className="relative">
          {link.hasDropdown ? (
            <div className="relative">
              <button
                onClick={() => setActiveDropdown(activeDropdown === link.key ? null : link.key)}
                className={cn(
                  "flex items-center space-x-1 px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  isActive(link)
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                )}
              >
                {link.name}
                <ChevronDown className={cn(
                  "h-4 w-4 transition-transform",
                  activeDropdown === link.key ? "rotate-180" : ""
                )} />
              </button>
              
              {activeDropdown === link.key && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-background border border-border rounded-md shadow-lg z-50">
                  <div className="py-1">
                    {link.dropdownItems?.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors"
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
                isActive(link)
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-primary hover:bg-primary/5"
              )}
            >
              {link.name}
            </Link>
          )}
        </div>
      ))}
      
      {isAuthenticated && (
        <Link
          to="/dashboard"
          className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
        >
          <MessageSquare className="h-4 w-4" />
          {unreadCount > 0 && (
            <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-red-600 rounded-full">
              {unreadCount}
            </span>
          )}
        </Link>
      )}
    </nav>
  );
}
