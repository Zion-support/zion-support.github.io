
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/useAuth";
import { MessageSquare, ChevronDown, Users, Briefcase, Settings, BarChart3, Brain, Shield, Cloud, Zap, HelpCircle, FileText } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState, useRef, useEffect } from "react";

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
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
        setIsServicesOpen(false);
        setIsCompanyOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = (dropdownName: string) => {
    if (activeDropdown === dropdownName) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdownName);
    }
  };

  const isActive = (path: string) => location.pathname === path;

  const navigationItems = [
    {
      key: 'home',
      href: '/',
      label: t('nav.home'),
      icon: null
    },
    {
      key: 'services',
      href: '/services',
      label: t('nav.services'),
      icon: <ChevronDown className="w-4 h-4 ml-1" />,
      hasDropdown: true,
      dropdownItems: [
        {
          key: 'ai-services',
          href: '/enhanced-services',
          label: t('nav.aiServices'),
          icon: <Brain className="w-4 h-4" />,
          description: t('nav.aiServicesDesc')
        },
        {
          key: 'it-services',
          href: '/it-onsite-services',
          label: t('nav.itServices'),
          icon: <Shield className="w-4 h-4" />,
          description: t('nav.itServicesDesc')
        },
        {
          key: 'micro-saas',
          href: '/micro-saas-services',
          label: t('nav.microSaas'),
          icon: <Cloud className="w-4 h-4" />,
          description: t('nav.microSaasDesc')
        },
        {
          key: 'equipment',
          href: '/equipment',
          label: t('nav.equipment'),
          icon: <Zap className="w-4 h-4" />,
          description: t('nav.equipmentDesc')
        }
      ]
    },
    {
      key: 'talent',
      href: '/talent',
      label: t('nav.talent'),
      icon: null
    },
    {
      key: 'marketplace',
      href: '/marketplace',
      label: t('nav.marketplace'),
      icon: null
    },
    {
      key: 'community',
      href: '/community',
      label: t('nav.community'),
      icon: null
    },
    {
      key: 'about',
      href: '/about',
      label: t('nav.about'),
      icon: null
    },
    {
      key: 'contact',
      href: '/contact',
      label: t('nav.contact'),
      icon: null
    }
  ];

  const adminItems = [
    {
      key: 'dashboard',
      href: '/dashboard',
      label: t('nav.dashboard'),
      icon: <BarChart3 className="w-4 h-4" />
    },
    {
      key: 'admin',
      href: '/admin',
      label: t('nav.admin'),
      icon: <Settings className="w-4 h-4" />
    }
  ];

  const userItems = [
    {
      key: 'profile',
      href: '/dashboard/profile',
      label: t('nav.profile'),
      icon: <Users className="w-4 h-4" />
    },
    {
      key: 'projects',
      href: '/dashboard/projects',
      label: t('nav.projects'),
      icon: <Briefcase className="w-4 h-4" />
    },
    {
      key: 'help',
      href: '/help',
      label: t('nav.help'),
      icon: <HelpCircle className="w-4 h-4" />
    }
  ];

  return (
    <nav className={cn("flex items-center space-x-6", className)}>
      {navigationItems.map((item) => (
        <div key={item.key} className="relative" ref={item.hasDropdown ? dropdownRef : undefined}>
          {item.hasDropdown ? (
            <button
              onClick={() => toggleDropdown(item.key)}
              className={cn(
                "flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
                isActive(item.href)
                  ? "text-zion-cyan bg-zion-blue-dark/20"
                  : "text-foreground hover:text-zion-cyan hover:bg-zion-blue-dark/10"
              )}
            >
              {item.label}
              {item.icon}
            </button>
          ) : (
            <Link
              to={item.href}
              className={cn(
                "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                isActive(item.href)
                  ? "text-zion-cyan bg-zion-blue-dark/20"
                  : "text-foreground hover:text-zion-cyan hover:bg-zion-blue-dark/10"
              )}
            >
              {item.label}
            </Link>
          )}

          {item.hasDropdown && activeDropdown === item.key && item.dropdownItems && (
            <div className="absolute top-full left-0 mt-2 w-64 bg-card border border-border rounded-lg shadow-lg z-50">
              <div className="py-2">
                {item.dropdownItems.map((dropdownItem) => (
                  <Link
                    key={dropdownItem.key}
                    to={dropdownItem.href}
                    className="flex items-start px-4 py-3 text-sm text-foreground hover:bg-accent transition-colors"
                    onClick={() => setActiveDropdown(null)}
                  >
                    {dropdownItem.icon && (
                      <span className="mr-3 mt-0.5 text-zion-cyan">
                        {dropdownItem.icon}
                      </span>
                    )}
                    <div>
                      <div className="font-medium">{dropdownItem.label}</div>
                      {dropdownItem.description && (
                        <div className="text-xs text-muted-foreground mt-1">
                          {dropdownItem.description}
                        </div>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Admin Navigation */}
      {isAdmin && (
        <div className="ml-6 pl-6 border-l border-border">
          <div className="flex items-center space-x-4">
            {adminItems.map((item) => (
              <Link
                key={item.key}
                to={item.href}
                className={cn(
                  "flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  isActive(item.href)
                    ? "text-zion-cyan bg-zion-blue-dark/20"
                    : "text-foreground hover:text-zion-cyan hover:bg-zion-blue-dark/10"
                )}
              >
                {item.icon && <span className="mr-2">{item.icon}</span>}
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* User Navigation */}
      {isAuthenticated && !isAdmin && (
        <div className="ml-6 pl-6 border-l border-border">
          <div className="flex items-center space-x-4">
            {userItems.map((item) => (
              <Link
                key={item.key}
                to={item.href}
                className={cn(
                  "flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors",
                  isActive(item.href)
                    ? "text-zion-cyan bg-zion-blue-dark/20"
                    : "text-foreground hover:text-zion-cyan hover:bg-zion-blue-dark/10"
                )}
              >
                {item.icon && <span className="mr-2">{item.icon}</span>}
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Messages */}
      {isAuthenticated && (
        <Link
          to="/dashboard/messages"
          className={cn(
            "relative px-3 py-2 text-sm font-medium rounded-md transition-colors",
            isActive('/dashboard/messages')
              ? "text-zion-cyan bg-zion-blue-dark/20"
              : "text-foreground hover:text-zion-cyan hover:bg-zion-blue-dark/10"
          )}
        >
          <MessageSquare className="w-4 h-4" />
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {unreadCount > 99 ? '99+' : unreadCount}
            </span>
          )}
        </Link>
      )}
    </nav>
  );
}
