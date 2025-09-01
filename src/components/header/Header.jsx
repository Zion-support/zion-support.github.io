import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { UserMenu } from './UserMenu';
import { LanguageSelector } from './LanguageSelector';
import { MainNavigation } from './MainNavigation';
import { MobileMenu } from './MobileMenu';
import { useAuth } from '../../hooks/useAuth';
import { useWhitelabel } from '../../context/WhitelabelContext';
import { EnhancedSearchInput } from '../search/EnhancedSearchInput';
import { generateSearchSuggestions } from '../../data/marketplaceData';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/Button';
import { Menu, X, Sparkles, Phone } from 'lucide-react';
import { Search as SearchIcon } from 'lucide-react';

export function Header({ hideLogin = false, customLogo, customTheme }) {
  const { user } = useAuth();
  const { isWhitelabel, primaryColor } = useWhitelabel();
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const searchSuggestions = generateSearchSuggestions();

  // If we have a white-label tenant and no specific customTheme is provided,
  // use the tenant's primary color
  const effectiveTheme =
    customTheme ||
    (isWhitelabel
      ? {
          primaryColor,
          backgroundColor: '#000000', // Default dark background
          textColor: '#ffffff', // Default light text
        }
      : undefined);

  const headerStyle = effectiveTheme
    ? {
        backgroundColor: effectiveTheme.backgroundColor,
        color: effectiveTheme.textColor,
        borderColor: `${effectiveTheme.primaryColor}20`,
      }
    : {};

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
      setQuery('');
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
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />

      {/* Glowing border effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zion-purple/10 to-transparent opacity-50" />

      <div className="container flex h-16 items-center px-4 sm:px-6 relative z-10">
        <Logo
          customLogo={customLogo}
          customColor={effectiveTheme?.primaryColor}
        />

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
                setQuery(text);
                navigate(`/search?q=${encodeURIComponent(text)}`);
              }}
              suggestions={searchSuggestions}
              placeholder="Search services, solutions..."
              className="relative z-10"
            />
          </div>
        </form>

        {/* Right side actions */}
        <div className="flex items-center space-x-4">
          {/* Contact button */}
          <Button
            variant="ghost"
            size="sm"
            className="hidden sm:flex items-center space-x-2 text-zion-cyan hover:text-zion-cyan-light transition-colors"
            onClick={() => navigate('/contact')}
          >
            <Phone className="w-4 h-4" />
            <span>Contact</span>
          </Button>

          {/* User menu or login */}
          {!hideLogin && (
            <div className="flex items-center space-x-2">
              {user ? (
                <UserMenu user={user} />
              ) : (
                <>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => navigate('/login')}
                    className="text-zion-slate-light hover:text-zion-cyan transition-colors"
                  >
                    Login
                  </Button>
                  <Button
                    size="sm"
                    onClick={() => navigate('/signup')}
                    className="bg-gradient-to-r from-zion-purple to-zion-cyan hover:from-zion-purple/90 hover:to-zion-cyan/90 text-white transition-all duration-200"
                  >
                    Get Started
                  </Button>
                </>
              )}
            </div>
          )}

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        user={user}
      />
    </header>
  );
}
