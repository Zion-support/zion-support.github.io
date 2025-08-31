import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MainNavigation } from './MainNavigation';
import { MobileMenu } from './MobileMenu';
import { Logo } from './Logo';
import { Menu, X, Search, User, ShoppingCart, Phone, Mail } from 'lucide-react';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 10;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      isScrolled 
        ? 'bg-zinc-900/98 backdrop-blur-md shadow-lg shadow-cyan-500/10 border-b border-cyan-500/20' 
        : 'bg-zinc-900/95 backdrop-blur supports-[backdrop-filter]:bg-zinc-900/75 border-b border-zinc-800/50'
    }`}>
      {/* Top Bar */}
      <div className="hidden lg:block bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-b border-zinc-800/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-10 items-center justify-between text-sm">
            <div className="flex items-center space-x-6 text-zinc-400">
              <div className="flex items-center space-x-2">
                <Phone className="w-3 h-3" />
                <span>+1 302 464 0950</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-3 h-3" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/help" className="text-zinc-400 hover:text-cyan-400 transition-colors">
                Support
              </Link>
              <span className="text-zinc-600">|</span>
              <Link to="/request-quote" className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium">
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <Logo />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </div>
              <div>
                <span className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  Zion Tech Group
                </span>
                <div className="text-xs text-cyan-400 font-medium">
                  AI • Cloud • Innovation
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <MainNavigation className="hidden lg:flex" />

          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
            {/* Search Button */}
            <button
              type="button"
              className="hidden md:inline-flex items-center justify-center rounded-md p-2 text-zinc-400 hover:bg-zinc-800 hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Cart Button */}
            <Link
              to="/marketplace"
              className="hidden md:inline-flex items-center justify-center rounded-md p-2 text-zinc-400 hover:bg-zinc-800 hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors relative"
              aria-label="Marketplace"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-500 rounded-full text-xs flex items-center justify-center text-white font-bold">
                0
              </span>
            </Link>

            {/* User Account */}
            <Link
              to="/signup"
              className="hidden md:inline-flex items-center justify-center rounded-md p-2 text-zinc-400 hover:bg-zinc-800 hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-colors"
              aria-label="Account"
            >
              <User className="w-5 h-5" />
            </Link>

            {/* CTA Button */}
            <Link
              to="/request-quote"
              className="hidden md:inline-flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium hover:from-cyan-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-zinc-900 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              Get Started
            </Link>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-zinc-400 hover:bg-zinc-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      {isSearchOpen && (
        <div className="border-t border-zinc-800/50 bg-zinc-900/98">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="relative max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Search services, solutions, or resources..."
                className="w-full px-4 py-3 pl-12 pr-4 bg-zinc-800/50 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                autoFocus
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zinc-400" />
              <button
                onClick={() => setIsSearchOpen(false)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-zinc-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <MobileMenu onClose={() => setIsMobileMenuOpen(false)} />
      )}
    </header>
  );
}