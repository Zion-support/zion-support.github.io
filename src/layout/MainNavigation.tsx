
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/useAuth";
import { ChevronDown, Brain, Shield, Cloud, Zap, Store, Users, Building, Rocket } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState, useRef, useEffect } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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

  const navigationLinks: NavigationLink[] = [
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
      matches: (path: string) => path.startsWith('/services'),
      dropdown: [
        { href: '/services/ai', name: 'AI & Analytics' },
        { href: '/services/cybersecurity', name: 'Cybersecurity' },
        { href: '/services/cloud', name: 'Cloud & DevOps' },
        { href: '/services/infrastructure', name: 'IT Infrastructure' },
        { href: '/services/transformation', name: 'Digital Transformation' },
        { href: '/services/consulting', name: 'IT Consulting' }
      ]
    },
    {
      key: 'marketplace',
      href: '/marketplace',
      name: 'Marketplace',
      matches: (path: string) => path.startsWith('/marketplace'),
      dropdown: [
        { href: '/marketplace', name: 'All Products' },
        { href: '/categories', name: 'Categories' },
        { href: '/equipment', name: 'Equipment' },
        { href: '/green-it', name: 'Green IT' }
      ]
    },
    {
      key: 'talent',
      href: '/talent',
      name: 'Talent',
      matches: (path: string) => path.startsWith('/talent') && !path.includes('/talent-dashboard'),
      dropdown: [
        { href: '/talent', name: 'Browse Talent' },
        { href: '/talents', name: 'Talent Directory' },
        { href: '/hire-ai', name: 'Hire AI' }
      ]
    },
    {
      key: 'about',
      href: '/about',
      name: 'About',
      matches: (path: string) => path.startsWith('/about')
    },
    {
      key: 'contact',
      href: '/contact',
      name: 'Contact',
      matches: (path: string) => path.startsWith('/contact')
    }
  ];

  const handleDropdownToggle = (key: string) => {
    setActiveDropdown(activeDropdown === key ? null : key);
  };

  return (
    <nav className={cn("flex items-center space-x-8", className)} ref={dropdownRef}>
      {navigationLinks.map((link) => {
        const isActive = link.matches(location.pathname);
        const isDropdownOpen = activeDropdown === link.key;

        return (
          <div key={link.key} className="relative">
            {link.dropdown ? (
              <DropdownMenu open={isDropdownOpen} onOpenChange={() => handleDropdownToggle(link.key)}>
                <DropdownMenuTrigger asChild>
                  <button
                    className={cn(
                      "flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                      isActive
                        ? "text-zion-cyan bg-zion-purple/20"
                        : "text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10"
                    )}
                  >
                    {link.name}
                    <ChevronDown className={cn("w-4 h-4 transition-transform", isDropdownOpen && "rotate-180")} />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  className="w-56 bg-zion-blue-dark border border-zion-purple/30"
                >
                  {link.dropdown.map((item) => (
                    <DropdownMenuItem key={item.href} asChild>
                      <Link
                        to={item.href}
                        className="flex items-center gap-3 px-3 py-2 text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10 cursor-pointer"
                      >
                        {item.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                to={link.href}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  isActive
                    ? "text-zion-cyan bg-zion-purple/20"
                    : "text-zion-slate-light hover:text-zion-cyan hover:bg-zion-purple/10"
                )}
              >
                {link.name}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}
