
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
<<<<<<< HEAD
import { useState } from "react";
<<<<<<< HEAD
import { FuturisticBackground } from '@/components/ui/FuturisticBackground';
=======
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles } from "lucide-react";
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-8757
=======
import { Menu, X, Search as SearchIcon, Sparkles } from "lucide-react";
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-4af2

export interface HeaderProps {
  hideLogin?: boolean;
  customLogo?: string;
  customTheme?: {
    primaryColor: string;
    backgroundColor: string;
    textColor: string;
  };
}

export function Header({ hideLogin = false, customLogo, customTheme }: HeaderProps) {
  const { user } = useAuth();
  const { isWhitelabel, primaryColor } = useWhitelabel();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
<<<<<<< HEAD
=======
  const [isScrolled, setIsScrolled] = useState(false);
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-4af2
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

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
      setQuery("");
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <>
      <FuturisticBackground variant="grid" intensity="low" className="opacity-30" />
      <header 
        className="sticky top-0 z-50 w-full border-b border-zion-purple/20 bg-zion-blue-dark/95 backdrop-blur-xl relative overflow-hidden"
        style={headerStyle}
      >
        {/* Futuristic header accent */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zion-cyan/10 to-transparent opacity-50" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zion-cyan to-transparent" />
        
        <div className="container flex h-16 items-center px-4 sm:px-6 relative z-10">
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
=======
    <header 
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      className="sticky top-0 z-50 w-full border-b border-zion-purple/20 bg-zion-blue-dark/95 backdrop-blur-lg shadow-2xl shadow-zion-purple/10"
=======
      className="sticky top-0 z-50 w-full border-b border-zion-purple/20 bg-gradient-to-r from-zion-blue-dark/95 via-zion-purple-dark/95 to-zion-slate-dark/95 backdrop-blur-md shadow-lg shadow-zion-purple/10"
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-8757
=======
      className="sticky top-0 z-50 w-full border-b border-zion-purple/20 bg-gradient-to-r from-zion-blue-dark/95 via-zion-slate-dark/95 to-zion-blue-dark/95 backdrop-blur-xl shadow-2xl shadow-zion-purple/10"
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-32be
=======
      className="sticky top-0 z-50 w-full border-b border-zion-purple/20 bg-zion-blue-dark/90 backdrop-blur-md neon-pulse"
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-5db4
      style={headerStyle}
    >
      {/* Animated background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
      
      {/* Glowing border effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zion-purple/10 to-transparent opacity-50" />
      
      <div className="container flex h-16 items-center px-4 sm:px-6 relative z-10">
        <Logo customLogo={customLogo} customColor={effectiveTheme?.primaryColor} />

        {/* Desktop Navigation */}
        <div className="ml-6 flex-1 hidden lg:block">
          <MainNavigation />
        </div>
<<<<<<< HEAD
        
=======

        {/* Search Bar */}
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-8757
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
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-5241

<<<<<<< HEAD
          <div className="flex items-center gap-2">
            <LanguageSelector />
            {!hideLogin && <UserMenu />}
          </div>
        </div>
<<<<<<< HEAD
        
        {/* Floating navigation indicators */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-1">
          <div className="w-2 h-1 bg-zion-cyan rounded-full animate-pulse" />
          <div className="w-2 h-1 bg-zion-purple rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
          <div className="w-2 h-1 bg-zion-cyan rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
        </div>
      </header>
    </>
=======
      </div>
      
      {/* Animated Header Border */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zion-cyan to-transparent opacity-60"></div>
=======
        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <Button 
            asChild 
            variant="outline" 
            className="border-zion-purple/30 text-zion-cyan hover:bg-zion-purple/10 hover:border-zion-purple/50 transition-all duration-300"
          >
            <Link to="/pricing">
              <Sparkles className="h-4 w-4 mr-2" />
              Pricing
            </Link>
          </Button>
          <LanguageSelector />
          {!hideLogin && <UserMenu />}
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden ml-auto">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleMobileMenu}
            className="text-zion-cyan hover:bg-zion-purple/10"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
<<<<<<< HEAD

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-zion-purple/20 bg-zion-slate-dark/95 backdrop-blur-md">
          <div className="container px-4 py-4">
            {/* Mobile Search */}
            <form onSubmit={handleSubmit} className="mb-4">
=======
    <>
      <header 
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-zion-blue-dark/95 backdrop-blur-xl border-b border-zion-purple/30 shadow-2xl shadow-zion-purple/20' 
            : 'bg-zion-blue-dark/90 backdrop-blur-md border-b border-zion-purple/20'
        }`}
        style={headerStyle}
      >
        <div className="container flex h-16 items-center px-4 sm:px-6">
          <Logo customLogo={customLogo} customColor={effectiveTheme?.primaryColor} />

          {/* Desktop Navigation */}
          <div className="ml-6 flex-1 hidden lg:block">
            <MainNavigation />
          </div>

          {/* Search Bar */}
          <form onSubmit={handleSubmit} className="hidden md:block w-80 mx-6">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <EnhancedSearchInput
                value={query}
                onChange={setQuery}
                onSelectSuggestion={(text) => {
                  navigate(`/search?q=${encodeURIComponent(text)}`);
                  setQuery("");
                }}
                searchSuggestions={searchSuggestions}
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <SearchIcon className="h-4 w-4 text-zion-slate-light" />
              </div>
            </div>
          </form>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            {/* AI Assistant Button */}
            <button className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-lg bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border border-zion-purple/30 text-zion-cyan hover:from-zion-purple/30 hover:to-zion-cyan/30 transition-all duration-300 group">
              <Sparkles className="h-4 w-4 group-hover:animate-pulse" />
              <span className="text-sm font-medium">AI Assistant</span>
            </button>

            <LanguageSelector />
            {!hideLogin && <UserMenu />}

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 rounded-lg border border-zion-purple/30 text-zion-cyan hover:bg-zion-purple/10 transition-colors"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="lg:hidden px-4 pb-4">
          <form onSubmit={handleSubmit}>
            <div className="relative">
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-4af2
              <EnhancedSearchInput
                value={query}
                onChange={setQuery}
                onSelectSuggestion={(text) => {
                  navigate(`/search?q=${encodeURIComponent(text)}`);
                  setQuery("");
<<<<<<< HEAD
                  setIsMobileMenuOpen(false);
                }}
                searchSuggestions={searchSuggestions}
              />
            </form>

            {/* Mobile Navigation */}
            <nav className="mb-4">
=======
                }}
                searchSuggestions={searchSuggestions}
                placeholder="Search services, talent, equipment..."
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                <SearchIcon className="h-4 w-4 text-zion-slate-light" />
              </div>
            </div>
          </form>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-zion-blue-dark/95 backdrop-blur-xl">
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center p-4 border-b border-zion-purple/30">
              <Logo customLogo={customLogo} customColor={effectiveTheme?.primaryColor} />
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-lg border border-zion-purple/30 text-zion-cyan hover:bg-zion-purple/10"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <nav className="flex-1 p-4">
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-4af2
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/"
<<<<<<< HEAD
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-3 py-2 text-zion-cyan hover:bg-zion-purple/10 rounded-md transition-colors"
=======
                    onClick={toggleMobileMenu}
                    className="block px-4 py-3 rounded-lg text-white hover:bg-zion-purple/10 hover:text-zion-cyan transition-colors"
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-4af2
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
<<<<<<< HEAD
                    to="/marketplace"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-3 py-2 text-zion-cyan hover:bg-zion-purple/10 rounded-md transition-colors"
                  >
                    Marketplace
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-3 py-2 text-zion-cyan hover:bg-zion-purple/10 rounded-md transition-colors"
=======
                    to="/services"
                    onClick={toggleMobileMenu}
                    className="block px-4 py-3 rounded-lg text-white hover:bg-zion-purple/10 hover:text-zion-cyan transition-colors"
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-4af2
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/talent"
<<<<<<< HEAD
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-3 py-2 text-zion-cyan hover:bg-zion-purple/10 rounded-md transition-colors"
=======
                    onClick={toggleMobileMenu}
                    className="block px-4 py-3 rounded-lg text-white hover:bg-zion-purple/10 hover:text-zion-cyan transition-colors"
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-4af2
                  >
                    Talent
                  </Link>
                </li>
                <li>
                  <Link
                    to="/equipment"
<<<<<<< HEAD
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-3 py-2 text-zion-cyan hover:bg-zion-purple/10 rounded-md transition-colors"
=======
                    onClick={toggleMobileMenu}
                    className="block px-4 py-3 rounded-lg text-white hover:bg-zion-purple/10 hover:text-zion-cyan transition-colors"
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-4af2
                  >
                    Equipment
                  </Link>
                </li>
                <li>
                  <Link
                    to="/community"
<<<<<<< HEAD
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-3 py-2 text-zion-cyan hover:bg-zion-purple/10 rounded-md transition-colors"
=======
                    onClick={toggleMobileMenu}
                    className="block px-4 py-3 rounded-lg text-white hover:bg-zion-purple/10 hover:text-zion-cyan transition-colors"
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-4af2
                  >
                    Community
                  </Link>
                </li>
                <li>
                  <Link
<<<<<<< HEAD
                    to="/pricing"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-3 py-2 text-zion-cyan hover:bg-zion-purple/10 rounded-md transition-colors"
                  >
                    Pricing
=======
                    to="/ai-content-generator"
                    onClick={toggleMobileMenu}
                    className="block px-4 py-3 rounded-lg text-white hover:bg-zion-purple/10 hover:text-zion-cyan transition-colors"
                  >
                    AI Content Generator
                  </Link>
                </li>
                <li>
                  <Link
                    to="/cybersecurity-suite"
                    onClick={toggleMobileMenu}
                    className="block px-4 py-3 rounded-lg text-white hover:bg-zion-purple/10 hover:text-zion-cyan transition-colors"
                  >
                    Cybersecurity Suite
                  </Link>
                </li>
                <li>
                  <Link
                    to="/cloud-optimizer"
                    onClick={toggleMobileMenu}
                    className="block px-4 py-3 rounded-lg text-white hover:bg-zion-purple/10 hover:text-zion-cyan transition-colors"
                  >
                    Cloud Cost Optimizer
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-4af2
                  </Link>
                </li>
                {user && (
                  <li>
                    <Link
                      to="/dashboard"
<<<<<<< HEAD
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-3 py-2 text-zion-cyan hover:bg-zion-purple/10 rounded-md transition-colors"
=======
                      onClick={toggleMobileMenu}
                      className="block px-4 py-3 rounded-lg text-white hover:bg-zion-purple/10 hover:text-zion-cyan transition-colors"
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-4af2
                    >
                      Dashboard
                    </Link>
                  </li>
                )}
              </ul>
            </nav>

<<<<<<< HEAD
            {/* Mobile Actions */}
            <div className="flex flex-col gap-2">
              <Button 
                asChild 
                className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
              >
                <Link to="/pricing" onClick={() => setIsMobileMenuOpen(false)}>
                  <Sparkles className="h-4 w-4 mr-2" />
                  View Pricing
                </Link>
              </Button>
              <div className="flex items-center justify-between">
                <LanguageSelector />
                {!hideLogin && <UserMenu />}
=======
            <div className="p-4 border-t border-zion-purple/30">
              <div className="flex flex-col gap-3">
                <button className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-gradient-to-r from-zion-purple to-zion-cyan text-white font-medium hover:from-zion-purple-light hover:to-zion-cyan-light transition-all duration-300">
                  <Sparkles className="h-4 w-4" />
                  AI Assistant
                </button>
                {!user && (
                  <div className="flex gap-2">
                    <Link
                      to="/login"
                      onClick={toggleMobileMenu}
                      className="flex-1 px-4 py-2 text-center rounded-lg border border-zion-purple/30 text-zion-cyan hover:bg-zion-purple/10 transition-colors"
                    >
                      Login
                    </Link>
                    <Link
                      to="/signup"
                      onClick={toggleMobileMenu}
                      className="flex-1 px-4 py-2 text-center rounded-lg bg-zion-purple text-white hover:bg-zion-purple-dark transition-colors"
                    >
                      Sign Up
                    </Link>
                  </div>
                )}
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-4af2
              </div>
            </div>
          </div>
        </div>
      )}
<<<<<<< HEAD
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-8757
=======
      
      {/* Neon glow effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zion-cyan to-transparent opacity-60" />
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-32be
    </header>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-5241
=======
    </>
>>>>>>> origin/cursor/enhance-app-with-new-services-and-futuristic-design-4af2
  );
}
