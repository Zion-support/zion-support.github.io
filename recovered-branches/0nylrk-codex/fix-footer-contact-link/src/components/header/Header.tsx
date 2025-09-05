
import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { UserMenu } from './UserMenu';
import { LanguageSelector } from './LanguageSelector';
import { MainNavigation } from '@/layout/MainNavigation';
import { useAuth } from '@/hooks/useAuth';
import { useWhitelabel } from '@/context/WhitelabelContext';
import { EnhancedSearchInput } from &quot;@/components/search/EnhancedSearchInput&quot;;
import { generateSearchSuggestions } from &quot;@/data/marketplaceData&quot;;
import { useNavigate } from &quot;react-router-dom&quot;;
import { useState } from &quot;react&quot;;

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
  const [query, setQuery] = useState("&quot;);
  const searchSuggestions = generateSearchSuggestions();
  
  // If we have a white-label tenant and no specific customTheme is provided,
  // use the tenant's primary color
  const effectiveTheme = customTheme || (isWhitelabel ? {
    primaryColor,
    backgroundColor: '#0f172a', // Default dark background
    textColor: '#ffffff', // Default light text
  } : undefined);
  
  const headerStyle = effectiveTheme ? {
    backgroundColor: effectiveTheme.backgroundColor,
    color: effectiveTheme.textColor,
    borderColor: `${effectiveTheme.primaryColor}20`
  } : {};

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
      setQuery("&quot;);
    }
  };
  
  return (
    <header 
      className=&quot;sticky top-0 z-50 w-full border-b border-zion-purple/20 bg-zion-blue-dark/90 backdrop-blur-md&quot;
      style={headerStyle}
    >
      <div className=&quot;container flex h-16 items-center px-4 sm:px-6&quot;>
        <Logo customLogo={customLogo} customColor={effectiveTheme?.primaryColor} />

        <div className=&quot;ml-6 flex-1&quot;>
          <MainNavigation />
        </div>
        <form onSubmit={handleSubmit} className=&quot;hidden md:block w-64 mx-4&quot;>
          <EnhancedSearchInput
            value={query}
            onChange={setQuery}
            searchSuggestions={searchSuggestions}
          />
        </form>

        <div className=&quot;flex items-center gap-2&quot;>
          <LanguageSelector />
          {!hideLogin && <UserMenu />}
        </div>
      </div>
    </header>
  );
}
