<<<<<<< HEAD
import { ArrowRight, Atom, BookOpen, Brain, Building, Building2, ChevronDown, Cloud, Code, Cpu, DollarSign, FileText, Globe, HeartHandshake, Heart, HelpCircle, Leaf, Lock, Mail, MapPin, Menu, MessageCircle, PenTool, Phone, Rocket, Scale, Search, Settings, Shield, ShoppingCart, Star, Target, TrendingUp, Users, X, Zap, BarChart3, Server } from 'lucide-react';
import React, { useEffect, useState } from 'react';
=======
<<<<<<< HEAD
<<<<<<< HEAD:src_disabled_1757239864/layout/AppHeader.tsx
const showTagline = router.pathname === '/
=======
<<<<<<< HEAD
  const showTagline = router.pathname === '/'
  const showTagline = router.pathname === '/'
import React, { useState } from 'react',
import { useMessaging } from '@/context/MessagingContext',
import Link from 'next/link',
import { ResponsiveNavigation } from '@/components/navigation/ResponsiveNavigation',
import { Logo } from '@/components/header/Logo',
import { useTranslation } from 'react-i18next',
import { Menu, X } from 'lucide-react'
import { MobileMenu } from '@/components/header/MobileMenu',
import { useIsMobile } from '@/hooks/use-mobile',
import { MobileBottomNav } from '@/components/header/MobileBottomNav',
import { PointsBadge } from '@/components/loyalty/PointsBadge',
import { LoginModal } from '@/components/auth/LoginModal',
import { useAuth } from '@/hooks/useAuth',
import { UserMenu } from '@/components/header/UserMenu',
import { useSelector } from 'react-redux',
import type { RootState } from '@/store',
import { cn } from '@/lib/utils', // Import cn utility
import { useRouter } from 'next/router',
export function AppHeader() {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false),
  const [loginOpen, setLoginOpen] = useState(false),
  const isMobile = useIsMobile(),
  const { t } = useTranslation(),
  const { user } = useAuth(),
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn),
  const router = useRouter(),
  const showTagline = router.pathname === '/',

  const [loginOpen, setLoginOpen] = useState(false),
  const isMobile = useIsMobile(),
  const { t } = useTranslation(),
  const { user } = useAuth(),
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn),
  const router = useRouter(),
  const showTagline = router.pathname === '/',
ursor/fix-website-loading-errors-and-merge-6662

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
const showTagline = router.pathname === '/'
>>>>>>> merged-prs-20250907-203621
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [loginOpen, setLoginOpen] = useState(false)
  const isMobile = useIsMobile()
  const { t } = useTranslation()
  const { user } = useAuth()
  const isLoggedIn = useSelector((state: RootState,) => state.auth.isLoggedIn)
  const router = useRouter()
<<<<<<< HEAD
  const showTagline = router.pathname === /'
import React, { useState } from 'react;
import { useMessaging } from @/context/MessagingContext';
import Link from 'next/link;
import { ResponsiveNavigation } from @/components/navigation/ResponsiveNavigation';
import { Logo } from '@/components/header/Logo;
import { useTranslation } from react-i18next';
import { Menu, X } from 'lucide-react
import { MobileMenu } from @/components/header/MobileMenu';
import { useIsMobile } from '@/hooks/use-mobile;
import { MobileBottomNav } from @/components/header/MobileBottomNav';
import { PointsBadge } from '@/components/loyalty/PointsBadge;
import { LoginModal } from @/components/auth/LoginModal';
import { useAuth } from '@/hooks/useAuth;
import { UserMenu } from @/components/header/UserMenu';
import { useSelector } from 'react-redux;
import type { RootState } from @/store';
import { cn } from '@/lib/utils, // Import cn utility
import { useRouter } from next/router';
=======
import React, { useState, useEffect } from 'react';
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
import { Link } from 'react-router-dom';
import { ThemeToggle } from '../components/ThemeToggle';

>>>>>>> origin/main:src/layout/AppHeader.tsx
export function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
<<<<<<< HEAD:src_disabled_1757239864/layout/AppHeader.tsx
  const [loginOpen, setLoginOpen] = useState(false);
  const isMobile = useIsMobile();
  const { t } = useTranslation();
  const { user } = useAuth();
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn),
  const router = useRouter();
  const showTagline = router.pathname === '/;
=======
  const [searchQuery, setSearchQuery] = useState('');
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
>>>>>>> origin/main:src/layout/AppHeader.tsx

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

<<<<<<< HEAD:src_disabled_1757239864/layout/AppHeader.tsx
  const openLoginModal = (returnToPath?: string) => {
    // The actual returnToPath is set in the URL by the child components (ResponsiveNavigation, MobileMenu)
    // using router.push with shallow:true before this function is called.
    // This functions main job is just to open the modal.
    // If a returnToPath is passed, we could potentially use it for other logic here if needed in the future.
    setLoginOpen(true)
=======
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsSearching(true);
      try {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate search
        window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
      } finally {
        setIsSearching(false);
      }
    }
