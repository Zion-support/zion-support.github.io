import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Search, Menu, X, Sun, Moon } from 'lucide-react';
import Logo from '../components/Logo';
import ResponsiveNavigation from '../components/ResponsiveNavigation';
import SearchBar from '../components/SearchBar';
import UserMenu from '../components/UserMenu';

export default function PrimaryNav() {
  const router = useRouter();
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    // Add theme switching logic here
  };

  const handleSearch = (query: string) => {
    if (query.trim()) {
      router.push(`/search/${encodeURIComponent(query)}`);
    }
  };

  const handleSuggestionSelect = (suggestion: any) => {
    if (suggestion.id) {
      router.push(`/marketplace/listing/${suggestion.id}`);
    } else if (suggestion.type === 'doc' && suggestion.slug) {
      router.push(suggestion.slug);
    } else if (suggestion.type === 'page') {
      router.push(suggestion.slug);
    }
  };

  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-primary/20 bg-card/90 backdrop-blur-md"
      role="navigation"
      data-testid="header"
    >
      <div className="container flex flex-wrap items-center justify-between gap-2 min-h-16 px-4 sm:px-6">
        <Logo />
        
        {/* Navigation - hidden on mobile, shown on desktop */}
        <div className="hidden md:block order-1 flex-shrink-0">
          <ResponsiveNavigation />
        </div>

        {/* Search Bar - hidden on mobile, shown on desktop */}
        <div className="hidden md:block order-2 flex-1 max-w-md mx-4">
          <SearchBar
            onSearch={handleSearch}
            onSelectSuggestion={handleSuggestionSelect}
            placeholder="Search products, docs, or pages..."
          />
        </div>

        {/* User Menu - hidden on mobile, shown on desktop */}
        <div className="hidden md:block order-3 flex-shrink-0">
          <UserMenu />
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden order-3 p-2 rounded-md hover:bg-accent"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-primary/20 bg-card">
          <div className="container px-4 py-4 space-y-4">
            <ResponsiveNavigation />
            <SearchBar
              onSearch={handleSearch}
              onSelectSuggestion={handleSuggestionSelect}
              placeholder="Search..."
            />
            <UserMenu />
          </div>
        </div>
      )}
    </header>
  );
}