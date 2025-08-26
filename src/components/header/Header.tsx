
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { useWhitelabel } from '@/context/WhitelabelContext';
import { EnhancedSearchInput } from "@/components/search/EnhancedSearchInput";
import { generateSearchSuggestions } from "@/data/marketplaceData";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

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
  const [isScrolled, setIsScrolled] = useState(false);
  const searchSuggestions = generateSearchSuggestions();
  
  // If we have a white-label tenant and no specific customTheme is provided,
  // use the tenant's primary color
  const effectiveTheme = customTheme || (isWhitelabel ? {
    primaryColor,
    backgroundColor: '#000000', // Default dark background
    textColor: '#ffffff', // Default light text
  } : undefined);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const headerStyle = effectiveTheme ? {
    backgroundColor: effectiveTheme.backgroundColor,
    color: effectiveTheme.textColor,
    borderColor: `${effectiveTheme.primaryColor}20`
  } : {};

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
    <>
      {/* Animated Background */}
      <div className="fixed top-0 left-0 w-full h-20 bg-gradient-to-r from-zion-blue-dark via-zion-purple-dark to-zion-blue-dark opacity-90 z-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,113,242,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_30%,rgba(34,221,210,0.1)_50%,transparent_70%)] animate-pulse"></div>
      </div>

      <header 
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-zion-blue-dark/95 backdrop-blur-xl border-b border-zion-purple/30 shadow-2xl shadow-zion-purple/20' 
            : 'bg-transparent'
        }`}
        style={headerStyle}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-zion-blue to-zion-purple rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">Z</span>
              </div>
              <span className="text-white font-bold text-xl hidden sm:block">Zion Tech Group</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/services" className="text-white hover:text-zion-blue transition-colors">
                Services
              </Link>
              <Link to="/ai-solutions" className="text-white hover:text-zion-blue transition-colors">
                AI Solutions
              </Link>
              <Link to="/about" className="text-white hover:text-zion-blue transition-colors">
                About
              </Link>
              <Link to="/contact" className="text-white hover:text-zion-blue transition-colors">
                Contact
              </Link>
            </nav>

            {/* Search Bar */}
            <div className="hidden lg:flex flex-1 max-w-md mx-8">
              <EnhancedSearchInput
                value={query}
                onChange={setQuery}
                onSubmit={handleSubmit}
                suggestions={searchSuggestions}
                placeholder="Search services, solutions, and more..."
                className="w-full"
              />
            </div>

            {/* User Actions */}
            <div className="flex items-center space-x-4">
              {!hideLogin && !user ? (
                <>
                  <Button
                    variant="ghost"
                    className="text-white hover:bg-white/10"
                    onClick={() => navigate('/login')}
                  >
                    Login
                  </Button>
                  <Button
                    className="bg-gradient-to-r from-zion-blue to-zion-purple hover:from-zion-blue-dark hover:to-zion-purple-dark text-white"
                    onClick={() => navigate('/signup')}
                  >
                    Get Started
                  </Button>
                </>
              ) : user ? (
                <div className="flex items-center space-x-2">
                  <span className="text-white text-sm hidden sm:block">
                    Welcome, {user.name || user.email}
                  </span>
                  <Button
                    variant="ghost"
                    className="text-white hover:bg-white/10"
                    onClick={() => navigate('/dashboard')}
                  >
                    Dashboard
                  </Button>
                </div>
              ) : null}

              {/* Mobile Menu Button */}
              <button
                className="md:hidden text-white p-2"
                onClick={toggleMobileMenu}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-zion-blue-dark/95 backdrop-blur-xl border-b border-zion-purple/30">
              <div className="px-4 py-6 space-y-4">
                {/* Mobile Search */}
                <div className="mb-4">
                  <EnhancedSearchInput
                    value={query}
                    onChange={setQuery}
                    onSubmit={handleSubmit}
                    suggestions={searchSuggestions}
                    placeholder="Search services..."
                    className="w-full"
                  />
                </div>

                {/* Mobile Navigation */}
                <nav className="space-y-4">
                  <Link 
                    to="/services" 
                    className="block text-white hover:text-zion-blue transition-colors py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Services
                  </Link>
                  <Link 
                    to="/ai-solutions" 
                    className="block text-white hover:text-zion-blue transition-colors py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    AI Solutions
                  </Link>
                  <Link 
                    to="/about" 
                    className="block text-white hover:text-zion-blue transition-colors py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    About
                  </Link>
                  <Link 
                    to="/contact" 
                    className="block text-white hover:text-zion-blue transition-colors py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </nav>

                {/* Mobile User Actions */}
                {!hideLogin && !user && (
                  <div className="pt-4 border-t border-zion-purple/30 space-y-3">
                    <Button
                      variant="ghost"
                      className="w-full text-white hover:bg-white/10"
                      onClick={() => {
                        navigate('/login');
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      Login
                    </Button>
                    <Button
                      className="w-full bg-gradient-to-r from-zion-blue to-zion-purple hover:from-zion-blue-dark hover:to-zion-purple-dark text-white"
                      onClick={() => {
                        navigate('/signup');
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      Get Started
                    </Button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}
