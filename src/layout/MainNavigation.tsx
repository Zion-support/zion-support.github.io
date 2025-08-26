
import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/useAuth";
import { MessageSquare, ChevronDown, Users, Briefcase, Settings, BarChart3, Brain, Shield, Cloud, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";
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
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const baseLinks: NavigationLink[] = [
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
        { href: '/services/ai', name: 'AI Services' },
        { href: '/services/it', name: 'IT Services' },
        { href: '/services/cloud', name: 'Cloud Services' }
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

  const adminLinks: NavigationLink[] = [
    {
      key: 'dashboard',
      href: '/admin',
      name: 'Dashboard',
      matches: (path: string) => path.startsWith('/admin')
    },
    {
      key: 'users',
      href: '/admin/users',
      name: 'Users',
      matches: (path: string) => path.startsWith('/admin/users')
    }
  ];

  const navigationLinks = isAdmin ? [...baseLinks, ...adminLinks] : baseLinks;

  return (
    <nav className={cn("flex items-center space-x-8", className)}>
      {navigationLinks.map((link) => (
        <div key={link.key} className="relative">
          {link.dropdown ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 transition-colors">
                  <span>{link.name}</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {link.dropdown.map((item) => (
                  <DropdownMenuItem key={item.href}>
                    <Link to={item.href} className="w-full">
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
                "text-gray-700 hover:text-gray-900 transition-colors",
                link.matches(location.pathname) && "text-blue-600 font-medium"
              )}
            >
              {link.name}
            </Link>
          )}
        </div>
      ))}
      
      {isAuthenticated && (
        <div className="flex items-center space-x-4">
          <Link to="/messages" className="relative">
            <MessageSquare className="h-5 w-5 text-gray-700 hover:text-gray-900 transition-colors" />
            {unreadCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {unreadCount}
              </span>
            )}
          </Link>
          <Link to="/profile">
            <Users className="h-5 w-5 text-gray-700 hover:text-gray-900 transition-colors" />
          </Link>
        </div>
      )}
    </nav>
  );
}