>>>>>>> origin/main:src/layout/AppHeader.tsx
  };

  const navigation = [
    { name: 'Home', href: '/', current: true },
    { name: 'Services', href: '/services', current: false, hasDropdown: true },
    { name: 'Solutions', href: '/solutions', current: false, hasDropdown: true },
    { name: 'Resources', href: '/resources', current: false, hasDropdown: true },
    { name: 'About', href: '/about', current: false },
    { name: 'Contact', href: '/contact', current: false },
  ];

  const services = [
    { 
      name: 'All Services', 
      href: '/services', 
      icon: Rocket, 
      description: 'Comprehensive technology services',
      featured: true,
      color: 'from-cyan-500 to-blue-500'
    },
    { 
      name: 'AI Business Intelligence', 
      href: '/services/ai-business-intelligence', 
      icon: Brain, 
      description: 'Machine Learning & Data Science',
      featured: true,
      color: 'from-purple-500 to-cyan-500'
    },
    { 
      name: 'AI Healthcare Analytics', 
      href: '/services/ai-healthcare-analytics', 
      icon: Heart, 
      description: 'Medical AI & Diagnostics',
      featured: true,
      color: 'from-red-500 to-pink-500'
    },
    { 
      name: 'AI Legal Document Analysis', 
      href: '/services/ai-legal-document-analysis', 
      icon: Scale, 
      description: 'Legal Tech & Document Processing',
      featured: true,
      color: 'from-blue-500 to-indigo-500'
    },
    { 
      name: 'AI Financial Trading', 
      href: '/services/ai-financial-trading', 
      icon: TrendingUp, 
      description: 'FinTech & Trading Solutions',
      featured: true,
      color: 'from-green-500 to-emerald-500'
    },
    { 
      name: 'AI Supply Chain Optimization', 
      href: '/services/ai-supply-chain-optimization', 
      icon: Globe, 
      description: 'Supply Chain & Logistics',
      featured: true,
      color: 'from-orange-500 to-red-500'
    },
    { 
      name: 'Cloud DevOps', 
      href: '/services/cloud-devops', 
      icon: Cloud, 
      description: 'DevOps & Infrastructure',
      featured: true,
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      name: 'Digital Twin', 
      href: '/services/digital-twin', 
      icon: Globe, 
      description: 'Virtual Replicas & Simulation',
      featured: true,
      color: 'from-green-500 to-emerald-500'
    },
    { 
      name: 'Data Analytics', 
      href: '/services/data-analytics', 
      icon: BarChart3, 
      description: 'Business Intelligence & Analytics',
      featured: true,
      color: 'from-purple-500 to-pink-500'
    },
    { 
      name: 'IT Infrastructure', 
      href: '/services/it-infrastructure', 
      icon: Server, 
      description: 'IT Infrastructure & Management',
      featured: true,
      color: 'from-gray-500 to-blue-500'
    },
    { 
      name: 'Micro SaaS Products', 
      href: '/services/micro-saas', 
      icon: ShoppingCart, 
      description: 'AI automations with transparent pricing',
      featured: true,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const solutions = [
    {
      name: 'Healthcare Solutions',
      href: '/solutions#healthcare',
      icon: Heart,
      description: 'Digital health transformation',
      featured: true
    },
    {
      name: 'Financial Services',
      href: '/solutions#financial',
      icon: TrendingUp,
      description: 'Fintech innovation & compliance',
      featured: true
    },
    {
      name: 'Legal Services',
      href: '/solutions#legal',
      icon: Scale,
      description: 'Legal technology solutions',
      featured: true
    },
    {
      name: 'Manufacturing',
      href: '/solutions#manufacturing',
      icon: Building2,
      description: 'Smart manufacturing & Industry 4.0',
      featured: true
    },
    {
      name: 'Retail & E-commerce',
      href: '/solutions#retail',
      icon: ShoppingCart,
      description: 'Digital commerce transformation',
      featured: true
    },
    {
      name: 'Government & Public Sector',
      href: '/solutions#government',
      icon: Shield,
      description: 'Public sector innovation',
      featured: false
    },
    {
      name: 'Education & Training',
      href: '/solutions#education',
      icon: Users,
      description: 'EdTech solutions',
      featured: false
    },
    {
      name: 'Space & Aerospace',
      href: '/solutions#space',
      icon: Rocket,
      description: 'Space technology solutions',
      featured: false
    }
  ];

  const resources = [
    {
      name: 'Blog & Insights',
      href: '/blog',
      icon: BookOpen,
      description: 'Latest industry trends and insights',
      featured: true
    },
    {
      name: 'Case Studies',
      href: '/case-studies',
      icon: Target,
      description: 'Real-world success stories',
      featured: true
    },
    {
      name: 'White Papers',
      href: '/white-papers',
      icon: FileText,
      description: 'In-depth research and analysis',
      featured: true
    },
    {
      name: 'Webinars',
      href: '/webinars',
      icon: Users,
      description: 'Expert-led learning sessions',
      featured: true
    },
    {
      name: 'Documentation',
      href: '/docs',
      icon: Code,
      description: 'Technical guides and APIs',
      featured: true
    },
    {
      name: 'FAQ & Support',
      href: '/faq',
      icon: HelpCircle,
      description: 'Get help and answers',
      featured: true
    },
    {
      name: 'Pricing Guide 2027',
      href: '/comprehensive-pricing-guide-2027',
      icon: DollarSign,
      description: 'Complete pricing information',
      featured: true
    }
  ];

  const quickLinks = [
    { name: 'Marketplace', href: '/marketplace', icon: ShoppingCart },
    { name: 'Request Quote', href: '/request-quote', icon: MessageCircle },
    { name: 'Pricing', href: '/pricing', icon: DollarSign },
    { name: 'Careers', href: '/careers', icon: Users },
    { name: 'Partners', href: '/partners', icon: HeartHandshake },
    { name: 'Privacy', href: '/privacy', icon: Shield },
    { name: 'Terms', href: '/terms', icon: BookOpen },
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709'
  };

  return (
    <>
<<<<<<< HEAD:src_disabled_1757239864/layout/AppHeader.tsx
      <header
        style={{ "--nav-height: 64px" } as React.CSSProperties}
        className={cn(
          "sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur-md text-foreground;
          { bg-red-500": mobileMenuOpen }
        )}
      >
        <div className="container flex h-16 items-center px-4 sm:px-6>
          <Logo />
          {showTagline && (
            <span className=ml-4 hidden text-sm text-muted-foreground md:inline">
              {t('home.header_tagline')}
            </span>
          )}
=======
  const showTagline = router.pathname === '/'
  // Messaging context (unread message count)
  const { unreadCount } = useMessaging()
  const openLoginModal = (returnToPath?: string,) => {
    // The actual returnToPath is set in the URL by the child components (ResponsiveNavigation, MobileMenu)
    // using router.push with shallow:true before this function is called.
    // This function's main job is just to open the modal.
    // If a returnToPath is passed, we could potentially use it for other logic here if needed in the future.
    setLoginOpen(true)
  }
<<<<<<< HEAD
        className = {cn(
          "sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur-md text-foreground"
          { "bg-red-500": mobileMenuOpen ,}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
import React from 'react';
  const showTagline = router && router.pathname === '/';

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false),;
  const [loginOpen, setLoginOpen] = useState(false),;
  const isMobile = useIsMobile(),;
  const { t } = useTranslation(),;
  const { user } = useAuth(),;
  const isLoggedIn = useSelector((state: RootState,) => state && state.auth.isLoggedIn),;
  const router = useRouter(),;
  const showTagline = router && router.pathname === '/',;

  // Messaging context (unread message count);
  const { unreadCount } = useMessaging(),;

  const openLoginModal = (returnToPath?: string,) => {;
    // The actual returnToPath is set in the URL by the child components (ResponsiveNavigation, MobileMenu);
    // using router && router.push with shallow:true before this function is called.;
    // This function's main job is just to open the modal.;
    // If a returnToPath is passed, we could potentially use it for other logic here if needed in the future.;
    setLoginOpen(true);
  },;

  return (
    <>
      <header
<<<<<<< HEAD
        style={{ "--nav-height": "64px" } as React.CSSProperties}
        className = {cn(
          "sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur-md text-foreground"
          { "bg-red-500": mobileMenuOpen ,}
        className={cn(
          "sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur-md text-foreground",
          { "bg-red-500": mobileMenuOpen }
=======

        style={{ "--nav-height": "64px" } as React.CSSProperties}

        className={cn(
          "sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur-md text-foreground",
          { "bg-red-500": mobileMenuOpen }


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        )}
      >
        <div className="container flex h-16 items-center px-4 sm:px-6">
          <Logo />
          {showTagline && (
            <span className="ml-4 hidden text-sm text-muted-foreground md:inline">
              {t('home.header_tagline')}
            </span>
          )}

          <div className="ml-6 flex-1 hidden md:block">;
            <nav role="navigation" aria-label="Main navigation">;
              <ResponsiveNavigation openLoginModal={openLoginModal} />;
            </nav>;
          </div>;


<<<<<<< HEAD
          )}
>>>>>>> merged-prs-20250907-203621
          <div className="ml-6 flex-1 hidden md:block">
            <nav role="navigation" aria-label="Main navigation">
              <ResponsiveNavigation openLoginModal={openLoginModal} />
            </nav>
          </div>
<<<<<<< HEAD
          
          {/* Mobile menu button */}
          <div className="md:hidden ml-auto mr-4">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-foreground/70 hover:text-foreground hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring
              aria-expanded={mobileMenuOpen}
              aria-label={t(general.toggle_mobile_menu)}
            >
              <span className=sr-only">{t('general.open_main_menu')}</span>
              {mobileMenuOpen ? (
                <X className="block h-6 w-6 aria-hidden=true" />
              ) : (
                <Menu className="block h-6 w-6 aria-hidden=true" />
              )}
            </button>
          </div>

          <PointsBadge />
          {!isLoggedIn && (
            <div className="ml-4 relative z-10 flex items-center>
=======
      <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-900/95 backdrop-blur-xl border-b border-cyan-400/20 shadow-2xl shadow-cyan-400/10' 
          : 'bg-slate-900/80 backdrop-blur-md border-b border-slate-700/20'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0 group">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                  </div>
=======
          {/* Mobile menu button */}
          <div className="md:hidden ml-auto mr-4">
            <button
              onClick = {() => setMobileMenuOpen(!mobileMenuOpen),}
              className="inline-flex items-center justify-center rounded-md p-2 text-foreground/70 hover:text-foreground hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-expanded = {mobileMenuOpen,}
              aria-label = {t('general.toggle_mobile_menu'),}
=======
          {/* Mobile menu button */}
          <div className="md:hidden ml-auto mr-4">
            <button


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-foreground/70 hover:text-foreground hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-expanded={mobileMenuOpen}
              aria-label={t('general.toggle_mobile_menu')}
<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            >
              <span className="sr-only">{t('general.open_main_menu')}</span>
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}

            </button>;
          </div>;

          <PointsBadge />;
          {!isLoggedIn && (;
            <div className="ml-4 relative z-10 flex items-center">;

              )}
            </button>
          </div>
          <PointsBadge />
          {!isLoggedIn && (
            <div className="ml-4 relative z-10 flex items-center">
              <Link
                href="/auth/login"
                className="text-sm font-medium text-foreground/70 hover:text-foreground"


                aria-label={t('auth.login')}
                data-testid="login-link"
                onClick={(e) => {

                  e.preventDefault(),
                  // For the main login link, we might not have a specific returnTo beyond current page,
<<<<<<< HEAD
                  e.preventDefault()
                  // For the main login link, we might not have a specific returnTo beyond current page
                aria-label={t('auth.login')}
                data-testid="login-link"
                onClick={(e) => {
                  // For the main login link, we might not have a specific returnTo beyond current page,
                aria-label = {t('auth.login'),}
                data-testid="login-link"
                onClick={(e,) => {
                  e.preventDefault()
                  // For the main login link, we might not have a specific returnTo beyond current page
                aria-label={t('auth.login')}
                data-testid="login-link"
                onClick={(e) => {
                  e.preventDefault(),
                  // For the main login link, we might not have a specific returnTo beyond current page,
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  // or we could default to dashboard.
                  router.push({ pathname: '/auth/login', query: { returnTo: router.asPath } }, undefined, { shallow: true })

                  openLoginModal(router.asPath)
                onClick={(e,) => {;
                  e && e.preventDefault(),;
                  // For the main login link, we might not have a specific returnTo beyond current page,;
                  // or we could default to dashboard.;
                  // For consistency with how sub-menus now set it:;
                  router && router.push({ pathname: '/auth/login', query: { returnTo: router && router.asPath } }, undefined, { shallow: true }),;
                  openLoginModal(router && router.asPath);
                }}
              >
                {t('auth.login')}
              </Link>
              <Link
                href="/signup"
                className="ml-2 text-sm font-medium text-foreground/70 hover:text-foreground"
<<<<<<< HEAD
                aria-label = {t('auth.signup'),}
                aria-label = {t('auth.signup'),}
                aria-label={t('auth.signup')}
=======


                aria-label={t('auth.signup')}


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                data-testid="signup-nav-link"
              >
                {t('auth.signup')}
              </Link>
            </div>
          )}
          {/* User avatar menu */}
          {isLoggedIn && (
            <div className="ml-4">
              <UserMenu />
            </div>
          )}
<<<<<<< HEAD
        </div>
      </header>
      {/* Mobile menu - positioned outside of header to prevent overlap issues */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-60 pt-16">
=======

        </div>;
      </header>;

      {/* Mobile menu - positioned outside of header to prevent overlap issues */}
      {mobileMenuOpen && (;
        <div className="md:hidden fixed inset-0 z-60 pt-16">;
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            onClick = {(,) => setMobileMenuOpen(false),}
            aria-hidden="true";
          />;
          <div className="relative bg-background border-t border-border h-auto max-h-[calc(100vh-4rem)] overflow-y-auto">;

            <MobileMenu
<<<<<<< HEAD
            onClick = {(,) => setMobileMenuOpen(false),}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick = {(,) => setMobileMenuOpen(false),}
            aria-hidden="true"
          />
          <div className="relative bg-background border-t border-border h-auto max-h-[calc(100vh-4rem)] overflow-y-auto">
            <MobileMenu
            onClick = {(,) => setMobileMenuOpen(false),}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="relative bg-background border-t border-border h-auto max-h-[calc(100vh-4rem)] overflow-y-auto">
            <MobileMenu 
              unreadCount = {unreadCount,}
              onClose = {() => setMobileMenuOpen(false),}
              openLoginModal = {openLoginModal,}
            />
          </div>
        </div>
<<<<<<< HEAD
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="relative bg-background border-t border-border h-auto max-h-[calc(100vh-4rem)] overflow-y-auto">
            <MobileMenu 
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              unreadCount={unreadCount} 
              onClose={() => setMobileMenuOpen(false)}
              openLoginModal={openLoginModal}
            />;
          </div>;
        </div>;
<<<<<<< HEAD
      {/* Mobile Bottom Navigation */}
      {isMobile && <MobileBottomNav unreadCount={unreadCount} />}
;
}
}
}

      )}
      {/* Mobile Bottom Navigation */}
      {isMobile && <MobileBottomNav unreadCount={unreadCount} />}

      )}
      {/* Mobile Bottom Navigation */}
      {isMobile && <MobileBottomNav unreadCount={unreadCount} />}
      <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />
    </>
      setActiveNav(null)
      setServicesDropdownOpen(false)
      setSolutionsDropdownOpen(false)
      setCompanyDropdownOpen(false)
      setResourcesDropdownOpen(false)}
=======
      )}
      {/* Mobile Bottom Navigation */}
      {isMobile && <MobileBottomNav unreadCount={unreadCount} />}

  const show_tagline = router.pathname === '/';
  const [mobileMenuOpen, setMobileMenuOpen] = useState (false),
  const [login_open, setLoginOpen] = useState (false),
  const is_mobile = useIsMobile (),
  const { t } = use_translation (),
  const { user } = use_auth (),
  const isLoggedIn = use_selector ((state: RootState, ) => state.auth.isLoggedIn),
  const router = use_router (),
  const show_tagline = router.pathname === '/',
  // Messaging context (unread message count);
  const { unread_count } = use_messaging (),
  const openLoginModal = (returnToPath?: string, ) =>: any {
    // The actual returnToPath is set in the URL by the child components (ResponsiveNavigation, MobileMenu);
    // using router.push with shallow:true before this function is called.;
    // This function's main job is just to open the modal.;
    // If a returnToPath is passed, we could potentially use it for other logic here if needed in the future.;
    setLoginOpen (true);
  },
  return (
    <>;
      <header;
        style={{ "--nav - height": "64px" } as React.CSSProperties}
        class_name = {cn (
          "sticky top - 0 z - 50 w - full border - b border - border bg - background / 90 backdrop - blur - md text - foreground",
          { "bg - red - 500": mobileMenuOpen , }
        )}
      >;
        <div className="container flex h - 16 items - center px - 4 sm:px - 6">;
          <Logo />;
          {show_tagline && (
            <span className="ml - 4 hidden text - sm text - muted - foreground md:inline">;
              {t ('home.header_tagline')}
            </span>)}
          <div className="ml - 6 flex - 1 hidden md:block">;
            <nav role="navigation" aria - label="Main navigation">;
              <ResponsiveNavigation openLoginModal={openLoginModal} />;
            </nav>;
          </div>;
          {/* Mobile menu button */}
          <div className="md:hidden ml - auto mr - 4">;
            <button;
              on_click = {() => setMobileMenuOpen (!mobileMenuOpen), }
              className="inline - flex items - center justify - center rounded - md p - 2 text - foreground / 70 hover:text - foreground hover:bg - primary / 10 focus - visible:outline - none focus - visible:ring - 2 focus - visible:ring - ring";
              aria - expanded = {mobileMenuOpen, }
              aria - label = {t ('general.toggle_mobile_menu'), }
            >;
              <span className="sr - only">{t ('general.open_main_menu')}</span>;
              {mobileMenuOpen ? (
                <X className="block h - 6 w - 6" aria - hidden="true" />) : (
                <Menu className="block h - 6 w - 6" aria - hidden="true" />)}
            </button>;
          </div>;
          <PointsBadge />;
          {!isLoggedIn && (
            <div className="ml - 4 relative z - 10 flex items - center">;
              <Link;
                href="/auth / login";
                className="text - sm font - medium text - foreground / 70 hover:text - foreground";
                aria - label = {t ('auth.login'), }
                data - testid="login - link";
                on_click={(e, ) => {
                  e.prevent_default (),
                  // For the main login link, we might not have a specific return_to beyond current page,
                  // or we could default to dashboard.;
                  // For consistency with how sub - menus now set it:;
                  router.push ({ pathname: '/auth / login', query: { return_to: router.as_path } }, undefined, { shallow: true }),
                  openLoginModal (router.as_path);
                }}
              >;
                {t ('auth.login')}
              </Link>;
              <Link;
                href="/signup";
                className="ml - 2 text - sm font - medium text - foreground / 70 hover:text - foreground";
                aria - label = {t ('auth.signup'), }
                data - testid="signup - nav - link";
              >;
                {t ('auth.signup')}
              </Link>;
            </div>)}
          {/* User avatar menu */}
          {isLoggedIn && (
            <div className="ml - 4">;
              <UserMenu />;
            </div>)}
        </div>;
      </header>;
      {/* Mobile menu - positioned outside of header to prevent overlap issues */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset - 0 z - 60 pt - 16">;
          <div;
            className="absolute inset - 0 bg - black / 50 backdrop - blur - sm";
            on_click = {(, ) => setMobileMenuOpen (false), }
            aria - hidden="true";
          />;
          <div className="relative bg - background border - t border - border h - auto max - h-[calc (100vh - 4rem)] overflow - y-auto">;
            <MobileMenu;
              unread_count = {unread_count, }
              on_close = {() => setMobileMenuOpen (false), }
              openLoginModal = {openLoginModal, }
            />;
          </div>;
        </div>)}
      {/* Mobile Bottom Navigation */}
      {is_mobile && <MobileBottomNav unread_count={unread_count} />}
      <LoginModal is_open={login_open} onOpenChange={setLoginOpen} />;
    </>;
      setActiveNav (null);
      setServicesDropdownOpen (false);
      setSolutionsDropdownOpen (false);
      setCompanyDropdownOpen (false);
      setResourcesDropdownOpen (false)}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  }
  const closeAllDropdowns = (...args: unknown[]): unknown => {
    setServicesDropdownOpen(false);    setSolutionsDropdownOpen(false)
    setCompanyDropdownOpen(false)
    setResourcesDropdownOpen(false)
    setActiveNav(null)}
  return ()
    <>`
      <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${        scrolled
          ? 'bg-slate-900/95 backdrop-blur-xl border-b border-cyan-400/20 shadow-2xl shadow-cyan-400/10'
          : 'bg-slate-900/80 backdrop-blur-md border-b border-slate-700/20'      }`}>
        <div className="container-responsive">"
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}"
            <div className="flex items-center">"
              <Link to="/" className="flex-shrink-0 group">"
                <div className="flex items-center space-x-3">"
                  <div className="relative">"
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">"
                      <Zap className="w-6 h-6 text-white"  />
                    </div>"                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                  </div>"
>>>>>>> merged-prs-20250907-203621
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                    Zion Tech Group
                  </h1>
                </div>
<<<<<<< HEAD
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
<<<<<<< HEAD
                <div key={item.name} className="relative">
                  {item.hasDropdown ? (
                    <div className="relative">
                      <button
                        onClick={() => {
                          if (item.name === 'Services') {
                            setServicesDropdownOpen(!servicesDropdownOpen);
                            setSolutionsDropdownOpen(false);
                            setResourcesDropdownOpen(false);
                          } else if (item.name === 'Solutions') {
                            setSolutionsDropdownOpen(!solutionsDropdownOpen);
                            setServicesDropdownOpen(false);
                            setResourcesDropdownOpen(false);
                          } else if (item.name === 'Resources') {
                            setResourcesDropdownOpen(!resourcesDropdownOpen);
                            setServicesDropdownOpen(false);
                            setSolutionsDropdownOpen(false);
                          }
                        }}
                        className="flex items-center text-slate-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-all duration-200 relative group"
                      >
                        {item.name}
                        <ChevronDown className="ml-1 w-4 h-4 group-hover:rotate-180 transition-transform duration-200" />
                      </button>

                      {/* Services Dropdown */}
                      {item.name === 'Services' && servicesDropdownOpen && (
                        <div className="absolute top-full left-0 w-96 bg-slate-800/95 backdrop-blur-xl border border-slate-700/50 rounded-xl shadow-2xl shadow-black/50 p-6 z-50">
                          <div className="grid grid-cols-1 gap-4">
                            {services.map((service) => (
                              <Link
                                key={service.name}
                                to={service.href}
                                className="group p-4 rounded-lg hover:bg-slate-700/50 transition-all duration-200"
                                onClick={() => setServicesDropdownOpen(false)}
                              >
                                <div className="flex items-start space-x-3">
                                  <div className={`w-10 h-10 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                                    <service.icon className="w-5 h-5 text-white" />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors duration-200">
                                      {service.name}
                                    </p>
                                    <p className="text-xs text-slate-400 mt-1">
                                      {service.description}
                                    </p>
                                  </div>
                                  {service.featured && (
                                    <Star className="w-4 h-4 text-yellow-400 fill-current flex-shrink-0" />
                                  )}
                                </div>
                              </Link>
                            ))}
                          </div>
                          <div className="mt-4 pt-4 border-t border-slate-700/50">
                            <Link
                              to="/services"
                              className="flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
                              onClick={() => setServicesDropdownOpen(false)}
                            >
                              View All Services
                              <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                          </div>
                        </div>
                      )}

                      {/* Solutions Dropdown */}
                      {item.name === 'Solutions' && solutionsDropdownOpen && (
                        <div className="absolute top-full left-0 w-96 bg-slate-800/95 backdrop-blur-xl border border-slate-700/50 rounded-xl shadow-2xl shadow-black/50 p-6 z-50">
                          <div className="grid grid-cols-1 gap-4">
                            {solutions.map((solution) => (
                              <Link
                                key={solution.name}
                                to={solution.href}
                                className="group p-4 rounded-lg hover:bg-slate-700/50 transition-all duration-200"
                                onClick={() => setSolutionsDropdownOpen(false)}
                              >
                                <div className="flex items-start space-x-3">
                                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <solution.icon className="w-5 h-5 text-white" />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors duration-200">
                                      {solution.name}
                                    </p>
                                    <p className="text-xs text-slate-400 mt-1">
                                      {solution.description}
                                    </p>
                                  </div>
                                  {solution.featured && (
                                    <Star className="w-4 h-4 text-yellow-400 fill-current flex-shrink-0" />
                                  )}
                                </div>
                              </Link>
                            ))}
                          </div>
                          <div className="mt-4 pt-4 border-t border-slate-700/50">
                            <Link
                              to="/solutions"
                              className="flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-600 text-white text-sm font-medium rounded-lg hover:from-blue-600 hover:to-cyan-700 transition-all duration-200"
                              onClick={() => setSolutionsDropdownOpen(false)}
                            >
                              View All Solutions
                              <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                          </div>
                        </div>
                      )}

                      {/* Resources Dropdown */}
                      {item.name === 'Resources' && resourcesDropdownOpen && (
                        <div className="absolute top-full left-0 w-96 bg-slate-800/95 backdrop-blur-xl border border-slate-700/50 rounded-xl shadow-2xl shadow-black/50 p-6 z-50">
                          <div className="grid grid-cols-1 gap-4">
                            {resources.map((resource) => (
                              <Link
                                key={resource.name}
                                to={resource.href}
                                className="group p-4 rounded-lg hover:bg-slate-700/50 transition-all duration-200"
                                onClick={() => setResourcesDropdownOpen(false)}
                              >
                                <div className="flex items-start space-x-3">
                                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <resource.icon className="w-5 h-5 text-white" />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-white group-hover:text-cyan-400 transition-colors duration-200">
                                      {resource.name}
                                    </p>
                                    <p className="text-xs text-slate-400 mt-1">
                                      {resource.description}
                                    </p>
                                  </div>
                                  {resource.featured && (
                                    <Star className="w-4 h-4 text-yellow-400 fill-current flex-shrink-0" />
                                  )}
                                </div>
                              </Link>
                            ))}
                          </div>
                          <div className="mt-4 pt-4 border-t border-slate-700/50">
                            <Link
                              to="/resources"
                              className="flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-600 text-white text-sm font-medium rounded-lg hover:from-purple-600 hover:to-pink-700 transition-all duration-200"
                              onClick={() => setResourcesDropdownOpen(false)}
                            >
                              View All Resources
                              <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                          </div>
                        </div>
                      )}
=======
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-slate-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-all duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
              
              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                  className="flex items-center text-slate-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-all duration-200 relative group"
                >
                  Services
                  <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </button>
                
                {servicesDropdownOpen && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-96 bg-slate-800/95 border border-cyan-400/20 rounded-xl shadow-2xl backdrop-blur-xl animate-fade-in"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <div className="p-6">
                      <div className="grid grid-cols-1 gap-3">
=======
                <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
              </Link>
            </div>
            {/* Desktop Navigation */}            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => ("
                <div key={item.name} className="relative">
                  {item.hasDropdown ? ("
                    <div className="relative">
                      <button
                        onClick={() => {
              <AnimatePresence>
                {activeDropdown === 'services' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-zion-slate-dark border border-zion-cyan/20 rounded-xl shadow-2xl backdrop-blur-md">
                    <div className="p-4">
                      <div className="grid grid-cols-1 gap-2">
>>>>>>> merged-prs-20250907-203621
                        {services.map((service) => (
                          <Link
                            key={service.name}
                            to={service.href}
<<<<<<< HEAD
                            className="flex items-center p-4 rounded-lg hover:bg-slate-700/50 transition-all duration-200 group hover:scale-105"
                          >
                            <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-lg flex items-center justify-center group-hover:from-cyan-400/40 group-hover:to-blue-500/40 transition-all duration-200">
                              <service.icon className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                            </div>
                            <div className="ml-4 flex-1">
                              <div className="text-white font-medium group-hover:text-cyan-400 transition-colors">
                                {service.name}
                              </div>
                              <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                                {service.description}
                              </div>
                            </div>
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                              <ChevronDown className="w-4 h-4 text-cyan-400 rotate-[-90deg]" />
                            </div>
                          </Link>
                        ))}
                      </div>
                      <div className="mt-6 pt-4 border-t border-slate-700/50">
                        <Link
                          to="/services"
                          className="block text-center text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors py-2 px-4 rounded-lg hover:bg-cyan-400/10"
                        >
                          View All Services →
                        </Link>
                      </div>
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                    </div>
                  ) : (
                    <Link
                      to={item.href}
                      className="text-slate-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-all duration-200"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Right side - Search, Contact, Mobile menu */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="hidden md:block relative">
                <form onSubmit={handleSearch} className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search services..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-64 pl-10 pr-4 py-2 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-200"
                  />
                  <button
                    type="submit"
                    disabled={isSearching}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-cyan-400 transition-colors duration-200"
                  >
                    {isSearching ? (
                      <div className="w-4 h-4 border-2 border-cyan-400 border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <ArrowRight className="w-4 h-4" />
                    )}
                  </button>
                </form>
              </div>

<<<<<<< HEAD
              {/* Contact Button */}
              <div className="hidden md:block">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Contact Us
                </Link>
              </div>

              {/* Theme Toggle */}
              <ThemeToggle />
=======
              {/* CTA Button */}
>>>>>>> origin/main:src/layout/AppHeader.tsx
              <Link
                to="/contact"
                className="hidden md:inline-flex items-center px-4 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-sm font-medium rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-cyan-400/25"
              >
                Get Started
              </Link>
<<<<<<< HEAD:src_disabled_1757239864/layout/AppHeader.tsx
              <Link
                href=/signup"
                className="ml-2 text-sm font-medium text-foreground/70 hover:text-foreground
                aria-label={t(auth.signup)}
                data-testid=signup-nav-link"
=======
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
<<<<<<< HEAD
                className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700/50 transition-all duration-200"
=======
                className="lg:hidden p-2 text-gray-400 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg transition-all duration-200"
>>>>>>> origin/main:src/layout/AppHeader.tsx
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
<<<<<<< HEAD:src_disabled_1757239864/layout/AppHeader.tsx
          )}
          {/* User avatar menu */}
          {isLoggedIn && (
            <div className="ml-4>
              <UserMenu />
            </div>
          )}
        </div>
      </header>
      
      {/* Mobile menu - positioned outside of header to prevent overlap issues */}
      {mobileMenuOpen && (
        <div className=md:hidden fixed inset-0 z-60 pt-16">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden=true"
          />
          <div className="relative bg-background border-t border-border h-auto max-h-[calc(100vh-4rem)] overflow-y-auto">
            <MobileMenu 
              unreadCount={unreadCount} 
              onClose={() => setMobileMenuOpen(false)}
              openLoginModal={openLoginModal}
            />
=======
>>>>>>> origin/main:src/layout/AppHeader.tsx
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-800/95 backdrop-blur-xl border-t border-slate-700/50">
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search services..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50"
                />
              </form>

<<<<<<< HEAD
              {/* Mobile Navigation */}
              <nav className="space-y-2">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.hasDropdown ? (
                      <div>
                        <button
                          onClick={() => {
                            if (item.name === 'Services') {
                              setServicesDropdownOpen(!servicesDropdownOpen);
                            } else if (item.name === 'Solutions') {
                              setSolutionsDropdownOpen(!solutionsDropdownOpen);
                            } else if (item.name === 'Resources') {
                              setResourcesDropdownOpen(!resourcesDropdownOpen);
                            }
                          }}
                          className="flex items-center justify-between w-full px-4 py-3 text-left text-slate-300 hover:text-white hover:bg-slate-700/50 rounded-lg transition-all duration-200"
                        >
                          {item.name}
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                            (item.name === 'Services' && servicesDropdownOpen) ||
                            (item.name === 'Solutions' && solutionsDropdownOpen) ||
                            (item.name === 'Resources' && resourcesDropdownOpen)
                              ? 'rotate-180' : ''
                          }`} />
                        </button>

                        {/* Mobile Dropdowns */}
                        {item.name === 'Services' && servicesDropdownOpen && (
                          <div className="ml-4 mt-2 space-y-2">
                            {services.slice(0, 5).map((service) => (
                              <Link
                                key={service.name}
                                to={service.href}
                                className="block px-4 py-2 text-sm text-slate-400 hover:text-white hover:bg-slate-700/50 rounded-lg transition-all duration-200"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {service.name}
                              </Link>
                            ))}
                            <Link
                              to="/services"
                              className="block px-4 py-2 text-sm text-cyan-400 hover:text-cyan-300 font-medium"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              View All Services →
                            </Link>
                          </div>
                        )}

                        {item.name === 'Solutions' && solutionsDropdownOpen && (
                          <div className="ml-4 mt-2 space-y-2">
                            {solutions.slice(0, 5).map((solution) => (
                              <Link
                                key={solution.name}
                                to={solution.href}
                                className="block px-4 py-2 text-sm text-slate-400 hover:text-white hover:bg-slate-700/50 rounded-lg transition-all duration-200"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {solution.name}
                              </Link>
                            ))}
                            <Link
                              to="/solutions"
                              className="block px-4 py-2 text-sm text-cyan-400 hover:text-cyan-300 font-medium"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              View All Solutions →
                            </Link>
                          </div>
                        )}

                        {item.name === 'Resources' && resourcesDropdownOpen && (
                          <div className="ml-4 mt-2 space-y-2">
                            {resources.slice(0, 5).map((resource) => (
                              <Link
                                key={resource.name}
                                to={resource.href}
                                className="block px-4 py-2 text-sm text-slate-400 hover:text-white hover:bg-slate-700/50 rounded-lg transition-all duration-200"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                {resource.name}
                              </Link>
                            ))}
                            <Link
                              to="/resources"
                              className="block px-4 py-2 text-sm text-cyan-400 hover:text-cyan-300 font-medium"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              View All Resources →
                            </Link>
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        to={item.href}
                        className="block px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-700/50 rounded-lg transition-all duration-200"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
=======
              {/* Mobile navigation */}
              <nav className="space-y-4">
=======
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-center p-3 rounded-lg hover:bg-zion-slate/50 transition-colors group">
                            <div className={`w-10 h-10 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform`}>
                              <service.icon className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <div className="font-medium text-white group-hover:text-zion-cyan transition-colors">
                                {service.name}
                              </div>
                              <div className="text-sm text-zion-slate-light">
                                {service.description}
<<<<<<< HEAD
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
=======

      <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />;
    </>;
      setActiveNav(null);
      setServicesDropdownOpen(false);
      setSolutionsDropdownOpen(false);
      setCompanyDropdownOpen(false);
      setResourcesDropdownOpen(false)}
  };
  const closeAllDropdowns = (...args: unknown[]): unknown => {;
    setServicesDropdownOpen(false);    setSolutionsDropdownOpen(false);
    setCompanyDropdownOpen(false);
    setResourcesDropdownOpen(false);
    setActiveNav(null)};
  return ();
    <>`;
      <headerclassName={`sticky top-0 z-50 w-full transition-all duration-300 ${        scrolled
          ? 'bg-slate-900/95 backdrop-blur-xl border-b border-cyan-400/20 shadow-2xl shadow-cyan-400/10'
          : 'bg-slate-900/80 backdrop-blur-md border-b border-slate-700/20'      }`}>;
        <div className="container-responsive">";
          <div className="flex h-20 items-center justify-between">;
            {/* Logo */}";
            <div className="flex items-center">";
              <Link to="/" className="flex-shrink-0 group">";
                <div className="flex items-center space-x-3">";
                  <div className="relative">";
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">";
                      <Zap className="w-6 h-6 text-white"  />;
                    </div>"                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>;
                  </div>";
                  <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">;
                    Zion Tech Group;
                  </h1>;
                </div>;
                <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">;
                  Zion Tech Group;
                </span>;
              </Link>;
            </div>;

            {/* Desktop Navigation */}            <nav className="hidden lg:flex items-center space-x-8">;
              {navigation && navigation.map((item) => (";
                <div key={item && item.name} className="relative">;
                  {item && item.hasDropdown ? (";
                    <div className="relative">;
                      <button
                        onClick={() => {;

              <AnimatePresence>;
                {activeDropdown === 'services' && (;
                  <motion&& motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0 && 0.2 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-zion-slate-dark border border-zion-cyan/20 rounded-xl shadow-2xl backdrop-blur-md">;
                    <div className="p-4">;
                      <div className="grid grid-cols-1 gap-2">;
                        {services && services.map((service) => (;
                          <Link
                            key={service && service.name}
                            to={service && service.href}
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-center p-3 rounded-lg hover:bg-zion-slate/50 transition-colors group">;
                            <div className={`w-10 h-10 bg-gradient-to-r ${service && service.color} rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform`}>;
                              <service && service.icon className="w-5 h-5 text-white" />;
                            </div>;
                            <div>;
                              <div className="font-medium text-white group-hover:text-zion-cyan transition-colors">;
                                {service && service.name}
                              </div>;
                              <div className="text-sm text-zion-slate-light">;
                                {service && service.description}
                              </div>;
                            </div>;
                          </Link>;
                        ))}
                      </div>;
                    </div>;
                  </motion && motion.div>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                )}
              </AnimatePresence>
            </div>
            {/* Solutions Dropdown */}
<<<<<<< HEAD
            <div className="relative dropdown-container">
=======

            <div className="relative dropdown-container">;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              <button
                onClick={() => toggleDropdown('solutions')}
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 transition-colors"
                aria-expanded={activeDropdown === 'solutions'}
<<<<<<< HEAD
                aria-haspopup="true">
                Solutions
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === 'solutions' ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {activeDropdown === 'solutions' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
=======

                              </div>;
                            </div>;
                          </Link>))}
                      </div>;
                    </div>;
                  </motion.div>)}
              </AnimatePresence>;
            </div>;
            {/* Solutions Dropdown */}
            <div className="relative dropdown - container">;
              <button;
                on_click={() => toggle_dropdown ('solutions')}
                className="flex items - center px - 3 py - 2 rounded - md text - sm font - medium text - zion - slate - light hover:text - zion - cyan hover:bg - zion - cyan / 10 transition - colors";
                aria - expanded={active_dropdown === 'solutions'}
                aria - haspopup="true">;
                Solutions;
                <ChevronDown className={`ml - 1 h - 4 w - 4 transition - transform ${active_dropdown === 'solutions' ? 'rotate - 180' : ''}`} />;
              </button>;
              <AnimatePresence>;
                {active_dropdown === 'solutions' && (
                  <motion.div;
                    initial={{ opacity: 0, coordinate_y: -10 }}
                    animate={{ opacity: 1, coordinate_y: 0 }}
                    exit={{ opacity: 0, coordinate_y: -10 }}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-zion-slate-dark border border-zion-cyan/20 rounded-xl shadow-2xl backdrop-blur-md">
                    <div className="p-4">
                      <div className="grid grid-cols-1 gap-2">
                        {solutions.map((solution) => (
                          <Link
                            key={solution.name}
                            to={solution.href}
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-center p-3 rounded-lg hover:bg-zion-slate/50 transition-colors group">
                            <div className={`w-10 h-10 bg-gradient-to-r ${solution.color} rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform`}>
                              <solution.icon className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <div className="font-medium text-white group-hover:text-zion-cyan transition-colors">
                                {solution.name}
                              </div>
                              <div className="text-sm text-zion-slate-light">
                                {solution.description}
<<<<<<< HEAD
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
=======

                aria-haspopup="true">;
                Solutions;
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === 'solutions' ? 'rotate-180' : ''}`} />;
              </button>;

              <AnimatePresence>;
                {activeDropdown === 'solutions' && (;
                  <motion&& motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0 && 0.2 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-zion-slate-dark border border-zion-cyan/20 rounded-xl shadow-2xl backdrop-blur-md">;
                    <div className="p-4">;
                      <div className="grid grid-cols-1 gap-2">;
                        {solutions && solutions.map((solution) => (;
                          <Link
                            key={solution && solution.name}
                            to={solution && solution.href}
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-center p-3 rounded-lg hover:bg-zion-slate/50 transition-colors group">;
                            <div className={`w-10 h-10 bg-gradient-to-r ${solution && solution.color} rounded-lg flex items-center justify-center mr-3 group-hover:scale-110 transition-transform`}>;
                              <solution && solution.icon className="w-5 h-5 text-white" />;
                            </div>;
                            <div>;
                              <div className="font-medium text-white group-hover:text-zion-cyan transition-colors">;
                                {solution && solution.name}
                              </div>;
                              <div className="text-sm text-zion-slate-light">;
                                {solution && solution.description}
                              </div>;
                            </div>;
                          </Link>;
                        ))}
                      </div>;
                    </div>;
                  </motion && motion.div>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                )}
              </AnimatePresence>
            </div>
            {/* Resources Dropdown */}
<<<<<<< HEAD
            <div className="relative dropdown-container">
=======

            <div className="relative dropdown-container">;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              <button
                onClick={() => toggleDropdown('resources')}
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 transition-colors"
                aria-expanded={activeDropdown === 'resources'}
<<<<<<< HEAD
                aria-haspopup="true">
                Resources
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === 'resources' ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {activeDropdown === 'resources' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
=======

                              </div>;
                            </div>;
                          </Link>))}
                      </div>;
                    </div>;
                  </motion.div>)}
              </AnimatePresence>;
            </div>;
            {/* Resources Dropdown */}
            <div className="relative dropdown - container">;
              <button;
                on_click={() => toggle_dropdown ('resources')}
                className="flex items - center px - 3 py - 2 rounded - md text - sm font - medium text - zion - slate - light hover:text - zion - cyan hover:bg - zion - cyan / 10 transition - colors";
                aria - expanded={active_dropdown === 'resources'}
                aria - haspopup="true">;
                Resources;
                <ChevronDown className={`ml - 1 h - 4 w - 4 transition - transform ${active_dropdown === 'resources' ? 'rotate - 180' : ''}`} />;
              </button>;
              <AnimatePresence>;
                {active_dropdown === 'resources' && (
                  <motion.div;
                    initial={{ opacity: 0, coordinate_y: -10 }}
                    animate={{ opacity: 1, coordinate_y: 0 }}
                    exit={{ opacity: 0, coordinate_y: -10 }}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-zion-slate-dark border border-zion-cyan/20 rounded-xl shadow-2xl backdrop-blur-md">
                    <div className="p-4">
                      <div className="grid grid-cols-1 gap-2">
                        {resources.map((resource) => (
                          <Link
                            key={resource.name}
                            to={resource.href}
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-center p-3 rounded-lg hover:bg-zion-slate/50 transition-colors group">
                            <resource.icon className="w-5 h-5 text-zion-cyan mr-3 group-hover:scale-110 transition-transform" />
                            <span className="text-white group-hover:text-zion-cyan transition-colors">
                              {resource.name}
<<<<<<< HEAD
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
=======

                aria-haspopup="true">;
                Resources;
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === 'resources' ? 'rotate-180' : ''}`} />;
              </button>;

              <AnimatePresence>;
                {activeDropdown === 'resources' && (;
                  <motion&& motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0 && 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-zion-slate-dark border border-zion-cyan/20 rounded-xl shadow-2xl backdrop-blur-md">;
                    <div className="p-4">;
                      <div className="grid grid-cols-1 gap-2">;
                        {resources && resources.map((resource) => (;
                          <Link
                            key={resource && resource.name}
                            to={resource && resource.href}
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-center p-3 rounded-lg hover:bg-zion-slate/50 transition-colors group">;
                            <resource && resource.icon className="w-5 h-5 text-zion-cyan mr-3 group-hover:scale-110 transition-transform" />;
                            <span className="text-white group-hover:text-zion-cyan transition-colors">;
                              {resource && resource.name}
                            </span>;
                          </Link>;
                        ))}
                      </div>;
                    </div>;
                  </motion && motion.div>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                )}
              </AnimatePresence>
            </div>
            {/* Company Dropdown */}
<<<<<<< HEAD
            <div className="relative dropdown-container">
=======

            <div className="relative dropdown-container">;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              <button
                onClick={() => toggleDropdown('company')}
                className="flex items-center px-3 py-2 rounded-md text-sm font-medium text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10 transition-colors"
                aria-expanded={activeDropdown === 'company'}
<<<<<<< HEAD
                aria-haspopup="true">
                Company
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === 'company' ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {activeDropdown === 'company' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
=======

                            </span>;
                          </Link>))}
                      </div>;
                    </div>;
                  </motion.div>)}
              </AnimatePresence>;
            </div>;
            {/* Company Dropdown */}
            <div className="relative dropdown - container">;
              <button;
                on_click={() => toggle_dropdown ('company')}
                className="flex items - center px - 3 py - 2 rounded - md text - sm font - medium text - zion - slate - light hover:text - zion - cyan hover:bg - zion - cyan / 10 transition - colors";
                aria - expanded={active_dropdown === 'company'}
                aria - haspopup="true">;
                Company;
                <ChevronDown className={`ml - 1 h - 4 w - 4 transition - transform ${active_dropdown === 'company' ? 'rotate - 180' : ''}`} />;
              </button>;
              <AnimatePresence>;
                {active_dropdown === 'company' && (
                  <motion.div;
                    initial={{ opacity: 0, coordinate_y: -10 }}
                    animate={{ opacity: 1, coordinate_y: 0 }}
                    exit={{ opacity: 0, coordinate_y: -10 }}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-zion-slate-dark border border-zion-cyan/20 rounded-xl shadow-2xl backdrop-blur-md">
                    <div className="p-4">
                      <div className="grid grid-cols-1 gap-2">
                        {company.map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-center p-3 rounded-lg hover:bg-zion-slate/50 transition-colors group">
                            <item.icon className="w-5 h-5 text-zion-cyan mr-3 group-hover:scale-110 transition-transform" />
                            <span className="text-white group-hover:text-zion-cyan transition-colors">
                              {item.name}
<<<<<<< HEAD
                            </span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </motion.div>
=======

                aria-haspopup="true">;
                Company;
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === 'company' ? 'rotate-180' : ''}`} />;
              </button>;

              <AnimatePresence>;
                {activeDropdown === 'company' && (;
                  <motion&& motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0 && 0.2 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-zion-slate-dark border border-zion-cyan/20 rounded-xl shadow-2xl backdrop-blur-md">;
                    <div className="p-4">;
                      <div className="grid grid-cols-1 gap-2">;
                        {company && company.map((item) => (;
                          <Link
                            key={item && item.name}
                            to={item && item.href}
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-center p-3 rounded-lg hover:bg-zion-slate/50 transition-colors group">;
                            <item && item.icon className="w-5 h-5 text-zion-cyan mr-3 group-hover:scale-110 transition-transform" />;
                            <span className="text-white group-hover:text-zion-cyan transition-colors">;
                              {item && item.name}
                            </span>;
                          </Link>;
                        ))}
                      </div>;
                    </div>;
                  </motion && motion.div>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                )}
              </AnimatePresence>
            </div>
          </nav>
                            </span>;
                          </Link>))}
                      </div>;
                    </div>;
                  </motion.div>)}
              </AnimatePresence>;
            </div>;
          </nav>;
          {/* Right side - Search, User, Mobile menu */}
          <div className="flex items-center space-x-4">
            {/* Search */}
<<<<<<< HEAD
            <div className="relative hidden md:block">
              <form onSubmit={handleSearch} className="relative">
=======

            <div className="relative hidden md:block">;
              <form onSubmit={handleSearch} className="relative">;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                  className={`w-64 px-4 py-2 pl-10 bg-zion-slate/20 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan transition-all duration-200 ${
                    searchFocused ? 'w-80' : ''
            <div className="relative hidden md:block">;
              <form on_submit={handle_search} className="relative">;
                <input;
                  type="text";
                  placeholder="Search...";
                  value={search_query}
                  on_change={(e) => setSearchQuery (e.target.value)}
                  on_focus={() => setSearchFocused (true)}
                  on_blur={() => setSearchFocused (false)}
                  className={`w - 64 px - 4 py - 2 pl - 10 bg - zion - slate / 20 border border - zion - cyan / 20 rounded - lg text - white placeholder - zion - slate - light focus:outline - none focus:ring - 2 focus:ring - zion - cyan / 50 focus:border - zion - cyan transition - all duration - 200 ${
                    search_focused ? 'w - 80' : '';
}`}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zion-slate-light" />
              </form>
            </div>
            {/* User Menu */}
<<<<<<< HEAD
            {user ? (
              <div className="relative dropdown-container">
=======

            {user ? (;
              <div className="relative dropdown-container">;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                <button
                  onClick={() => toggleDropdown('user')}
                  className="flex items-center space-x-2 p-2 rounded-lg hover:bg-zion-cyan/10 transition-colors"
                  aria-expanded={activeDropdown === 'user'}
<<<<<<< HEAD
                  aria-haspopup="true">
                  <div className="w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white text-sm hidden lg:block">{user.name}</span>
                  <ChevronDown className="w-4 h-4 text-zion-slate-light" />
                </button>
                <AnimatePresence>
                  {activeDropdown === 'user' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
=======

              <div className="relative dropdown - container">;
                <button;
                  on_click={() => toggle_dropdown ('user')}
                  className="flex items - center space - x-2 p - 2 rounded - lg hover:bg - zion - cyan / 10 transition - colors";
                  aria - expanded={active_dropdown === 'user'}
                  aria - haspopup="true">;
                  <div className="w - 8 h - 8 bg - gradient - to - r from - zion - cyan to - zion - blue rounded - full flex items - center justify - center">;
                    <User className="w - 4 h - 4 text - white" />;
                  </div>;
                  <span className="text - white text - sm hidden lg:block">{user.name}</span>;
                  <ChevronDown className="w - 4 h - 4 text - zion - slate - light" />;
                </button>;
                <AnimatePresence>;
                  {active_dropdown === 'user' && (
                    <motion.div;
                      initial={{ opacity: 0, coordinate_y: -10 }}
                      animate={{ opacity: 1, coordinate_y: 0 }}
                      exit={{ opacity: 0, coordinate_y: -10 }}

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                      transition={{ duration: 0.2 }}
                      className="absolute top-full right-0 mt-2 w-48 bg-zion-slate-dark border border-zion-cyan/20 rounded-xl shadow-2xl backdrop-blur-md">
                      <div className="p-2">
                        <Link
                          to="/dashboard"
                          onClick={() => setActiveDropdown(null)}
                          className="flex items-center w-full p-3 rounded-lg hover:bg-zion-slate/50 transition-colors text-white hover:text-zion-cyan">
                          <PanelLeft className="w-4 h-4 mr-3" />
                          Dashboard
                        </Link>
                        <Link
                          to="/profile"
                          onClick={() => setActiveDropdown(null)}
                          className="flex items-center w-full p-3 rounded-lg hover:bg-zion-slate/50 transition-colors text-white hover:text-zion-cyan">
                          <User className="w-4 h-4 mr-3" />
                          Profile
                        </Link>
                        <Link
                          to="/settings"
                          onClick={() => setActiveDropdown(null)}
                          className="flex items-center w-full p-3 rounded-lg hover:bg-zion-slate/50 transition-colors text-white hover:text-zion-cyan">
                          <Settings className="w-4 h-4 mr-3" />
                          Settings
                        </Link>
                        <hr className="border-zion-slate/20 my-2" />
                        <button
                          onClick={() => {
                            logout()
                            setActiveDropdown(null)
}}
<<<<<<< HEAD
                          className="flex items-center w-full p-3 rounded-lg hover:bg-zion-slate/50 transition-colors text-white hover:text-zion-cyan">
                          <LogOut className="w-4 h-4 mr-3" />
                          Logout
                        </button>
                      </div>
                    </motion.div>
=======

                  aria-haspopup="true">;
                  <div className="w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-full flex items-center justify-center">;
                    <User className="w-4 h-4 text-white" />;
                  </div>;
                  <span className="text-white text-sm hidden lg:block">{user && user.name}</span>;
                  <ChevronDown className="w-4 h-4 text-zion-slate-light" />;
                </button>;

                <AnimatePresence>;
                  {activeDropdown === 'user' && (;
                    <motion&& motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0 && 0.2 }}
                      className="absolute top-full right-0 mt-2 w-48 bg-zion-slate-dark border border-zion-cyan/20 rounded-xl shadow-2xl backdrop-blur-md">;
                      <div className="p-2">;
                        <Link
                          to="/dashboard"
                          onClick={() => setActiveDropdown(null)}
                          className="flex items-center w-full p-3 rounded-lg hover:bg-zion-slate/50 transition-colors text-white hover:text-zion-cyan">;
                          <PanelLeft className="w-4 h-4 mr-3" />;
                          Dashboard;
                        </Link>;
                        <Link
                          to="/profile"
                          onClick={() => setActiveDropdown(null)}
                          className="flex items-center w-full p-3 rounded-lg hover:bg-zion-slate/50 transition-colors text-white hover:text-zion-cyan">;
                          <User className="w-4 h-4 mr-3" />;
                          Profile;
                        </Link>;
                        <Link
                          to="/settings"
                          onClick={() => setActiveDropdown(null)}
                          className="flex items-center w-full p-3 rounded-lg hover:bg-zion-slate/50 transition-colors text-white hover:text-zion-cyan">;
                          <Settings className="w-4 h-4 mr-3" />;
                          Settings;
                        </Link>;
                        <hr className="border-zion-slate/20 my-2" />;
                        <button
                          onClick={() => {;
                            logout();
                            setActiveDropdown(null);
}}
                          className="flex items-center w-full p-3 rounded-lg hover:bg-zion-slate/50 transition-colors text-white hover:text-zion-cyan">;
                          <LogOut className="w-4 h-4 mr-3" />;
                          Logout;
                        </button>;
                      </div>;
                    </motion && motion.div>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>
                          className="flex items - center w - full p - 3 rounded - lg hover:bg - zion - slate / 50 transition - colors text - white hover:text - zion - cyan">;
                          <LogOut className="w - 4 h - 4 mr - 3" />;
                          Logout;
                        </button>;
                      </div>;
                    </motion.div>)}
                </AnimatePresence>;
              </div>))}
          </nav>;
          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
<<<<<<< HEAD
            <form onSubmit={handleSearch} className="hidden md:flex relative">  const navigation = [
    { name: 'Home', href: '/', current: true }
    { name: 'About', href: '/about', current: false }
    { name: 'Contact', href: '/contact', current: false }
  ]
  const services = [
    { name: 'AI Solutions', href: '/services/ai', description: 'Machine Learning & NLP' }
    { name: 'Tech Talent', href: '/talent', description: 'Expert Developers & Engineers' }
    { name: 'Equipment', href: '/equipment', description: 'Infrastructure & Hardware' }
    { name: 'Consulting', href: '/consulting', description: 'Digital Transformation' }
    { name: 'Cybersecurity', href: '/services/cybersecurity', description: 'Security & Compliance' }
    { name: 'Cloud Services', href: '/services/cloud', description: 'DevOps & Infrastructure' }
  ]
=======

            <form on_submit={handle_search} className="hidden md:flex relative">  const navigation = [;
    { name: 'Home', href: '/', current: true },
    { name: 'About', href: '/about', current: false },
    { name: 'Contact', href: '/contact', current: false },
  ];
  const services = [;
    { name: 'AI Solutions', href: '/services / ai', description: 'Machine Learning & NLP' },
    { name: 'Tech Talent', href: '/talent', description: 'Expert Developers & Engineers' },
    { name: 'Equipment', href: '/equipment', description: 'Infrastructure & Hardware' },
    { name: 'Consulting', href: '/consulting', description: 'Digital Transformation' },
    { name: 'Cybersecurity', href: '/services / cybersecurity', description: 'Security & Compliance' },
    { name: 'Cloud Services', href: '/services / cloud', description: 'DevOps & Infrastructure' },
  ];

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-slate-700/20 bg-slate-900/95 backdrop-blur-md">
        <div className="container flex h-16 items-center px-4 sm:px-6">
          {/* Logo */}

            <form onSubmit={handleSearch} className="hidden md:flex relative">  const navigation = [;
    { name: 'Home', href: '/', current: true },;
    { name: 'About', href: '/about', current: false },;
    { name: 'Contact', href: '/contact', current: false },;
  ];
  const services = [;
    { name: 'AI Solutions', href: '/services/ai', description: 'Machine Learning & NLP' },;
    { name: 'Tech Talent', href: '/talent', description: 'Expert Developers & Engineers' },;
    { name: 'Equipment', href: '/equipment', description: 'Infrastructure & Hardware' },;
    { name: 'Consulting', href: '/consulting', description: 'Digital Transformation' },;
    { name: 'Cybersecurity', href: '/services/cybersecurity', description: 'Security & Compliance' },;
    { name: 'Cloud Services', href: '/services/cloud', description: 'DevOps & Infrastructure' },;
  ];
  return (
    <>;
      <header className="sticky top-0 z-50 w-full border-b border-slate-700/20 bg-slate-900/95 backdrop-blur-md">;
        <div className="container flex h-16 items-center px-4 sm:px-6">;
          {/* Logo */}
          <div className="flex items-center">;
            <Link to="/" className="flex-shrink-0">;
              <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">;
          <div className="flex items - center">;
            <Link to="/" className="flex - shrink - 0">;
              <h1 className="text - 2xl font - bold bg - gradient - to - r from - cyan - 400 via - blue - 500 to - purple - 600 bg - clip - text text - transparent">;

                Zion Tech Group;
              </h1>;
            </Link>;
          </div>;


          {/* Desktop Navigation */}
          <nav className="hidden md:flex ml-8 space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
<<<<<<< HEAD
                to={item.href}
                className="text-slate-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors duration-200">
                {item.name}
              </Link>
            ))}
            {/* Services Dropdown */}
            <div className="relative">
=======

            <div className="relative">;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              <button
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
<<<<<<< HEAD
                className="flex items-center text-slate-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors duration-200">
                Services
                <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesDropdownOpen && (
=======

                className="flex items-center text-slate-300 hover:text-cyan-400 px-3 py-2 text-sm font-medium transition-colors duration-200">;
                Services;
                <ChevronDown className={`w-4 h-4 ml-1 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />;
              </button>;
              {servicesDropdownOpen && (;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                <div
                  className="absolute top-full left-0 mt-2 w-80 bg-slate-800/95 border border-slate-700/50 rounded-lg shadow-xl backdrop-blur-md"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
<<<<<<< HEAD
                >
                  <div className="p-4">
                    <div className="grid grid-cols-1 gap-2">
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          to={service.href}
                          className="flex items-center p-3 rounded-lg hover:bg-slate-700/50 transition-colors duration-200 group">
                          <div className="flex-1">
                            <div className="text-white font-medium group-hover:text-cyan-400 transition-colors">
=======

                to={item.href}
                className="text - slate - 300 hover:text - cyan - 400 px - 3 py - 2 text - sm font - medium transition - colors duration - 200">;
                {item.name}
              </Link>))}
            {/* Services Dropdown */}
            <div className="relative">;
              <button;
                on_click={() => setServicesDropdownOpen (!servicesDropdownOpen)}
                onMouseEnter={() => setServicesDropdownOpen (true)}
                onMouseLeave={() => setServicesDropdownOpen (false)}
                className="flex items - center text - slate - 300 hover:text - cyan - 400 px - 3 py - 2 text - sm font - medium transition - colors duration - 200">;
                Services;
                <ChevronDown className={`w - 4 h - 4 ml - 1 transition - transform duration - 200 ${servicesDropdownOpen ? 'rotate - 180' : ''}`} />;
              </button>;
              {servicesDropdownOpen && (
                <div;
                  className="absolute top - full left - 0 mt - 2 w - 80 bg - slate - 800 / 95 border border - slate - 700 / 50 rounded - lg shadow - xl backdrop - blur - md";
                  onMouseEnter={() => setServicesDropdownOpen (true)}
                  onMouseLeave={() => setServicesDropdownOpen (false)}
                >;
                  <div className="p - 4">;
                    <div className="grid grid - cols - 1 gap - 2">;
                      {services.map ((service) => (
                        <Link;
                          key={service.name}
                          to={service.href}
                          className="flex items - center p - 3 rounded - lg hover:bg - slate - 700 / 50 transition - colors duration - 200 group">;
                          <div className="flex - 1">;
                            <div className="text - white font - medium group - hover:text - cyan - 400 transition - colors">;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                              {service.name}
                            </div>
                            <div className="text-sm text-gray-400">
                              {service.description}
<<<<<<< HEAD
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t border-slate-700/50">
=======

                >;
                  <div className="p-4">;
                    <div className="grid grid-cols-1 gap-2">;
                      {services && services.map((service) => (;
                        <Link
                          key={service && service.name}
                          to={service && service.href}
                          className="flex items-center p-3 rounded-lg hover:bg-slate-700/50 transition-colors duration-200 group">;
                          <div className="flex-1">;
                            <div className="text-white font-medium group-hover:text-cyan-400 transition-colors">;
                              {service && service.name}
                            </div>;
                            <div className="text-sm text-gray-400">;
                              {service && service.description}
                            </div>;
                          </div>;
                        </Link>;
                      ))}
                    </div>;
                    <div className="mt-4 pt-4 border-t border-slate-700/50">;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                      <Link
                        to="/services"
                        className="block text-center text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors">;
                            </div>;
                          </div>;
                        </Link>))}
                    </div>;
                    <div className="mt - 4 pt - 4 border - t border - slate - 700 / 50">;
                      <Link;
                        to="/services";
                        className="block text - center text - cyan - 400 hover:text - cyan - 300 text - sm font - medium transition - colors">;

                        View All Services →;
                      </Link>;
                    </div>;
                  </div>;

          <div className="hidden md:flex ml-6 flex-1 max-w-md">;
            <form onSubmit={handleSearch} className="relative w-full">;
              />;
              <button
                type="submit"
<<<<<<< HEAD
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-cyan-400 transition-colors">
                <Search className="h-4 h-4" />
              <div className="hidden md:flex items-center space-x-3">
=======
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-cyan-400 transition-colors">;
                <Search className="h-4 h-4" />;
              <div className="hidden md:flex items-center space-x-3">;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
                <Link
                  to="/login"
                  className="px-4 py-2 text-zion-cyan border border-zion-cyan rounded-lg hover:bg-zion-cyan hover:text-white transition-colors">
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-2 bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan/80 transition-colors">
                  Get Started
                </Link>
              </div>
            )}

                </div>)}
            </div>;
          </nav>;
          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex ml - 6 flex - 1 max - w-md">;
            <form on_submit={handle_search} className="relative w - full">;
              />;
              <button;
                type="submit";
                className="absolute right - 2 top - 1/2 transform -translate - y-1 / 2 text - slate - 400 hover:text - cyan - 400 transition - colors">;
                <Search className="h - 4 h - 4" />;
              <div className="hidden md:flex items - center space - x-3">;
                <Link;
                  to="/login";
                  className="px - 4 py - 2 text - zion - cyan border border - zion - cyan rounded - lg hover:bg - zion - cyan hover:text - white transition - colors">;
                  Login;
                </Link>;
                <Link;
                  to="/signup";
                  className="px - 4 py - 2 bg - zion - cyan text - white rounded - lg hover:bg - zion - cyan / 80 transition - colors">;
                  Get Started;
                </Link>;
              </div>)}
          {/* Right side actions */}
          <div className="ml-6 flex items-center space-x-4">
            {/* Notifications */}
            <button className="p-2 text-slate-400 hover:text-cyan-400 transition-colors">
              <Bell className="h-5 w-5" />
            </button>
            {/* User menu */}
<<<<<<< HEAD
            <button className="p-2 text-slate-400 hover:text-cyan-400 transition-colors">
              <User className="h-5 w-5" />
            </button>
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-zinc-400" />              className="md:hidden p-2 text-slate-400 hover:text-cyan-400 transition-colors">
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>
=======

            <button className="p - 2 text - slate - 400 hover:text - cyan - 400 transition - colors">;
              <User className="h - 5 w - 5" />;
            </button>;
              {mobileMenuOpen ? (
                <X className="w - 6 h - 6 text - white" />) : (
                <Menu className="w - 6 h - 6 text - zinc - 400" />              className="md:hidden p - 2 text - slate - 400 hover:text - cyan - 400 transition - colors">;
              {mobileMenuOpen ? (
                <X className="h - 5 w - 5" />) : (
                <Menu className="h - 5 w - 5" />;
                <Menu className="w - 6 h - 6 text - white" />)}
            </button>;
          </div>;
        </div>;
      </div>;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-zion-slate-dark border-t border-zion-cyan/20">
            <div className="container mx-auto px-6 py-6">              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 pl-10 bg-zion-slate/20 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zion-slate-light" />
              </form>
              {/* Mobile Navigation Links */}
              <div className="space-y-2">
>>>>>>> merged-prs-20250907-203621
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
<<<<<<< HEAD
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-slate-300 hover:text-cyan-400 py-2 text-base font-medium transition-colors duration-200"
=======
                    onClick={closeMobileMenu}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      item.current
                        ? 'text-zion-cyan bg-zion-cyan/10'
                        : 'text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10'
}`}
>>>>>>> merged-prs-20250907-203621
                  >
                    {item.name}
                  </Link>
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
                ))}
              </nav>
<<<<<<< HEAD

              {/* Mobile Quick Links */}
              <div className="pt-4 border-t border-slate-700/50">
                <div className="grid grid-cols-2 gap-2">
                  {quickLinks.slice(0, 4).map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      className="flex items-center px-4 py-2 text-sm text-slate-400 hover:text-white hover:bg-slate-700/50 rounded-lg transition-all duration-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <link.icon className="w-4 h-4 mr-2" />
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile Contact Info */}
              <div className="pt-4 border-t border-slate-700/50 space-y-3">
                <div className="flex items-center text-slate-400">
                  <Phone className="w-4 h-4 mr-3" />
                  <span className="text-sm">{contactInfo.phone}</span>
                </div>
                <div className="flex items-center text-slate-400">
                  <Mail className="w-4 h-4 mr-3" />
                  <span className="text-sm">{contactInfo.email}</span>
                </div>
              </div>
=======
              {/* Mobile Quick Actions */}
              <div className="mt-6 pt-6 border-t border-zinc-800/50">
                <div className="grid grid-cols-1 gap-3">
                  {quickActions.map((action) => (
                    <Link
                      key={action.name}
                      to={action.href}
                      className="btn-futuristic text-center">
                      {action.name}        {/* Mobile Navigation */}
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/95 border-t border-slate-700/20">
              {navigation.map((item) => (
                <Link
                  key={item.name}
<<<<<<< HEAD
                  to={item.href}
                  className="text-slate-300 hover:text-cyan-400 block px-3 py-2 text-base font-medium transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              {/* Mobile Services */}
              <div className="px-3 py-2">
                <div className="text-slate-400 text-sm font-medium mb-2">Services</div>
                <div className="space-y-1">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="block text-slate-300 hover:text-cyan-400 px-3 py-2 text-sm transition-colors duration-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
              </div>
=======

      {/* Mobile Navigation */}
      <AnimatePresence>;
        {mobileMenuOpen && (;
          <motion&& motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0 && 0.3 }}
            className="lg:hidden bg-zion-slate-dark border-t border-zion-cyan/20">;
            <div className="container mx-auto px-6 py-6">              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="relative">;
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e && e.target.value)}
                  className="w-full px-4 py-2 pl-10 bg-zion-slate/20 border border-zion-cyan/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan/50 focus:border-zion-cyan";
                />;
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zion-slate-light" />;
              </form>;

              {/* Mobile Navigation Links */}
              <div className="space-y-2">;
                {navigation && navigation.map((item) => (;
                  <Link
                    key={item && item.name}
                    to={item && item.href}
                    onClick={closeMobileMenu}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                      item && item.current
                        ? 'text-zion-cyan bg-zion-cyan/10'
                        : 'text-zion-slate-light hover:text-zion-cyan hover:bg-zion-cyan/10'
}`}>;
                    {item && item.name}
                  </Link>;
                ))}
              </nav>;

              {/* Mobile Quick Actions */}
              <div className="mt-6 pt-6 border-t border-zinc-800/50">;
                <div className="grid grid-cols-1 gap-3">;
                  {quickActions && quickActions.map((action) => (;
                    <Link
                      key={action && action.name}
                      to={action && action.href}
                      className="btn-futuristic text-center">;
                      {action && action.name}        {/* Mobile Navigation */}
        {mobileMenuOpen && (;
          <div className="md:hidden">;
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-slate-800/95 border-t border-slate-700/20">;
              {navigation && navigation.map((item) => (;
                <Link
                  key={item && item.name}
                  to={item && item.href}
                  className="text-slate-300 hover:text-cyan-400 block px-3 py-2 text-base font-medium transition-colors duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >;
                  {item && item.name}
                </Link>;

              ))}
              {/* Mobile Services */}

              <div className="px-3 py-2">;
                <div className="text-slate-400 text-sm font-medium mb-2">Services</div>;
                <div className="space-y-1">;
                  {services && services.map((service) => (;
                    <Link
                      key={service && service.name}
                      to={service && service.href}
                      className="block text-slate-300 hover:text-cyan-400 px-3 py-2 text-sm transition-colors duration-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >;
                      {service && service.name}
                    </Link>;
                  ))}
                </div>;
              </div>;
              </div>;

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
              {/* Mobile Services */}
              <div className="space-y-2">
                <div className="px-3 py-2 text-sm font-semibold text-zion-cyan uppercase tracking-wider">
                  Services
                </div>
                {services.map((service) => (
                  <Link
                    key={service.name}
                    to={service.href}
                    onClick={closeMobileMenu}
                    className="block px-6 py-2 text-zion-slate-light hover:text-zion-cyan transition-colors">
                    {service.name}
                  </Link>
                ))}
              </div>
              {/* Mobile Solutions */}
              <div className="space-y-2">
                <div className="px-3 py-2 text-sm font-semibold text-zion-cyan uppercase tracking-wider">
                  Solutions
                </div>
                {solutions.map((solution) => (
                  <Link
                    key={solution.name}
                    to={solution.href}
                    onClick={closeMobileMenu}
                    className="block px-6 py-2 text-zion-slate-light hover:text-zion-cyan transition-colors">
                    {solution.name}
                  </Link>
                ))}
              </div>
              {/* Mobile Resources */}
              <div className="space-y-2">
                <div className="px-3 py-2 text-sm font-semibold text-zion-cyan uppercase tracking-wider">
                  Resources
                </div>
                {resources.map((resource) => (
                  <Link
                    key={resource.name}
                    to={resource.href}
                    onClick={closeMobileMenu}
                    className="block px-6 py-2 text-zion-slate-light hover:text-zion-cyan transition-colors">
                    {resource.name}
                  </Link>
                ))}
              </div>
              {/* Mobile Company */}
              <div className="space-y-2">
                <div className="px-3 py-2 text-sm font-semibold text-zion-cyan uppercase tracking-wider">
                  Company
                </div>
                {company.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={closeMobileMenu}
                    className="block px-6 py-2 text-zion-slate-light hover:text-zion-cyan transition-colors">
                    {item.name}
                  </Link>
                ))}
              </div>
              {/* Mobile Auth */}
              {!user ? (
                <div className="pt-4 border-t border-zion-slate/20">
                  <div className="space-y-3">
                    <Link
                      to="/login"
                      onClick={closeMobileMenu}
                      className="block w-full px-4 py-2 text-center text-zion-cyan border border-zion-cyan rounded-lg hover:bg-zion-cyan hover:text-white transition-colors">
                      Login
                    </Link>
                    <Link
                      to="/signup"
                      onClick={closeMobileMenu}
                      className="block w-full px-4 py-2 text-center bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan/80 transition-colors">
                      Get Started
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="pt-4 border-t border-zion-slate/20">
                  <div className="space-y-3">
                    <Link
                      to="/dashboard"
                      onClick={closeMobileMenu}
                      className="block w-full px-4 py-2 text-center bg-zion-cyan text-white rounded-lg hover:bg-zion-cyan/80 transition-colors">
                      Dashboard
                    </Link>
                    <button
                      onClick={() => {
                        logout()
                        closeMobileMenu()
}}
                      className="block w-full px-4 py-2 text-center text-zion-cyan border border-zion-cyan rounded-lg hover:bg-zion-cyan hover:text-white transition-colors">
                      Logout
                    </button>
                  </div>
                </div>
              )}
<<<<<<< HEAD
>>>>>>> merged-prs-20250907-203621
            </div>
          </div>
        )}
<<<<<<< HEAD
      </header>

      {/* Click outside to close dropdowns */}
      {(servicesDropdownOpen || solutionsDropdownOpen || resourcesDropdownOpen) && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => {
            setServicesDropdownOpen(false);
            setSolutionsDropdownOpen(false);
            setResourcesDropdownOpen(false);
          }}
        />
      )}
    </>
