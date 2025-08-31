import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MainNavigation } from './MainNavigation';
import { MobileMenu } from './MobileMenu';
import { Logo } from './Logo';
import { Menu, X, Search, User, ShoppingBag, Bell, Mail, Phone, MapPin } from 'lucide-react';

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
              <div className="text-zion-slate-light hover:text-zion-cyan transition-colors">
                <a href="mailto:kleber@ziontechgroup.com" className="flex items-center">
                  <Mail className="w-3 h-3 mr-1" />
                  kleber@ziontechgroup.com
                </a>
              </div>
              <div className="text-zion-slate-light hover:text-zion-cyan transition-colors hidden sm:block">
                <a href="tel:+13024640950" className="flex items-center">
                  <Phone className="w-3 h-3 mr-1" />
                  +1 (302) 464-0950
                </a>
              </div>
              <div className="text-zion-slate-light hover:text-zion-cyan transition-colors hidden md:block">
                <a href="https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <MapPin className="w-3 h-3 mr-1" />
                  Middletown, DE
                </a>
              </div>
              <div className="text-zion-slate-light hidden lg:block">
                📍 <span>364 E Main St STE 1008, Middletown DE 19709</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/support" className="text-zion-slate-light hover:text-zion-cyan transition-colors">
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
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <button
                type="button"
                className="p-2 text-zion-slate-light hover:bg-zion-purple/20 hover:text-white rounded-lg transition-all duration-300"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                aria-label="Toggle search"
              >
                <Search className="h-5 w-5" />
              </button>

              {/* User Menu */}
              <div className="relative">
                <button
                  type="button"
                  className="p-2 text-zion-slate-light hover:bg-zion-purple/20 hover:text-white rounded-lg transition-all duration-300"
                  aria-label="User menu"
                >
                  <User className="h-5 w-5" />
                </button>
              </div>

              {/* CTA Button */}
              <Link
                to="/contact"
                className="hidden sm:inline-flex items-center px-4 py-2 bg-zion-cyan hover:bg-zion-cyan/80 text-zion-slate-dark font-semibold rounded-lg transition-all duration-300"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="border-t border-zion-purple/20 bg-zion-slate-dark py-4">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-zion-slate-light" />
                <input
                  type="text"
                  placeholder="Search for services, solutions, or information..."
                  className="w-full pl-10 pr-4 py-3 bg-zion-slate-darker border border-zion-purple/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
    </>
  );
}