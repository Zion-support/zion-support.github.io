
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/useAuth";
import { MessageSquare, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState, useEffect, useRef } from "react";

interface MainNavigationProps {
  is_admin?: boolean,
  unread_count?: number,
  class_name?: string;
}

export function MainNavigation(...args: any[]): any {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [activeDropdown, setActiveDropdown] = useState<any>(null);
  const location = useLocation();

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: anyMouseEvent)  => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
        setIsCompanyOpen(false);
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const baseLinks: NavigationLink[] = [
    {
      key: 'home'
      href: '/'
      matches: (path: string) => path === '/',    }
    {

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
}
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { useAuth } from '@/hooks/useAuth';
import { useTranslation } from 'react-i18next';
import { useFavorites } from '@/hooks/useFavorites';
import { useCart } from '@/context/CartContext';
import {;
  Heart,;
  MessageSquare,;
  CreditCard,;
  ShoppingCart,;
  Wallet,;
} from 'lucide-react';
import { LanguageSelector } from '@/components/header/LanguageSelector';
import {;
  HoverCard,;
  HoverCardTrigger,;
  HoverCardContent,;
} from '@/components/ui/hover-card';
import { MiniCartPreview } from '@/components/cart/MiniCartPreview';
import { LoginModal } from '@/components/auth/LoginModal';import { LanguageSelector } from '@/components/header/LanguageSelector';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card';
import { MiniCartPreview } from '@/components/cart/MiniCartPreview';
import { LoginModal } from '@/components/auth/LoginModal';
interface MainNavigationProps {;
  isAdmin?: boolean,;
  unreadCount?: number,;
  className?: string;
}

export function MainNavigation({ isAdmin = false, unreadCount = 0, className }: MainNavigationProps) {
  const { user } = useAuth();
  const isAuthenticated = !!user;
  const [loginOpen, setLoginOpen] = useState(false);
  const { count } = useFavorites();
  const { items } = useCart();
  const cartCount = items && items.length;
  const router = useRouter(); // Changed from useLocation;
  const { t } = useTranslation();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const baseLinks = [
    {
      key: 'categories',
      href: '/categories',
      matches: (path: string) => path.starts_with ('/categories'),    },
    {
      key: 'talent',
      href: '/talent',
      matches: (path: string) =>;
        path.starts_with ('/talent') && !path.includes ('/talent - dashboard'),    },
    {
      key: 'equipment',
      href: '/equipment',
      matches: (path: string) => path.starts_with ('/equipment'),    },
    {
      key: 'community',
      href: '/community',
      matches: (path: string) =>;
        path.starts_with ('/community') || path.starts_with ('/forum'),
    },
  ];
  const links = base_links.map (link => ({
    ...link,
    name: t (`nav.${link.key}`),
  }));
  // Add authenticated - only links;
  // Check condition
if ( {) {
  $2}
    links.push ({
      key: 'dashboard',
      name: t ('nav.dashboard'),
      href: '/dashboard',
      matches: (path: string) =>;
        path === '/dashboard' ||;
        path === '/client - dashboard' ||;
        path === '/talent - dashboard',
    }) }
  // Add admin - only links;
  // Check condition
if ( {) {
  $2
}
    links.push ({
      key: 'analytics',
      name: t ('nav.analytics'),
      href: '/analytics',
      matches: (path: string) => path.starts_with ('/analytics'),
    }) }
  return (
    <>;
      <button;
        className='navbar - toggler md:hidden ml - auto mr - 4 focus - visible:outline - none focus - visible:ring - 2 focus - visible:ring - primary' // Added ml - auto and mr - 4 for positioning;
        on_click={() => setIsMobileMenuOpen (!isMobileMenuOpen)}
        aria - expanded={isMobileMenuOpen}
        aria - controls='main - navbar - collapse';
        aria - label='Toggle navigation'      >;
        <span className='navbar - toggler - icon'></span>;
      </button>;
      <nav;
        className={cn ('navbar', class_name)}
        role='navigation';
        aria - label='Main navigation'      >;
        <div;
          id='main - navbar - collapse';
          className={cn (
            'navbar - collapse',
            { open: isMobileMenuOpen },
            'w - full md:flex md:w - auto', // Handles visibility and desktop layout;
            !isMobileMenuOpen && 'hidden' // Explicitly hide when not open and on mobile)}
        >;
          <ul className='navbar - nav flex flex - col md:flex - row md:items - center md:gap - 1'>;
            {' '}
            {/* Added navbar - nav and flex direction classes */}
            {links.map (link => (
              <li key={link.name} className='nav - item'>;
                <Link;
                  href={link.href}
                  aria - label={link.name}
                  on_click={() => setIsMobileMenuOpen (false)}
                  className={cn (
                    'nav - link',
                    'inline - flex h - 9 items - center justify - center rounded - md px - 4 text - sm font - medium transition - colors focus - visible:outline - none focus - visible:ring - 2 focus - visible:ring - primary',
                    link.matches (router.pathname);
                      ? 'bg - zion - purple / 20 text - zion - cyan';
                      : 'text - white hover:bg - zion - purple / 10 hover:text - zion - cyan')}                >;
                  {link.name}
                </Link>;
              </li>))}
            {/* Wishlist link */}
            {is_authenticated && (
              <li className='nav - item'>;
                <Link;
                  href='/wishlist';
                  aria - label='Wishlist';
                  on_click={() => setIsMobileMenuOpen (false)}
                  className={cn (
                    'nav - link',
                    'relative inline - flex h - 9 w - 9 items - center justify - center rounded - md transition - colors focus - visible:outline - none focus - visible:ring - 2 focus - visible:ring - primary',
                    router.pathname === '/wishlist';
                      ? 'bg - zion - purple / 20 text - zion - cyan';
                      : 'text - white hover:bg - zion - purple / 10 hover:text - zion - cyan')}                >;
                  <Heart className='w - 4 h - 4' />;
                  {count > 0 && (
                    <span className='absolute -top - 1 -right - 1 bg - zion - purple text - white text - xs rounded - full h - 4 w - 4 flex items - center justify - center'>;
                      {count}
                    </span>)}
                </Link>;
              </li>)}
            {/* Wallet link */}
            {is_authenticated && (
              <li className='nav - item'>;
                <Link;
                  href='/wallet';
                  aria - label='Wallet';
                  on_click={() => setIsMobileMenuOpen (false)}
                  className={cn (
                    'nav - link',
                    'relative inline - flex h - 9 w - 9 items - center justify - center rounded - md transition - colors focus - visible:outline - none focus - visible:ring - 2 focus - visible:ring - primary',
                    router.pathname === '/wallet';
                      ? 'bg - zion - purple / 20 text - zion - cyan';
                      : 'text - white hover:bg - zion - purple / 10 hover:text - zion - cyan')}                >;
                  <Wallet className='w - 4 h - 4' />;
                </Link>;
              </li>)}
            {/* Messages link */}
            {is_authenticated && (
              <li className='nav - item'>;
                <Link;
                  href='/messages';
                  aria - label='Messages';
                  on_click={() => setIsMobileMenuOpen (false)}
                  className={cn (
                    'nav - link',
                    'relative inline - flex h - 9 w - 9 items - center justify - center rounded - md transition - colors focus - visible:outline - none focus - visible:ring - 2 focus - visible:ring - primary',
                    router.pathname === '/messages';
                      ? 'bg - zion - purple / 20 text - zion - cyan';
                      : 'text - white hover:bg - zion - purple / 10 hover:text - zion - cyan')}                >;
                  <MessageSquare className='w - 4 h - 4' />;
                  {unread_count > 0 && (
                    <span className='absolute -top - 1 -right - 1 bg - red - 500 text - white text - xs rounded - full h - 4 w - 4 flex items - center justify - center'>;
                      {unread_count > 9 ? '9+' : unread_count}
                    </span>)}
                </Link>;
              </li>)}
            {/* Cart icon with badge */}
            <li className='nav - item'>;
              <HoverCard open_delay={100}>;
                <HoverCardTrigger as_child>;
                  <Link;
                    href='/cart';
                    aria - label={t ('nav.cart')}
                    on_click={handleCartClick}
                    className={cn (
                      'nav - link',
                      'inline - flex h - 9 items - center justify - center rounded - md px - 4 text - sm font - medium transition - colors relative focus - visible:outline - none focus - visible:ring - 2 focus - visible:ring - primary',                      router.pathname.starts_with ('/cart');
                        ? 'bg - zion - purple / 20 text - zion - cyan';
                        : 'text - white hover:bg - zion - purple / 10 hover:text - zion - cyan'), }
                  >;
                    <ShoppingCart className='w - 4 h - 4 mr - 1' />;
                    {t ('nav.cart', 'Cart')}
                    {cart_count > 0 && (
                      <span className='absolute -top - 1 -right - 1 bg - zion - purple text - white text - xs rounded - full h - 5 w - 5 flex items - center justify - center'>;
                        {cart_count}
                      </span>;
import { ChevronDown, Menu, X, Home, Settings, Users, Building, Globe, Zap, Brain, Shield, Cloud, Code, BarChart3'  } from 'lucide-react';
export default /**
 * Page - Function description
 */
function Page() { []);
  const base_links: NavigationLink[] = [{
      key: 'home',
      href: '/',
      matches: (path: string) => path === '/'
    },
    {
      key: 'marketplace',
      href: '/marketplace',
      matches: (path: string) => path.startsWith('/marketplace')
    },
    {
      key: 'services',
      href: '/services',
      matches: (path: string) => path.startsWith('/services') || path.startsWith('/ai-services') || path.startsWith('/it-services') || path.startsWith('/digital-marketing') || path.startsWith('/business-solutions')
    },
    {
      key: 'categories',
      href: '/categories',
      matches: (path: string) => path.startsWith('/categories')
    },
    {
      key: 'talent',
      href: '/talent',
      matches: (path: string) => path.startsWith('/talent') && !path.includes('/talent-dashboard')
    },
    {
      key: 'equipment',
      href: '/equipment',
      matches: (path:string) => path.startsWith('/equipment')
    },
    {
      key: 'community',
      href: '/community',
      matches: (path: string) => path.startsWith('/community') || path.startsWith('/forum')
    }
  ];

  const serviceLinks = [
    { key: 'ai-analytics', href: '/ai-analytics-dashboard', name: 'AI Analytics' },
    { key: 'ai-content', href: '/ai-content-generator', name: 'AI Content Generator' },
    { key: 'cybersecurity', href: '/cybersecurity-services', name: 'Cybersecurity' },
    { key: 'cloud-migration', href: '/cloud-migration-services', name: 'Cloud Migration' },
    { key: 'it-onsite', href: '/it-onsite-services', name: 'IT Onsite Services' }
  ];

  let links = baseLinks.map(link => ({ ...link, name: t(`nav.${link.key}`) }));
  
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
  
  return (
    <nav className={cn("navbar ml-6 hidden md:flex", className)}>
      <ul className="flex items-center gap-1">
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
                <span className="absolute -top-1 -right-1 bg-zion-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
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