=======
      </AnimatePresence>
<<<<<<< HEAD
    </header>
>>>>>>> 24132684af15a4d83201b2a91ee50324edfabedc
  );
}
=======
    </header>  )
=======
            </div>;
          </motion && motion.div>;

        )}

      </AnimatePresence>
    </header>  )

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
}

                  to={item.href}
                  className="text - slate - 300 hover:text - cyan - 400 block px - 3 py - 2 text - base font - medium transition - colors duration - 200";
                  on_click={() => setMobileMenuOpen (false)}
                >;
                  {item.name}
                </Link>))}
              {/* Mobile Services */}
              <div className="px - 3 py - 2">;
                <div className="text - slate - 400 text - sm font - medium mb - 2">Services</div>;
                <div className="space - y-1">;
                  {services.map ((service) => (
                    <Link;
                      key={service.name}
                      to={service.href}
                      className="block text - slate - 300 hover:text - cyan - 400 px - 3 py - 2 text - sm transition - colors duration - 200";
                      on_click={() => setMobileMenuOpen (false)}
                    >;
                      {service.name}
                    </Link>))}
                </div>;
              </div>;
              </div>;
              {/* Mobile Services */}
              <div className="space - y-2">;
                <div className="px - 3 py - 2 text - sm font - semibold text - zion - cyan uppercase tracking - wider">;
                  Services;
                </div>;
                {services.map ((service) => (
                  <Link;
                    key={service.name}
                    to={service.href}
                    on_click={closeMobileMenu}
                    className="block px - 6 py - 2 text - zion - slate - light hover:text - zion - cyan transition - colors">;
                    {service.name}
                  </Link>))}
              </div>;
              {/* Mobile Solutions */}
              <div className="space - y-2">;
                <div className="px - 3 py - 2 text - sm font - semibold text - zion - cyan uppercase tracking - wider">;
                  Solutions;
                </div>;
                {solutions.map ((solution) => (
                  <Link;
                    key={solution.name}
                    to={solution.href}
                    on_click={closeMobileMenu}
                    className="block px - 6 py - 2 text - zion - slate - light hover:text - zion - cyan transition - colors">;
                    {solution.name}
                  </Link>))}
              </div>;
              {/* Mobile Resources */}
              <div className="space - y-2">;
                <div className="px - 3 py - 2 text - sm font - semibold text - zion - cyan uppercase tracking - wider">;
                  Resources;
                </div>;
                {resources.map ((resource) => (
                  <Link;
                    key={resource.name}
                    to={resource.href}
                    on_click={closeMobileMenu}
                    className="block px - 6 py - 2 text - zion - slate - light hover:text - zion - cyan transition - colors">;
                    {resource.name}
                  </Link>))}
              </div>;
              {/* Mobile Company */}
              <div className="space - y-2">;
                <div className="px - 3 py - 2 text - sm font - semibold text - zion - cyan uppercase tracking - wider">;
                  Company;
                </div>;
                {company.map ((item) => (
                  <Link;
                    key={item.name}
                    to={item.href}
                    on_click={closeMobileMenu}
                    className="block px - 6 py - 2 text - zion - slate - light hover:text - zion - cyan transition - colors">;
                    {item.name}
                  </Link>))}
              </div>;
              {/* Mobile Auth */}
              {!user ? (
                <div className="pt - 4 border - t border - zion - slate / 20">;
                  <div className="space - y-3">;
                    <Link;
                      to="/login";
                      on_click={closeMobileMenu}
                      className="block w - full px - 4 py - 2 text - center text - zion - cyan border border - zion - cyan rounded - lg hover:bg - zion - cyan hover:text - white transition - colors">;
                      Login;
                    </Link>;
                    <Link;
                      to="/signup";
                      on_click={closeMobileMenu}
                      className="block w - full px - 4 py - 2 text - center bg - zion - cyan text - white rounded - lg hover:bg - zion - cyan / 80 transition - colors">;
                      Get Started;
                    </Link>;
                  </div>;
                </div>) : (
                <div className="pt - 4 border - t border - zion - slate / 20">;
                  <div className="space - y-3">;
                    <Link;
                      to="/dashboard";
                      on_click={closeMobileMenu}
                      className="block w - full px - 4 py - 2 text - center bg - zion - cyan text - white rounded - lg hover:bg - zion - cyan / 80 transition - colors">;
                      Dashboard;
                    </Link>;
                    <button;
                      on_click={() => {
                        logout ();
                        closeMobileMenu ();
}}
                      className="block w - full px - 4 py - 2 text - center text - zion - cyan border border - zion - cyan rounded - lg hover:bg - zion - cyan hover:text - white transition - colors">;
                      Logout;
                    </button>;
                  </div>;
                </div>)}
            </div>;
          </motion.div>)}
      </AnimatePresence>;
    </header>  );
}




      )}
      {/* Mobile Bottom Navigation */}
      {isMobile && <MobileBottomNav unreadCount={unreadCount} />}

      <LoginModal isOpen={loginOpen} onOpenChange={setLoginOpen} />;
    </>;
  );
}
;
<<<<<<< HEAD
;
}
}
}
;
=======

;
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> merged-prs-20250907-203621
