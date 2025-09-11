interface MainNavigationProps {
  isAdmin?: boolean
  unreadCount?: number
  className?: string

import Link from 'next / link';
import { use_router } from 'next / router';
import { useState } from 'react';
import { cn } from '@/lib / utils';
import { use_auth } from '@/hooks / use_auth';
import { use_translation } from 'react - i18next';
import { use_favorites } from '@/hooks / use_favorites';
import { use_cart } from '@/context / CartContext';
import {
  Heart,
  MessageSquare,
  CreditCard,
  ShoppingCart,
  Wallet,
} from 'lucide-react';
import { LanguageSelector } from '@/components / header / LanguageSelector';
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from '@/components / ui / hover - card';
import { MiniCartPreview } from '@/components / cart / MiniCartPreview';
import { LoginModal } from '@/components / auth / LoginModal'; import { LanguageSelector } from '@/components / header / LanguageSelector';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components / ui / hover - card';
import { LoginModal } from '@/components / auth / LoginModal';
interface MainNavigationProps {
  is_admin?: boolean,
  unread_count?: number,
  class_name?: string;
}
interface MainNavigationProps {
  is_admin?: boolean;
  unread_count?: number;
  class_name?: string;
export /**
 * MainNavigation - Function description
 */
function MainNavigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState (false); // Add state;
  const { user } = use_auth ();
  const is_authenticated = !!user;
  const [login_open, setLoginOpen] = useState (false);
  const { count } = use_favorites ();
  const { items } = use_cart ();
  const cart_count = items.length;
  const router = use_router (); // Changed from use_location;
  const { t } = use_translation ();
  const handleCartClick = (e: React.MouseEvent, ) =>: any {
    // Check condition
if ( {) {
  $2
}
      e.prevent_default ();
      setLoginOpen (true);
      return;

    }
    setIsMobileMenuOpen(false)
  }
  const baseLinks = [
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
;
export function MainNavigation({ isAdmin = false, unreadCount = 0, className }: MainNavigationProps) {;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false), // Add state;
  const { user } = useAuth(),;
  const isAuthenticated = !!user,;
  const [loginOpen, setLoginOpen] = useState(false),;
  const { count } = useFavorites(),;
  const { items } = useCart(),;
  const cartCount = items.length,;
  const router = useRouter(), // Changed from useLocation;
  const { t } = useTranslation(),;
  const handleCartClick = (e: React.MouseEvent) => {;
    if (!isAuthenticated) {;
      e.preventDefault(),;
      setLoginOpen(true),;
      return;
    }
    setIsMobileMenuOpen(false);
  },;
  const baseLinks = [;
    {;
      key: 'home',;
      href: '/',;
      matches: (path: string) => path === '/';
    },;
    {;
      key: 'marketplace',;
      href: '/marketplace',;
      matches: (path: string) => path.startsWith('/marketplace');
    },;
    {;
      key: 'categories',;
      href: '/categories',;
      matches: (path: string) => path.startsWith('/categories');
    },;
    {;
      key: 'talent',;
      href: '/talent',;
      matches: (path: string) => path.startsWith('/talent') && !path.includes('/talent-dashboard');
    },;
    {;
      key: 'equipment',;
      href: '/equipment',;
      matches: (path: string) => path.startsWith('/equipment');
    },;
    {;
      key: 'community',;
      href: '/community',;
      matches: (path: string) => path.startsWith('/community') || path.startsWith('/forum');
    }
  ],;
  const links = baseLinks.map(link => ({ ...link, name: t(`nav.${link.key}`) })),;
  // Add authenticated-only links;
  if (isAuthenticated) {;
    links.push({;
      key: 'dashboard',;
      name: t('nav.dashboard'),;
      href: '/dashboard',;
      matches: (path: string) => path === '/dashboard' || path === '/client-dashboard' || path === '/talent-dashboard';
    });
  }
;
  // Add admin-only links;
  if (isAdmin) {;
    links.push({;
      key: 'analytics',;
      name: t('nav.analytics'),;
      href: '/analytics',;
      matches: (path: string) => path && path.startsWith('/analytics'),;
    });  }


  return (
    <>
      <button
        className="navbar-toggler md:hidden ml-auto mr-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" // Added ml-auto and mr-4 for positioning
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-expanded={isMobileMenuOpen}
        aria-controls='main-navbar-collapse';
        aria-label='Toggle navigation'      >;
        <span className='navbar-toggler-icon'></span>;
      </button>;
      <nav
        className={cn('navbar', className)}
        role='navigation'
        aria-label='Main navigation'>;


        <div
          id="main-navbar-collapse"
          className={cn(



                  href={link.href}
                  aria-label={link.name}

                  onClick={() => setIsMobileMenuOpen(false)}


                    'nav-link',
                    'inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',


                    link.matches(router.pathname)
                      ? 'bg-zion-purple/20 text-zion-cyan'
                      : 'text-white hover:bg-zion-purple/10 hover:text-zion-cyan'
                  )}                >

                    "nav-link",
                    "inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                    link.matches(router.pathname)
                      ? "bg-zion-purple/20 text-zion-cyan"
                      : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
                  )}
                >;



                  {link.name}
                </Link>
              </li>
                  className={cn(;
                    'nav-link',;
                    'inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',;
                    link && link.matches(router && router.pathname);
                      ? 'bg-zion-purple/20 text-zion-cyan';
                      : 'text-white hover:bg-zion-purple/10 hover:text-zion-cyan';
                  )}                >;
                  {link && link.name}
                </Link>;
              </li>;
            ))}
            {/* Wishlist link */}
            {isAuthenticated && (
              <li className='nav-item'>
                <Link
                  href='/wishlist'
                  aria-label='Wishlist'
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    'nav-link'
                    'relative inline-flex h-9 w-9 items-center justify-center rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary'
                    router.pathname === '/wishlist'
                      ? 'bg-zion-purple/20 text-zion-cyan'
                      : 'text-white hover:bg-zion-purple/10 hover:text-zion-cyan'
                  )}                >
                  <Heart className='w-4 h-4' />
                  {count > 0 && (
                    <span className='absolute -top-1 -right-1 bg-zion-purple text-white text-xs rounded-full h-4 w-4 flex items-center justify-center'>
                      {count}
                    </span>
                  )}
                </Link>
              </li>
            )}
            {/* Wallet link */}
            {isAuthenticated && (
              <li className='nav-item'>
                <Link
                  href='/wallet'
                  aria-label='Wallet'
                  onClick={() => setIsMobileMenuOpen(false)}

                  className={cn(;
                    'nav-link',;
                    'relative inline-flex h-9 w-9 items-center justify-center rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',;
                    router && router.pathname === '/wallet';
                      ? 'bg-zion-purple/20 text-zion-cyan';
                      : 'text-white hover:bg-zion-purple/10 hover:text-zion-cyan';
                  )}                >;
                  <Wallet className='w-4 h-4' />;
                </Link>;
              </li>;

            )}
            {/* Messages link */}
            {isAuthenticated && (
              <li className='nav-item'>
                <Link
                  href='/messages'
                  aria-label='Messages'
                  onClick={() => setIsMobileMenuOpen(false)}

                  className={cn(;
                    'nav-link',;
                    'relative inline-flex h-9 w-9 items-center justify-center rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',;
                    router && router.pathname === '/messages';
                      ? 'bg-zion-purple/20 text-zion-cyan';
                      : 'text-white hover:bg-zion-purple/10 hover:text-zion-cyan';
                  )}                >;
                  <MessageSquare className='w-4 h-4' />;
                  {unreadCount > 0 && (;
                    <span className='absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center'>;

                      {unreadCount > 9 ? '9+' : unreadCount}
                    </span>;
                  )}
                </Link>;
              </li>;
            )}
