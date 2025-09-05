
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react',
import { Link } from 'react-router-dom',
import { Logo } from './Logo',
import { UserMenu } from './UserMenu',
import { LanguageSelector } from './LanguageSelector',
import { MainNavigation } from '@/layout/MainNavigation',
import { useAuth } from '@/hooks/useAuth',
import { useWhitelabel } from '@/context/WhitelabelContext',
import { EnhancedSearchInput } from "@/components/search/EnhancedSearchInput",
import { generateSearchSuggestions } from "@/data/marketplaceData",
import { useNavigate } from "react-router-dom",
import { useState } from "react",
=======
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

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
export interface HeaderProps {
  hideLogin?: boolean,
  customLogo?: string,
  customTheme?: {
    primaryColor: string,
    backgroundColor: string,
    textColor: string
  }
}

export function Header({ hideLogin = false, customLogo, customTheme }: HeaderProps) {
<<<<<<< HEAD
  const { user } = useAuth(),
  const { isWhitelabel, primaryColor } = useWhitelabel(),
  const navigate = useNavigate(),
  const [query, setQuery] = useState(""),
  const searchSuggestions = generateSearchSuggestions(),
=======
  const { user } = useAuth();
  const { isWhitelabel, primaryColor } = useWhitelabel();
  const navigate = useNavigate();
  const [query, setQuery] = useState("&quot;);
  const searchSuggestions = generateSearchSuggestions();
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  
  // If we have a white-label tenant and no specific customTheme is provided,
  // use the tenant's primary color
  const effectiveTheme = customTheme || (isWhitelabel ? {
    primaryColor,
    backgroundColor: '#0f172a', // Default dark background
    textColor: '#ffffff', // Default light text
  } : undefined),
  
  const headerStyle = effectiveTheme ? {
    backgroundColor: effectiveTheme.backgroundColor,
    color: effectiveTheme.textColor,
    borderColor: `${effectiveTheme.primaryColor}20`
  } : {},

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(),
    if (query.trim()) {
<<<<<<< HEAD
      navigate(`/search?q=${encodeURIComponent(query)}`),
      setQuery("")
=======
      navigate(`/search?q=${encodeURIComponent(query)}`);
      setQuery("&quot;);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }
  },
  
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
=======
import React from 'react',;
import { Link } from 'react-router-dom',;
import { Logo } from './Logo',;
import { UserMenu } from './UserMenu',;
import { LanguageSelector } from './LanguageSelector',;
import { MainNavigation } from '@/layout/MainNavigation',;
import { useAuth } from '@/hooks/useAuth',;
import { useWhitelabel } from '@/context/WhitelabelContext',;
import { EnhancedSearchInput } from "@/components/search/EnhancedSearchInput",;
import { generateSearchSuggestions } from "@/data/marketplaceData",;
import { useNavigate } from "react-router-dom",;
import { useState } from "react",;
export interface HeaderProps {;
  hideLogin?: boolean,;
  customLogo?: string,;
  customTheme?: {;
    primaryColor: string,;
    backgroundColor: string,;
    textColor: string;
  }
}
;
export function Header({ hideLogin = false, customLogo, customTheme }: HeaderProps) {;
  const { user } = useAuth(),;
  const { isWhitelabel, primaryColor } = useWhitelabel(),;
  const navigate = useNavigate(),;
  const [query, setQuery] = useState(""),;
  const searchSuggestions = generateSearchSuggestions(),;
  // If we have a white-label tenant and no specific customTheme is provided,;
  // use the tenant's primary color;
  const effectiveTheme = customTheme || (isWhitelabel ? {;
    primaryColor,;
    backgroundColor: '#0f172a', // Default dark background;
    textColor: '#ffffff', // Default light text;
  } : undefined),;
  const headerStyle = effectiveTheme ? {;
    backgroundColor: effectiveTheme.backgroundColor,;
    color: effectiveTheme.textColor,;
    borderColor: `${effectiveTheme.primaryColor}20`;
  } : {},;
  const handleSubmit = (e: React.FormEvent) => {;
    e.preventDefault(),;
    if (query.trim()) {;
      navigate(`/search?q=${encodeURIComponent(query)}`);
      setQuery("");
    }
  };
  return (;
    <header;
      className="sticky top-0 z-50 w-full border-b border-zion-purple/20 bg-zion-blue-dark/90 backdrop-blur-md";
      style={headerStyle}
    >;
      <div className="container flex h-16 items-center px-4 sm:px-6">;
        <Logo customLogo={customLogo} customColor={effectiveTheme?.primaryColor} />;
        <div className="ml-6 flex-1">;
          <MainNavigation />;
        </div>;
        <form onSubmit={handleSubmit} className="hidden md:block w-64 mx-4">;
          <EnhancedSearchInput;
            value={query}
            onChange={setQuery}
            searchSuggestions={searchSuggestions}
          />;
        </form>;
        <div className="flex items-center gap-2">;
          <LanguageSelector />;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
          {!hideLogin && <UserMenu />}
        </div>;
      </div>;
    </header>;
  );
}
;