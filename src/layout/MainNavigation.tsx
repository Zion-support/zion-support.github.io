
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
      key: 'about',
      href: '/about',
      name: 'About',
      matches: (path: string) => path.startsWith('/about')
    },
    {
      key: 'services',
      href: '/services',
      name: 'Services',
      matches: (path: string) => path.startsWith('/services'),
      dropdown: [
        { href: '/services', name: 'All Services' },
        { href: '/ai-services', name: 'AI Services' },
        { href: '/it-services', name: 'IT Services' },
        { href: '/micro-saas', name: 'Micro SaaS' },
        { href: '/revolutionary-services-2025', name: 'Revolutionary Services 2025' }
      ]
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
    },
    {
      key: 'settings',
      href: '/admin/settings',
      name: 'Settings',
      matches: (path: string) => path.startsWith('/admin/settings')
    }
  ];

  const isActive = (link: NavigationLink) => link.matches(location.pathname);

  const toggleDropdown = (key: string) => {
    if (activeDropdown === key) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(key);
    }
  };

  return (
    <nav className={cn("bg-white shadow-sm border-b", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">Z</span>
                </div>
                <span className="ml-2 text-xl font-bold text-gray-900">Zion Tech Group</span>
              </div>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {baseLinks.map((link) => (
              <div key={link.key} className="relative">
                {link.dropdown ? (
                  <div className="relative">
                    <button
                      onClick={() => toggleDropdown(link.key)}
                      className={cn(
                        "flex items-center space-x-1 px-3 py-2 text-sm font-medium rounded-md transition-colors",
                        isActive(link)
                          ? "text-blue-600 bg-blue-50"
                          : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                      )}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    
                    {activeDropdown === link.key && (
                      <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50">
                        {link.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.href}
                            to={dropdownItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {dropdownItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={link.href}
                    className={cn(
                      "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                      isActive(link)
                        ? "text-blue-600 bg-blue-50"
                        : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                    )}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Right side - Auth & Admin */}
          <div className="flex items-center space-x-4">
            {/* Messages */}
            <Link
              to="/messages"
              className="relative p-2 text-gray-400 hover:text-gray-500 transition-colors"
            >
              <MessageSquare className="w-5 h-5" />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {unreadCount}
                </span>
              )}
            </Link>

            {/* Admin Links */}
            {isAdmin && (
              <div className="hidden md:flex items-center space-x-4">
                {adminLinks.map((link) => (
                  <Link
                    key={link.key}
                    to={link.href}
                    className={cn(
                      "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                      isActive(link)
                        ? "text-blue-600 bg-blue-50"
                        : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            )}

            {/* User Menu */}
            {isAuthenticated ? (
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center space-x-2 p-2 text-gray-400 hover:text-gray-500 transition-colors"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-medium text-sm">
                      {user?.name?.charAt(0) || user?.email?.charAt(0) || 'U'}
                    </span>
                  </div>
                  <ChevronDown className="w-4 h-4" />
                </button>

                {dropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50">
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Profile
                    </Link>
                    <Link
                      to="/settings"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Settings
                    </Link>
                    <Link
                      to="/logout"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Logout
                    </Link>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link
                  to="/login"
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
