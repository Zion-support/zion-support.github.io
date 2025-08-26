import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search, User, Bell, PanelLeft } from 'lucide-react';
import { MainNavigation } from './MainNavigation';

export function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to search results
      window.location.href = `/search?q=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

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
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">Z</span>
            </div>
            <span className="text-xl font-bold text-white">Zion Tech Group</span>
          </Link>
          
          {/* Search Bar - Hidden on mobile */}
          <div className="hidden md:flex ml-6 flex-1 max-w-md">
            <form onSubmit={handleSearch} className="relative w-full">
              <input
                type="text"
                placeholder="Search services, talent, equipment..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white"
              >
                <Search className="h-4 w-4" />
              </button>
            </form>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 ml-8">
            <Link to="/services" className="text-white/80 hover:text-white transition-colors">
              Services
            </Link>
            <Link to="/pricing" className="text-white/80 hover:text-white transition-colors">
              Pricing
            </Link>
            <Link to="/about" className="text-white/80 hover:text-white transition-colors">
              About
            </Link>
            <Link to="/case-studies" className="text-white/80 hover:text-white transition-colors">
              Case Studies
            </Link>
            <Link to="/news" className="text-white/80 hover:text-white transition-colors">
              News
            </Link>
            <Link to="/careers" className="text-white/80 hover:text-white transition-colors">
              Careers
            </Link>
            <Link to="/contact" className="text-white/80 hover:text-white transition-colors">
              Contact
            </Link>
          </nav>
          
          {/* User Actions */}
          <div className="flex items-center space-x-4 ml-6">
            {/* Notifications */}
            <button className="p-2 text-white/70 hover:text-white hover:bg-zion-purple/10 rounded-md transition-colors">
              <Bell className="h-5 w-5" />
            </button>
            
            {/* User Menu */}
            <Link to="/login" className="p-2 text-white/70 hover:text-white hover:bg-zion-purple/10 rounded-md transition-colors">
              <User className="h-5 w-5" />
            </Link>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white/70 hover:text-white hover:bg-zion-purple/10 rounded-md transition-colors"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-zion-blue-dark border-t border-zion-purple/20">
            <div className="px-4 py-6 space-y-4">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search services, talent, equipment..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white"
                >
                  <Search className="h-4 w-4" />
                </button>
              </form>
              
              {/* Mobile Navigation Links */}
              <div className="space-y-2">
                <Link
                  to="/services"
                  className="block px-4 py-2 text-white/80 hover:text-white hover:bg-zion-purple/10 rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  to="/pricing"
                  className="block px-4 py-2 text-white/80 hover:text-white hover:bg-zion-purple/10 rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Pricing
                </Link>
                <Link
                  to="/about"
                  className="block px-4 py-2 text-white/80 hover:text-white hover:bg-zion-purple/10 rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  to="/case-studies"
                  className="block px-4 py-2 text-white/80 hover:text-white hover:bg-zion-purple/10 rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Case Studies
                </Link>
                <Link
                  to="/news"
                  className="block px-4 py-2 text-white/80 hover:text-white hover:bg-zion-purple/10 rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  News
                </Link>
                <Link
                  to="/careers"
                  className="block px-4 py-2 text-white/80 hover:text-white hover:bg-zion-purple/10 rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Careers
                </Link>
                <Link
                  to="/contact"
                  className="block px-4 py-2 text-white/80 hover:text-white hover:bg-zion-purple/10 rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
              
              {/* Mobile User Actions */}
              <div className="pt-4 border-t border-white/20">
                <Link
                  to="/login"
                  className="block px-4 py-2 text-white/80 hover:text-white hover:bg-zion-purple/10 rounded-md transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="block px-4 py-2 mt-2 bg-zion-cyan text-white rounded-md hover:bg-zion-cyan/90 transition-colors text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
      
      {/* Sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={() => setSidebarOpen(false)} />
          <div className="fixed left-0 top-0 h-full w-80 bg-zion-blue-dark border-r border-zion-purple/20">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white">Navigation</h2>
                <button
                  onClick={() => setSidebarOpen(false)}
                  className="p-2 text-white/70 hover:text-white hover:bg-zion-purple/10 rounded-md transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <MainNavigation onNavigate={() => setSidebarOpen(false)} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
