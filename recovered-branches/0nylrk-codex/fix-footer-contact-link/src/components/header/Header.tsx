
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
<<<<<<< HEAD
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
=======

export interface HeaderProps {_hideLogin?: boolean;
  customLogo?: string;
  customTheme?: {
    primaryColor: string;
    backgroundColor: string;
    textColor: string;};
}

export function Header(_{_hideLogin = false, _customLogo, _customTheme}: HeaderProps) {_const { user} = useAuth();
  const {_isWhitelabel, _primaryColor} = useWhitelabel();
  const _navigate = useNavigate();
  const [query, setQuery] = useState("");
  const _searchSuggestions = generateSearchSuggestions();
  
  // If we have a white-label tenant and no specific customTheme is provided,
  // use the tenant's primary color
  const _effectiveTheme = customTheme || (isWhitelabel ? {_primaryColor, _backgroundColor: '#0f172a', _// Default dark background
    textColor: '#ffffff', _// Default light text} : undefined);
  
  const _headerStyle = effectiveTheme ? {_backgroundColor: effectiveTheme.backgroundColor, _color: effectiveTheme.textColor, _borderColor: `${effectiveTheme.primaryColor}20`
  } : {};

  const _handleSubmit = (_e: React.FormEvent) => {_e.preventDefault();
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
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
<<<<<<< HEAD
      className=&quot;sticky top-0 z-50 w-full border-b border-zion-purple/20 bg-zion-blue-dark/90 backdrop-blur-md&quot;
      style={headerStyle}
    >
      <div className=&quot;container flex h-16 items-center px-4 sm:px-6&quot;>
        <Logo customLogo={customLogo} customColor={effectiveTheme?.primaryColor} />
=======
      className="sticky top-0 z-50 w-full border-b border-zion-purple/20 bg-zion-blue-dark/90 backdrop-blur-md"
      style={_headerStyle}
    >
      <div className="container flex h-16 items-center px-4 sm:px-6">
        <Logo customLogo={_customLogo} customColor={_effectiveTheme?.primaryColor} />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

        <div className=&quot;ml-6 flex-1&quot;>
          <MainNavigation />
        </div>
<<<<<<< HEAD
        <form onSubmit={handleSubmit} className=&quot;hidden md:block w-64 mx-4&quot;>
=======
        <form onSubmit={_handleSubmit} className="hidden md:block w-64 mx-4">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
          <EnhancedSearchInput
            value={_query}
            onChange={_setQuery}
            searchSuggestions={_searchSuggestions}
          />
        </form>

        <div className=&quot;flex items-center gap-2&quot;>
          <LanguageSelector />
          {_!hideLogin && <UserMenu />}
        </div>
      </div>
    </header>
  )
}