;
            {/* Cart icon with badge */}
            <li className="nav-item">
              <HoverCard openDelay={100}>
                <HoverCardTrigger asChild>
                  <Link
                    href="/cart"
                    aria-label={t('nav.cart')}
                    onClick={handleCartClick}
                    className={cn(

                      'nav-link',
                      'inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',                      router && router.pathname.startsWith('/cart')

                        ? 'bg-zion-purple/20 text-zion-cyan'
                        : 'text-white hover:bg-zion-purple/10 hover:text-zion-cyan'
                    ),}>;
                    <ShoppingCart className='w-4 h-4 mr-1' />;
                    {t('nav && nav.cart', 'Cart')}
                    {cartCount > 0 && (;
                      <span className='absolute -top-1 -right-1 bg-zion-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center'>;
                        {cartCount}

      key: 'marketplace',
      href: '/marketplace',
      matches: (path: string) => path.starts_with ('/marketplace'),    },
    {
      matches: (path: string)  => path.startsWith('/contact')
}
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
      name: 'Home',
      matches: (path: string) => path = == '/';
},
    {
      key: 'services',
      href: '/services',
      name: 'Services',
      matches: (path: string) => path.starts_with ('/services'),
      children: [';
        { key: 'cloud - devops', href: '/services / cloud - devops', name: 'Cloud & DevOps', matches: (p: string) => p.starts_with ('/services / cloud - devops') },
        { key: 'digital - twin', href: '/services / digital - twin', name: 'Digital Twin', matches: (p: string) => p.starts_with ('/services / digital - twin') },
        { key: 'data - analytics', href: '/services / data - analytics', name: 'Data Analytics', matches: (p: string) => p.starts_with ('/services / data - analytics') },
        { key: 'it - infrastructure', href: '/services / it - infrastructure', name: 'IT Infrastructure', matches: (p: string) => p.starts_with ('/services / it - infrastructure') },
        { key: 'ai - business - intelligence', href: '/services / ai - business - intelligence', name: 'AI Business Intelligence', matches: (p: string) => p.starts_with ('/services / ai - business - intelligence') },
        { key: 'ai - sales - copilot', href: '/services / ai - sales - copilot', name: 'AI Sales Copilot', matches: (p: string) => p.starts_with ('/services / ai - sales - copilot') },
        { key: 'cloud - finops - optimizer', href: '/services / cloud - finops - optimizer', name: 'Cloud FinOps Optimizer', matches: (p: string) => p.starts_with ('/services / cloud - finops - optimizer') },
        { key: 'ai - compliance - assistant', href: '/services / ai - compliance - assistant', name: 'AI Compliance Assistant', matches: (p: string) => p.starts_with ('/services / ai - compliance - assistant') },
        { key: 'ai - auto - email - responder', href: '/services / ai - auto - email - responder', name: 'AI Auto Email Responder', matches: (p: string) => p.starts_with ('/services / ai - auto - email - responder') },
        { key: 'mobile - feedback - surveys', href: '/services / mobile - feedback - surveys', name: 'Feedback Surveys', matches: (p: string) => p.starts_with ('/services / mobile - feedback - surveys') },
        { key: 'ai - compliance - copilot', href: '/services / ai - compliance - copilot', name: 'AI Compliance Copilot', matches: (p: string) => p.starts_with ('/services / ai - compliance - copilot') },
        { key: 'llm - content - studio', href: '/services / llm - content - studio', name: 'LLM Content Studio', matches: (p: string) => p.starts_with ('/services / llm - content - studio') },
        { key: 'finops - advisor', href: '/services / finops - advisor', name: 'FinOps Advisor', matches: (p: string) => p.starts_with ('/services / finops - advisor') },
        { key: 'returns - management', href: '/services / returns - management', name: 'Returns Management', matches: (p: string) => p.starts_with ('/services / returns - management') },
        { key: 'email - sequencer', href: '/services / email - sequencer', name: 'Email Sequencer', matches: (p: string) => p.starts_with ('/services / email - sequencer') },
        { key: 'podcast - transcription', href: '/services / podcast - transcription', name: 'Podcast Transcription', matches: (p: string) => p.starts_with ('/services / podcast - transcription') },
        { key: 'micro - crm', href: '/services / micro - crm', name: 'Micro CRM', matches: (p: string) => p.starts_with ('/services / micro - crm') },
        { key: 'website - analytics', href: '/services / website - analytics', name: 'Website Analytics', matches: (p: string) => p.starts_with ('/services / website - analytics') },
        { key: 'it - helpdesk', href: '/services / it - helpdesk', name: 'IT Helpdesk', matches: (p: string) => p.starts_with ('/services / it - helpdesk') },
        { key: 'affiliate - tracking', href: '/services / affiliate - tracking', name: 'Affiliate Tracking', matches: (p: string) => p.starts_with ('/services / affiliate - tracking') },
        { key: 'mobile - survey', href: '/services / mobile - survey', name: 'Mobile Survey', matches: (p: string) => p.starts_with ('/services / mobile - survey') }
      ];
},
    {
      key: 'ai - services',
      href: '/ai - services',
      name: 'AI Services',
      matches: (path: string)  => path.starts_with ('/ai - services');
},
    {
      key: 'it - services',
      href: '/it - services',
      name: 'IT Services',
      matches: (path: string)  => path.starts_with ('/it - services');
},
    {
      key: 'micro - saas',
      href: '/micro - saas',
      name: 'Micro SAAS',
      matches: (path: string)  => path.starts_with ('/micro - saas');
},
    {
      key: 'marketplace',
      href: '/marketplace',
      name: 'Marketplace',
      matches: (path: string)  => path.starts_with ('/marketplace');
},
    {
      key: 'about',
      href: '/about',
      name: 'About',
      matches: (path: string)  => path.starts_with ('/about');
},

    {
      matches: (path: string)  => path.starts_with ('/contact');
}

      key: 'contact',
      href: '/contact',
      name: 'Contact',
      matches: (path: string) => path.starts_with ('/contact')}
  ];
              </div>;
            </motion.div>)}
        </AnimatePresence>;
      </div>)}
  return ();
    <nav class_name = {`${class_name}`}>;

      {/* Desktop Navigation */}
      <div className="hidden lg: flex items-center space-x-1">
        {baseLinks.map((link (
          <div key={link.key}>
            {link.children ? (

                      </span>;
import { ChevronDown, Menu, X, Home, Settings, Users, Building, Globe, Zap, Brain, Shield, Cloud, Code, BarChart3'  } from 'lucide-react';
export default function Page() {; []);
  const baseLinks: NavigationLink[] = [{;

      key: 'home',;
      href: '/',;
      name: 'Home',;
      matches: (path: string) => path = == '/';
},;
    {;

      key: 'services',;
      href: '/services',;
      name: 'Services',;
      matches: (path: string) => path && path.startsWith('/services'),;
      children: [';
        { key: 'cloud-devops', href: '/services/cloud-devops', name: 'Cloud & DevOps', matches: (p: string) => p && p.startsWith('/services/cloud-devops') },;
        { key: 'digital-twin', href: '/services/digital-twin', name: 'Digital Twin', matches: (p: string) => p && p.startsWith('/services/digital-twin') },;
        { key: 'data-analytics', href: '/services/data-analytics', name: 'Data Analytics', matches: (p: string) => p && p.startsWith('/services/data-analytics') },;
        { key: 'it-infrastructure', href: '/services/it-infrastructure', name: 'IT Infrastructure', matches: (p: string) => p && p.startsWith('/services/it-infrastructure') },;
        { key: 'ai-business-intelligence', href: '/services/ai-business-intelligence', name: 'AI Business Intelligence', matches: (p: string) => p && p.startsWith('/services/ai-business-intelligence') },;
        { key: 'ai-sales-copilot', href: '/services/ai-sales-copilot', name: 'AI Sales Copilot', matches: (p: string) => p && p.startsWith('/services/ai-sales-copilot') },;
        { key: 'cloud-finops-optimizer', href: '/services/cloud-finops-optimizer', name: 'Cloud FinOps Optimizer', matches: (p: string) => p && p.startsWith('/services/cloud-finops-optimizer') },;
        { key: 'ai-compliance-assistant', href: '/services/ai-compliance-assistant', name: 'AI Compliance Assistant', matches: (p: string) => p && p.startsWith('/services/ai-compliance-assistant') },;
        { key: 'ai-auto-email-responder', href: '/services/ai-auto-email-responder', name: 'AI Auto Email Responder', matches: (p: string) => p && p.startsWith('/services/ai-auto-email-responder') },;
        { key: 'mobile-feedback-surveys', href: '/services/mobile-feedback-surveys', name: 'Feedback Surveys', matches: (p: string) => p && p.startsWith('/services/mobile-feedback-surveys') },;
        { key: 'ai-compliance-copilot', href: '/services/ai-compliance-copilot', name: 'AI Compliance Copilot', matches: (p: string) => p && p.startsWith('/services/ai-compliance-copilot') },;
        { key: 'llm-content-studio', href: '/services/llm-content-studio', name: 'LLM Content Studio', matches: (p: string) => p && p.startsWith('/services/llm-content-studio') },;
        { key: 'finops-advisor', href: '/services/finops-advisor', name: 'FinOps Advisor', matches: (p: string) => p && p.startsWith('/services/finops-advisor') },;
        { key: 'returns-management', href: '/services/returns-management', name: 'Returns Management', matches: (p: string) => p && p.startsWith('/services/returns-management') },;
        { key: 'email-sequencer', href: '/services/email-sequencer', name: 'Email Sequencer', matches: (p: string) => p && p.startsWith('/services/email-sequencer') },;
        { key: 'podcast-transcription', href: '/services/podcast-transcription', name: 'Podcast Transcription', matches: (p: string) => p && p.startsWith('/services/podcast-transcription') },;
        { key: 'micro-crm', href: '/services/micro-crm', name: 'Micro CRM', matches: (p: string) => p && p.startsWith('/services/micro-crm') },;
        { key: 'website-analytics', href: '/services/website-analytics', name: 'Website Analytics', matches: (p: string) => p && p.startsWith('/services/website-analytics') },;
        { key: 'it-helpdesk', href: '/services/it-helpdesk', name: 'IT Helpdesk', matches: (p: string) => p && p.startsWith('/services/it-helpdesk') },;
        { key: 'affiliate-tracking', href: '/services/affiliate-tracking', name: 'Affiliate Tracking', matches: (p: string) => p && p.startsWith('/services/affiliate-tracking') },;
        { key: 'mobile-survey', href: '/services/mobile-survey', name: 'Mobile Survey', matches: (p: string) => p && p.startsWith('/services/mobile-survey') }
      ];
},;
    {;

      key: 'ai-services',;
      href: '/ai-services',;
      name: 'AI Services',;
      matches: (path: string)  => path && path.startsWith('/ai-services');
},;
    {;

      key: 'it-services',;
      href: '/it-services',;
      name: 'IT Services',;
      matches: (path: string)  => path && path.startsWith('/it-services');
},;
    {;

      key: 'micro-saas',;
      href: '/micro-saas',;
      name: 'Micro SAAS',;
      matches: (path: string)  => path && path.startsWith('/micro-saas');
},;
    {;

      key: 'marketplace',;
      href: '/marketplace',;
      name: 'Marketplace',;
      matches: (path: string)  => path && path.startsWith('/marketplace');
},;
    {;

      key: 'about',;
      href: '/about',;
      name: 'About',;
      matches: (path: string)  => path && path.startsWith('/about');
},;
    {;

      matches: (path: string)  => path && path.startsWith('/contact');
};
      key: 'contact',;
      href: '/contact',;
      name: 'Contact',;
      matches: (path: string) => path && path.startsWith('/contact')};
  ];
              </div>;
            </motion && motion.div>;
          )};
        </AnimatePresence>;
      </div>;
    )};
  return ();
    <nav className = {`${className}`}>;
      {/* Desktop Navigation */}
      <div className="hidden lg: flex items-center space-x-1">;
        {baseLinks && baseLinks.map((link (;
          <div key={link && link.key}>;
            {link && link.children ? (;
              renderDropdown();
                link,;
                link && link.key === 'services' ? isServicesOpen : isCompOpen,;
                link && link.key === 'services' ? setIsServicesOpen : setIsCompOpen;
              );
            ) : (;
              <Link
                to={link && link.href}`

                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${isActive(link)
                    ? 'bg-zion-cyan text-white''
                    : 'text-zion-slate-light hover:text-white hover:bg-white/10'`
}`}


                {link && link.name}
              </Link>;

            )}
          </div>
        ))}
      </div>
      {/* Mobile Menu Button */}
      <button

              render_dropdown ();
                link,
                link.key === 'services' ? isServicesOpen : isCompOpen,
                link.key === 'services' ? setIsServicesOpen : setIsCompOpen)) : (
              <Link;
                to={link.href}`;
                className={`px - 4 py - 2 text - sm font - medium rounded - md transition - colors ${is_active (link);
                    ? 'bg - zion - cyan text - white'';
                    : 'text - zion - slate - light hover:text - white hover:bg - white / 10'`;
}`}
                {link.name}
              </Link>)}
          </div>))}
      </div>;
      {/* Mobile Menu Button */}
      <button;
        on_click={() => setIsMobileMenuOpen (!isMobileMenuOpen)}";
        className="lg:hidden p - 2 text - zion - slate - light hover:text - white hover:bg - white / 10 rounded - md transition - colors";
";
        {isMobileMenuOpen ? <X className="w - 6 h - 6"  /> : <Menu className="w - 6 h - 6"  />}      </button>;
      {/* Mobile Navigation */}
      <AnimatePresence>;
        {isMobileMenuOpen &&;
          <motion.div;
            initial = {
  { opacity: 0,
  coordinate_x: '100%';
}}
            animate = {
  { opacity: 1,
  coordinate_x: 0;
}}
            exit = {
  { opacity: 0,
  coordinate_x: '100%';

}}
            transition={{ duration: 0.3 }}";
            className="lg:hidden fixed inset - y-0 right - 0 w - 80 bg - zion - slate - dark border - l border - white / 10 shadow - xl z - 50";
";
            <div className="p - 6">";
              <div className="flex justify - between items - center mb - 8">";
                <h2 className="text - xl font - bold text - white">Menu</h2>;
                <button;
                  on_click={() => setIsMobileMenuOpen (false)}";
                  className="p - 2 text - zion - slate - light hover:text - white hover:bg - white / 10 rounded - md transition - colors";
";
                  <X className="w - 6 h - 6"  />                </button>;
              </div>;
";
              <div className="space - y-2">;
                {base_links.map (link: unknown <div key={link.key}>;
                    {link.children ? (
                      <div>;
                        <button;
                          on_click={() => setActiveDropdown (active_dropdown === link.key ? null : link.key)}`;
                          className={`w - full flex items - center justify - between px - 4 py - 3 text - left text - sm font - medium rounded - md transition - colors ${is_active (link);
                              ? 'bg - zion - cyan text - white'';
                              : 'text - zion - slate - light hover:text - white hover:bg - white / 10'`;
}`}


;
            {/* Wishlist link */}
            {isAuthenticated && (
              <li className="nav-item">
                <Link 
                  href="/wishlist"
                  aria-label="Wishlist"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "nav-link",
                    "relative inline-flex h-9 w-9 items-center justify-center rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                    router.pathname === "/wishlist"
                      ? "bg-zion-purple/20 text-zion-cyan"
                      : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
                  )}
                >
                  <Heart className="w-4 h-4" />
                  {count > 0 && (
                    <span className="absolute -top-1 -right-1 bg-zion-purple text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                      {count}
                    </span>;
                  )}
                </Link>;
              </li>;
            )}
;
            {/* Wallet link */}
            {isAuthenticated && (
              <li className="nav-item">
                <Link 
                  href="/wallet"
                  aria-label="Wallet"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "nav-link",
                    "relative inline-flex h-9 w-9 items-center justify-center rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                    router.pathname === "/wallet"
                      ? "bg-zion-purple/20 text-zion-cyan"
                      : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
                  )}
                >
                  <Wallet className="w-4 h-4" />
                </Link>
              </li>
            )}
;
            {/* Messages link */}
            {isAuthenticated && (
              <li className="nav-item">
                <Link 
                  href="/messages"
                  aria-label="Messages"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "nav-link",
                    "relative inline-flex h-9 w-9 items-center justify-center rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                    router.pathname === "/messages"
                      ? "bg-zion-purple/20 text-zion-cyan"
                      : "text-white hover:bg-zion-purple/10 hover:text-zion-cyan"
                  )}
                >
                  <MessageSquare className="w-4 h-4" />
                  {unreadCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                      {unreadCount > 9 ? '9+' : unreadCount}
                    </span>;
                  )}
                </Link>;
              </li>;
            )}
;
            {/* Cart icon with badge */}
            <li className="nav-item">
              <HoverCard openDelay={100}>
                <HoverCardTrigger asChild>
                  <Link
                    href="/cart"
                    aria-label={t('nav.cart')}
                    onClick={handleCartClick}
                    className={cn(;
                      'nav-linkinline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium transition-colors relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary';
                      router.pathname.startsWith('/cart');
                        ? 'bg-zion-purple/20 text-zion-cyan';
                        : 'text-white hover:bg-zion-purple/10 hover:text-zion-cyan';
                    )}


                  >
                    <ShoppingCart className="w-4 h-4 mr-1" />
                    {t('nav.cartCart')}
                    {cartCount > 0 && (

}`};
;
                          {link.name}'`;
                          <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === link.key ? 'rotate-180' : ''}`}  />                        </button>;

                        {activeDropdown === link.key && (;"
                          <div className="ml-4 mt-2 space-y-1">
                            {link.children.map((child: unknown (
                              <Link
                          {link.name}'`;
                          <ChevronDown className={`w - 4 h - 4 transition - transform ${active_dropdown === link.key ? 'rotate - 180' : ''}`}  />                        </button>;
                        {active_dropdown === link.key && (";
                          <div className="ml - 4 mt - 2 space - y-1">;
                            {link.children.map ((child: unknown (
                              <Link;
                                key={child.key}
                                to={child.href}`;
                                className={`block px - 4 py - 2 text - sm text - zion - slate - light hover:text - white hover:bg - white / 10 rounded - md transition - colors ${is_active (child) ? 'text - zion - cyan bg - zion - cyan / 10' : ''`;
}`}

        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}";
        className="lg:hidden p-2 text-zion-slate-light hover:text-white hover:bg-white/10 rounded-md transition-colors";
";
        {isMobileMenuOpen ? <X className="w-6 h-6"  /> : <Menu className="w-6 h-6"  />}      </button>;

      {/* Mobile Navigation */}
      <AnimatePresence>;
        {isMobileMenuOpen && ;
          <motion&& motion.div
            initial = {

  { opacity: 0,
  x: '100%'
}}
            animate = {

  { opacity: 1,
  x: 0
}}
            exit = {

  { opacity: 0,
  x: '100%'
}}
            transition={{ duration: 0 && 0.3 }}"
            className="lg:hidden fixed inset-y-0 right-0 w-80 bg-zion-slate-dark border-l border-white/10 shadow-xl z-50"
"
            <div className="p-6">";
              <div className="flex justify-between items-center mb-8">";
                <h2 className="text-xl font-bold text-white">Menu</h2>;
                <button
                  onClick={() => setIsMobileMenuOpen(false)}";
                  className="p-2 text-zion-slate-light hover:text-white hover:bg-white/10 rounded-md transition-colors";
";
                  <X className="w-6 h-6"  />                </button>;
              </div>;
";
              <div className="space-y-2">;
                {baseLinks && baseLinks.map(link: unknown <div key={link && link.key}>;
                    {link && link.children ? (;
                      <div>;
                        <button
                          onClick={() => setActiveDropdown(activeDropdown === link && link.key ? null : link && link.key)}`;
                          className={`w-full flex items-center justify-between px-4 py-3 text-left text-sm font-medium rounded-md transition-colors ${isActive(link);
                              ? 'bg-zion-cyan text-white'';
                              : 'text-zion-slate-light hover:text-white hover:bg-white/10'`;
}`}

                          {link && link.name}'`;
                          <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === link && link.key ? 'rotate-180' : ''}`}  />                        </button>;

                        {activeDropdown === link && link.key && (;";
                          <div className="ml-4 mt-2 space-y-1">;
                            {link && link.children.map((child: unknown (;
                              <Link
                                key={child && child.key}
                                to={child && child.href}`
                                className={`block px-4 py-2 text-sm text-zion-slate-light hover:text-white hover:bg-white/10 rounded-md transition-colors ${isActive(child) ? 'text-zion-cyan bg-zion-cyan/10' : ''`
}`}
                                onClick={: unknown setIsMobileMenuOpen(false)}

                                {child && child.name}
                              </Link>;

                            ))}
                          </div>
                        )}

                      </div>;
                    ) : (;
                      <Link
                        to={link && link.href}`

                        className={`block px-4 py-3 text-sm font-medium rounded-md transition-colors ${isActive(link)
                            ? 'bg-zion-cyan text-white''
                            : 'text-zion-slate-light hover:text-white hover:bg-white/10'`
}`}
                        onClick={: unknown setIsMobileMenuOpen(false)}

                      <span className="absolute -top-1 -right-1 bg-zion-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  >;
                    <ShoppingCart className="w-4 h-4 mr-1" />;
                    {t('nav.cartCart')}
                    {cartCount > 0 && (;
                      <span className="absolute -top-1 -right-1 bg-zion-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">;
                        {cartCount}
                      </span>;



                    )}
                  </Link>
                </HoverCardTrigger>
                <HoverCardContent>
                  <MiniCartPreview />
                </HoverCardContent>
              </HoverCard>
            </li>
          </ul>
          <div className="flex items-center gap-2 mt-4 md:mt-0 md:ml-auto">
            <LanguageSelector />
          </div>
        </div>
      </nav>
      <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />
    </>
