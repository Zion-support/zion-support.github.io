import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MainNavigation } from './MainNavigation';
import { MobileMenu } from './MobileMenu';
import { Logo } from './Logo';
import { Menu, X, Search, User, ShoppingBag, Bell } from 'lucide-react';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-zion-slate-darker border-b border-zion-purple/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-12 items-center justify-between text-sm">
            <div className="flex items-center space-x-6">
              <div className="text-zion-slate-light">
                📧 <a href="mailto:kleber@ziontechgroup.com" className="hover:text-zion-cyan transition-colors">kleber@ziontechgroup.com</a>
              </div>
              <div className="text-zion-slate-light hidden sm:block">
                📞 <a href="tel:+13024640950" className="hover:text-zion-cyan transition-colors">+1 (302) 464-0950</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/help" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                Support
              </Link>
              <Link to="/careers" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                Careers
              </Link>
              <Link to="/pricing" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                Pricing
              </Link>
              <div className="flex items-center space-x-2">
                <span className="text-zion-slate-light text-xs">Follow us:</span>
                <a href="https://linkedin.com/company/ziontechgroup" target="_blank" rel="noopener noreferrer" 
                   className="text-zion-slate-light hover:text-zion-cyan transition-colors">LinkedIn</a>
                <a href="https://twitter.com/ziontechgroup" target="_blank" rel="noopener noreferrer" 
                   className="text-zion-slate-light hover:text-zion-cyan transition-colors">Twitter</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 w-full border-b border-zion-purple/20 bg-zion-slate-dark/95 backdrop-blur supports-[backdrop-filter]:bg-zion-slate-dark/75 shadow-lg shadow-zion-purple/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-3 group">
                <div className="group-hover:scale-110 transition-transform duration-300">
                  <Logo />
                </div>
                <div className="hidden sm:block">
                  <span className="text-xl font-bold text-white">Zion Tech Group</span>
                  <div className="text-xs text-zion-cyan font-medium">Innovation • Technology • Growth</div>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <MainNavigation className="hidden lg:flex" />

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <button
                type="button"
                className="hidden md:inline-flex items-center justify-center rounded-lg p-2 text-zion-slate-light hover:bg-zion-purple/20 hover:text-white focus:outline-none focus:ring-2 focus:ring-zion-purple focus:ring-offset-2 focus:ring-offset-zion-slate-dark transition-all duration-300"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                aria-label="Search"
              >
                <Search className="h-5 w-5" />
              </button>

              {/* Notifications */}
              <button
                type="button"
                className="hidden md:inline-flex items-center justify-center rounded-lg p-2 text-zion-slate-light hover:bg-zion-purple/20 hover:text-white focus:outline-none focus:ring-2 focus:ring-zion-purple focus:ring-offset-2 focus:ring-offset-zion-slate-dark transition-all duration-300 relative"
                aria-label="Notifications"
              >
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-3 w-3 bg-zion-cyan rounded-full"></span>
              </button>

              {/* User Account */}
              <Link
                to="/signup"
                className="hidden md:inline-flex items-center justify-center rounded-lg p-2 text-zion-slate-light hover:bg-zion-purple/20 hover:text-white focus:outline-none focus:ring-2 focus:ring-zion-purple focus:ring-offset-2 focus:ring-offset-zion-slate-dark transition-all duration-300"
                aria-label="Account"
              >
                <User className="h-5 w-5" />
              </Link>

              {/* Cart */}
              <Link
                to="/marketplace"
                className="hidden md:inline-flex items-center justify-center rounded-lg p-2 text-zion-slate-light hover:bg-zion-purple/20 hover:text-white focus:outline-none focus:ring-2 focus:ring-zion-purple focus:ring-offset-2 focus:ring-offset-zion-slate-dark transition-all duration-300"
                aria-label="Marketplace"
              >
                <ShoppingBag className="h-5 w-5" />
              </Link>

              {/* Get Started CTA */}
              <Link
                to="/contact"
                className="hidden md:inline-flex items-center px-4 py-2 bg-gradient-to-r from-zion-cyan to-zion-blue text-white text-sm font-medium rounded-lg hover:from-zion-cyan-light hover:to-zion-blue-light transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/25"
              >
                Get Started
              </Link>

              {/* Mobile Menu Button */}
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-lg p-3 text-zion-slate-light hover:bg-zion-purple/20 hover:text-white focus:outline-none focus:ring-2 focus:ring-zion-purple focus:ring-offset-2 focus:ring-offset-zion-slate-dark lg:hidden transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle mobile menu"
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
          <div className="border-t border-zion-purple/20 bg-zion-slate-dark">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search services, solutions, documentation..."
                  className="w-full px-4 py-3 pl-12 pr-4 bg-zion-slate-darker border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-zion-slate-light" />
              </div>
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <MobileMenu onClose={closeMobileMenu} />
        )}
      </header>
    </>
  );
}