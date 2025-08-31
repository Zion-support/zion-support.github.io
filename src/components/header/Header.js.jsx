import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from "./Logo";
import { UserMenu } from "./UserMenu";
import { LanguageSelector } from "./LanguageSelector";
import { MainNavigation } from "./MainNavigation";
import { MobileMenu } from "./MobileMenu";
import { useAuth } from '@/hooks/useAuth';
import { useWhitelabel } from '@/context/WhitelabelContext';
import { EnhancedSearchInput } from "@/components/search/EnhancedSearchInput";
import { generateSearchSuggestions } from "@/data/marketplaceData";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Sparkles } from "lucide-react";
import { Search as SearchIcon } from "lucide-react";

export function Header({ hideLogin = false, customLogo, customTheme }) {
  const { user } = useAuth();
  const { isWhitelabel, primaryColor } = useWhitelabel();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const searchSuggestions = generateSearchSuggestions();

  // If we have a white-label tenant and no specific customTheme is provided,
  // use the tenant's primary color
  const effectiveTheme = customTheme || (isWhitelabel ? {
    primaryColor,
    backgroundColor: '#000000', // Default dark background
    textColor: '#ffffff', // Default light text
  } : null);

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

  const handleSubmit = (e) => {
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
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-zion-blue-dark/95 backdrop-blur-xl border-b border-zion-purple/30 shadow-2xl shadow-zion-purple/20'
          : 'bg-zion-blue-dark/90 backdrop-blur-md border-b border-zion-purple/20'
      }`} 
      style={headerStyle}
    >
      {/* Animated background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"/>
      
      {/* Glowing border effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zion-purple/10 to-transparent opacity-50"/>
      
      <div className="container flex h-16 items-center px-4 sm:px-6 relative z-10">
        <Logo customLogo={customLogo} customColor={effectiveTheme?.primaryColor}/>

        {/* Desktop Navigation */}
        <div className="ml-6 flex-1 hidden md:block">
          <MainNavigation />
        </div>

        {/* Desktop Search */}
        <form onSubmit={handleSubmit} className="hidden lg:block w-64 mx-4">
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

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <Button asChild variant="outline" className="border-zion-purple/30 text-zion-cyan hover:bg-zion-purple/10 hover:border-zion-purple/50 transition-all duration-300">
            <Link to="/pricing">
              <Sparkles className="h-4 w-4 mr-2"/>
              Pricing
            </Link>
          </Button>
          
          <div className="flex items-center gap-2">
            <LanguageSelector />
            {!hideLogin && <UserMenu />}
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden p-2 text-zion-cyan hover:text-white transition-colors"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Animated Header Border */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zion-cyan to-transparent opacity-60"></div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <MobileMenu 
          className="md:hidden" 
          isOpen={isMobileMenuOpen} 
          onClose={() => setIsMobileMenuOpen(false)}
        />
      )}
    </header>
  );
}
