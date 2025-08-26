import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, User, Bell, PanelLeft, ChevronDown } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useIsMobile } from '@/hooks/use-mobile';
import { Logo } from '@/components/header/Logo';
import { ModeToggle } from '@/components/ModeToggle';
import { MobileMenu } from '@/components/header/MobileMenu';
import { MobileBottomNav } from '@/components/header/MobileBottomNav';

export function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const isMobile = useIsMobile();
  const { user, logout } = useAuth();
  const location = useLocation();
  
  // Try to access the messaging context, but provide a fallback value if it's not available
  let unreadCount = 0;
  try {
    const { unreadCount: count } = useMessaging();
    unreadCount = count;
  } catch (error) {
    console.warn('Messaging context not available');
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to search results
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  const navigation = [
    { name: 'Home', href: '/', current: location.pathname === '/' },
    { name: 'Services', href: '/services', current: location.pathname.startsWith('/services') },
    { name: 'About', href: '/about', current: location.pathname.startsWith('/about') },
    { name: 'Team', href: '/team', current: location.pathname.startsWith('/team') },
    { name: 'Pricing', href: '/pricing', current: location.pathname.startsWith('/pricing') },
    { name: 'Contact', href: '/contact', current: location.pathname.startsWith('/contact') },
    { name: 'Blog', href: '/blog', current: location.pathname.startsWith('/blog') },
  ];

  const serviceDropdown = [
    { name: 'AI Solutions', href: '/ai-solutions' },
    { name: 'Cloud Services', href: '/services/cloud' },
    { name: 'Cybersecurity', href: '/services/cybersecurity' },
    { name: 'Infrastructure', href: '/services/infrastructure' },
    { name: 'Digital Transformation', href: '/services/transformation' },
    { name: 'Consulting', href: '/services/consulting' },
    { name: 'Quantum AI', href: '/services/quantum-ai' },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-zion-purple/20 bg-zion-blue-dark/95 backdrop-blur-md">
        <div className="container flex h-16 items-center px-4 sm:px-6">
          {/* Sidebar Toggle */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="mr-4 p-2 text-white/70 hover:text-white hover:bg-zion-purple/10 rounded-md transition-colors"
            aria-label="Toggle sidebar"
          >
            <PanelLeft className="h-5 w-5" />
          </button>
          
          <Logo />
          
          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex ml-6 flex-1 max-w-md">
            <form onSubmit={handleSearch} className="relative w-full">
              <input
                type="text"
                placeholder="Search services, talent, equipment..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-zion-blue-light/20 border border-zion-purple/20 rounded-lg px-4 py-2 text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-zion-slate-light hover:text-zion-cyan transition-colors"
              >
                <Search className="h-4 w-4" />
              </button>
            </form>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 ml-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  item.current
                    ? 'bg-zion-purple/20 text-zion-cyan'
                    : 'text-zion-slate-light hover:text-white hover:bg-zion-purple/10'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="px-3 py-2 rounded-md text-sm font-medium text-zion-slate-light hover:text-white hover:bg-zion-purple/10 transition-colors">
                Services
                <ChevronDown className="ml-1 h-4 w-4 inline" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-zion-blue-dark border border-zion-purple/20 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  {serviceDropdown.map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="block px-4 py-2 text-sm text-zion-slate-light hover:text-white hover:bg-zion-purple/10 transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* Right side actions */}
          <div className="ml-auto flex items-center space-x-4">
            {/* Theme Toggle */}
            <ModeToggle />
            
            {/* Notifications */}
            <button className="p-2 text-white/70 hover:text-white hover:bg-zion-purple/10 rounded-md transition-colors relative">
              <Bell className="h-5 w-5" />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 bg-zion-cyan text-zion-blue-dark text-xs rounded-full flex items-center justify-center font-bold">
                  {unreadCount > 9 ? '9+' : unreadCount}
                </span>
              )}
            </button>

            {/* User Menu */}
            {user ? (
              <div className="relative group">
                <button className="flex items-center space-x-2 p-2 text-white/70 hover:text-white hover:bg-zion-purple/10 rounded-md transition-colors">
                  <User className="h-5 w-5" />
                  <span className="hidden sm:block text-sm">{user.name || user.email}</span>
                </button>
                <div className="absolute top-full right-0 mt-2 w-48 bg-zion-blue-dark border border-zion-purple/20 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-sm text-zion-slate-light hover:text-white hover:bg-zion-purple/10 transition-colors"
                    >
                      Profile
                    </Link>
                    <Link
                      to="/dashboard"
                      className="block px-4 py-2 text-sm text-zion-slate-light hover:text-white hover:bg-zion-purple/10 transition-colors"
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={logout}
                      className="block w-full text-left px-4 py-2 text-sm text-zion-slate-light hover:text-white hover:bg-zion-purple/10 transition-colors"
                    >
                      Sign out
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link
                  to="/login"
                  className="px-4 py-2 text-sm font-medium text-zion-cyan hover:text-white transition-colors"
                >
                  Sign in
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-2 text-sm font-medium bg-zion-cyan text-zion-blue-dark rounded-lg hover:bg-zion-cyan-light transition-colors"
                >
                  Get Started
                </Link>
              </div>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white/70 hover:text-white hover:bg-zion-purple/10 rounded-md transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <MobileMenu
            navigation={navigation}
            serviceDropdown={serviceDropdown}
            onClose={() => setMobileMenuOpen(false)}
            user={user}
            onLogout={logout}
          />
        )}
      </header>

      {/* Mobile Bottom Navigation */}
      {isMobile && <MobileBottomNav />}
    </>
  );
}

// Fallback for missing hooks
function useMessaging() {
  return { unreadCount: 0 };
}
