
import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/useAuth";
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
  HelpCircle,
  FileText
} from "lucide-react";
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
      matches: (path: string) => path === '/'
    },
    {
      key: 'services',
      href: '/services',
      matches: (path: string) => path.startsWith('/services'),
      dropdown: [
        { href: '/ai-services', name: 'AI Services' },
        { href: '/it-services', name: 'IT Services' },
        { href: '/cloud-services', name: 'Cloud Services' },
        { href: '/cybersecurity', name: 'Cybersecurity' }
      ]
    },
    {
      key: 'marketplace',
      href: '/marketplace',
      matches: (path: string) => path.startsWith('/marketplace'),
      dropdown: [
        { href: '/marketplace/talent', name: 'Talent' },
        { href: '/marketplace/equipment', name: 'Equipment' },
        { href: '/marketplace/services', name: 'Services' }
      ]
    },
    {
      key: 'micro-saas',
      href: '/micro-saas',
      matches: (path: string) => path.startsWith('/micro-saas')
    },
    {
      key: 'company',
      href: '/about',
      matches: (path: string) => path.startsWith('/about') || path.startsWith('/team'),
      dropdown: [
        { href: '/about', name: 'About Us' },
        { href: '/team', name: 'Our Team' },
        { href: '/careers', name: 'Careers' }
      ]
    }
  ];

  const isActive = (link: NavigationLink) => link.matches(location.pathname);

  const handleDropdownToggle = (key: string) => {
    setActiveDropdown(activeDropdown === key ? null : key);
  };

  return (
    <nav className={cn("flex items-center space-x-8", className)} ref={dropdownRef}>
      {baseLinks.map((link) => (
        <div key={link.key} className="relative">
          {link.dropdown ? (
            <div className="relative">
              <button
                onClick={() => handleDropdownToggle(link.key)}
                className={cn(
                  "flex items-center space-x-1 px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200",
                  isActive(link)
                    ? "text-zion-cyan bg-zion-cyan/10"
                    : "text-zion-slate-light hover:text-zion-cyan hover:bg-zion-slate-light/10"
                )}
              >
                <span>{link.name}</span>
                <ChevronDown className={cn(
                  "w-4 h-4 transition-transform duration-200",
                  activeDropdown === link.key ? "rotate-180" : ""
                )} />
              </button>

              {activeDropdown === link.key && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-zion-slate-dark border border-zion-cyan/20 rounded-lg shadow-lg backdrop-blur-sm z-50">
                  <div className="py-2">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        className="block px-4 py-2 text-sm text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 transition-colors duration-200"
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
                "px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200",
                isActive(link)
                  ? "text-zion-cyan bg-zion-cyan/10"
                  : "text-zion-slate-light hover:text-zion-cyan hover:bg-zion-slate-light/10"
              )}
            >
              {link.name}
            </Link>
          )}
        </div>
      ))}

      {/* Admin Navigation */}
      {isAdmin && (
        <div className="relative">
          <button
            onClick={() => handleDropdownToggle('admin')}
            className="flex items-center space-x-1 px-3 py-2 text-sm font-medium text-zion-purple hover:text-zion-purple-light hover:bg-zion-purple/10 rounded-md transition-colors duration-200"
          >
            <Settings className="w-4 h-4" />
            <span>Admin</span>
            <ChevronDown className={cn(
              "w-4 h-4 transition-transform duration-200",
              activeDropdown === 'admin' ? "rotate-180" : ""
            )} />
          </button>

          {activeDropdown === 'admin' && (
            <div className="absolute top-full left-0 mt-1 w-48 bg-zion-slate-dark border border-zion-purple/20 rounded-lg shadow-lg backdrop-blur-sm z-50">
              <div className="py-2">
                <Link
                  to="/admin/dashboard"
                  className="block px-4 py-2 text-sm text-zion-slate-light hover:text-zion-purple hover:bg-zion-purple/10 transition-colors duration-200"
                  onClick={() => setActiveDropdown(null)}
                >
                  Dashboard
                </Link>
                <Link
                  to="/admin/users"
                  className="block px-4 py-2 text-sm text-zion-slate-light hover:text-zion-purple hover:bg-zion-purple/10 transition-colors duration-200"
                  onClick={() => setActiveDropdown(null)}
                >
                  Users
                </Link>
                <Link
                  to="/admin/settings"
                  className="block px-4 py-2 text-sm text-zion-slate-light hover:text-zion-purple hover:bg-zion-purple/10 transition-colors duration-200"
                  onClick={() => setActiveDropdown(null)}
                >
                  Settings
                </Link>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Help & Support */}
      <Link
        to="/help"
        className="px-3 py-2 text-sm font-medium text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 rounded-md transition-colors duration-200"
      >
        <HelpCircle className="w-4 h-4 inline mr-1" />
        Help
      </Link>
    </nav>
  );
}
