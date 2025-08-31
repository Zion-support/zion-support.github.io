import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MainNavigation } from './MainNavigation';
import { MobileMenu } from './MobileMenu';
import { Logo } from './Logo';
import { Menu, X, Search, Bell, User, ShoppingBag } from 'lucide-react';
import { SearchFunctionality } from '../SearchFunctionality';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  const toggleSearch = () => setShowSearch(!showSearch);

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
              <div className="text-zion-slate-light hidden lg:block">
                📍 <span>364 E Main St STE 1008, Middletown DE 19709</span>
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
              <Link to="/contact" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                Contact
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

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="lg:hidden inline-flex items-center justify-center rounded-lg p-2 text-zion-slate-light hover:bg-zion-purple/20 hover:text-white focus:outline-none focus:ring-2 focus:ring-zion-purple focus:ring-offset-2 focus:ring-offset-zion-slate-dark transition-all duration-300"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <button
                type="button"
                className="hidden md:inline-flex items-center justify-center rounded-lg p-2 text-zion-slate-light hover:bg-zion-purple/20 hover:text-white focus:outline-none focus:ring-2 focus:ring-zion-purple focus:ring-offset-2 focus:ring-offset-zion-slate-dark transition-all duration-300"
                onClick={toggleSearch}
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
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <MobileMenu onClose={closeMobileMenu} />
        )}

        {/* Search Functionality */}
        <SearchFunctionality 
          showSearch={showSearch} 
          onClose={() => setShowSearch(false)} 
        />
      </header>
    </>
  );
}