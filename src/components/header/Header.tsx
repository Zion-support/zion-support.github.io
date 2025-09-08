import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { UserMenu } from './UserMenu';
import { LanguageSelector } from './LanguageSelector';
import { MainNavigation } from '@/layout/MainNavigation';
import { useAuth } from '@/hooks/useAuth';
import { useWhitelabel } from '@/context/WhitelabelContext';
import { EnhancedSearchInput } from "@/components/search/EnhancedSearchInput";
import { generateSearchSuggestions } from "@/data/marketplaceData";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { PointsBadge } from '@/components/loyalty/PointsBadge';

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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
=======
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

=======
  // Handle scroll effect
=======
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7

<<<<<<< HEAD
=======
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-2f34
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-445a
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-d816
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
=======
}

export function Header({ hideLogin = false, customLogo, customTheme }: HeaderProps) {
  const { user } = useAuth();
  const { isWhitelabel, primaryColor } = useWhitelabel();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const searchSuggestions = generateSearchSuggestions();
  
  // If we have a white-label tenant and no specific customTheme is provided,
  // use the tenant's primary color
  const effectiveTheme = customTheme || (isWhitelabel ? {
    primaryColor,
    backgroundColor: '#000000', // Default dark background
    textColor: '#ffffff', // Default light text
  } : undefined);
  
  const headerStyle = effectiveTheme ? {
    backgroundColor: effectiveTheme.backgroundColor,
    color: effectiveTheme.textColor,
    borderColor: `${effectiveTheme.primaryColor}20`
  } : {};

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
      setQuery("");
<<<<<<< HEAD
=======
<<<<<<< HEAD
      setIsSearchExpanded(false);
    }
  };
<<<<<<< HEAD

=======

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


  const toggleSearch = () => {
    setIsSearchExpanded(!isSearchExpanded);
    setIsMobileMenuOpen(false);
  };

  const toggleSidebar = () => {
    if (onMenuToggle) {
      onMenuToggle();
    }
  };

  const isActiveRoute = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <header 
      className="sticky top-0 z-50 w-full border-b border-zion-purple/20 bg-zion-blue-dark/90 backdrop-blur-md"
      style={headerStyle}
    >
      <div className="container flex h-16 items-center px-4 sm:px-6">
        <Logo customLogo={customLogo} customColor={effectiveTheme?.primaryColor} />

        <div className="ml-6 flex-1">
          <MainNavigation />
        </div>
        <form onSubmit={handleSubmit} className="hidden md:block w-64 mx-4">
          <EnhancedSearchInput
            value={query}
            onChange={setQuery}
            onSelectSuggestion={(text) => {
              navigate(`/search?q=${encodeURIComponent(text)}`);
              setQuery("");
            }}
            searchSuggestions={searchSuggestions}
          />
        </form>

        <div className="flex items-center gap-2">
          <PointsBadge />
          <LanguageSelector />
          {!hideLogin && <UserMenu />}
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

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleSearch}
              className="p-2 text-zion-cyan hover:bg-zion-purple/10 rounded-md transition-colors"
              aria-label="Toggle search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={toggleSidebar}
              className="p-2 text-zion-cyan hover:bg-zion-purple/10 rounded-md transition-colors"
              aria-label="Toggle sidebar menu"
            >
              <ChevronDown className="w-5 h-5" />
            </button>
=======
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
  const isActive = (path: string) => location.pathname === path;

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

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <button
                type="button"
                className="p-2 text-zion-slate-light hover:bg-zion-purple/20 hover:text-white rounded-lg transition-all duration-300"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                aria-label="Toggle search"
              >
                <X className="w-5 h-5" />
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
      )}

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
            </form>

            {/* Mobile Navigation */}
            <nav className="space-y-4 mb-6">
              {enhancedNavigationItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  onClick={closeMobileMenu}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-zion-purple/10 transition-colors group"
                >
                  <div className="text-zion-cyan group-hover:text-zion-purple transition-colors">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-white font-medium">{item.label}</span>
                      {item.badge && (
                        <Badge className="bg-zion-purple/20 text-zion-cyan border-zion-purple/30 text-xs">
                          {item.badge}
                        </Badge>
                      )}
                    </div>
                    <p className="text-zion-slate-light text-sm">{item.description}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-zion-slate-light group-hover:text-zion-cyan transition-colors" />
                </Link>
              ))}
            </nav>

            {/* Mobile Actions */}
            <div className="pt-4 border-t border-zion-blue-light">
              <LanguageSelector />
              {!hideLogin && <UserMenu />}
            </div>
          </div>
        )}
      </header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
    </>
=======
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-2f34
=======
      
      {/* Animated bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zion-purple to-transparent opacity-60"></div>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-099c
    </header>
=======
    </>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-d816
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
=======

            {/* Mobile Navigation */}
            <nav className="space-y-4">
              {navigationItems.map((item) => (
                <div key={item.label}>
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className="flex items-center justify-between w-full p-3 text-left text-zion-slate-light hover:text-zion-cyan transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      {item.icon}
                      <span className="font-medium">{item.label}</span>
                      {item.isNew && (
                        <Badge variant="secondary" className="bg-green-500/20 text-green-400 text-xs">
                          New
                        </Badge>
                      )}
                    </div>
                    <ChevronDown className={`h-4 w-4 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {activeDropdown === item.label && (
                    <div className="ml-6 mt-2 space-y-2">
                      {item.dropdown?.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.label}
                          to={dropdownItem.href}
                          onClick={closeMobileMenu}
                          className="flex items-center justify-between p-2 rounded-lg hover:bg-zion-purple/10 transition-colors"
                        >
                          <div className="flex items-center space-x-3">
                            <div className="text-lg">{dropdownItem.icon}</div>
                            <span className="text-zion-slate-light">
                              {dropdownItem.label}
                            </span>
                          </div>
                          {dropdownItem.price && (
                            <span className="text-zion-cyan font-medium text-sm">
                              {dropdownItem.price}
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-f9d2
>>>>>>> 7e44fe087b87ab51f22d8d86375661aa15d586d7
  );
}
