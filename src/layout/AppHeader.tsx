import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, User, Bell, PanelLeft } from 'lucide-react';
import { MobileMenu } from '@/components/header/MobileMenu';
import { useIsMobile } from '@/hooks/use-mobile';
import { MobileBottomNav } from '@/components/header/MobileBottomNav';
import { useAuth } from '@/hooks/useAuth';
import { Logo } from '@/components/header/Logo';

export function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const isMobile = useIsMobile();
  const { user, logout } = useAuth();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to search results
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  const navigationItems = [
    { name: 'Services', href: '/services' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' },
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
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-white/80 hover:text-zion-cyan transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="ml-auto flex items-center space-x-4">
            {/* Notifications */}
            <button className="p-2 text-white/70 hover:text-white hover:bg-zion-purple/10 rounded-md transition-colors relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-zion-cyan rounded-full"></span>
            </button>

            {/* User menu */}
            {user ? (
              <div className="relative">
                <button className="flex items-center space-x-2 p-2 text-white/70 hover:text-white hover:bg-zion-purple/10 rounded-md transition-colors">
                  <User className="h-5 w-5" />
                  <span className="hidden sm:block">{user.name}</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Link
                  to="/login"
                  className="text-white/80 hover:text-white transition-colors font-medium"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="bg-zion-cyan hover:bg-zion-cyan-light text-zion-blue-dark px-4 py-2 rounded-lg font-medium transition-colors"
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

        {/* Mobile Search Bar */}
        {isMobile && (
          <div className="lg:hidden px-4 pb-4">
            <form onSubmit={handleSearch} className="relative">
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
        )}
      </header>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={mobileMenuOpen} 
        onClose={() => setMobileMenuOpen(false)}
        navigationItems={navigationItems}
      />

      {/* Mobile Bottom Navigation */}
      {isMobile && <MobileBottomNav />}
    </>
  );
}
